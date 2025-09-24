import React from 'react';
import { storage, performance, brolostack } from './brolostack';

export interface RenderOptions {
  mode: 'ssg' | 'ssr' | 'hybrid';
  cache?: boolean;
  preload?: boolean;
  ttl?: number;
}

export interface PageData {
  title: string;
  description: string;
  content: string;
  metadata: Record<string, any>;
  timestamp: number;
}

// SSG (Static Site Generation) routes
export const SSG_ROUTES = [
  '/',
  '/docs',
  '/docs/getting-started',
  '/docs/ai-framework',
  '/docs/devil-security',
  '/docs/websocket-framework',
  '/docs/cloud-integration',
  '/docs/framework-status'
];

// SSR (Server-Side Rendering) routes
export const SSR_ROUTES = [
  '/docs/getting-started-guide',
  '/docs/ai-framework-guide',
  '/docs/security-framework-guide',
  '/docs/websocket-framework-guide',
  '/docs/authentication-guide',
  '/docs/backend-integration-guide',
  '/docs/enterprise-features-guide',
  '/docs/environment-management-guide',
  '/docs/token-usage-control-guide',
  '/docs/browser-compatibility-guide',
  '/docs/brolostack-worker-guide',
  '/docs/framework-status-guide'
];

// Hybrid rendering system using Brolostack stores
export class HybridRenderer {
  private static instance: HybridRenderer;
  private cache = new Map<string, PageData>();
  private preloadQueue = new Set<string>();
  private brolostackStore: any;

  static getInstance(): HybridRenderer {
    if (!HybridRenderer.instance) {
      HybridRenderer.instance = new HybridRenderer();
    }
    return HybridRenderer.instance;
  }

  constructor() {
    // Initialize Brolostack store for rendering
    try {
      this.brolostackStore = brolostack.stores?.get('rendering') || 
                           brolostack.createStore?.('rendering', {
                             pages: new Map(),
                             cache: new Map(),
                             preloadQueue: new Set()
                           });
    } catch (error) {
      console.warn('Failed to initialize Brolostack store for rendering:', error);
    }
  }

  // Determine rendering mode for a route
  getRenderMode(route: string): 'ssg' | 'ssr' | 'hybrid' {
    if (SSG_ROUTES.includes(route)) {
      return 'ssg';
    }
    if (SSR_ROUTES.includes(route)) {
      return 'ssr';
    }
    return 'hybrid';
  }

  // Generate static content for SSG routes
  async generateStaticContent(route: string): Promise<PageData> {
    const cached = await storage.cache.get(`ssg:${route}`);
    if (cached) {
      return cached;
    }

    const content = await this.fetchPageContent(route);
    const pageData: PageData = {
      title: content.title || 'Brolostack',
      description: content.description || 'Local-first full-stack framework',
      content: content.html || '',
      metadata: content.metadata || {},
      timestamp: Date.now()
    };

    // Cache for 24 hours
    await storage.cache.set(`ssg:${route}`, pageData, 24 * 60 * 60 * 1000);
    return pageData;
  }

  // Render server-side content for SSR routes
  async renderServerSide(route: string, props: any = {}): Promise<PageData> {
    const cacheKey = `ssr:${route}:${JSON.stringify(props)}`;
    const cached = await storage.cache.get(cacheKey);
    if (cached) {
      return cached;
    }

    const content = await this.fetchPageContent(route, props);
    const pageData: PageData = {
      title: content.title || 'Brolostack',
      description: content.description || 'Local-first full-stack framework',
      content: content.html || '',
      metadata: { ...content.metadata, ...props },
      timestamp: Date.now()
    };

    // Cache for 1 hour
    await storage.cache.set(cacheKey, pageData, 60 * 60 * 1000);
    return pageData;
  }

  // Hybrid rendering - combines SSG and SSR
  async renderHybrid(route: string, props: any = {}): Promise<PageData> {
    const mode = this.getRenderMode(route);
    
    switch (mode) {
      case 'ssg':
        return await this.generateStaticContent(route);
      case 'ssr':
        return await this.renderServerSide(route, props);
      default:
        // Hybrid mode - try SSG first, fallback to SSR
        try {
          return await this.generateStaticContent(route);
        } catch (error) {
          console.warn(`SSG failed for ${route}, falling back to SSR:`, error);
          return await this.renderServerSide(route, props);
        }
    }
  }

  // Fetch page content (simulated - in real implementation, this would fetch from API)
  private async fetchPageContent(route: string, _props: any = {}): Promise<any> {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 100));

    // Mock content based on route
    const contentMap: Record<string, any> = {
      '/': {
        title: 'Brolostack - Local-First Full-Stack Framework',
        description: 'Revolutionary local-first framework with zero server costs',
        html: '<div>Homepage content</div>',
        metadata: { type: 'homepage', priority: 1.0 }
      },
      '/docs': {
        title: 'Documentation - Brolostack Framework',
        description: 'Complete documentation for Brolostack framework',
        html: '<div>Documentation content</div>',
        metadata: { type: 'documentation', priority: 0.9 }
      },
      '/docs/getting-started': {
        title: 'Getting Started - Brolostack Framework',
        description: 'Learn how to get started with Brolostack',
        html: '<div>Getting started content</div>',
        metadata: { type: 'guide', priority: 0.8 }
      }
    };

    return contentMap[route] || {
      title: 'Brolostack',
      description: 'Local-first full-stack framework',
      html: '<div>Page content</div>',
      metadata: { type: 'page', priority: 0.5 }
    };
  }

  // Preload critical routes
  async preloadRoutes(routes: string[] = SSG_ROUTES.slice(0, 4)) {
    const preloadPromises = routes.map(async (route) => {
      if (this.preloadQueue.has(route)) return;
      
      this.preloadQueue.add(route);
      try {
        const content = await this.generateStaticContent(route);
        this.cache.set(route, content);
        await performance.cachePage(route, content);
      } catch (error) {
        console.warn(`Failed to preload ${route}:`, error);
      } finally {
        this.preloadQueue.delete(route);
      }
    });

    await Promise.allSettled(preloadPromises);
  }

  // Get cached content using Brolostack storage
  async getCachedContent(route: string): Promise<PageData | null> {
    // Check memory cache first
    if (this.cache.has(route)) {
      return this.cache.get(route)!;
    }

    // Check Brolostack store cache
    if (this.brolostackStore) {
      try {
        const storeData = this.brolostackStore.getState?.();
        if (storeData?.cache?.has(route)) {
          const cached = storeData.cache.get(route);
          this.cache.set(route, cached);
          return cached;
        }
      } catch (error) {
        console.warn('Failed to get from Brolostack store:', error);
      }
    }

    // Check persistent cache
    const cached = await storage.cache.get(`page:${route}`);
    if (cached) {
      this.cache.set(route, cached);
      return cached;
    }

    return null;
  }

  // Invalidate cache using Brolostack storage
  async invalidateCache(route?: string) {
    if (route) {
      this.cache.delete(route);
      
      // Invalidate Brolostack store cache
      if (this.brolostackStore) {
        try {
          const storeData = this.brolostackStore.getState?.();
          if (storeData?.cache) {
            storeData.cache.delete(route);
            this.brolostackStore.setState?.({ cache: storeData.cache });
          }
        } catch (error) {
          console.warn('Failed to invalidate Brolostack store cache:', error);
        }
      }
      
      // Invalidate persistent cache
      await storage.cache.set(`page:${route}`, null);
      await storage.cache.set(`ssg:${route}`, null);
      await storage.cache.set(`ssr:${route}`, null);
    } else {
      this.cache.clear();
      
      // Clear Brolostack store cache
      if (this.brolostackStore) {
        try {
          const storeData = this.brolostackStore.getState?.();
          if (storeData?.cache) {
            storeData.cache.clear();
            this.brolostackStore.setState?.({ cache: storeData.cache });
          }
        } catch (error) {
          console.warn('Failed to clear Brolostack store cache:', error);
        }
      }
      
      await storage.cache.clear();
    }
  }

  // Performance monitoring
  async trackRenderPerformance(route: string, startTime: number, mode: string) {
    const renderTime = Date.now() - startTime;
    await performance.trackPerformance('render_time', renderTime);
    await storage.analytics.track('render_performance', {
      route,
      mode,
      renderTime,
      timestamp: Date.now()
    });
  }
}

// Export singleton instance
export const hybridRenderer = HybridRenderer.getInstance();

// React hook for hybrid rendering
export function useHybridRender(route: string, props: any = {}) {
  const [data, setData] = React.useState<PageData | null>(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<Error | null>(null);

  React.useEffect(() => {
    let mounted = true;
    const startTime = Date.now();

    const render = async () => {
      try {
        setLoading(true);
        setError(null);

        // Try to get cached content first
        const cached = await hybridRenderer.getCachedContent(route);
        if (cached && mounted) {
          setData(cached);
          setLoading(false);
          return;
        }

        // Render new content
        const content = await hybridRenderer.renderHybrid(route, props);
        if (mounted) {
          setData(content);
          setLoading(false);
        }

        // Track performance
        await hybridRenderer.trackRenderPerformance(route, startTime, hybridRenderer.getRenderMode(route));
      } catch (err) {
        if (mounted) {
          setError(err as Error);
          setLoading(false);
        }
      }
    };

    render();

    return () => {
      mounted = false;
    };
  }, [route, JSON.stringify(props)]);

  return { data, loading, error };
}

// Preload function for critical routes
export async function preloadCriticalRoutes() {
  await hybridRenderer.preloadRoutes();
}

// Cache invalidation function
export async function invalidateRouteCache(route?: string) {
  await hybridRenderer.invalidateCache(route);
}

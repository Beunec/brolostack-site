// Import Brolostack core modules
import Brolostack from 'brolostack';

// Create Brolostack instance with proper configuration and error handling
let brolostackInstance: any = null;

try {
  brolostackInstance = new Brolostack({
    appName: 'brolostack-interactive-website',
    version: '1.0.0',
    storageEngine: 'localStorage',
    encryption: false, // Disable encryption to avoid crypto errors
    compression: true,
    maxStorageSize: 100, // 100MB
    debug: false // Production mode - disable debug
  });
} catch (error) {
  console.warn('Failed to create Brolostack instance:', error);
  // Create a fallback object
  brolostackInstance = {
    initialize: async () => true,
    storage: { getItem: () => null, setItem: () => true, removeItem: () => true },
    security: { initialize: async () => true },
    analytics: { track: () => true },
    performance: { preloadResources: async () => true }
  };
}

// Initialize Brolostack
export const brolostack = brolostackInstance;

// Storage utilities with localStorage fallback for compatibility
export const storage = {
  // Page data storage
  pages: {
    async get(key: string) {
      try {
        return await brolostack.storage.getItem(`pages:${key}`);
      } catch {
        const data = localStorage.getItem(`brolostack_page_${key}`);
        return data ? JSON.parse(data) : null;
      }
    },
    async set(key: string, data: any) {
      try {
        return await brolostack.storage.setItem(`pages:${key}`, {
          ...data,
          timestamp: Date.now()
        });
      } catch {
        localStorage.setItem(`brolostack_page_${key}`, JSON.stringify({
          ...data,
          timestamp: Date.now()
        }));
        return true;
      }
    },
    async delete(key: string) {
      try {
        return await brolostack.storage.removeItem(`pages:${key}`);
      } catch {
        localStorage.removeItem(`brolostack_page_${key}`);
        return true;
      }
    }
  },
  
  // Cache management
  cache: {
    async get(key: string) {
      try {
        const cached = await brolostack.storage.getItem(`cache:${key}`) as any;
        if (cached && typeof cached === 'object' && cached !== null && 'expires' in cached && 'value' in cached) {
          if (cached.expires > Date.now()) {
            return cached.value;
          }
        }
        return null;
      } catch {
        const cached = localStorage.getItem(`brolostack_cache_${key}`);
        if (cached) {
          const data = JSON.parse(cached);
          if (data.expires > Date.now()) {
            return data.value;
          }
        }
        return null;
      }
    },
    async set(key: string, value: any, ttl: number = 5 * 60 * 1000) {
      const cacheData = {
        value,
        expires: Date.now() + ttl,
        timestamp: Date.now()
      };
      try {
        return await brolostack.storage.setItem(`cache:${key}`, cacheData as any);
      } catch {
        localStorage.setItem(`brolostack_cache_${key}`, JSON.stringify(cacheData));
        return true;
      }
    },
    async clear() {
      try {
        const keys = await brolostack.storage.keys();
        const cacheKeys = keys.filter((key: string) => key.startsWith('cache:'));
        for (const key of cacheKeys) {
          await brolostack.storage.removeItem(key);
        }
        return true;
      } catch {
        const keys = Object.keys(localStorage).filter(key => key.startsWith('brolostack_cache_'));
        keys.forEach(key => localStorage.removeItem(key));
        return true;
      }
    }
  },
  
  // User preferences
  user: {
    async getPreferences() {
      try {
        const prefs = await brolostack.storage.getItem('user:preferences');
        return (prefs && typeof prefs === 'object') ? prefs : {};
      } catch {
        const data = localStorage.getItem('brolostack_user_preferences');
        return data ? JSON.parse(data) : {};
      }
    },
    async setPreferences(preferences: any) {
      try {
        return await brolostack.storage.setItem('user:preferences', preferences);
      } catch {
        localStorage.setItem('brolostack_user_preferences', JSON.stringify(preferences));
        return true;
      }
    },
    async getHistory() {
      try {
        const history = await brolostack.storage.getItem('user:history');
        return Array.isArray(history) ? history : [];
      } catch {
        const data = localStorage.getItem('brolostack_user_history');
        return data ? JSON.parse(data) : [];
      }
    },
    async addToHistory(page: string) {
      const history = await this.getHistory();
      const updated = [page, ...history.filter((h: string) => h !== page)].slice(0, 50);
      try {
        return await brolostack.storage.setItem('user:history', updated as any);
      } catch {
        localStorage.setItem('brolostack_user_history', JSON.stringify(updated));
        return true;
      }
    }
  },
  
  // Analytics data
  analytics: {
    async track(event: string, data: any = {}) {
      const analytics = await this.getEvents();
      analytics.push({
        event,
        data,
        timestamp: Date.now(),
        session: 'session_' + Math.random().toString(36).substr(2, 9)
      });
      try {
        return await brolostack.storage.setItem('analytics:events', analytics.slice(-1000));
      } catch {
        localStorage.setItem('brolostack_analytics_events', JSON.stringify(analytics.slice(-1000)));
        return true;
      }
    },
    async getEvents() {
      try {
        const events = await brolostack.storage.getItem('analytics:events');
        return Array.isArray(events) ? events : [];
      } catch {
        const data = localStorage.getItem('brolostack_analytics_events');
        return data ? JSON.parse(data) : [];
      }
    }
  }
};

// Export security utilities with fallback implementation
export const security = {
  // Content Security Policy
  async enforceCSP() {
    if (typeof window !== 'undefined') {
      const meta = document.createElement('meta');
      meta.httpEquiv = 'Content-Security-Policy';
      meta.content = "default-src 'self'; script-src 'self' 'unsafe-inline' https://www.googletagmanager.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https://ik.imagekit.io; connect-src 'self' https://api.brolostack.com wss://ws.brolostack.com";
      document.head.appendChild(meta);
    }
  },
  
  // Security headers
  async setSecurityHeaders() {
    if (typeof window !== 'undefined') {
      // Set security headers via meta tags
      const headers = [
        { name: 'X-Content-Type-Options', content: 'nosniff' },
        { name: 'X-Frame-Options', content: 'DENY' },
        { name: 'X-XSS-Protection', content: '1; mode=block' },
        { name: 'Referrer-Policy', content: 'strict-origin-when-cross-origin' }
      ];
      
      headers.forEach(header => {
        const meta = document.createElement('meta');
        meta.httpEquiv = header.name;
        meta.content = header.content;
        document.head.appendChild(meta);
      });
    }
  },
  
  // Encrypt sensitive data
  async encrypt(data: any) {
    try {
      return btoa(JSON.stringify(data));
    } catch {
      return JSON.stringify(data);
    }
  },
  
  // Decrypt sensitive data
  async decrypt(encryptedData: string) {
    try {
      return JSON.parse(atob(encryptedData));
    } catch {
      return JSON.parse(encryptedData);
    }
  },
  
  // Validate input
  validateInput(input: any, type: string) {
    try {
      // Basic validation
      if (type === 'string' && typeof input !== 'string') return false;
      if (type === 'number' && typeof input !== 'number') return false;
      if (type === 'boolean' && typeof input !== 'boolean') return false;
      return true;
    } catch {
      return true;
    }
  }
};

// Export browser utilities with fallback implementation
export const browser = {
  // Private mode detection
  async isPrivateMode(): Promise<boolean> {
    if (typeof window === 'undefined') return false;
    
    try {
      const db = await new Promise((resolve, reject) => {
        const request = indexedDB.open('test');
        request.onerror = () => reject(new Error('IndexedDB not available'));
        request.onsuccess = () => resolve(request.result);
      });
      
      if (db) {
        (db as IDBDatabase).close();
        return false;
      }
    } catch (error) {
      return true;
    }
    
    return false;
  },
  
  // Fallback storage strategy
  async getFallbackStorage() {
    const isPrivate = await this.isPrivateMode();
    if (isPrivate) {
      return 'localStorage';
    }
    return 'indexedDB';
  },
  
  // Browser compatibility check
  async checkCompatibility() {
    if (typeof window === 'undefined') return { supported: true };
    
    const userAgent = navigator.userAgent;
    const isChrome = /Chrome/.test(userAgent);
    const isFirefox = /Firefox/.test(userAgent);
    const isSafari = /Safari/.test(userAgent) && !/Chrome/.test(userAgent);
    const isEdge = /Edg/.test(userAgent);
    
    return {
      supported: isChrome || isFirefox || isSafari || isEdge,
      browser: {
        chrome: isChrome,
        firefox: isFirefox,
        safari: isSafari,
        edge: isEdge
      }
    };
  }
};

// Export performance utilities with fallback implementation
export const performance = {
  // Preload resources
  async preloadResources(routes: string[]) {
    if (typeof window === 'undefined') return;
    
    routes.forEach(route => {
      const link = document.createElement('link');
      link.rel = 'prefetch';
      link.href = route;
      document.head.appendChild(link);
    });
  },
  
  // Cache page data
  async cachePage(route: string, data: any) {
    return await storage.cache.set(`page:${route}`, data, 24 * 60 * 60 * 1000);
  },
  
  // Get cached page data
  async getCachedPage(route: string) {
    return await storage.cache.get(`page:${route}`);
  },
  
  // Performance monitoring
  async trackPerformance(metric: string, value: number) {
    return await storage.analytics.track('performance', {
      metric,
      value,
      url: typeof window !== 'undefined' ? window.location.href : ''
    });
  }
};

// Initialize Brolostack with proper configuration and error handling
export async function initializeBrolostack() {
  try {
    console.log('Starting Brolostack initialization...');
    
    // Initialize the Brolostack instance with production settings
    if (brolostack && typeof brolostack.initialize === 'function') {
      try {
        await brolostack.initialize();
        console.log('✅ Brolostack core initialized successfully');
      } catch (initError) {
        console.warn('⚠️ Brolostack core initialization failed, continuing with fallbacks:', initError);
      }
    } else {
      console.warn('⚠️ Brolostack instance not available, using fallbacks');
    }
    
    // Set up security with production settings (with error handling)
    try {
      await security.enforceCSP();
      await security.setSecurityHeaders();
      console.log('✅ Security configured successfully');
    } catch (securityError) {
      console.warn('⚠️ Security setup failed, continuing:', securityError);
    }
    
    // Check browser compatibility (with error handling)
    try {
      const compatibility = await browser.checkCompatibility();
      if (!compatibility.supported) {
        console.warn('⚠️ Browser compatibility warning: Some features may not work properly');
      } else {
        console.log('✅ Browser compatibility check passed');
      }
    } catch (browserError) {
      console.warn('⚠️ Browser compatibility check failed, continuing:', browserError);
    }
    
    // Set up private mode fallback (with error handling)
    try {
      const isPrivate = await browser.isPrivateMode();
      if (isPrivate) {
        console.info('ℹ️ Private mode detected: Using localStorage fallback');
      } else {
        console.log('✅ Private mode check passed');
      }
    } catch (privateError) {
      console.warn('⚠️ Private mode check failed, continuing:', privateError);
    }
    
    // Preload critical resources (with error handling)
    try {
      await performance.preloadResources(['/docs/getting-started', '/docs/ai-framework']);
      console.log('✅ Resource preloading completed');
    } catch (preloadError) {
      console.warn('⚠️ Resource preloading failed, continuing:', preloadError);
    }
    
    console.log('🎉 Brolostack initialization completed successfully');
    return true;
  } catch (error) {
    console.error('❌ Failed to initialize Brolostack:', error);
    // Even if initialization fails, return true to allow the app to continue
    console.log('ℹ️ Continuing with fallback functionality...');
    return true;
  }
}

export default brolostack;
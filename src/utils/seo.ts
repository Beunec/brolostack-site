export interface SEOData {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  noIndex?: boolean;
}

export const defaultSEO: SEOData = {
  title: 'Brolostack - Local-First Full-Stack Framework | Zero Server Costs',
  description: 'Brolostack is a local-first full-stack framework that operates entirely in your browser with optional cloud integration. Enterprise-grade AI, security, and real-time features with zero server costs.',
  keywords: 'local-first, full-stack framework, browser storage, zero server costs, AI framework, WebSocket, security, authentication, cloud integration, IndexedDB, React, TypeScript',
  canonical: 'https://www.brolostack.com',
  ogImage: 'https://ik.imagekit.io/brolostack/Brolostack%20Logo',
  ogType: 'website'
};

export const seoPages: Record<string, SEOData> = {
  // Homepage
  '/': {
    title: 'Brolostack - Local-First Full-Stack Framework | Zero Server Costs',
    description: 'Brolostack is a local-first full-stack framework that operates entirely in your browser with optional cloud integration. Enterprise-grade AI, security, and real-time features with zero server costs.',
    keywords: 'local-first, full-stack framework, browser storage, zero server costs, AI framework, WebSocket, security, authentication, cloud integration, IndexedDB, React, TypeScript',
    canonical: 'https://www.brolostack.com'
  },

  // Documentation Pages
  '/docs': {
    title: 'Documentation - Brolostack Framework',
    description: 'Complete documentation for Brolostack local-first full-stack framework. Learn how to build powerful applications with zero server costs.',
    keywords: 'brolostack documentation, local-first framework, browser storage, zero server costs, getting started, API reference',
    canonical: 'https://www.brolostack.com/docs'
  },

  // Getting Started
  '/docs/getting-started': {
    title: 'Getting Started - Brolostack Framework',
    description: 'Learn how to get started with Brolostack local-first framework. Quick setup guide, installation, and basic usage examples.',
    keywords: 'brolostack getting started, installation, setup, quick start, local-first framework, browser storage',
    canonical: 'https://www.brolostack.com/docs/getting-started'
  },

  '/docs/getting-started-guide': {
    title: 'Getting Started Guide - Brolostack Framework',
    description: 'Step-by-step implementation guide for Brolostack. Learn how to build your first local-first application with practical examples.',
    keywords: 'brolostack guide, implementation guide, tutorial, local-first app, browser storage, examples',
    canonical: 'https://www.brolostack.com/docs/getting-started-guide'
  },

  // AI Framework
  '/docs/ai-framework': {
    title: 'AI Framework - Brolostack',
    description: 'Brolostack AI Framework provides enterprise-grade AI capabilities with local-first architecture. Advanced reasoning, governance, and cost control.',
    keywords: 'brolostack AI framework, artificial intelligence, local AI, reasoning, governance, cost control, enterprise AI',
    canonical: 'https://www.brolostack.com/docs/ai-framework'
  },

  '/docs/ai-framework-guide': {
    title: 'AI Framework Guide - Brolostack',
    description: 'Complete guide to implementing AI features with Brolostack. Learn advanced AI patterns, reasoning, and governance in local-first applications.',
    keywords: 'brolostack AI guide, AI implementation, reasoning patterns, AI governance, local AI, examples',
    canonical: 'https://www.brolostack.com/docs/ai-framework-guide'
  },

  // Security Framework
  '/docs/devil-security': {
    title: 'Brolostack Devil Security - Zero-Knowledge Encryption',
    description: 'Brolostack Devil Security provides zero-knowledge encryption and advanced security features for local-first applications. Enterprise-grade protection.',
    keywords: 'brolostack security, devil security, zero-knowledge encryption, local security, enterprise security, data protection',
    canonical: 'https://www.brolostack.com/docs/devil-security'
  },

  '/docs/security-framework': {
    title: 'Security Framework - Brolostack',
    description: 'Complete security framework for Brolostack applications. Advanced encryption, authentication, and data protection features.',
    keywords: 'brolostack security framework, encryption, authentication, data protection, security features, local security',
    canonical: 'https://www.brolostack.com/docs/security-framework'
  },

  '/docs/security-framework-guide': {
    title: 'Security Framework Guide - Brolostack',
    description: 'Implementation guide for Brolostack security features. Learn how to secure your local-first applications with advanced encryption and authentication.',
    keywords: 'brolostack security guide, security implementation, encryption guide, authentication, security patterns',
    canonical: 'https://www.brolostack.com/docs/security-framework-guide'
  },

  // WebSocket Framework
  '/docs/websocket-framework': {
    title: 'WebSocket Framework - Brolostack',
    description: 'Brolostack WebSocket Framework provides real-time communication capabilities for local-first applications. Advanced client and multi-agent support.',
    keywords: 'brolostack websocket, real-time communication, websocket framework, local-first websocket, real-time features',
    canonical: 'https://www.brolostack.com/docs/websocket-framework'
  },

  '/docs/brolostack-ws-client': {
    title: 'Brolostack WS Client - Advanced WebSocket Client',
    description: 'Advanced client-side WebSocket communication with automatic reconnection, message queuing, and offline support. Built for enterprise-grade real-time applications.',
    keywords: 'brolostack ws client, websocket client, real-time client, automatic reconnection, message queuing, offline support',
    canonical: 'https://www.brolostack.com/docs/brolostack-ws-client'
  },

  '/docs/brolostack-ws-multi-agent': {
    title: 'Brolostack WS Multi-Agent - Multi-Agent Coordination',
    description: 'Revolutionary multi-agent coordination system with ARGS Protocol integration. Enable seamless AI agent collaboration and real-time progress streaming.',
    keywords: 'brolostack multi-agent, websocket multi-agent, ARGS protocol, agent coordination, AI collaboration, real-time streaming',
    canonical: 'https://www.brolostack.com/docs/brolostack-ws-multi-agent'
  },

  '/docs/websocket-framework-guide': {
    title: 'WebSocket Framework Guide - Brolostack',
    description: 'Complete guide to implementing real-time features with Brolostack WebSocket Framework. Learn chat, collaboration, and real-time data streaming.',
    keywords: 'brolostack websocket guide, real-time implementation, websocket examples, chat implementation, collaboration features',
    canonical: 'https://www.brolostack.com/docs/websocket-framework-guide'
  },

  // Authentication
  '/docs/ciam-integration': {
    title: 'CIAM Integration - Brolostack Authentication',
    description: 'Customer Identity and Access Management integration for Brolostack. Multi-provider authentication with enterprise-grade security.',
    keywords: 'brolostack CIAM, authentication, identity management, multi-provider auth, enterprise authentication, access control',
    canonical: 'https://www.brolostack.com/docs/ciam-integration'
  },

  '/docs/authentication-guide': {
    title: 'Authentication Guide - Brolostack',
    description: 'Complete authentication implementation guide for Brolostack. Learn OAuth, MFA, RBAC, and session management in local-first applications.',
    keywords: 'brolostack authentication guide, OAuth implementation, MFA, RBAC, session management, auth patterns',
    canonical: 'https://www.brolostack.com/docs/authentication-guide'
  },

  // Cloud Integration
  '/docs/cloud-integration': {
    title: 'Cloud Integration - Brolostack',
    description: 'Brolostack Cloud Integration supports 22+ cloud providers. Seamless multi-cloud deployment with local-first architecture.',
    keywords: 'brolostack cloud integration, multi-cloud, cloud providers, cloud deployment, local-first cloud, hybrid cloud',
    canonical: 'https://www.brolostack.com/docs/cloud-integration'
  },

  // Backend Integration
  '/docs/backend-integration': {
    title: 'Backend Integration - Brolostack',
    description: 'Brolostack Backend Integration supports Node.js and Python backends. Seamless integration with existing server infrastructure.',
    keywords: 'brolostack backend integration, Node.js integration, Python integration, server integration, backend support',
    canonical: 'https://www.brolostack.com/docs/backend-integration'
  },

  '/docs/backend-integration-guide': {
    title: 'Backend Integration Guide - Brolostack',
    description: 'Complete guide to integrating Brolostack with Node.js and Python backends. Learn database integration, REST APIs, and deployment strategies.',
    keywords: 'brolostack backend guide, Node.js guide, Python guide, database integration, REST API, deployment guide',
    canonical: 'https://www.brolostack.com/docs/backend-integration-guide'
  },

  // Enterprise Features
  '/docs/enterprise-features': {
    title: 'Enterprise Features - Brolostack',
    description: 'Enterprise-grade features for Brolostack applications. SSO, RBAC, audit logging, monitoring, and data governance capabilities.',
    keywords: 'brolostack enterprise features, SSO, RBAC, audit logging, monitoring, data governance, enterprise capabilities',
    canonical: 'https://www.brolostack.com/docs/enterprise-features'
  },

  '/docs/enterprise-features-guide': {
    title: 'Enterprise Features Guide - Brolostack',
    description: 'Implementation guide for Brolostack enterprise features. Learn SSO, RBAC, audit logging, and monitoring in local-first applications.',
    keywords: 'brolostack enterprise guide, SSO implementation, RBAC guide, audit logging, monitoring setup, enterprise patterns',
    canonical: 'https://www.brolostack.com/docs/enterprise-features-guide'
  },

  // Environment Management
  '/docs/environment-management': {
    title: 'Environment Management - Brolostack',
    description: 'Automatic environment optimization for Brolostack applications. Smart configuration management and performance tuning.',
    keywords: 'brolostack environment management, environment optimization, configuration management, performance tuning, environment setup',
    canonical: 'https://www.brolostack.com/docs/environment-management'
  },

  '/docs/environment-management-guide': {
    title: 'Environment Management Guide - Brolostack',
    description: 'Complete guide to environment management with Brolostack. Learn development, staging, production, and deployment configurations.',
    keywords: 'brolostack environment guide, environment configuration, development setup, staging setup, production deployment',
    canonical: 'https://www.brolostack.com/docs/environment-management-guide'
  },

  // Token Usage Control
  '/docs/token-usage-control': {
    title: 'Token Usage Control - Brolostack AI Cost Management',
    description: 'Advanced AI token monitoring and cost management for Brolostack applications. Real-time usage tracking and budget controls.',
    keywords: 'brolostack token control, AI cost management, token monitoring, usage tracking, budget control, AI optimization',
    canonical: 'https://www.brolostack.com/docs/token-usage-control'
  },

  '/docs/token-usage-control-guide': {
    title: 'Token Usage Control Guide - Brolostack',
    description: 'Implementation guide for AI token usage control in Brolostack. Learn cost monitoring, budget management, and optimization strategies.',
    keywords: 'brolostack token guide, AI cost guide, usage monitoring, budget management, cost optimization, token strategies',
    canonical: 'https://www.brolostack.com/docs/token-usage-control-guide'
  },

  // Browser Compatibility
  '/docs/browser-compatibility': {
    title: 'Browser Compatibility - Brolostack',
    description: 'Cross-browser support and compatibility testing for Brolostack applications. Comprehensive browser testing and optimization.',
    keywords: 'brolostack browser compatibility, cross-browser support, browser testing, compatibility testing, browser optimization',
    canonical: 'https://www.brolostack.com/docs/browser-compatibility'
  },

  '/docs/browser-private-mode': {
    title: 'Browser Private Mode - Brolostack',
    description: 'Private browsing support for Brolostack applications. Fallback storage strategies and enhanced user experience in private mode.',
    keywords: 'brolostack private mode, private browsing, incognito mode, fallback storage, private mode support',
    canonical: 'https://www.brolostack.com/docs/browser-private-mode'
  },

  '/docs/browser-compatibility-guide': {
    title: 'Browser Compatibility Guide - Brolostack',
    description: 'Complete guide to browser compatibility with Brolostack. Learn cross-browser testing, optimization, and private mode handling.',
    keywords: 'brolostack browser guide, cross-browser testing, browser optimization, compatibility testing, private mode guide',
    canonical: 'https://www.brolostack.com/docs/browser-compatibility-guide'
  },

  // Brolostack Worker
  '/docs/brolostack-worker': {
    title: 'Brolostack Worker - Background Processing',
    description: 'Background processing system for Brolostack applications. Web Workers integration with advanced task management and monitoring.',
    keywords: 'brolostack worker, background processing, web workers, task management, worker monitoring, background tasks',
    canonical: 'https://www.brolostack.com/docs/brolostack-worker'
  },

  '/docs/brolostack-worker-guide': {
    title: 'Brolostack Worker Guide - Background Processing',
    description: 'Implementation guide for Brolostack Worker background processing. Learn task management, performance optimization, and monitoring.',
    keywords: 'brolostack worker guide, background processing guide, web workers guide, task management, worker optimization',
    canonical: 'https://www.brolostack.com/docs/brolostack-worker-guide'
  },

  // Framework Status
  '/docs/framework-status': {
    title: 'Framework Status - Brolostack',
    description: 'Real-time monitoring and health checks for Brolostack applications. Production-ready status with zero vulnerabilities and optimized performance.',
    keywords: 'brolostack framework status, monitoring, health checks, production ready, zero vulnerabilities, performance monitoring',
    canonical: 'https://www.brolostack.com/docs/framework-status'
  },

  '/docs/framework-status-guide': {
    title: 'Framework Status Guide - Brolostack',
    description: 'Implementation guide for Brolostack framework monitoring. Learn health checks, status reporting, and performance monitoring.',
    keywords: 'brolostack status guide, monitoring guide, health checks, status reporting, performance monitoring guide',
    canonical: 'https://www.brolostack.com/docs/framework-status-guide'
  },

  // Optional Dependencies
  '/docs/optional-dependencies': {
    title: 'Optional Dependencies - Brolostack',
    description: 'Additional packages and integrations for Brolostack applications. Graceful fallback behavior and automatic dependency detection.',
    keywords: 'brolostack optional dependencies, additional packages, integrations, fallback behavior, dependency detection',
    canonical: 'https://www.brolostack.com/docs/optional-dependencies'
  },

  // Community Guide
  '/docs/community-guide': {
    title: 'Community Guide - Brolostack',
    description: 'Join the Brolostack community. Learn about contributing, showcasing projects, and connecting with 1000+ developers worldwide.',
    keywords: 'brolostack community, contribute, showcase projects, developer community, open source, community guide',
    canonical: 'https://www.brolostack.com/docs/community-guide'
  },

  // 404 Page
  '/404': {
    title: 'Page Not Found - Brolostack',
    description: 'The page you are looking for could not be found. Explore our documentation and get back on track with Brolostack.',
    keywords: 'brolostack 404, page not found, documentation, help',
    canonical: 'https://www.brolostack.com/404',
    noIndex: true
  }
};

export function getSEOData(pathname: string): SEOData {
  // Remove trailing slash and normalize path
  const normalizedPath = pathname.replace(/\/$/, '') || '/';
  
  // Check for exact match first
  if (seoPages[normalizedPath]) {
    return seoPages[normalizedPath];
  }
  
  // Check for documentation pages with dynamic routes
  if (normalizedPath.startsWith('/docs/')) {
    return {
      title: 'Documentation - Brolostack Framework',
      description: 'Brolostack documentation page. Learn about local-first full-stack framework features and implementation.',
      keywords: 'brolostack documentation, local-first framework, browser storage, zero server costs',
      canonical: `https://www.brolostack.com${normalizedPath}`
    };
  }
  
  // Default fallback
  return defaultSEO;
}

export function updatePageSEO(seoData: SEOData) {
  // Update title
  document.title = seoData.title;
  
  // Update meta description
  updateMetaTag('description', seoData.description);
  
  // Update keywords if provided
  if (seoData.keywords) {
    updateMetaTag('keywords', seoData.keywords);
  }
  
  // Update canonical URL
  if (seoData.canonical) {
    updateCanonicalLink(seoData.canonical);
  }
  
  // Update robots meta tag
  if (seoData.noIndex) {
    updateMetaTag('robots', 'noindex, nofollow');
  } else {
    updateMetaTag('robots', 'index, follow');
  }
  
  // Update Open Graph tags
  updateOGTag('og:title', seoData.title);
  updateOGTag('og:description', seoData.description);
  updateOGTag('og:url', seoData.canonical || window.location.href);
  updateOGTag('og:type', seoData.ogType || 'website');
  
  if (seoData.ogImage) {
    updateOGTag('og:image', seoData.ogImage);
  }
  
  // Update Twitter Card tags
  updateMetaTag('twitter:title', seoData.title);
  updateMetaTag('twitter:description', seoData.description);
  
  if (seoData.ogImage) {
    updateMetaTag('twitter:image', seoData.ogImage);
  }
}

function updateMetaTag(name: string, content: string) {
  let meta = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement;
  if (!meta) {
    meta = document.createElement('meta');
    meta.name = name;
    document.head.appendChild(meta);
  }
  meta.content = content;
}

function updateOGTag(property: string, content: string) {
  let meta = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement;
  if (!meta) {
    meta = document.createElement('meta');
    meta.setAttribute('property', property);
    document.head.appendChild(meta);
  }
  meta.content = content;
}

function updateCanonicalLink(url: string) {
  let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
  if (!canonical) {
    canonical = document.createElement('link');
    canonical.rel = 'canonical';
    document.head.appendChild(canonical);
  }
  canonical.href = url;
}

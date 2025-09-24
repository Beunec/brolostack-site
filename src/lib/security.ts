import React from 'react';
import { security, brolostack } from './brolostack';

export interface SecurityConfig {
  csp: boolean;
  encryption: boolean;
  validation: boolean;
  monitoring: boolean;
  rateLimit: boolean;
}

export interface SecurityEvent {
  type: 'attack' | 'suspicious' | 'error' | 'info';
  source: string;
  details: any;
  timestamp: number;
  severity: 'low' | 'medium' | 'high' | 'critical';
}

export class SecurityManager {
  private static instance: SecurityManager;
  private events: SecurityEvent[] = [];
  private rateLimitMap = new Map<string, { count: number; resetTime: number }>();
  private suspiciousIPs = new Set<string>();
  private brolostackSecurity: any;

  static getInstance(): SecurityManager {
    if (!SecurityManager.instance) {
      SecurityManager.instance = new SecurityManager();
    }
    return SecurityManager.instance;
  }

  // Initialize security measures using Brolostack Security
  async initialize() {
    try {
      // Use Brolostack Security if available
      if (brolostack.security) {
        this.brolostackSecurity = brolostack.security;
        await this.brolostackSecurity.initialize();
        console.log('Security manager initialized with Brolostack Security');
      } else {
        // Fallback to custom implementation
        await this.setupCSP();
        await this.setupSecurityHeaders();
        await this.setupInputValidation();
        await this.setupRateLimiting();
        await this.setupMonitoring();
        console.log('Security manager initialized with fallback implementation');
      }
    } catch (error) {
      console.error('Failed to initialize security:', error);
      // Fallback to basic implementation
      await this.setupCSP();
      await this.setupSecurityHeaders();
    }
  }

  // Content Security Policy
  private async setupCSP() {
    if (typeof window === 'undefined') return;

    const csp = `
      default-src 'self';
      script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com;
      style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
      font-src 'self' https://fonts.gstatic.com;
      img-src 'self' data: https://ik.imagekit.io;
      connect-src 'self' https://api.brolostack.com wss://ws.brolostack.com;
      frame-ancestors 'none';
      base-uri 'self';
      form-action 'self';
    `.replace(/\s+/g, ' ').trim();

    const meta = document.createElement('meta');
    meta.httpEquiv = 'Content-Security-Policy';
    meta.content = csp;
    document.head.appendChild(meta);

    this.logEvent('info', 'CSP Setup', { csp }, 'low');
  }

  // Security headers
  private async setupSecurityHeaders() {
    if (typeof window === 'undefined') return;

    const headers = [
      { name: 'X-Content-Type-Options', value: 'nosniff' },
      { name: 'X-Frame-Options', value: 'DENY' },
      { name: 'X-XSS-Protection', value: '1; mode=block' },
      { name: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
      { name: 'Permissions-Policy', value: 'geolocation=(), microphone=(), camera=()' }
    ];

    headers.forEach(header => {
      const meta = document.createElement('meta');
      meta.httpEquiv = header.name;
      meta.content = header.value;
      document.head.appendChild(meta);
    });

    this.logEvent('info', 'Security Headers', { headers }, 'low');
  }

  // Input validation
  private async setupInputValidation() {
    if (typeof window === 'undefined') return;

    // Override dangerous functions
    window.eval = function(code: string) {
      securityManager.logEvent('attack', 'Eval Attempt', { code }, 'high');
      throw new Error('Eval is disabled for security reasons');
    };

    this.logEvent('info', 'Input Validation', { setup: true }, 'low');
  }

  // Rate limiting
  private async setupRateLimiting() {
    if (typeof window === 'undefined') return;

    // Monitor API calls
    const originalFetch = window.fetch;
    window.fetch = async function(input: RequestInfo | URL, init?: RequestInit) {
      const clientId = securityManager.getClientId();
      if (!securityManager.checkRateLimit(clientId)) {
        securityManager.logEvent('attack', 'Rate Limit Exceeded', { url: input.toString(), clientId }, 'medium');
        throw new Error('Rate limit exceeded');
      }
      return originalFetch.call(this, input, init);
    };

    this.logEvent('info', 'Rate Limiting', { setup: true }, 'low');
  }

  // Security monitoring
  private async setupMonitoring() {
    if (typeof window === 'undefined') return;

    // Monitor for suspicious activities
    window.addEventListener('error', (event) => {
      if (this.isSuspiciousError(event.error)) {
        this.logEvent('suspicious', 'Suspicious Error', { error: event.error }, 'medium');
      }
    });

    // Monitor for console access attempts (simplified)
    const originalLog = console.log;
    console.log = function(...args: any[]) {
      securityManager.logEvent('suspicious', 'Console Access', { method: 'log', args }, 'low');
      return originalLog.apply(console, args);
    };

    this.logEvent('info', 'Security Monitoring', { setup: true }, 'low');
  }

  // XSS detection (unused but kept for future use)
  private _detectXSS(input: string): boolean {
    const xssPatterns = [
      /<script[^>]*>.*?<\/script>/gi,
      /javascript:/gi,
      /on\w+\s*=/gi,
      /<iframe[^>]*>.*?<\/iframe>/gi,
      /<object[^>]*>.*?<\/object>/gi,
      /<embed[^>]*>/gi,
      /<link[^>]*>/gi,
      /<meta[^>]*>/gi,
      /<style[^>]*>.*?<\/style>/gi
    ];

    return xssPatterns.some(pattern => pattern.test(input));
  }

  // Rate limit check
  checkRateLimit(clientId: string, limit: number = 100, windowMs: number = 60000): boolean {
    const now = Date.now();
    const clientData = this.rateLimitMap.get(clientId);

    if (!clientData || now > clientData.resetTime) {
      this.rateLimitMap.set(clientId, {
        count: 1,
        resetTime: now + windowMs
      });
      return true;
    }

    if (clientData.count >= limit) {
      return false;
    }

    clientData.count++;
    return true;
  }

  // Get client ID
  private getClientId(): string {
    let clientId = localStorage.getItem('brolostack_client_id');
    if (!clientId) {
      clientId = 'client_' + Math.random().toString(36).substr(2, 9);
      localStorage.setItem('brolostack_client_id', clientId);
    }
    return clientId;
  }

  // Suspicious error detection
  private isSuspiciousError(error: any): boolean {
    if (!error || !error.message) return false;

    const suspiciousPatterns = [
      /script error/i,
      /syntax error/i,
      /permission denied/i,
      /access denied/i,
      /unauthorized/i,
      /forbidden/i
    ];

    return suspiciousPatterns.some(pattern => pattern.test(error.message));
  }

  // Log security events
  logEvent(type: SecurityEvent['type'], source: string, details: any, severity: SecurityEvent['severity']) {
    const event: SecurityEvent = {
      type,
      source,
      details,
      timestamp: Date.now(),
      severity
    };

    this.events.push(event);
    
    // Keep only last 1000 events
    if (this.events.length > 1000) {
      this.events = this.events.slice(-1000);
    }

    // Log critical events
    if (severity === 'critical' || severity === 'high') {
      console.warn('Security Event:', event);
    }

    // Store in analytics
    this.storeSecurityEvent(event);
  }

  // Store security event
  private async storeSecurityEvent(event: SecurityEvent) {
    try {
      // Store in local storage as fallback
      const events = JSON.parse(localStorage.getItem('brolostack_security_events') || '[]');
      events.push(event);
      localStorage.setItem('brolostack_security_events', JSON.stringify(events.slice(-100)));
    } catch (error) {
      console.error('Failed to store security event:', error);
    }
  }

  // Get security events
  getEvents(filter?: { type?: string; severity?: string; limit?: number }): SecurityEvent[] {
    let events = [...this.events];

    if (filter) {
      if (filter.type) {
        events = events.filter(e => e.type === filter.type);
      }
      if (filter.severity) {
        events = events.filter(e => e.severity === filter.severity);
      }
      if (filter.limit) {
        events = events.slice(-filter.limit);
      }
    }

    return events;
  }

  // Encrypt sensitive data using Brolostack Security
  async encryptData(data: any): Promise<string> {
    try {
      let result;
      if (this.brolostackSecurity?.encrypt) {
        result = await this.brolostackSecurity.encrypt(data);
      } else {
        result = await security.encrypt(data);
      }
      return typeof result === 'string' ? result : JSON.stringify(result);
    } catch (error) {
      this.logEvent('error', 'Encryption Failed', { error }, 'high');
      throw error;
    }
  }

  // Decrypt sensitive data using Brolostack Security
  async decryptData(encryptedData: string): Promise<any> {
    try {
      if (this.brolostackSecurity?.decrypt) {
        return await this.brolostackSecurity.decrypt(encryptedData);
      } else {
        return await security.decrypt(encryptedData);
      }
    } catch (error) {
      this.logEvent('error', 'Decryption Failed', { error }, 'high');
      throw error;
    }
  }

  // Validate input using Brolostack Security
  validateInput(input: any, type: string): boolean {
    try {
      // Check for XSS patterns first
      if (typeof input === 'string' && this._detectXSS(input)) {
        this.logEvent('attack', 'XSS Attempt Detected', { input, type }, 'high');
        return false;
      }
      
      // Use Brolostack Security validation if available
      if (this.brolostackSecurity?.validateInput) {
        const result = this.brolostackSecurity.validateInput(input, type);
        return typeof result === 'boolean' ? result : result.valid;
      } else {
        return security.validateInput(input, type);
      }
    } catch (error) {
      this.logEvent('suspicious', 'Input Validation Failed', { input, type, error }, 'medium');
      return false;
    }
  }

  // Sanitize HTML
  sanitizeHTML(html: string): string {
    const div = document.createElement('div');
    div.textContent = html;
    return div.innerHTML;
  }

  // Generate secure token
  generateSecureToken(length: number = 32): string {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  }

  // Check for suspicious patterns
  detectSuspiciousActivity(activity: string): boolean {
    const suspiciousPatterns = [
      /admin/i,
      /password/i,
      /login/i,
      /sql/i,
      /script/i,
      /eval/i,
      /exec/i,
      /system/i
    ];

    return suspiciousPatterns.some(pattern => pattern.test(activity));
  }

  // Get security status
  getSecurityStatus() {
    const recentEvents = this.events.filter(e => Date.now() - e.timestamp < 3600000); // Last hour
    const criticalEvents = recentEvents.filter(e => e.severity === 'critical');
    const highEvents = recentEvents.filter(e => e.severity === 'high');

    return {
      status: criticalEvents.length > 0 ? 'critical' : 
              highEvents.length > 3 ? 'warning' : 'secure',
      events: {
        total: this.events.length,
        recent: recentEvents.length,
        critical: criticalEvents.length,
        high: highEvents.length
      },
      rateLimit: this.rateLimitMap.size,
      suspiciousIPs: this.suspiciousIPs.size
    };
  }
}

// Export singleton instance
export const securityManager = SecurityManager.getInstance();

// React hook for security
export function useSecurity() {
  const [status, setStatus] = React.useState(securityManager.getSecurityStatus());
  const [events, setEvents] = React.useState<SecurityEvent[]>([]);

  React.useEffect(() => {
    const updateStatus = () => {
      setStatus(securityManager.getSecurityStatus());
      setEvents(securityManager.getEvents({ limit: 50 }));
    };

    updateStatus();
    const interval = setInterval(updateStatus, 30000); // Update every 30 seconds

    return () => clearInterval(interval);
  }, []);

  return {
    status,
    events,
    logEvent: securityManager.logEvent.bind(securityManager),
    encryptData: securityManager.encryptData.bind(securityManager),
    decryptData: securityManager.decryptData.bind(securityManager),
    validateInput: securityManager.validateInput.bind(securityManager),
    sanitizeHTML: securityManager.sanitizeHTML.bind(securityManager)
  };
}

// Initialize security on app start
export async function initializeSecurity() {
  await securityManager.initialize();
}

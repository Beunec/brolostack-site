import React from 'react';
import { motion } from 'framer-motion';
import { 
  Globe, 
  Shield, 
  Zap, 
  ArrowRight, 
  CheckCircle,
  Settings
} from 'lucide-react';

const BrowserCompatibilityGuidePage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="space-y-8"
    >
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-violet-600 to-purple-600 rounded-2xl p-8 text-white">
        <div className="max-w-4xl">
          <h1 className="text-4xl font-bold mb-4">
            Browser Compatibility Guide Template
          </h1>
          <p className="text-xl text-violet-100 mb-6">
            Comprehensive guide for implementing cross-browser compatibility. Learn how to test, 
            optimize, and ensure your applications work seamlessly across all browsers and devices.
          </p>
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center space-x-2 bg-white/20 rounded-lg px-4 py-2">
              <Globe size={20} />
              <span className="font-medium">Cross-Browser Testing</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/20 rounded-lg px-4 py-2">
              <Shield size={20} />
              <span className="font-medium">Feature Detection</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/20 rounded-lg px-4 py-2">
              <Zap size={20} />
              <span className="font-medium">Performance Optimization</span>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Start Examples */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">🚀 Quick Start Examples</h2>
        
        <div className="space-y-6">
          {/* Example 1 */}
          <div className="border-l-4 border-violet-500 pl-6">
            <div className="flex items-center mb-3">
              <div className="bg-violet-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Feature Detection System</h3>
            </div>
            <div className="bg-gray-900 rounded-lg p-4 text-green-400 font-mono text-sm overflow-x-auto">
              <pre>{`// Comprehensive feature detection
class BrowserFeatureDetector {
  constructor() {
    this.features = {};
    this.fallbacks = new Map();
  }
  
  // Detect all browser features
  async detectFeatures() {
    const features = {
      webgl: this.detectWebGL(),
      webassembly: this.detectWebAssembly(),
      serviceWorker: this.detectServiceWorker(),
      webrtc: this.detectWebRTC(),
      webAudio: this.detectWebAudio(),
      indexedDB: this.detectIndexedDB(),
      localStorage: this.detectLocalStorage(),
      sessionStorage: this.detectSessionStorage(),
      geolocation: this.detectGeolocation(),
      notifications: this.detectNotifications(),
      push: this.detectPushAPI(),
      webShare: this.detectWebShare(),
      intersectionObserver: this.detectIntersectionObserver(),
      resizeObserver: this.detectResizeObserver(),
      customElements: this.detectCustomElements(),
      shadowDOM: this.detectShadowDOM(),
      cssGrid: this.detectCSSGrid(),
      flexbox: this.detectFlexbox(),
      cssVariables: this.detectCSSVariables(),
      es6: this.detectES6(),
      es2017: this.detectES2017(),
      es2018: this.detectES2018(),
      es2020: this.detectES2020()
    };
    
    this.features = features;
    return features;
  }
  
  // WebGL detection
  detectWebGL() {
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl2') || canvas.getContext('webgl');
      
      if (gl) {
        return {
          supported: true,
          version: gl.getParameter(gl.VERSION),
          vendor: gl.getParameter(gl.VENDOR),
          renderer: gl.getParameter(gl.RENDERER),
          extensions: gl.getSupportedExtensions()
        };
      }
    } catch (e) {
      console.warn('WebGL detection failed:', e);
    }
    
    return { supported: false };
  }
  
  // WebAssembly detection
  detectWebAssembly() {
    if (typeof WebAssembly === 'object' && typeof WebAssembly.instantiate === 'function') {
      return { supported: true };
    }
    return { supported: false };
  }
  
  // Service Worker detection
  detectServiceWorker() {
    if ('serviceWorker' in navigator) {
      return { supported: true };
    }
    return { supported: false };
  }
  
  // WebRTC detection
  detectWebRTC() {
    if (window.RTCPeerConnection && window.RTCSessionDescription) {
      return { supported: true };
    }
    return { supported: false };
  }
  
  // Web Audio detection
  detectWebAudio() {
    if (window.AudioContext || window.webkitAudioContext) {
      return { supported: true };
    }
    return { supported: false };
  }
  
  // IndexedDB detection
  detectIndexedDB() {
    if (window.indexedDB) {
      return { supported: true };
    }
    return { supported: false };
  }
  
  // Local Storage detection
  detectLocalStorage() {
    try {
      const test = 'test';
      localStorage.setItem(test, test);
      localStorage.removeItem(test);
      return { supported: true };
    } catch (e) {
      return { supported: false };
    }
  }
  
  // Session Storage detection
  detectSessionStorage() {
    try {
      const test = 'test';
      sessionStorage.setItem(test, test);
      sessionStorage.removeItem(test);
      return { supported: true };
    } catch (e) {
      return { supported: false };
    }
  }
  
  // Geolocation detection
  detectGeolocation() {
    if (navigator.geolocation) {
      return { supported: true };
    }
    return { supported: false };
  }
  
  // Notifications detection
  detectNotifications() {
    if ('Notification' in window) {
      return { supported: true };
    }
    return { supported: false };
  }
  
  // Push API detection
  detectPushAPI() {
    if ('PushManager' in window) {
      return { supported: true };
    }
    return { supported: false };
  }
  
  // Web Share API detection
  detectWebShare() {
    if (navigator.share) {
      return { supported: true };
    }
    return { supported: false };
  }
  
  // Intersection Observer detection
  detectIntersectionObserver() {
    if ('IntersectionObserver' in window) {
      return { supported: true };
    }
    return { supported: false };
  }
  
  // Resize Observer detection
  detectResizeObserver() {
    if ('ResizeObserver' in window) {
      return { supported: true };
    }
    return { supported: false };
  }
  
  // Custom Elements detection
  detectCustomElements() {
    if (window.customElements) {
      return { supported: true };
    }
    return { supported: false };
  }
  
  // Shadow DOM detection
  detectShadowDOM() {
    if (document.head.attachShadow) {
      return { supported: true };
    }
    return { supported: false };
  }
  
  // CSS Grid detection
  detectCSSGrid() {
    const testEl = document.createElement('div');
    testEl.style.display = 'grid';
    return { supported: testEl.style.display === 'grid' };
  }
  
  // Flexbox detection
  detectFlexbox() {
    const testEl = document.createElement('div');
    testEl.style.display = 'flex';
    return { supported: testEl.style.display === 'flex' };
  }
  
  // CSS Variables detection
  detectCSSVariables() {
    const testEl = document.createElement('div');
    testEl.style.setProperty('--test', 'value');
    return { supported: testEl.style.getPropertyValue('--test') === 'value' };
  }
  
  // ES6 detection
  detectES6() {
    try {
      eval('class Test {}');
      eval('const test = () => {}');
      eval('let test = 1;');
      return { supported: true };
    } catch (e) {
      return { supported: false };
    }
  }
  
  // ES2017 detection
  detectES2017() {
    try {
      eval('async function test() {}');
      eval('const test = { ...obj };');
      return { supported: true };
    } catch (e) {
      return { supported: false };
    }
  }
  
  // ES2018 detection
  detectES2018() {
    try {
      eval('const test = { ...obj, ...rest };');
      eval('const [a, ...rest] = array;');
      return { supported: true };
    } catch (e) {
      return { supported: false };
    }
  }
  
  // ES2020 detection
  detectES2020() {
    try {
      eval('const test = obj?.prop?.method?.();');
      eval('const result = value ?? defaultValue;');
      return { supported: true };
    } catch (e) {
      return { supported: false };
    }
  }
  
  // Get feature support status
  isFeatureSupported(feature) {
    return this.features[feature]?.supported || false;
  }
  
  // Get browser information
  getBrowserInfo() {
    const ua = navigator.userAgent;
    const browsers = {
      chrome: /Chrome/.test(ua) && /Google Inc/.test(navigator.vendor),
      firefox: /Firefox/.test(ua),
      safari: /Safari/.test(ua) && /Apple Computer/.test(navigator.vendor),
      edge: /Edg/.test(ua),
      opera: /Opera/.test(ua) || /OPR/.test(ua),
      ie: /MSIE/.test(ua) || /Trident/.test(ua)
    };
    
    const browser = Object.keys(browsers).find(key => browsers[key]);
    const version = this.getBrowserVersion(ua, browser);
    
    return {
      name: browser || 'unknown',
      version: version,
      userAgent: ua,
      platform: navigator.platform,
      language: navigator.language,
      cookieEnabled: navigator.cookieEnabled,
      onLine: navigator.onLine
    };
  }
  
  getBrowserVersion(userAgent, browser) {
    const patterns = {
      chrome: /Chrome\\/([0-9.]+)/,
      firefox: /Firefox\\/([0-9.]+)/,
      safari: /Version\\/([0-9.]+)/,
      edge: /Edg\\/([0-9.]+)/,
      opera: /(?:Opera|OPR)\\/([0-9.]+)/,
      ie: /(?:MSIE |rv:)([0-9.]+)/
    };
    
    const match = userAgent.match(patterns[browser]);
    return match ? match[1] : 'unknown';
  }
}

// Usage example
const detector = new BrowserFeatureDetector();
const features = await detector.detectFeatures();
const browserInfo = detector.getBrowserInfo();

console.log('Browser:', browserInfo.name, browserInfo.version);
console.log('Features:', features);
console.log('WebGL supported:', detector.isFeatureSupported('webgl'));
console.log('Service Worker supported:', detector.isFeatureSupported('serviceWorker'));`}</pre>
            </div>
          </div>

          {/* Example 2 */}
          <div className="border-l-4 border-purple-500 pl-6">
            <div className="flex items-center mb-3">
              <div className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Cross-Browser Testing Framework</h3>
            </div>
            <div className="bg-gray-900 rounded-lg p-4 text-green-400 font-mono text-sm overflow-x-auto">
              <pre>{`// Automated cross-browser testing
class CrossBrowserTester {
  constructor() {
    this.browsers = [
      { name: 'chrome', version: '90+', platform: 'desktop' },
      { name: 'firefox', version: '88+', platform: 'desktop' },
      { name: 'safari', version: '14+', platform: 'desktop' },
      { name: 'edge', version: '90+', platform: 'desktop' },
      { name: 'chrome', version: '90+', platform: 'mobile' },
      { name: 'safari', version: '14+', platform: 'mobile' }
    ];
    this.testResults = [];
  }
  
  // Run comprehensive tests
  async runTests(testSuite) {
    const results = [];
    
    for (const browser of this.browsers) {
      console.log(\`Testing \${browser.name} \${browser.version} on \${browser.platform}...\`);
      
      const browserResults = await this.runBrowserTests(browser, testSuite);
      results.push({
        browser,
        results: browserResults,
        timestamp: new Date()
      });
    }
    
    this.testResults = results;
    return this.generateReport(results);
  }
  
  // Run tests for specific browser
  async runBrowserTests(browser, testSuite) {
    const results = {
      passed: 0,
      failed: 0,
      skipped: 0,
      tests: []
    };
    
    for (const [category, tests] of Object.entries(testSuite)) {
      for (const test of tests) {
        try {
          const result = await this.runTest(browser, test);
          results.tests.push({
            category,
            name: test.name,
            result: result.passed ? 'passed' : 'failed',
            details: result.details,
            duration: result.duration
          });
          
          if (result.passed) {
            results.passed++;
          } else {
            results.failed++;
          }
        } catch (error) {
          results.tests.push({
            category,
            name: test.name,
            result: 'skipped',
            details: error.message,
            duration: 0
          });
          results.skipped++;
        }
      }
    }
    
    return results;
  }
  
  // Run individual test
  async runTest(browser, test) {
    const startTime = Date.now();
    
    try {
      // Simulate browser environment
      const browserEnv = this.createBrowserEnvironment(browser);
      
      // Run the test
      const result = await test.run(browserEnv);
      
      const duration = Date.now() - startTime;
      
      return {
        passed: result.success,
        details: result.details,
        duration
      };
    } catch (error) {
      return {
        passed: false,
        details: error.message,
        duration: Date.now() - startTime
      };
    }
  }
  
  // Create browser environment for testing
  createBrowserEnvironment(browser) {
    return {
      name: browser.name,
      version: browser.version,
      platform: browser.platform,
      userAgent: this.generateUserAgent(browser),
      features: this.getBrowserFeatures(browser),
      capabilities: this.getBrowserCapabilities(browser)
    };
  }
  
  // Generate user agent string
  generateUserAgent(browser) {
    const userAgents = {
      chrome: \`Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/\${browser.version} Safari/537.36\`,
      firefox: \`Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:\${browser.version}) Gecko/20100101 Firefox/\${browser.version}\`,
      safari: \`Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/\${browser.version} Safari/605.1.15\`,
      edge: \`Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/\${browser.version} Safari/537.36 Edg/\${browser.version}\`
    };
    
    return userAgents[browser.name] || userAgents.chrome;
  }
  
  // Get browser features
  getBrowserFeatures(browser) {
    const features = {
      webgl: true,
      webassembly: true,
      serviceWorker: true,
      webrtc: true,
      webAudio: true,
      indexedDB: true,
      localStorage: true,
      sessionStorage: true
    };
    
    // Adjust features based on browser version
    if (browser.name === 'safari' && parseFloat(browser.version) < 14) {
      features.webgl = false;
      features.webassembly = false;
    }
    
    if (browser.name === 'firefox' && parseFloat(browser.version) < 88) {
      features.serviceWorker = false;
    }
    
    return features;
  }
  
  // Get browser capabilities
  getBrowserCapabilities(browser) {
    return {
      maxConcurrentRequests: browser.name === 'chrome' ? 6 : 4,
      maxRequestSize: browser.name === 'safari' ? 1000000 : 2000000,
      supportsWebP: browser.name !== 'safari' || parseFloat(browser.version) >= 14,
      supportsAVIF: browser.name === 'chrome' && parseFloat(browser.version) >= 85,
      supportsWebM: browser.name !== 'safari',
      supportsH264: true,
      supportsVP9: browser.name !== 'safari'
    };
  }
  
  // Generate test report
  generateReport(results) {
    const report = {
      summary: {
        totalBrowsers: results.length,
        totalTests: 0,
        totalPassed: 0,
        totalFailed: 0,
        totalSkipped: 0
      },
      browsers: {},
      recommendations: []
    };
    
    results.forEach(browserResult => {
      const browser = browserResult.browser;
      const results = browserResult.results;
      
      report.summary.totalTests += results.passed + results.failed + results.skipped;
      report.summary.totalPassed += results.passed;
      report.summary.totalFailed += results.failed;
      report.summary.totalSkipped += results.skipped;
      
      report.browsers[\`\${browser.name}-\${browser.version}-\${browser.platform}\`] = {
        passed: results.passed,
        failed: results.failed,
        skipped: results.skipped,
        successRate: (results.passed / (results.passed + results.failed)) * 100
      };
    });
    
    // Generate recommendations
    report.recommendations = this.generateRecommendations(report);
    
    return report;
  }
  
  // Generate recommendations based on test results
  generateRecommendations(report) {
    const recommendations = [];
    
    // Check for browsers with low success rates
    Object.entries(report.browsers).forEach(([browser, stats]) => {
      if (stats.successRate < 80) {
        recommendations.push({
          type: 'warning',
          message: \`\${browser} has low success rate (\${stats.successRate.toFixed(1)}%)\`,
          action: 'Review and fix failing tests for this browser'
        });
      }
    });
    
    // Check for overall compatibility
    if (report.summary.totalFailed > report.summary.totalPassed * 0.1) {
      recommendations.push({
        type: 'error',
        message: 'High failure rate across browsers',
        action: 'Review common failure patterns and implement fixes'
      });
    }
    
    return recommendations;
  }
}

// Test suite example
const testSuite = {
  'Basic Functionality': [
    {
      name: 'Page Load',
      run: async (browser) => {
        // Simulate page load test
        return { success: true, details: 'Page loaded successfully' };
      }
    },
    {
      name: 'Form Submission',
      run: async (browser) => {
        // Simulate form submission test
        return { success: true, details: 'Form submitted successfully' };
      }
    }
  ],
  'Performance': [
    {
      name: 'Load Time',
      run: async (browser) => {
        // Simulate performance test
        const loadTime = Math.random() * 2000 + 500; // 500-2500ms
        return { 
          success: loadTime < 2000, 
          details: \`Load time: \${loadTime.toFixed(0)}ms\` 
        };
      }
    }
  ],
  'Features': [
    {
      name: 'WebGL Support',
      run: async (browser) => {
        return { 
          success: browser.features.webgl, 
          details: browser.features.webgl ? 'WebGL supported' : 'WebGL not supported' 
        };
      }
    }
  ]
};

// Usage example
const tester = new CrossBrowserTester();
const report = await tester.runTests(testSuite);

console.log('Test Report:', report);
console.log('Recommendations:', report.recommendations);`}</pre>
            </div>
          </div>
        </div>
      </div>

      {/* Best Practices */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">💡 Best Practices</h2>
        
        <div className="space-y-4">
          <div className="flex items-start space-x-3">
            <div className="bg-green-100 rounded-lg p-2">
              <CheckCircle className="text-green-600" size={20} />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Progressive Enhancement</h3>
              <p className="text-gray-600 text-sm">Build core functionality first, then enhance with advanced features.</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <div className="bg-blue-100 rounded-lg p-2">
              <CheckCircle className="text-blue-600" size={20} />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Feature Detection</h3>
              <p className="text-gray-600 text-sm">Always detect features before using them, never rely on user agent strings.</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <div className="bg-purple-100 rounded-lg p-2">
              <CheckCircle className="text-purple-600" size={20} />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Graceful Degradation</h3>
              <p className="text-gray-600 text-sm">Provide fallbacks for unsupported features to ensure functionality.</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <div className="bg-orange-100 rounded-lg p-2">
              <CheckCircle className="text-orange-600" size={20} />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Regular Testing</h3>
              <p className="text-gray-600 text-sm">Test across multiple browsers and devices regularly to catch issues early.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Next Steps */}
      <div className="bg-gradient-to-r from-violet-600 to-purple-600 rounded-xl p-8 text-white">
        <h2 className="text-2xl font-bold mb-4">🌐 Ready to Ensure Cross-Browser Compatibility?</h2>
        <p className="text-violet-100 mb-6">
          Explore advanced browser compatibility features, testing strategies, and implementation guides 
          to build applications that work seamlessly across all browsers with Brolostack Browser Compatibility.
        </p>
        <div className="flex flex-wrap gap-4">
          <a 
            href="/docs/browser-compatibility" 
            className="inline-flex items-center px-6 py-3 bg-white/20 hover:bg-white/30 rounded-lg transition-colors"
          >
            <Globe className="mr-2" size={20} />
            Browser Compatibility
            <ArrowRight className="ml-2" size={16} />
          </a>
          <a 
            href="/docs/browser-private-mode" 
            className="inline-flex items-center px-6 py-3 bg-white/20 hover:bg-white/30 rounded-lg transition-colors"
          >
            <Shield className="mr-2" size={20} />
            Browser Private Mode
            <ArrowRight className="ml-2" size={16} />
          </a>
          <a 
            href="/docs/environment-management" 
            className="inline-flex items-center px-6 py-3 bg-white/20 hover:bg-white/30 rounded-lg transition-colors"
          >
            <Settings className="mr-2" size={20} />
            Environment Management
            <ArrowRight className="ml-2" size={16} />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default BrowserCompatibilityGuidePage;

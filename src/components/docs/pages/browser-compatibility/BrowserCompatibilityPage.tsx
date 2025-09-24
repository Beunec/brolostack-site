import React from 'react';
import { motion } from 'framer-motion';
import { 
  Globe, 
  Shield, 
  Zap, 
  ArrowRight, 
  Code, 
  CheckCircle,
  Settings,
  Smartphone
} from 'lucide-react';

const BrowserCompatibilityPage: React.FC = () => {
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
            Browser Compatibility
          </h1>
          <p className="text-xl text-violet-100 mb-6">
            Comprehensive browser compatibility and testing framework. Ensure your applications 
            work seamlessly across all browsers, devices, and platforms with automatic testing and optimization.
          </p>
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center space-x-2 bg-white/20 rounded-lg px-4 py-2">
              <Globe size={20} />
              <span className="font-medium">Cross-Browser</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/20 rounded-lg px-4 py-2">
              <Shield size={20} />
              <span className="font-medium">Auto-Testing</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/20 rounded-lg px-4 py-2">
              <Zap size={20} />
              <span className="font-medium">Performance</span>
            </div>
          </div>
        </div>
      </div>

      {/* Supported Browsers */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">🌐 Supported Browsers</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Desktop Browsers</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="bg-blue-100 rounded-lg p-2">
                  <Globe className="text-blue-600" size={16} />
                </div>
                <div>
                  <div className="font-medium text-gray-900">Chrome</div>
                  <div className="text-sm text-gray-600">Version 90+ (Full Support)</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-orange-100 rounded-lg p-2">
                  <Globe className="text-orange-600" size={16} />
                </div>
                <div>
                  <div className="font-medium text-gray-900">Firefox</div>
                  <div className="text-sm text-gray-600">Version 88+ (Full Support)</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-blue-100 rounded-lg p-2">
                  <Globe className="text-blue-600" size={16} />
                </div>
                <div>
                  <div className="font-medium text-gray-900">Safari</div>
                  <div className="text-sm text-gray-600">Version 14+ (Full Support)</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-blue-100 rounded-lg p-2">
                  <Globe className="text-blue-600" size={16} />
                </div>
                <div>
                  <div className="font-medium text-gray-900">Edge</div>
                  <div className="text-sm text-gray-600">Version 90+ (Full Support)</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Mobile Browsers</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="bg-green-100 rounded-lg p-2">
                  <Smartphone className="text-green-600" size={16} />
                </div>
                <div>
                  <div className="font-medium text-gray-900">Chrome Mobile</div>
                  <div className="text-sm text-gray-600">Version 90+ (Full Support)</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-blue-100 rounded-lg p-2">
                  <Smartphone className="text-blue-600" size={16} />
                </div>
                <div>
                  <div className="font-medium text-gray-900">Safari Mobile</div>
                  <div className="text-sm text-gray-600">Version 14+ (Full Support)</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-orange-100 rounded-lg p-2">
                  <Smartphone className="text-orange-600" size={16} />
                </div>
                <div>
                  <div className="font-medium text-gray-900">Firefox Mobile</div>
                  <div className="text-sm text-gray-600">Version 88+ (Full Support)</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-purple-100 rounded-lg p-2">
                  <Smartphone className="text-purple-600" size={16} />
                </div>
                <div>
                  <div className="font-medium text-gray-900">Samsung Internet</div>
                  <div className="text-sm text-gray-600">Version 13+ (Full Support)</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Features Support</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="bg-green-100 rounded-lg p-2">
                  <CheckCircle className="text-green-600" size={16} />
                </div>
                <div>
                  <div className="font-medium text-gray-900">WebGL 2.0</div>
                  <div className="text-sm text-gray-600">3D graphics and rendering</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-blue-100 rounded-lg p-2">
                  <CheckCircle className="text-blue-600" size={16} />
                </div>
                <div>
                  <div className="font-medium text-gray-900">WebAssembly</div>
                  <div className="text-sm text-gray-600">High-performance computing</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-purple-100 rounded-lg p-2">
                  <CheckCircle className="text-purple-600" size={16} />
                </div>
                <div>
                  <div className="font-medium text-gray-900">Service Workers</div>
                  <div className="text-sm text-gray-600">Offline functionality</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-orange-100 rounded-lg p-2">
                  <CheckCircle className="text-orange-600" size={16} />
                </div>
                <div>
                  <div className="font-medium text-gray-900">WebRTC</div>
                  <div className="text-sm text-gray-600">Real-time communication</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Start */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">🚀 Quick Start</h2>
        
        <div className="space-y-6">
          {/* Step 1 */}
          <div className="border-l-4 border-violet-500 pl-6">
            <div className="flex items-center mb-3">
              <div className="bg-violet-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Initialize Browser Compatibility</h3>
            </div>
            <div className="bg-gray-900 rounded-lg p-4 text-green-400 font-mono text-sm overflow-x-auto">
              <pre>{`import { BrolostackBrowserCompatibility } from 'brolostack';

// Initialize browser compatibility
const browserCompat = new BrolostackBrowserCompatibility({
  targetBrowsers: [
    {
      name: 'chrome',
      versions: ['90+'],
      platforms: ['desktop', 'mobile']
    },
    {
      name: 'firefox',
      versions: ['88+'],
      platforms: ['desktop', 'mobile']
    },
    {
      name: 'safari',
      versions: ['14+'],
      platforms: ['desktop', 'mobile']
    },
    {
      name: 'edge',
      versions: ['90+'],
      platforms: ['desktop']
    }
  ],
  features: {
    webgl: true,
    webassembly: true,
    serviceWorkers: true,
    webrtc: true,
    webAudio: true,
    webRTC: true,
    indexedDB: true,
    localStorage: true,
    sessionStorage: true
  },
  testing: {
    enabled: true,
    automated: true,
    crossBrowser: true,
    performance: true,
    accessibility: true
  },
  fallbacks: {
    enabled: true,
    graceful: true,
    polyfills: true
  }
});

await browserCompat.initialize();`}</pre>
            </div>
          </div>

          {/* Step 2 */}
          <div className="border-l-4 border-purple-500 pl-6">
            <div className="flex items-center mb-3">
              <div className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Feature Detection</h3>
            </div>
            <div className="bg-gray-900 rounded-lg p-4 text-green-400 font-mono text-sm overflow-x-auto">
              <pre>{`// Feature detection and fallbacks
const featureDetection = {
  // Check WebGL support
  checkWebGL: () => {
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl2') || canvas.getContext('webgl');
    
    if (gl) {
      return {
        supported: true,
        version: gl.getParameter(gl.VERSION),
        vendor: gl.getParameter(gl.VENDOR),
        renderer: gl.getParameter(gl.RENDERER)
      };
    }
    
    return { supported: false };
  },
  
  // Check WebAssembly support
  checkWebAssembly: () => {
    if (typeof WebAssembly === 'object' && typeof WebAssembly.instantiate === 'function') {
      return { supported: true };
    }
    
    return { supported: false };
  },
  
  // Check Service Worker support
  checkServiceWorker: () => {
    if ('serviceWorker' in navigator) {
      return { supported: true };
    }
    
    return { supported: false };
  },
  
  // Check WebRTC support
  checkWebRTC: () => {
    if (window.RTCPeerConnection && window.RTCSessionDescription) {
      return { supported: true };
    }
    
    return { supported: false };
  }
};

// React hook for feature detection
const useFeatureDetection = () => {
  const [features, setFeatures] = useState({});
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const detectFeatures = async () => {
      const detectedFeatures = {
        webgl: featureDetection.checkWebGL(),
        webassembly: featureDetection.checkWebAssembly(),
        serviceWorker: featureDetection.checkServiceWorker(),
        webrtc: featureDetection.checkWebRTC()
      };
      
      setFeatures(detectedFeatures);
      setLoading(false);
    };
    
    detectFeatures();
  }, []);
  
  return { features, loading };
};

// Usage in components
const FeatureCompatibility = () => {
  const { features, loading } = useFeatureDetection();
  
  if (loading) {
    return <div>Detecting browser features...</div>;
  }
  
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold text-gray-900">Browser Feature Support</h2>
      
      {Object.entries(features).map(([feature, support]) => (
        <div key={feature} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
          <span className="font-medium text-gray-900 capitalize">
            {feature.replace(/([A-Z])/g, ' $1').trim()}
          </span>
          <div className="flex items-center space-x-2">
            {support.supported ? (
              <CheckCircle className="text-green-600" size={20} />
            ) : (
              <AlertTriangle className="text-red-600" size={20} />
            )}
            <span className={support.supported ? 'text-green-600' : 'text-red-600'}>
              {support.supported ? 'Supported' : 'Not Supported'}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};`}</pre>
            </div>
          </div>

          {/* Step 3 */}
          <div className="border-l-4 border-blue-500 pl-6">
            <div className="flex items-center mb-3">
              <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Cross-Browser Testing</h3>
            </div>
            <div className="bg-gray-900 rounded-lg p-4 text-green-400 font-mono text-sm overflow-x-auto">
              <pre>{`// Cross-browser testing framework
const crossBrowserTesting = {
  // Run automated tests
  runTests: async (testSuite) => {
    const results = await browserCompat.runCrossBrowserTests({
      tests: testSuite,
      browsers: ['chrome', 'firefox', 'safari', 'edge'],
      platforms: ['desktop', 'mobile'],
      parallel: true,
      timeout: 30000
    });
    
    return results;
  },
  
  // Performance testing
  runPerformanceTests: async () => {
    const performanceResults = await browserCompat.measurePerformance({
      metrics: ['fcp', 'lcp', 'fid', 'cls', 'ttfb'],
      browsers: ['chrome', 'firefox', 'safari'],
      iterations: 5
    });
    
    return performanceResults;
  },
  
  // Accessibility testing
  runAccessibilityTests: async () => {
    const a11yResults = await browserCompat.testAccessibility({
      standards: ['WCAG 2.1 AA', 'Section 508'],
      tools: ['axe-core', 'lighthouse'],
      browsers: ['chrome', 'firefox', 'safari']
    });
    
    return a11yResults;
  }
};

// Test suite example
const testSuite = {
  'Basic Functionality': [
    {
      name: 'User Login',
      test: async (browser) => {
        await browser.navigate('/login');
        await browser.fill('#email', 'test@example.com');
        await browser.fill('#password', 'password123');
        await browser.click('#login-button');
        await browser.waitForElement('#dashboard');
        return browser.getCurrentUrl().includes('/dashboard');
      }
    },
    {
      name: 'Data Loading',
      test: async (browser) => {
        await browser.navigate('/data');
        await browser.waitForElement('.data-table');
        const rows = await browser.getElements('.data-row');
        return rows.length > 0;
      }
    }
  ],
  'Performance': [
    {
      name: 'Page Load Time',
      test: async (browser) => {
        const startTime = Date.now();
        await browser.navigate('/');
        await browser.waitForElement('body');
        const loadTime = Date.now() - startTime;
        return loadTime < 3000; // Less than 3 seconds
      }
    }
  ]
};

// Run comprehensive testing
const runComprehensiveTests = async () => {
  console.log('Running cross-browser tests...');
  const testResults = await crossBrowserTesting.runTests(testSuite);
  
  console.log('Running performance tests...');
  const performanceResults = await crossBrowserTesting.runPerformanceTests();
  
  console.log('Running accessibility tests...');
  const a11yResults = await crossBrowserTesting.runAccessibilityTests();
  
  return {
    functionality: testResults,
    performance: performanceResults,
    accessibility: a11yResults
  };
};`}</pre>
            </div>
          </div>
        </div>
      </div>

      {/* Compatibility Matrix */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">📊 Compatibility Matrix</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">Feature</th>
                <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">Chrome</th>
                <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">Firefox</th>
                <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">Safari</th>
                <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">Edge</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-200 px-4 py-3 font-medium text-gray-900">WebGL 2.0</td>
                <td className="border border-gray-200 px-4 py-3 text-green-600 font-semibold">✅ 90+</td>
                <td className="border border-gray-200 px-4 py-3 text-green-600 font-semibold">✅ 88+</td>
                <td className="border border-gray-200 px-4 py-3 text-green-600 font-semibold">✅ 14+</td>
                <td className="border border-gray-200 px-4 py-3 text-green-600 font-semibold">✅ 90+</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-3 font-medium text-gray-900">WebAssembly</td>
                <td className="border border-gray-200 px-4 py-3 text-green-600 font-semibold">✅ 90+</td>
                <td className="border border-gray-200 px-4 py-3 text-green-600 font-semibold">✅ 88+</td>
                <td className="border border-gray-200 px-4 py-3 text-green-600 font-semibold">✅ 14+</td>
                <td className="border border-gray-200 px-4 py-3 text-green-600 font-semibold">✅ 90+</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-3 font-medium text-gray-900">Service Workers</td>
                <td className="border border-gray-200 px-4 py-3 text-green-600 font-semibold">✅ 90+</td>
                <td className="border border-gray-200 px-4 py-3 text-green-600 font-semibold">✅ 88+</td>
                <td className="border border-gray-200 px-4 py-3 text-green-600 font-semibold">✅ 14+</td>
                <td className="border border-gray-200 px-4 py-3 text-green-600 font-semibold">✅ 90+</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-3 font-medium text-gray-900">WebRTC</td>
                <td className="border border-gray-200 px-4 py-3 text-green-600 font-semibold">✅ 90+</td>
                <td className="border border-gray-200 px-4 py-3 text-green-600 font-semibold">✅ 88+</td>
                <td className="border border-gray-200 px-4 py-3 text-green-600 font-semibold">✅ 14+</td>
                <td className="border border-gray-200 px-4 py-3 text-green-600 font-semibold">✅ 90+</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-3 font-medium text-gray-900">IndexedDB</td>
                <td className="border border-gray-200 px-4 py-3 text-green-600 font-semibold">✅ 90+</td>
                <td className="border border-gray-200 px-4 py-3 text-green-600 font-semibold">✅ 88+</td>
                <td className="border border-gray-200 px-4 py-3 text-green-600 font-semibold">✅ 14+</td>
                <td className="border border-gray-200 px-4 py-3 text-green-600 font-semibold">✅ 90+</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Performance Metrics */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">📈 Performance Metrics</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">Browser</th>
                <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">Load Time</th>
                <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">Memory Usage</th>
                <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">CPU Usage</th>
                <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">Compatibility Score</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-200 px-4 py-3 font-medium text-gray-900">Chrome 90+</td>
                <td className="border border-gray-200 px-4 py-3 text-green-600 font-semibold">1.2s</td>
                <td className="border border-gray-200 px-4 py-3 text-blue-600 font-semibold">45MB</td>
                <td className="border border-gray-200 px-4 py-3 text-purple-600 font-semibold">12%</td>
                <td className="border border-gray-200 px-4 py-3 text-green-600 font-semibold">100%</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-3 font-medium text-gray-900">Firefox 88+</td>
                <td className="border border-gray-200 px-4 py-3 text-green-600 font-semibold">1.4s</td>
                <td className="border border-gray-200 px-4 py-3 text-blue-600 font-semibold">52MB</td>
                <td className="border border-gray-200 px-4 py-3 text-purple-600 font-semibold">15%</td>
                <td className="border border-gray-200 px-4 py-3 text-green-600 font-semibold">98%</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-3 font-medium text-gray-900">Safari 14+</td>
                <td className="border border-gray-200 px-4 py-3 text-green-600 font-semibold">1.1s</td>
                <td className="border border-gray-200 px-4 py-3 text-blue-600 font-semibold">38MB</td>
                <td className="border border-gray-200 px-4 py-3 text-purple-600 font-semibold">10%</td>
                <td className="border border-gray-200 px-4 py-3 text-green-600 font-semibold">95%</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-3 font-medium text-gray-900">Edge 90+</td>
                <td className="border border-gray-200 px-4 py-3 text-green-600 font-semibold">1.3s</td>
                <td className="border border-gray-200 px-4 py-3 text-blue-600 font-semibold">48MB</td>
                <td className="border border-gray-200 px-4 py-3 text-purple-600 font-semibold">13%</td>
                <td className="border border-gray-200 px-4 py-3 text-green-600 font-semibold">99%</td>
              </tr>
            </tbody>
          </table>
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
            href="/docs/browser-compatibility-guide" 
            className="inline-flex items-center px-6 py-3 bg-white/20 hover:bg-white/30 rounded-lg transition-colors"
          >
            <Code className="mr-2" size={20} />
            Implementation Guide
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

export default BrowserCompatibilityPage;

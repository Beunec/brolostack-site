import React from 'react';
import { motion } from 'framer-motion';
import { 
  Settings, 
  Cloud, 
  Zap, 
  ArrowRight, 
  Code, 
  Shield,
  Eye
} from 'lucide-react';

const EnvironmentManagementPage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="space-y-8"
    >
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-teal-600 to-cyan-600 rounded-2xl p-8 text-white">
        <div className="max-w-4xl">
          <h1 className="text-4xl font-bold mb-4">
            Environment Management
          </h1>
          <p className="text-xl text-teal-100 mb-6">
            Automatic environment detection and optimization. Seamlessly adapt your application 
            to different environments with intelligent configuration management and performance optimization.
          </p>
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center space-x-2 bg-white/20 rounded-lg px-4 py-2">
              <Settings size={20} />
              <span className="font-medium">Auto-Detection</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/20 rounded-lg px-4 py-2">
              <Cloud size={20} />
              <span className="font-medium">Multi-Environment</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/20 rounded-lg px-4 py-2">
              <Zap size={20} />
              <span className="font-medium">Auto-Optimization</span>
            </div>
          </div>
        </div>
      </div>

      {/* Supported Environments */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">🌍 Supported Environments</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Development</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="bg-green-100 rounded-lg p-2">
                  <Settings className="text-green-600" size={16} />
                </div>
                <div>
                  <div className="font-medium text-gray-900">Local Development</div>
                  <div className="text-sm text-gray-600">Local machine development environment</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-blue-100 rounded-lg p-2">
                  <Settings className="text-blue-600" size={16} />
                </div>
                <div>
                  <div className="font-medium text-gray-900">Docker Containers</div>
                  <div className="text-sm text-gray-600">Containerized development setup</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-purple-100 rounded-lg p-2">
                  <Settings className="text-purple-600" size={16} />
                </div>
                <div>
                  <div className="font-medium text-gray-900">Virtual Machines</div>
                  <div className="text-sm text-gray-600">VM-based development environments</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Staging</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="bg-orange-100 rounded-lg p-2">
                  <Cloud className="text-orange-600" size={16} />
                </div>
                <div>
                  <div className="font-medium text-gray-900">Cloud Staging</div>
                  <div className="text-sm text-gray-600">Cloud-based staging environments</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-yellow-100 rounded-lg p-2">
                  <Cloud className="text-yellow-600" size={16} />
                </div>
                <div>
                  <div className="font-medium text-gray-900">Preview Deployments</div>
                  <div className="text-sm text-gray-600">Feature branch preview environments</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-red-100 rounded-lg p-2">
                  <Cloud className="text-red-600" size={16} />
                </div>
                <div>
                  <div className="font-medium text-gray-900">Integration Testing</div>
                  <div className="text-sm text-gray-600">Automated integration test environments</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Production</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="bg-green-100 rounded-lg p-2">
                  <Cloud className="text-green-600" size={16} />
                </div>
                <div>
                  <div className="font-medium text-gray-900">Cloud Production</div>
                  <div className="text-sm text-gray-600">Scalable cloud production environments</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-blue-100 rounded-lg p-2">
                  <Cloud className="text-blue-600" size={16} />
                </div>
                <div>
                  <div className="font-medium text-gray-900">Edge Computing</div>
                  <div className="text-sm text-gray-600">Edge deployment for global performance</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-purple-100 rounded-lg p-2">
                  <Cloud className="text-purple-600" size={16} />
                </div>
                <div>
                  <div className="font-medium text-gray-900">Hybrid Cloud</div>
                  <div className="text-sm text-gray-600">On-premises and cloud hybrid deployments</div>
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
          <div className="border-l-4 border-teal-500 pl-6">
            <div className="flex items-center mb-3">
              <div className="bg-teal-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Initialize Environment Manager</h3>
            </div>
            <div className="bg-gray-900 rounded-lg p-4 text-green-400 font-mono text-sm overflow-x-auto">
              <pre>{`import { BrolostackEnvironmentManager } from 'brolostack';

// Initialize environment manager
const envManager = new BrolostackEnvironmentManager({
  autoDetection: true,
  environments: {
    development: {
      name: 'development',
      config: {
        apiUrl: 'http://localhost:3000',
        debug: true,
        logging: 'verbose',
        cache: false,
        analytics: false
      },
      optimization: {
        bundleSize: 'development',
        performance: 'development',
        security: 'relaxed'
      }
    },
    staging: {
      name: 'staging',
      config: {
        apiUrl: 'https://staging-api.your-app.com',
        debug: false,
        logging: 'info',
        cache: true,
        analytics: true
      },
      optimization: {
        bundleSize: 'optimized',
        performance: 'balanced',
        security: 'standard'
      }
    },
    production: {
      name: 'production',
      config: {
        apiUrl: 'https://api.your-app.com',
        debug: false,
        logging: 'error',
        cache: true,
        analytics: true
      },
      optimization: {
        bundleSize: 'minimal',
        performance: 'maximum',
        security: 'strict'
      }
    }
  }
});

await envManager.initialize();`}</pre>
            </div>
          </div>

          {/* Step 2 */}
          <div className="border-l-4 border-cyan-500 pl-6">
            <div className="flex items-center mb-3">
              <div className="bg-cyan-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Environment Detection</h3>
            </div>
            <div className="bg-gray-900 rounded-lg p-4 text-green-400 font-mono text-sm overflow-x-auto">
              <pre>{`// Automatic environment detection
const currentEnv = envManager.getCurrentEnvironment();
console.log('Current environment:', currentEnv.name);

// Environment-specific configuration
const config = envManager.getConfig();
console.log('API URL:', config.apiUrl);
console.log('Debug mode:', config.debug);

// Environment-specific optimizations
const optimizations = envManager.getOptimizations();
console.log('Bundle size:', optimizations.bundleSize);
console.log('Performance level:', optimizations.performance);

// React integration
const useEnvironment = () => {
  const [environment, setEnvironment] = useState(null);
  const [config, setConfig] = useState(null);
  
  useEffect(() => {
    const currentEnv = envManager.getCurrentEnvironment();
    const envConfig = envManager.getConfig();
    
    setEnvironment(currentEnv);
    setConfig(envConfig);
    
    // Listen for environment changes
    envManager.on('environment-changed', (newEnv) => {
      setEnvironment(newEnv);
      setConfig(envManager.getConfig());
    });
  }, []);
  
  return { environment, config };
};

// Usage in components
const MyComponent = () => {
  const { environment, config } = useEnvironment();
  
  return (
    <div>
      <h1>Running in {environment?.name} mode</h1>
      {config?.debug && <div>Debug information</div>}
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
              <h3 className="text-xl font-semibold text-gray-900">Performance Optimization</h3>
            </div>
            <div className="bg-gray-900 rounded-lg p-4 text-green-400 font-mono text-sm overflow-x-auto">
              <pre>{`// Environment-specific optimizations
const optimizationManager = {
  // Bundle optimization
  optimizeBundle: (environment) => {
    switch (environment) {
      case 'development':
        return {
          minification: false,
          treeShaking: false,
          sourceMaps: true,
          hotReload: true
        };
      case 'staging':
        return {
          minification: true,
          treeShaking: true,
          sourceMaps: true,
          hotReload: false
        };
      case 'production':
        return {
          minification: true,
          treeShaking: true,
          sourceMaps: false,
          hotReload: false,
          compression: 'gzip'
        };
    }
  },
  
  // Performance optimization
  optimizePerformance: (environment) => {
    switch (environment) {
      case 'development':
        return {
          caching: false,
          prefetching: false,
          lazyLoading: false,
          compression: false
        };
      case 'staging':
        return {
          caching: true,
          prefetching: true,
          lazyLoading: true,
          compression: 'basic'
        };
      case 'production':
        return {
          caching: true,
          prefetching: true,
          lazyLoading: true,
          compression: 'advanced',
          cdn: true
        };
    }
  },
  
  // Security optimization
  optimizeSecurity: (environment) => {
    switch (environment) {
      case 'development':
        return {
          https: false,
          csp: false,
          cors: 'permissive',
          rateLimit: false
        };
      case 'staging':
        return {
          https: true,
          csp: 'basic',
          cors: 'restricted',
          rateLimit: true
        };
      case 'production':
        return {
          https: true,
          csp: 'strict',
          cors: 'strict',
          rateLimit: true,
          waf: true
        };
    }
  }
};

// Apply optimizations
const applyOptimizations = (environment) => {
  const bundleOpts = optimizationManager.optimizeBundle(environment);
  const perfOpts = optimizationManager.optimizePerformance(environment);
  const secOpts = optimizationManager.optimizeSecurity(environment);
  
  envManager.applyOptimizations({
    bundle: bundleOpts,
    performance: perfOpts,
    security: secOpts
  });
};`}</pre>
            </div>
          </div>
        </div>
      </div>

      {/* Environment Features */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">⚙️ Environment Features</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-center space-x-3 mb-3">
                <div className="bg-teal-100 rounded-lg p-2">
                  <Eye className="text-teal-600" size={20} />
                </div>
                <h3 className="font-semibold text-gray-900">Auto-Detection</h3>
              </div>
              <p className="text-gray-600 text-sm mb-3">
                Automatic detection of environment based on hostname, URL, and configuration.
              </p>
              <div className="bg-gray-50 rounded p-3">
                <div className="text-xs font-mono text-gray-700">
                  Hostname, URL patterns, environment variables
                </div>
              </div>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-center space-x-3 mb-3">
                <div className="bg-cyan-100 rounded-lg p-2">
                  <Zap className="text-cyan-600" size={20} />
                </div>
                <h3 className="font-semibold text-gray-900">Performance Optimization</h3>
              </div>
              <p className="text-gray-600 text-sm mb-3">
                Environment-specific performance optimizations and resource management.
              </p>
              <div className="bg-gray-50 rounded p-3">
                <div className="text-xs font-mono text-gray-700">
                  Bundle optimization, caching, compression
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-center space-x-3 mb-3">
                <div className="bg-blue-100 rounded-lg p-2">
                  <Shield className="text-blue-600" size={20} />
                </div>
                <h3 className="font-semibold text-gray-900">Security Configuration</h3>
              </div>
              <p className="text-gray-600 text-sm mb-3">
                Environment-specific security settings and compliance configurations.
              </p>
              <div className="bg-gray-50 rounded p-3">
                <div className="text-xs font-mono text-gray-700">
                  HTTPS, CSP, CORS, rate limiting
                </div>
              </div>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-center space-x-3 mb-3">
                <div className="bg-purple-100 rounded-lg p-2">
                  <Settings className="text-purple-600" size={20} />
                </div>
                <h3 className="font-semibold text-gray-900">Configuration Management</h3>
              </div>
              <p className="text-gray-600 text-sm mb-3">
                Centralized configuration management with environment-specific overrides.
              </p>
              <div className="bg-gray-50 rounded p-3">
                <div className="text-xs font-mono text-gray-700">
                  Config inheritance, overrides, validation
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Performance Metrics */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">📈 Environment Performance</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">Environment</th>
                <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">Bundle Size</th>
                <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">Load Time</th>
                <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">Performance</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-200 px-4 py-3 font-medium text-gray-900">Development</td>
                <td className="border border-gray-200 px-4 py-3 text-orange-600 font-semibold">2.5MB</td>
                <td className="border border-gray-200 px-4 py-3 text-orange-600 font-semibold">3.2s</td>
                <td className="border border-gray-200 px-4 py-3 text-gray-600">Optimized for debugging</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-3 font-medium text-gray-900">Staging</td>
                <td className="border border-gray-200 px-4 py-3 text-blue-600 font-semibold">850KB</td>
                <td className="border border-gray-200 px-4 py-3 text-blue-600 font-semibold">1.8s</td>
                <td className="border border-gray-200 px-4 py-3 text-gray-600">Balanced performance</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-3 font-medium text-gray-900">Production</td>
                <td className="border border-gray-200 px-4 py-3 text-green-600 font-semibold">420KB</td>
                <td className="border border-gray-200 px-4 py-3 text-green-600 font-semibold">0.9s</td>
                <td className="border border-gray-200 px-4 py-3 text-gray-600">Maximum performance</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Next Steps */}
      <div className="bg-gradient-to-r from-teal-600 to-cyan-600 rounded-xl p-8 text-white">
        <h2 className="text-2xl font-bold mb-4">🌍 Ready to Optimize Your Environment?</h2>
        <p className="text-teal-100 mb-6">
          Explore advanced environment management features, optimization strategies, and implementation guides 
          to build high-performance applications with Brolostack Environment Management.
        </p>
        <div className="flex flex-wrap gap-4">
          <a 
            href="/docs/environment-management-guide" 
            className="inline-flex items-center px-6 py-3 bg-white/20 hover:bg-white/30 rounded-lg transition-colors"
          >
            <Code className="mr-2" size={20} />
            Implementation Guide
            <ArrowRight className="ml-2" size={16} />
          </a>
          <a 
            href="/docs/cloud-integration" 
            className="inline-flex items-center px-6 py-3 bg-white/20 hover:bg-white/30 rounded-lg transition-colors"
          >
            <Cloud className="mr-2" size={20} />
            Cloud Integration
            <ArrowRight className="ml-2" size={16} />
          </a>
          <a 
            href="/docs/enterprise-features" 
            className="inline-flex items-center px-6 py-3 bg-white/20 hover:bg-white/30 rounded-lg transition-colors"
          >
            <Shield className="mr-2" size={20} />
            Enterprise Features
            <ArrowRight className="ml-2" size={16} />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default EnvironmentManagementPage;

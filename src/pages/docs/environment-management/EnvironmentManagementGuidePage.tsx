import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Settings, 
  Cloud, 
  Database, 
  Shield, 
  CheckCircle, 
  Copy,
  Terminal,
  Server,
  Globe,
  Key,
  Monitor
} from 'lucide-react';

const EnvironmentManagementGuidePage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('development');
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const copyToClipboard = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const developmentExample = `import { Brolostack } from 'brolostack';

// Development Environment Configuration
const brolostack = new Brolostack({
  environment: 'development',
  config: {
    database: {
      type: 'sqlite',
      path: './dev.db'
    },
    auth: {
      jwtSecret: 'dev-secret-key',
      sessionTimeout: 3600000
    },
    logging: {
      level: 'debug',
      console: true
    }
  }
});

// Environment-specific settings
const envConfig = {
  development: {
    apiUrl: 'http://localhost:3000',
    debug: true,
    hotReload: true
  },
  staging: {
    apiUrl: 'https://staging-api.brolostack.com',
    debug: false,
    hotReload: false
  },
  production: {
    apiUrl: 'https://api.brolostack.com',
    debug: false,
    hotReload: false
  }
};`;

  const stagingExample = `import { Brolostack } from 'brolostack';

// Staging Environment Configuration
const brolostack = new Brolostack({
  environment: 'staging',
  config: {
    database: {
      type: 'postgresql',
      host: process.env.STAGING_DB_HOST,
      port: process.env.STAGING_DB_PORT,
      database: process.env.STAGING_DB_NAME,
      username: process.env.STAGING_DB_USER,
      password: process.env.STAGING_DB_PASSWORD
    },
    auth: {
      jwtSecret: process.env.STAGING_JWT_SECRET,
      sessionTimeout: 1800000
    },
    logging: {
      level: 'info',
      file: './logs/staging.log'
    }
  }
});

// Staging-specific features
const stagingFeatures = {
  dataSeeding: true,
  performanceMonitoring: true,
  errorReporting: true,
  backupEnabled: true
};`;

  const productionExample = `import { Brolostack } from 'brolostack';

// Production Environment Configuration
const brolostack = new Brolostack({
  environment: 'production',
  config: {
    database: {
      type: 'postgresql',
      host: process.env.PROD_DB_HOST,
      port: process.env.PROD_DB_PORT,
      database: process.env.PROD_DB_NAME,
      username: process.env.PROD_DB_USER,
      password: process.env.PROD_DB_PASSWORD,
      ssl: true,
      connectionLimit: 20
    },
    auth: {
      jwtSecret: process.env.PROD_JWT_SECRET,
      sessionTimeout: 900000,
      mfa: true
    },
    logging: {
      level: 'error',
      file: './logs/production.log',
      external: 'splunk'
    },
    monitoring: {
      enabled: true,
      metrics: true,
      alerts: true
    }
  }
});

// Production security settings
const securityConfig = {
  rateLimiting: true,
  cors: {
    origin: ['https://brolostack.com'],
    credentials: true
  },
  helmet: true,
  compression: true
};`;

  const deploymentExample = `import { Brolostack } from 'brolostack';

// Multi-environment deployment
const environments = {
  development: {
    name: 'Development',
    url: 'http://localhost:3000',
    database: 'sqlite',
    features: ['debug', 'hotReload']
  },
  staging: {
    name: 'Staging',
    url: 'https://staging.brolostack.com',
    database: 'postgresql',
    features: ['monitoring', 'testing']
  },
  production: {
    name: 'Production',
    url: 'https://brolostack.com',
    database: 'postgresql',
    features: ['ssl', 'cdn', 'monitoring']
  }
};

// Environment deployment script
async function deployToEnvironment(env) {
  const config = environments[env];
  
  try {
    // Build application
    await buildApplication();
    
    // Deploy to environment
    await deploy(config);
    
    // Run health checks
    await healthCheck(config.url);
    
    console.log(\`Successfully deployed to \${config.name}\`);
  } catch (error) {
    console.error(\`Deployment to \${config.name} failed:\`, error);
    throw error;
  }
}

// Docker configuration
const dockerConfig = {
  development: {
    image: 'brolostack:dev',
    ports: ['3000:3000'],
    volumes: ['./src:/app/src']
  },
  staging: {
    image: 'brolostack:staging',
    ports: ['3000:3000'],
    environment: {
      NODE_ENV: 'staging'
    }
  },
  production: {
    image: 'brolostack:latest',
    ports: ['80:3000'],
    environment: {
      NODE_ENV: 'production'
    }
  }
};`;

  const monitoringExample = `import { Brolostack } from 'brolostack';

// Environment monitoring
const brolostack = new Brolostack({
  monitoring: {
    environments: {
      development: {
        metrics: ['cpu', 'memory', 'response_time'],
        alerts: false
      },
      staging: {
        metrics: ['cpu', 'memory', 'response_time', 'error_rate'],
        alerts: ['email']
      },
      production: {
        metrics: ['cpu', 'memory', 'response_time', 'error_rate', 'throughput'],
        alerts: ['email', 'slack', 'pagerduty']
      }
    }
  }
});

// Environment health monitoring
class EnvironmentMonitor {
  constructor(brolostack) {
    this.brolostack = brolostack;
  }

  async checkEnvironmentHealth(env) {
    const checks = {
      database: await this.checkDatabase(env),
      api: await this.checkAPI(env),
      storage: await this.checkStorage(env),
      auth: await this.checkAuth(env)
    };
    
    return {
      environment: env,
      timestamp: new Date(),
      status: Object.values(checks).every(check => check.status === 'healthy') ? 'healthy' : 'unhealthy',
      checks
    };
  }

  async checkDatabase(env) {
    try {
      const db = this.brolostack.environment.getDatabase(env);
      await db.query('SELECT 1');
      return { status: 'healthy', responseTime: Date.now() };
    } catch (error) {
      return { status: 'unhealthy', error: error.message };
    }
  }

  async checkAPI(env) {
    try {
      const response = await fetch(\`\${this.brolostack.environment.getApiUrl(env)}/health\`);
      return { status: response.ok ? 'healthy' : 'unhealthy', statusCode: response.status };
    } catch (error) {
      return { status: 'unhealthy', error: error.message };
    }
  }
}

const monitor = new EnvironmentMonitor(brolostack);`;

  const securityExample = `import { Brolostack } from 'brolostack';

// Environment-specific security
const securityConfig = {
  development: {
    ssl: false,
    cors: { origin: '*' },
    rateLimit: { windowMs: 900000, max: 1000 }
  },
  staging: {
    ssl: true,
    cors: { origin: ['https://staging.brolostack.com'] },
    rateLimit: { windowMs: 900000, max: 100 }
  },
  production: {
    ssl: true,
    cors: { origin: ['https://brolostack.com'] },
    rateLimit: { windowMs: 900000, max: 50 },
    mfa: true,
    audit: true
  }
};

// Environment security manager
class EnvironmentSecurity {
  constructor(brolostack) {
    this.brolostack = brolostack;
  }

  async applySecurityConfig(env) {
    const config = securityConfig[env];
    
    // Apply SSL configuration
    if (config.ssl) {
      await this.enableSSL(env);
    }
    
    // Apply CORS configuration
    await this.configureCORS(config.cors);
    
    // Apply rate limiting
    await this.configureRateLimit(config.rateLimit);
    
    // Apply additional security measures for production
    if (env === 'production') {
      await this.applyProductionSecurity();
    }
  }

  async enableSSL(env) {
    // SSL configuration logic
    console.log(\`Enabling SSL for \${env} environment\`);
  }

  async applyProductionSecurity() {
    // Production-specific security measures
    await this.enableMFAAuth();
    await this.enableAuditLogging();
    await this.enableIntrusionDetection();
  }
}

const security = new EnvironmentSecurity(brolostack);`;

  const tabs = [
    { id: 'development', label: 'Development', icon: Terminal },
    { id: 'staging', label: 'Staging', icon: Server },
    { id: 'production', label: 'Production', icon: Globe },
    { id: 'deployment', label: 'Deployment', icon: Cloud },
    { id: 'monitoring', label: 'Monitoring', icon: Monitor },
    { id: 'security', label: 'Security', icon: Shield }
  ];

  const getCodeExample = (tabId: string) => {
    switch (tabId) {
      case 'development': return developmentExample;
      case 'staging': return stagingExample;
      case 'production': return productionExample;
      case 'deployment': return deploymentExample;
      case 'monitoring': return monitoringExample;
      case 'security': return securityExample;
      default: return developmentExample;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-100 rounded-full mb-6">
            <Settings className="w-8 h-8 text-indigo-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Environment Management Guide
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive environment management for development, staging, 
            and production deployments with monitoring and security
          </p>
        </motion.div>

        {/* Features Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <Terminal className="w-8 h-8 text-blue-600 mb-4" />
            <h3 className="font-semibold text-gray-900 mb-2">Development</h3>
            <p className="text-gray-600 text-sm">Local development with hot reload</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <Server className="w-8 h-8 text-green-600 mb-4" />
            <h3 className="font-semibold text-gray-900 mb-2">Staging</h3>
            <p className="text-gray-600 text-sm">Testing environment with monitoring</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <Globe className="w-8 h-8 text-purple-600 mb-4" />
            <h3 className="font-semibold text-gray-900 mb-2">Production</h3>
            <p className="text-gray-600 text-sm">Secure production deployment</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <Monitor className="w-8 h-8 text-orange-600 mb-4" />
            <h3 className="font-semibold text-gray-900 mb-2">Monitoring</h3>
            <p className="text-gray-600 text-sm">Real-time health monitoring</p>
          </div>
        </motion.div>

        {/* Interactive Code Examples */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden"
        >
          {/* Tab Navigation */}
          <div className="border-b border-gray-200">
            <div className="flex flex-wrap">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center px-6 py-4 text-sm font-medium transition-colors ${
                    activeTab === tab.id
                      ? 'text-indigo-600 border-b-2 border-indigo-600 bg-indigo-50'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  <tab.icon className="w-4 h-4 mr-2" />
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Code Content */}
          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">
                {tabs.find(tab => tab.id === activeTab)?.label} Configuration
              </h3>
              <button
                onClick={() => copyToClipboard(getCodeExample(activeTab), activeTab)}
                className="flex items-center px-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
              >
                {copiedCode === activeTab ? (
                  <CheckCircle className="w-4 h-4 mr-2 text-green-600" />
                ) : (
                  <Copy className="w-4 h-4 mr-2" />
                )}
                {copiedCode === activeTab ? 'Copied!' : 'Copy Code'}
              </button>
            </div>

            <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
              <pre className="text-sm text-gray-100">
                <code>{getCodeExample(activeTab)}</code>
              </pre>
            </div>
          </div>
        </motion.div>

        {/* Use Cases */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-12"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Environment Use Cases
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Terminal className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-3">Local Development</h3>
              <p className="text-gray-600 text-sm mb-4">
                Set up local development environment with hot reload and debugging tools.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• SQLite database</li>
                <li>• Hot reload enabled</li>
                <li>• Debug logging</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Server className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-3">CI/CD Pipeline</h3>
              <p className="text-gray-600 text-sm mb-4">
                Automated deployment pipeline with staging and production environments.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Automated testing</li>
                <li>• Staging deployment</li>
                <li>• Production release</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-3">Security Hardening</h3>
              <p className="text-gray-600 text-sm mb-4">
                Production environment with comprehensive security measures and monitoring.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• SSL/TLS encryption</li>
                <li>• Rate limiting</li>
                <li>• Security monitoring</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Best Practices */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-12 bg-gradient-to-r from-indigo-50 to-blue-50 rounded-2xl p-8 border border-indigo-200"
        >
          <div className="flex items-center mb-6">
            <CheckCircle className="w-8 h-8 text-indigo-600 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900">Best Practices</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Environment Setup</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Use environment variables for configuration</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Separate databases for each environment</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Implement proper logging levels</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Use containerization for consistency</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Deployment</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Automate deployment processes</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Implement health checks</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Use blue-green deployments</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Monitor deployment success</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Quick Start */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center"
        >
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Manage Environments?
            </h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Set up professional development, staging, and production environments 
              with proper configuration management and monitoring.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-medium">
                View Documentation
              </button>
              <button className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium">
                Try Live Demo
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default EnvironmentManagementGuidePage;

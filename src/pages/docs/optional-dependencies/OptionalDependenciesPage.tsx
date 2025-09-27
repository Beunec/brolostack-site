import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Package, 
  Download, 
  CheckCircle, 
  Copy,
  Code,
  Zap,
  Shield,
  Database,
  Globe,
  Cpu,
  Settings,
  Wifi,
  Server,
  AlertTriangle,
  Info,
  Users
} from 'lucide-react';

const OptionalDependenciesPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('websocket');
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const copyToClipboard = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const websocketExample = `// WebSocket Features - Optional Dependencies
import { BrolostackWSMultiagent, BrolostackWSClientside } from 'brolostack';

// Server-side WebSocket (requires socket.io)
const wsMultiAgent = new BrolostackWSMultiagent(server, {
  cors: { origin: "*" },
  transports: ['websocket', 'polling']
});

// Client-side WebSocket (requires socket.io-client)
const wsClient = new BrolostackWSClientside({
  url: 'wss://your-server.com',
  options: {
    transports: ['websocket']
  }
});

// Graceful fallback when dependencies are missing
try {
  const wsServer = new BrolostackWSMultiagent(httpServer);
  console.log('✅ Full multi-agent WebSocket support enabled');
} catch (error) {
  console.warn('⚠️ Socket.IO not available. Install with: npm install socket.io');
  // Falls back to basic WebSocket functionality
}`;

  const backendExample = `// Backend Integration - Optional Dependencies
import { BrolostackBackendIntegration } from 'brolostack';

// Express.js Integration (requires express, cors)
const expressApp = new BrolostackBackendIntegration({
  framework: 'express',
  middleware: ['cors', 'helmet', 'compression'],
  config: {
    port: 3000,
    cors: { origin: '*' }
  }
});

// NestJS Integration (requires @nestjs packages)
const nestApp = new BrolostackBackendIntegration({
  framework: 'nestjs',
  modules: ['@nestjs/websockets', '@nestjs/platform-socket.io'],
  config: {
    port: 3000,
    globalPrefix: 'api'
  }
});

// FastAPI Integration (Python - requires fastapi, python-socketio)
const fastapiApp = new BrolostackBackendIntegration({
  framework: 'fastapi',
  dependencies: ['fastapi', 'python-socketio', 'uvicorn'],
  config: {
    host: '0.0.0.0',
    port: 8000
  }
});`;

  const securityExample = `// Security Enhancements - Optional Dependencies
import { BrolostackDevil } from 'brolostack';

// Production Security (requires helmet, compression)
const securityConfig = {
  helmet: {
    contentSecurityPolicy: true,
    hsts: true,
    noSniff: true
  },
  compression: {
    level: 6,
    threshold: 1024
  },
  rateLimit: {
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100 // limit each IP to 100 requests per windowMs
  }
};

// Enhanced Security with optional packages
const devil = new BrolostackDevil({
  encryption: {
    algorithm: 'aes-256-gcm',
    keyDerivation: 'pbkdf2'
  },
  obfuscation: {
    enabled: true,
    level: 'high'
  },
  antiDebug: {
    enabled: true,
    detection: ['devtools', 'console']
  }
});`;

  const cloudExample = `// Cloud Integration - Optional Dependencies
import { CloudBrolostack } from 'brolostack';

// AWS Integration (requires aws-sdk)
const awsCloud = new CloudBrolostack({
  providers: [{
    name: 'aws',
    config: {
      region: 'us-east-1',
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
    }
  }]
});

// MongoDB Atlas (requires mongodb driver)
const mongoCloud = new CloudBrolostack({
  providers: [{
    name: 'mongodb',
    config: {
      connectionString: process.env.MONGODB_URI,
      database: 'brolostack-app'
    }
  }]
});

// Multi-cloud setup
const multiCloud = new CloudBrolostack({
  providers: [
    { name: 'aws', priority: 1 },
    { name: 'azure', priority: 2 },
    { name: 'gcp', priority: 3 }
  ],
  syncStrategy: 'local-first',
  conflictResolution: 'client-wins'
});`;

  const dependencyMatrix: Array<{
    feature: string;
    core: boolean;
    socketio: boolean | 'recommended';
    socketioClient: boolean;
    cors: boolean | 'recommended';
    helmet: boolean | 'recommended';
    description: string;
  }> = [
    {
      feature: 'Basic Brolostack',
      core: true,
      socketio: false,
      socketioClient: false,
      cors: false,
      helmet: false,
      description: 'Core functionality works without any external dependencies'
    },
    {
      feature: 'WebSocket Client',
      core: true,
      socketio: false,
      socketioClient: true,
      cors: false,
      helmet: false,
      description: 'Enhanced client-side WebSocket functionality'
    },
    {
      feature: 'Multi-Agent Server',
      core: true,
      socketio: true,
      socketioClient: false,
      cors: 'recommended',
      helmet: 'recommended',
      description: 'Full server-side WebSocket with ARGS protocol'
    },
    {
      feature: 'Full WebSocket',
      core: true,
      socketio: true,
      socketioClient: true,
      cors: true,
      helmet: true,
      description: 'Complete WebSocket functionality with security'
    }
  ];

  const installationExamples = [
    {
      title: 'Minimal Setup (No WebSocket)',
      description: 'Core functionality works immediately',
      command: 'npm install brolostack',
      features: ['Storage', 'AI Framework', 'Security', 'Authentication']
    },
    {
      title: 'WebSocket Client Features',
      description: 'Enables BrolostackWSClientside and React hooks',
      command: 'npm install brolostack socket.io-client',
      features: ['Client WebSocket', 'React Hooks', 'Real-time Updates']
    },
    {
      title: 'WebSocket Server Features',
      description: 'Enables BrolostackWSMultiagent and ARGS protocol',
      command: 'npm install brolostack socket.io cors',
      features: ['Multi-Agent Server', 'ARGS Protocol', 'Room Management']
    },
    {
      title: 'Full Enterprise Features',
      description: 'Enables all WebSocket features with security enhancements',
      command: 'npm install brolostack socket.io socket.io-client cors helmet compression',
      features: ['Complete WebSocket', 'Security', 'Performance', 'Monitoring']
    }
  ];

  const tabs = [
    { id: 'websocket', label: 'WebSocket Features', icon: Wifi },
    { id: 'backend', label: 'Backend Integration', icon: Server },
    { id: 'security', label: 'Security Enhancements', icon: Shield },
    { id: 'cloud', label: 'Cloud Integration', icon: Globe }
  ];

  const getExampleCode = () => {
    switch (activeTab) {
      case 'websocket': return websocketExample;
      case 'backend': return backendExample;
      case 'security': return securityExample;
      case 'cloud': return cloudExample;
      default: return websocketExample;
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-4"
      >
        <div className="flex items-center justify-center space-x-3">
          <Package className="h-8 w-8 text-blue-600" />
          <h1 className="text-4xl font-bold text-gray-900">Optional Dependencies</h1>
        </div>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Brolostack is designed as a <strong>zero-dependency core framework</strong> with <strong>optional enhancements</strong>. 
          Core functionality works without any external dependencies, while enhanced features require specific optional packages.
        </p>
      </motion.div>

      {/* Key Benefits */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="grid md:grid-cols-3 gap-6"
      >
        <div className="bg-green-50 border border-green-200 rounded-lg p-6">
          <CheckCircle className="h-8 w-8 text-green-600 mb-4" />
          <h3 className="text-lg font-semibold text-green-900 mb-2">Zero-Dependency Core</h3>
          <p className="text-green-700">Core functionality works without any external dependencies. Install only what you need.</p>
        </div>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <Zap className="h-8 w-8 text-blue-600 mb-4" />
          <h3 className="text-lg font-semibold text-blue-900 mb-2">Graceful Fallback</h3>
          <p className="text-blue-700">Clear error messages guide developers to install needed packages with helpful installation instructions.</p>
        </div>
        <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
          <Settings className="h-8 w-8 text-purple-600 mb-4" />
          <h3 className="text-lg font-semibold text-purple-900 mb-2">Progressive Enhancement</h3>
          <p className="text-purple-700">Add features as you grow. Choose your dependencies based on your specific needs.</p>
        </div>
      </motion.div>

      {/* Installation Recommendations */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-white border border-gray-200 rounded-lg p-6"
      >
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <Download className="h-6 w-6 mr-3 text-blue-600" />
          Installation Recommendations
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {installationExamples.map((example, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{example.title}</h3>
              <p className="text-gray-600 mb-4">{example.description}</p>
              <div className="bg-gray-900 text-green-400 p-3 rounded-lg font-mono text-sm mb-4">
                {example.command}
              </div>
              <div className="flex flex-wrap gap-2">
                {example.features.map((feature, idx) => (
                  <span key={idx} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Dependency Matrix */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-white border border-gray-200 rounded-lg p-6"
      >
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <Database className="h-6 w-6 mr-3 text-blue-600" />
          Dependency Matrix
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-semibold text-gray-900">Feature</th>
                <th className="text-center py-3 px-4 font-semibold text-gray-900">Core</th>
                <th className="text-center py-3 px-4 font-semibold text-gray-900">socket.io</th>
                <th className="text-center py-3 px-4 font-semibold text-gray-900">socket.io-client</th>
                <th className="text-center py-3 px-4 font-semibold text-gray-900">cors</th>
                <th className="text-center py-3 px-4 font-semibold text-gray-900">helmet</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-900">Description</th>
              </tr>
            </thead>
            <tbody>
              {dependencyMatrix.map((row, index) => (
                <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4 font-medium text-gray-900">{row.feature}</td>
                  <td className="text-center py-3 px-4">
                    {row.core ? <CheckCircle className="h-5 w-5 text-green-600 mx-auto" /> : <span className="text-gray-400">-</span>}
                  </td>
                  <td className="text-center py-3 px-4">
                    {row.socketio === true ? <CheckCircle className="h-5 w-5 text-green-600 mx-auto" /> : 
                     row.socketio === 'recommended' ? <AlertTriangle className="h-5 w-5 text-yellow-600 mx-auto" /> : 
                     <span className="text-gray-400">-</span>}
                  </td>
                  <td className="text-center py-3 px-4">
                    {row.socketioClient ? <CheckCircle className="h-5 w-5 text-green-600 mx-auto" /> : <span className="text-gray-400">-</span>}
                  </td>
                  <td className="text-center py-3 px-4">
                    {row.cors === true ? <CheckCircle className="h-5 w-5 text-green-600 mx-auto" /> : 
                     row.cors === 'recommended' ? <AlertTriangle className="h-5 w-5 text-yellow-600 mx-auto" /> : 
                     <span className="text-gray-400">-</span>}
                  </td>
                  <td className="text-center py-3 px-4">
                    {row.helmet === true ? <CheckCircle className="h-5 w-5 text-green-600 mx-auto" /> : 
                     row.helmet === 'recommended' ? <AlertTriangle className="h-5 w-5 text-yellow-600 mx-auto" /> : 
                     <span className="text-gray-400">-</span>}
                  </td>
                  <td className="py-3 px-4 text-gray-600">{row.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-4 flex items-center space-x-6 text-sm text-gray-600">
          <div className="flex items-center space-x-2">
            <CheckCircle className="h-4 w-4 text-green-600" />
            <span>Required</span>
          </div>
          <div className="flex items-center space-x-2">
            <AlertTriangle className="h-4 w-4 text-yellow-600" />
            <span>Recommended for production</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-gray-400">-</span>
            <span>Not needed</span>
          </div>
        </div>
      </motion.div>

      {/* Code Examples */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-white border border-gray-200 rounded-lg p-6"
      >
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <Code className="h-6 w-6 mr-3 text-blue-600" />
          Implementation Examples
        </h2>
        
        {/* Tab Navigation */}
        <div className="flex flex-wrap gap-2 mb-6">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                  activeTab === tab.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <Icon className="h-4 w-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Code Block */}
        <div className="relative">
          <div className="flex items-center justify-between bg-gray-900 text-gray-300 px-4 py-2 rounded-t-lg">
            <span className="text-sm font-medium">
              {activeTab === 'websocket' && 'WebSocket Features'}
              {activeTab === 'backend' && 'Backend Integration'}
              {activeTab === 'security' && 'Security Enhancements'}
              {activeTab === 'cloud' && 'Cloud Integration'}
            </span>
            <button
              onClick={() => copyToClipboard(getExampleCode(), activeTab)}
              className="flex items-center space-x-2 text-sm hover:text-white transition-colors"
            >
              {copiedCode === activeTab ? (
                <CheckCircle className="h-4 w-4 text-green-400" />
              ) : (
                <Copy className="h-4 w-4" />
              )}
              <span>{copiedCode === activeTab ? 'Copied!' : 'Copy'}</span>
            </button>
          </div>
          <pre className="bg-gray-900 text-green-400 p-6 rounded-b-lg overflow-x-auto text-sm">
            <code>{getExampleCode()}</code>
          </pre>
        </div>
      </motion.div>

      {/* Graceful Fallback Behavior */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="bg-white border border-gray-200 rounded-lg p-6"
      >
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <Info className="h-6 w-6 mr-3 text-blue-600" />
          Graceful Fallback Behavior
        </h2>
        <div className="space-y-4">
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <h3 className="font-semibold text-yellow-900 mb-2">When Dependencies Are Missing</h3>
            <p className="text-yellow-800 mb-3">
              Brolostack automatically detects available dependencies and provides helpful guidance when optional packages are missing.
            </p>
            <div className="bg-gray-900 text-yellow-400 p-3 rounded font-mono text-sm">
              <div>⚠️ Socket.IO not found</div>
              <div>💡 Install with: npm install socket.io</div>
              <div>📖 See: https://brolostack.dev/docs/websocket-setup</div>
            </div>
          </div>
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <h3 className="font-semibold text-green-900 mb-2">Automatic Feature Detection</h3>
            <p className="text-green-800">
              The framework automatically detects and configures features based on available dependencies, 
              ensuring your application works regardless of which optional packages you've installed.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Benefits */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="grid md:grid-cols-2 gap-6"
      >
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
            <Users className="h-5 w-5 mr-2 text-blue-600" />
            For Framework Users
          </h3>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start space-x-2">
              <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
              <span><strong>Lightweight:</strong> Install only what you need</span>
            </li>
            <li className="flex items-start space-x-2">
              <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
              <span><strong>Flexible:</strong> Choose your dependencies</span>
            </li>
            <li className="flex items-start space-x-2">
              <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
              <span><strong>Progressive:</strong> Add features as you grow</span>
            </li>
            <li className="flex items-start space-x-2">
              <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
              <span><strong>Clear:</strong> Explicit about what each feature requires</span>
            </li>
          </ul>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
            <Cpu className="h-5 w-5 mr-2 text-blue-600" />
            For Framework Maintainers
          </h3>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start space-x-2">
              <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
              <span><strong>Modular:</strong> Each feature is self-contained</span>
            </li>
            <li className="flex items-start space-x-2">
              <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
              <span><strong>Testable:</strong> Core functionality always works</span>
            </li>
            <li className="flex items-start space-x-2">
              <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
              <span><strong>Maintainable:</strong> Dependencies are isolated</span>
            </li>
            <li className="flex items-start space-x-2">
              <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
              <span><strong>Scalable:</strong> Easy to add new optional features</span>
            </li>
          </ul>
        </div>
      </motion.div>

      {/* Quick Start */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-lg p-6"
      >
        <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
          <Zap className="h-6 w-6 mr-3 text-blue-600" />
          Quick Start Examples
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-2">Minimal Setup</h3>
            <div className="bg-gray-900 text-green-400 p-2 rounded font-mono text-sm mb-3">
              npm install brolostack
            </div>
            <p className="text-sm text-gray-600">Storage, API, AI features work immediately</p>
          </div>
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-2">WebSocket Client</h3>
            <div className="bg-gray-900 text-green-400 p-2 rounded font-mono text-sm mb-3">
              npm install brolostack socket.io-client
            </div>
            <p className="text-sm text-gray-600">Full client-side WebSocket functionality</p>
          </div>
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-2">Full WebSocket Server</h3>
            <div className="bg-gray-900 text-green-400 p-2 rounded font-mono text-sm mb-3">
              npm install brolostack socket.io cors
            </div>
            <p className="text-sm text-gray-600">Complete multi-agent server functionality</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default OptionalDependenciesPage;
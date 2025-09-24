import React from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Lock, 
  Eye, 
  AlertTriangle, 
  CheckCircle, 
  ArrowRight, 
  Code, 
  Zap,
  Brain,
  Cloud,
  Database,
  Users,
  Settings,
  FileText,
  Key,
  Fingerprint,
  Globe,
  BarChart
} from 'lucide-react';

const SecurityFrameworkPage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="space-y-8"
    >
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-600 to-teal-600 rounded-2xl p-8 text-white">
        <div className="max-w-4xl">
          <h1 className="text-4xl font-bold mb-4">
            Brolostack Security Framework
          </h1>
          <p className="text-xl text-green-100 mb-6">
            Comprehensive security framework providing enterprise-grade protection for your applications. 
            Built-in security features, compliance tools, and advanced threat protection.
          </p>
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center space-x-2 bg-white/20 rounded-lg px-4 py-2">
              <Shield size={20} />
              <span className="font-medium">Enterprise Security</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/20 rounded-lg px-4 py-2">
              <Lock size={20} />
              <span className="font-medium">Compliance Ready</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/20 rounded-lg px-4 py-2">
              <Eye size={20} />
              <span className="font-medium">Threat Protection</span>
            </div>
          </div>
        </div>
      </div>

      {/* Security Features Overview */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">🛡️ Security Features Overview</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="bg-green-100 rounded-lg p-2">
                <Shield className="text-green-600" size={20} />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Data Encryption</h3>
                <p className="text-gray-600 text-sm">AES-256-GCM encryption with automatic key rotation and secure key management.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="bg-blue-100 rounded-lg p-2">
                <Lock className="text-blue-600" size={20} />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Access Control</h3>
                <p className="text-gray-600 text-sm">Role-based access control with fine-grained permissions and multi-factor authentication.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="bg-purple-100 rounded-lg p-2">
                <Eye className="text-purple-600" size={20} />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Audit Logging</h3>
                <p className="text-gray-600 text-sm">Comprehensive audit trails with tamper-proof logging and real-time monitoring.</p>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="bg-orange-100 rounded-lg p-2">
                <AlertTriangle className="text-orange-600" size={20} />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Threat Detection</h3>
                <p className="text-gray-600 text-sm">Advanced threat detection with machine learning and behavioral analysis.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="bg-red-100 rounded-lg p-2">
                <Key className="text-red-600" size={20} />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Key Management</h3>
                <p className="text-gray-600 text-sm">Secure key generation, storage, and rotation with hardware security module support.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="bg-teal-100 rounded-lg p-2">
                <Fingerprint className="text-teal-600" size={20} />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Identity Management</h3>
                <p className="text-gray-600 text-sm">Multi-provider identity management with SSO and federated authentication.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Security Architecture */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">🏗️ Security Architecture</h2>
        <div className="bg-gray-50 rounded-lg p-6">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Shield className="text-green-600" size={32} />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Application Layer</h3>
              <p className="text-sm text-gray-600">Input validation, authentication, authorization, and session management</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Lock className="text-blue-600" size={32} />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Data Layer</h3>
              <p className="text-sm text-gray-600">Encryption at rest and in transit, secure storage, and data classification</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Eye className="text-purple-600" size={32} />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Monitoring Layer</h3>
              <p className="text-sm text-gray-600">Real-time monitoring, threat detection, and incident response</p>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Start */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">🚀 Quick Start</h2>
        
        <div className="space-y-6">
          {/* Step 1 */}
          <div className="border-l-4 border-green-500 pl-6">
            <div className="flex items-center mb-3">
              <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Initialize Security Framework</h3>
            </div>
            <div className="bg-gray-900 rounded-lg p-4 text-green-400 font-mono text-sm overflow-x-auto">
              <pre>{`import { BrolostackSecurityFramework } from 'brolostack';

// Initialize security framework
const security = new BrolostackSecurityFramework({
  encryption: {
    algorithm: 'AES-256-GCM',
    keySize: 256,
    keyRotationInterval: 86400000 // 24 hours
  },
  authentication: {
    providers: ['local', 'oauth', 'saml'],
    multiFactor: true,
    sessionTimeout: 28800000 // 8 hours
  },
  authorization: {
    rbac: true,
    permissions: ['read', 'write', 'admin'],
    policies: ['data-access', 'user-management']
  },
  audit: {
    enabled: true,
    logLevel: 'detailed',
    retention: 90 // days
  }
});

await security.initialize();`}</pre>
            </div>
          </div>

          {/* Step 2 */}
          <div className="border-l-4 border-blue-500 pl-6">
            <div className="flex items-center mb-3">
              <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Configure Access Control</h3>
            </div>
            <div className="bg-gray-900 rounded-lg p-4 text-green-400 font-mono text-sm overflow-x-auto">
              <pre>{`// Define roles and permissions
const roles = {
  admin: {
    permissions: ['read', 'write', 'delete', 'admin'],
    resources: ['*']
  },
  user: {
    permissions: ['read', 'write'],
    resources: ['own-data']
  },
  viewer: {
    permissions: ['read'],
    resources: ['public-data']
  }
};

// Create users with roles
await security.createUser({
  id: 'user-123',
  email: 'john@example.com',
  role: 'user',
  permissions: ['read', 'write']
});

// Check permissions
const hasPermission = await security.checkPermission(
  'user-123', 
  'write', 
  'own-data'
);`}</pre>
            </div>
          </div>

          {/* Step 3 */}
          <div className="border-l-4 border-purple-500 pl-6">
            <div className="flex items-center mb-3">
              <div className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Enable Data Protection</h3>
            </div>
            <div className="bg-gray-900 rounded-lg p-4 text-green-400 font-mono text-sm overflow-x-auto">
              <pre>{`// Encrypt sensitive data
const encryptedData = await security.encrypt({
  userEmail: 'john@example.com',
  creditCard: '4111-1111-1111-1111',
  personalInfo: {
    name: 'John Doe',
    ssn: '123-45-6789'
  }
});

// Store encrypted data
await security.storeSecure('user-data', encryptedData, {
  classification: 'sensitive',
  retention: 365 // days
});

// Decrypt when needed
const decryptedData = await security.decrypt(encryptedData);

// Audit data access
await security.auditLog({
  action: 'data-access',
  userId: 'user-123',
  resource: 'user-data',
  timestamp: new Date()
});`}</pre>
            </div>
          </div>
        </div>
      </div>

      {/* Compliance Features */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">📋 Compliance Features</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Supported Frameworks</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="bg-green-100 rounded-lg p-2">
                  <CheckCircle className="text-green-600" size={16} />
                </div>
                <div>
                  <div className="font-medium text-gray-900">GDPR</div>
                  <div className="text-sm text-gray-600">Data protection and privacy compliance</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-blue-100 rounded-lg p-2">
                  <CheckCircle className="text-blue-600" size={16} />
                </div>
                <div>
                  <div className="font-medium text-gray-900">HIPAA</div>
                  <div className="text-sm text-gray-600">Healthcare data protection</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-purple-100 rounded-lg p-2">
                  <CheckCircle className="text-purple-600" size={16} />
                </div>
                <div>
                  <div className="font-medium text-gray-900">SOC 2</div>
                  <div className="text-sm text-gray-600">Security and availability controls</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-orange-100 rounded-lg p-2">
                  <CheckCircle className="text-orange-600" size={16} />
                </div>
                <div>
                  <div className="font-medium text-gray-900">ISO 27001</div>
                  <div className="text-sm text-gray-600">Information security management</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Compliance Tools</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="bg-red-100 rounded-lg p-2">
                  <FileText className="text-red-600" size={16} />
                </div>
                <div>
                  <div className="font-medium text-gray-900">Data Classification</div>
                  <div className="text-sm text-gray-600">Automatic data classification and labeling</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-yellow-100 rounded-lg p-2">
                  <BarChart className="text-yellow-600" size={16} />
                </div>
                <div>
                  <div className="font-medium text-gray-900">Compliance Reporting</div>
                  <div className="text-sm text-gray-600">Automated compliance reports and dashboards</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-teal-100 rounded-lg p-2">
                  <Globe className="text-teal-600" size={16} />
                </div>
                <div>
                  <div className="font-medium text-gray-900">Data Residency</div>
                  <div className="text-sm text-gray-600">Control data location and cross-border transfers</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-indigo-100 rounded-lg p-2">
                  <Settings className="text-indigo-600" size={16} />
                </div>
                <div>
                  <div className="font-medium text-gray-900">Policy Management</div>
                  <div className="text-sm text-gray-600">Centralized security policy configuration</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Threat Protection */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">🔒 Threat Protection</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center p-6 bg-red-50 rounded-xl">
            <div className="bg-red-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <AlertTriangle className="text-red-600" size={32} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Threat Detection</h3>
            <p className="text-gray-600 text-sm">Real-time threat detection with machine learning and behavioral analysis</p>
          </div>
          <div className="text-center p-6 bg-orange-50 rounded-xl">
            <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Shield className="text-orange-600" size={32} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Intrusion Prevention</h3>
            <p className="text-gray-600 text-sm">Advanced intrusion prevention with automated response capabilities</p>
          </div>
          <div className="text-center p-6 bg-yellow-50 rounded-xl">
            <div className="bg-yellow-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Eye className="text-yellow-600" size={32} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Security Monitoring</h3>
            <p className="text-gray-600 text-sm">24/7 security monitoring with alerting and incident response</p>
          </div>
        </div>
      </div>

      {/* Performance Metrics */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">📈 Security Performance</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">Metric</th>
                <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">Value</th>
                <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-200 px-4 py-3 font-medium text-gray-900">Encryption Speed</td>
                <td className="border border-gray-200 px-4 py-3 text-green-600 font-semibold">50,000/sec</td>
                <td className="border border-gray-200 px-4 py-3 text-gray-600">Data encryption operations per second</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-3 font-medium text-gray-900">Threat Detection</td>
                <td className="border border-gray-200 px-4 py-3 text-blue-600 font-semibold">&lt;100ms</td>
                <td className="border border-gray-200 px-4 py-3 text-gray-600">Average threat detection time</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-3 font-medium text-gray-900">False Positive Rate</td>
                <td className="border border-gray-200 px-4 py-3 text-purple-600 font-semibold">&lt;0.1%</td>
                <td className="border border-gray-200 px-4 py-3 text-gray-600">False positive detection rate</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-3 font-medium text-gray-900">Compliance Score</td>
                <td className="border border-gray-200 px-4 py-3 text-green-600 font-semibold">99.9%</td>
                <td className="border border-gray-200 px-4 py-3 text-gray-600">Automated compliance coverage</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-3 font-medium text-gray-900">Memory Overhead</td>
                <td className="border border-gray-200 px-4 py-3 text-orange-600 font-semibold">5MB</td>
                <td className="border border-gray-200 px-4 py-3 text-gray-600">Security framework memory usage</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Next Steps */}
      <div className="bg-gradient-to-r from-green-600 to-teal-600 rounded-xl p-8 text-white">
        <h2 className="text-2xl font-bold mb-4">🛡️ Ready to Secure Your Application?</h2>
        <p className="text-green-100 mb-6">
          Explore advanced security features, compliance tools, and implementation guides 
          to build enterprise-grade secure applications with Brolostack.
        </p>
        <div className="flex flex-wrap gap-4">
          <a 
            href="/docs/security-framework-guide" 
            className="inline-flex items-center px-6 py-3 bg-white/20 hover:bg-white/30 rounded-lg transition-colors"
          >
            <Code className="mr-2" size={20} />
            Implementation Guide
            <ArrowRight className="ml-2" size={16} />
          </a>
          <a 
            href="/docs/devil-security" 
            className="inline-flex items-center px-6 py-3 bg-white/20 hover:bg-white/30 rounded-lg transition-colors"
          >
            <Shield className="mr-2" size={20} />
            Devil Security
            <ArrowRight className="ml-2" size={16} />
          </a>
          <a 
            href="/docs/enterprise-features" 
            className="inline-flex items-center px-6 py-3 bg-white/20 hover:bg-white/30 rounded-lg transition-colors"
          >
            <Settings className="mr-2" size={20} />
            Enterprise Features
            <ArrowRight className="ml-2" size={16} />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default SecurityFrameworkPage;

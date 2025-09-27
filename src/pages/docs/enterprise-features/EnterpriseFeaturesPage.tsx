import React from 'react';
import { motion } from 'framer-motion';
import { 
  Building, 
  Shield, 
  Users, 
  ArrowRight, 
  Code, 
  Database,
  Cloud,
  Settings,
  Lock,
  Eye,
  FileText,
  Key,
  Activity,
  BarChart
} from 'lucide-react';

const EnterpriseFeaturesPage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="space-y-8"
    >
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl p-8 text-white">
        <div className="max-w-4xl">
          <h1 className="text-4xl font-bold mb-4">
            Enterprise Features
          </h1>
          <p className="text-xl text-purple-100 mb-6">
            Enterprise-grade features for large-scale applications. Advanced security, 
            compliance tools, multi-tenancy, and enterprise integrations for mission-critical applications.
          </p>
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center space-x-2 bg-white/20 rounded-lg px-4 py-2">
              <Building size={20} />
              <span className="font-medium">Enterprise Scale</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/20 rounded-lg px-4 py-2">
              <Shield size={20} />
              <span className="font-medium">Advanced Security</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/20 rounded-lg px-4 py-2">
              <Users size={20} />
              <span className="font-medium">Multi-Tenancy</span>
            </div>
          </div>
        </div>
      </div>

      {/* Enterprise Features Overview */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">🏢 Enterprise Features Overview</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="bg-purple-100 rounded-lg p-2">
                <Building className="text-purple-600" size={20} />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Multi-Tenancy</h3>
                <p className="text-gray-600 text-sm">Isolated tenant environments with dedicated resources and data segregation.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="bg-blue-100 rounded-lg p-2">
                <Shield className="text-blue-600" size={20} />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Advanced Security</h3>
                <p className="text-gray-600 text-sm">Enterprise-grade security with SSO, RBAC, and compliance frameworks.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="bg-green-100 rounded-lg p-2">
                <Users className="text-green-600" size={20} />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">User Management</h3>
                <p className="text-gray-600 text-sm">Comprehensive user lifecycle management with role-based access control.</p>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="bg-orange-100 rounded-lg p-2">
                <BarChart className="text-orange-600" size={20} />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Analytics & Monitoring</h3>
                <p className="text-gray-600 text-sm">Advanced analytics, monitoring, and reporting for enterprise insights.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="bg-red-100 rounded-lg p-2">
                <Cloud className="text-red-600" size={20} />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Cloud Integration</h3>
                <p className="text-gray-600 text-sm">Seamless integration with enterprise cloud platforms and services.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="bg-teal-100 rounded-lg p-2">
                <Settings className="text-teal-600" size={20} />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Compliance Tools</h3>
                <p className="text-gray-600 text-sm">Built-in compliance frameworks for GDPR, HIPAA, SOC 2, and more.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Multi-Tenancy */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">🏢 Multi-Tenancy</h2>
        <div className="space-y-6">
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Tenant Isolation</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-white rounded-lg">
                <div className="bg-purple-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                  <Database className="text-purple-600" size={24} />
                </div>
                <h4 className="font-medium text-gray-900 mb-2">Data Isolation</h4>
                <p className="text-sm text-gray-600">Complete data segregation between tenants</p>
              </div>
              <div className="text-center p-4 bg-white rounded-lg">
                <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                  <Settings className="text-blue-600" size={24} />
                </div>
                <h4 className="font-medium text-gray-900 mb-2">Configuration</h4>
                <p className="text-sm text-gray-600">Tenant-specific configurations and settings</p>
              </div>
              <div className="text-center p-4 bg-white rounded-lg">
                <div className="bg-green-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                  <Shield className="text-green-600" size={24} />
                </div>
                <h4 className="font-medium text-gray-900 mb-2">Security</h4>
                <p className="text-sm text-gray-600">Isolated security policies and access controls</p>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-900 rounded-lg p-4 text-green-400 font-mono text-sm overflow-x-auto">
            <pre>{`// Multi-tenant configuration
const multiTenantConfig = {
  tenants: {
    'tenant-1': {
      id: 'tenant-1',
      name: 'Acme Corporation',
      domain: 'acme.brolostack.com',
      database: 'acme_db',
      storage: 'acme_storage',
      features: ['advanced-analytics', 'custom-branding'],
      limits: {
        users: 1000,
        storage: '10GB',
        apiCalls: 100000
      }
    },
    'tenant-2': {
      id: 'tenant-2',
      name: 'TechStart Inc',
      domain: 'techstart.brolostack.com',
      database: 'techstart_db',
      storage: 'techstart_storage',
      features: ['basic-analytics'],
      limits: {
        users: 100,
        storage: '1GB',
        apiCalls: 10000
      }
    }
  },
  isolation: {
    level: 'database', // 'database', 'schema', 'row'
    encryption: true,
    backup: true
  }
};

// Initialize multi-tenant system
const multiTenant = new BrolostackMultiTenant(multiTenantConfig);
await multiTenant.initialize();`}</pre>
          </div>
        </div>
      </div>

      {/* Advanced Security */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">🔒 Advanced Security</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-center space-x-3 mb-3">
                <div className="bg-blue-100 rounded-lg p-2">
                  <Key className="text-blue-600" size={20} />
                </div>
                <h3 className="font-semibold text-gray-900">Single Sign-On (SSO)</h3>
              </div>
              <p className="text-gray-600 text-sm mb-3">
                Enterprise SSO integration with SAML, OAuth, and OpenID Connect.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• SAML 2.0 integration</li>
                <li>• OAuth 2.0 / OpenID Connect</li>
                <li>• Active Directory integration</li>
                <li>• Multi-factor authentication</li>
              </ul>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-center space-x-3 mb-3">
                <div className="bg-green-100 rounded-lg p-2">
                  <Users className="text-green-600" size={20} />
                </div>
                <h3 className="font-semibold text-gray-900">Role-Based Access Control</h3>
              </div>
              <p className="text-gray-600 text-sm mb-3">
                Granular permission system with role hierarchies and inheritance.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Hierarchical roles</li>
                <li>• Permission inheritance</li>
                <li>• Resource-level permissions</li>
                <li>• Dynamic role assignment</li>
              </ul>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-center space-x-3 mb-3">
                <div className="bg-purple-100 rounded-lg p-2">
                  <Eye className="text-purple-600" size={20} />
                </div>
                <h3 className="font-semibold text-gray-900">Audit & Compliance</h3>
              </div>
              <p className="text-gray-600 text-sm mb-3">
                Comprehensive audit trails and compliance reporting.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Complete audit trails</li>
                <li>• Compliance reporting</li>
                <li>• Data retention policies</li>
                <li>• Regulatory compliance</li>
              </ul>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-center space-x-3 mb-3">
                <div className="bg-orange-100 rounded-lg p-2">
                  <Lock className="text-orange-600" size={20} />
                </div>
                <h3 className="font-semibold text-gray-900">Data Encryption</h3>
              </div>
              <p className="text-gray-600 text-sm mb-3">
                End-to-end encryption with key management and rotation.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• AES-256 encryption</li>
                <li>• Key rotation</li>
                <li>• Hardware security modules</li>
                <li>• Zero-knowledge architecture</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Analytics & Monitoring */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">📊 Analytics & Monitoring</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center p-6 bg-blue-50 rounded-xl">
            <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <BarChart className="text-blue-600" size={32} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Business Intelligence</h3>
            <p className="text-gray-600 text-sm">Advanced analytics and reporting for business insights</p>
          </div>
          <div className="text-center p-6 bg-green-50 rounded-xl">
            <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Activity className="text-green-600" size={32} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Real-time Monitoring</h3>
            <p className="text-gray-600 text-sm">Live system monitoring and performance tracking</p>
          </div>
          <div className="text-center p-6 bg-purple-50 rounded-xl">
            <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <FileText className="text-purple-600" size={32} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Custom Reports</h3>
            <p className="text-gray-600 text-sm">Automated report generation and distribution</p>
          </div>
        </div>
      </div>

      {/* Compliance Framework */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">📋 Compliance Framework</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">Framework</th>
                <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">Status</th>
                <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">Features</th>
                <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">Coverage</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-200 px-4 py-3 font-medium text-gray-900">GDPR</td>
                <td className="border border-gray-200 px-4 py-3 text-green-600 font-semibold">✅ Compliant</td>
                <td className="border border-gray-200 px-4 py-3 text-gray-600">Data protection, consent management, right to be forgotten</td>
                <td className="border border-gray-200 px-4 py-3 text-gray-600">100%</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-3 font-medium text-gray-900">HIPAA</td>
                <td className="border border-gray-200 px-4 py-3 text-green-600 font-semibold">✅ Compliant</td>
                <td className="border border-gray-200 px-4 py-3 text-gray-600">Healthcare data protection, access controls, audit trails</td>
                <td className="border border-gray-200 px-4 py-3 text-gray-600">100%</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-3 font-medium text-gray-900">SOC 2 Type II</td>
                <td className="border border-gray-200 px-4 py-3 text-green-600 font-semibold">✅ Compliant</td>
                <td className="border border-gray-200 px-4 py-3 text-gray-600">Security, availability, processing integrity</td>
                <td className="border border-gray-200 px-4 py-3 text-gray-600">100%</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-3 font-medium text-gray-900">ISO 27001</td>
                <td className="border border-gray-200 px-4 py-3 text-green-600 font-semibold">✅ Compliant</td>
                <td className="border border-gray-200 px-4 py-3 text-gray-600">Information security management system</td>
                <td className="border border-gray-200 px-4 py-3 text-gray-600">100%</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-3 font-medium text-gray-900">PCI DSS</td>
                <td className="border border-gray-200 px-4 py-3 text-green-600 font-semibold">✅ Compliant</td>
                <td className="border border-gray-200 px-4 py-3 text-gray-600">Payment card data security standards</td>
                <td className="border border-gray-200 px-4 py-3 text-gray-600">100%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Performance Metrics */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">📈 Enterprise Performance</h2>
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
                <td className="border border-gray-200 px-4 py-3 font-medium text-gray-900">Concurrent Tenants</td>
                <td className="border border-gray-200 px-4 py-3 text-green-600 font-semibold">10,000+</td>
                <td className="border border-gray-200 px-4 py-3 text-gray-600">Supported concurrent tenant environments</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-3 font-medium text-gray-900">Users per Tenant</td>
                <td className="border border-gray-200 px-4 py-3 text-blue-600 font-semibold">100,000+</td>
                <td className="border border-gray-200 px-4 py-3 text-gray-600">Maximum users per tenant environment</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-3 font-medium text-gray-900">Data Isolation</td>
                <td className="border border-gray-200 px-4 py-3 text-purple-600 font-semibold">100%</td>
                <td className="border border-gray-200 px-4 py-3 text-gray-600">Complete data segregation between tenants</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-3 font-medium text-gray-900">Uptime SLA</td>
                <td className="border border-gray-200 px-4 py-3 text-orange-600 font-semibold">99.99%</td>
                <td className="border border-gray-200 px-4 py-3 text-gray-600">Enterprise-grade uptime guarantee</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-3 font-medium text-gray-900">Response Time</td>
                <td className="border border-gray-200 px-4 py-3 text-teal-600 font-semibold">&lt;100ms</td>
                <td className="border border-gray-200 px-4 py-3 text-gray-600">Average API response time</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Next Steps */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl p-8 text-white">
        <h2 className="text-2xl font-bold mb-4">🏢 Ready for Enterprise Scale?</h2>
        <p className="text-purple-100 mb-6">
          Explore advanced enterprise features, compliance tools, and implementation guides 
          to build mission-critical applications with Brolostack Enterprise Features.
        </p>
        <div className="flex flex-wrap gap-4">
          <a 
            href="/docs/enterprise-features-guide" 
            className="inline-flex items-center px-6 py-3 bg-white/20 hover:bg-white/30 rounded-lg transition-colors"
          >
            <Code className="mr-2" size={20} />
            Implementation Guide
            <ArrowRight className="ml-2" size={16} />
          </a>
          <a 
            href="/docs/security-framework" 
            className="inline-flex items-center px-6 py-3 bg-white/20 hover:bg-white/30 rounded-lg transition-colors"
          >
            <Shield className="mr-2" size={20} />
            Security Framework
            <ArrowRight className="ml-2" size={16} />
          </a>
          <a 
            href="/docs/ciam-integration" 
            className="inline-flex items-center px-6 py-3 bg-white/20 hover:bg-white/30 rounded-lg transition-colors"
          >
            <Users className="mr-2" size={20} />
            CIAM Integration
            <ArrowRight className="ml-2" size={16} />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default EnterpriseFeaturesPage;

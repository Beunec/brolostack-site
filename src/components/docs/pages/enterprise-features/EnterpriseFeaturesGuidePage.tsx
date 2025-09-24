import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Building, 
  Shield, 
  Users, 
  BarChart, 
  CheckCircle, 
  AlertCircle,
  Copy,
  ExternalLink,
  Lock,
  Globe,
  Database,
  Zap,
  Settings,
  Monitor,
  FileText
} from 'lucide-react';

const EnterpriseFeaturesGuidePage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('sso');
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const copyToClipboard = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const ssoExample = `import { Brolostack } from 'brolostack';

// Enterprise SSO Configuration
const brolostack = new Brolostack({
  enterprise: {
    sso: {
      providers: {
        saml: {
          enabled: true,
          entityId: 'https://your-company.com/saml',
          ssoUrl: 'https://your-idp.com/sso',
          certificate: '-----BEGIN CERTIFICATE-----...',
          nameIdFormat: 'urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress'
        },
        oidc: {
          enabled: true,
          issuer: 'https://your-oidc-provider.com',
          clientId: 'your-client-id',
          clientSecret: 'your-client-secret',
          scopes: ['openid', 'profile', 'email']
        },
        ldap: {
          enabled: true,
          server: 'ldap://your-ldap-server.com:389',
          baseDN: 'dc=company,dc=com',
          bindDN: 'cn=admin,dc=company,dc=com',
          bindPassword: 'admin-password'
        }
      }
    }
  }
});

// SSO Authentication Flow
class SSOAuthService {
  constructor(brolostack) {
    this.brolostack = brolostack;
  }

  // SAML SSO
  async initiateSamlSSO(relayState = '/dashboard') {
    try {
      const samlRequest = await this.brolostack.enterprise.sso.saml.createRequest({
        relayState,
        forceAuthn: false
      });
      
      // Redirect to IdP
      window.location.href = samlRequest.ssoUrl;
    } catch (error) {
      throw new Error(\`SAML SSO initiation failed: \${error.message}\`);
    }
  }

  // Handle SAML Response
  async handleSamlResponse(samlResponse, relayState) {
    try {
      const result = await this.brolostack.enterprise.sso.saml.processResponse(samlResponse);
      
      if (result.success) {
        // Create or update user
        const user = await this.brolostack.auth.syncUser({
          email: result.attributes.email,
          name: result.attributes.name,
          groups: result.attributes.groups,
          source: 'saml'
        });
        
        // Create session
        const session = await this.brolostack.auth.createSession(user);
        return { user, session, redirectTo: relayState };
      }
    } catch (error) {
      throw new Error(\`SAML response processing failed: \${error.message}\`);
    }
  }

  // LDAP Authentication
  async authenticateWithLDAP(username, password) {
    try {
      const result = await this.brolostack.enterprise.sso.ldap.authenticate(username, password);
      
      if (result.success) {
        const user = await this.brolostack.auth.syncUser({
          email: result.attributes.mail,
          name: result.attributes.displayName,
          groups: result.attributes.memberOf,
          source: 'ldap'
        });
        
        return user;
      }
    } catch (error) {
      throw new Error(\`LDAP authentication failed: \${error.message}\`);
    }
  }
}

const ssoAuthService = new SSOAuthService(brolostack);`;

  const rbacExample = `import { Brolostack } from 'brolostack';

// Enterprise Role-Based Access Control
const brolostack = new Brolostack({
  enterprise: {
    rbac: {
      enabled: true,
      hierarchy: {
        super_admin: 100,
        admin: 90,
        manager: 70,
        supervisor: 50,
        user: 30,
        guest: 10
      },
      permissions: {
        users: {
          create: ['admin', 'super_admin'],
          read: ['user', 'supervisor', 'manager', 'admin', 'super_admin'],
          update: ['supervisor', 'manager', 'admin', 'super_admin'],
          delete: ['admin', 'super_admin']
        },
        data: {
          export: ['manager', 'admin', 'super_admin'],
          import: ['admin', 'super_admin'],
          backup: ['admin', 'super_admin']
        },
        system: {
          configure: ['super_admin'],
          monitor: ['admin', 'super_admin'],
          maintain: ['admin', 'super_admin']
        }
      }
    }
  }
});

// RBAC Management
class RBACManager {
  constructor(brolostack) {
    this.brolostack = brolostack;
  }

  // Assign role to user
  async assignRole(userId, role, context = null) {
    try {
      await this.brolostack.enterprise.rbac.assignRole(userId, role, {
        context,
        assignedBy: this.brolostack.auth.getCurrentUser().id,
        assignedAt: new Date()
      });
      
      // Log role assignment
      await this.brolostack.enterprise.audit.log('role_assigned', {
        userId,
        role,
        context,
        timestamp: new Date()
      });
    } catch (error) {
      throw new Error(\`Role assignment failed: \${error.message}\`);
    }
  }

  // Check permission
  async checkPermission(userId, resource, action, context = null) {
    try {
      const userRoles = await this.brolostack.enterprise.rbac.getUserRoles(userId);
      const hasPermission = await this.brolostack.enterprise.rbac.checkPermission(
        userRoles, 
        resource, 
        action, 
        context
      );
      
      return hasPermission;
    } catch (error) {
      console.error('Permission check failed:', error);
      return false;
    }
  }

  // Get user permissions
  async getUserPermissions(userId) {
    try {
      const userRoles = await this.brolostack.enterprise.rbac.getUserRoles(userId);
      const permissions = await this.brolostack.enterprise.rbac.getPermissionsForRoles(userRoles);
      
      return permissions;
    } catch (error) {
      throw new Error(\`Failed to get user permissions: \${error.message}\`);
    }
  }

  // Create custom role
  async createCustomRole(roleName, permissions, hierarchy = 0) {
    try {
      const role = await this.brolostack.enterprise.rbac.createRole({
        name: roleName,
        permissions,
        hierarchy,
        custom: true
      });
      
      return role;
    } catch (error) {
      throw new Error(\`Custom role creation failed: \${error.message}\`);
    }
  }
}

const rbacManager = new RBACManager(brolostack);`;

  const auditExample = `import { Brolostack } from 'brolostack';

// Enterprise Audit and Compliance
const brolostack = new Brolostack({
  enterprise: {
    audit: {
      enabled: true,
      retention: {
        period: '7y', // 7 years
        archive: true
      },
      events: {
        authentication: true,
        authorization: true,
        dataAccess: true,
        dataModification: true,
        systemChanges: true,
        adminActions: true
      },
      compliance: {
        gdpr: true,
        sox: true,
        hipaa: true,
        pci: true
      }
    }
  }
});

// Audit Service
class AuditService {
  constructor(brolostack) {
    this.brolostack = brolostack;
  }

  // Log audit event
  async logEvent(eventType, details) {
    try {
      const auditEvent = {
        id: this.brolostack.utils.generateId(),
        type: eventType,
        timestamp: new Date(),
        userId: this.brolostack.auth.getCurrentUser()?.id,
        sessionId: this.brolostack.auth.getCurrentSession()?.id,
        ipAddress: await this.brolostack.utils.getClientIP(),
        userAgent: navigator.userAgent,
        details: {
          ...details,
          environment: process.env.NODE_ENV
        },
        hash: this.brolostack.crypto.hash(JSON.stringify(details))
      };

      await this.brolostack.enterprise.audit.store(auditEvent);
      
      // Real-time notification for critical events
      if (this.isCriticalEvent(eventType)) {
        await this.notifySecurityTeam(auditEvent);
      }
    } catch (error) {
      console.error('Audit logging failed:', error);
    }
  }

  // Query audit logs
  async queryAuditLogs(filters = {}) {
    try {
      const logs = await this.brolostack.enterprise.audit.query({
        ...filters,
        sort: { timestamp: 'desc' },
        limit: 1000
      });
      
      return logs;
    } catch (error) {
      throw new Error(\`Audit query failed: \${error.message}\`);
    }
  }

  // Generate compliance report
  async generateComplianceReport(complianceType, dateRange) {
    try {
      const report = await this.brolostack.enterprise.audit.generateReport({
        type: complianceType,
        startDate: dateRange.start,
        endDate: dateRange.end,
        format: 'pdf'
      });
      
      return report;
    } catch (error) {
      throw new Error(\`Compliance report generation failed: \${error.message}\`);
    }
  }

  // Check for suspicious activities
  async detectAnomalies() {
    try {
      const anomalies = await this.brolostack.enterprise.audit.detectAnomalies({
        timeWindow: '24h',
        thresholds: {
          failedLogins: 5,
          dataAccess: 1000,
          adminActions: 10
        }
      });
      
      return anomalies;
    } catch (error) {
      throw new Error(\`Anomaly detection failed: \${error.message}\`);
    }
  }

  isCriticalEvent(eventType) {
    const criticalEvents = [
      'authentication_failed',
      'privilege_escalation',
      'data_breach_attempt',
      'admin_action',
      'system_configuration_change'
    ];
    
    return criticalEvents.includes(eventType);
  }

  async notifySecurityTeam(auditEvent) {
    // Implementation for security team notification
    console.log('Security alert:', auditEvent);
  }
}

const auditService = new AuditService(brolostack);`;

  const monitoringExample = `import { Brolostack } from 'brolostack';

// Enterprise Monitoring and Analytics
const brolostack = new Brolostack({
  enterprise: {
    monitoring: {
      enabled: true,
      metrics: {
        performance: true,
        security: true,
        usage: true,
        errors: true
      },
      alerts: {
        email: true,
        slack: true,
        webhook: true
      },
      dashboards: {
        realtime: true,
        historical: true,
        custom: true
      }
    }
  }
});

// Monitoring Service
class MonitoringService {
  constructor(brolostack) {
    this.brolostack = brolostack;
    this.setupMetrics();
  }

  setupMetrics() {
    // Performance metrics
    this.brolostack.enterprise.monitoring.addMetric('response_time', {
      type: 'histogram',
      buckets: [0.1, 0.5, 1, 2, 5, 10]
    });

    // Security metrics
    this.brolostack.enterprise.monitoring.addMetric('security_events', {
      type: 'counter',
      labels: ['event_type', 'severity']
    });

    // Usage metrics
    this.brolostack.enterprise.monitoring.addMetric('api_usage', {
      type: 'counter',
      labels: ['endpoint', 'method', 'status']
    });
  }

  // Track API performance
  async trackAPICall(endpoint, method, duration, status) {
    try {
      await this.brolostack.enterprise.monitoring.record('response_time', duration, {
        endpoint,
        method
      });

      await this.brolostack.enterprise.monitoring.record('api_usage', 1, {
        endpoint,
        method,
        status: status.toString()
      });
    } catch (error) {
      console.error('Metrics recording failed:', error);
    }
  }

  // Track security events
  async trackSecurityEvent(eventType, severity, details) {
    try {
      await this.brolostack.enterprise.monitoring.record('security_events', 1, {
        event_type: eventType,
        severity
      });

      // Check for alert conditions
      await this.checkAlertConditions(eventType, severity);
    } catch (error) {
      console.error('Security event tracking failed:', error);
    }
  }

  // Setup alerts
  async setupAlerts() {
    const alerts = [
      {
        name: 'high_error_rate',
        condition: 'error_rate > 5%',
        duration: '5m',
        severity: 'warning'
      },
      {
        name: 'slow_response',
        condition: 'avg_response_time > 2s',
        duration: '10m',
        severity: 'warning'
      },
      {
        name: 'security_breach',
        condition: 'security_events{severity="critical"} > 0',
        duration: '1m',
        severity: 'critical'
      }
    ];

    for (const alert of alerts) {
      await this.brolostack.enterprise.monitoring.createAlert(alert);
    }
  }

  // Generate reports
  async generateReport(type, dateRange) {
    try {
      const report = await this.brolostack.enterprise.monitoring.generateReport({
        type,
        startDate: dateRange.start,
        endDate: dateRange.end,
        metrics: ['performance', 'security', 'usage']
      });
      
      return report;
    } catch (error) {
      throw new Error(\`Report generation failed: \${error.message}\`);
    }
  }

  async checkAlertConditions(eventType, severity) {
    // Implementation for alert condition checking
    if (severity === 'critical') {
      await this.brolostack.enterprise.monitoring.triggerAlert('security_breach', {
        eventType,
        severity,
        timestamp: new Date()
      });
    }
  }
}

const monitoringService = new MonitoringService(brolostack);`;

  const dataGovernanceExample = `import { Brolostack } from 'brolostack';

// Enterprise Data Governance
const brolostack = new Brolostack({
  enterprise: {
    dataGovernance: {
      enabled: true,
      policies: {
        retention: {
          default: '7y',
          personal: '3y',
          financial: '10y'
        },
        encryption: {
          atRest: true,
          inTransit: true,
          algorithm: 'AES-256-GCM'
        },
        access: {
          classification: ['public', 'internal', 'confidential', 'restricted'],
          controls: {
            public: ['read'],
            internal: ['read', 'write'],
            confidential: ['read', 'write', 'export'],
            restricted: ['read', 'write', 'export', 'admin']
          }
        }
      }
    }
  }
});

// Data Governance Service
class DataGovernanceService {
  constructor(brolostack) {
    this.brolostack = brolostack;
  }

  // Classify data
  async classifyData(data, context) {
    try {
      const classification = await this.brolostack.enterprise.dataGovernance.classify({
        content: data,
        context,
        rules: this.brolostack.enterprise.dataGovernance.policies.access.classification
      });
      
      return classification;
    } catch (error) {
      throw new Error(\`Data classification failed: \${error.message}\`);
    }
  }

  // Apply data policies
  async applyDataPolicies(data, classification) {
    try {
      const policies = await this.brolostack.enterprise.dataGovernance.getPolicies(classification);
      
      // Apply encryption if required
      if (policies.encryption.required) {
        data = await this.brolostack.crypto.encrypt(data, {
          algorithm: policies.encryption.algorithm
        });
      }
      
      // Set retention policy
      const retentionDate = this.calculateRetentionDate(policies.retention);
      
      return {
        data,
        classification,
        retentionDate,
        policies
      };
    } catch (error) {
      throw new Error(\`Data policy application failed: \${error.message}\`);
    }
  }

  // Data lineage tracking
  async trackDataLineage(dataId, operation, userId) {
    try {
      const lineage = {
        dataId,
        operation,
        userId,
        timestamp: new Date(),
        source: 'user_action',
        metadata: {
          ipAddress: await this.brolostack.utils.getClientIP(),
          userAgent: navigator.userAgent
        }
      };
      
      await this.brolostack.enterprise.dataGovernance.trackLineage(lineage);
    } catch (error) {
      console.error('Data lineage tracking failed:', error);
    }
  }

  // Data discovery
  async discoverData(patterns) {
    try {
      const discovered = await this.brolostack.enterprise.dataGovernance.discover({
        patterns,
        includeMetadata: true,
        classification: true
      });
      
      return discovered;
    } catch (error) {
      throw new Error(\`Data discovery failed: \${error.message}\`);
    }
  }

  // Compliance reporting
  async generateComplianceReport(standard) {
    try {
      const report = await this.brolostack.enterprise.dataGovernance.generateComplianceReport({
        standard,
        includeLineage: true,
        includePolicies: true,
        dateRange: {
          start: new Date(Date.now() - 365 * 24 * 60 * 60 * 1000), // 1 year ago
          end: new Date()
        }
      });
      
      return report;
    } catch (error) {
      throw new Error(\`Compliance report generation failed: \${error.message}\`);
    }
  }

  calculateRetentionDate(retentionPolicy) {
    const now = new Date();
    const retentionYears = parseInt(retentionPolicy.replace('y', ''));
    return new Date(now.getFullYear() + retentionYears, now.getMonth(), now.getDate());
  }
}

const dataGovernanceService = new DataGovernanceService(brolostack);`;

  const integrationExample = `import { Brolostack } from 'brolostack';

// Enterprise System Integration
const brolostack = new Brolostack({
  enterprise: {
    integration: {
      enabled: true,
      connectors: {
        salesforce: {
          enabled: true,
          apiVersion: 'v58.0',
          authentication: 'oauth2'
        },
        servicenow: {
          enabled: true,
          instance: 'your-instance.service-now.com',
          authentication: 'basic'
        },
        workday: {
          enabled: true,
          tenant: 'your-tenant',
          authentication: 'oauth2'
        },
        sap: {
          enabled: true,
          system: 'your-sap-system',
          authentication: 'saml'
        }
      }
    }
  }
});

// Integration Service
class IntegrationService {
  constructor(brolostack) {
    this.brolostack = brolostack;
  }

  // Salesforce integration
  async syncWithSalesforce(objectType, data) {
    try {
      const connector = this.brolostack.enterprise.integration.getConnector('salesforce');
      
      // Transform data for Salesforce
      const transformedData = await this.transformForSalesforce(objectType, data);
      
      // Sync to Salesforce
      const result = await connector.createOrUpdate(objectType, transformedData);
      
      // Log integration activity
      await this.brolostack.enterprise.audit.log('integration_sync', {
        system: 'salesforce',
        objectType,
        recordCount: Array.isArray(data) ? data.length : 1,
        timestamp: new Date()
      });
      
      return result;
    } catch (error) {
      throw new Error(\`Salesforce sync failed: \${error.message}\`);
    }
  }

  // ServiceNow integration
  async createServiceNowTicket(ticketData) {
    try {
      const connector = this.brolostack.enterprise.integration.getConnector('servicenow');
      
      const ticket = await connector.create('incident', {
        short_description: ticketData.title,
        description: ticketData.description,
        priority: ticketData.priority,
        category: ticketData.category,
        assigned_to: ticketData.assignedTo
      });
      
      return ticket;
    } catch (error) {
      throw new Error(\`ServiceNow ticket creation failed: \${error.message}\`);
    }
  }

  // Workday integration
  async syncEmployeeData(employeeData) {
    try {
      const connector = this.brolostack.enterprise.integration.getConnector('workday');
      
      const result = await connector.update('worker', employeeData);
      
      return result;
    } catch (error) {
      throw new Error(\`Workday sync failed: \${error.message}\`);
    }
  }

  // Real-time data sync
  async setupRealTimeSync(sourceSystem, targetSystem, mapping) {
    try {
      const sync = await this.brolostack.enterprise.integration.createRealTimeSync({
        source: sourceSystem,
        target: targetSystem,
        mapping,
        filters: mapping.filters || {},
        transformation: mapping.transformation || null
      });
      
      return sync;
    } catch (error) {
      throw new Error(\`Real-time sync setup failed: \${error.message}\`);
    }
  }

  async transformForSalesforce(objectType, data) {
    // Implementation for data transformation
    const transformations = {
      'Contact': (contact) => ({
        FirstName: contact.firstName,
        LastName: contact.lastName,
        Email: contact.email,
        Phone: contact.phone
      }),
      'Account': (account) => ({
        Name: account.name,
        Industry: account.industry,
        AnnualRevenue: account.revenue
      })
    };
    
    const transformer = transformations[objectType];
    return transformer ? transformer(data) : data;
  }
}

const integrationService = new IntegrationService(brolostack);`;

  const tabs = [
    { id: 'sso', label: 'SSO', icon: Lock },
    { id: 'rbac', label: 'RBAC', icon: Users },
    { id: 'audit', label: 'Audit', icon: FileText },
    { id: 'monitoring', label: 'Monitoring', icon: Monitor },
    { id: 'governance', label: 'Data Governance', icon: Shield },
    { id: 'integration', label: 'Integration', icon: Globe }
  ];

  const getCodeExample = (tabId: string) => {
    switch (tabId) {
      case 'sso': return ssoExample;
      case 'rbac': return rbacExample;
      case 'audit': return auditExample;
      case 'monitoring': return monitoringExample;
      case 'governance': return dataGovernanceExample;
      case 'integration': return integrationExample;
      default: return ssoExample;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-6">
            <Building className="w-8 h-8 text-purple-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Enterprise Features Guide
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Enterprise-grade features including SSO, RBAC, audit logging, 
            monitoring, data governance, and system integration
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
            <Lock className="w-8 h-8 text-blue-600 mb-4" />
            <h3 className="font-semibold text-gray-900 mb-2">Single Sign-On</h3>
            <p className="text-gray-600 text-sm">SAML, OIDC, and LDAP integration</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <Users className="w-8 h-8 text-green-600 mb-4" />
            <h3 className="font-semibold text-gray-900 mb-2">Role-Based Access</h3>
            <p className="text-gray-600 text-sm">Granular permissions and hierarchy</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <FileText className="w-8 h-8 text-purple-600 mb-4" />
            <h3 className="font-semibold text-gray-900 mb-2">Audit & Compliance</h3>
            <p className="text-gray-600 text-sm">GDPR, SOX, HIPAA compliance</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <Monitor className="w-8 h-8 text-orange-600 mb-4" />
            <h3 className="font-semibold text-gray-900 mb-2">Monitoring</h3>
            <p className="text-gray-600 text-sm">Real-time metrics and alerts</p>
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
                      ? 'text-purple-600 border-b-2 border-purple-600 bg-purple-50'
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
                {tabs.find(tab => tab.id === activeTab)?.label} Implementation
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
            Enterprise Use Cases
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Building className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-3">Fortune 500 Company</h3>
              <p className="text-gray-600 text-sm mb-4">
                Large enterprise with complex organizational structure requiring advanced SSO and RBAC.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Multi-domain SSO</li>
                <li>• Complex role hierarchies</li>
                <li>• Compliance reporting</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-3">Healthcare Provider</h3>
              <p className="text-gray-600 text-sm mb-4">
                HIPAA-compliant system with strict data governance and audit requirements.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• HIPAA compliance</li>
                <li>• Data encryption</li>
                <li>• Access logging</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-3">Global Corporation</h3>
              <p className="text-gray-600 text-sm mb-4">
                Multi-regional deployment with system integration and real-time monitoring.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Multi-region deployment</li>
                <li>• System integration</li>
                <li>• Global monitoring</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Compliance Standards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-12 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-200"
        >
          <div className="flex items-center mb-6">
            <Shield className="w-8 h-8 text-blue-600 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900">Compliance Standards</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2">GDPR</h3>
              <p className="text-sm text-gray-600">EU data protection regulation compliance</p>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2">SOX</h3>
              <p className="text-sm text-gray-600">Sarbanes-Oxley financial reporting compliance</p>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2">HIPAA</h3>
              <p className="text-sm text-gray-600">Healthcare data protection compliance</p>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2">PCI DSS</h3>
              <p className="text-sm text-gray-600">Payment card industry security standards</p>
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
              Ready for Enterprise?
            </h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Implement enterprise-grade features with comprehensive security, 
              compliance, and integration capabilities for your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-medium">
                View Documentation
              </button>
              <button className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium">
                Contact Sales
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default EnterpriseFeaturesGuidePage;

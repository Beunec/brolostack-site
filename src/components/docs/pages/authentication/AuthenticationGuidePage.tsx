import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Users, 
  Key, 
  Lock, 
  Eye, 
  EyeOff, 
  CheckCircle, 
  AlertCircle,
  Copy,
  ExternalLink,
  Code,
  Database,
  Globe,
  Smartphone
} from 'lucide-react';

const AuthenticationGuidePage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('basic');
  const [showPassword, setShowPassword] = useState(false);
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const copyToClipboard = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const basicAuthExample = `import { Brolostack } from 'brolostack';

// Initialize Brolostack with authentication
const brolostack = new Brolostack({
  auth: {
    provider: 'local',
    storage: 'indexeddb'
  }
});

// User registration
async function registerUser(email, password) {
  try {
    const user = await brolostack.auth.register({
      email,
      password,
      profile: {
        name: 'John Doe',
        role: 'user'
      }
    });
    console.log('User registered:', user);
    return user;
  } catch (error) {
    console.error('Registration failed:', error);
  }
}

// User login
async function loginUser(email, password) {
  try {
    const session = await brolostack.auth.login({
      email,
      password
    });
    console.log('Login successful:', session);
    return session;
  } catch (error) {
    console.error('Login failed:', error);
  }
}

// Check authentication status
async function checkAuth() {
  const isAuthenticated = await brolostack.auth.isAuthenticated();
  const currentUser = await brolostack.auth.getCurrentUser();
  return { isAuthenticated, currentUser };
}`;

  const oauthExample = `import { Brolostack } from 'brolostack';

// OAuth configuration
const brolostack = new Brolostack({
  auth: {
    provider: 'oauth',
    providers: {
      google: {
        clientId: 'your-google-client-id',
        redirectUri: 'http://localhost:3000/auth/callback'
      },
      github: {
        clientId: 'your-github-client-id',
        redirectUri: 'http://localhost:3000/auth/callback'
      },
      microsoft: {
        clientId: 'your-microsoft-client-id',
        redirectUri: 'http://localhost:3000/auth/callback'
      }
    }
  }
});

// OAuth login
async function loginWithOAuth(provider) {
  try {
    const authUrl = await brolostack.auth.getOAuthUrl(provider);
    window.location.href = authUrl;
  } catch (error) {
    console.error('OAuth login failed:', error);
  }
}

// Handle OAuth callback
async function handleOAuthCallback() {
  try {
    const session = await brolostack.auth.handleOAuthCallback();
    console.log('OAuth login successful:', session);
    return session;
  } catch (error) {
    console.error('OAuth callback failed:', error);
  }
}`;

  const mfaExample = `import { Brolostack } from 'brolostack';

// MFA-enabled authentication
const brolostack = new Brolostack({
  auth: {
    provider: 'local',
    mfa: {
      enabled: true,
      methods: ['totp', 'sms', 'email'],
      backupCodes: true
    }
  }
});

// Setup MFA
async function setupMFA(userId) {
  try {
    const mfaSetup = await brolostack.auth.mfa.setup(userId);
    console.log('MFA setup:', mfaSetup);
    
    // Display QR code for TOTP
    const qrCode = mfaSetup.totp.qrCode;
    // Show QR code to user
    
    return mfaSetup;
  } catch (error) {
    console.error('MFA setup failed:', error);
  }
}

// Verify MFA token
async function verifyMFA(userId, token, method = 'totp') {
  try {
    const verified = await brolostack.auth.mfa.verify(userId, token, method);
    if (verified) {
      console.log('MFA verification successful');
      return true;
    }
  } catch (error) {
    console.error('MFA verification failed:', error);
  }
  return false;
}

// Login with MFA
async function loginWithMFA(email, password, mfaToken) {
  try {
    const session = await brolostack.auth.login({
      email,
      password,
      mfaToken
    });
    console.log('MFA login successful:', session);
    return session;
  } catch (error) {
    console.error('MFA login failed:', error);
  }
}`;

  const rbacExample = `import { Brolostack } from 'brolostack';

// Role-based access control
const brolostack = new Brolostack({
  auth: {
    provider: 'local',
    rbac: {
      enabled: true,
      roles: ['admin', 'moderator', 'user', 'guest'],
      permissions: {
        admin: ['*'],
        moderator: ['read', 'write', 'moderate'],
        user: ['read', 'write'],
        guest: ['read']
      }
    }
  }
});

// Define roles and permissions
const roles = {
  admin: {
    permissions: ['*'],
    description: 'Full system access'
  },
  moderator: {
    permissions: ['read', 'write', 'moderate'],
    description: 'Content moderation access'
  },
  user: {
    permissions: ['read', 'write'],
    description: 'Standard user access'
  },
  guest: {
    permissions: ['read'],
    description: 'Read-only access'
  }
};

// Check user permissions
async function checkPermission(userId, resource, action) {
  try {
    const hasPermission = await brolostack.auth.rbac.checkPermission(
      userId, 
      resource, 
      action
    );
    return hasPermission;
  } catch (error) {
    console.error('Permission check failed:', error);
    return false;
  }
}

// Assign role to user
async function assignRole(userId, role) {
  try {
    await brolostack.auth.rbac.assignRole(userId, role);
    console.log(\`Role \${role} assigned to user \${userId}\`);
  } catch (error) {
    console.error('Role assignment failed:', error);
  }
}`;

  const sessionManagementExample = `import { Brolostack } from 'brolostack';

// Advanced session management
const brolostack = new Brolostack({
  auth: {
    provider: 'local',
    session: {
      timeout: 3600000, // 1 hour
      refreshThreshold: 300000, // 5 minutes
      maxConcurrentSessions: 3,
      secure: true,
      httpOnly: true
    }
  }
});

// Session management
class SessionManager {
  constructor(brolostack) {
    this.brolostack = brolostack;
    this.setupSessionRefresh();
  }

  // Setup automatic session refresh
  setupSessionRefresh() {
    setInterval(async () => {
      try {
        const isExpiring = await this.brolostack.auth.session.isExpiring();
        if (isExpiring) {
          await this.brolostack.auth.session.refresh();
          console.log('Session refreshed');
        }
      } catch (error) {
        console.error('Session refresh failed:', error);
        this.handleSessionExpired();
      }
    }, 60000); // Check every minute
  }

  // Handle session expiration
  handleSessionExpired() {
    console.log('Session expired, redirecting to login');
    window.location.href = '/login';
  }

  // Get active sessions
  async getActiveSessions() {
    try {
      const sessions = await this.brolostack.auth.session.getAll();
      return sessions;
    } catch (error) {
      console.error('Failed to get sessions:', error);
      return [];
    }
  }

  // Terminate specific session
  async terminateSession(sessionId) {
    try {
      await this.brolostack.auth.session.terminate(sessionId);
      console.log(\`Session \${sessionId} terminated\`);
    } catch (error) {
      console.error('Session termination failed:', error);
    }
  }
}

// Initialize session manager
const sessionManager = new SessionManager(brolostack);`;

  const securityExample = `import { Brolostack } from 'brolostack';

// Security-focused authentication
const brolostack = new Brolostack({
  auth: {
    provider: 'local',
    security: {
      passwordPolicy: {
        minLength: 12,
        requireUppercase: true,
        requireLowercase: true,
        requireNumbers: true,
        requireSpecialChars: true,
        preventCommonPasswords: true
      },
      rateLimiting: {
        loginAttempts: 5,
        windowMs: 900000, // 15 minutes
        blockDuration: 1800000 // 30 minutes
      },
      encryption: {
        algorithm: 'AES-256-GCM',
        keyDerivation: 'PBKDF2',
        iterations: 100000
      }
    }
  }
});

// Password validation
function validatePassword(password) {
  const policy = brolostack.auth.security.passwordPolicy;
  const errors = [];

  if (password.length < policy.minLength) {
    errors.push(\`Password must be at least \${policy.minLength} characters\`);
  }
  if (policy.requireUppercase && !/[A-Z]/.test(password)) {
    errors.push('Password must contain uppercase letters');
  }
  if (policy.requireLowercase && !/[a-z]/.test(password)) {
    errors.push('Password must contain lowercase letters');
  }
  if (policy.requireNumbers && !/\\d/.test(password)) {
    errors.push('Password must contain numbers');
  }
  if (policy.requireSpecialChars && !/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
    errors.push('Password must contain special characters');
  }

  return {
    isValid: errors.length === 0,
    errors
  };
}

// Rate limiting check
async function checkRateLimit(identifier) {
  try {
    const isBlocked = await brolostack.auth.security.rateLimit.isBlocked(identifier);
    if (isBlocked) {
      const timeRemaining = await brolostack.auth.security.rateLimit.getTimeRemaining(identifier);
      throw new Error(\`Too many attempts. Try again in \${timeRemaining} minutes\`);
    }
  } catch (error) {
    throw error;
  }
}

// Secure login with all checks
async function secureLogin(email, password) {
  try {
    // Check rate limiting
    await checkRateLimit(email);
    
    // Validate password
    const validation = validatePassword(password);
    if (!validation.isValid) {
      throw new Error(validation.errors.join(', '));
    }

    // Attempt login
    const session = await brolostack.auth.login({ email, password });
    
    // Log successful login
    await brolostack.auth.security.audit.log('login_success', {
      userId: session.user.id,
      timestamp: new Date().toISOString()
    });

    return session;
  } catch (error) {
    // Log failed login
    await brolostack.auth.security.audit.log('login_failed', {
      email,
      timestamp: new Date().toISOString(),
      error: error.message
    });
    
    throw error;
  }
}`;

  const tabs = [
    { id: 'basic', label: 'Basic Auth', icon: Key },
    { id: 'oauth', label: 'OAuth', icon: Globe },
    { id: 'mfa', label: 'MFA', icon: Shield },
    { id: 'rbac', label: 'RBAC', icon: Users },
    { id: 'session', label: 'Session Mgmt', icon: Lock },
    { id: 'security', label: 'Security', icon: AlertCircle }
  ];

  const getCodeExample = (tabId: string) => {
    switch (tabId) {
      case 'basic': return basicAuthExample;
      case 'oauth': return oauthExample;
      case 'mfa': return mfaExample;
      case 'rbac': return rbacExample;
      case 'session': return sessionManagementExample;
      case 'security': return securityExample;
      default: return basicAuthExample;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
            <Shield className="w-8 h-8 text-blue-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Authentication Guide
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive authentication solutions with CIAM integration, 
            multi-factor authentication, and enterprise-grade security
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
            <Key className="w-8 h-8 text-blue-600 mb-4" />
            <h3 className="font-semibold text-gray-900 mb-2">Basic Auth</h3>
            <p className="text-gray-600 text-sm">Email/password authentication with secure storage</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <Globe className="w-8 h-8 text-green-600 mb-4" />
            <h3 className="font-semibold text-gray-900 mb-2">OAuth Integration</h3>
            <p className="text-gray-600 text-sm">Google, GitHub, Microsoft, and more</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <Shield className="w-8 h-8 text-purple-600 mb-4" />
            <h3 className="font-semibold text-gray-900 mb-2">Multi-Factor Auth</h3>
            <p className="text-gray-600 text-sm">TOTP, SMS, email verification</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <Users className="w-8 h-8 text-orange-600 mb-4" />
            <h3 className="font-semibold text-gray-900 mb-2">Role-Based Access</h3>
            <p className="text-gray-600 text-sm">Granular permissions and roles</p>
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
                      ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50'
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
            Common Use Cases
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Smartphone className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-3">Mobile App Authentication</h3>
              <p className="text-gray-600 text-sm mb-4">
                Secure authentication for mobile applications with biometric support and offline capabilities.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Biometric authentication</li>
                <li>• Offline token validation</li>
                <li>• Secure key storage</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Database className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-3">Enterprise SSO</h3>
              <p className="text-gray-600 text-sm mb-4">
                Single sign-on integration with enterprise identity providers and directory services.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• SAML integration</li>
                <li>• LDAP directory sync</li>
                <li>• Group-based permissions</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-3">Multi-Tenant SaaS</h3>
              <p className="text-gray-600 text-sm mb-4">
                Authentication system for multi-tenant applications with tenant isolation and management.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Tenant isolation</li>
                <li>• Custom domains</li>
                <li>• Billing integration</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Security Best Practices */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-12 bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl p-8 border border-red-200"
        >
          <div className="flex items-center mb-6">
            <AlertCircle className="w-8 h-8 text-red-600 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900">Security Best Practices</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Authentication Security</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Use strong password policies with complexity requirements</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Implement rate limiting to prevent brute force attacks</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Enable multi-factor authentication for sensitive accounts</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Use secure session management with proper timeouts</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Implementation Security</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Encrypt sensitive data at rest and in transit</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Implement proper CORS and CSP headers</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Use HTTPS for all authentication endpoints</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Regular security audits and penetration testing</span>
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
              Ready to Get Started?
            </h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Implement secure authentication in your application with just a few lines of code. 
              Choose from basic auth, OAuth, MFA, or enterprise-grade solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
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

export default AuthenticationGuidePage;

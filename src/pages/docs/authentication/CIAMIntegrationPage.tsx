import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  Shield, 
  Key, 
  ArrowRight, 
  Code, 
  Eye
} from 'lucide-react';

const CIAMIntegrationPage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="space-y-8"
    >
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-white">
        <div className="max-w-4xl">
          <h1 className="text-4xl font-bold mb-4">
            CIAM Integration
          </h1>
          <p className="text-xl text-indigo-100 mb-6">
            Customer Identity and Access Management integration with multi-provider authentication. 
            Support for OAuth, SAML, OpenID Connect, and custom authentication providers.
          </p>
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center space-x-2 bg-white/20 rounded-lg px-4 py-2">
              <Users size={20} />
              <span className="font-medium">Multi-Provider Auth</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/20 rounded-lg px-4 py-2">
              <Shield size={20} />
              <span className="font-medium">Enterprise SSO</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/20 rounded-lg px-4 py-2">
              <Key size={20} />
              <span className="font-medium">Identity Federation</span>
            </div>
          </div>
        </div>
      </div>

      {/* Supported Providers */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">🔐 Supported Authentication Providers</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Enterprise Providers</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="bg-blue-100 rounded-lg p-2">
                  <Shield className="text-blue-600" size={16} />
                </div>
                <div>
                  <div className="font-medium text-gray-900">Azure AD</div>
                  <div className="text-sm text-gray-600">Microsoft enterprise identity</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-red-100 rounded-lg p-2">
                  <Shield className="text-red-600" size={16} />
                </div>
                <div>
                  <div className="font-medium text-gray-900">Google Workspace</div>
                  <div className="text-sm text-gray-600">Google enterprise suite</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-purple-100 rounded-lg p-2">
                  <Shield className="text-purple-600" size={16} />
                </div>
                <div>
                  <div className="font-medium text-gray-900">Okta</div>
                  <div className="text-sm text-gray-600">Identity and access management</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Social Providers</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="bg-blue-100 rounded-lg p-2">
                  <Users className="text-blue-600" size={16} />
                </div>
                <div>
                  <div className="font-medium text-gray-900">Facebook</div>
                  <div className="text-sm text-gray-600">Social media authentication</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-blue-100 rounded-lg p-2">
                  <Users className="text-blue-600" size={16} />
                </div>
                <div>
                  <div className="font-medium text-gray-900">Twitter</div>
                  <div className="text-sm text-gray-600">Social media authentication</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-red-100 rounded-lg p-2">
                  <Users className="text-red-600" size={16} />
                </div>
                <div>
                  <div className="font-medium text-gray-900">LinkedIn</div>
                  <div className="text-sm text-gray-600">Professional network auth</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Protocols</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="bg-green-100 rounded-lg p-2">
                  <Key className="text-green-600" size={16} />
                </div>
                <div>
                  <div className="font-medium text-gray-900">OAuth 2.0</div>
                  <div className="text-sm text-gray-600">Authorization framework</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-orange-100 rounded-lg p-2">
                  <Key className="text-orange-600" size={16} />
                </div>
                <div>
                  <div className="font-medium text-gray-900">OpenID Connect</div>
                  <div className="text-sm text-gray-600">Identity layer on OAuth 2.0</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-purple-100 rounded-lg p-2">
                  <Key className="text-purple-600" size={16} />
                </div>
                <div>
                  <div className="font-medium text-gray-900">SAML 2.0</div>
                  <div className="text-sm text-gray-600">Security assertion markup</div>
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
          <div className="border-l-4 border-indigo-500 pl-6">
            <div className="flex items-center mb-3">
              <div className="bg-indigo-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Configure CIAM Integration</h3>
            </div>
            <div className="bg-gray-900 rounded-lg p-4 text-green-400 font-mono text-sm overflow-x-auto">
              <pre>{`import { BrolostackCIAMIntegration } from 'brolostack';

// Initialize CIAM integration
const ciam = new BrolostackCIAMIntegration({
  providers: [
    {
      name: 'azure-ad',
      config: {
        clientId: process.env.AZURE_CLIENT_ID,
        tenantId: process.env.AZURE_TENANT_ID,
        redirectUri: 'https://your-app.com/auth/callback',
        scopes: ['openid', 'profile', 'email']
      },
      priority: 10,
      enabled: true
    },
    {
      name: 'google-oauth',
      config: {
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        redirectUri: 'https://your-app.com/auth/google/callback'
      },
      priority: 9,
      enabled: true
    },
    {
      name: 'okta-saml',
      config: {
        entityId: process.env.OKTA_ENTITY_ID,
        ssoUrl: process.env.OKTA_SSO_URL,
        certificate: process.env.OKTA_CERTIFICATE
      },
      priority: 8,
      enabled: true
    }
  ],
  session: {
    duration: 28800000, // 8 hours
    refreshThreshold: 3600000, // 1 hour
    secure: true,
    httpOnly: true
  }
});

await ciam.initialize();`}</pre>
            </div>
          </div>

          {/* Step 2 */}
          <div className="border-l-4 border-purple-500 pl-6">
            <div className="flex items-center mb-3">
              <div className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Implement Authentication Flow</h3>
            </div>
            <div className="bg-gray-900 rounded-lg p-4 text-green-400 font-mono text-sm overflow-x-auto">
              <pre>{`// Authentication flow implementation
class AuthService {
  constructor() {
    this.ciam = ciam;
  }
  
  // Initiate login with provider
  async loginWithProvider(providerName, options = {}) {
    const authUrl = await this.ciam.getAuthUrl(providerName, {
      redirectUri: window.location.origin + '/auth/callback',
      state: this.generateState(),
      ...options
    });
    
    // Redirect to provider
    window.location.href = authUrl;
  }
  
  // Handle authentication callback
  async handleCallback(providerName, callbackData) {
    try {
      const user = await this.ciam.authenticate(providerName, callbackData);
      
      // Store user session
      await this.ciam.createSession(user, {
        provider: providerName,
        timestamp: Date.now()
      });
      
      return user;
    } catch (error) {
      console.error('Authentication failed:', error);
      throw error;
    }
  }
  
  // Check authentication status
  async checkAuthStatus() {
    const session = await this.ciam.getCurrentSession();
    
    if (session && !session.isExpired) {
      return {
        authenticated: true,
        user: session.user,
        provider: session.provider
      };
    }
    
    return { authenticated: false };
  }
  
  // Logout
  async logout() {
    await this.ciam.destroySession();
    await this.ciam.logoutFromProvider();
  }
}

// Usage
const authService = new AuthService();

// Login with Azure AD
await authService.loginWithProvider('azure-ad');

// Login with Google
await authService.loginWithProvider('google-oauth');`}</pre>
            </div>
          </div>

          {/* Step 3 */}
          <div className="border-l-4 border-blue-500 pl-6">
            <div className="flex items-center mb-3">
              <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900">React Integration</h3>
            </div>
            <div className="bg-gray-900 rounded-lg p-4 text-green-400 font-mono text-sm overflow-x-auto">
              <pre>{`import React, { createContext, useContext, useEffect, useState } from 'react';
import { BrolostackCIAMProvider } from 'brolostack/react';

// Create authentication context
const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};

// Authentication provider component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);
  
  useEffect(() => {
    checkAuthStatus();
  }, []);
  
  const checkAuthStatus = async () => {
    try {
      const status = await authService.checkAuthStatus();
      setAuthenticated(status.authenticated);
      setUser(status.user);
    } catch (error) {
      console.error('Auth check failed:', error);
    } finally {
      setLoading(false);
    }
  };
  
  const login = async (providerName) => {
    setLoading(true);
    try {
      await authService.loginWithProvider(providerName);
    } catch (error) {
      console.error('Login failed:', error);
    } finally {
      setLoading(false);
    }
  };
  
  const logout = async () => {
    setLoading(true);
    try {
      await authService.logout();
      setAuthenticated(false);
      setUser(null);
    } catch (error) {
      console.error('Logout failed:', error);
    } finally {
      setLoading(false);
    }
  };
  
  const value = {
    user,
    authenticated,
    loading,
    login,
    logout,
    checkAuthStatus
  };
  
  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

// Login component
const LoginComponent = () => {
  const { login, loading } = useAuth();
  
  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Login</h2>
      
      <div className="space-y-4">
        <button
          onClick={() => login('azure-ad')}
          disabled={loading}
          className="w-full py-3 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 transition-colors"
        >
          Login with Azure AD
        </button>
        
        <button
          onClick={() => login('google-oauth')}
          disabled={loading}
          className="w-full py-3 px-4 bg-red-600 text-white rounded-lg hover:bg-red-700 disabled:opacity-50 transition-colors"
        >
          Login with Google
        </button>
        
        <button
          onClick={() => login('okta-saml')}
          disabled={loading}
          className="w-full py-3 px-4 bg-purple-600 text-white rounded-lg hover:bg-purple-700 disabled:opacity-50 transition-colors"
        >
          Login with Okta
        </button>
      </div>
    </div>
  );
};

export default LoginComponent;`}</pre>
            </div>
          </div>
        </div>
      </div>

      {/* Security Features */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">🔒 Security Features</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center p-6 bg-blue-50 rounded-xl">
            <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Shield className="text-blue-600" size={32} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Multi-Factor Authentication</h3>
            <p className="text-gray-600 text-sm">Support for TOTP, SMS, email, and hardware tokens</p>
          </div>
          <div className="text-center p-6 bg-green-50 rounded-xl">
            <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Key className="text-green-600" size={32} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Token Management</h3>
            <p className="text-gray-600 text-sm">Secure token storage, rotation, and validation</p>
          </div>
          <div className="text-center p-6 bg-purple-50 rounded-xl">
            <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Eye className="text-purple-600" size={32} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Session Security</h3>
            <p className="text-gray-600 text-sm">Secure session management with automatic expiration</p>
          </div>
        </div>
      </div>

      {/* Performance Metrics */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">📈 Performance Metrics</h2>
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
                <td className="border border-gray-200 px-4 py-3 font-medium text-gray-900">Authentication Speed</td>
                <td className="border border-gray-200 px-4 py-3 text-green-600 font-semibold">&lt;200ms</td>
                <td className="border border-gray-200 px-4 py-3 text-gray-600">Average authentication time</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-3 font-medium text-gray-900">Token Validation</td>
                <td className="border border-gray-200 px-4 py-3 text-blue-600 font-semibold">&lt;50ms</td>
                <td className="border border-gray-200 px-4 py-3 text-gray-600">Token validation response time</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-3 font-medium text-gray-900">Session Creation</td>
                <td className="border border-gray-200 px-4 py-3 text-purple-600 font-semibold">&lt;100ms</td>
                <td className="border border-gray-200 px-4 py-3 text-gray-600">Session creation and storage time</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-3 font-medium text-gray-900">Concurrent Users</td>
                <td className="border border-gray-200 px-4 py-3 text-orange-600 font-semibold">10,000+</td>
                <td className="border border-gray-200 px-4 py-3 text-gray-600">Supported concurrent authenticated users</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-3 font-medium text-gray-900">Success Rate</td>
                <td className="border border-gray-200 px-4 py-3 text-green-600 font-semibold">99.9%</td>
                <td className="border border-gray-200 px-4 py-3 text-gray-600">Authentication success rate</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Next Steps */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl p-8 text-white">
        <h2 className="text-2xl font-bold mb-4">🔐 Ready to Secure Your Application?</h2>
        <p className="text-indigo-100 mb-6">
          Explore advanced authentication features, security implementations, and real-world examples 
          to build secure applications with Brolostack CIAM Integration.
        </p>
        <div className="flex flex-wrap gap-4">
          <a 
            href="/docs/authentication-guide" 
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

export default CIAMIntegrationPage;

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Wrench, 
  Database, 
  Cloud, 
  ArrowRight, 
  Code, 
  Shield,
  Zap,
  Globe,
  Eye,
  Activity
} from 'lucide-react';

const BackendIntegrationPage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="space-y-8"
    >
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl p-8 text-white">
        <div className="max-w-4xl">
          <h1 className="text-4xl font-bold mb-4">
            Backend Integration
          </h1>
          <p className="text-xl text-orange-100 mb-6">
            Seamlessly integrate with Node.js and Python backend services. 
            Built-in support for REST APIs, GraphQL, WebSocket connections, and real-time data synchronization.
          </p>
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center space-x-2 bg-white/20 rounded-lg px-4 py-2">
              <Wrench size={20} />
              <span className="font-medium">Multi-Language Support</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/20 rounded-lg px-4 py-2">
              <Database size={20} />
              <span className="font-medium">Real-time Sync</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/20 rounded-lg px-4 py-2">
              <Cloud size={20} />
              <span className="font-medium">API Integration</span>
            </div>
          </div>
        </div>
      </div>

      {/* Supported Backend Technologies */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">🔧 Supported Backend Technologies</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Node.js Frameworks</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="bg-green-100 rounded-lg p-2">
                  <Wrench className="text-green-600" size={16} />
                </div>
                <div>
                  <div className="font-medium text-gray-900">Express.js</div>
                  <div className="text-sm text-gray-600">Fast, unopinionated web framework</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-blue-100 rounded-lg p-2">
                  <Wrench className="text-blue-600" size={16} />
                </div>
                <div>
                  <div className="font-medium text-gray-900">Fastify</div>
                  <div className="text-sm text-gray-600">Fast and low overhead web framework</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-purple-100 rounded-lg p-2">
                  <Wrench className="text-purple-600" size={16} />
                </div>
                <div>
                  <div className="font-medium text-gray-900">NestJS</div>
                  <div className="text-sm text-gray-600">Progressive Node.js framework</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Python Frameworks</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="bg-yellow-100 rounded-lg p-2">
                  <Wrench className="text-yellow-600" size={16} />
                </div>
                <div>
                  <div className="font-medium text-gray-900">FastAPI</div>
                  <div className="text-sm text-gray-600">Modern, fast web framework</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-red-100 rounded-lg p-2">
                  <Wrench className="text-red-600" size={16} />
                </div>
                <div>
                  <div className="font-medium text-gray-900">Django</div>
                  <div className="text-sm text-gray-600">High-level Python web framework</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-green-100 rounded-lg p-2">
                  <Wrench className="text-green-600" size={16} />
                </div>
                <div>
                  <div className="font-medium text-gray-900">Flask</div>
                  <div className="text-sm text-gray-600">Lightweight WSGI web framework</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">API Protocols</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="bg-blue-100 rounded-lg p-2">
                  <Globe className="text-blue-600" size={16} />
                </div>
                <div>
                  <div className="font-medium text-gray-900">REST APIs</div>
                  <div className="text-sm text-gray-600">Representational State Transfer</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-purple-100 rounded-lg p-2">
                  <Activity className="text-purple-600" size={16} />
                </div>
                <div>
                  <div className="font-medium text-gray-900">GraphQL</div>
                  <div className="text-sm text-gray-600">Query language for APIs</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-cyan-100 rounded-lg p-2">
                  <Zap className="text-cyan-600" size={16} />
                </div>
                <div>
                  <div className="font-medium text-gray-900">WebSocket</div>
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
          <div className="border-l-4 border-orange-500 pl-6">
            <div className="flex items-center mb-3">
              <div className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Configure Backend Connection</h3>
            </div>
            <div className="bg-gray-900 rounded-lg p-4 text-green-400 font-mono text-sm overflow-x-auto">
              <pre>{`import { BrolostackBackendIntegration } from 'brolostack';

// Initialize backend integration
const backendIntegration = new BrolostackBackendIntegration({
  endpoints: [
    {
      name: 'api',
      url: 'https://api.your-backend.com',
      type: 'rest',
      authentication: {
        type: 'bearer',
        token: process.env.API_TOKEN
      },
      timeout: 30000,
      retries: 3
    },
    {
      name: 'graphql',
      url: 'https://api.your-backend.com/graphql',
      type: 'graphql',
      authentication: {
        type: 'bearer',
        token: process.env.GRAPHQL_TOKEN
      }
    },
    {
      name: 'websocket',
      url: 'wss://api.your-backend.com/ws',
      type: 'websocket',
      authentication: {
        type: 'query',
        params: {
          token: process.env.WS_TOKEN
        }
      }
    }
  ],
  sync: {
    enabled: true,
    interval: 5000,
    conflictResolution: 'server-wins'
  }
});

await backendIntegration.initialize();`}</pre>
            </div>
          </div>

          {/* Step 2 */}
          <div className="border-l-4 border-red-500 pl-6">
            <div className="flex items-center mb-3">
              <div className="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Implement API Calls</h3>
            </div>
            <div className="bg-gray-900 rounded-lg p-4 text-green-400 font-mono text-sm overflow-x-auto">
              <pre>{`// REST API calls
const apiService = {
  // GET request
  async getUsers() {
    const response = await backendIntegration.request('api', {
      method: 'GET',
      path: '/users',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    return response.data;
  },
  
  // POST request
  async createUser(userData) {
    const response = await backendIntegration.request('api', {
      method: 'POST',
      path: '/users',
      body: userData,
      headers: {
        'Content-Type': 'application/json'
      }
    });
    return response.data;
  },
  
  // PUT request
  async updateUser(id, userData) {
    const response = await backendIntegration.request('api', {
      method: 'PUT',
      path: \`/users/\${id}\`,
      body: userData
    });
    return response.data;
  },
  
  // DELETE request
  async deleteUser(id) {
    const response = await backendIntegration.request('api', {
      method: 'DELETE',
      path: \`/users/\${id}\`
    });
    return response.data;
  }
};

// GraphQL queries
const graphqlService = {
  async getUsers() {
    const query = \`
      query GetUsers {
        users {
          id
          name
          email
          createdAt
        }
      }
    \`;
    
    const response = await backendIntegration.query('graphql', query);
    return response.data.users;
  },
  
  async createUser(userData) {
    const mutation = \`
      mutation CreateUser($input: UserInput!) {
        createUser(input: $input) {
          id
          name
          email
        }
      }
    \`;
    
    const response = await backendIntegration.mutate('graphql', mutation, {
      input: userData
    });
    return response.data.createUser;
  }
};`}</pre>
            </div>
          </div>

          {/* Step 3 */}
          <div className="border-l-4 border-purple-500 pl-6">
            <div className="flex items-center mb-3">
              <div className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Real-time WebSocket Integration</h3>
            </div>
            <div className="bg-gray-900 rounded-lg p-4 text-green-400 font-mono text-sm overflow-x-auto">
              <pre>{`// WebSocket integration
const wsService = {
  // Connect to WebSocket
  async connect() {
    await backendIntegration.connect('websocket');
  },
  
  // Subscribe to events
  subscribe(event, callback) {
    backendIntegration.subscribe('websocket', event, callback);
  },
  
  // Send messages
  async sendMessage(type, data) {
    await backendIntegration.send('websocket', {
      type,
      data,
      timestamp: Date.now()
    });
  },
  
  // Handle real-time updates
  setupRealTimeUpdates() {
    this.subscribe('user-updated', (data) => {
      console.log('User updated:', data);
      // Update local state
      updateLocalUser(data);
    });
    
    this.subscribe('notification', (data) => {
      console.log('New notification:', data);
      // Show notification
      showNotification(data);
    });
    
    this.subscribe('data-sync', (data) => {
      console.log('Data sync:', data);
      // Sync local data
      syncLocalData(data);
    });
  }
};

// React integration
const useBackendIntegration = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  
  const fetchData = async () => {
    setLoading(true);
    try {
      const result = await apiService.getUsers();
      setData(result);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  
  useEffect(() => {
    fetchData();
    
    // Setup real-time updates
    wsService.setupRealTimeUpdates();
    
    return () => {
      backendIntegration.disconnect('websocket');
    };
  }, []);
  
  return { data, loading, error, refetch: fetchData };
};`}</pre>
            </div>
          </div>
        </div>
      </div>

      {/* Integration Features */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">🔗 Integration Features</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-center space-x-3 mb-3">
                <div className="bg-orange-100 rounded-lg p-2">
                  <Zap className="text-orange-600" size={20} />
                </div>
                <h3 className="font-semibold text-gray-900">Automatic Retry Logic</h3>
              </div>
              <p className="text-gray-600 text-sm mb-3">
                Built-in retry mechanism with exponential backoff for failed requests.
              </p>
              <div className="bg-gray-50 rounded p-3">
                <div className="text-xs font-mono text-gray-700">
                  Configurable retry attempts and backoff strategies
                </div>
              </div>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-center space-x-3 mb-3">
                <div className="bg-blue-100 rounded-lg p-2">
                  <Shield className="text-blue-600" size={20} />
                </div>
                <h3 className="font-semibold text-gray-900">Request Authentication</h3>
              </div>
              <p className="text-gray-600 text-sm mb-3">
                Support for Bearer tokens, API keys, and custom authentication headers.
              </p>
              <div className="bg-gray-50 rounded p-3">
                <div className="text-xs font-mono text-gray-700">
                  Bearer, API Key, Basic Auth, Custom headers
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-center space-x-3 mb-3">
                <div className="bg-green-100 rounded-lg p-2">
                  <Database className="text-green-600" size={20} />
                </div>
                <h3 className="font-semibold text-gray-900">Data Synchronization</h3>
              </div>
              <p className="text-gray-600 text-sm mb-3">
                Automatic data synchronization between frontend and backend with conflict resolution.
              </p>
              <div className="bg-gray-50 rounded p-3">
                <div className="text-xs font-mono text-gray-700">
                  Real-time sync, conflict resolution, offline support
                </div>
              </div>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-center space-x-3 mb-3">
                <div className="bg-purple-100 rounded-lg p-2">
                  <Eye className="text-purple-600" size={20} />
                </div>
                <h3 className="font-semibold text-gray-900">Request Monitoring</h3>
              </div>
              <p className="text-gray-600 text-sm mb-3">
                Built-in request logging, performance monitoring, and error tracking.
              </p>
              <div className="bg-gray-50 rounded p-3">
                <div className="text-xs font-mono text-gray-700">
                  Request logs, performance metrics, error tracking
                </div>
              </div>
            </div>
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
                <td className="border border-gray-200 px-4 py-3 font-medium text-gray-900">Request Latency</td>
                <td className="border border-gray-200 px-4 py-3 text-green-600 font-semibold">&lt;100ms</td>
                <td className="border border-gray-200 px-4 py-3 text-gray-600">Average API request response time</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-3 font-medium text-gray-900">WebSocket Latency</td>
                <td className="border border-gray-200 px-4 py-3 text-blue-600 font-semibold">&lt;50ms</td>
                <td className="border border-gray-200 px-4 py-3 text-gray-600">Real-time message delivery time</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-3 font-medium text-gray-900">Success Rate</td>
                <td className="border border-gray-200 px-4 py-3 text-green-600 font-semibold">99.9%</td>
                <td className="border border-gray-200 px-4 py-3 text-gray-600">Successful request completion rate</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-3 font-medium text-gray-900">Retry Success</td>
                <td className="border border-gray-200 px-4 py-3 text-purple-600 font-semibold">95%</td>
                <td className="border border-gray-200 px-4 py-3 text-gray-600">Success rate after retry attempts</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-3 font-medium text-gray-900">Concurrent Connections</td>
                <td className="border border-gray-200 px-4 py-3 text-orange-600 font-semibold">1,000+</td>
                <td className="border border-gray-200 px-4 py-3 text-gray-600">Supported concurrent WebSocket connections</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Use Cases */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">🎯 Use Cases</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">E-commerce Applications</h3>
              <p className="text-gray-600 text-sm mb-3">
                Real-time inventory updates, order processing, and customer notifications.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Real-time inventory sync</li>
                <li>• Order status updates</li>
                <li>• Payment processing</li>
                <li>• Customer notifications</li>
              </ul>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Collaborative Tools</h3>
              <p className="text-gray-600 text-sm mb-3">
                Real-time document editing, team collaboration, and shared workspaces.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Real-time document sync</li>
                <li>• Team collaboration</li>
                <li>• Shared workspaces</li>
                <li>• Version control</li>
              </ul>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">IoT Applications</h3>
              <p className="text-gray-600 text-sm mb-3">
                Device management, real-time monitoring, and data collection.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Device management</li>
                <li>• Real-time monitoring</li>
                <li>• Data collection</li>
                <li>• Alert systems</li>
              </ul>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Analytics Dashboards</h3>
              <p className="text-gray-600 text-sm mb-3">
                Real-time data visualization, reporting, and business intelligence.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Real-time dashboards</li>
                <li>• Data visualization</li>
                <li>• Business intelligence</li>
                <li>• Automated reporting</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Next Steps */}
      <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-xl p-8 text-white">
        <h2 className="text-2xl font-bold mb-4">🔧 Ready to Integrate with Your Backend?</h2>
        <p className="text-orange-100 mb-6">
          Explore advanced backend integration features, real-world examples, and implementation guides 
          to build robust applications with Brolostack Backend Integration.
        </p>
        <div className="flex flex-wrap gap-4">
          <a 
            href="/docs/backend-integration-guide" 
            className="inline-flex items-center px-6 py-3 bg-white/20 hover:bg-white/30 rounded-lg transition-colors"
          >
            <Code className="mr-2" size={20} />
            Implementation Guide
            <ArrowRight className="ml-2" size={16} />
          </a>
          <a 
            href="/docs/websocket-framework" 
            className="inline-flex items-center px-6 py-3 bg-white/20 hover:bg-white/30 rounded-lg transition-colors"
          >
            <Zap className="mr-2" size={20} />
            WebSocket Framework
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
        </div>
      </div>
    </motion.div>
  );
};

export default BackendIntegrationPage;

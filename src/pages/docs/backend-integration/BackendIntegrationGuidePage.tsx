import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Server, 
  Database, 
  Code, 
  Zap, 
  CheckCircle, 
  AlertCircle,
  Copy,
  ExternalLink,
  Terminal,
  Cpu,
  Network,
  FileText,
  GitBranch,
  Package
} from 'lucide-react';

const BackendIntegrationGuidePage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('nodejs');
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const copyToClipboard = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const nodejsExample = `import { Brolostack } from 'brolostack';
import express from 'express';
import cors from 'cors';

// Initialize Brolostack with Node.js backend
const brolostack = new Brolostack({
  backend: {
    type: 'nodejs',
    framework: 'express',
    port: 3000,
    cors: true
  }
});

const app = express();
app.use(cors());
app.use(express.json());

// API Routes with Brolostack integration
app.get('/api/users', async (req, res) => {
  try {
    const users = await brolostack.database.query('users', {
      select: ['id', 'name', 'email'],
      where: { active: true }
    });
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/api/users', async (req, res) => {
  try {
    const user = await brolostack.database.create('users', req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// WebSocket integration
app.get('/api/ws', (req, res) => {
  res.json({ wsUrl: 'ws://localhost:3000/ws' });
});

// Start server
app.listen(3000, () => {
  console.log('Server running on port 3000');
  brolostack.backend.start();
});`;

  const pythonExample = `from brolostack import Brolostack
from flask import Flask, request, jsonify
from flask_cors import CORS

# Initialize Brolostack with Python backend
brolostack = Brolostack({
    'backend': {
        'type': 'python',
        'framework': 'flask',
        'port': 5000,
        'cors': True
    }
})

app = Flask(__name__)
CORS(app)

# API Routes with Brolostack integration
@app.route('/api/users', methods=['GET'])
def get_users():
    try:
        users = brolostack.database.query('users', {
            'select': ['id', 'name', 'email'],
            'where': {'active': True}
        })
        return jsonify(users)
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/api/users', methods=['POST'])
def create_user():
    try:
        user_data = request.get_json()
        user = brolostack.database.create('users', user_data)
        return jsonify(user), 201
    except Exception as e:
        return jsonify({'error': str(e)}), 400

# WebSocket integration
@app.route('/api/ws')
def websocket_info():
    return jsonify({'wsUrl': 'ws://localhost:5000/ws'})

# Start server
if __name__ == '__main__':
    app.run(debug=True, port=5000)
    brolostack.backend.start()`;

  const databaseExample = `import { Brolostack } from 'brolostack';

// Database integration with multiple providers
const brolostack = new Brolostack({
  database: {
    providers: {
      postgresql: {
        host: 'localhost',
        port: 5432,
        database: 'myapp',
        username: 'user',
        password: 'password'
      },
      mongodb: {
        uri: 'mongodb://localhost:27017/myapp'
      },
      redis: {
        host: 'localhost',
        port: 6379
      }
    },
    default: 'postgresql'
  }
});

// Database operations
class DatabaseService {
  constructor(brolostack) {
    this.db = brolostack.database;
  }

  // User management
  async createUser(userData) {
    try {
      const user = await this.db.create('users', {
        ...userData,
        createdAt: new Date(),
        updatedAt: new Date()
      });
      return user;
    } catch (error) {
      throw new Error(\`Failed to create user: \${error.message}\`);
    }
  }

  // Complex queries
  async getUsersWithPosts() {
    try {
      const users = await this.db.query('users', {
        select: ['id', 'name', 'email'],
        include: {
          posts: {
            select: ['id', 'title', 'createdAt'],
            where: { published: true }
          }
        },
        orderBy: { createdAt: 'desc' },
        limit: 10
      });
      return users;
    } catch (error) {
      throw new Error(\`Failed to fetch users: \${error.message}\`);
    }
  }

  // Transactions
  async transferFunds(fromUserId, toUserId, amount) {
    try {
      return await this.db.transaction(async (tx) => {
        // Debit from sender
        await tx.update('accounts', 
          { userId: fromUserId }, 
          { balance: { decrement: amount } }
        );
        
        // Credit to receiver
        await tx.update('accounts', 
          { userId: toUserId }, 
          { balance: { increment: amount } }
        );
        
        // Log transaction
        await tx.create('transactions', {
          fromUserId,
          toUserId,
          amount,
          timestamp: new Date()
        });
      });
    } catch (error) {
      throw new Error(\`Transfer failed: \${error.message}\`);
    }
  }
}

const dbService = new DatabaseService(brolostack);`;

  const apiExample = `import { Brolostack } from 'brolostack';

// RESTful API with Brolostack
const brolostack = new Brolostack({
  api: {
    version: 'v1',
    baseUrl: '/api/v1',
    middleware: ['cors', 'auth', 'rateLimit'],
    documentation: true
  }
});

// API Controller
class UserController {
  constructor(brolostack) {
    this.brolostack = brolostack;
    this.setupRoutes();
  }

  setupRoutes() {
    // GET /api/v1/users
    this.brolostack.api.get('/users', this.getUsers.bind(this));
    
    // GET /api/v1/users/:id
    this.brolostack.api.get('/users/:id', this.getUser.bind(this));
    
    // POST /api/v1/users
    this.brolostack.api.post('/users', this.createUser.bind(this));
    
    // PUT /api/v1/users/:id
    this.brolostack.api.put('/users/:id', this.updateUser.bind(this));
    
    // DELETE /api/v1/users/:id
    this.brolostack.api.delete('/users/:id', this.deleteUser.bind(this));
  }

  async getUsers(req, res) {
    try {
      const { page = 1, limit = 10, search } = req.query;
      
      const users = await this.brolostack.database.query('users', {
        where: search ? { name: { contains: search } } : {},
        pagination: { page: parseInt(page), limit: parseInt(limit) },
        orderBy: { createdAt: 'desc' }
      });
      
      res.json({
        data: users,
        pagination: {
          page: parseInt(page),
          limit: parseInt(limit),
          total: users.length
        }
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getUser(req, res) {
    try {
      const { id } = req.params;
      const user = await this.brolostack.database.find('users', id);
      
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
      
      res.json(user);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async createUser(req, res) {
    try {
      const userData = req.body;
      
      // Validate required fields
      if (!userData.email || !userData.name) {
        return res.status(400).json({ 
          error: 'Email and name are required' 
        });
      }
      
      const user = await this.brolostack.database.create('users', userData);
      res.status(201).json(user);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async updateUser(req, res) {
    try {
      const { id } = req.params;
      const updateData = req.body;
      
      const user = await this.brolostack.database.update('users', id, {
        ...updateData,
        updatedAt: new Date()
      });
      
      res.json(user);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async deleteUser(req, res) {
    try {
      const { id } = req.params;
      await this.brolostack.database.delete('users', id);
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

// Initialize controller
const userController = new UserController(brolostack);`;

  const websocketExample = `import { Brolostack } from 'brolostack';
import { WebSocketServer } from 'ws';

// WebSocket integration with Brolostack
const brolostack = new Brolostack({
  websocket: {
    port: 8080,
    path: '/ws',
    heartbeat: 30000,
    compression: true
  }
});

// WebSocket server setup
const wss = new WebSocketServer({ 
  port: 8080,
  path: '/ws'
});

// Connection handling
wss.on('connection', (ws, req) => {
  console.log('New WebSocket connection');
  
  // Join user to room
  ws.on('message', async (data) => {
    try {
      const message = JSON.parse(data.toString());
      
      switch (message.type) {
        case 'join_room':
          await brolostack.websocket.joinRoom(ws, message.roomId);
          break;
          
        case 'leave_room':
          await brolostack.websocket.leaveRoom(ws, message.roomId);
          break;
          
        case 'send_message':
          await brolostack.websocket.broadcastToRoom(
            message.roomId, 
            {
              type: 'message',
              data: message.data,
              timestamp: new Date()
            }
          );
          break;
          
        case 'typing':
          await brolostack.websocket.broadcastToRoom(
            message.roomId,
            {
              type: 'typing',
              userId: message.userId,
              isTyping: message.isTyping
            }
          );
          break;
      }
    } catch (error) {
      ws.send(JSON.stringify({
        type: 'error',
        message: error.message
      }));
    }
  });
  
  // Handle disconnection
  ws.on('close', () => {
    console.log('WebSocket connection closed');
    brolostack.websocket.handleDisconnection(ws);
  });
});

// Real-time features
class RealtimeService {
  constructor(brolostack) {
    this.brolostack = brolostack;
  }

  // Live notifications
  async sendNotification(userId, notification) {
    await this.brolostack.websocket.sendToUser(userId, {
      type: 'notification',
      data: notification
    });
  }

  // Live updates
  async broadcastUpdate(type, data) {
    await this.brolostack.websocket.broadcast({
      type: 'update',
      entity: type,
      data: data
    });
  }

  // Live collaboration
  async handleCollaboration(userId, documentId, changes) {
    await this.brolostack.websocket.broadcastToRoom(\`doc_\${documentId}\`, {
      type: 'collaboration',
      userId: userId,
      changes: changes,
      timestamp: new Date()
    });
  }
}

const realtimeService = new RealtimeService(brolostack);`;

  const deploymentExample = `import { Brolostack } from 'brolostack';

// Production deployment configuration
const brolostack = new Brolostack({
  deployment: {
    environment: 'production',
    providers: {
      docker: {
        enabled: true,
        image: 'brolostack/app',
        port: 3000
      },
      kubernetes: {
        enabled: true,
        namespace: 'brolostack',
        replicas: 3
      },
      aws: {
        region: 'us-east-1',
        ecs: {
          cluster: 'brolostack-cluster',
          service: 'brolostack-service'
        }
      }
    }
  }
});

// Docker configuration
const dockerConfig = {
  version: '3.8',
  services: {
    app: {
      build: '.',
      ports: ['3000:3000'],
      environment: {
        NODE_ENV: 'production',
        DATABASE_URL: process.env.DATABASE_URL
      },
      depends_on: ['postgres', 'redis']
    },
    postgres: {
      image: 'postgres:14',
      environment: {
        POSTGRES_DB: 'brolostack',
        POSTGRES_USER: 'user',
        POSTGRES_PASSWORD: 'password'
      },
      volumes: ['postgres_data:/var/lib/postgresql/data']
    },
    redis: {
      image: 'redis:7-alpine',
      ports: ['6379:6379']
    }
  },
  volumes: {
    postgres_data: {}
  }
};

// Kubernetes deployment
const k8sDeployment = {
  apiVersion: 'apps/v1',
  kind: 'Deployment',
  metadata: {
    name: 'brolostack-app',
    namespace: 'brolostack'
  },
  spec: {
    replicas: 3,
    selector: {
      matchLabels: {
        app: 'brolostack-app'
      }
    },
    template: {
      metadata: {
        labels: {
          app: 'brolostack-app'
        }
      },
      spec: {
        containers: [{
          name: 'brolostack-app',
          image: 'brolostack/app:latest',
          ports: [{
            containerPort: 3000
          }],
          env: [{
            name: 'NODE_ENV',
            value: 'production'
          }],
          resources: {
            requests: {
              memory: '256Mi',
              cpu: '250m'
            },
            limits: {
              memory: '512Mi',
              cpu: '500m'
            }
          }
        }]
      }
    }
  }
};

// Health checks
app.get('/health', (req, res) => {
  res.json({
    status: 'healthy',
    timestamp: new Date(),
    version: process.env.npm_package_version
  });
});

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('SIGTERM received, shutting down gracefully');
  brolostack.backend.shutdown();
  process.exit(0);
});`;

  const tabs = [
    { id: 'nodejs', label: 'Node.js', icon: Terminal },
    { id: 'python', label: 'Python', icon: Cpu },
    { id: 'database', label: 'Database', icon: Database },
    { id: 'api', label: 'REST API', icon: Network },
    { id: 'websocket', label: 'WebSocket', icon: Zap },
    { id: 'deployment', label: 'Deployment', icon: Server }
  ];

  const getCodeExample = (tabId: string) => {
    switch (tabId) {
      case 'nodejs': return nodejsExample;
      case 'python': return pythonExample;
      case 'database': return databaseExample;
      case 'api': return apiExample;
      case 'websocket': return websocketExample;
      case 'deployment': return deploymentExample;
      default: return nodejsExample;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-green-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6">
            <Server className="w-8 h-8 text-green-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Backend Integration Guide
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Seamless backend integration with Node.js, Python, databases, 
            and deployment solutions for production-ready applications
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
            <h3 className="font-semibold text-gray-900 mb-2">Node.js</h3>
            <p className="text-gray-600 text-sm">Express.js integration with middleware support</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <Cpu className="w-8 h-8 text-green-600 mb-4" />
            <h3 className="font-semibold text-gray-900 mb-2">Python</h3>
            <p className="text-gray-600 text-sm">Flask/Django integration with async support</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <Database className="w-8 h-8 text-purple-600 mb-4" />
            <h3 className="font-semibold text-gray-900 mb-2">Database</h3>
            <p className="text-gray-600 text-sm">PostgreSQL, MongoDB, Redis support</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <Zap className="w-8 h-8 text-orange-600 mb-4" />
            <h3 className="font-semibold text-gray-900 mb-2">Real-time</h3>
            <p className="text-gray-600 text-sm">WebSocket integration for live features</p>
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
                      ? 'text-green-600 border-b-2 border-green-600 bg-green-50'
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
                <FileText className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-3">Content Management</h3>
              <p className="text-gray-600 text-sm mb-4">
                Build content management systems with real-time editing and collaboration features.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Real-time collaboration</li>
                <li>• Version control</li>
                <li>• Media management</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Network className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-3">E-commerce Platform</h3>
              <p className="text-gray-600 text-sm mb-4">
                Create scalable e-commerce platforms with payment processing and inventory management.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Payment integration</li>
                <li>• Inventory tracking</li>
                <li>• Order management</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <GitBranch className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-3">Microservices</h3>
              <p className="text-gray-600 text-sm mb-4">
                Build microservices architecture with service discovery and load balancing.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Service discovery</li>
                <li>• Load balancing</li>
                <li>• Circuit breakers</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Best Practices */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-12 bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-8 border border-blue-200"
        >
          <div className="flex items-center mb-6">
            <CheckCircle className="w-8 h-8 text-blue-600 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900">Best Practices</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Development</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Use environment variables for configuration</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Implement proper error handling and logging</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Use database migrations for schema changes</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Implement health checks and monitoring</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Production</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Use containerization with Docker</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Implement proper security headers</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Use reverse proxy for load balancing</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Monitor performance and set up alerts</span>
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
              Ready to Build Your Backend?
            </h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Choose your preferred backend technology and start building scalable, 
              production-ready applications with Brolostack integration.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium">
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

export default BackendIntegrationGuidePage;

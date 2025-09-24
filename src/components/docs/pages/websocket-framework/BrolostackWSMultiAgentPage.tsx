import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  ArrowRight, 
  Settings,
  Activity,
  MessageCircle,
  Brain,
  Network,
  Target,
  Wifi
} from 'lucide-react';

const BrolostackWSMultiAgentPage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="space-y-6 sm:space-y-8"
    >
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 text-white">
        <div className="max-w-4xl">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">
            Brolostack WS Multi-Agent
          </h1>
          <p className="text-sm sm:text-base lg:text-xl text-purple-100 mb-4 sm:mb-6">
            Revolutionary multi-agent coordination system with ARGS Protocol integration. 
            Enable seamless AI agent collaboration, task distribution, and real-time progress streaming.
          </p>
          <div className="flex flex-wrap gap-2 sm:gap-4">
            <div className="flex items-center space-x-1 sm:space-x-2 bg-white/20 rounded-lg px-2 sm:px-4 py-1 sm:py-2">
              <Brain size={16} className="sm:w-5 sm:h-5" />
              <span className="font-medium text-xs sm:text-sm">ARGS Protocol</span>
            </div>
            <div className="flex items-center space-x-1 sm:space-x-2 bg-white/20 rounded-lg px-2 sm:px-4 py-1 sm:py-2">
              <Network size={16} className="sm:w-5 sm:h-5" />
              <span className="font-medium text-xs sm:text-sm">Multi-Agent Sessions</span>
            </div>
            <div className="flex items-center space-x-1 sm:space-x-2 bg-white/20 rounded-lg px-2 sm:px-4 py-1 sm:py-2">
              <Target size={16} className="sm:w-5 sm:h-5" />
              <span className="font-medium text-xs sm:text-sm">Task Coordination</span>
            </div>
          </div>
        </div>
      </div>

      {/* ARGS Protocol Overview */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">🧠 ARGS Protocol Integration</h2>
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 mb-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Agent Real-time Governance & Streaming Protocol</h3>
          <p className="text-gray-600 mb-4">
            The ARGS Protocol is a standardized communication framework designed specifically for multi-agent AI systems. 
            It provides structured messaging, task coordination, and real-time collaboration capabilities.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <h4 className="font-semibold text-gray-900">Core Message Types:</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• <code className="bg-gray-200 px-2 py-1 rounded">AGENT_REGISTER</code> - Agent lifecycle management</li>
                <li>• <code className="bg-gray-200 px-2 py-1 rounded">TASK_START</code> - Task initiation and assignment</li>
                <li>• <code className="bg-gray-200 px-2 py-1 rounded">TASK_PROGRESS</code> - Real-time progress updates</li>
                <li>• <code className="bg-gray-200 px-2 py-1 rounded">COLLABORATION_REQUEST</code> - Agent-to-agent communication</li>
                <li>• <code className="bg-gray-200 px-2 py-1 rounded">STREAM_DATA</code> - Real-time data streaming</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold text-gray-900">Key Features:</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Standardized multi-agent communication</li>
                <li>• Intelligent task coordination</li>
                <li>• Real-time collaboration management</li>
                <li>• Industry-first protocol for AI agents</li>
                <li>• Environment-aware optimizations</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Core Features */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">🚀 Core Features</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-6 bg-blue-50 rounded-xl">
            <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <Users className="text-blue-600" size={24} />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Multi-Agent Sessions</h3>
            <p className="text-gray-600 text-sm">Coordinate multiple AI agents with intelligent session management and resource allocation.</p>
          </div>
          <div className="p-6 bg-green-50 rounded-xl">
            <div className="bg-green-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <Target className="text-green-600" size={24} />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Task Distribution</h3>
            <p className="text-gray-600 text-sm">Intelligent task assignment based on agent capabilities, workload, and availability.</p>
          </div>
          <div className="p-6 bg-purple-50 rounded-xl">
            <div className="bg-purple-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <Activity className="text-purple-600" size={24} />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Real-time Progress</h3>
            <p className="text-gray-600 text-sm">Stream progress updates and monitor task execution in real-time across all agents.</p>
          </div>
          <div className="p-6 bg-orange-50 rounded-xl">
            <div className="bg-orange-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <Network className="text-orange-600" size={24} />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Agent Collaboration</h3>
            <p className="text-gray-600 text-sm">Enable agent-to-agent communication and collaborative problem-solving.</p>
          </div>
          <div className="p-6 bg-red-50 rounded-xl">
            <div className="bg-red-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <Brain className="text-red-600" size={24} />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">ARGS Protocol</h3>
            <p className="text-gray-600 text-sm">Structured messaging protocol for standardized multi-agent communication.</p>
          </div>
          <div className="p-6 bg-teal-50 rounded-xl">
            <div className="bg-teal-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <Settings className="text-teal-600" size={24} />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Environment Configuration</h3>
            <p className="text-gray-600 text-sm">Automatic optimization per environment with intelligent resource management.</p>
          </div>
        </div>
      </div>

      {/* Quick Start */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">🚀 Quick Start</h2>
        
        <div className="space-y-6">
          {/* Step 1 */}
          <div className="border-l-4 border-blue-500 pl-6">
            <div className="flex items-center mb-3">
              <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Setup Multi-Agent Server</h3>
            </div>
            <div className="bg-gray-900 rounded-lg p-4 text-green-400 font-mono text-sm overflow-x-auto">
              <pre>{`import { BrolostackWSMultiagent } from 'brolostack';
import { createServer } from 'http';

const server = createServer();
const wsMultiAgent = new BrolostackWSMultiagent(server, {
  agents: {
    maxAgentsPerSession: 50,
    taskTimeout: 300000,
    collaborationTimeout: 60000,
    loadBalancing: true,
    autoScaling: true
  },
  args: {
    protocol: 'v1.0',
    messageValidation: true,
    compression: true,
    encryption: true
  },
  environment: process.env.NODE_ENV || 'development',
  cors: {
    origin: process.env.NODE_ENV === 'development' ? true : process.env.ALLOWED_ORIGINS?.split(','),
    methods: ['GET', 'POST']
  }
});

await wsMultiAgent.initialize();
server.listen(3001, () => {
  console.log('🤖 Multi-agent WebSocket server running on port 3001');
});`}</pre>
            </div>
          </div>

          {/* Step 2 */}
          <div className="border-l-4 border-green-500 pl-6">
            <div className="flex items-center mb-3">
              <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Register Agents & Create Sessions</h3>
            </div>
            <div className="bg-gray-900 rounded-lg p-4 text-green-400 font-mono text-sm overflow-x-auto">
              <pre>{`// Create a multi-agent session
const session = wsMultiAgent.createSession('ai-collaboration', {
  maxAgents: 10,
  taskTypes: ['data-analysis', 'ml-inference', 'nlp-processing'],
  collaborationMode: 'hybrid' // 'sequential', 'parallel', or 'hybrid'
});

// Register specialized agents
session.registerAgent({
  id: 'data-processor-1',
  type: 'data-processor',
  capabilities: ['data-cleaning', 'feature-extraction', 'data-validation'],
  metadata: {
    name: 'Data Processing Agent',
    version: '1.0.0',
    maxConcurrentTasks: 3,
    currentLoad: 0,
    performance: { accuracy: 0.95, speed: 'fast' }
  }
});

session.registerAgent({
  id: 'ml-analyzer-1', 
  type: 'ml-analyzer',
  capabilities: ['model-training', 'prediction', 'model-evaluation'],
  metadata: {
    name: 'ML Analysis Agent',
    version: '1.0.0',
    maxConcurrentTasks: 2,
    currentLoad: 0,
    performance: { accuracy: 0.92, speed: 'medium' }
  }
});

session.registerAgent({
  id: 'nlp-processor-1',
  type: 'nlp-processor', 
  capabilities: ['text-analysis', 'sentiment-analysis', 'language-detection'],
  metadata: {
    name: 'NLP Processing Agent',
    version: '1.0.0',
    maxConcurrentTasks: 4,
    currentLoad: 0,
    performance: { accuracy: 0.88, speed: 'fast' }
  }
});`}</pre>
            </div>
          </div>

          {/* Step 3 */}
          <div className="border-l-4 border-purple-500 pl-6">
            <div className="flex items-center mb-3">
              <div className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Task Coordination & Collaboration</h3>
            </div>
            <div className="bg-gray-900 rounded-lg p-4 text-green-400 font-mono text-sm overflow-x-auto">
              <pre>{`// Start collaborative task
const task = session.startTask({
  id: 'customer-insights-analysis',
  type: 'data-pipeline',
  priority: 'high',
  collaborationMode: 'sequential',
  requirements: {
    agentTypes: ['data-processor', 'ml-analyzer', 'nlp-processor'],
    capabilities: ['data-cleaning', 'model-training', 'sentiment-analysis'],
    maxExecutionTime: 300000,
    qualityThreshold: 0.9
  },
  payload: {
    dataSource: 'customer-feedback-api',
    analysisType: 'sentiment-clustering',
    outputFormat: 'dashboard-ready',
    parameters: {
      algorithm: 'k-means',
      clusters: 5,
      language: 'en'
    }
  }
});

// Monitor task progress
session.on('task-progress', (progress) => {
  console.log(\`Task \${progress.taskId} progress: \${progress.progress}%\`);
  console.log(\`Current step: \${progress.step}\`);
  console.log(\`Active agents: \${progress.activeAgents.join(', ')}\`);
  
  if (progress.status === 'completed') {
    console.log('Task completed successfully!');
    console.log('Results:', progress.result);
  }
});

// Handle agent collaboration requests
session.on('collaboration-request', (request) => {
  console.log(\`Agent \${request.requestingAgent} needs help from \${request.targetAgent}\`);
  console.log(\`Request type: \${request.collaborationType}\`);
  console.log(\`Context: \${request.context.message}\`);
  
  // Auto-approve collaboration if agent is available
  if (isAgentAvailable(request.targetAgent)) {
    session.approveCollaboration(request.requestId);
  }
});`}</pre>
            </div>
          </div>
        </div>
      </div>

      {/* Advanced Features */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">⚡ Advanced Features</h2>
        
        <div className="space-y-6">
          {/* ARGS Protocol Handler */}
          <div className="border-l-4 border-blue-500 pl-6">
            <div className="flex items-center mb-3">
              <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                🧠
              </div>
              <h3 className="text-xl font-semibold text-gray-900">ARGS Protocol Handler</h3>
            </div>
            <div className="bg-gray-900 rounded-lg p-4 text-green-400 font-mono text-sm overflow-x-auto">
              <pre>{`import { ARGSProtocolHandler } from 'brolostack';

const argsHandler = new ARGSProtocolHandler({
  version: 'v1.0',
  validation: true,
  compression: true,
  encryption: true
});

// Register agents with ARGS protocol
const agentMessage = argsHandler.createMessage('AGENT_REGISTER', 'session-1', {
  id: 'agent-1',
  type: 'data-processor',
  capabilities: ['data-analysis', 'ml-inference'],
  metadata: {
    version: '1.0.0',
    performance: { accuracy: 0.95, speed: 'fast' },
    resources: { cpu: 'high', memory: 'medium' }
  }
});

// Handle task coordination
argsHandler.onMessage('TASK_START', async (message) => {
  const { taskId, requirements, payload } = message.data;
  
  // Intelligent task assignment logic
  const availableAgents = await findAvailableAgents(requirements);
  const assignedAgent = selectBestAgent(availableAgents, requirements);
  
  // Send task assignment
  argsHandler.sendMessage('TASK_ASSIGN', assignedAgent.id, {
    taskId,
    payload,
    deadline: calculateDeadline(requirements),
    collaborationMode: requirements.collaborationMode
  });
});

// Handle collaboration requests
argsHandler.onMessage('COLLABORATION_REQUEST', async (message) => {
  const { requestId, requestingAgent, targetAgent, context } = message.data;
  
  // Evaluate collaboration request
  const canCollaborate = await evaluateCollaborationRequest(requestingAgent, targetAgent, context);
  
  if (canCollaborate) {
    argsHandler.sendMessage('COLLABORATION_APPROVED', requestingAgent, {
      requestId,
      targetAgent,
      collaborationDetails: context
    });
  } else {
    argsHandler.sendMessage('COLLABORATION_DENIED', requestingAgent, {
      requestId,
      reason: 'Agent unavailable or incompatible capabilities'
    });
  }
});`}</pre>
            </div>
          </div>

          {/* Performance Monitoring */}
          <div className="border-l-4 border-green-500 pl-6">
            <div className="flex items-center mb-3">
              <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                📊
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Performance Monitoring & Analytics</h3>
            </div>
            <div className="bg-gray-900 rounded-lg p-4 text-green-400 font-mono text-sm overflow-x-auto">
              <pre>{`// Get comprehensive multi-agent statistics
const multiAgentStats = wsMultiAgent.getStats();
console.log({
  environment: multiAgentStats.environment,
  activeSessions: multiAgentStats.activeSessions,
  connectedClients: multiAgentStats.connectedClients,
  totalAgents: multiAgentStats.totalAgents,
  activeStreams: multiAgentStats.activeStreams,
  totalTasks: multiAgentStats.totalTasks,
  completedTasks: multiAgentStats.completedTasks,
  errorRate: multiAgentStats.errorRate,
  avgExecutionTime: multiAgentStats.avgExecutionTime,
  uptime: multiAgentStats.uptime,
  performance: {
    throughput: multiAgentStats.throughput,
    latency: multiAgentStats.latency,
    resourceUtilization: multiAgentStats.resourceUtilization
  }
});

// Session-specific analytics
const sessionStats = session.getStats();
console.log({
  sessionId: sessionStats.sessionId,
  activeAgents: sessionStats.activeAgents,
  completedTasks: sessionStats.completedTasks,
  averageTaskTime: sessionStats.averageTaskTime,
  collaborationRequests: sessionStats.collaborationRequests,
  successRate: sessionStats.successRate
});

// Agent performance monitoring
session.on('agent-performance-update', (performance) => {
  console.log(\`Agent \${performance.agentId} performance update:\`);
  console.log(\`- CPU Usage: \${performance.cpuUsage}%\`);
  console.log(\`- Memory Usage: \${performance.memoryUsage}%\`);
  console.log(\`- Task Completion Rate: \${performance.taskCompletionRate}%\`);
  console.log(\`- Average Response Time: \${performance.avgResponseTime}ms\`);
  
  // Auto-scale if needed
  if (performance.cpuUsage > 80) {
    session.requestAgentScaling(performance.agentId, 'scale-up');
  }
});`}</pre>
            </div>
          </div>

          {/* Environment-Aware Configuration */}
          <div className="border-l-4 border-purple-500 pl-6">
            <div className="flex items-center mb-3">
              <div className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                🌍
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Environment-Aware Configuration</h3>
            </div>
            <div className="bg-gray-900 rounded-lg p-4 text-green-400 font-mono text-sm overflow-x-auto">
              <pre>{`// Environment-specific configurations
const environmentConfig = {
  development: {
    maxAgentsPerSession: 5,
    taskTimeout: 60000,
    collaborationTimeout: 30000,
    logging: { verbose: true, debug: true },
    performance: { monitoring: true, detailed: true },
    security: { encryption: false, auth: false }
  },
  staging: {
    maxAgentsPerSession: 20,
    taskTimeout: 180000,
    collaborationTimeout: 60000,
    logging: { verbose: false, debug: true },
    performance: { monitoring: true, detailed: false },
    security: { encryption: true, auth: true }
  },
  production: {
    maxAgentsPerSession: 100,
    taskTimeout: 300000,
    collaborationTimeout: 120000,
    logging: { verbose: false, debug: false },
    performance: { monitoring: true, detailed: false },
    security: { encryption: true, auth: true, rateLimit: true }
  }
};

// Automatic environment detection and configuration
const wsMultiAgent = new BrolostackWSMultiagent(server, {
  environment: process.env.NODE_ENV || 'development',
  ...environmentConfig[process.env.NODE_ENV || 'development'],
  
  // Environment-specific optimizations
  optimization: {
    compression: process.env.NODE_ENV === 'production',
    caching: process.env.NODE_ENV === 'production',
    loadBalancing: process.env.NODE_ENV !== 'development',
    autoScaling: process.env.NODE_ENV === 'production'
  }
});

// Environment-aware agent registration
session.registerAgent({
  id: 'adaptive-agent-1',
  type: 'adaptive-processor',
  capabilities: ['data-analysis', 'ml-inference'],
  environment: process.env.NODE_ENV,
  config: {
    maxConcurrentTasks: process.env.NODE_ENV === 'production' ? 10 : 3,
    timeout: process.env.NODE_ENV === 'production' ? 300000 : 60000,
    retryAttempts: process.env.NODE_ENV === 'production' ? 5 : 2
  }
});`}</pre>
            </div>
          </div>
        </div>
      </div>

      {/* Use Cases */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">🎯 Real-World Use Cases</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 bg-blue-50 rounded-xl">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">🤖 Multi-Agent AI Collaboration</h3>
            <p className="text-gray-600 text-sm mb-4">Coordinate multiple AI agents for complex tasks like data analysis, ML model training, and natural language processing.</p>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Sequential data processing pipelines</li>
              <li>• Parallel ML model training</li>
              <li>• Hybrid collaboration workflows</li>
              <li>• Real-time task coordination</li>
            </ul>
          </div>
          
          <div className="p-6 bg-green-50 rounded-xl">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">📊 Enterprise Data Processing</h3>
            <p className="text-gray-600 text-sm mb-4">Large-scale data processing with multiple specialized agents working together on complex analytics tasks.</p>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• ETL pipeline automation</li>
              <li>• Real-time data streaming</li>
              <li>• Distributed computing tasks</li>
              <li>• Quality assurance workflows</li>
            </ul>
          </div>
          
          <div className="p-6 bg-purple-50 rounded-xl">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">🔬 Research & Development</h3>
            <p className="text-gray-600 text-sm mb-4">Scientific research workflows with multiple AI agents collaborating on hypothesis testing and data analysis.</p>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Hypothesis generation and testing</li>
              <li>• Literature review automation</li>
              <li>• Experimental design optimization</li>
              <li>• Results interpretation and reporting</li>
            </ul>
          </div>
          
          <div className="p-6 bg-orange-50 rounded-xl">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">🏭 Industrial Automation</h3>
            <p className="text-gray-600 text-sm mb-4">Manufacturing and industrial processes with multiple AI agents monitoring and optimizing production workflows.</p>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Production line monitoring</li>
              <li>• Quality control automation</li>
              <li>• Predictive maintenance</li>
              <li>• Supply chain optimization</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Configuration Options */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">⚙️ Configuration Options</h2>
        
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">Option</th>
                <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">Type</th>
                <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">Default</th>
                <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-200 px-4 py-3 font-medium text-gray-900">agents.maxAgentsPerSession</td>
                <td className="border border-gray-200 px-4 py-3 text-gray-600">number</td>
                <td className="border border-gray-200 px-4 py-3 text-gray-600">50</td>
                <td className="border border-gray-200 px-4 py-3 text-gray-600">Maximum agents per session</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-3 font-medium text-gray-900">agents.taskTimeout</td>
                <td className="border border-gray-200 px-4 py-3 text-gray-600">number</td>
                <td className="border border-gray-200 px-4 py-3 text-gray-600">300000</td>
                <td className="border border-gray-200 px-4 py-3 text-gray-600">Task timeout in milliseconds</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-3 font-medium text-gray-900">agents.collaborationTimeout</td>
                <td className="border border-gray-200 px-4 py-3 text-gray-600">number</td>
                <td className="border border-gray-200 px-4 py-3 text-gray-600">60000</td>
                <td className="border border-gray-200 px-4 py-3 text-gray-600">Collaboration timeout in milliseconds</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-3 font-medium text-gray-900">args.protocol</td>
                <td className="border border-gray-200 px-4 py-3 text-gray-600">string</td>
                <td className="border border-gray-200 px-4 py-3 text-gray-600">v1.0</td>
                <td className="border border-gray-200 px-4 py-3 text-gray-600">ARGS protocol version</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-3 font-medium text-gray-900">args.messageValidation</td>
                <td className="border border-gray-200 px-4 py-3 text-gray-600">boolean</td>
                <td className="border border-gray-200 px-4 py-3 text-gray-600">true</td>
                <td className="border border-gray-200 px-4 py-3 text-gray-600">Enable message validation</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-3 font-medium text-gray-900">environment</td>
                <td className="border border-gray-200 px-4 py-3 text-gray-600">string</td>
                <td className="border border-gray-200 px-4 py-3 text-gray-600">development</td>
                <td className="border border-gray-200 px-4 py-3 text-gray-600">Environment configuration</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Next Steps */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl p-8 text-white">
        <h2 className="text-2xl font-bold mb-4">🚀 Ready to Build Multi-Agent Systems?</h2>
        <p className="text-purple-100 mb-6">
          Explore advanced multi-agent coordination, ARGS protocol implementation, and real-time collaboration 
          to build next-generation AI systems with Brolostack WebSocket Framework.
        </p>
        <div className="flex flex-wrap gap-4">
          <a 
            href="/docs/brolostack-ws-client" 
            className="inline-flex items-center px-6 py-3 bg-white/20 hover:bg-white/30 rounded-lg transition-colors"
          >
            <MessageCircle className="mr-2" size={20} />
            WS Client
            <ArrowRight className="ml-2" size={16} />
          </a>
          <a 
            href="/docs/websocket-framework" 
            className="inline-flex items-center px-6 py-3 bg-white/20 hover:bg-white/30 rounded-lg transition-colors"
          >
            <Wifi className="mr-2" size={20} />
            WebSocket Framework
            <ArrowRight className="ml-2" size={16} />
          </a>
          <a 
            href="/docs/websocket-framework-guide" 
            className="inline-flex items-center px-6 py-3 bg-white/20 hover:bg-white/30 rounded-lg transition-colors"
          >
            <Settings className="mr-2" size={20} />
            Implementation Guide
            <ArrowRight className="ml-2" size={16} />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default BrolostackWSMultiAgentPage;

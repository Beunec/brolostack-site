import React from 'react';
import { motion } from 'framer-motion';
import { 
  Wifi, 
  Users, 
  ArrowRight, 
  Settings,
  Activity,
  Zap,
  Shield,
  Database
} from 'lucide-react';

const BrolostackWSClientPage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="space-y-6 sm:space-y-8"
    >
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 text-white">
        <div className="max-w-4xl">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">
            Brolostack WS Client
          </h1>
          <p className="text-sm sm:text-base lg:text-xl text-blue-100 mb-4 sm:mb-6">
            Advanced client-side WebSocket communication with automatic reconnection, 
            message queuing, and offline support. Built for enterprise-grade real-time applications.
          </p>
          <div className="flex flex-wrap gap-2 sm:gap-4">
            <div className="flex items-center space-x-1 sm:space-x-2 bg-white/20 rounded-lg px-2 sm:px-4 py-1 sm:py-2">
              <Wifi size={16} className="sm:w-5 sm:h-5" />
              <span className="font-medium text-xs sm:text-sm">Auto Reconnection</span>
            </div>
            <div className="flex items-center space-x-1 sm:space-x-2 bg-white/20 rounded-lg px-2 sm:px-4 py-1 sm:py-2">
              <Database size={16} className="sm:w-5 sm:h-5" />
              <span className="font-medium text-xs sm:text-sm">Message Queuing</span>
            </div>
            <div className="flex items-center space-x-1 sm:space-x-2 bg-white/20 rounded-lg px-2 sm:px-4 py-1 sm:py-2">
              <Shield size={16} className="sm:w-5 sm:h-5" />
              <span className="font-medium text-xs sm:text-sm">Offline Support</span>
            </div>
          </div>
        </div>
      </div>

      {/* Core Features */}
      <div className="bg-white rounded-xl border border-gray-200 p-4 sm:p-6">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">🚀 Core Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          <div className="p-4 sm:p-6 bg-blue-50 rounded-xl">
            <div className="bg-blue-100 rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center mb-3 sm:mb-4">
              <Wifi className="text-blue-600 w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">Automatic Reconnection</h3>
            <p className="text-gray-600 text-xs sm:text-sm">Exponential backoff with smart retry logic and connection health monitoring.</p>
          </div>
          <div className="p-6 bg-green-50 rounded-xl">
            <div className="bg-green-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <Database className="text-green-600" size={24} />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Message Queuing</h3>
            <p className="text-gray-600 text-sm">Offline support with persistent storage and guaranteed message delivery.</p>
          </div>
          <div className="p-6 bg-purple-50 rounded-xl">
            <div className="bg-purple-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <Users className="text-purple-600" size={24} />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Room Management</h3>
            <p className="text-gray-600 text-sm">Multi-room communication with efficient message routing and user management.</p>
          </div>
          <div className="p-6 bg-orange-50 rounded-xl">
            <div className="bg-orange-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <Activity className="text-orange-600" size={24} />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Performance Monitoring</h3>
            <p className="text-gray-600 text-sm">Latency tracking, metrics collection, and real-time performance insights.</p>
          </div>
          <div className="p-6 bg-red-50 rounded-xl">
            <div className="bg-red-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <Shield className="text-red-600" size={24} />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Type Safety</h3>
            <p className="text-gray-600 text-sm">Full TypeScript support with comprehensive type definitions and IntelliSense.</p>
          </div>
          <div className="p-6 bg-teal-50 rounded-xl">
            <div className="bg-teal-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <Zap className="text-teal-600" size={24} />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">React Integration</h3>
            <p className="text-gray-600 text-sm">Built-in React hooks and components for seamless integration.</p>
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
              <h3 className="text-xl font-semibold text-gray-900">Initialize WebSocket Client</h3>
            </div>
            <div className="bg-gray-900 rounded-lg p-4 text-green-400 font-mono text-sm overflow-x-auto">
              <pre>{`import { BrolostackWSClientside } from 'brolostack';

// Initialize WebSocket client
const wsClient = new BrolostackWSClientside({
  url: 'wss://your-server.com',
  autoConnect: true,
  messageQueue: {
    enabled: true,
    maxSize: 1000,
    persistOffline: true
  },
  reconnection: {
    enabled: true,
    maxAttempts: 10,
    backoffMultiplier: 1.5,
    maxDelay: 30000
  },
  performance: {
    monitoring: true,
    latencyTracking: true,
    metricsCollection: true
  }
});

await wsClient.connect();`}</pre>
            </div>
          </div>

          {/* Step 2 */}
          <div className="border-l-4 border-green-500 pl-6">
            <div className="flex items-center mb-3">
              <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Room Management & Messaging</h3>
            </div>
            <div className="bg-gray-900 rounded-lg p-4 text-green-400 font-mono text-sm overflow-x-auto">
              <pre>{`// Join rooms and send messages
wsClient.joinRoom('general', 'General Discussion');
wsClient.joinRoom('development', 'Development Team');

// Send messages to specific rooms
wsClient.sendToRoom('general', 'message', {
  type: 'text',
  content: 'Hello team!',
  sender: { id: 'user-1', name: 'John Doe' },
  timestamp: Date.now()
});

// Broadcast to all rooms
wsClient.broadcast('announcement', {
  type: 'system',
  content: 'System maintenance in 10 minutes',
  priority: 'high'
});

// Send direct messages
wsClient.send('direct-message', {
  recipient: 'user-2',
  content: 'Private message content',
  encrypted: true
});`}</pre>
            </div>
          </div>

          {/* Step 3 */}
          <div className="border-l-4 border-purple-500 pl-6">
            <div className="flex items-center mb-3">
              <div className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Event Handling & React Integration</h3>
            </div>
            <div className="bg-gray-900 rounded-lg p-4 text-green-400 font-mono text-sm overflow-x-auto">
              <pre>{`// Event listeners
wsClient.on('message', (data) => {
  console.log('Received message:', data);
  updateChatUI(data);
});

wsClient.on('user-joined', (data) => {
  console.log('User joined:', data.userId);
  showNotification(data.userId + ' joined the room');
});

wsClient.on('connection-status', (status) => {
  updateConnectionStatus(status.connected);
});

// React hook integration
import { useBrolostackWebSocket } from 'brolostack';

const ChatComponent = () => {
  const { ws, connected, stats, joinRoom, sendToRoom } = useBrolostackWebSocket({
    url: 'wss://your-server.com',
    autoConnect: true
  });

  const handleSendMessage = (message) => {
    sendToRoom('general', 'message', {
      content: message,
      sender: { id: 'current-user', name: 'Current User' }
    });
  };

  return (
    <div>
      <div>Status: {connected ? '🟢 Connected' : '🔴 Disconnected'}</div>
      <div>Latency: {stats?.averageLatency}ms</div>
      <button onClick={() => joinRoom('general', 'General Room')}>
        Join General Room
      </button>
    </div>
  );
};`}</pre>
            </div>
          </div>
        </div>
      </div>

      {/* Advanced Features */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">⚡ Advanced Features</h2>
        
        <div className="space-y-6">
          {/* Message Queuing */}
          <div className="border-l-4 border-blue-500 pl-6">
            <div className="flex items-center mb-3">
              <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                📦
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Message Queuing & Offline Support</h3>
            </div>
            <div className="bg-gray-900 rounded-lg p-4 text-green-400 font-mono text-sm overflow-x-auto">
              <pre>{`// Advanced message queuing configuration
const wsClient = new BrolostackWSClientside({
  messageQueue: {
    enabled: true,
    maxSize: 1000,
    persistOffline: true,
    storage: 'localStorage', // or 'indexeddb'
    compression: true,
    encryption: true
  }
});

// Messages are automatically queued when offline
wsClient.send('important-message', {
  type: 'critical',
  content: 'This will be delivered when online',
  priority: 'high',
  retryCount: 3
});

// Check queue status
const queueStatus = wsClient.getQueueStatus();
console.log('Queued messages:', queueStatus.pending);
console.log('Failed messages:', queueStatus.failed);

// Manual queue processing
await wsClient.processQueue();`}</pre>
            </div>
          </div>

          {/* Performance Monitoring */}
          <div className="border-l-4 border-green-500 pl-6">
            <div className="flex items-center mb-3">
              <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                📊
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Performance Monitoring</h3>
            </div>
            <div className="bg-gray-900 rounded-lg p-4 text-green-400 font-mono text-sm overflow-x-auto">
              <pre>{`// Get comprehensive performance statistics
const stats = wsClient.getStats();
console.log({
  connected: stats.connected,
  messagesSent: stats.messagesSent,
  messagesReceived: stats.messagesReceived,
  averageLatency: stats.averageLatency,
  reconnectCount: stats.reconnectCount,
  rooms: stats.rooms,
  uptime: stats.uptime,
  environment: stats.environment
});

// Performance events
wsClient.on('latency-updated', ({ latency, average }) => {
  updateLatencyDisplay(average);
  if (latency > 1000) {
    showWarning('High latency detected');
  }
});

wsClient.on('reconnection-attempt', ({ attempt, delay }) => {
  console.log(\`Reconnection attempt \${attempt} in \${delay}ms\`);
});

// Custom performance monitoring
wsClient.on('message-sent', (message) => {
  trackMessagePerformance(message);
});

wsClient.on('message-received', (message) => {
  updateMessageMetrics(message);
});`}</pre>
            </div>
          </div>

          {/* Stream Processing */}
          <div className="border-l-4 border-purple-500 pl-6">
            <div className="flex items-center mb-3">
              <div className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                🌊
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Stream Processing</h3>
            </div>
            <div className="bg-gray-900 rounded-lg p-4 text-green-400 font-mono text-sm overflow-x-auto">
              <pre>{`// High-performance data streaming
wsClient.send('start-stream', {
  streamId: 'data-stream-1',
  type: 'binary',
  compression: true,
  qualityOfService: 'real-time',
  bufferSize: 1024
});

// Handle stream data
wsClient.on('stream-data', ({ streamId, chunk, isLast, metadata }) => {
  processStreamChunk(chunk);
  
  if (metadata) {
    updateStreamProgress(metadata.progress);
  }
  
  if (isLast) {
    finalizeStream(streamId);
  }
});

// Stream control
wsClient.send('pause-stream', { streamId: 'data-stream-1' });
wsClient.send('resume-stream', { streamId: 'data-stream-1' });
wsClient.send('stop-stream', { streamId: 'data-stream-1' });

// Binary data streaming
const binaryData = new ArrayBuffer(1024);
wsClient.sendStream('binary-stream', binaryData, {
  chunkSize: 256,
  compression: 'gzip'
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
            <h3 className="text-lg font-semibold text-gray-900 mb-3">💬 Real-Time Chat Applications</h3>
            <p className="text-gray-600 text-sm mb-4">Build Slack/Discord-like applications with multi-room support, message queuing, and offline capabilities.</p>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Multi-room communication</li>
              <li>• Message persistence</li>
              <li>• User presence tracking</li>
              <li>• File sharing support</li>
            </ul>
          </div>
          
          <div className="p-6 bg-green-50 rounded-xl">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">📝 Collaborative Editing</h3>
            <p className="text-gray-600 text-sm mb-4">Create Google Docs-like collaboration with real-time document synchronization and conflict resolution.</p>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Real-time document updates</li>
              <li>• Cursor position tracking</li>
              <li>• Change conflict resolution</li>
              <li>• Version history</li>
            </ul>
          </div>
          
          <div className="p-6 bg-purple-50 rounded-xl">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">🎮 Multiplayer Gaming</h3>
            <p className="text-gray-600 text-sm mb-4">Build real-time multiplayer games with low-latency communication and game state synchronization.</p>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Low-latency communication</li>
              <li>• Game state synchronization</li>
              <li>• Player action broadcasting</li>
              <li>• Room-based matchmaking</li>
            </ul>
          </div>
          
          <div className="p-6 bg-orange-50 rounded-xl">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">📊 Live Data Dashboards</h3>
            <p className="text-gray-600 text-sm mb-4">Create real-time analytics dashboards with live data streaming and performance monitoring.</p>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Real-time data streaming</li>
              <li>• Performance metrics</li>
              <li>• Automatic reconnection</li>
              <li>• Data visualization</li>
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
                <td className="border border-gray-200 px-4 py-3 font-medium text-gray-900">url</td>
                <td className="border border-gray-200 px-4 py-3 text-gray-600">string</td>
                <td className="border border-gray-200 px-4 py-3 text-gray-600">-</td>
                <td className="border border-gray-200 px-4 py-3 text-gray-600">WebSocket server URL</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-3 font-medium text-gray-900">autoConnect</td>
                <td className="border border-gray-200 px-4 py-3 text-gray-600">boolean</td>
                <td className="border border-gray-200 px-4 py-3 text-gray-600">true</td>
                <td className="border border-gray-200 px-4 py-3 text-gray-600">Automatically connect on initialization</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-3 font-medium text-gray-900">messageQueue.enabled</td>
                <td className="border border-gray-200 px-4 py-3 text-gray-600">boolean</td>
                <td className="border border-gray-200 px-4 py-3 text-gray-600">true</td>
                <td className="border border-gray-200 px-4 py-3 text-gray-600">Enable message queuing</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-3 font-medium text-gray-900">messageQueue.maxSize</td>
                <td className="border border-gray-200 px-4 py-3 text-gray-600">number</td>
                <td className="border border-gray-200 px-4 py-3 text-gray-600">1000</td>
                <td className="border border-gray-200 px-4 py-3 text-gray-600">Maximum queued messages</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-3 font-medium text-gray-900">reconnection.maxAttempts</td>
                <td className="border border-gray-200 px-4 py-3 text-gray-600">number</td>
                <td className="border border-gray-200 px-4 py-3 text-gray-600">10</td>
                <td className="border border-gray-200 px-4 py-3 text-gray-600">Maximum reconnection attempts</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-3 font-medium text-gray-900">performance.monitoring</td>
                <td className="border border-gray-200 px-4 py-3 text-gray-600">boolean</td>
                <td className="border border-gray-200 px-4 py-3 text-gray-600">true</td>
                <td className="border border-gray-200 px-4 py-3 text-gray-600">Enable performance monitoring</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Next Steps */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white">
        <h2 className="text-2xl font-bold mb-4">🚀 Ready to Build Real-Time Applications?</h2>
        <p className="text-blue-100 mb-6">
          Explore advanced WebSocket features, multi-agent systems, and real-time collaboration 
          to build next-generation applications with Brolostack WebSocket Framework.
        </p>
        <div className="flex flex-wrap gap-4">
          <a 
            href="/docs/brolostack-ws-multi-agent" 
            className="inline-flex items-center px-6 py-3 bg-white/20 hover:bg-white/30 rounded-lg transition-colors"
          >
            <Users className="mr-2" size={20} />
            Multi-Agent System
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

export default BrolostackWSClientPage;

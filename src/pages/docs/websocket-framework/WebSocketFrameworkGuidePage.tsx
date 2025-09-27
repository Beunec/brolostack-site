import React from 'react';
import { motion } from 'framer-motion';
import { 
  Wifi, 
  Users, 
  ArrowRight, 
  CheckCircle,
  Settings,
  Activity
} from 'lucide-react';

const WebSocketFrameworkGuidePage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="space-y-8"
    >
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
        <div className="max-w-4xl">
          <h1 className="text-4xl font-bold mb-4">
            WebSocket Framework Guide Template
          </h1>
          <p className="text-xl text-blue-100 mb-6">
            Comprehensive guide for implementing real-time communication with Brolostack WebSocket Framework. 
            Learn how to build multi-agent systems, real-time collaboration, and live data streaming applications.
          </p>
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center space-x-2 bg-white/20 rounded-lg px-4 py-2">
              <Wifi size={20} />
              <span className="font-medium">Real-time Communication</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/20 rounded-lg px-4 py-2">
              <Users size={20} />
              <span className="font-medium">Multi-Agent Systems</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/20 rounded-lg px-4 py-2">
              <Activity size={20} />
              <span className="font-medium">Live Data Streaming</span>
            </div>
          </div>
        </div>
      </div>

      {/* Use Case 1: Real-time Chat Application */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">💬 Use Case 1: Real-time Chat Application</h2>
        
        <div className="space-y-6">
          <div className="border-l-4 border-blue-500 pl-6">
            <div className="flex items-center mb-3">
              <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Multi-Room Chat System</h3>
            </div>
            <div className="bg-gray-900 rounded-lg p-4 text-green-400 font-mono text-sm overflow-x-auto">
              <pre>{`// Real-time chat application
import { BrolostackProvider, useBrolostackWebSocket } from 'brolostack';

const ChatApp = () => {
  const { ws, connected, joinRoom, sendToRoom, on } = useBrolostackWebSocket({
    url: 'wss://api.example.com/chat',
    autoConnect: true,
    messageQueue: { enabled: true, maxSize: 100 }
  });

  const [messages, setMessages] = useState([]);
  const [currentRoom, setCurrentRoom] = useState('general');
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    if (!ws || !connected) return;

    joinRoom(currentRoom, currentRoom + ' Chat Room');

    on('message', (data) => {
      setMessages(prev => [...prev, data]);
    });

    on('user-joined', (data) => {
      setMessages(prev => [...prev, {
        type: 'system',
        content: data.userId + ' joined the room',
        timestamp: Date.now()
      }]);
    });

  }, [ws, connected, currentRoom]);

  const handleSendMessage = () => {
    if (!newMessage.trim()) return;

    const message = {
      id: 'msg_' + Date.now(),
      type: 'text',
      content: newMessage,
      sender: { id: 'user-1', name: 'Demo User' },
      room: currentRoom,
      timestamp: Date.now()
    };

    sendToRoom(currentRoom, 'message', message);
    setNewMessage('');
  };

  return (
    <div className="chat-app">
      <div className="messages">
        {messages.map((msg, index) => (
          <div key={index} className="message">
            <strong>{msg.sender?.name}:</strong> {msg.content}
          </div>
        ))}
      </div>
      <div className="input-area">
        <input
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
          placeholder="Type a message..."
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};`}</pre>
            </div>
          </div>
        </div>
      </div>

      {/* Use Case 2: Multi-Agent Collaboration */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">🤖 Use Case 2: Multi-Agent Collaboration System</h2>
        
        <div className="space-y-6">
          <div className="border-l-4 border-purple-500 pl-6">
            <div className="flex items-center mb-3">
              <div className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900">AI Agent Coordination</h3>
            </div>
            <div className="bg-gray-900 rounded-lg p-4 text-green-400 font-mono text-sm overflow-x-auto">
              <pre>{`// Multi-agent collaboration system
import { BrolostackProvider, useBrolostackWebSocket } from 'brolostack';

const MultiAgentSystem = () => {
  const { ws, connected, joinRoom, send, on } = useBrolostackWebSocket({
    url: 'wss://api.example.com/agents',
    autoConnect: true
  });

  const [agents, setAgents] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [collaborationRequests, setCollaborationRequests] = useState([]);

  useEffect(() => {
    if (!ws || !connected) return;

    joinRoom('agent-coordination', 'Agent Coordination Room');

    on('agent-registered', (data) => {
      setAgents(prev => [...prev, data.agent]);
    });

    on('task-assigned', (data) => {
      setTasks(prev => [...prev, data]);
    });

    on('collaboration-request', (data) => {
      setCollaborationRequests(prev => [...prev, data]);
    });

  }, [ws, connected]);

  const registerAgent = () => {
    const agentInfo = {
      id: 'agent_' + Date.now(),
      type: 'data-processor',
      capabilities: ['data-analysis', 'machine-learning'],
      status: 'idle'
    };

    send('register-agent', agentInfo);
  };

  const startTask = () => {
    const taskDefinition = {
      id: 'task_' + Date.now(),
      type: 'data-analysis',
      priority: 'high',
      requirements: {
        agentTypes: ['data-processor'],
        capabilities: ['data-analysis']
      }
    };

    send('start-task', taskDefinition);
  };

  return (
    <div className="multi-agent-system">
      <div className="agent-management">
        <button onClick={registerAgent}>Register Agent</button>
        <button onClick={startTask}>Start Task</button>
      </div>
      
      <div className="agents-list">
        {agents.map((agent, index) => (
          <div key={index} className="agent-card">
            <h3>{agent.id}</h3>
            <p>Type: {agent.type}</p>
            <p>Status: {agent.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
};`}</pre>
            </div>
          </div>
        </div>
      </div>

      {/* Use Case 3: Live Data Streaming */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">📊 Use Case 3: Live Data Streaming Dashboard</h2>
        
        <div className="space-y-6">
          <div className="border-l-4 border-green-500 pl-6">
            <div className="flex items-center mb-3">
              <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Real-time Analytics</h3>
            </div>
            <div className="bg-gray-900 rounded-lg p-4 text-green-400 font-mono text-sm overflow-x-auto">
              <pre>{`// Live data streaming dashboard
import { BrolostackProvider, useBrolostackWebSocket } from 'brolostack';

const LiveDataDashboard = () => {
  const { ws, connected, joinRoom, on } = useBrolostackWebSocket({
    url: 'wss://api.example.com/stream',
    autoConnect: true
  });

  const [metrics, setMetrics] = useState({
    users: 0,
    revenue: 0,
    orders: 0,
    conversion: 0
  });

  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    if (!ws || !connected) return;

    joinRoom('live-metrics', 'Live Metrics Room');

    on('metric-update', (data) => {
      setMetrics(prev => ({
        ...prev,
        [data.metric]: data.value
      }));
    });

    on('chart-data', (data) => {
      setChartData(prev => [...prev.slice(-99), data]);
    });

  }, [ws, connected]);

  return (
    <div className="live-dashboard">
      <div className="metrics-grid">
        <div className="metric-card">
          <h3>Active Users</h3>
          <div className="metric-value">{metrics.users || 0}</div>
        </div>
        <div className="metric-card">
          <h3>Revenue</h3>
          <div className="metric-value">{'$' + (metrics.revenue || 0)}</div>
        </div>
        <div className="metric-card">
          <h3>Orders</h3>
          <div className="metric-value">{metrics.orders || 0}</div>
        </div>
        <div className="metric-card">
          <h3>Conversion</h3>
          <div className="metric-value">{metrics.conversion || 0}%</div>
        </div>
      </div>
      
      <div className="chart-container">
        <h3>Live Chart Data</h3>
        <div className="chart">
          {chartData.map((point, index) => (
            <div key={index} className="chart-point" 
                 style={{ height: point.value + 'px' }} />
          ))}
        </div>
      </div>
    </div>
  );
};`}</pre>
            </div>
          </div>
        </div>
      </div>

      {/* Use Case 4: Collaborative Editing */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">✏️ Use Case 4: Collaborative Document Editing</h2>
        
        <div className="space-y-6">
          <div className="border-l-4 border-orange-500 pl-6">
            <div className="flex items-center mb-3">
              <div className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                4
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Real-time Document Collaboration</h3>
            </div>
            <div className="bg-gray-900 rounded-lg p-4 text-green-400 font-mono text-sm overflow-x-auto">
              <pre>{`// Collaborative document editing
import { BrolostackProvider, useBrolostackWebSocket } from 'brolostack';

const CollaborativeEditor = () => {
  const { ws, connected, joinRoom, sendToRoom, on } = useBrolostackWebSocket({
    url: 'wss://api.example.com/collaborate',
    autoConnect: true
  });

  const [document, setDocument] = useState('');
  const [collaborators, setCollaborators] = useState([]);
  const [cursorPositions, setCursorPositions] = useState({});

  useEffect(() => {
    if (!ws || !connected) return;

    joinRoom('document-123', 'Document Collaboration Room');

    on('document-update', (data) => {
      setDocument(data.content);
    });

    on('user-joined', (data) => {
      setCollaborators(prev => [...prev, data.user]);
    });

    on('cursor-move', (data) => {
      setCursorPositions(prev => ({
        ...prev,
        [data.userId]: data.position
      }));
    });

  }, [ws, connected]);

  const handleTextChange = (newText) => {
    setDocument(newText);
    sendToRoom('document-123', 'document-update', {
      content: newText,
      userId: 'user-1'
    });
  };

  const handleCursorMove = (position) => {
    sendToRoom('document-123', 'cursor-move', {
      userId: 'user-1',
      position: position
    });
  };

  return (
    <div className="collaborative-editor">
      <div className="collaborators">
        <h3>Active Collaborators:</h3>
        {collaborators.map((user, index) => (
          <div key={index} className="collaborator">
            {user.name} {cursorPositions[user.id] && 
              <span className="cursor-position">
                (position: {cursorPositions[user.id]})
              </span>
            }
          </div>
        ))}
      </div>
      
      <textarea
        value={document}
        onChange={(e) => handleTextChange(e.target.value)}
        onSelect={(e) => handleCursorMove(e.target.selectionStart)}
        placeholder="Start typing to collaborate..."
        className="document-editor"
      />
    </div>
  );
};`}</pre>
            </div>
          </div>
        </div>
      </div>

      {/* Use Case 5: Gaming Multiplayer */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">🎮 Use Case 5: Multiplayer Gaming</h2>
        
        <div className="space-y-6">
          <div className="border-l-4 border-red-500 pl-6">
            <div className="flex items-center mb-3">
              <div className="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                5
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Real-time Game State Synchronization</h3>
            </div>
            <div className="bg-gray-900 rounded-lg p-4 text-green-400 font-mono text-sm overflow-x-auto">
              <pre>{`// Multiplayer gaming system
import { BrolostackProvider, useBrolostackWebSocket } from 'brolostack';

const MultiplayerGame = () => {
  const { ws, connected, joinRoom, sendToRoom, on } = useBrolostackWebSocket({
    url: 'wss://api.example.com/game',
    autoConnect: true
  });

  const [gameState, setGameState] = useState({
    players: [],
    gameObjects: [],
    score: 0
  });

  const [playerPosition, setPlayerPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (!ws || !connected) return;

    joinRoom('game-room-1', 'Game Room 1');

    on('game-state-update', (data) => {
      setGameState(data.state);
    });

    on('player-move', (data) => {
      setGameState(prev => ({
        ...prev,
        players: prev.players.map(player => 
          player.id === data.playerId 
            ? { ...player, position: data.position }
            : player
        )
      }));
    });

  }, [ws, connected]);

  const movePlayer = (direction) => {
    const newPosition = {
      x: playerPosition.x + (direction === 'right' ? 10 : direction === 'left' ? -10 : 0),
      y: playerPosition.y + (direction === 'down' ? 10 : direction === 'up' ? -10 : 0)
    };

    setPlayerPosition(newPosition);
    sendToRoom('game-room-1', 'player-move', {
      playerId: 'player-1',
      position: newPosition
    });
  };

  return (
    <div className="multiplayer-game">
      <div className="game-area">
        <div className="player" 
             style={{ 
               left: playerPosition.x, 
               top: playerPosition.y 
             }}>
          Player 1
        </div>
        
        {gameState.players.map((player, index) => (
          <div key={index} 
               className="other-player"
               style={{ 
                 left: player.position.x, 
                 top: player.position.y 
               }}>
            {player.name}
          </div>
        ))}
      </div>
      
      <div className="controls">
        <button onClick={() => movePlayer('up')}>↑</button>
        <button onClick={() => movePlayer('down')}>↓</button>
        <button onClick={() => movePlayer('left')}>←</button>
        <button onClick={() => movePlayer('right')}>→</button>
      </div>
      
      <div className="game-info">
        <p>Score: {gameState.score}</p>
        <p>Players: {gameState.players.length}</p>
      </div>
    </div>
  );
};`}</pre>
            </div>
          </div>
        </div>
      </div>

      {/* Use Case 6: IoT Device Monitoring */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">🌐 Use Case 6: IoT Device Monitoring</h2>
        
        <div className="space-y-6">
          <div className="border-l-4 border-teal-500 pl-6">
            <div className="flex items-center mb-3">
              <div className="bg-teal-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                6
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Real-time Device Data</h3>
            </div>
            <div className="bg-gray-900 rounded-lg p-4 text-green-400 font-mono text-sm overflow-x-auto">
              <pre>{`// IoT device monitoring system
import { BrolostackProvider, useBrolostackWebSocket } from 'brolostack';

const IoTMonitoring = () => {
  const { ws, connected, joinRoom, on } = useBrolostackWebSocket({
    url: 'wss://api.example.com/iot',
    autoConnect: true
  });

  const [devices, setDevices] = useState([]);
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    if (!ws || !connected) return;

    joinRoom('iot-monitoring', 'IoT Monitoring Room');

    on('device-data', (data) => {
      setDevices(prev => prev.map(device => 
        device.id === data.deviceId 
          ? { ...device, ...data.data, lastUpdate: Date.now() }
          : device
      ));
    });

    on('device-alert', (data) => {
      setAlerts(prev => [...prev, {
        id: Date.now(),
        deviceId: data.deviceId,
        message: data.message,
        severity: data.severity,
        timestamp: Date.now()
      }]);
    });

  }, [ws, connected]);

  return (
    <div className="iot-monitoring">
      <div className="devices-grid">
        {devices.map((device, index) => (
          <div key={index} className="device-card">
            <h3>{device.name}</h3>
            <p>Status: {device.status}</p>
            <p>Temperature: {device.temperature}°C</p>
            <p>Humidity: {device.humidity}%</p>
            <p>Last Update: {new Date(device.lastUpdate).toLocaleTimeString()}</p>
          </div>
        ))}
      </div>
      
      <div className="alerts-panel">
        <h3>Device Alerts</h3>
        {alerts.map((alert, index) => (
          <div key={index} className={'alert ' + alert.severity}>
            <strong>{alert.deviceId}:</strong> {alert.message}
            <span className="timestamp">
              {new Date(alert.timestamp).toLocaleTimeString()}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};`}</pre>
            </div>
          </div>
        </div>
      </div>

      {/* Best Practices */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">💡 WebSocket Best Practices</h2>
        
        <div className="space-y-4">
          <div className="flex items-start space-x-3">
            <div className="bg-green-100 rounded-lg p-2">
              <CheckCircle className="text-green-600" size={20} />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Connection Management</h3>
              <p className="text-gray-600 text-sm">Implement automatic reconnection, connection pooling, and graceful error handling.</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <div className="bg-blue-100 rounded-lg p-2">
              <CheckCircle className="text-blue-600" size={20} />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Message Queuing</h3>
              <p className="text-gray-600 text-sm">Use message queuing for offline scenarios and ensure message delivery reliability.</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <div className="bg-purple-100 rounded-lg p-2">
              <CheckCircle className="text-purple-600" size={20} />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Room Management</h3>
              <p className="text-gray-600 text-sm">Organize connections into rooms for efficient message routing and user management.</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <div className="bg-orange-100 rounded-lg p-2">
              <CheckCircle className="text-orange-600" size={20} />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Performance Optimization</h3>
              <p className="text-gray-600 text-sm">Implement message compression, batching, and efficient data structures for high-performance applications.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Next Steps */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white">
        <h2 className="text-2xl font-bold mb-4">🌐 Ready to Build Real-time Applications?</h2>
        <p className="text-blue-100 mb-6">
          Explore advanced WebSocket features, multi-agent systems, and real-time collaboration 
          to build next-generation applications with Brolostack WebSocket Framework.
        </p>
        <div className="flex flex-wrap gap-4">
          <a 
            href="/docs/websocket-framework" 
            className="inline-flex items-center px-6 py-3 bg-white/20 hover:bg-white/30 rounded-lg transition-colors"
          >
            <Wifi className="mr-2" size={20} />
            WebSocket Framework
            <ArrowRight className="ml-2" size={16} />
          </a>
          <a 
            href="/docs/ai-framework" 
            className="inline-flex items-center px-6 py-3 bg-white/20 hover:bg-white/30 rounded-lg transition-colors"
          >
            <Users className="mr-2" size={20} />
            AI Framework
            <ArrowRight className="ml-2" size={16} />
          </a>
          <a 
            href="/docs/cloud-integration" 
            className="inline-flex items-center px-6 py-3 bg-white/20 hover:bg-white/30 rounded-lg transition-colors"
          >
            <Settings className="mr-2" size={20} />
            Cloud Integration
            <ArrowRight className="ml-2" size={16} />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default WebSocketFrameworkGuidePage;
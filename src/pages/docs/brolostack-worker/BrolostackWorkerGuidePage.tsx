import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Cpu, 
  Zap, 
  Database, 
  Cloud, 
  CheckCircle, 
  Copy,
  Terminal,
  Settings,
  Monitor,
  FileText,
  Network,
  Shield
} from 'lucide-react';

const BrolostackWorkerGuidePage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('basic');
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const copyToClipboard = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const basicWorkerExample = `import { BrolostackWorker } from 'brolostack';

// Basic Worker Setup
const worker = new BrolostackWorker({
  name: 'basic-worker',
  type: 'dedicated',
  scope: 'global'
});

// Worker event handlers
worker.on('message', (event) => {
  const { type, data } = event.data;
  
  switch (type) {
    case 'process-data':
      const result = processData(data);
      worker.postMessage({
        type: 'data-processed',
        result
      });
      break;
      
    case 'calculate':
      const calculation = performCalculation(data);
      worker.postMessage({
        type: 'calculation-complete',
        result: calculation
      });
      break;
  }
});

// Data processing function
function processData(data) {
  return data.map(item => ({
    ...item,
    processed: true,
    timestamp: Date.now()
  }));
}

// Calculation function
function performCalculation(data) {
  return data.reduce((sum, num) => sum + num, 0);
}

// Initialize worker
worker.start();`;

  const backgroundTaskExample = `import { BrolostackWorker } from 'brolostack';

// Background Task Worker
const backgroundWorker = new BrolostackWorker({
  name: 'background-tasks',
  type: 'shared',
  features: ['background-sync', 'periodic-tasks']
});

// Background sync task
backgroundWorker.registerTask('sync-data', async (data) => {
  try {
    // Simulate API call
    const response = await fetch('/api/sync', {
      method: 'POST',
      body: JSON.stringify(data)
    });
    
    return await response.json();
  } catch (error) {
    console.error('Sync failed:', error);
    throw error;
  }
});

// Periodic task
backgroundWorker.registerPeriodicTask('cleanup', {
  interval: 300000, // 5 minutes
  task: async () => {
    // Clean up old data
    const cutoff = Date.now() - (24 * 60 * 60 * 1000); // 24 hours ago
    await cleanupOldData(cutoff);
  }
});

// Data processing pipeline
backgroundWorker.registerTask('process-pipeline', async (data) => {
  const steps = [
    validateData,
    transformData,
    enrichData,
    storeData
  ];
  
  let result = data;
  for (const step of steps) {
    result = await step(result);
  }
  
  return result;
});

async function validateData(data) {
  // Validation logic
  return data;
}

async function transformData(data) {
  // Transformation logic
  return data;
}

async function enrichData(data) {
  // Data enrichment
  return data;
}

async function storeData(data) {
  // Store in database
  return data;
}

backgroundWorker.start();`;

  const performanceExample = `import { BrolostackWorker } from 'brolostack';

// High-Performance Worker
const perfWorker = new BrolostackWorker({
  name: 'performance-worker',
  type: 'dedicated',
  features: ['threading', 'memory-management', 'optimization']
});

// Parallel processing
perfWorker.registerTask('parallel-process', async (data) => {
  const chunkSize = Math.ceil(data.length / 4); // 4 parallel chunks
  const chunks = [];
  
  for (let i = 0; i < data.length; i += chunkSize) {
    chunks.push(data.slice(i, i + chunkSize));
  }
  
  // Process chunks in parallel
  const results = await Promise.all(
    chunks.map(chunk => processChunk(chunk))
  );
  
  return results.flat();
});

// Memory-efficient processing
perfWorker.registerTask('memory-efficient', async (largeDataset) => {
  const batchSize = 1000;
  const results = [];
  
  for (let i = 0; i < largeDataset.length; i += batchSize) {
    const batch = largeDataset.slice(i, i + batchSize);
    const batchResult = await processBatch(batch);
    results.push(...batchResult);
    
    // Force garbage collection if available
    if (window.gc) {
      window.gc();
    }
  }
  
  return results;
});

// CPU-intensive calculations
perfWorker.registerTask('cpu-intensive', async (data) => {
  // Use WebAssembly for heavy computations
  const wasmModule = await import('./heavy-calculations.wasm');
  
  return wasmModule.calculate(data);
});

async function processChunk(chunk) {
  // Process individual chunk
  return chunk.map(item => expensiveOperation(item));
}

async function processBatch(batch) {
  // Process batch of items
  return batch.map(item => processItem(item));
}

function expensiveOperation(item) {
  // Simulate expensive operation
  return {
    ...item,
    processed: true,
    hash: btoa(JSON.stringify(item))
  };
}

perfWorker.start();`;

  const realtimeExample = `import { BrolostackWorker } from 'brolostack';

// Real-time Worker
const realtimeWorker = new BrolostackWorker({
  name: 'realtime-worker',
  type: 'shared',
  features: ['websocket', 'event-stream', 'live-updates']
});

// WebSocket connection management
let wsConnection = null;

realtimeWorker.registerTask('connect-websocket', async (url) => {
  wsConnection = new WebSocket(url);
  
  wsConnection.onopen = () => {
    realtimeWorker.postMessage({
      type: 'websocket-connected',
      status: 'connected'
    });
  };
  
  wsConnection.onmessage = (event) => {
    const data = JSON.parse(event.data);
    realtimeWorker.postMessage({
      type: 'websocket-message',
      data
    });
  };
  
  wsConnection.onclose = () => {
    realtimeWorker.postMessage({
      type: 'websocket-disconnected',
      status: 'disconnected'
    });
  };
  
  return { status: 'connecting' };
});

// Real-time data processing
realtimeWorker.registerTask('process-stream', async (streamData) => {
  const processedData = streamData.map(item => ({
    ...item,
    processedAt: Date.now(),
    normalized: normalizeData(item)
  }));
  
  // Broadcast to main thread
  realtimeWorker.postMessage({
    type: 'stream-processed',
    data: processedData
  });
  
  return processedData;
});

// Live collaboration
realtimeWorker.registerTask('collaboration', async (collaborationData) => {
  const { userId, documentId, changes } = collaborationData;
  
  // Process changes
  const processedChanges = await processChanges(changes);
  
  // Broadcast to other users
  realtimeWorker.postMessage({
    type: 'collaboration-update',
    data: {
      userId,
      documentId,
      changes: processedChanges,
      timestamp: Date.now()
    }
  });
  
  return processedChanges;
});

function normalizeData(item) {
  // Normalize incoming data
  return {
    id: item.id || generateId(),
    timestamp: item.timestamp || Date.now(),
    value: parseFloat(item.value) || 0
  };
}

async function processChanges(changes) {
  // Process collaborative changes
  return changes.map(change => ({
    ...change,
    processed: true,
    hash: generateHash(change)
  }));
}

realtimeWorker.start();`;

  const securityExample = `import { BrolostackWorker } from 'brolostack';

// Secure Worker
const secureWorker = new BrolostackWorker({
  name: 'secure-worker',
  type: 'dedicated',
  features: ['encryption', 'validation', 'sanitization']
});

// Encrypted data processing
secureWorker.registerTask('encrypt-data', async (data) => {
  const encryptionKey = await generateEncryptionKey();
  
  const encryptedData = await encryptData(data, encryptionKey);
  
  return {
    encryptedData,
    keyId: encryptionKey.id,
    algorithm: 'AES-256-GCM'
  };
});

// Input validation and sanitization
secureWorker.registerTask('validate-input', async (input) => {
  const validation = {
    isValid: true,
    errors: []
  };
  
  // Validate required fields
  if (!input.email || !isValidEmail(input.email)) {
    validation.errors.push('Invalid email format');
    validation.isValid = false;
  }
  
  // Sanitize input
  const sanitizedInput = {
    ...input,
    email: sanitizeEmail(input.email),
    name: sanitizeString(input.name),
    description: sanitizeHtml(input.description)
  };
  
  return {
    validation,
    sanitizedInput
  };
});

// Secure API communication
secureWorker.registerTask('secure-api-call', async (request) => {
  // Add security headers
  const secureRequest = {
    ...request,
    headers: {
      ...request.headers,
      'X-Request-ID': generateRequestId(),
      'X-Timestamp': Date.now(),
      'X-Signature': await generateSignature(request)
    }
  };
  
  // Make secure request
  const response = await fetch(request.url, secureRequest);
  
  // Validate response
  if (!validateResponse(response)) {
    throw new Error('Invalid response signature');
  }
  
  return response;
});

async function encryptData(data, key) {
  // Encryption implementation
  const encoder = new TextEncoder();
  const dataBuffer = encoder.encode(JSON.stringify(data));
  
  const encryptedBuffer = await crypto.subtle.encrypt(
    { name: 'AES-GCM', iv: new Uint8Array(12) },
    key,
    dataBuffer
  );
  
  return Array.from(new Uint8Array(encryptedBuffer));
}

function isValidEmail(email) {
  return /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email);
}

function sanitizeEmail(email) {
  return email.toLowerCase().trim();
}

function sanitizeString(str) {
  return str.replace(/[<>]/g, '').trim();
}

function sanitizeHtml(html) {
  // Basic HTML sanitization
  return html.replace(/<script[^>]*>.*?<\\/script>/gi, '');
}

secureWorker.start();`;

  const monitoringExample = `import { BrolostackWorker } from 'brolostack';

// Monitored Worker
const monitoredWorker = new BrolostackWorker({
  name: 'monitored-worker',
  type: 'shared',
  features: ['metrics', 'logging', 'health-checks']
});

// Worker metrics
const metrics = {
  tasksProcessed: 0,
  averageProcessingTime: 0,
  errors: 0,
  memoryUsage: 0
};

// Task execution monitoring
monitoredWorker.registerTask('monitored-task', async (data) => {
  const startTime = performance.now();
  const startMemory = performance.memory?.usedJSHeapSize || 0;
  
  try {
    const result = await processData(data);
    
    // Update metrics
    const endTime = performance.now();
    const endMemory = performance.memory?.usedJSHeapSize || 0;
    
    updateMetrics({
      processingTime: endTime - startTime,
      memoryDelta: endMemory - startMemory,
      success: true
    });
    
    return result;
  } catch (error) {
    updateMetrics({
      error: true
    });
    
    // Log error
    monitoredWorker.postMessage({
      type: 'error',
      error: error.message,
      stack: error.stack
    });
    
    throw error;
  }
});

// Health check
monitoredWorker.registerTask('health-check', async () => {
  const health = {
    status: 'healthy',
    timestamp: Date.now(),
    metrics: {
      ...metrics,
      uptime: Date.now() - monitoredWorker.startTime,
      memoryUsage: performance.memory?.usedJSHeapSize || 0
    }
  };
  
  // Check for issues
  if (metrics.errors > 10) {
    health.status = 'degraded';
  }
  
  if (metrics.memoryUsage > 100 * 1024 * 1024) { // 100MB
    health.status = 'critical';
  }
  
  return health;
});

// Periodic metrics reporting
setInterval(() => {
  monitoredWorker.postMessage({
    type: 'metrics',
    data: metrics
  });
}, 30000); // Every 30 seconds

function updateMetrics(data) {
  metrics.tasksProcessed++;
  
  if (data.processingTime) {
    metrics.averageProcessingTime = 
      (metrics.averageProcessingTime + data.processingTime) / 2;
  }
  
  if (data.error) {
    metrics.errors++;
  }
  
  if (data.memoryDelta) {
    metrics.memoryUsage += data.memoryDelta;
  }
}

async function processData(data) {
  // Simulate processing
  await new Promise(resolve => setTimeout(resolve, 100));
  return { processed: true, data };
}

monitoredWorker.start();`;

  const tabs = [
    { id: 'basic', label: 'Basic Worker', icon: Cpu },
    { id: 'background', label: 'Background Tasks', icon: Zap },
    { id: 'performance', label: 'Performance', icon: Settings },
    { id: 'realtime', label: 'Real-time', icon: Network },
    { id: 'security', label: 'Security', icon: Shield },
    { id: 'monitoring', label: 'Monitoring', icon: Monitor }
  ];

  const getCodeExample = (tabId: string) => {
    switch (tabId) {
      case 'basic': return basicWorkerExample;
      case 'background': return backgroundTaskExample;
      case 'performance': return performanceExample;
      case 'realtime': return realtimeExample;
      case 'security': return securityExample;
      case 'monitoring': return monitoringExample;
      default: return basicWorkerExample;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-cyan-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-cyan-100 rounded-full mb-6">
            <Cpu className="w-8 h-8 text-cyan-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Brolostack Worker Guide
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Advanced Web Worker implementation for background processing, 
            real-time operations, and high-performance computing
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
            <Cpu className="w-8 h-8 text-blue-600 mb-4" />
            <h3 className="font-semibold text-gray-900 mb-2">Background Processing</h3>
            <p className="text-gray-600 text-sm">Offload heavy tasks to workers</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <Zap className="w-8 h-8 text-green-600 mb-4" />
            <h3 className="font-semibold text-gray-900 mb-2">Real-time Operations</h3>
            <p className="text-gray-600 text-sm">Live data processing and streaming</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <Settings className="w-8 h-8 text-purple-600 mb-4" />
            <h3 className="font-semibold text-gray-900 mb-2">High Performance</h3>
            <p className="text-gray-600 text-sm">Parallel processing and optimization</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <Shield className="w-8 h-8 text-orange-600 mb-4" />
            <h3 className="font-semibold text-gray-900 mb-2">Secure Processing</h3>
            <p className="text-gray-600 text-sm">Encrypted and validated operations</p>
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
                      ? 'text-cyan-600 border-b-2 border-cyan-600 bg-cyan-50'
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
            Worker Use Cases
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Database className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-3">Data Processing</h3>
              <p className="text-gray-600 text-sm mb-4">
                Process large datasets without blocking the main thread.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• CSV/JSON parsing</li>
                <li>• Data transformation</li>
                <li>• Batch processing</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Network className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-3">Real-time Chat</h3>
              <p className="text-gray-600 text-sm mb-4">
                Handle WebSocket connections and message processing.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• WebSocket management</li>
                <li>• Message queuing</li>
                <li>• Live collaboration</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <FileText className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-3">File Processing</h3>
              <p className="text-gray-600 text-sm mb-4">
                Handle file uploads, compression, and format conversion.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Image processing</li>
                <li>• File compression</li>
                <li>• Format conversion</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Performance Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-12 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-2xl p-8 border border-cyan-200"
        >
          <div className="flex items-center mb-6">
            <CheckCircle className="w-8 h-8 text-cyan-600 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900">Performance Benefits</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Main Thread Optimization</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Non-blocking UI operations</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Parallel processing capabilities</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Memory isolation</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span>CPU-intensive task handling</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Scalability Features</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Multiple worker instances</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Load balancing</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Task queuing</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Resource monitoring</span>
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
              Ready to Use Workers?
            </h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Implement high-performance background processing with Brolostack Workers 
              for better user experience and application scalability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-6 py-3 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition-colors font-medium">
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

export default BrolostackWorkerGuidePage;

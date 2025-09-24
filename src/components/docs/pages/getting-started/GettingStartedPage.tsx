import React from 'react';
import { motion } from 'framer-motion';
import { 
  Zap, 
  Shield, 
  Cloud, 
  Brain, 
  ArrowRight, 
  Code, 
  Download,
  Play,
  Building
} from 'lucide-react';

const GettingStartedPage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="space-y-8"
    >
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold mb-4">
            Welcome to Brolostack
          </h1>
          <p className="text-xl text-blue-100 mb-6">
            Build full-stack applications with zero server costs. Brolostack operates entirely in the user's browser 
            with optional cloud integration, providing enterprise-grade capabilities.
          </p>
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center space-x-2 bg-white/20 rounded-lg px-4 py-2">
              <Zap size={20} />
              <span className="font-medium">Local-First</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/20 rounded-lg px-4 py-2">
              <Shield size={20} />
              <span className="font-medium">Zero Server Costs</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/20 rounded-lg px-4 py-2">
              <Cloud size={20} />
              <span className="font-medium">Optional Cloud</span>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Install */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
          <Download className="mr-3 text-blue-600" />
          Quick Install
        </h2>
        <div className="bg-gray-900 rounded-lg p-4 text-green-400 font-mono text-sm overflow-x-auto">
          <code>npm install brolostack</code>
        </div>
        <p className="text-gray-600 mt-3">
          Or use yarn: <code className="bg-gray-100 px-2 py-1 rounded text-sm">yarn add brolostack</code>
        </p>
      </div>

      {/* Core Philosophy */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">🎯 Core Philosophy</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="bg-blue-100 rounded-lg p-2">
                <Zap className="text-blue-600" size={20} />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Local-First</h3>
                <p className="text-gray-600 text-sm">Your data stays in your browser, ensuring privacy and performance.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="bg-green-100 rounded-lg p-2">
                <Shield className="text-green-600" size={20} />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Zero Server Costs</h3>
                <p className="text-gray-600 text-sm">Core functionality requires no backend infrastructure.</p>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="bg-purple-100 rounded-lg p-2">
                <Building className="text-purple-600" size={20} />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Enterprise-Grade</h3>
                <p className="text-gray-600 text-sm">Advanced AI, security, and real-time features built-in.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="bg-orange-100 rounded-lg p-2">
                <Cloud className="text-orange-600" size={20} />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Optional Cloud</h3>
                <p className="text-gray-600 text-sm">Sync with 22+ cloud providers when needed.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 5-Minute Setup */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <Play className="mr-3 text-green-600" />
          5-Minute Setup
        </h2>
        
        <div className="space-y-6">
          {/* Step 1 */}
          <div className="border-l-4 border-blue-500 pl-6">
            <div className="flex items-center mb-3">
              <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Initialize Brolostack</h3>
            </div>
            <div className="bg-gray-900 rounded-lg p-4 text-green-400 font-mono text-sm overflow-x-auto">
              <pre>{`import { Brolostack } from 'brolostack';

const app = new Brolostack({
  appName: 'my-awesome-app',
  version: '1.0.2'
});

await app.initialize();`}</pre>
            </div>
          </div>

          {/* Step 2 */}
          <div className="border-l-4 border-green-500 pl-6">
            <div className="flex items-center mb-3">
              <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Create Your First Store</h3>
            </div>
            <div className="bg-gray-900 rounded-lg p-4 text-green-400 font-mono text-sm overflow-x-auto">
              <pre>{`const todoStore = app.createStore('todos', {
  todos: [],
  currentUser: null,
  
  // Actions
  addTodo: (text) => set(state => ({ 
    todos: [...state.todos, { 
      id: Date.now(), 
      text, 
      done: false,
      createdAt: new Date()
    }] 
  })),
  
  toggleTodo: (id) => set(state => ({ 
    todos: state.todos.map(todo => 
      todo.id === id ? { ...todo, done: !todo.done } : todo
    )
  })),
  
  setCurrentUser: (user) => set(state => ({ 
    currentUser: user 
  }))
});`}</pre>
            </div>
          </div>

          {/* Step 3 */}
          <div className="border-l-4 border-purple-500 pl-6">
            <div className="flex items-center mb-3">
              <div className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Use Your Data</h3>
            </div>
            <div className="bg-gray-900 rounded-lg p-4 text-green-400 font-mono text-sm overflow-x-auto">
              <pre>{`// Get data
const todos = todoStore.getState().todos;
const currentUser = todoStore.getState().currentUser;

// Update data
todoStore.getState().addTodo('Learn Brolostack');
todoStore.getState().setCurrentUser({ name: 'John Doe' });

// Subscribe to changes
todoStore.subscribe((state) => {
  console.log('Todos updated:', state.todos);
});`}</pre>
            </div>
          </div>
        </div>
      </div>

      {/* React Integration */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <Code className="mr-3 text-blue-600" />
          React Integration
        </h2>
        
        <div className="space-y-4">
          <div className="bg-gray-900 rounded-lg p-4 text-green-400 font-mono text-sm overflow-x-auto">
            <pre>{`import { BrolostackProvider, useBrolostack } from 'brolostack/react';

function App() {
  return (
    <BrolostackProvider 
      appName="my-awesome-app"
      config={{
        version: '1.0.2',
        storage: {
          engine: 'indexedDB',
          name: 'my-app-storage',
          version: 1
        }
      }}
    >
      <TodoApp />
    </BrolostackProvider>
  );
}

// Use Brolostack in components
function TodoApp() {
  const { stores } = useBrolostack();
  const todoStore = stores.get('todos');
  const todos = todoStore?.getState().todos || [];
  
  return (
    <div>
      {todos.map(todo => (
        <div key={todo.id} className="flex items-center space-x-2">
          <input 
            type="checkbox" 
            checked={todo.done}
            onChange={() => todoStore?.getState().toggleTodo(todo.id)}
          />
          <span>{todo.text}</span>
        </div>
      ))}
    </div>
  );
}`}</pre>
          </div>
        </div>
      </div>

      {/* Key Benefits */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">✨ Key Benefits</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center p-6 bg-blue-50 rounded-xl">
            <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Zap className="text-blue-600" size={32} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Instant Performance</h3>
            <p className="text-gray-600">No network latency - all data operations happen locally in the browser.</p>
          </div>
          <div className="text-center p-6 bg-green-50 rounded-xl">
            <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Shield className="text-green-600" size={32} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Enhanced Privacy</h3>
            <p className="text-gray-600">Your data never leaves your device unless you choose to sync.</p>
          </div>
          <div className="text-center p-6 bg-purple-50 rounded-xl">
            <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Cloud className="text-purple-600" size={32} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Works Offline</h3>
            <p className="text-gray-600">Full functionality even without internet connection.</p>
          </div>
        </div>
      </div>

      {/* Framework Statistics */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">📊 Framework Statistics</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">319KB</div>
            <div className="text-sm text-gray-600">Bundle Size</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">22+</div>
            <div className="text-sm text-gray-600">Cloud Providers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">18+</div>
            <div className="text-sm text-gray-600">AI Providers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">100%</div>
            <div className="text-sm text-gray-600">TypeScript</div>
          </div>
        </div>
      </div>

      {/* Next Steps */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-xl p-8 text-white">
        <h2 className="text-2xl font-bold mb-4">🚀 Ready to Get Started?</h2>
        <p className="text-gray-300 mb-6">
          Explore the comprehensive documentation to learn about AI integration, security features, 
          cloud synchronization, and more advanced capabilities.
        </p>
        <div className="flex flex-wrap gap-4">
          <a 
            href="/docs/ai-framework" 
            className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
          >
            <Brain className="mr-2" size={20} />
            AI Framework
            <ArrowRight className="ml-2" size={16} />
          </a>
          <a 
            href="/docs/devil-security" 
            className="inline-flex items-center px-6 py-3 bg-green-600 hover:bg-green-700 rounded-lg transition-colors"
          >
            <Shield className="mr-2" size={20} />
            Security Features
            <ArrowRight className="ml-2" size={16} />
          </a>
          <a 
            href="/docs/cloud-integration" 
            className="inline-flex items-center px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg transition-colors"
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

export default GettingStartedPage;

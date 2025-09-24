import React from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Cloud, 
  Brain, 
  ArrowRight, 
  Code, 
  Building,
  CheckCircle,
  FileText,
  Users
} from 'lucide-react';

const GettingStartedGuidePage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="space-y-8"
    >
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white">
        <div className="max-w-4xl">
          <h1 className="text-4xl font-bold mb-4">
            Getting Started Guide Template
          </h1>
          <p className="text-xl text-blue-100 mb-6">
            Step-by-step implementation guide inspired by real Brolostack examples. 
            Learn how to build applications using proven patterns and best practices.
          </p>
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center space-x-2 bg-white/20 rounded-lg px-4 py-2">
              <FileText size={20} />
              <span className="font-medium">Real Examples</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/20 rounded-lg px-4 py-2">
              <Code size={20} />
              <span className="font-medium">Production Ready</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/20 rounded-lg px-4 py-2">
              <CheckCircle size={20} />
              <span className="font-medium">Best Practices</span>
            </div>
          </div>
        </div>
      </div>

      {/* Example Projects Overview */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">📁 Available Example Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-center space-x-3 mb-3">
                <div className="bg-blue-100 rounded-lg p-2">
                  <Users className="text-blue-600" size={20} />
                </div>
                <h3 className="font-semibold text-gray-900">Personal App</h3>
              </div>
              <p className="text-gray-600 text-sm mb-3">
                Simple personal application with basic Brolostack setup and local storage.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Local Storage</span>
                <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Basic Setup</span>
                <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded">React</span>
              </div>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-center space-x-3 mb-3">
                <div className="bg-green-100 rounded-lg p-2">
                  <Building className="text-green-600" size={20} />
                </div>
                <h3 className="font-semibold text-gray-900">Enterprise App</h3>
              </div>
              <p className="text-gray-600 text-sm mb-3">
                Enterprise-grade application with advanced features and multi-provider setup.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded">Multi-Provider</span>
                <span className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded">Advanced Features</span>
                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">TypeScript</span>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-center space-x-3 mb-3">
                <div className="bg-purple-100 rounded-lg p-2">
                  <Cloud className="text-purple-600" size={20} />
                </div>
                <h3 className="font-semibold text-gray-900">SaaS App</h3>
              </div>
              <p className="text-gray-600 text-sm mb-3">
                Software-as-a-Service application with cloud integration and multi-tenancy.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded">Cloud Integration</span>
                <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded">Multi-Tenancy</span>
                <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Vite</span>
              </div>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-center space-x-3 mb-3">
                <div className="bg-orange-100 rounded-lg p-2">
                  <Brain className="text-orange-600" size={20} />
                </div>
                <h3 className="font-semibold text-gray-900">AI Ready App</h3>
              </div>
              <p className="text-gray-600 text-sm mb-3">
                AI-powered application with Brolostack AI framework integration.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded">AI Framework</span>
                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">TypeScript</span>
                <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">React</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Step-by-Step Implementation */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">🚀 Step-by-Step Implementation</h2>
        
        <div className="space-y-8">
          {/* Step 1 */}
          <div className="border-l-4 border-blue-500 pl-6">
            <div className="flex items-center mb-4">
              <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Project Setup</h3>
            </div>
            <div className="bg-gray-50 rounded-lg p-4 mb-4">
              <h4 className="font-semibold text-gray-900 mb-2">Create New Project</h4>
              <div className="bg-gray-900 rounded-lg p-4 text-green-400 font-mono text-sm overflow-x-auto">
                <pre>{`# Create new project
npx create-react-app my-brolostack-app --template typescript
cd my-brolostack-app

# Install Brolostack
npm install brolostack

# Install additional dependencies
npm install framer-motion lucide-react`}</pre>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="border-l-4 border-green-500 pl-6">
            <div className="flex items-center mb-4">
              <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Basic Configuration</h3>
            </div>
            <div className="bg-gray-50 rounded-lg p-4 mb-4">
              <h4 className="font-semibold text-gray-900 mb-2">Initialize Brolostack</h4>
              <div className="bg-gray-900 rounded-lg p-4 text-green-400 font-mono text-sm overflow-x-auto">
                <pre>{`// src/App.tsx
import React from 'react';
import { BrolostackProvider } from 'brolostack/react';
import { BrolostackDevilProvider } from 'brolostack/react';
import './App.css';

function App() {
  return (
    <BrolostackDevilProvider
      config={{
        protectionLevel: 'advanced',
        encryption: { enabled: true },
        obfuscation: { enabled: true }
      }}
    >
      <BrolostackProvider 
        appName="my-brolostack-app"
        config={{
          version: '1.0.2',
          storage: {
            engine: 'indexedDB',
            name: 'my-app-storage',
            version: 1
          }
        }}
      >
        <MainApp />
      </BrolostackProvider>
    </BrolostackDevilProvider>
  );
}

export default App;`}</pre>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="border-l-4 border-purple-500 pl-6">
            <div className="flex items-center mb-4">
              <div className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Create Your First Store</h3>
            </div>
            <div className="bg-gray-50 rounded-lg p-4 mb-4">
              <h4 className="font-semibold text-gray-900 mb-2">Todo Store Example</h4>
              <div className="bg-gray-900 rounded-lg p-4 text-green-400 font-mono text-sm overflow-x-auto">
                <pre>{`// src/stores/todoStore.ts
import { createStore } from 'brolostack';

export interface Todo {
  id: number;
  text: string;
  done: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface TodoState {
  todos: Todo[];
  filter: 'all' | 'active' | 'completed';
  currentUser: string | null;
}

export const todoStore = createStore<TodoState>('todos', {
  todos: [],
  filter: 'all',
  currentUser: null,
  
  // Actions
  addTodo: (text: string) => set(state => ({
    todos: [...state.todos, {
      id: Date.now(),
      text,
      done: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }]
  })),
  
  toggleTodo: (id: number) => set(state => ({
    todos: state.todos.map(todo => 
      todo.id === id 
        ? { ...todo, done: !todo.done, updatedAt: new Date() }
        : todo
    )
  })),
  
  deleteTodo: (id: number) => set(state => ({
    todos: state.todos.filter(todo => todo.id !== id)
  })),
  
  setFilter: (filter: 'all' | 'active' | 'completed') => set(state => ({
    filter
  })),
  
  setCurrentUser: (user: string | null) => set(state => ({
    currentUser: user
  }))
});`}</pre>
              </div>
            </div>
          </div>

          {/* Step 4 */}
          <div className="border-l-4 border-orange-500 pl-6">
            <div className="flex items-center mb-4">
              <div className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                4
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Build Your Components</h3>
            </div>
            <div className="bg-gray-50 rounded-lg p-4 mb-4">
              <h4 className="font-semibold text-gray-900 mb-2">Todo Component</h4>
              <div className="bg-gray-900 rounded-lg p-4 text-green-400 font-mono text-sm overflow-x-auto">
                <pre>{`// src/components/TodoApp.tsx
import React, { useState } from 'react';
import { useBrolostack } from 'brolostack/react';
import { todoStore, Todo } from '../stores/todoStore';
import { motion } from 'framer-motion';

export const TodoApp: React.FC = () => {
  const { stores } = useBrolostack();
  const store = stores.get('todos');
  const [newTodo, setNewTodo] = useState('');
  
  const todos = store?.getState().todos || [];
  const filter = store?.getState().filter || 'all';
  
  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.done;
    if (filter === 'completed') return todo.done;
    return true;
  });
  
  const handleAddTodo = () => {
    if (newTodo.trim()) {
      store?.getState().addTodo(newTodo.trim());
      setNewTodo('');
    }
  };
  
  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Brolostack Todo App</h1>
      
      {/* Add Todo */}
      <div className="flex space-x-2 mb-6">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleAddTodo()}
          placeholder="Add a new todo..."
          className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleAddTodo}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Add
        </button>
      </div>
      
      {/* Filter Buttons */}
      <div className="flex space-x-2 mb-6">
        {(['all', 'active', 'completed'] as const).map(filterType => (
          <button
            key={filterType}
            onClick={() => store?.getState().setFilter(filterType)}
            className={\`px-3 py-1 rounded-lg text-sm transition-colors \${
              filter === filterType
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }\`}
          >
            {filterType.charAt(0).toUpperCase() + filterType.slice(1)}
          </button>
        ))}
      </div>
      
      {/* Todo List */}
      <div className="space-y-2">
        {filteredTodos.map(todo => (
          <motion.div
            key={todo.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg"
          >
            <input
              type="checkbox"
              checked={todo.done}
              onChange={() => store?.getState().toggleTodo(todo.id)}
              className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
            />
            <span className={\`flex-1 \${todo.done ? 'line-through text-gray-500' : 'text-gray-900'}\`}>
              {todo.text}
            </span>
            <button
              onClick={() => store?.getState().deleteTodo(todo.id)}
              className="text-red-600 hover:text-red-800 transition-colors"
            >
              Delete
            </button>
          </motion.div>
        ))}
      </div>
      
      {filteredTodos.length === 0 && (
        <p className="text-gray-500 text-center py-8">
          {filter === 'all' ? 'No todos yet. Add one above!' : \`No \${filter} todos.\`}
        </p>
      )}
    </div>
  );
};`}</pre>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Advanced Features */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">🔧 Advanced Features</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Cloud Integration</h3>
              <p className="text-gray-600 text-sm mb-3">
                Sync your data with 22+ cloud providers including AWS, Azure, and Google Cloud.
              </p>
              <div className="bg-gray-900 rounded-lg p-3 text-green-400 font-mono text-xs overflow-x-auto">
                <pre>{`// Enable cloud sync
const cloudConfig = {
  providers: ['aws-s3', 'azure-blob', 'google-cloud'],
  syncInterval: 5000,
  conflictResolution: 'last-write-wins'
};`}</pre>
              </div>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">AI Integration</h3>
              <p className="text-gray-600 text-sm mb-3">
                Add AI capabilities with 18+ providers and 4 reasoning frameworks.
              </p>
              <div className="bg-gray-900 rounded-lg p-3 text-green-400 font-mono text-xs overflow-x-auto">
                <pre>{`// AI-powered features
const aiConfig = {
  provider: 'openai',
  model: 'gpt-4',
  reasoning: 'cot' // Chain-of-Thought
};`}</pre>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Security Features</h3>
              <p className="text-gray-600 text-sm mb-3">
                Protect your data with zero-knowledge encryption and source code protection.
              </p>
              <div className="bg-gray-900 rounded-lg p-3 text-green-400 font-mono text-xs overflow-x-auto">
                <pre>{`// Security configuration
const securityConfig = {
  protectionLevel: 'quantum-proof',
  encryption: { enabled: true },
  obfuscation: { enabled: true }
};`}</pre>
              </div>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Real-time Features</h3>
              <p className="text-gray-600 text-sm mb-3">
                WebSocket integration for real-time communication and collaboration.
              </p>
              <div className="bg-gray-900 rounded-lg p-3 text-green-400 font-mono text-xs overflow-x-auto">
                <pre>{`// Real-time sync
const realtimeConfig = {
  websocket: { enabled: true },
  syncInterval: 1000,
  conflictResolution: 'vector-clock'
};`}</pre>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Best Practices */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">✨ Best Practices</h2>
        <div className="space-y-4">
          <div className="flex items-start space-x-3">
            <div className="bg-green-100 rounded-lg p-2">
              <CheckCircle className="text-green-600" size={16} />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Store Organization</h3>
              <p className="text-gray-600 text-sm">Organize your stores by feature and keep them focused on specific data domains.</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="bg-blue-100 rounded-lg p-2">
              <CheckCircle className="text-blue-600" size={16} />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Type Safety</h3>
              <p className="text-gray-600 text-sm">Use TypeScript interfaces to define your store state and actions for better development experience.</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="bg-purple-100 rounded-lg p-2">
              <CheckCircle className="text-purple-600" size={16} />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Performance</h3>
              <p className="text-gray-600 text-sm">Use selective subscriptions and memoization to optimize component re-renders.</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="bg-orange-100 rounded-lg p-2">
              <CheckCircle className="text-orange-600" size={16} />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Security</h3>
              <p className="text-gray-600 text-sm">Enable Devil Security for production applications to protect sensitive data and source code.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Next Steps */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl p-8 text-white">
        <h2 className="text-2xl font-bold mb-4">🚀 Ready to Build More?</h2>
        <p className="text-blue-100 mb-6">
          Explore advanced features, security implementations, and real-world examples 
          to build production-ready applications with Brolostack.
        </p>
        <div className="flex flex-wrap gap-4">
          <a 
            href="/docs/ai-framework" 
            className="inline-flex items-center px-6 py-3 bg-white/20 hover:bg-white/30 rounded-lg transition-colors"
          >
            <Brain className="mr-2" size={20} />
            AI Framework
            <ArrowRight className="ml-2" size={16} />
          </a>
          <a 
            href="/docs/devil-security" 
            className="inline-flex items-center px-6 py-3 bg-white/20 hover:bg-white/30 rounded-lg transition-colors"
          >
            <Shield className="mr-2" size={20} />
            Security Features
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

export default GettingStartedGuidePage;

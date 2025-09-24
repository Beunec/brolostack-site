import React from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Shield, 
  Zap, 
  CheckCircle, 
  ArrowRight, 
  Code, 
  BarChart,
  Users,
  Lock,
  Eye,
  AlertTriangle,
  Target,
  Cpu,
  Database,
  Globe,
  Settings,
  FileText,
  Key
} from 'lucide-react';

const AIFrameworkGuidePage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="space-y-8"
    >
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
        <div className="max-w-4xl">
          <h1 className="text-4xl font-bold mb-4">
            AI Framework Implementation Guide
          </h1>
          <p className="text-xl text-purple-100 mb-6">
            Step-by-step guide to implementing AI capabilities in your Brolostack applications. 
            Learn how to integrate 18+ AI providers, 4 reasoning frameworks, and enterprise-grade governance.
          </p>
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center space-x-2 bg-white/20 rounded-lg px-4 py-2">
              <Brain size={20} />
              <span className="font-medium">18+ AI Providers</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/20 rounded-lg px-4 py-2">
              <Shield size={20} />
              <span className="font-medium">13 Safety Modules</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/20 rounded-lg px-4 py-2">
              <Zap size={20} />
              <span className="font-medium">4 Reasoning Frameworks</span>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Setup */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">🚀 Quick AI Setup</h2>
        
        <div className="space-y-6">
          {/* Step 1 */}
          <div className="border-l-4 border-purple-500 pl-6">
            <div className="flex items-center mb-3">
              <div className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Install Dependencies</h3>
            </div>
            <div className="bg-gray-900 rounded-lg p-4 text-green-400 font-mono text-sm overflow-x-auto">
              <pre>{`# Install Brolostack with AI support
npm install brolostack

# Install additional AI dependencies (optional)
npm install openai anthropic @google-cloud/ai`}</pre>
            </div>
          </div>

          {/* Step 2 */}
          <div className="border-l-4 border-blue-500 pl-6">
            <div className="flex items-center mb-3">
              <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Initialize AI Framework</h3>
            </div>
            <div className="bg-gray-900 rounded-lg p-4 text-green-400 font-mono text-sm overflow-x-auto">
              <pre>{`import { BrolostackAIFramework, BrolostackBSDGF4AI } from 'brolostack';

// Initialize AI framework with governance
const aiFramework = new BrolostackAIFramework({
  provider: {
    name: 'openai',
    apiKey: process.env.OPENAI_API_KEY,
    model: 'gpt-4'
  },
  reasoning: { 
    framework: 'cot' // Chain-of-Thought reasoning
  },
  governance: {
    enabled: true,
    config: {
      hallucination: { enabled: true, threshold: 0.8 },
      toxicLanguage: { enabled: true, strictMode: true },
      bias: { enabled: true, categories: ['gender', 'race'] },
      privacy: { enabled: true, piiDetection: true }
    }
  },
  tokenUsage: {
    controlLevel: 'strict',
    limits: {
      maxInputTokens: 4000,
      maxOutputTokens: 2000
    }
  }
});

await aiFramework.initialize();`}</pre>
            </div>
          </div>

          {/* Step 3 */}
          <div className="border-l-4 border-green-500 pl-6">
            <div className="flex items-center mb-3">
              <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Process Your First Query</h3>
            </div>
            <div className="bg-gray-900 rounded-lg p-4 text-green-400 font-mono text-sm overflow-x-auto">
              <pre>{`// Process query with AI governance
const result = await aiFramework.processQuery(
  'Analyze user behavior patterns and suggest improvements',
  { 
    data: userStore.getState().users,
    context: 'user management analysis'
  }
);

// Access results with safety scores
console.log('AI Response:', result.response);
console.log('Safety Score:', result.governance.safetyScore);
console.log('Token Usage:', result.tokenUsage);
console.log('Reasoning Steps:', result.reasoning);

// Handle different reasoning frameworks
const reactResult = await aiFramework.processQuery(
  'Solve this complex problem step by step',
  { reasoning: 'react' } // ReAct framework
);

const totResult = await aiFramework.processQuery(
  'Explore multiple solutions for this challenge',
  { reasoning: 'tot' } // Tree-of-Thoughts framework
);`}</pre>
            </div>
          </div>
        </div>
      </div>

      {/* Provider Configuration */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">🔧 AI Provider Configuration</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Multi-Provider Setup</h3>
            <div className="bg-gray-900 rounded-lg p-4 text-green-400 font-mono text-sm overflow-x-auto">
              <pre>{`// Configure multiple AI providers
const aiFramework = new BrolostackAIFramework({
  providers: [
    {
      name: 'openai',
      config: {
        apiKey: process.env.OPENAI_API_KEY,
        model: 'gpt-4',
        maxTokens: 4000
      },
      priority: 10,
      enabled: true
    },
    {
      name: 'anthropic',
      config: {
        apiKey: process.env.ANTHROPIC_API_KEY,
        model: 'claude-3-sonnet-20240229',
        maxTokens: 4000
      },
      priority: 9,
      enabled: true
    },
    {
      name: 'google-cloud-ai',
      config: {
        apiKey: process.env.GOOGLE_AI_KEY,
        model: 'gemini-pro',
        region: 'us-central1'
      },
      priority: 8,
      enabled: true
    }
  ],
  defaultProvider: 'openai',
  loadBalancing: {
    enabled: true,
    strategy: 'cost-optimized'
  },
  fallback: {
    enabled: true,
    maxRetries: 3,
    retryDelay: 1000
  }
});`}</pre>
            </div>
          </div>
        </div>
      </div>

      {/* Reasoning Frameworks */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">🧠 Reasoning Framework Implementation</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-3">ReAct Framework</h3>
              <p className="text-gray-600 text-sm mb-3">
                Reasoning framework that combines thinking with actionable steps for complex problem-solving.
              </p>
              <div className="bg-gray-900 rounded-lg p-3 text-green-400 font-mono text-xs overflow-x-auto">
                <pre>{`// ReAct reasoning example
const reactResult = await aiFramework.processQuery(
  'How can I optimize my e-commerce website?',
  {
    reasoning: 'react',
    context: {
      currentMetrics: { conversion: 2.1, bounce: 45 },
      budget: 10000,
      timeline: '3 months'
    }
  }
);

// Result includes reasoning steps and actions
console.log(reactResult.reasoning.steps);
console.log(reactResult.reasoning.actions);`}</pre>
              </div>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-3">Chain-of-Thought (CoT)</h3>
              <p className="text-gray-600 text-sm mb-3">
                Logical step progression for complex reasoning tasks with transparent decision-making.
              </p>
              <div className="bg-gray-900 rounded-lg p-3 text-green-400 font-mono text-xs overflow-x-auto">
                <pre>{`// CoT reasoning example
const cotResult = await aiFramework.processQuery(
  'Calculate the ROI for this marketing campaign',
  {
    reasoning: 'cot',
    data: {
      campaignCost: 5000,
      revenue: 15000,
      duration: 30
    }
  }
);

// Step-by-step reasoning
console.log(cotResult.reasoning.chain);`}</pre>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-3">Tree-of-Thoughts (ToT)</h3>
              <p className="text-gray-600 text-sm mb-3">
                Multiple reasoning paths for comprehensive analysis and exploration of solutions.
              </p>
              <div className="bg-gray-900 rounded-lg p-3 text-green-400 font-mono text-xs overflow-x-auto">
                <pre>{`// ToT reasoning example
const totResult = await aiFramework.processQuery(
  'What are the best strategies for user retention?',
  {
    reasoning: 'tot',
    branches: 3,
    context: {
      userType: 'premium',
      churnRate: 15
    }
  }
);

// Multiple solution paths
console.log(totResult.reasoning.branches);`}</pre>
              </div>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-3">Self-Consistency CoT</h3>
              <p className="text-gray-600 text-sm mb-3">
                Multiple attempts for accuracy and reliability through consensus-based reasoning.
              </p>
              <div className="bg-gray-900 rounded-lg p-3 text-green-400 font-mono text-xs overflow-x-auto">
                <pre>{`// Self-Consistency CoT example
const scotResult = await aiFramework.processQuery(
  'What is the best pricing strategy?',
  {
    reasoning: 'cot-sc',
    attempts: 5,
    context: {
      product: 'SaaS',
      market: 'enterprise'
    }
  }
);

// Consensus-based result
console.log(scotResult.reasoning.consensus);`}</pre>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* AI Governance Implementation */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">🛡️ AI Governance Implementation</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Safety Module Configuration</h3>
            <div className="bg-gray-900 rounded-lg p-4 text-green-400 font-mono text-sm overflow-x-auto">
              <pre>{`// Configure AI governance
const governance = new BrolostackBSDGF4AI({
  modules: {
    hallucination: {
      enabled: true,
      threshold: 0.8,
      model: 'custom-detector'
    },
    toxicLanguage: {
      enabled: true,
      strictMode: true,
      categories: ['hate', 'harassment', 'violence']
    },
    bias: {
      enabled: true,
      categories: ['gender', 'race', 'age', 'religion'],
      threshold: 0.7
    },
    privacy: {
      enabled: true,
      piiDetection: true,
      dataClassification: true
    },
    jailbreak: {
      enabled: true,
      detectionLevel: 'high',
      blockAttempts: true
    }
  },
  monitoring: {
    realTime: true,
    logging: true,
    alerts: true
  }
});

// Process with governance
const result = await governance.processWithSafety(
  userQuery,
  { context: 'customer-support' }
);

// Check safety scores
if (result.safetyScore < 0.8) {
  console.warn('Low safety score detected:', result.safetyScore);
  console.log('Issues found:', result.issues);
}`}</pre>
            </div>
          </div>
        </div>
      </div>

      {/* React Integration */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">⚛️ React Integration</h2>
        
        <div className="space-y-4">
          <div className="bg-gray-900 rounded-lg p-4 text-green-400 font-mono text-sm overflow-x-auto">
            <pre>{`import React, { useState, useEffect } from 'react';
import { useBrolostackAI } from 'brolostack/react';

function AIAssistant() {
  const { aiFramework } = useBrolostackAI();
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);
  const [safetyScore, setSafetyScore] = useState(0);
  
  const handleQuery = async () => {
    if (!query.trim()) return;
    
    setLoading(true);
    try {
      const result = await aiFramework.processQuery(query, {
        context: 'user-assistant',
        reasoning: 'cot'
      });
      
      setResponse(result.response);
      setSafetyScore(result.governance.safetyScore);
    } catch (error) {
      console.error('AI query failed:', error);
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">AI Assistant</h2>
      
      <div className="mb-4">
        <textarea
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Ask me anything..."
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows={3}
        />
      </div>
      
      <button
        onClick={handleQuery}
        disabled={loading}
        className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 transition-colors"
      >
        {loading ? 'Processing...' : 'Ask AI'}
      </button>
      
      {response && (
        <div className="mt-6 p-4 bg-gray-50 rounded-lg">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-semibold text-gray-900">Response</h3>
            <div className="flex items-center space-x-2">
              <Shield size={16} className="text-green-600" />
              <span className="text-sm text-gray-600">
                Safety: {Math.round(safetyScore * 100)}%
              </span>
            </div>
          </div>
          <p className="text-gray-700">{response}</p>
        </div>
      )}
    </div>
  );
}

export default AIAssistant;`}</pre>
          </div>
        </div>
      </div>

      {/* Token Usage Control */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">💰 Token Usage Control</h2>
        
        <div className="grid md:grid-cols-3 gap-6 mb-6">
          <div className="text-center p-6 bg-blue-50 rounded-xl">
            <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <BarChart className="text-blue-600" size={32} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Basic Control</h3>
            <p className="text-gray-600 text-sm">Flexible limits with monitoring and alerts</p>
          </div>
          <div className="text-center p-6 bg-green-50 rounded-xl">
            <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Shield className="text-green-600" size={32} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Strict Control</h3>
            <p className="text-gray-600 text-sm">Exact limits with automatic cutoff</p>
          </div>
          <div className="text-center p-6 bg-purple-50 rounded-xl">
            <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Zap className="text-purple-600" size={32} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Advanced Control</h3>
            <p className="text-gray-600 text-sm">90% limits with predictive scaling</p>
          </div>
        </div>
        
        <div className="bg-gray-900 rounded-lg p-4 text-green-400 font-mono text-sm overflow-x-auto">
          <pre>{`// Token usage configuration
const tokenControl = {
  controlLevel: 'strict',
  limits: {
    maxInputTokens: 4000,
    maxOutputTokens: 2000,
    dailyLimit: 100000,
    monthlyLimit: 2000000
  },
  monitoring: {
    realTimeAlerts: true,
    costTracking: true,
    usageAnalytics: true
  },
  scaling: {
    enabled: true,
    threshold: 0.9,
    autoScale: true
  }
};

// Monitor usage
aiFramework.on('token-usage-update', (usage) => {
  console.log('Token usage:', usage);
  
  if (usage.percentage > 90) {
    console.warn('Approaching token limit!');
  }
});`}</pre>
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
              <h3 className="font-semibold text-gray-900">Provider Selection</h3>
              <p className="text-gray-600 text-sm">Choose providers based on your specific use case, cost requirements, and performance needs.</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="bg-blue-100 rounded-lg p-2">
              <CheckCircle className="text-blue-600" size={16} />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Reasoning Framework</h3>
              <p className="text-gray-600 text-sm">Select the appropriate reasoning framework based on your problem complexity and requirements.</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="bg-purple-100 rounded-lg p-2">
              <CheckCircle className="text-purple-600" size={16} />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Governance</h3>
              <p className="text-gray-600 text-sm">Always enable AI governance for production applications to ensure safety and compliance.</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="bg-orange-100 rounded-lg p-2">
              <CheckCircle className="text-orange-600" size={16} />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Cost Management</h3>
              <p className="text-gray-600 text-sm">Implement token usage controls and monitoring to manage AI costs effectively.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Next Steps */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl p-8 text-white">
        <h2 className="text-2xl font-bold mb-4">🚀 Ready to Build AI-Powered Applications?</h2>
        <p className="text-purple-100 mb-6">
          Explore advanced AI features, security implementations, and real-world examples 
          to build intelligent applications with Brolostack AI Framework.
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
            Security Framework
            <ArrowRight className="ml-2" size={16} />
          </a>
          <a 
            href="/docs/token-usage-control" 
            className="inline-flex items-center px-6 py-3 bg-white/20 hover:bg-white/30 rounded-lg transition-colors"
          >
            <BarChart className="mr-2" size={20} />
            Cost Management
            <ArrowRight className="ml-2" size={16} />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default AIFrameworkGuidePage;

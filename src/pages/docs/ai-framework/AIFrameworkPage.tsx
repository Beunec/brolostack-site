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
  Globe
} from 'lucide-react';

const AIFrameworkPage: React.FC = () => {
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
            Brolostack AI Framework
          </h1>
          <p className="text-xl text-purple-100 mb-6">
            Comprehensive AI capabilities for frontend applications with 18+ providers, 4 reasoning frameworks, 
            and enterprise-grade governance. Built for the modern web with zero server costs.
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

      {/* Architecture Overview */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">🏗️ AI Framework Architecture</h2>
        <div className="bg-gray-50 rounded-lg p-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Core Components</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="bg-blue-100 rounded-lg p-2">
                    <Brain className="text-blue-600" size={20} />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">BrolostackAIFramework</div>
                    <div className="text-sm text-gray-600">Main AI coordination system</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-green-100 rounded-lg p-2">
                    <Shield className="text-green-600" size={20} />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">BrolostackBSDGF4AI</div>
                    <div className="text-sm text-gray-600">13 safety governance modules</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-purple-100 rounded-lg p-2">
                    <Cpu className="text-purple-600" size={20} />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">4 Reasoning Frameworks</div>
                    <div className="text-sm text-gray-600">ReAct, CoT, ToT, CoT-SC</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-orange-100 rounded-lg p-2">
                    <BarChart className="text-orange-600" size={20} />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">Token Usage Control</div>
                    <div className="text-sm text-gray-600">3-level cost management</div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Supported Providers</h3>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="text-green-500" size={16} />
                  <span>OpenAI</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="text-green-500" size={16} />
                  <span>Anthropic</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="text-green-500" size={16} />
                  <span>Google AI</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="text-green-500" size={16} />
                  <span>Azure OpenAI</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="text-green-500" size={16} />
                  <span>AWS Bedrock</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="text-green-500" size={16} />
                  <span>Cohere</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="text-green-500" size={16} />
                  <span>Hugging Face</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="text-green-500" size={16} />
                  <span>+10 More</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Reasoning Frameworks */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">🧠 AI Reasoning Frameworks</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-center space-x-3 mb-3">
                <div className="bg-blue-100 rounded-lg p-2">
                  <Target className="text-blue-600" size={20} />
                </div>
                <h3 className="font-semibold text-gray-900">BrolostackReAcT</h3>
              </div>
              <p className="text-gray-600 text-sm mb-3">
                Reasoning framework that combines thinking with actionable steps for complex problem-solving.
              </p>
              <div className="bg-gray-50 rounded p-3">
                <div className="text-xs font-mono text-gray-700">
                  Reason → Act → Observe → Repeat
                </div>
              </div>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-center space-x-3 mb-3">
                <div className="bg-green-100 rounded-lg p-2">
                  <ArrowRight className="text-green-600" size={20} />
                </div>
                <h3 className="font-semibold text-gray-900">Chain-of-Thought (CoT)</h3>
              </div>
              <p className="text-gray-600 text-sm mb-3">
                Logical step progression for complex reasoning tasks with transparent decision-making.
              </p>
              <div className="bg-gray-50 rounded p-3">
                <div className="text-xs font-mono text-gray-700">
                  Step 1 → Step 2 → Step 3 → Conclusion
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-center space-x-3 mb-3">
                <div className="bg-purple-100 rounded-lg p-2">
                  <Globe className="text-purple-600" size={20} />
                </div>
                <h3 className="font-semibold text-gray-900">Tree-of-Thoughts (ToT)</h3>
              </div>
              <p className="text-gray-600 text-sm mb-3">
                Multiple reasoning paths for comprehensive analysis and exploration of solutions.
              </p>
              <div className="bg-gray-50 rounded p-3">
                <div className="text-xs font-mono text-gray-700">
                  Branch A → Branch B → Branch C
                </div>
              </div>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-center space-x-3 mb-3">
                <div className="bg-orange-100 rounded-lg p-2">
                  <CheckCircle className="text-orange-600" size={20} />
                </div>
                <h3 className="font-semibold text-gray-900">Self-Consistency CoT</h3>
              </div>
              <p className="text-gray-600 text-sm mb-3">
                Multiple attempts for accuracy and reliability through consensus-based reasoning.
              </p>
              <div className="bg-gray-50 rounded p-3">
                <div className="text-xs font-mono text-gray-700">
                  Attempt 1 + Attempt 2 + Attempt 3 = Consensus
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* AI Governance */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">🛡️ AI Governance (BrolostackBSDGF4AI)</h2>
        <div className="mb-6">
          <p className="text-gray-600 mb-4">
            The Beunec Sacred Data Governance Framework for AI provides comprehensive safety modules 
            to ensure responsible AI usage across all applications.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Safety Modules</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <div className="bg-red-100 rounded-lg p-2">
                  <AlertTriangle className="text-red-600" size={16} />
                </div>
                <div>
                  <div className="font-medium text-gray-900">Hallucination Detection</div>
                  <div className="text-sm text-gray-600">Identifies false AI claims and fabricated information</div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="bg-orange-100 rounded-lg p-2">
                  <Lock className="text-orange-600" size={16} />
                </div>
                <div>
                  <div className="font-medium text-gray-900">Jailbreak Prevention</div>
                  <div className="text-sm text-gray-600">Blocks prompt injection attacks and system manipulation</div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="bg-yellow-100 rounded-lg p-2">
                  <Shield className="text-yellow-600" size={16} />
                </div>
                <div>
                  <div className="font-medium text-gray-900">Toxic Language Filter</div>
                  <div className="text-sm text-gray-600">Removes harmful, offensive, or inappropriate content</div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="bg-blue-100 rounded-lg p-2">
                  <Users className="text-blue-600" size={16} />
                </div>
                <div>
                  <div className="font-medium text-gray-900">Bias Detection</div>
                  <div className="text-sm text-gray-600">Identifies unfair responses and discriminatory content</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Additional Modules</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <div className="bg-green-100 rounded-lg p-2">
                  <Eye className="text-green-600" size={16} />
                </div>
                <div>
                  <div className="font-medium text-gray-900">Privacy Protection</div>
                  <div className="text-sm text-gray-600">Detects PII exposure and data leakage</div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="bg-purple-100 rounded-lg p-2">
                  <Database className="text-purple-600" size={16} />
                </div>
                <div>
                  <div className="font-medium text-gray-900">Context Drift</div>
                  <div className="text-sm text-gray-600">Monitors conversation coherence and relevance</div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="bg-indigo-100 rounded-lg p-2">
                  <BarChart className="text-indigo-600" size={16} />
                </div>
                <div>
                  <div className="font-medium text-gray-900">Industry Readiness</div>
                  <div className="text-sm text-gray-600">Domain-specific validation and compliance</div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="bg-pink-100 rounded-lg p-2">
                  <Zap className="text-pink-600" size={16} />
                </div>
                <div>
                  <div className="font-medium text-gray-900">Performance Monitoring</div>
                  <div className="text-sm text-gray-600">Real-time quality and safety metrics</div>
                </div>
              </div>
            </div>
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
const aiFramework = new BrolostackAIFramework({
  provider: {
    name: 'openai',
    apiKey: 'your-api-key',
    model: 'gpt-4'
  },
  tokenUsage: {
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
    }
  }
});`}</pre>
        </div>
      </div>

      {/* Implementation Example */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">🚀 Implementation Example</h2>
        <div className="space-y-4">
          <div className="bg-gray-900 rounded-lg p-4 text-green-400 font-mono text-sm overflow-x-auto">
            <pre>{`import { BrolostackAIFramework, BrolostackBSDGF4AI } from 'brolostack';

// Initialize AI framework with complete governance
const aiFramework = new BrolostackAIFramework({
  provider: {
    name: 'openai',
    apiKey: 'your-api-key',
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

// Process query with AI governance
const result = await aiFramework.processQuery(
  'Analyze user behavior patterns',
  { 
    data: userStore.getState().users,
    context: 'user management analysis'
  }
);

// Access results with safety scores
console.log('AI Response:', result.response);
console.log('Safety Score:', result.governance.safetyScore);
console.log('Token Usage:', result.tokenUsage);
console.log('Reasoning Steps:', result.reasoning);`}</pre>
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
                <td className="border border-gray-200 px-4 py-3 font-medium text-gray-900">AI Requests/sec</td>
                <td className="border border-gray-200 px-4 py-3 text-green-600 font-semibold">1,000</td>
                <td className="border border-gray-200 px-4 py-3 text-gray-600">Maximum concurrent AI requests</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-3 font-medium text-gray-900">Average Latency</td>
                <td className="border border-gray-200 px-4 py-3 text-blue-600 font-semibold">&lt;200ms</td>
                <td className="border border-gray-200 px-4 py-3 text-gray-600">Response time for AI queries</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-3 font-medium text-gray-900">Success Rate</td>
                <td className="border border-gray-200 px-4 py-3 text-green-600 font-semibold">99.5%</td>
                <td className="border border-gray-200 px-4 py-3 text-gray-600">Successful AI operations</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-3 font-medium text-gray-900">Governance Overhead</td>
                <td className="border border-gray-200 px-4 py-3 text-purple-600 font-semibold">&lt;5%</td>
                <td className="border border-gray-200 px-4 py-3 text-gray-600">Additional processing time</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-3 font-medium text-gray-900">Memory Usage</td>
                <td className="border border-gray-200 px-4 py-3 text-orange-600 font-semibold">50MB</td>
                <td className="border border-gray-200 px-4 py-3 text-gray-600">Framework memory footprint</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Next Steps */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl p-8 text-white">
        <h2 className="text-2xl font-bold mb-4">🚀 Ready to Integrate AI?</h2>
        <p className="text-purple-100 mb-6">
          Explore advanced AI features, security implementations, and real-world examples to build 
          intelligent applications with Brolostack.
        </p>
        <div className="flex flex-wrap gap-4">
          <a 
            href="/docs/ai-framework-guide" 
            className="inline-flex items-center px-6 py-3 bg-white/20 hover:bg-white/30 rounded-lg transition-colors"
          >
            <Code className="mr-2" size={20} />
            Implementation Guide
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

export default AIFrameworkPage;

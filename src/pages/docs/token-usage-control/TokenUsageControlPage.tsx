import React from 'react';
import { motion } from 'framer-motion';
import { 
  Key, 
  BarChart, 
  Shield, 
  ArrowRight, 
  Code, 
  Eye,
  Activity,
  TrendingUp,
  DollarSign
} from 'lucide-react';

const TokenUsageControlPage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="space-y-8"
    >
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-8 text-white">
        <div className="max-w-4xl">
          <h1 className="text-4xl font-bold mb-4">
            Token Usage Control
          </h1>
          <p className="text-xl text-emerald-100 mb-6">
            Advanced token usage monitoring and control system. Track, limit, and optimize 
            AI token consumption with real-time analytics, cost management, and usage optimization.
          </p>
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center space-x-2 bg-white/20 rounded-lg px-4 py-2">
              <Key size={20} />
              <span className="font-medium">Usage Monitoring</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/20 rounded-lg px-4 py-2">
              <BarChart size={20} />
              <span className="font-medium">Cost Analytics</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/20 rounded-lg px-4 py-2">
              <Shield size={20} />
              <span className="font-medium">Usage Limits</span>
            </div>
          </div>
        </div>
      </div>

      {/* Key Features */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">🔑 Key Features</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="bg-emerald-100 rounded-lg p-2">
                <Eye className="text-emerald-600" size={20} />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Real-time Monitoring</h3>
                <p className="text-gray-600 text-sm">Live token usage tracking with detailed analytics and insights.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="bg-blue-100 rounded-lg p-2">
                <BarChart className="text-blue-600" size={20} />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Cost Analytics</h3>
                <p className="text-gray-600 text-sm">Detailed cost breakdown and optimization recommendations.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="bg-purple-100 rounded-lg p-2">
                <Shield className="text-purple-600" size={20} />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Usage Limits</h3>
                <p className="text-gray-600 text-sm">Configurable limits and alerts to prevent over-usage.</p>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="bg-orange-100 rounded-lg p-2">
                <TrendingUp className="text-orange-600" size={20} />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Usage Optimization</h3>
                <p className="text-gray-600 text-sm">AI-powered recommendations to reduce token consumption.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="bg-red-100 rounded-lg p-2">
                <DollarSign className="text-red-600" size={20} />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Budget Management</h3>
                <p className="text-gray-600 text-sm">Set budgets and receive alerts when approaching limits.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="bg-teal-100 rounded-lg p-2">
                <Activity className="text-teal-600" size={20} />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Usage Patterns</h3>
                <p className="text-gray-600 text-sm">Analyze usage patterns and identify optimization opportunities.</p>
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
          <div className="border-l-4 border-emerald-500 pl-6">
            <div className="flex items-center mb-3">
              <div className="bg-emerald-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Initialize Token Usage Control</h3>
            </div>
            <div className="bg-gray-900 rounded-lg p-4 text-green-400 font-mono text-sm overflow-x-auto">
              <pre>{`import { BrolostackTokenUsageControl } from 'brolostack';

// Initialize token usage control
const tokenControl = new BrolostackTokenUsageControl({
  providers: [
    {
      name: 'openai',
      config: {
        apiKey: process.env.OPENAI_API_KEY,
        model: 'gpt-4',
        costPerToken: {
          input: 0.00003,
          output: 0.00006
        }
      }
    }
  ],
  limits: {
    daily: 100000,
    monthly: 2000000,
    perRequest: 4000
  },
  alerts: {
    enabled: true,
    thresholds: [50, 75, 90, 95],
    channels: ['email', 'webhook', 'dashboard']
  }
});

await tokenControl.initialize();`}</pre>
            </div>
          </div>

          {/* Step 2 */}
          <div className="border-l-4 border-teal-500 pl-6">
            <div className="flex items-center mb-3">
              <div className="bg-teal-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Track Token Usage</h3>
            </div>
            <div className="bg-gray-900 rounded-lg p-4 text-green-400 font-mono text-sm overflow-x-auto">
              <pre>{`// Track token usage for AI requests
const trackUsage = async (request) => {
  const usage = await tokenControl.trackUsage({
    provider: 'openai',
    model: 'gpt-4',
    inputTokens: request.inputTokens,
    outputTokens: request.outputTokens,
    userId: request.userId,
    sessionId: request.sessionId,
    cost: request.cost
  });
  
  return usage;
};

// React hook for token usage
const useTokenUsage = () => {
  const [usage, setUsage] = useState(null);
  const [limits, setLimits] = useState(null);
  
  useEffect(() => {
    const fetchUsage = async () => {
      const currentUsage = await tokenControl.getCurrentUsage();
      const currentLimits = await tokenControl.getLimits();
      
      setUsage(currentUsage);
      setLimits(currentLimits);
    };
    
    fetchUsage();
  }, []);
  
  return { usage, limits };
};`}</pre>
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
                <td className="border border-gray-200 px-4 py-3 font-medium text-gray-900">Token Tracking Accuracy</td>
                <td className="border border-gray-200 px-4 py-3 text-green-600 font-semibold">99.9%</td>
                <td className="border border-gray-200 px-4 py-3 text-gray-600">Accuracy of token usage tracking</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-3 font-medium text-gray-900">Cost Optimization</td>
                <td className="border border-gray-200 px-4 py-3 text-blue-600 font-semibold">35%</td>
                <td className="border border-gray-200 px-4 py-3 text-gray-600">Average cost reduction through optimization</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-3 font-medium text-gray-900">Alert Response Time</td>
                <td className="border border-gray-200 px-4 py-3 text-purple-600 font-semibold">&lt;1s</td>
                <td className="border border-gray-200 px-4 py-3 text-gray-600">Time to trigger usage alerts</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Next Steps */}
      <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl p-8 text-white">
        <h2 className="text-2xl font-bold mb-4">🔑 Ready to Control Your Token Usage?</h2>
        <p className="text-emerald-100 mb-6">
          Explore advanced token usage features, optimization strategies, and implementation guides 
          to build cost-effective AI applications with Brolostack Token Usage Control.
        </p>
        <div className="flex flex-wrap gap-4">
          <a 
            href="/docs/token-usage-control-guide" 
            className="inline-flex items-center px-6 py-3 bg-white/20 hover:bg-white/30 rounded-lg transition-colors"
          >
            <Code className="mr-2" size={20} />
            Implementation Guide
            <ArrowRight className="ml-2" size={16} />
          </a>
          <a 
            href="/docs/ai-framework" 
            className="inline-flex items-center px-6 py-3 bg-white/20 hover:bg-white/30 rounded-lg transition-colors"
          >
            <Key className="mr-2" size={20} />
            AI Framework
            <ArrowRight className="ml-2" size={16} />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default TokenUsageControlPage;
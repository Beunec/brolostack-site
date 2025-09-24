import React from 'react';
import { motion } from 'framer-motion';
import { 
  Key, 
  BarChart, 
  Shield, 
  ArrowRight, 
  CheckCircle
} from 'lucide-react';

const TokenUsageControlGuidePage: React.FC = () => {
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
            Token Usage Control Guide Template
          </h1>
          <p className="text-xl text-emerald-100 mb-6">
            Step-by-step implementation guide for token usage control. Learn how to monitor, 
            optimize, and manage AI token consumption with real-world examples and best practices.
          </p>
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center space-x-2 bg-white/20 rounded-lg px-4 py-2">
              <Key size={20} />
              <span className="font-medium">Cost Optimization</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/20 rounded-lg px-4 py-2">
              <BarChart size={20} />
              <span className="font-medium">Usage Analytics</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/20 rounded-lg px-4 py-2">
              <Shield size={20} />
              <span className="font-medium">Budget Management</span>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Start Examples */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">🚀 Quick Start Examples</h2>
        
        <div className="space-y-6">
          {/* Example 1 */}
          <div className="border-l-4 border-emerald-500 pl-6">
            <div className="flex items-center mb-3">
              <div className="bg-emerald-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Basic Token Tracking</h3>
            </div>
            <div className="bg-gray-900 rounded-lg p-4 text-green-400 font-mono text-sm overflow-x-auto">
              <pre>{`// Basic token usage tracking
import { BrolostackTokenUsageControl } from 'brolostack';

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
    daily: 10000,
    monthly: 200000
  }
});

// Track a simple AI request
const trackSimpleRequest = async (prompt, response) => {
  const usage = await tokenControl.trackUsage({
    provider: 'openai',
    model: 'gpt-4',
    inputTokens: prompt.length / 4, // Rough estimation
    outputTokens: response.length / 4,
    cost: (prompt.length / 4) * 0.00003 + (response.length / 4) * 0.00006
  });
  
  console.log('Token usage tracked:', usage);
  return usage;
};

// Usage in a simple chat application
const handleChatMessage = async (message) => {
  const response = await openai.chat.completions.create({
    model: 'gpt-4',
    messages: [{ role: 'user', content: message }]
  });
  
  // Track the usage
  await trackSimpleRequest(message, response.choices[0].message.content);
  
  return response.choices[0].message.content;
};`}</pre>
            </div>
          </div>

          {/* Example 2 */}
          <div className="border-l-4 border-teal-500 pl-6">
            <div className="flex items-center mb-3">
              <div className="bg-teal-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Budget Management System</h3>
            </div>
            <div className="bg-gray-900 rounded-lg p-4 text-green-400 font-mono text-sm overflow-x-auto">
              <pre>{`// Budget management with alerts
class BudgetManager {
  constructor(tokenControl) {
    this.tokenControl = tokenControl;
    this.budgets = new Map();
    this.alerts = [];
  }
  
  // Set budget for a user or project
  async setBudget(userId, budget) {
    this.budgets.set(userId, {
      daily: budget.daily,
      monthly: budget.monthly,
      spent: {
        daily: 0,
        monthly: 0
      },
      lastReset: {
        daily: new Date(),
        monthly: new Date()
      }
    });
    
    // Set up monitoring
    await this.setupBudgetMonitoring(userId);
  }
  
  // Check budget before processing request
  async checkBudget(userId, estimatedCost) {
    const budget = this.budgets.get(userId);
    if (!budget) return true;
    
    // Reset daily budget if needed
    if (this.isNewDay(budget.lastReset.daily)) {
      budget.spent.daily = 0;
      budget.lastReset.daily = new Date();
    }
    
    // Reset monthly budget if needed
    if (this.isNewMonth(budget.lastReset.monthly)) {
      budget.spent.monthly = 0;
      budget.lastReset.monthly = new Date();
    }
    
    // Check if request would exceed budget
    if (budget.spent.daily + estimatedCost > budget.daily) {
      await this.sendAlert(userId, 'daily-budget-exceeded', {
        spent: budget.spent.daily,
        limit: budget.daily,
        estimated: estimatedCost
      });
      return false;
    }
    
    if (budget.spent.monthly + estimatedCost > budget.monthly) {
      await this.sendAlert(userId, 'monthly-budget-exceeded', {
        spent: budget.spent.monthly,
        limit: budget.monthly,
        estimated: estimatedCost
      });
      return false;
    }
    
    return true;
  }
  
  // Update spending after request
  async updateSpending(userId, actualCost) {
    const budget = this.budgets.get(userId);
    if (budget) {
      budget.spent.daily += actualCost;
      budget.spent.monthly += actualCost;
      
      // Check for threshold alerts
      await this.checkThresholds(userId, budget);
    }
  }
  
  // Check budget thresholds
  async checkThresholds(userId, budget) {
    const dailyPercent = (budget.spent.daily / budget.daily) * 100;
    const monthlyPercent = (budget.spent.monthly / budget.monthly) * 100;
    
    // Daily threshold alerts
    if (dailyPercent >= 90 && !budget.alerts?.daily90) {
      await this.sendAlert(userId, 'daily-90-percent', { percent: dailyPercent });
      budget.alerts = { ...budget.alerts, daily90: true };
    }
    
    if (dailyPercent >= 75 && !budget.alerts?.daily75) {
      await this.sendAlert(userId, 'daily-75-percent', { percent: dailyPercent });
      budget.alerts = { ...budget.alerts, daily75: true };
    }
    
    // Monthly threshold alerts
    if (monthlyPercent >= 90 && !budget.alerts?.monthly90) {
      await this.sendAlert(userId, 'monthly-90-percent', { percent: monthlyPercent });
      budget.alerts = { ...budget.alerts, monthly90: true };
    }
  }
  
  // Send alert
  async sendAlert(userId, type, data) {
    const alert = {
      id: Date.now(),
      userId,
      type,
      data,
      timestamp: new Date()
    };
    
    this.alerts.push(alert);
    
    // Send to notification system
    await this.notifyUser(userId, alert);
  }
  
  // Notify user (implement based on your notification system)
  async notifyUser(userId, alert) {
    console.log(\`Alert for user \${userId}:\`, alert);
    // Implement email, push notification, etc.
  }
  
  // Helper methods
  isNewDay(lastReset) {
    const now = new Date();
    const last = new Date(lastReset);
    return now.getDate() !== last.getDate() || 
           now.getMonth() !== last.getMonth() || 
           now.getFullYear() !== last.getFullYear();
  }
  
  isNewMonth(lastReset) {
    const now = new Date();
    const last = new Date(lastReset);
    return now.getMonth() !== last.getMonth() || 
           now.getFullYear() !== last.getFullYear();
  }
}

// Usage example
const budgetManager = new BudgetManager(tokenControl);

// Set budget for a user
await budgetManager.setBudget('user-123', {
  daily: 100, // $100 per day
  monthly: 2000 // $2000 per month
});

// Check budget before processing request
const canProcess = await budgetManager.checkBudget('user-123', 5.50);
if (canProcess) {
  // Process the request
  const result = await processAIRequest(request);
  // Update spending
  await budgetManager.updateSpending('user-123', result.cost);
} else {
  throw new Error('Budget exceeded');
}`}</pre>
            </div>
          </div>

          {/* Example 3 */}
          <div className="border-l-4 border-blue-500 pl-6">
            <div className="flex items-center mb-3">
              <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Token Optimization Strategies</h3>
            </div>
            <div className="bg-gray-900 rounded-lg p-4 text-green-400 font-mono text-sm overflow-x-auto">
              <pre>{`// Advanced token optimization
class TokenOptimizer {
  constructor(tokenControl) {
    this.tokenControl = tokenControl;
    this.cache = new Map();
    this.optimizationStrategies = {
      promptCompression: true,
      modelSelection: true,
      responseCaching: true,
      batchProcessing: true
    };
  }
  
  // Optimize prompt to reduce token usage
  async optimizePrompt(originalPrompt, targetReduction = 0.3) {
    const strategies = [
      this.removeRedundancy,
      this.useShorterSynonyms,
      this.compressStructure,
      this.removeUnnecessaryWords
    ];
    
    let optimizedPrompt = originalPrompt;
    let reduction = 0;
    
    for (const strategy of strategies) {
      const result = await strategy(optimizedPrompt);
      if (result.reduction > 0) {
        optimizedPrompt = result.prompt;
        reduction += result.reduction;
        
        if (reduction >= targetReduction) break;
      }
    }
    
    return {
      original: originalPrompt,
      optimized: optimizedPrompt,
      reduction: reduction,
      tokensSaved: Math.floor(originalPrompt.length / 4 * reduction)
    };
  }
  
  // Remove redundant words and phrases
  async removeRedundancy(prompt) {
    const redundantPatterns = [
      /\\b(please|kindly|would you|could you)\\b/gi,
      /\\b(very|really|quite|rather|somewhat)\\b/gi,
      /\\b(in order to|so as to|for the purpose of)\\b/gi,
      /\\b(due to the fact that|because of the fact that)\\b/gi
    ];
    
    let optimized = prompt;
    let reduction = 0;
    
    for (const pattern of redundantPatterns) {
      const matches = optimized.match(pattern);
      if (matches) {
        optimized = optimized.replace(pattern, '');
        reduction += matches.length * 0.1; // Estimate 10% reduction per match
      }
    }
    
    return { prompt: optimized.trim(), reduction };
  }
  
  // Use shorter synonyms
  async useShorterSynonyms(prompt) {
    const synonyms = {
      'utilize': 'use',
      'implement': 'do',
      'facilitate': 'help',
      'demonstrate': 'show',
      'comprehensive': 'full',
      'approximately': 'about',
      'subsequently': 'then',
      'consequently': 'so',
      'nevertheless': 'but',
      'furthermore': 'also'
    };
    
    let optimized = prompt;
    let reduction = 0;
    
    for (const [long, short] of Object.entries(synonyms)) {
      const regex = new RegExp(\`\\\\b\${long}\\\\b\`, 'gi');
      const matches = optimized.match(regex);
      if (matches) {
        optimized = optimized.replace(regex, short);
        reduction += matches.length * (long.length - short.length) / 4; // Token difference
      }
    }
    
    return { prompt: optimized, reduction };
  }
  
  // Compress structure
  async compressStructure(prompt) {
    // Remove unnecessary whitespace
    let optimized = prompt.replace(/\\s+/g, ' ').trim();
    
    // Convert long sentences to shorter ones
    const sentences = optimized.split(/[.!?]+/);
    const compressed = sentences.map(sentence => {
      if (sentence.length > 100) {
        // Split long sentences
        return sentence.split(',').map(part => part.trim()).join(', ');
      }
      return sentence;
    });
    
    optimized = compressed.join('. ').trim();
    
    return { prompt: optimized, reduction: 0.1 };
  }
  
  // Remove unnecessary words
  async removeUnnecessaryWords(prompt) {
    const unnecessaryWords = [
      'the', 'a', 'an', 'and', 'or', 'but', 'in', 'on', 'at', 'to', 'for',
      'of', 'with', 'by', 'from', 'up', 'about', 'into', 'through', 'during'
    ];
    
    let optimized = prompt;
    let reduction = 0;
    
    // Only remove articles and common prepositions in specific contexts
    const patterns = [
      /\\bthe\\s+(?=\\w+\\s+is)/gi, // "the" before "is"
      /\\ba\\s+(?=\\w+\\s+is)/gi,   // "a" before "is"
      /\\ban\\s+(?=\\w+\\s+is)/gi   // "an" before "is"
    ];
    
    for (const pattern of patterns) {
      const matches = optimized.match(pattern);
      if (matches) {
        optimized = optimized.replace(pattern, '');
        reduction += matches.length * 0.05;
      }
    }
    
    return { prompt: optimized.trim(), reduction };
  }
  
  // Select optimal model based on task complexity
  async selectOptimalModel(task, quality = 'high', costPreference = 'balanced') {
    const models = {
      'gpt-4': { cost: 1.0, quality: 1.0, speed: 0.7 },
      'gpt-3.5-turbo': { cost: 0.1, quality: 0.8, speed: 1.0 },
      'claude-3-opus': { cost: 0.8, quality: 1.0, speed: 0.6 },
      'claude-3-sonnet': { cost: 0.3, quality: 0.9, speed: 0.8 }
    };
    
    // Analyze task complexity
    const complexity = this.analyzeTaskComplexity(task);
    
    // Score models based on requirements
    const scores = Object.entries(models).map(([name, specs]) => {
      let score = 0;
      
      // Quality score
      if (quality === 'high') score += specs.quality * 0.4;
      else if (quality === 'medium') score += specs.quality * 0.3;
      else score += specs.quality * 0.2;
      
      // Cost score (inverted - lower cost is better)
      if (costPreference === 'low') score += (1 - specs.cost) * 0.4;
      else if (costPreference === 'balanced') score += (1 - specs.cost) * 0.2;
      else score += (1 - specs.cost) * 0.1;
      
      // Speed score
      score += specs.speed * 0.2;
      
      // Complexity adjustment
      if (complexity === 'high' && specs.quality > 0.9) score += 0.2;
      else if (complexity === 'low' && specs.cost < 0.5) score += 0.2;
      
      return { name, score, specs };
    });
    
    // Sort by score and return best model
    scores.sort((a, b) => b.score - a.score);
    return scores[0];
  }
  
  // Analyze task complexity
  analyzeTaskComplexity(task) {
    const complexityIndicators = {
      high: ['analyze', 'complex', 'detailed', 'comprehensive', 'research', 'creative'],
      medium: ['explain', 'describe', 'summarize', 'translate', 'classify'],
      low: ['simple', 'basic', 'quick', 'short', 'yes/no', 'list']
    };
    
    const taskLower = task.toLowerCase();
    
    for (const [level, indicators] of Object.entries(complexityIndicators)) {
      if (indicators.some(indicator => taskLower.includes(indicator))) {
        return level;
      }
    }
    
    return 'medium'; // Default
  }
  
  // Cache responses to avoid duplicate requests
  async getCachedResponse(prompt, model) {
    const cacheKey = this.generateCacheKey(prompt, model);
    return this.cache.get(cacheKey);
  }
  
  async cacheResponse(prompt, model, response) {
    const cacheKey = this.generateCacheKey(prompt, model);
    this.cache.set(cacheKey, {
      response,
      timestamp: Date.now(),
      tokensUsed: response.tokensUsed || 0
    });
  }
  
  generateCacheKey(prompt, model) {
    // Simple hash function for cache key
    const str = prompt + model;
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      const char = str.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash; // Convert to 32-bit integer
    }
    return hash.toString();
  }
}

// Usage example
const optimizer = new TokenOptimizer(tokenControl);

// Optimize a prompt
const optimization = await optimizer.optimizePrompt(
  "Please kindly provide a comprehensive analysis of the data in order to demonstrate the key findings",
  0.3 // 30% reduction target
);

console.log('Original tokens:', optimization.original.length / 4);
console.log('Optimized tokens:', optimization.optimized.length / 4);
console.log('Tokens saved:', optimization.tokensSaved);

// Select optimal model
const modelSelection = await optimizer.selectOptimalModel(
  "Analyze this complex dataset and provide insights",
  'high',
  'balanced'
);

console.log('Recommended model:', modelSelection.name);
console.log('Score:', modelSelection.score);`}</pre>
            </div>
          </div>
        </div>
      </div>

      {/* Real-world Use Cases */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">🎯 Real-world Use Cases</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">E-commerce Chatbot</h3>
              <p className="text-gray-600 text-sm mb-3">
                Customer support chatbot with token usage limits and cost optimization.
              </p>
              <div className="bg-gray-50 rounded p-3">
                <div className="text-xs font-mono text-gray-700">
                  Daily limit: $50 | Monthly limit: $1000 | Optimization: 40% cost reduction
                </div>
              </div>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Content Generation API</h3>
              <p className="text-gray-600 text-sm mb-3">
                API service for content generation with usage-based pricing.
              </p>
              <div className="bg-gray-50 rounded p-3">
                <div className="text-xs font-mono text-gray-700">
                  Per-request limits | User quotas | Automatic model selection
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Research Assistant</h3>
              <p className="text-gray-600 text-sm mb-3">
                AI research tool with budget management for academic projects.
              </p>
              <div className="bg-gray-50 rounded p-3">
                <div className="text-xs font-mono text-gray-700">
                  Project budgets | Grant tracking | Usage reporting
                </div>
              </div>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Code Review Assistant</h3>
              <p className="text-gray-600 text-sm mb-3">
                Automated code review with token optimization for development teams.
              </p>
              <div className="bg-gray-50 rounded p-3">
                <div className="text-xs font-mono text-gray-700">
                  Team quotas | Code caching | Batch processing
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Best Practices */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">💡 Best Practices</h2>
        
        <div className="space-y-4">
          <div className="flex items-start space-x-3">
            <div className="bg-green-100 rounded-lg p-2">
              <CheckCircle className="text-green-600" size={20} />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Set Realistic Budgets</h3>
              <p className="text-gray-600 text-sm">Start with conservative limits and adjust based on actual usage patterns.</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <div className="bg-blue-100 rounded-lg p-2">
              <CheckCircle className="text-blue-600" size={20} />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Monitor Usage Patterns</h3>
              <p className="text-gray-600 text-sm">Track usage trends to identify optimization opportunities and predict costs.</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <div className="bg-purple-100 rounded-lg p-2">
              <CheckCircle className="text-purple-600" size={20} />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Implement Caching</h3>
              <p className="text-gray-600 text-sm">Cache responses for similar requests to reduce token usage and costs.</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <div className="bg-orange-100 rounded-lg p-2">
              <CheckCircle className="text-orange-600" size={20} />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Use Appropriate Models</h3>
              <p className="text-gray-600 text-sm">Select models based on task complexity to balance cost and quality.</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <div className="bg-red-100 rounded-lg p-2">
              <CheckCircle className="text-red-600" size={20} />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Optimize Prompts</h3>
              <p className="text-gray-600 text-sm">Use prompt optimization techniques to reduce token usage while maintaining quality.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Next Steps */}
      <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl p-8 text-white">
        <h2 className="text-2xl font-bold mb-4">🔑 Ready to Implement Token Usage Control?</h2>
        <p className="text-emerald-100 mb-6">
          Explore advanced token management features, optimization strategies, and real-world examples 
          to build cost-effective AI applications with Brolostack Token Usage Control.
        </p>
        <div className="flex flex-wrap gap-4">
          <a 
            href="/docs/token-usage-control" 
            className="inline-flex items-center px-6 py-3 bg-white/20 hover:bg-white/30 rounded-lg transition-colors"
          >
            <Key className="mr-2" size={20} />
            Token Usage Control
            <ArrowRight className="ml-2" size={16} />
          </a>
          <a 
            href="/docs/ai-framework" 
            className="inline-flex items-center px-6 py-3 bg-white/20 hover:bg-white/30 rounded-lg transition-colors"
          >
            <BarChart className="mr-2" size={20} />
            AI Framework
            <ArrowRight className="ml-2" size={16} />
          </a>
          <a 
            href="/docs/enterprise-features" 
            className="inline-flex items-center px-6 py-3 bg-white/20 hover:bg-white/30 rounded-lg transition-colors"
          >
            <Shield className="mr-2" size={20} />
            Enterprise Features
            <ArrowRight className="ml-2" size={16} />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default TokenUsageControlGuidePage;

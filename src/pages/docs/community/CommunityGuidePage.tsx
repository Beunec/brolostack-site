import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  MessageCircle, 
  Github, 
  Globe, 
  CheckCircle, 
  Copy,
  ExternalLink,
  Heart,
  Award,
  Code
} from 'lucide-react';

const CommunityGuidePage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('getting-started');
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const copyToClipboard = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const communitySetupExample = `// Join the Beunec Community
import { BrolostackCommunity } from 'brolostack';

const community = new BrolostackCommunity({
  platform: 'discord',
  channels: {
    general: 'general-discussion',
    support: 'technical-support',
    showcase: 'project-showcase',
    announcements: 'announcements'
  }
});

// Community features
const features = {
  discord: {
    server: 'https://discord.gg/brolostack',
    roles: ['developer', 'contributor', 'supporter'],
    channels: [
      '#general',
      '#support',
      '#showcase',
      '#announcements'
    ]
  },
  github: {
    organization: 'beunec',
    repositories: [
      'brolostack',
      'brolostack-examples',
      'brolostack-docs'
    ]
  },
  social: {
    linkedin: 'https://www.linkedin.com/company/beunecofficial/',
    youtube: 'https://www.youtube.com/@beunec',
    twitter: 'https://x.com/beunecofficial',
    instagram: 'https://www.instagram.com/beunec_',
    website: 'https://www.brolostack.com'
  }
};

// Join community
async function joinCommunity() {
  try {
    const membership = await community.join({
      username: 'your-username',
      interests: ['web-development', 'ai', 'security'],
      experience: 'intermediate'
    });
    
    console.log('Welcome to the community!', membership);
    return membership;
  } catch (error) {
    console.error('Failed to join community:', error);
  }
}`;

  const contributionExample = `// Contributing to Brolostack
import { BrolostackContributor } from 'brolostack';

const contributor = new BrolostackContributor({
  github: {
    username: 'your-github-username',
    token: process.env.GITHUB_TOKEN
  },
  preferences: {
    areas: ['documentation', 'examples', 'testing'],
    difficulty: 'beginner-friendly'
  }
});

// Contribution workflow
class ContributionWorkflow {
  constructor(contributor) {
    this.contributor = contributor;
  }

  async contributeToDocs() {
    try {
      // Fork repository
      const fork = await this.contributor.fork('brolostack/docs');
      
      // Create feature branch
      const branch = await this.contributor.createBranch(fork, 'docs-update');
      
      // Make changes
      const changes = await this.contributor.makeChanges({
        files: ['getting-started.md'],
        type: 'documentation'
      });
      
      // Create pull request
      const pr = await this.contributor.createPullRequest({
        title: 'Update getting started documentation',
        description: 'Improved examples and clarity',
        branch: branch.name,
        base: 'main'
      });
      
      return pr;
    } catch (error) {
      throw new Error(\`Contribution failed: \${error.message}\`);
    }
  }

  async contributeExamples() {
    try {
      const example = await this.contributor.createExample({
        name: 'todo-app',
        description: 'Simple todo application',
        category: 'getting-started',
        files: [
          {
            name: 'index.html',
            content: '<!DOCTYPE html>...'
          },
          {
            name: 'app.js',
            content: 'import { Brolostack } from...'
          }
        ]
      });
      
      return example;
    } catch (error) {
      throw new Error(\`Example creation failed: \${error.message}\`);
    }
  }
}

const workflow = new ContributionWorkflow(contributor);`;

  const supportExample = `// Community Support System
import { BrolostackSupport } from 'brolostack';

const support = new BrolostackSupport({
  channels: {
    github: 'https://github.com/Beunec/brolostack/issues',
    discussions: 'https://github.com/Beunec/brolostack/discussions',
    email: 'support@beunec.com'
  },
  responseTime: {
    critical: '1 hour',
    high: '4 hours',
    medium: '24 hours',
    low: '72 hours'
  }
});

// Support request workflow
class SupportWorkflow {
  constructor(support) {
    this.support = support;
  }

  async requestSupport(issue) {
    try {
      const ticket = await this.support.createTicket({
        title: issue.title,
        description: issue.description,
        priority: this.determinePriority(issue),
        category: issue.category,
        environment: {
          browser: navigator.userAgent,
          version: issue.version || 'latest',
          os: navigator.platform
        }
      });
      
      // Auto-assign to appropriate channel
      await this.support.routeTicket(ticket);
      
      return ticket;
    } catch (error) {
      throw new Error(\`Support request failed: \${error.message}\`);
    }
  }

  async getCommunityHelp(question) {
    try {
      const response = await this.support.searchCommunity({
        query: question,
        sources: ['discord', 'github', 'docs']
      });
      
      if (response.results.length > 0) {
        return {
          found: true,
          results: response.results,
          source: 'community'
        };
      }
      
      // Post new question if no results
      const post = await this.support.postQuestion({
        question,
        tags: this.extractTags(question),
        channel: 'technical-support'
      });
      
      return {
        found: false,
        post,
        source: 'new-question'
      };
    } catch (error) {
      throw new Error(\`Community help failed: \${error.message}\`);
    }
  }

  determinePriority(issue) {
    if (issue.severity === 'critical') return 'critical';
    if (issue.blocks === true) return 'high';
    if (issue.category === 'bug') return 'medium';
    return 'low';
  }

  extractTags(question) {
    const tags = [];
    if (question.includes('authentication')) tags.push('auth');
    if (question.includes('database')) tags.push('database');
    if (question.includes('error')) tags.push('error');
    if (question.includes('performance')) tags.push('performance');
    return tags;
  }
}

const supportWorkflow = new SupportWorkflow(support);`;

  const showcaseExample = `// Community Showcase
import { BrolostackShowcase } from 'brolostack';

const showcase = new BrolostackShowcase({
  platform: 'community',
  categories: [
    'web-applications',
    'mobile-apps',
    'desktop-apps',
    'apis',
    'libraries'
  ]
});

// Project showcase workflow
class ProjectShowcase {
  constructor(showcase) {
    this.showcase = showcase;
  }

  async submitProject(project) {
    try {
      const submission = await this.showcase.createSubmission({
        name: project.name,
        description: project.description,
        category: project.category,
        technologies: project.technologies,
        repository: project.repository,
        demo: project.demo,
        screenshots: project.screenshots,
        features: project.features
      });
      
      // Community review process
      const review = await this.showcase.submitForReview(submission);
      
      return review;
    } catch (error) {
      throw new Error(\`Project submission failed: \${error.message}\`);
    }
  }

  async browseProjects(filters = {}) {
    try {
      const projects = await this.showcase.browse({
        category: filters.category,
        technology: filters.technology,
        featured: filters.featured,
        sort: filters.sort || 'newest'
      });
      
      return projects;
    } catch (error) {
      throw new Error(\`Project browsing failed: \${error.message}\`);
    }
  }

  async voteForProject(projectId, vote) {
    try {
      const result = await this.showcase.vote({
        projectId,
        vote: vote === 'up' ? 1 : -1,
        userId: this.getCurrentUserId()
      });
      
      return result;
    } catch (error) {
      throw new Error(\`Voting failed: \${error.message}\`);
    }
  }

  getCurrentUserId() {
    // Implementation for getting current user ID
    return localStorage.getItem('userId');
  }
}

const projectShowcase = new ProjectShowcase(showcase);`;

  const tabs = [
    { id: 'getting-started', label: 'Getting Started', icon: Users },
    { id: 'contribution', label: 'Contributing', icon: Code },
    { id: 'support', label: 'Support', icon: MessageCircle },
    { id: 'showcase', label: 'Showcase', icon: Award }
  ];

  const getCodeExample = (tabId: string) => {
    switch (tabId) {
      case 'getting-started': return communitySetupExample;
      case 'contribution': return contributionExample;
      case 'support': return supportExample;
      case 'showcase': return showcaseExample;
      default: return communitySetupExample;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-pink-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-pink-100 rounded-full mb-6">
            <Users className="w-8 h-8 text-pink-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Beunec Community Guide
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join the vibrant Brolostack community, contribute to the project, 
            get support, and showcase your amazing creations
          </p>
        </motion.div>

        {/* Community Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 text-center">
            <Users className="w-8 h-8 text-blue-600 mx-auto mb-4" />
            <div className="text-2xl font-bold text-gray-900">1,000+</div>
            <div className="text-sm text-gray-600">Community Members</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 text-center">
            <Github className="w-8 h-8 text-green-600 mx-auto mb-4" />
            <div className="text-2xl font-bold text-gray-900">v1.0.2</div>
            <div className="text-sm text-gray-600">Current Version</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 text-center">
            <MessageCircle className="w-8 h-8 text-purple-600 mx-auto mb-4" />
            <div className="text-2xl font-bold text-gray-900">250+</div>
            <div className="text-sm text-gray-600">Total Downloads</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 text-center">
            <Award className="w-8 h-8 text-orange-600 mx-auto mb-4" />
            <div className="text-2xl font-bold text-gray-900">5+</div>
            <div className="text-sm text-gray-600">Showcased Projects</div>
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
                      ? 'text-pink-600 border-b-2 border-pink-600 bg-pink-50'
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

        {/* Community Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-12"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Join Our Community
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <MessageCircle className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-3">Discord Server</h3>
              <p className="text-gray-600 text-sm mb-4">
                Join our Discord community for real-time discussions, support, and collaboration.
              </p>
              <a 
                href="https://discord.gg/brolostack" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
              >
                Join Discord <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Github className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-3">GitHub Organization</h3>
              <p className="text-gray-600 text-sm mb-4">
                Contribute to Brolostack development, report issues, and submit pull requests.
              </p>
              <a 
                href="https://github.com/beunec" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-green-600 hover:text-green-700 font-medium"
              >
                View GitHub <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-3">Official Website</h3>
              <p className="text-gray-600 text-sm mb-4">
                Visit our official website for news, updates, and company information.
              </p>
              <a 
                href="https://www.beunec.co" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium"
              >
                Visit Website <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-12 text-center"
        >
          <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl p-8 border border-pink-200">
            <div className="flex items-center justify-center mb-6">
              <Heart className="w-8 h-8 text-pink-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">Ready to Join?</h2>
            </div>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Be part of the growing Brolostack community. Share your projects, 
              get help, and contribute to the future of local-first development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://discord.gg/brolostack"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-colors font-medium"
              >
                Join Discord
              </a>
              <a 
                href="https://github.com/beunec/brolostack"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
              >
                Contribute on GitHub
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CommunityGuidePage;

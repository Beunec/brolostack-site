import React, { useState } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
// Optimized icon imports - only load what we need
import { 
  ChevronDown, 
  ChevronRight, 
  Menu, 
  X, 
  BookOpen,
  Zap,
  Brain,
  Shield,
  Wifi,
  Cloud,
  Code,
  Users,
  Wrench,
  Building,
  BarChart,
  Search,
  Home,
  ArrowRight
} from 'lucide-react';

// Import page components directly - simplified for Vercel deployment
import GettingStartedPage from './docs/pages/getting-started/GettingStartedPage';
import GettingStartedGuidePage from './docs/pages/getting-started/GettingStartedGuidePage';
import AIFrameworkPage from './docs/pages/ai-framework/AIFrameworkPage';
import AIFrameworkGuidePage from './docs/pages/ai-framework/AIFrameworkGuidePage';
import SecurityFrameworkPage from './docs/pages/security-framework/SecurityFrameworkPage';
import SecurityFrameworkGuidePage from './docs/pages/security-framework/SecurityFrameworkGuidePage';
import DevilSecurityPage from './docs/pages/security-framework/DevilSecurityPage';
import CloudIntegrationPage from './docs/pages/cloud-integration/CloudIntegrationPage';
import BrolostackWorkerPage from './docs/pages/brolostack-worker/BrolostackWorkerPage';
import BrolostackWorkerGuidePage from './docs/pages/brolostack-worker/BrolostackWorkerGuidePage';
import WebSocketFrameworkPage from './docs/pages/websocket-framework/WebSocketFrameworkPage';
import WebSocketFrameworkGuidePage from './docs/pages/websocket-framework/WebSocketFrameworkGuidePage';
import BrolostackWSClientPage from './docs/pages/websocket-framework/BrolostackWSClientPage';
import BrolostackWSMultiAgentPage from './docs/pages/websocket-framework/BrolostackWSMultiAgentPage';
import AuthenticationGuidePage from './docs/pages/authentication/AuthenticationGuidePage';
import CIAMIntegrationPage from './docs/pages/authentication/CIAMIntegrationPage';
import BackendIntegrationPage from './docs/pages/backend-integration/BackendIntegrationPage';
import BackendIntegrationGuidePage from './docs/pages/backend-integration/BackendIntegrationGuidePage';
import EnterpriseFeaturesPage from './docs/pages/enterprise-features/EnterpriseFeaturesPage';
import EnterpriseFeaturesGuidePage from './docs/pages/enterprise-features/EnterpriseFeaturesGuidePage';
import EnvironmentManagementPage from './docs/pages/environment-management/EnvironmentManagementPage';
import EnvironmentManagementGuidePage from './docs/pages/environment-management/EnvironmentManagementGuidePage';
import TokenUsageControlPage from './docs/pages/token-usage-control/TokenUsageControlPage';
import TokenUsageControlGuidePage from './docs/pages/token-usage-control/TokenUsageControlGuidePage';
import BrowserCompatibilityPage from './docs/pages/browser-compatibility/BrowserCompatibilityPage';
import BrowserCompatibilityGuidePage from './docs/pages/browser-compatibility/BrowserCompatibilityGuidePage';
import BrowserPrivateModePage from './docs/pages/browser-compatibility/BrowserPrivateModePage';
import FrameworkStatusPage from './docs/pages/framework-status/FrameworkStatusPage';
import FrameworkStatusGuidePage from './docs/pages/framework-status/FrameworkStatusGuidePage';
import CommunityGuidePage from './docs/pages/community/CommunityGuidePage';
import OptionalDependenciesPage from './docs/pages/optional-dependencies/OptionalDependenciesPage';

interface NavigationSection {
  id: string;
  title: string;
  icon: React.ComponentType<any>;
  items: Array<{
    path: string;
    title: string;
    description?: string;
  }>;
}

const DocumentationLayout: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    'getting-started': true,
    'ai-framework': true,
    'brolostack-worker': true
  });
  const location = useLocation();

  const navigationSections: NavigationSection[] = [
    {
      id: 'getting-started',
      title: 'Getting Started',
      icon: Zap,
      items: [
        { 
          path: '/docs/getting-started', 
          title: 'Getting Started',
          description: 'Quick setup and basic usage'
        },
        { 
          path: '/docs/getting-started-guide', 
          title: 'Guide Template',
          description: 'Step-by-step implementation guide'
        }
      ]
    },
    {
      id: 'ai-framework',
      title: 'AI Framework',
      icon: Brain,
      items: [
        { 
          path: '/docs/ai-framework', 
          title: 'AI Framework',
          description: 'Comprehensive AI capabilities'
        },
        { 
          path: '/docs/ai-framework-guide', 
          title: 'Guide Template',
          description: 'AI implementation examples'
        }
      ]
    },
    {
      id: 'security-framework',
      title: 'Security Framework',
      icon: Shield,
      items: [
        { 
          path: '/docs/devil-security', 
          title: 'Brolostack Devil Security',
          description: 'Zero-knowledge encryption'
        },
        { 
          path: '/docs/security-framework', 
          title: 'Security Framework',
          description: 'Complete security features'
        },
        { 
          path: '/docs/security-framework-guide', 
          title: 'Guide Template',
          description: 'Security implementation guide'
        }
      ]
    },
    {
      id: 'websocket-framework',
      title: 'WebSocket Framework',
      icon: Wifi,
      items: [
        { 
          path: '/docs/websocket-framework', 
          title: 'WebSocket Framework',
          description: 'Real-time communication'
        },
        { 
          path: '/docs/brolostack-ws-client', 
          title: 'Brolostack WS Client',
          description: 'Advanced client-side WebSocket'
        },
        { 
          path: '/docs/brolostack-ws-multi-agent', 
          title: 'Brolostack WS Multi-Agent',
          description: 'Multi-agent coordination system'
        },
        { 
          path: '/docs/websocket-framework-guide', 
          title: 'Guide Template',
          description: 'WebSocket implementation guide'
        }
      ]
    },
    {
      id: 'authentication',
      title: 'Authentication',
      icon: Users,
      items: [
        { 
          path: '/docs/ciam-integration', 
          title: 'CIAM Integration',
          description: 'Multi-provider authentication'
        },
        { 
          path: '/docs/authentication-guide', 
          title: 'Guide Template',
          description: 'Authentication setup guide'
        }
      ]
    },
    {
      id: 'cloud-integration',
      title: 'Cloud Integration',
      icon: Cloud,
      items: [
        { 
          path: '/docs/cloud-integration', 
          title: 'Cloud Integration',
          description: '22+ cloud providers'
        }
      ]
    },
    {
      id: 'backend-integration',
      title: 'Backend Integration',
      icon: Wrench,
      items: [
        { 
          path: '/docs/backend-integration', 
          title: 'Backend Integration',
          description: 'Node.js & Python integration'
        },
        { 
          path: '/docs/backend-integration-guide', 
          title: 'Guide Template',
          description: 'Backend setup guide'
        }
      ]
    },
    {
      id: 'enterprise-features',
      title: 'Enterprise Features',
      icon: Building,
      items: [
        { 
          path: '/docs/enterprise-features', 
          title: 'Enterprise Features',
          description: 'Enterprise-grade capabilities'
        },
        { 
          path: '/docs/enterprise-features-guide', 
          title: 'Guide Template',
          description: 'Enterprise setup guide'
        }
      ]
    },
    {
      id: 'environment-management',
      title: 'Environment Management',
      icon: BookOpen,
      items: [
        { 
          path: '/docs/environment-management', 
          title: 'Environment Management',
          description: 'Automatic environment optimization'
        },
        { 
          path: '/docs/environment-management-guide', 
          title: 'Guide Template',
          description: 'Environment configuration guide'
        }
      ]
    },
    {
      id: 'token-usage-control',
      title: 'Token Usage Control',
      icon: BarChart,
      items: [
        { 
          path: '/docs/token-usage-control', 
          title: 'Token Usage Control',
          description: 'AI cost management'
        },
        { 
          path: '/docs/token-usage-control-guide', 
          title: 'Guide Template',
          description: 'Token control setup guide'
        }
      ]
    },
    {
      id: 'browser-compatibility',
      title: 'Browser Compatibility',
      icon: Code,
      items: [
        { 
          path: '/docs/browser-compatibility', 
          title: 'Browser Compatibility',
          description: 'Cross-browser support'
        },
        { 
          path: '/docs/browser-private-mode', 
          title: 'Browser Private Mode',
          description: 'Private browsing support'
        },
        { 
          path: '/docs/browser-compatibility-guide', 
          title: 'Guide Template',
          description: 'Browser setup guide'
        }
      ]
    },
    {
      id: 'brolostack-worker',
      title: 'Brolostack Worker',
      icon: Wrench,
      items: [
        { 
          path: '/docs/brolostack-worker', 
          title: 'Brolostack Worker',
          description: 'Background processing system'
        },
        { 
          path: '/docs/brolostack-worker-guide', 
          title: 'Guide Template',
          description: 'Worker implementation guide'
        }
      ]
    },
    {
      id: 'framework-status',
      title: 'Framework Status',
      icon: BarChart,
      items: [
        { 
          path: '/docs/framework-status', 
          title: 'Framework Status',
          description: 'Current implementation status'
        },
        { 
          path: '/docs/optional-dependencies', 
          title: 'Optional Dependencies',
          description: 'Additional packages'
        },
        { 
          path: '/docs/community-guide', 
          title: 'Community Guide',
          description: 'Beunec Community Guide'
        }
      ]
    }
  ];

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  const getCurrentPageTitle = () => {
    const currentPath = location.pathname;
    
    for (const section of navigationSections) {
      for (const item of section.items) {
        if (item.path === currentPath) {
          return item.title;
        }
      }
    }
    
    return 'Documentation';
  };

  const getCurrentPageDescription = () => {
    const currentPath = location.pathname;
    
    for (const section of navigationSections) {
      for (const item of section.items) {
        if (item.path === currentPath) {
          return item.description;
        }
      }
    }
    
    return 'Brolostack Documentation';
  };

  const filteredSections = navigationSections.filter(section => {
    if (!searchQuery) return true;
    return section.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
           section.items.some(item => 
             item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
             item.description?.toLowerCase().includes(searchQuery.toLowerCase())
           );
  });

  return (
    <div className="min-h-screen bg-gray-50 pt-16 sm:pt-20">
      {/* Mobile menu button */}
      <button 
        className="lg:hidden fixed top-20 sm:top-24 right-3 sm:right-4 z-50 bg-white border border-gray-200 rounded-lg p-2 sm:p-3 shadow-lg hover:shadow-xl transition-shadow"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        {isSidebarOpen ? <X size={18} className="sm:w-5 sm:h-5" /> : <Menu size={18} className="sm:w-5 sm:h-5" />}
      </button>

      <div className="flex min-h-screen">
        {/* Sidebar */}
        <AnimatePresence>
          {(isSidebarOpen || window.innerWidth >= 1024) && (
            <motion.aside 
              className={`fixed lg:fixed inset-y-0 left-0 z-40 w-72 sm:w-80 bg-white border-r border-gray-200 flex flex-col ${
                isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
              } transition-transform duration-300 ease-in-out lg:top-20 lg:h-[calc(100vh-5rem)]`}
              initial={{ x: -320 }}
              animate={{ x: 0 }}
              exit={{ x: -320 }}
            >
              {/* Sidebar Header */}
              <div className="p-4 sm:p-6 border-b border-gray-200">
                <Link to="/" className="flex items-center space-x-2 sm:space-x-3 text-gray-900 hover:text-blue-600 transition-colors">
                  <Home size={20} className="sm:w-6 sm:h-6" />
                  <span className="font-semibold text-base sm:text-lg">Brolostack</span>
                </Link>
                <p className="text-xs sm:text-sm text-gray-600 mt-1">Documentation</p>
              </div>

              {/* Search */}
              <div className="p-3 sm:p-4 border-b border-gray-200">
                <div className="relative">
                  <Search size={14} className="absolute left-2 sm:left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search docs..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-8 sm:pl-10 pr-3 sm:pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-xs sm:text-sm"
                  />
                </div>
              </div>

              {/* Navigation */}
              <nav className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-1 sm:space-y-2">
                {filteredSections.map((section) => (
                  <div key={section.id} className="space-y-1">
                    <button
                      className="w-full flex items-center justify-between p-2 sm:p-3 text-left text-gray-700 hover:bg-gray-100 rounded-lg transition-colors group"
                      onClick={() => toggleSection(section.id)}
                    >
                      <div className="flex items-center space-x-2 sm:space-x-3">
                        <section.icon size={16} className="sm:w-[18px] sm:h-[18px] text-gray-500 group-hover:text-blue-600" />
                        <span className="font-medium text-sm sm:text-base">{section.title}</span>
                      </div>
                      {expandedSections[section.id] ? (
                        <ChevronDown size={14} className="sm:w-4 sm:h-4 text-gray-400" />
                      ) : (
                        <ChevronRight size={14} className="sm:w-4 sm:h-4 text-gray-400" />
                      )}
                    </button>

                    <AnimatePresence>
                      {expandedSections[section.id] && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="ml-4 sm:ml-6 space-y-1"
                        >
                          {section.items.map((item) => (
                            <Link
                              key={item.path}
                              to={item.path}
                              className={`block p-2 sm:p-3 rounded-lg transition-colors group ${
                                location.pathname === item.path
                                  ? 'bg-blue-50 text-blue-700 border-l-4 border-blue-600'
                                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                              }`}
                              onClick={() => setIsSidebarOpen(false)}
                            >
                              <div className="font-medium text-xs sm:text-sm">{item.title}</div>
                              {item.description && (
                                <div className="text-xs text-gray-500 mt-1 hidden sm:block">{item.description}</div>
                              )}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </nav>

              {/* Sidebar Footer */}
              <div className="p-3 sm:p-4 border-t border-gray-200">
                <div className="text-xs text-gray-500 text-center">
                  Brolostack v1.0.2
                </div>
              </div>
            </motion.aside>
          )}
        </AnimatePresence>

        {/* Main Content */}
        <main className="flex-1 lg:ml-80">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4 sm:py-8">
            {/* Page Header */}
            <div className="mb-6 sm:mb-8">
              <nav className="flex items-center space-x-1 sm:space-x-2 text-xs sm:text-sm text-gray-500 mb-3 sm:mb-4">
                <Link to="/" className="hover:text-gray-700">Home</Link>
                <ArrowRight size={12} className="sm:w-3.5 sm:h-3.5" />
                <Link to="/docs" className="hover:text-gray-700">Documentation</Link>
                <ArrowRight size={12} className="sm:w-3.5 sm:h-3.5" />
                <span className="text-gray-900 truncate">{getCurrentPageTitle()}</span>
              </nav>
              
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                {getCurrentPageTitle()}
              </h1>
              <p className="text-sm sm:text-base lg:text-lg text-gray-600">
                {getCurrentPageDescription()}
              </p>
            </div>

            {/* Content */}
            <div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-600 prose-code:text-gray-800 prose-pre:bg-gray-900 prose-pre:text-gray-100">
              <Routes>
                  <Route path="/getting-started" element={<GettingStartedPage />} />
                  <Route path="/getting-started-guide" element={<GettingStartedGuidePage />} />
                  <Route path="/ai-framework" element={<AIFrameworkPage />} />
                  <Route path="/ai-framework-guide" element={<AIFrameworkGuidePage />} />
                  <Route path="/devil-security" element={<DevilSecurityPage />} />
                  <Route path="/security-framework" element={<SecurityFrameworkPage />} />
                  <Route path="/security-framework-guide" element={<SecurityFrameworkGuidePage />} />
                  <Route path="/websocket-framework" element={<WebSocketFrameworkPage />} />
                  <Route path="/brolostack-ws-client" element={<BrolostackWSClientPage />} />
                  <Route path="/brolostack-ws-multi-agent" element={<BrolostackWSMultiAgentPage />} />
                  <Route path="/websocket-framework-guide" element={<WebSocketFrameworkGuidePage />} />
                  <Route path="/ciam-integration" element={<CIAMIntegrationPage />} />
                  <Route path="/authentication-guide" element={<AuthenticationGuidePage />} />
                  <Route path="/cloud-integration" element={<CloudIntegrationPage />} />
                  <Route path="/backend-integration" element={<BackendIntegrationPage />} />
                  <Route path="/backend-integration-guide" element={<BackendIntegrationGuidePage />} />
                  <Route path="/enterprise-features" element={<EnterpriseFeaturesPage />} />
                  <Route path="/enterprise-features-guide" element={<EnterpriseFeaturesGuidePage />} />
                  <Route path="/environment-management" element={<EnvironmentManagementPage />} />
                  <Route path="/environment-management-guide" element={<EnvironmentManagementGuidePage />} />
                  <Route path="/token-usage-control" element={<TokenUsageControlPage />} />
                  <Route path="/token-usage-control-guide" element={<TokenUsageControlGuidePage />} />
                  <Route path="/browser-compatibility" element={<BrowserCompatibilityPage />} />
                  <Route path="/browser-private-mode" element={<BrowserPrivateModePage />} />
                  <Route path="/browser-compatibility-guide" element={<BrowserCompatibilityGuidePage />} />
                  <Route path="/brolostack-worker" element={<BrolostackWorkerPage />} />
                  <Route path="/brolostack-worker-guide" element={<BrolostackWorkerGuidePage />} />
                  <Route path="/framework-status" element={<FrameworkStatusPage />} />
                  <Route path="/framework-status-guide" element={<FrameworkStatusGuidePage />} />
                  <Route path="/optional-dependencies" element={<OptionalDependenciesPage />} />
                  <Route path="/community-guide" element={<CommunityGuidePage />} />
                  <Route path="/*" element={<GettingStartedPage />} />
                </Routes>
            </div>
          </div>
        </main>
      </div>

      {/* Mobile overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
    </div>
  );
};

export default DocumentationLayout;

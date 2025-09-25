import React, { useState } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { 
  Menu, 
  X, 
  BookOpen,
  Zap,
  Brain,
  Shield,
  Wifi,
  Cloud,
  Globe,
  Database,
  Lock,
  Settings,
  Home,
  Building
} from 'lucide-react';

// Simple placeholder components for documentation pages
const GettingStartedPage = () => (
  <div className="max-w-4xl mx-auto px-6 py-8">
    <h1 className="text-4xl font-bold text-gray-900 mb-6">Getting Started with Brolostack</h1>
    <div className="prose prose-lg max-w-none">
      <p className="text-xl text-gray-600 mb-8">
        Welcome to Brolostack - the local-first full-stack framework that operates entirely in your browser.
      </p>
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-semibold text-blue-900 mb-4">Quick Start</h2>
        <p className="text-blue-800 mb-4">
          Get up and running with Brolostack in minutes:
        </p>
        <pre className="bg-blue-900 text-blue-100 p-4 rounded-lg overflow-x-auto">
{`npm install brolostack
import Brolostack from 'brolostack';

const brolostack = new Brolostack({
  appName: 'my-app',
  version: '1.0.0'
});

await brolostack.initialize();`}
        </pre>
      </div>
    </div>
  </div>
);

const DocumentationLayout: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();

  const navigationSections = [
    {
      id: 'getting-started',
      title: 'Getting Started',
      icon: BookOpen,
      items: [
        { title: 'Introduction', path: '/docs/getting-started', icon: Home },
        { title: 'Quick Start Guide', path: '/docs/getting-started-guide', icon: Zap },
      ]
    },
    {
      id: 'core-features',
      title: 'Core Features',
      icon: Brain,
      items: [
        { title: 'AI Framework', path: '/docs/ai-framework', icon: Brain },
        { title: 'Security Framework', path: '/docs/security-framework', icon: Shield },
        { title: 'Storage System', path: '/docs/storage', icon: Database },
        { title: 'Performance', path: '/docs/performance', icon: Zap },
      ]
    },
    {
      id: 'integration',
      title: 'Integration',
      icon: Cloud,
      items: [
        { title: 'Cloud Integration', path: '/docs/cloud-integration', icon: Cloud },
        { title: 'WebSocket Framework', path: '/docs/websocket-framework', icon: Wifi },
        { title: 'Browser Compatibility', path: '/docs/browser-compatibility', icon: Globe },
      ]
    },
    {
      id: 'enterprise',
      title: 'Enterprise',
      icon: Building,
      items: [
        { title: 'Enterprise Features', path: '/docs/enterprise-features', icon: Building },
        { title: 'Authentication', path: '/docs/authentication', icon: Lock },
        { title: 'Environment Management', path: '/docs/environment-management', icon: Settings },
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        {/* Sidebar */}
        <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0 ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}>
          <div className="flex items-center justify-between h-16 px-6 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900">Documentation</h2>
            <button
              onClick={() => setIsSidebarOpen(false)}
              className="lg:hidden p-2 rounded-md text-gray-400 hover:text-gray-600 hover:bg-gray-100"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          
          <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
            {navigationSections.map((section) => (
              <div key={section.id} className="mb-6">
                <div className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 mb-2">
                  <section.icon className="h-4 w-4 mr-2" />
                  {section.title}
                </div>
                <div className="space-y-1">
                  {section.items.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className={`flex items-center px-3 py-2 text-sm rounded-md transition-colors ${
                        location.pathname === item.path
                          ? 'bg-blue-100 text-blue-700 font-medium'
                          : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                      }`}
                      onClick={() => setIsSidebarOpen(false)}
                    >
                      <item.icon className="h-4 w-4 mr-3" />
                      {item.title}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </nav>
        </div>

        {/* Main content */}
        <main className="flex-1 lg:ml-64">
          {/* Mobile header */}
          <div className="lg:hidden flex items-center justify-between h-16 px-4 bg-white border-b border-gray-200">
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="p-2 rounded-md text-gray-400 hover:text-gray-600 hover:bg-gray-100"
            >
              <Menu className="h-6 w-6" />
            </button>
            <h1 className="text-lg font-semibold text-gray-900">Brolostack Docs</h1>
            <div className="w-10" /> {/* Spacer */}
          </div>

          {/* Content */}
          <div className="min-h-screen">
            <Routes>
              <Route path="/getting-started" element={<GettingStartedPage />} />
              <Route path="/getting-started-guide" element={<GettingStartedPage />} />
              <Route path="/ai-framework" element={<GettingStartedPage />} />
              <Route path="/security-framework" element={<GettingStartedPage />} />
              <Route path="/storage" element={<GettingStartedPage />} />
              <Route path="/performance" element={<GettingStartedPage />} />
              <Route path="/cloud-integration" element={<GettingStartedPage />} />
              <Route path="/websocket-framework" element={<GettingStartedPage />} />
              <Route path="/browser-compatibility" element={<GettingStartedPage />} />
              <Route path="/enterprise-features" element={<GettingStartedPage />} />
              <Route path="/authentication" element={<GettingStartedPage />} />
              <Route path="/environment-management" element={<GettingStartedPage />} />
              <Route path="/*" element={<GettingStartedPage />} />
            </Routes>
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
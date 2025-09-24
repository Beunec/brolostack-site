import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useSEO } from '../../../hooks/useSEO';
import { 
  Home, 
  ArrowLeft, 
  BookOpen, 
  Zap,
  Brain,
  Shield,
  Wifi,
  Users,
  Settings,
  ChevronRight,
  Sparkles,
  Rocket,
  Target
} from 'lucide-react';

const NotFoundPage: React.FC = () => {
  // Apply 404-specific SEO
  useSEO({
    title: 'Page Not Found - Brolostack',
    description: 'The page you are looking for could not be found. Explore our documentation and get back on track with Brolostack.',
    keywords: 'brolostack 404, page not found, documentation, help',
    noIndex: true
  });

  const [floatingElements, setFloatingElements] = useState<Array<{ id: number; x: number; y: number; delay: number }>>([]);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  // Generate floating elements
  useEffect(() => {
    const elements = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 2
    }));
    setFloatingElements(elements);
  }, []);

  const quickLinks = [
    { path: '/docs/getting-started', title: 'Getting Started', icon: Zap, color: 'from-blue-500 to-cyan-500' },
    { path: '/docs/ai-framework', title: 'AI Framework', icon: Brain, color: 'from-purple-500 to-pink-500' },
    { path: '/docs/devil-security', title: 'Security Framework', icon: Shield, color: 'from-red-500 to-orange-500' },
    { path: '/docs/websocket-framework', title: 'WebSocket Framework', icon: Wifi, color: 'from-green-500 to-emerald-500' },
    { path: '/docs/brolostack-ws-client', title: 'WS Client', icon: Wifi, color: 'from-teal-500 to-cyan-500' },
    { path: '/docs/brolostack-ws-multi-agent', title: 'WS Multi-Agent', icon: Users, color: 'from-violet-500 to-purple-500' },
    { path: '/docs/ciam-integration', title: 'Authentication', icon: Users, color: 'from-indigo-500 to-blue-500' },
    { path: '/docs/framework-status', title: 'Framework Status', icon: Settings, color: 'from-gray-500 to-slate-500' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 relative overflow-hidden">

      {/* Floating Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <AnimatePresence>
          {floatingElements.map((element) => (
            <motion.div
              key={element.id}
              className="absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20"
              style={{ left: `${element.x}%`, top: `${element.y}%` }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ 
                scale: [0, 1, 0.8, 1],
                opacity: [0, 0.3, 0.1, 0.2],
                y: [0, -20, 10, 0]
              }}
              transition={{ 
                duration: 4,
                delay: element.delay,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
          ))}
        </AnimatePresence>
      </div>

      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main 404 Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            {/* 404 Number */}
            <motion.div
              initial={{ scale: 0.5, rotate: -10 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative mb-8"
            >
              <div className="text-8xl sm:text-9xl lg:text-[12rem] font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                404
              </div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-4 -right-4 w-8 h-8 sm:w-12 sm:h-12"
              >
                <Sparkles className="w-full h-full text-yellow-400" />
              </motion.div>
            </motion.div>

            {/* Error Message */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4"
            >
              Oops! Page Not Found
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
            >
              The page you're looking for seems to have vanished into the digital void. 
              Don't worry, let's get you back on track!
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            >
              <Link
                to="/"
                onClick={() => console.log('Navigating to home')}
                className="group inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                <Home className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Go Home
              </Link>
              
              <button
                onClick={() => {
                  console.log('Going back in history');
                  window.history.back();
                }}
                className="group inline-flex items-center px-6 py-3 bg-white text-gray-700 rounded-xl border-2 border-gray-200 hover:border-blue-300 hover:text-blue-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
                Go Back
              </button>
            </motion.div>
          </motion.div>

          {/* Quick Links Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="mb-8"
          >
            <div className="flex items-center justify-center mb-6">
              <BookOpen className="w-6 h-6 text-gray-500 mr-2" />
              <h2 className="text-xl font-semibold text-gray-800">Popular Documentation</h2>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {quickLinks.map((link, index) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  onHoverStart={() => setHoveredCard(index)}
                  onHoverEnd={() => setHoveredCard(null)}
                  className="relative"
                >
                  <Link
                    to={link.path}
                    onClick={() => console.log('Navigating to:', link.path)}
                    className={`block p-4 rounded-xl bg-white border-2 border-gray-100 hover:border-transparent transition-all duration-300 group cursor-pointer ${
                      hoveredCard === index ? 'shadow-xl' : 'shadow-sm hover:shadow-lg'
                    }`}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-r ${link.color} rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                    
                    <div className="relative flex items-center space-x-3">
                      <div className={`p-2 rounded-lg bg-gradient-to-r ${link.color} text-white group-hover:scale-110 transition-transform duration-300`}>
                        <link.icon className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 group-hover:text-gray-700 transition-colors">
                          {link.title}
                        </h3>
                        <p className="text-sm text-gray-500">
                          Learn more about {link.title.toLowerCase()}
                        </p>
                        <div className="text-xs text-blue-500 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          Click to explore →
                        </div>
                      </div>
                      <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-gray-600 group-hover:translate-x-1 transition-all duration-300" />
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Fun Interactive Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
          >
            <div className="flex items-center justify-center space-x-4 mb-4">
              <Rocket className="w-6 h-6 text-blue-500" />
              <h3 className="text-lg font-semibold text-gray-800">Pro Tip</h3>
              <Target className="w-6 h-6 text-purple-500" />
            </div>
            <p className="text-gray-600 text-sm">
              Use the search bar in the sidebar to quickly find what you're looking for, 
              or explore our comprehensive documentation sections above!
            </p>
          </motion.div>

          {/* Animated Border */}
          <motion.div
            className="absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-border"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            style={{ 
              background: 'linear-gradient(45deg, #3b82f6, #8b5cf6, #ec4899)',
              WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
              WebkitMaskComposite: 'xor',
              maskComposite: 'exclude'
            }}
          />
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #3b82f6 0%, transparent 50%),
                           radial-gradient(circle at 75% 75%, #8b5cf6 0%, transparent 50%),
                           radial-gradient(circle at 50% 50%, #ec4899 0%, transparent 50%)`,
        }} />
      </div>
    </div>
  );
};

export default NotFoundPage;

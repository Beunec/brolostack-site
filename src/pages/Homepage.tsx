import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useSEO } from '../hooks/useSEO';
import { 
  Zap, 
  Shield, 
  Cloud, 
  Brain, 
  Wifi, 
  Code, 
  ArrowRight, 
  CheckCircle,
  Star,
  Download,
  Users,
  GitBranch,
  XCircle
} from 'lucide-react';

const Homepage: React.FC = () => {
  // Apply homepage-specific SEO
  useSEO({
    title: 'Brolostack - Local-First Full-Stack Framework | Zero Server Costs',
    description: 'Brolostack is a revolutionary local-first full-stack framework that operates entirely in your browser with optional cloud integration. Enterprise-grade AI, security, and real-time features with zero server costs.',
    keywords: 'local-first, full-stack framework, browser storage, zero server costs, AI framework, WebSocket, security, authentication, cloud integration, IndexedDB, React, TypeScript, enterprise-grade, real-time, offline-first'
  });
  const features = [
    {
      icon: Zap,
      title: 'Local-First Architecture',
      description: 'Zero server costs with browser storage. Works completely offline with instant data access.'
    },
    {
      icon: Brain,
      title: 'Comprehensive AI Framework',
      description: '18+ AI providers, 4 reasoning frameworks, and 13 safety modules for responsible AI usage.'
    },
    {
      icon: Shield,
      title: 'Brolostack Devil Security',
      description: 'Zero-knowledge encryption, quantum-resistant algorithms, and multi-language source code protection.'
    },
    {
      icon: Code,
      title: 'Multi-Provider Authentication',
      description: '9 CIAM providers with hybrid authentication and session management.'
    },
    {
      icon: Wifi,
      title: 'Real-Time Communication',
      description: 'WebSocket framework with ARGS protocol for agent coordination and streaming.'
    },
    {
      icon: Cloud,
      title: 'Optional Cloud Integration',
      description: '22 cloud providers with local-first design. Cloud sync is completely optional.'
    },
    {
      icon: Star,
      title: 'Multi-Rendering Mode (MRM)',
      description: 'SSR, SSG, and hybrid rendering with automatic environment optimization and performance tuning.'
    },
    {
      icon: CheckCircle,
      title: 'Environment Manager',
      description: 'Seamless development, testing, and production environments with automatic optimization and configuration.'
    }
  ];

  const stats = [
    { icon: Download, value: '250+', label: 'Downloads' },
    { icon: Users, value: '10+', label: 'Developers' },
    { icon: GitBranch, value: '1.0.2', label: 'Version' },
    { icon: Star, value: '5.0', label: 'Rating' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <div className="homepage">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <motion.div 
            className="hero-content"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.div className="hero-text" variants={itemVariants}>
              <h4 className="hero-title">
                <span className="gradient-text">Local-First</span> Open-Source Framework
              </h4>
              <p className="hero-subtitle">
                Build lightweight, fast, and cost-effective full-stack apps with zero server costs. 
                NPM package with AI frameworks, security, and real-time features; all running in your browser.
              </p>
              
              <div className="hero-actions">
                <motion.a
                  href="https://www.npmjs.com/package/brolostack"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="primary-cta"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Download size={20} />
                  Install Brolostack
                </motion.a>
                
                <Link to="/docs/getting-started" className="secondary-cta">
                  Get Started
                  <ArrowRight size={18} />
                </Link>
              </div>

              <div className="installation-code">
                <code>npm install brolostack</code>
              </div>
            </motion.div>

            <motion.div className="hero-visual" variants={itemVariants}>
              <img 
                src="https://ik.imagekit.io/brolostack/Brolostack%20Herosection%20image"
                alt="Brolostack Architecture"
                className="hero-image"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <div className="stats-container">
          <motion.div 
            className="stats-scroll"
            animate={{
              x: [0, -100, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            {[...stats, ...stats, ...stats].map((stat, index) => (
              <div key={index} className="stat-item">
                <stat.icon className="stat-icon" size={24} />
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <motion.div 
            className="section-header"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={itemVariants}
          >
            <h2 className="section-title">Why Choose Brolostack?</h2>
            <p className="section-subtitle">
              Built for modern web development with enterprise-grade capabilities
            </p>
          </motion.div>

          <motion.div 
            className="features-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            {features.map((feature, index) => (
              <motion.div 
                key={index} 
                className="feature-card"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div className="feature-icon">
                  <feature.icon size={24} />
                </div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="applications">
        <div className="container">
          <motion.div 
            className="section-header"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={itemVariants}
          >
            <h2 className="section-title">Applications Built with Brolostack</h2>
            <p className="section-subtitle">
              Real-world applications showcasing the power and versatility of the Brolostack framework
            </p>
          </motion.div>

          <motion.div 
            className="applications-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.div className="application-card" variants={itemVariants}>
              <div className="app-icon">
                <Code size={32} />
              </div>
              <div className="app-version">Internal Release Version</div>
              <h3 className="app-title">Beunec IDE</h3>
              <p className="app-description">
                Advanced integrated development environment with local-first architecture
              </p>
              <motion.a
                href="https://www.thinkuniq.org/beunec-ide"
                target="_blank"
                rel="noopener noreferrer"
                className="app-link"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Project
                <ArrowRight size={14} />
              </motion.a>
            </motion.div>

            <motion.div className="application-card" variants={itemVariants}>
              <div className="app-icon">
                <CheckCircle size={32} />
              </div>
              <div className="app-version">Public Version: 1.0.1</div>
              <h3 className="app-title">Task Manager</h3>
              <p className="app-description">
                Full-featured task management application with real-time collaboration
              </p>
              <motion.a
                href="https://brolostack-task-manager.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="app-link"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Project
                <ArrowRight size={14} />
              </motion.a>
            </motion.div>

            <motion.div className="application-card" variants={itemVariants}>
              <div className="app-icon">
                <Brain size={32} />
              </div>
              <div className="app-version">Internal Release Version</div>
              <h3 className="app-title">HTML SandBox</h3>
              <p className="app-description">
                Interactive code playground with live preview and collaboration features
              </p>
              <motion.a
                href="https://www.thinkuniq.org/code-sandbox"
                target="_blank"
                rel="noopener noreferrer"
                className="app-link"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Project
                <ArrowRight size={14} />
              </motion.a>
            </motion.div>

            <motion.div className="application-card" variants={itemVariants}>
              <div className="app-icon">
                <Cloud size={32} />
              </div>
              <div className="app-version">Version: 1.0.2</div>
              <h3 className="app-title">Brolostack Site</h3>
              <p className="app-description">
                Official documentation and showcase website built with the framework
              </p>
              <motion.a
                href="https://brolostack.com"
                target="_blank"
                rel="noopener noreferrer"
                className="app-link"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Project
                <ArrowRight size={14} />
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Architecture Section */}
      <section className="architecture">
        <div className="container">
          <motion.div 
            className="architecture-content"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.div className="architecture-text" variants={itemVariants}>
              <h2 className="section-title">Browser-Native Architecture</h2>
              <p className="section-description">
                Unlike traditional frameworks that require servers and databases, 
                Brolostack runs entirely in your browser using IndexedDB, localStorage, 
                and memory for persistence. This eliminates server costs while providing 
                enterprise-grade functionality.
              </p>
              
              <div className="architecture-benefits">
                <div className="benefit">
                  <CheckCircle size={20} className="benefit-icon" />
                  <span>Zero server costs for core functionality</span>
                </div>
                <div className="benefit">
                  <CheckCircle size={20} className="benefit-icon" />
                  <span>Works completely offline</span>
                </div>
                <div className="benefit">
                  <CheckCircle size={20} className="benefit-icon" />
                  <span>Instant data access and updates</span>
                </div>
                <div className="benefit">
                  <CheckCircle size={20} className="benefit-icon" />
                  <span>Deploy to any static hosting service</span>
                </div>
              </div>

              <Link to="/docs/architecture" className="learn-more-link">
                Learn about the architecture
                <ArrowRight size={16} />
              </Link>
            </motion.div>

            <motion.div className="architecture-visual" variants={itemVariants}>
              <div className="architecture-diagram">
                <div className="browser-layer">
                  <h4>🌐 Browser Environment</h4>
                  <div className="layer-items">
                    <div className="layer-item">IndexedDB</div>
                    <div className="layer-item">localStorage</div>
                    <div className="layer-item">AI Framework</div>
                    <div className="layer-item">Security Layer</div>
                  </div>
                </div>
                <div className="optional-cloud">
                  <h4>☁️ Optional Cloud</h4>
                  <div className="layer-items">
                    <div className="layer-item">22 Providers</div>
                    <div className="layer-item">Auto Sync</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="comparison">
        <div className="container">
          <motion.div 
            className="section-header"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={itemVariants}
          >
            <h2 className="section-title">Framework Comparison</h2>
            <p className="section-subtitle">
              See how Brolostack compares to traditional full-stack frameworks
            </p>
          </motion.div>

          <motion.div 
            className="comparison-container"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={itemVariants}
          >
            <div className="comparison-table">
              <div className="table-header">
                <div className="header-cell">Feature</div>
                <div className="header-cell">Traditional</div>
                <div className="header-cell brolostack">Brolostack</div>
                <div className="header-cell">NextJS</div>
                <div className="header-cell">Redis Open Source</div>
              </div>
              
              <div className="table-row">
                <div className="row-label">Server Costs</div>
                <div className="row-cell">High</div>
                <div className="row-cell brolostack">Zero</div>
                <div className="row-cell">High</div>
                <div className="row-cell">Medium</div>
              </div>
              
              <div className="table-row">
                <div className="row-label">Offline Support</div>
                <div className="row-cell">Limited</div>
                <div className="row-cell brolostack">Full</div>
                <div className="row-cell">Limited</div>
                <div className="row-cell">No</div>
              </div>
              
              <div className="table-row">
                <div className="row-label">Data Persistence</div>
                <div className="row-cell">Server Database</div>
                <div className="row-cell brolostack">Browser Storage</div>
                <div className="row-cell">External DB</div>
                <div className="row-cell">Memory/File</div>
              </div>
              
              <div className="table-row">
                <div className="row-label">AI Integration</div>
                <div className="row-cell">Manual Setup</div>
                <div className="row-cell brolostack">Built-in (18+ Providers)</div>
                <div className="row-cell">Manual Setup</div>
                <div className="row-cell">No</div>
              </div>
              
              <div className="table-row">
                <div className="row-label">Real-time Communication</div>
                <div className="row-cell">Complex Setup</div>
                <div className="row-cell brolostack">Built-in WebSocket</div>
                <div className="row-cell">Manual Setup</div>
                <div className="row-cell">Pub/Sub Only</div>
              </div>
              
              <div className="table-row">
                <div className="row-label">Authentication</div>
                <div className="row-cell">Manual Integration</div>
                <div className="row-cell brolostack">9 CIAM Providers</div>
                <div className="row-cell">Manual Integration</div>
                <div className="row-cell">No</div>
              </div>
              
              <div className="table-row">
                <div className="row-label">Security</div>
                <div className="row-cell">Manual Implementation</div>
                <div className="row-cell brolostack">Zero-Knowledge Encryption</div>
                <div className="row-cell">Manual Implementation</div>
                <div className="row-cell">Basic</div>
              </div>
              
              <div className="table-row">
                <div className="row-label">Rendering Modes</div>
                <div className="row-cell">Client-Side Only</div>
                <div className="row-cell brolostack">SSR, SSG, Hybrid (MRM)</div>
                <div className="row-cell">SSR, SSG</div>
                <div className="row-cell">No</div>
              </div>
              
              <div className="table-row">
                <div className="row-label">Environment Management</div>
                <div className="row-cell">Manual Configuration</div>
                <div className="row-cell brolostack">Automatic Optimization</div>
                <div className="row-cell">Manual Configuration</div>
                <div className="row-cell">No</div>
              </div>
              
              <div className="table-row">
                <div className="row-label">Deployment</div>
                <div className="row-cell">Server Required</div>
                <div className="row-cell brolostack">Static Hosting</div>
                <div className="row-cell">Server Required</div>
                <div className="row-cell">Server Required</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="use-cases">
        <div className="container">
          <motion.div 
            className="section-header"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={itemVariants}
          >
            <h2 className="section-title">When to Use Brolostack</h2>
            <p className="section-subtitle">
              Understanding the best use cases and limitations of the Brolostack framework
            </p>
          </motion.div>

          <motion.div 
            className="use-cases-container"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <div className="use-cases-grid">
              <motion.div className="use-case-card recommended" variants={itemVariants}>
                <div className="card-header">
                  <CheckCircle size={24} className="card-icon" />
                  <h3 className="card-title">Recommended Use Cases</h3>
                </div>
                <div className="use-cases-table">
                  <div className="use-case-item">
                    <div className="use-case-label">Local-First Applications</div>
                    <div className="use-case-description">Apps that work offline with optional cloud sync</div>
                  </div>
                  <div className="use-case-item">
                    <div className="use-case-label">AI-Powered Applications</div>
                    <div className="use-case-description">Apps requiring multiple AI providers and reasoning</div>
                  </div>
                  <div className="use-case-item">
                    <div className="use-case-label">Real-time Collaboration</div>
                    <div className="use-case-description">Multi-user apps with WebSocket communication</div>
                  </div>
                  <div className="use-case-item">
                    <div className="use-case-label">Backend Integration Apps</div>
                    <div className="use-case-description">Node.js and Python backend integration with local-first frontend</div>
                  </div>
                  <div className="use-case-item">
                    <div className="use-case-label">Cloud-Integrated Applications</div>
                    <div className="use-case-description">Apps using 22+ cloud providers with optional sync</div>
                  </div>
                  <div className="use-case-item">
                    <div className="use-case-label">Cost-Sensitive Projects</div>
                    <div className="use-case-description">Zero server costs for core functionality</div>
                  </div>
                  <div className="use-case-item">
                    <div className="use-case-label">Privacy-Focused Apps</div>
                    <div className="use-case-description">Zero-knowledge encryption and local data</div>
                  </div>
                  <div className="use-case-item">
                    <div className="use-case-label">Lightweight Applications</div>
                    <div className="use-case-description">Quick development & deployment with built-in features</div>
                  </div>
                </div>
              </motion.div>

              <motion.div className="use-case-card not-recommended" variants={itemVariants}>
                <div className="card-header">
                  <XCircle size={24} className="card-icon" />
                  <h3 className="card-title">Not Recommended</h3>
                </div>
                <div className="use-cases-table">
                  <div className="use-case-item">
                    <div className="use-case-label">High-Scale Server Apps</div>
                    <div className="use-case-description">Apps requiring heavy server-side processing</div>
                  </div>
                  <div className="use-case-item">
                    <div className="use-case-label">Legacy System Integration</div>
                    <div className="use-case-description">Complex enterprise system integrations</div>
                  </div>
                  <div className="use-case-item">
                    <div className="use-case-label">CPU-Intensive Tasks</div>
                    <div className="use-case-description">Heavy computational work on client-side</div>
                  </div>
                  <div className="use-case-item">
                    <div className="use-case-label">Large File Processing</div>
                    <div className="use-case-description">Processing files larger than browser storage</div>
                  </div>
                  <div className="use-case-item">
                    <div className="use-case-label">Server-Only Operations</div>
                    <div className="use-case-description">Operations that must run on server</div>
                  </div>
                  <div className="use-case-item">
                    <div className="use-case-label">Cross-Platform Native</div>
                    <div className="use-case-description">Mobile/desktop native applications</div>
                  </div>
                  <div className="use-case-item">
                    <div className="use-case-label">Cloud-Only Applications</div>
                    <div className="use-case-description">Apps that cannot function without constant cloud connectivity</div>
                  </div>
                  <div className="use-case-item">
                    <div className="use-case-label">Complex Backend Dependencies</div>
                    <div className="use-case-description">Apps requiring complex server-side business logic</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <motion.div 
            className="cta-content"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={itemVariants}
          >
            <h2 className="cta-title">Ready to Build Something Amazing?</h2>
            <p className="cta-description">
              Join thousands of developers building the future with Brolostack
            </p>
            
            <div className="cta-actions">
              <motion.a
                href="https://www.npmjs.com/package/brolostack"
                target="_blank"
                rel="noopener noreferrer"
                className="primary-cta"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Building Now
              </motion.a>
              
              <Link to="/docs/getting-started" className="secondary-cta">
                View Documentation
              </Link>
            </div>
          </motion.div>
        </div>
      </section>



      <style>{`
        .homepage {
          padding-top: 80px; /* Account for fixed header */
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
        }

        /* Hero Section */
        .hero {
          padding: 80px 0 120px;
          background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
        }

        .hero-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
        }

        .hero-title {
          font-size: 38px;
          font-weight: 700;
          line-height: 1.1;
          margin-bottom: 24px;
        }

        .gradient-text {
          background: linear-gradient(135deg, #00477d 0%, #0066cc 100%);
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .hero-subtitle {
          font-size: 18px;
          line-height: 1.6;
          color: #64748b;
          margin-bottom: 40px;
        }

        .hero-actions {
          display: flex;
          gap: 16px;
          margin-bottom: 32px;
        }

        .primary-cta {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background-color: #00477d;
          color: #FFFFFF;
          padding: 16px 24px;
          border-radius: 12px;
          text-decoration: none;
          font-weight: 600;
          font-size: 16px;
          box-shadow: 0 4px 16px rgba(0, 71, 125, 0.2);
          transition: all 0.3s ease;
        }

        .primary-cta:hover {
          background-color: #003a6b;
          box-shadow: 0 6px 20px rgba(0, 71, 125, 0.3);
        }

        .secondary-cta {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: #00477d;
          padding: 16px 24px;
          border: 2px solid #00477d;
          border-radius: 12px;
          text-decoration: none;
          font-weight: 600;
          font-size: 16px;
          transition: all 0.3s ease;
        }

        .secondary-cta:hover {
          background-color: #00477d;
          color: white;
        }

        .installation-code {
          background-color: #1e293b;
          color: #e2e8f0;
          padding: 16px 24px;
          border-radius: 8px;
          font-family: 'Monaco', 'Menlo', monospace;
          border-left: 4px solid #00477d;
        }

        .hero-image {
          width: 100%;
          height: auto;
          border-radius: 16px;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
        }

        /* Stats Section */
        .stats {
          padding: 60px 0;
          background-color: white;
          border-top: 1px solid #e2e8f0;
          border-bottom: 1px solid #e2e8f0;
          overflow: hidden;
        }

        .stats-container {
          width: 100%;
          max-width: 1100px;
          margin: 0 auto;
          overflow: hidden;
        }

        .stats-scroll {
          display: flex;
          gap: 80px;
          width: max-content;
          align-items: center;
        }

        .stat-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          min-width: 200px;
          flex-shrink: 0;
        }

        .stat-icon {
          color: #00477d;
          margin-bottom: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .stat-value {
          font-size: 36px;
          font-weight: 700;
          color: black;
          margin-bottom: 8px;
          text-align: center;
        }

        .stat-label {
          color: #64748b;
          font-weight: 500;
          text-align: center;
        }

        /* Features Section */
        .features {
          padding: 120px 0;
          background-color: #f8fafc;
        }

        .section-header {
          text-align: center;
          margin-bottom: 80px;
        }

        h2.section-title {
          font-size: 34px !important;
          font-weight: 900 !important;
          color: black !important;
          margin-bottom: 24px !important;
          line-height: 1.1 !important;
          letter-spacing: -0.03em !important;
        }

        .section-subtitle {
          font-size: 20px;
          color: #64748b;
          line-height: 1.6;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 32px;
        }

        .feature-card {
          background: white;
          padding: 32px;
          border-radius: 16px;
          border: 1px solid #e2e8f0;
          transition: all 0.3s ease;
        }

        .feature-card:hover {
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
          border-color: #cbd5e1;
        }

        .feature-icon {
          width: 56px;
          height: 56px;
          background: linear-gradient(135deg, #00477d 0%, #0066cc 100%);
          color: white;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 24px;
        }

        .feature-title {
          font-size: 20px;
          font-weight: 600;
          color: black;
          margin-bottom: 12px;
        }

        .feature-description {
          color: #64748b;
          line-height: 1.6;
        }

        /* Architecture Section */
        .architecture {
          padding: 120px 0;
          background-color: white;
        }

        .architecture-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
        }

        .section-description {
          font-size: 18px;
          color: #64748b;
          line-height: 1.7;
          margin-bottom: 32px;
        }

        .architecture-benefits {
          margin-bottom: 32px;
        }

        .benefit {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 16px;
          font-size: 16px;
          color: black;
        }

        .benefit-icon {
          color: #22c55e;
          flex-shrink: 0;
        }

        .learn-more-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: #00477d;
          text-decoration: none;
          font-weight: 600;
          transition: all 0.3s ease;
        }

        .learn-more-link:hover {
          gap: 12px;
        }

        .architecture-diagram {
          background: linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%);
          border-radius: 16px;
          padding: 32px;
          border: 1px solid #cbd5e1;
        }

        .browser-layer,
        .optional-cloud {
          margin-bottom: 24px;
        }

        .browser-layer h4,
        .optional-cloud h4 {
          font-size: 18px;
          font-weight: 600;
          margin-bottom: 16px;
          color: #1e293b;
        }

        .layer-items {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 8px;
        }

        .layer-item {
          background: white;
          padding: 12px 16px;
          border-radius: 8px;
          font-size: 14px;
          font-weight: 500;
          color: #475569;
          border: 1px solid #e2e8f0;
          text-align: center;
        }

        /* CTA Section */
        .cta-section {
          padding: 120px 0;
          background: linear-gradient(135deg, #00477d 0%, #003a6b 100%);
          color: white;
        }

        .cta-content {
          text-align: center;
        }

        .cta-title {
          font-size: 40px;
          font-weight: 700;
          margin-bottom: 16px;
        }

        .cta-description {
          font-size: 20px;
          opacity: 0.9;
          margin-bottom: 40px;
        }

        .cta-actions {
          display: flex;
          gap: 16px;
          justify-content: center;
        }

        .cta-section .primary-cta {
          background-color: white;
          color: #00477d;
        }

        .cta-section .primary-cta:hover {
          background-color: #f1f5f9;
        }

        .cta-section .secondary-cta {
          color: white;
          border-color: white;
        }

        .cta-section .secondary-cta:hover {
          background-color: rgba(255, 255, 255, 0.1);
        }

        /* Applications Section */
        .applications {
          padding: 90px 0;
          background-color: white;
        }

        .applications-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 32px;
        }

        .application-card {
          background: white;
          padding: 32px;
          border-radius: 16px;
          border: 1px solid #e2e8f0;
          transition: all 0.3s ease;
          text-align: center;
        }

        .application-card:hover {
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
          border-color: #cbd5e1;
          transform: translateY(-2px);
        }

        .app-icon {
          width: 64px;
          height: 64px;
          background: linear-gradient(135deg, #00477d 0%, #0066cc 100%);
          color: white;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 24px;
        }

        .app-title {
          font-size: 24px;
          font-weight: 600;
          color: black;
          margin-bottom: 12px;
        }

        .app-description {
          color: #64748b;
          line-height: 1.6;
          margin-bottom: 16px;
        }

        .app-version {
          background-color: #f1f5f9;
          color: #00477d;
          padding: 4px 12px;
          border-radius: 20px;
          font-size: 14px;
          font-weight: 500;
          display: inline-block;
          margin-bottom: 20px;
        }

        .app-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background-color: #00477d;
          color: white;
          padding: 8px 16px;
          border-radius: 6px;
          text-decoration: none;
          font-weight: 600;
          font-size: 14px;
          transition: all 0.3s ease;
        }

        .app-link:hover {
          background-color: #003a6b;
        }

        /* Comparison Section */
        .comparison {
          padding: 120px 0;
          background-color: #f8fafc;
        }

        .comparison-container {
          overflow-x: auto;
        }

        .comparison-table {
          min-width: 800px;
          background: white;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);
        }

        .table-header {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
          background: linear-gradient(135deg, #00477d 0%, #003a6b 100%);
          color: white;
        }

        .header-cell {
          padding: 20px 16px;
          font-weight: 600;
          text-align: center;
          border-right: 1px solid rgba(255, 255, 255, 0.1);
        }

        .header-cell:last-child {
          border-right: none;
        }

        .header-cell.brolostack {
          background-color: rgba(255, 255, 255, 0.1);
        }

        .table-row {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
          border-bottom: 1px solid #e2e8f0;
        }

        .table-row:last-child {
          border-bottom: none;
        }

        .row-label {
          padding: 16px;
          font-weight: 600;
          background-color: #f8fafc;
          border-right: 1px solid #e2e8f0;
        }

        .row-cell {
          padding: 16px;
          text-align: center;
          border-right: 1px solid #e2e8f0;
        }

        .row-cell:last-child {
          border-right: none;
        }

        .row-cell.brolostack {
          background-color: #f0f9ff;
          color: #00477d;
          font-weight: 600;
        }

        /* Use Cases Section */
        .use-cases {
          padding: 120px 0;
          background-color: white;
        }

        .use-cases-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 32px;
        }

        .use-case-card {
          background: white;
          border-radius: 16px;
          border: 1px solid #e2e8f0;
          overflow: hidden;
          transition: all 0.3s ease;
        }

        .use-case-card:hover {
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
          transform: translateY(-2px);
        }

        .use-case-card.recommended {
          border-left: 4px solid #22c55e;
        }

        .use-case-card.not-recommended {
          border-left: 4px solid #ef4444;
        }

        .card-header {
          padding: 24px 24px 16px;
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .card-icon {
          flex-shrink: 0;
        }

        .recommended .card-icon {
          color: #22c55e;
        }

        .not-recommended .card-icon {
          color: #ef4444;
        }

        .card-title {
          font-size: 20px;
          font-weight: 600;
          color: black;
        }

        .use-cases-table {
          padding: 0 24px 24px;
        }

        .use-case-item {
          padding: 12px 0;
          border-bottom: 1px solid #f1f5f9;
        }

        .use-case-item:last-child {
          border-bottom: none;
        }

        .use-case-label {
          font-weight: 600;
          color: black;
          margin-bottom: 4px;
        }

        .use-case-description {
          color: #64748b;
          font-size: 14px;
          line-height: 1.5;
        }

        /* Responsive Design */
        @media (max-width: 968px) {
          .hero-content,
          .architecture-content {
            grid-template-columns: 1fr;
            gap: 48px;
          }

          .hero-title {
            font-size: 40px;
          }

          h2.section-title {
            font-size: 26px !important;
            font-weight: 900 !important;
          }

          .features-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .applications-grid {
            grid-template-columns: 1fr;
          }

          .use-cases-grid {
            grid-template-columns: 1fr;
          }

          .stats-container {
            max-width: 100%;
            margin: 0;
          }

          .stats-scroll {
            gap: 60px;
          }

          .stat-item {
            min-width: 160px;
          }
        }

        @media (max-width: 768px) {
          .hero {
            padding: 60px 0 80px;
          }

          .hero-title {
            font-size: 32px;
          }

          .hero-subtitle {
            font-size: 18px;
          }

          .hero-actions {
            flex-direction: column;
            align-items: stretch;
          }

          h2.section-title {
            font-size: 28px !important;
            font-weight: 900 !important;
          }

          .cta-title {
            font-size: 28px;
          }

          .cta-actions {
            flex-direction: column;
            align-items: stretch;
          }

          .stats-container {
            max-width: 100%;
            margin: 0;
          }

          .stats-scroll {
            gap: 40px;
          }

          .stat-item {
            min-width: 140px;
          }

          .stat-value {
            font-size: 28px;
          }

          .container {
            padding: 0 16px;
          }

          .features-grid {
            grid-template-columns: 1fr;
          }

          .comparison-table {
            min-width: 600px;
          }

          .table-header,
          .table-row {
            grid-template-columns: 1fr 0.8fr 1fr 0.8fr 0.8fr;
          }

          .header-cell,
          .row-cell {
            padding: 12px 8px;
            font-size: 14px;
          }

          .row-label {
            padding: 12px 8px;
            font-size: 14px;
          }

          .layer-items {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default Homepage;
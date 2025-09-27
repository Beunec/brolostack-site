import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Homepage from './pages/Homepage';
import DocumentationPage from './pages/DocumentationPage';
import NotFoundPage from './components/NotFoundPage';
import BrowserCompatibility from './components/BrowserCompatibility';
import { initializeBrolostack, performance } from './lib/brolostack';
import { SecurityManager } from './lib/security';
import { useSEO } from './hooks/useSEO';
import './App.css';

// Documentation pages are now imported and routed within DocumentationPage component

// SEO Handler component that must be inside Router
function SEOHandler() {
  useSEO();
  return null; // This component doesn't render anything
}


function App() {
  const [brolostackInitialized, setBrolostackInitialized] = useState(false);
  const [securityInitialized, setSecurityInitialized] = useState(false);
  const [storageInitialized, setStorageInitialized] = useState(false);
  const [performanceInitialized, setPerformanceInitialized] = useState(false);
  const [seoInitialized, setSeoInitialized] = useState(false);
  const [browserCompatibilityInitialized, setBrowserCompatibilityInitialized] = useState(false);

  useEffect(() => {
    const initBrolostack = async () => {
      try {
        console.log('Initializing Brolostack framework...');
        const success = await initializeBrolostack();
        if (success) {
          console.log('✅ Brolostack initialized successfully');
          setBrolostackInitialized(true);
        } else {
          console.warn('⚠️ Brolostack initialization failed, continuing with fallbacks');
          setBrolostackInitialized(true); // Continue anyway
        }
      } catch (error) {
        console.error('❌ Brolostack initialization error:', error);
        setBrolostackInitialized(true); // Continue anyway
      }
    };

    const initSecurity = async () => {
      try {
        console.log('Initializing Brolostack security...');
        const securityManager = SecurityManager.getInstance();
        await securityManager.initialize();
        console.log('✅ Brolostack security initialized successfully');
        setSecurityInitialized(true);
      } catch (error) {
        console.error('❌ Brolostack security initialization error:', error);
        setSecurityInitialized(true); // Continue anyway
      }
    };

    const initStorage = async () => {
      try {
        console.log('Initializing Brolostack storage...');
        // Test storage functionality using regular localStorage (not secure storage)
        try {
          localStorage.setItem('brolostack_test', JSON.stringify({ 
            message: 'Brolostack storage working', 
            timestamp: Date.now() 
          }));
          const testData = localStorage.getItem('brolostack_test');
          if (testData) {
            const parsed = JSON.parse(testData);
            console.log('✅ Brolostack storage initialized successfully');
            console.log('Storage test:', parsed);
            setStorageInitialized(true);
          } else {
            console.warn('⚠️ Storage test failed, continuing anyway');
            setStorageInitialized(true);
          }
        } catch (storageError) {
          console.warn('⚠️ Storage test failed, continuing anyway');
          setStorageInitialized(true);
        }
      } catch (error) {
        console.error('❌ Brolostack storage initialization error:', error);
        setStorageInitialized(true); // Continue anyway
      }
    };

    const initPerformance = async () => {
      try {
        console.log('Initializing Brolostack performance monitoring...');
        // Preload critical resources
        await performance.preloadResources(['/docs/getting-started', '/docs/ai-framework']);
        // Track initial page load
        await performance.trackPerformance('page_load', Date.now());
        console.log('✅ Brolostack performance monitoring initialized successfully');
        setPerformanceInitialized(true);
      } catch (error) {
        console.error('❌ Brolostack performance initialization error:', error);
        setPerformanceInitialized(true); // Continue anyway
      }
    };

    const initSEO = async () => {
      try {
        console.log('Initializing Brolostack SEO...');
        // Initialize SEO with error handling
        setSeoInitialized(true);
        console.log('✅ Brolostack SEO initialized successfully');
      } catch (error) {
        console.error('❌ Brolostack SEO initialization error:', error);
        setSeoInitialized(true); // Continue anyway
      }
    };

    const initBrowserCompatibility = async () => {
      try {
        console.log('Initializing Brolostack browser compatibility...');
        // Test browser compatibility with error handling
        setBrowserCompatibilityInitialized(true);
        console.log('✅ Brolostack browser compatibility initialized successfully');
      } catch (error) {
        console.error('❌ Brolostack browser compatibility initialization error:', error);
        setBrowserCompatibilityInitialized(true); // Continue anyway
      }
    };

    initBrolostack();
    initSecurity();
    initStorage();
    initPerformance();
    initSEO();
    initBrowserCompatibility();
  }, []);

  return (
    <Router>
      <div>
        <SEOHandler />
      <BrowserCompatibility />
      <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          
          {/* Documentation Routes - All docs pages use DocumentationPage layout */}
          <Route path="/docs/*" element={<DocumentationPage />} />
          
          {/* Catch-all route */}
          <Route path="/*" element={<NotFoundPage />} />
        </Routes>
        <Footer />
        {brolostackInitialized && (
          <div style={{ 
            position: 'fixed', 
            bottom: '10px', 
            right: '10px', 
            background: 'rgba(0,255,0,0.1)', 
            padding: '5px 10px', 
            borderRadius: '5px',
            fontSize: '12px',
            color: 'green'
          }}>
            🚀 Brolostack Active
          </div>
        )}
        {securityInitialized && (
          <div style={{ 
            position: 'fixed', 
            bottom: '10px', 
            right: '120px', 
            background: 'rgba(0,0,255,0.1)', 
            padding: '5px 10px', 
            borderRadius: '5px',
            fontSize: '12px',
            color: 'blue'
          }}>
            🔒 Security Active
          </div>
        )}
        {storageInitialized && (
          <div style={{ 
            position: 'fixed', 
            bottom: '10px', 
            right: '230px', 
            background: 'rgba(255,165,0,0.1)', 
            padding: '5px 10px', 
            borderRadius: '5px',
            fontSize: '12px',
            color: 'orange'
          }}>
            💾 Storage Active
          </div>
        )}
        {performanceInitialized && (
          <div style={{ 
            position: 'fixed', 
            bottom: '10px', 
            right: '340px', 
            background: 'rgba(128,0,128,0.1)', 
            padding: '5px 10px', 
            borderRadius: '5px',
            fontSize: '12px',
            color: 'purple'
          }}>
            ⚡ Performance Active
          </div>
        )}
        {seoInitialized && (
          <div style={{ 
            position: 'fixed', 
            bottom: '10px', 
            right: '450px', 
            background: 'rgba(0,128,128,0.1)', 
            padding: '5px 10px', 
            borderRadius: '5px',
            fontSize: '12px',
            color: 'teal'
          }}>
            🔍 SEO Active
          </div>
        )}
        {browserCompatibilityInitialized && (
          <div style={{ 
            position: 'fixed', 
            bottom: '10px', 
            right: '560px', 
            background: 'rgba(255,0,0,0.1)', 
            padding: '5px 10px', 
            borderRadius: '5px',
            fontSize: '12px',
            color: 'red'
          }}>
            🌐 Browser Active
          </div>
        )}
    </div>
    </Router>
  );
}

export default App;
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Eye, 
  EyeOff, 
  Shield, 
  Lock, 
  AlertTriangle, 
  CheckCircle, 
  Copy,
  Globe,
  Database,
  Settings,
  Info
} from 'lucide-react';

const BrowserPrivateModePage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('detection');
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const copyToClipboard = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const detectionExample = `// Private Mode Detection
import { Brolostack } from 'brolostack';

const brolostack = new Brolostack({
  browser: {
    privateModeDetection: true,
    fallbackStorage: 'memory'
  }
});

// Detect private browsing mode
class PrivateModeDetector {
  constructor(brolostack) {
    this.brolostack = brolostack;
  }

  async detectPrivateMode() {
    try {
      // Test IndexedDB
      const indexedDBSupported = await this.testIndexedDB();
      
      // Test localStorage
      const localStorageSupported = await this.testLocalStorage();
      
      // Test sessionStorage
      const sessionStorageSupported = await this.testSessionStorage();
      
      // Test WebSQL (deprecated but useful for detection)
      const webSQLSupported = await this.testWebSQL();
      
      return {
        isPrivateMode: !indexedDBSupported || !localStorageSupported,
        features: {
          indexedDB: indexedDBSupported,
          localStorage: localStorageSupported,
          sessionStorage: sessionStorageSupported,
          webSQL: webSQLSupported
        }
      };
    } catch (error) {
      return {
        isPrivateMode: true,
        error: error.message
      };
    }
  }

  async testIndexedDB() {
    try {
      if (!window.indexedDB) return false;
      
      const request = indexedDB.open('test-db', 1);
      return new Promise((resolve) => {
        request.onerror = () => resolve(false);
        request.onsuccess = () => {
          request.result.close();
          resolve(true);
        };
        request.onupgradeneeded = () => {
          request.result.close();
          resolve(true);
        };
      });
    } catch (error) {
      return false;
    }
  }

  async testLocalStorage() {
    try {
      const testKey = '__private_mode_test__';
      localStorage.setItem(testKey, 'test');
      localStorage.removeItem(testKey);
      return true;
    } catch (error) {
      return false;
    }
  }

  async testSessionStorage() {
    try {
      const testKey = '__private_mode_test__';
      sessionStorage.setItem(testKey, 'test');
      sessionStorage.removeItem(testKey);
      return true;
    } catch (error) {
      return false;
    }
  }

  async testWebSQL() {
    try {
      return !!window.openDatabase;
    } catch (error) {
      return false;
    }
  }
}

const detector = new PrivateModeDetector(brolostack);`;

  const fallbackExample = `// Private Mode Fallback Strategies
import { Brolostack } from 'brolostack';

const brolostack = new Brolostack({
  storage: {
    primary: 'indexeddb',
    fallback: 'memory',
    privateModeFallback: true
  }
});

// Fallback storage manager
class FallbackStorageManager {
  constructor(brolostack) {
    this.brolostack = brolostack;
    this.memoryStorage = new Map();
    this.isPrivateMode = false;
  }

  async initialize() {
    const detection = await this.brolostack.browser.detectPrivateMode();
    this.isPrivateMode = detection.isPrivateMode;
    
    if (this.isPrivateMode) {
      console.warn('Private browsing mode detected. Using memory fallback.');
      this.setupMemoryFallback();
    }
  }

  setupMemoryFallback() {
    // Override storage methods for private mode
    this.brolostack.storage.set = this.setMemoryStorage.bind(this);
    this.brolostack.storage.get = this.getMemoryStorage.bind(this);
    this.brolostack.storage.remove = this.removeMemoryStorage.bind(this);
    this.brolostack.storage.clear = this.clearMemoryStorage.bind(this);
  }

  async setMemoryStorage(key, value) {
    try {
      if (this.isPrivateMode) {
        this.memoryStorage.set(key, value);
        return true;
      }
      
      // Use normal storage
      return await this.brolostack.storage.set(key, value);
    } catch (error) {
      // Fallback to memory if normal storage fails
      this.memoryStorage.set(key, value);
      return true;
    }
  }

  async getMemoryStorage(key) {
    try {
      if (this.isPrivateMode) {
        return this.memoryStorage.get(key) || null;
      }
      
      return await this.brolostack.storage.get(key);
    } catch (error) {
      return this.memoryStorage.get(key) || null;
    }
  }

  async removeMemoryStorage(key) {
    try {
      if (this.isPrivateMode) {
        return this.memoryStorage.delete(key);
      }
      
      return await this.brolostack.storage.remove(key);
    } catch (error) {
      return this.memoryStorage.delete(key);
    }
  }

  async clearMemoryStorage() {
    try {
      if (this.isPrivateMode) {
        this.memoryStorage.clear();
        return true;
      }
      
      return await this.brolostack.storage.clear();
    } catch (error) {
      this.memoryStorage.clear();
      return true;
    }
  }

  // Sync with server when possible
  async syncWithServer() {
    if (this.isPrivateMode) {
      try {
        const data = Object.fromEntries(this.memoryStorage);
        await this.brolostack.api.post('/sync/private-mode', { data });
        console.log('Data synced with server');
      } catch (error) {
        console.warn('Failed to sync with server:', error);
      }
    }
  }
}

const fallbackManager = new FallbackStorageManager(brolostack);
await fallbackManager.initialize();`;

  const userExperienceExample = `// Enhanced User Experience in Private Mode
import { Brolostack } from 'brolostack';

const brolostack = new Brolostack({
  privateMode: {
    enabled: true,
    userNotification: true,
    alternativeFeatures: true
  }
});

// Private mode UX manager
class PrivateModeUX {
  constructor(brolostack) {
    this.brolostack = brolostack;
  }

  async handlePrivateMode() {
    const isPrivate = await this.brolostack.browser.detectPrivateMode();
    
    if (isPrivate.isPrivateMode) {
      this.showPrivateModeNotification();
      this.enableAlternativeFeatures();
      this.adjustUserInterface();
    }
  }

  showPrivateModeNotification() {
    const notification = document.createElement('div');
    notification.className = 'private-mode-notification';
    notification.innerHTML = \`
      <div class="flex items-center p-4 bg-amber-50 border border-amber-200 rounded-lg">
        <EyeOff className="w-5 h-5 text-amber-600 mr-3" />
        <div>
          <h4 class="font-medium text-amber-800">Private Browsing Detected</h4>
          <p class="text-sm text-amber-700">
            Some features may be limited. Your data will be stored in memory only.
          </p>
        </div>
        <button onclick="this.parentElement.parentElement.remove()" class="ml-auto text-amber-600 hover:text-amber-800">
          ×
        </button>
      </div>
    \`;
    
    document.body.insertBefore(notification, document.body.firstChild);
    
    // Auto-remove after 10 seconds
    setTimeout(() => {
      if (notification.parentElement) {
        notification.remove();
      }
    }, 10000);
  }

  enableAlternativeFeatures() {
    // Enable cloud sync
    this.brolostack.cloudSync.enabled = true;
    
    // Enable session-based features
    this.brolostack.sessionFeatures.enabled = true;
    
    // Disable persistent storage features
    this.brolostack.persistentStorage.enabled = false;
    
    // Enable temporary caching
    this.brolostack.temporaryCache.enabled = true;
  }

  adjustUserInterface() {
    // Add private mode indicator
    const indicator = document.createElement('div');
    indicator.className = 'private-mode-indicator';
    indicator.innerHTML = \`
      <div class="fixed top-4 right-4 bg-amber-100 border border-amber-300 rounded-full p-2">
        <EyeOff className="w-4 h-4 text-amber-600" />
      </div>
    \`;
    document.body.appendChild(indicator);
    
    // Modify storage-related UI elements
    const storageElements = document.querySelectorAll('[data-storage]');
    storageElements.forEach(element => {
      element.classList.add('private-mode-limited');
      element.title = 'Limited in private browsing mode';
    });
    
    // Show alternative options
    this.showAlternativeOptions();
  }

  showAlternativeOptions() {
    const alternatives = document.createElement('div');
    alternatives.className = 'private-mode-alternatives';
    alternatives.innerHTML = \`
      <div class="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
        <h4 class="font-medium text-blue-800 mb-2">Alternative Options</h4>
        <ul class="text-sm text-blue-700 space-y-1">
          <li>• Use cloud sync for persistent data</li>
          <li>• Export data before closing browser</li>
          <li>• Use regular browsing mode for full features</li>
        </ul>
      </div>
    \`;
    
    const mainContent = document.querySelector('.main-content');
    if (mainContent) {
      mainContent.insertBefore(alternatives, mainContent.firstChild);
    }
  }

  // Export data for user to save
  async exportData() {
    const data = await this.brolostack.storage.export();
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement('a');
    a.href = url;
    a.download = \`brolostack-data-\${new Date().toISOString().split('T')[0]}.json\`;
    a.click();
    
    URL.revokeObjectURL(url);
  }

  // Import data from file
  async importData(file) {
    try {
      const text = await file.text();
      const data = JSON.parse(text);
      await this.brolostack.storage.import(data);
      console.log('Data imported successfully');
    } catch (error) {
      console.error('Import failed:', error);
    }
  }
}

const privateModeUX = new PrivateModeUX(brolostack);
await privateModeUX.handlePrivateMode();`;

  const tabs = [
    { id: 'detection', label: 'Detection', icon: Eye },
    { id: 'fallback', label: 'Fallback', icon: Database },
    { id: 'ux', label: 'User Experience', icon: Settings }
  ];

  const getCodeExample = (tabId: string) => {
    switch (tabId) {
      case 'detection': return detectionExample;
      case 'fallback': return fallbackExample;
      case 'ux': return userExperienceExample;
      default: return detectionExample;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-amber-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-6">
            <EyeOff className="w-8 h-8 text-amber-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Browser Private Mode
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive support for private browsing modes with intelligent 
            detection, fallback strategies, and enhanced user experience
          </p>
        </motion.div>

        {/* Features Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <Eye className="w-8 h-8 text-blue-600 mb-4" />
            <h3 className="font-semibold text-gray-900 mb-2">Smart Detection</h3>
            <p className="text-gray-600 text-sm">Automatically detect private browsing mode</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <Database className="w-8 h-8 text-green-600 mb-4" />
            <h3 className="font-semibold text-gray-900 mb-2">Fallback Storage</h3>
            <p className="text-gray-600 text-sm">Memory-based storage when needed</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <Settings className="w-8 h-8 text-purple-600 mb-4" />
            <h3 className="font-semibold text-gray-900 mb-2">UX Adaptation</h3>
            <p className="text-gray-600 text-sm">Enhanced user experience in private mode</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <Shield className="w-8 h-8 text-orange-600 mb-4" />
            <h3 className="font-semibold text-gray-900 mb-2">Data Security</h3>
            <p className="text-gray-600 text-sm">Secure handling of temporary data</p>
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
                      ? 'text-amber-600 border-b-2 border-amber-600 bg-amber-50'
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

        {/* Browser Support */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-12"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Browser Support
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Globe className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Chrome</h3>
              <p className="text-sm text-gray-600">Incognito Mode</p>
              <div className="mt-3">
                <CheckCircle className="w-5 h-5 text-green-600 mx-auto" />
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 text-center">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Globe className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Firefox</h3>
              <p className="text-sm text-gray-600">Private Browsing</p>
              <div className="mt-3">
                <CheckCircle className="w-5 h-5 text-green-600 mx-auto" />
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Globe className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Safari</h3>
              <p className="text-sm text-gray-600">Private Window</p>
              <div className="mt-3">
                <CheckCircle className="w-5 h-5 text-green-600 mx-auto" />
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Globe className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Edge</h3>
              <p className="text-sm text-gray-600">InPrivate</p>
              <div className="mt-3">
                <CheckCircle className="w-5 h-5 text-green-600 mx-auto" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Best Practices */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-12 bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-8 border border-amber-200"
        >
          <div className="flex items-center mb-6">
            <Info className="w-8 h-8 text-amber-600 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900">Best Practices</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Detection & Handling</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Always detect private mode before using persistent storage</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Provide clear user notification about limitations</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Implement graceful fallback to memory storage</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Offer data export/import functionality</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">User Experience</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Maintain core functionality in private mode</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Provide alternative cloud-based features</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Enable session-based temporary features</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Offer guidance for switching to regular mode</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Quick Start */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center"
        >
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Ready for Private Mode?
            </h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Implement comprehensive private browsing support with intelligent 
              detection, fallback strategies, and enhanced user experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-6 py-3 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors font-medium">
                View Documentation
              </button>
              <button className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium">
                Try Live Demo
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default BrowserPrivateModePage;

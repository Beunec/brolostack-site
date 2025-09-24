import React, { useState, useEffect } from 'react';
import { browser, storage } from '../lib/brolostack';
import { AlertTriangle, CheckCircle, Info, Shield } from 'lucide-react';

interface CompatibilityStatus {
  supported: boolean;
  browser: {
    chrome: boolean;
    firefox: boolean;
    safari: boolean;
    edge: boolean;
  };
  privateMode: boolean;
  fallbackStorage: string;
}

const BrowserCompatibility: React.FC = () => {
  const [status, setStatus] = useState<CompatibilityStatus | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const checkCompatibility = async () => {
      try {
        const compatibility = await browser.checkCompatibility();
        const privateMode = await browser.isPrivateMode();
        const fallbackStorage = await browser.getFallbackStorage();

        const newStatus: CompatibilityStatus = {
          supported: compatibility.supported,
          browser: compatibility.browser || { chrome: false, firefox: false, safari: false, edge: false },
          privateMode,
          fallbackStorage
        };

        setStatus(newStatus);

        // Show warning if browser is not fully supported or in private mode
        if (!compatibility.supported || privateMode) {
          try {
            const dismissedStatus = await storage.user.getPreferences();
            if (!dismissedStatus?.browserWarningDismissed) {
              setIsVisible(true);
            }
          } catch (storageError) {
            // If storage fails, show the warning anyway
            console.warn('Storage access failed, showing browser warning:', storageError);
            setIsVisible(true);
          }
        }

        // Store compatibility status (with error handling)
        try {
          const currentPrefs = await storage.user.getPreferences();
          await storage.user.setPreferences({
            ...currentPrefs,
            browserCompatibility: newStatus,
            lastChecked: Date.now()
          });
        } catch (storageError) {
          console.warn('Failed to store compatibility status:', storageError);
          // Continue without storing - this is not critical
        }
      } catch (error) {
        console.error('Failed to check browser compatibility:', error);
        // Set a fallback status to prevent blank screen
        setStatus({
          supported: true,
          browser: { chrome: false, firefox: false, safari: false, edge: false },
          privateMode: false,
          fallbackStorage: 'localStorage'
        });
      }
    };

    checkCompatibility();
  }, []);

  const dismissWarning = async () => {
    setDismissed(true);
    setIsVisible(false);
    
    try {
      const preferences = await storage.user.getPreferences();
      await storage.user.setPreferences({
        ...preferences,
        browserWarningDismissed: true
      });
    } catch (error) {
      console.warn('Failed to save dismissal preference:', error);
      // Continue anyway - the warning is dismissed in the UI
    }
  };

  const getBrowserName = () => {
    if (!status) return 'Unknown';
    if (status.browser.chrome) return 'Chrome';
    if (status.browser.firefox) return 'Firefox';
    if (status.browser.safari) return 'Safari';
    if (status.browser.edge) return 'Edge';
    return 'Unknown';
  };

  const getStatusIcon = () => {
    if (!status) return <Info className="w-5 h-5 text-blue-600" />;
    if (status.supported && !status.privateMode) return <CheckCircle className="w-5 h-5 text-green-600" />;
    return <AlertTriangle className="w-5 h-5 text-yellow-600" />;
  };

  const getStatusColor = () => {
    if (!status) return 'border-blue-200 bg-blue-50';
    if (status.supported && !status.privateMode) return 'border-green-200 bg-green-50';
    return 'border-yellow-200 bg-yellow-50';
  };

  if (!status || !isVisible || dismissed) {
    return null;
  }

  return (
    <div className="fixed top-4 left-4 right-4 z-50 max-w-2xl mx-auto">
      <div className={`border rounded-lg p-4 shadow-lg ${getStatusColor()}`}>
        <div className="flex items-start space-x-3">
          {getStatusIcon()}
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Browser Compatibility Notice
            </h3>
            
            <div className="space-y-2 text-sm text-gray-700">
              <div className="flex items-center space-x-2">
                <span className="font-medium">Browser:</span>
                <span>{getBrowserName()}</span>
                {status.supported ? (
                  <CheckCircle className="w-4 h-4 text-green-600" />
                ) : (
                  <AlertTriangle className="w-4 h-4 text-yellow-600" />
                )}
              </div>

              {status.privateMode && (
                <div className="flex items-center space-x-2">
                  <Shield className="w-4 h-4 text-blue-600" />
                  <span>Private mode detected - Using {status.fallbackStorage} for storage</span>
                </div>
              )}

              {!status.supported && (
                <div className="text-yellow-700">
                  <p>Your browser may not support all features. For the best experience, please use:</p>
                  <ul className="list-disc list-inside mt-1 space-y-1">
                    <li>Chrome 80+</li>
                    <li>Firefox 75+</li>
                    <li>Safari 13+</li>
                    <li>Edge 80+</li>
                  </ul>
                </div>
              )}

              {status.privateMode && (
                <div className="text-blue-700">
                  <p>Private browsing mode detected. Some features may be limited:</p>
                  <ul className="list-disc list-inside mt-1 space-y-1">
                    <li>Using localStorage instead of IndexedDB</li>
                    <li>Limited offline functionality</li>
                    <li>Reduced caching capabilities</li>
                  </ul>
                </div>
              )}
            </div>

            <div className="mt-4 flex space-x-3">
              <button
                onClick={dismissWarning}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
              >
                Got it
              </button>
              <button
                onClick={() => setIsVisible(false)}
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors text-sm"
              >
                Dismiss
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrowserCompatibility;

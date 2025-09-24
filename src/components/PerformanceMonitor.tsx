import React, { useState, useEffect } from 'react';
import { performance, storage } from '../lib/brolostack';
import { securityManager } from '../lib/security';
import { hybridRenderer } from '../lib/rendering';
import { Activity, Shield, Database, Zap, AlertTriangle, CheckCircle } from 'lucide-react';

interface PerformanceMetrics {
  renderTime: number;
  memoryUsage: number;
  cacheHitRate: number;
  securityEvents: number;
  storageUsage: number;
}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    renderTime: 0,
    memoryUsage: 0,
    cacheHitRate: 0,
    securityEvents: 0,
    storageUsage: 0
  });
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const updateMetrics = async () => {
      try {
        // Get performance metrics
        const events = await storage.analytics.getEvents();
        const performanceEvents = events.filter((e: any) => e.event === 'performance');
        const avgRenderTime = performanceEvents.length > 0 
          ? performanceEvents.reduce((sum: number, e: any) => sum + (e.data.value || 0), 0) / performanceEvents.length
          : 0;

        // Get security events
        const securityEvents = securityManager.getEvents({ limit: 100 });
        const recentSecurityEvents = securityEvents.filter(e => Date.now() - e.timestamp < 300000); // Last 5 minutes

        // Get cache statistics
        const cacheStats = await getCacheStats();

        // Get memory usage (approximation)
        const memoryUsage = (performance as any).memory 
          ? (performance as any).memory.usedJSHeapSize / 1024 / 1024 
          : 0;

        setMetrics({
          renderTime: Math.round(avgRenderTime),
          memoryUsage: Math.round(memoryUsage),
          cacheHitRate: cacheStats.hitRate,
          securityEvents: recentSecurityEvents.length,
          storageUsage: cacheStats.size
        });
      } catch (error) {
        console.error('Failed to update performance metrics:', error);
      }
    };

    updateMetrics();
    const interval = setInterval(updateMetrics, 5000); // Update every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const getCacheStats = async () => {
    try {
      const cacheData = await storage.cache.get('cache_stats');
      return cacheData || { hitRate: 0, size: 0 };
    } catch {
      return { hitRate: 0, size: 0 };
    }
  };

  const getStatusColor = (value: number, thresholds: { good: number; warning: number }) => {
    if (value <= thresholds.good) return 'text-green-600';
    if (value <= thresholds.warning) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getStatusIcon = (value: number, thresholds: { good: number; warning: number }) => {
    if (value <= thresholds.good) return <CheckCircle className="w-4 h-4" />;
    if (value <= thresholds.warning) return <AlertTriangle className="w-4 h-4" />;
    return <AlertTriangle className="w-4 h-4" />;
  };

  if (!isVisible) {
    return (
      <button
        onClick={() => setIsVisible(true)}
        className="fixed bottom-4 right-4 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors z-50"
        title="Show Performance Monitor"
      >
        <Activity className="w-5 h-5" />
      </button>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-w-sm">
      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900">Performance Monitor</h3>
          <div className="flex space-x-2">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-gray-500 hover:text-gray-700"
            >
              {isExpanded ? '−' : '+'}
            </button>
            <button
              onClick={() => setIsVisible(false)}
              className="text-gray-500 hover:text-gray-700"
            >
              ×
            </button>
          </div>
        </div>

        <div className="space-y-3">
          {/* Render Time */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Zap className="w-4 h-4 text-blue-600" />
              <span className="text-sm text-gray-600">Render Time</span>
            </div>
            <div className={`flex items-center space-x-1 ${getStatusColor(metrics.renderTime, { good: 100, warning: 300 })}`}>
              {getStatusIcon(metrics.renderTime, { good: 100, warning: 300 })}
              <span className="text-sm font-medium">{metrics.renderTime}ms</span>
            </div>
          </div>

          {/* Memory Usage */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Database className="w-4 h-4 text-green-600" />
              <span className="text-sm text-gray-600">Memory</span>
            </div>
            <div className={`flex items-center space-x-1 ${getStatusColor(metrics.memoryUsage, { good: 50, warning: 100 })}`}>
              {getStatusIcon(metrics.memoryUsage, { good: 50, warning: 100 })}
              <span className="text-sm font-medium">{metrics.memoryUsage}MB</span>
            </div>
          </div>

          {/* Cache Hit Rate */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Activity className="w-4 h-4 text-purple-600" />
              <span className="text-sm text-gray-600">Cache Hit Rate</span>
            </div>
            <div className={`flex items-center space-x-1 ${getStatusColor(100 - metrics.cacheHitRate, { good: 20, warning: 50 })}`}>
              {getStatusIcon(100 - metrics.cacheHitRate, { good: 20, warning: 50 })}
              <span className="text-sm font-medium">{metrics.cacheHitRate}%</span>
            </div>
          </div>

          {/* Security Events */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Shield className="w-4 h-4 text-red-600" />
              <span className="text-sm text-gray-600">Security Events</span>
            </div>
            <div className={`flex items-center space-x-1 ${getStatusColor(metrics.securityEvents, { good: 0, warning: 5 })}`}>
              {getStatusIcon(metrics.securityEvents, { good: 0, warning: 5 })}
              <span className="text-sm font-medium">{metrics.securityEvents}</span>
            </div>
          </div>

          {isExpanded && (
            <div className="pt-3 border-t border-gray-200">
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>Storage Usage</span>
                  <span>{metrics.storageUsage}KB</span>
                </div>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>Rendering Mode</span>
                  <span className="capitalize">{hybridRenderer.getRenderMode(window.location.pathname)}</span>
                </div>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>Cache Size</span>
                  <span>Active</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PerformanceMonitor;

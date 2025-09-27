import React from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Lock, 
  Eye, 
  AlertTriangle, 
  CheckCircle, 
  ArrowRight, 
  Code, 
  Zap,
  Brain,
  Cloud,
  Database,
  Users,
  Settings,
  FileText,
  Key,
  Fingerprint
} from 'lucide-react';

const DevilSecurityPage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="space-y-8"
    >
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-red-600 to-orange-600 rounded-2xl p-8 text-white">
        <div className="max-w-4xl">
          <h1 className="text-4xl font-bold mb-4">
            Brolostack Devil Security Framework
          </h1>
          <p className="text-xl text-red-100 mb-6">
            Revolutionary zero-knowledge encryption and source code protection system. 
            Your data and code remain completely secure with quantum-proof encryption and advanced obfuscation.
          </p>
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center space-x-2 bg-white/20 rounded-lg px-4 py-2">
              <Shield size={20} />
              <span className="font-medium">Zero-Knowledge Encryption</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/20 rounded-lg px-4 py-2">
              <Lock size={20} />
              <span className="font-medium">Source Code Protection</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/20 rounded-lg px-4 py-2">
              <Eye size={20} />
              <span className="font-medium">Anti-Debugging</span>
            </div>
          </div>
        </div>
      </div>

      {/* Core Features */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">🔥 Core Security Features</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="bg-red-100 rounded-lg p-2">
                <Lock className="text-red-600" size={20} />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Zero-Knowledge Encryption</h3>
                <p className="text-gray-600 text-sm">Data encryption where keys never leave the client, ensuring complete privacy.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="bg-orange-100 rounded-lg p-2">
                <Shield className="text-orange-600" size={20} />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Source Code Protection</h3>
                <p className="text-gray-600 text-sm">Complete obfuscation of JavaScript, TypeScript, HTML, CSS, and PHP code.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="bg-yellow-100 rounded-lg p-2">
                <Eye className="text-yellow-600" size={20} />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Anti-Debugging Protection</h3>
                <p className="text-gray-600 text-sm">Prevents reverse engineering and debugging attempts.</p>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="bg-green-100 rounded-lg p-2">
                <Key className="text-green-600" size={20} />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Quantum-Proof Encryption</h3>
                <p className="text-gray-600 text-sm">Advanced encryption algorithms resistant to quantum computing attacks.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="bg-blue-100 rounded-lg p-2">
                <Fingerprint className="text-blue-600" size={20} />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Browser Storage Protection</h3>
                <p className="text-gray-600 text-sm">Encrypts localStorage, sessionStorage, and IndexedDB data.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="bg-purple-100 rounded-lg p-2">
                <AlertTriangle className="text-purple-600" size={20} />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Real-time Monitoring</h3>
                <p className="text-gray-600 text-sm">Continuous security monitoring and threat detection.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Security Capabilities */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">🛡️ Security Capabilities</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center p-6 bg-red-50 rounded-xl">
            <div className="bg-red-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Lock className="text-red-600" size={32} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Data Encryption</h3>
            <p className="text-gray-600 text-sm">AES-256-GCM encryption with Argon2 key derivation and automatic key rotation.</p>
          </div>
          <div className="text-center p-6 bg-orange-50 rounded-xl">
            <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <FileText className="text-orange-600" size={32} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Code Obfuscation</h3>
            <p className="text-gray-600 text-sm">Complete variable, function, and class name scrambling for all supported languages.</p>
          </div>
          <div className="text-center p-6 bg-yellow-50 rounded-xl">
            <div className="bg-yellow-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Eye className="text-yellow-600" size={32} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Anti-Debugging</h3>
            <p className="text-gray-600 text-sm">Detects and prevents debugging tools, DevTools, and reverse engineering attempts.</p>
          </div>
        </div>
      </div>

      {/* Quick Start */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">🚀 Quick Start</h2>
        
        <div className="space-y-6">
          {/* Step 1 */}
          <div className="border-l-4 border-red-500 pl-6">
            <div className="flex items-center mb-3">
              <div className="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Initialize Devil Security</h3>
            </div>
            <div className="bg-gray-900 rounded-lg p-4 text-green-400 font-mono text-sm overflow-x-auto">
              <pre>{`import { BrolostackDevilProvider, Devil } from 'brolostack';

// Initialize Devil security
const devil = new Devil({
  protectionLevel: 'quantum-proof',
  encryption: {
    algorithm: 'AES-256-GCM',
    keyDerivation: 'Argon2',
    keyRotationInterval: 86400000 // 24 hours
  },
  obfuscation: {
    enabled: true,
    level: 'maximum',
    languages: ['javascript', 'typescript', 'html', 'css']
  },
  antiDebugging: {
    enabled: true,
    detectDevTools: true,
    detectDebugger: true
  }
});

await devil.initialize();`}</pre>
            </div>
          </div>

          {/* Step 2 */}
          <div className="border-l-4 border-orange-500 pl-6">
            <div className="flex items-center mb-3">
              <div className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Protect Your Data</h3>
            </div>
            <div className="bg-gray-900 rounded-lg p-4 text-green-400 font-mono text-sm overflow-x-auto">
              <pre>{`// Encrypt sensitive data
const encryptedData = await devil.encrypt({
  userEmail: 'john@example.com',
  creditCard: '4111-1111-1111-1111',
  personalInfo: {
    name: 'John Doe',
    ssn: '123-45-6789'
  }
});

// Store encrypted data
localStorage.setItem('userData', encryptedData);

// Decrypt when needed
const decryptedData = await devil.decrypt(encryptedData);
console.log(decryptedData.userEmail); // john@example.com`}</pre>
            </div>
          </div>

          {/* Step 3 */}
          <div className="border-l-4 border-yellow-500 pl-6">
            <div className="flex items-center mb-3">
              <div className="bg-yellow-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Protect Source Code</h3>
            </div>
            <div className="bg-gray-900 rounded-lg p-4 text-green-400 font-mono text-sm overflow-x-auto">
              <pre>{`// Protect JavaScript/TypeScript files
const protectedCode = await devil.protectSourceCode({
  filePath: 'src/app.js',
  language: 'javascript',
  protectionLevel: 'maximum'
});

// Protect HTML files
const protectedHTML = await devil.protectSourceCode({
  filePath: 'index.html',
  language: 'html',
  protectionLevel: 'maximum'
});

// Build with protection
await devil.buildWithProtection({
  inputDir: 'src',
  outputDir: 'dist',
  protectionConfig: {
    javascript: { level: 'maximum' },
    html: { level: 'maximum' },
    css: { level: 'high' }
  }
});`}</pre>
            </div>
          </div>
        </div>
      </div>

      {/* React Integration */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">⚛️ React Integration</h2>
        
        <div className="space-y-4">
          <div className="bg-gray-900 rounded-lg p-4 text-green-400 font-mono text-sm overflow-x-auto">
            <pre>{`import { BrolostackDevilProvider } from 'brolostack/react';

function App() {
  return (
    <BrolostackDevilProvider 
      config={{
        protectionLevel: 'quantum-proof',
        encryption: {
          enabled: true,
          algorithm: 'AES-256-GCM'
        },
        obfuscation: {
          enabled: true,
          level: 'maximum'
        },
        antiDebugging: {
          enabled: true,
          detectDevTools: true
        }
      }}
    >
      <YourApp />
    </BrolostackDevilProvider>
  );
}

// Use Devil security in components
function SecureComponent() {
  const { devil } = useBrolostackDevil();
  
  const handleSecureData = async () => {
    const encrypted = await devil.encrypt({
      sensitiveData: 'This is secret'
    });
    
    // Store encrypted data
    localStorage.setItem('secureData', encrypted);
  };
  
  return (
    <button onClick={handleSecureData}>
      Store Secure Data
    </button>
  );
}`}</pre>
          </div>
        </div>
      </div>

      {/* Protection Levels */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">🔒 Protection Levels</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">Level</th>
                <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">Encryption</th>
                <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">Obfuscation</th>
                <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">Anti-Debugging</th>
                <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">Use Case</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-200 px-4 py-3 font-medium text-gray-900">Basic</td>
                <td className="border border-gray-200 px-4 py-3 text-green-600">AES-128</td>
                <td className="border border-gray-200 px-4 py-3 text-blue-600">Variable renaming</td>
                <td className="border border-gray-200 px-4 py-3 text-orange-600">Basic detection</td>
                <td className="border border-gray-200 px-4 py-3 text-gray-600">Development</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-3 font-medium text-gray-900">Advanced</td>
                <td className="border border-gray-200 px-4 py-3 text-green-600">AES-256</td>
                <td className="border border-gray-200 px-4 py-3 text-blue-600">Function scrambling</td>
                <td className="border border-gray-200 px-4 py-3 text-orange-600">DevTools detection</td>
                <td className="border border-gray-200 px-4 py-3 text-gray-600">Staging</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-3 font-medium text-gray-900">Maximum</td>
                <td className="border border-gray-200 px-4 py-3 text-green-600">AES-256-GCM</td>
                <td className="border border-gray-200 px-4 py-3 text-blue-600">Complete obfuscation</td>
                <td className="border border-gray-200 px-4 py-3 text-orange-600">Full protection</td>
                <td className="border border-gray-200 px-4 py-3 text-gray-600">Production</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-3 font-medium text-gray-900">Quantum-Proof</td>
                <td className="border border-gray-200 px-4 py-3 text-green-600">Post-quantum crypto</td>
                <td className="border border-gray-200 px-4 py-3 text-blue-600">Maximum + mutation</td>
                <td className="border border-gray-200 px-4 py-3 text-orange-600">Military-grade</td>
                <td className="border border-gray-200 px-4 py-3 text-gray-600">Enterprise</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Supported Languages */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">🌐 Supported Languages</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Frontend Languages</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="bg-yellow-100 rounded-lg p-2">
                  <Code className="text-yellow-600" size={16} />
                </div>
                <div>
                  <div className="font-medium text-gray-900">JavaScript/TypeScript</div>
                  <div className="text-sm text-gray-600">Complete variable, function, and class obfuscation</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-orange-100 rounded-lg p-2">
                  <FileText className="text-orange-600" size={16} />
                </div>
                <div>
                  <div className="font-medium text-gray-900">HTML</div>
                  <div className="text-sm text-gray-600">Attribute and embedded script protection</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-blue-100 rounded-lg p-2">
                  <Settings className="text-blue-600" size={16} />
                </div>
                <div>
                  <div className="font-medium text-gray-900">CSS</div>
                  <div className="text-sm text-gray-600">Selector and variable name obfuscation</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Backend Languages</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="bg-purple-100 rounded-lg p-2">
                  <Code className="text-purple-600" size={16} />
                </div>
                <div>
                  <div className="font-medium text-gray-900">PHP</div>
                  <div className="text-sm text-gray-600">Server-side logic completely scrambled</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-green-100 rounded-lg p-2">
                  <Code className="text-green-600" size={16} />
                </div>
                <div>
                  <div className="font-medium text-gray-900">Python</div>
                  <div className="text-sm text-gray-600">Variable, function, and class name scrambling</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-red-100 rounded-lg p-2">
                  <Code className="text-red-600" size={16} />
                </div>
                <div>
                  <div className="font-medium text-gray-900">Node.js</div>
                  <div className="text-sm text-gray-600">Complete server-side protection</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Performance Impact */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">⚡ Performance Impact</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center p-6 bg-green-50 rounded-xl">
            <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Zap className="text-green-600" size={32} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Encryption Speed</h3>
            <p className="text-2xl font-bold text-green-600 mb-2">50,000/sec</p>
            <p className="text-gray-600 text-sm">Data encryption operations per second</p>
          </div>
          <div className="text-center p-6 bg-blue-50 rounded-xl">
            <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <FileText className="text-blue-600" size={32} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Obfuscation Time</h3>
            <p className="text-2xl font-bold text-blue-600 mb-2">&lt;100ms</p>
            <p className="text-gray-600 text-sm">Average code protection time</p>
          </div>
          <div className="text-center p-6 bg-purple-50 rounded-xl">
            <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Shield className="text-purple-600" size={32} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Memory Overhead</h3>
            <p className="text-2xl font-bold text-purple-600 mb-2">2MB</p>
            <p className="text-gray-600 text-sm">Additional memory usage</p>
          </div>
        </div>
      </div>

      {/* Next Steps */}
      <div className="bg-gradient-to-r from-red-600 to-orange-600 rounded-xl p-8 text-white">
        <h2 className="text-2xl font-bold mb-4">🔥 Ready to Secure Your Application?</h2>
        <p className="text-red-100 mb-6">
          Explore advanced security features, implementation guides, and real-world examples 
          to build bulletproof applications with Brolostack Devil Security.
        </p>
        <div className="flex flex-wrap gap-4">
          <a 
            href="/docs/security-framework-guide" 
            className="inline-flex items-center px-6 py-3 bg-white/20 hover:bg-white/30 rounded-lg transition-colors"
          >
            <Code className="mr-2" size={20} />
            Implementation Guide
            <ArrowRight className="ml-2" size={16} />
          </a>
          <a 
            href="/docs/security-framework" 
            className="inline-flex items-center px-6 py-3 bg-white/20 hover:bg-white/30 rounded-lg transition-colors"
          >
            <Shield className="mr-2" size={20} />
            Security Framework
            <ArrowRight className="ml-2" size={16} />
          </a>
          <a 
            href="/docs/enterprise-features" 
            className="inline-flex items-center px-6 py-3 bg-white/20 hover:bg-white/30 rounded-lg transition-colors"
          >
            <Settings className="mr-2" size={20} />
            Enterprise Features
            <ArrowRight className="ml-2" size={16} />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default DevilSecurityPage;

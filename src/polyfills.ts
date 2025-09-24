// Polyfills for browser environment compatibility
// This file ensures Node.js globals are available in the browser

// Polyfill for process
if (typeof process === 'undefined') {
  (globalThis as any).process = {
    env: {
      NODE_ENV: import.meta.env.MODE || 'development',
      ...import.meta.env
    },
    versions: {
      node: '18.0.0',
      v8: '10.0.0',
      uv: '1.0.0',
      zlib: '1.0.0',
      brotli: '1.0.0',
      ares: '1.0.0',
      modules: '108',
      nghttp2: '1.0.0',
      napi: '8',
      llhttp: '6.0.0',
      openssl: '3.0.0',
      cldr: '41.0',
      icu: '71.0',
      tz: '2022a',
      unicode: '14.0'
    },
    platform: 'browser',
    nextTick: (callback: Function) => setTimeout(callback, 0),
    cwd: () => '/',
    chdir: () => {},
    umask: () => 0,
    hrtime: () => [0, 0],
    uptime: () => 0,
    memoryUsage: () => ({
      rss: 0,
      heapTotal: 0,
      heapUsed: 0,
      external: 0,
      arrayBuffers: 0
    }),
    cpuUsage: () => ({ user: 0, system: 0 }),
    exit: () => {},
    kill: () => {},
    on: () => {},
    off: () => {},
    emit: () => {},
    addListener: () => {},
    removeListener: () => {},
    once: () => {},
    prependListener: () => {},
    prependOnceListener: () => {},
    listeners: () => [],
    binding: () => {},
    _linkedBinding: () => {},
    dlopen: () => {},
    _debugProcess: () => {},
    _debugEnd: () => {},
    _startProfilerIdleNotifier: () => {},
    _stopProfilerIdleNotifier: () => {},
    _getActiveRequests: () => [],
    _getActiveHandles: () => [],
    reallyExit: () => {},
    abort: () => {},
    execPath: '/usr/local/bin/node',
    exitCode: 0,
    features: {},
    pid: 1,
    ppid: 0,
    release: {},
    stderr: {} as any,
    stdin: {} as any,
    stdout: {} as any,
    title: 'browser',
    version: 'v18.0.0'
  };
}

// Polyfill for global
if (typeof global === 'undefined') {
  (globalThis as any).global = globalThis;
}

// Polyfill for Buffer (if needed)
if (typeof Buffer === 'undefined') {
  (globalThis as any).Buffer = {
    isBuffer: () => false,
    from: (data: any) => new Uint8Array(data),
    alloc: (size: number) => new Uint8Array(size),
    allocUnsafe: (size: number) => new Uint8Array(size)
  };
}

export {};

# Brolostack Interactive Website

A comprehensive, production-ready interactive website built with the Brolostack framework.

## 🚀 Features

- **Core Brolostack Integration** - Complete framework implementation
- **Security Framework** - XSS protection, CSP, input validation
- **Storage System** - Local storage with fallback support
- **Performance Monitoring** - Real-time analytics and optimization
- **SEO Optimization** - Dynamic meta tags and social media integration
- **Browser Compatibility** - Comprehensive feature detection and fallbacks

## 🛠️ Tech Stack

- React + TypeScript
- Brolostack Framework
- Vite Build System
- Tailwind CSS
- React Router DOM

## 🎯 Status

All systems operational with 6 active indicators:
- �� Brolostack Active
- 🔒 Security Active  
- 💾 Storage Active
- ⚡ Performance Active
- 🔍 SEO Active
- 🌐 Browser Active

## 🚀 Getting Started

```bash
npm install
npm run dev
```

## 📦 Build for Production

```bash
npm run build
npm run preview
```

## 🌐 Deploy to Vercel

### Option 1: Deploy via Vercel Dashboard

1. **Fork or clone this repository**
2. **Go to [vercel.com](https://vercel.com)**
3. **Click "New Project"**
4. **Import your GitHub repository**
5. **Configure build settings:**
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
6. **Click "Deploy"**

### Option 2: Deploy via Vercel CLI

```bash
# Install Vercel CLI globally
npm i -g vercel

# Login to Vercel
vercel login

# Deploy from project directory
vercel

# For production deployment
vercel --prod
```

### Option 3: One-Click Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Beunec/brolostack-site.git)

## 🔧 Environment Variables

Create a `.env.local` file for production:

```env
# Brolostack Configuration
NODE_ENV=production
VITE_APP_NAME=Brolostack Interactive Website
VITE_APP_VERSION=1.0.0

# Optional: Analytics
VITE_ANALYTICS_ID=your_analytics_id
```

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── docs/           # Documentation components
│   ├── Header.tsx      # Site header
│   ├── Footer.tsx      # Site footer
│   └── BrowserCompatibility.tsx
├── lib/                # Core libraries
│   ├── brolostack.ts   # Brolostack integration
│   ├── security.ts     # Security framework
│   └── rendering.ts    # Rendering utilities
├── pages/              # Page components
├── hooks/              # Custom React hooks
├── utils/              # Utility functions
└── App.tsx             # Main application
```

## 🚀 Performance Features

- **Code Splitting** - Automatic route-based splitting
- **Lazy Loading** - Documentation pages loaded on demand
- **Bundle Optimization** - Manual chunking for optimal loading
- **Caching** - Intelligent caching strategies
- **Preloading** - Critical resources preloaded

## 🔒 Security Features

- **XSS Protection** - Advanced input validation
- **CSP Headers** - Content Security Policy
- **Rate Limiting** - Protection against abuse
- **Secure Storage** - Encrypted local storage
- **Input Sanitization** - Safe data handling

## 📱 Browser Support

- **Modern Browsers** - Chrome, Firefox, Safari, Edge
- **Mobile Support** - Responsive design
- **Progressive Enhancement** - Graceful degradation
- **Feature Detection** - Automatic fallbacks

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

---

Built with ❤️ using the Brolostack framework.

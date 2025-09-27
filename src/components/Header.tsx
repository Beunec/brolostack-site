import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const headerVariants = {
    initial: { backgroundColor: 'rgba(255, 255, 255, 0)' },
    scrolled: { backgroundColor: 'rgba(255, 255, 255, 0.95)' }
  };

  return (
    <motion.header 
      className={`header ${isScrolled ? 'scrolled' : ''}`}
      variants={headerVariants}
      animate={isScrolled ? 'scrolled' : 'initial'}
      transition={{ duration: 0.3 }}
    >
      <div className="container">
        <div className="header-content">
          {/* Logo */}
          <Link to="/" className="logo">
            <img 
              src="https://ik.imagekit.io/brolostack/Brolostack%20Logo" 
              alt="Brolostack" 
              className="logo-image"
            />
            <div className="logo-text">
              <span className="logo-name">Brolostack</span>
              <span className="version-tag">v1.0.2</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="desktop-nav-center">
            <Link to="/docs/getting-started" className="nav-link">
              Documentation
            </Link>
            <a 
              href="https://www.beunec.co" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="nav-link"
            >
              Company
            </a>
          </nav>

          {/* CTA Button */}
          <motion.a 
            href="https://www.npmjs.com/package/brolostack" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="cta-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            NPM Install Brolostack
          </motion.a>


          {/* Mobile Menu Button */}
          <button 
            className="mobile-menu-button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.nav 
              className="mobile-nav"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Link 
                to="/docs/getting-started" 
                className="mobile-nav-link"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Documentation
              </Link>
              <a 
                href="https://www.beunec.co" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="mobile-nav-link"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Company
              </a>
              <a 
                href="https://www.npmjs.com/package/brolostack" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="mobile-cta-button"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                NPM Install Brolostack
              </a>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>

      <style>{`
        .header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          backdrop-filter: blur(10px);
          border-bottom: 1px solid rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
        }

        .header.scrolled {
          box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .header-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 80px;
        }

        .logo {
          display: flex;
          align-items: center;
          gap: 12px;
          text-decoration: none;
        }

        .logo-image {
          height: 48px;
          width: auto;
        }

        .logo-text {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .logo-name {
          font-size: 24px;
          font-weight: 700;
          color: #00477d;
        }

        .version-tag {
          background-color: #00477d;
          color: white;
          padding: 2px 8px;
          border-radius: 12px;
          font-size: 12px;
          font-weight: 600;
        }

        .desktop-nav-center {
          display: flex;
          align-items: center;
          gap: 40px;
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
        }


        .nav-link {
          color: black;
          text-decoration: none;
          font-weight: 500;
          font-size: 16px;
          transition: all 0.3s ease;
          position: relative;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 2px;
          background-color: #00477d;
          transition: width 0.3s ease;
        }

        .nav-link:hover::after {
          width: 100%;
        }
        
        .cta-button {
          background-color: #00477d;
          color: #FFFFFF;
          padding: 12px 24px;
          border-radius: 8px;
          text-decoration: none;
          font-weight: 600;
          transition: all 0.3s ease;
          box-shadow: 0 2px 8px rgba(0, 71, 125, 0.2);
        }

        .cta-button:hover {
          background-color: #003a6b;
          box-shadow: 0 4px 12px rgba(0, 71, 125, 0.3);
        }

        .mobile-menu-button {
          display: none;
          background: none;
          border: none;
          color: black;
          cursor: pointer;
          padding: 8px;
          border-radius: 4px;
        }

        .mobile-nav {
          display: none;
          flex-direction: column;
          gap: 16px;
          padding: 24px 0;
          border-top: 1px solid rgba(0, 0, 0, 0.1);
          background-color: white;
          align-items: center
        }

        .mobile-nav-link {
          color: black;
          text-decoration: none;
          font-weight: 500;
          padding: 8px 0;
          transition: all 0.3s ease;
        }

        .mobile-nav-link:hover {
          color: #00477d;
        }

        .mobile-cta-button {
          background-color: #00477d;
          color: #FFFFFF;
          padding: 12px 24px;
          border-radius: 8px;
          text-decoration: none;
          font-weight: 600;
          text-align: center;
          transition: all 0.3s ease;
        }

        .mobile-cta-button:hover {
          background-color: #003a6b;
        }

        @media (max-width: 1024px) {
          .desktop-nav-center {
            display: none;
          }

          .cta-button {
            display: none;
          }

          .mobile-menu-button {
            display: block;
            position: absolute;
            right: 24px;
          }

          .mobile-nav {
            display: flex;
          }

          .container {
            padding: 0 16px;
          }

          .header-content {
            justify-content: flex-start;
            position: relative;
          }

          .logo-name {
            font-size: 20px;
          }

          .logo-image {
            height: 40px;
          }
        }

        @media (min-width: 768px) and (max-width: 1024px) {
          .container {
            max-width: 768px;
          }

          .desktop-nav-center {
            gap: 32px;
          }
        }
      `}</style>
    </motion.header>
  );
};

export default Header;
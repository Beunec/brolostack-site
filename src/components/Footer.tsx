import React from 'react';
import { Github, Linkedin, Youtube, Twitter, Instagram } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/Beunec/brolostack', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/company/beunecofficial/', label: 'LinkedIn' },
    { icon: Youtube, href: 'https://www.youtube.com/@beunec', label: 'YouTube' },
    { icon: Twitter, href: 'https://x.com/beunecofficial', label: 'Twitter' },
    { icon: Instagram, href: 'https://www.instagram.com/beunec_', label: 'Instagram' }
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">Brolostack</h3>
            <p className="footer-description">
              A Local-First Full-Stack Framework with Optional Cloud Integration
            </p>
            <div className="social-links">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={label}
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>

          <div className="footer-section">
            <h4 className="section-title">Framework</h4>
            <ul className="footer-links">
              <li><a href="/docs/getting-started">Getting Started</a></li>
              <li><a href="/docs/ai-framework">AI Framework</a></li>
              <li><a href="/docs/security">Security</a></li>
              <li><a href="/docs/websocket">WebSocket</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="section-title">Resources</h4>
            <ul className="footer-links">
              <li><a href="/docs/examples">Examples</a></li>
              <li><a href="/docs/api-reference">API Reference</a></li>
              <li><a href="https://github.com/Beunec/brolostack" target="_blank" rel="noopener noreferrer">GitHub</a></li>
              <li><a href="https://www.npmjs.com/package/brolostack" target="_blank" rel="noopener noreferrer">NPM Package</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="section-title">Company</h4>
            <ul className="footer-links">
              <li><a href="https://www.beunec.co" target="_blank" rel="noopener noreferrer">About Beunec</a></li>
              <li><a href="https://www.beunec.co/careers" target="_blank" rel="noopener noreferrer">Careers</a></li>
              <li><a href="https://www.beunec.co/blog" target="_blank" rel="noopener noreferrer">Blog</a></li>
              <li><a href="https://www.beunec.co/contact" target="_blank" rel="noopener noreferrer">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="copyright">
              © 2025 Beunec Technologies, Inc. All rights reserved.
            </p>
            <p className="version">
              Brolostack v1.0.2 • Made with ❤️ by the Beunec Technologies Team
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .footer {
          background-color: #f8fafc;
          border-top: 1px solid #e2e8f0;
          padding: 64px 0 32px;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .footer-content {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          gap: 48px;
          margin-bottom: 48px;
        }

        .footer-section h3.footer-title {
          font-size: 24px;
          font-weight: 700;
          color: #00477d;
          margin-bottom: 16px;
        }

        .footer-description {
          color: #64748b;
          margin-bottom: 24px;
          line-height: 1.6;
        }

        .social-links {
          display: flex;
          gap: 16px;
        }

        .social-link {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          background-color: white;
          color: #64748b;
          border-radius: 8px;
          text-decoration: none;
          transition: all 0.3s ease;
          border: 1px solid #e2e8f0;
        }

        .social-link:hover {
          background-color: #00477d;
          color: white;
          border-color: #00477d;
        }

        .section-title {
          font-size: 16px;
          font-weight: 600;
          color: black;
          margin-bottom: 16px;
        }

        .footer-links {
          list-style: none;
          padding: 0;
        }

        .footer-links li {
          margin-bottom: 8px;
        }

        .footer-links a {
          color: #64748b;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .footer-links a:hover {
          color: #00477d;
        }

        .footer-bottom {
          border-top: 1px solid #e2e8f0;
          padding-top: 32px;
        }

        .footer-bottom-content {
          text-align: center;
        }

        .copyright {
          color: #64748b;
          font-size: 14px;
          margin-bottom: 8px;
        }

        .version {
          color: #94a3b8;
          font-size: 14px;
        }

        @media (max-width: 968px) {
          .footer-content {
            grid-template-columns: 1fr 1fr;
            gap: 32px;
          }
        }

        @media (max-width: 768px) {
          .footer {
            padding: 48px 0 24px;
          }

          .footer-content {
            grid-template-columns: 1fr;
            gap: 32px;
            margin-bottom: 32px;
          }

          .container {
            padding: 0 16px;
          }

          .social-links {
            justify-content: center;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
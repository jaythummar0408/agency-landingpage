'use client'

import { FaTwitter, FaLinkedin, FaGithub, FaDribbble } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: <FaTwitter />, href: '#', label: 'Twitter' },
    { icon: <FaLinkedin />, href: '#', label: 'LinkedIn' },
    { icon: <FaGithub />, href: '#', label: 'GitHub' },
    { icon: <FaDribbble />, href: '#', label: 'Dribbble' },
  ]

  return (
    <footer className="bg-gray-900 dark:bg-black text-gray-300 py-12 px-4 sm:px-6 lg:px-8"
            data-testid="footer">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-2" data-testid="footer-brand">
              Aurora Studio
            </h3>
            <p className="text-gray-400 text-sm" data-testid="footer-tagline">
              Custom software solutions, built fast and done right.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#privacy"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                  data-testid="footer-link-privacy"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#terms"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                  data-testid="footer-link-terms"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-white font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  aria-label={link.label}
                  className="text-gray-400 hover:text-white transition-colors text-xl"
                  data-testid={`footer-social-${link.label.toLowerCase()}`}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
          <p data-testid="footer-copyright">
            &copy; {currentYear} Aurora Studio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

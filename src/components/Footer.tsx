import { motion } from 'motion/react';
import { Github, Linkedin, Instagram, Mail, Code2, MapPin, Phone } from 'lucide-react';

export function Footer() {
  const socialLinks = [
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Github, href: 'https://github.com', label: 'GitHub' },
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
    { icon: Mail, href: 'mailto:contact@brainard.edu', label: 'Email' },
  ];

  const quickLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Event Details', href: '#event-details' },
    { name: 'Timeline', href: '#timeline' },
    { name: 'Tracks', href: '#tracks' },
  ];

  return (
    <footer id="contact" className="relative pt-20 pb-10 border-t border-purple-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 rounded-xl bg-gradient-to-br from-purple-600 to-cyan-500">
                <Code2 className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Developer Club
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Empowering developers to innovate, collaborate, and build solutions that redefine technology.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-white mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <MapPin className="w-4 h-4 mt-1 text-cyan-400 flex-shrink-0" />
                <span>Online Event<br />Accessible Worldwide</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Mail className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <a href="mailto:developersclub@yourcollege.edu" className="hover:text-cyan-400 transition-colors">
                  developersclub@yourcollege.edu
                </a>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <span className="text-cyan-400">Discord:</span>
                <a href="https://discord.gg/devrush" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">
                  discord.gg/devrush
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-white mb-4">Follow Us</h3>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-cyan-600 rounded-xl blur-sm opacity-0 group-hover:opacity-100 transition-all"></div>
                  <div className="relative w-10 h-10 bg-black/60 backdrop-blur-sm border border-purple-500/30 group-hover:border-cyan-500/50 rounded-xl flex items-center justify-center transition-all">
                    <social.icon className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-colors" />
                  </div>
                </a>
              ))}
            </div>
            <div className="mt-6">
              <p className="text-gray-400 text-sm mb-3">Subscribe to our newsletter</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 px-3 py-2 bg-black/60 border border-purple-500/30 rounded-xl text-white text-sm placeholder:text-gray-500 focus:outline-none focus:border-cyan-500/50 transition-all"
                />
                <button className="px-4 py-2 bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 rounded-xl text-white text-sm transition-all">
                  Join
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-purple-500/20"
        >
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center sm:text-left">
              © 2025 Developers Club. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

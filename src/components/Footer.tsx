import React from 'react';
import { Heart, Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    {
      icon: <Github size={20} />,
      href: 'https://github.com/raizomart',
      label: 'GitHub'
    },
    {
      icon: <Linkedin size={20} />,
      href: 'https://www.linkedin.com/in/raymart-anthony-adarme-442777323',
      label: 'LinkedIn'
    },
    {
      icon: <Mail size={20} />,
      href: 'mailto:adarmanthony@gmail.com',
      label: 'Email'
    }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Raymart Anthony A. Adarme</h3>
            <p className="text-gray-400 leading-relaxed">
              Frontend Developer & UI/UX Designer. 3rd Year Computer Science student at 
              Our Lady of Fatima University, passionate about creating beautiful user experiences.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transform hover:scale-110 transition-all duration-200"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2">
              {footerLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.getElementById(link.href.substring(1));
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Get In Touch</h4>
            <div className="space-y-2">
              <p className="text-gray-400">
                <a 
                  href="mailto:adarmanthony@gmail.com"
                  className="hover:text-blue-400 transition-colors duration-200"
                >
                  adarmanthony@gmail.com
                </a>
              </p>
              <p className="text-gray-400">
                <a 
                  href="tel:+639123456789"
                  className="hover:text-blue-400 transition-colors duration-200"
                >
                  (1) 702-415-1384
                </a>
              </p>
              <p className="text-gray-400">Las Vegas, Nevada</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 text-gray-400 mb-4 md:mb-0">
            <span>© {currentYear} Raymart Anthony A. Adarme. Built with</span>
            <Heart size={16} className="text-red-500" />
            <span>using React and Tailwind CSS</span>
          </div>
          
          <button
            onClick={scrollToTop}
            className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full transform hover:scale-110 transition-all duration-200 shadow-lg"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
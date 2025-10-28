import { Github, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/sonja-xiao-37347a241',
      icon: Linkedin,
    },
    {
      name: 'GitHub',
      url: 'https://github.com',
      icon: Github,
    },
    {
      name: 'Email',
      url: 'mailto:siyux1927@gmail.com',
      icon: Mail,
    },
  ];

  const contactInfo = [
    { icon: Mail, text: 'siyux1927@gmail.com' },
    { icon: Phone, text: '+49-15231499333' },
    { icon: MapPin, text: 'Berlin 10178, Germany' },
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
              Sonja Xiao
            </h3>
            <p className="text-gray-400 text-sm">
              Computer Engineering M.Sc.
            </p>
            <p className="text-gray-400 text-sm mt-2">
              Product Manager
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <item.icon className="h-4 w-4 text-purple-400" />
                  <span className="text-gray-400 text-sm">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-800 rounded-lg hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 transition-all duration-300 hover:scale-110"
                  aria-label={link.name}
                >
                  <link.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
            <div className="mt-6">
              <a
                href="#"
                className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg hover:shadow-lg transition-all duration-300 text-sm font-medium"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Sonja Xiao. All rights reserved. Built with React JS, Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;



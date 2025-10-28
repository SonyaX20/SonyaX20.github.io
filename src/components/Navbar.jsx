import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      setMousePosition({ x, y });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  // Parallax effect for navbar
  const navParallax = {
    x: mousePosition.x * 5,
    y: Math.max(0, mousePosition.y * 3), // Only move down, not up
  };

  return (
    <motion.nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 backdrop-blur-md shadow-lg'
          : 'bg-white/60 backdrop-blur-sm'
      }`}
      style={{
        transform: `translate(${navParallax.x}px, ${navParallax.y}px)`,
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo with parallax */}
          <Link to="/" className="flex items-center">
            <motion.span
              className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"
              whileHover={{ scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 400 }}
            >
              SX
            </motion.span>
            <motion.span
              className="ml-2 text-gray-900 font-semibold hidden sm:inline text-xl"
              whileHover={{ x: 5 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              Sonja Xiao
            </motion.span>
          </Link>

          {/* Desktop Menu with parallax */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item, index) => (
              <motion.div
                key={item.name}
                whileHover={{ y: -2 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <Link
                  to={item.path}
                  className={`relative text-lg font-medium transition-colors duration-200 ${
                    isActive(item.path)
                      ? 'text-purple-600'
                      : 'text-gray-700 hover:text-purple-600'
                  }`}
                >
                  {item.name}
                  {isActive(item.path) && (
                    <motion.span
                      className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-purple-600 to-pink-600"
                      layoutId="activeLink"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-purple-50 transition-colors"
            aria-label="Toggle menu"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {isOpen ? (
              <X className="h-6 w-6 text-gray-900" />
            ) : (
              <Menu className="h-6 w-6 text-gray-900" />
            )}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={{
          height: isOpen ? 'auto' : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="md:hidden overflow-hidden"
      >
        <div className="px-4 py-4 space-y-3 bg-white/95 backdrop-blur-md shadow-lg">
          {menuItems.map((item) => (
            <motion.div
              key={item.name}
              whileHover={{ x: 5 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <Link
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-2 rounded-lg text-lg font-medium transition-colors ${
                  isActive(item.path)
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                    : 'text-gray-700 hover:bg-purple-50'
                }`}
              >
                {item.name}
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Gradient Border with parallax effect */}
      <motion.div
        className="h-0.5 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500"
        style={{
          scaleX: 1 + Math.abs(mousePosition.x) * 0.1,
        }}
      />
    </motion.nav>
  );
};

export default Navbar;

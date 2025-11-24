import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    setIsHovering(false);
  }, [location]);

  const menuItems = [
    { label: 'Home', path: '/', description: 'Welcome to Growth SuperCharged' },
    { label: 'About', path: '/about', description: 'Learn about our story and mission' },
    { label: 'Services', path: '/services', description: 'Explore our comprehensive solutions' },
    { label: 'Team', path: '/team', description: 'Meet our expert team members' },
    { label: 'Contact', path: '/contact', description: 'Get in touch with us' },
  ];

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-[#1B1B1B]/95 backdrop-blur-md shadow-lg shadow-[#FF7A00]/10' : 'bg-[#1B1B1B]'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <nav className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
          <Link to="/" className="relative z-50">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3"
            >
              <div className="w-10 h-10 bg-[#FF7A00] rounded-md flex items-center justify-center font-bold text-sm text-white shadow-lg">
                GSC
              </div>
              <span
                className="text-xl md:text-2xl font-bold text-white"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Growth <span className="text-[#FF7A00]">SuperCharged</span>
              </span>
            </motion.div>
          </Link>

          {/* Desktop - Hover trigger area */}
          <div className="hidden md:block">
            <Link to="/contact">
              <button
                className="px-6 py-2.5 bg-[#FF7A00] text-white rounded-full font-medium hover:bg-[#FF8C1A] transition-colors duration-300 shadow-lg shadow-[#FF7A00]/50"
              >
                Get in Touch
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <Link to="/contact" className="md:hidden">
            <button
              className="px-6 py-2.5 bg-[#FF7A00] text-white rounded-full font-medium hover:bg-[#FF8C1A] transition-colors duration-300 shadow-lg shadow-[#FF7A00]/50"
            >
              Get in Touch
            </button>
          </Link>
        </nav>

        {/* Dropdown Menu on Hover - Desktop */}
        <AnimatePresence>
          {isHovering && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="hidden md:block overflow-hidden bg-[#1B1B1B] border-t border-[#FF7A00]/20"
            >
              <div className="max-w-7xl mx-auto px-6 md:px-12 py-8">
                <div className="grid grid-cols-1 gap-2">
                  {menuItems.map((item, index) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Link
                        to={item.path}
                        className="block group"
                      >
                        <div className="flex items-center justify-between p-4 rounded-lg hover:bg-[#FF7A00]/10 transition-all duration-300">
                          <div>
                            <h3
                              className="text-3xl md:text-4xl font-bold text-white group-hover:text-[#FF7A00] transition-colors duration-300 mb-1"
                              style={{ fontFamily: "'Playfair Display', serif" }}
                            >
                              {item.label}
                            </h3>
                            <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                              {item.description}
                            </p>
                          </div>
                          <motion.div
                            className="text-[#FF7A00] text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            animate={{ x: [0, 5, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                          >
                            →
                          </motion.div>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Mobile Full Screen Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] bg-[#1B1B1B] md:hidden"
          >
            <div className="max-w-7xl mx-auto px-6 h-full flex flex-col">
              <div className="h-20 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#FF7A00] rounded-md flex items-center justify-center font-bold text-sm text-white">
                    GSC
                  </div>
                  <span
                    className="text-xl font-bold text-white"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Growth <span className="text-[#FF7A00]">SuperCharged</span>
                  </span>
                </div>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="w-12 h-12 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors"
                >
                  <X className="w-6 h-6 text-white" />
                </button>
              </div>

              <div className="flex-1 flex items-center justify-center">
                <nav className="w-full">
                  <ul className="space-y-2">
                    {menuItems.map((item, index) => (
                      <motion.li
                        key={item.label}
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 + index * 0.1 }}
                      >
                        <Link
                          to={item.path}
                          onClick={() => setIsMenuOpen(false)}
                          className="block p-4 rounded-lg hover:bg-[#FF7A00]/10 transition-all duration-300 group"
                        >
                          <h3
                            className="text-4xl font-bold text-white group-hover:text-[#FF7A00] transition-colors duration-300 mb-2"
                            style={{ fontFamily: "'Playfair Display', serif" }}
                          >
                            {item.label}
                          </h3>
                          <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                            {item.description}
                          </p>
                        </Link>
                      </motion.li>
                    ))}
                  </ul>
                </nav>
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="pb-8 text-sm text-gray-400"
              >
                <p className="italic">Own The Edge</p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;

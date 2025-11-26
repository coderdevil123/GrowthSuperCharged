import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Logo from './Logo.png';
import MainLogo from './Main.png';

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
          isScrolled ? 'bg-[#0F172A]/95 backdrop-blur-md shadow-lg shadow-emerald-500/10' : 'bg-[#0F172A]'
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
              <img 
                src={Logo} 
                alt="Growth SuperCharged" 
                className="h-14 w-auto object-contain"
              />
            </motion.div>
          </Link>

          {/* Desktop - Hover trigger area */}
          <div className="hidden md:block">
            <AnimatedContactButton />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(true)}>
              <SpotlightButton text="Menu" />
            </button>
          </div>
        </nav>

        {/* Dropdown Menu on Hover - Desktop */}
        <AnimatePresence>
          {isHovering && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="hidden md:block overflow-hidden bg-[#0F172A] border-t border-emerald-500/20"
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
                        <div className="flex items-center justify-between p-4 rounded-lg hover:bg-emerald-500/10 transition-all duration-300">
                          <div>
                            <h3
                              className="text-3xl md:text-4xl font-bold text-white group-hover:text-emerald-400 transition-colors duration-300 mb-1"
                              style={{ fontFamily: "'Merienda', cursive" }}
                            >
                              {item.label}
                            </h3>
                            <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                              {item.description}
                            </p>
                          </div>
                          <motion.div
                            className="text-emerald-400 text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
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
            className="fixed inset-0 z-[100] bg-[#0F172A] md:hidden"
          >
            <div className="max-w-7xl mx-auto px-6 h-full flex flex-col">
              <div className="h-20 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img 
                    src={Logo} 
                    alt="Growth SuperCharged" 
                    className="h-10 w-auto object-contain"
                  />
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
                          className="block p-4 rounded-lg hover:bg-emerald-500/10 transition-all duration-300 group"
                        >
                          <h3
                            className="text-4xl font-bold text-white group-hover:text-emerald-400 transition-colors duration-300 mb-2"
                            style={{ fontFamily: "'Merienda', cursive" }}
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

const AnimatedContactButton: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [showLogo, setShowLogo] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Reset all states when location changes
  useEffect(() => {
    setIsClicked(false);
    setShowLogo(false);
    setIsHovered(false);
  }, [location]);

  const handleClick = () => {
    if (isClicked) return; // Prevent multiple clicks during animation
    
    setIsClicked(true);
    setShowLogo(true);
    
    // Keep logo visible for 1.5 seconds before navigating
    setTimeout(() => {
      navigate('/contact');
    }, 1500);
  };

  return (
    <motion.button
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative overflow-hidden rounded-full bg-emerald-500 px-8 py-2.5 text-base font-medium text-white shadow-lg shadow-emerald-500/50 transition-all duration-300 hover:bg-emerald-600 min-w-[160px]"
      whileTap={{ scale: 0.95 }}
    >
      {/* Supercharged electric pattern on hover - BOLD BLACK - EVEN SLOWER */}
      <AnimatePresence>
        {isHovered && !isClicked && (
          <>
            {/* Lightning bolt pattern overlay */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-black to-transparent opacity-70"
              initial={{ x: '-100%', skewX: -20 }}
              animate={{ x: '200%', skewX: -20 }}
              exit={{ x: '200%' }}
              transition={{ duration: 1.0, ease: 'easeInOut' }}
              style={{ 
                zIndex: 1,
                backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 8px, rgba(0, 0, 0, 0.8) 8px, rgba(0, 0, 0, 0.8) 16px)',
              }}
            />
            {/* Electric streak 1 */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-black to-transparent opacity-90"
              initial={{ x: '-100%', skewX: -15 }}
              animate={{ x: '200%', skewX: -15 }}
              transition={{ duration: 0.9, ease: 'easeInOut', delay: 0.1 }}
              style={{ 
                zIndex: 2,
                height: '4px',
                top: '25%',
              }}
            />
            {/* Electric streak 2 */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-900 to-transparent opacity-95"
              initial={{ x: '-100%', skewX: -10 }}
              animate={{ x: '200%', skewX: -10 }}
              transition={{ duration: 0.95, ease: 'easeInOut', delay: 0.05 }}
              style={{ 
                zIndex: 2,
                height: '5px',
                top: '50%',
              }}
            />
            {/* Electric streak 3 */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-black to-transparent opacity-85"
              initial={{ x: '-100%', skewX: -12 }}
              animate={{ x: '200%', skewX: -12 }}
              transition={{ duration: 1.0, ease: 'easeInOut' }}
              style={{ 
                zIndex: 2,
                height: '4px',
                top: '75%',
              }}
            />
            {/* Particle burst effect */}
            <motion.div
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.7, 0] }}
              transition={{ duration: 1.0, ease: 'easeInOut' }}
              style={{ 
                zIndex: 1,
                background: 'radial-gradient(circle at 50% 50%, rgba(0, 0, 0, 0.5) 0%, transparent 70%)',
              }}
            />
            {/* Additional intense flash */}
            <motion.div
              className="absolute inset-0 bg-black opacity-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.3, 0] }}
              transition={{ duration: 0.6, ease: 'easeInOut' }}
              style={{ zIndex: 3 }}
            />
          </>
        )}
      </AnimatePresence>

      {/* Text that slides out on click */}
      <motion.span
        className="relative z-10 block"
        animate={isClicked ? { x: 200, opacity: 0 } : { x: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        Get In Touch
      </motion.span>

      {/* Logo that slides in on click - centered and stays visible */}
      <AnimatePresence>
        {showLogo && (
          <motion.img
            src={MainLogo}
            alt="Growth SuperCharged"
            className="absolute left-1/2 top-1/2 h-8 w-auto object-contain"
            initial={{ x: '-150%', y: '-50%', opacity: 0 }}
            animate={{ x: '-50%', y: '-50%', opacity: 1 }}
            exit={{ x: '50%', y: '-50%', opacity: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            style={{ zIndex: 20 }}
          />
        )}
      </AnimatePresence>
    </motion.button>
  );
};

const SpotlightButton: React.FC<{ text: string }> = ({ text }) => {
  return (
    <motion.button
      className="relative overflow-hidden rounded-full bg-emerald-500 px-6 py-2.5 text-base font-medium text-white shadow-lg shadow-emerald-500/50 transition-all duration-300 hover:bg-emerald-600 min-w-[120px]"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <span className="relative z-10">{text}</span>
    </motion.button>
  );
};

export default Navbar;

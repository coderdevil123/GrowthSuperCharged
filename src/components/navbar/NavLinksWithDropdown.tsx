import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface DropdownContent {
  title: string;
  description: string;
  icon: string;
}

interface NavLink {
  label: string;
  href: string;
  hasDropdown?: boolean;
  dropdownContent?: DropdownContent[];
}

const navLinks: NavLink[] = [
  {
    label: 'Home',
    href: '/',
    hasDropdown: true,
    dropdownContent: [
      {
        title: 'Welcome',
        description: 'Discover our mission to supercharge your growth',
        icon: '🏠'
      },
      {
        title: 'Our Vision',
        description: 'Building the future of business growth',
        icon: '🎯'
      }
    ]
  },
  {
    label: 'About',
    href: '/about',
    hasDropdown: true,
    dropdownContent: [
      {
        title: 'Our Story',
        description: 'Learn about our journey and values',
        icon: '📖'
      },
      {
        title: 'Mission',
        description: 'Empowering businesses to reach their potential',
        icon: '🚀'
      }
    ]
  },
  {
    label: 'Services',
    href: '/services',
    hasDropdown: true,
    dropdownContent: [
      {
        title: 'Growth Strategy',
        description: 'Data-driven strategies for sustainable growth',
        icon: '📈'
      },
      {
        title: 'Performance Marketing',
        description: 'ROI-focused marketing campaigns',
        icon: '💡'
      },
      {
        title: 'Operational Scaling',
        description: 'Streamline operations for efficiency',
        icon: '⚙️'
      }
    ]
  },
  {
    label: 'Team',
    href: '/team',
    hasDropdown: true,
    dropdownContent: [
      {
        title: 'Meet the Team',
        description: 'Experts dedicated to your success',
        icon: '👥'
      },
      {
        title: 'Join Us',
        description: 'Explore career opportunities',
        icon: '💼'
      }
    ]
  },
  {
    label: 'Contact',
    href: '/contact',
    hasDropdown: true,
    dropdownContent: [
      {
        title: 'Get in Touch',
        description: 'Start your growth journey today',
        icon: '📧'
      },
      {
        title: 'Schedule a Call',
        description: 'Book a consultation with our experts',
        icon: '📞'
      }
    ]
  }
];

const NavLinksWithDropdown: React.FC = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <ul className="flex items-center gap-8">
      {navLinks.map((link) => (
        <li
          key={link.label}
          className="relative"
          onMouseEnter={() => link.hasDropdown && setActiveDropdown(link.label)}
          onMouseLeave={() => setActiveDropdown(null)}
        >
          <a
            href={link.href}
            className="text-white text-sm font-medium hover:text-emerald-400 transition-colors duration-200 ease-in relative group focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 rounded px-2 py-2 cursor-pointer flex items-center gap-1"
          >
            {link.label}
            {link.hasDropdown && (
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${
                  activeDropdown === link.label ? 'rotate-180' : ''
                }`}
              />
            )}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-400 group-hover:w-full transition-all duration-200 ease-in"></span>
          </a>

          <AnimatePresence>
            {link.hasDropdown && activeDropdown === link.label && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.2 }}
                className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-72 bg-[#0f1d33] border border-emerald-500/20 rounded-lg shadow-2xl overflow-hidden"
              >
                <div className="p-2">
                  {link.dropdownContent?.map((item, index) => (
                    <motion.a
                      key={index}
                      href={link.href}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="flex items-start gap-3 p-3 rounded-md hover:bg-emerald-500/10 transition-colors duration-200 group/item"
                    >
                      <span className="text-2xl mt-1">{item.icon}</span>
                      <div className="flex-1">
                        <h4 className="text-white font-semibold text-sm mb-1 group-hover/item:text-emerald-400 transition-colors">
                          {item.title}
                        </h4>
                        <p className="text-gray-400 text-xs leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </li>
      ))}
    </ul>
  );
};

export default NavLinksWithDropdown;

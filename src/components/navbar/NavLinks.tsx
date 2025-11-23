import React from 'react';

interface NavLink {
  label: string;
  href: string;
}

const navLinks: NavLink[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Team', href: '#team' },
  { label: 'Contact', href: '#contact' },
];

const NavLinks: React.FC = () => {
  return (
    <ul className="flex items-center gap-6 md:gap-8">
      {navLinks.map((link) => (
        <li key={link.label}>
          <a
            href={link.href}
            className="text-navbar-text text-body font-medium hover:text-navbar-hover transition-colors duration-200 ease-in relative group focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary rounded px-2 py-1 cursor-pointer"
          >
            {link.label}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-navbar-hover group-hover:w-full transition-all duration-200 ease-in"></span>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;

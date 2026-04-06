import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Shield, Database, BookOpen, Info, Menu, X } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  const navLinks = [
    { to: '/', label: 'Home', icon: Shield },
    { to: '/games', label: 'Games Database', icon: Database },
    { to: '/volatility-guide', label: 'Volatility Guide', icon: BookOpen },
    { to: '/about', label: 'About', icon: Info },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2">
              <span className="font-display font-extrabold text-xl tracking-tight text-gray-900">
                SLOTGAME <span className="text-red-600">INDEX</span>
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  cn(
                    "flex items-center gap-2 text-sm font-medium transition-colors hover:text-red-600",
                    isActive ? "text-red-600" : "text-gray-600"
                  )
                }
              >
                <link.icon size={16} />
                {link.label}
              </NavLink>
            ))}
            <a
              href="https://platinumcasino.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-red-700 transition-colors shadow-md hover:shadow-lg"
            >
              Play at Platinum Casino
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 py-4 px-4 space-y-2">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                cn(
                  "flex items-center gap-3 px-3 py-2 rounded-md text-base font-medium transition-colors",
                  isActive ? "bg-red-50 text-red-600" : "text-gray-600 hover:bg-gray-50"
                )
              }
            >
              <link.icon size={20} />
              {link.label}
            </NavLink>
          ))}
          <div className="pt-4">
            <a
              href="https://platinumcasino.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center bg-red-600 text-white px-4 py-3 rounded-lg text-base font-bold hover:bg-red-700 transition-colors shadow-md"
            >
              Play at Platinum Casino
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

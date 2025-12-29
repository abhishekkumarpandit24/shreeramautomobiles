'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

interface HeaderProps {
  className?: string;
}

const Header = ({ className = '' }: HeaderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationItems = [
    { label: 'Home', href: '/homepage' },
    { label: 'Services', href: '/services' },
    { label: 'About', href: '/about' },
    { label: 'Book Service', href: '/book-service' },
    { label: 'Customer Portal', href: '/customer-portal' },
  ];

  return (
    <header
      className={`
        fixed top-0 left-0 right-0 z-50
        bg-white dark:bg-neutral-950
        border-b border-neutral-200 dark:border-neutral-800
        backdrop-blur-md
        shadow-sm
        ${className}
      `}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/homepage" className="flex items-center space-x-2">
            <div className="flex items-center justify-center w-10 h-10 bg-primary rounded">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-primary-foreground"
              >
                <path
                  d="M16 4L4 10V22L16 28L28 22V10L16 4Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path d="M16 16L28 10" stroke="currentColor" strokeWidth="2" />
                <path d="M16 16V28" stroke="currentColor" strokeWidth="2" />
                <path d="M16 16L4 10" stroke="currentColor" strokeWidth="2" />
              </svg>
            </div>
            <span className="text-xl font-heading font-bold text-primary">Bose Workshop</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-neutral-800 dark:text-neutral-200 hover:text-primary transition-colors font-medium"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              href="/contact"
              className="px-4 py-2 text-primary border border-primary rounded hover:bg-primary hover:text-white transition"
            >
              Contact Us
            </Link>
            <button className="px-4 py-2 bg-action text-white dark:text-black rounded hover:bg-action/90 transition">
              Emergency Service
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            className="lg:hidden p-2 text-neutral-800 dark:text-neutral-200"
          >
            <Icon name={isMobileMenuOpen ? 'XMarkIcon' : 'Bars3Icon'} size={24} variant="outline" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white dark:bg-neutral-950 border-t border-neutral-200 dark:border-neutral-800">
          <nav className="container mx-auto px-4 py-6 flex flex-col space-y-4">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-neutral-900 dark:text-neutral-100 text-lg font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}

            <Link
              href="/contact"
              className="text-center px-4 py-2 border border-primary text-primary rounded hover:bg-primary hover:text-white transition"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact Us
            </Link>

            <button
              className="px-4 py-2 bg-action text-white dark:text-black rounded hover:bg-action/90 transition"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Emergency Service
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;

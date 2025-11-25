'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState, memo, useRef, useEffect } from 'react';
import { pages } from '../config/pages';
import { useTheme } from '../context/ThemeContext';
import { FaMoon, FaSun } from 'react-icons/fa';
import logo from '../assets/logo.png';
import logoDark from '../assets/logoDarkTheme.png';

const PageLink = memo(({ page, currentPath, theme }: { page: typeof pages[0]; currentPath?: string; theme: any }) => {
  const isActive = page.path === '/' ? currentPath === page.path : currentPath?.startsWith(page.path);

  return (
    <li>
      <Link href={page.path}>
        <span
          className={`border rounded-sm border-transparent px-2.5 py-1 whitespace-nowrap text-sm transition-colors duration-200 ${
            isActive
              ? `text-[${theme.colors.secondary}] border-[${theme.colors.secondary}] font-semibold`
              : `text-[${theme.colors.secondary}]/70 hover:text-[${theme.colors.secondary}] hover:bg-[${theme.colors.accent}]/20`
          }`}
        >
          {page.title}
        </span>
      </Link>
    </li>
  );
});

function ThemeToggleButton() {
  const { toggleTheme, isDark, theme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="flex items-center justify-center w-10 h-10 rounded-full border transition-colors"
      style={{
        backgroundColor: isDark ? theme.colors.primary : theme.colors.secondary,
        color: isDark ? theme.colors.secondary : theme.colors.primary,
      }}
      aria-label="Toggle theme"
    >
      {isDark ? <FaSun /> : <FaMoon />}
    </button>
  );
}

export default function Navigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const { theme, isDark } = useTheme();

  // Ref for mobile menu
  const menuRef = useRef<HTMLUListElement>(null);

  // Close menu if clicked outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isOpen && menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  return (
    <nav className="sticky top-0 shadow z-50" style={{ backgroundColor: theme.colors.background }}>
      <div className="max-w-6xl mx-auto flex justify-between items-center px-4 py-1.5">
        {/* Logo */}
        <Link href="/">
          <Image
            src={isDark ? logoDark : logo}
            width={100}
            height={100}
            alt="Tiramisu Logo"
            className="w-28 md:w-32"
          />
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex space-x-6 uppercase text-sm items-center">
          {pages.map((page) => (
            <PageLink key={page.path} page={page} currentPath={pathname} theme={theme} />
          ))}
          <li><ThemeToggleButton /></li>
        </ul>

        {/* Mobile hamburger */}
        <div className="md:hidden relative">
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="relative w-10 h-10 flex items-center justify-center focus:outline-none z-50"
            aria-label="Toggle menu"
          >
            <span
              className={`absolute w-8 h-0.5 rounded bg-current transition-transform duration-300 ${isOpen ? 'rotate-45' : 'top-3'}`}
              style={{ backgroundColor: theme.colors.secondary }}
            />
            <span
              className={`absolute w-8 h-0.5 rounded bg-current transition-opacity duration-300 ${isOpen ? 'opacity-0' : 'top-4'}`}
              style={{ backgroundColor: theme.colors.secondary }}
            />
            <span
              className={`absolute w-8 h-0.5 rounded bg-current transition-transform duration-300 ${isOpen ? '-rotate-45' : 'top-5'}`}
              style={{ backgroundColor: theme.colors.secondary }}
            />
          </button>

          {/* Mobile menu */}
          {isOpen && (
            <ul
              ref={menuRef}
              className="absolute top-full right-4 w-64 flex flex-col items-center py-4 space-y-3 rounded-xl shadow-2xl z-40"
              style={{
                backgroundColor: theme.colors.background,
                borderColor: theme.colors.secondary + '30',
                borderWidth: '1px',
              }}
            >
              {pages.map((page) => (
                <PageLink
                  key={page.path}
                  page={page}
                  currentPath={pathname}
                  theme={theme}
                />
              ))}
              <li><ThemeToggleButton /></li>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
}

'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, memo } from 'react';

type Page = {
  title: string;
  path: string;
};

const pages: Page[] = [
  { title: 'Naslovna', path: '/' },
  { title: 'Djelatnosti', path: '/djelatnosti' },
  { title: 'Objekti', path: '/objekti' },
  { title: 'Radovi', path: '/radovi' },
  { title: 'Reference', path: '/reference' },
  { title: 'O nama', path: '/onama' },
];

// Memoized PageLink to prevent unnecessary re-renders
const PageLink = memo(({ page, currentPath }: { page: Page; currentPath?: string }) => {
  const isActive =
    page.path === '/'
      ? currentPath === page.path
      : currentPath?.startsWith(page.path);

  return (
    <li>
      <Link href={page.path}>
        <span
          className={`border rounded-sm border-transparent px-4 py-2 whitespace-nowrap transition-colors duration-200 ${
            isActive
              ? 'text-blue-700 border-blue-700 font-semibold'
              : 'text-gray-700 hover:text-gray-800 hover:bg-blue-50'
          }`}
        >
          {page.title}
        </span>
      </Link>
    </li>
  );
});

export default function Navigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <nav className="sticky top-0 bg-white shadow-md z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        <Link href="/">
          <span className="text-2xl font-bold text-blue-700 cursor-pointer">Plavi oblutak</span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex space-x-6 text-gray-700 uppercase text-sm">
          {pages.map((page) => (
            <PageLink key={page.path} page={page} currentPath={pathname} />
          ))}
        </ul>

        {/* Mobile hamburger */}
        <div className="md:hidden relative">
          <button
            onClick={toggleMenu}
            className="flex flex-col w-8 h-8 justify-between items-center focus:outline-none"
            aria-label="Toggle menu"
          >
            <span
              className={`h-1 w-full bg-blue-700 rounded transition-transform duration-300 ${
                isOpen ? 'rotate-45 translate-y-3' : ''
              }`}
            />
            <span
              className={`h-1 w-full bg-blue-700 rounded transition-opacity duration-300 ${
                isOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`h-1 w-full bg-blue-700 rounded transition-transform duration-300 ${
                isOpen ? '-rotate-45 -translate-y-3' : ''
              }`}
            />
          </button>

          {/* Mobile menu - render only if open */}
          {isOpen && (
            <ul className="absolute top-full left-0 w-full bg-white flex flex-col items-center py-6 space-y-4 border-t border-gray-200">
              {pages.map((page) => (
                <PageLink key={page.path} page={page} currentPath={pathname} />
              ))}
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
}

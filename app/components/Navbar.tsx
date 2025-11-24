'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState, memo } from 'react';
import { pages } from '../config/pages';

const PageLink = memo(({ page, currentPath }: { page: typeof pages[0]; currentPath?: string }) => {
  const isActive =
    page.path === '/' ? currentPath === page.path : currentPath?.startsWith(page.path);

  return (
    <li>
      <Link href={page.path}>
        <span
          className={`border rounded-sm border-transparent px-2.5 py-1 whitespace-nowrap text-sm transition-colors duration-200 ${
            isActive
              ? 'text-[#3c3837] border-[#3c3837] font-semibold'
              : 'text-[#3c3837]/70 hover:text-[#3c3837] hover:bg-[#a68835]/20'
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

  return (
    <nav className="sticky top-0 bg-white shadow z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-4 py-1.5">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/logo.png"
            width={100}
            height={100}
            alt="Tiramisu Logo"
            className="w-28 md:w-32"
          />
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex space-x-6 text-[#3c3837] uppercase text-sm">
          {pages.map((page) => (
            <PageLink key={page.path} page={page} currentPath={pathname} />
          ))}
        </ul>

        {/* Mobile hamburger */}
        <div className="md:hidden relative">
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="flex flex-col w-6 h-6 justify-between items-center focus:outline-none"
            aria-label="Toggle menu"
          >
            <span
              className={`h-0.5 w-full bg-[#3c3837] rounded transition-transform duration-300 ${
                isOpen ? 'rotate-45 translate-y-1.5' : ''
              }`}
            />
            <span
              className={`h-0.5 w-full bg-[#3c3837] rounded transition-opacity duration-300 ${
                isOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`h-0.5 w-full bg-[#3c3837] rounded transition-transform duration-300 ${
                isOpen ? '-rotate-45 -translate-y-1.5' : ''
              }`}
            />
          </button>

          {isOpen && (
            <ul className="absolute top-full left-0 w-full bg-white flex flex-col items-center py-3 space-y-2 border-t border-[#3c3837]/30">
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

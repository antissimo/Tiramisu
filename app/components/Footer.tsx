'use client';

import Link from 'next/link';
import { useTheme } from '../context/ThemeContext';
interface FooterProps {
  className?: string;
}
export default function Footer({ className }: FooterProps) {
  const { theme } = useTheme();

  return (
    <footer
      className="py-6 "
      style={{ backgroundColor: theme.colors.primary, color: theme.colors.secondary }}
    >
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">

        {/* Social Icons */}
        <div className="flex items-center space-x-4 mb-4 md:mb-0">
          {/* Instagram */}
          <a
            href="https://www.instagram.com/tiramisubarsplit/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-70 transition-opacity"
            style={{ color: theme.colors.secondary }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 
              5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm10 
              2c1.654 0 3 1.346 3 3v10c0 1.654-1.346 3-3 
              3H7c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 
              3-3h10zm-5 3a5 5 0 100 10 5 5 0 
              000-10zm0 2a3 3 0 110 6 3 3 0 
              010-6zm4.5-.25a1.25 1.25 0 11-2.5 0 
              1.25 1.25 0 012.5 0z"/>
            </svg>
          </a>

          {/* Facebook */}
          <a
            href="https://www.facebook.com/p/Tiramis%C3%B9-Bar-Split-61575614048707/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-70 transition-opacity"
            style={{ color: theme.colors.secondary }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22 12a10 10 0 10-11.5 9.9v-7h-2v-3h2v-2.3c0-2 
              1.2-3.1 3-3.1.9 0 1.8.1 1.8.1v2h-1c-1 
              0-1.3.6-1.3 1.2V12h2.2l-.4 3h-1.8v7A10 
              10 0 0022 12z"/>
            </svg>
          </a>

          {/* TikTok */}
          <a
            href="https://www.tiktok.com/@tiramisu.bar.split"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-70 transition-opacity"
            style={{ color: theme.colors.secondary }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M21 8.5a5.5 5.5 0 01-4.3-2.2v7.1a5.6 5.6 0 11-5.6-5.6c.3 0 
              .6 0 .9.1v2.3a3.3 3.3 0 102.3 3.1V2h2.3c.2 1.2.8 2.3 
              1.7 3.1A5.5 5.5 0 0121 6.2v2.3z"/>
            </svg>
          </a>
        </div>

        {/* Copyright */}
        <div className="text-sm text-center md:text-right w-full md:w-auto" style={{ color: theme.colors.secondary }}>
          &copy; {new Date().getFullYear()} Tiramisu. Sva prava pridržana.
        </div>
      </div>
    </footer>
  );
}

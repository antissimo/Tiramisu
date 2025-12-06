'use client';
import Image from 'next/image';
import { useTheme } from '../context/ThemeContext';
import { footerConfig } from '../config/footer';

import entropy from '../assets/entropy.png';
import entropyDark from '../assets/entropyDarkTheme.png';
interface FooterProps {
  className?: string;
}

export default function Footer({ className }: FooterProps) {
  const { theme, isDark } = useTheme();
  console.log(isDark);
  return (
    <footer
      className={`py-6 ${className || ''}`}
      style={{ backgroundColor: theme.colors.primary, color: theme.colors.secondary }}
    >
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">

        {/* Logo */}
        <div className="mb-4 md:mb-0">
  <Image
    src={isDark ? entropyDark : entropy}
    alt="Logo"
    width={112}   // matches w-28
    height={32}   // adjust to your logo's actual height
  />
</div>

        {/* Social Icons */}
        <div className="flex items-center space-x-4 mb-4 md:mb-0">
          {footerConfig.socials.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-70 transition-opacity"
              style={{ color: theme.colors.secondary }}
            >
              {social.icon}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <div className="text-sm text-center md:text-right w-full md:w-auto" style={{ color: theme.colors.secondary }}>
          &copy; {new Date().getFullYear()} {footerConfig.copyright}
        </div>
      </div>
    </footer>
  );
}

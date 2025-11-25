'use client';

import Link from 'next/link';
import { useTheme } from '../context/ThemeContext';

export default function KontaktPage() {
const { theme, toggleTheme } = useTheme();
  return (
    <div className="min-h-[calc(100vh-4rem)] px-4 py-6 flex justify-center items-start" style={{ backgroundColor: theme.colors.background }}>
      {/* Card */}
      <div className="w-full max-w-2xl p-6 rounded-xl shadow-md border" 
           style={{ backgroundColor: theme.colors.primary, borderColor: theme.colors.accent }}>

        {/* Title */}
        <h1 className="text-2xl md:text-3xl font-bold mb-4 text-center" style={{ color: theme.colors.secondary }}>
          Kontakt
        </h1>

        <div className="flex flex-col space-y-3" style={{ color: theme.colors.secondary }}>

          {/* Phone */}
          <div className="flex items-center space-x-2">
            <span className="font-semibold">Telefon:</span>
            <a href="tel:+385912345678" className="hover:text-accent transition-colors" style={{ color: theme.colors.secondary }}>
              +385 91 234 5678
            </a>
          </div>

          {/* Email */}
          <div className="flex items-center space-x-2">
            <span className="font-semibold">Email:</span>
            <a href="mailto:info@tiramisu.bar" className="hover:text-accent transition-colors" style={{ color: theme.colors.secondary }}>
              info@tiramisu.bar
            </a>
          </div>

          {/* TikTok */}
          <div className="flex items-center space-x-2">
            <span className="font-semibold">TikTok:</span>
            <a
              href="https://www.tiktok.com/@tiramisu.bar.split"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
              style={{ color: theme.colors.secondary }}
            >
              @tiramisu.bar.split
            </a>
          </div>

          {/* Address */}
          <div className="flex items-start space-x-2">
            <span className="font-semibold">Adresa:</span>
            <span>Trg Republike Hrvatske 1, 21000 Split, Hrvatska</span>
          </div>

        </div>
      </div>
    </div>
  );
}
'use client';

import Image from "next/image";
import { useTheme } from './context/ThemeContext';

import logo from './assets/logo.png';
import logoDark from './assets/logoDarkTheme.png';


export default function HomePage() {
  const { theme, isDark } = useTheme();

  return (
    <div
      className="flex flex-col items-center justify-center w-full h-full min-h-screen"
      style={{ backgroundColor: theme.colors.background, color: theme.colors.secondary }}
    >
      {/* Container with fixed size */}
      <div className="w-36 md:w-44 h-36 md:h-44 relative">
  <Image
    src={isDark ? logoDark : logo}
    alt="Tiramisu"
    fill
    style={{
      objectFit: 'contain', // keeps proportions
      maxHeight: '100%',
      maxWidth: '100%',
    }}
  />
</div>

    </div>
  );
}

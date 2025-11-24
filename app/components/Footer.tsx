'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#ffffff] text-[#3c3837] py-6 mt-12">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        
        <div className="mb-4 md:mb-0">
        </div>

        <div className="text-sm text-center md:text-right w-full md:w-auto">
          &copy; {new Date().getFullYear()} Tiramisu. Sva prava pridržana.
        </div>
      </div>
    </footer>
  );
}


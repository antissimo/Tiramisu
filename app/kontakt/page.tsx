'use client';

import Link from 'next/link';

export default function KontaktPage() {
  return (
    <div className="min-h-[calc(100vh-4rem)] bg-[#FFFFFF] px-4 py-12">
      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-bold text-[#3c3837] mb-12 text-center">
        Kontakt
      </h1>

      <div className="max-w-2xl mx-auto flex flex-col space-y-6 text-[#3c3837]">
        
        {/* Phone */}
        <div className="flex items-center space-x-2">
          <span className="font-semibold">Telefon:</span>
          <a href="tel:+385912345678" className="hover:text-[#a68835] transition-colors">
            +385 91 234 5678
          </a>
        </div>

        {/* Email */}
        <div className="flex items-center space-x-2">
          <span className="font-semibold">Email:</span>
          <a href="mailto:info@tiramisu.bar" className="hover:text-[#a68835] transition-colors">
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
            className="hover:text-[#a68835] transition-colors"
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
  );
}

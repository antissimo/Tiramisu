'use client';

import { locations } from "../config/locations";
import Image from "next/image";
import { useTheme } from '../context/ThemeContext';

export default function LokacijePage() {
  const theme = useTheme();

  return (
    <div className="min-h-screen px-4 py-8" style={{ backgroundColor: theme.colors.background }}>
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center" style={{ color: theme.colors.secondary }}>
        Lokacije
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {locations.map((loc, i) => (
          <a
            key={i}
            href={loc.googleMaps}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg overflow-hidden shadow flex flex-col transition-all duration-300 ease-out hover:shadow-xl hover:scale-105 hover:opacity-90"
            style={{ backgroundColor: theme.colors.primary, border: `1px solid ${theme.colors.secondary}` }}
          >
            {/* Image */}
            <div className="relative w-full h-48">
              <Image
                src={loc.image}
                alt={loc.name}
                fill
                className="object-cover"
              />
            </div>

            {/* Text content */}
            <div className="p-4 flex flex-col justify-between flex-1 text-center">
              <h2 className="text-xl font-semibold mb-1" style={{ color: theme.colors.secondary }}>
                {loc.name}
              </h2>
              {loc.radnoVrijeme && (
                <div className="text-sm mb-2" style={{ color: theme.colors.secondary }}>
                  {loc.radnoVrijeme.split('\n').map((line, idx) => (
                    <div key={idx}>{line}</div>
                  ))}
                </div>
              )}
              <span className="text-sm hover:transition-colors" style={{ color: theme.colors.secondary + 'b3' }}>
                Pogledaj na Google Maps
              </span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
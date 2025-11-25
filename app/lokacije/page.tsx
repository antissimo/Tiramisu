'use client';

import { locations } from "../config/locations";
import Image from "next/image";

export default function LokacijePage() {
  return (
    <div className="min-h-screen bg-[#FFFFFF] px-4 py-8">
      <h1 className="text-3xl md:text-4xl font-bold text-[#3c3837] mb-8 text-center">
        Lokacije
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {locations.map((loc, i) => (
          <a
            key={i}
            href={loc.googleMaps}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#a68835]/10 border border-[#3c3837]/30 rounded-lg overflow-hidden shadow 
                       transition-all duration-300 ease-out hover:shadow-xl 
                       hover:scale-105 hover:opacity-90 flex flex-col"
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
            <div className="p-4 flex flex-col justify-between flex-1">
              <h2 className="text-xl font-semibold text-[#3c3837] mb-2">
                {loc.name}
              </h2>
              <span className="text-sm text-[#3c3837]/70 hover:text-[#a68835] transition-colors">
                Pogledaj na Google Maps
              </span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

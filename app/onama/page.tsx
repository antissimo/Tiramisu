"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { onamaSections } from '../config/oNama';
import { useTheme } from '../context/ThemeContext';

export default function ONamaPage() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen px-4 py-12 space-y-24" style={{ backgroundColor: theme.colors.background }}>
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-16" style={{ color: theme.colors.secondary }}>
        O Nama
      </h1>

      <div className="grid grid-cols-1 gap-12 max-w-6xl mx-auto">
        {onamaSections.map((sec, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* Entire Card */}
            <div className={`flex flex-col md:flex-row items-center gap-6 rounded-2xl shadow-lg border p-6 ${sec.reverse ? 'md:flex-row-reverse' : ''}`} 
                 style={{ backgroundColor: theme.colors.primary, borderColor: theme.colors.secondary, borderStyle: 'solid' }}>
              {/* Image */}
              <div className="w-full md:w-1/2 rounded-xl overflow-hidden">
                <Image
                  src={sec.img}
                  alt="O nama slika"
                  width={700}
                  height={450}
                  className="w-full h-auto object-cover"
                  priority={true}
                />
              </div>

              {/* Text */}
              <div className="w-full md:w-1/2 text-lg leading-relaxed" style={{ color: theme.colors.secondary }}>
                {sec.text}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

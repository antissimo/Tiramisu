"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { onamaSections } from '../config/oNama';

export default function ONamaPage() {
  return (
    <div className="min-h-screen bg-[#FFFFFF] px-4 py-12 space-y-24">
      <h1 className="text-4xl md:text-5xl font-bold text-[#3c3837] text-center mb-16">
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
            <div className={`flex flex-col md:flex-row items-center gap-6 bg-[#e8d6c7] rounded-2xl shadow-lg border border-[#3c3837]/30 p-6 ${sec.reverse ? 'md:flex-row-reverse' : ''}`}>
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
              <div className="w-full md:w-1/2 text-[#3c3837] text-lg leading-relaxed">
                {sec.text}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

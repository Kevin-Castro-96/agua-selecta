"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="sobre-nosotros"
      className="relative py-28 px-6 bg-white overflow-hidden"
    >
      {/* Fondo decorativo sutil */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/40 via-white to-white pointer-events-none" />

      <div className="relative max-w-6xl mx-auto text-center">
        {/* Badge */}
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block text-sm tracking-widest uppercase text-blue-600 font-medium mb-4"
        >
          Nuestra esencia
        </motion.span>

        {/* Título */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-semibold text-gray-900 leading-tight mb-6"
        >
          Pureza que nace de la naturaleza
        </motion.h2>

        {/* Línea decorativa */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "80px" }}
          transition={{ duration: 0.6 }}
          className="h-[2px] bg-blue-600 mx-auto mb-8"
        />

        {/* Texto */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto text-lg md:text-xl text-gray-600 leading-relaxed"
        >
          Agua Selecta nace en el corazón del Valle del Mezquital, una región
          reconocida por su riqueza natural y cultural. Nuestro compromiso es
          ofrecer agua de la más alta calidad, respetando las tradiciones y
          cuidando el medio ambiente.
        </motion.p>
      </div>
    </section>
  );
}

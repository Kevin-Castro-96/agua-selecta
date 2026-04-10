"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative bg-gradient-to-b from-blue-400 via-blue-300 to-white text-center pt-60 pb-20 px-6 overflow-hidden"
    >
      {/* Fondo sutil animado */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/30 via-transparent to-white pointer-events-none" />

      <div className="relative max-w-4xl mx-auto">
        {/* Badge opcional */}
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block text-sm tracking-widest uppercase text-blue-700 font-medium mb-4"
        >
          Bienvenido
        </motion.span>

        {/* Título */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold text-blue-900"
        >
          Agua Selecta
        </motion.h1>

        {/* Línea decorativa */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="h-[3px] bg-blue-700 mx-auto my-6"
        />

        {/* Texto */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mt-4 text-lg md:text-xl max-w-2xl mx-auto text-blue-800"
        >
          Del Valle del Mezquital, llevamos hasta ti la pureza de nuestras aguas
          cristalinas, un símbolo de tradición y confianza que refresca cuerpo y
          espíritu.
        </motion.p>

        {/* Botón opcional (queda muy pro) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-8"
        >
          <a
            href="#contacto"
            className="inline-block bg-blue-700 text-white px-6 py-3 rounded-full shadow-md hover:bg-blue-800 transition"
          >
            Contáctanos
          </a>
        </motion.div>
      </div>
    </section>
  );
}
"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Features() {
  const features = [
    {
      title: "Pureza Natural",
      desc: "Agua filtrada por la tierra fértil del Valle del Mezquital, conservando minerales esenciales y un sabor limpio.",
      img: "/cascada.png",
    },
    {
      title: "Sabor Único",
      desc: "Cada gota ofrece frescura y balance, ideal para revitalizar cuerpo y mente.",
      img: "/rio.avif",
    },
    {
      title: "Compromiso Sustentable",
      desc: "Nos dedicamos a proteger el entorno y apoyar a la comunidad local.",
      img: "/mano-agua.png",
    },
  ];

  return (
    <section
      id="porque-elegirnos"
      className="relative py-24 px-6 bg-white overflow-hidden"
    >
      {/* Fondo sutil */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-blue-50/40 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto text-center">
        {/* Título sección */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-5xl font-semibold text-gray-900 mb-12"
        >
          ¿Por qué elegirnos?
        </motion.h2>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-10">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.2 }}
              whileHover={{ y: -10 }}
              className="p-6 bg-transparent"
            >
              {/* Imagen */}
              <div className="relative w-full h-56 mb-6 overflow-hidden rounded-xl">
                <Image
                  src={f.img}
                  alt={f.title}
                  fill
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Título */}
              <h3 className="text-2xl font-bold text-blue-600 mb-3">
                {f.title}
              </h3>

              {/* Línea decorativa */}
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "60px" }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                className="h-[2px] bg-blue-600 mx-auto mb-4"
              />

              {/* Texto */}
              <p className="text-gray-700 leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

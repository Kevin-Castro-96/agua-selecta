"use client";

import { useState } from "react";
import Image from "next/image";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed w-full top-0 z-50 backdrop-blur-md bg-blue-900/70 border-b border-white/10">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <Image
            src="/imagen-logo.jpeg" // 👉 ponelo en /public
            alt="Agua Selecta Logo"
            width={48}
            height={48}
            className="rounded-full border border-white/20"
          />
          <span className="text-xl font-bold tracking-wide text-white">
            Agua Selecta
          </span>
        </div>

        {/* Desktop Menu */}
        <nav>
          <ul className="hidden md:flex space-x-8 font-semibold text-white">
            <li>
              <a href="#hero" className="hover:text-blue-300 transition">
                Inicio
              </a>
            </li>
            <li>
              <a
                href="#porque-elegirnos"
                className="hover:text-blue-300 transition"
              >
                ¿Por qué elegirnos?
              </a>
            </li>
            <li>
              <a
                href="#sobre-nosotros"
                className="hover:text-blue-300 transition"
              >
                Sobre Nosotros
              </a>
            </li>
            <li>
              <a href="#contacto" className="hover:text-blue-300 transition">
                Contacto
              </a>
            </li>
          </ul>
        </nav>

        {/* Mobile Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-blue-900/95 backdrop-blur-md">
          <ul className="flex flex-col space-y-4 py-4 px-6 font-semibold text-white">
            <li>
              <a href="#hero" onClick={() => setMenuOpen(false)}>
                Inicio
              </a>
            </li>
            <li>
              <a href="#sobre-nosotros" onClick={() => setMenuOpen(false)}>
                Sobre Nosotros
              </a>
            </li>
            <li>
              <a href="#porque-elegirnos" onClick={() => setMenuOpen(false)}>
                ¿Por qué elegirnos?
              </a>
            </li>
            <li>
              <a href="#contacto" onClick={() => setMenuOpen(false)}>
                Contacto
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

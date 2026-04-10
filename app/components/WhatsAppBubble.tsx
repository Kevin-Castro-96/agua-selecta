"use client";
import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppBubble() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Aparece la burbuja después de unos segundos
    const timer = setTimeout(() => setVisible(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleClick = () => {
    // Reemplaza el número con el tuyo (formato internacional sin + ni espacios)
    const phoneNumber = "7711527931";
    const message = encodeURIComponent(
      "¡Hola! Quiero más información sobre Agua Selecta 💧",
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 transition-transform duration-500 ${
        visible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      }`}
    >
      <button
        onClick={handleClick}
        className="bg-green-500 cursor-pointer hover:bg-green-600 text-white rounded-full shadow-lg p-4 flex items-center justify-center animate-bounce"
        aria-label="Contactar por WhatsApp "
      >
        <FaWhatsapp size={28} />
      </button>
    </div>
  );
}

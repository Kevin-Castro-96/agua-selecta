"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formRef.current) return;

    setLoading(true);

    try {
      await emailjs.sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        formRef.current,
        "YOUR_PUBLIC_KEY",
      );

      setSuccess(true);
      formRef.current.reset();
    } catch (error) {
      console.error(error);
      alert("Error al enviar el mensaje");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contacto"
      className="bg-linear-to-l from-blue-400 via-blue-500 to-blue-700 text-white py-20 px-6"
    >
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Lado izquierdo */}
        <div>
          <h2 className="text-4xl font-bold mb-6">Contáctanos</h2>
          <p className="text-lg leading-relaxed">
            Queremos escucharte. Ya sea que tengas preguntas sobre nuestros
            productos, quieras realizar un pedido o simplemente conocer más
            sobre Agua Selecta, nuestro equipo está listo para ayudarte.
            <br />
            <br />
            Completa el formulario y nos pondremos en contacto contigo lo antes
            posible.
          </p>
        </div>

        {/* Formulario */}
        <div>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="bg-white rounded-lg shadow-lg p-8 space-y-6 text-gray-800"
          >
            {/* Nombre */}
            <div>
              <label className="block font-semibold mb-2">Nombre</label>
              <input
                type="text"
                name="user_name"
                placeholder="Tu nombre"
                required
                className="w-full border rounded p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Teléfono */}
            <div>
              <label className="block font-semibold mb-2">
                Número de teléfono
              </label>
              <input
                type="tel"
                name="user_phone"
                placeholder="Tu número"
                required
                className="w-full border rounded p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Dirección */}
            <div>
              <label className="block font-semibold mb-2">Dirección</label>
              <input
                type="text"
                name="user_address"
                placeholder="Tu dirección"
                required
                className="w-full border rounded p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Botón */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded font-semibold transition"
            >
              {loading ? "Enviando..." : "Enviar mensaje"}
            </button>

            {success && (
              <p className="text-green-600 text-center">
                ✅ Mensaje enviado correctamente
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

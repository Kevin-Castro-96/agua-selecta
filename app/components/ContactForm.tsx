"use client";

import { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import dynamic from "next/dynamic";

// 👉 Import dinámico del mapa (sin SSR)
const MapPicker = dynamic(() => import("./MapPicker"), {
  ssr: false,
});

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const [location, setLocation] = useState<string>("");
  const [coords, setCoords] = useState<any>(null);
  const [mapCenter, setMapCenter] = useState<any>(null);

  // 📍 Geolocalización automática
  useEffect(() => {
    if (!navigator.geolocation) return;

    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        const { latitude, longitude } = pos.coords;

        setCoords({ lat: latitude, lng: longitude });
        setMapCenter([latitude, longitude]);

        try {
          const res = await fetch(
            `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`,
          );
          const data = await res.json();

          setLocation(
            data.display_name || `Lat: ${latitude}, Lng: ${longitude}`,
          );
        } catch {
          setLocation(`Lat: ${latitude}, Lng: ${longitude}`);
        }
      },
      () => {
        setLocation("Ubicación no disponible");
      },
    );
  }, []);

  // 📤 Enviar formulario
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setLoading(true);

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current!,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
      );

      setSuccess(true);

      // ✅ Obtener datos del formulario
      const formData = new FormData(formRef.current);
      const name = formData.get("user_name");
      const email = formData.get("user_email");
      const phone = formData.get("user_phone");
      const address = formData.get("user_address");

      // ✅ Mensaje personalizado
      const message = encodeURIComponent(
        `Hola, soy ${name}.
Quiero hacer un pedido de Agua Selecta 💧

📞 Teléfono: ${phone}
    Email: ${email}
📍 Dirección: ${address}
🌎 Ubicación: ${location}
🧭 Coordenadas: ${coords?.lat}, ${coords?.lng}`,
      );

      // ⚠️ IMPORTANTE: número en formato internacional (México = 52)
      const phoneNumber = "7711527931";

      // ✅ Redirección a WhatsApp (con pequeño delay opcional)
      setTimeout(() => {
        window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
      }, 1000);

      formRef.current.reset();
    } catch (error) {
      console.error(error);
      alert("Error al enviar el mensaje");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-gradient-to-l from-blue-400 via-blue-500 to-blue-700 text-white py-20 px-6">
      <div
        id="contacto"
        className="container mx-auto grid md:grid-cols-2 gap-12 items-center"
      >
        {/* Texto */}
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
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="bg-white text-gray-800 rounded-lg shadow-lg p-8 space-y-6"
        >
          {/* Nombre */}
          <div>
            <label className="font-semibold">Nombre</label>
            <input
              type="text"
              name="user_name"
              required
              className="w-full border p-3 rounded"
            />
          </div>
          {/* Email */}
          <div>
            <label className="font-semibold">Correo electrónico</label>
            <input
              type="email"
              name="user_email"
              required
              className="w-full border p-3 rounded"
            />
          </div>

          {/* Teléfono */}
          <div>
            <label className="font-semibold">Teléfono</label>
            <input
              type="tel"
              name="user_phone"
              required
              className="w-full border p-3 rounded"
            />
          </div>

          {/* Dirección manual */}
          <div>
            <label className="font-semibold">Dirección</label>
            <input
              type="text"
              name="user_address"
              required
              className="w-full border p-3 rounded"
            />
          </div>

          {/* MAPA */}
          <div>
            <label className="font-semibold">Selecciona tu ubicación</label>

            <div className="h-64 w-full rounded overflow-hidden  mt-2 relative z-0">
              {mapCenter && (
                <MapPicker
                  mapCenter={mapCenter}
                  coords={coords}
                  setCoords={setCoords}
                  setLocation={setLocation}
                />
              )}
            </div>

            {/* Dirección detectada */}
            {location && (
              <p className="text-sm mt-2 text-gray-600">📍 {location}</p>
            )}

            {/* Coordenadas */}
            {coords && (
              <p className="text-xs text-gray-500">
                Coordenadas: {coords.lat}, {coords.lng}
              </p>
            )}
          </div>

          {/* Hidden fields */}
          <input type="hidden" name="user_location" value={location} />
          <input type="hidden" name="user_lat" value={coords?.lat || ""} />
          <input type="hidden" name="user_lng" value={coords?.lng || ""} />

          {/* Botón */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white py-3 rounded"
          >
            {loading ? "Enviando..." : "Enviar"}
          </button>

          {/* Mensaje éxito */}
          {success && (
            <p className="text-green-600 text-center">
              ✅ Enviado correctamente
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

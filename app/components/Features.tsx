export default function Features() {
  const features = [
    { title: "Pureza Natural", desc: "Agua filtrada por la tierra del Mezquital." },
    { title: "Sabor Único", desc: "Refrescante y balanceada para tu bienestar." },
    { title: "Compromiso Sustentable", desc: "Cuidamos el entorno y la comunidad." },
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-10 text-center">
        {features.map((f, i) => (
          <div key={i} className="p-6 bg-white rounded-lg shadow hover:shadow-xl transition">
            <h3 className="text-2xl font-bold text-blue-600 mb-3">{f.title}</h3>
            <p className="text-gray-600">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

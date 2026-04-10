import Image from "next/image";

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
    <section id="features" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 text-center">
        {features.map((f, i) => (
          <div
            key={i}
            className="p-6 bg-white"
          >
            <div className="relative w-full h-56 mb-4 overflow-hidden rounded-md">
              <Image
                src={f.img}
                alt={f.title}
                fill
                className="object-cover object-center"
              />
            </div>
            <h3 className="text-2xl font-bold text-blue-600 mb-3">{f.title}</h3>
            <p className="text-gray-700 leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

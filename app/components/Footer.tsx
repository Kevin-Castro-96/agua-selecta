export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-6 px-6">
      <div className="container mx-auto text-center">
        <p className="text-sm md:text-base">
          &copy; {new Date().getFullYear()} Agua Selecta - Todos los derechos
          reservados
        </p>

        {/* Extra opcional */}
        <p className="text-xs text-blue-300 mt-2">
          Diseñado con 💧 para brindar pureza y confianza
        </p>
      </div>
    </footer>
  );
}

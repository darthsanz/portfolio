import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { FiMonitor } from "react-icons/fi";

const Hero = () => {
  return (
    // Contenedor principal: Pantalla completa, fondo oscuro y ocultamos el desbordamiento
    <section className="min-h-screen bg-[#09090b] flex flex-col items-center justify-center px-4 relative overflow-hidden">
      {/* 🌟 Efectos de luces difuminadas en el fondo (Glows) */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px] pointer-events-none"></div>

      {/* Contenido principal */}
      <div className="z-10 flex flex-col items-center text-center mt-10">
        {/* Tu Foto / Avatar */}
        <div className="w-24 h-24 mb-6 rounded-full overflow-hidden border-2 border-white/10 shadow-xl bg-gray-800">
          <img
            src="https://github.com/darthsanz.png" // Carga tu foto de GitHub automáticamente
            alt="Francisco Rodríguez"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Títulos */}
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-2 tracking-tight">
          Hola, soy Francisco ✨
        </h1>

        {/* El Texto con Degradado */}
        <h2 className="text-4xl md:text-7xl font-extrabold mb-6 bg-linear-to-r from-purple-400 via-indigo-400 to-blue-500 bg-clip-text text-transparent pb-2">
          Desarrollador Fronted
        </h2>

        {/* Bio */}
        <p className="text-gray-400 max-w-xl text-lg md:text-xl mb-10 leading-relaxed">
          Ingeniero en Sistemas enfocado en el desarrollo web. Apasionado por
          crear interfaces rápidas, escalables y experiencias de usuario
          impecables.
        </p>

        {/* Botones y Redes Sociales */}
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
          <a
            href="#contact"
            className="flex items-center gap-2 bg-white text-black px-6 py-2.5 rounded-full font-semibold hover:scale-105 transition-transform duration-300"
          >
            <FaEnvelope /> Contactarme
          </a>

          <a
            href="#projects"
            className="flex items-center gap-2 bg-white/5 border border-white/10 text-white px-6 py-2.5 rounded-full font-semibold hover:bg-white/10 transition-colors duration-300 backdrop-blur-sm"
          >
            <FiMonitor /> Ver Proyectos
          </a>

          <span className="hidden md:inline text-gray-700 mx-2">|</span>

          <div className="flex items-center gap-5 text-2xl text-gray-400">
            <a
              href="https://github.com/darthsanz"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors duration-300"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/francisco-javier-rodríguez-sánchez-b5a8111a1"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#0A66C2] transition-colors duration-300"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

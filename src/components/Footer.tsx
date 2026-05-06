import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      id="contact"
      className="bg-[#09090b] border-t border-white/10 pt-16 pb-8 px-4 md:px-8 text-white relative overflow-hidden"
    >
      {/* Efecto de luz sutil en el fondo del footer */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-purple-600/10 blur-[100px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
          {/* Columna 1: Llamado a la acción */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-linear-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
              ¿Listo para tu próximo gran proyecto?
            </h2>
            <p className="text-gray-400 mb-6 max-w-md text-lg">
              Actualmente estoy abierto a nuevas oportunidades laborales. Si
              tienes una vacante o simplemente quieres conectar, ¡mi bandeja
              está abierta! :)
            </p>
            <a
              href="mailto:frankrsanz@gmail.com"
              className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-bold hover:scale-105 transition-transform duration-300"
            >
              <FaEnvelope /> Enviar un Correo
            </a>
          </div>

          {/* Columna 2: Info de Contacto y Redes */}
          <div className="md:text-right flex flex-col md:items-end justify-center">
            <div className="space-y-4 text-gray-400">
              <p className="flex items-center md:justify-end gap-3 text-lg hover:text-white transition-colors">
                <FaMapMarkerAlt className="text-purple-500" /> Tierra Blanca,
                Veracruz
              </p>
              <p className="flex items-center md:justify-end gap-3 text-lg hover:text-white transition-colors">
                <FaEnvelope className="text-purple-500" /> frankrsanz@gmail.com
              </p>
            </div>

            {/* Redes Sociales */}
            <div className="flex items-center gap-6 mt-6">
              <a
                href="https://github.com/darthsanz"
                target="_blank"
                rel="noreferrer"
                className="text-2xl text-gray-400 hover:text-white transition-colors duration-300"
                title="GitHub"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/francisco-javier-rodríguez-sánchez-b5a8111a1"
                target="_blank"
                rel="noreferrer"
                className="text-2xl text-gray-400 hover:text-[#0A66C2] transition-colors duration-300"
                title="LinkedIn"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>

        {/* Derechos Reservados */}
        <div className="border-t border-white/10 pt-8 mt-8 flex flex-col md:flex-row items-center justify-between text-gray-500 text-sm">
          <p>
            © {new Date().getFullYear()} Francisco Rodríguez. Todos los derechos
            reservados.
          </p>
          <p className="mt-2 md:mt-0">
            Construido con React, Tailwind CSS y Vite.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

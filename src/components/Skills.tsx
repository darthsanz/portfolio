import { FiCode, FiLayers, FiLayout } from "react-icons/fi";

const Skills = () => {
  return (
    <section id="skills" className="bg-[#09090b] text-white py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Encabezado de la sección */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Construyendo Experiencias Digitales
          </h2>
          <p className="text-gray-400 max-w-2xl text-lg">
            Me especializo en crear interfaces de usuario atractivas y
            desarrollar aplicaciones web escalables y de alto rendimiento.
          </p>
        </div>

        {/* Grilla de las 3 Tarjetas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Tarjeta 1: Lo que puedo hacer */}
          <div className="bg-[#111113] border border-white/10 rounded-2xl p-8 hover:bg-[#151518] transition-colors duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-purple-500/20 p-3 rounded-lg text-purple-400">
                <FiCode size={24} />
              </div>
              <h3 className="text-xl font-bold">Qué puedo hacer</h3>
            </div>
            <p className="text-gray-400 mb-6 text-sm">
              Desarrollo soluciones tecnológicas que ayudan a escalar tu
              negocio:
            </p>
            <ul className="space-y-3 text-sm font-medium text-gray-300">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>{" "}
                Desarrollo Frontend Moderno
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>{" "}
                Integración de APIs REST
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>{" "}
                Manejo de Estado Global
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>{" "}
                Optimización de Rendimiento
              </li>
            </ul>
          </div>

          {/* Tarjeta 2: Herramientas que uso */}
          <div className="bg-[#111113] border border-white/10 rounded-2xl p-8 hover:bg-[#151518] transition-colors duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-blue-500/20 p-3 rounded-lg text-blue-400">
                <FiLayers size={24} />
              </div>
              <h3 className="text-xl font-bold">Herramientas</h3>
            </div>
            <p className="text-gray-400 mb-6 text-sm">
              Utilizo las tecnologías más modernas para construir productos
              funcionales y escalables:
            </p>
            <div className="space-y-4 text-sm">
              <div>
                <strong className="text-white">Frontend:</strong>
                <p className="text-gray-400 mt-1">
                  React 19, TypeScript, Tailwind CSS, Zustand, Javascript ES6+
                </p>
              </div>
              <div>
                <strong className="text-white">BaaS & Backend:</strong>
                <p className="text-gray-400 mt-1">
                  Supabase, Firebase, Node.js, MySQL
                </p>
              </div>
              <div>
                <strong className="text-white">Testing & Tools:</strong>
                <p className="text-gray-400 mt-1">Vitest, Git, GitHub, Vite, Vitest, Vercel, Netlify, Metodologías (Scrum)</p>
              </div>
            </div>
          </div>

          {/* Tarjeta 3: Diseño y UX */}
          <div className="bg-[#111113] border border-white/10 rounded-2xl p-8 hover:bg-[#151518] transition-colors duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-pink-500/20 p-3 rounded-lg text-pink-400">
                <FiLayout size={24} />
              </div>
              <h3 className="text-xl font-bold">UI/UX & Calidad</h3>
            </div>
            <p className="text-gray-400 mb-6 text-sm">
              Priorizo la experiencia del usuario y la calidad del código en
              cada componente:
            </p>
            <ul className="space-y-3 text-sm font-medium text-gray-300">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-pink-500"></span>{" "}
                Clean Architecture
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-pink-500"></span>{" "}
                Diseño Responsivo (Mobile First)
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-pink-500"></span>{" "}
                Accesibilidad Web
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-pink-500"></span>{" "}
                Pruebas Automatizadas (TDD)
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

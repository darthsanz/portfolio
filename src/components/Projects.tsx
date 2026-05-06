import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import coreshopImg from "../../screenshots/coreshop.png";
import starhubImg from "../../screenshots/starhub.png";
import stockproImg from "../../screenshots/stockpro.png";

const Projects = () => {
  // Arreglo con la información de tus 3 proyectos estrella
  const projectsData = [
    {
      id: 1,
      title: "CoreShop",
      subtitle: "Plataforma E-Commerce Moderna",
      description:
        "Plataforma escalable con tipado estricto. Gestión de estado global ultrarrápida con Zustand. Incluye autenticación con Firebase, soporte multi-idioma (i18n) y pruebas con Vitest.",
      tags: [
        "React 19",
        "TypeScript",
        "Zustand",
        "Firebase",
        "Tailwind v4",
        "i18n",
      ],
      image: coreshopImg,
      liveUrl: "https://core-shop-project.vercel.app/",
      githubUrl: "https://github.com/darthsanz/CoreShop_Project",
    },
    {
      id: 2,
      title: "StarHub",
      subtitle: "Aplicación de Cine y Streaming",
      description:
        "Interfaz dinámica que consume la API de TMDB. Implementa scroll infinito nativo (Intersection Observer), búsqueda optimizada con Debounce y gestión de favoritos.",
      tags: ["React", "Tailwind CSS", "Context API", "TMDB API", "Vite"],
      image: starhubImg,
      liveUrl: "https://starhubapp.netlify.app/",
      githubUrl: "https://github.com/darthsanz/StarHub_App",
    },
    {
      id: 3,
      title: "Stockpro Manager",
      subtitle: "ERP de Inventario en Tiempo Real",
      description:
        "Sistema construido deliberadamente en Vanilla JS para dominar el DOM y el enrutamiento. Integra Supabase para bases de datos y sincronización por WebSockets (Realtime).",
      tags: ["Vanilla JS", "Supabase", "Bootstrap 5", "HTML/CSS"],
      image: stockproImg,
      liveUrl: "https://stockpromanagerv1.netlify.app/login.html",
      githubUrl: "https://github.com/darthsanz/ProjectStockProV1",
    },
  ];

  return (
    <section
      id="projects"
      className="bg-[#09090b] text-white py-20 px-4 md:px-8"
    >
      <div className="max-w-6xl mx-auto">
        {/* Encabezado */}
        <div className="mb-12 md:flex md:items-end md:justify-between">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Mis Proyectos Destacados
            </h2>
            <p className="text-gray-400 max-w-2xl text-lg">
              Una selección de mis mejores desarrollos, desde Vanilla JavaScript
              hasta arquitecturas modernas con React y TypeScript.
            </p>
          </div>
          <a
            href="https://github.com/darthsanz"
            target="_blank"
            rel="noreferrer"
            className="hidden md:flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors font-semibold"
          >
            Ver mi GitHub <FiExternalLink />
          </a>
        </div>

        {/* Grilla de Proyectos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="bg-[#111113] border border-white/10 rounded-2xl overflow-hidden hover:-translate-y-2 transition-transform duration-300 group flex flex-col"
            >
              {/* Imagen del Proyecto */}
              <div className="relative h-48 overflow-hidden border-b border-white/10">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Overlay oscuro sutil */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300"></div>
              </div>

              {/* Contenido de la Tarjeta */}
              <div className="p-6 flex flex-col grow">
                <h3 className="text-2xl font-bold mb-1">{project.title}</h3>
                <h4 className="text-purple-400 text-sm font-semibold mb-4">
                  {project.subtitle}
                </h4>
                <p className="text-gray-400 text-sm mb-6 grow leading-relaxed">
                  {project.description}
                </p>

                {/* Etiquetas de Tecnologías */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-medium text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Botones de Enlaces */}
                <div className="flex items-center gap-3 mt-auto pt-4 border-t border-white/10">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-white text-black py-2 rounded-lg font-semibold text-sm hover:bg-gray-200 transition-colors"
                  >
                    <FiExternalLink /> Ver en vivo
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center p-2.5 bg-white/5 border border-white/10 rounded-lg text-white hover:bg-white/10 transition-colors"
                    title="Ver código fuente"
                  >
                    <FaGithub size={18} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

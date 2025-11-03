import { AngularOriginal, JavaOriginal, ReactOriginal } from "devicons-react";
import { ChevronLeft, ChevronRight, Keyboard } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { useKeyboardNavigation } from "../hooks/useKeyboardNavigation";
import { Link } from "react-router-dom";

const Projects = () => {
  const proyectos = [
    {
      id: 1,
      nombre: "E-Commerce Platform",
      descripcion: "Lorem ipsum dolor sit amet",
      foto: "imgs/Foto1.png",
      esrb: "imgs/Esrb.png",
      tecnologias: [
        { Component: ReactOriginal, name: "React" },
        { Component: JavaOriginal, name: "Java" },
        { Component: AngularOriginal, name: "Angular" },
      ],
    },
    {
      id: 2,
      nombre: "Task Manager Pro",
      descripcion: "Lorem ipsum dolor sit amet",
      foto: "imgs/Foto2.png",
      esrb: "imgs/Esrb.png",
      tecnologias: [
        { Component: AngularOriginal, name: "Angular" },
        { Component: JavaOriginal, name: "Java" },
      ],
    },
    {
      id: 3,
      nombre: "Social Network",
      descripcion: "Lorem ipsum dolor sit amet",
      foto: "imgs/Foto3.png",
      esrb: "imgs/Esrb.png",
      tecnologias: [
        { Component: ReactOriginal, name: "React" },
        { Component: AngularOriginal, name: "Angular" },
      ],
    },
    {
      id: 4,
      nombre: "Dashboard Analytics",
      descripcion: "Lorem ipsum dolor sit amet",
      foto: "imgs/Foto4.png",
      esrb: "imgs/Esrb.png",
      tecnologias: [
        { Component: ReactOriginal, name: "React" },
        { Component: JavaOriginal, name: "Java" },
      ],
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % proyectos.length);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + proyectos.length) % proyectos.length);
  };

  useKeyboardNavigation({
    handlers: {
      onConfirm: nextProject,
      onCancel: prevProject,
    },
  });

  const currentProject = proyectos[currentIndex];

  return (
    <motion.main
      className="w-full flex flex-col text-gray-100 fixed inset-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat -z-10"
        style={{
          backgroundImage: "url('imgs/Prueba3.png')",
          backgroundSize: "cover",
          filter: "blur(2px) brightness(0.7)",
        }}
      />

      <header className="flex justify-between items-center px-4 md:px-6 py-3 md:py-4 backdrop-blur-md shrink-0">
        <nav className="flex items-center gap-2 md:gap-3">
          <Link to="/profile">
            <motion.img
              src="imgs/Icono.webp"
              alt="icono perfil"
              className="w-12 h-12 md:w-18 md:h-18 rounded-full object-cover"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            />
          </Link>
          <h1 className="text-xl md:text-3xl font-mont">My profile</h1>
        </nav>
        <nav className="flex items-center gap-2 md:gap-3">
          <h2 className="text-lg md:text-2xl font-mont-light">
            <span className="text-xl md:text-3xl">
              {new Date().toLocaleTimeString("es-ES", {
                hour: "2-digit",
                minute: "2-digit",
                hour12: false,
              })}
            </span>
            <span className="font-mont-light text-sm md:text-lg pl-1 md:pl-2">
              {new Date().getHours() >= 12 ? "PM" : "AM"}
            </span>
          </h2>
        </nav>
      </header>

      <section className="flex flex-col grow max-w-7xl mx-auto px-4 md:px-6 py-6 md:py-10">
        <article className="flex justify-center items-center mb-4 md:mb-6">
          <div className="flex items-center gap-2 md:gap-6">
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <ChevronLeft
                className="w-12 h-12 md:w-20 md:h-20 cursor-pointer hover:opacity-70 transition-opacity"
                onClick={prevProject}
              />
            </motion.div>

            {/* Desktop carousel */}
            <div
              className="hidden md:flex items-center justify-center relative"
              style={{ width: "1230px", height: "400px" }}
            >
              {proyectos.map((proyecto, index) => {
                const isCurrent = index === currentIndex;
                const baseWidth = 256;
                const largeWidth = 384;
                const gap = 26;

                let xPosition = 0;
                for (let i = 0; i < index; i++) {
                  xPosition +=
                    (i === currentIndex ? largeWidth : baseWidth) + gap;
                }

                return (
                  <motion.div
                    key={proyecto.id}
                    animate={{
                      width: isCurrent ? largeWidth : baseWidth,
                      height: isCurrent ? largeWidth : baseWidth,
                      opacity: isCurrent ? 1 : 0.6,
                      x: xPosition,
                    }}
                    transition={{
                      duration: 0.4,
                      ease: "easeInOut",
                    }}
                    style={{
                      position: "absolute",
                      left: 0,
                    }}
                    className="cursor-pointer"
                    onClick={() => setCurrentIndex(index)}
                  >
                    <img
                      src={proyecto.foto}
                      alt={`proyecto ${index + 1}`}
                      className="w-full h-full rounded-2xl object-cover"
                    />
                  </motion.div>
                );
              })}
            </div>

            {/* Mobile carousel - single image */}
            <div className="flex md:hidden items-center justify-center">
              <motion.div
                key={currentProject.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="w-64 h-64"
              >
                <img
                  src={currentProject.foto}
                  alt={`proyecto ${currentIndex + 1}`}
                  className="w-full h-full rounded-2xl object-cover"
                />
              </motion.div>
            </div>

            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <ChevronRight
                className="w-12 h-12 md:w-20 md:h-20 cursor-pointer hover:opacity-70 transition-opacity"
                onClick={nextProject}
              />
            </motion.div>
          </div>
        </article>

        <AnimatePresence mode="wait">
          <motion.article
            key={currentProject.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col md:flex-row justify-between items-start mt-6 md:mt-10 gap-6"
          >
            <div className="flex items-start gap-3 md:gap-6 w-full md:w-auto max-w-64 md:max-w-none mx-auto md:mx-0">
              <motion.img
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 }}
                src={currentProject.esrb}
                alt="Foto proyecto"
                className="w-20 h-28 md:w-30 md:h-42 object-cover shrink-0"
              />
              <div>
                <motion.h1
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.15 }}
                  className="text-2xl md:text-4xl font-mont"
                >
                  {currentProject.nombre}
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-sm md:text-lg font-mont-light font-semibold mt-1"
                >
                  {currentProject.descripcion}
                </motion.p>
              </div>
            </div>
            <div className="flex flex-col gap-2 md:gap-3 w-full md:w-auto max-w-64 md:max-w-none mx-auto md:mx-0">
              <motion.h1
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.15 }}
                className="text-2xl md:text-4xl font-mont"
              >
                Technologies
              </motion.h1>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.25 }}
                className="flex gap-3"
              >
                {currentProject.tecnologias.map((tech, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    whileHover={{ scale: 1.15, rotate: 5 }}
                  >
                    <tech.Component
                      size={window.innerWidth < 768 ? "32" : "40"}
                    />
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.article>
        </AnimatePresence>
      </section>

      <footer className="flex justify-between items-center px-4 md:px-6 py-3 md:py-4 backdrop-blur-md shrink-0">
        <nav>
          <Keyboard className="w-12 h-12 md:w-18 md:h-18" />
        </nav>
        <nav className="flex items-center gap-3 md:gap-6">
          <button className="flex items-center gap-1 md:gap-2">
            <span className="w-7 h-7 md:w-8 md:h-8 bg-black text-white rounded-full flex items-center justify-center font-bold cursor-pointer text-base md:text-lg mb-1">
              X
            </span>
            <h3 className="text-lg md:text-2xl font-mont">Back</h3>
          </button>
          <button className="flex items-center gap-1 md:gap-2">
            <span className="w-7 h-7 md:w-8 md:h-8 bg-black text-white rounded-full flex items-center justify-center font-bold cursor-pointer text-base md:text-lg mb-1">
              A
            </span>
            <h3 className="text-lg md:text-2xl font-mont">Next</h3>
          </button>
        </nav>
      </footer>
    </motion.main>
  );
};

export default Projects;

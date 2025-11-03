import {
  CalendarDays,
  CircleQuestionMark,
  Keyboard,
  MapPin,
  Pencil,
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import ModalConfirmExit from "../components/modal_ConfirmExit";
import {
  useKeyboardNavigation,
  useListNavigation,
  useModalNavigation,
} from "../hooks/useKeyboardNavigation";

const Profile = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedOption, setSelectedOption] = useState(0);

  const options = ["Profile", "Education", "Experience", "Projects"];

  const handleOptionClick = (index: number) => {
    setSelectedOption(index);
  };

  useListNavigation({
    selectedIndex: selectedOption,
    setSelectedIndex: setSelectedOption,
    itemCount: options.length,
    columns: 1,
    enabled: !showModal,
  });

  useKeyboardNavigation({
    enabled: !showModal,
    handlers: {
      onConfirm: () => {
        window.location.href = "/projects";
      },
      onCancel: () => {
        setShowModal(true);
      },
    },
  });

  useModalNavigation({
    enabled: showModal,
    onConfirm: () => {
      setShowModal(false);
      window.location.href = "/";
    },
    onCancel: () => setShowModal(false),
  });

  const renderOptions = (opt: string, index: number) => {
    const isSelected = selectedOption === index;
    return (
      <div
        key={index}
        onClick={() => handleOptionClick(index)}
        className={`w-full px-3 md:px-4 py-2 md:py-3 flex items-center pl-2 cursor-pointer mb-2 ${
          isSelected
            ? "border-6 border-blue-400 rounded-lg"
            : "border-6 border-transparent"
        }`}
      >
        <h1 className="text-lg md:text-2xl font-mont">{opt}</h1>
      </div>
    );
  };

  return (
    <motion.main
      className="w-full h-screen flex flex-col text-gray-100"
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
          <motion.img
            src="imgs/Icono.webp"
            alt="icono perfil"
            className="w-12 h-12 md:w-18 md:h-18 rounded-full object-cover"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          />
          <h1 className="text-xl md:text-3xl font-mont">Joaquin's profile</h1>
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

      <section className="flex flex-col md:flex-row flex-1 px-4 md:px-10 py-4 md:py-6 gap-4 md:gap-6 overflow-hidden">
        <aside className="flex flex-row md:flex-col gap-1 w-full md:w-80 shrink-0 overflow-x-auto md:overflow-x-visible pb-2 md:pb-0">
          {options.map((opt, index) => renderOptions(opt, index))}
        </aside>

        <motion.div
          key={selectedOption}
          className="flex flex-col gap-4 md:gap-6 flex-1 px-4 md:px-10 overflow-y-auto scrollbar-hide"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {selectedOption === 0 && (
            <article className="rounded-lg pb-4 md:pb-6">
              <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
                <div className="w-48 h-48 md:w-96 md:h-96 rounded-lg bg-blue-500 flex items-center justify-center shrink-0"></div>

                <div className="w-full">
                  <div className="flex justify-between items-center mb-3 md:mb-4 px-2">
                    <h1 className="text-xl md:text-3xl font-mont h-10 md:h-12 flex items-center">
                      Joaquin Castro Salas
                    </h1>
                    <Pencil className="w-4 h-4 md:w-5 md:h-5 text-gray-300 cursor-pointer" />
                  </div>

                  <div className="flex flex-col md:flex-row items-start gap-3">
                    <img
                      src="imgs/Foto3.png"
                      alt="Animal Crossing"
                      className="w-full md:w-72 h-48 md:h-72 object-cover rounded"
                    />
                    <div className="w-full md:w-xl">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 bg-green-500 rounded-full mb-0.5"></span>
                        <h2 className="text-base md:text-lg font-mont">
                          Looking for a job
                        </h2>
                      </div>
                      <p className="text-sm md:text-base">
                        Apasionado por las nuevas tecnologías y su impacto en
                        nuestra sociedad, me he dedicado a explorar y aplicar
                        diversos campos dentro del sector tecnológico. He
                        explorado varias áreas que abarca el desarrollo de
                        software tanto en el BackEnd como en el FrontEnd, así
                        como otras áreas relacionadas con la innovación y el uso
                        de tecnologías emergentes
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row items-start md:items-center gap-2 pt-3 md:pt-4">
                    <p className="font-mont text-sm md:text-base">Github:</p>
                    <a
                      href="https://github.com/Joakamakaka1"
                      className="font-mono cursor-pointer text-sm md:text-base break-all"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      https://github.com/Joakamakaka1
                    </a>
                  </div>
                </div>
              </div>
            </article>
          )}

          {selectedOption === 1 && (
            <article className="rounded-lg">
              <div className="flex items-center justify-between mb-4 md:mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-1 h-8 md:h-10 bg-blue-500 rounded"></div>
                  <h1 className="text-2xl md:text-3xl font-mont">Estudios</h1>
                </div>
                <CircleQuestionMark className="w-4 h-4 md:w-5 md:h-5 text-gray-300 cursor-pointer" />
              </div>

              <div className="space-y-2 pt-2 md:pt-4">
                {[1, 2].map((num) => (
                  <motion.div
                    key={num}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col md:flex-row items-start gap-3 md:gap-4 pb-3 md:pb-4"
                  >
                    <img
                      src={`imgs/Foto${num}.png`}
                      alt={`Estudio ${num}`}
                      className="w-full md:w-64 h-48 md:h-64 object-cover rounded"
                    />
                    <div className="w-full md:w-3xl">
                      <h2 className="font-mont text-lg md:text-xl mt-1">
                        {num === 1
                          ? "Desarrollador de aplicaciones multiplataforma (DAM)"
                          : "Desarrollador de aplicaciones web (DAW)"}
                      </h2>
                      <div className="flex items-center gap-2 text-sm md:text-base">
                        <CalendarDays className="w-3 md:w-4" />
                        <p>{num === 1 ? "2022 - 2024" : "2024 - 2025"}</p>
                        <p className="mb-1">|</p>
                        <MapPin className="w-3 md:w-4" />
                        <p>Spain - Cádiz</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </article>
          )}

          {selectedOption === 2 && (
            <article className="rounded-lg">
              <div className="flex items-center justify-between mb-4 md:mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-1 h-8 md:h-10 bg-blue-500 rounded"></div>
                  <h1 className="text-2xl md:text-3xl font-mont">
                    Experiencias
                  </h1>
                </div>
                <CircleQuestionMark className="w-4 h-4 md:w-5 md:h-5 text-gray-300 cursor-pointer" />
              </div>

              <div className="space-y-2 pt-2 md:pt-4">
                {[1, 2].map((num) => (
                  <motion.div
                    key={num}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col md:flex-row items-start gap-3 md:gap-4 pb-3 md:pb-4"
                  >
                    <img
                      src={`imgs/Foto1.png`}
                      alt={`Experiencia ${num}`}
                      className="w-full md:w-64 h-48 md:h-64 object-cover rounded"
                    />
                    <div className="w-full md:w-3xl ml-1">
                      <h2 className="font-mont text-lg md:text-xl mt-1">
                        {num === 1 ? "Libnamic Hosting" : "Moyseafood, S.A"}
                      </h2>
                      <p className="mt-2 text-sm md:text-base">
                        {num === 1
                          ? "Desarrollé aplicaciones web interactivas y de alto rendimiento con Angular y Vue.js, integrando API REST para optimizar la comunicación cliente-servidor y adquiriendo experiencia en ODOO y otras tecnologías utilizadas en los proyectos de la empresa."
                          : "Desarrollé aplicaciones móviles de alto rendimiento con React e Ionic, integrando y optimizando API REST para mejorar la comunicación cliente-servidor, lo que permitió agilizar procesos internos y aumentar la eficiencia operativa de la empresa."}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </article>
          )}

          {selectedOption === 3 && (
            <article className="rounded-lg">
              <div className="flex items-center justify-between mb-4 md:mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-1 h-8 md:h-10 bg-blue-500 rounded"></div>
                  <h1 className="text-2xl md:text-3xl font-mont">
                    Proyectos Personles
                  </h1>
                </div>
                <CircleQuestionMark className="w-4 h-4 md:w-5 md:h-5 text-gray-300 cursor-pointer" />
              </div>

              <div className="space-y-2 pt-2 md:pt-4">
                {[1, 2, 3, 4].map((num) => (
                  <motion.div
                    key={num}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col md:flex-row items-start gap-3 md:gap-4 pb-3 md:pb-4"
                  >
                    <img
                      src={`imgs/Foto1.png`}
                      alt={`Proyecto ${num}`}
                      className="w-full md:w-64 h-48 md:h-64 object-cover rounded"
                    />
                    <div className="w-full md:w-3xl ml-1">
                      <h2 className="font-mont text-lg md:text-xl mt-1">
                        Proyecto {num}
                      </h2>
                      <p className="mt-2 text-sm md:text-base">
                        Played for 300 hours or more
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </article>
          )}
        </motion.div>
      </section>

      <footer className="flex justify-between items-center px-4 md:px-6 py-3 md:py-4 backdrop-blur-md shrink-0">
        <nav>
          <Keyboard className="w-12 h-12 md:w-18 md:h-18" />
        </nav>
        <nav className="flex items-center gap-3 md:gap-6">
          <button className="flex items-center gap-1 md:gap-2">
            <span
              onClick={() => setShowModal(true)}
              className="w-7 h-7 md:w-8 md:h-8 rounded-full text-white bg-black flex items-center justify-center font-bold cursor-pointer text-base md:text-lg mb-1"
            >
              X
            </span>
            <h2 className="text-lg md:text-2xl font-mont">Exit</h2>
          </button>

          <button className="flex items-center gap-1 md:gap-2">
            <Link to="/projects">
              <span className="w-7 h-7 md:w-8 md:h-8 bg-black text-white rounded-full flex items-center justify-center font-bold cursor-pointer text-base md:text-lg mb-1">
                A
              </span>
            </Link>
            <h3 className="text-lg md:text-2xl font-mont">Confirm</h3>
          </button>
        </nav>
      </footer>

      <AnimatePresence>
        {showModal && (
          <motion.div
            key="modal-exit"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ModalConfirmExit onClose={() => setShowModal(false)} />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.main>
  );
};

export default Profile;

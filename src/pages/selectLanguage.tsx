import { Keyboard } from "lucide-react";
import { useState } from "react";
import ModalConfirmLanguage from "../components/modal_confirmLanguage";
import TutorialModal from "../components/modal_tutorial";
import { useListNavigation } from "../hooks/useKeyboardNavigation";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";

const SelectLanguage = () => {
  const [showModal, setShowModal] = useState(true);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(0);
  const navigate = useNavigate();

  const disabledLanguages = [7, 8, 9];
  const languages = [
    "Spanish",
    "English",
    "Catalan",
    "Deutsch",
    "Italiano",
    "Francais",
    "Portugues",
    "中国人",
    "日本語",
    "한국어",
  ];

  const handleConfirm = () => {
    setShowConfirmation(true);
  };

  const handleCancel = () => {
    navigate("/");
  };

  useListNavigation({
    selectedIndex: selectedLanguage,
    setSelectedIndex: setSelectedLanguage,
    itemCount: languages.length,
    columns: 2,
    onConfirm: handleConfirm,
    onCancel: handleCancel,
    enabled: !showModal && !showConfirmation,
  });

  const handleLanguageClick = (index: number) => {
    setSelectedLanguage(index);
  };

  const renderLanguageItem = (lang: string, index: number) => {
    const isSelected = selectedLanguage === index;
    const isDisabled = disabledLanguages.includes(index);

    return (
      <div
        key={index}
        onClick={() => !isDisabled && handleLanguageClick(index)}
        className={`
        h-16 md:h-20 w-full flex items-center pl-2 md:pl-2 
        cursor-${isDisabled ? "not-allowed" : "pointer"} 
        transition-all rounded-md 
        ${
          isSelected && !isDisabled
            ? "border-4 border-blue-400"
            : "border-4 border-transparent"
        } 
        ${isDisabled ? "opacity-50 bg-gray-200" : "hover:bg-gray-100"}
      `}
      >
        <h1
          className={`text-xl md:text-3xl font-mont ${
            isDisabled ? "text-gray-600" : ""
          }`}
        >
          {lang}
        </h1>
      </div>
    );
  };

  return (
    <main className="w-full flex flex-col fixed inset-0">
      <header className="px-4 md:px-6 py-3 md:py-4 border-b border-gray-500 shrink-0">
        <nav className="flex items-center gap-2 md:gap-3">
          <img
            src="imgs/Icono.webp"
            alt="icono perfil"
            className="w-12 h-12 md:w-18 md:h-18 rounded-full object-cover"
          />
          <h1 className="text-xl md:text-3xl font-mont">
            Select your language
          </h1>
        </nav>
      </header>

      <section className="flex-1 flex flex-col md:flex-row justify-center items-start md:items-center gap-3 md:gap-6 px-4 md:px-10 py-4 md:py-6 overflow-y-auto">
        <article className="flex flex-col gap-2 md:gap-4 w-full md:w-1/2">
          {languages
            .slice(0, 5)
            .map((lang, idx) => renderLanguageItem(lang, idx))}
        </article>

        <article className="flex flex-col gap-2 md:gap-4 w-full md:w-1/2">
          {languages
            .slice(5)
            .map((lang, idx) => renderLanguageItem(lang, idx + 5))}
        </article>
      </section>

      <footer className="flex justify-between items-center px-4 md:px-6 py-3 md:py-4 backdrop-blur-md border-t border-gray-500 shrink-0">
        <nav>
          <Keyboard className="w-12 h-12 md:w-18 md:h-18" />
        </nav>
        <nav className="flex items-center gap-3 md:gap-6">
          <button className="flex items-center gap-1 md:gap-2">
            <span
              onClick={handleCancel}
              className="w-7 h-7 md:w-8 md:h-8 bg-black text-white rounded-full flex items-center justify-center font-bold cursor-pointer text-base md:text-lg mb-1"
            >
              X
            </span>
            <h3 className="text-lg md:text-2xl font-mont">Exit</h3>
          </button>
          <button className="flex items-center gap-1 md:gap-2">
            <span
              onClick={handleConfirm}
              className="w-7 h-7 md:w-8 md:h-8 bg-black text-white rounded-full flex items-center justify-center font-bold cursor-pointer text-base md:text-lg mb-1"
            >
              A
            </span>
            <h3 className="text-lg md:text-2xl font-mont">Continue</h3>
          </button>
        </nav>
      </footer>

      <AnimatePresence>
        {showConfirmation && (
          <motion.div
            key="modal-exit"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ModalConfirmLanguage
              onClose={() => setShowConfirmation(false)}
              language={languages[selectedLanguage]}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        <motion.div
          key="modal-exit"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {showModal && <TutorialModal onClose={() => setShowModal(false)} />}
        </motion.div>
      </AnimatePresence>
    </main>
  );
};

export default SelectLanguage;

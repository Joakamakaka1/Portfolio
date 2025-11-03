import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { useKeyboardNavigation } from "../hooks/useKeyboardNavigation";

const Home = () => {
  const text = "My portfolio";
  const author = "By Joaquín Castro Salas";

  useKeyboardNavigation({
    handlers: {
      onConfirm: () => {
        window.location.href = "/selectLanguage";
      },
    },
  });

  const letterVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const authorVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  const totalDelay = text.length * 0.1 + 0.6 + 1.5;

  return (
    <main
      className="flex flex-col w-full min-h-screen bg-[#181a1b] text-white"
      style={{ minHeight: "100dvh" }}
    >
      <div className="flex-1 flex justify-center items-center">
        <div className="flex flex-col gap-2">
          <motion.section
            className="flex flex-col items-start w-60 gap-6 border-r-4 border-blue-500 overflow-hidden"
            initial={{ width: 0 }}
            animate={{ width: "15rem" }}
            transition={{
              duration: text.length * 0.1,
              ease: "linear",
            }}
          >
            <motion.h1
              className="text-4xl font-mont whitespace-nowrap"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {text.split("").map((char, index) => (
                <motion.span
                  key={index}
                  variants={letterVariants}
                  transition={{ duration: 0.1 }}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </motion.h1>
          </motion.section>

          <motion.p
            className="text-sm text-gray-400"
            variants={authorVariants}
            initial="hidden"
            animate="visible"
            transition={{
              delay: text.length * 0.1,
              duration: 0.6,
            }}
          >
            {author}
          </motion.p>
        </div>
      </div>
      <footer className="flex justify-end items-center px-6 py-4 shrink-0">
        <motion.nav
          className="flex items-center gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0, 1, 0, 1] }}
          transition={{
            delay: totalDelay,
            duration: 4,
            times: [0, 0.16, 0.33, 0.5, 0.66, 1],
            repeat: Infinity,
            repeatDelay: 1,
          }}
        >
          <div className="flex items-center gap-2">
            <Link to="/selectLanguage">
              <span className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center font-bold cursor-pointer text-lg mb-1">
                A
              </span>
            </Link>
            <h3 className="text-2xl font-mont">Start</h3>
          </div>
        </motion.nav>
      </footer>
    </main>
  );
};

export default Home;

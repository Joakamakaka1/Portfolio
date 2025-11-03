import { useNavigate } from "react-router-dom";
import { useModalNavigation } from "../hooks/useKeyboardNavigation";
type ModalConfirmLanguageProps = {
  onClose: () => void;
  language: string;
};

const ModalConfirmLanguage = ({
  onClose,
  language,
}: ModalConfirmLanguageProps) => {
  const navigate = useNavigate();
  const handleConfirm = () => {
    navigate("/projects");
  };

  useModalNavigation({
    onConfirm: handleConfirm,
    onCancel: onClose,
  });

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black/50 z-50 backdrop-blur-xs text-black px-4">
      <main className="w-full max-w-[600px] md:w-[600px] bg-neutral-100 rounded-sm shadow-xl flex flex-col overflow-hidden">
        <section className="px-4 md:px-8 py-4 md:py-6 flex flex-col gap-2 md:gap-3">
          <h2 className="text-lg md:text-2xl font-mont text-center">
            Are you sure with your selected language?
          </h2>
          <div className="flex justify-center items-center gap-2 flex-wrap">
            <p className="text-base md:text-xl font-mont-light text-center">
              Selected language:
            </p>
            <span className="text-blue-500 font-mont text-base md:text-xl mt-0.5">
              {language}
            </span>
          </div>

          <p className="font-mont-light text-center italic text-xs md:text-sm text-gray-500">
            You can change it later
          </p>
        </section>

        <hr className="border-gray-300" />

        <footer className="flex w-full">
          <button
            className="w-full p-3 md:p-4 cursor-pointer font-mont text-sm md:text-base border-4 border-transparent hover:border-blue-400 transition-all duration-200"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            onClick={handleConfirm}
            className="w-full p-3 md:p-4 cursor-pointer font-mont text-sm md:text-base border-4 border-transparent hover:border-blue-400 transition-all duration-200 text-center"
          >
            Confirm
          </button>
        </footer>
      </main>
    </div>
  );
};

export default ModalConfirmLanguage;

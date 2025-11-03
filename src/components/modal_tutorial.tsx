import { useModalNavigation } from "../hooks/useKeyboardNavigation";

type TutorialModalProps = {
  onClose: () => void;
};

const TutorialModal = ({ onClose }: TutorialModalProps) => {
  useModalNavigation({
    onConfirm: onClose,
    onCancel: onClose,
  });

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black/50 z-50 backdrop-blur-xs px-4">
      <main className="w-full max-w-[600px] md:w-[600px] bg-neutral-100 rounded-sm shadow-xl flex flex-col overflow-hidden">
        <section className="px-4 md:px-8 py-4 md:py-6 flex flex-col gap-2 md:gap-3">
          <h2 className="text-lg md:text-2xl font-mont">
            To interact with the interface: use the buttons and arrow keys to
            navigate.
          </h2>

          <div className="flex items-center gap-2 text-sm md:text-base">
            <span>Press</span>
            <span className="w-7 h-7 md:w-8 md:h-8 bg-black text-white rounded-full flex items-center justify-center font-bold text-base md:text-lg pb-0.5">
              A
            </span>
            <span>to continue.</span>
          </div>

          <div className="flex items-center gap-2 text-sm md:text-base">
            <span>Press</span>
            <span className="w-7 h-7 md:w-8 md:h-8 bg-black text-white rounded-full flex items-center justify-center font-bold text-base md:text-lg pb-0.5">
              X
            </span>
            <span>to cancel.</span>
          </div>

          <p className="text-xs md:text-sm text-gray-500 italic">
            You can also use the mouse to interact with the interface.
          </p>
        </section>

        <hr className="border-gray-300" />

        <footer className="flex w-full">
          <button
            className="w-full p-3 md:p-4 cursor-pointer font-mont text-sm md:text-base border-4 border-transparent hover:border-blue-400 transition-all duration-200"
            onClick={onClose}
          >
            Continue
          </button>
        </footer>
      </main>
    </div>
  );
};

export default TutorialModal;

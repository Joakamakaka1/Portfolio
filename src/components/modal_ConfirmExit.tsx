import { Link } from "react-router-dom";

type ModalConfirmExitProps = {
  onClose: () => void;
};

const ModalConfirmExit = ({ onClose }: ModalConfirmExitProps) => {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black/50 z-50 backdrop-blur-xs px-4 text-black">
      <main className="w-full max-w-[600px] md:w-[600px] bg-neutral-100 rounded-sm shadow-xl flex flex-col overflow-hidden">
        <section className="px-4 md:px-8 py-4 md:py-6 flex flex-col gap-2 md:gap-3">
          <h2 className="text-lg md:text-2xl font-mont text-center">
            Are you sure you want to exit?
          </h2>
          <p className="text-sm md:text-base text-gray-500 italic text-center">
            You will be redirected to the home page
          </p>
        </section>
        <hr className="border-gray-300" />
        <footer className="flex w-full">
          <button
            className="flex-1 p-3 md:p-4 cursor-pointer font-mont text-sm md:text-base border-4 border-transparent hover:border-blue-400 transition-all duration-200 text-center"
            onClick={onClose}
          >
            Cancel
          </button>
          <Link
            to="/"
            className="flex-1 p-3 md:p-4 cursor-pointer font-mont text-sm md:text-base border-4 border-transparent hover:border-blue-400 transition-all duration-200 text-center"
          >
            Confirm
          </Link>
        </footer>
      </main>
    </div>
  );
};

export default ModalConfirmExit;

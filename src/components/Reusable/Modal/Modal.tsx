import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { RxCross1 } from "react-icons/rx";

type TModalProps = {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
  width?: string;
  classNames?: string;
  iconColor?: string;
};

const Modal: React.FC<TModalProps> = ({
  isModalOpen,
  setIsModalOpen,
  children,
  width = "w-[90%] sm:w-[60%] lg:w-[50%]",
  classNames = "p-1.5 bg-white",
  iconColor = "text-white",
}) => {
  // Close on Escape key & lock background scroll while open
  useEffect(() => {
    if (!isModalOpen) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsModalOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isModalOpen, setIsModalOpen]);

  return (
    <AnimatePresence>
      {isModalOpen && (
        <motion.div
          role="dialog"
          aria-modal="true"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setIsModalOpen(false);
            }
          }}
          className="fixed inset-0 z-200000000 flex h-screen w-full items-center justify-center bg-neutral-16/55 p-4 backdrop-blur-sm font-Manrope"
        >
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.97 }}
            transition={{
              duration: 0.32,
              ease: [0.16, 1, 0.3, 1],
            }}
            className={`${width} relative h-fit max-h-[88vh] overflow-y-auto rounded-2xl shadow-2xl ${classNames}`}
          >
            <div className="relative">
              <button
                type="button"
                aria-label="Close modal"
                onClick={() => setIsModalOpen(false)}
                className={`absolute top-4 right-4 z-20 flex h-8 w-8 items-center justify-center rounded-full transition-all duration-200 hover:rotate-90 hover:bg-white/10 ${iconColor}`}
              >
                <RxCross1 className="text-base" />
              </button>
              {children}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
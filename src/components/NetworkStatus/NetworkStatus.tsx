// components/Reusable/NetworkStatus/NetworkStatus.tsx
import { useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import { motion } from "framer-motion";
import { FiWifiOff, FiWifi } from "react-icons/fi";

const NetworkStatus = () => {
  useEffect(() => {
    // Function to show Offline Toast
    const handleOffline = () => {
      toast.custom(
        (t) => (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className={`
              ${
                t.visible ? "animate-enter" : "animate-leave"
              } max-w-md w-full bg-neutral-20/90 backdrop-blur-xl border border-[#FF5F5F]/30 shadow-[0_20px_50px_-12px_rgba(255,95,95,0.3)] rounded-2xl pointer-events-auto flex items-center gap-4 p-4 overflow-hidden relative
            `}
          >
            {/* Red Glow Background */}
            <div className="absolute top-0 left-0 w-full h-full bg-linear-to-r from-[#FF5F5F]/10 to-transparent pointer-events-none" />
            
            {/* Animated Icon */}
            <div className="relative flex items-center justify-center size-12 bg-[#FF5F5F]/20 rounded-xl shrink-0">
              <FiWifiOff className="text-[#FF5F5F] text-2xl z-10" />
              <motion.div 
                animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 bg-[#FF5F5F]/30 rounded-xl"
              />
            </div>

            {/* Content */}
            <div className="flex-1 relative z-10">
              <h3 className="text-white font-semibold text-sm">Connection Lost</h3>
              <p className="text-neutral-80 text-xs mt-0.5">
                Oops! It seems your internet went away. We'll reconnect automatically.
              </p>
            </div>
          </motion.div>
        ),
        { duration: 4000, position: "bottom-center" }
      );
    };

    // Function to show Back Online Toast
    const handleOnline = () => {
      toast.dismiss(); // Dismiss any offline toasts
      
      toast.custom(
        (t) => (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className={`
              ${t.visible ? "animate-enter" : "animate-leave"}
              max-w-md w-full bg-neutral-20/90 backdrop-blur-xl border border-[#22C55E]/30 shadow-[0_20px_50px_-12px_rgba(34,197,94,0.3)] rounded-2xl pointer-events-auto flex items-center gap-4 p-4 overflow-hidden relative
            `}
          >
            {/* Green Glow Background */}
            <div className="absolute top-0 left-0 w-full h-full bg-linear-to-r from-[#22C55E]/10 to-transparent pointer-events-none" />

            {/* Animated Icon */}
            <div className="relative flex items-center justify-center size-12 bg-[#22C55E]/20 rounded-xl shrink-0">
              <FiWifi className="text-[#22C55E] text-2xl z-10" />
              <motion.div 
                animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 bg-[#22C55E]/30 rounded-xl"
              />
            </div>

            {/* Content */}
            <div className="flex-1 relative z-10">
              <h3 className="text-white font-semibold text-sm">Back Online</h3>
              <p className="text-neutral-80 text-xs mt-0.5">
                Great! Your internet connection has been restored.
              </p>
            </div>
          </motion.div>
        ),
        { duration: 4000, position: "bottom-center" }
      );
    };

    // Attach event listeners
    window.addEventListener("offline", handleOffline);
    window.addEventListener("online", handleOnline);

    // Initial check just in case the user loads the page while offline
    if (!navigator.onLine) {
      handleOffline();
    }

    // Cleanup
    return () => {
      window.removeEventListener("offline", handleOffline);
      window.removeEventListener("online", handleOnline);
    };
  }, []);

  // The Toaster component renders the toasts
  return (
    <Toaster
      position="bottom-center"
      toastOptions={{
        className: "font-Manrope",
      }}
    />
  );
};

export default NetworkStatus;
import { useState, useEffect } from "react";
import { Compass, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface NavbarProps {
  onStartTest: () => void;
  onNavigateToHome: () => void;
}

export default function Navbar({ onStartTest, onNavigateToHome }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Force light mode
    document.documentElement.classList.remove("dark");
    localStorage.removeItem("theme");
  }, []);

  return (
    <nav className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-100 dark:border-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <button
            onClick={onNavigateToHome}
            className="flex items-center space-x-2 text-left cursor-pointer group"
          >
            <div className="p-2 rounded-xl bg-gradient-to-tr from-[#fe4c6f] to-rose-400 text-white shadow-md shadow-rose-100 dark:shadow-none group-hover:scale-105 transition-transform">
              <Compass className="h-6 w-6" />
            </div>
            <div>
              <span className="text-xl font-bold tracking-tight text-gray-900 dark:text-white flex items-center gap-1.5">
                DISC <span className="text-[#fe4c6f]">Indonesia</span>
              </span>
              <p className="text-[10px] text-gray-500 dark:text-gray-400 font-medium tracking-wide">
                TES KEPRIBADIAN MODERN
              </p>
            </div>
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={onNavigateToHome}
              className="text-gray-600 dark:text-gray-300 hover:text-[#fe4c6f] dark:hover:text-[#fe4c6f] font-medium text-sm transition-colors cursor-pointer"
            >
              Beranda
            </button>
            <a
              href="#tentang"
              className="text-gray-600 dark:text-gray-300 hover:text-[#fe4c6f] dark:hover:text-[#fe4c6f] font-medium text-sm transition-colors cursor-pointer"
            >
              Tentang DISC
            </a>
            <a
              href="#faq"
              className="text-gray-600 dark:text-gray-300 hover:text-[#fe4c6f] dark:hover:text-[#fe4c6f] font-medium text-sm transition-colors cursor-pointer"
            >
              FAQ
            </a>

            <button
              onClick={onStartTest}
              className="px-5 py-2.5 rounded-xl bg-[#fe4c6f] hover:bg-[#e03d5e] text-white font-semibold text-sm shadow-md shadow-rose-100 dark:shadow-none hover:shadow-lg hover:shadow-rose-200 transition-all cursor-pointer transform hover:-translate-y-0.5"
            >
              Mulai Tes Gratis
            </button>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex md:hidden items-center space-x-2">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors cursor-pointer"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-3">
              <button
                onClick={() => {
                  onNavigateToHome();
                  setIsOpen(false);
                }}
                className="block w-full text-left px-3 py-2.5 rounded-xl text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 font-medium transition-colors"
              >
                Beranda
              </button>
              <a
                href="#tentang"
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2.5 rounded-xl text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 font-medium transition-colors"
              >
                Tentang DISC
              </a>
              <a
                href="#faq"
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2.5 rounded-xl text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 font-medium transition-colors"
              >
                FAQ
              </a>
              <div className="pt-2">
                <button
                  onClick={() => {
                    onStartTest();
                    setIsOpen(false);
                  }}
                  className="block w-full py-3 rounded-xl bg-[#fe4c6f] hover:bg-[#e03d5e] text-white font-semibold text-center shadow-md transition-all"
                >
                  Mulai Tes Gratis
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

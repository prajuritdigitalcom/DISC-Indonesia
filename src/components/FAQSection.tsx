import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { faqData } from "../data/faq";

export default function FAQSection() {
  const [activeId, setActiveId] = useState<number | null>(null);

  const toggleFAQ = (id: number) => {
    setActiveId(activeId === id ? null : id);
  };

  const renderFormattedText = (text: string) => {
    const parts = text.split("**");
    return parts.map((part, index) => {
      if (index % 2 === 1) {
        return <strong key={index} className="font-bold text-gray-900 dark:text-white">{part}</strong>;
      }
      return part;
    });
  };

  return (
    <section id="faq" className="py-16 sm:py-24 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight flex items-center justify-center gap-2">
            <HelpCircle className="h-7 w-7 text-[#fe4c6f]" />
            <span>Pertanyaan Umum (FAQ)</span>
          </h2>
          <p className="mt-4 text-base text-gray-600 dark:text-gray-400">
            Punya pertanyaan mengenai DISC Indonesia? Temukan jawabannya di bawah ini.
          </p>
        </div>

        {/* Accordion Group */}
        <div className="mt-12 space-y-4">
          {faqData.map((item) => {
            const isOpen = activeId === item.id;
            return (
              <div
                key={item.id}
                className="bg-white dark:bg-gray-950 rounded-2xl border border-gray-100 dark:border-gray-800 overflow-hidden transition-all duration-250"
              >
                <button
                  onClick={() => toggleFAQ(item.id)}
                  className="w-full px-6 py-5 flex justify-between items-center text-left font-bold text-gray-900 dark:text-white hover:text-[#fe4c6f] dark:hover:text-[#fe4c6f] transition-colors cursor-pointer"
                >
                  <span className="pr-4 text-sm sm:text-base leading-snug">{item.question}</span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="shrink-0 p-1 rounded-lg bg-gray-50 dark:bg-gray-800 text-gray-500"
                  >
                    <ChevronDown className="h-4 w-4" />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-5 text-sm text-gray-600 dark:text-gray-300 leading-relaxed border-t border-gray-50 dark:border-gray-900 pt-4 whitespace-pre-line">
                        {renderFormattedText(item.answer)}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

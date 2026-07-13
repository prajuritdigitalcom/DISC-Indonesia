import { useState, useEffect, useRef } from "react";
import { ArrowLeft, ArrowRight, Timer, Play, Pause, AlertTriangle, RefreshCw, X, Check, ThumbsUp, ThumbsDown } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { DISCQuestion, questions } from "../data/questions";
import { DISCAnswer } from "../types";

interface TestInterfaceProps {
  initialAnswers: Record<number, DISCAnswer>;
  initialIndex: number;
  useTimer: boolean;
  initialElapsedTime: number;
  onSaveProgress: (answers: Record<number, DISCAnswer>, currentIndex: number, elapsedTime: number) => void;
  onComplete: (answers: Record<number, DISCAnswer>) => void;
  onCancel: () => void;
}

export default function TestInterface({
  initialAnswers,
  initialIndex,
  useTimer: initialUseTimer,
  initialElapsedTime,
  onSaveProgress,
  onComplete,
  onCancel,
}: TestInterfaceProps) {
  const [answers, setAnswers] = useState<Record<number, DISCAnswer>>(initialAnswers);
  const [currentIndex, setCurrentIndex] = useState<number>(initialIndex);
  const [timerOn, setTimerOn] = useState<boolean>(true);
  const [elapsedTime, setElapsedTime] = useState<number>(initialElapsedTime);
  const [showExitConfirm, setShowExitConfirm] = useState<boolean>(false);
  const [showResetConfirm, setShowResetConfirm] = useState<boolean>(false);
  const [direction, setDirection] = useState<number>(1); // 1 = forward, -1 = backward

  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const currentQuestion = questions[currentIndex];

  // Timer interval effect
  useEffect(() => {
    if (timerOn) {
      timerRef.current = setInterval(() => {
        setElapsedTime((prev) => {
          const next = prev + 1;
          onSaveProgress(answers, currentIndex, next);
          return next;
        });
      }, 1000);
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [timerOn, currentIndex, answers]);

  // Format timer text (MM:SS)
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const currentAnswer = answers[currentQuestion.id] || {
    questionId: currentQuestion.id,
    mostOptionId: null,
    leastOptionId: null,
  };

  const handleSelectOption = (optionId: string, type: "MOST" | "LEAST") => {
    const updatedAnswer = { ...currentAnswer };

    if (type === "MOST") {
      // If already selected as least, clear least
      if (updatedAnswer.leastOptionId === optionId) {
        updatedAnswer.leastOptionId = null;
      }
      updatedAnswer.mostOptionId = optionId;
    } else {
      // If already selected as most, clear most
      if (updatedAnswer.mostOptionId === optionId) {
        updatedAnswer.mostOptionId = null;
      }
      updatedAnswer.leastOptionId = optionId;
    }

    const updatedAnswers = {
      ...answers,
      [currentQuestion.id]: updatedAnswer,
    };

    setAnswers(updatedAnswers);
    onSaveProgress(updatedAnswers, currentIndex, elapsedTime);
  };

  const handleNext = () => {
    // Validate that BOTH most and least are chosen
    if (!currentAnswer.mostOptionId || !currentAnswer.leastOptionId) {
      return; // Cannot proceed without selecting both
    }

    if (currentIndex < questions.length - 1) {
      setDirection(1);
      setTimeout(() => {
        setCurrentIndex((prev) => {
          const next = prev + 1;
          onSaveProgress(answers, next, elapsedTime);
          return next;
        });
      }, 50);
    } else {
      // End of test - check if all answers are filled
      const allFilled = questions.every((q) => {
        const ans = answers[q.id];
        return ans && ans.mostOptionId && ans.leastOptionId;
      });

      if (allFilled) {
        onComplete(answers);
      } else {
        // Find first incomplete question
        const firstIncomplete = questions.findIndex((q) => {
          const ans = answers[q.id];
          return !ans || !ans.mostOptionId || !ans.leastOptionId;
        });
        if (firstIncomplete !== -1) {
          setDirection(firstIncomplete > currentIndex ? 1 : -1);
          setCurrentIndex(firstIncomplete);
        }
      }
    }
  };

  const handleBack = () => {
    if (currentIndex > 0) {
      setDirection(-1);
      setTimeout(() => {
        setCurrentIndex((prev) => {
          const next = prev - 1;
          onSaveProgress(answers, next, elapsedTime);
          return next;
        });
      }, 50);
    }
  };

  const handleResetTest = () => {
    const clearedAnswers: Record<number, DISCAnswer> = {};
    setAnswers(clearedAnswers);
    setCurrentIndex(0);
    setElapsedTime(0);
    setShowResetConfirm(false);
    onSaveProgress(clearedAnswers, 0, 0);
  };

  const totalAnswered = questions.filter((q) => {
    const ans = answers[q.id];
    return ans && ans.mostOptionId && ans.leastOptionId;
  }).length;

  const progressPercent = Math.round((totalAnswered / questions.length) * 100);

  const isCurrentQuestionValid = !!(currentAnswer.mostOptionId && currentAnswer.leastOptionId);

  // Transition variants
  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -100 : 100,
      opacity: 0,
    }),
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] py-8 sm:py-12 bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 transition-colors duration-300">
      <div className="max-w-3xl mx-auto px-4">
        
        {/* Test Header with Progress & Exit Button */}
        <div className="bg-white dark:bg-gray-950 p-6 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm transition-all duration-300 mb-8">
          <div className="flex justify-between items-center mb-4">
            <div>
              <span className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Progress Tes DISC
              </span>
              <p className="text-lg font-black text-gray-900 dark:text-white leading-tight mt-0.5">
                Soal {currentIndex + 1} dari {questions.length}
              </p>
            </div>
            
            {/* Timer and Exit Controls */}
            <div className="flex items-center space-x-3">
              {/* Optional Timer Display */}
              <div className="flex items-center space-x-2 bg-gray-50 dark:bg-gray-900 px-3 py-1.5 rounded-xl border border-gray-100 dark:border-gray-800">
                <Timer className="h-4 w-4 text-[#fe4c6f]" />
                <span className="font-mono text-sm font-semibold text-gray-700 dark:text-gray-200">
                  {formatTime(elapsedTime)}
                </span>
                <button
                  onClick={() => setTimerOn(!timerOn)}
                  className="p-1 rounded-md text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors cursor-pointer"
                  title={timerOn ? "Jeda Waktu" : "Mulai Waktu"}
                >
                  {timerOn ? <Pause className="h-3.5 w-3.5" /> : <Play className="h-3.5 w-3.5 fill-current" />}
                </button>
              </div>

              {/* Exit Button */}
              <button
                onClick={() => setShowExitConfirm(true)}
                className="p-2 rounded-xl text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors cursor-pointer"
                title="Keluar dari Tes"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-gray-100 dark:bg-gray-800 h-2.5 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
              transition={{ duration: 0.2 }}
              className="bg-gradient-to-r from-[#fe4c6f] to-rose-400 h-full rounded-full"
            ></motion.div>
          </div>
          <div className="flex justify-between items-center text-[11px] text-gray-500 dark:text-gray-400 mt-2 font-medium">
            <span>Terjawab: {totalAnswered} / {questions.length} soal</span>
            <span>{progressPercent}% Selesai</span>
          </div>
        </div>

        {/* Question Area with slide transition */}
        <div className="relative overflow-hidden min-h-[380px] bg-white dark:bg-gray-950 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-xl shadow-gray-100/10 dark:shadow-none p-6 sm:p-8">
          
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.15, ease: "easeInOut" }}
              className="space-y-6"
            >
              {/* Category Indicator */}
              <div className="flex items-center space-x-2">
                <span className="px-2.5 py-1 rounded-md bg-rose-50 dark:bg-rose-950/30 text-rose-500 text-[10px] font-black uppercase tracking-widest">
                  Kategori: {currentQuestion.category}
                </span>
              </div>

              {/* Instruction */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white leading-tight">
                  Pilih yang paling menggambarkan diri Anda:
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 leading-relaxed">
                  Pilihlah satu pernyataan sebagai <strong>Paling Sesuai</strong> (Most) dan satu sebagai <strong>Kurang Sesuai</strong> (Least).
                </p>
              </div>

              {/* Choices List */}
              <div className="space-y-4 mt-6">
                {currentQuestion.options.map((opt) => {
                  const isMost = currentAnswer.mostOptionId === opt.id;
                  const isLeast = currentAnswer.leastOptionId === opt.id;

                  return (
                    <div
                      key={opt.id}
                      className={`flex flex-col sm:flex-row sm:items-center justify-between p-4 sm:p-5 rounded-2xl border transition-all duration-200 ${
                        isMost
                          ? "border-emerald-200 dark:border-emerald-900 bg-emerald-50/50 dark:bg-emerald-950/10"
                          : isLeast
                          ? "border-rose-200 dark:border-rose-900 bg-rose-50/30 dark:bg-rose-950/5"
                          : "border-gray-100 dark:border-gray-850 hover:border-gray-200 dark:hover:border-gray-800"
                      }`}
                    >
                      <span className="text-sm sm:text-base font-semibold text-gray-800 dark:text-gray-200 leading-snug sm:pr-4 mb-4 sm:mb-0">
                        {opt.text}
                      </span>

                      {/* Selection Column buttons */}
                      <div className="flex items-center gap-2.5 w-full sm:w-auto justify-end">
                        {/* MOST Button */}
                        <button
                          onClick={() => handleSelectOption(opt.id, "MOST")}
                          className={`flex-1 sm:flex-initial flex items-center justify-center space-x-1.5 px-4 py-2.5 sm:py-2 rounded-xl text-xs font-bold border transition-all cursor-pointer min-h-[44px] sm:min-h-0 ${
                            isMost
                              ? "bg-emerald-500 text-white border-emerald-500 shadow-md shadow-emerald-100 dark:shadow-none font-extrabold"
                              : "bg-white dark:bg-gray-900 text-gray-500 dark:text-gray-400 hover:text-emerald-500 border-gray-200 dark:border-gray-700 hover:border-emerald-200 dark:hover:border-emerald-900"
                          }`}
                        >
                          <ThumbsUp className="h-4 w-4 shrink-0" />
                          <span>Paling Sesuai</span>
                        </button>

                        {/* LEAST Button */}
                        <button
                          onClick={() => handleSelectOption(opt.id, "LEAST")}
                          className={`flex-1 sm:flex-initial flex items-center justify-center space-x-1.5 px-4 py-2.5 sm:py-2 rounded-xl text-xs font-bold border transition-all cursor-pointer min-h-[44px] sm:min-h-0 ${
                            isLeast
                              ? "bg-rose-500 text-white border-rose-500 shadow-md shadow-rose-100 dark:shadow-none font-extrabold"
                              : "bg-white dark:bg-gray-900 text-gray-500 dark:text-gray-400 hover:text-rose-500 border-gray-200 dark:border-gray-700 hover:border-rose-200 dark:hover:border-rose-900"
                          }`}
                        >
                          <ThumbsDown className="h-4 w-4 shrink-0" />
                          <span>Kurang Sesuai</span>
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </AnimatePresence>

        </div>

        {/* Navigation Controls */}
        <div className="flex justify-between items-center mt-6">
          <button
            onClick={handleBack}
            disabled={currentIndex === 0}
            className={`flex items-center space-x-1.5 px-5 py-3 rounded-2xl font-bold text-sm border transition-all ${
              currentIndex === 0
                ? "text-gray-300 dark:text-gray-700 border-gray-100 dark:border-gray-900 cursor-not-allowed"
                : "text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-900 border-gray-200 dark:border-gray-750 hover:border-gray-300 dark:hover:border-gray-700 cursor-pointer"
            }`}
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Kembali</span>
          </button>

          {/* Quick instructions indicator when incomplete */}
          {!isCurrentQuestionValid && (
            <span className="text-[11px] font-semibold text-rose-500 bg-rose-50 dark:bg-rose-950/20 px-3 py-1.5 rounded-lg border border-rose-100 dark:border-rose-900/40 animate-pulse hidden sm:inline">
              Pilih satu Paling & satu Kurang
            </span>
          )}

          <button
            onClick={handleNext}
            disabled={!isCurrentQuestionValid}
            className={`flex items-center space-x-1.5 px-6 py-3 rounded-2xl font-bold text-sm shadow-md transition-all cursor-pointer ${
              isCurrentQuestionValid
                ? "bg-[#fe4c6f] hover:bg-[#e03d5e] text-white shadow-rose-100 dark:shadow-none transform hover:-translate-y-0.5"
                : "bg-gray-100 dark:bg-gray-800 text-gray-400 dark:text-gray-600 shadow-none border-transparent cursor-not-allowed"
            }`}
          >
            <span>{currentIndex === questions.length - 1 ? "Selesaikan Tes" : "Lanjut"}</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>

        {/* Quick Reset Button in bottom corner */}
        <div className="flex justify-center mt-12">
          <button
            onClick={() => setShowResetConfirm(true)}
            className="flex items-center space-x-1.5 text-xs font-semibold text-gray-400 hover:text-rose-500 dark:text-gray-600 dark:hover:text-rose-400 transition-colors cursor-pointer"
          >
            <RefreshCw className="h-3.5 w-3.5" />
            <span>Reset Tes & Hapus Jawaban</span>
          </button>
        </div>

      </div>

      {/* MODALS */}

      {/* Exit Confirmation Dialog */}
      <AnimatePresence>
        {showExitConfirm && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 dark:bg-black/70 backdrop-blur-sm">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white dark:bg-gray-950 rounded-3xl p-6 max-w-sm w-full border border-gray-100 dark:border-gray-800 shadow-2xl"
            >
              <div className="w-12 h-12 rounded-2xl bg-amber-50 dark:bg-amber-950/30 border border-amber-100 dark:border-amber-900/50 flex items-center justify-center text-amber-500 mb-4">
                <AlertTriangle className="h-6 w-6" />
              </div>
              <h4 className="text-lg font-bold text-gray-900 dark:text-white leading-tight">
                Konfirmasi Keluar Tes
              </h4>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 leading-relaxed">
                Kemajuan Anda akan disimpan secara otomatis di browser ini. Apakah Anda yakin ingin kembali ke halaman utama?
              </p>
              <div className="flex space-x-3 mt-6">
                <button
                  onClick={() => setShowExitConfirm(false)}
                  className="flex-1 py-3 rounded-2xl bg-gray-50 hover:bg-gray-100 dark:bg-gray-900 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-200 font-bold text-sm transition-colors cursor-pointer"
                >
                  Batal
                </button>
                <button
                  onClick={onCancel}
                  className="flex-1 py-3 rounded-2xl bg-[#fe4c6f] hover:bg-[#e03d5e] text-white font-bold text-sm transition-colors cursor-pointer"
                >
                  Keluar
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Reset Confirmation Dialog */}
      <AnimatePresence>
        {showResetConfirm && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 dark:bg-black/70 backdrop-blur-sm">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white dark:bg-gray-950 rounded-3xl p-6 max-w-sm w-full border border-gray-100 dark:border-gray-800 shadow-2xl"
            >
              <div className="w-12 h-12 rounded-2xl bg-rose-50 dark:bg-rose-950/30 border border-rose-100 dark:border-rose-900/50 flex items-center justify-center text-rose-500 mb-4">
                <AlertTriangle className="h-6 w-6" />
              </div>
              <h4 className="text-lg font-bold text-gray-900 dark:text-white leading-tight">
                Reset Semua Jawaban?
              </h4>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 leading-relaxed">
                Tindakan ini akan menghapus seluruh jawaban Anda yang tersimpan secara permanen dan memulai tes kembali dari soal nomor satu.
              </p>
              <div className="flex space-x-3 mt-6">
                <button
                  onClick={() => setShowResetConfirm(false)}
                  className="flex-1 py-3 rounded-2xl bg-gray-50 hover:bg-gray-100 dark:bg-gray-900 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-200 font-bold text-sm transition-colors cursor-pointer"
                >
                  Batal
                </button>
                <button
                  onClick={handleResetTest}
                  className="flex-1 py-3 rounded-2xl bg-rose-500 hover:bg-rose-600 text-white font-bold text-sm transition-colors cursor-pointer"
                >
                  Hapus & Reset
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}

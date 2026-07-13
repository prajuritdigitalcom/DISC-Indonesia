import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutDISC from "./components/AboutDISC";
import WhyUs from "./components/WhyUs";
import HowItWorks from "./components/HowItWorks";
import FAQSection from "./components/FAQSection";
import Footer from "./components/Footer";
import TestInterface from "./components/TestInterface";
import ResultsView from "./components/ResultsView";
import { DISCAnswer, TestState } from "./types";
import { Compass, AlertCircle, RefreshCw, ArrowRight, Shield, FileText } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

type ViewState = "LANDING" | "TEST" | "RESULTS" | "PRIVACY" | "DISCLAIMER";

export default function App() {
  const [view, setView] = useState<ViewState>("LANDING");
  const [hasSavedProgress, setHasSavedProgress] = useState(false);
  const [savedIndex, setSavedIndex] = useState(0);
  const [savedAnswerCount, setSavedAnswerCount] = useState(0);

  const [testState, setTestState] = useState<TestState>({
    answers: {},
    currentQuestionIndex: 0,
    isCompleted: false,
    useTimer: true,
    elapsedTime: 0,
  });

  // Check for saved progress on load
  useEffect(() => {
    const saved = localStorage.getItem("disc_test_state");
    if (saved) {
      try {
        const parsed = JSON.parse(saved) as TestState;
        if (parsed.answers && Object.keys(parsed.answers).length > 0 && !parsed.isCompleted) {
          setHasSavedProgress(true);
          setSavedIndex(parsed.currentQuestionIndex);
          setSavedAnswerCount(Object.keys(parsed.answers).length);
          setTestState(parsed);
        }
      } catch (e) {
        console.error("Gagal memulihkan progres tes:", e);
      }
    }
  }, [view]);

  // Handle starting a fresh test
  const handleStartNewTest = () => {
    const freshState: TestState = {
      answers: {},
      currentQuestionIndex: 0,
      isCompleted: false,
      useTimer: true,
      elapsedTime: 0,
    };
    localStorage.setItem("disc_test_state", JSON.stringify(freshState));
    setTestState(freshState);
    setHasSavedProgress(false);
    setView("TEST");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Handle resuming a saved test
  const handleResumeTest = () => {
    setView("TEST");
    setHasSavedProgress(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Save intermediate progress
  const handleSaveProgress = (
    answers: Record<number, DISCAnswer>,
    currentIndex: number,
    elapsedTime: number,
    questionOrder?: number[],
    optionOrder?: Record<number, string[]>
  ) => {
    const updatedState: TestState = {
      answers,
      currentQuestionIndex: currentIndex,
      isCompleted: false,
      useTimer: true,
      elapsedTime,
      questionOrder,
      optionOrder,
    };
    setTestState(updatedState);
    localStorage.setItem("disc_test_state", JSON.stringify(updatedState));
  };

  // Complete the test and view results
  const handleComplete = (answers: Record<number, DISCAnswer>) => {
    const completedState: TestState = {
      ...testState,
      answers,
      isCompleted: true,
    };
    setTestState(completedState);
    localStorage.setItem("disc_test_state", JSON.stringify(completedState));
    setView("RESULTS");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Cancel the test and go back to home screen
  const handleCancelTest = () => {
    setView("LANDING");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Reset results and do a brand new test
  const handleResetResults = () => {
    localStorage.removeItem("disc_test_state");
    handleStartNewTest();
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      
      {/* Navigation Header */}
      <Navbar
        onStartTest={handleStartNewTest}
        onNavigateToHome={() => {
          setView("LANDING");
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      />

      {/* Main Content Area */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          
          {/* LANDING VIEW */}
          {view === "LANDING" && (
            <motion.div
              key="landing"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {/* RESUME PROGRESS BANNER */}
              {hasSavedProgress && (
                <div className="bg-rose-500 text-white border-b border-rose-600">
                  <div className="max-w-7xl mx-auto px-4 py-3 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-3">
                    <div className="flex items-center space-x-2.5">
                      <AlertCircle className="h-5 w-5 shrink-0 text-white animate-bounce" />
                      <span className="text-sm font-semibold">
                        Anda memiliki tes sebelumnya yang belum selesai ({savedAnswerCount}/24 soal).
                      </span>
                    </div>
                    <div className="flex items-center space-x-3 w-full sm:w-auto justify-end">
                      <button
                        onClick={handleStartNewTest}
                        className="px-3.5 py-1.5 rounded-lg bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs transition-colors cursor-pointer"
                      >
                        Mulai Baru
                      </button>
                      <button
                        onClick={handleResumeTest}
                        className="flex items-center space-x-1.5 px-4 py-1.5 rounded-lg bg-white text-rose-600 hover:bg-gray-50 font-extrabold text-xs shadow transition-all cursor-pointer"
                      >
                        <span>Lanjutkan</span>
                        <ArrowRight className="h-3 w-3" />
                      </button>
                    </div>
                  </div>
                </div>
              )}

              <Hero onStartTest={handleStartNewTest} />
              <AboutDISC />
              <WhyUs />
              <HowItWorks />
              <FAQSection />
            </motion.div>
          )}

          {/* ACTIVE TEST VIEW */}
          {view === "TEST" && (
            <motion.div
              key="test"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <TestInterface
                initialAnswers={testState.answers}
                initialIndex={testState.currentQuestionIndex}
                useTimer={testState.useTimer}
                initialElapsedTime={testState.elapsedTime}
                initialQuestionOrder={testState.questionOrder}
                initialOptionOrder={testState.optionOrder}
                onSaveProgress={handleSaveProgress}
                onComplete={handleComplete}
                onCancel={handleCancelTest}
              />
            </motion.div>
          )}

          {/* RESULTS VIEW */}
          {view === "RESULTS" && (
            <motion.div
              key="results"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <ResultsView
                answers={testState.answers}
                elapsedTime={testState.elapsedTime}
                onReset={handleResetResults}
              />
            </motion.div>
          )}

          {/* PRIVACY POLICY VIEW */}
          {view === "PRIVACY" && (
            <motion.div
              key="privacy"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="max-w-3xl mx-auto px-4 py-12"
            >
              <div className="bg-white dark:bg-gray-950 p-6 sm:p-10 rounded-3xl border border-gray-150/40 dark:border-gray-800 shadow-sm space-y-6">
                <div className="flex items-center space-x-3 text-[#fe4c6f]">
                  <Shield className="h-8 w-8" />
                  <h2 className="text-2xl sm:text-3xl font-black text-gray-900 dark:text-white">Kebijakan Privasi</h2>
                </div>
                <p className="text-xs text-gray-500 font-medium">Terakhir Diperbarui: 12 Juli 2026</p>
                
                <div className="text-sm text-gray-600 dark:text-gray-350 space-y-4 leading-relaxed">
                  <p>
                    Selamat datang di <strong>DISC Indonesia</strong>. Kami sangat berkomitmen menjaga keamanan data dan privasi pengunjung kami.
                  </p>
                  
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white pt-2">1. Penyimpanan Data Lokal</h3>
                  <p>
                    Aplikasi ini dirancang untuk bekerja secara luring di sisi peramban (client-side) Anda. Seluruh jawaban tes kepribadian Anda diproses langsung di peramban menggunakan fitur penyimpanan lokal peramban (LocalStorage). Kami tidak mengirimkan jawaban Anda ke server luar, tidak menyimpannya dalam database, dan tidak membagikannya kepada pihak ketiga mana pun.
                  </p>

                  <h3 className="text-lg font-bold text-gray-900 dark:text-white pt-2">2. Keamanan Privasi Pengguna</h3>
                  <p>
                    Anda tidak diharuskan melakukan pendaftaran, pengisian nama, login akun, ataupun mengisi alamat email untuk menggunakan layanan tes kepribadian di situs kami. Layanan ini 100% anonim dan gratis.
                  </p>

                  <h3 className="text-lg font-bold text-gray-900 dark:text-white pt-2">3. Statistik Pengunjung</h3>
                  <p>
                    Kami menggunakan metrik standar untuk memantau performa situs secara anonim. Data ini berupa kunjungan halaman umum, tipe browser, dan resolusi layar yang digunakan demi menyempurnakan kegunaan visual aplikasi kami di perangkat mobile maupun desktop.
                  </p>

                  <h3 className="text-lg font-bold text-gray-900 dark:text-white pt-2">4. Kontak Hubungan</h3>
                  <p>
                    Jika Anda memiliki pertanyaan mengenai kebijakan privasi ini atau ingin melakukan kerja sama operasional, silakan menghubungi tim kami di <a href="mailto:support@discindonesia.id" className="text-[#fe4c6f] font-semibold hover:underline">support@discindonesia.id</a>.
                  </p>
                </div>

                <div className="pt-6 border-t border-gray-100 dark:border-gray-900 text-center">
                  <button
                    onClick={() => {
                      setView("LANDING");
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    className="px-6 py-2.5 rounded-xl bg-gray-900 hover:bg-gray-850 dark:bg-gray-800 dark:hover:bg-gray-700 text-white font-bold text-sm transition-colors cursor-pointer"
                  >
                    Kembali Ke Beranda
                  </button>
                </div>
              </div>
            </motion.div>
          )}

          {/* DISCLAIMER VIEW */}
          {view === "DISCLAIMER" && (
            <motion.div
              key="disclaimer"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="max-w-3xl mx-auto px-4 py-12"
            >
              <div className="bg-white dark:bg-gray-950 p-6 sm:p-10 rounded-3xl border border-gray-150/40 dark:border-gray-800 shadow-sm space-y-6">
                <div className="flex items-center space-x-3 text-[#fe4c6f]">
                  <FileText className="h-8 w-8" />
                  <h2 className="text-2xl sm:text-3xl font-black text-gray-900 dark:text-white">Disclaimer Layanan</h2>
                </div>
                <p className="text-xs text-gray-500 font-medium">Terakhir Diperbarui: 12 Juli 2026</p>
                
                <div className="text-sm text-gray-600 dark:text-gray-350 space-y-4 leading-relaxed">
                  <p>
                    Dengan menggunakan atau mengakses platform web <strong>DISC Indonesia</strong>, Anda dianggap menyetujui seluruh ketentuan disclaimer di bawah ini:
                  </p>
                  
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white pt-2">1. Bersifat Edukasi & Pengayaan</h3>
                  <p>
                    Layanan asesmen kepribadian DISC di situs ini disajikan semata-mata untuk tujuan edukasi diri, pengayaan wawasan pribadi, dan referensi pengembangan diri secara mandiri. Laporan hasil yang dikeluarkan tidak dapat dijadikan rujukan medis mutlak.
                  </p>

                  <h3 className="text-lg font-bold text-gray-900 dark:text-white pt-2">2. Bukan Konsultasi Psikologis Klinis</h3>
                  <p>
                    Hasil tes ini tidak menggantikan fungsi dari konsultasi psikologi formal, konseling klinis, psikoterapi, diagnosis kesehatan mental, maupun evaluasi ahli perilaku berlisensi resmi. Jika Anda memerlukan bimbingan karier mendalam atau sedang mengalami tekanan psikologis berat, disarankan berkonsultasi langsung ke Psikolog klinis terdekat.
                  </p>

                  <h3 className="text-lg font-bold text-gray-900 dark:text-white pt-2">3. Batasan Tanggung Jawab</h3>
                  <p>
                    Tim pengembang DISC Indonesia tidak bertanggung jawab atas tindakan, keputusan karier, pergeseran dinamika tim kerja, ataupun kerugian lainnya yang Anda putuskan setelah membaca laporan hasil analisis dari aplikasi kami. Penafsiran dan pemanfaatan hasil tes sepenuhnya menjadi tanggung jawab sadar masing-masing individu pengguna.
                  </p>
                </div>

                <div className="pt-6 border-t border-gray-100 dark:border-gray-900 text-center">
                  <button
                    onClick={() => {
                      setView("LANDING");
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    className="px-6 py-2.5 rounded-xl bg-gray-900 hover:bg-gray-850 dark:bg-gray-800 dark:hover:bg-gray-700 text-white font-bold text-sm transition-colors cursor-pointer"
                  >
                    Kembali Ke Beranda
                  </button>
                </div>
              </div>
            </motion.div>
          )}

        </AnimatePresence>
      </main>

      {/* Footer Block */}
      <Footer />

    </div>
  );
}

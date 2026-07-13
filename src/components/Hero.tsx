import { Sparkles, Play, CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";

interface HeroProps {
  onStartTest: () => void;
}

export default function Hero({ onStartTest }: HeroProps) {
  const sectors = [
    { name: "Dominance", char: "D", desc: "Tegas, Berani, Hasil", color: "bg-rose-500 text-white border-rose-600 dark:border-rose-400" },
    { name: "Influence", char: "I", desc: "Optimis, Persuasif, Sosial", color: "bg-amber-400 text-slate-900 border-amber-500 dark:border-amber-300" },
    { name: "Steadiness", char: "S", desc: "Sabar, Setia, Harmonis", color: "bg-emerald-500 text-white border-emerald-600 dark:border-emerald-400" },
    { name: "Compliance", char: "C", desc: "Analitis, Teliti, Akurat", color: "bg-blue-500 text-white border-blue-600 dark:border-blue-400" },
  ];

  return (
    <section className="relative overflow-hidden pt-8 pb-16 sm:pt-12 sm:pb-20 lg:pt-16 lg:pb-28 bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 transition-colors duration-300">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-1/4 left-1/10 w-72 h-72 bg-rose-100 dark:bg-rose-950/20 rounded-full blur-3xl opacity-60"></div>
      <div className="absolute top-1/3 right-1/10 w-80 h-80 bg-blue-100 dark:bg-blue-950/20 rounded-full blur-3xl opacity-60"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-rose-50 dark:bg-rose-950/40 border border-rose-100 dark:border-rose-900/50 text-[#fe4c6f] text-xs font-semibold tracking-wide mb-6"
            >
              <Sparkles className="h-3.5 w-3.5" />
              <span>100% GRATIS • TANPA REGISTRASI • HASIL INSTAN</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white leading-tight"
            >
              Kenali Kepribadianmu <br className="hidden sm:inline" />
              dalam Hitungan <span className="text-[#fe4c6f] bg-clip-text">Menit.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              Pahami potensi diri, gaya komunikasi, kepemimpinan, dan temukan rekomendasi karier yang paling sesuai untuk masa depanmu menggunakan alat tes DISC terpercaya.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-8 flex flex-col sm:flex-row justify-center lg:justify-start gap-4 sm:items-center"
            >
              <button
                onClick={onStartTest}
                className="group flex items-center justify-center space-x-2 px-8 py-4 rounded-2xl bg-[#fe4c6f] hover:bg-[#e03d5e] text-white font-bold text-lg shadow-xl shadow-rose-200 dark:shadow-none hover:shadow-2xl hover:shadow-rose-300 transition-all cursor-pointer transform hover:-translate-y-0.5"
              >
                <span>Mulai Tes DISC</span>
                <Play className="h-4 w-4 fill-white group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#tentang"
                className="flex items-center justify-center px-6 py-4 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200 font-bold hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              >
                Pelajari Dulu
              </a>
            </motion.div>

            {/* Micro Benefits list */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-8 grid grid-cols-2 gap-y-3 gap-x-4 max-w-md mx-auto lg:mx-0 text-left text-sm text-gray-500 dark:text-gray-400"
            >
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                <span>24 Pertanyaan Ringkas</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                <span>Hasil Analisis Instan</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                <span>Rekomendasi Karier Riil</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                <span>Tanpa Akun / Login</span>
              </div>
            </motion.div>
          </div>

          {/* Right Visual Wheel Column */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative w-80 h-80 sm:w-96 sm:h-96"
            >
              {/* Spinning Ring */}
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-rose-300 dark:border-rose-800 animate-spin-slow opacity-60"></div>
              
              {/* Main DISC Quadrant Ring (Clover-shaped layout) */}
              <div className="absolute inset-4 grid grid-cols-2 gap-3 sm:gap-4 transform rotate-45">
                {sectors.map((sec, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.06, zIndex: 10 }}
                    className={`rounded-[2rem] sm:rounded-[2.5rem] p-3 flex items-center justify-center border-2 shadow-lg dark:shadow-none select-none cursor-default transition-all ${sec.color}`}
                  >
                    <div className="transform -rotate-45 flex flex-col items-center justify-center text-center h-full w-full p-1">
                      <span className="text-3xl sm:text-4xl font-black tracking-tight leading-none mb-1">
                        {sec.char}
                      </span>
                      <h3 className="font-extrabold text-[12px] sm:text-[14px] tracking-tight leading-tight uppercase">
                        {sec.name}
                      </h3>
                      <p className="text-[10px] sm:text-[11px] font-semibold opacity-95 leading-normal mt-1.5 max-w-[100px] sm:max-w-[125px]">
                        {sec.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Center Core Badge */}
              <div className="absolute inset-[36%] rounded-full bg-white dark:bg-gray-950 shadow-xl border border-gray-100 dark:border-gray-800 flex items-center justify-center p-1 z-20">
                <div className="w-full h-full rounded-full bg-rose-50 dark:bg-rose-950/50 flex flex-col items-center justify-center text-center">
                  <span className="text-xs font-bold text-[#fe4c6f]">TES</span>
                  <span className="text-base font-black text-gray-900 dark:text-white leading-tight">DISC</span>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}

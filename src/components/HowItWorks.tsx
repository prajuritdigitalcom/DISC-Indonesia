import { ClipboardEdit, Calculator, Landmark } from "lucide-react";
import { motion } from "motion/react";

export default function HowItWorks() {
  const steps = [
    {
      step: "01",
      title: "Jawab Pertanyaan",
      desc: "Isi 24 soal dengan memilih satu perilaku yang Paling Sesuai dan satu perilaku yang Kurang Sesuai dengan Anda.",
      icon: ClipboardEdit,
      color: "border-rose-100 bg-rose-50 text-[#fe4c6f] dark:border-rose-900/40 dark:bg-rose-950/20",
    },
    {
      step: "02",
      title: "Penghitungan Otomatis",
      desc: "Sistem scoring instan kami akan memproses jawaban Anda langsung di browser tanpa perantara AI atau database.",
      icon: Calculator,
      color: "border-blue-100 bg-blue-50 text-blue-500 dark:border-blue-900/40 dark:bg-blue-950/20",
    },
    {
      step: "03",
      title: "Hasil & Rekomendasi",
      desc: "Dapatkan analisis tipe kepribadian Anda, grafik distribusi DISC, gaya komunikasi, hingga saran karier secara real-time.",
      icon: Landmark,
      color: "border-emerald-100 bg-emerald-50 text-emerald-500 dark:border-emerald-900/40 dark:bg-emerald-950/20",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-gray-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            Bagaimana <span className="text-[#fe4c6f]">Cara Kerjanya?</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Sederhana, transparan, dan super cepat. Hanya dalam tiga langkah mudah.
          </p>
        </div>

        {/* Steps Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {/* Connector line for desktop */}
          <div className="hidden md:block absolute top-1/2 left-1/6 right-1/6 h-0.5 bg-gray-100 dark:bg-gray-800 -translate-y-12 -z-10"></div>

          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="text-center group"
              >
                <div className={`w-20 h-20 rounded-2xl border flex items-center justify-center mx-auto relative ${item.color} group-hover:scale-105 transition-transform`}>
                  <Icon className="h-8 w-8" />
                  <span className="absolute -top-3 -right-3 px-2 py-0.5 rounded-full text-xs font-bold bg-gray-900 dark:bg-white text-white dark:text-gray-900 shadow">
                    {item.step}
                  </span>
                </div>
                <h3 className="mt-8 text-xl font-bold text-gray-900 dark:text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm text-gray-600 dark:text-gray-400 leading-relaxed max-w-xs mx-auto">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

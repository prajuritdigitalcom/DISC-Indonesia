import { Wallet, Zap, Shield, Smartphone, RefreshCw, Eye } from "lucide-react";
import { motion } from "motion/react";

export default function WhyUs() {
  const benefits = [
    {
      title: "100% Gratis",
      desc: "Seluruh instrumen tes dan hasil analisis kepribadian lengkap dapat Anda nikmati tanpa membayar sepeser pun.",
      icon: Wallet,
      color: "text-rose-500 bg-rose-50 dark:bg-rose-950/30",
    },
    {
      title: "Sangat Cepat",
      desc: "Hanya membutuhkan waktu 5 hingga 10 menit untuk menyelesaikan tes dan mendapatkan gambaran detail diri Anda.",
      icon: Zap,
      color: "text-amber-500 bg-amber-50 dark:bg-amber-950/30",
    },
    {
      title: "Tanpa Registrasi / Login",
      desc: "Kami menghargai privasi Anda. Tidak perlu mengisi email, password, ataupun membuat akun untuk memulai tes.",
      icon: Shield,
      color: "text-blue-500 bg-blue-50 dark:bg-blue-950/30",
    },
    {
      title: "Mobile Friendly",
      desc: "Aplikasi didesain khusus agar nyaman, responsif, dan lancar dikerjakan langsung dari ponsel pintar Anda.",
      icon: Smartphone,
      color: "text-[#fe4c6f] bg-rose-50 dark:bg-rose-950/30",
    },
    {
      title: "Hasil Instan & Interaktif",
      desc: "Begitu pertanyaan terakhir dijawab, laporan kepribadian interaktif Anda langsung siap disajikan secara real-time.",
      icon: RefreshCw,
      color: "text-emerald-500 bg-emerald-50 dark:bg-emerald-950/30",
    },
    {
      title: "Mudah Dipahami",
      desc: "Laporan hasil tes ditulis dalam bahasa Indonesia yang luwes, praktis, serta mudah diaplikasikan sehari-hari.",
      icon: Eye,
      color: "text-indigo-500 bg-indigo-50 dark:bg-indigo-950/30",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            Mengapa Memilih <span className="text-[#fe4c6f]">DISC Indonesia?</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Kami mengemas asesmen kepribadian standar psikotes profesional ke dalam pengalaman digital modern yang bebas hambatan.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, idx) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="bg-white dark:bg-gray-950 p-8 rounded-2xl border border-gray-100 dark:border-gray-850 hover:border-gray-200 dark:hover:border-gray-700 hover:shadow-xl dark:hover:shadow-rose-950/5 transition-all group"
              >
                <div className={`p-3 rounded-xl inline-flex ${benefit.color} group-hover:scale-110 transition-transform`}>
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-xl font-bold text-gray-900 dark:text-white">
                  {benefit.title}
                </h3>
                <p className="mt-3 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  {benefit.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

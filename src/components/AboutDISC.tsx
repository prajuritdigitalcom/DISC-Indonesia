import { Target, Users, Heart, ShieldAlert } from "lucide-react";
import { motion } from "motion/react";

export default function AboutDISC() {
  const cards = [
    {
      char: "D",
      title: "Dominance",
      idn: "Dominasi (Kekuasaan)",
      desc: "Menitikberatkan pada pencapaian hasil, tantangan baru, ketegasan, keputusan cepat, serta kemandirian penuh.",
      color: "bg-rose-50 dark:bg-rose-950/20 border-rose-100 dark:border-rose-900/40 text-rose-600 dark:text-rose-400",
      icon: Target,
    },
    {
      char: "I",
      title: "Influence",
      idn: "Pengaruh (Interaksi)",
      desc: "Menitikberatkan pada hubungan sosial, kemampuan persuasi verbal, komunikasi antarpribadi, serta penyebaran optimisme.",
      color: "bg-amber-50 dark:bg-amber-950/20 border-amber-100 dark:border-amber-900/40 text-amber-600 dark:text-amber-400",
      icon: Users,
    },
    {
      char: "S",
      title: "Steadiness",
      idn: "Kestabilan (Ketulusan)",
      desc: "Menitikberatkan pada kerja sama tim yang harmonis, loyalitas, kesabaran, kestabilan emosional, serta ketulusan merawat hubungan.",
      color: "bg-emerald-50 dark:bg-emerald-950/20 border-emerald-100 dark:border-emerald-900/40 text-emerald-600 dark:text-emerald-400",
      icon: Heart,
    },
    {
      char: "C",
      title: "Compliance",
      idn: "Kepatuhan (Ketelitian)",
      desc: "Menitikberatkan pada kualitas kerja, kebenaran data ilmiah, kepatuhan prosedur (SOP), akurasi tinggi, serta logika mendalam.",
      color: "bg-blue-50 dark:bg-blue-950/20 border-blue-100 dark:border-blue-900/40 text-blue-600 dark:text-blue-400",
      icon: ShieldAlert,
    },
  ];

  return (
    <section id="tentang" className="py-16 sm:py-24 bg-white dark:bg-gray-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            Mengenal Metode <span className="text-[#fe4c6f]">DISC</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            Metode kepribadian DISC memetakan karakter perilaku manusia ke dalam empat dimensi utama. Memahami dimensi ini membantu kita mengenali kekuatan alami diri serta cara berinteraksi yang paling efektif dengan sesama.
          </p>
        </div>

        {/* Dimension Cards Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`p-6 rounded-2xl border flex flex-col justify-between ${card.color} transition-all hover:shadow-xl hover:shadow-gray-100/10`}
              >
                <div>
                  <div className="flex justify-between items-start">
                    <span className="text-4xl font-black tracking-tight">{card.char}</span>
                    <div className="p-2 rounded-xl bg-white/80 dark:bg-gray-900/60 shadow-sm">
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>
                  <div className="mt-6">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white leading-tight">
                      {card.title}
                    </h3>
                    <p className="text-xs font-semibold uppercase tracking-wide opacity-80 mt-1">
                      {card.idn}
                    </p>
                    <p className="mt-4 text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                      {card.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Scientific Note Banner */}
        <div className="mt-16 p-8 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 text-center max-w-4xl mx-auto">
          <h4 className="text-base font-semibold text-gray-900 dark:text-white">
            Mengapa DISC Sangat Relevan Hingga Sekarang?
          </h4>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
            Asesmen DISC mengukur <strong className="font-bold text-gray-900 dark:text-white">gaya perilaku sosial</strong> seseorang, bukan tingkat kecerdasan intelijen (IQ). Hasilnya sangat aplikatif untuk merekrut karyawan baru, membentuk kerja sama tim yang solid, meminimalkan kesalahpahaman komunikasi, serta mengarahkan pengembangan kompetensi kepemimpinan.
          </p>
        </div>

      </div>
    </section>
  );
}

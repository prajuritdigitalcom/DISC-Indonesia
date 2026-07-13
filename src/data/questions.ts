export interface DISCOption {
  id: string;
  text: string;
  dimension: 'D' | 'I' | 'S' | 'C';
}

export interface DISCQuestion {
  id: number;
  category: string;
  options: DISCOption[];
}

export const questions: DISCQuestion[] = [
  {
    id: 1,
    category: "Gaya Umum",
    options: [
      { id: "1a", text: "Gampang bergaul, ramah, dan menyenangkan", dimension: "I" },
      { id: "1b", text: "Memiliki kemauan kuat, tegas, dan berani mengambil keputusan", dimension: "D" },
      { id: "1c", text: "Suka mengalah, tenang, santun, dan menghindari konflik", dimension: "S" },
      { id: "1d", text: "Teliti, akurat, sistematis, dan patuh pada aturan", dimension: "C" }
    ]
  },
  {
    id: 2,
    category: "Komunikasi",
    options: [
      { id: "2a", text: "Suka meyakinkan orang lain dengan argumen yang persuasif", dimension: "I" },
      { id: "2b", text: "Mandiri, fokus langsung pada poin utama tanpa basa-basi", dimension: "D" },
      { id: "2c", text: "Sabar, mendengarkan orang lain dengan tulus dan empati", dimension: "S" },
      { id: "2d", text: "Penuh pertimbangan, berbicara berdasarkan data dan fakta", dimension: "C" }
    ]
  },
  {
    id: 3,
    category: "Menghadapi Masalah",
    options: [
      { id: "3a", text: "Berusaha mencairkan suasana dengan humor atau optimisme", dimension: "I" },
      { id: "3b", text: "Kompetitif, tertantang untuk langsung menyelesaikan masalah", dimension: "D" },
      { id: "3c", text: "Setia mendukung, suka membantu orang lain secara praktis", dimension: "S" },
      { id: "3d", text: "Logis, analitis, mendiagnosis akar masalah secara mendalam", dimension: "C" }
    ]
  },
  {
    id: 4,
    category: "Sikap Kerja",
    options: [
      { id: "4a", text: "Penuh energi, kreatif, suka mencoba hal-hal baru yang seru", dimension: "I" },
      { id: "4b", text: "Berorientasi pada hasil akhir, berani memimpin tindakan", dimension: "D" },
      { id: "4c", text: "Menyukai rutinitas teratur, konsisten, dan bekerja tenang", dimension: "S" },
      { id: "4d", text: "Sangat berhati-hati, detail, rapi, dan memeriksa ulang hasil kerja", dimension: "C" }
    ]
  },
  {
    id: 5,
    category: "Interaksi Sosial",
    options: [
      { id: "5a", text: "Suka bercerita, ekspresif, dan menjadi pusat perhatian", dimension: "I" },
      { id: "5b", text: "Suka menantang keadaan, mengarahkan, dan mengendalikan diskusi", dimension: "D" },
      { id: "5c", text: "Ramah, setia kawan, dan mudah bekerja sama dengan siapa saja", dimension: "S" },
      { id: "5d", text: "Formal, menjaga jarak yang sopan, dan bersikap objektif", dimension: "C" }
    ]
  },
  {
    id: 6,
    category: "Motivasi",
    options: [
      { id: "6a", text: "Mendapatkan pengakuan sosial, pujian, dan popularitas", dimension: "I" },
      { id: "6b", text: "Meraih prestasi, kekuasaan, kemenangan, dan otoritas", dimension: "D" },
      { id: "6c", text: "Mendapatkan keamanan hidup, stabilitas, dan perdamaian", dimension: "S" },
      { id: "6d", text: "Menjamin ketepatan, keahlian tinggi, dan standar kualitas", dimension: "C" }
    ]
  },
  {
    id: 7,
    category: "Pengambilan Keputusan",
    options: [
      { id: "7a", text: "Mengikuti intuisi, perasaan, dan dampak sosialnya", dimension: "I" },
      { id: "7b", text: "Cepat, tegas, dan berani mengambil risiko tinggi", dimension: "D" },
      { id: "7c", text: "Meminta pendapat orang lain dan mencari mufakat bersama", dimension: "S" },
      { id: "7d", text: "Lambat, hati-hati, berdasarkan analisis informasi tertulis", dimension: "C" }
    ]
  },
  {
    id: 8,
    category: "Sikap Terhadap Tekanan",
    options: [
      { id: "8a", text: "Menjadi cerewet, mencari pelampiasan sosial, atau cemas", dimension: "I" },
      { id: "8b", text: "Menjadi tidak sabar, agresif, menuntut, atau mendominasi", dimension: "D" },
      { id: "8c", text: "Menjadi keras kepala, memendam perasaan, atau pasrah", dimension: "S" },
      { id: "8d", text: "Menarik diri, terlalu kritis, atau mencari-cari kesalahan", dimension: "C" }
    ]
  },
  {
    id: 9,
    category: "Sikap Terhadap Aturan",
    options: [
      { id: "9a", text: "Menganggap aturan fleksibel dan bisa disesuaikan dengan situasi", dimension: "I" },
      { id: "9b", text: "Berani melanggar aturan jika menghambat pencapaian hasil", dimension: "D" },
      { id: "9c", text: "Mengikuti aturan demi menjaga keharmonisan kelompok", dimension: "S" },
      { id: "9d", text: "Sangat menjunjung tinggi aturan, prosedur, dan standar moral", dimension: "C" }
    ]
  },
  {
    id: 10,
    category: "Gaya Kepemimpinan",
    options: [
      { id: "10a", text: "Inspiratif, memotivasi tim dengan antusiasme tinggi", dimension: "I" },
      { id: "10b", text: "Instruktif, fokus pada target, menuntut kinerja maksimal", dimension: "D" },
      { id: "10c", text: "Partisipatif, membimbing, sabar, dan mengayomi anggota tim", dimension: "S" },
      { id: "10d", text: "Eksperto, fokus pada detail prosedur dan akurasi eksekusi", dimension: "C" }
    ]
  },
  {
    id: 11,
    category: "Fokus Perhatian",
    options: [
      { id: "11a", text: "Hubungan antarmanusia, jaringan pertemanan, dan tren terbaru", dimension: "I" },
      { id: "11b", text: "Tantangan baru, peluang sukses, dan keunggulan kompetitif", dimension: "D" },
      { id: "11c", text: "Kesejahteraan bersama, kenyamanan tim, dan loyalitas", dimension: "S" },
      { id: "11d", text: "Keakuratan data, proses pengerjaan, dan efisiensi sistem", dimension: "C" }
    ]
  },
  {
    id: 12,
    category: "Menghadapi Perubahan",
    options: [
      { id: "12a", text: "Menyambut gembira karena bosan dengan rutinitas", dimension: "I" },
      { id: "12b", text: "Melihatnya sebagai kesempatan bagus untuk memimpin arah baru", dimension: "D" },
      { id: "12c", text: "Cenderung ragu-ragu dan membutuhkan waktu untuk beradaptasi", dimension: "S" },
      { id: "12d", text: "Menganalisis risiko perubahan secara cermat sebelum bertindak", dimension: "C" }
    ]
  },
  {
    id: 13,
    category: "Gaya Negosiasi",
    options: [
      { id: "13a", text: "Menggunakan pesona diri, humor, dan pendekatan emosional", dimension: "I" },
      { id: "13b", text: "Menekan lawan negosiasi untuk menyetujui poin Anda", dimension: "D" },
      { id: "13c", text: "Mencari solusi win-win yang menyenangkan semua pihak", dimension: "S" },
      { id: "13d", text: "Menggunakan kontrak tertulis, detail teknis, dan presisi hukum", dimension: "C" }
    ]
  },
  {
    id: 14,
    category: "Pengelolaan Konflik",
    options: [
      { id: "14a", text: "Berusaha mencairkan konflik dengan humor atau mengalihkan topik", dimension: "I" },
      { id: "14b", text: "Menghadapi secara langsung dan berani berdebat demi kebenaran", dimension: "D" },
      { id: "14c", text: "Lebih baik mengalah atau diam demi menjaga perdamaian", dimension: "S" },
      { id: "14d", text: "Menyelesaikan secara dingin berdasarkan aturan atau bukti tertulis", dimension: "C" }
    ]
  },
  {
    id: 15,
    category: "Sikap Terhadap Pujian",
    options: [
      { id: "15a", text: "Sangat senang jika dipuji secara terbuka di depan umum", dimension: "I" },
      { id: "15b", text: "Menyukai pujian yang mengapresiasi kekuatan atau hasil kerjanya", dimension: "D" },
      { id: "15c", text: "Lebih menyukai apresiasi tulus secara personal dan tenang", dimension: "S" },
      { id: "15d", text: "Agak skeptis dengan pujian, lebih suka evaluasi kinerja objektif", dimension: "C" }
    ]
  },
  {
    id: 16,
    category: "Gaya Belajar",
    options: [
      { id: "16a", text: "Melalui diskusi kelompok, bermain peran, atau aktivitas interaktif", dimension: "I" },
      { id: "16b", text: "Melalui tantangan langsung, praktik langsung, dan eksperimen", dimension: "D" },
      { id: "16c", text: "Melalui contoh konkret yang bertahap, tenang, dan bimbingan", dimension: "S" },
      { id: "16d", text: "Melalui membaca literatur mendalam, riset data, dan teori terstruktur", dimension: "C" }
    ]
  },
  {
    id: 17,
    category: "Pengorganisasian",
    options: [
      { id: "17a", text: "Kurang menyukai detail administrasi, cenderung spontan", dimension: "I" },
      { id: "17b", text: "Fokus pada delegasi tugas agar pekerjaan cepat beres", dimension: "D" },
      { id: "17c", text: "Menyusun tugas berdasarkan prioritas kenyamanan bersama", dimension: "S" },
      { id: "17d", text: "Sangat rapi, terstruktur, membuat daftar tugas mendetail", dimension: "C" }
    ]
  },
  {
    id: 18,
    category: "Kelemahan Potensial",
    options: [
      { id: "18a", text: "Kadang kurang disiplin, impulsif, atau kurang fokus pada detail", dimension: "I" },
      { id: "18b", text: "Bisa terlihat dominan, tidak sabar, atau kurang berempati", dimension: "D" },
      { id: "18c", text: "Terlalu sungkan menolak permintaan orang lain (sulit berkata 'tidak')", dimension: "S" },
      { id: "18d", text: "Terlalu perfeksionis, kaku, lambat karena terlalu menganalisis", dimension: "C" }
    ]
  },
  {
    id: 19,
    category: "Sikap Terhadap Kritik",
    options: [
      { id: "19a", text: "Merasa sedih secara emosional atau merasa ditolak secara sosial", dimension: "I" },
      { id: "19b", text: "Membela diri secara agresif jika merasa kritik tersebut salah", dimension: "D" },
      { id: "19c", text: "Menerima dengan tenang meski sebenarnya merasa sangat kecewa", dimension: "S" },
      { id: "19d", text: "Meminta penjelasan rasional, data pendukung, atau bukti objektif", dimension: "C" }
    ]
  },
  {
    id: 20,
    category: "Sikap Sosial",
    options: [
      { id: "20a", text: "Antusias, hangat, ceria, dan pandai menghidupkan suasana", dimension: "I" },
      { id: "20b", text: "Percaya diri tinggi, mandiri, dan berwibawa", dimension: "D" },
      { id: "20c", text: "Penuh perhatian, setia kawan, andal, dan suka menolong", dimension: "S" },
      { id: "20d", text: "Sopan, formal, tenang, dan menjaga etika dengan baik", dimension: "C" }
    ]
  },
  {
    id: 21,
    category: "Lingkungan Kerja",
    options: [
      { id: "21a", text: "Penuh keceriaan, kolaboratif, tanpa tekanan formalitas kaku", dimension: "I" },
      { id: "21b", text: "Menantang, dinamis, memberi otonomi untuk mengambil keputusan", dimension: "D" },
      { id: "21c", text: "Harmonis, stabil, minim konflik, penuh kerja sama kekeluargaan", dimension: "S" },
      { id: "21d", text: "Terstruktur, tenang, memiliki instruksi jelas dan SOP profesional", dimension: "C" }
    ]
  },
  {
    id: 22,
    category: "Delegasi Tugas",
    options: [
      { id: "22a", text: "Mendelegasikan dengan pendekatan persuasif, santai, dan penuh harapan", dimension: "I" },
      { id: "22b", text: "Mengarahkan langsung target akhir dan menyerahkan caranya ke tim", dimension: "D" },
      { id: "22c", text: "Membantu melatih secara sabar dan membimbing agar tim tidak stres", dimension: "S" },
      { id: "22d", text: "Memberikan instruksi tertulis yang sangat detail, spesifik, lengkap dengan SOP", dimension: "C" }
    ]
  },
  {
    id: 23,
    category: "Manajemen Stres",
    options: [
      { id: "23a", text: "Mengobrol dengan teman-teman, bepergian, atau mencari hiburan", dimension: "I" },
      { id: "23b", text: "Berolahraga keras, bekerja lebih keras, atau menyendiri sejenak", dimension: "D" },
      { id: "23c", text: "Melakukan hobi yang menenangkan di rumah bersama keluarga", dimension: "S" },
      { id: "23d", text: "Membaca buku, menyusun ulang rencana, atau menganalisis masalah", dimension: "C" }
    ]
  },
  {
    id: 24,
    category: "Evaluasi Diri",
    options: [
      { id: "24a", text: "Menilai diri dari seberapa baik hubungan dan pengaruh sosial Anda", dimension: "I" },
      { id: "24b", text: "Menilai diri dari seberapa banyak target atau prestasi yang dicapai", dimension: "D" },
      { id: "24c", text: "Menilai diri dari loyalitas, kedamaian, dan kontribusi harmonis Anda", dimension: "S" },
      { id: "24d", text: "Menilai diri dari standar kesempurnaan, kualitas, dan ketepatan kerja", dimension: "C" }
    ]
  }
];

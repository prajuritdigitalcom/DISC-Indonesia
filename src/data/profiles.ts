export interface DISCProfile {
  code: string;
  title: string;
  tagline: string;
  description: string;
  strengths: string[];
  weaknesses: string[];
  communication: {
    speak: string;
    listen: string;
    collaboration: string;
  };
  leadership: string;
  idealEnvironment: string[];
  careers: string[];
  developmentTips: string[];
  conclusion: string;
}

export const profiles: Record<string, DISCProfile> = {
  "D": {
    code: "D",
    title: "Dominance (D) - Sang Penggerak Tegas",
    tagline: "Berorientasi pada hasil, berani mengambil keputusan, dan menyukai tantangan.",
    description: "Anda adalah tipe pribadi yang mandiri, tegas, dan sangat termotivasi oleh pencapaian target. Anda tidak takut menghadapi konflik atau mengambil risiko demi mencapai kesuksesan. Karakter Anda yang kuat membuat Anda sering kali diandalkan untuk memimpin dalam situasi krisis. Anda menyukai efisiensi dan langsung fokus pada pokok masalah (to-the-point).",
    strengths: [
      "Mengambil keputusan dengan cepat dan berani dalam situasi sulit.",
      "Sangat berfokus pada hasil akhir (result-oriented) dan pencapaian target.",
      "Memiliki jiwa kepemimpinan alami dan berani mengendalikan situasi.",
      "Mandiri dan tidak bergantung pada orang lain untuk memulai tindakan.",
      "Tertantang oleh masalah rumit dan rintangan baru."
    ],
    weaknesses: [
      "Cenderung kurang sabar terhadap proses yang lambat atau detail rumit.",
      "Bisa terlihat terlalu menuntut, agresif, atau kurang empati terhadap orang lain.",
      "Sulit untuk mendelegasikan tugas secara santai karena merasa bisa menyelesaikannya sendiri lebih cepat.",
      "Sering mengabaikan perasaan atau masukan sosial demi keefektifan target.",
      "Mudah bosan dengan rutinitas harian yang monoton."
    ],
    communication: {
      speak: "Menyampaikan ide secara langsung (to-the-point), tegas, lugas, dan mengutamakan fakta penting tanpa basa-basi.",
      listen: "Mendengarkan dengan fokus mencari solusi praktis; kadang kurang sabar mendengar cerita yang terlalu panjang lebar.",
      collaboration: "Bekerja sama dengan menetapkan target tinggi, mendelegasikan tugas secara cepat, dan menghargai efisiensi waktu kerja."
    },
    leadership: "Pemimpin yang direktif, fokus pada hasil akhir, berani mengambil risiko besar, dan menuntut standar kinerja tinggi dari anggota tim.",
    idealEnvironment: [
      "Lingkungan kerja yang dinamis, cepat, penuh tantangan, dan kompetitif.",
      "Memiliki otonomi tinggi untuk mengontrol keputusan dan tindakan sendiri.",
      "Bebas dari aturan administratif yang terlalu kaku dan menghambat kemajuan.",
      "Pekerjaan yang mengapresiasi pencapaian performa secara langsung dan objektif."
    ],
    careers: [
      "Direktur Eksekutif / CEO",
      "Manajer Proyek (Project Manager)",
      "Wirausahawan (Entrepreneur)",
      "Konsultan Bisnis / Strategis",
      "Spesialis Manajemen Krisis",
      "Pengacara / Advokat"
    ],
    developmentTips: [
      "Berlatihlah untuk mendengarkan masukan dan sudut pandang orang lain secara aktif sebelum mengambil keputusan.",
      "Belajarlah menunjukkan empati dan menghargai kontribusi emosional anggota tim.",
      "Cobalah menurunkan tempo ketika bekerja dengan rekan tim yang membutuhkan waktu adaptasi lebih lama.",
      "Belajarlah mendelegasikan tanggung jawab secara penuh beserta wewenangnya, bukan hanya tugasnya."
    ],
    conclusion: "Tipe Dominance adalah kekuatan penggerak yang luar biasa dalam organisasi. Dengan melatih kesabaran dan empati, Anda akan menjadi pemimpin yang tidak hanya ditakuti karena ketegasannya, tetapi juga dicintai karena kebijaksanaannya."
  },
  "I": {
    code: "I",
    title: "Influence (I) - Sang Inspirator Antusias",
    tagline: "Persuasif, penuh energi, optimis, dan ahli dalam membangun hubungan sosial.",
    description: "Anda adalah pribadi yang hangat, ramah, dan sangat komunikatif. Kekuatan utama Anda terletak pada kemampuan menjalin hubungan interpersonal, meyakinkan orang lain, dan menyebarkan energi positif. Anda menyukai popularitas, kolaborasi kelompok, dan lingkungan kerja yang kreatif serta menyenangkan. Anda memimpin dengan cara menginspirasi dan memotivasi.",
    strengths: [
      "Sangat mahir membangun hubungan sosial baru dan memperluas jaringan (networking).",
      "Memiliki kemampuan persuasif dan negosiasi yang luar biasa dengan pendekatan emosional.",
      "Selalu optimis, kreatif, penuh energi, dan pandai menghidupkan suasana kelompok.",
      "Mampu menginspirasi, memotivasi, dan menyatukan tim untuk bekerja bersama.",
      "Sangat adaptif dalam berbagai situasi sosial yang berbeda."
    ],
    weaknesses: [
      "Cenderung kurang menyukai detail administratif dan analisis data yang mendalam.",
      "Sulit untuk tetap fokus pada satu tugas jangka panjang yang membutuhkan konsistensi monoton.",
      "Kadang membuat keputusan secara impulsif berdasarkan perasaan atau intuisi belaka.",
      "Sangat sensitif terhadap penolakan sosial atau kritik yang ditujukan pada pribadinya.",
      "Bisa terlalu banyak berjanji demi menyenangkan orang lain, namun kesulitan menepatinya."
    ],
    communication: {
      speak: "Ekspresif, penuh semangat, menggunakan bahasa tubuh yang ramah, dan sering menyisipkan humor untuk mencairkan suasana.",
      listen: "Mendengarkan dengan antusias dan empati, namun kadang terdistraksi untuk segera merespons dengan cerita pribadi.",
      collaboration: "Mengutamakan curah pendapat (brainstorming) yang seru, diskusi kelompok yang akrab, dan menghindari suasana formal yang kaku."
    },
    leadership: "Pemimpin yang demokratis, inspiratif, memimpin melalui pengaruh emosional, membangun antusiasme, dan merayakan keberhasilan bersama tim.",
    idealEnvironment: [
      "Lingkungan kerja yang kolaboratif, kasual, penuh interaksi sosial, dan kreatif.",
      "Bebas dari tugas administrasi yang terlalu detail dan monoton.",
      "Adanya ruang untuk mengekspresikan ide, presentasi, dan bertemu klien baru.",
      "Budaya kerja yang mengutamakan penghargaan publik dan apresiasi sosial."
    ],
    careers: [
      "Spesialis Hubungan Masyarakat (PR)",
      "Manajer Pemasaran / Sales",
      "Penyiar / Konten Kreator / Influencer",
      "Pendidik / Pembicara Publik (Public Speaker)",
      "Event Organizer (EO)",
      "Recruiter / HRD"
    ],
    developmentTips: [
      "Berusahalah untuk membuat catatan tertulis atau rencana kerja detail sebelum mengeksekusi ide besar Anda.",
      "Latihlah pengelolaan waktu (time management) agar tugas-tugas administratif penting tidak terabaikan.",
      "Belajarlah menerima kritik secara objektif sebagai sarana perbaikan profesional, bukan serangan pribadi.",
      "Beranilah berkata 'tidak' jika kapasitas kerja Anda sudah penuh agar tidak terjadi kewalahan komitmen."
    ],
    conclusion: "Tipe Influence adalah nyawa dari kebersamaan dan inovasi tim. Dengan melatih kedisiplinan terhadap detail dan konsistensi, pesona alami Anda akan membawa dampak yang jauh lebih terukur dan berkelanjutan."
  },
  "S": {
    code: "S",
    title: "Steadiness (S) - Sang Pendukung Harmonis",
    tagline: "Sabar, andal, konsisten, setia, dan pembawa kedamaian dalam tim.",
    description: "Anda adalah pribadi yang tenang, sabar, dan sangat setia kawan. Anda adalah pendengar yang luar biasa dan selalu mengutamakan keharmonisan kelompok di atas kepentingan pribadi. Dalam bekerja, Anda sangat konsisten, menyukai rutinitas teratur, dan dapat diandalkan untuk menyelesaikan tugas hingga tuntas secara damai. Kehadiran Anda membawa stabilitas penting bagi tim.",
    strengths: [
      "Sangat andal, konsisten, dan berdedikasi tinggi menyelesaikan tugas yang didelegasikan.",
      "Memiliki empati luar biasa, sabar, dan menjadi pendengar yang sangat dipercaya rekan tim.",
      "Ahli dalam menjaga perdamaian, menyelesaikan konflik secara halus, dan menciptakan harmoni.",
      "Suka bekerja sama dalam tim (team player) yang saling mendukung kekeluargaan.",
      "Tenang dan berkepala dingin saat menghadapi situasi panik di sekitarnya."
    ],
    weaknesses: [
      "Sangat kesulitan untuk berkata 'tidak' pada permintaan orang lain sehingga sering terbebani.",
      "Ragu-ragu atau lambat dalam menghadapi perubahan mendadak di luar rencana.",
      "Cenderung memendam kekecewaan atau kemarahan demi menghindari konflik, yang bisa berujung stres.",
      "Kurang berani mengambil inisiatif mandiri atau menonjolkan prestasi pribadi.",
      "Sulit mengambil tindakan tegas atau menegur orang lain yang berbuat salah."
    ],
    communication: {
      speak: "Berbicara dengan nada suara yang tenang, ramah, sopan, sistematis, dan mengayomi.",
      listen: "Mendengarkan secara penuh, tulus, tanpa memotong pembicaraan, dan sangat memahami perasaan pembicara.",
      collaboration: "Bekerja sama dalam suasana kekeluargaan, saling membantu secara praktis, dan menjamin kenyamanan emosional semua anggota."
    },
    leadership: "Pemimpin yang suportif, mengutamakan kenyamanan tim (servant leadership), membimbing secara sabar, dan mengambil keputusan berbasis konsensus.",
    idealEnvironment: [
      "Lingkungan kerja yang stabil, harmonis, kekeluargaan, dan minim politik kantor.",
      "Memiliki instruksi kerja yang jelas, terstruktur, dan tidak berubah-ubah secara mendadak.",
      "Apresiasi tulus secara personal atas loyalitas dan dedikasi kerja jangka panjang.",
      "Bekerja dalam tim kecil yang solid dan saling mengenal dekat satu sama lain."
    ],
    careers: [
      "Spesialis Layanan Pelanggan (Customer Service)",
      "Konselor / Psikolog / Terapis",
      "Staf Administrasi / Keuangan",
      "Pendidik / Guru Anak-Anak / Dosen",
      "Spesialis Sumber Daya Manusia (HR Specialist)",
      "Manajer Operasional / Layanan Sosial"
    ],
    developmentTips: [
      "Belajarlah untuk bersikap asertif, berani menyuarakan pendapat pribadi, dan berkata 'tidak' demi kesehatan mental Anda.",
      "Latihlah diri Anda untuk lebih fleksibel dalam menerima perubahan mendadak sebagai peluang tumbuh.",
      "Selesaikan konflik kecil secara terbuka sebelum menumpuk menjadi kekecewaan yang besar di dalam diri.",
      "Jangan ragu untuk mempromosikan pencapaian kerja Anda agar mendapatkan apresiasi profesional yang layak."
    ],
    conclusion: "Tipe Steadiness adalah pilar stabilitas dan kehangatan yang menyatukan tim. Dengan melatih keberanian asertif dan adaptasi terhadap perubahan, kontribusi tulus Anda akan bersinar lebih cemerlang dan dihormati semua pihak."
  },
  "C": {
    code: "C",
    title: "Compliance (C) - Sang Analis Penyempurna",
    tagline: "Teliti, analitis, tertib, berhati-hati, dan menjunjung tinggi standar kualitas.",
    description: "Anda adalah pribadi yang sangat logis, objektif, dan perfeksionis. Anda sangat menghargai kebenaran data, akurasi, dan kepatuhan pada aturan yang berlaku. Sebelum mengambil keputusan, Anda akan menganalisis fakta secara mendalam untuk meminimalkan risiko kesalahan. Fokus Anda adalah pada standar kualitas tertinggi, ketertiban, dan efisiensi sistem.",
    strengths: [
      "Sangat teliti, cermat, akurat, dan memiliki standar kualitas kerja yang sangat tinggi.",
      "Kemampuan analisis data dan penyelesaian masalah logis yang sangat mendalam.",
      "Sistematis, teratur, dan sangat patuh pada prosedur kerja (SOP) dan etika profesional.",
      "Sangat mandiri dan mampu bekerja dengan konsentrasi tinggi tanpa pengawasan ketat.",
      "Berpikir objektif, adil, dan mengutamakan fakta konkret di atas perasaan subjektif."
    ],
    weaknesses: [
      "Cenderung terlalu perfeksionis sehingga kesulitan menyelesaikan tugas tepat waktu (analysis paralysis).",
      "Bisa terlihat kaku, terlalu formal, dingin, atau kurang ramah di mata rekan kerja.",
      "Sangat menghindari konflik atau kritik, namun bisa sangat kritis mengevaluasi kesalahan orang lain.",
      "Kesulitan beradaptasi dengan situasi ambigu atau instruksi kerja yang tidak jelas.",
      "Kurang menyukai keterlibatan emosional yang intens dalam hubungan kerja profesional."
    ],
    communication: {
      speak: "Berbicara secara formal, objektif, berdasarkan data tertulis, terstruktur, dan sangat memperhatikan keakuratan fakta.",
      listen: "Mendengarkan dengan kritis untuk menyaring kebenaran data; mencari detail pendukung untuk setiap pernyataan.",
      collaboration: "Bekerja sama secara profesional dengan batas-batas tanggung jawab tertulis yang jelas, tertib, dan bebas dari basa-basi emosional."
    },
    leadership: "Pemimpin yang berbasis keahlian teknis (expert leadership), fokus pada kualitas proses, kepatuhan sistem, dan akurasi implementasi strategi.",
    idealEnvironment: [
      "Lingkungan kerja yang tenang, profesional, teratur, rapi, dan minim kegaduhan sosial.",
      "Memiliki standar operasional prosedur (SOP) yang jelas dan instruksi kerja spesifik.",
      "Tersedianya data lengkap, riset memadai, dan waktu yang cukup untuk bekerja secara detail.",
      "Budaya kerja yang menghargai keahlian teknis, logika ilmiah, dan kualitas performa nyata."
    ],
    careers: [
      "Analis Data / Sistem (Data Analyst)",
      "Spesialis Kontrol Kualitas (Quality Control / QA)",
      "Akuntan / Auditor Keuangan",
      "Riset & Pengembangan (R&D) / Ilmuwan",
      "Arsitek / Insinyur Teknik (Engineer)",
      "Spesialis Kepatuhan Hukum / Regulasi"
    ],
    developmentTips: [
      "Belajarlah menerima bahwa kesempurnaan mutlak jarang terjadi; tetapkan batas 'cukup baik' agar pekerjaan selesai tepat waktu.",
      "Cobalah untuk bersikap lebih santai, hangat, dan meluangkan waktu sedikit untuk membangun hubungan sosial di kantor.",
      "Kurangi kecenderungan menganalisis berlebihan (overthinking) pada situasi-situasi sederhana.",
      "Belajarlah menyampaikan kritik konstruktif dengan cara yang lebih lembut dan ramah agar bisa diterima dengan baik oleh orang lain."
    ],
    conclusion: "Tipe Compliance adalah benteng akurasi dan kualitas yang memastikan kesuksesan jangka panjang. Dengan melatih fleksibilitas dan kehangatan interpersonal, kecerdasan analitis Anda akan menjadi panduan berharga bagi seluruh tim."
  },
  // HYBRIDS
  "DI": {
    code: "DI",
    title: "D-I (Pioneer / Penggerak Dinamis)",
    tagline: "Berani mengambil risiko, penuh visi, karismatik, dan berorientasi pada pencapaian tinggi.",
    description: "Kombinasi Dominance dan Influence melahirkan kepribadian 'Pioneer' yang sangat karismatik dan dinamis. Anda memiliki visi besar dan dorongan kuat untuk mewujudkannya, sekaligus memiliki pesona sosial untuk meyakinkan orang lain agar mengikuti visi Anda. Anda menyukai aksi cepat, tantangan besar, dan memimpin perubahan inovatif.",
    strengths: [
      "Sangat berani memulai langkah baru dan memimpin proyek yang inovatif.",
      "Kemampuan komunikasi publik dan persuasi karismatik yang menginspirasi.",
      "Cepat mengambil keputusan tegas di tengah situasi yang penuh ketidakpastian."
    ],
    weaknesses: [
      "Mudah tidak sabar dengan detail administratif atau proses tindak lanjut jangka panjang.",
      "Bisa terlihat mendominasi pembicaraan dan kurang memperhatikan masukan dari rekan tim yang lebih tenang."
    ],
    communication: {
      speak: "Penuh percaya diri, dinamis, energik, berfokus pada gambaran besar (big picture), dan persuasif.",
      listen: "Mencari poin utama dengan cepat; cenderung memotong jika penjelasan bertele-tele.",
      collaboration: "Menggerakkan tim untuk aksi cepat, mendelegasikan detail, dan merayakan pencapaian target inovatif."
    },
    leadership: "Pemimpin yang visioner, menginspirasi melalui tindakan nyata, menuntut inovasi cepat, dan berfokus pada pertumbuhan bisnis.",
    idealEnvironment: [
      "Perusahaan rintisan (startup), divisi inovasi baru, atau posisi kepemimpinan ekspansif.",
      "Lingkungan kerja yang dinamis tanpa birokrasi yang lambat."
    ],
    careers: ["Wirausahawan (Founder)", "Direktur Kreatif", "Manajer Pengembangan Bisnis", "Politisi / Pemimpin Komunitas"],
    developmentTips: ["Luangkan waktu untuk meninjau detail teknis atau carilah partner kerja tipe 'C' untuk mengamankan eksekusi ide Anda.", "Dengarkan rekan tim secara utuh sebelum menetapkan arah baru."],
    conclusion: "Sebagai penggerak dinamis, Anda adalah pembuka jalan baru. Dengan sedikit ketelitian ekstra, ide-ide hebat Anda akan terealisasi dengan sempurna."
  },
  "DS": {
    code: "DS",
    title: "D-S (Evaluator / Penilai Mandiri)",
    tagline: "Tenang, gigih, fokus pada target, mandiri, dan berorientasi pada hasil nyata.",
    description: "Kombinasi Dominance dan Steadiness menciptakan pribadi 'Evaluator' yang sangat andal dan fokus. Anda memiliki ketegasan D tetapi diimbangi dengan ketenangan dan kesabaran S. Ini membuat Anda mampu mengejar target secara gigih, mandiri, dan terencana dengan baik tanpa menciptakan kegaduhan sosial di sekitar Anda.",
    strengths: [
      "Konsistensi luar biasa antara dorongan hasil kerja dan ketahanan menghadapi tekanan.",
      "Kemampuan bekerja mandiri secara fokus tanpa memerlukan pengawasan ketat.",
      "Menyelesaikan masalah secara tuntas, praktis, dan berorientasi jangka panjang."
    ],
    weaknesses: [
      "Bisa terlihat sangat tertutup, dingin, atau kurang komunikatif secara emosional.",
      "Cenderung keras kepala ketika rencana kerjanya diganggu atau diubah secara mendadak."
    ],
    communication: {
      speak: "Lugas, tenang, terkontrol, bicaranya berisi, dan hanya berbicara jika diperlukan.",
      listen: "Mendengarkan dengan serius dan objektif; fokus pada aspek fungsional pembicaraan.",
      collaboration: "Bekerja sama secara mandiri dengan batasan tugas yang disepakati bersama."
    },
    leadership: "Pemimpin yang andal, memimpin lewat contoh nyata (lead by example), menuntut tanggung jawab penuh, dan stabil.",
    idealEnvironment: [
      "Lingkungan profesional yang menghargai kemandirian, target jelas, dan stabilitas operasional.",
      "Posisi spesialis yang memiliki wewenang eksekusi penuh."
    ],
    careers: ["Manajer Operasional", "Spesialis Teknis Senior", "Manajer Logistik", "Wirausahawan Mandiri"],
    developmentTips: ["Cobalah untuk lebih komunikatif tentang progres kerja Anda kepada tim.", "Kurangi kekakuan saat menghadapi perubahan arah yang mendadak."],
    conclusion: "Kekuatan fokus dan kestabilan Anda adalah andalan utama organisasi. Komunikasi yang lebih cair akan melipatgandakan efektivitas kerja Anda."
  },
  "DC": {
    code: "DC",
    title: "D-C (Creative / Pencari Solusi)",
    tagline: "Sangat teliti, berorientasi target tinggi, logis, analitis, dan penyelesai masalah andal.",
    description: "Kombinasi Dominance dan Compliance melahirkan kepribadian 'Creative Explorer' yang berstandar tinggi. Anda menggabungkan dorongan D untuk mencapai hasil dengan ketelitian C terhadap detail teknis. Anda selalu mencari cara paling efisien dan cerdas untuk menyelesaikan masalah yang sangat kompleks dengan standar kualitas sempurna.",
    strengths: [
      "Sangat mahir memecahkan masalah teknis atau strategis yang rumit secara mandiri.",
      "Memiliki standar kualitas kerja yang sangat tinggi dan tidak menoleransi kesalahan asal-asalan.",
      "Sikap kerja yang profesional, objektif, logis, dan sangat fokus pada efisiensi sistem."
    ],
    weaknesses: [
      "Terlalu kritis terhadap diri sendiri maupun orang lain, yang bisa menurunkan motivasi tim.",
      "Bisa terlihat kaku, perfeksionis ekstrem, dan mengabaikan kenyamanan sosial demi kesempurnaan hasil."
    ],
    communication: {
      speak: "Sangat faktual, logis, menyajikan argumen berbasis bukti konkret, dan langsung pada sasaran.",
      listen: "Mendengarkan dengan kritis untuk menyaring kesalahan logika atau ketidakakuratan data.",
      collaboration: "Bekerja sama dengan fokus profesional murni, menghargai diskusi analitis yang bermutu tinggi."
    },
    leadership: "Pemimpin yang kompeten secara teknis, berorientasi pada target kualitas absolut, dan memimpin dengan standar objektif.",
    idealEnvironment: [
      "Lingkungan kerja profesional yang terstruktur, menantang secara intelektual, dan bermutu tinggi.",
      "Posisi yang membutuhkan pemecahan masalah rumit dengan otonomi penuh."
    ],
    careers: ["Arsitek Sistem", "Direktur Keuangan / CFO", "Kepala Riset & Pengembangan", "Konsultan Manajemen Risiko"],
    developmentTips: ["Sampaikan masukan kritis Anda dengan bahasa yang lebih apresiatif dan membangun.", "Ingatlah bahwa kenyamanan tim juga berkontribusi pada kesuksesan jangka panjang."],
    conclusion: "Perpaduan logika analitis dan tekad baja Anda menghasilkan standar emas dalam pekerjaan. Sedikit sentuhan keramahan akan membuat kontribusi Anda diterima lebih luas."
  },
  "ID": {
    code: "ID",
    title: "I-D (Promoter / Motivator Ulung)",
    tagline: "Sangat persuasif, ekspresif, penuh dorongan prestasi, dan pandai memengaruhi orang lain.",
    description: "Kombinasi Influence dan Dominance menciptakan pribadi 'Promoter' yang sangat persuasif dan berorientasi pada aksi. Anda menyukai posisi yang memungkinkan Anda berinteraksi dengan banyak orang sekaligus mengarahkan jalannya acara atau proyek. Anda pandai menjual ide, memimpin presentasi, dan menggerakkan orang untuk bertindak cepat.",
    strengths: [
      "Sangat ahli dalam memengaruhi, menegosiasikan kesepakatan, dan meyakinkan orang lain.",
      "Energik, penuh percaya diri, dan berani mengambil inisiatif di hadapan publik.",
      "Mampu menyatukan antusiasme sosial dengan dorongan pencapaian target konkret."
    ],
    weaknesses: [
      "Cenderung tergesa-gesa dan melewatkan detail operasional atau kontrak tertulis penting.",
      "Bisa bereaksi defensif atau emosional jika ide-idenya ditolak atau dikritik secara tajam."
    ],
    communication: {
      speak: "Sangat persuasif, dinamis, ekspresif, penuh metafora menarik, dan berwibawa.",
      listen: "Mendengarkan untuk menemukan peluang kerja sama; tidak sabar dengan detail teknis yang membosankan.",
      collaboration: "Memimpin kolaborasi kelompok, memotivasi rekan kerja, dan mengarahkan fokus ke target luar biasa."
    },
    leadership: "Pemimpin yang karismatik, energik, berfokus pada hasil pemasaran, dan menggerakkan tim dengan motivasi verbal yang kuat.",
    idealEnvironment: [
      "Posisi kepemimpinan, pemasaran, humas, atau ekspansi pasar yang berinteraksi luas.",
      "Budaya kerja yang dinamis, penuh penghargaan, dan mengutamakan kecepatan."
    ],
    careers: ["Direktur Pemasaran", "Manajer Humas (PR Manager)", "Business Development Director", "Motivational Speaker"],
    developmentTips: ["Sediakan waktu untuk memeriksa detail dokumen penting atau bermitralah dengan orang yang kuat di bidang administrasi.", "Belajarlah menerima kritik dengan kepala dingin tanpa menganggapnya sebagai penolakan pribadi."],
    conclusion: "Energi dan kemampuan persuasi Anda adalah magnet kesuksesan. Dengan komitmen pada detail eksekusi, Anda akan mencapai target-target spektakuler."
  },
  "IS": {
    code: "IS",
    title: "I-S (Counselor / Konselor Ramah)",
    tagline: "Empatis, komunikatif, hangat, penuh perhatian, dan ahli merawat hubungan baik.",
    description: "Kombinasi Influence dan Steadiness melahirkan pribadi 'Counselor' yang sangat hangat dan berempati tinggi. Anda sangat peduli dengan kebahagiaan dan keharmonisan hubungan manusia di sekitar Anda. Anda adalah tipe pendengar yang tulus yang disukai rekan kerja karena pembawaan Anda yang suportif, ramah, dan bebas dari ambisi agresif.",
    strengths: [
      "Sangat peka terhadap perasaan orang lain dan ahli membangun kedekatan emosional.",
      "Penyelesai konflik interpersonal yang sangat baik lewat pendekatan persuasif yang lembut.",
      "Sangat setia, suportif, dan menjadi perekat keharmonisan kelompok dalam organisasi."
    ],
    weaknesses: [
      "Kesulitan menghadapi situasi konflik terbuka atau harus mengambil tindakan tegas yang mengecewakan orang.",
      "Cenderung mengabaikan target kerja pribadi demi membantu kenyamanan rekan kerja lainnya."
    ],
    communication: {
      speak: "Sangat ramah, hangat, menggunakan kalimat yang mengayomi, sopan, dan apresiatif.",
      listen: "Mendengarkan dengan sepenuh hati, sabar, penuh empati, dan tidak menghakimi.",
      collaboration: "Bekerja sama dalam suasana kekeluargaan yang saling mendukung tanpa kompetisi tajam."
    },
    leadership: "Pemimpin yang suportif, demokratis, membimbing anggota tim dengan perhatian personal, dan mengutamakan kebahagiaan tim (people-oriented).",
    idealEnvironment: [
      "Lingkungan kerja yang harmonis, stabil, minim persaingan agresif, dan berfokus pada layanan manusia.",
      "Budaya kerja kekeluargaan yang mengutamakan kolaborasi tulus."
    ],
    careers: ["Psikolog / Konselor", "Customer Relations Specialist", "Manajer Komunitas (Community Manager)", "HR Specialist / Training"],
    developmentTips: ["Latihlah keberanian Anda untuk menyampaikan penegasan (asertif) ketika hak profesional Anda dilanggar.", "Bedakan antara hubungan profesional murni dan kedekatan emosional agar tidak mudah dimanfaatkan."],
    conclusion: "Kehangatan dan empati Anda adalah berkah bagi tim manapun. Dengan memperkuat ketegasan diri, Anda akan melindungi kenyamanan diri sendiri sekaligus membimbing tim dengan lebih efektif."
  },
  "IC": {
    code: "IC",
    title: "I-C (Technical Communicator / Komunikator Teknis)",
    tagline: "Komunikatif, detail, sistematis dalam menyampaikan ide, rapi, dan menyenangkan.",
    description: "Kombinasi Influence dan Compliance menciptakan pribadi 'Technical Communicator' yang unik. Anda memiliki pesona komunikasi I tetapi juga ketelitian analitis C. Anda sangat ahli dalam menerjemahkan data teknis yang sangat rumit menjadi penjelasan yang mudah dipahami, menarik, dan terstruktur rapi untuk didengar orang awam.",
    strengths: [
      "Ahli dalam menyajikan data teknis atau analitis dengan presentasi yang menarik dan komunikatif.",
      "Mempunyai standar kualitas yang tinggi sekaligus ramah dalam berinteraksi profesional.",
      "Mampu bekerja sama secara tertib tanpa kehilangan kehangatan hubungan sosial."
    ],
    weaknesses: [
      "Bisa mengalami konflik batin antara keinginan bersenang-senang secara sosial dengan tuntutan ketelitian perfeksionis.",
      "Cenderung ragu-ragu karena terlalu banyak menganalisis dampak sosial dari keputusan yang diambil."
    ],
    communication: {
      speak: "Sistematis, rapi, menyertakan analogi menarik, ramah, namun tetap berbasis data yang valid.",
      listen: "Mendengarkan dengan kritis namun tetap menunjukkan apresiasi sosial yang ramah.",
      collaboration: "Menyukai kerja kelompok terstruktur yang memiliki pembagian peran profesional yang jelas."
    },
    leadership: "Pemimpin yang membimbing dengan instruksi logis yang menarik, komunikatif, rapi, dan mengutamakan kualitas kerja yang menyenangkan.",
    idealEnvironment: [
      "Posisi edukasi produk, analis pemasaran, manajemen kualitas yang membutuhkan presentasi, atau penasihat teknis.",
      "Lingkungan profesional teratur yang mengapresiasi inovasi berbasis riset."
    ],
    careers: ["Product Manager / Owner", "Technical Writer", "Analis Riset Pasar", "Edukator Teknologi / Trainer"],
    developmentTips: ["Belajarlah mengambil keputusan dengan lebih percaya diri tanpa harus selalu menunggu data yang 100% sempurna.", "Kurangi kekhawatiran berlebih terhadap penilaian publik atas performa analitis Anda."],
    conclusion: "Kemampuan Anda menjembatani dunia data dan manusia adalah aset yang sangat langka. Teruslah mengasah kombinasi langka ini untuk membuka peluang karier yang luar biasa."
  },
  "SD": {
    code: "SD",
    title: "S-D (Specialist / Spesialis Praktis)",
    tagline: "Gigih, sabar, bekerja terencana, konsisten, mandiri, dan berorientasi target mantap.",
    description: "Kombinasi Steadiness dan Dominance melahirkan pribadi 'Specialist' yang bertekad kuat dalam ketenangan. Anda memiliki ketahanan kerja yang luar biasa (S) ditambah dengan kemandirian fokus pada hasil akhir (D). Anda jarang mengeluh, bekerja secara konsisten di belakang layar, dan menyelesaikan tugas-tugas berat yang menantang secara tuntas.",
    strengths: [
      "Ketahanan kerja jangka panjang (endurance) dan gigih menyelesaikan tugas hingga beres.",
      "Sikap kerja mandiri yang andal, tenang di bawah tekanan, dan berfokus pada target.",
      "Mampu menjaga stabilitas kerja sekaligus membuat perbaikan performa yang nyata."
    ],
    weaknesses: [
      "Cenderung pasif-agresif; memendam ketidaksetujuan dan menyelesaikannya secara mandiri tanpa berdiskusi.",
      "Sangat menolak perubahan mendadak yang merusak alur kerja terstruktur yang telah ia bangun."
    ],
    communication: {
      speak: "Tenang, berisi, langsung fokus pada tanggung jawab tugas nyata, dan jarang menggunakan basa-basi sosial berlebih.",
      listen: "Mendengarkan instruksi kerja dengan cermat; fokus pada aspek teknis eksekusi.",
      collaboration: "Menginginkan pembagian tugas yang jelas dan mandiri; dapat diandalkan bekerja dalam kesunyian."
    },
    leadership: "Pemimpin operasional yang andal, fokus pada efisiensi proses bertahap, disiplin, dan mengayomi stabilitas tim.",
    idealEnvironment: [
      "Lingkungan kerja yang tenang, teratur, stabil, namun memiliki target pencapaian performa yang jelas.",
      "Posisi spesialis teknis atau manajemen operasional jangka panjang."
    ],
    careers: ["Spesialis Operasional", "Manajer Logistik / Supply Chain", "Kepala Cabang Operasional", "Technical Specialist"],
    developmentTips: ["Suarakan ketidaksetujuan Anda secara terbuka dan sehat sejak awal, hindari memendamnya.", "Latihlah kelenturan diri menghadapi perubahan sistem kerja baru."],
    conclusion: "Ketekunan dan keandalan Anda adalah fondasi kokoh organisasi. Komunikasi terbuka akan membantu Anda berkolaborasi dengan lebih efektif tanpa beban emosional terpendam."
  },
  "SI": {
    code: "SI",
    title: "S-I (Mediator / Agen Keharmonisan)",
    tagline: "Sangat ramah, penyabar, kooperatif, pendengar yang baik, dan cinta kedamaian.",
    description: "Kombinasi Steadiness dan Influence menciptakan kepribadian 'Mediator' yang sangat disukai dan ramah. Anda menggabungkan kesabaran dan keandalan S dengan keramahan sosial I. Anda sangat ahli dalam membangun kenyamanan tim, menyelesaikan ketegangan interpersonal, dan membina suasana kerja yang penuh persahabatan serta saling menghargai.",
    strengths: [
      "Sangat pandai mencairkan ketegangan sosial dan memediasi konflik dalam kelompok.",
      "Pendengar yang sangat berempati, sabar, dan selalu bersikap hangat kepada siapapun.",
      "Suka menolong rekan kerja secara praktis dengan tulus dan tanpa menonjolkan diri."
    ],
    weaknesses: [
      "Cenderung menghindari persaingan sehat atau konfrontasi penting yang diperlukan untuk kemajuan profesional.",
      "Bisa kesulitan membuat keputusan tegas yang berisiko menyinggung perasaan kelompok tertentu."
    ],
    communication: {
      speak: "Sangat santun, ramah, apresiatif, mengayomi, dan berfokus pada kebersamaan yang positif.",
      listen: "Mendengarkan dengan sabar, empati mendalam, dan memberikan dukungan emosional penuh.",
      collaboration: "Mengutamakan kerja sama kekeluargaan, menghindari persaingan internal, dan memastikan kenyamanan semua orang."
    },
    leadership: "Pemimpin yang membimbing (coaching leadership), ramah, memelihara kesejahteraan psikologis tim, dan mengutamakan harmoni internal.",
    idealEnvironment: [
      "Lingkungan kerja kolaboratif, kekeluargaan, stabil, dan berorientasi pada kemanusiaan atau layanan sosial.",
      "Budaya kantor bebas konflik keras dan mengutamakan kenyamanan bersama."
    ],
    careers: ["Mediator Konflik / HR Specialist", "Customer Care Specialist", "Konselor / Pekerja Sosial", "Guru / Instruktur Pelatihan"],
    developmentTips: ["Ingatlah bahwa konfrontasi tidak selalu buruk; kadang konfrontasi sehat diperlukan untuk menyelesaikan masalah nyata.", "Berlatihlah mengambil keputusan tegas berdasarkan fakta objektif demi kemajuan bersama."],
    conclusion: "Anda membawa kedamaian dan harmoni berharga ke dalam organisasi. Keberanian asertif akan melengkapi kepemimpinan hangat Anda menjadi kekuatan luar biasa."
  },
  "SC": {
    code: "SC",
    title: "S-C (Coordinator / Koordinator Sistematis)",
    tagline: "Sangat andal, tertib, konsisten, detail, tenang, dan berdedikasi tinggi.",
    description: "Kombinasi Steadiness dan Compliance menghasilkan kepribadian 'Coordinator' yang luar biasa rapi, tenang, dan berdedikasi tinggi. Anda menyatukan ketekunan S dengan ketelitian C. Anda bekerja secara sistematis di balik layar untuk memastikan seluruh administrasi, proses kerja, dan jadwal terpenuhi dengan kualitas sempurna tanpa membuat kesalahan.",
    strengths: [
      "Sangat andal, teliti, rapi, teratur, dan memiliki konsistensi kerja jangka panjang yang luar biasa.",
      "Menyusun dan memelihara sistem administrasi atau operasional dengan akurasi tinggi.",
      "Tenang, sabar, ramah secara sopan, dan sangat menghindari drama politik kantor."
    ],
    weaknesses: [
      "Sangat ragu-ragu dan lambat mengambil keputusan karena takut berbuat salah atau melanggar aturan.",
      "Mengalami stres tinggi jika dihadapkan pada perubahan instruksi yang mendadak atau situasi kerja kacau."
    ],
    communication: {
      speak: "Sopan, formal, terstruktur, faktual, tenang, dan sangat berhati-hati agar ucapannya akurat.",
      listen: "Mendengarkan secara penuh, mencatat instruksi detail, dan mengonfirmasi kejelasan tugas.",
      collaboration: "Menyukai kerja sama terstruktur dengan SOP tertulis, pembagian tugas jelas, dan suasana profesional tenang."
    },
    leadership: "Pemimpin operasional yang sangat disiplin, fokus pada kepatuhan kualitas, membimbing tim secara bertahap, dan menjaga ketertiban.",
    idealEnvironment: [
      "Lingkungan kerja profesional teratur, stabil, rapi, bersih dari kegaduhan, dan memiliki sistem SOP kokoh.",
      "Posisi administrasi, kualitas kontrol, riset bertahap, atau manajemen data."
    ],
    careers: ["Manajer Administrasi", "Analis Kualitas (QA)", "Spesialis Keuangan / Akunting", "Koordinator Operasional"],
    developmentTips: ["Latihlah diri Anda untuk mengambil keputusan dalam batas waktu tertentu, meskipun data belum terkumpul 100%.", "Sambutlah perubahan sistem kerja baru secara bertahap sebagai peluang efisiensi baru."],
    conclusion: "Akurasi dan dedikasi Anda adalah jaminan kualitas bagi sistem kerja organisasi. Sedikit keberanian mengambil keputusan cepat akan mempercepat langkah sukses Anda."
  },
  "CD": {
    code: "CD",
    title: "C-D (Strategic Planner / Perencana Strategis)",
    tagline: "Sangat logis, berstandar tinggi, tegas, objektif, berorientasi kualitas dan hasil.",
    description: "Kombinasi Compliance dan Dominance menciptakan pribadi 'Strategic Planner' yang sangat logis dan berorientasi pada pencapaian mutu tinggi. Anda memiliki ketelitian analitis C yang didorong oleh tekad sukses D. Anda tidak menyukai basa-basi, sangat berfokus pada efisiensi sistem, perbaikan kualitas, dan eksekusi target secara taktis-logis.",
    strengths: [
      "Kemampuan analisis mendalam dipadu dengan keberanian eksekusi target secara tegas.",
      "Menjunjung tinggi standar kualitas kerja mutlak dan mendesain sistem yang sangat efisien.",
      "Sikap kerja yang profesional, objektif, independen, dan bebas dari bias emosional."
    ],
    weaknesses: [
      "Bisa terlihat sangat dingin, kaku, menuntut perfeksionisme ekstrem, dan mudah frustrasi dengan ketidaktelitian tim.",
      "Cenderung kurang memperhatikan kenyamanan sosial atau perasaan subjektif rekan kerja."
    ],
    communication: {
      speak: "Sangat faktual, logis, menyajikan data terstruktur lengkap dengan implikasi pencapaian target, dan to-the-point.",
      listen: "Mendengarkan secara kritis untuk menguji kebenaran argumentasi dan kepraktisan solusi.",
      collaboration: "Bekerja sama secara profesional berorientasi hasil mutu, menghargai diskusi logis, dan menjauhi basa-basi sosial."
    },
    leadership: "Pemimpin strategis yang analitis, fokus pada desain sistem yang andal, menuntut standar mutu ekstrem, dan mengarahkan target secara rasional.",
    idealEnvironment: [
      "Lingkungan profesional terstruktur, menantang secara intelektual, memiliki tolok ukur mutu ketat, dan berorientasi hasil.",
      "Posisi perencanaan strategis, audit, manajemen sistem, atau analisis bisnis rumit."
    ],
    careers: ["Business Strategist", "Analis Keuangan Senior", "Sistem Auditor / Compliance Director", "Consulting Engineer"],
    developmentTips: ["Sampaikan masukan korektif Anda secara ramah agar motivasi rekan tim tetap terjaga.", "Luangkan waktu sejenak untuk membangun keakraban sosial sederhana dengan tim Anda."],
    conclusion: "Kombinasi kecerdasan analitis dan tekad kepemimpinan Anda adalah kunci sukses manajemen tingkat tinggi. Dengan melunakkan pendekatan personal, kepemimpinan Anda akan menggerakkan perubahan besar."
  },
  "CI": {
    code: "CI",
    title: "C-I (Systematic Social / Analis Hubungan)",
    tagline: "Teliti, analitis, sopan, komunikatif secara profesional, dan berorientasi kualitas.",
    description: "Kombinasi Compliance dan Influence melahirkan kepribadian 'Systematic Social' yang sangat seimbang. Anda memiliki ketelitian analitis C namun dipadukan dengan keramahan interaksi I. Ini membuat Anda mampu bekerja secara tertib dan detail pada data, sekaligus tetap mampu menjelaskan temuan Anda secara komunikatif, sopan, dan bersahabat kepada tim.",
    strengths: [
      "Menggabungkan akurasi data analitis dengan cara penyampaian informasi yang ramah dan menarik.",
      "Sangat sopan, menjaga tata krama profesional dengan sangat baik di hadapan klien.",
      "Mampu bekerja dengan data detail tanpa kehilangan kemampuan bersosialisasi yang menyenangkan."
    ],
    weaknesses: [
      "Sering merasa cemas atau stres jika hasil kerjanya dinilai kurang sempurna di mata umum.",
      "Cenderung ragu-ragu karena terlalu mengkhawatirkan data teknis sekaligus penerimaan sosial tim."
    ],
    communication: {
      speak: "Sopan, terstruktur, berbasis data ilmiah, namun disampaikan dengan intonasi ramah dan bersahabat.",
      listen: "Mendengarkan dengan kritis untuk akurasi data namun tetap menunjukkan keramahan interpersonal.",
      collaboration: "Menyukai kolaborasi profesional yang tertib, rapi, sopan, dan mengutamakan pertukaran ide logis secara nyaman."
    },
    leadership: "Pemimpin yang mengayomi kualitas sistem, berkomunikasi secara terbuka dan santun, serta menuntut ketertiban proses kerja.",
    idealEnvironment: [
      "Posisi analis pemasaran, kepatuhan kehumasan, riset sosial, manajemen kualitas yang melibatkan presentasi, atau komunikasi data.",
      "Budaya kantor yang profesional, sopan, dan mengutamakan etika kerja tinggi."
    ],
    careers: ["Analis Riset Pasar (Market Researcher)", "Spesialis Humas Kepatuhan", "Product Marketing Analyst", "Trainer Teknis Senior"],
    developmentTips: ["Latihlah keberanian Anda untuk mengambil keputusan secara mandiri dengan data yang sudah memadai.", "Kurangi kecemasan berlebih atas kritik minor terhadap hasil kerja Anda."],
    conclusion: "Kemampuan langka Anda dalam memadukan ketertiban data dengan keluwesan bersosialisasi adalah modal kepemimpinan yang hebat. Teruslah percaya diri pada potensi unik Anda."
  },
  "CS": {
    code: "CS",
    title: "C-S (Perfectionist / Penyempurna Detail)",
    tagline: "Sangat teliti, sabar, konsisten, teratur, menyukai ketenangan, dan berdedikasi tinggi.",
    description: "Kombinasi Compliance dan Steadiness menciptakan kepribadian 'Perfectionist' yang sangat setia, teliti, dan andal. Anda menyatukan standar kualitas C dengan konsistensi sabar S. Anda menyukai kedamaian, bekerja dengan tenang dan rapi di balik layar, dan memastikan seluruh detail pekerjaan Anda selesai dengan kualitas sempurna sesuai prosedur operasional standar (SOP).",
    strengths: [
      "Akurasi dan ketelitian tingkat tinggi dalam mengelola detail pekerjaan penting.",
      "Sabar, konsisten, andal, dan berdedikasi menyelesaikan tugas jangka panjang secara tertib.",
      "Sangat sopan, santun, andal menjaga ketertiban, dan menghindari politik kantor yang gaduh."
    ],
    weaknesses: [
      "Sangat perfeksionis sehingga rawan mengalami stres berat jika pekerjaan tidak sempurna.",
      "Sangat menghindari konflik terbuka sehingga kesulitan menyuarakan keberatan secara asertif."
    ],
    communication: {
      speak: "Tenang, sopan, formal, terstruktur rapi, berbicara berbasis dokumen tertulis, dan sangat santun.",
      listen: "Mendengarkan dengan penuh kesabaran, tulus, kritis terhadap detail fungsional, dan mencatat instruksi dengan rapi.",
      collaboration: "Bekerja sama dalam suasana profesional yang tenang, tertib, bebas konflik, dan memiliki deskripsi kerja tertulis yang jelas."
    },
    leadership: "Pemimpin teknis yang suportif, fokus pada kualitas ketertiban proses, membimbing tim secara sabar dan detail, serta memelihara stabilitas operasional.",
    idealEnvironment: [
      "Lingkungan kerja teratur, stabil, sepi dari kebisingan sosial, memiliki SOP detail tertulis, dan budaya kerja profesional sopan.",
      "Posisi administrasi, audit detail, laboratorium riset, atau manajemen kualitas berkelanjutan."
    ],
    careers: ["Analis Laboratorium / Peneliti", "Spesialis Kearsipan (Archivist)", "Auditor Keuangan / Akuntan", "Technical Quality Assurance"],
    developmentTips: ["Belajarlah menerima bahwa kesalahan kecil adalah bagian dari proses belajar bersama, kurangi menuntut kesempurnaan mutlak.", "Beranilah menyuarakan kebutuhan asertif Anda agar beban kerja Anda tetap seimbang."],
    conclusion: "Ketelitian, dedikasi, dan kepatuhan Anda adalah pelindung kualitas terbaik bagi organisasi. Dengan melatih asertivitas, Anda akan memimpin penyempurnaan sistem kerja secara luar biasa."
  }
};
export const getPersonalityResult = (mostScores: Record<string, number>, leastScores: Record<string, number>) => {
  const dimensions: ('D' | 'I' | 'S' | 'C')[] = ['D', 'I', 'S', 'C'];
  
  let primaryDim: 'D' | 'I' | 'S' | 'C' = 'D';
  let maxMost = -1;
  dimensions.forEach(d => {
    if (mostScores[d] > maxMost) {
      maxMost = mostScores[d];
      primaryDim = d;
    }
  });

  let secondaryDim: 'D' | 'I' | 'S' | 'C' | null = null;
  let maxSec = -1;
  dimensions.forEach(d => {
    if (d !== primaryDim) {
      if (mostScores[d] > maxSec && mostScores[d] >= 3) {
        maxSec = mostScores[d];
        secondaryDim = d;
      }
    }
  });

  const code = secondaryDim ? `${primaryDim}${secondaryDim}` : primaryDim;
  
  if (profiles[code]) {
    return profiles[code];
  } else if (profiles[`${secondaryDim}${primaryDim}`]) {
    return profiles[`${secondaryDim}${primaryDim}`];
  }
  return profiles[primaryDim];
};

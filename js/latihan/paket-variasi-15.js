// ═══════════════════════════════════════════════════════════
// PAKET LATIHAN HARIAN VARIASI 15 SOAL
// Format: 6 PG Standar + 2 Menjodohkan + 2 PG Kompleks + 5 Lintas Bidang
// ═══════════════════════════════════════════════════════════
var latihanData = [

    // ── BAGIAN 1: 6 SOAL PG STANDAR (Al-Qur'an & Hadis) ──
    {
        num: 1,
        tipe: "pg",
        topik: "Al-Qur'an & Hadis — Cinta Tanah Air",
        level: "L1",
        stimulus: "Allah Swt. berfirman dalam Q.S. Al-Qashash/28: 85:\n'Sesungguhnya (Allah) yang mewajibkan engkau (Muhammad) untuk (melaksanakan hukum-hukum) Al-Qur'an, benar-benar akan mengembalikanmu ke tempat kembali...'",
        pertanyaan: "Berdasarkan makna kandungan Q.S. Al-Qashash/28: 85, bentuk pengamalan utama kecintaan terhadap tanah air bagi seorang peserta didik adalah...",
        opsi: [
            "Menjaga kerukunan, ketertiban, dan kemajuan bangsa tempat kelahiran",
            "Membanggakan daerah sendiri secara berlebihan dan merendahkan daerah lain",
            "Acuh tak acuh terhadap keamanan dan kelestarian lingkungan sekolah",
            "Membatasi pergaulan hanya dengan teman yang berasal dari suku yang sama"
        ],
        kunci: 0,
        penjelasan: "Q.S. Al-Qashash/28: 85 mengabadikan kerinduan Nabi Muhammad Saw. akan tanah airnya (Makkah). Pengamalannya adalah dengan mencintai, menjaga kerukunan, dan memajukan bangsa."
    },
    {
        num: 2,
        tipe: "pg",
        topik: "Al-Qur'an & Hadis — Keimanan Integral",
        level: "L2",
        stimulus: "Perhatikan potongan Q.S. al-Baqarah/2: 285 berikut:\nكُلٌّ اٰمَنَ بِاللّٰهِ وَمَلٰۤىِٕكَتِهٖ وَكُتُبِهٖ وَرُسُلِهٖۗ لَا نُفَرِّقُ بَيْنَ اَحَدٍ مِّنْ رُّسُلِهٖ ۗ",
        pertanyaan: "Prinsip dasar keimananseorang mukmin terhadap para rasul Allah Swt. yang ditegaskan dalam ayat tersebut adalah...",
        opsi: [
            "Membeda-bedakan keluhuran derajat antara rasul satu dengan rasul lainnya",
            "Beriman secara integral kepada seluruh rasul Allah tanpa membeda-bedakan satu pun",
            "Hanya wajib beriman kepada Nabi Muhammad Saw. dan menolak rasul sebelumnya",
            "Menganggap malaikat memiliki kedudukan teologis yang lebih tinggi dari para rasul"
        ],
        kunci: 1,
        penjelasan: "Potongan ayat 'lā nufarriqu baina aḥadim min rusulih' bermakna seorang mukmin wajib beriman kepada seluruh rasul Allah tanpa membeda-bedakan satu pun."
    },
    {
        num: 3,
        tipe: "pg",
        topik: "Al-Qur'an & Hadis — Tajwid Al-Qamariyah & Al-Syamsiyah",
        level: "L1",
        kutipan: "الرَّسُوْلُ بِمَآ اُنْزِلَ اِلَيْهِ مِنْ رَّبِّهٖ وَالْمُؤْمِنُوْنَ",
        kutipanTerjemah: "Rasul (Muhammad) beriman kepada apa yang diturunkan kepadanya dari Tuhannya, demikian pula orang-orang yang beriman.",
        pertanyaan: "Hukum bacaan Tajwid alif lam (ال) pada lafaz الرَّسُوْلُ dan الْمُؤْمِنُوْنَ secara berturut-turut adalah...",
        opsi: [
            "Al-Syamsiyah dan Al-Qamariyah",
            "Al-Qamariyah dan Al-Syamsiyah",
            "Al-Qamariyah dan Al-Qamariyah",
            "Al-Syamsiyah dan Al-Syamsiyah"
        ],
        kunci: 0,
        penjelasan: "Lafaz الرَّسُوْلُ memuat Al-Syamsiyah (alif lam dibaca dilebur ke huruf Ra bertasydid), sedangkan الْمُؤْمِنُوْنَ memuat Al-Qamariyah (alif lam dibaca sukun jelas pada huruf Mim)."
    },
    {
        num: 4,
        tipe: "pg",
        topik: "Al-Qur'an & Hadis — Hadis Kecintaan pada Tanah Air",
        level: "L2",
        stimulus: "Ketika Rasulullah Saw. hijrah meninggalkan kota Makkah, beliau menoleh ke Makkah dan bersabda: 'Demi Allah, engkau adalah bumi Allah yang paling aku cintai...' (H.R. Tirmidzi).",
        pertanyaan: "Nilai luhur yang dapat dipetik dari hadis sejarah Rasulullah Saw. tersebut adalah...",
        opsi: [
            "Kewajiban membela dan mencintai tanah air (hubbul wathan) merupakan bagian dari ekspresi keimanan",
            "Larangan untuk berpergian menuntut ilmu ke luar daerah kelahiran",
            "Mementingkan kepentingan kelompok sendiri di atas kepentingan nasional",
            "Menolak perbedaan pendapat dalam kehidupan kemasyarakatan"
        ],
        kunci: 0,
        penjelasan: "Hadis tersebut menunjukkan betapa besarnya rasa cinta Rasulullah Saw. terhadap tanah air tempat beliau tumbuh, yang menjadi dasar semangat cinta tanah air (hubbul wathan)."
    },
    {
        num: 5,
        tipe: "pg",
        topik: "Al-Qur'an & Hadis — Bahaya Keimanan Parsial",
        level: "L3",
        stimulus: "Dalam Q.S. an-Nisā’/4: 150-151, Allah Swt. menegaskan ancaman bagi kelompok yang ingin memisahkan antara keimanan kepada Allah dan rasul-Nya.",
        pertanyaan: "Kedudukan teologis bagi orang yang beriman kepada sebagian rasul namun mengingkari sebagian rasul lainnya menurut ayat tersebut adalah...",
        opsi: [
            "Orang-orang kafir yang sebenar-benarnya (kāfirūna ḥaqqā)",
            "Orang mukmin yang sempurna tingkat ketakwaannya",
            "Orang yang dimaafkan karena belum mendapatkan petunjuk",
            "Orang yang berada pada derajat keimanan tertinggi"
        ],
        kunci: 0,
        penjelasan: "Q.S. an-Nisā’/4: 151 secara tegas menyatakan 'ulā'ika humul kāfirūna ḥaqqā' (mereka itulah orang-orang yang kafir dengan sebenar-benarnya) karena memisahkan keimanan kepada Allah dan rasul-rasul-Nya."
    },
    {
        num: 6,
        tipe: "pg",
        topik: "Al-Qur'an & Hadis — Analisis Ciri Bacaan Al-Qamariyah",
        level: "L2",
        stimulus: "Perhatikan empat lafaz berikut:\n1) الْكِتٰبُ\n2) السَّمَاۤءُ\n3) الْغَفُوْرُ\n4) الصَّبُوْرُ",
        pertanyaan: "Lafaz yang mengandung hukum bacaan Al-Qamariyah ditunjukkan oleh nomor...",
        opsi: [
            "1 dan 2",
            "1 dan 3",
            "2 dan 4",
            "3 dan 4"
        ],
        kunci: 1,
        penjelasan: "Nomor 1 (الْكِتٰبُ) dan nomor 3 (الْغَفُوْرُ) memuat bacaan Al-Qamariyah (alif lam dibaca sukun jelas). Sedangkan nomor 2 dan 4 adalah Al-Syamsiyah."
    },

    // ── BAGIAN 2: 2 SOAL MENJODOHKAN (Al-Qur'an & Tajwid) ──
    {
        num: 7,
        tipe: "menjodohkan",
        topik: "Al-Qur'an & Hadis — Menjodohkan Tajwid",
        level: "L2",
        pertanyaan: "Pasangkanlah lafaz bergaris Alif Lam di Kolom Kiri dengan Hukum Bacaan Tajwid yang tepat di Kolom Kanan:",
        kolomKiri: [
            "1. الْحَمْدُ لِلّٰهِ رَبِّ الْعٰلَمِيْنَ",
            "2. وَالشَّمْسِ وَضُحٰىهَا",
            "3. اِذَا زُلْزِلَتِ الْاَرْضُ زِلْزَالَهَا"
        ],
        kolomKanan: [
            "A. Al-Syamsiyah (Alif Lam melebur ke huruf syamsiyah)",
            "B. Al-Qamariyah (Alif Lam dibaca sukun dengan jelas)",
            "C. Idgham Bighunnah"
        ],
        kunci: [1, 0, 1], // 1 -> B, 2 -> A, 3 -> B
        penjelasan: "1) الْحَمْدُ = Al-Qamariyah (pada huruf Ha). 2) وَالشَّمْسِ = Al-Syamsiyah (pada huruf Syin bertasydid). 3) الْاَرْضُ = Al-Qamariyah (pada huruf Alif/Hamzah)."
    },
    {
        num: 8,
        tipe: "menjodohkan",
        topik: "Al-Qur'an & Hadis — Menjodohkan Potongan Ayat Q.S. al-Baqarah/2: 285",
        level: "L2",
        pertanyaan: "Pasangkanlah potongan lafaz Q.S. al-Baqarah/2: 285 di Kolom Kiri dengan Arti Terjemahan yang tepat di Kolom Kanan:",
        kolomKiri: [
            "1. لَا نُفَرِّقُ بَيْنَ اَحَدٍ مِّنْ رُّسُلِهٖ",
            "2. سَمِعْنَا وَاَطَعْنَا",
            "3. غُفْرَانَكَ رَبَّنَا وَاِلَيْكَ الْمَصِيْرُ"
        ],
        kolomKanan: [
            "A. 'Kami mendengar dan kami taat.'",
            "B. '(Ampunan-Mu yang kami harapkan) wahai Tuhan kami dan kepada-Mulah tempat kembali.'",
            "C. 'Kami tidak membeda-bedakan seorang pun dari rasul-rasul-Nya.'"
        ],
        kunci: [2, 0, 1], // 1 -> C, 2 -> A, 3 -> B
        penjelasan: "1 -> C (Kami tidak membeda-bedakan rasul). 2 -> A (Kami mendengar dan kami taat). 3 -> B (Ampunan-Mu wahai Tuhan kami dan kepada-Mu tempat kembali)."
    },

    // ── BAGIAN 3: 2 SOAL PG KOMPLEKS (Al-Qur'an & Hadis) ──
    {
        num: 9,
        tipe: "pgk",
        topik: "Al-Qur'an & Hadis — PG Kompleks Keimanan",
        level: "L3",
        stimulus: "Keimanan seorang muslim harus tecermin dalam wujud keyakinan hati, ikrar lisan, dan pengamalan perbuatan secara menyeluruh.",
        pertanyaan: "Manakah di antara pernyataan berikut yang merupakan bentuk perilaku nyata pengamalan Q.S. al-Baqarah/2: 285 dalam kehidupan sehari-hari? (Pilih lebih dari satu jawaban yang benar!)",
        opsi: [
            "Mengimani seluruh kitab-kitab Allah (Taurat, Zabur, Injil, Al-Qur'an) sebagai wahyu Allah Swt.",
            "Hanya mengamalkan syariat Al-Qur'an sambil mendiskreditkan ajaran nabi-nabi sebelum Nabi Muhammad Saw.",
            "Meneladani keteladanan mulia seluruh rasul Allah dalam menebar kasih sayang dan toleransi",
            "Berkomitmen melaksanakan perintah Allah Swt. dan Rasul-Nya dengan prinsip 'Sami'nā wa aṭa'nā'"
        ],
        kunci: [0, 2, 3], // A, C, D benar
        penjelasan: "Pilihan A, C, dan D merupakan sikap pengamalan mulia Q.S. al-Baqarah/2: 285. Pilihan B salah karena tidak boleh mendiskreditkan ajaran para nabi sebelumnya."
    },
    {
        num: 10,
        tipe: "pgk",
        topik: "Al-Qur'an & Hadis — PG Kompleks Tajwid Al-Syamsiyah",
        level: "L2",
        pertanyaan: "Manakah pernyataan di bawah ini yang merupakan ciri-ciri dan aturan bacaan hukum Tajwid Al-Syamsiyah? (Pilih lebih dari satu jawaban yang benar!)",
        opsi: [
            "Huruf alif lam (ال) tidak diberi tanda sukun dan diikuti tanda tasydid ( ّ ) pada huruf berikutnya",
            "Alif lam (ال) dibaca dengan suara sukun yang jelas dan terang (izhār)",
            "Cara membacanya dimasukkan atau dileburkan (idghām) ke dalam huruf syamsiyah di depannya",
            "Berhadapan dengan salah satu huruf Al-Syamsiyah seperti Ta (ت), Tsa (ث), Dal (د), atau Ra (ر)"
        ],
        kunci: [0, 2, 3], // A, C, D benar
        penjelasan: "A, C, dan D adalah ciri khas Al-Syamsiyah (tidak ada sukun di alif lam, ada tasydid di huruf depan, dibaca idgham/lebur). Pilihan B adalah ciri Al-Qamariyah."
    },

    // ── BAGIAN 4: 5 SOAL LINTAS BIDANG (Aqidah, Akhlak, Fikih, SKI) ──
    {
        num: 11,
        tipe: "pg",
        topik: "Lintas Bidang — Aqidah (Asmaul Husna Al-’Alīm & Al-Khabīr)",
        level: "L2",
        stimulus: "Raihan selalu mengerjakan soal ujian dengan jujur tanpa mencontek meskipun guru pengawas sedang keluar ruangan. Ia meyakini Allah Swt. Maha Mengetahui segala rahasia dan Maha Teliti terhadap setiap gerak-gerik hamba-Nya.",
        pertanyaan: "Sikap jujur yang ditunjukkan Raihan merupakan bukti pengamalan Asmaul Husna...",
        opsi: [
            "Al-’Alīm dan Al-Khabīr",
            "Al-Aḥad dan As-Ṣamad",
            "Al-Ghafūr dan Ar-Raḥīm",
            "Al-Malik dan Al-Quddūs"
        ],
        kunci: 0,
        penjelasan: "Al-’Alīm (Maha Mengetahui) dan Al-Khabīr (Maha Teliti/Waspada) menginspirasi kesadaran muraqabah (merasa selalu diawasi Allah Swt.) sehingga bertindak jujur."
    },
    {
        num: 12,
        tipe: "pg",
        topik: "Lintas Bidang — Akhlak (Kekuatan Ikhlas)",
        level: "L3",
        stimulus: "Aisyah menyisihkan sebahagian uang sakunya untuk membantu teman kelasnya yang tertimpa musibah secara sembunyi-sembunyi tanpa memberitahu siapa pun.",
        pertanyaan: "Tindakan Aisyah mencerminkan hakikat keikhlasan dalam beragama sebagaimana ditegaskan dalam Q.S. an-Nisā’/4: 146, yaitu...",
        opsi: [
            "Memurnikan niat beramal semata-mata hanya mengharap ridha Allah Swt. tanpa riya'",
            "Mengharapkan sanjungan dan pujian dari bapak ibu guru di sekolah",
            "Meminta balasan materi yang lebih besar dari temannya di kemudian hari",
            "Sekadar menggugurkan kewajiban sosial kemasyarakatan"
        ],
        kunci: 0,
        penjelasan: "Keikhlasan adalah memurnikan ketaatan dan amal kebajikan murni hanya untuk Allah Swt. tanpa ada campuran niat ingin dipuji (riya') atau disanjung."
    },
    {
        num: 13,
        tipe: "pg",
        topik: "Lintas Bidang — Fikih (Tata Cara Sujud Sahwi)",
        level: "L2",
        stimulus: "Saat menunaikan shalat Asar, Lukman merasa ragu-ragu apakah ia baru menyelesaikan 3 rakaat atau sudah 4 rakaat.",
        pertanyaan: "Tata cara penyelesaian shalat yang sesuai dengan tuntunan fikih ibadah bagi Lukman adalah...",
        opsi: [
            "Menghentikan shalat seketika dan mengulangnya dari awal",
            "Meyakini jumlah rakaat yang lebih sedikit (3 rakaat), menambah 1 rakaat, lalu melakukan sujud sahwi sebelum salam",
            "Langsung mengakhiri shalat dengan salam dan bertanya kepada jemaah",
            "Menambah 2 rakaat lagi tanpa perlu sujud sahwi"
        ],
        kunci: 1,
        penjelasan: "Sesuai sunnah Nabi Saw., jika ragu rakaat shalat, buang keraguan dan ambil yang meyakinkan (jumlah lebih sedikit), tuntaskan rakaatnya, lalu sujud sahwi dua kali sebelum salam."
    },
    {
        num: 14,
        tipe: "pg",
        topik: "Lintas Bidang — Fikih (Ketentuan Pembagian Kurban)",
        level: "L2",
        stimulus: "Keluarga Pak Ahmad menyembelih seekor sapi untuk kurban sunnah pada hari Nahar (10 Zulhijah).",
        pertanyaan: "Ketentuan proporsi pembagian daging kurban sunnah yang tepat bagi shahibul kurban menurut syariat Islam adalah...",
        opsi: [
            "Maksimal 1/3 bagian untuk shahibul kurban, 1/3 disedekahkan kepada fakir miskin, dan 1/3 dihadiahkan",
            "Wajib disedekahkan seluruhnya tanpa shahibul kurban mengambil sedikit pun",
            "Boleh dijual sepertiganya untuk mengganti biaya operasional penyembelihan",
            "Diberikan seluruhnya hanya kepada sanak saudara yang kaya"
        ],
        kunci: 0,
        penjelasan: "Untuk kurban sunnah, shahibul kurban berhak mengambil maksimal 1/3 bagian daging kurban, 1/3 untuk fakir miskin, dan 1/3 untuk kerabat/tetangga."
    },
    {
        num: 15,
        tipe: "pg",
        topik: "Lintas Bidang — SKI (Daulah Syafawi & Nisf-e-Jahan)",
        level: "L2",
        stimulus: "Daulah Syafawi di Persia mencapai puncak kejayaannya pada masa Shah Abbas I. Beliau merancang ibu kota kerajaan menjadi pusat peradaban dan arsitektur menawan yang dikagumi dunia.",
        pertanyaan: "Kota yang menjadi ibu kota kejayaan Daulah Syafawi dan mendapat julukan 'Nisf-e-Jahan' (Separuh Dunia) adalah...",
        opsi: [
            "Damaskus",
            "Isfahan",
            "Baghdad",
            "Istanbul"
        ],
        kunci: 1,
        penjelasan: "Isfahan di Iran dibangun secara megah oleh Shah Abbas I dengan tata kota, masjid, dan alun-alun Chahar Bagh yang indah hingga dijuluki 'Nisf-e-Jahan' (Separuh Dunia)."
    }
];

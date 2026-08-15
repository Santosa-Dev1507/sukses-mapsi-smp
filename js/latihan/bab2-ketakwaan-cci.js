// ═══════════════════════════════════════════════════════════
// BAB 2 Quran Hadis (SELASA) — QS. Ali Imran/3:102 & QS. Luqman/31:33 - KETAKWAAN
// 24 Soal Premium Hari Selasa (Bab 2) — Teks Arab Berharakat Presisi
// Format: 12 PG Standar + 6 PGK (2 Jawaban Benar) + 6 Benar/Salah (BS)
// ═══════════════════════════════════════════════════════════
const latihanData = [

    // ── BAGIAN 1: ASPEK QUR'AN-HADIS & TAJWID BAB 2 (SOAL 1 s.d. 16) ──

    // Soal 1 (PG Standar)
    {
        num: 1,
        tipe: "pg",
        topik: "Al-Qur'an & Hadis — Definisi Takwa (Q.S. Ali 'Imran/3: 102)",
        level: "L1",
        stimulus: "Teman-teman, bayangkan kamu sedang mendaki gunung yang jalurnya penuh dengan kerikil tajam dan jurang di kanan-kiri. Tentu kamu akan melangkah dengan sangat hati-hati agar tidak terpeleset, kan? Nah, begitulah gambaran takwa dalam mengarungi kehidupan. Dalam Q.S. Ali 'Imran/3: 102, Allah Swt. memerintahkan kita untuk bertakwa dengan sebenar-benar takwa.",
        pertanyaan: "Berdasarkan Tafsir Al-Muyassar, apa arti dari kalimat حَقَّ تُقٰتِهِ (sebenar-benar takwa kepada-Nya) dalam Q.S. Ali 'Imran/3: 102?",
        opsi: [
            "Mengasingkan diri di dalam gua seumur hidup agar terhindar dari pergaulan dunia",
            "Menaati Allah Swt. dan tidak bermaksiat kepada-Nya, mensyukuri-Nya dan tidak mengingkari nikmat-Nya, serta selalu mengingat-Nya tanpa melupakan-Nya",
            "Melaksanakan ibadah salat sunah terus-menerus tanpa tidur di malam hari",
            "Menghafal seluruh isi Al-Qur'an dalam waktu singkat tanpa memahami maknanya"
        ],
        kunci: 1,
        penjelasan: "Menurut Tafsir Al-Muyassar, makna 'sebenar-benar takwa kepada-Nya' (حَقَّ تُقٰتِهِ) adalah menaati-Nya tanpa mendurhakai-Nya, senantiasa bersyukur tanpa mengufuri nikmat-Nya, serta selalu berzikir mengingat-Nya tanpa melupakan-Nya."
    },

    // Soal 2 (PG Standar)
    {
        num: 2,
        tipe: "pg",
        topik: "Al-Qur'an & Hadis — Pesan Istiqamah (Q.S. Ali 'Imran/3: 102)",
        level: "L2",
        stimulus: "Saat mengikuti perlombaan lari maraton, hal yang paling menentukan kemenangan bukanlah siapa yang berlari paling cepat di awal, melainkan siapa yang mampu bertahan konsisten (istiqamah) hingga menyentuh garis finis. Hal ini selaras dengan pesan akhir dari Q.S. Ali 'Imran/3: 102.",
        pertanyaan: "Perhatikan potongan ayat berikut:\nوَلَا تَمُوْتُنَّ اِلَّا وَاَنْتُمْ مُّسْلِمُوْنَ\nPenerapan perilaku sehari-hari yang paling tepat dari pesan potongan ayat di atas bagi seorang pelajar muslim adalah…",
        opsi: [
            "Hanya melakukan ibadah dengan rajin saat menjelang ujian sekolah saja",
            "Konsisten (istiqamah) dalam beribadah dan menjaga akhlak mulia sepanjang hayat hingga ajal menjemput",
            "Menuntut ilmu umum tanpa memikirkan urusan ibadah harian",
            "Menyerah dan putus asa ketika doa atau keinginannya belum dikabulkan oleh Allah Swt."
        ],
        kunci: 1,
        penjelasan: "Potongan ayat 'wa lā tamūtunna illā wa antum muslimūn' berarti 'dan janganlah kamu mati kecuali dalam keadaan Muslim'. Pesan moralnya adalah perintah bagi setiap mukmin untuk senantiasa menjaga keislaman dan ketakwaannya secara konsisten (istiqamah) setiap saat, karena ajal bisa menjemput kapan saja."
    },

    // Soal 3 (PG Standar)
    {
        num: 3,
        tipe: "pg",
        topik: "Al-Qur'an & Hadis — Tipu Daya Dunia (Q.S. Luqman/31: 33)",
        level: "L1",
        stimulus: "Kadang kita sangat senang bermain game di smartphone sampai lupa waktu makan, lupa belajar, bahkan lupa membantu orang tua. Hal-hal menyenangkan di dunia ini jika tidak disikapi dengan bijak bisa membuat kita lalai dari tujuan hidup yang sebenarnya.",
        pertanyaan: "Berdasarkan Q.S. Luqman/31: 33, kalimat manakah yang memperingatkan manusia agar tidak tertipu oleh kesenangan dunia yang fana?",
        opsi: [
            "اِتَّقُوْا رَبَّكُمْ",
            "اِنَّ وَعْدَ اللّٰهِ حَقٌّ",
            "فَلَا تَغُرَّنَّكُمُ الْحَيٰوةُ الدُّنْيَا",
            "وَلَا يَغُرَّنَّكُمْ بِاللّٰهِ الْغَرُوْرُ"
        ],
        kunci: 2,
        penjelasan: "Lafal فَلَا تَغُرَّنَّكُمُ الْحَيٰوةُ الدُّنْيَا (fa lā tagurrannakumul-ḥayātud-dun-yā) memiliki arti 'maka janganlah sekali-kali kamu diperdayakan oleh kehidupan dunia'. Ini adalah alarm spiritual agar manusia tidak terbuai oleh gemerlap dunia sehingga melupakan persiapan untuk akhirat."
    },

    // Soal 4 (PG Standar)
    {
        num: 4,
        tipe: "pg",
        topik: "Al-Qur'an & Hadis — Tanggung Jawab Akhirat (Q.S. Luqman/31: 33)",
        level: "L3",
        stimulus: "Di sekolah, ketika ada tugas kelompok, kita bisa saling membantu dan berbagi nilai. Namun, saat ujian akhir semester secara mandiri, tidak ada satu pun teman atau bahkan orang tua kita yang bisa menggantikan kita untuk menjawab lembar soal ujian kita. Keadaan ini menggambarkan suasana pertanggungjawaban di hari kiamat.",
        pertanyaan: "Bagaimana Q.S. Luqman/31: 33 menggambarkan kemandirian tanggung jawab manusia di hadapan pengadilan Allah Swt. pada hari kiamat?",
        opsi: [
            "Seorang anak bisa menanggung dosa-dosa yang dilakukan oleh kedua orang tuanya",
            "Seorang bapak tidak dapat menolong anaknya, dan seorang anak tidak dapat pula menolong bapaknya sedikit pun",
            "Orang tua yang kaya raya dapat menebus dosa anaknya dengan membayar denda harta",
            "Para pemimpin dunia otomatis akan menyelamatkan seluruh pengikutnya dari siksa api neraka"
        ],
        kunci: 1,
        penjelasan: "Q.S. Luqman/31: 33 secara gamblang menyatakan: لَا يَجْزِيْ وَالِدٌ عَنْ وَّلَدِهٖ وَلَا مَوْلُوْدٌ هُوَ جَازٍ عَنْ وَّالِدِهٖ شَيْئًا (seorang bapak tidak dapat menolong anaknya, dan seorang anak tidak dapat pula menolong bapaknya sedikit pun). Ayat ini menegaskan bahwa di akhirat kelak, keselamatan bergantung sepenuhnya pada iman dan amal saleh pribadi."
    },

    // Soal 5 (PG Standar)
    {
        num: 5,
        tipe: "pg",
        topik: "Tajwid — Ghunnah Musyaddadah",
        level: "L1",
        stimulus: "Teman-teman, kata 'Ghunnah' secara bahasa berarti mendengung. Di dalam ilmu tajwid, ghunnah dibaca dengan cara menahan suara di pangkal hidung (khaisyum) sehingga menghasilkan dengung yang merdu dan jelas sepanjang 2-3 harakat.",
        pertanyaan: "Hukum bacaan Ghunnah Musyaddadah terjadi apabila dalam mushaf Al-Qur'an kita menemukan huruf…",
        opsi: [
            "Nun (ن) atau Mim (م) yang berharakat sukun/mati",
            "Nun (ن) atau Mim (م) yang bertanda tasydid ( ّ )",
            "Alif lam bertemu dengan huruf-huruf Syamsiyah",
            "Huruf-huruf qalqalah yang berada di akhir kalimat"
        ],
        kunci: 1,
        penjelasan: "Ghunnah Musyaddadah wajib dibaca mendengung kuat apabila ada huruf Nun bertasydid (نّ) atau Mim bertasydid (مّ). Cara membacanya ditahan selama 2 sampai 3 harakat (ketukan) sebelum berlanjut ke huruf berikutnya."
    },

    // Soal 6 (PG Standar)
    {
        num: 6,
        tipe: "pg",
        topik: "Tajwid — Klasifikasi Qalqalah Sughra vs Kubra",
        level: "L2",
        stimulus: "Qalqalah artinya memantul. Seperti bola basket yang kamu pantulkan ke lantai, suara huruf qalqalah juga harus memantul saat dibaca. Pantulan ini dibagi dua: Qalqalah Sughra (pantulan kecil di tengah kata karena sukun asli) dan Qalqalah Kubra (pantulan besar di akhir kalimat karena dibaca waqaf/berhenti).",
        pertanyaan: "Perhatikan lafal-lafal dari Q.S. Luqman/31: 33 berikut:\n1. تَجْزِيْ\n2. حَقٌّ (dibaca berhenti/waqaf)\nHukum bacaan qalqalah yang terdapat pada kata nomor 1 dan 2 secara berurutan adalah…",
        opsi: [
            "Qalqalah Kubra dan Qalqalah Sughra",
            "Qalqalah Sughra dan Qalqalah Kubra",
            "Qalqalah Sughra dan Ghunnah Musyaddadah",
            "Qalqalah Kubra dan Ghunnah Musyaddadah"
        ],
        kunci: 1,
        penjelasan: "Lafal 1: تَجْزِيْ (tajzī) mengandung Qalqalah Sughra (Jim sukun asli di tengah kata). Lafal 2: حَقٌّ (ḥaqq) jika di-waqaf-kan (dibaca berhenti) menjadi Qalqalah Kubra (Qaf bertasydid di akhir bacaan)."
    },

    // Soal 7 (PG Standar)
    {
        num: 7,
        tipe: "pg",
        topik: "Tajwid — Contoh Ghunnah Q.S. Ali 'Imran/3: 102",
        level: "L2",
        stimulus: "Mari kita cermati kembali keindahan lafal Q.S. Ali 'Imran/3: 102 berikut:\nيٰٓاَيُّهَا الَّذِيْنَ اٰمَنُوا اتَّقُوا اللّٰهَ حَقَّ تُقٰتِهٖ وَلَا تَمُوْتُنَّ اِلَّا وَاَنْتُمْ مُّسْلِمُوْنَ",
        pertanyaan: "Pada penggalan ayat di atas, kata manakah yang mengandung hukum bacaan Ghunnah Musyaddadah?",
        opsi: [
            "اٰمَنُوا",
            "تَمُوْتُنَّ",
            "اِلَّا",
            "مُّسْلِمُوْنَ"
        ],
        kunci: 1,
        penjelasan: "Kata تَمُوْتُنَّ (tamūtunna) mengandung hukum bacaan Ghunnah Musyaddadah karena terdapat huruf Nun bertasydid (نّ) di tengah kata tersebut."
    },

    // Soal 8 (PG Standar)
    {
        num: 8,
        tipe: "pg",
        topik: "Tajwid — Huruf Qalqalah",
        level: "L1",
        stimulus: "Guru mengaji kita di masjid sering memberikan jembatan keledai berupa kalimat 'Baju Di Toko' untuk memudahkan kita mengingat huruf-huruf qalqalah saat membaca Al-Qur'an.",
        pertanyaan: "Berdasarkan singkatan kreatif di atas, manakah susunan huruf hijaiyah yang benar sebagai huruf-huruf Qalqalah?",
        opsi: [
            "ق , ط , ب , ج , د",
            "ك , ت , ف , ج , د",
            "ء , هـ , ع , ح , غ",
            "س , ش , ص , ض , ط"
        ],
        kunci: 0,
        penjelasan: "Huruf-huruf qalqalah berjumlah 5 huruf: Qaf (ق), Tha (ط), Ba (ب), Jim (ج), dan Dal (د), yang biasa disingkat dalam ilmu tajwid dengan kalimat قُطْبُ جَدٍ atau dalam bahasa Indonesia dimudahkan menjadi 'Baju Di Toko'."
    },

    // Soal 9 (PGK — 2 Jawaban Benar)
    {
        num: 9,
        tipe: "pgk",
        topik: "Al-Qur'an & Hadis — PGK Korelasi Takwa & Hari Akhir",
        level: "L3",
        stimulus: "Jika seorang guru mengumumkan bahwa ujian mendadak (pop quiz) bisa terjadi kapan saja minggu ini tanpa memberi tahu hari pastinya, murid yang cerdas pasti akan selalu belajar setiap hari agar selalu siap. Begitu pula takwa diposisikan sebagai persiapan konstan menghadapi hari kiamat yang waktunya dirahasiakan Allah Swt.",
        pertanyaan: "Berdasarkan isi kandungan Q.S. Ali 'Imran/3: 102 dan Q.S. Luqman/31: 33, manakah dua pernyataan yang benar mengenai kaitan logis antara ketakwaan dengan persiapan menghadapi hari akhir? (Pilihlah dua jawaban yang benar!)",
        opsi: [
            "Ketakwaan yang konsisten sepanjang hayat merupakan satu-satunya bekal berharga karena di hari akhir tidak ada pertolongan dari orang lain.",
            "Kita diperbolehkan menunda-nunda ketaatan sampai hari kiamat secara resmi diumumkan tanggalnya.",
            "Sikap waspada terhadap tipu daya dunia (al-ghurur) membantu menjaga konsistensi iman hamba agar bisa wafat sebagai muslim.",
            "Hari akhir hanya perlu ditakuti oleh orang-orang yang tidak memiliki kekayaan materi melimpah di dunia."
        ],
        kunci: [0, 2],
        penjelasan: "Ketakwaan adalah benteng pertahanan spiritual agar kita selalu siap kapan pun dipanggil menghadap Allah Swt., karena di akhirat kelak amal masing-masing yang menentukan nasib kita. Kesenangan dunia kerap menipu, maka iman harus dijaga hingga ajal tiba."
    },

    // Soal 10 (PGK — 2 Jawaban Benar)
    {
        num: 10,
        tipe: "pgk",
        topik: "Tajwid — PGK Analisis Perbedaan Qalqalah",
        level: "L3",
        stimulus: "Mari kita uji kepekaan telinga kita saat mendengarkan pembacaan dua lafal dari Q.S. Luqman/31: 33 berikut:\nLafal A: وَاتَّقُوْا (dibaca terus/washal)\nLafal B: عَنْ وَلَدِهٖ (dibaca waqaf/berhenti pada kata waladih)",
        pertanyaan: "Berdasarkan kaidah tajwid qalqalah, analisis manakah yang tepat mengenai kedua lafal di atas? (Pilihlah dua jawaban yang benar!)",
        opsi: [
            "Lafal A mengandung Qalqalah Sughra karena terdapat huruf Qaf di tengah-tengah kata.",
            "Lafal A tidak mengandung hukum bacaan Qalqalah sama sekali karena huruf Qaf-nya berharakat hidup (fathah bertasydid), bukan sukun.",
            "Lafal B mengandung Qalqalah Kubra jika dibaca waqaf (berhenti) pada kata tersebut, karena huruf Dal (د) di akhir kata berubah dibaca sukun.",
            "Lafal B mengandung Qalqalah Sughra karena huruf Dal-nya mati asli sejak awal penulisan mushaf."
        ],
        kunci: [1, 2],
        penjelasan: "Pada lafal وَاتَّقُوْا (wat-taqū), huruf Qaf-nya tidak mati (berharakat dhommah), sehingga bukan qalqalah. Pada lafal عَنْ وَلَدِهٖ jika dibaca berhenti menjadi 'an walad, huruf Dal (د) berada di akhir bacaan karena di-waqaf-kan, sehingga dibaca memantul kuat sebagai Qalqalah Kubra."
    },

    // Soal 11 (PGK — 2 Jawaban Benar)
    {
        num: 11,
        tipe: "pgk",
        topik: "Tajwid — PGK Seleksi Lafal Ghunnah",
        level: "L2",
        stimulus: "Kamu ditunjuk sebagai asisten tutor sebaya di kelas untuk membantu teman-teman mengelompokkan potongan-potongan ayat yang memiliki cara membaca dengung menahan napas di hidung (ghunnah).",
        pertanyaan: "Manakah di antara potongan lafal ayat di bawah ini yang wajib dibaca mendengung kuat ditahan (Ghunnah Musyaddadah)? (Pilihlah dua jawaban yang benar!)",
        opsi: [
            "فَلَا تَغُرَّنَّكُمُ (Q.S. Luqman/31: 33)",
            "اتَّقُوا اللّٰهَ (Q.S. Ali 'Imran/3: 102)",
            "اِنَّ وَعْدَ (Q.S. Luqman/31: 33)",
            "وَاَنْتُمْ مُّسْلِمُوْنَ (Q.S. Ali 'Imran/3: 102)"
        ],
        kunci: [0, 2],
        penjelasan: "Lafal فَلَا تَغُرَّنَّكُمُ (fa lā taghurrannakumu) dan اِنَّ (inna) mengandung Nun bertasydid (نّ) = Ghunnah Musyaddadah. Lafal wa antum muslimūn mengandung Idgham Mimi, bukan Ghunnah Musyaddadah."
    },

    // Soal 12 (PGK — 2 Jawaban Benar)
    {
        num: 12,
        tipe: "pgk",
        topik: "Al-Qur'an & Hadis — PGK Karakter Takwa",
        level: "L3",
        stimulus: "Menjadi orang bertakwa tidak berarti kita harus mengurung diri dari dunia luar. Justru, takwa sejati melahirkan perilaku akhlak sosial yang sangat indah bagi lingkungan sekitar kita.",
        pertanyaan: "Berdasarkan kandungan Q.S. Ali 'Imran/3: 102, manakah dua tindakan nyata di bawah ini yang paling mencerminkan implementasi karakter takwa? (Pilihlah dua jawaban yang benar!)",
        opsi: [
            "Mensyukuri segala nikmat pemberian Allah Swt. dan menjauhi perbuatan yang mengarah pada pengingkaran nikmat (kufur nikmat).",
            "Selalu mengingat kesalahan orang lain kepada kita dan enggan memaafkannya sebelum mereka meminta maaf di depan umum.",
            "Senantiasa menjalankan perintah Allah Swt. (seperti jujur dan adil) serta menjauhi larangan-Nya di mana saja kita berada.",
            "Membatasi interaksi sosial hanya dengan teman sekelas yang memiliki latar belakang tingkat kekayaan yang sama."
        ],
        kunci: [0, 2],
        penjelasan: "Kandungan Q.S. Ali 'Imran/3: 102 mencakup: (1) bertakwa secara nyata dengan menjalankan perintah dan menjauhi larangan-Nya, (2) mensyukuri nikmat dan tidak mengingkarinya, (3) selalu mengingat Allah dan tidak melupakan-Nya."
    },

    // Soal 13 (Benar/Salah)
    {
        num: 13,
        tipe: "pg",
        topik: "Tajwid — B/S Qalqalah pada At-Taqwa",
        level: "L2",
        stimulus: "Kita sering mengucapkan kata تَقْوٰى (taqwā) dalam pelajaran PAI. Mari kita bedah struktur huruf kata tersebut berdasarkan hukum pantulan suara (qalqalah).",
        pertanyaan: "Lafal تَقْوٰى mengandung hukum bacaan Qalqalah Sughra karena terdapat huruf Qaf (ق) yang mati/sukun asli terletak di tengah kata.\n\nApakah pernyataan di atas BENAR atau SALAH?",
        opsi: [
            "BENAR",
            "SALAH"
        ],
        kunci: 0,
        penjelasan: "BENAR. Analisis tersebut benar. Huruf Qaf (ق) adalah salah satu huruf qalqalah. Karena ia berharakat sukun asli di tengah-tengah kata تَقْوٰى, maka cara membacanya harus memantul tipis/kecil (Qalqalah Sughra)."
    },

    // Soal 14 (Benar/Salah)
    {
        num: 14,
        tipe: "pg",
        topik: "Al-Qur'an & Hadis — B/S Tafsir Quraish Shihab tentang Takwa",
        level: "L3",
        stimulus: "Dalam literatur tafsir Indonesia, baik Prof. Quraish Shihab maupun Buya Hamka menjelaskan takwa sebagai upaya pemeliharaan diri (al-wiqayah) agar terhindar dari murka Allah Swt. dengan cara berserah diri secara tulus.",
        pertanyaan: "Prof. Quraish Shihab dalam Tafsir Al-Misbah menjelaskan bahwa takwa yang tulus menuntut seorang muslim untuk menolak segala kegiatan sains karena dianggap dapat merusak kemurnian ibadah batiniah.\n\nApakah pernyataan di atas BENAR atau SALAH?",
        opsi: [
            "BENAR",
            "SALAH"
        ],
        kunci: 1,
        penjelasan: "SALAH. Prof. Quraish Shihab dalam Tafsir Al-Misbah justru mendorong umat Islam untuk menguasai ilmu pengetahuan dan teknologi secara aktif sebagai sarana memakmurkan bumi (khalifah) dan memperkokoh ketakwaan kepada Allah Swt."
    },

    // Soal 15 (Benar/Salah)
    {
        num: 15,
        tipe: "pg",
        topik: "Tajwid — B/S Hukum Tasydid Selain Nun/Mim",
        level: "L2",
        stimulus: "Perhatikan potongan lafal berikut: اَلَّذِيْنَ (alladzīna). Pada lafal tersebut terdapat hukum bacaan Ghunnah Musyaddadah karena huruf Lam memiliki tanda tasydid ( ّ ) di atasnya.",
        pertanyaan: "Apakah pernyataan mengenai hukum bacaan lafal اَلَّذِيْنَ di atas BENAR atau SALAH?",
        opsi: [
            "BENAR",
            "SALAH"
        ],
        kunci: 1,
        penjelasan: "SALAH. Hukum Ghunnah Musyaddadah hanya berlaku secara mutlak pada huruf Nun bertasydid (نّ) atau Mim bertasydid (مّ). Tanda tasydid pada huruf selain keduanya (seperti Lam pada lafal اَلَّذِيْنَ) merupakan tanda hukum peleburan (idgham), bukan ghunnah yang dibaca mendengung ditahan."
    },

    // Soal 16 (Benar/Salah)
    {
        num: 16,
        tipe: "pg",
        topik: "Al-Qur'an & Hadis — B/S Terjemahan Hadis Takwa",
        level: "L1",
        stimulus: "Rasulullah saw. memberikan nasihat ringkas yang sangat padat kepada sahabat Mu'adz bin Jabal r.a. tentang wilayah penerapan takwa dalam kehidupan harian.",
        pertanyaan: "Potongan sabda Rasulullah saw. اِتَّقِ اللّٰهَ حَيْثُمَا كُنْتَ memiliki arti 'Bertakwalah kepada Allah di mana saja engkau berada'.\n\nApakah pernyataan di atas BENAR atau SALAH?",
        opsi: [
            "BENAR",
            "SALAH"
        ],
        kunci: 0,
        penjelasan: "BENAR. Terjemahan tersebut 100% benar. Nasihat ini mengajarkan kita bahwa takwa tidak terbatas oleh sekat ruang dan waktu (tidak hanya saat di masjid atau sekolah saja), melainkan harus mewarnai seluruh aktivitas kita di mana pun kita berada."
    },

    // ── BAGIAN 2: ASPEK AQIDAH-AKHLAK BAB 2 (SOAL 17 s.d. 20) ──

    // Soal 17 (PG Standar)
    {
        num: 17,
        tipe: "pg",
        topik: "Aqidah — Sifat Ketaatan Malaikat",
        level: "L1",
        stimulus: "Malaikat adalah makhluk gaib yang diciptakan Allah Swt. dari cahaya (nur). Mereka memiliki sifat-sifat unik yang sangat kontras dengan karakter manusia atau jin.",
        pertanyaan: "Berdasarkan materi keimanan di kelas VII, sifat mutlak yang dimiliki oleh malaikat sehingga mereka tidak pernah sekalipun berbuat dosa adalah…",
        opsi: [
            "Selalu merasa lapar sehingga fokus mencari makanan di langit",
            "Tidak pernah mendurhakai Allah Swt. terhadap apa yang diperintahkan-Nya dan selalu mengerjakan apa yang diperintahkan",
            "Memiliki nafsu yang besar untuk menguasai wilayah bumi",
            "Diberikan kebebasan untuk memilih antara berbuat baik atau buruk"
        ],
        kunci: 1,
        penjelasan: "Malaikat disifati dengan ketaatan mutlak (maksum). Mereka tidak memiliki hawa nafsu sehingga selalu taat dan patuh melaksanakan seluruh tugas yang didelegasikan oleh Allah Swt. tanpa pernah membantah sedikit pun."
    },

    // Soal 18 (PG Standar)
    {
        num: 18,
        tipe: "pg",
        topik: "Akhlak — Dimensi Syukur Bil Qalb",
        level: "L2",
        stimulus: "Zahran merasa sangat lega dan tenang setelah mengetahui bahwa adiknya berhasil sembuh dari sakit demam berdarah. Di dalam kamarnya yang sepi, ia memejamkan mata sambil meyakini dengan sepenuh jiwa bahwa kesembuhan adiknya itu murni merupakan karunia kasih sayang dari Allah Swt., bukan semata-mata karena kehebatan obat dokter.",
        pertanyaan: "Ditinjau dari dimensi bersyukur, sikap batiniah yang ditunjukkan oleh Zahran tersebut merupakan perwujudan nyata dari…",
        opsi: [
            "Syukur bil jawarih (syukur dengan perbuatan fisik)",
            "Syukur bil lisan (syukur dengan ucapan)",
            "Syukur bil qalb (syukur dengan keyakinan hati)",
            "Syukur bil mal (syukur dengan membagikan harta)"
        ],
        kunci: 2,
        penjelasan: "Syukur bil qalb adalah dimensi syukur di mana seseorang menyadari dan meyakini dengan sepenuh hati bahwa segala nikmat dan keselamatan yang diperoleh bersumber langsung dari kemurahan dan kasih sayang Allah Swt., bukan semata-mata karena usaha makhluk."
    },

    // Soal 19 (PGK — 2 Jawaban Benar)
    {
        num: 19,
        tipe: "pgk",
        topik: "Aqidah — PGK Malaikat Raqib dan Atid",
        level: "L2",
        stimulus: "Memercayai adanya Malaikat Raqib dan Atid mendidik kita untuk memiliki pengawasan mandiri (self-monitoring). Di mana pun kita berada, kita sadar bahwa seluruh lembar catatan amal kita sedang ditulis secara aktif dan tidak ada satu pun detail yang terlewat.",
        pertanyaan: "Manakah di antara tindakan berikut yang menunjukkan bentuk nyata dari penerapan keimanan kepada Malaikat Raqib dan Atid saat berada di sekolah? (Pilihlah dua jawaban yang benar!)",
        opsi: [
            "Tetap tenang dan mengerjakan soal ujian secara jujur tanpa mencontek meskipun guru pengawas sedang keluar ruangan kelas.",
            "Mengikuti kerja bakti membersihkan taman sekolah hanya jika nama kita dicatat oleh ketua kelas untuk mendapat nilai tambahan.",
            "Berpikir saksama sebelum mengetik atau membagikan postingan di media sosial agar tidak menyinggung atau menyakiti perasaan orang lain.",
            "Memilih untuk pura-pura tidak melihat ketika ada sampah yang berserakan di depan pintu masuk ruang guru."
        ],
        kunci: [0, 2],
        penjelasan: "Mengimani Malaikat Raqib dan Atid (pencatat amal baik dan buruk) melahirkan sikap mawas diri (muraqabah). Seseorang akan konsisten berbuat baik dan jujur (seperti tidak mencontek saat ujian) serta menjaga jemari/lisannya di media sosial karena tahu setiap tindakannya dicatat secara akurat."
    },

    // Soal 20 (Benar/Salah)
    {
        num: 20,
        tipe: "pg",
        topik: "Aqidah — B/S Keotentikan Al-Qur'an (Q.S. al-Hijr/15: 9)",
        level: "L3",
        stimulus: "Kitab suci Al-Qur'an diturunkan sebagai penyempurna dan penutup (muhaimin) atas kitab-kitab suci terdahulu (Taurat, Zabur, dan Injil). Allah Swt. memberikan jaminan pemeliharaan yang berbeda untuk Al-Qur'an.",
        pertanyaan: "Jaminan pemeliharaan kemurnian Al-Qur'an dari segala bentuk perubahan tangan manusia digaransi langsung oleh Allah Swt. sebagaimana firman-Nya dalam Q.S. al-Hijr/15: 9, sehingga Al-Qur'an tidak akan pernah mengalami distorsi atau pemalsuan sepanjang zaman.\n\nApakah pernyataan di atas BENAR atau SALAH?",
        opsi: [
            "BENAR",
            "SALAH"
        ],
        kunci: 0,
        penjelasan: "BENAR. Pernyataan ini benar. Berbeda dengan kitab terdahulu yang penjagaannya diamanahkan kepada umatnya masing-masing, kemurnian mushaf Al-Qur'an dijamin langsung dan dipelihara oleh Allah Swt. sehingga terbebas dari kepunahan atau distorsi teks hingga akhir zaman."
    },

    // ── BAGIAN 3: ASPEK FIKIH & SKI BAB 2 (SOAL 21 s.d. 24) ──

    // Soal 21 (PG Standar)
    {
        num: 21,
        tipe: "pg",
        topik: "Fikih — Syarat Sah Salat Jumat",
        level: "L1",
        stimulus: "Hari Jumat adalah hari raya mingguan umat Islam. Pelaksanaan salat Jumat memiliki aturan khusus yang wajib dipenuhi agar salatnya dinilai sah secara syariat.",
        pertanyaan: "Di bawah ini yang merupakan salah satu syarat sah (ketentuan yang membuat salat Jumat dinilai sah) dalam fikih Islam adalah…",
        opsi: [
            "Jemaah yang hadir wajib menguasai bahasa Arab dengan sangat lancar",
            "Dilaksanakan secara berjamaah, bertempat di masjid/pemukiman tetap, dan didahului oleh dua khutbah",
            "Menggunakan seragam batik sekolah yang berwarna senada bagi seluruh jemaah",
            "Dilaksanakan tepat pada saat matahari mulai terbit di ufuk timur"
        ],
        kunci: 1,
        penjelasan: "Syarat sah salat Jumat antara lain: (1) dilaksanakan di waktu zuhur, (2) dilakukan secara berjamaah, (3) bertempat di area pemukiman tetap (masjid atau tempat tinggal), (4) didahului oleh dua khutbah Jumat yang memenuhi rukun-rukunnya."
    },

    // Soal 22 (PG Standar)
    {
        num: 22,
        tipe: "pg",
        topik: "SKI — Pendiri Baitul Hikmah Masa Abbasiyah",
        level: "L1",
        stimulus: "Pada masa Daulah Bani Abbasiyah di Baghdad, didirikan sebuah institusi megah yang menjadi pusat ilmu pengetahuan terbesar di dunia. Tempat ini mengoleksi jutaan buku ilmiah dari berbagai peradaban dunia dan menjadi motor penggerak zaman keemasan Islam.",
        pertanyaan: "Siapakah nama khalifah Daulah Abbasiyah yang sangat terkenal cerdas dan menjadi tokoh utama pendiri lembaga Baitul Hikmah di Baghdad?",
        opsi: [
            "Abu Abbas as-Saffah",
            "Harun al-Rasyid",
            "Marwan bin Muhammad",
            "Muawiyah bin Abi Sufyan"
        ],
        kunci: 1,
        penjelasan: "Baitul Hikmah (House of Wisdom) didirikan perdana oleh Khalifah Harun al-Rasyid sebagai perpustakaan pribadi kerajaan (khizanat al-hikmah), yang kemudian dikembangkan secara besar-besaran oleh putranya, Khalifah Al-Ma'mun, menjadi perpustakaan umum, akademi penerjemahan, dan pusat riset sains terbesar di dunia."
    },

    // Soal 23 (PGK — 2 Jawaban Benar)
    {
        num: 23,
        tipe: "pgk",
        topik: "SKI — PGK Keharmonisan Intelektual Era Abbasiyah",
        level: "L3",
        stimulus: "Zaman keemasan Daulah Abbasiyah di Baitul Hikmah tidak hanya diisi oleh ilmuwan muslim. Khalifah mempekerjakan para penerjemah dan pakar sains terbaik dari kalangan Kristen Nestorian, Yahudi, bahkan Sabi'in (penyembah matahari) secara profesional untuk bersama-sama mengembangkan ilmu pengetahuan demi kemaslahatan manusia.",
        pertanyaan: "Berdasarkan sejarah di atas, manakah dua kesimpulan nilai keteladanan yang bisa kita terapkan untuk mendukung keharmonisan berbangsa di Indonesia saat ini? (Pilihlah dua jawaban yang benar!)",
        opsi: [
            "Saling menghargai perbedaan keyakinan agama demi mewujudkan kolaborasi sosial dan kemajuan intelektual bangsa.",
            "Menolak berdiskusi dengan orang yang berbeda suku karena menganggap pendapat golongan sendiri paling sempurna.",
            "Menerapkan prinsip profesionalitas dan toleransi dalam dunia pendidikan tanpa memandang latar belakang suku, ras, atau agama seseorang.",
            "Memaksa semua rekan kerja yang berbeda keyakinan untuk menyetujui pendapat teologi kita."
        ],
        kunci: [0, 2],
        penjelasan: "Keharmonisan intelektual era Abbasiyah menunjukkan teladan toleransi yang tinggi. Perbedaan keyakinan tidak menghalangi mereka untuk berkolaborasi ilmiah demi kemaslahatan umat manusia. Di Indonesia, nilai ini sangat relevan untuk dipraktikkan guna mempererat persatuan nasional dan bergotong-royong memajukan bangsa."
    },

    // Soal 24 (Benar/Salah)
    {
        num: 24,
        tipe: "pg",
        topik: "SKI — B/S Ibnu Sina Bapak Kedokteran Modern",
        level: "L1",
        stimulus: "Perkembangan ilmu pengetahuan umum pada masa Bani Abbasiyah melahirkan banyak tokoh legendaris yang karyanya diakui secara global hingga hari ini, terutama di bidang kedokteran.",
        pertanyaan: "Tokoh ilmuwan muslim masa Daulah Abbasiyah yang menulis mahakarya kedokteran berjudul Al-Qanun fi at-Tibb (The Canon of Medicine) yang diakui sebagai Bapak Kedokteran Modern adalah Ibnu Sina (di Barat dikenal sebagai Avicenna).\n\nApakah pernyataan di atas BENAR atau SALAH?",
        opsi: [
            "BENAR",
            "SALAH"
        ],
        kunci: 0,
        penjelasan: "BENAR. Pernyataan tersebut benar. Ibnu Sina (Avicenna) adalah ilmuwan muslim paling cemerlang masa Abbasiyah yang dijuluki sebagai 'Bapak Kedokteran Modern'. Kitabnya menjadi rujukan utama dunia kedokteran barat selama berabad-abad."
    }
];

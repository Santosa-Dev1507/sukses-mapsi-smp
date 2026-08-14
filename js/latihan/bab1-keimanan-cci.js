// ═══════════════════════════════════════════════════════════
// SMP NEGERI 5 KLATEN — BAB 1 (SENIN): KEIMANAN
// Latihan Soal Lintas Bidang — MAPSI 2026
// Ayat Rujukan: QS. Al-Baqarah/2: 285 & QS. An-Nisa/4: 150-151
// Format: 6 PG Standar + 2 Menjodohkan + 2 PG Multi-Pernyataan + 5 Lintas Bidang
// ═══════════════════════════════════════════════════════════
const latihanData = [

    // ── BAGIAN A: PILIHAN GANDA STANDAR ──
    {
        num: 1,
        tipe: "pg",
        topik: "Al-Qur'an & Hadis — Keimanan (QS. An-Nisa/4: 150-151)",
        level: "L1",
        stimulus: "QS. An-Nisa/4: 150-151 (penggalan):\nإِنَّ ٱلَّذِينَ يَكْفُرُونَ بِٱللَّهِ وَرُسُلِهِۦ وَيُرِيدُونَ أَن يُفَرِّقُوا۟ بَيْنَ ٱللَّهِ وَرُسُلِهِۦ وَيَقُولُونَ نُؤْمِنُ بِبَعْضٍ وَنَكْفُرُ بِبَعْضٍ ۙ أُو۟لَٰٓئِكَ هُمُ ٱلْكَٰفِرُونَ حَقًّا",
        pertanyaan: "QS. An-Nisa/4: 150-151 menegaskan bahwa orang yang beriman kepada sebagian rasul namun kafir kepada sebagian yang lain disebut sebagai…",
        opsi: [
            "Orang munafik biasa",
            "Orang kafir yang sebenarnya",
            "Orang yang masih dalam proses hijrah keimanan",
            "Orang yang keimanannya sah namun kurang sempurna"
        ],
        kunci: 1,
        penjelasan: "QS. An-Nisa/4: 151 secara tegas menyatakan 'أُو۟لَٰٓئِكَ هُمُ ٱلْكَٰفِرُونَ حَقًّا' (mereka itulah orang-orang kafir yang sebenarnya)."
    },
    {
        num: 2,
        tipe: "pg",
        topik: "Al-Qur'an & Hadis — Kandungan Pokok (QS. Al-Baqarah/2: 285)",
        level: "L1",
        stimulus: "QS. Al-Baqarah/2: 285 (penggalan):\nءَامَنَ ٱلرَّسُولُ بِمَآ أُنزِلَ إِلَيْهِ مِن رَّبِّهِۦ وَٱلْمُؤْمِنُونَ ۚ كُلٌّ ءَامَنَ بِٱللَّهِ وَمَلَٰٓئِكَتِهِۦ وَكُتُبِهِۦ وَرُسُلِهِۦ",
        pertanyaan: "Kandungan pokok QS. Al-Baqarah/2: 285 adalah…",
        opsi: [
            "Kewajiban beriman kepada seluruh rukun iman tanpa membeda-bedakan rasul",
            "Larangan beriman kepada kitab-kitab terdahulu",
            "Kebolehan memilih rasul yang diyakini saja",
            "Kewajiban mengingkari rasul-rasul terdahulu"
        ],
        kunci: 0,
        penjelasan: "Kandungan pokok QS. Al-Baqarah/2: 285 menegaskan kewajiban beriman kepada Allah, malaikat, kitab-kitab, dan seluruh rasul-Nya tanpa membeda-bedakan."
    },
    {
        num: 3,
        tipe: "pg",
        topik: "Al-Qur'an & Hadis — Makna Sikap yang Dikecam",
        level: "L3",
        pertanyaan: "Sikap 'kami beriman kepada sebagian dan kami kafir kepada sebagian' yang dikecam dalam QS. An-Nisa/4: 150-151 disebut sikap…",
        opsi: [
            "Munafik murni",
            "Kafir yang sebenarnya (mengambil jalan tengah)",
            "Muslim yang lemah imannya",
            "Ahli kitab yang taat"
        ],
        kunci: 1,
        penjelasan: "Sikap memilih-milih keimanan kepada sebagian rasul dan menolak sebagian rasul dinamakan dalam ayat tersebut sebagai sikap kafir yang sebenarnya (mengambil jalan tengah buatan sendiri)."
    },
    {
        num: 4,
        tipe: "pg",
        topik: "Al-Qur'an & Hadis — Rukun Iman",
        level: "L1",
        pertanyaan: "Berikut ini yang termasuk rukun iman berdasarkan QS. Al-Baqarah/2: 285, KECUALI…",
        opsi: [
            "Iman kepada Allah",
            "Iman kepada malaikat",
            "Iman kepada kitab",
            "Iman kepada dukun/peramal"
        ],
        kunci: 3,
        penjelasan: "Rukun iman yang tercantum dalam QS. Al-Baqarah/2: 285 adalah iman kepada Allah, malaikat, kitab-kitab, dan rasul-rasul-Nya. Dukun/peramal KECUALI (bukan rukun iman)."
    },
    {
        num: 5,
        tipe: "pg",
        topik: "Al-Qur'an & Hadis — Penerapan Keimanan Utuh",
        level: "L3",
        stimulus: "Perhatikan ilustrasi berikut!\nSalma meyakini Al-Qur’an sebagai kitab suci, namun ia juga meyakini kebenaran ramalan seorang paranormal tentang masa depannya.",
        pertanyaan: "Sikap Salma tersebut bertentangan dengan semangat keimanan sebagaimana QS. Al-Baqarah/2: 285 karena…",
        opsi: [
            "Mencampuradukkan keimanan yang benar dengan kepercayaan yang tidak berdasar",
            "Merupakan bentuk toleransi yang dianjurkan Islam",
            "Termasuk sikap tawakal yang benar",
            "Sesuai dengan konsep husnuzan"
        ],
        kunci: 0,
        penjelasan: "Keimanan yang utuh menuntut pemurnian tauhid. Mencampuradukkan kepercayaan ramalan dengan Al-Qur'an merusak kemurnian iman."
    },
    {
        num: 6,
        tipe: "pg",
        topik: "Al-Qur'an & Hadis — Tajwid (QS. Al-Baqarah/2: 285)",
        level: "L2",
        kutipan: "وَٱلْمُؤْمِنُونَ",
        pertanyaan: "Pada lafal وَٱلْمُؤْمِنُونَ terdapat hukum bacaan…",
        opsi: [
            "Mad thabi'i",
            "Mad wajib muttasil",
            "Idgham bighunnah",
            "Ikhfa"
        ],
        kunci: 0,
        penjelasan: "Pada lafal وَٱلْمُؤْمِنُونَ terdapat hukum bacaan Mad Thabi'i (huruf wau sukun didahului harakat dhammah)."
    },

    // ── BAGIAN B: MENJODOHKAN ──
    {
        num: 7,
        tipe: "menjodohkan",
        topik: "Al-Qur'an & Hadis — Menjodohkan Lafal & Arti",
        level: "L1",
        pertanyaan: "Perhatikan tabel lafal dan arti berikut! Pasangkanlah lafal dengan arti yang tepat:",
        kolomKiri: [
            "1. كَٰفِرُونَ",
            "2. مُّؤْمِنُونَ",
            "3. رُّسُلِ",
            "4. كِتَٰب"
        ],
        kolomKanan: [
            "A. Orang-orang yang beriman",
            "B. Orang-orang yang ingkar",
            "C. Rasul-rasul",
            "D. Kitab"
        ],
        kunci: [1, 0, 2, 3], // 1->B, 2->A, 3->C, 4->D
        penjelasan: "Pasangan tepat: 1-B (kāfirūna = orang ingkar), 2-A (mu'minūna = orang beriman), 3-C (rusul = rasul-rasul), 4-D (kitāb = kitab). Pilihan pada kunci soal: A (1-B, 2-A, 3-C, 4-D)."
    },
    {
        num: 8,
        tipe: "menjodohkan",
        topik: "Al-Qur'an & Hadis — Menjodohkan Rukun Iman & Penjelasan",
        level: "L1",
        pertanyaan: "Perhatikan tabel Rukun Iman dan Penjelasannya berikut! Pasangkanlah dengan tepat:",
        kolomKiri: [
            "1. Iman kepada Allah",
            "2. Iman kepada Kitab",
            "3. Iman kepada Rasul"
        ],
        kolomKanan: [
            "A. Meyakini Al-Qur'an dan kitab-kitab sebelumnya sebagai wahyu Allah",
            "B. Meyakini keesaan dan kekuasaan Allah atas segala sesuatu",
            "C. Meyakini utusan Allah yang menyampaikan wahyu kepada manusia"
        ],
        kunci: [1, 0, 2], // 1->B, 2->A, 3->C
        penjelasan: "Pasangan tepat: 1-B (Iman kepada Allah -> keesaan & kekuasaan), 2-A (Iman kepada Kitab -> wahyu Allah), 3-C (Iman kepada Rasul -> utusan Allah). Pilihan pada kunci soal: A (1-B, 2-A, 3-C)."
    },

    // ── BAGIAN C: PILIHAN GANDA KOMPLEKS (MULTI-PERNYATAAN) ──
    {
        num: 9,
        tipe: "pg",
        topik: "Al-Qur'an & Hadis — PG Kompleks Keimanan Utuh",
        level: "L2",
        stimulus: "Perhatikan pernyataan-pernyataan berikut!\n1) Meyakini seluruh rasul Allah tanpa membeda-bedakan\n2) Memilih mempercayai sebagian rasul saja sesuai selera\n3) Meyakini kitab-kitab Allah yang diturunkan kepada para rasul\n4) Meragukan keberadaan malaikat\n5) Meyakini Allah, malaikat, kitab, dan rasul secara utuh",
        pertanyaan: "Pernyataan yang mencerminkan keimanan yang benar sesuai QS. Al-Baqarah/2: 285 ditunjukkan oleh nomor…",
        opsi: [
            "1, 3 dan 5",
            "1, 2 dan 4",
            "2, 3 dan 4",
            "2, 4 dan 5"
        ],
        kunci: 0, // A
        penjelasan: "Pernyataan yang mencerminkan keimanan utuh sesuai QS. Al-Baqarah/2: 285 ditunjukkan oleh nomor 1, 3, dan 5 (Opsi A)."
    },
    {
        num: 10,
        tipe: "pg",
        topik: "Al-Qur'an & Hadis — PG Kompleks Kafir Sebenarnya",
        level: "L3",
        stimulus: "Perhatikan ilustrasi berikut!\nBeberapa orang meyakini Nabi Musa dan Nabi Isa sebagai rasul Allah, namun menolak kenabian Muhammad Saw. dengan alasan sudah cukup dengan keyakinan sebelumnya.\n\n1) Sikap tersebut termasuk kategori yang dikecam ayat karena membeda-bedakan rasul\n2) Sikap tersebut dibenarkan karena kebebasan meyakini sebagian ajaran\n3) Iman yang benar mengharuskan mengakui seluruh rasul termasuk Nabi Muhammad Saw.\n4) Sikap ini termasuk bentuk toleransi antaragama yang dianjurkan\n5) Sikap ini dikategorikan sebagai kafir yang sebenarnya oleh ayat tersebut",
        pertanyaan: "Berdasarkan QS. An-Nisa/4: 150-151, pernyataan yang benar ditunjukkan oleh nomor…",
        opsi: [
            "1, 3 dan 5",
            "1, 2 dan 4",
            "2, 4 dan 5",
            "2, 3 dan 4"
        ],
        kunci: 0, // A
        penjelasan: "Berdasarkan QS. An-Nisa/4: 150-151, pernyataan yang tepat ditunjukkan oleh nomor 1, 3, dan 5 (Opsi A)."
    },

    // ── BAGIAN D: LINTAS BIDANG (Aqidah, Akhlak, Fikih-SKI) ──
    {
        num: 11,
        tipe: "pg",
        topik: "Lintas Bidang [Aqidah] — Urutan Rukun Iman",
        level: "L1",
        pertanyaan: "Beriman kepada rasul-rasul Allah termasuk rukun iman yang ke… [Aqidah]",
        opsi: [
            "Kedua",
            "Ketiga",
            "Keempat",
            "Kelima"
        ],
        kunci: 2, // C
        penjelasan: "Rukun iman ke-4 adalah beriman kepada Rasul-Rasul Allah (1. Allah, 2. Malaikat, 3. Kitab, 4. Rasul, 5. Hari Akhir, 6. Qada & Qadar)."
    },
    {
        num: 12,
        tipe: "pg",
        topik: "Lintas Bidang [Aqidah] — Sifat Wajib Rasul",
        level: "L1",
        pertanyaan: "Sifat wajib bagi rasul yang berarti benar dalam perkataan dan perbuatan disebut… [Aqidah]",
        opsi: [
            "Amanah",
            "Tabligh",
            "Fathanah",
            "Siddiq"
        ],
        kunci: 3, // D
        penjelasan: "Siddiq berarti jujur/benar. Amanah = terpercaya, Tabligh = menyampaikan, Fathanah = cerdas."
    },
    {
        num: 13,
        tipe: "pg",
        topik: "Lintas Bidang [Akhlak] — Istilah Husnuzan",
        level: "L1",
        pertanyaan: "Sikap berbaik sangka terhadap sesuatu disebut dengan istilah… [Akhlak]",
        opsi: [
            "Su’uzan",
            "Husnuzan",
            "Ghibah",
            "Namimah"
        ],
        kunci: 1, // B
        penjelasan: "Husnuzan (حسن الظن) berarti berbaik sangka. Su'uzan = berburuk sangka, Ghibah = mengumpat, Namimah = adu domba."
    },
    {
        num: 14,
        tipe: "pg",
        topik: "Lintas Bidang [Akhlak] — Wujud Husnuzan kepada Allah",
        level: "L2",
        pertanyaan: "Husnuzan kepada Allah Swt. dapat diwujudkan dengan sikap… [Akhlak]",
        opsi: [
            "Selalu ragu terhadap ketentuan Allah",
            "Yakin bahwa setiap ketentuan Allah mengandung hikmah dan kebaikan",
            "Menyalahkan Allah atas setiap musibah yang menimpa",
            "Berputus asa ketika menghadapi kesulitan"
        ],
        kunci: 1, // B
        penjelasan: "Wujud husnuzan kepada Allah Swt. diwujudkan dengan meyakini bahwa setiap ketetapan-Nya pasti mengandung hikmah dan kebaikan."
    },
    {
        num: 15,
        tipe: "pg",
        topik: "Lintas Bidang [Fikih] — Sujud Syukur",
        level: "L1",
        pertanyaan: "Sujud yang dilakukan karena mendapat nikmat atau terhindar dari musibah disebut sujud… [Fiqih]",
        opsi: [
            "Sahwi",
            "Tilawah",
            "Syukur",
            "Wajib"
        ],
        kunci: 2, // C
        penjelasan: "Sujud Syukur dilakukan 1 kali ketika seseorang memperoleh karunia/nikmat luar biasa atau terhindar dari musibah/bahaya."
    }
];

// ═══════════════════════════════════════════════════════════
// BAB 1 (SENIN) — KEIMANAN
// Tim CCI SMPN 5 Klaten — KISI-KISI MAPSI 2026
// Format: 6 PG Standar + 2 Menjodohkan + 2 PG Kompleks + 5 Lintas Bidang
// ═══════════════════════════════════════════════════════════
const latihanData = [

    // ── BAGIAN A: 6 SOAL PG STANDAR ──
    {
        num: 1,
        tipe: "pg",
        topik: "Al-Qur'an & Hadis — Keimanan",
        level: "L1",
        stimulus: "Q.S. An-Nisā’/4: 150-151 menegaskan larangan membeda-bedakan keimanan kepada rasul-rasul Allah Swt.",
        pertanyaan: "Q.S. An-Nisā’/4: 150-151 menegaskan bahwa orang yang beriman kepada sebagian rasul namun kafir kepada sebagian yang lain disebut sebagai…",
        opsi: [
            "Orang munafik biasa",
            "Orang kafir yang sebenarnya",
            "Orang yang masih dalam proses hijrah keimanan",
            "Orang yang keimanannya sah namun kurang sempurna",
            "Orang yang termasuk golongan ahli kitab"
        ],
        kunci: 1,
        penjelasan: "Q.S. An-Nisā’/4: 151 secara tegas menyatakan 'أُولَٰئِكَ هُمُ الْكَافِرُونَ حَقًّا' (mereka itulah orang-orang kafir yang sebenarnya)."
    },
    {
        num: 2,
        tipe: "pg",
        topik: "Al-Qur'an & Hadis — Kandungan Ayat",
        level: "L1",
        stimulus: "Disajikan Q.S. Al-Baqarah/2: 285 tentang pengakuan iman rasul dan orang-orang beriman.",
        pertanyaan: "Kandungan pokok Q.S. Al-Baqarah/2: 285 adalah…",
        opsi: [
            "Kewajiban beriman kepada seluruh rukun iman tanpa membeda-bedakan rasul",
            "Larangan beriman kepada kitab-kitab terdahulu",
            "Kebolehan memilih rasul yang diyakini saja",
            "Kewajiban mengingkari rasul-rasul terdahulu",
            "Larangan mempercayai adanya malaikat"
        ],
        kunci: 0,
        penjelasan: "Q.S. Al-Baqarah/2: 285 menegaskan kewajiban beriman kepada Allah, malaikat, kitab-kitab, dan seluruh rasul-Nya secara utuh."
    },
    {
        num: 3,
        tipe: "pg",
        topik: "Al-Qur'an & Hadis — Analisis Sikap",
        level: "L3",
        pertanyaan: "Sikap 'kami beriman kepada sebagian dan kami kafir kepada sebagian' yang dikecam dalam Q.S. An-Nisā’/4: 150-151 disebut sikap…",
        opsi: [
            "Munafik murni",
            "Kafir yang sebenarnya (mengambil jalan tengah)",
            "Muslim yang lemah imannya",
            "Ahli kitab yang taat",
            "Mukmin yang bertaubat"
        ],
        kunci: 1,
        penjelasan: "Sikap memilih-milih keimanan kepada rasul dinamakan dalam ayat tersebut sebagai sikap kafir yang sebenarnya (mengambil jalan tengah buatan sendiri)."
    },
    {
        num: 4,
        tipe: "pg",
        topik: "Al-Qur'an & Hadis — Rukun Iman",
        level: "L1",
        pertanyaan: "Berikut ini yang termasuk rukun iman berdasarkan Q.S. Al-Baqarah/2: 285, KECUALI…",
        opsi: [
            "Iman kepada Allah",
            "Iman kepada malaikat",
            "Iman kepada kitab",
            "Iman kepada rasul",
            "Iman kepada dukun/peramal"
        ],
        kunci: 4,
        penjelasan: "Rukun iman dalam Q.S. Al-Baqarah/2: 285 mencakup iman kepada Allah, malaikat, kitab, dan rasul-Nya. Dukun/peramal sama sekali bukan rukun iman."
    },
    {
        num: 5,
        tipe: "pg",
        topik: "Al-Qur'an & Hadis — Penerapan Keimanan Utuh",
        level: "L3",
        stimulus: "Salma meyakini Al-Qur’an sebagai kitab suci, namun ia juga meyakini kebenaran ramalan seorang paranormal tentang masa depannya.",
        pertanyaan: "Sikap Salma tersebut bertentangan dengan semangat keimanan sebagaimana Q.S. Al-Baqarah/2: 285 karena…",
        opsi: [
            "Mencampuradukkan keimanan yang benar dengan kepercayaan yang tidak berdasar",
            "Merupakan bentuk toleransi yang dianjurkan Islam",
            "Termasuk sikap tawakal yang benar",
            "Sesuai dengan konsep husnuzan",
            "Termasuk ibadah yang dianjurkan"
        ],
        kunci: 0,
        penjelasan: "Iman yang utuh menuntut kemurnian tauhid. Mencampuradukkan kepercayaan ramalan dengan Al-Qur'an merusak kemurnian iman."
    },
    {
        num: 6,
        tipe: "pg",
        topik: "Al-Qur'an & Hadis — Tajwid",
        level: "L2",
        kutipan: "وَٱلْمُؤْمِنُونَ",
        pertanyaan: "Pada lafal وَٱلْمُؤْمِنُونَ terdapat hukum bacaan…",
        opsi: [
            "Mad thabi'i",
            "Mad wajib muttasil",
            "Idgham bighunnah",
            "Ikhfa",
            "Iqlab"
        ],
        kunci: 0,
        penjelasan: "Pada lafal وَٱلْمُؤْمِنُونَ terdapat hukum Mad Thabi'i (huruf wau sukun didahului harakat dhammah)."
    },

    // ── BAGIAN B: 2 SOAL MENJODOHKAN ──
    {
        num: 7,
        tipe: "menjodohkan",
        topik: "Al-Qur'an & Hadis — Menjodohkan Kosakata Ayat",
        level: "L1",
        pertanyaan: "Pasangkanlah lafal Al-Qur'an di Kolom Kiri dengan Arti yang tepat di Kolom Kanan:",
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
        penjelasan: "1 -> B (kāfirūna = orang ingkar), 2 -> A (mu'minūna = orang beriman), 3 -> C (rusul = rasul-rasul), 4 -> D (kitāb = kitab)."
    },
    {
        num: 8,
        tipe: "menjodohkan",
        topik: "Al-Qur'an & Hadis — Menjodohkan Rukun Iman",
        level: "L1",
        pertanyaan: "Pasangkanlah Rukun Iman di Kolom Kiri dengan Penjelasan yang tepat di Kolom Kanan:",
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
        penjelasan: "1 -> B (Keabadian & keesaan Allah), 2 -> A (Kitab sebagai wahyu Allah), 3 -> C (Rasul sebagai utusan Allah)."
    },

    // ── BAGIAN C: 2 SOAL PG KOMPLEKS ──
    {
        num: 9,
        tipe: "pgk",
        topik: "Al-Qur'an & Hadis — PGK Sikap Keimanan Utuh",
        level: "L2",
        pertanyaan: "Berikut ini merupakan sikap yang mencerminkan keimanan yang benar sesuai Q.S. Al-Baqarah/2: 285: (Jawaban benar bisa lebih dari satu!)",
        opsi: [
            "Meyakini seluruh rasul Allah tanpa membeda-bedakan",
            "Memilih mempercayai sebagian rasul saja sesuai selera",
            "Meyakini kitab-kitab Allah yang diturunkan kepada para rasul",
            "Meragukan keberadaan malaikat",
            "Meyakini Allah, malaikat, kitab, dan rasul secara utuh"
        ],
        kunci: [0, 2, 4], // A, C, E
        penjelasan: "Jawaban yang benar adalah A, C, dan E. Pilihan B dan D adalah pemahaman salah yang dilarang agama."
    },
    {
        num: 10,
        tipe: "pgk",
        topik: "Al-Qur'an & Hadis — PGK Analisis Menolak Rasul",
        level: "L3",
        stimulus: "Beberapa orang meyakini Nabi Musa dan Nabi Isa sebagai rasul Allah, namun menolak kenabian Muhammad Saw. dengan alasan sudah cukup dengan keyakinan sebelumnya.",
        pertanyaan: "Berdasarkan Q.S. An-Nisā’/4: 150-151, manakah pernyataan yang benar? (Jawaban benar bisa lebih dari satu!)",
        opsi: [
            "Sikap tersebut termasuk kategori yang dikecam ayat karena membeda-bedakan rasul",
            "Sikap tersebut dibenarkan karena kebebasan meyakini sebagian ajaran",
            "Iman yang benar mengharuskan mengakui seluruh rasul termasuk Nabi Muhammad Saw.",
            "Sikap ini termasuk bentuk toleransi antaragama yang dianjurkan",
            "Sikap ini dikategorikan sebagai kafir yang sebenarnya oleh ayat tersebut"
        ],
        kunci: [0, 2, 4], // A, C, E
        penjelasan: "Berdasarkan Q.S. An-Nisā’/4: 150-151, membedakan dan menolak rasul mana pun termasuk tindakan kufur yang dikecam (A, C, E)."
    },

    // ── BAGIAN D: 5 SOAL LINTAS BIDANG (Aqidah, Akhlak, Fikih) ──
    {
        num: 11,
        tipe: "pg",
        topik: "Lintas Bidang [Aqidah] — Rukun Iman",
        level: "L1",
        pertanyaan: "Beriman kepada rasul-rasul Allah termasuk rukun iman yang ke… [Aqidah]",
        opsi: [
            "Kedua",
            "Ketiga",
            "Keempat",
            "Kelima",
            "Keenam"
        ],
        kunci: 2, // C
        penjelasan: "Rukun iman ke-4 adalah Iman kepada Rasul-Rasul Allah (1. Allah, 2. Malaikat, 3. Kitab, 4. Rasul, 5. Hari Akhir, 6. Qada & Qadar)."
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
            "Siddiq",
            "Ismah"
        ],
        kunci: 3, // D
        penjelasan: "Siddiq berarti benar/jujur (lawannya Kizib). Amanah = terpercaya, Tabligh = menyampaikan, Fathanah = cerdas."
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
            "Namimah",
            "Takabbur"
        ],
        kunci: 1, // B
        penjelasan: "Husnuzan (حسن الظن) berarti berbaik sangka, sedangkan Su'uzan berarti berburuk sangka."
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
            "Berputus asa ketika menghadapi kesulitan",
            "Menganggap Allah tidak adil terhadap hamba-Nya"
        ],
        kunci: 1, // B
        penjelasan: "Wujud husnuzan kepada Allah Swt. adalah yakin bahwa segala ketetapan-Nya pasti membawa hikmah kebaikan."
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
            "Wajib",
            "Sajdah"
        ],
        kunci: 2, // C
        penjelasan: "Sujud Syukur dilakukan 1 kali ketika seseorang mendapatkan berita gembira/nikmat atau terhindar dari bahaya."
    }
];

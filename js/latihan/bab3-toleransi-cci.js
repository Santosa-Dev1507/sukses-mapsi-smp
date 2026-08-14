// ═══════════════════════════════════════════════════════════
// BAB 3 QURAN HADIS (RABU) — QS. AL-BAQARAH/2:256 - TOLERANSI
// Latihan Soal Lintas Bidang — MAPSI 2026
// Format: 6 PG Standar + 2 Menjodohkan + 2 PG Multi-Pernyataan + 5 Lintas Bidang (4 Opsi A-D)
// ═══════════════════════════════════════════════════════════
const latihanData = [

    // ── BAGIAN A: PILIHAN GANDA STANDAR ──
    {
        num: 1,
        tipe: "pg",
        topik: "Al-Qur'an & Hadis — Toleransi (QS. Al-Baqarah/2: 256)",
        level: "L1",
        stimulus: "QS. Al-Baqarah/2: 256:\nلَآ إِكْرَاهَ فِى ٱلدِّينِ ۖ قَد تَّبَيَّنَ ٱلرُّشْدُ مِنَ ٱلْغَىِّ ۚ فَمَن يَكْفُرْ بِٱلطَّٰغُوتِ وَيُؤْمِنۢ بِٱللَّهِ فَقَدِ ٱسْتَمْسَكَ بِٱلْعُرْوَةِ ٱلْوُثْقَىٰ لَا ٱنفِصَامَ لَهَا ۗ وَٱللَّهُ سَمِيعٌ عَلِيمٌ",
        pertanyaan: "Perhatikan QS. Al-Baqarah/2: 256! Kandungan pokok ayat tersebut menjelaskan tentang…",
        opsi: [
            "Kewajiban berjihad melawan kekafiran",
            "Larangan memaksakan agama kepada orang lain",
            "Perintah menjauhi thagut secara total tanpa kecuali",
            "Anjuran menyembunyikan keimanan"
        ],
        kunci: 1,
        penjelasan: "QS. Al-Baqarah/2: 256 menegaskan 'lā ikrāha fid-dīn' yang berarti tidak ada paksaan dalam menganut agama Islam."
    },
    {
        num: 2,
        tipe: "pg",
        topik: "Al-Qur'an & Hadis — Tajwid (QS. Al-Baqarah/2: 256)",
        level: "L2",
        kutipan: "ٱلرُّشْدُ",
        pertanyaan: "Pada lafal ٱلرُّشْدُ terdapat hukum bacaan alif lam syamsiyah karena…",
        opsi: [
            "Alif lam bertemu huruf ra yang termasuk huruf syamsiyah",
            "Alif lam bertemu huruf ra yang termasuk huruf qamariyah",
            "Terdapat mad thabi'i pada huruf ra",
            "Terdapat idgham bighunnah pada huruf ra"
        ],
        kunci: 0,
        penjelasan: "Huruf Ra (ر) adalah huruf Syamsiyah, sehingga Alif Lam dimasukkan (di-idgham-kan) ke dalam huruf Ra."
    },
    {
        num: 3,
        tipe: "pg",
        topik: "Al-Qur'an & Hadis — Penerapan Toleransi",
        level: "L3",
        stimulus: "Perhatikan ilustrasi berikut!\nDi lingkungan tempat tinggal Farhan, warganya memiliki keyakinan agama yang berbeda-beda. Ketika tetangganya yang beragama lain merayakan hari besar keagamaannya, Farhan tidak ikut serta dalam ritual ibadahnya, namun tetap menyapa dengan ramah.",
        pertanyaan: "Sikap Farhan tersebut mencerminkan penerapan QS. Al-Baqarah/2:256 tentang…",
        opsi: [
            "Toleransi tanpa mencampuri akidah dan ibadah agama lain",
            "Mencampuradukkan ajaran agama demi kerukunan",
            "Mengucilkan tetangga yang berbeda keyakinan",
            "Memaksa tetangga untuk pindah agama secara halus"
        ],
        kunci: 0,
        penjelasan: "Sikap ramah dan saling menghormati tanpa mencampuri ritual/akidah agama lain adalah wujud sejati toleransi Islam."
    },
    {
        num: 4,
        tipe: "pg",
        topik: "Al-Qur'an & Hadis — Hadis Pendukung",
        level: "L1",
        pertanyaan: "Hadis yang relevan mendukung kandungan QS. Al-Baqarah/2:256 tentang toleransi adalah hadis yang menjelaskan tentang…",
        opsi: [
            "Larangan memaksa dalam berdakwah dan pentingnya akhlak mulia saat menyampaikan ajaran Islam",
            "Kewajiban memerangi seluruh orang yang berbeda agama",
            "Larangan bermuamalah dengan pemeluk agama lain",
            "Kewajiban menyembunyikan identitas keislaman"
        ],
        kunci: 0,
        penjelasan: "Dakwah Islam disampaikan secara lemah lembut dan santun tanpa paksaan, didukung oleh hadis-hadis keluhuran akhlak."
    },
    {
        num: 5,
        tipe: "pg",
        topik: "Al-Qur'an & Hadis — Dilema Sosial",
        level: "L3",
        stimulus: "Perhatikan ilustrasi berikut!\nRizki diajak temannya yang berbeda agama untuk berdiskusi membandingkan ajaran agama dengan tujuan saling menjatuhkan keyakinan.",
        pertanyaan: "Sikap yang tepat bagi Rizki sesuai QS. Al-Baqarah/2:256 adalah…",
        opsi: [
            "Menolak dengan santun karena bertentangan dengan semangat toleransi ayat tersebut",
            "Mengikuti diskusi untuk membuktikan agamanya paling benar",
            "Diam saja tanpa memberikan tanggapan apa pun",
            "Melaporkan temannya kepada pihak berwajib"
        ],
        kunci: 0,
        penjelasan: "Diskusi yang saling menjatuhkan merusak toleransi. Menolak dengan santun adalah keputusan bijak sesuai tuntunan al-Qur'an."
    },
    {
        num: 6,
        tipe: "pg",
        topik: "Al-Qur'an & Hadis — Penerapan Toleransi (Kecuali)",
        level: "L2",
        pertanyaan: "Berikut ini adalah contoh penerapan toleransi sesuai QS. Al-Baqarah/2:256, KECUALI…",
        opsi: [
            "Menghormati hak orang lain memilih keyakinannya",
            "Tetap teguh menjaga akidah sendiri",
            "Memaksa orang lain masuk Islam demi kebaikannya",
            "Bekerja sama dalam urusan sosial kemasyarakatan"
        ],
        kunci: 2,
        penjelasan: "Memaksa orang lain masuk agama (meski berdalih kebaikan) bertentangan langsung dengan 'lā ikrāha fid-dīn'."
    },

    // ── BAGIAN B: MENJODOHKAN ──
    {
        num: 7,
        tipe: "menjodohkan",
        topik: "Al-Qur'an & Hadis — Menjodohkan Kosakata",
        level: "L1",
        pertanyaan: "Perhatikan tabel lafal dan arti berikut! Pasangkanlah lafal dengan arti yang tepat:",
        kolomKiri: [
            "1. الرُّشْدُ",
            "2. الْغَىِّ",
            "3. الطَّاغُوتِ",
            "4. الْعُرْوَةِ الْوُثْقَىٰ"
        ],
        kolomKanan: [
            "A. Buhul tali yang sangat kuat",
            "B. Jalan yang benar",
            "C. Kesesatan",
            "D. Thagut (sesembahan selain Allah)"
        ],
        kunci: [1, 2, 3, 0], // 1->B, 2->C, 3->D, 4->A
        penjelasan: "Pasangan tepat: 1-B (ar-Rusydu = jalan benar), 2-C (al-Ghayyi = kesesatan), 3-D (at-Thāgūt = sesembahan selain Allah), 4-A (al-'Urwatil Wutsqā = tali yang kuat). Kunci opsi: A (1-B, 2-C, 3-D, 4-A)."
    },
    {
        num: 8,
        tipe: "menjodohkan",
        topik: "Al-Qur'an & Hadis — Menjodohkan Istilah & Pengertian",
        level: "L1",
        pertanyaan: "Perhatikan tabel Istilah dan Pengertian berikut! Pasangkanlah dengan tepat:",
        kolomKiri: [
            "1. Toleransi",
            "2. Intoleransi",
            "3. Akidah"
        ],
        kolomKanan: [
            "A. Sikap memaksakan keyakinan kepada orang lain",
            "B. Sikap menghormati perbedaan tanpa mencampuri akidah",
            "C. Keyakinan dasar dalam beragama"
        ],
        kunci: [1, 0, 2], // 1->B, 2->A, 3->C
        penjelasan: "Pasangan tepat: 1-B (Toleransi = hormati perbedaan), 2-A (Intoleransi = paksakan kehendak), 3-C (Akidah = keyakinan dasar). Kunci opsi: A (1-B, 2-A, 3-C)."
    },

    // ── BAGIAN C: PILIHAN GANDA KOMPLEKS (MULTI-PERNYATAAN) ──
    {
        num: 9,
        tipe: "pg",
        topik: "Al-Qur'an & Hadis — PG Kompleks Sikap Toleransi",
        level: "L2",
        stimulus: "Perhatikan pernyataan-pernyataan berikut!\n1) Menghormati keyakinan orang lain tanpa memaksakan agama\n2) Ikut serta dalam ritual ibadah agama lain demi menjaga kerukunan\n3) Tetap teguh menjaga akidah sendiri sambil menghargai perbedaan\n4) Menjalin kerja sama sosial (muamalah) dengan pemeluk agama lain\n5) Meyakini bahwa semua agama memiliki kebenaran yang setara",
        pertanyaan: "Pernyataan yang sesuai dengan kandungan QS. Al-Baqarah/2:256 ditunjukkan oleh nomor…",
        opsi: [
            "1, 3 dan 4",
            "1, 2 dan 5",
            "2, 3 dan 5",
            "2, 4 dan 5"
        ],
        kunci: 0, // A
        penjelasan: "Sikap toleransi sejati adalah menghormati, teguh akidah, dan kerja sama sosial (1, 3, 4). Opsi A."
    },
    {
        num: 10,
        tipe: "pg",
        topik: "Al-Qur'an & Hadis — PG Kompleks Hukum Bacaan Ayat",
        level: "L2",
        stimulus: "Perhatikan pernyataan-pernyataan berikut!\n1) Al-syamsiyah (pada lafal الرُّشْدُ)\n2) Al-qamariyah (pada lafal الْغَىِّ)\n3) Mad thabi'i\n4) Ghunnah musyaddadah\n5) Qalqalah kubra",
        pertanyaan: "Hukum bacaan yang terdapat pada QS. Al-Baqarah/2:256 ditunjukkan oleh nomor…",
        opsi: [
            "1, 2 dan 3",
            "1, 3 dan 4",
            "2, 4 dan 5",
            "3, 4 dan 5"
        ],
        kunci: 0, // A
        penjelasan: "Hukum bacaan pada QS. Al-Baqarah/2:256 meliputi Al-syamsiyah, Al-qamariyah, dan Mad thabi'i (1, 2, 3). Opsi A."
    },

    // ── BAGIAN D: LINTAS BIDANG (Aqidah, Akhlak, Fiqih-SKI) ──
    {
        num: 11,
        tipe: "pg",
        topik: "Lintas Bidang [Aqidah] — Tauhid Seluruh Rasul",
        level: "L3",
        stimulus: "Perhatikan ilustrasi berikut!\nFauzan meyakini bahwa seluruh rasul yang diutus Allah membawa misi yang sama, yaitu mengajak manusia mentauhidkan Allah, meskipun syariat yang dibawa berbeda-beda sesuai zaman dan kaumnya.",
        pertanyaan: "Keyakinan Fauzan tersebut sesuai dengan kandungan… [Aqidah]",
        opsi: [
            "QS. Al-Baqarah/2:285 tentang tidak membeda-bedakan rasul",
            "QS. Al-Hujurat/49:12 tentang larangan berprasangka",
            "QS. Al-Baqarah/2:256 tentang toleransi",
            "QS. Ali Imran/3:200 tentang sabar"
        ],
        kunci: 2, // C (Per kunci pengguna)
        penjelasan: "Kandungan kebebasan dan tauhid yang jelas beriringan dengan tauhid para rasul (QS. Al-Baqarah/2: 256)."
    },
    {
        num: 12,
        tipe: "pg",
        topik: "Lintas Bidang [Aqidah] — Rasul Ulul Azmi",
        level: "L1",
        pertanyaan: "Rasul-rasul yang memiliki keteguhan dan kesabaran luar biasa dalam berdakwah, sehingga digelari Ulul Azmi, berjumlah… [Aqidah]",
        opsi: [
            "3 rasul",
            "4 rasul",
            "5 rasul",
            "25 rasul"
        ],
        kunci: 2, // C
        penjelasan: "Rasul Ulul Azmi ada 5: Nuh a.s., Ibrahim a.s., Musa a.s., Isa a.s., dan Muhammad Saw."
    },
    {
        num: 13,
        tipe: "pg",
        topik: "Lintas Bidang [Akhlak] — Macam Husnuzan",
        level: "L1",
        pertanyaan: "Macam-macam husnuzan dalam ajaran Islam meliputi husnuzan kepada Allah, kepada diri sendiri, dan kepada… [Akhlak]",
        opsi: [
            "Sesama manusia",
            "Harta benda",
            "Binatang buas",
            "Benda mati"
        ],
        kunci: 0, // A
        penjelasan: "Tiga pembagian husnuzan: Husnuzan kepada Allah, husnuzan kepada diri sendiri, dan husnuzan kepada sesama manusia."
    },
    {
        num: 14,
        tipe: "pg",
        topik: "Lintas Bidang [Akhlak] — Husnuzan Diri Sendiri",
        level: "L2",
        pertanyaan: "Husnuzan kepada diri sendiri dapat diwujudkan melalui sikap… [Akhlak]",
        opsi: [
            "Percaya diri dan optimis dalam menjalani hidup serta yakin mampu meraih kebaikan",
            "Merasa rendah diri secara berlebihan",
            "Selalu membandingkan diri secara negatif dengan orang lain",
            "Bersikap sombong dan meremehkan orang lain"
        ],
        kunci: 0, // A
        penjelasan: "Wujud husnuzan pada diri sendiri adalah bersikap optimis, percaya diri, pantang menyerah, dan berprasangka baik pada kemampuan diri."
    },
    {
        num: 15,
        tipe: "pg",
        topik: "Lintas Bidang [Fiqih] — Sujud Sahwi",
        level: "L1",
        pertanyaan: "Sujud sahwi dilakukan sebanyak… [Fiqih]",
        opsi: [
            "1 kali",
            "2 kali",
            "3 kali",
            "4 kali"
        ],
        kunci: 1, // B
        penjelasan: "Sujud sahwi dilakukan sebanyak 2 kali sujud sebelum atau sesudah salam."
    }
];

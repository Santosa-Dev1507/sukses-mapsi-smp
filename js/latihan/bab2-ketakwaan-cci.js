// ═══════════════════════════════════════════════════════════
// BAB 2 (SELASA) — KETAKWAAN
// Tim CCI SMPN 5 Klaten — KISI-KISI MAPSI 2026
// Format: 6 PG Standar + 2 Menjodohkan + 3 PG Kompleks + 5 Lintas Bidang
// ═══════════════════════════════════════════════════════════
const latihanData = [

    // ── BAGIAN A: 6 SOAL PG STANDAR ──
    {
        num: 1,
        tipe: "pg",
        topik: "Al-Qur'an & Hadis — Ketakwaan",
        level: "L1",
        stimulus: "Perhatikan Q.S. Ali Imran/3: 102:\nيَٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُوا۟ ٱتَّقُوا۟ ٱللَّهَ حَقَّ تُقَاتِهِۦ وَلَا تَمُوتُنَّ إِلَّا وَأَنتُم مُّسْلِمُونَ",
        pertanyaan: "Q.S. Ali Imran/3: 102 memerintahkan orang beriman untuk bertakwa kepada Allah Swt. dengan…",
        opsi: [
            "Sekadarnya saja",
            "Sebenar-benar takwa",
            "Hanya di bulan-bulan tertentu",
            "Secukup kemampuan tanpa kesungguhan",
            "Sebatas ibadah wajib saja"
        ],
        kunci: 1,
        penjelasan: "Penggalan ayat 'ittaqullāha ḥaqqa tuqātih' bermakna bertakwalah kepada Allah dengan sebenar-benar takwa."
    },
    {
        num: 2,
        tipe: "pg",
        topik: "Al-Qur'an & Hadis — Ketakwaan",
        level: "L1",
        stimulus: "Q.S. Ali Imran/3: 102 berisi imbauan menjaga keimanan hingga akhir hayat.",
        pertanyaan: "Ayat Q.S. Ali Imran/3: 102 juga menekankan agar seseorang tidak meninggal kecuali dalam keadaan…",
        opsi: [
            "Kaya raya",
            "Berilmu tinggi",
            "Muslim (berserah diri kepada Allah)",
            "Memiliki jabatan tinggi",
            "Dikenal banyak orang"
        ],
        kunci: 2,
        penjelasan: "Penggalan 'wa lā tamūtunna illā wa antum muslimūn' menegaskan pesan agar tidak mati kecuali dalam keadaan berserah diri (Muslim)."
    },
    {
        num: 3,
        tipe: "pg",
        topik: "Al-Qur'an & Hadis — Hari Kiamat",
        level: "L1",
        stimulus: "Disajikan Q.S. Luqman/31: 33 tentang gambaran dahsyatnya pertanggungjawaban hari kiamat.",
        pertanyaan: "Q.S. Luqman/31: 33 mengingatkan manusia akan suatu hari ketika…",
        opsi: [
            "Orang tua dapat sepenuhnya menolong anaknya",
            "Tidak ada seorang pun yang dapat menolong orang lain, termasuk orang tua kepada anaknya",
            "Semua amal manusia dihapuskan",
            "Hanya orang kaya yang selamat",
            "Kehidupan dunia menjadi kekal"
        ],
        kunci: 1,
        penjelasan: "Q.S. Luqman/31: 33 menegaskan bahwa pada hari kiamat orang tua tak dapat menolong anaknya dan anak tak dapat menolong ayahnya sedikit pun."
    },
    {
        num: 4,
        tipe: "pg",
        topik: "Al-Qur'an & Hadis — Bahaya Tipu Daya",
        level: "L3",
        pertanyaan: "Peringatan dalam Q.S. Luqman/31: 33 agar manusia tidak tertipu terutama tertuju pada…",
        opsi: [
            "Kehidupan dunia dan tipu daya (dari setan/hawa nafsu)",
            "Ilmu pengetahuan",
            "Ibadah yang berlebihan",
            "Persaudaraan sesama muslim",
            "Nasihat orang tua"
        ],
        kunci: 0,
        penjelasan: "Ayat 33 menegaskan 'falā tagurranakumul ḥayātud-dunyā wa lā yagurranakum billāhil-garūr' (jangan kehidupan dunia & setan penipu memperdayakanmu)."
    },
    {
        num: 5,
        tipe: "pg",
        topik: "Al-Qur'an & Hadis — Penerapan Takwa Sejati",
        level: "L3",
        stimulus: "Meskipun memiliki banyak kesempatan untuk berbuat curang demi keuntungan pribadi, Fadli selalu memilih jalan yang jujur karena ia yakin Allah selalu mengawasi setiap perbuatannya.",
        pertanyaan: "Sikap Fadli tersebut mencerminkan pengamalan dari…",
        opsi: [
            "Q.S. Ali Imran/3: 102 tentang takwa yang sebenar-benarnya",
            "Q.S. Al-Baqarah/2: 256 tentang toleransi",
            "Q.S. Al-Mujadalah/58: 11 tentang ilmu",
            "Q.S. An-Nisa/4: 66 tentang cinta tanah air",
            "Q.S. Al-Baqarah/2: 285 tentang keimanan"
        ],
        kunci: 0,
        penjelasan: "Sikap senantiasa jujur dan merasa diawasi Allah Swt. di mana pun berada merupakan bentuk takwa yang sebenar-benarnya (Q.S. Ali Imran/3: 102)."
    },
    {
        num: 6,
        tipe: "pg",
        topik: "Al-Qur'an & Hadis — Tajwid",
        level: "L2",
        kutipan: "تُقَاتِهِۦ",
        pertanyaan: "Pada lafal تُقَاتِهِۦ terdapat hukum bacaan…",
        opsi: [
            "Mad thabi'i",
            "Mad wajib muttasil",
            "Ghunnah musyaddadah",
            "Ikhfa",
            "Iqlab"
        ],
        kunci: 0,
        penjelasan: "Pada lafal تُقَاتِهِۦ terdapat hukum bacaan Mad Thabi'i (Qā) dan Mad Silah Shughra pada ha dhamir."
    },

    // ── BAGIAN B: 2 SOAL MENJODOHKAN ──
    {
        num: 7,
        tipe: "menjodohkan",
        topik: "Al-Qur'an & Hadis — Menjodohkan Kosakata Ayat",
        level: "L1",
        pertanyaan: "Pasangkanlah lafal Al-Qur'an di Kolom Kiri dengan Arti yang tepat di Kolom Kanan:",
        kolomKiri: [
            "1. ٱتَّقُوا۟",
            "2. يَوْمًا",
            "3. وَالِدٌ",
            "4. مَوْلُودٌ"
        ],
        kolomKanan: [
            "A. Hari (kiamat)",
            "B. Bertakwalah",
            "C. Orang tua",
            "D. Anak"
        ],
        kunci: [1, 0, 2, 3], // 1->B, 2->A, 3->C, 4->D
        penjelasan: "1 -> B (ittaqū = bertakwalah), 2 -> A (yauman = hari), 3 -> C (wālidun = orang tua), 4 -> D (maulūdun = anak)."
    },
    {
        num: 8,
        tipe: "menjodohkan",
        topik: "Al-Qur'an & Hadis — Menjodohkan Konsep Takwa & Kiamat",
        level: "L3",
        pertanyaan: "Pasangkanlah Konsep di Kolom Kiri dengan Penjelasan yang tepat di Kolom Kanan:",
        kolomKiri: [
            "1. Takwa",
            "2. Hari Kiamat",
            "3. Al-Gurur (tipu daya)"
        ],
        kolomKanan: [
            "A. Kehidupan dunia yang bisa menipu jika dijadikan tujuan utama",
            "B. Menjalankan perintah dan menjauhi larangan Allah dengan sungguh-sungguh",
            "C. Hari ketika tidak ada pertolongan antara orang tua dan anak"
        ],
        kunci: [1, 2, 0], // 1->B, 2->C, 3->A
        penjelasan: "1 -> B (Takwa = taat & jauhi larangan), 2 -> C (Kiamat = tak ada pertolongan ortu/anak), 3 -> A (Al-Gurur = tipu daya dunia)."
    },

    // ── BAGIAN C: 3 SOAL PG KOMPLEKS ──
    {
        num: 9,
        tipe: "pgk",
        topik: "Al-Qur'an & Hadis — PGK Wujud Takwa",
        level: "L2",
        pertanyaan: "Berikut ini termasuk wujud takwa yang sebenar-benarnya sesuai Q.S. Ali Imran/3: 102: (Jawaban benar bisa lebih dari satu!)",
        opsi: [
            "Menjalankan perintah Allah secara konsisten",
            "Menjauhi larangan Allah hanya ketika diawasi orang lain",
            "Menjaga keislaman hingga akhir hayat",
            "Beribadah hanya di waktu-waktu tertentu saja",
            "Bersungguh-sungguh dalam menjalankan agama"
        ],
        kunci: [0, 2, 4], // A, C, E
        penjelasan: "Wujud takwa sejati adalah konsisten, bersungguh-sungguh, dan memelihara iman Islam sampai wafat (A, C, E)."
    },
    {
        num: 10,
        tipe: "pgk",
        topik: "Al-Qur'an & Hadis — PGK Pertolongan di Hari Kiamat",
        level: "L3",
        pertanyaan: "Berdasarkan Q.S. Luqman/31: 33, manakah hal-hal yang TIDAK dapat menolong seseorang di hari kiamat? (Jawaban benar bisa lebih dari satu!)",
        opsi: [
            "Harta yang dimiliki tanpa disertai amal saleh",
            "Pertolongan orang tua kepada anaknya semata",
            "Amal saleh yang telah dikerjakan semasa hidup",
            "Pertolongan anak kepada orang tuanya semata",
            "Keimanan yang disertai ketakwaan"
        ],
        kunci: [0, 1, 3], // A, B, D
        penjelasan: "Di hari kiamat, harta tanpa amal (A), hubungan ortu tanpa keimanan (B), dan anak tanpa takwa (D) tidak dapat menolong. Amal saleh & takwa (C, E) lah yang menyelamatkan."
    },
    {
        num: 11,
        tipe: "pgk",
        topik: "Al-Qur'an & Hadis — PGK Analisis Menunda Ibadah",
        level: "L3",
        stimulus: "Rian selalu menunda-nunda salat karena merasa masih muda dan memiliki banyak waktu untuk bertaubat nanti.",
        pertanyaan: "Berdasarkan Q.S. Luqman/31: 33, manakah pernyataan yang benar mengenai sikap Rian? (Jawaban benar bisa lebih dari satu!)",
        opsi: [
            "Sikap Rian termasuk bentuk tertipu oleh kehidupan dunia",
            "Sikap Rian dibenarkan karena usia muda masih panjang",
            "Ayat tersebut mengingatkan bahwa janji Allah adalah benar dan pasti terjadi",
            "Sikap Rian mencerminkan takwa yang sebenar-benarnya",
            "Sikap Rian berisiko membuatnya lalai mempersiapkan bekal akhirat"
        ],
        kunci: [0, 2, 4], // A, C, E
        penjelasan: "Menunda-nunda taubat/ibadah karena merasa muda adalah bentuk tertipu oleh dunia dan berisiko lalai dari bekal akhirat (A, C, E)."
    },

    // ── BAGIAN D: 5 SOAL LINTAS BIDANG (Aqidah, Akhlak, Fikih) ──
    {
        num: 12,
        tipe: "pg",
        topik: "Lintas Bidang [Aqidah] — Perbedaan Nabi & Rasul",
        level: "L1",
        pertanyaan: "Perbedaan mendasar antara nabi dan rasul terletak pada… [Aqidah]",
        opsi: [
            "Nabi menerima wahyu namun tidak wajib menyampaikannya, sedangkan rasul wajib menyampaikan wahyu kepada umatnya",
            "Nabi tidak menerima wahyu, sedangkan rasul menerima wahyu",
            "Nabi hanya diutus untuk kaumnya sendiri, sedangkan rasul untuk seluruh alam",
            "Nabi tidak memiliki mukjizat, sedangkan rasul memiliki mukjizat",
            "Nabi dan rasul tidak memiliki perbedaan sama sekali"
        ],
        kunci: 0, // A
        penjelasan: "Nabi menerima wahyu untuk dirinya sendiri, sedangkan Rasul menerima wahyu dan wajib mendakwahkan kepada umatnya."
    },
    {
        num: 13,
        tipe: "pg",
        topik: "Lintas Bidang [Aqidah] — Lawan Sifat Mustahil",
        level: "L2",
        pertanyaan: "Lawan dari sifat mustahil 'kitmān' (menyembunyikan wahyu) yang wajib dimiliki rasul adalah… [Aqidah]",
        opsi: [
            "Siddiq",
            "Amanah",
            "Tabligh",
            "Fathanah",
            "Baladah"
        ],
        kunci: 2, // C
        penjelasan: "Kitmān (menyembunyikan) adalah lawan dari sifat wajib Tabligh (menyampaikan wahyu Allah Swt.)."
    },
    {
        num: 14,
        tipe: "pg",
        topik: "Lintas Bidang [Akhlak] — Q.S. Al-Hujurat/49: 12",
        level: "L1",
        pertanyaan: "Q.S. Al-Hujurat/49: 12 memerintahkan orang beriman untuk menjauhi banyak berprasangka, karena… [Akhlak]",
        opsi: [
            "Prasangka selalu membawa keberuntungan",
            "Sebagian prasangka termasuk dosa",
            "Prasangka adalah bentuk kecerdasan sosial",
            "Berprasangka dianjurkan dalam pergaulan",
            "Prasangka tidak memiliki dampak apa pun"
        ],
        kunci: 1, // B
        penjelasan: "Q.S. Al-Hujurat/49: 12 menyatakan 'inā ba'ḍaẓ-ẓanni iṡm' (sesungguhnya sebagian prasangka itu adalah dosa)."
    },
    {
        num: 15,
        tipe: "pg",
        topik: "Lintas Bidang [Akhlak] — Penerapan Husnuzan Sesama",
        level: "L3",
        stimulus: "Ketika mendengar kabar bahwa temannya terlambat datang ke acara penting, Dinda tidak langsung menuduh temannya tidak menghargai acara tersebut, melainkan berpikir mungkin ada halangan di jalan.",
        pertanyaan: "Sikap Dinda tersebut mencerminkan penerapan… [Akhlak]",
        opsi: [
            "Husnuzan kepada sesama manusia",
            "Su’uzan kepada sesama manusia",
            "Ghibah kepada sesama manusia",
            "Takabbur kepada sesama manusia",
            "Riya kepada sesama manusia"
        ],
        kunci: 0, // A
        penjelasan: "Berbaik sangka dan mencari prasangka baik atas keterlambatan teman adalah perwujudan Husnuzan kepada sesama manusia."
    },
    {
        num: 16,
        tipe: "pg",
        topik: "Lintas Bidang [Fikih] — Sujud Sahwi",
        level: "L1",
        pertanyaan: "Sujud sahwi dilakukan karena sebab… [Fiqih]",
        opsi: [
            "Mendengar ayat sajdah",
            "Lupa atau ragu dalam jumlah rakaat salat",
            "Mendapat nikmat dari Allah",
            "Selesai mengerjakan salat sunnah",
            "Hendak bepergian jauh (safar)"
        ],
        kunci: 1, // B
        penjelasan: "Sujud sahwi dilakukan saat ragu/lupa jumlah rakaat shalat atau tertinggal rukun/sunnah ab'ad tertentu."
    }
];

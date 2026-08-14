// ═══════════════════════════════════════════════════════════
// BAB 2 QURAN HADIS (SELASA) — QS. ALI IMRAN/3:102 & QS. LUQMAN/31:33 - KETAKWAAN
// Latihan Soal Lintas Bidang — MAPSI 2026
// Format: 6 PG Standar + 2 Menjodohkan + 2 PG Multi-Pernyataan + 5 Lintas Bidang (4 Opsi A-D)
// ═══════════════════════════════════════════════════════════
const latihanData = [

    // ── BAGIAN A: PILIHAN GANDA STANDAR ──
    {
        num: 1,
        tipe: "pg",
        topik: "Al-Qur'an & Hadis — Ketakwaan (QS. Ali Imran/3: 102)",
        level: "L1",
        stimulus: "QS. Ali Imran/3: 102:\nيَٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُوا۟ ٱتَّقُوا۟ ٱللَّهَ حَّق تُقَاتِهِۦ وَلَا تَمُوتُنَّ إِلَّا وَأَنتُم مُّسْلِمُونَ",
        pertanyaan: "QS. Ali Imran/3:102 memerintahkan orang beriman untuk bertakwa kepada Allah dengan…",
        opsi: [
            "Sekadarnya saja",
            "Sebenar-benar takwa",
            "Hanya di bulan-bulan tertentu",
            "Secukup kemampuan tanpa kesungguhan"
        ],
        kunci: 1,
        penjelasan: "Penggalan 'ittaqullāha ḥaqqa tuqātih' bermakna bertakwalah kepada Allah dengan sebenar-benar takwa."
    },
    {
        num: 2,
        tipe: "pg",
        topik: "Al-Qur'an & Hadis — Ketakwaan (QS. Ali Imran/3: 102)",
        level: "L1",
        stimulus: "QS. Ali Imran/3: 102 juga menekankan pentingnya mempertahankan keimanan hingga akhir hayat.",
        pertanyaan: "Ayat QS. Ali Imran/3:102 juga menekankan agar seseorang tidak meninggal kecuali dalam keadaan…",
        opsi: [
            "Kaya raya",
            "Berilmu tinggi",
            "Muslim (berserah diri kepada Allah)",
            "Memiliki jabatan tinggi"
        ],
        kunci: 2,
        penjelasan: "Penggalan 'wa lā tamūtunna illā wa antum muslimūn' menekankan pesan agar tidak mati kecuali dalam keadaan berserah diri (Muslim)."
    },
    {
        num: 3,
        tipe: "pg",
        topik: "Al-Qur'an & Hadis — Hari Kiamat (QS. Luqman/31: 33)",
        level: "L1",
        stimulus: "QS. Luqman/31: 33 (penggalan):\nيَٰٓأَيُّهَا ٱلنَّاسُ ٱتَّقُوا۟ رَبَّكُمْ وَٱخْشَوْا۟ يَوْمًا لَّا يَجْزِى وَالِدٌ عَن وَلَدِهِۦ وَلَا مَوْلُودٌ هُوَ جَازٍ عَن وَالِدِهِۦ شَيْـًٔا",
        pertanyaan: "QS. Luqman/31:33 mengingatkan manusia akan suatu hari ketika…",
        opsi: [
            "Orang tua dapat sepenuhnya menolong anaknya",
            "Tidak ada seorang pun yang dapat menolong orang lain, termasuk orang tua kepada anaknya",
            "Semua amal manusia dihapuskan",
            "Hanya orang kaya yang selamat"
        ],
        kunci: 1,
        penjelasan: "QS. Luqman/31:33 mengingatkan bahwasanya pada hari kiamat seorang ayah tidak dapat menolong anaknya dan seorang anak tak dapat menolong ayahnya."
    },
    {
        num: 4,
        tipe: "pg",
        topik: "Al-Qur'an & Hadis — Tipu Daya Dunia (QS. Luqman/31: 33)",
        level: "L3",
        pertanyaan: "Peringatan dalam QS. Luqman/31:33 agar manusia tidak tertipu terutama tertuju pada…",
        opsi: [
            "Kehidupan dunia dan tipu daya (dari setan/hawa nafsu)",
            "Ilmu pengetahuan",
            "Ibadah yang berlebihan",
            "Persaudaraan sesama muslim"
        ],
        kunci: 0,
        penjelasan: "Ayat tersebut mengingatkan 'falā tagurranakumul ḥayātud-dunyā wa lā yagurranakum billāhil-garūr' (jangan kehidupan dunia dan setan penipu memperdayakanmu)."
    },
    {
        num: 5,
        tipe: "pg",
        topik: "Al-Qur'an & Hadis — Penerapan Takwa",
        level: "L3",
        stimulus: "Perhatikan ilustrasi berikut!\nMeskipun memiliki banyak kesempatan untuk berbuat curang demi keuntungan pribadi, Fadli selalu memilih jalan yang jujur karena ia yakin Allah selalu mengawasi setiap perbuatannya.",
        pertanyaan: "Sikap Fadli tersebut mencerminkan pengamalan dari…",
        opsi: [
            "QS. Ali Imran/3:102 tentang takwa yang sebenar-benarnya",
            "QS. Al-Baqarah/2:256 tentang toleransi",
            "QS. Al-Mujadalah/58:11 tentang ilmu",
            "QS. An-Nisa/4:66 tentang cinta tanah air"
        ],
        kunci: 0,
        penjelasan: "Sikap senantiasa jujur dan merasa diawasi Allah Swt. di mana pun berada merupakan bentuk takwa yang sebenar-benarnya (QS. Ali Imran/3:102)."
    },
    {
        num: 6,
        tipe: "pg",
        topik: "Al-Qur'an & Hadis — Tajwid (QS. Ali Imran/3: 102)",
        level: "L2",
        kutipan: "تُقَاتِهِۦ",
        pertanyaan: "Pada lafal تُقَاتِهِۦ terdapat hukum bacaan…",
        opsi: [
            "Mad thabi'i",
            "Mad wajib muttasil",
            "Ghunnah musyaddadah",
            "Ikhfa"
        ],
        kunci: 0,
        penjelasan: "Pada lafal تُقَاتِهِۦ terdapat hukum bacaan Mad Thabi'i (Qā) serta Mad Silah Shughra."
    },

    // ── BAGIAN B: MENJODOHKAN ──
    {
        num: 7,
        tipe: "menjodohkan",
        topik: "Al-Qur'an & Hadis — Menjodohkan Kosakata Ayat",
        level: "L1",
        pertanyaan: "Perhatikan tabel lafal dan arti berikut! Pasangkanlah lafal dengan arti yang tepat:",
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
        penjelasan: "Pasangan tepat: 1-B (ittaqū = bertakwalah), 2-A (yauman = hari), 3-C (wālidun = orang tua), 4-D (maulūdun = anak). Pilihan kunci opsi: A (1-B, 2-A, 3-C, 4-D)."
    },
    {
        num: 8,
        tipe: "menjodohkan",
        topik: "Al-Qur'an & Hadis — Menjodohkan Konsep Takwa & Kiamat",
        level: "L3",
        pertanyaan: "Perhatikan tabel Konsep dan Penjelasan berikut! Pasangkanlah dengan tepat:",
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
        penjelasan: "Pasangan tepat: 1-B (Takwa = taat & jauhi larangan), 2-C (Kiamat = hari pertolongan ortu/anak terputus), 3-A (Al-Gurur = tipu daya dunia). Pilihan kunci opsi: A (1-B, 2-C, 3-A)."
    },

    // ── BAGIAN C: PILIHAN GANDA KOMPLEKS (MULTI-PERNYATAAN) ──
    {
        num: 9,
        tipe: "pg",
        topik: "Al-Qur'an & Hadis — PG Kompleks Wujud Takwa",
        level: "L2",
        stimulus: "Perhatikan pernyataan-pernyataan berikut!\n1) Menjalankan perintah Allah secara konsisten\n2) Menjauhi larangan Allah hanya ketika diawasi orang lain\n3) Menjaga keislaman hingga akhir hayat\n4) Beribadah hanya di waktu-waktu tertentu saja\n5) Bersungguh-sungguh dalam menjalankan agama",
        pertanyaan: "Pernyataan yang merupakan wujud takwa yang sebenar-benarnya sesuai QS. Ali Imran/3:102 ditunjukkan oleh nomor…",
        opsi: [
            "1, 3 dan 5",
            "1, 2 dan 4",
            "2, 3 dan 4",
            "2, 4 dan 5"
        ],
        kunci: 0, // A
        penjelasan: "Pernyataan yang merupakan wujud takwa sejati sesuai QS. Ali Imran/3:102 ditunjukkan oleh nomor 1, 3, dan 5 (Opsi A)."
    },
    {
        num: 10,
        tipe: "pg",
        topik: "Al-Qur'an & Hadis — PG Kompleks Analisis Menunda Ibadah",
        level: "L3",
        stimulus: "Perhatikan pernyataan-pernyataan berikut!\nRian selalu menunda-nunda salat karena merasa masih muda dan memiliki banyak waktu untuk bertaubat nanti.\n\n1) Sikap Rian termasuk bentuk tertipu oleh kehidupan dunia\n2) Sikap Rian dibenarkan karena usia muda masih panjang\n3) Ayat tersebut mengingatkan bahwa janji Allah adalah benar dan pasti terjadi\n4) Sikap Rian mencerminkan takwa yang sebenar-benarnya\n5) Sikap Rian berisiko membuatnya lalai mempersiapkan bekal akhirat",
        pertanyaan: "Berdasarkan QS. Luqman/31:33, pernyataan yang benar ditunjukkan oleh nomor…",
        opsi: [
            "1, 3 dan 5",
            "2, 3 dan 4",
            "1, 2 dan 4",
            "2, 4 dan 5"
        ],
        kunci: 0, // A
        penjelasan: "Berdasarkan QS. Luqman/31:33, pernyataan yang benar mengenai bahaya menunda ibadah ditunjukkan oleh nomor 1, 3, dan 5 (Opsi A)."
    },

    // ── BAGIAN D: LINTAS BIDANG (Aqidah, Akhlak, Fiqih-SKI) ──
    {
        num: 11,
        tipe: "pg",
        topik: "Lintas Bidang [Aqidah] — Beda Nabi dan Rasul",
        level: "L1",
        pertanyaan: "Perbedaan mendasar antara nabi dan rasul terletak pada… [Aqidah]",
        opsi: [
            "Nabi menerima wahyu namun tidak wajib menyampaikannya, sedangkan rasul wajib menyampaikan wahyu kepada umatnya",
            "Nabi tidak menerima wahyu, sedangkan rasul menerima wahyu",
            "Nabi hanya diutus untuk kaumnya sendiri, sedangkan rasul untuk seluruh alam",
            "Nabi tidak memiliki mukjizat, sedangkan rasul memiliki mukjizat"
        ],
        kunci: 0, // A
        penjelasan: "Nabi menerima wahyu untuk dirinya sendiri (tidak wajib menyampaikan ke umat), sedangkan Rasul wajib mendakwahkan wahyu kepada umatnya."
    },
    {
        num: 12,
        tipe: "pg",
        topik: "Lintas Bidang [Aqidah] — Sifat Rasul",
        level: "L2",
        pertanyaan: "Lawan dari sifat mustahil ‘kitman’ (menyembunyikan wahyu) yang wajib dimiliki rasul adalah… [Aqidah]",
        opsi: [
            "Siddiq",
            "Amanah",
            "Tabligh",
            "Fathanah"
        ],
        kunci: 2, // C
        penjelasan: "Kitman (menyembunyikan) adalah lawan dari sifat wajib Tabligh (menyampaikan wahyu Allah Swt.)."
    },
    {
        num: 13,
        tipe: "pg",
        topik: "Lintas Bidang [Akhlak] — QS. Al-Hujurat/49: 12",
        level: "L1",
        pertanyaan: "QS. Al-Hujurat/49:12 memerintahkan orang beriman untuk menjauhi banyak berprasangka, karena… [Akhlak]",
        opsi: [
            "Prasangka selalu membawa keberuntungan",
            "Sebagian prasangka termasuk dosa",
            "Prasangka adalah bentuk kecerdasan sosial",
            "Berprasangka dianjurkan dalam pergaulan"
        ],
        kunci: 1, // B
        penjelasan: "QS. Al-Hujurat/49:12 menyatakan 'inā ba'ḍaẓ-ẓanni iṡm' (sesungguhnya sebagian prasangka itu adalah dosa)."
    },
    {
        num: 14,
        tipe: "pg",
        topik: "Lintas Bidang [Akhlak] — Husnuzan Sesama",
        level: "L3",
        stimulus: "Perhatikan ilustrasi berikut!\nKetika mendengar kabar bahwa temannya terlambat datang ke acara penting, Dinda tidak langsung menuduh temannya tidak menghargai acara tersebut, melainkan berpikir mungkin ada halangan di jalan.",
        pertanyaan: "Sikap Dinda tersebut mencerminkan penerapan… [Akhlak]",
        opsi: [
            "Husnuzan kepada sesama manusia",
            "Su’uzan kepada sesama manusia",
            "Ghibah kepada sesama manusia",
            "Takabbur kepada sesama manusia"
        ],
        kunci: 0, // A
        penjelasan: "Berbaik sangka atas keterlambatan teman adalah perwujudan Husnuzan kepada sesama manusia."
    },
    {
        num: 15,
        tipe: "pg",
        topik: "Lintas Bidang [Fikih] — Sujud Sahwi",
        level: "L1",
        pertanyaan: "Sujud sahwi dilakukan karena sebab… [Fiqih]",
        opsi: [
            "Mendengar ayat sajdah",
            "Lupa atau ragu dalam jumlah rakaat salat",
            "Mendapat nikmat dari Allah",
            "Selesai mengerjakan salat sunnah"
        ],
        kunci: 1, // B
        penjelasan: "Sujud sahwi dilakukan 2 kali saat lupa, ragu jumlah rakaat shalat, atau tertinggal rukun/sunnah ab'ad."
    }
];

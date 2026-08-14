// ═══════════════════════════════════════════════════════════
// BAB 5 Quran Hadis (JUMAT) — QS. Al-Mujadalah/58:11 & QS. Az-Zumar/39:9 -SEMANGAT MENUNTUT ILMU
// Latihan Soal Lintas Bidang — MAPSI 2026
// Format: 6 PG Standar + 2 Menjodohkan + 2 PG Multi-Pernyataan + 5 Lintas Bidang (4 Opsi A-D)
// ═══════════════════════════════════════════════════════════
const latihanData = [

    // ── BAGIAN A: PILIHAN GANDA STANDAR ──
    {
        num: 1,
        tipe: "pg",
        topik: "Al-Qur'an & Hadis — Menuntut Ilmu (QS. Al-Mujadalah/58: 11)",
        level: "L1",
        stimulus: "QS. Al-Mujadalah/58: 11 (penggalan):\nيَرْفَعِ ٱللَّهُ ٱلَّذِينَ ءَامَنُوا۟ مِنكُمْ وَٱلَّذِينَ أُوتُوا۟ ٱلْعِلْمَ دَرَجَٰتٍ",
        pertanyaan: "QS. Al-Mujadalah/58:11 menjelaskan bahwa Allah Swt. akan mengangkat derajat orang-orang yang…",
        opsi: [
            "Beriman dan diberi ilmu pengetahuan",
            "Memiliki harta yang banyak",
            "Memiliki jabatan yang tinggi",
            "Berasal dari keturunan terhormat"
        ],
        kunci: 0,
        penjelasan: "QS. Al-Mujadalah/58:11 menegaskan janji Allah mengangkat beberapa derajat orang-orang yang beriman dan berilmu."
    },
    {
        num: 2,
        tipe: "pg",
        topik: "Al-Qur'an & Hadis — Adab Majelis Ilmu",
        level: "L3",
        stimulus: "Perintah dalam QS. Al-Mujadalah/58:11 untuk 'berlapang-lapanglah dalam majelis'.",
        pertanyaan: "Perintah dalam QS. Al-Mujadalah/58:11 untuk 'berlapang-lapanglah dalam majelis' mengandung pesan moral tentang pentingnya…",
        opsi: [
            "Sikap saling menghormati dan memberi kesempatan dalam menuntut ilmu",
            "Berebut tempat duduk paling depan",
            "Membatasi jumlah peserta majelis ilmu",
            "Menutup majelis ilmu bagi orang baru"
        ],
        kunci: 0,
        penjelasan: "Berlapang-lapang dalam majelis mengajarkan sikap saling menghormati, melapangkan tempat, dan memberi kesempatan sesama penuntut ilmu."
    },
    {
        num: 3,
        tipe: "pg",
        topik: "Al-Qur'an & Hadis — Pertanyaan Retoris (QS. Az-Zumar/39: 9)",
        level: "L1",
        stimulus: "QS. Az-Zumar/39: 9 (penggalan):\nقُلْ هَلْ يَسْتَوِى ٱلَّذِينَ يَعْلَمُونَ وَٱلَّذِينَ لَا يَعْلَمُونَ",
        pertanyaan: "QS. Az-Zumar/39:9 menegaskan perbedaan antara orang yang berilmu dan tidak berilmu melalui pertanyaan retoris yang bermakna…",
        opsi: [
            "Tidak sama orang yang mengetahui dengan orang yang tidak mengetahui",
            "Semua manusia memiliki derajat yang sama tanpa ilmu",
            "Ilmu tidak memberikan pengaruh apa pun bagi manusia",
            "Orang yang tidak berilmu justru lebih mulia"
        ],
        kunci: 0,
        penjelasan: "Pertanyaan 'Hal yastawil-lażīna ya'lamūna wal-lażīna lā ya'lamūn' bermakna jelas bahwa tidaklah sama derajat orang berilmu dan tidak berilmu."
    },
    {
        num: 4,
        tipe: "pg",
        topik: "Al-Qur'an & Hadis — Tajwid Lafzullah (QS. Al-Mujadalah/58: 11)",
        level: "L2",
        kutipan: "يَرْفَعِ ٱللَّهُ",
        pertanyaan: "Pada lafal يَرْفَعِ ٱللَّهُ, huruf lam pada lafal Allah dibaca tarqiq (tipis) karena…",
        opsi: [
            "Didahului oleh huruf berharakat dhammah",
            "Didahului oleh huruf berharakat kasrah",
            "Didahului oleh huruf berharakat fathah",
            "Berada di awal kalimat"
        ],
        kunci: 1, // Berdasarkan kunci naskah pengguna (4-B)
        penjelasan: "Lafal Allah dibaca tarqiq (tipis) apabila didahului harakat kasrah (pada huruf 'ain di yarfa'i)."
    },
    {
        num: 5,
        tipe: "pg",
        topik: "Al-Qur'an & Hadis — Makna Ulul Albab (QS. Az-Zumar/39: 9)",
        level: "L1",
        pertanyaan: "Orang yang dianjurkan untuk merenungkan (tadzakkur) perbedaan antara yang berilmu dan tidak berilmu dalam QS. Az-Zumar/39:9 disebut dengan istilah…",
        opsi: [
            "Ulul albab (orang-orang yang berakal sehat)",
            "Ulul azmi",
            "Ulama su’",
            "Muqallid"
        ],
        kunci: 0,
        penjelasan: "Penggalan 'Innamā yatażakkaru ulul-albāb' menyebutkan bahwa hanya Ulul Albab (orang berakal sehat) yang dapat mengambil pelajaran."
    },
    {
        num: 6,
        tipe: "pg",
        topik: "Al-Qur'an & Hadis — Hikmah Derajat Orang Berilmu",
        level: "L3",
        pertanyaan: "Salah satu hikmah orang berilmu diangkat derajatnya sebagaimana QS. Al-Mujadalah/58:11 adalah…",
        opsi: [
            "Ilmu menjadi bekal untuk semakin dekat kepada Allah dan bermanfaat bagi sesama",
            "Ilmu menjadikan seseorang lebih berhak menindas orang lain",
            "Ilmu hanya bermanfaat untuk kepentingan dunia semata",
            "Ilmu menjadikan seseorang bebas dari kewajiban beribadah"
        ],
        kunci: 0,
        penjelasan: "Hikmah diangkatnya derajat orang berilmu adalah menjadikan ilmunya wahana ibadah mendekatkan diri pada Allah Swt. dan menebar manfaat."
    },

    // ── BAGIAN B: MENJODOHKAN ──
    {
        num: 7,
        tipe: "menjodohkan",
        topik: "Al-Qur'an & Hadis — Menjodohkan Kosakata",
        level: "L1",
        pertanyaan: "Perhatikan tabel lafal dan arti berikut! Pasangkanlah lafal dengan arti yang tepat:",
        kolomKiri: [
            "1. يَرْفَعِ",
            "2. دَرَجَٰتٍ",
            "3. يَعْلَمُونَ",
            "4. أُو۟لُوا۟ ٱلْأَلْبَٰبِ"
        ],
        kolomKanan: [
            "A. Mengetahui",
            "B. Mengangkat",
            "C. Berakal sehat",
            "D. Derajat/tingkatan"
        ],
        kunci: [1, 3, 0, 2], // 1->B, 2->D, 3->A, 4->C
        penjelasan: "Pasangan tepat: 1-B (Yarfa'i = mengangkat), 2-D (Darajāt = derajat/tingkatan), 3-A (Ya'lamūn = mengetahui), 4-C (Ulul-Albāb = berakal sehat). Kunci opsi: A (1-B, 2-D, 3-A, 4-C)."
    },
    {
        num: 8,
        tipe: "menjodohkan",
        topik: "Al-Qur'an & Hadis — Menjodohkan Konsep & Penjelasan",
        level: "L1",
        pertanyaan: "Perhatikan tabel Konsep dan Penjelasan berikut! Pasangkanlah dengan tepat:",
        kolomKiri: [
            "1. Ulul albab",
            "2. Majelis ilmu",
            "3. Tafakkur"
        ],
        kolomKanan: [
            "A. Orang yang senantiasa merenungkan tanda-tanda kebesaran Allah",
            "B. Tempat berkumpul untuk menuntut ilmu",
            "C. Proses merenungkan dan memikirkan sesuatu secara mendalam"
        ],
        kunci: [0, 1, 2], // 1->A, 2->B, 3->C
        penjelasan: "Pasangan tepat: 1-A (Ulul albab = renungkan kebesaran Allah), 2-B (Majelis ilmu = tempat kumpul tuntut ilmu), 3-C (Tafakkur = renungkan mendalam). Kunci opsi: A (1-A, 2-B, 3-C)."
    },

    // ── BAGIAN C: PILIHAN GANDA KOMPLEKS (MULTI-PERNYATAAN) ──
    {
        num: 9,
        tipe: "pg",
        topik: "Al-Qur'an & Hadis — PG Kompleks Kasus Pak Umar",
        level: "L3",
        stimulus: "Perhatikan pernyataan-pernyataan berikut!\nMeskipun sudah lelah bekerja seharian, Pak Umar tetap menyempatkan diri mengikuti kajian ilmu agama di masjid setiap malam karena ia yakin ilmu akan mengangkat derajatnya di sisi Allah.\n\n1) Mencerminkan pengamalan QS. Al-Mujadalah/58:11 tentang keutamaan ilmu\n2) Menunjukkan sikap mengutamakan ilmu meski dalam kondisi lelah\n3) Bertentangan dengan anjuran istirahat yang cukup\n4) Termasuk bentuk semangat menuntut ilmu sepanjang hayat\n5) Menunjukkan bahwa ilmu hanya penting bagi kalangan tertentu",
        pertanyaan: "Pernyataan yang sesuai dengan sikap Pak Umar ditunjukkan oleh nomor…",
        opsi: [
            "1, 2 dan 4",
            "1, 3 dan 5",
            "2, 3 dan 5",
            "3, 4 dan 5"
        ],
        kunci: 0, // A
        penjelasan: "Pernyataan yang tepat mencerminkan semangat Pak Umar menuntut ilmu ditunjukkan oleh nomor 1, 2, dan 4 (Opsi A)."
    },
    {
        num: 10,
        tipe: "pg",
        topik: "Al-Qur'an & Hadis — PG Kompleks Semangat Menuntut Ilmu",
        level: "L2",
        stimulus: "Perhatikan pernyataan-pernyataan berikut!\n1) Rajin membaca dan mengikuti majelis ilmu\n2) Menghormati guru dan sesama penuntut ilmu\n3) Merasa sudah cukup dengan ilmu yang dimiliki dan enggan belajar lagi\n4) Mengabaikan ilmu yang tidak sesuai keinginan pribadi\n5) Menghargai kesempatan belajar yang ada",
        pertanyaan: "Bentuk pengamalan semangat menuntut ilmu sesuai QS. Al-Mujadalah/58:11 dan QS. Az-Zumar/39:9 ditunjukkan oleh nomor…",
        opsi: [
            "1, 2 dan 5",
            "1, 3 dan 4",
            "2, 3 dan 4",
            "3, 4 dan 5"
        ],
        kunci: 0, // A
        penjelasan: "Pengamalan semangat menuntut ilmu sejati ditunjukkan oleh nomor 1, 2, dan 5 (Opsi A)."
    },

    // ── BAGIAN D: LINTAS BIDANG (Aqidah, Akhlak, Fiqih-SKI) ──
    {
        num: 11,
        tipe: "pg",
        topik: "Lintas Bidang [Aqidah] — Hikmah Beriman kepada Rasul",
        level: "L3",
        pertanyaan: "Salah satu hikmah beriman kepada rasul-rasul Allah adalah… [Aqidah]",
        opsi: [
            "Menjadikan manusia bebas memilih ajaran agama sesuka hati",
            "Menjadi teladan dalam berakhlak mulia dan menjalani kehidupan sesuai tuntunan Allah",
            "Menghapuskan kewajiban beribadah kepada Allah",
            "Membebaskan manusia dari tanggung jawab moral"
        ],
        kunci: 1, // B
        penjelasan: "Hikmah beriman kepada rasul adalah menjadikan beliau teladan utama (uswatun hasanah) dalam berakhlak mulia."
    },
    {
        num: 12,
        tipe: "pg",
        topik: "Lintas Bidang [Aqidah] — Mukjizat Rasul (Kecuali)",
        level: "L2",
        pertanyaan: "Berikut ini yang termasuk mukjizat para rasul, KECUALI… [Aqidah]",
        opsi: [
            "Al-Qur’an sebagai mukjizat Nabi Muhammad Saw.",
            "Tongkat yang berubah menjadi ular pada masa Nabi Musa a.s.",
            "Kemampuan menghidupkan orang mati atas izin Allah pada masa Nabi Isa a.s.",
            "Kekayaan yang berlimpah sebagai bukti kerasulan"
        ],
        kunci: 3, // D
        penjelasan: "Kekayaan berlimpah bukanlah bukti/mukjizat kerasulan (KECUALI). Opsi D."
    },
    {
        num: 13,
        tipe: "pg",
        topik: "Lintas Bidang [Akhlak] — Husnuzan & Kewaspadaan",
        level: "L3",
        pertanyaan: "Sikap husnuzan berbeda dengan sikap terlalu percaya tanpa kewaspadaan, karena husnuzan yang benar tetap… [Akhlak]",
        opsi: [
            "Mengedepankan kehati-hatian yang wajar tanpa berprasangka buruk berlebihan",
            "Mengabaikan segala bentuk kewaspadaan",
            "Menghilangkan akal sehat dalam bersikap",
            "Mempercayai semua orang tanpa syarat apa pun"
        ],
        kunci: 0, // A
        penjelasan: "Husnuzan tidak menghilangkan kehati-hatian yang rasional, melainkan menghindarkan diri dari prasangka jahat tanpa bukti."
    },
    {
        num: 14,
        tipe: "pg",
        topik: "Lintas Bidang [Akhlak] — Lawan Husnuzan",
        level: "L1",
        pertanyaan: "Lawan dari sikap husnuzan yang wajib dihindari seorang muslim adalah… [Akhlak]",
        opsi: [
            "Tawakal",
            "Su’uzan",
            "Qanaah",
            "Tasamuh"
        ],
        kunci: 1, // B
        penjelasan: "Lawan dari Husnuzan (berbaik sangka) adalah Su'uzan (berburuk sangka)."
    },
    {
        num: 15,
        tipe: "pg",
        topik: "Lintas Bidang [SKI] — Perumus Ilmu Nahwu",
        level: "L1",
        pertanyaan: "Tokoh yang berjasa merumuskan ilmu nahwu (tata bahasa Arab) pada masa Bani Umayyah adalah… [SKI]",
        opsi: [
            "Abul Aswad ad-Duali",
            "Jabir bin Hayyan",
            "Ibnu Sina",
            "Al-Khawarizmi"
        ],
        kunci: 0, // A
        penjelasan: "Abul Aswad ad-Duali dirintis oleh dorongan Khalifah Ali bin Abi Talib dan berkembang pada masa Bani Umayyah untuk menyusun tata bahasa Arab (Nahwu)."
    }
];

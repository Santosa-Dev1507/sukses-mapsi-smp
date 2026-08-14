// ═══════════════════════════════════════════════════════════
// BAB 4 Quran Hadis (KAMIS) — QS. Al-Qashas/28:85 & QS. An-Nisa/4:66 -CINTA TANAH AIR
// Latihan Soal Lintas Bidang — MAPSI 2026
// Format: 6 PG Standar + 2 Menjodohkan + 2 PG Multi-Pernyataan + 5 Lintas Bidang (4 Opsi A-D)
// ═══════════════════════════════════════════════════════════
const latihanData = [

    // ── BAGIAN A: PILIHAN GANDA STANDAR ──
    {
        num: 1,
        tipe: "pg",
        topik: "Al-Qur'an & Hadis — Cinta Tanah Air (QS. Al-Qashas/28: 85)",
        level: "L1",
        stimulus: "QS. Al-Qashas/28: 85:\nإِنَّ ٱلَّذِى فَرَضَ عَلَيْكَ ٱلْقُرْءَانَ لَرَآدُّكَ إِلَىٰ مَعَادٍ",
        pertanyaan: "QS. Al-Qashas/28:85 menjelaskan janji Allah Swt. kepada Nabi Muhammad Saw. bahwa beliau akan…",
        opsi: [
            "Dikembalikan ke kampung halamannya (Makkah)",
            "Diberikan kerajaan yang besar di negeri asing",
            "Dijauhkan dari kaumnya selamanya",
            "Diberikan kekayaan yang berlimpah"
        ],
        kunci: 0,
        penjelasan: "QS. Al-Qashas/28:85 berisi janji Allah Swt. untuk mengembalikan Nabi Muhammad Saw. ke tanah kelahirannya (Makkah)."
    },
    {
        num: 2,
        tipe: "pg",
        topik: "Al-Qur'an & Hadis — Pesan Moral Ayat (QS. An-Nisa/4: 66)",
        level: "L3",
        stimulus: "QS. An-Nisa/4: 66 (penggalan):\nوَلَوْ أَنَّا كَتَبْنَا عَلَيْهِمْ أَنِ ٱقْتُلُوٓا۟ أَنفُسَكُمْ أَوِ ٱخْرُجُوا۟ مِن دِيَٰرِكُم مَّا فَعَلُوهُ إِلَّا قَلِيلٌ مِّنْهُمْ",
        pertanyaan: "Salah satu kandungan QS. An-Nisa/4:66 menggambarkan betapa beratnya perintah meninggalkan kampung halaman, sehingga ayat ini sering dikaitkan dengan…",
        opsi: [
            "Kewajiban hijrah bagi seluruh umat Islam",
            "Fitrah manusia yang secara alami mencintai tanah airnya",
            "Larangan tinggal di negeri sendiri",
            "Anjuran untuk terus berpindah-pindah tempat tinggal"
        ],
        kunci: 1,
        penjelasan: "Meninggalkan tanah air digambarkan sangat berat karena mencintai kampung halaman adalah fitrah alami setiap manusia."
    },
    {
        num: 3,
        tipe: "pg",
        topik: "Al-Qur'an & Hadis — Tafaqquh Fiddin (QS. At-Taubah/9: 122)",
        level: "L1",
        pertanyaan: "QS. At-Taubah/9:122 menjelaskan pentingnya sekelompok orang yang tetap tinggal untuk memperdalam ilmu agama (tafaqquh fiddin), agar sekembalinya mereka dapat…",
        opsi: [
            "Memberi peringatan dan membimbing kaumnya",
            "Menjadi pemimpin pemerintahan setempat",
            "Meninggalkan kaumnya secara permanen",
            "Mendirikan negara baru yang terpisah"
        ],
        kunci: 0,
        penjelasan: "Tujuan menuntut ilmu agama adalah untuk memberikan peringatan dan bimbingan moral kepada masyarakat di tanah airnya."
    },
    {
        num: 4,
        tipe: "pg",
        topik: "Al-Qur'an & Hadis — Tajwid (QS. Al-Qashas/28: 85)",
        level: "L2",
        kutipan: "الْقُرْآنَ",
        pertanyaan: "Pada lafal الْقُرْآنَ terdapat hukum bacaan…",
        opsi: [
            "Mad jaiz munfasil",
            "Mad wajib muttasil",
            "Mad thabi'i",
            "Mad 'iwad"
        ],
        kunci: 1, // Berdasarkan kunci naskah pengguna (4-B)
        penjelasan: "Sesuai kunci naskah latihan: terdapat hukum Mad wajib muttasil / Mad badal (Opsi B)."
    },
    {
        num: 5,
        tipe: "pg",
        topik: "Al-Qur'an & Hadis — Wujud Cinta Tanah Air",
        level: "L2",
        pertanyaan: "Rasa cinta tanah air dalam ajaran Islam ditunjukkan dengan sikap…",
        opsi: [
            "Membenci bangsa dan budaya lain tanpa alasan",
            "Menjaga, membela, dan berkontribusi bagi kemajuan negeri sendiri",
            "Menutup diri dari pergaulan dengan bangsa lain",
            "Mengutamakan kepentingan pribadi di atas kepentingan bersama"
        ],
        kunci: 1,
        penjelasan: "Cinta tanah air diwujudkan dengan menjaga kedamaian, membela, dan berkontribusi positif bagi kemajuan bangsa."
    },
    {
        num: 6,
        tipe: "pg",
        topik: "Al-Qur'an & Hadis — Peran Pelajar",
        level: "L2",
        pertanyaan: "Bentuk kontribusi nyata cinta tanah air bagi seorang pelajar dapat diwujudkan dengan cara…",
        opsi: [
            "Rajin belajar dan berprestasi untuk kemajuan bangsa",
            "Mengabaikan aturan sekolah karena dianggap tidak penting",
            "Tidak peduli terhadap kondisi lingkungan sekitar",
            "Hanya mementingkan nilai pribadi tanpa peduli sesama"
        ],
        kunci: 0,
        penjelasan: "Bagi pelajar, wujud cinta tanah air terbaik adalah tekun belajar, berakhlak terpuji, dan berprestasi membanggakan bangsa."
    },

    // ── BAGIAN B: MENJODOHKAN ──
    {
        num: 7,
        tipe: "menjodohkan",
        topik: "Al-Qur'an & Hadis — Menjodohkan Kosakata",
        level: "L1",
        pertanyaan: "Perhatikan tabel lafal dan arti berikut! Pasangkanlah lafal dengan arti yang tepat:",
        kolomKiri: [
            "1. مَعَادٍ",
            "2. دِيَٰرِكُم",
            "3. قَوْمَهُمْ",
            "4. طَآئِفَةٌ"
        ],
        kolomKanan: [
            "A. Kampung halamanmu",
            "B. Tempat kembali",
            "C. Golongan/sekelompok orang",
            "D. Kaum mereka"
        ],
        kunci: [1, 0, 3, 2], // 1->B, 2->A, 3->D, 4->C
        penjelasan: "Pasangan tepat: 1-B (Ma'ād = tempat kembali), 2-A (Diyārikum = kampung halamanmu), 3-D (Qaumahum = kaum mereka), 4-C (Thā'ifatun = sekelompok orang). Kunci opsi: A (1-B, 2-A, 3-D, 4-C)."
    },
    {
        num: 8,
        tipe: "menjodohkan",
        topik: "Al-Qur'an & Hadis — Menjodohkan Konsep & Penjelasan",
        level: "L1",
        pertanyaan: "Perhatikan tabel Konsep dan Penjelasan berikut! Pasangkanlah dengan tepat:",
        kolomKiri: [
            "1. Cinta tanah air",
            "2. Tafaqquh fiddin",
            "3. Hijrah"
        ],
        kolomKanan: [
            "A. Sikap menjaga dan berkontribusi bagi kemajuan negeri",
            "B. Memperdalam ilmu agama",
            "C. Berpindah demi mempertahankan keimanan"
        ],
        kunci: [0, 1, 2], // 1->A, 2->B, 3->C
        penjelasan: "Pasangan tepat: 1-A (Cinta tanah air = jaga & berkontribusi), 2-B (Tafaqquh fiddin = dalami ilmu agama), 3-C (Hijrah = berpindah jaga iman). Kunci opsi: A (1-A, 2-B, 3-C)."
    },

    // ── BAGIAN C: PILIHAN GANDA KOMPLEKS (MULTI-PERNYATAAN) ──
    {
        num: 9,
        tipe: "pg",
        topik: "Al-Qur'an & Hadis — PG Kompleks Kasus Salman",
        level: "L3",
        stimulus: "Perhatikan pernyataan-pernyataan berikut!\nSetelah lulus kuliah di luar negeri, Salman memilih pulang ke kampung halamannya untuk membangun desanya, meskipun mendapat tawaran kerja bergaji besar di luar negeri.\n\n1) Mencerminkan semangat QS. Al-Qashas/28:85 tentang kerinduan kembali ke tanah air\n2) Bertentangan dengan ajaran Islam karena menolak rezeki lebih besar\n3) Mencerminkan kontribusi nyata cinta tanah air\n4) Termasuk sikap yang dianjurkan dalam membangun negeri sendiri\n5) Menunjukkan sikap tidak bersyukur atas kesempatan yang ada",
        pertanyaan: "Pernyataan yang sesuai dengan sikap Salman ditunjukkan oleh nomor…",
        opsi: [
            "1, 3 dan 4",
            "1, 2 dan 5",
            "2, 3 dan 5",
            "2, 4 dan 5"
        ],
        kunci: 0, // A
        penjelasan: "Pernyataan yang sesuai dengan pilihan Salman membangun kampung halaman ditunjukkan oleh nomor 1, 3, dan 4 (Opsi A)."
    },
    {
        num: 10,
        tipe: "pg",
        topik: "Al-Qur'an & Hadis — PG Kompleks An-Nisa/4:66",
        level: "L3",
        stimulus: "Perhatikan pernyataan-pernyataan berikut!\n1) Ayat ini menunjukkan bahwa cinta tanah air adalah fitrah manusia\n2) Hanya sedikit orang yang mampu melaksanakan perintah seberat itu\n3) Ayat ini menganjurkan agar manusia meninggalkan tanah airnya\n4) Kecintaan pada tanah air termasuk hal yang manusiawi\n5) Ayat ini menunjukkan bahwa meninggalkan kampung halaman adalah perkara ringan",
        pertanyaan: "Berdasarkan QS. An-Nisa/4:66, pernyataan yang benar ditunjukkan oleh nomor…",
        opsi: [
            "1, 2 dan 4",
            "1, 3 dan 5",
            "2, 3 dan 4",
            "3, 4 dan 5"
        ],
        kunci: 0, // A
        penjelasan: "Pernyataan yang benar berdasarkan QS. An-Nisa/4:66 ditunjukkan oleh nomor 1, 2, dan 4 (Opsi A)."
    },

    // ── BAGIAN D: LINTAS BIDANG (Aqidah, Akhlak, Fiqih-SKI) ──
    {
        num: 11,
        tipe: "pg",
        topik: "Lintas Bidang [Aqidah] — Jumlah Rasul Wajib",
        level: "L1",
        pertanyaan: "Jumlah rasul yang wajib diketahui dan diimani nama-namanya oleh umat Islam berdasarkan yang disebutkan dalam Al-Qur’an adalah… [Aqidah]",
        opsi: [
            "10 rasul",
            "15 rasul",
            "20 rasul",
            "25 rasul"
        ],
        kunci: 3, // D
        penjelasan: "Jumlah rasul yang wajib diimani secara tafsili (disebutkan dalam al-Qur'an) berjumlah 25 rasul."
    },
    {
        num: 12,
        tipe: "pg",
        topik: "Lintas Bidang [Aqidah] — Sifat Jaiz Rasul",
        level: "L2",
        pertanyaan: "Sifat jaiz (boleh dimiliki) bagi rasul yang menunjukkan bahwa mereka tetap manusia biasa disebut… [Aqidah]",
        opsi: [
            "Siddiq",
            "A’radhul basyariyah",
            "Tabligh",
            "Kizib"
        ],
        kunci: 1, // B
        penjelasan: "A'rāḍul Basyariyah adalah sifat jaiz rasul, yaitu memiliki sifat-sifat kemanusiaan seperti makan, minum, dan lelah tanpa mengurangi derajat kerasulannya."
    },
    {
        num: 13,
        tipe: "pg",
        topik: "Lintas Bidang [Akhlak] — Hadis Larangan Su'uzan",
        level: "L1",
        pertanyaan: "Hadis Nabi Muhammad Saw. tentang larangan berburuk sangka menjelaskan bahwa prasangka buruk termasuk… [Akhlak]",
        opsi: [
            "Perkataan yang paling dusta",
            "Sunnah yang dianjurkan",
            "Ibadah yang utama",
            "Adab pergaulan yang baik"
        ],
        kunci: 0, // A
        penjelasan: "Rasulullah Saw. bersabda: 'Iyyākum waẓ-ẓan, fa innaẓ-ẓanna akżabul-ḥadīṡ' (Jauhilah prasangka, karena prasangka itu adalah sebohong-bohong perkataan)."
    },
    {
        num: 14,
        tipe: "pg",
        topik: "Lintas Bidang [Akhlak] — Manfaat Husnuzan (Kecuali)",
        level: "L2",
        pertanyaan: "Berikut ini adalah manfaat menerapkan sikap husnuzan dalam kehidupan sehari-hari, KECUALI… [Akhlak]",
        opsi: [
            "Menumbuhkan ketenangan hati dan pikiran",
            "Mempererat hubungan silaturahmi antar sesama",
            "Menimbulkan permusuhan dan kecurigaan berlebihan",
            "Menjauhkan diri dari sikap saling curiga"
        ],
        kunci: 2, // C
        penjelasan: "Menimbulkan permusuhan dan kecurigaan adalah dampak buruk Su'uzan, bukan manfaat Husnuzan (KECUALI)."
    },
    {
        num: 15,
        tipe: "pg",
        topik: "Lintas Bidang [Fiqih] — Syarat Wajib Salat Jum'at",
        level: "L1",
        pertanyaan: "Salat Jum’at hukumnya fardu ‘ain bagi… [Fiqih]",
        opsi: [
            "Seluruh laki-laki dan perempuan tanpa kecuali",
            "Laki-laki muslim, balig, berakal, merdeka, dan mukim (bukan musafir)",
            "Musafir yang sedang dalam perjalanan",
            "Perempuan yang sudah balig"
        ],
        kunci: 1, // B
        penjelasan: "Syarat wajib shalat Jum'at fardu 'ain adalah laki-laki, muslim, balig, berakal sehat, merdeka, serta menetap (mukim)."
    }
];

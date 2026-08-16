// ═══════════════════════════════════════════════════════════
// BAB 6 Quran Hadis (SABTU) — Q.S. AT-TAUBAH: 122 & Q.S. LUQMAN: 33
// 24 Soal Premium Bab 6 (Kelompok Quran Hadis / CCI) — Teks Arab Berharakat Presisi
// Format: 12 PG Standar + 6 PGK (2 Jawaban Benar) + 6 Benar/Salah (BS)
// ═══════════════════════════════════════════════════════════
const latihanData = [

    // ── BAGIAN 1: ASPEK QUR'AN-HADIS BAB 6 (SOAL 1 s.d. 16) ──

    // Soal 1 (PG Standar)
    {
        num: 1,
        tipe: "pg",
        topik: "Al-Qur'an & Hadis — Makna Tafaqquh fid-Din Q.S. At-Taubah: 122",
        level: "L1",
        stimulus: "Perhatikan potongan ayat dari Q.S. At-Taubah/9: 122 berikut:\n\n...فَلَوْلَا نَفَرَ مِنْ كُلِّ فِرْقَةٍ مِنْهُمْ طَائِفَةٌ لِيَتَفَقَّهُوا فِي الدِّينِ...",
        pertanyaan: "Berdasarkan kaidah tafsir dan makna bahasa, apa arti dari kalimat لِيَتَفَقَّهُوا فِي الدِّينِ (li-yatafaqqahu fid-dīn) pada penggalan ayat di atas?",
        opsi: [
            "Untuk memenangkan pertempuran fisik melawan musuh",
            "Untuk memperdalam pemahaman ilmu keagamaan secara mendalam dan benar",
            "Untuk mengumpulkan harta rampasan perang sebanyak-banyaknya",
            "Untuk mendirikan lembaga pemerintahan baru di luar Madinah"
        ],
        kunci: 1,
        penjelasan: "Kalimat لِيَتَفَقَّهُوا فِي الدِّينِ (li-yatafaqqahu fid-dīn) berarti \"untuk memperdalam pengetahuan mereka tentang agama\". Ayat ini menekankan pentingnya melahirkan sekelompok orang yang fokus mempelajari ilmu agama."
    },

    // Soal 2 (PG Standar)
    {
        num: 2,
        tipe: "pg",
        topik: "Al-Qur'an & Hadis — Konsep Pembagian Peran Jihad Intelektual Q.S. At-Taubah: 122",
        level: "L2",
        stimulus: "Pada masa Rasulullah saw., ketika seruan jihad fisik ke medan perang berkumandang, seluruh sahabat sangat bersemangat untuk berangkat. Namun, Allah Swt. menurunkan Q.S. At-Taubah: 122 untuk memberikan arahan taktis mengenai pembagian peran sosial.",
        pertanyaan: "Berdasarkan kandungan Q.S. At-Taubah: 122, apa pesan strategis yang ingin disampaikan Allah Swt. mengenai pembagian tugas bagi umat Islam?",
        opsi: [
            "Seluruh kaum muslimin tanpa terkecuali wajib berangkat ke medan perang jika terjadi konflik fisik",
            "Tidak sepatutnya semua orang beriman pergi ke medan perang; harus ada sebagian kelompok yang tinggal untuk menuntut ilmu agama guna menjaga stabilitas intelektual umat",
            "Orang yang menuntut ilmu agama tidak boleh ikut campur dalam urusan pertahanan negara",
            "Kegiatan menuntut ilmu agama hanya boleh dilakukan jika situasi negara sudah benar-benar aman dari musuh"
        ],
        kunci: 1,
        penjelasan: "Q.S. At-Taubah: 122 meletakkan prinsip pembagian peran. Tidak semua orang beriman harus pergi berperang (وَمَا كَانَ الْمُؤْمِنُونَ لِيَنْفِرُوا كَافَّةً). Harus ada sekelompok orang yang konsisten memperdalam ilmu agama."
    },

    // Soal 3 (PG Standar)
    {
        num: 3,
        tipe: "pg",
        topik: "Al-Qur'an & Hadis — Kandungan Q.S. Luqman: 33 (Keadilan Hari Akhir)",
        level: "L1",
        stimulus: "Mari kita baca dengan saksama penggalan dari Q.S. Luqman/31: 33 berikut:\n\n...وَاخْشَوْا يَوْمًا لَا يَجْزِي وَالِدٌ عَنْ وَلَدِهِ وَلَا مَوْلُودٌ هُوَ جَازٍ عَنْ وَالِدِهِ شَيْئًا...",
        pertanyaan: "Berdasarkan potongan ayat di atas, bagaimana gambaran sosiologis pertanggungjawaban manusia pada hari kiamat kelak?",
        opsi: [
            "Orang tua dapat menebus seluruh dosa dan kesalahan anak-anaknya menggunakan harta benda",
            "Anak-anak yang shalih otomatis dapat menanggung dosa bapak ibunya tanpa dihisab",
            "Seorang bapak tidak dapat membela atau menolong anaknya, dan seorang anak pun tidak dapat menolong bapaknya sedikit pun",
            "Pertolongan hanya diberikan kepada orang-orang yang memiliki garis keturunan (nasab) para nabi"
        ],
        kunci: 2,
        penjelasan: "Potongan ayat لَا يَجْزِي وَالِدٌ عَنْ وَلَدِهِ وَلَا مَوْلُودٌ هُوَ جَازٍ عَنْ وَالِدِهِ شَيْئًا menegaskan kemandirian pertanggungjawaban amal di akhirat. Orang tua tidak dapat menolong anaknya, begitu pula sebaliknya."
    },

    // Soal 4 (PG Standar)
    {
        num: 4,
        tipe: "pg",
        topik: "Al-Qur'an & Hadis — Tafsir Q.S. Luqman: 33 (Hakikat Al-Ghurur)",
        level: "L2",
        stimulus: "Allah Swt. menutup Q.S. Luqman: 33 dengan peringatan keras:\n\n...فَلَا تَغُرَّنَّكُمُ الْحَيَاةُ الدُّنْيَا وَلَا يَغُرَّنَّكُمْ بِاللَّهِ الْغَرُورُ",
        pertanyaan: "Berdasarkan tafsir para ulama (seperti Tafsir Ibnu Katsir), siapakah atau apakah yang dimaksud dengan kata الْغَرُورُ (al-ghurūr) di akhir ayat tersebut?",
        opsi: [
            "Harta kekayaan yang melimpah ruah",
            "Kemiskinan yang menjerumuskan pada kekafiran",
            "Setan atau iblis yang selalu memperdaya manusia agar berpaling dari ketaatan kepada Allah",
            "Penguasa yang zalim di muka bumi"
        ],
        kunci: 2,
        penjelasan: "Kata الْغَرُورُ (al-ghurūr) memiliki makna \"si penipu\" atau \"yang memperdaya\", yaitu setan/iblis. Setan selalu menipu manusia dengan menjanjikan keindahan semu dunia."
    },

    // Soal 5 (PG Standar)
    {
        num: 5,
        tipe: "pg",
        topik: "Tajwid — Q.S. At-Taubah: 122 (Idgham Bighunnah)",
        level: "L2",
        stimulus: "Mari kita uji ketelitian tajwid kita pada potongan Q.S. At-Taubah: 122 berikut:\n\n...فَلَوْلَا نَفَرَ مِنْ كُلِّ فِرْقَةٍ مِنْهُمْ طَائِفَةٌ لِيَتَفَقَّهُوا...",
        pertanyaan: "Manakah lafal yang mengandung hukum bacaan Idgham Bighunnah (melebur disertai dengung) pada potongan ayat di atas?",
        opsi: [
            "مِنْ كُلِّ",
            "فِرْقَةٍ مِنْهُمْ",
            "طَائِفَةٌ لِيَتَفَقَّهُوا",
            "مِنْهُمْ طَائِفَةٌ"
        ],
        kunci: 1,
        penjelasan: "Pada lafal فِرْقَةٍ مِنْهُمْ (firqatim-minhum), terdapat harakat tanwin kasrah ( ٍ ) bertemu dengan huruf Mim (م) yang merupakan huruf Idgham Bighunnah."
    },

    // Soal 6 (PG Standar)
    {
        num: 6,
        tipe: "pg",
        topik: "Al-Qur'an & Hadis — Hadis Kewajiban Menuntut Ilmu",
        level: "L1",
        stimulus: "Rasulullah saw. bersabda dalam sebuah hadis yang sangat populer mengenai pentingnya literasi keilmuan:\n\nطَلَبُ الْعِلْمِ فَرِيضَةٌ عَلَى كُلِّ مُسْلِمٍ (رواه ابن ماجه)",
        pertanyaan: "Berdasarkan kandungan hadis di atas, hukum menuntut ilmu bagi setiap individu muslim (fardhu 'ain) adalah…",
        opsi: [
            "Sunnah muakkad (sangat dianjurkan)",
            "Wajib (fardhu) secara personal",
            "Mubah (diperbolehkan) sesuai keinginan",
            "Makruh jika dilakukan secara berlebihan"
        ],
        kunci: 1,
        penjelasan: "Kata فَرِيضَةٌ (farīdhatun) bermakna kewajiban yang mutlak. Hadis ini menegaskan bahwa menuntut ilmu hukumnya adalah wajib secara personal (fardhu 'ain) bagi setiap muslim."
    },

    // Soal 7 (PG Standar)
    {
        num: 7,
        tipe: "pg",
        topik: "Al-Qur'an & Hadis — Urgensi Membangun Keahlian (Expertise)",
        level: "L3",
        stimulus: "Tafsir kontemporer terhadap Q.S. At-Taubah: 122 menjelaskan bahwa perintah tafaqquh fid-din tidak hanya terbatas pada menghafal teks-teks hukum, melainkan perintah bagi umat Islam untuk membangun spesialisasi keahlian (expertise) di berbagai bidang kehidupan.",
        pertanyaan: "Berdasarkan analisis tersebut, apa korelasi antara membangun keahlian (expertise) dengan kejayaan peradaban umat Islam?",
        opsi: [
            "Keahlian di bidang sains umum tidak memiliki kaitan dengan kejayaan Islam karena yang bernilai pahala hanya ilmu fikih ibadah",
            "Umat Islam wajib melahirkan para ahli di berbagai disiplin ilmu (baik agama maupun sains umum) agar tidak bergantung pada bangsa lain dan mampu memimpin peradaban dunia secara mandiri",
            "Memiliki keahlian khusus dapat memicu rasa sombong yang merusak kemurnian tauhid",
            "Spesialisasi keahlian hanya ditujukan bagi para pemimpin pemerintahan saja"
        ],
        kunci: 1,
        penjelasan: "Berdasarkan esensi tafsir Q.S. At-Taubah: 122, kemajuan umat Islam ditopang oleh adanya spesialisasi keahlian (expertise). Umat Islam harus melahirkan ulama, dokter, insinyur, dan ekonom handal."
    },

    // Soal 8 (PG Standar)
    {
        num: 8,
        tipe: "pg",
        topik: "Al-Qur'an & Hadis — Pendidikan Karakter Luqman (Urutan Materi Dakwah)",
        level: "L3",
        stimulus: "Di dalam Al-Qur'an (khususnya Surah Luqman), Allah mengabadikan metode Luqman Al-Hakim dalam mendidik anak-anaknya. Urutan nasihat yang disampaikan memiliki struktur kurikulum pendidikan Islam yang sangat ideal.",
        pertanyaan: "Ditinjau dari analisis pendidikan Islam, materi utama dan pertama yang wajib ditanamkan kepada anak sebelum mengajarkan ibadah sosial lainnya adalah…",
        opsi: [
            "Adab berteman dan sopan santun di jalanan",
            "Tata cara berdagang secara jujur dan mandiri",
            "Penanaman tauhid (keimanan) dan larangan berbuat syirik kepada Allah Swt.",
            "Perintah melaksanakan ibadah shalat malam dan puasa sunah"
        ],
        kunci: 2,
        penjelasan: "Kurikulum pendidikan Luqman menempatkan Tauhid (akidah) sebagai fondasi utama dan pertama sebelum materi lainnya (Q.S. Luqman: 13)."
    },

    // Soal 9 (PGK — 2 Jawaban Benar)
    {
        num: 9,
        tipe: "pgk",
        topik: "Tajwid — PGK Tajwid Q.S. Luqman: 33 (Ikhfa dan Idgham Bilaghunnah)",
        level: "L2",
        stimulus: "Mari kita bantu teman kelompok tadarus kita untuk menganalisis hukum tajwid Nun Mati/Tanwin pada penggalan Q.S. Luqman: 33 berikut:\n\n...وَاخْشَوْا يَوْمًا لَا يَجْزِي وَالِدٌ عَنْ وَلَدِهِ...",
        pertanyaan: "Berdasarkan kaidah ilmu tajwid yang benar, manakah dua hukum bacaan yang tepat pada potongan ayat di atas? (Pilihlah dua jawaban yang benar!)",
        opsi: [
            "Lafal يَوْمًا لَا mengandung hukum Idgham Bilaghunnah karena terdapat harakat tanwin fathah bertemu dengan huruf Lam (ل).",
            "Lafal يَوْمًا لَا mengandung hukum Idgham Bighunnah karena dibaca mendengung panjang.",
            "Lafal عَنْ وَلَدِهِ mengandung hukum Idgham Bighunnah karena terdapat huruf Nun Mati bertemu dengan huruf Wau (و).",
            "Lafal عَنْ وَلَدِهِ mengandung hukum Izhar Halqi karena dibaca sangat jelas di kerongkongan."
        ],
        kunci: [0, 2],
        penjelasan: "يَوْمًا لَا mengandung Idgham Bilaghunnah (tanwin bertemu Lam). عَنْ وَلَدِهِ mengandung Idgham Bighunnah (Nun Mati bertemu Wau)."
    },

    // Soal 10 (PGK — 2 Jawaban Benar)
    {
        num: 10,
        tipe: "pgk",
        topik: "Al-Qur'an & Hadis — PGK Analisis Nilai Kembar Q.S. At-Taubah: 122 (Ilmu dan Amal)",
        level: "L3",
        pertanyaan: "Q.S. At-Taubah: 122 mengaitkan proses mencari ilmu dengan tanggung jawab menyebarkannya. Manakah dua kesimpulan yang benar mengenai hubungan antara tafaqquh (belajar) dan indzar (memberi peringatan/mengajar) berdasarkan ayat tersebut? (Pilihlah dua jawaban yang benar!)",
        opsi: [
            "Tujuan akhir dari memperdalam ilmu agama (tafaqquh) adalah untuk diamalkan dan ditransmisikan (diajarkan) kepada masyarakat (indzar) demi kemaslahatan umat.",
            "Seseorang diperbolehkan menuntut ilmu hanya untuk disimpan sendiri sebagai modal kesombongan intelektual tanpa perlu mendakwahkannya.",
            "Dakwah atau penyampaian peringatan (indzar) wajib ditopang oleh landasan keilmuan yang matang (tafaqquh) agar tidak menyesatkan umat.",
            "Belajar agama dan mengajar merupakan dua hal yang terpisah dan tidak memiliki kaitan moral dalam hukum Islam."
        ],
        kunci: [0, 2],
        penjelasan: "Q.S. At-Taubah: 122 menggariskan alur pembelajaran: pertama adalah fase memperdalam ilmu (tafaqquh), kedua adalah fase dakwah edukatif (indzar)."
    },

    // Soal 11 (PGK — 2 Jawaban Benar)
    {
        num: 11,
        tipe: "pgk",
        topik: "Al-Qur'an & Hadis — PGK Karakteristik Jiwa yang Selamat Menurut Q.S. Luqman: 33",
        level: "L2",
        pertanyaan: "Di dalam Q.S. Luqman: 33, Allah Swt. memberikan resep keselamatan agar manusia tidak merugi di akhirat. Manakah dua sikap batin yang wajib ditunjukkan sesuai dengan tuntunan ayat tersebut? (Pilihlah dua jawaban yang benar!)",
        opsi: [
            "Memiliki rasa takut (khassyah) dan takwa yang mendalam kepada Allah Swt. dengan mengamalkan perintah-Nya.",
            "Menyibukkan diri mengumpulkan kemegahan dunia secara berlebihan karena menganggap dunia adalah tempat tinggal abadi.",
            "Senantiasa mawas diri dan waspada terhadap segala bentuk bujuk rayu setan yang melalaikan bekal akhirat.",
            "Mengandalkan amal ibadah orang tua atau anak untuk menjamin jaminan masuk surga tanpa hisab."
        ],
        kunci: [0, 2],
        penjelasan: "Q.S. Luqman: 33 mendidik kita untuk: (1) bertakwa kepada Allah, (2) takut akan hari akhir, dan (3) tidak tertipu oleh pesona duniawi serta tipu daya setan."
    },

    // Soal 12 (PGK — 2 Jawaban Benar)
    {
        num: 12,
        tipe: "pgk",
        topik: "Al-Qur'an & Hadis — PGK Hadis Keutamaan Orang Berilmu (Mempermudah Jalan Surga)",
        level: "L2",
        stimulus: "Rasulullah saw. memberikan motivasi rohani yang sangat indah bagi para pejuang ilmu di jalan Allah Swt.:\n\nمَنْ سَلَكَ طَرِيقًا يَلْتَمِسُ فِيهِ عِلْمًا سَهَّلَ اللَّهُ لَهُ بِهِ طَرِيقًا إِلَى الْجَنَّةِ (رواه مسلم)",
        pertanyaan: "Berdasarkan sabda Rasulullah saw. di atas, manakah dua keutamaan agung yang dianugerahi Allah Swt. bagi para penuntut ilmu? (Pilihlah dua jawaban yang benar!)",
        opsi: [
            "Allah Swt. menjamin akan mempermudah jalan baginya untuk menuju ke dalam surga-Nya.",
            "Allah Swt. akan membebaskannya dari kewajiban berikhtiar mencari nafkah lahiriah di dunia.",
            "Aktivitas melangkahkan kaki mencari ilmu dikategorikan sebagai ibadah bernilai tinggi yang mendekatkan hamba pada keridhaan-Nya.",
            "Penuntut ilmu diberikan otoritas mutlak untuk menghakimi dan menghukum kesalahan orang awam di dunia."
        ],
        kunci: [0, 2],
        penjelasan: "Berdasarkan H.R. Muslim tersebut, para pencari ilmu dijanjikan kemudahan akses menuju surga (سَهَّلَ اللَّهُ لَهُ بِهِ طَرِيقًا إِلَى الْجَنَّةِ)."
    },

    // Soal 13 (Benar/Salah)
    {
        num: 13,
        tipe: "pg",
        topik: "Al-Qur'an & Hadis — B/S Hukum Menuntut Ilmu Fardhu Kifayah vs Fardhu 'Ain",
        level: "L2",
        pertanyaan: "Hukum menuntut ilmu keagamaan praktis harian (seperti tata cara wudhu dan shalat) adalah fardhu 'ain (wajib bagi setiap individu), sedangkan menuntut ilmu spesialisasi mendalam (seperti ilmu tafsir, kedokteran, dan astronomi) hukumnya adalah fardhu kifayah (kewajiban kolektif).\n\nApakah pernyataan di atas BENAR atau SALAH?",
        opsi: [
            "BENAR",
            "SALAH"
        ],
        kunci: 0,
        penjelasan: "BENAR. Ilmu agama yang menunjang keabsahan ibadah harian personal berstatus fardhu 'ain. Sedangkan ilmu-ilmu spesialisasi berstatus fardhu kifayah."
    },

    // Soal 14 (Benar/Salah)
    {
        num: 14,
        tipe: "pg",
        topik: "Al-Qur'an & Hadis — B/S Ulasan Lafal Ayat Q.S. At-Taubah: 122",
        level: "L2",
        pertanyaan: "Susunan teks dari potongan Q.S. At-Taubah/9: 122 berikut ini ditulis dengan urutan harakat dan lafal yang benar:\n\nوَمَا كَانَ الْمُؤْمِنُونَ لِيَنْفِرُوا كَافَّةً فَلَوْلَا نَفَرَ مِنْ كُلِّ فِرْقَةٍ مِنْهُمْ طَائِفَةٌ لِيَتَفَقَّهُوا فِي الدِّينِ\n\nApakah pernyataan di atas BENAR atau SALAH?",
        opsi: [
            "BENAR",
            "SALAH"
        ],
        kunci: 0,
        penjelasan: "BENAR. Susunan teks Arab di atas merupakan potongan bagian awal dari Q.S. At-Taubah ayat 122 secara tepat."
    },

    // Soal 15 (Benar/Salah)
    {
        num: 15,
        tipe: "pg",
        topik: "Al-Qur'an & Hadis — B/S Fungsi Dakwah Indzar (Mengembalikan Kesadaran Sosial)",
        level: "L3",
        pertanyaan: "Berdasarkan penggalan akhir Q.S. At-Taubah: 122, tujuan utama para penuntut ilmu kembali ke masyarakat untuk memberikan peringatan (indzar) adalah agar kaumnya dapat mawas diri dan menjaga diri (لَعَلَّهُمْ يَحْذَرُونَ) dari perbuatan maksiat dan murka Allah Swt..\n\nApakah pernyataan di atas BENAR atau SALAH?",
        opsi: [
            "BENAR",
            "SALAH"
        ],
        kunci: 0,
        penjelasan: "BENAR. Kalimat لَعَلَّهُمْ يَحْذَرُونَ (la'allahum yaḥzarūn) bermakna \"agar mereka dapat menjaga dirinya\"."
    },

    // Soal 16 (Benar/Salah)
    {
        num: 16,
        tipe: "pg",
        topik: "Al-Qur'an & Hadis — B/S Janji Allah yang Haq Q.S. Luqman: 33",
        level: "L1",
        pertanyaan: "Potongan Q.S. Luqman/31: 33 yang berbunyi إِنَّ وَعْدَ اللَّهِ حَقٌّ (inna wa'dallāhi ḥaqqun) menegaskan bahwa janji Allah Swt. (termasuk peristiwa kebangkitan, pengadilan mahsyar, surga, dan neraka) adalah mutlak benar dan pasti akan terbukti kenyataannya.\n\nApakah pernyataan di atas BENAR atau SALAH?",
        opsi: [
            "BENAR",
            "SALAH"
        ],
        kunci: 0,
        penjelasan: "BENAR. Lafal إِنَّ وَعْدَ اللَّهِ حَقٌّ secara harfiah berarti \"Sesungguhnya janji Allah adalah benar\"."
    },

    // ── BAGIAN 2: ASPEK AQIDAH-AKHLAK BAB 6 (SOAL 17 s.d. 20) ──

    // Soal 17 (PG Standar)
    {
        num: 17,
        tipe: "pg",
        topik: "Aqidah — Penerapan Takdir Mubram",
        level: "L1",
        pertanyaan: "Di bawah ini yang merupakan contoh penerapan konkret dari Takdir Mubram (ketetapan Allah yang tidak dapat diubah oleh usaha manusia) dalam kehidupan nyata adalah…",
        opsi: [
            "Seseorang yang terlahir kurang mampu berubah menjadi kaya raya karena rajin berdagang",
            "Terjadinya peristiwa kematian (ajal) seseorang tepat pada waktu yang telah ditetapkan Allah Swt.",
            "Seorang pelajar berhasil menjuarai olimpiade sains karena belajar dengan sangat giat",
            "Sembuhnya seseorang dari penyakit demam berdarah setelah berobat ke rumah sakit"
        ],
        kunci: 1,
        penjelasan: "Kematian (ajal) adalah takdir mubram. Ketika ajal tiba, ia tidak dapat ditunda atau dimajukan sedikit pun oleh usaha manusia."
    },

    // Soal 18 (PG Standar)
    {
        num: 18,
        tipe: "pg",
        topik: "Akhlak — Penerapan Akhlak Kasih Sayang Lingkungan",
        level: "L2",
        stimulus: "Air merupakan sumber kehidupan utama bagi seluruh makhluk hidup di bumi. Menjaga kelestarian sumber air merupakan bagian penting dari implementasi akhlak lingkungan.",
        pertanyaan: "Manakah tindakan harian di sekolah yang mencerminkan sikap kasih sayang terhadap lingkungan alam terkait pemanfaatan air?",
        opsi: [
            "Membiarkan kran wastafel tetap menyala agar airnya meluap membasahi lantai halaman",
            "Mematikan kran air setelah selesai digunakan untuk berwudhu agar tidak terjadi pemborosan air (tabzir)",
            "Menggunakan air bersih sebanyak-banyaknya untuk menyiram satu tanaman hias kecil",
            "Membuang sampah kemasan plastik ke dalam bak penampungan air wudhu masjid sekolah"
        ],
        kunci: 1,
        penjelasan: "Mematikan kran air setelah wudhu merupakan tindakan nyata menghemat air dan menghindari perilaku boros (tabzir) yang dilarang dalam Islam."
    },

    // Soal 19 (PGK — 2 Jawaban Benar)
    {
        num: 19,
        tipe: "pgk",
        topik: "Aqidah — PGK Hikmah Mengimani Qada' dan Qadar",
        level: "L3",
        pertanyaan: "Keimanan yang kokoh terhadap Qada' dan Qadar melahirkan kekuatan kepribadian yang tangguh. Manakah dua hikmah utama yang diperoleh seorang muslim yang mengimani takdir Allah Swt.? (Pilihlah dua jawaban yang benar!)",
        opsi: [
            "Terhindar dari sifat sombong (takabur) saat meraih kesuksesan hidup karena sadar semua terjadi atas izin Allah Swt..",
            "Menjadi malas berikhtiar karena menganggap hasil akhir masa depan telah terkunci mati di Lauhul Mahfuzh.",
            "Memiliki ketenangan jiwa, optimisme tinggi, dan tidak mudah putus asa (stress) ketika tertimpa kegagalan.",
            "Diizinkan melanggar norma kedisiplinan sekolah apabila merasa ditakdirkan menjadi anak nakal."
        ],
        kunci: [0, 2],
        penjelasan: "Iman takdir menghapus kesombongan karena ia tahu kesuksesan adalah karunia Allah, dan sebaliknya melahirkan kedamaian jiwa (resiliensi mental)."
    },

    // Soal 20 (Benar/Salah)
    {
        num: 20,
        tipe: "pg",
        topik: "Akhlak — B/S Fadhilah Menanam Pohon Bernilai Sedekah",
        level: "L2",
        pertanyaan: "Berdasarkan sabda Rasulullah saw., menanam sebatang pohon yang kemudian buah atau daunnya dimakan oleh burung, manusia, maupun binatang ternak dinilai sebagai amalan sedekah bagi orang yang menanamnya.\n\nApakah pernyataan di atas BENAR atau SALAH?",
        opsi: [
            "BENAR",
            "SALAH"
        ],
        kunci: 0,
        penjelasan: "BENAR. Pernyataan tersebut benar sesuai dengan H.R. Bukhari dari Anas bin Malik."
    },

    // ── BAGIAN 3: ASPEK FIKIH & SKI BAB 6 (SOAL 21 s.d. 24) ──

    // Soal 21 (PG Standar)
    {
        num: 21,
        tipe: "pg",
        topik: "Fikih — Syarat Jarak Shalat Qashar",
        level: "L2",
        pertanyaan: "Berapakah jarak minimal perjalanan (safar) yang harus ditempuh oleh seorang musafir agar diperbolehkan meringkas rakaat shalat fardhu-nya secara sah menurut Mazhab Syafi'i?",
        opsi: [
            "Minimal sejauh 40,3 kilometer (1 marhalah)",
            "Minimal sejauh 80,6 kilometer (2 marhalah)",
            "Minimal sejauh 120 kilometer penuh",
            "Tidak dibatasi jarak asalkan sudah keluar daerah tempat tinggal"
        ],
        kunci: 1,
        penjelasan: "Jarak minimal musafir boleh meringkas shalat (qashar) adalah 2 marhalah, yang dalam ukuran modern setara dengan sekitar 80,6 kilometer atau lebih."
    },

    // Soal 22 (PG Standar)
    {
        num: 22,
        tipe: "pg",
        topik: "SKI — Sejarah Pendirian Daulah Mughal",
        level: "L1",
        pertanyaan: "Daulah Mughal di India resmi berdiri pada tahun 1526 M setelah pendirinya memenangkan pertempuran legendaris di Panipat I. Siapakah tokoh pendiri daulah tersebut?",
        opsi: [
            "Jalaluddin Akbar",
            "Zahiruddin Muhammad Babur",
            "Shah Jahan",
            "Aurangzeb"
        ],
        kunci: 1,
        penjelasan: "Daulah Mughal didirikan oleh Zahiruddin Muhammad Babur pada tahun 1526 M setelah ia sukses menaklukkan Sultan Delhi, Ibrahim Lodi, dalam Pertempuran Panipat I."
    },

    // Soal 23 (PGK — 2 Jawaban Benar)
    {
        num: 23,
        tipe: "pgk",
        topik: "Fikih — PGK Kaidah Shalat Jamak Taqdim dan Ta'khir",
        level: "L2",
        pertanyaan: "Shalat jamak memberikan kemudahan menggabungkan dua shalat fardhu dalam satu waktu. Manakah dua aturan teknis yang dinilai sah? (Pilihlah dua jawaban yang benar!)",
        opsi: [
            "Shalat Jamak Taqdim wajib dikerjakan secara tertib berurutan rakaatnya dimulai dari shalat yang pertama.",
            "Shalat Maghrib dan shalat Isya boleh digabungkan secara jamak taqdim di waktu shalat Ashar.",
            "Pada Shalat Jamak Ta'khir, musafir wajib berniat menunda shalat pertama sebelum berakhirnya waktu shalat pertama tersebut.",
            "Shalat jamak secara otomatis memotong jumlah rakaat shalat fardhu menjadi setengahnya tanpa niat qashar."
        ],
        kunci: [0, 2],
        penjelasan: "Taqdim mensyaratkan tertib rakaat. Ta'khir mensyaratkan adanya niat penundaan (ta'khir) yang dihadirkan di waktu shalat pertama selagi waktu shalat pertama masih ada."
    },

    // Soal 24 (Benar/Salah)
    {
        num: 24,
        tipe: "pg",
        topik: "SKI — B/S Pembangunan Monumen Taj Mahal",
        level: "L1",
        pertanyaan: "Bangunan indah berskala internasional \"Taj Mahal\" di Agra, India, dibangun pada masa keemasan Daulah Mughal atas prakarsa Kaisar Shah Jahan sebagai makam monumental bagi istri tercintanya, Mumtaz Mahal.\n\nApakah pernyataan di atas BENAR atau SALAH?",
        opsi: [
            "BENAR",
            "SALAH"
        ],
        kunci: 0,
        penjelasan: "BENAR. Sejarah mencatat bahwa bangunan berlapis marmer putih \"Taj Mahal\" didirikan oleh kaisar kelima Daulah Mughal, Shah Jahan (1628-1658 M)."
    }
];

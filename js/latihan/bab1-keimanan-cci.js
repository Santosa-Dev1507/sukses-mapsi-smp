// ═══════════════════════════════════════════════════════════
// BAB 1 Quran Hadis (SENIN) — QS. Al-Baqarah/2:285 & QS. An-Nisa/4:150-151 - KEIMANAN
// 24 Soal Premium Hari Senin (Bab 1) — Teks Arab Berharakat Presisi
// Format: 12 PG Standar + 8 PGK (2 Jawaban Benar) + 4 Benar/Salah (BS)
// ═══════════════════════════════════════════════════════════
const latihanData = [

    // ── BAGIAN 1: ASPEK QUR'AN-HADIS & TAJWID BAB 1 (SOAL 1 s.d. 16) ──

    // Soal 1 (PG Standar)
    {
        num: 1,
        tipe: "pg",
        topik: "Al-Qur'an & Hadis — Kesetaraan Rasul (Q.S. al-Baqarah/2: 285)",
        level: "L1",
        stimulus: "Teman-teman, bayangkan jika dalam sebuah tim olahraga, para pemain hanya mau mendengarkan satu pelatih saja dan mengabaikan pelatih lainnya yang ditugaskan oleh manajemen yang sama. Tentu tim tersebut akan kacau, kan? Nah, di dalam Q.S. al-Baqarah/2: 285, Allah Swt. menegaskan hal yang serupa tentang bagaimana kita harus mengimani para rasul-Nya.",
        pertanyaan: "Berdasarkan kandungan Q.S. al-Baqarah/2: 285, apa sikap utama yang ditunjukkan oleh Rasulullah saw. dan orang-orang beriman terhadap para utusan Allah Swt.?",
        opsi: [
            "Hanya mengimani rasul yang membawa kitab suci paling tebal",
            "Meyakini semua rasul tanpa membeda-bedakan satu dengan yang lain (لَا نُفَرِّقُ بَيْنَ أَحَدٍ مِّنْ رُّسُلِهِ)",
            "Mengutamakan kepatuhan kepada rasul dari golongan bangsa Arab saja",
            "Memilih-milih rasul yang mukjizat fisiknya paling masuk akal"
        ],
        kunci: 1,
        penjelasan: "Di dalam Q.S. al-Baqarah/2: 285, orang-orang beriman menyatakan: لَا نُفَرِّقُ بَيْنَ أَحَدٍ مِّنْ رُّسُلِهِ (Kami tidak membeda-bedakan seorang pun dari rasul-rasul-Nya). Ini mengajarkan kita untuk mengimani kesucian tugas kerasulan semua utusan Allah Swt. tanpa terkecuali."
    },

    // Soal 2 (PG Standar)
    {
        num: 2,
        tipe: "pg",
        topik: "Al-Qur'an & Hadis — Komitmen Kepatuhan (Q.S. al-Baqarah/2: 285)",
        level: "L2",
        stimulus: "Ketika guru memberikan instruksi praktikum IPA di laboratorium, murid yang disiplin akan langsung menyimak arahan tersebut dengan teliti dan segera melaksanakannya demi kelancaran bersama. Hal ini sangat mirip dengan ikrar komitmen para sahabat nabi ketika menerima perintah-perintah dari Allah Swt..",
        pertanyaan: "Lafal dalam Q.S. al-Baqarah/2: 285 yang menggambarkan kesiapan mental orang beriman untuk mendengar dan menaati aturan Allah Swt. adalah…",
        opsi: [
            "غُفْرَانَكَ رَبَّنَا",
            "كُلٌّ اٰمَنَ بِاللّٰهِ",
            "سَمِعْنَا وَأَطَعْنَا",
            "وَإِلَيْكَ الْمَصِيْرُ"
        ],
        kunci: 2,
        penjelasan: "Lafal سَمِعْنَا وَأَطَعْنَا (Sami'nā wa aṭa'nā) memiliki arti 'Kami mendengar dan kami taat'. Penggalan ini merupakan representasi kepatuhan total (obedience) dan komitmen tinggi dari seorang mukmin sejati dalam menjalankan syariat agama."
    },

    // Soal 3 (PG Standar)
    {
        num: 3,
        tipe: "pg",
        topik: "Al-Qur'an & Hadis — Kecaman Memilah Iman (Q.S. an-Nisā’/4: 150-151)",
        level: "L1",
        stimulus: "Terkadang ada orang yang ingin mengambil 'jalan tengah' yang tidak konsisten dalam beragama. Mereka berkata, 'Aku percaya nabi ini karena ramah, tapi aku menolak nabi itu karena aturannya terasa berat.' Q.S. an-Nisā’/4: 150-151 memberikan peringatan yang sangat tegas terhadap pola pikir seperti ini.",
        pertanyaan: "Berdasarkan kandungan Q.S. an-Nisā’/4: 150-151, apa sebutan Allah Swt. bagi orang-orang yang beriman kepada sebagian rasul namun mengingkari sebagian lainnya?",
        opsi: [
            "Orang munafik yang dimaafkan",
            "Orang kafir yang sebenar-benarnya (أُولَٰئِكَ هُمُ الْكَافِرُونَ حَقًّا)",
            "Golongan pertengahan yang mendapat kelonggaran",
            "Kaum musafir yang tersesat sementara"
        ],
        kunci: 1,
        penjelasan: "Q.S. an-Nisā’/4: 150-151 menegaskan bahwa memisah-misahkan keimanan kepada Allah dari para rasul-Nya dengan cara beriman sebagian dan ingkar sebagian adalah tindakan kekufuran yang nyata. Allah melabeli mereka sebagai أُولَٰئِكَ هُمُ الْكَافِرُونَ حَقًّا (merekalah orang-orang kafir yang sebenar-benarnya)."
    },

    // Soal 4 (PG Standar)
    {
        num: 4,
        tipe: "pg",
        topik: "Al-Qur'an & Hadis — Asbabun Nuzul (Q.S. an-Nisā’/4: 150-151)",
        level: "L3",
        stimulus: "Pada masa Nabi Muhammad saw., terdapat sebagian kelompok Ahli Kitab yang bersikap diskriminatif. Mereka dengan bangga memercayai nabi-nabi dari kalangan bangsa mereka sendiri (seperti Nabi Musa a.s. atau Nabi Isa a.s.), namun mereka menolak keras kerasulan Nabi Muhammad saw. hanya karena beliau tidak berasal dari golongan mereka.",
        pertanyaan: "Berdasarkan analisis sejarah di atas, Q.S. an-Nisā’/4: 150-151 diturunkan Allah Swt. sebagai bantahan langsung terhadap klaim…",
        opsi: [
            "Kaum Quraisy yang menolak adanya hari kebangkitan secara fisik",
            "Ahli Kitab yang mengaku beriman kepada sebagian nabi, namun mendustakan nabi lainnya karena faktor fanatisme suku",
            "Kaum Ansar yang merasa keberatan dengan pembagian harta rampasan perang",
            "Orang-orang munafik yang enggan ikut membela negara di medan perang"
        ],
        kunci: 1,
        penjelasan: "Ayat ini diturunkan untuk meluruskan penyimpangan akidah sebagian Ahli Kitab yang mengimani nabi-nabi terdahulu tetapi mendustakan nabi berikutnya karena fanatisme golongan. Islam menegaskan bahwa menolak satu rasul sama saja dengan menolak seluruh ajaran Allah Swt."
    },

    // Soal 5 (PG Standar)
    {
        num: 5,
        tipe: "pg",
        topik: "Tajwid — Aturan Alif Lam Syamsiyah",
        level: "L1",
        stimulus: "Teman-teman, kata الشَّمْسِيَّة (Syamsiyah) itu berasal dari kata شَمْسٌ (Syamsun) yang artinya matahari. Bayangkan ketika kamu melihat matahari yang sangat silau, matamu tidak bisa melihat benda lain di sekitarnya dengan jelas. Sama seperti huruf lam pada Alif Lam yang suaranya langsung melebur hilang ketika bertemu huruf Syamsiyah.",
        pertanyaan: "Manakah di antara pernyataan berikut yang menggambarkan ciri utama dan cara membaca hukum Alif Lam Syamsiyah dalam Al-Qur'an?",
        opsi: [
            "Alif lam dibaca jelas (izh-har) dan ditandai dengan tanda sukun di atas huruf lam",
            "Alif lam dibaca melebur (idgham) ke huruf setelahnya, dan ditandai dengan harakat tasydid di atas huruf setelah lam",
            "Huruf lam harus dibaca mendengung kuat selama tiga ketukan di bibir",
            "Alif lam dibaca samar-samar dengan posisi mulut setengah terbuka"
        ],
        kunci: 1,
        penjelasan: "Al-Syamsiyah (atau Idgham Syamsiyah) dibaca dengan melesapkan suara alif lam langsung masuk ke huruf berikutnya. Cirinya di mushaf sangat mudah dikenali, yaitu tidak ada sukun di atas huruf lam, melainkan ada tanda tasydid ( ّ ) di atas huruf setelahnya."
    },

    // Soal 6 (PG Standar)
    {
        num: 6,
        tipe: "pg",
        topik: "Tajwid — Rumus Huruf Al-Qamariyah",
        level: "L2",
        stimulus: "Agar memudahkan kita menghafal 14 huruf Alif Lam Qamariyah, para ulama tajwid merangkumnya dalam sebuah kalimat singkatan yang unik dan mudah diingat:\nاَبْغِ حَجَّكَ وَخَفْ عَقِيْمَهُ",
        pertanyaan: "Berdasarkan singkatan legendaris di atas, manakah kelompok huruf di bawah ini yang semuanya termasuk ke dalam huruf Alif Lam Qamariyah?",
        opsi: [
            "ب , ج , ف , ع",
            "ت , ث , د , ر",
            "س , ش , ص , ض",
            "ط , ظ , ل , ن"
        ],
        kunci: 0,
        penjelasan: "Kalimat اَبْغِ حَجَّكَ وَخَفْ عَقِيْمَهُ merangkum huruf Qamariyah: Alif, Ba, Ghain, Ha, Jim, Kaf, Wawu, Kha, Fa, 'Ain, Qaf, Ya, Mim, dan Ha. Pilihan A (Ba, Jim, Fa, 'Ain) semuanya ada di dalam singkatan tersebut, sementara pilihan B, C, dan D adalah huruf-huruf Syamsiyah."
    },

    // Soal 7 (PG Standar)
    {
        num: 7,
        tipe: "pg",
        topik: "Tajwid — Aplikasi Q.S. al-Baqarah/2: 285",
        level: "L2",
        stimulus: "Mari kita amati baik-baik potongan awal dari Q.S. al-Baqarah/2: 285 ini:\nاٰمَنَ الرَّسُوْلُ بِمَآ اُنْزِلَ اِلَيْهِ مِنْ رَّبِّهٖ وَالْمُؤْمِنُوْنَۗ",
        pertanyaan: "Berdasarkan potongan ayat di atas, lafal manakah yang mengandung hukum bacaan Alif Lam Syamsiyah dan Alif Lam Qamariyah secara berurutan?",
        opsi: [
            "الْمُؤْمِنُوْنَ dan الرَّسُوْلُ",
            "الرَّسُوْلُ dan الْمُؤْمِنُوْنَ",
            "الرَّسُوْلُ dan مِنْ رَّبِّهٖ",
            "الْمُؤْمِنُوْنَ dan اِلَيْهِ"
        ],
        kunci: 1,
        penjelasan: "Lafal الرَّسُوْلُ (ar-rasūlu) adalah Al-Syamsiyah karena alif lam bertemu Ra (ر) yang bertasydid. Lafal الْمُؤْمِنُوْنَ (al-mu'minūna) adalah Al-Qamariyah karena alif lam bertemu Mim (م) yang berharakat dan dibaca jelas (izh-har)."
    },

    // Soal 8 (PG Standar)
    {
        num: 8,
        tipe: "pg",
        topik: "Al-Qur'an & Hadis — Doa Akhir Q.S. al-Baqarah/2: 285",
        level: "L1",
        stimulus: "'Ampunilah kami, ya Tuhan kami, dan hanya kepada-Mu tempat kembali.' (Terjemahan akhir Q.S. al-Baqarah/2: 285). Doa indah ini selalu dibaca oleh para sahabat dan orang beriman setelah mengikrarkan kepatuhan.",
        pertanyaan: "Penggalan lafal bahasa Arab yang tepat untuk terjemahan doa di atas adalah…",
        opsi: [
            "سَمِعْنَا وَأَطَعْنَا",
            "كُلٌّ اٰمَنَ بِاللّٰهِ",
            "غُفْرَانَكَ رَبَّنَا وَإِلَيْكَ الْمَصِيْرُ",
            "لَا نُفَرِّقُ بَيْنَ أَحَدٍ مِّنْ رُّسُلِهِ"
        ],
        kunci: 2,
        penjelasan: "Lafal غُفْرَانَكَ رَبَّنَا وَإِلَيْكَ الْمَصِيْرُ (Gufrānaka rabbanā wa ilaikal-maṣīr) memiliki arti: 'Ampunilah kami, ya Tuhan kami, dan hanya kepada-Mu tempat kembali'. Ini merupakan doa permohonan ampun dan pengingat bahwa akhirat adalah pelabuhan terakhir kita."
    },

    // Soal 9 (PGK — 2 Jawaban Benar)
    {
        num: 9,
        tipe: "pgk",
        topik: "Al-Qur'an & Hadis — PGK Karakter Iman vs Kufur",
        level: "L3",
        stimulus: "Coba teman-teman bandingkan Q.S. al-Baqarah/2: 285 yang memuji sikap orang beriman dengan Q.S. an-Nisā’/4: 150-151 yang mengecam keras perilaku orang kafir. Perbandingan ini menunjukkan dua kutub sikap batin yang sangat bertolak belakang.",
        pertanyaan: "Berdasarkan perbandingan kedua ayat tersebut, manakah dua pernyataan yang benar mengenai karakteristik mukmin sejati dan kafir sejati? (Pilihlah dua jawaban yang benar!)",
        opsi: [
            "Mukmin sejati mengimani semua utusan Allah tanpa membeda-bedakannya sedikit pun (لَا نُفَرِّقُ بَيْنَ أَحَدٍ مِّنْ رُّسُلِهِ).",
            "Mukmin sejati boleh memilih untuk menolak nabi yang tidak memiliki kitab suci tertulis.",
            "Kafir sejati adalah mereka yang memilah-milah iman dengan menerima sebagian nabi dan menolak sebagian lainnya.",
            "Kafir sejati adalah sebutan untuk orang yang tidak sengaja lupa menghafal nama-nama nabi."
        ],
        kunci: [0, 2],
        penjelasan: "Orang mukmin sejati mengimani seluruh nabi dan rasul secara utuh tanpa diskriminasi. Sebaliknya, orang kafir sejati (al-kāfirūna ḥaqqā) adalah mereka yang mendiskriminasi para nabi dengan membagi keimanan (mengaku percaya sebagian, namun ingkar pada sebagian lainnya)."
    },

    // Soal 10 (PGK — 2 Jawaban Benar)
    {
        num: 10,
        tipe: "pgk",
        topik: "Tajwid — PGK Analisis Kesalahan Alif Lam",
        level: "L3",
        stimulus: "Saat tadarus Al-Qur'an di kelas, Rio melafalkan lafal اَلرَّحْمٰنُ dengan membunyikan huruf lam secara jelas (al-raḥmān). Di ayat berikutnya, ia melafalkan lafal اَلْحَمْدُ dengan menghilangkan suara lam (ah-ḥamdu).",
        pertanyaan: "Berdasarkan hukum tajwid Al-Qamariyah dan Al-Syamsiyah, analisis manakah yang tepat mengenai kesalahan membaca yang dilakukan oleh Rio? (Pilihlah dua jawaban yang benar!)",
        opsi: [
            "Rio salah membaca اَلرَّحْمٰنُ, karena lafal tersebut mengandung Alif Lam Syamsiyah yang seharusnya dibaca melebur (ar-raḥmān), bukan jelas.",
            "Rio sudah benar membaca اَلرَّحْمٰنُ karena huruf Ra wajib dibaca jelas sejelas terangnya matahari.",
            "Rio salah membaca اَلْحَمْدُ, karena lafal tersebut mengandung Alif Lam Qamariyah yang seharusnya dibaca jelas (al-ḥamdu), bukan melebur.",
            "Rio sudah benar membaca اَلْحَمْدُ karena huruf Ha merupakan huruf Syamsiyah yang meleburkan suara."
        ],
        kunci: [0, 2],
        penjelasan: "Lafal اَلرَّحْمٰنُ (ar-Raḥmān) adalah Al-Syamsiyah (bertemu Ra), suara lam wajib melebur -> ar-raḥmān. Lafal اَلْحَمْدُ (al-Ḥamdu) adalah Al-Qamariyah (bertemu Ha), suara lam wajib dibaca jelas -> al-ḥamdu."
    },

    // Soal 11 (PGK — 2 Jawaban Benar)
    {
        num: 11,
        tipe: "pgk",
        topik: "Tajwid — PGK Menyeleksi Contoh Al-Qamariyah",
        level: "L2",
        stimulus: "Mari kita bantu kelompok piket kelas VII-A yang sedang menyortir kartu-kartu lafal tajwid untuk ditempel di papan mading sekolah. Ada dua kotak besar berlabel 'Al-Qamariyah' dan 'Al-Syamsiyah'.",
        pertanyaan: "Manakah di antara lafal di bawah ini yang wajib dimasukkan ke dalam kotak berlabel Alif Lam Qamariyah? (Pilihlah dua jawaban yang benar!)",
        opsi: [
            "الْيَوْمِ",
            "الرَّسُوْلُ",
            "الْكِتٰبَ",
            "السَّمَاۤءِ"
        ],
        kunci: [0, 2],
        penjelasan: "Lafal الْيَوْمِ (al-yaum) dan الْكِتٰبَ (al-kitāb) adalah contoh Alif Lam Qamariyah karena alif lam bertemu Ya (ي) dan Ba (ب) serta dibaca jelas (izh-har). Lafal الرَّسُوْلُ dan السَّمَاۤءِ adalah Alif Lam Syamsiyah."
    },

    // Soal 12 (PGK — 2 Jawaban Benar)
    {
        num: 12,
        tipe: "pgk",
        topik: "Al-Qur'an & Hadis — PGK Dampak Psikologis Keimanan",
        level: "L3",
        stimulus: "Di akhir Q.S. al-Baqarah/2: 285, orang beriman menutup ikrarnya dengan memohon ampunan (غُفْرَانَكَ رَبَّنَا) dan mengingat akhirat (وَإِلَيْكَ الْمَصِيْرُ). Ini membuktikan iman melahirkan mentalitas yang stabil.",
        pertanyaan: "Berdasarkan kandungan ayat tersebut, apa saja dampak positif secara psikologis bagi pelajar yang memiliki keimanan yang kokoh? (Pilihlah dua jawaban yang benar!)",
        opsi: [
            "Memiliki kerendahan hati (tawadhu) untuk selalu mengevaluasi kesalahan diri dan memohon ampunan (غُفْرَانَكَ رَبَّنَا) kepada Allah Swt.",
            "Merasa diri paling suci sehingga gampang meremehkan kemampuan teman sekelas.",
            "Memiliki kesadaran bahwa hidup di dunia ini sementara karena menyadari semua akan kembali kepada Allah Swt. (وَإِلَيْكَ الْمَصِيْرُ).",
            "Menjadi pasif dan malas berusaha karena menganggap nasibnya sudah ditentukan secara mutlak."
        ],
        kunci: [0, 2],
        penjelasan: "Keimanan yang kokoh mengajarkan kerendahan hati untuk selalu beristighfar memohon ampunan (غُفْرَانَكَ رَبَّنَا) serta kesadaran eksistensial bahwa segala kesedihan dan kebahagiaan dunia sifatnya sementara karena semua makhluk akan kembali kepada Allah Swt. (وَإِلَيْكَ الْمَصِيْرُ)."
    },

    // Soal 13 (Benar/Salah)
    {
        num: 13,
        tipe: "pg",
        topik: "Al-Qur'an & Hadis — B/S Aplikasi Taat di Sekolah",
        level: "L2",
        stimulus: "Di sekolah, kita sering mendengarkan tata tertib seperti dilarang membuang sampah sembarangan dan wajib menjaga ketenangan kelas. Orang yang beriman menerapkan nilai kepatuhan secara jujur tanpa perlu ditunggui guru piket.",
        pertanyaan: "Sikap patuh pada aturan kebaikan di sekolah secara tulus tanpa perlu diawasi oleh guru piket merupakan implementasi nyata dari konsep keimanan سَمِعْنَا وَأَطَعْنَا (Sami'nā wa aṭa'nā) yang termaktub dalam Q.S. al-Baqarah/2: 285.\n\nApakah pernyataan di atas BENAR atau SALAH?",
        opsi: [
            "BENAR",
            "SALAH"
        ],
        kunci: 0,
        penjelasan: "BENAR. Sikap سَمِعْنَا وَأَطَعْنَا mengajarkan kepatuhan yang lahir dari kesadaran iman di dalam dada, bukan kepatuhan palsu yang hanya muncul saat dilihat atau diawasi oleh manusia."
    },

    // Soal 14 (Benar/Salah)
    {
        num: 14,
        tipe: "pg",
        topik: "Al-Qur'an & Hadis — B/S Batasan Toleransi Akidah",
        level: "L3",
        stimulus: "Andi berpendapat bahwa demi menjaga persahabatan dengan teman yang berbeda keyakinan di kelas, kita diperbolehkan untuk memercayai sebagian rasul agama lain dan menolak kerasulan nabi kita sendiri sebagai bentuk kompromi keragaman.",
        pertanyaan: "Ditinjau dari penegasan teologis Q.S. an-Nisā’/4: 150-151, pendapat Andi di atas dibenarkan dan dinilai sebagai cara beriman yang sah dalam ajaran Islam.\n\nApakah pernyataan di atas BENAR atau SALAH?",
        opsi: [
            "BENAR",
            "SALAH"
        ],
        kunci: 1,
        penjelasan: "SALAH. Q.S. an-Nisā’/4: 150-151 melarang keras sikap memilah-milah keimanan kepada rasul. Mengurangi atau menolak satu rasul dinilai sebagai kekufuran yang sejati (أُولَٰئِكَ هُمُ الْكَافِرُونَ حَقًّا). Toleransi adalah menghargai perbedaan ibadah pemeluk lain, bukan mengorbankan atau menukar prinsip akidah kita sendiri."
    },

    // Soal 15 (Benar/Salah)
    {
        num: 15,
        tipe: "pg",
        topik: "Tajwid — B/S Analisis Lafal Al-Ardh",
        level: "L2",
        stimulus: "Perhatikan contoh kata yang sering kita dengar dalam salat berjamaah: فِي الْاَرْضِ (fil-arḍi).",
        pertanyaan: "Pada lafal الْاَرْضِ, hukum bacaan yang terjadi adalah Alif Lam Syamsiyah karena huruf lam-nya lebur hilang suaranya saat diucapkan.\n\nApakah pernyataan di atas BENAR atau SALAH?",
        opsi: [
            "BENAR",
            "SALAH"
        ],
        kunci: 1,
        penjelasan: "SALAH. Lafal الْاَرْضِ (al-arḍi) mengandung hukum Alif Lam Qamariyah karena huruf alif lam bertemu dengan huruf Hamzah (ا) yang merupakan salah satu huruf Qamariyah, ditandai dengan huruf lam yang terbaca jelas (fil) dan terdapat tanda sukun di atasnya."
    },

    // Soal 16 (Benar/Salah)
    {
        num: 16,
        tipe: "pg",
        topik: "Tajwid — B/S Ciri Visual Mushaf",
        level: "L1",
        stimulus: "Ketika membuka mushaf Al-Qur'an, kita dapat mengenali hukum tajwid alif lam secara cepat hanya dengan mengamati tanda baca (syakal) yang tertulis di atasnya.",
        pertanyaan: "Tanda visual Alif Lam Qamariyah ditandai dengan tanda sukun ( ْ ) di atas huruf lam, sedangkan Alif Lam Syamsiyah ditandai dengan tidak adanya sukun pada lam dan terdapat tanda tasydid ( ّ ) pada huruf setelahnya.\n\nApakah pernyataan di atas BENAR atau SALAH?",
        opsi: [
            "BENAR",
            "SALAH"
        ],
        kunci: 0,
        penjelasan: "BENAR. Deskripsi visual tersebut benar. Dalam kaidah penulisan mushaf, tanda sukun menunjukkan dibaca jelas (izh-har / Qamariyah), sedangkan tanda tasydid menunjukkan peleburan suara (idgham / Syamsiyah)."
    },

    // ── BAGIAN 2: ASPEK AQIDAH-AKHLAK BAB 1 (SOAL 17 s.d. 20) ──

    // Soal 17 (PG Standar)
    {
        num: 17,
        tipe: "pg",
        topik: "Aqidah — Asmaul Husna Al-Khabīr",
        level: "L1",
        stimulus: "Teman-teman, pernahkah kamu melihat seorang detektif yang sedang memeriksa barang bukti menggunakan kaca pembesar? Sangat teliti dan mendetail sekali, kan? Nah, ketelitian manusia itu sangat terbatas, sedangkan Allah Swt. memiliki ketelitian yang tanpa batas.",
        pertanyaan: "Nama indah Allah Swt. (Asmaul Husna) yang membuktikan bahwa Allah Mahateliti, Maha Mengetahui segala perkara yang tersembunyi hingga bagian detail yang terkecil adalah…",
        opsi: [
            "اَلْبَصِيْرُ",
            "اَلسَّمِيْعُ",
            "اَلْخَبِيْرُ",
            "اَلْعَلِيْمُ"
        ],
        kunci: 2,
        penjelasan: "اَلْخَبِيْرُ (al-Khabīr) artinya Allah Maha Mengetahui hal-hal yang tersembunyi secara mendetail dan teliti. Meneladani sifat ini menuntut kita sebagai pelajar untuk selalu cermat, teliti, dan berhati-hati dalam bertindak maupun belajar."
    },

    // Soal 18 (PG Standar)
    {
        num: 18,
        tipe: "pg",
        topik: "Akhlak — Ikhlas (Q.S. an-Nisā’/4: 146)",
        level: "L2",
        stimulus: "Perhatikan penggalan Q.S. an-Nisā’/4: 146 tentang syarat kesalehan batin berikut:\n...وَاعْتَصَمُوْا بِاللّٰهِ وَاَخْلَصُوْا دِيْنَهُمْ لِلّٰهِ فَاُولٰۤىِٕكَ مَعَ الْمُؤْمِنِيْنَۗ",
        pertanyaan: "Berdasarkan potongan ayat di atas, sikap apa yang wajib dihadirkan oleh seorang hamba agar amalnya bernilai ikhlas di sisi Allah Swt.?",
        opsi: [
            "Memurnikan niat beribadah dan ketaatan beragama hanya demi mencari rida Allah Swt. (وَاَخْلَصُوْا دِيْنَهُمْ لِلّٰهِ)",
            "Melakukan perbaikan diri hanya di depan guru agar dinilai sebagai murid teladan",
            "Berpegang teguh pada adat istiadat nenek moyang meskipun bertolak belakang dengan syariat",
            "Meminta imbalan materi setiap kali menyelesaikan tugas kelompok di sekolah"
        ],
        kunci: 0,
        penjelasan: "Penggalan وَاَخْلَصُوْا دِيْنَهُمْ لِلّٰهِ (wa akhlaṣū dīnahum lillāh) menegaskan bahwa esensi ikhlas adalah ketulusan dalam beragama, yaitu memurnikan segala niat amal ibadah semata-mata karena Allah Swt., bebas dari penyakit riya, sum'ah, atau pamrih pujian makhluk."
    },

    // Soal 19 (PGK — 2 Jawaban Benar)
    {
        num: 19,
        tipe: "pgk",
        topik: "Aqidah — PGK Al-Samī' dan Al-Baṣīr",
        level: "L2",
        stimulus: "Di lingkungan sekolah, kita sering dihadapkan pada situasi sosial yang menguji iman kita terhadap pengawasan Allah Swt. yang Maha Mendengar dan Maha Melihat.",
        pertanyaan: "Manakah di antara tindakan berikut yang menunjukkan perilaku meneladani sifat اَلسَّمِيْعُ (al-Samī') dan اَلْبَصِيْرُ (al-Baṣīr) secara seimbang di sekolah? (Pilihlah dua jawaban yang benar!)",
        opsi: [
            "Mendengarkan penjelasan guru dengan takzim di kelas dan menjaga tutur kata dari kalimat kotor (meneladani اَلسَّمِيْعُ).",
            "Sengaja berbicara keras-keras saat salat jemaah agar dinilai khusyuk oleh teman-teman kelas.",
            "Menjaga kebersihan laci meja kelas meskipun tidak ada kamera CCTV atau guru piket yang melihat (meneladani اَلْبَصِيْرُ).",
            "Memilih berbohong kepada guru piket saat terlambat masuk sekolah demi menghindari hukuman."
        ],
        kunci: [0, 2],
        penjelasan: "Sifat اَلسَّمِيْعُ mendorong kita memanfaatkan pendengaran untuk kebaikan dan menjaga lisan dari lara sosial. Sifat اَلْبَصِيْرُ mendidik kita memiliki karakter jujur dan mawas diri (ihsan) karena merasa selalu diawasi oleh Allah yang Maha Melihat, bahkan di tempat sepi sekalipun."
    },

    // Soal 20 (Benar/Salah)
    {
        num: 20,
        tipe: "pg",
        topik: "Akhlak — B/S Sikap Menghadapi Kritik",
        level: "L3",
        stimulus: "Sila merasa kesal dan enggan menyapa teman kelompoknya lagi setelah tugas clipping buatannya dikritik karena kurang rapi. Sila menganggap keikhlasannya dalam bekerja telah dirusak oleh penilaian buruk temannya tersebut.",
        pertanyaan: "Ditinjau dari hakikat ikhlas yang murni, sikap kesal dan memutus tali silaturahmi yang ditunjukkan oleh Sila akibat dikritik merupakan tanda bahwa tindakan Sila tersebut belum didasari oleh keikhlasan yang sejati.\n\nApakah pernyataan di atas BENAR atau SALAH?",
        opsi: [
            "BENAR",
            "SALAH"
        ],
        kunci: 0,
        penjelasan: "BENAR. Salah satu indikator keikhlasan yang sejati adalah kemantapan hati dalam berbuat baik tanpa terpengaruh oleh pujian maupun kritikan manusia. Jika seseorang langsung mogok berbuat baik hanya karena mendapat kritik konstruktif, itu menandakan niat amalnya masih bercampur dengan keinginan mendapatkan pengakuan sosial (riya/sum'ah)."
    },

    // ── BAGIAN 3: ASPEK FIKIH & SKI BAB 1 (SOAL 21 s.d. 24) ──

    // Soal 21 (PG Standar)
    {
        num: 21,
        tipe: "pg",
        topik: "Fikih — Tata Cara Sujud Sahwi",
        level: "L2",
        stimulus: "Saat salat Isya berjamaah di mushalla sekolah, imam lupa tidak melakukan duduk tasyahud awal dan langsung berdiri tegak ke rakaat ketiga. Jemaah mengingatkan dengan membaca subhanallah, lalu imam melanjutkan salatnya sampai selesai.",
        pertanyaan: "Berdasarkan kasus di atas, bagaimana tata cara pelaksanaan sujud sahwi (سُجُوْدُ السَّهْوِ) yang benar dan disunnahkan untuk dilakukan imam dan jemaah sebelum mengakhiri salat?",
        opsi: [
            "Melakukan sujud satu kali setelah mengucapkan salam pertama",
            "Melakukan sujud sebanyak dua kali setelah membaca tasyahud akhir sebelum salam",
            "Mengulang kembali salat Isya dari awal rakaat pertama bersama jemaah",
            "Melakukan sujud tilawah sebanyak dua kali di luar salat setelah salam"
        ],
        kunci: 1,
        penjelasan: "Sujud sahwi dilakukan sebanyak dua kali sebelum salam (setelah selesai membaca bacaan tasyahud akhir dan sebelum salam pertama) untuk menyempurnakan kelalaian atau keraguan yang terjadi di dalam salat fardhu."
    },

    // Soal 22 (PG Standar)
    {
        num: 22,
        tipe: "pg",
        topik: "SKI — Baitul Mal Daulah Bani Umayyah",
        level: "L1",
        stimulus: "Daulah Bani Umayyah di Damaskus berhasil menata administrasi pemerintahan dengan sangat rapi laksana negara modern. Salah satu keberhasilannya adalah mengaktifkan lembaga keuangan negara untuk membiayai pembangunan fasilitas umum dan bantuan sosial bagi warga kurang mampu.",
        pertanyaan: "Lembaga keuangan resmi milik negara bentukan masa awal Islam yang dioptimalkan perannya oleh Daulah Bani Umayyah untuk mengelola kas pendapatan dan pengeluaran negara adalah…",
        opsi: [
            "دِيْوَانُ الْجُنْدِ",
            "بَيْتُ الْمَالِ",
            "بَيْتُ الْحِكْمَةِ",
            "دَارُ الْعِلْمِ"
        ],
        kunci: 1,
        penjelasan: "بَيْتُ الْمَالِ (Baitul Mal) adalah lembaga kas negara yang bertugas mengelola keuangan negara (seperti zakat, pajak kharaj, jizyah) untuk disalurkan demi kemaslahatan umat, pembangunan masjid, dan kesejahteraan masyarakat pada masa Bani Umayyah."
    },

    // Soal 23 (PGK — 2 Jawaban Benar)
    {
        num: 23,
        tipe: "pgk",
        topik: "Fikih — PGK Dampak Spiritual Sujud Tilawah",
        level: "L3",
        stimulus: "Rasulullah saw. bersabda bahwa ketika anak Adam membaca ayat sajdah lalu ia bersujud, maka setan akan menyingkir sambil menangis dan menyesali kedurhakaannya di masa lalu yang enggan sujud ketika diperintah Allah Swt.",
        pertanyaan: "Berdasarkan hikmah spiritual tersebut, apa saja dampak positif dan keutamaan bagi seorang muslim yang mengamalkan sujud tilawah (سُجُوْدُ التِّلَاوَةِ)? (Pilihlah dua jawaban yang benar!)",
        opsi: [
            "Melatih jiwa untuk tunduk dan menjauhkan diri dari sifat sombong (takabur) laksana karakter setan yang enggan tunduk pada perintah Allah.",
            "Mendapatkan dispensasi bebas dari kewajiban melaksanakan salat fardhu lima waktu selama satu hari penuh.",
            "Mendapatkan rida Allah Swt. dan dijauhkan dari godaan setan karena meneladani kepatuhan para malaikat dan nabi.",
            "Berhak mendapatkan porsi bantuan sosial yang lebih banyak dari pengurus kas masjid setempat."
        ],
        kunci: [0, 2],
        penjelasan: "Sujud tilawah merupakan representasi ketundukan total hamba kepada keagungan Allah Swt. saat mendengar ayat-ayat Sajdah. Ini mendidik jiwa agar terhindar dari kesombongan (takabur) dan menutup celah godaan setan yang menyesal melihat kepatuhan anak Adam."
    },

    // Soal 24 (Benar/Salah)
    {
        num: 24,
        tipe: "pg",
        topik: "SKI — B/S Kodifikasi Hadis Umar bin Abdul Aziz",
        level: "L1",
        stimulus: "Pada masa pemerintahan Khalifah Umar bin Abdul Aziz (Daulah Bani Umayyah), beliau melihat banyak penghafal hadis gugur di medan perang dan mulai bermunculan hadis palsu akibat perpecahan golongan, sehingga beliau berinisiatif melakukan pembukuan hadis secara resmi.",
        pertanyaan: "Khalifah Umar bin Abdul Aziz merupakan tokoh pemimpin Bani Umayyah yang sangat berjasa dalam menginstruksikan kodifikasi (pembukuan) hadis Nabi saw. secara resmi untuk pertama kalinya dalam sejarah Islam.\n\nApakah pernyataan di atas BENAR atau SALAH?",
        opsi: [
            "BENAR",
            "SALAH"
        ],
        kunci: 0,
        penjelasan: "BENAR. Kebijakan Khalifah Umar bin Abdul Aziz untuk memerintahkan para ulama (seperti Ibnu Syihab az-Zuhri) membukukan hadis merupakan tonggak emas sejarah yang menyelamatkan otentisitas ajaran Islam dari kepunahan dan distorsi hadis palsu (maudhu')."
    }
];

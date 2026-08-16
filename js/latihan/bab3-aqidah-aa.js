// ═══════════════════════════════════════════════════════════
// BAB 3 Aqidah-Akhlak (RABU) — IMAN KEPADA RASUL, AKHLAK CINTA RASUL & HUSNUZAN
// 24 Soal Premium Hari Rabu (Kelompok Aqidah-Akhlak) — Teks Arab Berharakat Presisi
// Format: 12 PG Standar + 6 PGK (2 Jawaban Benar) + 6 Benar/Salah (BS)
// ═══════════════════════════════════════════════════════════
const latihanData = [

    // ── BAGIAN 1: ASPEK AQIDAH-AKHLAK BAB 3 (SOAL 1 s.d. 16) ──

    // Soal 1 (PG Standar)
    {
        num: 1,
        tipe: "pg",
        topik: "Aqidah — Definisi Iman kepada Rasul",
        level: "L1",
        stimulus: "Rasulullah saw. diutus sebagai rahmat bagi semesta alam. Tugas utama mereka adalah membawa risalah kebenaran demi membimbing umat manusia agar berjalan di rute yang diridai Allah Swt..",
        pertanyaan: "Berdasarkan teks materi akidah, apa yang dimaksud dengan beriman kepada Rasul-Rasul Allah Swt.?",
        opsi: [
            "Mengagumi ketampanan fisik dan mukjizat para nabi untuk dijadikan dongeng pengantar tidur saja",
            "Memercayai dan meyakini dengan sepenuh hati bahwa Allah Swt. benar-benar mengutus utusan-utusan-Nya yang ditugaskan untuk membimbing umat ke jalan yang benar agar selamat di dunia dan akhirat",
            "Menganggap semua nabi adalah malaikat berwujud manusia yang turun ke bumi tanpa membawa syariat baru",
            "Menghafal seluruh nama nabi yang berjumlah ratusan ribu secara lisan tanpa perlu mengamalkan ajarannya"
        ],
        kunci: 1,
        penjelasan: "Berdasarkan kutipan dari materi keimanan, 'Iman kepada Rasul Allah adalah mempercayai, meyakini dengan sepenuh hati bahwa Allah telah benar-benar mengutus Rasul-Rasul Allah yang ditugaskan untuk membimbing umatnya ke jalan yang benar agar selamat di dunia dan akhirat.'"
    },

    // Soal 2 (PG Standar)
    {
        num: 2,
        tipe: "pg",
        topik: "Aqidah — Perbedaan Nabi dan Rasul",
        level: "L1",
        pertanyaan: "Ditinjau dari segi tugas penyampaian wahyu kepada umat manusia, perbedaan fungsional utama antara seorang Nabi dan seorang Rasul adalah…",
        opsi: [
            "Nabi menerima wahyu dari malaikat, sedangkan Rasul menerima wahyu langsung dari Allah Swt. tanpa perantara",
            "Nabi diutus khusus untuk kaum Bani Israil saja, sedangkan Rasul diutus untuk seluruh umat manusia secara universal",
            "Rasul menerima wahyu berupa syariat baru dan wajib menyampaikannya kepada umat, sedangkan Nabi menerima wahyu untuk menegaskan syariat sebelumnya dan tidak wajib menyampaikannya kepada umat",
            "Rasul memiliki mukjizat fisik yang luar biasa, sedangkan Nabi tidak dibekali mukjizat sama sekali"
        ],
        kunci: 2,
        penjelasan: "Perbedaan nabi dan rasul terletak pada kewajiban menyampaikan wahyu. Rasul menerima wahyu berupa syariat baru dan diperintahkan menyampaikannya kepada umat manusia. Sedangkan nabi menerima wahyu untuk dirinya sendiri atau untuk menegaskan syariat nabi terdahulu, dan tidak ditugaskan/wajib menyampaikannya kepada umat yang baru."
    },

    // Soal 3 (PG Standar)
    {
        num: 3,
        tipe: "pg",
        topik: "Aqidah — Sifat Wajib Fatanah",
        level: "L2",
        stimulus: "Para rasul sering kali dihadapkan pada para penentang dari kaumnya yang cerdas namun keras kepala. Untuk menanamkan kebenaran ke dalam hati orang-orang yang ragu serta memberikan argumentasi yang kuat, para rasul dianugerahi sifat cerdas.",
        pertanyaan: "Sifat wajib bagi para nabi dan rasul yang berarti cerdas dan mampu memberikan jalan keluar atas persoalan umat serta mampu menghadirkan argumentasi bagi para penentangnya adalah…",
        opsi: [
            "صِدْقٌ",
            "أَمَانَةٌ",
            "تَبْلِيْغٌ",
            "فَطَانَةٌ"
        ],
        kunci: 3,
        penjelasan: "Sifat فَطَانَةٌ (Fatanah) artinya cerdas. Para nabi dan rasul memiliki kecerdasan yang luar biasa dalam menjalankan tugas kerasulan agar mampu memecahkan masalah umat, menghadirkan hujjah (argumentasi) yang logis untuk menghadapi para penentang, serta menepis keraguan di hati umatnya."
    },

    // Soal 4 (PG Standar)
    {
        num: 4,
        tipe: "pg",
        topik: "Akhlak — Implementasi Akhlak Cinta Rasul: Taat (Q.S. an-Nisā’/4: 80)",
        level: "L2",
        stimulus: "Perhatikan potongan firman Allah Swt. tentang ketaatan berikut:\n\nمَّن يُطِعِ ٱلرَّسُولَ فَقَدۡ أَطَاعَ ٱللَّهَۖ",
        pertanyaan: "Bagaimana bentuk penerapan nyata dari makna potongan ayat di atas bagi seorang pelajar di lingkungan sekolah?",
        opsi: [
            "Rajin melaksanakan ibadah hanya ketika berada di bawah pengawasan langsung guru agama Islam",
            "Mengikuti sunah Rasulullah saw. dengan gemar berkata jujur, disiplin, dan senang membantu teman di kelas",
            "Mengabaikan aturan tata tertib sekolah karena menganggap hukum dunia tidak penting",
            "Menuntut ilmu umum saja tanpa mau mempelajari ilmu etika lisan dan akhlak beragama"
        ],
        kunci: 1,
        penjelasan: "Di dalam Q.S. An-Nisā’/4: 80 disebutkan 'Barangsiapa yang menaati Rasul itu, sesungguhnya ia telah menaati Allah'. Bentuk kecintaan dan kepatuhan kita kepada Rasul di sekolah adalah dengan menghidupkan keluhuran akhlaknya (uswatun hasanah) seperti membiasakan kejujuran, disiplin, dan gotong royong."
    },

    // Soal 5 (PG Standar)
    {
        num: 5,
        tipe: "pg",
        topik: "Akhlak — Etika Sosial Tabayun di Era Digital",
        level: "L2",
        stimulus: "Di grup WhatsApp kelas VII, beredar tangkapan layar chat yang menyebutkan bahwa salah satu teman kalian telah mencuri uang kas kelas. Banyak siswa langsung membagikan ulang berita tersebut tanpa memikirkan efeknya, sehingga suasana kelas menjadi tegang dan timbul rasa curiga.",
        pertanyaan: "Tindakan terbaik yang selaras dengan sikap تَبَيُّنٌ (tabayun) dalam menyikapi berita miring di atas adalah…",
        opsi: [
            "Langsung menyebarkan ke grup sekolah agar semua siswa waspada kepada teman tersebut",
            "Mencari kejelasan tentang kebenaran berita tersebut dengan meneliti sumbernya dan menanyakan langsung secara tenang kepada pihak terkait",
            "Ikut memojokkan dan menjauhi teman yang dituduh agar tidak dianggap sebagai bagian dari pencuri",
            "Membalas chat tersebut dengan kata-kata kasar demi membela kehormatan kelompok kita"
        ],
        kunci: 1,
        penjelasan: "Secara istilah, tabayun adalah proses penelitian dan penyeleksian berita, tidak tergesa-gesa dalam memutuskan sesuatu, hingga jelas benar permasalahannya. Langkah terbaik adalah menyaring informasi, memastikan sumber, dan mengklarifikasi agar terhindar dari kesalahpahaman."
    },

    // Soal 6 (PG Standar)
    {
        num: 6,
        tipe: "pg",
        topik: "Akhlak — Menghindari Gibah (Q.S. al-Hujurāt/49: 12)",
        level: "L1",
        stimulus: "Membicarakan aib atau keburukan orang lain (gibah) merupakan perbuatan yang sangat dicela dalam Islam. Allah Swt. memberikan perumpamaan yang sangat menjijikkan bagi siapa saja yang gemar menggunjing saudaranya.",
        pertanyaan: "Berdasarkan kandungan Q.S. al-Hujurāt/49: 12, Allah Swt. mengumpamakan pelaku gibah (menggunjing) laksana orang yang…",
        opsi: [
            "Membakar rumah tetangganya sendiri hingga hangus tak bersisa",
            "Membuang seluruh tabungan masa depannya ke dalam lautan yang dalam",
            "Memakan daging saudaranya yang sudah mati (menjadi bangkai)",
            "Berjalan tanpa busana di tengah keramaian pasar kota"
        ],
        kunci: 2,
        penjelasan: "Di dalam Q.S. al-Hujurāt/49: 12, Allah Swt. secara jelas menyandingkan dosa menggunjing saudaranya dengan gambaran memakan daging saudaranya yang sudah mati: 'Adakah seorang di antara kamu yang suka memakan daging saudaranya yang sudah mati? Maka tentulah kamu merasa jijik kepadanya...'."
    },

    // Soal 7 (PG Standar)
    {
        num: 7,
        tipe: "pg",
        topik: "Akhlak — Manfaat Sikap Husnuzan",
        level: "L2",
        stimulus: "Ketika melihat salah satu teman sekelas berbisik-bisik dengan guru piket sambil menatap ke arahnya, Alif tidak langsung merasa tersinggung atau menduga teman tersebut sedang melaporkan kesalahannya, melainkan ia menduga mereka sedang mendiskusikan tugas kelompok di kelas.",
        pertanyaan: "Sikap mental Alif yang selalu berprasangka baik (husnuzan) memberikan manfaat positif di lingkungan sekolah, yaitu…",
        opsi: [
            "Menjadikan dirinya anak yang paling ditakuti oleh seluruh siswa di sekolah",
            "Mencegah kesalahpahaman, meredam konflik, dan menumbuhkan keharmonisan hidup dalam pertemanan",
            "Membuat dirinya terbebas dari tugas piket dan tugas kelompok selama satu semester",
            "Menjamin dirinya otomatis mendapatkan nilai rapor tertinggi tanpa perlu belajar"
        ],
        kunci: 1,
        penjelasan: "Berprasangka baik (husnuzan) kepada sesama manusia sangat penting untuk menumbuhkan keharmonisan sosial, menjaga persatuan, rasa saling menghargai, serta menjauhkan diri dari konflik akibat buruk sangka (suuzan)."
    },

    // Soal 8 (PG Standar)
    {
        num: 8,
        tipe: "pg",
        topik: "Aqidah — Filosofi Kubur (Kisah Abu Dzar)",
        level: "L3",
        stimulus: "Saat jenazah Siti Fatimah r.a. hendak diletakkan di tepi liang kubur, Abu Dzar r.a. berkata, 'Wahai kubur, tahukah kamu jenazah siapakah ini? Jenazah ini adalah Siti Fatimah az-Zahra, putri Rasulullah saw.'. Kubur pun menjawab, 'Aku bukannya tempat bagi berpangkat atau bernasab, aku adalah tempat amal shaleh...'.",
        pertanyaan: "Berdasarkan kisah di atas, analisis keimanan yang paling tepat mengenai hakikat pengadilan alam kubur adalah…",
        opsi: [
            "Derajat kebangsawanan seseorang di dunia otomatis akan menyelamatkannya dari siksa kubur",
            "Silsilah keturunan tokoh-tokoh suci menjadi satu-satunya pelindung mutlak di dalam liang kubur",
            "Keselamatan di alam kubur murni bergantung pada kualitas keimanan dan amal saleh pribadi masing-masing hamba",
            "Hanya orang-orang miskin yang akan mendapatkan kenyamanan dan kelapangan di dalam liang kubur"
        ],
        kunci: 2,
        penjelasan: "Kisah dialog Abu Dzar r.a. dengan kubur menegaskan bahwa alam kubur tidak mengenal pangkat, kekayaan, atau nasab mulia seseorang. Kubur menjawab bahwa ia adalah tempat amal saleh; barangsiapa yang memiliki amal saleh melimpah, ia akan selamat."
    },

    // Soal 9 (PGK — 2 Jawaban Benar)
    {
        num: 9,
        tipe: "pgk",
        topik: "Aqidah — PGK Sifat Wajib Amanah dan Tablig",
        level: "L3",
        stimulus: "Para nabi dan rasul memiliki sifat wajib luhur yang membingkai karakter kepemimpinan mereka, di antaranya adalah sifat amanah (terpercaya) dan tablig (menyampaikan).",
        pertanyaan: "Manakah dua tindakan pelajar di sekolah di bawah ini yang mencerminkan upaya meneladani sifat wajib amanah dan tablig secara selaras? (Pilihlah dua jawaban yang benar!)",
        opsi: [
            "Menyampaikan pesan pengumuman ujian dari wali kelas kepada seluruh teman di kelas secara utuh tanpa ada yang dikurangi (meneladani tablig).",
            "Menyimpan uang tabungan milik kas kelas untuk kepentingan pribadi dengan janji akan mengembalikannya setelah lulus sekolah.",
            "Menjaga barang titipan milik teman kelas dan mengembalikannya dalam keadaan utuh tanpa cacat sedikit pun (meneladani amanah).",
            "Sengaja merahasiakan informasi pendaftaran lomba CCAI dari teman sebangku agar diri sendiri tidak memiliki saingan belajar."
        ],
        kunci: [0, 2],
        penjelasan: "Sifat tablig (menyampaikan) diteladani dengan membagikan informasi kebaikan secara utuh tanpa manipulasi. Sifat amanah (terpercaya) diteladani dengan menjaga kepercayaan yang didelegasikan kepada kita."
    },

    // Soal 10 (PGK — 2 Jawaban Benar)
    {
        num: 10,
        tipe: "pgk",
        topik: "Akhlak — PGK Bahaya Prasangka Buruk / Suuzan (Q.S. al-Hujurāt/49: 12)",
        level: "L3",
        stimulus: "Q.S. al-Hujurāt/49: 12 memerintahkan orang beriman untuk menjauhi kebanyakan prasangka (ٱجۡتَنِبُواْ كَثِيرٗا مِّنَ ٱلظَّنِّ), karena sebagian prasangka tersebut dinilai sebagai dosa.",
        pertanyaan: "Berdasarkan kandungan ayat tersebut, apa saja bahaya psikologis dan sosial jika seseorang membiarkan hatinya dikuasai oleh sifat buruk sangka (suuzan)? (Pilihlah dua jawaban yang benar!)",
        opsi: [
            "Memicu rasa saling curiga, keretakan hubungan pertemanan, serta berpotensi melahirkan konflik dan perpecahan sosial di sekolah.",
            "Membuat konsentrasi belajar meningkat tajam karena sibuk mengamati gerak-gerik kecurangan orang lain.",
            "Jiwa menjadi tidak tenang dan dipenuhi rasa gelisah karena selalu melihat tindakan orang lain dari sudut pandang negatif.",
            "Membantu mempermudah proses klarifikasi (tabayun) berita bohong yang beredar di masyarakat secara otomatis."
        ],
        kunci: [0, 2],
        penjelasan: "Sifat suuzan (buruk sangka) sangat merusak hubungan sosial karena memicu perselisihan dan konflik tanpa bukti. Secara batiniah, pelaku suuzan akan selalu gelisah karena hatinya dipenuhi prasangka negatif yang sesungguhnya merupakan dosa."
    },

    // Soal 11 (PGK — 2 Jawaban Benar)
    {
        num: 11,
        tipe: "pgk",
        topik: "Akhlak — PGK Kaidah Melakukan Tabayun di Medsos",
        level: "L2",
        stimulus: "Di era digital, informasi mengalir begitu deras melalui media sosial laksana air bah. Pelajar muslim yang cerdas harus memiliki kemampuan untuk memfilter dan mengklarifikasi berita (tabayun) agar tidak terjebak menyebarkan fitnah.",
        pertanyaan: "Berdasarkan kaidah tabayun pada informasi di media sosial, langkah cerdas manakah di bawah ini yang wajib dilakukan untuk menyaring berita? (Pilihlah dua jawaban yang benar!)",
        opsi: [
            "Melakukan penyeleksian dan pengecekan keaslian sumber informasi apakah berasal dari akun/pihak yang tepercaya.",
            "Langsung menyebarkan ulang konten berita yang beredar ke banyak grup pertemanan agar mendapatkan banyak apresiasi digital.",
            "Menganalisis isi konten tersebut untuk memastikan apakah informasinya bermanfaat atau justru membawa kemudharatan.",
            "Mengubah isi berita agar terlihat lebih bombastis dan menarik untuk memancing komentar para pembaca di internet."
        ],
        kunci: [0, 2],
        penjelasan: "Berdasarkan kaidah tabayun, pengecekan berita di medsos dilakukan dengan: (1) memastikan validitas sumber informasi, (2) memastikan isi berita berisi kebenaran, serta (3) mengukur dampak kemaslahatan isi informasi tersebut."
    },

    // Soal 12 (PGK — 2 Jawaban Benar)
    {
        num: 12,
        tipe: "pgk",
        topik: "Akhlak — PGK Karakteristik Akhlak Cinta Rasulullah",
        level: "L3",
        stimulus: "Cinta Rasulullah saw. dibuktikan melalui perbuatan nyata (ittiba'), bukan sekadar ucapan manis. Salah satu nasihat emas beliau adalah mendesak kita untuk bertakwa di mana saja kita berada.",
        pertanyaan: "Berdasarkan nilai-nilai akhlak mulia, tindakan nyata manakah di bawah ini yang mencerminkan karakter penuntut ilmu yang mencintai Rasulullah saw.? (Pilihlah dua jawaban yang benar!)",
        opsi: [
            "Mengerjakan soal ujian secara jujur dan mandiri di kelas meskipun tidak ada guru pengawas di dalam ruangan (karakter muraqabah).",
            "Menolak mempelajari materi sains umum karena menganggap dunia ini adalah tempat ujian yang fana dan tidak perlu diperbaiki.",
            "Memperlakukan teman sekelas dengan tutur kata yang santun, ramah, dan saling menyayangi tanpa diskriminasi latar belakang.",
            "Memilih-milih teman bermain yang hanya memiliki kecerdasan setara dengan kelompok belajar kita sendiri."
        ],
        kunci: [0, 2],
        penjelasan: "Bukti cinta rasul yang sejati adalah mempraktikkan keluhuran budi pekerti beliau. Hal ini diwujudkan dengan menjaga kejujuran/ketakwaan dalam belajar (muraqabah/merasa diawasi Allah Swt.) serta memperlakukan sesama manusia dengan sikap santun dan ramah."
    },

    // Soal 13 (Benar/Salah)
    {
        num: 13,
        tipe: "pg",
        topik: "Akhlak — B/S Korelasi Tawakal dan Husnuzan",
        level: "L2",
        stimulus: "Kadang kala hasil ikhtiar belajar kita tidak sesuai dengan target nilai yang diharapkan. Mukmin sejati menyikapi hal ini dengan berlapang dada.",
        pertanyaan: "Sikap berserah diri kepada Allah Swt. setelah berusaha maksimal (tawakal) melatih kita untuk selalu berprasangka baik (husnuzan) bahwa apa pun keputusan akhir yang ditetapkan Allah Swt. merupakan hal yang terbaik bagi hidup kita.\n\nApakah pernyataan di atas BENAR atau SALAH?",
        opsi: [
            "BENAR",
            "SALAH"
        ],
        kunci: 0,
        penjelasan: "BENAR. Sikap tawakal dilakukan seorang mukmin setelah berusaha maksimal lalu berserah diri atas hasilnya. Ini melahirkan husnuzan bahwa apa pun yang dialami manusia merupakan takdir terbaik di sisi Allah Swt.."
    },

    // Soal 14 (Benar/Salah)
    {
        num: 14,
        tipe: "pg",
        topik: "Aqidah — B/S Sifat Jaiz bagi Nabi dan Rasul",
        level: "L1",
        pertanyaan: "Para rasul utusan Allah Swt. memiliki sifat jaiz, yaitu sifat kemanusiaan laksana manusia biasa, seperti merasakan lapar, haus, lelah, sakit, berkeluarga, dan wafat, yang tidak mengurangi derajat luhur kerasulan mereka sedikit pun.\n\nApakah pernyataan di atas BENAR atau SALAH?",
        opsi: [
            "BENAR",
            "SALAH"
        ],
        kunci: 0,
        penjelasan: "BENAR. Sifat jaiz bagi nabi dan rasul adalah sifat-sifat kemanusiaan (a’radhul basyariyah) yang wajar dialami oleh manusia biasa. Sifat ini tidak menurunkan kedudukan maksum dan kemuliaan mereka di sisi Allah Swt.."
    },

    // Soal 15 (Benar/Salah)
    {
        num: 15,
        tipe: "pg",
        topik: "Akhlak — B/S Definisi Sifat Gibah",
        level: "L1",
        pertanyaan: "Menjelaskan atau membicarakan tentang keburukan atau cacat seseorang di belakangnya yang sekiranya jika orang tersebut mengetahuinya ia akan merasa tersinggung atau tidak senang disebut dengan istilah gibah.\n\nApakah pernyataan di atas BENAR atau SALAH?",
        opsi: [
            "BENAR",
            "SALAH"
        ],
        kunci: 0,
        penjelasan: "BENAR. Definisi gibah (menggunjing) tersebut benar. Islam melarang keras perilaku membicarakan aib sesama muslim di belakangnya, sebagaimana yang diuraikan oleh Rasulullah saw. dan ditegaskan dalam Q.S. al-Hujurāt/49: 12."
    },

    // Soal 16 (Benar/Salah)
    {
        num: 16,
        tipe: "pg",
        topik: "Akhlak — B/S Urgensi Tabayun Terhadap Berita Medsos",
        level: "L2",
        pertanyaan: "Proses tabayun (klarifikasi) tidak perlu dilakukan jika berita negatif yang kita terima di media sosial disebarkan oleh teman dekat kita sendiri, karena teman dekat mustahil menyebarkan kebohongan.\n\nApakah pernyataan di atas BENAR atau SALAH?",
        opsi: [
            "BENAR",
            "SALAH"
        ],
        kunci: 1,
        penjelasan: "SALAH. Sikap tabayun wajib ditegakkan atas semua jenis informasi yang kita terima tanpa memandang kedekatan personal pemicunya. Berita palsu sering kali tidak sengaja tersebar bahkan melalui orang terdekat kita akibat lalai tidak menyaring informasi terlebih dahulu."
    },

    // ── BAGIAN 2: ASPEK QUR'AN-HADIS BAB 3 (SOAL 17 s.d. 20) ──

    // Soal 17 (PG Standar)
    {
        num: 17,
        tipe: "pg",
        topik: "Al-Qur'an & Hadis — Tafsir Q.S. al-Baqarah/2: 256 (Larangan Memaksa)",
        level: "L1",
        stimulus: "Sahabat Husein dari Bani Salim bin Auf merasa khawatir atas keselamatan akidah kedua anaknya yang beragama Nasrani. Ia bertanya kepada Rasulullah saw. apakah diperbolehkan memaksa mereka masuk Islam.",
        pertanyaan: "Berdasarkan riwayat asbābun nuzūl turunnya Q.S. al-Baqarah/2: 256, bagaimana respon Rasulullah saw. terhadap keinginan Husein tersebut?",
        opsi: [
            "Mengizinkan Husein untuk mengusir anaknya jika menolak memeluk Islam",
            "Melarang keras pemaksaan iman karena kebebasan berkeyakinan dijamin oleh syariat Allah Swt.",
            "Memerintahkan Husein membayar denda kafarat karena anaknya berbeda agama",
            "Meminta pasukan muslim untuk menangkap kedua anak Husein agar dihukum secara fisik"
        ],
        kunci: 1,
        penjelasan: "Rasulullah saw. melarang keras sahabat Husein untuk memaksa kedua anaknya masuk Islam. Hal ini dipertegas oleh turunnya Q.S. al-Baqarah/2: 256 yang melarang segala bentuk paksaan dalam beragama, karena iman harus lahir dari ketulusan hati."
    },

    // Soal 18 (PG Standar)
    {
        num: 18,
        tipe: "pg",
        topik: "Tajwid — Analisis Ra' Tarqiq",
        level: "L2",
        pertanyaan: "Di bawah ini, lafal manakah yang mengandung hukum membaca huruf Ra' secara tipis (تَرْقِيْق) berdasarkan kaidah ilmu tajwid?",
        opsi: [
            "الرُّشْدُ",
            "فِرْعَوْنَ",
            "اِكْرَاهَ",
            "وَالْمُؤْمِنُوْنَ"
        ],
        kunci: 1,
        penjelasan: "Huruf Ra' dibaca tipis (tarqiq) jika Ra' tersebut berharakat kasrah, atau Ra' sukun yang didahului huruf berharakat kasrah asli (contoh: فِرْعَوْنَ / fir'auna). Sedangkan pada lafal ar-Rusydu dan ikrāha, huruf Ra'-nya wajib dibaca tebal (tafkhim)."
    },

    // Soal 19 (PGK — 2 Jawaban Benar)
    {
        num: 19,
        tipe: "pgk",
        topik: "Tajwid — PGK Analisis Tajwid Lam Jalalah Tarqiq",
        level: "L2",
        pertanyaan: "Manakah di antara potongan lafal ayat di bawah ini yang mengandung hukum bacaan Lam Jalalah Tarqiq (dibaca tipis)? (Pilihlah dua jawaban yang benar!)",
        opsi: [
            "بِاللّٰهِ",
            "وَاللّٰهُ سَمِيْعٌ",
            "لِلّٰهِ",
            "اِتَّقُوا اللّٰهَ"
        ],
        kunci: [0, 2],
        penjelasan: "Lafal بِاللّٰهِ (billāhi) dan لِلّٰهِ (lillāhi) wajib dibaca tipis (tarqiq) karena huruf sebelum lafal Allah berharakat kasrah ( ِ ). Sebaliknya, wallāhu dan ittaqu-llāha wajib dibaca tebal (tafkhim)."
    },

    // Soal 20 (Benar/Salah)
    {
        num: 20,
        tipe: "pg",
        topik: "Al-Qur'an & Hadis — B/S Kebebasan Berkeyakinan sebagai Ujian (Q.S. al-Baqarah/2: 256)",
        level: "L3",
        pertanyaan: "Berdasarkan kandungan Q.S. al-Baqarah/2: 256, Allah Swt. menganugerahi manusia potensi akal pikiran untuk memilih jalannya sendiri, di mana kebebasan memilih keyakinan tersebut diposisikan sebagai bentuk ujian (ibtila') untuk membuktikan siapa hamba yang mau berpikir jernih mencari jalan kebenaran.\n\nApakah pernyataan di atas BENAR atau SALAH?",
        opsi: [
            "BENAR",
            "SALAH"
        ],
        kunci: 0,
        penjelasan: "BENAR. Kebebasan menganut agama dalam Islam didasarkan pada ketulusan hati tanpa paksaan. Allah Swt. memberikan potensi akal kepada manusia untuk menguji apakah mereka bersedia menggunakannya secara jujur guna meyakini kebenaran syariat Islam."
    },

    // ── BAGIAN 3: ASPEK FIKIH & SKI BAB 3 (SOAL 21 s.d. 24) ──

    // Soal 21 (PG Standar)
    {
        num: 21,
        tipe: "pg",
        topik: "Fikih — Fadhilah Ibadah Istiqamah Berpahala Haji (H.R. Abu Dawud)",
        level: "L2",
        stimulus: "Perhatikan potongan terjemahan hadis riwayat Abu Dawud berikut:\n'Barang siapa yang keluar dari rumahnya dalam keadaan suci untuk menunaikan salat fardu, maka ia mendapatkan pahala laksana orang yang melaksanakan ibadah haji yang berihram...'.",
        pertanyaan: "Berdasarkan kandungan hadis tersebut, aktivitas rutin apa yang mendatangkan keutamaan berupa limpahan pahala setara ibadah haji bagi pelakunya?",
        opsi: [
            "Selalu membaca Al-Qur'an hingga khatam setiap malam jumat",
            "Keluar dari rumah dalam keadaan sudah bersuci (berwudhu) untuk salat fardhu berjamaah di masjid",
            "Menyisihkan seluruh uang jajannya untuk disumbangkan ke kas pembangunan masjid",
            "Berpuasa sunah senin-kamis secara terus-menerus tanpa putus sepanjang tahun"
        ],
        kunci: 1,
        penjelasan: "Berdasarkan riwayat hadis Abu Dawud dari Abu Umamah, orang yang keluar rumah dalam keadaan bersuci (mutathahhiran) demi melaksanakan salat fardhu berjamaah di masjid dijanjikan pahala agung yang setara dengan pahala orang yang berhaji mengenakan ihram."
    },

    // Soal 22 (PG Standar)
    {
        num: 22,
        tipe: "pg",
        topik: "SKI — Sejarah Berdirinya Universitas Al-Azhar (Daulah Fatimiyah)",
        level: "L1",
        stimulus: "Panglima Jauhar al-Siqilli memimpin pasukan Daulah Fatimiyah menaklukkan Mesir pada tahun 969 M. Sebagai simbol kedaulatan daulah baru, beliau membangun kota Kairo beserta sebuah masjid monumental yang dinamakan Masjid Al-Azhar.",
        pertanyaan: "Berdasarkan catatan sejarah peradaban Islam, penamaan Al-Azhar pada masjid tersebut diambil dari kata…",
        opsi: [
            "Nama kembang melati (al-azhar) yang tumbuh subur di tepi aliran Sungai Nil",
            "Gelar kebesaran militer yang disematkan kepada Khalifah Al-Mu'izz Lidinillah",
            "Julukan atau gelar Az-Zahra yang disematkan kepada putri Nabi Muhammad saw. yang bernama Fatimah",
            "Nama puncak bukit tertinggi di daerah pegunungan semenanjung Sinai Mesir"
        ],
        kunci: 2,
        penjelasan: "Nama Al-Azhar diambil dari julukan putri Nabi Muhammad saw., yakni Fatimah az-Zahra (bunga yang mekar/bercahaya), yang juga menjadi inspirasi nama dari dinasti penguasa saat itu, yaitu Daulah Fatimiyah."
    },

    // Soal 23 (PGK — 2 Jawaban Benar)
    {
        num: 23,
        tipe: "pgk",
        topik: "SKI — PGK Toleransi Beragama Daulah Fatimiyah",
        level: "L3",
        stimulus: "Daulah Fatimiyah merupakan kekhalifahan bercorak Syi'ah yang jaya selama dua abad (969-1171 M) di Mesir. Meskipun penguasa kerajaan menganut mazhab Syi'ah, mereka menerapkan tata toleransi beragama yang sangat tinggi.",
        pertanyaan: "Berdasarkan catatan sejarah tersebut, manakah dua bukti toleransi beragama yang sangat menonjol di era Daulah Fatimiyah? (Pilihlah dua jawaban yang benar!)",
        opsi: [
            "Mayoritas penduduk asli Mesir yang menganut paham teologi Sunni tetap dibiarkan bebas memegang teguh ajarannya tanpa paksaan.",
            "Penguasa Fatimiyah mewajibkan seluruh jajaran pejabat militer untuk bermazhab Syi'ah demi keamanan negara.",
            "Penganut agama minoritas Kristen (Koptik) dan Yahudi tetap dilindungi dan diberikan hak menjalankan agamanya masing-masing.",
            "Seluruh tempat ibadah non-muslim diubah secara paksa menjadi gedung fakultas kedokteran Al-Azhar."
        ],
        kunci: [0, 2],
        penjelasan: "Meskipun Khilafah Fatimiyah bermazhab resmi Syi’ah, mereka menolak pola pemaksaan ideologis. Mayoritas penduduk Mesir yang berfaham Sunni dibiarkan aman menjalankan madzhabnya, dan perlindungan hukum serta hak beribadah dijamin bagi penganut Kristen dan Yahudi."
    },

    // Soal 24 (Benar/Salah)
    {
        num: 24,
        tipe: "pg",
        topik: "Fikih — B/S Kemudahan Syariat Ibadah Haji (Wukuf Arafah)",
        level: "L3",
        stimulus: "Wukuf di Arafah pada tanggal 9 Dzulhijjah merupakan rukun terpenting dalam ibadah haji, yang jika ditinggalkan membuat hajinya tidak sah. Namun, syariat Islam memberikan keringanan (rukhshah) yang sangat besar bagi jemaah yang sakit parah.",
        pertanyaan: "Sesuai sabda Rasulullah saw. bahwa \"Haji itu adalah berada di Arafah\", jemaah haji yang sedang terbaring sakit parah di rumah sakit tetap dinilai sah ibadah hajinya, asalkan sempat disinggahkan (safari wukuf) di padang Arafah meskipun hanya selama beberapa menit saja.\n\nApakah pernyataan di atas BENAR atau SALAH?",
        opsi: [
            "BENAR",
            "SALAH"
        ],
        kunci: 0,
        penjelasan: "BENAR. Pernyataan tersebut benar. Pelaksanaan wukuf di Arafah tidak mengharuskan jemaah berada di sana sepanjang hari dari pagi hingga malam. Seseorang yang sakit parah dapat dikategorikan sah hajinya asalkan sempat singgah di area Arafah walau sesaat (safari wukuf)."
    }
];

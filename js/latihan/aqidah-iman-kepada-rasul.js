// ═══════════════════════════════════════════════════════════
// DATA SOAL LATIHAN HARIAN
// Bab Aqidah — Iman kepada Rasul-Rasul Allah
// 10 Soal PG Standar Kompetensi Tinggi (L1, L2, L3)
// Dalil: Q.S. al-Nisa'/4:136, Q.S. al-Kahf/18:56, Q.S. al-Ahzab/33:45
// ═══════════════════════════════════════════════════════════
const latihanData = [
    {
        no: 1,
        topik: "Konsep Kenabian & Kerasulan",
        level: "L1",
        stimulus: "Dalam kajian teologi Islam, nabi dan rasul memiliki kedudukan yang luhur sebagai utusan Allah Swt. Namun, keduanya memiliki batasan hukum yang berbeda dalam hal penerimaan dan penyampaian wahyu.\n• Nabi: Penerima wahyu yang diberi syariat, baik diperintahkan untuk menyampaikannya ataupun tidak, bertujuan menegaskan syariat umat sebelumnya.\n• Rasul: Penerima wahyu yang diberi syariat baru dan diperintahkan untuk menyampaikannya kepada umat manusia.",
        pertanyaan: "Berdasarkan perbedaan fungsional tersebut, ciri pembeda utama seorang Rasul yang tidak dimiliki oleh seorang Nabi adalah...",
        opsi: [
            "Mengajak manusia untuk berbuat kebajikan di lingkungan masyarakat",
            "Menerima wahyu berupa syariat baru serta mengemban kewajiban mutlak untuk menyampaikannya kepada umat",
            "Memiliki sifat maksum (terjaga dari dosa) sepanjang masa hidupnya",
            "Mendapatkan mimpi yang benar (ru'yah shadiqah) sebagai bagian dari wahyu"
        ],
        kunci: 1,
        penjelasan: "Rasul diutus dengan membawa syariat baru dan memiliki kewajiban syar'i untuk menyampaikannya (<em>tabligh</em>) kepada umat manusia. Sedangkan nabi bertugas melanjutkan atau menegaskan syariat dari rasul sebelumnya."
    },
    {
        no: 2,
        topik: "Q.S. al-Nisa'/4: 136",
        level: "L1",
        kutipan: "يٰٓاَيُّهَا الَّذِيْنَ اٰمَنُوْٓا اٰمِنُوْا بِاللّٰهِ وَرَسُوْلِهٖ وَالْكِتٰبِ الَّذِيْ نَزَّلَ عَلٰى رَسُوْلِهٖ وَالْكِتٰبِ الَّذِيْٓ اَنْزَلَ مِنْ قَبْلُ ۗوَمَنْ يَّكْفُرْ بِاللّٰهِ وَمَلٰۤىِٕكَتِهٖ وَكُتُبِهٖ وَرُسُلِهٖ وَالْيَوْمِ الْاٰخِرِ فَعَدْ ضَلَّ ضَلٰلًاۢ بَعِيْدًا",
        kutipanTerjemah: '"Wahai orang-orang yang beriman! Tetaplah beriman kepada Allah dan Rasul-Nya (Muhammad) dan kepada Kitab (Al-Qur\'an) yang diturunkan kepada Rasul-Nya, serta kitab yang diturunkan sebelumnya. Barangsiapa ingkar kepada Allah, malaikat-malaikat-Nya, kitab-kitab-Nya, rasul-rasul-Nya, dan hari kemudian, maka sungguh, orang itu telah tersesat sangat jauh." (Q.S. al-Nisa\'/4: 136)',
        pertanyaan: "Berdasarkan akhir ayat di atas, konsekuensi teologis yang sangat berat bagi seseorang yang mengimani keberadaan Allah Swt. namun mengingkari keberadaan para rasul-Nya adalah...",
        opsi: [
            "Mendapatkan keringanan siksa karena masih memegang keimanan kepada Allah Swt.",
            "Amalnya tetap dinilai baik di dunia namun sia-sia di akhirat",
            "Dinyatakan telah tersesat dari jalan kebenaran dengan kesesatan yang sangat jauh (dhalālam ba'īdā)",
            "Wajib membayar denda fidyah berupa memberi makan 60 orang miskin"
        ],
        kunci: 2,
        penjelasan: "Q.S. al-Nisa'/4: 136 menegaskan bahwa pengingkaran (<em>kufur</em>) terhadap salah satu dari rukun iman — termasuk iman kepada rasul — menyebabkan pelakunya jatuh ke dalam kesesatan yang sangat jauh (<em>dhalālam ba'īdā</em>)."
    },
    {
        no: 3,
        topik: "Sifat Wajib & Mustahil Rasul",
        level: "L1",
        stimulus: "Para utusan Allah Swt. seringkali dihadapkan pada penentangan sengit dari kaumnya. Dalam berbagai diskusi, para rasul dituntut mampu memberikan hujah (argumentasi) yang rasional, logis, dan mematahkan klaim kesyirikan kaumnya.",
        pertanyaan: "Kemampuan intelektual yang tinggi dan kecerdasan luar biasa untuk mematahkan hujah para penentang tersebut membuktikan bahwa para rasul wajib memiliki sifat...",
        opsi: [
            "Shiddiq, dan mustahil bersifat Kidzib",
            "Amanah, dan mustahil bersifat Khianat",
            "Tabligh, dan mustahil bersifat Kitman",
            "Fathanah, dan mustahil bersifat Baladah"
        ],
        kunci: 3,
        penjelasan: "<strong>Fathanah</strong> artinya cerdas. Sifat ini wajib dimiliki oleh rasul untuk memecahkan problematika umat dan menghadirkan argumentasi kuat (<em>hujjah</em>) bagi para penentangnya. Lawan dari sifat fathanah adalah <em>baladah</em> (bodoh)."
    },
    {
        no: 4,
        topik: "Tugas Pokok Rasul — Q.S. al-Kahf/18: 56",
        level: "L1",
        kutipan: "وَمَا نُرْسِلُ الْمُرْسَلِيْنَ اِلَّا مُبَشِّرِيْنَ وَمُنْذِرِيْنَۚ",
        kutipanTerjemah: '"Dan Kami tidak mengutus Rasul-Rasul melainkan sebagai pembawa kabar gembira dan memberi peringatan..." (Q.S. al-Kahf/18: 56)',
        pertanyaan: "Berdasarkan dalil naqli di atas, misi taktis kerasulan dalam membimbing umat manusia dirumuskan ke dalam dua peran, yaitu...",
        opsi: [
            "Mengajari ilmu astronomi dan mengatur sistem militer pertahanan negara",
            "Membawa kabar gembira (mubasysyirīn) bagi orang beriman dan memberi peringatan (mundzirīn) bagi yang ingkar",
            "Melakukan perundingan damai dan menghapuskan perbedaan mazhab secara paksa",
            "Menghimpun harta rampasan perang dan membagikannya secara adil kepada dhuafa"
        ],
        kunci: 1,
        penjelasan: "Berdasarkan Q.S. al-Kahf/18: 56, fungsi mendasar pengutusan rasul adalah sebagai <em>mubasysyirīn</em> (pemberi kabar gembira berupa rida Allah dan surga bagi yang taat) dan <em>mundzirīn</em> (pemberi peringatan berupa azab bagi yang ingkar)."
    },
    {
        no: 5,
        topik: "Penerapan Sifat Amanah",
        level: "L2",
        stimulus: "Zaki menerima sebuah pesan berantai (broadcast) di grup WhatsApp kelasnya yang berisi berita sensitif tentang aib salah satu teman sekelasnya. Pengirim pesan berpesan agar berita tersebut disebarkan secara luas.",
        pertanyaan: "Sebagai seorang muslim yang meneladani sifat <strong>Amanah</strong> (dapat dipercaya) yang ada pada diri Rasulullah saw., tindakan nyata yang paling tepat dilakukan Zaki adalah...",
        opsi: [
            "Langsung menyebarkan pesan tersebut karena merasa mendapat amanah dari pengirim pesan",
            "Menghapus pesan tersebut, tidak menyebarkannya, dan menasihati pengirim pesan agar menjaga lisan dan tidak menyebar fitnah",
            "Membiarkan pesan tersebut dan menceritakannya secara lisan kepada teman dekatnya saja",
            "Mengedit isi pesan agar terlihat lebih sopan sebelum menyebarkannya kembali"
        ],
        kunci: 1,
        penjelasan: "Sifat amanah berarti menjaga kepercayaan dan memelihara kehormatan sesama. Menyebarkan aib atau berita yang belum jelas kebenarannya (<em>hoaks</em>) melanggar prinsip amanah dalam menjaga keselamatan sosial umat Islam."
    },
    {
        no: 6,
        topik: "Implementasi Sifat Shiddiq",
        level: "L2",
        stimulus: "1. Rifat mengembalikan sisa uang kas OSIS secara transparan disertai nota pembelanjaan.\n2. Ahmad mengakui kesalahan dengan jujur di hadapan guru BK tanpa berbohong.\n3. Hilda belajar dengan giat malam hari demi mempersiapkan ujian olimpiade sains.\n4. Aisyah mengajak temannya rajin menunaikan salat dhuha di mushola sekolah.",
        pertanyaan: "Berdasarkan deskripsi di atas, contoh perilaku yang mencerminkan keteladanan nyata terhadap sifat <strong>Shiddiq (Jujur)</strong> secara berurutan ditunjukkan oleh nomor...",
        opsi: [
            "1 dan 3",
            "1 dan 4",
            "2 dan 1",
            "3 dan 4"
        ],
        kunci: 2,
        penjelasan: "<strong>Shiddiq</strong> artinya jujur. Nomor <strong>2</strong> (mengaku kesalahan tanpa berbohong) dan nomor <strong>1</strong> (mengembalikan sisa kas secara transparan) keduanya berakar dari kejujuran. Nomor 3 mencerminkan Fathanah (rajin belajar), nomor 4 mencerminkan Tabligh (mengajak kebaikan)."
    },
    {
        no: 7,
        topik: "Sifat Jaiz Rasul",
        level: "L2",
        stimulus: "Nabi Muhammad saw. pernah mengalami luka fisik di bagian wajah dan giginya pecah saat memimpin pertempuran Uhud. Beliau juga mengalami rasa sakit dan demam tinggi menjelang wafatnya.",
        pertanyaan: "Kondisi fisik yang dialami oleh Rasulullah saw. tersebut menunjukkan adanya penerapan...",
        opsi: [
            "Sifat wajib fathanah yang melatih daya tahan tubuh nabi",
            "Sifat jaiz bagi rasul, yaitu memiliki sifat kemanusiaan (A'radhul Basyariyah) yang tidak mengurangi derajat luhur kenabiannya",
            "Sifat mustahil khianat yang menyebabkan rasul terluka akibat kelalaian pasukannya",
            "Mukjizat fisik yang sengaja dihilangkan oleh Allah Swt. untuk menguji kesabaran sahabat"
        ],
        kunci: 1,
        penjelasan: "Sifat jaiz bagi rasul adalah <strong><em>A'radhul Basyariyah</em></strong>, yaitu sifat-sifat kemanusiaan biasa yang tidak menurunkan derajat kewibawaan kerasulan beliau — seperti sakit, lapar, haus, sedih, dan terluka."
    },
    {
        no: 8,
        topik: "Urgensi Sifat Fathanah",
        level: "L3",
        stimulus: "Masyarakat jahiliyah Arab dikenal sangat keras kepala, memegang teguh tradisi nenek moyang secara buta, serta memiliki stratifikasi sosial yang timpang. Rasulullah saw. diutus di tengah kondisi carut-marut tersebut untuk menegakkan tatanan tauhid dan keadilan.",
        pertanyaan: "Mengapa sifat <strong>Fathanah</strong> (cerdas) mutlak diperlukan oleh seorang rasul dalam menghadapi kondisi psikologis dan sosiologis masyarakat jahiliyah tersebut?",
        opsi: [
            "Agar rasul mampu merancang taktik perang bersenjata guna memusnahkan seluruh kaum pembangkang tanpa sisa",
            "Agar rasul mampu menyusun strategi dakwah yang taktis, menyajikan argumentasi yang tak terbantahkan, serta merumuskan solusi cerdas atas konflik adat kaumnya",
            "Agar rasul dapat mengumpulkan kekayaan materi yang berlimpah demi menyuap para pemuka Quraisy",
            "Agar rasul diperbolehkan menulis kitab suci tandingan jika kaumnya menolak isi kandungan Al-Qur'an"
        ],
        kunci: 1,
        penjelasan: "Sifat fathanah bukan sekadar kecerdasan akademis, melainkan kecerdasan emosional, sosial, dan spiritual yang dibutuhkan rasul untuk memahami problematika umat, menghadirkan jalan keluar, serta menepis argumentasi kaum kafir secara bijaksana tanpa kekerasan."
    },
    {
        no: 9,
        topik: "Esensi Peran Saksi — Q.S. al-Ahzab/33: 45",
        level: "L3",
        kutipan: "يٰٓاَيُّهَا النَّبِيُّ اِنَّآ اَرْسَلْنٰكَ شَاهِدًا وَّمُبَشِّرًا وَّنَذِيْرًاۙ",
        kutipanTerjemah: '"Wahai Nabi! Sesungguhnya Kami mengutusmu untuk menjadi saksi, pembawa kabar gembira dan pemberi peringatan..." (Q.S. al-Ahzab/33: 45)',
        pertanyaan: "Ditinjau dari konsep pertanggungjawaban amal di akhirat, apa esensi filosofis dari ditetapkannya peran nabi dan rasul sebagai <strong>saksi</strong> (<em>syāhidan</em>) atas umatnya?",
        opsi: [
            "Rasul akan bertindak sebagai pengacara yang membela kemaksiatan umatnya tanpa perlu hisab dari Allah Swt.",
            "Rasul memberikan kesaksian otentik mengenai siapa yang konsisten mengikuti ajaran wahyu dan siapa yang menyimpang serta memanipulasi syariat",
            "Rasul bertugas mencatat dan menentukan hukuman neraka secara mandiri bagi para penentangnya",
            "Menunjukkan bahwa kesaksian malaikat pencatat amal tidak sah jika tidak disetujui oleh para nabi"
        ],
        kunci: 1,
        penjelasan: "Nabi bertindak sebagai <em>syāhidan</em> (saksi) di hari akhir untuk membuktikan kejujuran klaim keimanan seseorang. Kesaksian rasul memastikan bahwa hujah Allah telah sampai secara jelas kepada manusia, sehingga tidak ada alasan bagi pembangkang untuk mengelak di hadapan pengadilan Allah Swt."
    },
    {
        no: 10,
        topik: "Dampak Sifat Kitman vs Tabligh",
        level: "L3",
        stimulus: "Di era keterbukaan informasi, penyembunyian kebenaran (hoarding of truth) demi kepentingan kelompok tertentu atau keuntungan pribadi kerap memicu terjadinya perpecahan, kebodohan massal, dan ketidakadilan hukum di masyarakat.",
        pertanyaan: "Bagaimana analisis mengenai kesucian sifat wajib <strong>Tabligh</strong> (menyampaikan) dan mustahilnya sifat <strong>Kitman</strong> (menyembunyikan) pada diri rasul dalam mencegah kerusakan sosial sebagaimana digambarkan dalam narasi di atas?",
        opsi: [
            "Sifat tabligh hanya wajib dipraktikkan dalam urusan ibadah mahdhah, sedangkan dalam urusan sosial diperbolehkan menggunakan kitman demi keselamatan diri",
            "Sifat kitman diperbolehkan bagi rasul jika kaum yang dihadapi memiliki kekuatan fisik yang jauh lebih besar",
            "Sifat tabligh menjamin transparansi kebenaran wahyu secara utuh tanpa ada manipulasi, sehingga menyelamatkan masyarakat dari kesesatan dan kesewenang-wenangan akibat disembunyikannya hukum keadilan",
            "Rasul wajib menyembunyikan sebagian wahyu jika isi wahyu tersebut dirasa terlalu berat dijalankan oleh golongan dhuafa"
        ],
        kunci: 2,
        penjelasan: "Jika rasul memiliki sifat kitman (menyembunyikan wahyu), maka kebenaran tidak akan pernah sampai secara utuh kepada manusia, yang mengakibatkan rusaknya keadilan sosial. Oleh karena itu, keteladanan sifat <strong>tabligh</strong> menuntut keterbukaan, kejujuran, dan transparansi informasi demi keselamatan bersama."
    }
];

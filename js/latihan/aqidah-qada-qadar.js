// ═══════════════════════════════════════════════════════════
// DATA SOAL LATIHAN HARIAN
// Bab Aqidah — Iman kepada Qada dan Qadar
// 10 Soal PG Standar Kompetensi Tinggi (L1, L2, L3)
// Dalil: Q.S. al-Qamar/54:49, Q.S. al-Hadid/57:22, Q.S. ar-Ra'd/13:11
//        H.R. At-Tirmidzi (unta & doa)
// ═══════════════════════════════════════════════════════════
const latihanData = [
    {
        no: 1,
        topik: "Konsep Qada & Qadar",
        level: "L1",
        stimulus: "Dalam kajian akidah Islam, Qada dan Qadar merupakan dua istilah yang saling berkaitan erat dalam menggambarkan ketetapan Allah Swt. atas seluruh makhluk-Nya sejak zaman azali hingga terwujud di alam semesta.",
        pertanyaan: "Berdasarkan definisi syariat yang disepakati mayoritas ulama, perbedaan mendasar antara <strong>Qada</strong> dan <strong>Qadar</strong> terletak pada...",
        opsi: [
            "Qada adalah ketetapan yang bisa diubah oleh usaha manusia, sedangkan Qadar adalah ketetapan yang mutlak tidak bisa diubah",
            "Qada berkaitan dengan hari akhir, sedangkan Qadar berkaitan dengan penciptaan malaikat",
            "Qada adalah rencana atau ketetapan Allah sejak zaman azali sebelum makhluk diciptakan, sedangkan Qadar adalah perwujudan nyata dari ketetapan tersebut setelah terjadi",
            "Qada berlaku khusus bagi umat terdahulu, sedangkan Qadar berlaku bagi umat Nabi Muhammad saw."
        ],
        kunci: 2,
        penjelasan: "<strong>Qada</strong> adalah ketetapan Allah Swt. sejak zaman azali (sebelum adanya makhluk). Sementara <strong>Qadar</strong> adalah perwujudan atau realisasi dari ketetapan Allah Swt. tersebut yang disesuaikan dengan ukuran, waktu, dan kondisi makhluk-Nya."
    },
    {
        no: 2,
        topik: "Q.S. al-Qamar/54: 49",
        level: "L1",
        kutipan: "اِنَّا كُلَّ شَيْءٍ خَلَقْنٰهُ بِقَدَرٍ",
        kutipanTerjemah: '"Sesungguhnya Kami menciptakan segala sesuatu menurut ukuran." (Q.S. al-Qamar/54: 49)',
        pertanyaan: "Berdasarkan ayat di atas, lafal <strong>بِقَدَرٍ</strong> (<em>biqadar</em>) memberikan penegasan teologis bahwa seluruh ciptaan Allah Swt. di alam semesta ini...",
        opsi: [
            "Diciptakan secara kebetulan tanpa adanya rencana yang matang",
            "Diciptakan dengan ukuran, ketentuan, takdir, dan fungsi yang sangat rapi serta presisi",
            "Memiliki masa hidup yang abadi dan tidak akan pernah mengalami kiamat",
            "Memiliki kekuasaan yang sama dengan kekuasaan Allah Swt."
        ],
        kunci: 1,
        penjelasan: "Lafal <em>biqadar</em> berarti \"dengan ukuran\" atau \"dengan ketentuan\". Ayat ini menegaskan bahwa segala sesuatu di alam semesta diciptakan Allah Swt. dengan perencanaan sangat matang, memiliki ukuran, batas, porsi, dan fungsi yang seimbang (<em>sunnatullah</em>)."
    },
    {
        no: 3,
        topik: "Q.S. al-Hadid/57: 22 — Lauhul Mahfuzh",
        level: "L1",
        kutipan: "مَآ اَصَابَ مِنْ مُّصِيْبَةٍ فِى الْاَرْضِ وَلَا فِيْٓ اَنْفُسِكُمْ اِلَّا فِيْ كِتٰبٍ مِّنْ قَبْلِ اَنْ نَّبْرَاَهَا ۗاِنَّ ذٰلِكَ عَلَى اللّٰهِ يَسِيْرٌ",
        kutipanTerjemah: '"Setiap bencana yang menimpa di bumi dan yang menimpa dirimu sendiri, semuanya telah tertulis dalam Kitab sebelum Kami mewujudkannya. Sesungguhnya yang demikian itu mudah bagi Allah." (Q.S. al-Hadid/57: 22)',
        pertanyaan: "Berdasarkan ayat di atas, segala ketetapan takdir — baik keberuntungan maupun musibah — telah tercatat secara rapi di dalam kitab induk takdir yang bernama...",
        opsi: [
            "Kitab Taurat",
            "Kitab Zabur",
            "Lauhul Mahfuzh",
            "Shuhuf Ibrahim"
        ],
        kunci: 2,
        penjelasan: "Lafal <em>\"illā fī kitābin min qabli an nabra'ahā\"</em> merujuk pada ketetapan yang sudah tertulis di dalam <strong>Lauhul Mahfuzh</strong> sebelum Allah Swt. mewujudkan makhluk tersebut di dunia nyata."
    },
    {
        no: 4,
        topik: "Takdir Mubram vs Mu'allaq",
        level: "L1",
        stimulus: "1. Kematian (ajal) seseorang yang datang tepat waktu tanpa bisa dimundurkan.\n2. Kepintaran seorang siswa setelah ia belajar dengan giat dan ulet.\n3. Jenis kelamin bayi yang terlahir ke dunia.\n4. Kesembuhan dari sakit setelah berobat medis secara teratur dan berdoa.",
        pertanyaan: "Berdasarkan deskripsi di atas, peristiwa yang dikategorikan sebagai <strong>Takdir Mu'allaq</strong> (takdir yang erat kaitannya dengan ikhtiar manusia) ditunjukkan oleh nomor...",
        opsi: [
            "1 dan 3",
            "1 dan 4",
            "2 dan 3",
            "2 dan 4"
        ],
        kunci: 3,
        penjelasan: "<strong>Takdir Mu'allaq</strong> adalah takdir yang dapat diupayakan melalui ikhtiar dan doa, seperti kepintaran (2) dan kesembuhan dari sakit (4). <strong>Takdir Mubram</strong> adalah takdir mutlak yang tidak dapat diubah, seperti batas ajal (1) dan jenis kelamin kelahiran (3)."
    },
    {
        no: 5,
        topik: "Penerapan Takdir Mu'allaq — Q.S. ar-Ra'd/13: 11",
        level: "L2",
        stimulus: "Hadi terlahir dari keluarga yang kurang mampu secara ekonomi. Namun, ia tidak pernah menyerah pada keadaan. Ia belajar dengan tekun, aktif bertanya, dan menyisihkan waktu malam untuk belajar mandiri hingga akhirnya lulus dengan predikat terbaik dan mendapatkan beasiswa kuliah di universitas ternama.",
        pertanyaan: "Kisah keberhasilan Hadi dalam mengubah kondisi hidupnya merupakan contoh penerapan nyata dari keyakinan terhadap...",
        opsi: [
            "Takdir Mubram yang datang secara tiba-tiba tanpa disengaja",
            "Takdir Mu'allaq, di mana Allah Swt. mengubah nasib hamba-Nya yang mau berikhtiar sungguh-sungguh",
            "Pemahaman fatalistik (pasrah sepenuhnya tanpa perlu melakukan usaha fisik)",
            "Kemampuan mutlak manusia dalam menandingi ketetapan takdir Allah Swt."
        ],
        kunci: 1,
        penjelasan: "Sesuai Q.S. ar-Ra'd/13: 11, Allah Swt. tidak akan mengubah nasib suatu kaum sebelum mereka berusaha mengubah keadaan diri mereka sendiri. Keberhasilan Hadi adalah contoh konkret ikhtiar maksimal dalam takdir mu'allaq."
    },
    {
        no: 6,
        topik: "Tawakal — H.R. At-Tirmidzi",
        level: "L2",
        kutipan: "اِعْقِلْهَا وَتَوَكَّلْ",
        kutipanTerjemah: 'Rasulullah saw. bersabda: "Ikatlah untamu, setelah itu bertawakallah." (H.R. At-Tirmidzi)',
        pertanyaan: "Berdasarkan hadis di atas, contoh perilaku siswa yang menerapkan konsep tawakal secara benar dan seimbang adalah...",
        opsi: [
            "Menghadapi ujian akhir dengan tenang tanpa belajar karena yakin takdir lulus sudah diatur",
            "Mengunci stang sepeda motor dengan rapat saat diparkir, lalu menyerahkan penjagaan dan keselamatannya kepada Allah Swt.",
            "Belajar terus-menerus tanpa istirahat dan tanpa berdoa karena menganggap doa tidak penting",
            "Membiarkan kelas terbuka saat libur sekolah karena percaya malaikat akan menjaga keamanan"
        ],
        kunci: 1,
        penjelasan: "Konsep tawakal yang benar menuntut manusia melakukan ikhtiar/usaha fisik maksimal terlebih dahulu (disimbolkan dengan mengikat unta / mengunci stang motor), baru kemudian berserah diri sepenuhnya (<em>tawakal</em>) kepada hasil akhir yang ditentukan Allah Swt."
    },
    {
        no: 7,
        topik: "Tajwid — Q.S. al-Hadid/57: 22",
        level: "L2",
        kutipan: "مَآ اَصَابَ مِنْ مُّصِيْبَةٍ فِى الْاَرْضِ وَلَا فِيْٓ اَنْفُسِكُمْ",
        pertanyaan: "Pada potongan ayat di atas, lafal yang mengandung hukum bacaan <strong>Idgham Bighunnah</strong> dan <strong>Ikhfa' Haqiqi</strong> secara berurutan adalah...",
        opsi: [
            "مِنْ مُّصِيْبَةٍ dan فِى الْاَرْضِ",
            "مِنْ مُّصِيْبَةٍ dan اَنْفُسِكُمْ",
            "اَنْفُسِكُمْ dan مِنْ مُّصِيْبَةٍ",
            "فِى الْاَرْضِ dan وَلَا فِيْٓ"
        ],
        opsiArab: true,
        kunci: 1,
        penjelasan: "<strong>مِنْ مُّصِيْبَةٍ</strong> → <strong>Idgham Bighunnah</strong>: Nun sukun (<strong>نْ</strong>) bertemu huruf Mim (<strong>م</strong>), dibaca melebur dengan dengung.<br><strong>اَنْفُسِكُمْ</strong> → <strong>Ikhfa' Haqiqi</strong>: Nun sukun (<strong>نْ</strong>) bertemu huruf Fa (<strong>ف</strong>), dibaca samar disertai dengung."
    },
    {
        no: 8,
        topik: "Tajwid — Al-Qamariyah Q.S. al-Hadid/57: 22",
        level: "L2",
        kutipan: "مَآ اَصَابَ مِنْ مُّصِيْبَةٍ فِى الْاَرْضِ",
        pertanyaan: "Pada kata yang bergaris bawah <strong>الْاَرْضِ</strong> di atas, terdapat hukum bacaan Alif Lam...",
        opsi: [
            "Al-Qamariyah, karena Alif Lam bertemu dengan huruf Alif (Hamzah)",
            "Al-Syamsiyah, karena Alif Lam bertemu dengan huruf Ra",
            "Idgham Syamsiyah, karena huruf Alif dibaca melebur",
            "Izh-har Syafawi, karena huruf Lam dibaca mati di bibir"
        ],
        kunci: 0,
        penjelasan: "Pada kata <strong>الْاَرْضِ</strong> (<em>al-ardhi</em>), Alif Lam dibaca secara jelas (<em>Izh-har Qamariyah</em>) karena setelah Alif Lam terdapat huruf Alif/Hamzah (<strong>أ</strong>), yang merupakan salah satu dari 14 huruf Al-Qamariyah."
    },
    {
        no: 9,
        topik: "Analisis Hubungan Doa dan Takdir — H.R. At-Tirmidzi",
        level: "L3",
        kutipan: "لَا يَرُدُّ الْقَدَرَ إِلَّا الدُّعَاءُ",
        kutipanTerjemah: 'Rasulullah saw. bersabda: "Tidak ada yang dapat menolak qadar (ketentuan) kecuali doa." (H.R. At-Tirmidzi)',
        pertanyaan: "Bagaimana analisis teologis yang paling tepat untuk menjelaskan makna bahwa <em>\"doa dapat menolak ketentuan takdir\"</em> tanpa merusak keimanan pada kemutlakan ketetapan Allah Swt.?",
        opsi: [
            "Doa manusia memiliki kekuatan sihir yang bisa memaksa Allah Swt. untuk tunduk pada keinginan hamba",
            "Ketetapan Allah Swt. di Lauhul Mahfuzh sewaktu-waktu bisa dibatalkan jika manusia melakukan demonstrasi ibadah",
            "Doa dan ikhtiar itu sendiri merupakan bagian dari takdir Allah Swt. yang telah ditetapkan sejak zaman azali untuk menjadi sebab berubahnya suatu kondisi ke kondisi lain",
            "Doa hanya bermanfaat untuk menolak takdir buruk di dunia saja, namun tidak berguna untuk kehidupan akhirat"
        ],
        kunci: 2,
        penjelasan: "Doa dan ikhtiar tidaklah berdiri sendiri di luar takdir Allah Swt. Keduanya merupakan instrumen sebab-akibat (<em>sunnatullah</em>) yang sudah terdaftar di Lauhul Mahfuzh. Allah Swt. menghendaki suatu takdir baik terwujud melalui wasilah (sebab) berupa panjatan doa dan kerja keras hamba-Nya."
    },
    {
        no: 10,
        topik: "Analisis Sikap Menghadapi Kegagalan",
        level: "L3",
        stimulus: "Pak Badru telah berikhtiar maksimal membuka usaha toko kelontong dengan perencanaan matang dan rajin berdoa. Namun, karena bencana banjir bandang tokonya hancur total. Pak Badru mengalami depresi berat, terus mengeluh, dan menyalahkan Allah Swt. atas musibah tersebut.",
        pertanyaan: "Berdasarkan esensi beriman kepada Qada dan Qadar, bagaimana evaluasi kritis yang paling tepat terhadap respon emosional Pak Badru?",
        opsi: [
            "Respon Pak Badru dapat dimaklumi sepenuhnya karena usaha fisik mengalahkan ketetapan takdir",
            "Pak Badru benar karena berdoa dan berikhtiar secara otomatis menghapus risiko terkena bencana alam",
            "Respon Pak Badru keliru; ia belum memahami hakikat iman kepada takdir, di mana orang beriman diuji agar bersabar, berikrar istirja', dan meyakini bahwa di balik musibah pasti ada hikmah terbaik",
            "Pak Badru salah karena seharusnya ia langsung beralih memeluk agama lain agar usahanya sukses kembali"
        ],
        kunci: 2,
        penjelasan: "Beriman kepada Qada dan Qadar mendidik jiwa manusia untuk memiliki kestabilan mental. Ketika sukses ia bersyukur dan tidak sombong; ketika tertimpa musibah ia bersabar, berikrar <em>istirja'</em>, serta berprasangka baik (<em>husnuzhan</em>) bahwa keputusan Allah Swt. mengandung hikmah terbaik. Mengutuk dan menyalahkan takdir merusak keabsahan iman kepada rukun iman yang keenam."
    }
];

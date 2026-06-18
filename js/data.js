const kisiKisiData = [
    {
        id: "quran",
        kategori: "Al-Qur'an",
        ikon: "auto_stories",
        bgColor: "bg-emerald-50",
        pillColor: "bg-secondary-container/30 text-secondary",
        judul: "Al-Qur'an & Tajwid",
        lgColSpan2: true,
        poin: [
            { teks: "QS Al Mujadalah/58:11 & QS Az Zumar/39:9 — Semangat Mencari Ilmu", kelas: "IX/1", tag: "Soal 1, 2, 3, 41", tagColor: "bg-red-100 text-red-700" },
            { teks: "QS Al Baqarah/2:30 & QS Al Qasas/28:77 — Khalifatullah Fil Ard, Penebar Kasih Sayang, Hukum Mad", kelas: "IX/2", tag: "Soal 4, 5, 6, 38", tagColor: "bg-red-100 text-red-700" },
            { teks: "QS Ar Rum/30:41, Ibrahim/14:32 & Az Zukhruf/43:13 — Melestarikan Alam, Hukum Ra & Lam Jalalah", kelas: "VIII/1", tag: "Soal 8", tagColor: "bg-emerald-100 text-emerald-700" },
            { teks: "QS Al Baqarah/2:143 — Beragama Secara Moderat, Hukum Nun Sukun/Tanwin & Mim Sukun", kelas: "VIII/2", tag: "Soal 9", tagColor: "bg-emerald-100 text-emerald-700" },
            { teks: "QS An-Nisa'/4:59 & QS An-Nahl/16:64 — Pedoman Hidup, Alif Lam Syamsiyyah & Qamariyyah", kelas: "VII/1", tag: "Soal 10", tagColor: "bg-blue-100 text-blue-700" },
            { teks: "QS Al-Anbiya'/21:30 & QS Al-A'raf/7:54 — Tanda Kekuasaan Allah, Hukum Ghunnah", kelas: "VII/2", tag: "Soal 11", tagColor: "bg-blue-100 text-blue-700" }
        ]
    },
    {
        id: "aqidah",
        kategori: "Aqidah",
        ikon: "brightness_7",
        bgColor: "bg-emerald-50",
        pillColor: "bg-secondary-container/30 text-secondary",
        judul: "Keimanan & Keyakinan",
        lgColSpan2: true,
        poin: [
            { teks: "Iman Kepada Hari Akhir — Mawas Diri, Tahapan Hari Akhir", kelas: "IX/1", tag: "Soal 7, 12", tagColor: "bg-red-100 text-red-700" },
            { teks: "Iman Kepada Qada & Qadar — Taqdir Mubram & Muallaq, Penciptaan Manusia", kelas: "IX/2", tag: "Soal 13, 14, 45", tagColor: "bg-red-100 text-red-700" },
            { teks: "Iman Kepada Kitab-kitab Allah — Generasi Pecinta Al-Qur'an Yang Toleran", kelas: "VIII/1", tag: "Soal 15", tagColor: "bg-emerald-100 text-emerald-700" },
            { teks: "Iman Kepada Nabi & Rasul — Generasi Digital Yang Berkarakter", kelas: "VIII/2", tag: "Soal 16", tagColor: "bg-emerald-100 text-emerald-700" },
            { teks: "Iman Kepada Allah — Asmaul Husna: Al-Alim, As-Sami', Al-Bashir, Al-Khabir", kelas: "VII/1", tag: "Soal 17", tagColor: "bg-blue-100 text-blue-700" },
            { teks: "Iman Kepada Malaikat — Tugas Malaikat, Perbedaan Malaikat/Jin/Manusia", kelas: "VII/2", tag: "Soal 18, 44", tagColor: "bg-blue-100 text-blue-700" }
        ]
    },
    {
        id: "akhlak",
        kategori: "Akhlak",
        ikon: "auto_awesome",
        bgColor: "bg-emerald-50",
        pillColor: "bg-secondary-container/30 text-secondary",
        judul: "Budi Pekerti & Perilaku",
        poin: [
            { teks: "Etika Pergaulan & Komunikasi Islami — Pergaulan Antar Lawan Jenis", kelas: "IX/1", tag: "Soal 19", tagColor: "bg-red-100 text-red-700" },
            { teks: "Tradisi & Seni Islami — Prinsip Seni Arsitektur Islam", kelas: "IX/2", tag: "Soal 36", tagColor: "bg-red-100 text-red-700" },
            { teks: "Amanah & Jujur — Hikmah Sikap Amanah dan Jujur", kelas: "VIII/1", tag: "Soal 20, 21", tagColor: "bg-emerald-100 text-emerald-700" },
            { teks: "Salat & Zikir — Dalil Tentang Shalat", kelas: "VII/1", tag: "Soal 24", tagColor: "bg-blue-100 text-blue-700" },
            { teks: "Ghibah & Tabayun — Dampak Buruk Ghibah, Sikap Tabayun", kelas: "VII/2", tag: "Soal 22, 40", tagColor: "bg-blue-100 text-blue-700" }
        ]
    },
    {
        id: "fiqih",
        kategori: "Fiqih",
        ikon: "gavel",
        bgColor: "bg-emerald-50",
        pillColor: "bg-secondary-container/30 text-secondary",
        judul: "Ibadah & Muamalah",
        lgColSpan2: true,
        poin: [
            { teks: "Aqiqah & Qurban — Ketentuan Akikah dan Kurban, Syarat Hewan Kurban", kelas: "IX/1", tag: "Soal 25, 37", tagColor: "bg-red-100 text-red-700" },
            { teks: "Madzhab Dalam Fiqih Islam — Biografi Imam Mazhab, Keteladanan", kelas: "IX/2", tag: "Soal 31, 42", tagColor: "bg-red-100 text-red-700" },
            { teks: "Salat Gerhana, Istiska & Jenazah — Tata Cara Shalat Gerhana", kelas: "VIII/1", tag: "Soal 26", tagColor: "bg-emerald-100 text-emerald-700" },
            { teks: "Jual Beli & Hutang Piutang — Fikih Muamalah, Larangan Riba", kelas: "VIII/2", tag: "Soal 27", tagColor: "bg-emerald-100 text-emerald-700" },
            { teks: "Sujud Sahwi, Tilawah & Syukur — Bacaan Sujud, Tata Cara", kelas: "VII/1", tag: "Soal 28", tagColor: "bg-blue-100 text-blue-700" },
            { teks: "Rukhsah Dalam Ibadah — Kemudahan Dari Allah SWT", kelas: "VII/2", tag: "Soal 23", tagColor: "bg-blue-100 text-blue-700" }
        ]
    },
    {
        id: "sejarah",
        kategori: "SKI / Tarikh",
        ikon: "history_edu",
        bgColor: "bg-emerald-50",
        pillColor: "bg-secondary-container/30 text-secondary",
        judul: "Sejarah Peradaban Islam",
        lgColSpan2: true,
        poin: [
            { teks: "Peradaban Daulah Usmani — Tokoh Pemimpin, Sebab Runtuhnya Turki Usmani", kelas: "IX/1", tag: "Soal 29, 30", tagColor: "bg-red-100 text-red-700" },
            { teks: "Daulah Abbasiyah (750-1258 M) — Masa Keemasan Islam, Bayt Al Hikmah", kelas: "VIII/1", tag: "Soal 32, 43", tagColor: "bg-emerald-100 text-emerald-700" },
            { teks: "Ilmuwan Muslim Masa Abbasiyah — Kontribusi untuk Kemanusiaan & Peradaban", kelas: "VIII/2", tag: "Soal 33, 39", tagColor: "bg-emerald-100 text-emerald-700" },
            { teks: "Bani Umayah di Damaskus (661-750 M) — Sebab Kemunduran Dinasti", kelas: "VII/1", tag: "Soal 35", tagColor: "bg-blue-100 text-blue-700" },
            { teks: "Bani Umayah di Andalusia (756-1031 M) — Tokoh & Ilmuwan", kelas: "VII/2", tag: "Soal 34", tagColor: "bg-blue-100 text-blue-700" }
        ]
    }
];

const quizData2024 = [
    {
        "id": 1,
        "materi": "Al-Qur'an & Hadis",

"pertanyaan": "Hadits adalah sumber hukum Islam kedua setelah Al Qur'an. Fungsi Hadits ada 4 yaitu, sebagai Bayān Al-Taqrīr (menetapkan dan memperkuat apa yang telah diterangkan di dalam Al-Qur'an), Bayān Al-Tafsīr (penjelasan terhadap ayat-ayat yang memerlukan perincian atau penjelasan lebih lanjut), Bayān Al-Tasyri' (memberikan kepastian hukum Islam yang tidak ada di Al-Qur'an) dan Bayan Al-Nasakh (membatalkan ketentuan terdahulu).<br><br><span class=\'italic\'>\'Dan Kami tidak menurunkan Kitab (Al-Qur'an) ini kepadamu (Muhammad), melainkan agar engkau dapat menjelaskan kepada mereka apa yang mereka perselisihkan, serta menjadi petunjuk dan rahmat bagi orang-orang yang beriman.\'</span> Q.S. An-Nahl/16 : 64<br><br>Untuk memahami Q.S. An-Nahl/16 : 64 ini, fungsi Hadits yang sesuai adalah sebagai....",


        "gambar": "",

"kutipan": "",


        "opsi": [
            "Bayān Al-Taqrīr",

            "Bayān Al-Tafsīr",

            "Bayān Al-Tasyri'",

            "Bayan Al-Nasakh"

        ],
        "kunciJawaban": 1,
        "tipsBidang": "",

        "tipe": "pg"

    },
    {
        "id": 2,
        "materi": "Al-Qur'an & Hadis",

"pertanyaan": "Sebagai seorang mukmin, sudah seharusnya kita menggantungkan harapan dan mohon pertolongan kepada Allah SWT, karena itu menjadi salah satu indikator keimanan kita. Allah juga menjelaskan di beberapa ayat, diantaranya ayat berikut ini:<br><br><span class='text-2xl font-bold font-arabic leading-loose text-center block' dir='rtl'>يَا أَيُّهَا الَّذِينَ آمَنُوا اسْتَعِينُوا بِالصَّبْرِ وَالصَّلَاةِ ۚ إِنَّ اللَّهَ مَعَ الصَّابِرِينَ</span><br>Allah menyuruh kita meminta pertolongan kepada Allah SWT dengan cara....",


        "gambar": "",

"kutipan": "",


        "opsi": [
            "Sabar dan salat",

            "Dzikir dan doa",

            "Salat dan puasa",

            "Zakat dan sedekah"

        ],
        "kunciJawaban": 0,
        "tipsBidang": "",

        "tipe": "pg"

    },
    {
        "id": 3,
        "materi": "Al-Qur'an & Hadis",

"pertanyaan": "Perhatikan Q.S Al Isra'/17 : 27 berikut!<br><br><span class='text-2xl font-bold font-arabic leading-loose text-center block' dir='rtl'>إِنَّ الْمُبَذِّرِينَ كَانُوا إِخْوَانَ الشَّيَاطِينِ ۖ وَكَانَ الشَّيْطَانُ لِرَبِّهِ كَفُورًا</span><br>Di bawah ini ada beberapa pernyataan mengenai kandungan Q.S Al Isra' : 27 pilihlah salah satu jawaban yang paling tepat!",


        "gambar": "",

"kutipan": "",


        "opsi": [
            "Saudara-saudara setan adalah orang yang selalu berbuat dholim kepada temannya",

            "Prilaku yang dicintai oleh Allah SWT adalah mereka yang suka menabung dan tidak melakukan prilaku boros dalam kehidupan sehari-hari",

            "Prilaku yang dicintai Allah SWT adalah mereka yang banyak bersedekah dan berinfaq",

            "Setan menjadi saudara orang-orang yang banyak membicarakan kejelekan orang lain"

        ],
        "kunciJawaban": 1,
        "tipsBidang": "",

        "tipe": "pg"

    },
    {
        "id": 4,
        "materi": "Ilmu Tajwid",

"pertanyaan": "Perhatikan tabel berikut ini!<br><table class='w-full border-collapse border border-outline-variant/30 my-4 text-center'><tr><td class='border border-outline-variant/30 p-2'>1</td><td class='border border-outline-variant/30 p-2'>Mad Thabi'i</td><td class='border border-outline-variant/30 p-2'>A</td><td class='border border-outline-variant/30 p-2 font-arabic text-xl'>وَعِبَادُ الرَّحْمَٰنِ</td></tr><tr><td class='border border-outline-variant/30 p-2'>2</td><td class='border border-outline-variant/30 p-2'>Mad Jaiz Munfasil</td><td class='border border-outline-variant/30 p-2'>B</td><td class='border border-outline-variant/30 p-2 font-arabic text-xl'>كَانُوا إِخْوَانَ</td></tr><tr><td class='border border-outline-variant/30 p-2'>3</td><td class='border border-outline-variant/30 p-2'>Mad Wajib Muttasil</td><td class='border border-outline-variant/30 p-2'>C</td><td class='border border-outline-variant/30 p-2 font-arabic text-xl'>قَالُوا سَلَامًا</td></tr><tr><td class='border border-outline-variant/30 p-2'>4</td><td class='border border-outline-variant/30 p-2'>Mad 'Iwad</td><td class='border border-outline-variant/30 p-2'>D</td><td class='border border-outline-variant/30 p-2 font-arabic text-xl'>وَنُزِّلَ الْمَلَائِكَةُ</td></tr></table>Dalam tabel di atas ada hukum bacaan Mad beserta contohnya, tentukan pasangan yang paling tepat antara hukum bacaan Mad dan contohnya pada kolom di atas!",


        "gambar": "",

"kutipan": "",


        "opsi": [
            "1-A, 2-B, 3-D, 4-C",

            "1-A, 2-B, 3-C, 4-D",

            "1-C, 2-B, 3-A, 4-D",

            "1-C, 2-D, 3-D, 4-A"

        ],
        "kunciJawaban": 1,
        "tipsBidang": "",

        "tipe": "pg"

    },
    {
        "id": 5,
        "materi": "Al-Qur'an & Hadis",

"pertanyaan": "Perhatikan Q.S. Al Baqarah ayat 143 berikut!<br><br><span class='text-2xl font-bold font-arabic leading-loose text-center block' dir='rtl'>وَكَذَٰلِكَ جَعَلْنَاكُمْ أُمَّةً وَسَطًا لِّتَكُونُوا شُهَدَاءَ عَلَى النَّاسِ وَيَكُونَ الرَّسُولُ عَلَيْكُمْ شَهِيدًا ۗ</span><br>Kata kunci dalam memahami ayat di atas adalah pada kalimat “ummatan wasaṭan” yang berarti umat pertengahan. Ayat ini menunjukkan bahwa ajaran Islam bersifat wasath (moderat), sehingga umat yang mengamalkan ajaran Islam adalah umat moderat. Tentukan pernyataan makna “ummatan wasaṭan” yang sesuai di bawah ini <b>kecuali</b>....",


        "gambar": "",

"kutipan": "",


        "opsi": [
            "Seorang muslim dalam soal agama sangat berprilaku ekstrem, sangat mementingkan kehidupan akhirat melupakan kehidupan dunia.",

            "Umat yang berlaku adil dengan senantiasa menegakkan keadilan dan kebenaran serta membela yang hak dan melenyapkan yang batil.",

            "Umat yang berada di posisi tengah antara orang-orang yang mementingkan keduniaan dalam kehidupannya dan orang-orang yang mementingkan akhirat saja.",

            "Seorang muslim tidak akan ekstrem pada dunia, juga tidak ekstrem pada akhirat saja."

        ],
        "kunciJawaban": 0,
        "tipsBidang": "",

        "tipe": "pg"

    },
    {
        "id": 6,
        "materi": "Aqidah",

"pertanyaan": "Hasil Timnas Indonesia vs Vietnam di matchday 2 Grup D Piala Asia 2024 ditutup dengan skor akhir 1 - 0 lewat penalti Asnawi Mangkualam. Kemenangan di Stadion Abdullah bin Khalifa, Qatar, ini membuat Garuda naik ke peringkat 3 klasemen AFC Asian Cup 2023 di bawah Jepang.<br>Melihat hasil yang membanggakan pasukan merah putih setelah latihan keras, bermain bagus, tentunya masyarakat Indonesia merasa senang dan bersyukur dengan hasil tersebut. Menerima hasil ini sesuai dengan QS. Ali Imran/3 : 159 yaitu ....",


        "gambar": "",

"kutipan": "",


        "opsi": [
            "Syukur",

            "Tawakkal",

            "Ikhtiar",

            "Optimis"

        ],
        "kunciJawaban": 1,
        "tipsBidang": "",

        "tipe": "pg"

    },
    {
        "id": 7,
        "materi": "Ilmu Tajwid",

"pertanyaan": "Cara membaca hukum bacaan <i>Qalqalah</i> adalah memantul, yang termasuk bacaan <i>Qalqalah sugra</i> adalah....",


        "gambar": "",

"kutipan": "",


        "opsi": [
            "<span class='text-2xl font-arabic'>ثُمَّ يُجْزَاهُ</span>",

            "<span class='text-2xl font-arabic'>وَأَنَّ سَعْيَهُ</span>",

            "<span class='text-2xl font-arabic'>لَا تَنْقُضُوا</span>",

            "<span class='text-2xl font-arabic'>وَاسْتَغْفِرْ لَهُمْ</span>"

        ],
        "kunciJawaban": 0,
        "tipsBidang": "",

        "tipe": "pg"

    },
    {
        "id": 8,
        "materi": "Al-Qur'an & Hadis",

"pertanyaan": "Perhatikan Q.S. Az-Zumar/39: 53 berikut!<br><br><span class='text-2xl font-bold font-arabic leading-loose text-center block' dir='rtl'>قُلْ يَا عِبَادِيَ الَّذِينَ أَسْرَفُوا عَلَىٰ أَنفُسِهِمْ لَا تَقْنَطُوا مِن رَّحْمَةِ اللَّهِ ۚ إِنَّ اللَّهَ يَغْفِرُ الذُّنُوبَ جَمِيعًا ۚ إِنَّهُ هُوَ الْغَفُورُ الرَّحِيمُ</span><br>Pada ayat tersebut manakah yang <b>bukan</b> termasuk kandungan di dalamnya?",


        "gambar": "",

"kutipan": "",


        "opsi": [
            "Larangan putus asa",

            "Perintah mensyukuri nikmat",

            "Allah mengampuni semua dosa",

            "Allah Maha Pengampun"

        ],
        "kunciJawaban": 1,
        "tipsBidang": "",

        "tipe": "pg"

    },
    {
        "id": 9,
        "materi": "Ilmu Tajwid",

"pertanyaan": "Waqaf adalah tanda berhenti, Ada banyak sekali di dalam Al-Qur'an, salah satunya yang terdapat di potongan ayat berikut.<br><br><span class='text-2xl font-bold font-arabic leading-loose text-center block' dir='rtl'>قُلْ لَا تَمَنَّوْا عَلَيَّ إِسْلَامَكُمْ ۚ</span><br>Pada poongan ayat tersebut terdapat tanda waqaf ....",


        "gambar": "",

"kutipan": "",


        "opsi": [
            "Lazim",

            "Jaiz tasawi",

            "Jaiz hasan",

            "Jaiz kafi"

        ],
        "kunciJawaban": 3,
        "tipsBidang": "",

        "tipe": "pg"

    },
    {
        "id": 10,
        "materi": "Al-Qur'an & Hadis",

"pertanyaan": "Perhatikan Q.S. Al-Mujadilah [58] : 11 berikut!<br><br><span class='text-2xl font-bold font-arabic leading-loose text-center block' dir='rtl'>يَا أَيُّهَا الَّذِينَ آمَنُوا إِذَا قِيلَ لَكُمْ تَفَسَّحُوا فِي الْمَجَالِسِ فَافْسَحُوا يَفْسَحِ اللَّهُ لَكُمْ ۖ وَإِذَا قِيلَ انشُزُوا فَانشُزُوا يَرْفَعِ اللَّهُ الَّذِينَ آمَنُوا مِنكُمْ وَالَّذِينَ أُوتُوا الْعِلْمَ دَرَجَاتٍ ۚ وَاللَّهُ بِمَا تَعْمَلُونَ خَبِيرٌ</span><br>Pada ayat tersebut menjelaskan kepada manusia untuk semangat ....",


        "gambar": "",

"kutipan": "",


        "opsi": [
            "Berbakti kepada kedua orang tua",

            "Berbuat jujur dan adil",

            "Menghargai pendapat",

            "Mencari ilmu"

        ],
        "kunciJawaban": 3,
        "tipsBidang": "",

        "tipe": "pg"

    },
    {
        "id": 11,
        "materi": "Ilmu Tajwid",

"pertanyaan": "Perhatikan potongan ayat berikut! <span class='text-2xl font-bold font-arabic'>فَقَالَ</span> Setelah huruf Qa terdapat alif, maka dinamakan hukum bacaan ....",


        "gambar": "",

"kutipan": "",


        "opsi": [
            "Mad",

            "Mad Tobi'i",

            "Mad Aridlilissukun",

            "Mad 'iwad"

        ],
        "kunciJawaban": 1,
        "tipsBidang": "",

        "tipe": "pg"

    },
    {
        "id": 12,
        "materi": "Aqidah",

"pertanyaan": "Setiap hari kita berangkat sekolah, ada bermacam-macam tujuan para siswa sampai ke sekolah. Sebagai siswa muslim yang taat, pergi sekolah adalah salah satu ibadah karena melaksanakan perintah Allah SWT untuk mencari ilmu. Dengan ilmu yang ia dapatkan akan banyak manfaat di dunia dan akhirat yang ia peroleh, salah satunya adalah akan ditinggikan derajat bagi orang yang beriman dan berilmu. Selain itu Mencari ilmu adalah salah satu pencerminan iman kepada Asmaul Husna yaitu ....",


        "gambar": "",

"kutipan": "",


        "opsi": [
            "Al 'Aliim",

            "Al Khobir",

            "Al Bashir",

            "As Sami'"

        ],
        "kunciJawaban": 0,
        "tipsBidang": "",

        "tipe": "pg"

    },
    {
        "id": 13,
        "materi": "Aqidah (HOTS)",

"pertanyaan": "Pemilu telah usai, sebagai warga negara dan muslim yang baik, Xena merasa lega bisa melaksanakan kewajibannya sebagai warga negara sekaligus sebagai muslim. Ia berkeyakinan bahwa memilih pemimpin dan wakil rakyat juga ibadah dan ada aturannya dalam Islam. Meski hasilnya tidak sesuai yang ia pilih, tapi apa yang ia lakukan pasti akan dicatat dan dipertanggungjawabkan di akhirat kelak. Ini merupakan pencerminan iman kepada malaikat....",


        "gambar": "",

"kutipan": "",


        "opsi": [
            "Jibril",

            "Ridwan",

            "Rokib dan Atid",

            "Munkar dan Nakir"

        ],
        "kunciJawaban": 2,
        "tipsBidang": "",

        "tipe": "pg"

    },
    {
        "id": 14,
        "materi": "Aqidah",

"pertanyaan": "Al-Qur'an merupakan kitab suci dari Allah Swt. yang terjamin kemurniannya. Sejak awal diturunkan sampai sekarang bacaan Al-Qur'an dan isinya tidak mengalami perubahan, baik penambahan maupun pengurangan. Itulah salah satu keistimewaan Al-Qur'an dibanding dengan kitab lain. Dari pernyataan di bawah ini manakah yang <b>bukan</b> merupakan keistimewaan Al-Qur'an?",


        "gambar": "",

"kutipan": "",


        "opsi": [
            "Al-Qur'an tidak hanya terjaga secara tertulis dalam mushaf seperti yang kamu lihat sehari-hari. Al-Qur'an juga terjaga dalam hati dan pikiran para penghafal Al-Qur'an yang jumlahnya jutaan.",

            "Dalam sejarah tercatat bahwa Al-Qur'an tidak diturunkan sekaligus kepada Rasulullah Saw. Seluruh ayat-ayat Al-Qur'an diturunkan secara bertahap, sedikit demi sedikit dan berangsur-angsur.",

            "Al-Qur'an sebagai penyempurna bagi kitab-kitab sebelumnya oleh sebab itu Al-Qur'an sudah ada sejak zaman nabi Adam as hingga nabi Muhammad Saw.",

            "Umat Islam yang menjadikan Al-Qur'an sebagai pedoman dalam kehidupan sehari-hari sudah tentu akan menjadikan hidupnya terarah dan selamat sampai tujuan hidup yang sebenarnya yaitu kehidupan akhirat."

        ],
        "kunciJawaban": 2,
        "tipsBidang": "",

        "tipe": "pg"

    },
    {
        "id": 15,
        "materi": "Aqidah",

"pertanyaan": "Para nabi dan rasul memiliki sifat wajib yaitu sidiq, amanah, tabligh dan fatonah. Sebagai seorang muslim yang meyakini adanya 25 nabi dan rasul tidak cukup dengan hanya menghafal namanya saja tapi juga harus mampu meneladani dan menerapkan sifat-sifat wajib tersebut dalam kehidupan sehari-hari.<br>Carilah pasangan sifat wajib bagi rasul dengan prilaku yang sesuai di tabel di atas ini!<br>(Lihat tabel asli pada instrumen cetak, pilih pasangan yang tepat).",


        "gambar": "",

"kutipan": "",


        "opsi": [
            "1-C, 2-D, 3-B, 4-A",

            "1-B, 2-D, 3-B, 4-A",

            "1-C, 2-D, 3-A, 4-B",

            "1-C, 2-A, 3-D, 4-B"

        ],
        "kunciJawaban": 2,
        "tipsBidang": "",

        "tipe": "pg"

    },
    {
        "id": 16,
        "materi": "Aqidah",

"pertanyaan": "Dikumpulkannya seluruh manusia yang telah dibangkitkan dari alam kubur, menuju padang yang sangat luas, biasa disebut dengan hari ....",


        "gambar": "",

"kutipan": "",


        "opsi": [
            "Yaumul Mahsyar",

            "Yaumul Mizan",

            "Yaumul Ba'ats",

            "Yaumul Barzah"

        ],
        "kunciJawaban": 0,
        "tipsBidang": "",

        "tipe": "pg"

    },
    {
        "id": 17,
        "materi": "Aqidah",

"pertanyaan": "Kiamat kubro memang belum terjadi sehingga tak seorang pun mengetahui peristiwa yang sebenarnya, namun kita mengetahuinya dari firman Allah Swt. dan Hadis Nabi Saw. Salah satunya pada ayat berikut :<br><br><span class='text-2xl font-bold font-arabic leading-loose text-center block' dir='rtl'>إِذَا زُلْزِلَتِ الْأَرْضُ زِلْزَالَهَا ﴿١﴾ وَأَخْرَجَتِ الْأَرْضُ أَثْقَالَهَا ﴿٢﴾</span><br>Pada ayat tersebut menggambarkan peristiwa hari kiamat, peristiwa yang sesuai dengan ayat tersebut adalah ....",


        "gambar": "",

"kutipan": "",


        "opsi": [
            "Dan sangkakalapun ditiup, maka matilah semua (makhluk) yang di langit dan di bumi kecuali yang dikehendaki oleh Allah.",

            "Pada hari itu manusia seperti laron yang beterbangan. Dan gunung-gunung seperti bulu yang dihambur-hamburkan.",

            "Langit terbelah, pada hari itu, janji Allah pasti terlaksana.",

            "Apabila bumi diguncangkan dengan guncangan yang dahsyat, dan bumi mengeluarkan beban-beban berat (yang dikandung)nya."

        ],
        "kunciJawaban": 3,
        "tipsBidang": "",

        "tipe": "pg"

    },
    {
        "id": 18,
        "materi": "Aqidah",

"pertanyaan": "Sebagai orang yang beriman, tentu kita diwajibkan untuk meyakini dengan sepenuh hati, menerima dengan ikhlas apa yang telah ditentukan oleh Allah Swt. Adapun manfaat beriman kepada Qada dan Qadar adalah sebagai berikut, <i>kecuali</i> ....",


        "gambar": "",

"kutipan": "",


        "opsi": [
            "Selalu dihormati masyarakat",

            "Menumbuhkan sikap optimis",

            "Menjauhkan diri dari sikap sombong",

            "Ketenangan jiwa"

        ],
        "kunciJawaban": 0,
        "tipsBidang": "",

        "tipe": "pg"

    },
    {
        "id": 19,
        "materi": "Aqidah",

"pertanyaan": "Perhatikan ilustrasi berikut! Manakah yang termasuk perilaku yang mencerminkan iman kepada Qada Qadar?",


        "gambar": "",

"kutipan": "",


        "opsi": [
            "Ketika pak RT. bertanya kepada salah satu warganya yang hanya nongkrong saja mengapa tidak bekerja untuk memenuhi kebutuhannya, jawabnya kalau Allah mentakdirkan kaya, pasti saya sudah kaya, kalau Allah mentakdirkan saya miskin, ya sudah ini nasip saya.",

            "Nia mengikuti ulangan harian mata pelajaran IPS di kelasnya, namun hasilnya kurang menggembirakan, saat di tanya pak guru apakah tidak belajar, jawabnya sambil tersenyum sudah ditakdirkan Allah katanya.",

            "Setiap hari Pak Slamet selalu menaruh Pisang Raja dibawah tempat tidurnya, tak lupa bunga mawar serta beberapa makanan kecil juga ada di samping Pisang Raja, semua dilakukan sebagai bentuk usaha agar baksonya laris manis, rejeki lancar.",

            "Orang palestina yang kehilangan istri dan anaknya, serta rumah dan tokonya di bom, namun ketika di wawancarai media,ia tetap mengucapkan alhamdulillah-alhamdulillah ini sudah di takdirkan Allah Swt"

        ],
        "kunciJawaban": 3,
        "tipsBidang": "",

        "tipe": "pg"

    },
    {
        "id": 20,
        "materi": "Akhlak",

"pertanyaan": "Dalam QS Al Ankabut /29 : 45 Allah SWT berfirman “... Sesungguhnya salat itu mencegah dari (perbuatan) keji dan mungkar ...”<br>Pernyataan yang <i>tidak</i> sesuai dengan ayat tersebut adalah ....",


        "gambar": "",

"kutipan": "",


        "opsi": [
            "Orang yang menjaga salatnya, maka ia telah menegakkan agama Allah Swt., orang yang menegakkan agama Allah maka akan dijaga oleh Allah SWT.",

            "Salat adalah mengingat Allah Swt., orang yang selalu mengingat Allah Swt. tidak akan mau bermaksiat.",

            "Orang yang salat, maka tidak punya kesempatan melaksanakan kegiatan lainnya.",

            "Orang yang tekun dalam salat, hatinya akan lebih cenderung kepada amal saleh."

        ],
        "kunciJawaban": 2,
        "tipsBidang": "",

        "tipe": "pg"

    },
    {
        "id": 21,
        "materi": "Akhlak",

"pertanyaan": "Perintah yang diturunkan Allah Swt. kepada nabi Muhammad Saw. adalah perintah membaca. Karena faktanya orang yang banyak membaca akan menjadi orang yang cerdas dan pandai. Apalagi di era kemajuan teknologi seperti sekarang, umat Islam harus cerdas dan bijak dalam membedakan berita-berita yang beredar di dunia maya, sehingga tidak terjerumus dalam ghibah yang akan merugikan kita sendiri baik di dunia maupun akhirat. Cara yang dapat dilakukan untuk membedakan konten/berita yang beredar itu ghibah atau bukan adalah dengan cara ....",


        "gambar": "",

"kutipan": "",


        "opsi": [
            "Dengan memposting ke beberapa grub temannya supaya mendapat informasi lainnya",

            "Memahami efek berita/konten tersebut bermanfaat atau membawa madhorot",

            "Memahami maksud dari beredarnya konten tersebut untuk perbaikan atau menjatuhkan seseorang.",

            "Mengecek sumber berita/konten tersebut apakah bisa dipercaya atau tidak."

        ],
        "kunciJawaban": 3,
        "tipsBidang": "",

        "tipe": "pg"

    },
    {
        "id": 22,
        "materi": "Akhlak",

"pertanyaan": "Sebagai makhluk sosial, manusia selalu membutuhkan orang lain. Orang lain di sekitar kita harus diperlakukan secara baik, santun, saling menyayangi, dan menghormati. Berprasangka baik kepada orang lain akan menumbuhkan keharmonisan dalam kehidupan masyarakat. Sikap buruk sangka hanya akan memicu perpecahan dan konflik. Banyak pertikaian dan kerusuhan terjadi karena sikap buruk sangka. Jika ada isu-isu negative hendaknya diklarifikasi (tabayyun) terlebih dahulu agar kita tidak terjerumus kepada sikap curiga dan buruk sangka.<br>Orang yang terbiasa berbaik sangka dan mengutamakan tabayyun akan memperoleh manfaat sebagai berikut ....",


        "gambar": "",

"kutipan": "",


        "opsi": [
            "Hidup menjadi lebih harmonis, orang yang baik akan bergaul dengan orang baik, orang yang jujur akan bergaul dengan orang yang jujur dan sebagainya",

            "Jika mengalami kegagalan akan merasa sedih, lebih banyak mengoreksi diri dan kadangkala menyalahkan orang lain",

            "Menjadi pribadi yang banyak berfikir dan terkadang merasa lelah karena keadaan yang tidak mendukungnya",

            "Menjadi pribadi yang punya pendirian kuat, sebab tidak mudah mendapat pengaruh buruk dari orang lain"

        ],
        "kunciJawaban": 0,
        "tipsBidang": "",

        "tipe": "pg"

    },
    {
        "id": 23,
        "materi": "Akhlak",

"pertanyaan": "Perhatikan Ilustrasi berikut!<br>Dimas seorang siswa yang berprestasi di kelasnya. Saat guru menerangkan materi pelajaran, Dimas biasanya memperhatikan dengan sungguh-sungguh. Suatu saat dalam proses belajar di kelas Dimas bersenda gurau dengan teman-teman, sehingga ditegur guru. Reaksi Dimas dan teman-temannya ada yang langsung diam dan memperhatikan, ada yang tetap bersendau gurau serta ada yang membantah gurunya. Namun guru tetap menanggapinya dengan sabar.<br>Berdasarkan ilustrasi tersebut, contoh perilaku berbakti kepada guru yang paling tepat dilakukan adalah ....",


        "gambar": "",

"kutipan": "",


        "opsi": [
            "Mengingat nama dan kebaikan gurunya",

            "Memberi hadiah barang berharga kepada guru",

            "Mendengarkan setiap nasehat guru",

            "Sering berkunjung ke rumah gurunya"

        ],
        "kunciJawaban": 2,
        "tipsBidang": "",

        "tipe": "pg"

    },
    {
        "id": 24,
        "materi": "Akhlak",

"pertanyaan": "Perhatikan pernyataan berikut!<br>1) Memilih kata-kata yang baik, tidak berkata kotor<br>2) Menatap Iawan bicara berlama-lama<br>3) Menahan diri dari tertawa yang berlebihan<br>4) Menyilangkan kaki dan tangan<br>Dari pernyataan tersebut, yang merupakan tata krama berkomunika lisan yang baik adalah ...",


        "gambar": "",

"kutipan": "",


        "opsi": [
            "1, 2, 3",

            "2, 3, 4",

            "1, 2, 4",

            "2, 3, 5"

        ],
        "kunciJawaban": 0,
        "tipsBidang": "",

        "tipe": "pg"

    },
    {
        "id": 25,
        "materi": "Akhlak",

"pertanyaan": "Indah seorang siswi yang pandai, sopan dan selalu menghormati orang lain. Dalam kehidupan sehari-hari, adakalanya Indah juga harus bergaul dengan lawan jenis. Islam tidak melarang bergaul dengan lawan jenis, namun harus memperhatikan rambu-rambu yang mengatur tentang etika pergaulan dengan lawan jenis, berikut ini :<br>a) Menghindari berduaan dengan lawan jenis<br>b) Bila berduaan hanya sebatas teman<br>c) Tidak bersentuhan fisik<br>d) Menjaga pandangan<br>e) Hindari tempat-tempat yang sepi<br>f) Berkomunikasi lewat Watshap<br>g) Menjaga batas intensitas komunikasi.<br>Dari ilustrasi tersehut, manakah yang termasuk rambu-rambu yang mengatur tentang pergaulan dengan lawan jenis?",


        "gambar": "",

"kutipan": "",


        "opsi": [
            "a, b, c, d, dan e",

            "a, c, d, e, dan g",

            "a, c, e, f, dan g",

            "a, b, d, e, dan f"

        ],
        "kunciJawaban": 1,
        "tipsBidang": "",

        "tipe": "pg"

    },
    {
        "id": 26,
        "materi": "Fiqih",

"pertanyaan": "Iksan adalah pedagang yang sukses. Ia juga seorang muslim yang taat. Baginya shalat wajib sangat membantunya dalam mengatur kesibukannya dalam berdagang dan beristirahat. Sehingga ia tidak pernah meninggalkan shalat wajibnya, bahkan ia menutup dagangannya saat waktu shalat datang. HaI ini juga ia terapkan kepada karyawannya. Di hari Jumat ia lebih memilih membuka tokonya setelah shalat Jumat usai. Karena ia ingin memaksimalkan ibadah di Sayyidul Ayyam itu.<br>Dari cerita di atas, fungsi shalat Jumat yang tepat adalah ....",


        "gambar": "",

"kutipan": "",


        "opsi": [
            "Melipatgandakan pahala kebaikan.",

            "Membiasakan diri untuk disiplin terhadap waktu.",

            "Berkumpulnya umat Islam dalam masjid merupakan salah satu cara untuk mencari barakah Allah Swt.",

            "Dengan serlng berjamaah di masjid, bisa menambah semangat bekerja kita karena terbiasa melihat orang-orang yang semangat beribadah di masjid."

        ],
        "kunciJawaban": 1,
        "tipsBidang": "",

        "tipe": "pg"

    },
    {
        "id": 27,
        "materi": "Fiqih",

"pertanyaan": "Rukhsah adalah keringanan dari Allah Swt. untuk hambaNya dalam melaksanakan ibadah, tujuan diberikan rukhsah ini, agar mudah melaksanakan ibadah tanpa rasa berat.<br>Berikut ini yang <i>bukan</i> termasuk rukhsah adalah ....",


        "gambar": "",

"kutipan": "",


        "opsi": [
            "Melaksanakan shalat jamak qosor saat bepergian",

            "Membayar zakat fïtrah dengan uang",

            "Mengganti puasa bagi orang yang sakit parah saat bulan Ramadhan",

            "Membayar denda bagi jamaah haji yang tidak bisa hadir saat wukuf"

        ],
        "kunciJawaban": 3,
        "tipsBidang": "",

        "tipe": "pg"

    },
    {
        "id": 28,
        "materi": "Fiqih",

"pertanyaan": "Salat gerhana dalam fikih Islam dikenal dengan istilah shalat Kusufain yang berarti shalat dua gerhana atau shalat yang dilakukan pada saat terjadi gerhana matahari maupun bulan. Hukum shalat gerhana sunah muakkad (sangat dianjurkan).<br>Di hawah ini ketentuan shalat gerhana yang benar adalah ....",


        "gambar": "",

"kutipan": "",


        "opsi": [
            "Shalat yang dilakukan saat gerhana matahari disebut dengan shalat khusuf, dilakukan berjamaah dengan jumlah rekaat dua, dua kali ruku' pada tiap rekaatnya.",

            "Shalat yang dilakukan saat gerhana bulan disebut dengan shalat khusuf, dilakukan berjamaah dengan jumlah rekaat dua, dua kali ruku' pada tiap rekaatnya",

            "Shalat gerhana bulan dilaksanakan saat terjadi gerhana bulan disebut dengan shalat kusuf, dilakukan berjamaah dengan jumlah rekaat dua. Dengan satu kali ruku' di setiap rekaatnya",

            "Shalat gerhana matahari dilaksanakan saat terjadi gerhana matahari disebut dengan shalat kusuf, dilakukan bejamaah dengan jumlah rekaat dua. Dengan satu kali ruku' di setiap rekaatnya"

        ],
        "kunciJawaban": 1,
        "tipsBidang": "",

        "tipe": "pg"

    },
    {
        "id": 29,
        "materi": "Fiqih",

"pertanyaan": "Perhatikan bacaan sujud berikut!<br><br><span class='text-2xl font-bold font-arabic leading-loose text-center block' dir='rtl'>سُبْحَانَ مَنْ لَا يَنَامُ وَلَا يَسْهُو</span><br>Bacaan di atas merupakan salah satu bacaan sujud yang dibaca ketika melaksanakan sujud ....",


        "gambar": "",

"kutipan": "",


        "opsi": [
            "Sujud dalam shalat",

            "Sujud Syukur",

            "Sujud tilawah",

            "Sujud sahwi"

        ],
        "kunciJawaban": 3,
        "tipsBidang": "",

        "tipe": "pg"

    },
    {
        "id": 30,
        "materi": "Fiqih",

"pertanyaan": "Riba berasal dari kata dalam bahasa Arab yang berarti lehih atau bertambah. Secara istilah riba berarti tambahan pada harta yang disyaratkan dalam transaksi dari dua pelaku akad dalam tukar menukar antara harta dengan harta. Jika Aisya meminjam uang kepada Siti sebesar Rp.50.000,00 selarna enam bulan, ketika sudah jatuh tempo Aisya mengembalilan uang tersebut sejumlah Rp.55.000,00 dengan suka rela karena merasa berhutang budi dengan Siti. Maka uang Rp.5.000,00 yang ditambahkan Aisya kepada Siti adalah .....",


        "gambar": "",

"kutipan": "",


        "opsi": [
            "Bukan termasuk riba karena tambalan yang diberikan Aisya sebesar Rp.5.000,00 tidak menjadi syarat dalam hutang piutang.",

            "Bukan tertnasuk ribu karena nilai uang Rp.5.000,00 hanya kecil dan tidak mtemberatkan.",

            "Termasuk dalans riba, karena mernberi tanıbahan dalans hutang piutang.",

            "Termasuk riba, Lariena biaıpan tanyan lanja Kip.5.000,00 snentberatkan slans nieruyikan penvinjamını."

        ],
        "kunciJawaban": 0,
        "tipsBidang": "",

        "tipe": "pg"

    },
    {
        "id": 31,
        "materi": "Fiqih",

"pertanyaan": "Pak Aodtul atalals seurang pelani nelon, sudah pilulan talrun iak Ablul srieiijalnai proflesinya sebyyai petai melon.Tuhun deni latitit tijalaul denyan lekuio, ladainig nieiiołapat tunting sielintpati, tellatieng juggi rugi. liki pik Ahtltsl ııteinutiri savwals nveksnya Uengan uit lisjisn, hiernjatuals kidiar zikik yarup Ititns dibavur |usk Abiısl'",


        "gambar": "",

"kutipan": "",


        "opsi": [
            "2,5%",

            "5%",

            "10%",

            "20%"

        ],
        "kunciJawaban": 2,
        "tipsBidang": "",

        "tipe": "pg"

    },
    {
        "id": 32,
        "materi": "Fiqih",

"pertanyaan": "Pak Heri beserta istri akan melaksanakan ibadah haji tahun ini, karena pak Heri dan istrinya mendapatkan kloter awal, maka pak heri dan istrinya melaksanakan umrah dulu baru melaksanakan haji. Tata cara pelaksanaan ibadah haji pak Heri dan istrinya tersebut dinamakan ....",


        "gambar": "",

"kutipan": "",


        "opsi": [
            "Haji Ifrad",

            "Haji Tamattu'",

            "Haji Qiran",

            "Haji Wada'"

        ],
        "kunciJawaban": 1,
        "tipsBidang": "",

        "tipe": "pg"

    },
    {
        "id": 33,
        "materi": "Fiqih",

"pertanyaan": "Perhatikan pemyataan berikut!<br>1) Menyiapkan lubang penampung darah<br>2) Menyiapkan ember dan gayung untuk inembersihkan darah<br>3) Hewan yang akan disembelih di hadapkan ke kiblat<br>4) Kaki hewan di pegang kuat-kuat atau diikat<br>5) Leher hewan di letakkan di atas lubang penampung darah<br>6) Hewan yang akan di sembelih di beri inakan sebanyak-banyaknya<br>7) Bemiat menyembelih<br>8) Membaca basmalah, shalawat Nabi, dan takbir<br>9) Arahkan pisau pada bagian Ieher hewan<br>Berdasarkan pernyataan tersebut, yang tennasuk ketentuan tata cara penyembelihan hewan secara tradisional adalah ....",


        "gambar": "",

"kutipan": "",


        "opsi": [
            "1, 2, 3, 4, 5, 6, 7",

            "2, 3, 4, 5, 7, 8, 9",

            "1, 3, 4, 5, 7, 8, 9",

            "2, 3, 5, 6, 7, 8, 9"

        ],
        "kunciJawaban": 2,
        "tipsBidang": "",

        "tipe": "pg"

    },
    {
        "id": 34,
        "materi": "Fiqih",

"pertanyaan": "Bu Atika ssorans ihn smda, tielisu sielaliskani smuk lak-laki yank ganlesk dau sseugensasskiiss. |rada hrsl Letujuht ucteish Lrliilnsms issaknya, lrn Alkka mnelaksinakan Akilkuh slespsn Ketentuan whuasi inerihus ....",


        "gambar": "",

"kutipan": "",


        "opsi": [
            "Menyenbelih 2 ckor snpi ksrena be liasr knva rnyn",

            "Mnvyemnelisl I ekior ksishlng yrna mngst yenik",

            "Minyestnielilt 2 Lkor Lamnbinp vins wehis dssis sulat lrerxauid Kiei jxiel",

            "Mienverskxlilı ' rAit kiumnlislit yang kcsil mris lieluns Inexniils klpt kiurnn slagltituyra inili cisijusk"

        ],
        "kunciJawaban": 2,
        "tipsBidang": "",

        "tipe": "pg"

    },
    {
        "id": 35,
        "materi": "Tarikh",

"pertanyaan": "Setelah sampai di Madinah, Nabi Muhammad saw. mulai membuat program kerja dan melaksanakannya yaitu membangun masjid, mempersaudarakan antara Muhajirin dan Ansor, dan membuat perjanjian dengan penduduk Madinah. Madinah tidak hanya orang-orang Islam saja yang tinggal, tetapi di sana terdapat pula orang-orang nonmuslim. Agar terjadi hubungan yang harmonis, saling menghormati, toleransi, dan menjaga lingkungan di Madinah, maka harus ada kesepakatan bersama. Piagam inilah yang oleh Ibnu Hisyam disebut sebagai undang-undang dasar negara dan pemerintahan Islam yang pertama. Isinya mencakup, antara lain, perikemanusiaan, keadilan sosial, toleransi beragama, dan gotong royong.<br>Dari kisah tersebut kita dapat mengambil pelajaran dari dakwah Nabi Saw. yaitu ....",


        "gambar": "",

"kutipan": "",


        "opsi": [
            "Pemimpin harus bisa membuat suatu kebijakan di mana seluruh kelompok tidak ada yang tersinggung dan tersakiti.",

            "Hijrah dapat menciptakan Negara dan pemerintahan baru yang lebih baik.",

            "Pemimpin harus bisa mempengaruhi pemikiran masyarakat yang dipimpinnya",

            "Pemimpin yang baik harus memiliki rakyat yang mau mengikuti keputusannya."

        ],
        "kunciJawaban": 0,
        "tipsBidang": "",

        "tipe": "pg"

    },
    {
        "id": 36,
        "materi": "Tarikh",

"pertanyaan": "Sepeninggal Rosululloh Saw., kepemimpinan unat Islam digantikan oleh Khulafaur Rosyidiin. Ada 4 kholifah yang Inenggantikan Rosulullah, mereka memıiliki ciri khas dalan sifst dan kepemimpinannya. Salah satu Khlolifah yang terkenal dengan kebījaksanaannya, tegas dalans nrngunibil keputusan urıuk oranp-orang yallk engXan ncnnbayar isLat dnn IxLjnL UaILn pemtulukunn AI Qur'an yanL prrsnsmndalnmn Islam arlalah ....",


        "gambar": "",

"kutipan": "",


        "opsi": [
            "Umar bin Khothob",

            "Abu Bakar As Sidiq",

            "Usman bin AtTan",

            "Ali BinAbi Tholib"

        ],
        "kunciJawaban": 1,
        "tipsBidang": "",

        "tipe": "pg"

    },
    {
        "id": 37,
        "materi": "Tarikh",

"pertanyaan": "Paln uass ptuneriutalian lsun Umiavalı, Ilnun ptıuscialnnn sncısgalanul kemajuan yng sangl lsenarvi Sislalı snumya lalinm hlilamg Lrdokleıan yaug nnainnu nelalıiıkau ssnnank okah ulil Inalsh, peiniss lInni prıvnlil tnlinsn ıdan petnvukit inlit. TaLolr trisehui adnluls ....",


        "gambar": "",

"kutipan": "",


        "opsi": [
            "Abu AI-QasiınAblns lhnu Eurnss",

            "Abu AI-Ousinr AI-Ziıhsvi",

            "Ahir Maswn Abdul MlıL hirv Ilalıih",

            "Allı AnirAlsltilliıli Ilıı Syulrsil"

        ],
        "kunciJawaban": 1,
        "tipsBidang": "",

        "tipe": "pg"

    },
    {
        "id": 38,
        "materi": "Tarikh",

"pertanyaan": "Sunan Kalijaga merupakan salah satu tokoh Wali Songo yang lahir di Tuban, Jawa Timur, pada pertengahan abad ke-15. Dalam menyebarkan ajaran Islam di Tanah Jawa, Sunan Kalijaga mempunyai pola yang sama dengan guru sekaligus sahabat dekatnya, Sunan Bonang. Dakwah Sunan Kalijaga sangat toleran terhadap budaya lokal, karena tidak ingin menyinggung atau membelokkan langsung keyakinan masyarakat yang telah dianut secara turun temurun. Sunan Kalijaga meyakinkan bahwa adat istiadat dan budaya lamanya, baik yang bersumber dari ajaran Hindu-Budha maupun kepercayaan nenek moyangnya masih bisa digunakan asalkan disisipkan ajaran Islam.<br>Pada artikel tersebut, Sunan Kalijaga menyebarkan Islam di Nusantara dengan menggunakan cara ....",


        "gambar": "",

"kutipan": "",


        "opsi": [
            "Kesenian",

            "Pendidikan",

            "Hubungan sosial",

            "Perdagangan"

        ],
        "kunciJawaban": 0,
        "tipsBidang": "",

        "tipe": "pg"

    },
    {
        "id": 39,
        "materi": "Fiqih",
        "pertanyaan": "Dalam ilmu Fiqih dikenal 4 (empat) mazhab besar yang diakui dalam Islam Sunni (Ahlussunnah Wal Jamaah). Salah satu mazhab sangat dikenal karena paling ketat berpegang pada Al-Qur'an dan Hadis, serta menolak penggunaan akal (ra'yu) secara bebas dalam menetapkan hukum. Mazhab yang dimaksud dan pendirinya yang paling banyak menanggung penderitaan karena mempertahankan prinsipnya adalah ....",
        "gambar": "",
        "kutipan": "",
        "opsi": [
            "Imam Hanafi",
            "Imam Maliki",
            "Imam Syafi'i",
            "Imam Hanbali"
        ],
        "kunciJawaban": 3,
        "tipsBidang": "Imam Ahmad bin Hanbal (pendiri Mazhab Hanbali) dikenal paling tegas menolak campur tangan akal dalam hukum Islam dan pernah dipenjara karena mempertahankan keyakinannya.",
        "tipe": "pg"
    },
    {
        "id": 40,
        "materi": "Seni Budaya Islam",
        "pertanyaan": "Masjid Al-Jabbar adalah masjid megah yang diresmikan pada tanggal 30 Januari 2023 di Kota Bandung, Jawa Barat. Masjid ini berdiri di atas danau buatan dan memiliki desain yang sangat indah dengan memadukan estetika modern dan nilai-nilai Islam.<br>Keindahan Masjid Al-Jabbar sebagai karya agung mencerminkan salah satu bentuk ekspresi seni Islam yang paling menonjol pada bangunan, yaitu seni ....",
        "gambar": "",
        "kutipan": "",
        "opsi": [
            "Seni Arsitektur (Bangunan) Islam",
            "Seni Baca Al-Qur'an (Tilawah)",
            "Seni Kaligrafi Arab",
            "Seni Musik Islami"
        ],
        "kunciJawaban": 0,
        "tipsBidang": "Masjid Al-Jabbar adalah contoh nyata Seni Arsitektur Islam modern yang memadukan keindahan bangunan dengan nilai-nilai keislaman.",
        "tipe": "pg"
    },
    {
        "id": 41,
        "materi": "Tarikh",

"pertanyaan": "Masa Rosululloh Saw. masih hidup, Al Qur'an tidak dibukukan, tetapi ditulis di beberapa media yang berbeda-beda seperti batu tulis, pelepah kurma maupun kulit-kulit pohon. Saat kepemimpinan umat Islam digantikan Khulafaur Rosyidin, Al Qur'an 2 kali dibukukan, pada masa kholifah siapakah Al Qur'an itu dibukukan? Jelaskan alasan pembukuannya!",


        "gambar": "",

"kutipan": "",


        "opsi": [],
        "kunciJawaban": "",

        "tipsBidang": "",

        "tipe": "uraian"

    },
    {
        "id": 42,
        "materi": "Fiqih",

"pertanyaan": "Di dalam Q.S. Al Maidah/5 : 3 Allah menjelaskan secara langsung makanan yang haram dari segi zatnya. Di dalam ayat yang lain juga dijelaskan makanan yang kotor dan menjijikkan juga diharamkan untuk dimakan. Sedangkan ketentuan makanan yang halal juga diatur Allah dalam ayat Al Qur'an dan Hadis. Jelaskan jenis-jenis makanan yang halal dari segi wujudnya yang sudah Allah jelaskan dalam Al Qur'an maupun dijelaskan dalam Hadis!",


        "gambar": "",

"kutipan": "",


        "opsi": [],
        "kunciJawaban": "",

        "tipsBidang": "",

        "tipe": "uraian"

    },
    {
        "id": 43,
        "materi": "Fiqih",

"pertanyaan": "Penyembelihan yang disyariatkan dalam ajaran Islam adalah penyembelihan yang memenuhi ketentuan-ketentuannya, adapun ketentuan yang harus dipenuhi seorang penyembelih adalah sebagai berikut, sebutkan!",


        "gambar": "",

"kutipan": "",


        "opsi": [],
        "kunciJawaban": "",

        "tipsBidang": "",

        "tipe": "uraian"

    },
    {
        "id": 44,
        "materi": "Al-Qur'an & Hadis",

"pertanyaan": "Tulislah kembali QS. Al Hujurat/49: 13 berikut, serta terjemahkanlah!<br><br><span class='text-2xl font-bold font-arabic leading-loose text-center block' dir='rtl'>يَا أَيُّهَا النَّاسُ إِنَّا خَلَقْنَاكُم مِّن ذَكَرٍ وَأُنثَىٰ وَجَعَلْنَاكُمْ شُعُوبًا وَقَبَائِلَ لِتَعَارَفُوا ۚ إِنَّ أَكْرَمَكُمْ عِندَ اللَّهِ أَتْقَاكُمْ ۚ إِنَّ اللَّهَ عَلِيمٌ خَبِيرٌ</span>",


        "gambar": "",

"kutipan": "",


        "opsi": [],
        "kunciJawaban": 0,
        "tipsBidang": "",

        "tipe": "uraian"

    },
    {
        "id": 45,
        "materi": "Akhlak",

"pertanyaan": "Amanah berasal dari kata dalam bahasa Arab amāntaan yang berarti aman, tenteram, tenang, dan hilang rasa takut. Sementara dalam bahasa Indonesia amanah diartikan sebagai sesuatu yang ditiyipkan kepada orang lain, keamanan dan ketenteraman, dan dapat dipercaya. Allah memerintahkan umat Islam untuk menjaga amanah. Jelaskan tiga cakupan makna amanah yang kamu ketahui beserta contohnya!",


        "gambar": "",

"kutipan": "",


        "opsi": [],
        "kunciJawaban": "",

        "tipsBidang": "",

        "tipe": "uraian"

    }
];


const quizData2025 = [
    {
        "id": 1,
        "materi": "Al-Qur'an",

"pertanyaan": "Perhatikan potongan ayat berikut!<br><br><span class='text-2xl font-bold font-arabic leading-loose text-center block' dir='rtl'>تَفَسَّحُوا فِي الْمَجَالِسِ فَافْسَحُوا يَفْسَحِ اللَّهُ لَكُمْ</span><br>Pada potongan ayat tersebut menjelaskan bahwa ....",


        "gambar": "",

"kutipan": "",


        "opsi": [
            "Allah mengetahui apa yang ada di langit dan di bumi",

            "Allah memerintahkan manusia untuk berlapang-lapang dalam majelis ilmu",

            "Perbedaan orang musyrik dengan orang yang takut kepada Tuhannya",

            "Tuhan yang mempunyai kerajaan, memberikan kerajaan kepada siapa yang dikehendaki"

        ],
        "kunciJawaban": 1,
        "tipsBidang": "",

        "tipe": "pg"

    },
    {
        "id": 2,
        "materi": "Ilmu Tajwid",

"pertanyaan": "Perhatikan potongan ayat berikut!<br><br><span class='text-2xl font-bold font-arabic leading-loose text-center block' dir='rtl'>خَيْرٌ لَّكُمْ وَأَطْهَرُ ۗ فَإِن لَّمْ تَجِدُوا</span><br>Pada potongan ayat tersebut terdapat tanda Waqaf Qila (Waqfu Aula), yang artinya ....",


        "gambar": "",

"kutipan": "",


        "opsi": [
            "Diutamakan berhenti",

            "Diutamakan lanjut",

            "Harus berhenti",

            "Boleh berhenti, boleh lanjut"

        ],
        "kunciJawaban": 0,
        "tipsBidang": "",

        "tipe": "pg"

    },
    {
        "id": 3,
        "materi": "Al-Qur'an",

"pertanyaan": "'Sesungguhnya Aku (Allah) hendak menjadikan seorang khalifah di muka bumi'. Ayat yang terjemahannya sesuai dengan pernyataan tersebut adalah ....",


        "gambar": "",

"kutipan": "",


        "opsi": [
            "<span class='text-2xl font-arabic block' dir='rtl'>وَابْتَغِ فِيمَا آتَاكَ اللَّهُ الدَّارَ الْآخِرَةَ ۖ وَلَا تَنسَ نَصِيبَكَ مِنَ الدُّنْيَا</span>",

            "<span class='text-2xl font-arabic block' dir='rtl'>وَمِن كُلِّ شَيْءٍ خَلَقْنَا زَوْجَيْنِ لَعَلَّكُمْ تَذَكَّرُونَ</span>",

            "<span class='text-2xl font-arabic block' dir='rtl'>وَبَشِّرِ الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ أَنَّ لَهُمْ جَنَّاتٍ تَجْرِي مِن تَحْتِهَا الْأَنْهَارُ</span>",

            "<span class='text-2xl font-arabic block' dir='rtl'>وَإِذْ قَالَ رَبُّكَ لِلْمَلَائِكَةِ إِنِّي جَاعِلٌ فِي الْأَرْضِ خَلِيفَةً</span>"

        ],
        "kunciJawaban": 3,
        "tipsBidang": "",

        "tipe": "pg"

    },
    {
        "id": 4,
        "materi": "Al-Qur'an",

"pertanyaan": "Perhatikan QS. Al Qasas (28) : 77 berikut!<br><br><span class='text-2xl font-bold font-arabic leading-loose text-center block' dir='rtl'>وَابْتَغِ فِيمَا آتَاكَ اللَّهُ الدَّارَ الْآخِرَةَ ۖ وَلَا تَنسَ نَصِيبَكَ مِنَ الدُّنْيَا ۖ وَأَحْسِن كَمَا أَحْسَنَ اللَّهُ إِلَيْكَ ۖ وَلَا تَبْغِ الْفَسَادَ فِي الْأَرْضِ</span><br>Manakah yang <span class='italic font-bold'>bukan</span> merupakan kandungan QS. Al Qasas (28) : 77?",


        "gambar": "",

"kutipan": "",


        "opsi": [
            "Perintah kepada manusia agar hidup secara seimbang antara dunia dan akherat",

            "Perintah kepada manusia untuk berbuat baik kepada sesama manusia",

            "Larangan berbuat kerusakan di muka bumi",

            "Larangan memakan harta anak yatim"

        ],
        "kunciJawaban": 3,
        "tipsBidang": "",

        "tipe": "pg"

    },
    {
        "id": 5,
        "materi": "Ilmu Tajwid",

"pertanyaan": "Perhatikan bacaan Mad berikut!<br><br><span class='text-2xl font-bold font-arabic leading-loose text-center block' dir='rtl'>فِيمَا آتَاكَ</span><br>Pada potongan ayat tersebut mengandung hukum bacaan ....",


        "gambar": "",

"kutipan": "",


        "opsi": [
            "Mad wajib muttasil",

            "Mad jaiz munfasil",

            "Mad 'Arid Lissukun",

            "Mad 'Iwad"

        ],
        "kunciJawaban": 1,
        "tipsBidang": "",

        "tipe": "pg"

    },
    {
        "id": 6,
        "materi": "Al-Qur'an",

"pertanyaan": "Perhatikan ayat berikut!<br><br><span class='text-2xl font-bold font-arabic leading-loose text-center block' dir='rtl'>ظَهَرَ الْفَسَادُ فِي الْبَرِّ وَالْبَحْرِ بِمَا كَسَبَتْ أَيْدِي النَّاسِ</span><br>Kandungan makna yang sesuai dengan ayat tersebut adalah ....",


        "gambar": "",

"kutipan": "",


        "opsi": [
            "Manusia adalah penyebab kerusakan alam",

            "Allah SWT menumbuhkan tanaman dengan air hujan",

            "Allah SWT menciptakan alam untuk manusia",

            "Manusia dianugerahi akal pikiran agar dapat berpikir dan bersyukur"

        ],
        "kunciJawaban": 0,
        "tipsBidang": "",

        "tipe": "pg"

    },
    {
        "id": 7,
        "materi": "Ilmu Tajwid",

"pertanyaan": "Perhatikan bacaan QS. Al-Baqarah: 143 berikut!<br><br><span class='text-2xl font-bold font-arabic leading-loose text-center block' dir='rtl'>وَكَذَٰلِكَ جَعَلْنَاكُمْ أُمَّةً وَسَطًا لِّتَكُونُوا شُهَدَاءَ عَلَى النَّاسِ وَيَكُونَ الرَّسُولُ عَلَيْكُمْ شَهِيدًا</span><br>Hukum bacaan izhar syafawi pada ayat tersebut berjumlah ....",


        "gambar": "",

"kutipan": "",


        "opsi": [
            "Empat",

            "Tiga",

            "Dua",

            "Satu"

        ],
        "kunciJawaban": 3,
        "tipsBidang": "",

        "tipe": "pg"

    },
    {
        "id": 8,
        "materi": "Al-Qur'an",

"pertanyaan": "Dalam QS Al Baqarah: 143, diharapkan umat Islam menjadi umat yang 'adil dan Moderat'. Yang <span class='italic font-bold'>tidak</span> termasuk dari adil dan moderat yang dimaksud adalah ....",


        "gambar": "",

"kutipan": "",


        "opsi": [
            "Memberikan perlakuan yang sama dalam menegakkan aturan kepada semua orang",

            "Lebih mengutamakan akhirat tanpa memikirkan kehidupan dunia",

            "Menempatkan segala sesuatu pada tempatnya",

            "Memberikan keseimbangan antara kepentingan dunia dan akhirat"

        ],
        "kunciJawaban": 1,
        "tipsBidang": "",

        "tipe": "pg"

    },
    {
        "id": 9,
        "materi": "Al-Qur'an",

"pertanyaan": "Perhatikan potongan QS An-Nisa: 59 berikut!<br><br><span class='text-2xl font-bold font-arabic leading-loose text-center block' dir='rtl'>يَا أَيُّهَا الَّذِينَ آمَنُوا أَطِيعُوا اللَّهَ وَأَطِيعُوا الرَّسُولَ وَأُولِي الْأَمْرِ مِنكُمْ</span><br>Berdasarkan potongan ayat tersebut isi kandungannya memerintahkan agar orang-orang beriman selalu taat kepada, <span class='italic font-bold'>kecuali</span> ....",


        "gambar": "",

"kutipan": "",


        "opsi": [
            "Taat kepada Allah SWT",

            "Taat kepada pemimpin (Ulil Amri)",

            "Taat kepada orangtua",

            "Taat kepada Rasulullah SAW"

        ],
        "kunciJawaban": 2,
        "tipsBidang": "",

        "tipe": "pg"

    },
    {
        "id": 10,
        "materi": "Ilmu Tajwid",

"pertanyaan": "Perhatikan potongan kalimat berikut!<br><br><span class='text-2xl font-bold font-arabic leading-loose text-center block' dir='rtl'>عَلَيْكَ الْكِتَابَ</span><br>Hukum bacaan di atas adalah Alif Lam Qamariyah, sehingga cara membaca potongan ayat tersebut adalah ....",


        "gambar": "",

"kutipan": "",


        "opsi": [
            "Huruf alif lam tidak dibaca, masuk ke huruf kaf",

            "Huruf alif lam dibaca melebur ke huruf Qamariyah",

            "Huruf alif lam dibaca idghom, melebur pada huruf di depannya",

            "Huruf alif lam dibaca jelas, tidak melebur pada huruf di depannya"

        ],
        "kunciJawaban": 3,
        "tipsBidang": "",

        "tipe": "pg"

    },
    {
        "id": 11,
        "materi": "Al-Qur'an (Literasi)",

"pertanyaan": "Bangkok - Salah satu gedung pencakar langit yang sedang dalam tahap pembangunan di Bangkok runtuh saat gempa bermagnitudo (M) 7,7 terjadi pekan lalu... Pengujian awal terhadap material yang dikumpulkan di lokasi menunjukkan adanya baja di bawah standar di antara reruntuhan... Runtuhnya gedung itu menewaskan sedikitnya 12 orang.<br><br>Pada berita tersebut yang kaitannya dengan fenomena alam gempa bumi, manakah ayat Al-Qur'an yang sangat sesuai?",


        "gambar": "",

"kutipan": "",


        "opsi": [
            "<span class='text-2xl font-arabic block' dir='rtl'>يَوْمَ يَكُونُ النَّاسُ كَالْفَرَاشِ الْمَبْثُوثِ</span>",

            "<span class='text-2xl font-arabic block' dir='rtl'>وَإِذَا الْجِبَالُ سُيِّرَتْ</span>",

            "<span class='text-2xl font-arabic block' dir='rtl'>إِذَا زُلْزِلَتِ الْأَرْضُ زِلْزَالَهَا</span>",

            "<span class='text-2xl font-arabic block' dir='rtl'>إِذَا السَّمَاءُ انفَطَرَتْ</span>"

        ],
        "kunciJawaban": 2,
        "tipsBidang": "",

        "tipe": "pg"

    },
    {
        "id": 12,
        "materi": "Al-Qur'an",

"pertanyaan": "Perhatikan ayat (QS Al Ghosyiyah) berikut!<br><br><span class='text-2xl font-bold font-arabic leading-loose text-center block' dir='rtl'>لَّيْسَ لَهُمْ طَعَامٌ إِلَّا مِن ضَرِيعٍ</span><br>Pada ayat tersebut dijelaskan bahwa tidak ada makanan untuk penghuni neraka selain dari ....",


        "gambar": "",

"kutipan": "",


        "opsi": [
            "Darah dan nanah",

            "Sumber mata air yang sangat panas",

            "Cairan tembaga yang mendidih",

            "Pohon yang berduri"

        ],
        "kunciJawaban": 3,
        "tipsBidang": "",

        "tipe": "pg"

    },
    {
        "id": 13,
        "materi": "Al-Qur'an (HOTS)",

"pertanyaan": "Nama Achmad Zaky dikenal sebagai pendiri Bukalapak, marketplace besar dari Indonesia. Berasal dari pelosok Jawa Tengah tanpa akses listrik di masa kecil, semangatnya mempelajari pemrograman tak pernah surut demi merubah nasib. Dari nol ia merintis hingga menjadi CEO. Kisah Zaky adalah bukti bahwa sukses tak didapat dari malas-malasan, melainkan kerja keras mengubah keadaan.<br><br>Hal ini sangat sesuai dengan dalil ayat Al-Qur'an berikut: ....",


        "gambar": "",

"kutipan": "",


        "opsi": [
            "<span class='text-2xl font-arabic block' dir='rtl'>وَكُلُّ شَيْءٍ عِندَهُ بِمِقْدَارٍ</span>",

            "<span class='text-2xl font-arabic block' dir='rtl'>إِنَّ اللَّهَ لَا يُغَيِّرُ مَا بِقَوْمٍ حَتَّىٰ يُغَيِّرُوا مَا بِأَنفُسِهِمْ</span>",

            "<span class='text-2xl font-arabic block' dir='rtl'>وَلِكُلِّ أُمَّةٍ أَجَلٌ ۖ</span>",

            "<span class='text-2xl font-arabic block' dir='rtl'>وَنُفِخَ فِي الصُّورِ فَإِذَا هُم مِّنَ الْأَجْدَاثِ إِلَىٰ رَبِّهِمْ يَنسِلُونَ</span>"

        ],
        "kunciJawaban": 1,
        "tipsBidang": "",

        "tipe": "pg"

    },
    {
        "id": 14,
        "materi": "Al-Qur'an",

"pertanyaan": "Sebagai seorang muslim sejati, pastinya Al Qur'an menjadi penunjuk arah kehidupan terdepan. Dimulai dari menyempatkan belajar membacanya sampai menggunakan dalam kehidupan sehari-hari. Berikut ini adalah tahapan sistematis dalam mencintai Al Qur'an, yaitu ....",


        "gambar": "",

"kutipan": "",


        "opsi": [
            "Membaca, memahami, mengamalkan dan mentadabburi",

            "Memahami, membaca, mengamalkan, dan mentadabburi",

            "Mentadabburi, membaca, memahami dan mengamalkan",

            "Membaca, memahami, mentadabburi dan mengamalkan"

        ],
        "kunciJawaban": 3,
        "tipsBidang": "",

        "tipe": "pg"

    },
    {
        "id": 15,
        "materi": "Aqidah (Generasi Z)",

"pertanyaan": "Para Nabi dan Rasul adalah teladan terbaik dalam karakter. Di era digital inipun, sifat keteladanan para Nabi pantas dicontoh untuk kondusifnya kemajuan zaman dari penjahat dunia maya. Berikut ini <span class='font-bold italic'>bukan</span> ciri generasi digital yang berkarakter islami adalah ....",


        "gambar": "",

"kutipan": "",


        "opsi": [
            "Berinternet dengan aman dan bertanggungjawab",

            "Memanfaatkan internet untuk kebaikan",

            "Menghindari dampak negatif internet (hoaks/cyberbullying)",

            "Menggunakan internet bebas sesukanya jika menguntungkan dirinya saja"

        ],
        "kunciJawaban": 3,
        "tipsBidang": "",

        "tipe": "pg"

    },
    {
        "id": 16,
        "materi": "Akhlak",

"pertanyaan": "Dalam tatanan kehidupan bermasyarakat pasti akan terjadi komunikasi. Dalam ajaran Agama Islam cara berkomunikasi diajarkan agar tidak ada pihak yang merasa tersakiti. Etika yang dimaksud adalah ....",


        "gambar": "",

"kutipan": "",


        "opsi": [
            "Kebudayaan dan adat istiadat",

            "Norma masyarakat",

            "Sopan santun dan tata krama",

            "Aturan tertulis pemerintah lokal"

        ],
        "kunciJawaban": 2,
        "tipsBidang": "",

        "tipe": "pg"

    },
    {
        "id": 17,
        "materi": "Akhlak",

"pertanyaan": "Sebagai manusia di kehidupan sehari-hari pasti mengalami interaksi dengan lawan jenis. Oleh karena itu perlu memperhatikan etika pergaulan Islami dengan lawan jenis. Adapun etika pergaulan lawan jenis di antaranya <span class='font-bold italic'>kecuali</span> ....",


        "gambar": "",

"kutipan": "",


        "opsi": [
            "Berbicara sengaja dengan jarak yang saling berdempetan dekat",

            "Menundukkan pandangan (Ghadul Bashar)",

            "Menghindari berada berduaan di tempat yang sunyi (Khalwat)",

            "Tidak berbaur campur aduk (Ikhtilat) secara bebas antara laki-laki dan perempuan"

        ],
        "kunciJawaban": 0,
        "tipsBidang": "",

        "tipe": "pg"

    },
    {
        "id": 18,
        "materi": "Seni Islami",

"pertanyaan": "Agama Islam tidak membatasi kreatifitas pemeluknya selama tidak bertentangan dengan ajaran agama Islam. Ada kesenian yang sangat luhur dalam menyusun dan merangkai indah teks huruf Arab dengan proporsi keindahan visual, yang disebut ....",


        "gambar": "",

"kutipan": "",


        "opsi": [
            "Seni Kaligrafi",

            "Seni Arsitektur",

            "Seni Pahat Mozaik",

            "Seni Ukir Geometris"

        ],
        "kunciJawaban": 0,
        "tipsBidang": "",

        "tipe": "pg"

    },
    {
        "id": 19,
        "materi": "Seni Islami",

"pertanyaan": "Ada beberapa macam seni Langgam (Nagham) atau nada tilawah dalam membaca Al-Qur'an agar semakin menyentuh qolbu. Di bawah ini termasuk langgam, <span class='font-bold italic'>kecuali</span> ....",


        "gambar": "",

"kutipan": "",


        "opsi": [
            "Bayati",

            "Shoba (Saba)",

            "Sila",

            "Jiharka"

        ],
        "kunciJawaban": 2,
        "tipsBidang": "Sila adalah jenis waqaf, bukan nama langgam tilawah.",

        "tipe": "pg"

    },
    {
        "id": 20,
        "materi": "Akhlak",

"pertanyaan": "Saat menjelang Idul Fitri, Wawan menerima amplop gaji dari bosnya. Ia terkejut isinya jauh lebih banyak dari seharusnya. Karena yakin bos salah hitung, Wawan langsung mengembalikannya jujur. Si Bos malah tersenyum dan memberikan sisa uang itu kembali kepada Wawan sebagai 'Bonus Kejujuran'. Kejadian manis ini menggambarkan bahwa ....",


        "gambar": "",

"kutipan": "",


        "opsi": [
            "Majikan Wawan pada dasarnya tidak teliti hitung uang",

            "Wawan awalnya panik takut dituduh polisi",

            "Wawan langsung memetik hikmah berkah instan dari integritas kejujurannya",

            "Uang itu sebenarnya memang murni bonus THR tanpa syarat"

        ],
        "kunciJawaban": 2,
        "tipsBidang": "",

        "tipe": "pg"

    },
    {
        "id": 21,
        "materi": "Akhlak",

"pertanyaan": "Di bulan suci, guru PAI menugaskan Lembar Kegiatan Amaliah Ramadhan di rumah. Hafidz sebagai siswa berintegritas, selalu mengisi buku laporannya itu sejujur-jujurnya sesuai fakta lapangan (tidak dikarang fiktif). Perilaku Hafidz tersebut merupakan contoh pelaksanaan tanggung jawab dan amanah kepada ....",


        "gambar": "",

"kutipan": "",


        "opsi": [
            "Sesama teman sekelas",

            "Amanah Diri Sendiri",

            "Tugas Guru Agama",

            "Amanah kepada Allah SWT (Ibadah puasa/Kejujuran nurani)"

        ],
        "kunciJawaban": 3,
        "tipsBidang": "Kaidah utamanya jika menyangkut ibadah rahasia murni (puasa/amal di rumah) dengan kejujuran mutlak, maka pertanggungjawabannya adalah bentuk Amanah kepada Allah SWT.",

        "tipe": "pg"

    },
    {
        "id": 22,
        "materi": "Akhlak",

"pertanyaan": "Zikir mudah dieksekusi bisa di segala momentum baik secara lisan, hati, maupun tindakan. Zikir dengan 'Hati/Nurani' seringkali diwujudkan melalui proses ....",


        "gambar": "",

"kutipan": "",


        "opsi": [
            "Merapalkan untaian tahmid, tahlil dan tasbih melalui mulut",

            "Bertafakur merenungkan ciptaan keagungan galaksi semesta alam Allah SWT",

            "Melaksanakan secara jasmani gerakan Shalat dan Puasa perut",

            "Berhenti memegang gelas khamr miras"

        ],
        "kunciJawaban": 1,
        "tipsBidang": "",

        "tipe": "pg"

    },
    {
        "id": 23,
        "materi": "Fiqih",

"pertanyaan": "Pak Hamid dan Bu Eka bersyukur melahirkan anak laki-laki lucu. Tiba saatnya hari ketujuh, keluarga ini bersiap mengeksekusi syariat penyembelihan Akikah. Syarat ketentuan jenis kurban akikah yang paling sah secara syariat sunah Rasulullah untuk bayi laki-laki adalah ....",


        "gambar": "",

"kutipan": "",


        "opsi": [
            "Menyembelih 2 ekor Sapi karena mereka keluarga mapan secara finansial",

            "Menyembelih 1 ekor Domba yang cukup gemuk",

            "Menyembelih 2 ekor Kambing muda yang belum pergantian gigi (poel) karena dagingnya empuk",

            "Menyembelih 2 ekor Kambing yang genap sehat fisiknya, dan umurnya masuk usia berganti gigi (musinnah/poel)"

        ],
        "kunciJawaban": 3,
        "tipsBidang": "",

        "tipe": "pg"

    },
    {
        "id": 24,
        "materi": "Fiqih",

"pertanyaan": "Perhatikan prosedur teknis berikut!<br>1) Menyiapkan lubang darah<br>2) Menyiapkan ember pembersih<br>3) Hewan dihadapkan rute Kiblat<br>4) Kaki hewan diikat kuat agar tidak berontak parah<br>5) Leher persis di atas lubang darah<br>6) Hewan dicekok diberi makan berlebih<br>7) Berniat di hati<br>8) Membaca Basmalah, Shalawat & Takbir<br>9) Pisau tajam ditarik menyayat putus saluran nafas leher<br><br>Urutan tahapan ritual Penyembelihan Hewan Islami (Tradisional) yang sah mutlak adalah ....",


        "gambar": "",

"kutipan": "",


        "opsi": [
            "1, 2, 3, 5, 6, 7, 8",

            "2, 3, 4, 5, 7, 8, 9",

            "1, 3, 4, 5, 7, 8, 9",

            "2, 3, 5, 6, 7, 9"

        ],
        "kunciJawaban": 2,
        "tipsBidang": "",

        "tipe": "pg"

    },
    {
        "id": 25,
        "materi": "Fiqih",

"pertanyaan": "Pelaksanaan ritual Kurban (Idul Adha) hukumnya Sunnah Muakkad (berstatus ring 1 paling dianjurkan). Bahkan nabi mengancam kaum hartawan yang enggan kurban agar tidak usah mendekati masjid. Perintah Kurban Idul Adha ini secara teologis berinduk tertera pada dalil ....",


        "gambar": "",

"kutipan": "",


        "opsi": [
            "Q.S. Al Maidah (5) : 3",

            "Q.S. Al Kautsar (108) : 1-3",

            "Q.S. An Nahl (16) : 114",

            "Q.S. Al Baqarah (2) : 168"

        ],
        "kunciJawaban": 1,
        "tipsBidang": "",

        "tipe": "pg"

    },
    {
        "id": 26,
        "materi": "Fiqih",

"pertanyaan": "Mazhab adalah konvensi manhaj / landasan rute pemikiran teologi fikih. Di dunia Sunni Ahlussunah modern saat ini terpusat komando pada 4 Imam Mazhab absolut. Berikut ini termasuk di dalamnya, <span class='font-bold italic'>kecuali</span> ....",


        "gambar": "",

"kutipan": "",


        "opsi": [
            "Imam Qurtuby (Ahli Tafsir)",

            "Imam Abu Hanifah (Hanafi)",

            "Imam Malik (Maliki)",

            "Imam Muhammad bin Idris (Syafi'i)"

        ],
        "kunciJawaban": 0,
        "tipsBidang": "",

        "tipe": "pg"

    },
    {
        "id": 27,
        "materi": "Aqidah / Fiqih",

"pertanyaan": "Sikap mengikuti dan menaati keseluruhan apa-apa yang diperintahkan, dicontohkan, dibenarkan Rasulullah SAW dengan sumber referensi dalil hadis yang shahih, serta membuang budaya yang menyimpang dilarang rasul. Terminologi prinsip ini di dunia syariah dinamakan ....",


        "gambar": "",

"kutipan": "",


        "opsi": [
            "Ittiba'",

            "Ijtihad",

            "Taklid (Buta Ikut-ikutan)",

            "Fatwa"

        ],
        "kunciJawaban": 0,
        "tipsBidang": "",

        "tipe": "pg"

    },
    {
        "id": 28,
        "materi": "Fiqih",

"pertanyaan": "Dalam perpusataan besar Islam, koridor Fikih terbagi belah dua kutub: Fikih vertikal (Fikih Ibadah) dan Fikih sosial horizontal (Fikih Muamalah) antar interaksi ekonomi/kontrak manusia. Di bawah ini yang murni representasi perbuatan *Fikih Muamalah* adalah kawasan ....",


        "gambar": "",

"kutipan": "",


        "opsi": [
            "Transaksi Resi Jual Beli dan Kasus Sengketa Hutang Piutang",

            "Menunaikan Puasa Wajib dan Zakat profesi",

            "Hutang Piutang dicampur ibadah Sholat Subuh",

            "Haji reguler melempar jumrah dan Zakat Harta"

        ],
        "kunciJawaban": 0,
        "tipsBidang": "",

        "tipe": "pg"

    },
    {
        "id": 29,
        "materi": "Fiqih",

"pertanyaan": "Laela salat Zuhur sendirian (munfarid) di kamarnya. Saking tak fokus, di rakaat penutup ia ragu 'Ini tadi sudah rakaat 3 atau 4 ya? Lupa!'. Dalam skenario hukum darurat memori ini, apa manuver perbaikan yang sah yang wajib ditempuh Laela seketika?",


        "gambar": "",

"kutipan": "",


        "opsi": [
            "Membatalkan total salatnya lalu wudhu ulang dari nol biar afdol",

            "Rileks saja cuek lanjut salam, Tuhan maha pemakluman",

            "Lanjut salam saja, lalu nebus kesalahan lewat Sujud Tilawah",

            "Membuang keraguan dengan mengambil asumsi keyakinan paling kecil (menganggap masih rakaat 3 dan nambah 1 lagi), kelak ditutup tebusan Sujud Sahwi di akhir sebelum Salam."

        ],
        "kunciJawaban": 3,
        "tipsBidang": "",

        "tipe": "pg"

    },
    {
        "id": 30,
        "materi": "Tarikh",

"pertanyaan": "Osman I (Usman) sang singa pendiri Daulah Turkic Usmani menanamkan ideologi jihad murni non-pamrih militer. Pasukan elit pendobrak Konstantinopel militernya begitu disegani barat, para patriot infantri ini dilabeli status agung sebagai pasukan <strong>'Al-Ghazi'</strong>, yang bernyawa makna ....",


        "gambar": "",

"kutipan": "",


        "opsi": [
            "Gempuran Pasukan Berkuda",

            "Bara Persaudaraan Suci",

            "Bergerak Cepat Bak Kilat",

            "Pasukan Ksatria Penakluk Garda Depan"

        ],
        "kunciJawaban": 3,
        "tipsBidang": "",

        "tipe": "pg"

    },
    {
        "id": 31,
        "materi": "Tarikh",

"pertanyaan": "Sultan Murad I wafat di medan tempur perang agung sebagai patriot syuhada, setelah ia melebarkan teritori kekuasaan Turki lima kali lipat ekspansi. Dampak sejarah berharga pasca kematian & kebijakan pemerintahannya di Eropa melahirkah hikmah-hikmah ini, <span class='font-bold italic'>kecuali</span> ....",


        "gambar": "",

"kutipan": "",


        "opsi": [
            "Munculnya dinasti kerajaan sekuler baru merdeka di atas debu runtuhnya Usmani",

            "Eskalasi Syiar Islam mengakar massif kuat menembus Semenanjung balkan Eropa",

            "Daulah Usmani ditakuti, dihormati mutlak oleh hegemoni kerajaan eropa barat raya",

            "Hegemoni politik Usmani membentangkan panggung dakwah tak terbendung"

        ],
        "kunciJawaban": 0,
        "tipsBidang": "",

        "tipe": "pg"

    },
    {
        "id": 32,
        "materi": "Tarikh",

"pertanyaan": "Puncak gilang-gemilang Imperium Mughal-India diletuskan oleh Sultan ketiga yakni *Jalaluddin Muhammad Akbar*. Ia merekonstruksi ulang arsitektur sipil, militerisme toleran, hingga seni kaligrafi Taj Mahal. Core *Spirit of Mughal* yang relevan untuk pelajar kita adaptasi masa kini adalah ....",


        "gambar": "",

"kutipan": "",


        "opsi": [
            "Mental penjajah ekspansi menjajah bangsa dunia ketiga",

            "Etos kegigihan ambisius membengkokan koridor Ilmu Pengetahuan, toleransi budaya literasi (perpustakaan raksasa), dan pendidikan progresif.",

            "Semangat membuat armada monster laut penakluk samudra",

            "Foya-foya arsitektur membangun keraton marmer megah pemborosan royal"

        ],
        "kunciJawaban": 1,
        "tipsBidang": "",

        "tipe": "pg"

    },
    {
        "id": 33,
        "materi": "Tarikh",

"pertanyaan": "Ribuan literatur sejarah emas era klasik tentang heroiknya ulama, dermawannya filantrop, cerdasnya dokter bedah muslim, tidak ditulis di kurikulum untuk menjadi dongeng usang tidur belaka. Sebagai delegasi pemuda pelajar, sikap psikologis esensial saat menyintuh pusaka sejarah mulia ini adalah agar bernilai ibadah yaitu ....",


        "gambar": "",

"kutipan": "",


        "opsi": [
            "Duduk termenung romantis merasa jumawa/bangga berlebihan bahwa umat Islam dulu sultan dunia",

            "Bersikap apatis biasa saja karena abad industri robotik KI sudah memisahkan kita",

            "Dijadikan baterai suntikan motivasi adrenalin untuk nge-push kegigihan belajar mewujudkan karya nyata cita-cita masa depan",

            "Terjun pada penyesalan nostalgia trauma masa lampau yang memilukan"

        ],
        "kunciJawaban": 2,
        "tipsBidang": "",

        "tipe": "pg"

    },
    {
        "id": 34,
        "materi": "Tarikh",

"pertanyaan": "Peradaban Daulah Abbasiyah (Baghdad) adalah masa keemasan The Golden Age of Islam. Budaya *Literasi Terjemah* bahasa yunani ke arab adalah komoditas mewah. Institusi paling epik yang mendunia kala itu adalah **Bayt Al-Hikmah** (The House of Wisdom). Siapa khalifah Inisiator besarnya dan memfungsikan pilar apa dia saat itu?",


        "gambar": "",

"kutipan": "",


        "opsi": [
            "Khalifah Al-Makmun, difungsikan formal sebagai lembaga sentra institusi pendidikan tinggi (Universitas & Laboratorium riset terjemah) gratis",

            "Khalifah Harun al-Rasyid, disembunyikan sebagai loker rak perpustakaan pribadi keluarga raja",

            "Khalifah Al-Mansur, sebagai percetakan brosur terjemahan kampanye faksi",

            "Khalifah Abu Abbas as-Saffah, ditujukan untuk barak militer komando tempur"

        ],
        "kunciJawaban": 0,
        "tipsBidang": "Harun Al-Rasyid menggagas cikal bakalnya sbg pustaka kerajaan, tetapi di tangan sang Putra Al-Makmun institusi ini meledak fungsinya menjadi Universitas/Biro Terjemah Publik massal peradaban dunia.",

        "tipe": "pg"

    },
    {
        "id": 35,
        "materi": "Tarikh",

"pertanyaan": "Cocokkan silang Pasangan Avatar Cendekiawan Muslim Elite dengan domain pilar karyanya yang absolut!<br>1) Muhammad ibn Idris As-Syafi'i (C. Fikih)<br>2) Muhammad ibn Musa Al-Khwarizmi (B. Matematika Aljabar)<br>3) Ibnu Sina / Avicenna (E. Kedokteran Bapak Medis Barat)<br>4) Al-Kindi, Al Farabi (D. Filsafat Rasional)<br>5) Al-Mawardi, Al-Ghazali (A. Akhlak / Tasawuf Pemikiran Konstruktif)<br><br>Kode gembok pasangannya adalah ....",


        "gambar": "",

"kutipan": "",


        "opsi": [
            "1-A, 2-B, 3-C, 4-D, 5-E",

            "1-B, 2-C, 3-D, 4-E, 5-A",

            "1-C, 2-B, 3-E, 4-D, 5-A",

            "1-D, 2-E, 3-A, 4-B, 5-C"

        ],
        "kunciJawaban": 2,
        "tipsBidang": "",

        "tipe": "pg"

    },
    {
        "id": 36,
        "materi": "Tarikh",

"pertanyaan": "Umar Bin Abdul Aziz bin Marwan adalah *The Legend* dari Kekhalifahan Bani Umayyah Damaskus (Sering dijuluki Khulafaur Rasyidin ke-5 karena keadilannya). Di antara ribuan kebijakan masterpiecenya, ada dekret resmi negara yang membuat umat Islam tak kehilangan kompas agama hingga hari ini, serta sebuah manuver perdamaian radikal yakni ....",


        "gambar": "",

"kutipan": "",


        "opsi": [
            "Memfokuskan penarikan pajak haraj habis-habisan gila-gilaan pada warga koptik afrika utara",

            "Menghentikan peperangan total murni ekspansi berdarah",

            "Sanggup memediasi perdamaian panas berdarah seabad antara Dinasti Muawiyah vs faksi garis keras ideologi Khawarij dan Syiah di meja konsensus toleransi",

            "Meredam kerusuhan internal dengan membangun Diwan Al-Khatam departemen penyadapan"

        ],
        "kunciJawaban": 2,
        "tipsBidang": "Umar II terkenal sukses mendamaikan luka perang saudara Umayyah vs Ali/Khawarij/Syiah dengan pendekatan humanistis-dialog dan menghilangkan tradisi caci-maki mimbar Jum'at warisan terdahulu.",

        "tipe": "pg"

    },
    {
        "id": 37,
        "materi": "Aqidah",

"pertanyaan": "Deteksi ciri karakteristik anatomi Makhluk Cahaya (Malaikat) Allah di matriks berikut:<br>1) Menyukai bersantai di majelis musik pop<br>2) Ada yang korupsi maksiat & ada yang taat radikal<br>3) Membakar kalori butuh asupan makan karbohidrat minimum<br>4) Mutlak berwujud roh As-Sobad Tidak Berjenis Kelamin rasio<br>5) Cyborg roh Tidak Pernah mengenal terminologi 'Letih lelah rebahan' dalam radar sujudnya kepada Allah SWT<br><br>Garis lurus identifikasi Malaikat sahih berada pada angka ....",


        "gambar": "",

"kutipan": "",


        "opsi": [
            "1, 2, 3",

            "1, 3, 4",

            "3, 4, 5",

            "4 dan 5"

        ],
        "kunciJawaban": 3,
        "tipsBidang": "",

        "tipe": "pg"

    },
    {
        "id": 38,
        "materi": "Akhlak",

"pertanyaan": "Fina curhat asik dengan Lisa saling over-sharing prestasi kelas. Obrolan menyerempet gosip panas saat Lisa membocorkan desas-desus bahwa si Rina, kawan kelasnya diam-diam di grup WA dengki membenci kepintaran Fina. Lisa mengkompori Fina agar *Cancel* pertemanan dengan Rina. Sebagai siswi penganut etika internet islami, pelindung armor *Tabayyun* menyuruh Fina bereaksi ....",


        "gambar": "",

"kutipan": "",


        "opsi": [
            "Percaya 100% matang omongan provokator Lisa, lalu ngelock mute/blokir ig Rina seumur hidup krn toxic.",

            "Tidak reaktif percaya lidah Lisa; bermanuver verifikasi konfirmasi halus secara 4 mata dengan Rina mencari benang letak hoaks/kesalahpahamannya (Tabayyun silaturahmi).",

            "Melabrak Rina besok subuh bawa massa preman mintakan surat penjelasan kenapa sirik dan iritasi dengan prestasinya.",

            "Mengkonfrontir duet fisik menyeret mulut ke mulut bertengkar ala gangster sekolah."

        ],
        "kunciJawaban": 1,
        "tipsBidang": "",

        "tipe": "pg"

    },
    {
        "id": 39,
        "materi": "Fiqih",

"pertanyaan": "Islam Agama *No-Stress*. Konstitusi Rukhsah syariah bertujuan menghancurkan kesusahan teknis mukalaf hingga ia tersenyum menjumpai rongga pelonggaran ibadah tanpa ganjaran dosa setetespun. Bagi pasien patah tulang di ranjang UGD rumah sakit, bentuk *cheat* keringanan legal Rukhsah Salatnya berubah menjadi ....",


        "gambar": "",

"kutipan": "",


        "opsi": [
            "Boleh sah tidak melaksanakan ibadah shalat murni bebas karena status 'Sakit parah kompensatoris'.",

            "Tetap memanggis shalat esensial namun adaptif lentur; bebas eksekusi sambil duduk manis kursi wudhu, membungkuk berbaring, rebahan telentang selimut, dan sah dengan kedipan kode isyarat telunjuk asalkan akal masih stabil sadar.",

            "Modifikasi shalat Qasar memangkas diskon jumlah rakaat meski si sakit ada di atas bed kamar rumahnya deket masjid.",

            "Dipermudah bisa mengqadha ganti salat subuh yang hangus ditukar tebus pulsa 'fidyah makanan' seperti wanita hamil berikhtiar."

        ],
        "kunciJawaban": 1,
        "tipsBidang": "Rukhsah Salat orang sakit berlaku pada rukun fisiknya (berdiri diubah duduk/baring). Menghilangkan salat total sama sekali BUKAN Rukhsah, alias gugur wajiban bila hilang akal (koma/gila).",

        "tipe": "pg"

    },
    {
        "id": 40,
        "materi": "Tarikh",

"pertanyaan": "Benteng terhebat, kota basis eksistensi nafas terakhir darah umat Islam Spanyol (*Andalusia - Eropa*) berada di Granada. Peninggalan pariwisata yang membikin bule eropa nganga takjub kehabisan nafas melihat kecanggihan kaligrafi dan arsitektur batu bata bata merah raksasa Islam nan melek air mancur adalah Keraton ....",


        "gambar": "",

"kutipan": "",


        "opsi": [
            "Menara Emas Katedral Giralda",

            "Mezquita Kordoba Al-Muazzam",

            "Istana Al-Ma'mun",

            "Istana Merah Al-Hamra (Alhambra)"

        ],
        "kunciJawaban": 3,
        "tipsBidang": "",

        "tipe": "pg"

    }
];




const quizData2026 = [
    {
        "num": 1,
        "pertanyaan": "Dalam sebuah diskusi kelas, seorang siswa berpendapat bahwa iman cukup diyakini dalam hati tanpa perlu diamalkan. Berdasarkan analisis QS. Al-Baqarah: 285, pendapat ini keliru karena ayat tersebut mengisyaratkan bahwa keimanan yang sempurna menuntut...",
        "opsi": [
            "Hafalan dalil yang kuat tentang rukun iman",
            "Ketundukan mutlak tanpa perlu memahami makna syariat",
            "Keselarasan antara keyakinan hati, ucapan lisan, dan pembuktian melalui amal perbuatan",
            "Pemisahan antara urusan ibadah ritual dan kehidupan sosial"
        ],
        "tipe": "pg",
        "kunciJawaban": 2,
        "materi": "Al-Quran  &  Hadis  (Keimanan)",
        "tipsBidang": "Perhatikan kata kunci pada pertanyaan."
    },
    {
        "num": 2,
        "pertanyaan": "Perhatikan fenomena berikut: Seseorang mengaku beriman kepada Allah, namun menolak mengakui kebenaran kitab suci umat terdahulu dan membeda-bedakan keistimewaan para nabi (QS. An-Nisa: 150-151). Status keimanan orang tersebut secara syariat adalah...",
        "opsi": [
            "Sah, asalkan ia tetap mengamalkan rukun Islam",
            "Tertolak, karena mengingkari kesatuan risalah para rasul tergolong kekafiran yang nyata",
            "Diterima sebagian, karena yang paling penting adalah iman kepada Nabi Muhammad SAW",
            "Sempurna, karena umat Islam hanya diwajibkan fokus pada syariat terakhir"
        ],
        "tipe": "pg",
        "kunciJawaban": 1,
        "materi": "Al-Quran  &  Hadis  (Keimanan  Para  Nabi)",
        "tipsBidang": "Perhatikan kata kunci pada pertanyaan."
    },
    {
        "num": 3,
        "pertanyaan": "QS. Ali Imran: 102 memerintahkan agar umat Islam bertakwa dengan \"sebenar-benar takwa\". Implementasi paling tepat dari prinsip ini bagi pelajar di era digital adalah...",
        "opsi": [
            "Menghapus semua media sosial agar tidak terjerumus pada kemaksiatan",
            "Memanfaatkan teknologi untuk belajar dan menyebarkan kebaikan, serta tegas menjauhi konten negatif",
            "Fokus beribadah di masjid dan meninggalkan semua kewajiban akademik",
            "Mengisolasi diri dari pergaulan teman yang berbeda pandangan"
        ],
        "tipe": "pg",
        "kunciJawaban": 1,
        "materi": "Al-Quran  &  Hadis  (Ketakwaan  Era  Digital)",
        "tipsBidang": "Perhatikan kata kunci pada pertanyaan."
    },
    {
        "num": 4,
        "pertanyaan": "Seorang ayah terlalu sibuk bekerja sehingga mengabaikan pendidikan agama anaknya (QS. Luqman: 33). Pada hari kiamat kelak, analisis posisi ayah tersebut adalah...",
        "opsi": [
            "Aman, karena mencari nafkah adalah kewajiban yang menggugurkan kewajiban mendidik",
            "Diminta pertanggungjawaban berat, karena harta tidak bisa menebus dosa dan kelalaiannya mendidik keluarga",
            "Dapat dimaklumi asalkan sang anak tetap sekolah di sekolah formal",
            "Terselamatkan oleh doa anaknya meskipun anaknya tidak diajari agama"
        ],
        "tipe": "pg",
        "kunciJawaban": 1,
        "materi": "Al-Quran  &  Hadis  (Tanggung  Jawab  Orang  Tua)",
        "tipsBidang": "Perhatikan kata kunci pada pertanyaan."
    },
    {
        "num": 5,
        "pertanyaan": "Di sebuah perumahan, warga muslim sepakat untuk menjaga ketenangan saat umat agama lain sedang melaksanakan ibadah perayaan hari besar. Tindakan ini mencerminkan prinsip \"La ikraha fiddin\" (QS. Al-Baqarah: 256) yang secara kontekstual bermakna...",
        "opsi": [
            "Kebebasan beragama yang diiringi sikap saling menghargai batas-batas syariat, --- PAGE 2 --- tanpa mencampuradukkan akidah",
            "Mengikuti ibadah agama lain sebagai bentuk toleransi tingkat tinggi",
            "Pembenaran bahwa semua ajaran agama memiliki kedudukan yang sama persis di mata Allah",
            "Sikap acuh tak acuh terhadap kegiatan ibadah orang lain di sekitar kita"
        ],
        "tipe": "pg",
        "kunciJawaban": 0,
        "materi": "Al-Quran  &  Hadis  (Toleransi  Beragama)",
        "tipsBidang": "Perhatikan kata kunci pada pertanyaan."
    },
    {
        "num": 6,
        "pertanyaan": "Nabi Musa a.s. dikisahkan memiliki kerinduan mendalam untuk kembali ke tanah kelahirannya (QS. Al-Qashas: 85). Jika nilai ini diadaptasi oleh seorang pelajar yang mendapat beasiswa studi di luar negeri, komitmen yang harus dibangun adalah...",
        "opsi": [
            "Menetap di luar negeri selamanya demi karir pribadi",
            "Mengadopsi seluruh budaya asing dan melupakan budaya bangsa sendiri",
            "Menyerap ilmu sebanyak mungkin untuk kelak dibawa kembali demi membangun dan memajukan tanah airnya",
            "Menolak beasiswa tersebut karena khawatir terpengaruh gaya hidup barat"
        ],
        "tipe": "pg",
        "kunciJawaban": 2,
        "materi": "Al-Quran  &  Hadis  (Cinta  Tanah  Air)",
        "tipsBidang": "Perhatikan kata kunci pada pertanyaan."
    },
    {
        "num": 7,
        "pertanyaan": "Sebuah sekolah mengadakan penggalangan dana sukarela untuk membantu korban gempa bumi. Beberapa siswa menghindar karena merasa hartanya akan berkurang. Mengacu pada QS. An-Nisa: 66, keengganan ini menyerupai sifat...",
        "opsi": [
            "Orang-orang musyrik yang menentang secara terbuka",
            "Orang-orang munafik yang hatinya berat melakukan pengorbanan demi kebaikan umat",
            "Orang-orang murtad yang keluar dari agama",
            "Orang-orang mukmin yang sedang diuji kesabarannya"
        ],
        "tipe": "pg",
        "kunciJawaban": 1,
        "materi": "Al-Quran  &  Hadis  (Pengorbanan  Harta)",
        "tipsBidang": "Perhatikan kata kunci pada pertanyaan."
    },
    {
        "num": 8,
        "pertanyaan": "Sebuah desa mengalami ketertinggalan ekonomi karena seluruh pemudanya pergi ke kota untuk bekerja sebagai buruh pabrik, tidak ada yang mendalami ilmu agama maupun sains. Solusi terbaik berdasarkan pesan QS. At-Taubah: 122 adalah...",
        "opsi": [
            "Melarang semua pemuda merantau agar desa tetap ramai",
            "Mewajibkan seluruh pemuda tanpa terkecuali untuk fokus belajar di pesantren",
            "Membagi peran: sebagian merantau mencari nafkah, sebagian lainnya diutus menuntut ilmu (tafaqquh fiddin) agar kelak bisa memajukan desanya",
            "Meminta bantuan dana desa dari pemerintah tanpa perlu membangun sumber daya manusia"
        ],
        "tipe": "pg",
        "kunciJawaban": 2,
        "materi": "Al-Quran  &  Hadis  (Tafaqquh  Fiddin)",
        "tipsBidang": "Perhatikan kata kunci pada pertanyaan."
    },
    {
        "num": 9,
        "pertanyaan": "Menghadapi kemajuan teknologi Kecerdasan Buatan (AI) yang menggantikan banyak pekerjaan manusia, respons seorang pelajar muslim yang mengamalkan QS. Al-Mujadalah: 11 seharusnya adalah...",
        "opsi": [
            "Terus memacu diri meningkatkan kompetensi dan ilmu pengetahuan agar mampu mengendalikan teknologi tersebut untuk kemaslahatan",
            "Menolak menggunakan teknologi baru karena dianggap membawa banyak mudarat",
            "Pasrah pada keadaan karena rezeki manusia sudah ada takdirnya masing-masing",
            "Berhenti sekolah formal dan fokus mencari uang sejak dini"
        ],
        "tipe": "pg",
        "kunciJawaban": 0,
        "materi": "Al-Quran  &  Hadis  (Menuntut  Ilmu  /  AI)",
        "tipsBidang": "Perhatikan kata kunci pada pertanyaan."
    },
    {
        "num": 10,
        "pertanyaan": "Perbedaan antara orang berilmu dan orang tidak berilmu (QS. Az-Zumar: 9) sangat terlihat saat merespons isu sosial di masyarakat, yaitu...",
        "opsi": [
            "Orang berilmu cenderung emosional, sedangkan yang tidak berilmu lebih tenang",
            "Orang berilmu menghindari masalah, sedangkan yang tidak berilmu berani mengambil risiko",
            "Orang berilmu menyelesaikan masalah berbasis analisis data dan syariat, sedangkan yang tidak berilmu lebih mengandalkan asumsi dan prasangka",
            "Keduanya akan menghasilkan keputusan yang sama jika niatnya sama-sama baik"
        ],
        "tipe": "pg",
        "kunciJawaban": 2,
        "materi": "Al-Quran  &  Hadis  (Etika  Orang  Berilmu)",
        "tipsBidang": "Perhatikan kata kunci pada pertanyaan."
    },
    {
        "num": 11,
        "pertanyaan": "Keluarga Pak Ahmad mengalami musibah kebakaran yang menghabiskan tempat usahanya. Ia segera mengucap \"Inna lillahi wa inna ilaihi raji'un\" dan esoknya mulai --- PAGE 3 --- membersihkan sisa puing untuk memulai kembali. Sikap ini adalah perwujudan langsung dari...",
        "opsi": [
            "QS. Ali Imran: 102",
            "QS. Al-Baqarah: 155-156",
            "QS. Luqman: 33",
            "QS. Al-Mujadalah: 11"
        ],
        "tipe": "pg",
        "kunciJawaban": 1,
        "materi": "Al-Quran  &  Hadis  (Sabar  Menghadapi  Musibah)",
        "tipsBidang": "Perhatikan kata kunci pada pertanyaan."
    },
    {
        "num": 12,
        "pertanyaan": "Dalam menghadapi ujian kelulusan, banyak siswa merasa tertekan secara psikologis. Jika mereka menerapkan instruksi QS. Ali Imran: 200 (bersabar dan bersiap siaga/ murabathah ), langkah strategis yang harus diambil adalah...",
        "opsi": [
            "Mengandalkan doa orang tua semata tanpa perlu belajar keras",
            "Menyusun jadwal belajar yang disiplin, menjaga kesehatan fisik, diiringi kepasrahan kepada Allah",
            "Memforsir diri belajar siang dan malam hingga jatuh sakit",
            "Mencari kunci jawaban dari pihak luar sebagai bentuk \"ikhtiar\" maksimal"
        ],
        "tipe": "pg",
        "kunciJawaban": 1,
        "materi": "Al-Quran  &  Hadis  (Kesiagaan  Psikologis)",
        "tipsBidang": "Perhatikan kata kunci pada pertanyaan."
    },
    {
        "num": 13,
        "pertanyaan": "Dalam lafaz \"وَﻟَﻧَﺑْﻠُوَﻧﱠﻛُم\" , terdapat huruf ba' (ب) yang berharakat sukun asli di tengah kalimat. Kaidah tajwid mengharuskan huruf ini dibaca dengan cara...",
        "opsi": [
            "Memantul secara ringan (Qalqalah Sughra)",
            "Memantul dengan tekanan kuat (Qalqalah Kubra)",
            "Berdengung selama 2 harakat (Ghunnah)",
            "Samar-samar mendekati huruf mim (Ikhfa)"
        ],
        "tipe": "pg",
        "kunciJawaban": 0,
        "materi": "Al-Quran  &  Hadis  (Tajwid:  Qalqalah)",
        "tipsBidang": "Perhatikan kata kunci pada pertanyaan."
    },
    {
        "num": 14,
        "pertanyaan": "Seorang qari' membaca ayat yang mengandung lafaz \"ﻣِنْ ﺑَﻌْدِ\" . Secara tajwid (Iqlab), analisis fonologis yang terjadi pada bacaan tersebut adalah...",
        "opsi": [
            "Suara huruf nun mati dibaca jelas tanpa ada perubahan",
            "Suara huruf nun mati dileburkan sepenuhnya ke dalam huruf ba'",
            "Suara huruf nun mati diubah menjadi bunyi mim sukun yang disamarkan, disertai dengungan di rongga hidung",
            "Suara huruf nun mati disamarkan menyerupai huruf ng"
        ],
        "tipe": "pg",
        "kunciJawaban": 2,
        "materi": "Al-Quran  &  Hadis  (Tajwid:  Iqlab)",
        "tipsBidang": "Perhatikan kata kunci pada pertanyaan."
    },
    {
        "num": 15,
        "pertanyaan": "Perbedaan cara membaca antara lafaz \"ٱﻟﺷﱠﻣْسُ\" Asy-Syams) dan \"ٱﻟْﻘَﻣَرُ\" Al-Qamar) berdasarkan kaidah tajwid Alif Lam terletak pada...",
        "opsi": [
            "Pada Asy-Syams huruf lam dibaca jelas, pada Al-Qamar huruf lam dilebur",
            "Pada Asy-Syams huruf lam dilebur ke huruf syin (Syamsiyah), pada Al-Qamar huruf lam dibaca jelas (Qamariyah)",
            "Pada Asy-Syams terdapat mad thabi'i, sedangkan pada Al-Qamar tidak ada",
            "Pada Asy-Syams harus dibaca dengan qalqalah, sedangkan Al-Qamar dibaca ghunnah"
        ],
        "tipe": "pg",
        "kunciJawaban": 1,
        "materi": "Al-Quran  &  Hadis  (Tajwid:  Al-Syamsiyah  &  Qamariyah)",
        "tipsBidang": "Perhatikan kata kunci pada pertanyaan."
    },
    {
        "num": 16,
        "pertanyaan": "Saat membaca lafaz \" ﺑِﺳْمِ ٱ\u0000ﱠِ \", pembaca harus menganalisis harakat huruf sebelum lafaz Allah (Lam Jalalah). Karena huruf mim berharakat kasrah, maka lafaz Allah wajib dibaca secara...",
        "opsi": [
            "Tafkhim (tebal, rongga mulut penuh)",
            "Tarqiq (tipis, posisi lidah merendah)",
            "Ghunnah (dengung yang ditahan)",
            "Idgham (dileburkan)"
        ],
        "tipe": "pg",
        "kunciJawaban": 1,
        "materi": "Al-Quran  &  Hadis  (Tajwid:  Lam  Jalalah",
        "tipsBidang": "Perhatikan kata kunci pada pertanyaan."
    },
    {
        "num": 17,
        "pertanyaan": "Hukum Mad Wajib Muttasil berlaku apabila Mad Thabi'i bertemu hamzah di dalam satu kata (seperti: ﺟَﺂءَ .) Mengapa hukum bacaan ini disebut \"wajib\" panjangnya (4-5 harakat)?",
        "opsi": [
            "Karena jika dipendekkan akan merusak tatanan makna kata secara ekstrem dalam bahasa Arab",
            "Karena hamzah merupakan huruf yang berat diucapkan sehingga butuh jeda yang lama --- PAGE 4 ---",
            "Karena bertepatan dengan tanda waqaf lazim di akhir ayat",
            "Karena semua ulama Qiraah sepakat mutlak membacanya lebih dari dua harakat tanpa ada keringanan memendekkannya menjadi dua harakat"
        ],
        "tipe": "pg",
        "kunciJawaban": 3,
        "materi": "Al-Quran  &  Hadis  (Tajwid:  Mad  Wajib  Muttasil)",
        "tipsBidang": "Perhatikan kata kunci pada pertanyaan."
    },
    {
        "num": 18,
        "pertanyaan": "Siswa kelas IX membaca lafaz \"ﻋَمﱠ ﯾَﺗَﺳَﺂءَﻟُونَ\" . Mim yang bertasydid pada kata \"Amma\" mewajibkan penerapan hukum Ghunnah Musyaddadah. Cara mengaplikasikan hukum ini adalah...",
        "opsi": [
            "Membaca mim secara jelas dan cepat",
            "Membunyikan mim dengan menahan suara di rongga hidung (dengung) selama kurang lebih 2-3 harakat",
            "Memantulkan huruf mim di akhir pengucapan",
            "Menyembunyikan mim di bibir tanpa suara sengau"
        ],
        "tipe": "pg",
        "kunciJawaban": 1,
        "materi": "Al-Quran  &  Hadis  (Tajwid:  Ghunnah  Musyaddadah)",
        "tipsBidang": "Perhatikan kata kunci pada pertanyaan."
    },
    {
        "num": 19,
        "pertanyaan": "Seseorang membaca ayat dan memilih waqaf (berhenti) pada lafaz \"أَﺣَدٌ\" . Huruf dal berharakat dammahtain berubah menjadi sukun arid (sukun baru). Secara analitis, hukum bacaan tajwid yang terbentuk adalah...",
        "opsi": [
            "Izhar Halqi",
            "Mad Iwad, mengganti dammahtain menjadi alif",
            "Qalqalah Kubra, dibaca memantul dengan kuat karena berada di posisi waqaf",
            "Qalqalah Sughra, karena huruf dal adalah huruf asli qalqalah"
        ],
        "tipe": "pg",
        "kunciJawaban": 2,
        "materi": "Al-Quran  &  Hadis  (Tajwid:  Qalqalah  Kubra)",
        "tipsBidang": "Perhatikan kata kunci pada pertanyaan."
    },
    {
        "num": 20,
        "pertanyaan": "Menganalisis hukum Ra' (ر) pada lafaz \"ﻓِرْﻋَوْنَ\" . Huruf ra' pada kata tersebut bersukun. Meskipun demikian, ra' ini wajib dibaca Tarqiq (tipis). Alasan yang tepat berdasarkan ilmu tajwid adalah...",
        "opsi": [
            "Didahului oleh huruf berharakat fathah",
            "Berada di tengah-tengah kata yang panjang",
            "Didahului huruf berharakat kasrah asli dan setelahnya bukan merupakan huruf Isti'la (huruf tebal)",
            "Karena kata tersebut merupakan nama orang non-Arab"
        ],
        "tipe": "pg",
        "kunciJawaban": 2,
        "materi": "Al-Quran  &  Hadis  (Tajwid:  Hukum  Ra'  Tarqiq)",
        "tipsBidang": "Perhatikan kata kunci pada pertanyaan."
    },
    {
        "num": 21,
        "pertanyaan": "Seorang auditor memiliki kesempatan memanipulasi laporan keuangan sekolah demi keuntungan pribadi tanpa diketahui kepala sekolah. Namun ia menolak melakukannya karena meyakini sifat Allah Al-'Alim dan Al-Khabir. Dampak sosiologis dari pengamalan Asmaul Husna ini adalah...",
        "opsi": [
            "Menciptakan kecurigaan berlebihan antar rekan kerja",
            "Terbentuknya sistem integritas berbasis kesadaran spiritual (self-control) tanpa perlu pengawasan fisik yang ketat",
            "Meningkatkan ketakutan terhadap ancaman pidana dari aparat penegak hukum",
            "Membangun citra diri agar cepat mendapatkan promosi jabatan"
        ],
        "tipe": "pg",
        "kunciJawaban": 1,
        "materi": "Aqidah  (Asmaul  Husna:  Al-'Alim,  Al-Khabir)",
        "tipsBidang": "Perhatikan kata kunci pada pertanyaan."
    },
    {
        "num": 22,
        "pertanyaan": "Di media sosial, marak fenomena akun anonim (fake account) yang digunakan untuk melontarkan ujaran kebencian. Seorang remaja muslim menolak tren ini karena meyakini sifat Al-Sami' dan Al-Basir. Pemahamannya adalah...",
        "opsi": [
            "Takut rekam jejak digitalnya dibongkar oleh peretas ahli",
            "Sadar bahwa Allah Maha Melihat rekam ketikan di layar dan Maha Mendengar niat buruk di dalam hati, meskipun identitasnya disembunyikan dari manusia",
            "Kawatir akun anonimnya dilaporkan dan di-banned oleh pihak platform",
            "Merasa perbuatan menyebarkan ujaran kebencian membuang kuota internet"
        ],
        "tipe": "pg",
        "kunciJawaban": 1,
        "materi": "Aqidah  (Asmaul  Husna:  Al-Sami',  Al-Basir)",
        "tipsBidang": "Perhatikan kata kunci pada pertanyaan."
    },
    {
        "num": 23,
        "pertanyaan": "Seorang ilmuwan muslim meneliti struktur DNA manusia yang miliaran jumlahnya dan tersusun sangat sistematis. Penelitian ini mengantarkannya pada kekaguman luar biasa dan memperkuat imannya terhadap Asmaul Husna...",
        "opsi": [
            "Al-Quddus",
            "Al-Ghafur --- PAGE 5 ---",
            "Al-Khabir",
            "As-Salam"
        ],
        "tipe": "pg",
        "kunciJawaban": 2,
        "materi": "Aqidah  (Asmaul  Husna:  Al-Khabir)",
        "tipsBidang": "Perhatikan kata kunci pada pertanyaan."
    },
    {
        "num": 24,
        "pertanyaan": "Bagi seorang remaja yang sedang mencari jati diri dan mudah terpengaruh *peer pressure* (tekanan teman sebaya), fungsi utama mengimani keberadaan Malaikat Raqib dan Atid adalah...",
        "opsi": [
            "Menjadikannya individu yang tertutup (introvert) dan menjauhi interaksi sosial",
            "Menjadi alarm internal yang menahan dirinya saat diajak melakukan perbuatan melanggar norma, karena sadar pencatatan amal terus berlangsung",
            "Mendorongnya untuk segera mencari pekerjaan agar rezekinya dicatat malaikat",
            "Membuatnya merasa selalu diawasi sehingga hidupnya tidak tenang"
        ],
        "tipe": "pg",
        "kunciJawaban": 1,
        "materi": "Aqidah  (Iman  kepada  Malaikat  Raqib  Atid)",
        "tipsBidang": "Perhatikan kata kunci pada pertanyaan."
    },
    {
        "num": 25,
        "pertanyaan": "Malaikat Mikail bertugas mengatur distribusi rezeki. Jika seorang pemuda mengalami Pemutusan Hubungan Kerja (PHK), respons yang paling sejalan dengan keimanannya kepada tugas Mikail adalah...",
        "opsi": [
            "Berdiam diri di rumah dan menunggu rezeki turun dengan sendirinya",
            "Marah kepada sistem ekonomi global yang tidak adil",
            "Mengevaluasi diri, meningkatkan keterampilan, dan terus mencari peluang baru dengan keyakinan bahwa porsi rezeki dari Allah sangat luas dan tidak pernah tertukar",
            "Menyalahkan atasannya di perusahaan lama"
        ],
        "tipe": "pg",
        "kunciJawaban": 2,
        "materi": "Aqidah  (Iman  kepada  Malaikat  Mikail)",
        "tipsBidang": "Perhatikan kata kunci pada pertanyaan."
    },
    {
        "num": 26,
        "pertanyaan": "Bencana alam sering menimbulkan kepanikan masal. Mengimani Malaikat Israfil (peniup sangkakala kiamat) dapat mereduksi kepanikan irasional menjadi energi positif berupa...",
        "opsi": [
            "Membangun bungker bawah tanah yang diklaim anti kiamat",
            "Sikap antisipatif logis (mitigasi bencana) sekaligus kesiapan spiritual dengan memperbanyak amal saleh sebelum batas waktu dunia benar-benar berakhir",
            "Penyebaran hoaks tentang tanggal pasti datangnya kiamat",
            "Sikap pasrah total tanpa mau melakukan evakuasi saat bencana datang"
        ],
        "tipe": "pg",
        "kunciJawaban": 1,
        "materi": "Aqidah  (Iman  kepada  Malaikat  Israfil)",
        "tipsBidang": "Perhatikan kata kunci pada pertanyaan."
    },
    {
        "num": 27,
        "pertanyaan": "Dalam konteks toleransi di sekolah, seorang siswa muslim meyakini Al-Quran sebagai kitab penyempurna, namun ia tetap menghormati teman beragama lain yang berpedoman pada kitab sucinya. Korelasi keimanan kepada kitab-kitab Allah (sebelum Al-Quran) terhadap sikap toleran ini adalah...",
        "opsi": [
            "Umat Islam wajib mengikuti juga ajaran dari kitab-kitab terdahulu",
            "Al-Quran membenarkan bahwa kitab-kitab sebelumnya (Taurat, Injil, Zabur) pada asalnya adalah wahyu Allah, sehingga melahirkan sikap saling menghormati keragaman keyakinan samawi",
            "Semua kitab suci pada era modern ini dianggap memiliki kemurnian yang setara 100%",
            "Toleransi berarti mencampuradukkan ajaran kitab suci agar semua pihak merasa dihargai"
        ],
        "tipe": "pg",
        "kunciJawaban": 1,
        "materi": "Aqidah  (Iman  kepada  Kitab-Kitab  Allah)",
        "tipsBidang": "Perhatikan kata kunci pada pertanyaan."
    },
    {
        "num": 28,
        "pertanyaan": "Di tengah derasnya arus budaya global yang sering bertentangan dengan norma agama, Al-Quran difungsikan sebagai Al-Furqan . Maksud dari fungsi Al-Furqan bagi karakter remaja muslim adalah...",
        "opsi": [
            "Sebagai pedoman yang bersifat fleksibel mengikuti tren mayoritas masyarakat",
            "Sebagai alat pemisah yang tegas untuk membedakan antara yang hak (benar) dan yang batil (salah), sehingga remaja tidak mudah terseret arus pergaulan bebas",
            "Sebagai bacaan ritual semata saat ada orang meninggal dunia",
            "Sebagai kumpulan kisah sejarah yang tidak berhubungan dengan hukum modern"
        ],
        "tipe": "pg",
        "kunciJawaban": 1,
        "materi": "Aqidah  (Fungsi  Al-Quran  sebagai  Al-Furqan)",
        "tipsBidang": "Perhatikan kata kunci pada pertanyaan."
    },
    {
        "num": 29,
        "pertanyaan": "Salah satu bukti kecerdasan (Fathanah) Rasulullah SAW dalam membangun peradaban multikultural di Madinah yang relevan untuk resolusi konflik bangsa saat ini adalah... --- PAGE 6 ---",
        "opsi": [
            "Mengusir paksa semua penduduk asli yang tidak mau masuk Islam",
            "Menggagas Piagam Madinah yang menjamin kebebasan beragama, hak sipil, dan kewajiban membela kota secara bersama antara muslim dan Yahudi",
            "Membangun tembok pembatas antara pemukiman muslim dan non-muslim",
            "Memfokuskan seluruh anggaran negara untuk memperkuat angkatan perang militer"
        ],
        "tipe": "pg",
        "kunciJawaban": 1,
        "materi": "Aqidah  (Sifat  Rasul:  Fathanah)",
        "tipsBidang": "Perhatikan kata kunci pada pertanyaan."
    },
    {
        "num": 30,
        "pertanyaan": "Seorang ketua kelas menggunakan dana kas untuk kepentingan pribadi dan berbohong saat ditanya wali kelas. Tindakannya ini secara diametral melanggar sifat wajib rasul, khususnya sifat...",
        "opsi": [
            "Tabligh dan Fathanah",
            "Amanah (dapat dipercaya) dan Shidiq (jujur)",
            "Baladah dan Khianat",
            "Kitman dan Kizib"
        ],
        "tipe": "pg",
        "kunciJawaban": 1,
        "materi": "Aqidah  (Sifat  Wajib  &  C3  (Identifikasi",
        "tipsBidang": "Perhatikan kata kunci pada pertanyaan."
    },
    {
        "num": 31,
        "pertanyaan": "Konsep Hari Kiamat sering direduksi oleh film fiksi ilmiah sekadar sebagai hancurnya bumi akibat meteor. Secara teologis Islam, kiamat bukan sekadar kehancuran fisik kosmik, melainkan bermakna filosofis sebagai...",
        "opsi": [
            "Berakhirnya eksistensi ruh manusia secara total",
            "Awal dari perpindahan peradaban manusia untuk mencari planet baru",
            "Titik akhir dari masa ujian (darul ibtila') di dunia, sekaligus pintu gerbang menuju fase penimbangan keadilan dan pertanggungjawaban mutlak (Hari Pembalasan)",
            "Proses seleksi alam semesta di mana hanya yang kuat yang akan bertahan hidup"
        ],
        "tipe": "pg",
        "kunciJawaban": 2,
        "materi": "Aqidah  (Esensi  Hari  Kiamat)",
        "tipsBidang": "Perhatikan kata kunci pada pertanyaan."
    },
    {
        "num": 32,
        "pertanyaan": "Pemahaman mendalam mengenai Yaumul Mizan (Hari Penimbangan) seharusnya mencegah seorang siswa melakukan tindak perundungan verbal (bullying) di sekolah, karena ia meyakini bahwa...",
        "opsi": [
            "Korban bullying pasti akan membalas dendam di dunia",
            "Hukuman dari guru BK akan mencoreng nama baiknya",
            "Setiap kata cacian sekecil apa pun akan memiliki bobot hisab yang sangat berat di timbangan akhirat dan bisa menyebabkan kebangkrutan pahala (muflis)",
            "Perbuatan tersebut dapat diselesaikan secara damai hanya dengan ucapan maaf"
        ],
        "tipe": "pg",
        "kunciJawaban": 2,
        "materi": "Aqidah  (Hari  Kiamat:  Yaumul  Mizan  &  Bullying)",
        "tipsBidang": "Perhatikan kata kunci pada pertanyaan."
    },
    {
        "num": 33,
        "pertanyaan": "Kematian tiap-tiap makhluk disebut sebagai Kiamat Sughra (Kiamat Kecil). Pelajaran analitis yang dapat dipetik dari kepastian kematian ini dalam manajemen waktu (Time Management) pelajar adalah...",
        "opsi": [
            "Deadline pengumpulan amal bersifat rahasia dan bisa datang tiba-tiba, sehingga ia akan disiplin menggunakan waktu untuk hal produktif tanpa menunda-nunda kebaikan",
            "Karena kiamat masih jauh, masa muda sebaiknya dihabiskan untuk bersenang-senang (hedonisme)",
            "Hanya orang sakit dan lanjut usia yang perlu mengatur waktunya untuk beribadah",
            "Kematian adalah akhir segalanya, sehingga tidak perlu terlalu memikirkan masa depan"
        ],
        "tipe": "pg",
        "kunciJawaban": 0,
        "materi": "Aqidah  (Kiamat  Sughra)",
        "tipsBidang": "Perhatikan kata kunci pada pertanyaan."
    },
    {
        "num": 34,
        "pertanyaan": "Surga dan Neraka adalah manifestasi keadilan Allah SWT yang sempurna. Secara rasional, mengapa keadilan mutlak ini tidak dituntaskan seketika di kehidupan dunia?",
        "opsi": [
            "Karena dunia terlalu luas untuk diatur secara adil",
            "Karena kapasitas dunia terbatas; di dunia, orang zalim terkadang lolos dari jerat hukum, dan pahlawan yang berkorban nyawa tidak bisa dibalas dengan materi dunia yang sepadan",
            "Karena sistem peradilan buatan manusia lebih canggih daripada hukum agama",
            "Karena Allah tidak ikut campur dalam urusan sosial manusia di bumi"
        ],
        "tipe": "pg",
        "kunciJawaban": 1,
        "materi": "Aqidah  (Keadilan  Surga  Neraka  vs  Dunia)",
        "tipsBidang": "Perhatikan kata kunci pada pertanyaan."
    },
    {
        "num": 35,
        "pertanyaan": "Kaum materialis menolak adanya Yaumul Ba'ats (Hari Kebangkitan) dengan dalih tubuh --- PAGE 7 --- yang sudah hancur menjadi tanah tidak logis bisa dihidupkan kembali. Al-Quran membantah argumentasi ini secara rasional (aqli) dengan menganalogikan bahwa...",
        "opsi": [
            "Manusia purba saja bisa hidup kembali",
            "Proses kebangkitan itu sama mudahnya dengan menghidupkan kembali bumi yang tandus kerontang menjadi subur kembali setelah disiram air hujan, dan proses pengulangan ciptaan selalu lebih mudah daripada penciptaan pertama",
            "Hanya roh manusia saja yang bangkit, sedangkan jasmaninya dibiarkan musnah selamanya",
            "Manusia akan dibangkitkan dalam wujud cahaya sehingga tidak butuh fisik"
        ],
        "tipe": "pg",
        "kunciJawaban": 1,
        "materi": "Aqidah  (Bantahan  Yaumul  Ba'ats)",
        "tipsBidang": "Perhatikan kata kunci pada pertanyaan."
    },
    {
        "num": 36,
        "pertanyaan": "Aplikasi sekolah bernama SiAMANAH digunakan untuk mencatat dan mengunduh slip iuran secara mandiri oleh siswa. Tujuan utama integrasi teknologi ini, jika ditinjau dari sisi pembangunan akhlak di lingkungan sekolah, adalah untuk...",
        "opsi": [
            "Menghilangkan peran guru sepenuhnya dalam mendidik siswa",
            "Menciptakan iklim transparansi (Amanah) yang kuat, sehingga menutup celah kecurigaan (Su'uzan) dan melatih kejujuran (Shidiq) seluruh warga sekolah",
            "Membuat siswa saling berlomba menyumbang paling banyak demi mendapat pujian (Riya')",
            "Mempersulit birokrasi sekolah agar terlihat lebih modern"
        ],
        "tipe": "pg",
        "kunciJawaban": 1,
        "materi": "Akhlak  (Integrasi  Aplikasi  SiAMANAH)",
        "tipsBidang": "Perhatikan kata kunci pada pertanyaan."
    },
    {
        "num": 37,
        "pertanyaan": "Sebuah panitia sekolah mendapati ada nama \"Vicki\" yang tidak aktif, namun ada nama \"VICKY\" yang rutin absen di kegiatan. Bukannya langsung menghukum siswa tersebut karena disangka membolos, panitia mengecek dan mengonfirmasi bahwa keduanya adalah orang yang sama akibat kesalahan ketik (typo) . Sikap yang ditunjukkan panitia ini merepresentasikan akhlak...",
        "opsi": [
            "Sikap apatis dan tidak peduli terhadap data siswa",
            "Sikap keras kepala dalam menegakkan disiplin",
            "Sikap Tabayyun (klarifikasi) dan Husnuzan (berprasangka baik), yang mencegah pengambilan keputusan dzalim akibat informasi yang simpang siur",
            "Sikap ragu-ragu dan lamban dalam bertindak"
        ],
        "tipe": "pg",
        "kunciJawaban": 2,
        "materi": "Akhlak  (Tabayyun  pada  Kasus  Kesalahan  Data)",
        "tipsBidang": "Perhatikan kata kunci pada pertanyaan."
    },
    {
        "num": 38,
        "pertanyaan": "Seorang siswa yang ikut ekstrakurikuler Jujitsu bekerja paling keras menata matras latihan, namun saat sesi dokumentasi untuk Instagram sekolah, ia justru memilih berdiri di belakang agar wajahnya tidak terlihat menonjol. Secara kejiwaan agama (Tazkiyatun Nafs), siswa ini sedang melatih akhlak...",
        "opsi": [
            "Ikhlas lillahi ta'ala dengan menjaga hatinya dari penyakit Riya' (pamer) dan Sum'ah (ingin didengar/dipuji orang lain)",
            "Sifat Ujub (membanggakan kemampuan diri secara diam-diam)",
            "Sikap rendah diri (minder) yang berlebihan karena merasa tidak pantas difoto",
            "Sikap antisosial karena tidak mau bergaul dengan teman satu klub"
        ],
        "tipe": "pg",
        "kunciJawaban": 0,
        "materi": "Akhlak  (Ikhlas  vs  Riya'/Sum'ah  di  Ekskul  Jujitsu)",
        "tipsBidang": "Perhatikan kata kunci pada pertanyaan."
    },
    {
        "num": 39,
        "pertanyaan": "Bersyukur tidak hanya diucapkan dengan lisan (Tahmid), namun harus diimplementasikan dengan perbuatan (bil arkan) . Bentuk konkret rasa syukur seorang pelajar yang dikaruniai kecerdasan otak adalah...",
        "opsi": [
            "Menyombongkan nilai raportnya di media sosial",
            "Membantu menjelaskan materi pelajaran (tutor sebaya) kepada temannya yang kesulitan dalam memahami pelajaran, tanpa meminta imbalan",
            "Memberikan contekan kepada temannya saat ujian semester berlangsung",
            "Menyimpan semua ringkasan belajarnya agar tidak disaingi teman lain"
        ],
        "tipe": "pg",
        "kunciJawaban": 1,
        "materi": "Akhlak  (Syukur  bil  Arkan)",
        "tipsBidang": "Perhatikan kata kunci pada pertanyaan."
    },
    {
        "num": 40,
        "pertanyaan": "Mencintai Rasulullah SAW (Mahabbah ar-Rasul) bagi Gen Z tidak cukup sekadar memperingati Maulid Nabi. Bukti autentik cinta kepada Rasulullah bagi seorang pelajar yang aktif membuat konten di TikTok adalah... --- PAGE 8 ---",
        "opsi": [
            "Menghafal silsilah keluarga Nabi namun sering mengucapkan kata-kata kotor di video",
            "Memproduksi konten edukatif yang jujur, menyebarkan narasi kasih sayang, menghindari ghibah digital, sebagai bentuk peneladanan sunnah Nabi di dunia maya",
            "Menggunakan pakaian ala Timur Tengah tetapi gemar membuat konten hoaks untuk mencari sensasi (clickbait)",
            "Hanya membuat video tentang sejarah perang Rasulullah tanpa mengambil pelajaran moralnya"
        ],
        "tipe": "pg",
        "kunciJawaban": 1,
        "materi": "Akhlak  (Cinta  Rasul  /  Pembuat  Konten)",
        "tipsBidang": "Perhatikan kata kunci pada pertanyaan."
    },
    {
        "num": 41,
        "pertanyaan": "Di sekolah terdapat siswa berkebutuhan khusus (disabilitas fisik). Teman-teman sekelasnya berinisiatif membuat jadwal piket untuk membantu mendorong kursi rodanya ke perpustakaan. Sikap empati kelompok siswa ini merupakan penjabaran dari hadis Nabi Muhammad SAW mengenai...",
        "opsi": [
            "\"Tuntutlah ilmu walau ke negeri Cina\"",
            "\"Kasihanilah siapa saja yang ada di bumi, niscaya Dzat yang ada di langit akan mengasihanimu\"",
            "\"Kebersihan itu adalah sebagian dari iman\"",
            "\"Sebaik-baik kamu adalah yang belajar Al-Quran dan mengajarkannya\""
        ],
        "tipe": "pg",
        "kunciJawaban": 1,
        "materi": "Akhlak  (Kasih  Sayang  Sesama  &  Disabilitas)",
        "tipsBidang": "Perhatikan kata kunci pada pertanyaan."
    },
    {
        "num": 42,
        "pertanyaan": "Guru PAI masuk kelas dan mendapati muridnya ribut luar biasa. Alih-alih membentak, guru tersebut tersenyum, menyapa dengan lembut, lalu memberikan tugas analisis kelompok untuk menyalurkan energi siswa. Tindakan pedagogis ini merupakan aplikasi dari akhlak...",
        "opsi": [
            "Sabar dalam kemalasan",
            "Kasih sayang (Rahmah) dan ketegasan mendidik (Tarbiyah) yang mampu mengubah situasi negatif menjadi produktif tanpa kekerasan verbal",
            "Sikap pasrah karena tidak mampu menguasai kelas (Apatis)",
            "Pilih kasih karena hanya memberikan tugas kepada siswa yang ribut"
        ],
        "tipe": "pg",
        "kunciJawaban": 1,
        "materi": "Akhlak  (Kasih  Sayang  Guru  /  Pedagogik)",
        "tipsBidang": "Perhatikan kata kunci pada pertanyaan."
    },
    {
        "num": 43,
        "pertanyaan": "Setelah berprasangka buruk menuduh temannya menghilangkan buku, Ahmad menyadari temannya tidak bersalah. Langkah pembersihan jiwa (Tazkiyatun Nafs) yang wajib ia lakukan adalah...",
        "opsi": [
            "Melupakan kejadian tersebut dan bersikap seolah tidak terjadi apa-apa",
            "Bertaubat kepada Allah atas su'uzan-nya, lalu secara ksatria meminta maaf langsung kepada temannya untuk menggugurkan hak adami (urusan sesama manusia)",
            "Menghindari teman tersebut karena merasa malu",
            "Membuat prasangka buruk kepada siswa lain sebagai bentuk kompensasi psikologis"
        ],
        "tipe": "pg",
        "kunciJawaban": 1,
        "materi": "Akhlak  (Tazkiyatun  Nafs:  Bertaubat  dari  Su'uzan)",
        "tipsBidang": "Perhatikan kata kunci pada pertanyaan."
    },
    {
        "num": 44,
        "pertanyaan": "SMPN 5 Klaten mengagendakan program Jumat Bersih . Seluruh siswa diinstruksikan untuk mengenakan seragam olahraga (kaos dan training) serta membawa peralatan kebersihan seperti sapu dan lap dari rumah masing-masing. Berdasarkan filosofi Fiqh al-Bi'ah (Fiqih Lingkungan), esensi utama kewajiban ini adalah...",
        "opsi": [
            "Menghemat pengeluaran sekolah untuk menyewa jasa petugas kebersihan profesional",
            "Melatih kesadaran praktis siswa akan posisinya sebagai khalifah (pemimpin) di bumi yang diamanati Allah untuk mencegah kerusakan (fasad) dan aktif merawat ekosistem terdekatnya",
            "Menghabiskan waktu luang di hari Jumat agar jam pelajaran teori berkurang",
            "Mencari apresiasi dari dinas pendidikan setempat agar sekolah mendapat  penghargaan adiwiyata semata"
        ],
        "tipe": "pg",
        "kunciJawaban": 1,
        "materi": "Akhlak  (Lingkungan:  Filosofi  Jumat  Bersih)",
        "tipsBidang": "Perhatikan kata kunci pada pertanyaan."
    },
    {
        "num": 45,
        "pertanyaan": "Dalam pelaksanaannya, seorang siswa membuang sampah sisa makanan ke selokan sekolah agar cepat selesai saat Jumat Bersih. Dari kacamata akhlak terhadap lingkungan alam, tindakan ini dikategorikan sebagai...",
        "opsi": [
            "Perbuatan makruh yang masih bisa ditoleransi",
            "Sikap pragmatis yang cerdas",
            "Perbuatan zalim terhadap alam karena menciptakan mudarat (potensi banjir) yang melanggar prinsip Rahmatan lil 'Alamin",
            "Bentuk efisiensi waktu dalam kegiatan kerja bakti"
        ],
        "tipe": "pg",
        "kunciJawaban": 2,
        "materi": "Akhlak  (Lingkungan:  Dampak  Membuang  Sampah)",
        "tipsBidang": "Perhatikan kata kunci pada pertanyaan."
    },
    {
        "num": 46,
        "pertanyaan": "Saat salat Asar berjamaah, Imam lupa melakukan tahiyat awal dan langsung berdiri tegak ke rakaat ketiga. Beberapa makmum mengucapkan \"Subhanallah\", namun imam telanjur berdiri sempurna. Solusi fiqih yang tepat berdasarkan sunah adalah...",
        "opsi": [
            "Imam wajib membatalkan salatnya dan mengulang takbiratul ihram",
            "Imam harus turun kembali duduk tahiyat awal, meskipun sudah membaca Al-Fatihah",
            "Imam melanjutkan salatnya hingga selesai, lalu sebelum mengucapkan salam, imam dan makmum melakukan Sujud Sahwi sebanyak dua kali",
            "Makmum langsung memisahkan diri (mufaraqah) dari imam"
        ],
        "tipe": "pg",
        "kunciJawaban": 2,
        "materi": "Fiqih  (Sujud  Sahwi  -  Lupa  Tahiyat  Awal)",
        "tipsBidang": "Perhatikan kata kunci pada pertanyaan."
    },
    {
        "num": 47,
        "pertanyaan": "Siti sedang tilawah Al-Quran di kamarnya dan sampai pada QS. Al-'Alaq ayat 19 yang merupakan ayat sajdah. Praktik yang disunahkan bagi Siti saat itu adalah...",
        "opsi": [
            "Langsung melaksanakan salat dua rakaat",
            "Melakukan Sujud Tilawah satu kali dengan membaca \"Sajada wajhiya lilladzi khalaqahu...\" , baik dalam keadaan berwudu maupun menghadap kiblat",
            "Melakukan Sujud Syukur karena berhasil menyelesaikan surat pendek",
            "Berhenti membaca dan melanjutkannya di hari lain"
        ],
        "tipe": "pg",
        "kunciJawaban": 1,
        "materi": "Fiqih  (Sujud  Tilawah)  C3  (Penerapan  Praktik)",
        "tipsBidang": "Perhatikan kata kunci pada pertanyaan."
    },
    {
        "num": 48,
        "pertanyaan": "Pengumuman kelulusan tiba, dan Budi dinyatakan lolos ke SMA favoritnya. Ia seketika menjatuhkan diri melakukan Sujud Syukur di lapangan. Syarat sah pelaksanaan Sujud Syukur menurut mayoritas ulama (Jumhur) adalah...",
        "opsi": [
            "Tidak ada syarat khusus, boleh dilakukan meski aurat terbuka",
            "Tetap mensyaratkan suci dari hadas (berwudu), menutup aurat, dan menghadap kiblat layaknya salat biasa, meski dikerjakan di luar salat",
            "Hanya boleh dikerjakan di dalam masjid setelah salat jamaah",
            "Harus menyembelih ayam sebagai pelengkap syukurnya"
        ],
        "tipe": "pg",
        "kunciJawaban": 1,
        "materi": "Fiqih  (Syarat  Sah  Sujud  Syukur)",
        "tipsBidang": "Perhatikan kata kunci pada pertanyaan."
    },
    {
        "num": 49,
        "pertanyaan": "Dalam pelaksanaan Salat Jumat, khatib naik mimbar namun karena grogi, ia lupa membaca selawat kepada Nabi Muhammad SAW pada khutbah pertama maupun kedua. Implikasi hukum dari kejadian ini adalah...",
        "opsi": [
            "Khutbah tetap sah karena membaca selawat hukumnya sunah haiat",
            "Khutbah menjadi batal (tidak sah) karena selawat adalah salah satu rukun khutbah, sehingga berdampak pada tidak sahnya pelaksanaan Salat Jumat jamaah tersebut",
            "Khutbah sah, namun khatib harus menggantinya dengan sujud sahwi di akhir salat",
            "Jamaah boleh memilih untuk tetap salat Jumat atau pulang mengganti dengan salat Zuhur di rumah"
        ],
        "tipe": "pg",
        "kunciJawaban": 1,
        "materi": "Fiqih  (Salat  Jumat:  Rukun  Khutbah)",
        "tipsBidang": "Perhatikan kata kunci pada pertanyaan."
    },
    {
        "num": 50,
        "pertanyaan": "Seorang musafir singgah di masjid pada hari Jumat. Ia ikut salat berjamaah namun baru bergabung ketika imam sedang dalam posisi iktidal pada rakaat kedua. Status salat musafir ini (masbuk) adalah...",
        "opsi": [
            "Ia sah mendapat salat Jumat dan cukup menambah satu rakaat lagi setelah imam salam",
            "Ia kehilangan rakaat Jumat (karena tidak sempat rukuk bersama imam di rakaat --- PAGE 10 --- kedua), sehingga setelah imam salam ia wajib meneruskannya menjadi salat Zuhur empat rakaat",
            "Ia harus menunggu salat Jumat selesai lalu salat Zuhur sendirian",
            "Salatnya batal secara otomatis"
        ],
        "tipe": "pg",
        "kunciJawaban": 1,
        "materi": "Fiqih  (Salat  Jumat:  Kasus  Jamaah  Masbuk)",
        "tipsBidang": "Perhatikan kata kunci pada pertanyaan."
    },
    {
        "num": 51,
        "pertanyaan": "Ibadah Haji dan Umrah di Tanah Suci memiliki kesamaan ritual, namun ada perbedaan mendasar yang memisahkan keduanya secara status fikih. Puncak ibadah yang merupakan rukun mutlak Haji namun tidak ada dalam Umrah adalah...",
        "opsi": [
            "Mengenakan pakaian ihram dari Miqat Makani",
            "Pelaksanaan Sa'i antara bukit Safa dan Marwah sebanyak 7 kali balikan",
            "Wukuf berdiam diri di Padang Arafah pada tanggal 9 Zulhijah",
            "Melaksanakan Tawaf mengelilingi Ka'bah"
        ],
        "tipe": "pg",
        "kunciJawaban": 2,
        "materi": "Fiqih  (Perbedaan  Haji  dan  Umrah)",
        "tipsBidang": "Perhatikan kata kunci pada pertanyaan."
    },
    {
        "num": 52,
        "pertanyaan": "Tawaf Wada' merupakan salah satu wajib haji. Analisis hikmah di balik diwajibkannya Tawaf Wada' bagi jemaah yang hendak pulang ke tanah airnya adalah...",
        "opsi": [
            "Sebagai hukuman fisik karena banyak berbuat dosa di tanah suci",
            "Sebagai penghormatan dan perpisahan terakhir dengan Baitullah (Ka'bah) sebelum meninggalkan kota Makkah",
            "Sebagai syarat utama agar ibadah hajinya mendatangkan kekayaan ekonomi saat pulang",
            "Hanya sebagai tradisi budaya Arab kuno yang dipertahankan"
        ],
        "tipe": "pg",
        "kunciJawaban": 1,
        "materi": "Fiqih  (Haji:  Hikmah  Tawaf  Wada')",
        "tipsBidang": "Perhatikan kata kunci pada pertanyaan."
    },
    {
        "num": 53,
        "pertanyaan": "Kecelakaan tragis mengakibatkan seorang muslim meninggal dunia dengan kondisi tubuh yang hancur atau mengalami luka bakar sangat parah, sehingga memandikannya dengan air dapat merusak sisa jasadnya. Solusi syariat (rukhsah darurat) dalam menyucikan jenazah ini adalah...",
        "opsi": [
            "Gugur kewajiban menyucikannya, langsung dikafani dan dikubur",
            "Ditayamumkan menggunakan debu/tanah yang suci dengan mengusap pelan pada bagian wajah dan tangannya sebagai pengganti mandi",
            "Dibakar hingga menjadi abu agar tidak merepotkan warga",
            "Disiram air es dari jarak jauh"
        ],
        "tipe": "pg",
        "kunciJawaban": 1,
        "materi": "Fiqih  (Penyelenggaraan  Jenazah:  Luka  Bakar  Parah)",
        "tipsBidang": "Perhatikan kata kunci pada pertanyaan."
    },
    {
        "num": 54,
        "pertanyaan": "Pelaksanaan Salat Jenazah memiliki formasi yang unik, tanpa rukuk dan sujud. Jika jenazah yang disalatkan adalah perempuan (mayitah), posisi berdiri Imam yang disunahkan adalah...",
        "opsi": [
            "Sejajar dengan kepala jenazah",
            "Sejajar dengan bagian tengah badan (perut/pusar) jenazah",
            "Berdiri di bagian kaki jenazah",
            "Membelakangi jenazah"
        ],
        "tipe": "pg",
        "kunciJawaban": 1,
        "materi": "Fiqih  (Salat  Jenazah  Perempuan)",
        "tipsBidang": "Perhatikan kata kunci pada pertanyaan."
    },
    {
        "num": 55,
        "pertanyaan": "Menjelang Idul Adha, panitia qurban menolak menyembelih seekor sapi sumbangan warga karena sapi tersebut mengalami kebutaan sebelah mata yang sangat jelas dan pincang parah. Alasan syar'i penolakan ini adalah...",
        "opsi": [
            "Sapi cacat memiliki harga jual daging yang murah di pasar",
            "Hewan yang cacat permanen secara fisik dilarang dijadikan hewan qurban, sebagai wujud etika persembahan terbaik (Ihsan) kepada Allah dan memuliakan penerima daging",
            "Sapi tersebut akan memberontak saat disembelih sehingga membahayakan panitia",
            "Hanya mitos bahwa daging hewan buta mengandung penyakit"
        ],
        "tipe": "pg",
        "kunciJawaban": 1,
        "materi": "Fiqih  (Qurban:  Syarat  Fisik  Hewan)",
        "tipsBidang": "Perhatikan kata kunci pada pertanyaan."
    },
    {
        "num": 56,
        "pertanyaan": "Keluarga Pak Budi dikaruniai seorang bayi laki-laki. Sebagai rasa syukur, ia melaksanakan akikah. Sunah Rasulullah SAW untuk penyembelihan akikah anak laki-laki beserta pencukuran rambutnya dilakukan pada...",
        "opsi": [
            "Hari ke-7 kelahirannya, dengan menyembelih 2 ekor kambing/domba --- PAGE 11 ---",
            "Hari ke-14 kelahirannya, dengan menyembelih 1 ekor lembu/sapi",
            "Hari ke-40 kelahirannya, dengan menyembelih 1 ekor kambing",
            "Usia 1 tahun, dengan membagikan daging secara mentah"
        ],
        "tipe": "pg",
        "kunciJawaban": 0,
        "materi": "Fiqih  (Akikah  Anak  Laki-laki)",
        "tipsBidang": "Perhatikan kata kunci pada pertanyaan."
    },
    {
        "num": 57,
        "pertanyaan": "Rombongan guru dan siswa kelas VIII mengadakan kegiatan Character Building (Pembinaan Karakter) ke sebuah kawasan alam terbuka di daerah Karanganyar . Mereka berangkat dari sekolah pukul 09.00 WIB. Perjalanan memakan waktu lama, dan mereka merencanakan akan tiba di lokasi menjelang sore hari. Demi kelancaran perjalanan, pembina memutuskan agar rombongan memajukan pelaksanaan Salat Asar untuk dikerjakan di waktu Zuhur di sebuah rest area, masing-masing diringkas menjadi 2 rakaat. Praktik rukhsah ini disebut...",
        "opsi": [
            "Jamak Takhir Sempurna (Zuhur 4 rakaat dilanjut Asar 4 rakaat pada waktu Asar)",
            "Jamak Taqdim Qasar (Zuhur 2 rakaat dilanjut Asar 2 rakaat yang dilaksanakan pada waktu Zuhur)",
            "Salat Jamak Khauf (karena sedang berada dalam perjalanan yang berbahaya)",
            "Qada Salat Zuhur di waktu Asar"
        ],
        "tipe": "pg",
        "kunciJawaban": 1,
        "materi": "Fiqih  (Rukhsah  Perjalanan  Karanganyar:  Jamak  Qasar)",
        "tipsBidang": "Perhatikan kata kunci pada pertanyaan."
    },
    {
        "num": 58,
        "pertanyaan": "Berdasarkan studi kasus perjalanan ke Karanganyar di atas, syarat mutlak (Syurut as-Sihhah) yang memperbolehkan rombongan tersebut mengambil keringanan meng-Qasar (meringkas) salat adalah...",
        "opsi": [
            "Perjalanan tersebut bukan bertujuan maksiat dan jarak tempuhnya telah memenuhi batas minimal (sekitar 80-90 km / 2 marhalah)",
            "Kondisi lalu lintas sangat macet meskipun jarak aslinya hanya 10 km dari sekolah",
            "Mereka harus menggunakan kendaraan umum milik pemerintah",
            "Mendapat surat izin dispensasi ibadah dari kepala sekolah"
        ],
        "tipe": "pg",
        "kunciJawaban": 0,
        "materi": "Fiqih  (Syarat  Sah  Meng-Qasar  Salat)",
        "tipsBidang": "Perhatikan kata kunci pada pertanyaan."
    },
    {
        "num": 59,
        "pertanyaan": "Seorang dokter bedah muslim harus memimpin operasi pemisahan bayi kembar siam yang memakan waktu belasan jam tanpa henti, melewati waktu Zuhur hingga Isya. Solusi fikih kontemporer berbasis Maqashid Syariah (Hifz al-Nafs/Menjaga Nyawa) untuk dokter ini adalah...",
        "opsi": [
            "Dokter wajib meninggalkan meja operasi seketika masuk waktu salat, walau pasien meninggal",
            "Kewajiban salatnya gugur secara permanen hari itu karena ia sedang menyelamatkan nyawa",
            "Ia diperbolehkan menjamak salatnya atau meng-qada salat yang terlewat setelah operasi selesai sepenuhnya, karena ini tergolong uzur syar'i tingkat darurat kritis",
            "Menugaskan perawat junior untuk mewakili salatnya di musala rumah sakit"
        ],
        "tipe": "pg",
        "kunciJawaban": 2,
        "materi": "Fiqih  (Rukhsah  C4  (Pemecahan",
        "tipsBidang": "Perhatikan kata kunci pada pertanyaan."
    },
    {
        "num": 60,
        "pertanyaan": "Puncak kejayaan Kekhalifahan Bani Umayyah di Andalusia (Spanyol) diwarnai oleh harmoni sosial yang dikenal dengan istilah Convivencia . Dampak jangka panjang dari kebijakan toleransi antaragama ini bagi peradaban dunia adalah...",
        "opsi": [
            "Agama Islam lenyap terserap oleh budaya Eropa",
            "Terciptanya kolaborasi intelektual antara cendekiawan Yahudi, Kristen, dan Islam yang berpusat di Cordoba untuk menerjemahkan filsafat dan merintis sains modern di Eropa",
            "Terjadinya perang salib internal di semenanjung Iberia",
            "Bani Umayyah berhasil menguasai seluruh benua Eropa dengan kekuatan militer absolut"
        ],
        "tipe": "pg",
        "kunciJawaban": 1,
        "materi": "Tarikh  (Bani  Umayyah  Spanyol:  Convivencia)",
        "tipsBidang": "Perhatikan kata kunci pada pertanyaan."
    },
    {
        "num": 61,
        "pertanyaan": "Pemindahan ibu kota Daulah Abbasiyah dari Damaskus ke Baghdad bukan sekadar urusan politik, melainkan strategi geopolitik dan ekonomi kelas atas. Analisis paling logis di balik pemilihan lokasi Baghdad adalah...",
        "opsi": [
            "Letaknya yang diapit sungai Tigris dan Eufrat memastikan ketahanan pangan --- PAGE 12 --- (subur), serta menjadi simpul Jalur Sutra yang mempertemukan perdagangan Timur dan Barat",
            "Cuaca di Baghdad sangat dingin sehingga cocok bagi pasukan berkuda Abbasiyah",
            "Untuk menjauhi pengaruh budaya Persia yang mulai menguat",
            "Baghdad adalah kota suci ketiga setelah Makkah dan Madinah pada masa itu"
        ],
        "tipe": "pg",
        "kunciJawaban": 0,
        "materi": "Tarikh  (Abbasiyah:  Geopolitik  Baghdad)",
        "tipsBidang": "Perhatikan kata kunci pada pertanyaan."
    },
    {
        "num": 62,
        "pertanyaan": "Lembaga Baitul Hikmah pada era Khalifah Harun ar-Rasyid (Abbasiyah) berevolusi dari sekadar perpustakaan menjadi akademi riset internasional. Warisan metodologi paling revolusioner dari Baitul Hikmah untuk sains hari ini adalah...",
        "opsi": [
            "Penerjemahan membabi-buta tanpa kritik terhadap teks-teks mitologi Yunani",
            "Sintesis ilmu: tidak hanya menerjemahkan karya Yunani/India, tetapi mengkritisinya, melakukan observasi empiris, hingga melahirkan ilmu baru seperti Aljabar (oleh Al-Khawarizmi)",
            "Pelarangan penggunaan akal (mantiq) dalam penelitian medis",
            "Fokus eksklusif hanya pada penelitian ilmu mistik dan astrologi"
        ],
        "tipe": "pg",
        "kunciJawaban": 1,
        "materi": "Tarikh  (Baitul  Hikmah:  Metodologi  Ilmiah)",
        "tipsBidang": "Perhatikan kata kunci pada pertanyaan."
    },
    {
        "num": 63,
        "pertanyaan": "Buku kedokteran karya Ibnu Sina (Avicenna), yakni Al-Qanun fi al-Tibb , menjadi rujukan universitas kedokteran Eropa selama berabad-abad. Konsep visioner apa dari buku ini yang menjadi cikal bakal pemahaman pandemi modern?",
        "opsi": [
            "Penemuan teori bakteriologis bahwa penyakit menular disebarkan melalui udara, air, dan partikel kecil yang tak kasat mata",
            "Terapi penyembuhan dengan cara menguras darah pasien (bloodletting) hingga lemas",
            "Pernyataan bahwa wabah penyakit murni hanya karena kutukan spiritual tanpa ada kaitan dengan kebersihan lingkungan",
            "Penggunaan mantra bahasa Arab untuk membedah pasien"
        ],
        "tipe": "pg",
        "kunciJawaban": 0,
        "materi": "Tarikh  (Kedokteran  Ibnu  Sina  /  Pandemi)",
        "tipsBidang": "Perhatikan kata kunci pada pertanyaan."
    },
    {
        "num": 64,
        "pertanyaan": "Daulah Fatimiyah yang beraliran Syiah membangun sebuah masjid agung di Kairo, Mesir, yang kemudian bertransformasi menjadi salah satu universitas Islam tertua. Lembaga yang dimaksud adalah...",
        "opsi": [
            "Masjid Al-Azhar, yang kelak pada era Dinasti Ayyubiyah diubah orientasinya menjadi pusat pendidikan Islam Sunni moderat",
            "Masjid Umayyah, yang menjadi pusat arsitektur kaligrafi Mesir",
            "Madrasah Nizamiyah, pusat pengkaderan ulama mazhab Syafi'i",
            "Baitul Maqdis, pusat kajian perbandingan agama"
        ],
        "tipe": "pg",
        "kunciJawaban": 0,
        "materi": "Tarikh  (Fatimiyah:  Universitas  Al-Azhar)",
        "tipsBidang": "Perhatikan kata kunci pada pertanyaan."
    },
    {
        "num": 65,
        "pertanyaan": "Keberhasilan Jauhar as-Siqilli (Panglima Fatimiyah) menaklukkan Mesir diikuti dengan perencanaan tata kota yang visioner. Ibu kota baru yang dibangunnya untuk menyaingi Baghdad dan Cordoba bernama...",
        "opsi": [
            "Alexandria (Iskandariyah)",
            "Al-Qahirah (Kairo), yang berarti \"Kota yang Menaklukkan\"",
            "Fustat, kota perkemahan militer peninggalan Amru bin Ash",
            "Damaskus Baru"
        ],
        "tipe": "pg",
        "kunciJawaban": 1,
        "materi": "Tarikh  (Fatimiyah:  Pembangunan  Kota  Kairo)",
        "tipsBidang": "Perhatikan kata kunci pada pertanyaan."
    },
    {
        "num": 66,
        "pertanyaan": "Kejatuhan Konstantinopel (1453 M) ke tangan Sultan Muhammad Al-Fatih (Turki Usmani) membawa efek domino luar biasa bagi sejarah Eropa, yakni...",
        "opsi": [
            "Bersatunya seluruh kerajaan Eropa di bawah satu panji Islam",
            "Blokade jalur perdagangan rempah-rempah Asia ke Eropa, yang secara tidak langsung memaksa bangsa Eropa melakukan penjelajahan samudra (Era Penemuan) yang memicu kolonialisme global",
            "Berakhirnya Perang Salib secara damai tanpa ada perjanjian",
            "Hancurnya sistem kalender Masehi di dunia barat"
        ],
        "tipe": "pg",
        "kunciJawaban": 1,
        "materi": "Tarikh  (Turki  Usmani:  Dampak  Konstantinopel)",
        "tipsBidang": "Perhatikan kata kunci pada pertanyaan."
    },
    {
        "num": 67,
        "pertanyaan": "Daulah Turki Usmani mengandalkan sistem birokrasi dan militer yang unik melalui --- PAGE 13 --- rekrutmen Devshirme , yang menghasilkan pasukan elite infanteri sangat loyal bernama...",
        "opsi": [
            "Mamluk, budak-budak dari Kaukasus",
            "Janissary (Inkisyariyah), pemuda-pemuda dari Balkan yang dilatih militer dan administrasi tingkat tinggi sejak kecil",
            "Sipahi, pasukan kavaleri bangsawan Anatolia",
            "Qizilbash, pasukan fanatik bertopi merah"
        ],
        "tipe": "pg",
        "kunciJawaban": 1,
        "materi": "Tarikh  (Turki  Usmani:  Pasukan  Janissary)",
        "tipsBidang": "Perhatikan kata kunci pada pertanyaan."
    },
    {
        "num": 68,
        "pertanyaan": "Puncak estetika arsitektur dan hukum Daulah Turki Usmani terjadi pada masa Sultan Sulaiman I. Oleh bangsa barat ia dijuluki \"The Magnificent\" , sementara di dunia Islam ia digelari \"Al-Qanuni\" karena prestasinya dalam...",
        "opsi": [
            "Membangun angkatan laut terbesar yang ditakuti armada Spanyol",
            "Menyusun undang-undang sekuler pertama yang menolak syariat Islam",
            "Mengkristalisasi hukum syariat dan administrasi negara (Kanun) ke dalam kitab undang-undang yang sistematis untuk mengatur masyarakat multietnis Kesultanan Usmani yang sangat luas",
            "Menaklukkan seluruh daratan benua Afrika dalam waktu satu tahun"
        ],
        "tipe": "pg",
        "kunciJawaban": 2,
        "materi": "Tarikh  (Turki  Usmani:  UU  Sulaiman  Al-Qanuni)",
        "tipsBidang": "Perhatikan kata kunci pada pertanyaan."
    },
    {
        "num": 69,
        "pertanyaan": "Berbeda dengan Kekaisaran Usmani dan Mughal yang mayoritas beraliran Sunni, Daulah Syafawi di Persia (Iran) memaksakan identitas keagamaan yang menjadi akar geopolitik modern di Timur Tengah, yaitu...",
        "opsi": [
            "Menetapkan mazhab Syiah Itsna Asyariyah sebagai agama resmi negara dan melakukan konversi massal penduduk Persia",
            "Menerapkan sekularisme absolut dengan memisahkan otoritas mullah dari kekuasaan Syah (Raja)",
            "Mendeklarasikan aliran Mu'tazilah sebagai dasar filsafat kerajaan",
            "Menghapus semua peninggalan budaya Persia pra-Islam"
        ],
        "tipe": "pg",
        "kunciJawaban": 0,
        "materi": "Tarikh  (Syafawi:  Mazhab  Syiah  Iran)",
        "tipsBidang": "Perhatikan kata kunci pada pertanyaan."
    },
    {
        "num": 70,
        "pertanyaan": "Kota Isfahan menjadi saksi bisu kejayaan tata ruang kota (urban planning) Daulah Syafawi. Arsitektur ikonik yang dibangun pada masa Syah Abbas I dengan alun-alun raksasanya adalah...",
        "opsi": [
            "Masjid Biru (Blue Mosque) di Istanbul",
            "Maidan-e Naqsh-e Jahan, alun-alun raksasa yang dikelilingi istana, masjid, dan bazar utama",
            "Istana Al-Hamra yang dipenuhi kaligrafi",
            "Taj Mahal yang dibangun dari marmer putih"
        ],
        "tipe": "pg",
        "kunciJawaban": 1,
        "materi": "Tarikh  (Syafawi:  Arsitektur  Isfahan)",
        "tipsBidang": "Perhatikan kata kunci pada pertanyaan."
    },
    {
        "num": 71,
        "pertanyaan": "Kaisar Akbar dari Kekaisaran Mughal di anak benua India menghadapi tantangan memerintah wilayah dengan mayoritas penduduk beragama Hindu. Strategi politik Sulakhul (Toleransi Universal) yang diterapkannya berdampak pada...",
        "opsi": [
            "Penghapusan pajak Jizyah bagi non-muslim dan integrasi elit Rajput (Hindu) ke dalam birokrasi pemerintahan, sehingga menciptakan stabilitas imperium yang kuat",
            "Pemberontakan besar-besaran ulama ortodoks yang berujung pada runtuhnya kerajaan",
            "Pembagian India menjadi negara Islam (Pakistan) dan negara Hindu secara prematur",
            "Dominasi penuh budaya Arab yang menggantikan kebudayaan lokal Hindustan"
        ],
        "tipe": "pg",
        "kunciJawaban": 0,
        "materi": "Tarikh  (Mughal:  Kebijakan  Sulakhul  Akbar)",
        "tipsBidang": "Perhatikan kata kunci pada pertanyaan."
    },
    {
        "num": 72,
        "pertanyaan": "Bangunan simetris berlapis marmer putih yang didirikan oleh Kaisar Shah Jahan di Agra merupakan adikarya arsitektur Mughal. Bangunan yang awalnya berfungsi sebagai makam (mausoleum) istrinya ini adalah...",
        "opsi": [
            "Benteng Merah (Red Fort)",
            "Masjid Jama (Jama Masjid)",
            "Taj Mahal --- PAGE 14 ---",
            "Menara Qutub (Qutub Minar)"
        ],
        "tipe": "pg",
        "kunciJawaban": 2,
        "materi": "Tarikh  (Mughal:  Arsitektur  Taj  Mahal)",
        "tipsBidang": "Perhatikan kata kunci pada pertanyaan."
    },
    {
        "num": 73,
        "pertanyaan": "Mundurnya Kekaisaran Mughal bermula pada abad ke-18. Evaluasi sejarah menunjukkan bahwa faktor internal paling mematikan yang melemahkan fondasi negara sehingga mudah dikuasai oleh Inggris (East India Company) adalah...",
        "opsi": [
            "Kegagalan India memproduksi senjata api lokal",
            "Konflik perebutan tahta antar pangeran yang berdarah, korupsi birokrasi kaum Mansabdar (tuan tanah), dan terkurasnya kas negara akibat perang maraton di wilayah Deccan",
            "Serangan meteor yang menghancurkan lumbung pangan di Delhi",
            "Kaisar terakhir yang secara sukarela menyerahkan kerajaannya kepada Ratu Victoria"
        ],
        "tipe": "pg",
        "kunciJawaban": 1,
        "materi": "Tarikh  (Kejatuhan  Kekaisaran  Mughal)",
        "tipsBidang": "Perhatikan kata kunci pada pertanyaan."
    },
    {
        "num": 74,
        "pertanyaan": "Di era digital modern, penyebaran misinformasi (hoax) di aplikasi perpesanan terjadi sangat masif. Berdasarkan kaidah komunikasi Islam dalam QS. Al-Hujurat: 6 tentang Tabayyun , tindakan membagikan ulang berita provokatif ke grup sekolah tanpa mengecek kebenarannya secara objektif dikategorikan sebagai...",
        "opsi": [
            "Tindakan antisipatif yang sah demi kewaspadaan dini masyarakat",
            "Hak kebebasan berekspresi (freedom of speech) yang dilindungi secara absolut",
            "Perilaku fasik di ruang siber karena menjadi agen penyebar fitnah tanpa sanad/sumber yang valid, yang sangat berpotensi memecah ukhuwah (persaudaraan)",
            "Sebuah kewajiban literasi digital bagi generasi Z"
        ],
        "tipe": "pg",
        "kunciJawaban": 2,
        "materi": "Pengetahuan  Kontemporer  (Tabayyun  di  Medsos  /  Hoax)",
        "tipsBidang": "Perhatikan kata kunci pada pertanyaan."
    },
    {
        "num": 75,
        "pertanyaan": "Majelis Ulama Indonesia (MUI) merilis Fatwa Nomor 41 Tahun 2014 tentang Pengelolaan Sampah untuk Mencegah Kerusakan Lingkungan Hidup. Dalam fatwa ini, membuang sampah sembarangan dan membakar hutan secara liar ditetapkan hukumnya Haram . Jika dianalisis menggunakan pisau bedah Maqashid Syariah , fatwa ekologis ini bermuara pada prinsip...",
        "opsi": [
            "Hifz ad-Din (Menjaga Agama) semata, agar pekarangan masjid tidak kotor",
            "Hifz al-Nafs (Menjaga Jiwa/Kehidupan) dan Hifz al-Bi'ah (Menjaga Lingkungan), karena polusi dan degradasi alam mengancam kelangsungan hidup umat manusia dan generasi mendatang secara massal",
            "Hifz al-Maal (Menjaga Harta), bertujuan agar anggaran negara tidak habis untuk membiayai dinas kebersihan",
            "Hifz al-'Aql (Menjaga Akal), agar manusia bisa berpikir lebih logis saat melihat lingkungan yang bersih"
        ],
        "tipe": "pg",
        "kunciJawaban": 1,
        "materi": "Pengetahuan  Kontemporer  (Fatwa  MUI  Lingkungan  Hidup)",
        "tipsBidang": "Perhatikan kata kunci pada pertanyaan."
    }
];


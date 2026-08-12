// ═══════════════════════════════════════════════════════════
// DATA SOAL LATIHAN HARIAN
// Kelas 9 Semester Genap Bab 3 — Sabar Menghadapi Musibah dan Ujian
// 20 Soal PG Standar Kompetensi Tinggi (L1, L2, L3)
// Dalil: Q.S. al-Baqarah/2:155-156, Q.S. Ali 'Imran/3:200
//        Hadis Riwayat Muslim & Al-Baihaqi
//        Tajwid: Nun Mati/Tanwin dan Mim Mati
// ═══════════════════════════════════════════════════════════
const latihanData = [
    {
        no: 1,
        topik: "Q.S. al-Baqarah/2: 155",
        level: "L1",
        kutipan: "وَلَنَبْلُوَنَّكُمْ بِشَيْءٍ مِنَ الْخَوْفِ وَالْجُوعِ وَنَقْصٍ مِنَ الْأَمْوَالِ وَالْأَنْفُسِ وَالثَّمَرَاتِ ۗ وَبَشِّرِ الصَّابِرِينَ",
        pertanyaan: "Berdasarkan potongan ayat di atas, lafal <strong>الْخَوْفِ</strong> (<em>al-khauf</em>) dan <strong>الثَّمَرَاتِ</strong> (<em>al-tsamarat</em>) secara berurutan memiliki arti bentuk ujian berupa...",
        opsi: [
            "Kelaparan dan kematian jiwa",
            "Ketakutan dan kekurangan buah-buahan (bahan makanan)",
            "Kekurangan harta dan kecemasan jiwa",
            "Kerugian perdagangan dan paceklik berkepanjangan"
        ],
        kunci: 1,
        penjelasan: "Berdasarkan terjemahan lafal mufradat Q.S. al-Baqarah/2: 155, lafal <em>al-khauf</em> (الْخَوْفِ) berarti <strong>ketakutan</strong>, sedangkan <em>al-tsamarat</em> (الثَّمَرَاتِ) berarti <strong>buah-buahan atau hasil tanaman</strong>."
    },
    {
        no: 2,
        topik: "Q.S. al-Baqarah/2: 156",
        level: "L1",
        kutipan: "الَّذِينَ إِذَا أَصَابَتْهُمْ مُصِيبَةٌ قَالُوا إِنَّا لِلَّهِ وَإِنَّا إِلَيْهِ رَاجِعُونَ",
        pertanyaan: "Ikrar kalimat istirja' pada potongan ayat di atas menegaskan pengakuan teologis seorang hamba bahwa...",
        opsi: [
            "Manusia berhak mengatur takdir kehidupannya sendiri tanpa campur tangan makhluk lain",
            "Segala sesuatu di semesta ini adalah milik mutlak Allah Swt. dan pasti akan kembali kepada-Nya",
            "Musibah yang menimpa manusia merupakan tanda kemarahan dan kebencian Allah Swt.",
            "Kematian fisik adalah akhir dari segala pertanggungjawaban amal manusia di dunia"
        ],
        kunci: 1,
        penjelasan: "Kalimat istirja' (<em>Inna lillahi wa inna ilaihi raji'un</em>) secara harfiah bermakna \"Sesungguhnya kami adalah milik Allah dan sesungguhnya hanya kepada-Nya kami akan kembali\". Hal ini menanamkan kesadaran bahwa <strong>manusia tidak memiliki apa pun secara mutlak</strong>; semuanya hanyalah titipan Allah Swt."
    },
    {
        no: 3,
        topik: "Q.S. Ali 'Imran/3: 200",
        level: "L1",
        kutipan: "يٰٓاَيُّهَا الَّذِيْنَ اٰمَنُوا اصْبِرُوْا وَصَابِرُوْا وَرَابِطُوْاۗ",
        pertanyaan: "Prof. Quraish Shihab dalam <em>Tafsir Al-Misbah</em> menjelaskan bahwa kata <strong>اصْبِرُوْا</strong> (<em>isbiru</em>) dan <strong>صَابِرُوْا</strong> (<em>sabiru</em>) pada ayat di atas memiliki makna bertingkat, yaitu...",
        opsi: [
            "Isbiru adalah sabar dalam beribadah, sedangkan sabiru adalah sabar dalam menuntut ilmu duniawi",
            "Isbiru adalah sabar yang dilakukan secara berkelompok, sedangkan sabiru adalah sabar individu",
            "Isbiru adalah perintah bersabar pada diri sendiri, sedangkan sabiru adalah perintah untuk menguatkan kesabaran kolektif dalam menghadapi tantangan pihak lain",
            "Isbiru berarti menahan amarah secara pasif, sedangkan sabiru berarti membalas kejahatan dengan kesabaran"
        ],
        kunci: 2,
        penjelasan: "<em>Isbiru</em> (اصْبِرُوْا) merupakan perintah untuk melatih kesabaran personal. Sementara <em>sabiru</em> (صَابِرُوْا) yang menggunakan pola interaksi timbal balik (<em>musyarakah</em>) berarti <strong>menguatkan kesabaran bersama-sama</strong> atau saling memperkokoh ketahanan mental spiritual di antara sesama mukmin menghadapi ujian luar."
    },
    {
        no: 4,
        topik: "Q.S. Ali 'Imran/3: 200",
        level: "L1",
        stimulus: "Q.S. Ali 'Imran/3: 200 mengandung tiga perintah berjenjang: isbiru, sabiru, dan rabithu.",
        pertanyaan: "Kata <strong>رَابِطُوا</strong> (<em>rabithu</em>) dalam Q.S. Ali 'Imran/3: 200 secara bahasa dan istilah syariat memiliki arti...",
        opsi: [
            "Membayar zakat tepat pada waktunya",
            "Tetap bersiap siaga di perbatasan negerimu (menjaga konsistensi perjuangan)",
            "Memperbanyak membaca Al-Qur'an secara tartil",
            "Melakukan isolasi diri (uzlah) di dalam masjid demi menghindari fitnah"
        ],
        kunci: 1,
        penjelasan: "Secara historis-bahasa, <em>rabithu</em> (رَابِطُوا) berarti <strong>bersiap siaga menjaga garis perbatasan</strong> wilayah umat Islam dari serangan musuh (ribat). Dalam konteks modern, ini diterjemahkan sebagai perintah untuk menjaga konsistensi (<em>istiqamah</em>) dalam kebaikan dan pertahanan moral secara berkesinambungan."
    },
    {
        no: 5,
        topik: "Hadis Riwayat Muslim",
        level: "L1",
        kutipan: "عَجَبًا لِأَمْرِ الْمُؤْمِنِ إِنَّ أَمْرَهُ كُلَّهُ خَيْرٌ... إِنْ أَصَابَتْهُ سَرَّاءُ شَكَرَ فَكَانَ خَيْرًا لَهُ، وَإِنْ أَصَابَتْهُ ضَرَّاءُ صَبَرَ فَكَانَ خَيْرًا لَهُ",
        kutipanTerjemah: "Rasulullah ﷺ bersabda: \"Sungguh menakjubkan perkara seorang mukmin, seluruh urusannya adalah kebaikan...\" (H.R. Muslim)",
        pertanyaan: "Berdasarkan hadis di atas, keunikan karakter seorang mukmin yang mengagumkan Rasulullah saw. terletak pada...",
        opsi: [
            "Kemampuannya menghindari seluruh bentuk musibah di dunia",
            "Sikapnya yang selalu mengeluh namun tetap rajin beribadah ke masjid",
            "Sikap syukurnya saat mendapatkan kesenangan, dan sikap sabarnya saat ditimpa kesusahan",
            "Kepasrahannya menerima kemiskinan tanpa mau melakukan ikhtiar bekerja"
        ],
        kunci: 2,
        penjelasan: "Hadis sahih riwayat Muslim tersebut menegaskan bahwa seluruh urusan orang mukmin adalah baik. Jika ia mendapat nikmat (<em>sarra'</em>) ia <strong>bersyukur</strong>, dan jika ia mendapat kesulitan (<em>darra'</em>) ia <strong>bersabar</strong>, di mana kedua respon tersebut berbuah kebaikan dan pahala di sisi Allah Swt."
    },
    {
        no: 6,
        topik: "Tajwid Nun Mati — Idgham Bighunnah",
        level: "L1",
        kutipan: "وَلَنَبْلُوَنَّكُمْ بِشَيْءٍ مِنَ الْخَوْفِ",
        pertanyaan: "Pada lafal yang bergaris bawah <strong>بِشَيْءٍ مِنَ</strong> terdapat hukum bacaan...",
        opsi: [
            "Izh-har Halqi karena tanwin bertemu dengan huruf Mim",
            "Idgham Bighunnah karena tanwin kasrah bertemu dengan huruf Mim",
            "Idgham Bilaghunnah karena tanwin kasrah bertemu dengan huruf Nun",
            "Ikhfa' Haqiqi karena tanwin bertemu dengan huruf Mim"
        ],
        kunci: 1,
        penjelasan: "Hukum bacaan pada <strong>بِشَيْءٍ مِنَ</strong> adalah <strong>Idgham Bighunnah</strong>. Hal ini terjadi karena ada tanwin (kasratain) bertemu dengan salah satu huruf idgham bighunnah yang empat (ي ن م و), yaitu huruf <strong>Mim (م)</strong>. Cara membacanya: dileburkan disertai dengung yang ditahan 2 harakat."
    },
    {
        no: 7,
        topik: "Tajwid Mim Mati — Idgham Mimi",
        level: "L1",
        kutipan: "الَّذِينَ إِذَا أَصَابَتْهُمْ مُصِيبَةٌ",
        pertanyaan: "Hukum tajwid Mim sukun pada lafal <strong>أَصَابَتْهُمْ مُصِيبَةٌ</strong> adalah...",
        opsi: [
            "Izh-har Syafawi karena Mim sukun bertemu huruf Shod",
            "Ikhfa' Syafawi karena Mim sukun bertemu huruf Ba",
            "Idgham Mimi (Idgham Mutamatsilain) karena Mim sukun bertemu huruf Mim",
            "Ghunnah Musyaddadah karena huruf Mim bertasydid di awal kata"
        ],
        kunci: 2,
        penjelasan: "Pada lafal <strong>أَصَابَتْهُمْ مُصِيبَةٌ</strong> terdapat Mim sukun (<strong>مْ</strong>) bertemu dengan huruf <strong>Mim (م)</strong>. Hukum bacaannya adalah <strong>Idgham Mimi</strong> (Idgham Mutamatsilain). Cara membacanya: wajib dimasukkan secara rangkap dan didengungkan."
    },
    {
        no: 8,
        topik: "Tajwid Nun Mati — Ikhfa' Haqiqi",
        level: "L1",
        kutipan: "وَلَنَبْلُوَنَّكُمْ بِشَيْءٍ مِنَ الْخَوْفِ وَالْجُوعِ وَنَقْصٍ مِنَ الْأَمْوَالِ وَالْأَنْفُسِ",
        pertanyaan: "Lafal pada potongan ayat di atas yang mengandung hukum bacaan <strong>Ikhfa' Haqiqi</strong> adalah...",
        opsi: [
            "وَلَنَبْلُوَنَّكُمْ",
            "وَنَقْصٍ مِنَ",
            "وَالْأَنْفُسِ",
            "مِنَ الْأَمْوَالِ"
        ],
        opsiArab: true,
        kunci: 2,
        penjelasan: "Lafal <strong>وَالْأَنْفُسِ</strong> (<em>wal-anfusi</em>) mengandung hukum bacaan <strong>Ikhfa' Haqiqi</strong> karena terdapat Nun sukun (<strong>نْ</strong>) bertemu dengan huruf <strong>Fa (ف)</strong> yang merupakan salah satu dari 15 huruf ikhfa'. Cara membacanya: disamarkan disertai dengung."
    },
    {
        no: 9,
        topik: "Penerapan Nilai Sabar",
        level: "L2",
        stimulus: "Rian mendapatkan nilai ujian matematika di bawah KKM pada semester ganjil. Ia merasa sedih, namun ia menyadari bahwa mengeluh tidak akan menyelesaikan masalah.",
        pertanyaan: "Bagaimana bentuk penerapan perilaku <strong>sabar</strong> yang produktif dan benar bagi Rian sesuai dengan nilai-nilai akhlak mulia Islam?",
        opsi: [
            "Pasrah menerima nilai tersebut sebagai takdir mutlak dari Allah Swt. tanpa perlu belajar lagi",
            "Mengurung diri di kamar karena malu dan tidak mau masuk sekolah selama beberapa hari",
            "Mengevaluasi letak kesalahannya, mengatur waktu belajar dengan lebih disiplin, dan berkonsultasi kepada guru atau teman yang lebih paham",
            "Berdoa terus-menerus siang dan malam agar nilainya berubah secara ajaib tanpa usaha fisik"
        ],
        kunci: 2,
        penjelasan: "Sabar dalam Islam bukanlah sikap pasrah pasif tanpa usaha (<em>fatalistik</em>). Hakikat sabar adalah <strong>ketahanan mental untuk terus berjuang, ulet, tangguh, dan pantang menyerah</strong> dalam mengarungi kesulitan hidup demi mencapai perbaikan (ikhtiar maksimal)."
    },
    {
        no: 10,
        topik: "Q.S. al-Baqarah/2: 156 — Aplikasi Istirja'",
        level: "L2",
        stimulus: "Aisyah sedang merapikan kamarnya ketika tiba-tiba vas bunga kesayangan ibunya tersenggol dan pecah.",
        pertanyaan: "Berdasarkan petunjuk Q.S. al-Baqarah/2: 156, tindakan pertama yang seharusnya segera dilakukan Aisyah adalah...",
        opsi: [
            "Mengucapkan kalimat istirja' (Inna lillahi wa inna ilaihi raji'un) seketika saat pertama kali menyadari musibah tersebut, dengan hati yang lapang",
            "Bersembunyi dan baru mengucapkan istirja' setelah ibunya memarahi dirinya",
            "Mengucapkan kalimat istirja' hanya jika vas bunga tersebut memiliki harga yang sangat mahal",
            "Menangis histeris terlebih dahulu kemudian menyalahkan kucing peliharaannya sebagai penyebab"
        ],
        kunci: 0,
        penjelasan: "Sunah Rasulullah saw. mengajarkan bahwa nilai kesabaran yang sesungguhnya diukur pada <strong>saat pertama musibah terjadi</strong> (<em>ash-shabru 'inda ash-shadmati al-uula</em>). Mengucapkan istirja' dengan segera mencerminkan kemurnian tauhid dan kepasrahan instan kepada kehendak Allah Swt."
    },
    {
        no: 11,
        topik: "Klasifikasi Jenis Sabar",
        level: "L2",
        stimulus: "1. Fahri tetap menunaikan salat tahajud meskipun udara malam sangat dingin.\n2. Sarah menolak dengan sopan ketika diajak temannya untuk membolos sekolah di jam pelajaran kosong.\n3. Danu tidak membalas ejekan temannya di media sosial demi menghindari pertikaian yang lebih besar.\n4. Sinta ikhlas menerima kenyataan bahwa ia belum berhasil memenangkan lomba pidato nasional.",
        pertanyaan: "Perilaku yang mencerminkan kategori <strong>sabar dalam menjauhi kemaksiatan atau meninggalkan larangan Allah Swt.</strong> ditunjukkan oleh nomor...",
        opsi: [
            "1 dan 3",
            "2 dan 3",
            "2 dan 4",
            "3 dan 4"
        ],
        kunci: 1,
        penjelasan: "Nomor <strong>2</strong> (menolak membolos) dan Nomor <strong>3</strong> (menahan marah dan tidak membalas ejekan) merupakan contoh <strong>sabar dalam menjauhi maksiat / meninggalkan larangan</strong>. Nomor 1 adalah sabar dalam ketaatan/ibadah, sedangkan Nomor 4 adalah sabar dalam menerima takdir/musibah."
    },
    {
        no: 12,
        topik: "Tajwid Mim Mati — Ikhfa' Syafawi",
        level: "L2",
        kutipan: "وَلَنَبْلُوَنَّكُمْ بِشَيْءٍ",
        pertanyaan: "Bagaimana cara menerapkan pelafalan yang benar pada hukum bacaan Mim sukun bertemu huruf Ba pada lafal <strong>وَلَنَبْلُوَنَّكُمْ بِشَيْءٍ</strong> di atas?",
        opsi: [
            "Membaca huruf Mim secara jelas dan terang dengan bibir tertutup rapat tanpa dengung",
            "Meleburkan suara Mim ke dalam huruf Ba sehingga berbunyi bertasydid",
            "Menyuarakan Mim secara samar-samar di bibir disertai dengung (ghunnah) yang ditahan sepanjang 2 harakat",
            "Membaca huruf Mim secara memantul kuat (qalqalah) sebelum melafalkan huruf Ba"
        ],
        kunci: 2,
        penjelasan: "Pertemuan Mim mati (<strong>مْ</strong>) dengan huruf <strong>Ba (ب)</strong> melahirkan hukum <strong>Ikhfa' Syafawi</strong>. Cara membacanya adalah <strong>menyamarkan bunyi Mim di bibir</strong> disertai dengan dengung yang ditahan sepanjang 2 harakat."
    },
    {
        no: 13,
        topik: "Tajwid Nun Mati — Idgham Bilaghunnah",
        level: "L2",
        kutipan: "أُولَٰئِكَ عَلَيْهِمْ صَلَوَاتٌ مِنْ رَبِّهِمْ وَرَحْمَةٌ",
        pertanyaan: "Pada potongan ayat Q.S. al-Baqarah/2: 157 di atas, lafal yang mengandung hukum bacaan <strong>Idgham Bilaghunnah</strong> adalah...",
        opsi: [
            "عَلَيْهِمْ صَلَوَاتٌ",
            "صَلَوَاتٌ مِنْ",
            "مِنْ رَبِّهِمْ",
            "رَبِّهِمْ وَرَحْمَةٌ"
        ],
        opsiArab: true,
        kunci: 2,
        penjelasan: "Lafal <strong>مِنْ رَّبِّهِمْ</strong> (<em>mir-rabbihim</em>) mengandung hukum bacaan <strong>Idgham Bilaghunnah</strong> karena terdapat Nun sukun (<strong>نْ</strong>) bertemu dengan huruf <strong>Ra (ر)</strong>. Cara membacanya: memasukkan suara Nun mati ke dalam huruf Ra secara utuh <strong>tanpa disertai dengung</strong>."
    },
    {
        no: 14,
        topik: "Q.S. al-Baqarah/2: 153 — Sabar dan Salat",
        level: "L2",
        kutipan: "يَا أَيُّهَا الَّذِينَ آمَنُوا اسْتَعِينُوا بِالصَّبْرِ وَالصَّلَاةِ ۚ إِنَّ اللَّهَ مَعَ الصَّابِرِينَ",
        pertanyaan: "Ketika seorang muslim sedang dilanda badai ujian hidup yang sangat berat, penerapan paling tepat dari perintah untuk menjadikan sabar dan salat sebagai penolong adalah...",
        opsi: [
            "Hanya menyibukkan diri dengan salat terus-menerus tanpa mau bekerja mencari jalan keluar",
            "Menenangkan emosi dengan sabar agar akal dapat berpikir jernih, lalu bersujud dalam salat untuk memohon kekuatan dan petunjuk dari Allah Swt.",
            "Menunda ibadah salat sampai seluruh masalah keduniawiannya selesai dipecahkan",
            "Bersabar menahan penderitaan sambil menceritakan keluh kesahnya di berbagai media sosial"
        ],
        kunci: 1,
        penjelasan: "Ayat ini mendidik kita untuk memadukan dua kekuatan: <strong>ketahanan mental-spiritual (sabar)</strong> dan <strong>komunikasi vertikal kepada Allah (salat)</strong>. Sabar menjaga kestabilan psikologis, sedangkan salat menghadirkan ketenangan jiwa dan pertolongan Allah Swt."
    },
    {
        no: 15,
        topik: "Analisis Ujian Kesenangan vs Kesulitan",
        level: "L3",
        stimulus: "Sahabat Umar bin Khattab r.a. pernah menyatakan: \"Kami diuji dengan kesulitan/penderitaan, maka kami mampu bersabar. Namun, ketika kami diuji dengan kesenangan/kemudahan, kami hampir-hampir tidak mampu bersabar.\"",
        pertanyaan: "Bagaimana analisis teologis yang paling logis untuk menjelaskan mengapa ujian berupa kesenangan (<em>fitnah as-sarra'</em>) dirasakan jauh lebih sulit disikapi dengan sabar dibandingkan ujian kesulitan (<em>fitnah ad-darra'</em>)?",
        opsi: [
            "Karena kesulitan fisik membuat manusia secara alami langsung membenci takdir Allah Swt.",
            "Karena kesenangan memiliki sifat melalaikan dan membuai kesadaran manusia, sehingga rawan memicu kesombongan, rasa aman dari siksa, serta melupakan Sang Pemberi Nikmat",
            "Karena pahala bersabar dalam kesenangan jauh lebih kecil dibandingkan pahala bersabar dalam kemiskinan",
            "Karena Allah Swt. tidak pernah mengampuni dosa orang-orang kaya yang rajin bersedekah"
        ],
        kunci: 1,
        penjelasan: "Ujian kesulitan secara natural memaksa manusia untuk mencari sandaran spiritual (ingat kepada Allah). Sebaliknya, <strong>kesenangan dan fasilitas melimpah melahirkan ilusi bahwa manusia mandiri</strong>, sehingga melunturkan ketahanan spiritual dan menjerumuskan pada kesombongan (<em>takabur</em>) dan kelalaian."
    },
    {
        no: 16,
        topik: "Konsep Sabar Produktif — Q.S. Ali 'Imran/3: 200",
        level: "L3",
        stimulus: "Budi: \"Sabar itu ya diam saja menerima keadaan. Kalau kita dizalimi atau dijajah, kita harus terima dengan lapang dada tanpa melawan, karena itu sudah takdir Allah.\"\nIwan: \"Sabar itu bukan berarti pasrah tanpa tindakan. Sabar adalah mengendalikan emosi agar tidak anarki, lalu menyusun strategi yang cerdas dan berjuang sekuat tenaga untuk mengubah keadaan sambil bertawakal.\"",
        pertanyaan: "Berdasarkan analisis Q.S. Ali 'Imran/3: 200 dan kaidah akhlak Islam, bagaimana kesimpulan yang paling tepat mengenai perdebatan tersebut?",
        opsi: [
            "Pendapat Budi benar karena sabar murni adalah kepasrahan total tanpa adanya gerakan fisik melawan takdir",
            "Pendapat Iwan benar karena sabar dalam Islam bersifat dinamis dan optimis; menuntut ketahanan mental untuk terus berjuang menegakkan kebenaran (istiqamah)",
            "Kedua pendapat salah karena sabar dalam Islam hanya berlaku dalam urusan ibadah ritual murni saja",
            "Pendapat Budi benar karena melawan kezaliman termasuk perbuatan yang merusak nilai perdamaian"
        ],
        kunci: 1,
        penjelasan: "Q.S. Ali 'Imran/3: 200 memerintahkan <em>isbiru</em> (bersabarlah), <em>sabiru</em> (kuatkanlah kesabaranmu), dan <em>rabithu</em> (bersiap siagalah). Rangkaian kata kerja aktif ini membuktikan bahwa <strong>sabar dalam Islam adalah konsep perjuangan yang dinamis, tangguh, pantang menyerah, dan penuh aksi nyata</strong>."
    },
    {
        no: 17,
        topik: "Korelasi Puasa dan Sabar — H.R. Al-Baihaqi",
        level: "L3",
        stimulus: "Rasulullah saw. bersabda: \"Puasa itu setengah dari sabar, dan sabar itu setengah dari iman.\" (H.R. Al-Baihaqi).",
        pertanyaan: "Bagaimana analisis korelasi psikologis-teologis yang paling tepat untuk menjelaskan mengapa ibadah puasa dinilai sebagai setengah dari madrasah kesabaran?",
        opsi: [
            "Karena puasa melatih fisik manusia untuk terbiasa menahan rasa lapar yang ekstrem agar bisa menghemat pengeluaran belanja",
            "Karena saat berpuasa, seseorang secara sadar melatih ketahanan jiwanya untuk menahan diri dari hal mubah (makan, minum, syahwat) semata-mata demi menaati perintah Allah Swt., yang merupakan latihan dasar pengendalian diri",
            "Karena puasa secara otomatis menghapuskan seluruh nafsu angkara murka manusia selamanya",
            "Karena lapar fisik merupakan satu-satunya cara manusia untuk meraih derajat kewalian di dunia"
        ],
        kunci: 1,
        penjelasan: "Inti dari sabar adalah kemampuan <strong>mengendalikan diri (<em>self-regulation</em>)</strong> dan menahan hawa nafsu. Ibadah puasa adalah sarana latihan paling efektif untuk mengontrol dorongan biologis dasar manusia demi kepatuhan rohani. Kemampuan ini merupakan fondasi utama lahirnya kekuatan sabar dalam menghadapi segala ujian kehidupan."
    },
    {
        no: 18,
        topik: "Diagnosis Tajwid Mim Mati",
        level: "L3",
        stimulus: "Seorang siswa membaca Q.S. al-Baqarah/2: 155. Ketika sampai pada lafal 'walanabluwannakum bisyai-in', ia membacanya dengan menekan huruf Mim mati secara jelas dan bersih tanpa dengung. Sebaliknya, saat membaca 'alaihim shalawatun' (عَلَيْهِمْ صَلَوَاتٌ), ia membacanya dengan menyamarkan suara Mim mati disertai dengung panjang.",
        pertanyaan: "Berdasarkan kaidah hukum Mim mati, bagaimana diagnosis ilmiah yang tepat mengenai kekeliruan pembacaan tajwid siswa tersebut?",
        opsi: [
            "Siswa tersebut sudah membaca dengan benar karena seluruh Mim mati yang bertemu huruf hidup wajib dibaca samar",
            "Siswa tersebut mengalami kesalahan fatal karena huruf Shod pada shalawatun memaksa Mim mati dibaca Iqlab",
            "Siswa tersebut tertukar dalam menerapkan hukum; 'walanabluwannakum bisyai-in' seharusnya dibaca samar/mendengung (Ikhfa' Syafawi), sedangkan 'alaihim shalawatun' wajib dibaca jelas di bibir (Izh-har Syafawi)",
            "Pembacaan siswa tersebut dinilai mubah karena perbedaan dialek lokal memperbolehkan pelesapan suara Mim mati"
        ],
        kunci: 2,
        penjelasan: "Siswa mengalami kekeliruan penempatan hukum Mim mati: <br>• <strong>وَلَنَبْلُوَنَّكُمْ بِشَيْءٍ</strong> → <strong>Ikhfa' Syafawi</strong> (Mim sukun + Ba): wajib samar dan berdengung.<br>• <strong>عَلَيْهِمْ صَلَوَاتٌ</strong> → <strong>Izh-har Syafawi</strong> (Mim sukun + Shod): wajib jelas, terang di bibir, tanpa dengung."
    },
    {
        no: 19,
        topik: "Fungsi Terapeutik Kalimat Istirja'",
        level: "L3",
        stimulus: "Dalam ilmu psikologi, kehilangan sesuatu yang dicintai (harta, jabatan, atau orang terdekat) dapat memicu trauma psikologis berat berupa penolakan, kemarahan, hingga depresi akut akibat hilangnya poros pegangan hidup.",
        pertanyaan: "Ditinjau dari kesehatan mental spiritual, bagaimana analisis fungsi terapeutik kalimat istirja' (<em>Inna lillahi wa inna ilaihi raji'un</em>) dalam menetralisir dampak negatif dari trauma kehilangan tersebut?",
        opsi: [
            "Membantu manusia untuk melupakan seluruh memori indah bersama orang yang dicintai secara instan",
            "Membongkar cara pandang kepemilikan manusia; dengan menyadari bahwa diri dan segala titipan adalah milik mutlak Allah Swt., jiwa dibebaskan dari beban kepemilikan semu sehingga melahirkan kedamaian spiritual",
            "Menjamin bahwa barang berharga yang hilang akan digantikan dengan barang yang jauh lebih mahal secara otomatis",
            "Meminimalkan rasa empati sosial masyarakat terhadap penderitaan yang dialami korban musibah"
        ],
        kunci: 1,
        penjelasan: "Trauma kehilangan bersumber dari keyakinan keliru bahwa kita adalah pemilik mutlak atas apa yang kita miliki. Kalimat istirja' <strong>mendekonstruksi pemikiran egois</strong> tersebut dengan menegaskan status kita sebagai hamba titipan. Kesadaran tauhid ini meredam keputusasaan, melahirkan kepasrahan yang damai, serta mempercepat proses pemulihan kesehatan mental."
    },
    {
        no: 20,
        topik: "Sintesis Integratif Ketahanan Mental Islam",
        level: "L3",
        stimulus: "Q.S. al-Baqarah/2: 155-156 mengajarkan dimensi penerimaan takdir (Acceptance) dan reduksi ego — sasaran: pengendalian internal saat ditimpa musibah.\nQ.S. Ali 'Imran/3: 200 mengajarkan konsistensi perjuangan (Steadfastness) dan kolaborasi — sasaran: penguatan eksternal dalam aktivitas kehidupan.",
        pertanyaan: "Berdasarkan sintesis perbandingan kedua ayat di atas, bagaimana karakteristik mekanisme pertahanan jiwa (<em>coping mechanism</em>) yang utuh dan seimbang yang diajarkan Islam?",
        opsi: [
            "Islam hanya menitikberatkan pada aspek penerimaan musibah secara pasif tanpa memerlukan kolaborasi perjuangan sosial",
            "Ketahanan mental dalam Islam hanya bisa dicapai apabila manusia terbebas dari seluruh jenis ujian",
            "Islam mengintegrasikan ketahanan mental melalui dua pilar yang seimbang: ketabahan batin dalam menerima takdir Allah (al-Baqarah), dan keuletan fisik yang konsisten untuk terus berjuang di masyarakat (Ali 'Imran)",
            "Mekanisme pertahanan jiwa terbaik adalah mengisolasi diri dari interaksi sosial luar agar iman tetap terjaga"
        ],
        kunci: 2,
        penjelasan: "Kolaborasi nilai kedua ayat melahirkan konsep <strong>resiliensi</strong> yang sempurna: sisi internal dijaga melalui kepasrahan kalimat istirja' saat ditimpa musibah (Q.S. al-Baqarah/2: 155-156), sementara sisi eksternal didorong untuk terus aktif, ulet, siaga, dan bersinergi dalam ketaatan hidup (Q.S. Ali 'Imran/3: 200)."
    }
];

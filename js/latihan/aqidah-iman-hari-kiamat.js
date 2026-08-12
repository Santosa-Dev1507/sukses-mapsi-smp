// ═══════════════════════════════════════════════════════════
// DATA SOAL LATIHAN HARIAN
// Bab Aqidah — Iman kepada Hari Kiamat
// 10 Soal PG Standar Kompetensi Tinggi (L1, L2, L3)
// Dalil: Q.S. al-Hajj/22:7, Q.S. an-Nisa'/4:78, Q.S. al-Anbiya'/21:47
//        Q.S. az-Zalzalah:1-2
// ═══════════════════════════════════════════════════════════
var latihanData = [
    {
        no: 1,
        topik: "Q.S. al-Hajj/22: 7",
        level: "L1",
        kutipan: "وَأَنَّ السَّاعَةَ أَتِيَةً لَّا رَيْبَ فِيْهَا وَأَنَّ اللَّهَ يَبْعَثُ مَنْ فِي الْقُبُورِ",
        kutipanTerjemah: '"Sesungguhnya kiamat itu pasti datang, tidak ada keraguan padanya dan sesungguhnya Allah akan membangkitkan siapa pun yang di dalam kubur." (Q.S. al-Hajj/22: 7)',
        pertanyaan: "Berdasarkan potongan ayat di atas, dua ketetapan mutlak yang dijamin oleh Allah Swt. tanpa keraguan sedikit pun (<em>lā raiba fīhā</em>) adalah...",
        opsi: [
            "Kehancuran bumi secara perlahan dan ditutupnya pintu taubat bagi manusia",
            "Pasti datangnya hari kiamat dan dibangkitkannya seluruh manusia dari dalam kubur",
            "Turunnya para malaikat ke bumi dan berpisahnya ruh dari jasad manusia",
            "Berkumpulnya manusia di Padang Mahsyar dan ditimbangnya amal perbuatan"
        ],
        kunci: 1,
        penjelasan: "Sesuai kandungan Q.S. al-Hajj/22: 7, Allah Swt. memberikan garansi mutlak mengenai dua hal: kedatangan hari kiamat (<em>anna as-sā'ata ātiyatun</em>) serta hari kebangkitan manusia dari alam kubur (<em>wa annallāha yab'atsu man fī al-qubūr</em>)."
    },
    {
        no: 2,
        topik: "Kiamat Sugra — Q.S. an-Nisa'/4: 78",
        level: "L1",
        kutipan: "أَيْنَمَا تَكُونُوا يُدْرِكْكُمُ الْمَوْتُ وَلَوْ كُنْتُمْ فِي بُرُوْجٍ مُّشَيَّدَةٍ",
        kutipanTerjemah: '"Di mana pun kamu berada, kematian akan mendapatkan kamu, kendatipun kamu berada di dalam benteng yang tinggi dan kukuh..." (Q.S. an-Nisa\'/4: 78)',
        pertanyaan: "Berdasarkan potongan ayat di atas, contoh peristiwa kehidupan nyata yang dikategorikan sebagai bagian dari kiamat sugra adalah...",
        opsi: [
            "Peristiwa kematian yang menimpa setiap makhluk yang bernyawa",
            "Gunung meletus yang menghancurkan seluruh ekosistem pulau",
            "Langit terbelah dan bintang-bintang jatuh berserakan",
            "Bumi mengeluarkan seluruh beban berat yang dikandungnya"
        ],
        kunci: 0,
        penjelasan: "Para ulama mengelompokkan kematian makhluk individu sebagai salah satu bentuk kiamat sugra (kiamat kecil). Q.S. an-Nisa'/4: 78 secara eksplisit menegaskan keniscayaan datangnya kematian (<em>al-maut</em>) kepada setiap makhluk di mana pun mereka berada."
    },
    {
        no: 3,
        topik: "Rangkaian Peristiwa Akhirat",
        level: "L1",
        stimulus: "Pasangkan nama hari akhir berikut dengan peristiwa yang terjadi:\n1. Yaumul Ba'ats — 2. Yaumul Hisab — 3. Yaumul Mahsyar — 4. Yaumul Mizan\na. Ditimbangnya amal perbuatan manusia\nb. Hari berkumpulnya seluruh manusia setelah dibangkitkan\nc. Hari perhitungan amal perbuatan manusia\nd. Hari dibangkitkannya manusia dari alam kubur",
        pertanyaan: "Pasangan nama hari akhir dan peristiwa yang tepat ditunjukkan oleh...",
        opsi: [
            "1-d dan 2-b",
            "1-d dan 3-c",
            "2-c dan 4-a",
            "3-b dan 4-a"
        ],
        kunci: 2,
        penjelasan: "<strong>Yaumul Hisab</strong> (2) → perhitungan amal (c). <strong>Yaumul Mizan</strong> (4) → penimbangan amal (a). Yaumul Ba'ats (1) → kebangkitan dari kubur (d). Yaumul Mahsyar (3) → berkumpulnya manusia (b)."
    },
    {
        no: 4,
        topik: "Nama Lain Hari Kiamat",
        level: "L1",
        stimulus: "Di dalam Al-Qur'an, banyak disebutkan istilah atau nama lain bagi hari kiamat yang menunjukkan kedahsyatannya.",
        pertanyaan: "Salah satu nama lain hari kiamat adalah <strong>at-Tammah</strong>. Makna tersurat dari nama tersebut berdasarkan penjelasan para ulama adalah...",
        opsi: [
            "Hari yang pasti kejadiannya dan tidak ada keraguan padanya",
            "Hari yang menggetarkan hati dan membuat mata terbelalak ketakutan",
            "Bencana atau kehancuran dahsyat yang bersifat sangat umum/menyeluruh",
            "Hari penuh penyesalan atas segala kelalaian selama di dunia"
        ],
        kunci: 2,
        penjelasan: "Berdasarkan buku teks PAI, istilah <em>at-Tammah</em> didefinisikan sebagai bencana atau kehancuran yang sangat umum dan menyeluruh pada hari kiamat."
    },
    {
        no: 5,
        topik: "Penerapan Mawas Diri",
        level: "L2",
        stimulus: "1. Farhan menyisihkan uang jajan untuk ditabung demi kebutuhan kuliah.\n2. Ira mengelola keuangan kas kelas dengan jujur dan transparan karena menyadari jabatannya sebagai amanah.\n3. Rian menyempatkan diri salat Duha di mushola saat jam istirahat.\n4. Syifa rajin berolahraga dan menjaga pola makan agar selalu sehat.\n5. Falah selalu berpikir ulang sebelum berbicara agar ucapannya tidak menyakiti hati orang lain.",
        pertanyaan: "Di antara tindakan di atas, perilaku yang mencerminkan hubungan langsung dengan <strong>keimanan kepada hari akhir (sikap mawas diri dan berintegritas)</strong> ditunjukkan oleh nomor...",
        opsi: [
            "1, 2, dan 3",
            "1, 3, dan 4",
            "2, 3, dan 5",
            "3, 4, dan 5"
        ],
        kunci: 2,
        penjelasan: "Nomor <strong>2</strong> (amanah mengelola uang), <strong>3</strong> (beribadah salat Duha), dan <strong>5</strong> (mawas diri menjaga lisan) merupakan bentuk nyata kesadaran bahwa amal perbuatan akan dipertanggungjawabkan di akhirat. Nomor 1 dan 4 adalah perilaku positif untuk tujuan keduniawian."
    },
    {
        no: 6,
        topik: "Sikap Menghadapi Kiamat Sugra",
        level: "L2",
        stimulus: "Dalam beberapa waktu terakhir, terjadi berbagai bencana alam seperti gempa bumi, banjir bandang, tanah longsor, hingga pandemi di berbagai belahan dunia yang menimbulkan banyak korban jiwa.",
        pertanyaan: "Berdasarkan materi keimanan pada hari akhir, sikap mental terbaik yang seharusnya ditunjukkan seorang muslim saat menghadapi berbagai musibah (kiamat sugra) tersebut adalah...",
        opsi: [
            "Menyesali takdir kehidupan dan memprotes ketentuan Allah Swt. yang dirasa berat",
            "Membangun bungker bawah tanah agar terhindar dari takdir kematian",
            "Bersikap sabar, mawas diri, dan menyadari bahwa segala sesuatu adalah milik Allah Swt. serta akan kembali kepada-Nya",
            "Mengabaikan musibah karena menganggap kiamat kubra masih milyaran tahun lagi"
        ],
        kunci: 2,
        penjelasan: "Ketika menghadapi musibah kiamat sugra, sikap terbaik adalah bersabar, mengambil hikmah, dan menguatkan keyakinan bahwa segalanya milik Allah Swt. (<em>istirja'</em>). Peristiwa ini harus dijadikan pengingat untuk mawas diri dan bersegera mengumpulkan bekal amal saleh."
    },
    {
        no: 7,
        topik: "Integrasi Perspektif Sains — Q.S. az-Zalzalah: 1-2",
        level: "L2",
        stimulus: "Menurut ahli geologi, di dalam perut bumi terdapat gas panas yang berkembang dan menekan ke arah luar. Lama-kelamaan tekanan dari luar semakin kuat, mengakibatkan gas bumi meledak dahsyat dan mengeluarkan isi bumi.",
        pertanyaan: "Penjelasan ilmiah ahli geologi mengenai mekanisme kehancuran bumi di atas selaras dengan gambaran fisik kiamat yang diwahyukan Allah Swt. di dalam...",
        opsi: [
            "Q.S. al-Qari'ah: 4-5 (gunung-gunung dihambur-hamburkan bagai bulu)",
            "Q.S. at-Takwir: 1-6 (matahari digulung dan bintang-bintang berjatuhan)",
            "Q.S. al-Muzzammil: 14 (bumi dan gunung-gunung berguncang dahsyat)",
            "Q.S. az-Zalzalah: 1-2 (bumi diguncangkan dan mengeluarkan beban berat perutnya)"
        ],
        kunci: 3,
        penjelasan: "Penjelasan geologis tentang meledaknya gas bumi dan dikeluarkannya material perut bumi sangat selaras dengan Q.S. az-Zalzalah: 1-2: <em>\"Apabila bumi diguncangkan dengan guncangan yang dahsyat, dan bumi mengeluarkan beban-beban berat yang dikandungnya.\"</em>"
    },
    {
        no: 8,
        topik: "Korelasi Teologis Iman kepada Allah & Hari Akhir",
        level: "L3",
        stimulus: "Di dalam Al-Qur'an, ayat-ayat tentang iman kepada hari akhir sangat sering dihubungkan langsung dengan perintah iman kepada Allah Swt. Para ulama menegaskan bahwa apabila seseorang tidak mempercayai hari akhir, keimanannya kepada Allah Swt. dinyatakan batal.",
        pertanyaan: "Bagaimana analisis teologis yang paling logis untuk menjelaskan mengapa pengingkaran terhadap hari akhir secara otomatis membatalkan status keimanan seseorang kepada Allah Swt.?",
        opsi: [
            "Karena hari kiamat adalah hari di mana Allah Swt. akan memindahkan kekuasaan-Nya kepada para malaikat",
            "Karena mengingkari hari akhir sama saja dengan meragukan keadilan, kekuasaan, dan kebenaran janji wahyu yang ditetapkan oleh Allah Swt.",
            "Karena amal ibadah manusia di dunia hanya akan dicatat malaikat jika manusia memercayai hari akhir",
            "Karena Allah Swt. tidak akan mengampuni dosa syirik orang-orang yang gemar berbuat maksiat di akhir zaman"
        ],
        kunci: 1,
        penjelasan: "Menolak hari akhir berarti menafikan keadilan mutlak Allah Swt., meragukan kemampuan-Nya membangkitkan makhluk, serta mendustakan kebenaran ayat-ayat Al-Qur'an. Oleh karena itu, keraguan pada hari akhir merusak asas ketauhidan dan membatalkan keimanan kepada Allah Swt."
    },
    {
        no: 9,
        topik: "Studi Kasus Pola Pikir Remaja",
        level: "L3",
        stimulus: "Budi adalah siswa kelas 9 berusia 14 tahun. Ia merasa hidupnya masih sangat panjang karena fisiknya sehat. Oleh karena itu, ia ingin menghabiskan masa mudanya bebas melakukan apa saja tanpa terikat aturan agama.",
        pertanyaan: "Bagaimana evaluasi terhadap pola pikir Budi jika dikaitkan dengan esensi beriman kepada hari akhir?",
        opsi: [
            "Sikap Budi dapat dimaklumi karena aturan syariat agama hanya wajib dijalankan secara ketat oleh orang yang sudah lanjut usia",
            "Pola pikir Budi benar karena masa muda adalah kesempatan mengumpulkan kesenangan sebelum bertaubat di hari tua",
            "Pola pikir Budi keliru karena kiamat sugra berupa kematian dapat menjemput kapan saja tanpa mengenal usia, sehingga menuntut mawas diri sejak dini",
            "Perilaku Budi salah karena anak 14 tahun seharusnya fokus mengumpulkan harta agar bisa membayar zakat yang banyak"
        ],
        kunci: 2,
        penjelasan: "Hakikat kiamat sugra berupa kematian tidak memandang batas usia, kesehatan fisik, maupun jabatan. Beriman kepada hari akhir menuntut setiap muslim — termasuk remaja — untuk senantiasa mawas diri, hati-hati bertindak, dan disiplin mengumpulkan bekal amal saleh sejak dini tanpa menunda-nunda."
    },
    {
        no: 10,
        topik: "Keadilan Yaumul Mizan — Q.S. al-Anbiya'/21: 47",
        level: "L3",
        kutipan: "وَنَضَعُ الْمَوَازِيْنَ الْقِسْطَ لِيَوْمِ الْقِيمَةِ فَلَا تُظْلَمُ نَفْسٌ شَيْئًا وَإِنْ كَانَ مِثْقَالَ حَبَّةٍ مِنْ خَرْدَلٍ أَتَيْنَا بِهَا وَكَفَى بِنَا حَسِبِيْنَ",
        kutipanTerjemah: '"Dan Kami akan memasang timbangan yang tepat pada hari Kiamat, maka tidak seorang pun dirugikan walau sedikit; sekalipun hanya seberat biji sawi, pasti Kami mendatangkannya (pahala). Dan cukuplah Kami yang membuat perhitungan." (Q.S. al-Anbiya\'/21: 47)',
        pertanyaan: "Berdasarkan potongan ayat di atas, bagaimana karakteristik sistem pengadilan Allah Swt. pada hari penimbangan amal (<em>Yaumul Mizan</em>)?",
        opsi: [
            "Pengadilan berjalan secara kolektif di mana dosa suatu kaum dapat ditanggung bersama oleh para pemimpinnya",
            "Pengadilan berjalan dengan tingkat keadilan absolut dan sangat presisi; tidak ada jiwa yang dirugikan, dan amalan sekecil apa pun pasti akan dihitung",
            "Hasil akhir penimbangan amal sepenuhnya dipengaruhi oleh tebusan harta benda yang ditinggalkan di dunia",
            "Pengadilan hanya menimbang dosa-dosa besar, sementara kesalahan kecil dihapuskan tanpa proses hisab"
        ],
        kunci: 1,
        penjelasan: "Q.S. al-Anbiya'/21: 47 menegaskan bahwa timbangan hari kiamat (<em>al-mawāzīna al-qisṭa</em>) tegak di atas keadilan mutlak. Pengadilan Allah Swt. sangat teliti — bahkan amalan sekecil biji sawi (<em>miṡqāla ḥabbatin min khardalin</em>) pun akan dihadirkan dan diperhitungkan secara akurat."
    }
];

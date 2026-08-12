// ═══════════════════════════════════════════════════════════
// DATA SOAL LATIHAN HARIAN
// Bab Akhlak — Husnuzan (Berbaik Sangka)
// 10 Soal PG Standar Kompetensi Tinggi (L1, L2, L3)
// Dalil: Q.S. al-Hujurat/49:12, Q.S. al-Hujurat/49:6
// ═══════════════════════════════════════════════════════════
const latihanData = [
    {
        no: 1,
        topik: "Q.S. al-Hujurat/49: 12",
        level: "L1",
        kutipan: "يٰٓاَيُّهَا الَّذِيْنَ اٰمَنُوا اجْتَنِبُوْا كَثِيْرًا مِّنَ الظَّنِّۖ اِنَّ بَعْضَ الظَّنِّ اِثْمٌ",
        kutipanTerjemah: '"Wahai orang-orang yang beriman! Jauhilah banyak dari prasangka, sesungguhnya sebagian prasangka itu dosa..." (Q.S. al-Hujurat/49: 12)',
        pertanyaan: "Berdasarkan potongan ayat di atas, alasan teologis mengapa Allah Swt. melarang orang-orang beriman terlalu banyak mengumbar prasangka (<em>az-zhann</em>) adalah...",
        opsi: [
            "Karena prasangka buruk dapat melemahkan kekuatan pertahanan fisik militer umat Islam",
            "Karena sesungguhnya sebagian dari prasangka-prasangka tersebut berbuah dosa (iṡmun)",
            "Karena mengumbar prasangka dapat menghalangi datangnya rezeki materi di dunia",
            "Karena prasangka buruk hanya boleh ditujukan kepada kaum munafik secara terang-terangan"
        ],
        kunci: 1,
        penjelasan: "Q.S. al-Hujurat/49: 12 menegaskan secara tersurat bahwa <em>\"inna ba'ḍa adz-dhanni iṡmun\"</em> — <strong>\"sesungguhnya sebagian dari prasangka itu adalah dosa\"</strong>. Oleh karena itu, menjauhi prasangka buruk (<em>suuzan</em>) hukumnya wajib demi menjaga kebersihan hati."
    },
    {
        no: 2,
        topik: "Husnuzan kepada Allah Swt.",
        level: "L1",
        stimulus: "Sikap berbaik sangka (husnuzan) tidak hanya ditujukan kepada sesama manusia, melainkan juga harus tertanam kuat di hati hamba kepada segala ketetapan takdir Allah Swt.",
        pertanyaan: "Manakah di antara pernyataan-pernyataan berikut yang <strong>TIDAK</strong> mencerminkan sikap <em>husnuzan</em> (berbaik sangka) kepada Allah Swt. dalam menghadapi ujian kehidupan?",
        opsi: [
            "Alhamdulillah, saya masih diberikan keselamatan dari kecelakaan besar ini",
            "Allah Swt. pasti memiliki rencana terbaik dan tidak sia-sia menciptakan sesuatu",
            "Untunglah dia masih bertahan hidup meskipun fisiknya mengalami cacat akibat musibah",
            "Mengapa hanya saya saja di dunia ini yang ditakdirkan mendapatkan nasib malang begini?"
        ],
        kunci: 3,
        penjelasan: "Ungkapan pilihan D mencerminkan keputusasaan dan buruk sangka (<em>suuzan</em>) terhadap keadilan serta kasih sayang Allah Swt. Sedangkan pilihan A, B, dan C adalah bentuk-bentuk konkret ungkapan hamba yang senantiasa <em>husnuzan</em> kepada Allah Swt."
    },
    {
        no: 3,
        topik: "Korelasi Husnuzan & Tabayun",
        level: "L1",
        stimulus: "Berprasangka baik kepada orang lain menumbuhkan keharmonisan dalam masyarakat. Sebaliknya, prasangka buruk memicu perpecahan, sehingga Islam menganjurkan proses klarifikasi (tabayun).",
        pertanyaan: "Apa korelasi mendasar antara sikap berbaik sangka (<em>husnuzan</em>) dengan kewajiban melakukan klarifikasi (<em>tabayun</em>) ketika menerima kabar miring tentang sesama?",
        opsi: [
            "Berbaik sangka berarti langsung menerima mentah-mentah semua kabar buruk tanpa perlu pembuktian",
            "Tabayun merupakan metode konkret untuk membuktikan dan menjaga kebenaran berbaik sangka agar terhindar dari fitnah",
            "Tabayun bertentangan dengan husnuzan karena tabayun menunjukkan kita tidak percaya ucapan teman",
            "Berbaik sangka murni hanya ditujukan bagi keluarga dekat, sedangkan tabayun dilakukan khusus bagi orang asing"
        ],
        kunci: 1,
        penjelasan: "Tabayun secara bahasa adalah mencari kejelasan. Secara keagamaan, tabayun adalah instrumen praktis untuk memelihara kedamaian dengan memverifikasi kebenaran informasi, sehingga mencegah timbulnya buruk sangka (<em>suuzan</em>) yang tak berdasar."
    },
    {
        no: 4,
        topik: "Q.S. al-Hujurat/49: 6 — Tabayun",
        level: "L1",
        kutipan: "يٰٓايَّهَا الَّذِيْنَ اٰمَنُوْٓا اِنْ جَاۤءَكُمْ فَاسِقٌۢ بِنَبَاٍ فَتَبَيَّنُوْٓا اَنْ تُصِيْبُوْا قَوْمًاۢ بِجَهَالَةٍ فَتُصْبِحُوْا عَلٰى مَا فَعَلْتُمْ نٰدِمِيْنَ",
        kutipanTerjemah: '"Wahai orang-orang yang beriman! Jika seseorang yang fasik datang kepadamu membawa suatu berita, maka telitilah kebenarannya, agar kamu tidak mencelakakan suatu kaum karena kebodohan (kecerobohan), yang akhirnya kamu menyesali perbuatanmu itu." (Q.S. al-Hujurat/49: 6)',
        pertanyaan: "Berdasarkan ayat di atas, dampak buruk apa yang menimpa seseorang apabila malas meneliti kebenaran berita (<em>tabayun</em>) dari orang fasik?",
        opsi: [
            "Mereka akan kehilangan hak kekuasaan politik atas wilayah tempat tinggalnya",
            "Mereka dapat mencelakakan orang/kaum lain secara tidak adil akibat kecerobohannya, yang berujung pada penyesalan yang mendalam",
            "Terhapusnya seluruh pahala amalan wajib salat lima waktu secara otomatis",
            "Jatuhnya kedudukan mereka menjadi golongan orang-orang kafir yang sebenar-benarnya"
        ],
        kunci: 1,
        penjelasan: "Q.S. al-Hujurat/49: 6 menyatakan bahwa mengabaikan tabayun memicu kecerobohan (<em>bi jahālatin</em>) yang mencelakakan pihak lain (<em>an tuṣībū qaumam</em>), sehingga melahirkan penyesalan tak berguna di kemudian hari (<em>fatūṣbiḥū 'alā mā fa'altum nādimīn</em>)."
    },
    {
        no: 5,
        topik: "Aplikasi Husnuzan — Studi Kasus Sekolah",
        level: "L2",
        stimulus: "Aksa melihat sahabatnya, Ransi, sedang berada di ruang bimbingan konseling (BK). Aksa tiba-tiba merasa curiga bahwa Ransi sedang membisikkan laporan buruk tentang pelanggaran disiplin yang pernah dilakukan Aksa kepada guru BK.",
        pertanyaan: "Sebagai wujud nyata penerapan sikap <strong>husnuzan</strong> di lingkungan sekolah, tindakan terbaik yang seharusnya dilakukan oleh Aksa adalah...",
        opsi: [
            "Menjauhi Ransi dan segera memposting sindiran negatif tentang persahabatan di media sosialnya",
            "Melaporkan balik keburukan Ransi kepada guru BK sebagai bentuk pertahanan diri",
            "Menepis rasa curiganya, menyapa Ransi dengan ramah seusai keluar ruangan, dan bertanya dengan sopan tanpa nada menuduh untuk mengklarifikasi",
            "Membiarkan kecurigaannya berkembang karena curiga kepada teman adalah hal yang wajar demi kehati-hatian"
        ],
        kunci: 2,
        penjelasan: "Sikap husnuzan menuntut Aksa menyaring pikiran negatifnya. Tindakan mengonfirmasi secara langsung dengan tutur kata yang sopan (<em>tabayun</em>) adalah langkah terbaik untuk meluruskan kesalahpahaman dan merawat keharmonisan persahabatan."
    },
    {
        no: 6,
        topik: "Penerapan Tabayun di Era Digital",
        level: "L2",
        stimulus: "Di dalam grup WhatsApp kelas, tiba-tiba dikirimkan tangkapan layar berisi chat yang menuduh ketua kelas menggunakan uang kas secara tidak jujur untuk kepentingan pribadinya.",
        pertanyaan: "Sebagai muslim yang kritis di era digital, bagaimana menerapkan metode <strong>tabayun</strong> dalam menyikapi berita tersebut?",
        opsi: [
            "Segera menekan tombol forward/share agar teman sekelas lainnya cepat mengetahuinya",
            "Menahan diri untuk tidak menyebarkannya, tidak langsung menghakimi, dan mengonfirmasikan kebenaran bukti laporan kas kepada bendahara atau wali kelas terlebih dahulu",
            "Langsung mengeluarkan ketua kelas dari grup WhatsApp sebagai hukuman moral",
            "Menghapus tangkapan layar dan pura-pura tidak tahu karena takut ikut campur"
        ],
        kunci: 1,
        penjelasan: "Di era digital, tabayun dilakukan dengan memastikan kredibilitas sumber dan kebenaran isi berita sebelum membagikannya. Menahan diri untuk tidak langsung membagikan gosip tak bersumber (<em>hoaks</em>) adalah cerminan kematangan akhlak berbaik sangka."
    },
    {
        no: 7,
        topik: "Manfaat Sosial Husnuzan",
        level: "L2",
        stimulus: "1. Mempererat tali persaudaraan sehingga kerukunan antarsesama dapat terjaga.\n2. Menimbulkan rasa aman, kedamaian, dan ketenteraman di lingkungan masyarakat.\n3. Menumbuhkan kewaspadaan berlebihan sehingga tidak mudah berteman dengan orang baru.\n4. Menghindari timbulnya salah paham dan konflik di antara sesama warga negara.",
        pertanyaan: "Berdasarkan poin-poin di atas, manfaat sosial yang didapatkan apabila masyarakat membiasakan sikap <em>husnuzan</em> ditunjukkan oleh nomor...",
        opsi: [
            "1, 2, dan 3",
            "1, 2, dan 4",
            "1, 3, dan 4",
            "2, 3, dan 4"
        ],
        kunci: 1,
        penjelasan: "Berbaik sangka melahirkan manfaat positif berupa eratnya kerukunan (1), kedamaian sosial (2), dan terhindarnya masyarakat dari konflik (4). Sedangkan nomor 3 adalah dampak buruk dari sikap curiga (<em>suuzan</em>), bukan manfaat husnuzan."
    },
    {
        no: 8,
        topik: "Tajwid — Q.S. al-Hujurat/49: 12",
        level: "L2",
        kutipan: "اِنَّ بَعْضَ الظَّنِّ اِثْمٌ",
        pertanyaan: "Pada potongan ayat di atas, hukum tajwid yang melekat pada lafal <strong>الظَّنِّ</strong> secara berurutan adalah...",
        opsi: [
            "Alif Lam Qamariyah dan Izh-har Syafawi",
            "Alif Lam Syamsiyah dan Ghunnah Musyaddadah",
            "Alif Lam Syamsiyah dan Ikhfa' Haqiqi",
            "Alif Lam Qamariyah dan Idgham Bighunnah"
        ],
        kunci: 1,
        penjelasan: "<strong>الظَّنِّ</strong> mengandung dua hukum sekaligus:<br>• <strong>Alif Lam Syamsiyah</strong>: Alif Lam bertemu huruf Zha (ظ) — huruf syamsiyah, dibaca melebur.<br>• <strong>Ghunnah Musyaddadah</strong>: Nun bertasydid (نّ) wajib dibaca mendengung kuat 2 harakat."
    },
    {
        no: 9,
        topik: "Rantai Sebab-Akibat Suuzan → Tajassus → Gibah",
        level: "L3",
        stimulus: "Di dalam Q.S. al-Hujurat/49: 12, Allah Swt. meletakkan tiga larangan secara berdampingan: larangan berprasangka buruk, larangan mencari-cari kesalahan orang lain (tajassus), dan larangan menggunjing (gibah).",
        pertanyaan: "Bagaimana analisis runtut mengenai korelasi psikologis-sebab akibat di antara ketiga perbuatan tercela tersebut dalam kehidupan bermasyarakat?",
        opsi: [
            "Menggunjing (gibah) adalah tahap awal yang memicu rasa curiga, kemudian memaksa orang memaafkan kesalahan",
            "Buruk sangka (suuzan) adalah akar masalah; rasa curiga di hati akan mendorong seseorang memata-matai (tajassus) demi mencari bukti kesalahan, yang pada akhirnya berujung pada pembicaraan aib (gibah)",
            "Mencari kesalahan (tajassus) diperbolehkan dalam Islam sebagai jalan mubah untuk memvalidasi kebenaran dari gosip yang beredar",
            "Ketiga perbuatan tersebut berdiri sendiri secara terpisah tanpa ada kaitan psikologis maupun sosiologis antarsesama"
        ],
        kunci: 1,
        penjelasan: "Ketiga larangan disusun berurutan karena memiliki rantai psikologis yang kuat: <strong>suuzan</strong> (curiga) → menggerakkan seseorang aktif <strong>tajassus</strong> (memata-matai) demi mencari pembenaran → begitu merasa menemukan \"bukti\", ia menyebarkannya lewat <strong>gibah</strong> (menggunjing). Membendung prasangka buruk adalah kunci utama menghentikan kemaksiatan lisan."
    },
    {
        no: 10,
        topik: "Analisis Teologis Husnuzan atas Kegagalan",
        level: "L3",
        stimulus: "\"Kita kadang-kadang merasa bahwa sesuatu itu terbaik bagi kita, lalu menyepelekan hal-hal lain yang menurut kita tidak baik. Padahal sebagai manusia, pengetahuan kita sangat terbatas. Hanya Allah-lah Yang Maha Mengetahui tentang apa yang terbaik dan yang tidak untuk kita.\"",
        pertanyaan: "Berdasarkan stimulus di atas, bagaimana analisis teologis yang paling akurat mengenai hakikat sikap <strong>husnuzan kepada Allah Swt.</strong> ketika ikhtiar duniawi kita berujung pada kegagalan?",
        opsi: [
            "Menuntut kita meyakini bahwa Allah Swt. bersikap tidak adil sehingga kita berhak mengabaikan ibadah wajib",
            "Mendewasakan jiwa untuk berpasrah (taslim), meyakini bahwa di balik kegagalan pasti ada skenario kebaikan dari Allah yang belum kita ketahui, sehingga melahirkan ketenangan jiwa",
            "Berpikir optimis secara instan bahwa Allah Swt. wajib menggantikan kegagalan dengan materi berlipat ganda keesokan harinya",
            "Memaklumi bahwa manusia hanya wajib berprasangka baik saat usahanya sukses, dan mubah berprasangka buruk saat usahanya gagal"
        ],
        kunci: 1,
        penjelasan: "Hakikat terdalam <em>husnuzan</em> kepada Allah Swt. didasari kesadaran akan keterbatasan ilmu manusia dibandingkan keluasan ilmu Allah Swt. Sikap ini memelihara jiwa dari putus asa, melahirkan ketabahan (<em>sabar</em>), dan menghadirkan ketenangan jiwa (<em>mutmainah</em>) karena bersandar penuh kepada kasih sayang dan keadilan-Nya."
    }
];

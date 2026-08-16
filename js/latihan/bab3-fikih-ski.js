// ═══════════════════════════════════════════════════════════
// BAB 3 Fikih-SKI (RABU) — FADHILAH PAHALA HAJI/UMRAH & DAULAH FATIMIYYAH
// 24 Soal Premium Hari Rabu (Kelompok Fikih-SKI) — Teks Arab Berharakat Presisi
// Format: 12 PG Standar + 6 PGK (2 Jawaban Benar) + 6 Benar/Salah (BS)
// ═══════════════════════════════════════════════════════════
const latihanData = [

    // ── BAGIAN 1: ASPEK FIKIH & SKI BAB 3 (SOAL 1 s.d. 16) ──

    // Soal 1 (PG Standar)
    {
        num: 1,
        tipe: "pg",
        topik: "Fikih — Pahala Setara Haji (Salat Fardhu Berjamaah)",
        level: "L1",
        stimulus: "Bacalah penggalan hadis riwayat Abu Dawud berikut dengan saksama:\n\nمَنْ خَرَجَ مِنْ بَيْتِهِ مُتَطَهِّرًا إِلَى صَلَاةٍ مَكْتُوبَةٍ فَأَجْرُه كَأَجْرِ الْحَاجِّ الْمُحْرِمِ...",
        pertanyaan: "Berdasarkan kandungan hadis di atas, aktivitas harian apa yang dijanjikan oleh Rasulullah saw. akan diganjar pahala setara dengan orang yang berhaji mengenakan ihram?",
        opsi: [
            "Melaksanakan ibadah puasa sunah senin-kamis secara istiqamah sepanjang tahun",
            "Keluar dari rumah dalam keadaan sudah bersuci (berwudhu) untuk melaksanakan salat fardhu (berjamaah)",
            "Membantu membersihkan halaman masjid setiap kali hari jumat tiba",
            "Membagikan makanan kotak gratis kepada fakir miskin di sekitar lingkungan sekolah"
        ],
        kunci: 1,
        penjelasan: "Berdasarkan riwayat hadis Abu Dawud dari Abu Umamah, orang yang keluar rumah dalam keadaan suci (mutathahhiran) demi melaksanakan salat fardu berjamaah di masjid dijanjikan pahala agung yang setara dengan pahala orang yang berhaji mengenakan ihram."
    },

    // Soal 2 (PG Standar)
    {
        num: 2,
        tipe: "pg",
        topik: "Fikih — Pahala Setara Umrah (Salat Dhuha)",
        level: "L1",
        stimulus: "Rasulullah saw. bersabda dalam kelanjutan hadis riwayat Abu Dawud:\n\n...وَمَنْ خَرَجَ إِلَى تَسْبِيحِ الضُّحَى لَا يَنْصِبُهُ إِلَّا إِيَّاهُ فَأَجْرُهُ كَأَجْرِ الْمُعْتَمِرِ",
        pertanyaan: "Berdasarkan penggalan hadis di atas, salat sunah apakah yang jika diniatkan murni dan diistiqamahkan pelaksanaannya akan dianugerahi pahala setara ibadah umrah?",
        opsi: [
            "Salat sunah Rawatib Qabliyah Subuh",
            "Salat sunah Tahajud di sepertiga malam terakhir",
            "Salat sunah Dhuha (تَسْبِيحِ الضُّحَى)",
            "Salat sunah Istikharah saat diliputi keraguan"
        ],
        kunci: 2,
        penjelasan: "Potongan hadis \"wa man kharaja ilā tasbīḥiḍ-ḍuḥā lā yanṣibuhū illā iyyāhu fa-ajruhū ka-ajril-mu'tamir\" secara tegas menerangkan bahwa orang yang keluar rumah khusus untuk menunaikan salat Dhuha tanpa tujuan lain akan mendapatkan pahala laksana ibadah umrah."
    },

    // Soal 3 (PG Standar)
    {
        num: 3,
        tipe: "pg",
        topik: "Fikih — Pahala Haji Sempurna (Menuntut Ilmu di Masjid)",
        level: "L1",
        stimulus: "Perhatikan sabda Rasulullah saw. berikut:\n\nمَنْ غَدَا إِلَى الْمَسْجِدِ لَا يُرِيدُ إِلَّا أَنْ يَتَعَلَّمَ خَيْرًا أَوْ يُعَلِّمَهُ كَانَ لَهُ كَأَجْرِ حَاجٍّ تَامٍّ حَجَّتُهُ",
        pertanyaan: "Aktivitas mulia apa di dalam masjid yang berdasarkan hadis riwayat al-Tabrani di atas diganjar dengan pahala ibadah haji yang sempurna?",
        opsi: [
            "Melakukan iktikaf diam tanpa melakukan aktivitas sosial apa pun",
            "Mengumpulkan dana infak pembangunan sarana mushalla sekolah",
            "Berangkat ke masjid murni untuk belajar kebaikan atau mengajarkannya",
            "Mengumandangkan adzan dengan suara yang merdu saat waktu salat tiba"
        ],
        kunci: 2,
        penjelasan: "Berdasarkan H.R. al-Tabrani dari Abu Umamah, orang yang melangkahkan kaki ke masjid semata-mata untuk belajar ilmu agama (menuntut ilmu) atau mengajarkan kebaikan kepada orang lain akan mendapatkan ganjaran pahala setara ibadah haji yang sempurna (tāmmatun ḥajjatuhu)."
    },

    // Soal 4 (PG Standar)
    {
        num: 4,
        tipe: "pg",
        topik: "Fikih — Hikmah Kisah Muwaffaq si Tukang Sepatu Damaskus",
        level: "L3",
        stimulus: "Dalam tidurnya setelah menunaikan haji, ulama besar Abdullah bin Mubarak bermimpi mendengar percakapan dua malaikat. Disebutkan bahwa dari 600.000 jemaah yang berhaji tahun itu, tidak ada satu pun yang diterima hajinya, kecuali seorang tukang sepatu bernama Muwaffaq di Damaskus yang batal berangkat haji karena menyumbangkan seluruh tabungan hajinya untuk menolong keluarga tetangganya yang kelaparan.",
        pertanyaan: "Berdasarkan analisis nilai spiritual, hikmah terdalam apa yang dapat dipetik dari diterimanya haji mabrur Muwaffaq meskipun ia secara fisik tidak pergi ke Baitullah?",
        opsi: [
            "Ibadah sosial berupa menolong sesama yang membutuhkan memiliki bobot nilai yang sangat agung di sisi Allah Swt. daripada ibadah ritual murni yang mengabaikan kemanusiaan",
            "Kita boleh meninggalkan kewajiban rukun Islam secara sengaja asalkan rajin bersedekah di kampung",
            "Menjadi tukang sepatu merupakan profesi paling mulia yang dijamin langsung masuk surga tanpa hisab",
            "Mimpi merupakan satu-satunya rujukan hukum fikih yang kedudukannya lebih tinggi daripada dalil Al-Qur'an"
        ],
        kunci: 0,
        penjelasan: "Kisah luar biasa ini mengajarkan bahwa inti dari kemabruran ibadah adalah kebersihan jiwa dan kepekaan sosial (altruisme). Muwaffaq mengorbankan keinginan pribadinya demi menyelamatkan jiwa tetangganya."
    },

    // Soal 5 (PG Standar)
    {
        num: 5,
        tipe: "pg",
        topik: "SKI — Sejarah Pembangunan Kota Kairo",
        level: "L1",
        stimulus: "Kota Kairo di tepi Sungai Nil tumbuh menjadi salah satu pusat peradaban Islam tercanggih di dunia. Kota bersejarah ini mulai dibangun pada tanggal 17 Sya’ban 358 H / 969 M.",
        pertanyaan: "Siapakah nama panglima perang brilian dari Daulah Fatimiyah yang memimpin langsung penaklukan Mesir sekaligus merancang pembangunan kota Kairo?",
        opsi: [
            "Shalahuddin al-Ayyubi",
            "Jauhar al-Siqilli (al-Siqili)",
            "Al-Mu’idz Lidinillah",
            "Thariq bin Ziyad"
        ],
        kunci: 1,
        penjelasan: "Kota Kairo dibangun pada tahun 969 M oleh panglima perang legendaris bernama Jauhar al-Siqilli atas perintah khalifah Daulah Fatimiyah, Al-Mu’idz Lidinillah."
    },

    // Soal 6 (PG Standar)
    {
        num: 6,
        tipe: "pg",
        topik: "SKI — Sejarah Masjid dan Universitas Al-Azhar",
        level: "L1",
        stimulus: "Setelah merampungkan pembangunan kota Kairo, Jauhar al-Siqilli mendirikan sebuah masjid agung pada tanggal 17 Ramadhan 359 H (970 M) yang kelak berkembang menjadi universitas tertua dan terbesar di dunia Islam.",
        pertanyaan: "Berdasarkan catatan sejarah peradaban Islam, penamaan Al-Azhar pada institusi megah di Mesir tersebut diambil dari gelar putri Rasulullah saw., yaitu…",
        opsi: [
            "Siti Aisyah al-Humaira",
            "Siti Fatimah az-Zahra",
            "Siti Khadijah al-Kubra",
            "Siti Ruqayyah binti Muhammad"
        ],
        kunci: 1,
        penjelasan: "Nama Al-Azhar diambil dari kata Az-Zahra, julukan atau gelar kemuliaan yang disematkan kepada putri tercinta Nabi Muhammad saw., yaitu Siti Fatimah az-Zahra."
    },

    // Soal 7 (PG Standar)
    {
        num: 7,
        tipe: "pg",
        topik: "SKI — Sikap Toleransi Beragama Daulah Fatimiyah",
        level: "L2",
        stimulus: "Daulah Fatimiyah (969-1171 M) merupakan kekhalifahan yang menganut aliran keagamaan Syiah. Meskipun demikian, mereka memimpin masyarakat Mesir yang sangat majemuk dengan kebijaksanaan yang inklusif.",
        pertanyaan: "Manakah di antara fakta sejarah berikut yang membuktikan tingginya tingkat toleransi beragama yang diterapkan oleh Daulah Fatimiyah di Kairo?",
        opsi: [
            "Penguasa memaksa seluruh penduduk Sunni untuk berpindah mazhab ke Syiah dalam waktu satu tahun",
            "Mayoritas penduduk yang menganut paham Sunni Aswaja serta minoritas Kristen dan Yahudi tetap dibiarkan bebas menjalankan agamanya masing-masing",
            "Melarang penganut agama selain Syiah untuk menuntut ilmu di dalam Universitas Al-Azhar",
            "Mengusir seluruh komunitas umat Nasrani Koptik keluar dari wilayah daratan Afrika Utara"
        ],
        kunci: 1,
        penjelasan: "Meskipun bermazhab resmi Syiah, Daulah Fatimiyah menunjukkan toleransi yang luar biasa dalam sejarah Islam. Mereka membiarkan mayoritas penduduk bermazhab Sunni menjalankan ajarannya, serta menjamin hak perlindungan ibadah bagi komunitas Kristen dan Yahudi."
    },

    // Soal 8 (PG Standar)
    {
        num: 8,
        tipe: "pg",
        topik: "SKI — Tiga Kebijakan Besar Khalifah Al-Mu’idz Lidinillah",
        level: "L2",
        stimulus: "Khalifah Daulah Fatimiyah pertama yang memindahkan pusat pemerintahannya ke kota Kairo adalah Al-Mu’idz Lidinillah (953-975 M).",
        pertanyaan: "Apa saja tiga kebijaksanaan besar yang sukses beliau laksanakan demi kemakmuran negaranya?",
        opsi: [
            "Ekspansi militer ke Eropa, penutupan jalur perdagangan, dan pelarangan mazhab Sunni",
            "Monopoli perdagangan gandum, kodifikasi kitab suci, dan pengasingan kaum mualaf",
            "Pembaharuan bidang administrasi negara, pembangunan ekonomi, dan penegakan toleransi beragama",
            "Pendirian angkatan laut, pembuatan sistem pos, dan pembangunan tembok pertahanan raksasa"
        ],
        kunci: 2,
        penjelasan: "Khalifah Al-Mu’idz Lidinillah menancapkan pilar kejayaan dinasti melalui tiga langkah strategis: (1) pembenahan administrasi pemerintahan yang rapi, (2) optimalisasi pembangunan ekonomi, dan (3) penegakan toleransi beragama."
    },

    // Soal 9 (PGK — 2 Jawaban Benar)
    {
        num: 9,
        tipe: "pgk",
        topik: "Fikih — PGK Menyeleksi Amalan Bernilai Pahala Setara Haji/Umrah",
        level: "L3",
        pertanyaan: "Allah Swt. Maha Pengasih menyediakan jalur alternatif berpahala agung bagi hamba-Nya yang belum mampu berhaji ke Baitullah secara fisik. Manakah dua aktivitas ibadah harian di bawah ini yang mendapatkan ganjaran pahala setara ibadah haji/umrah berdasarkan riwayat hadis sahih? (Pilihlah dua jawaban yang benar!)",
        opsi: [
            "Melangkahkan kaki dari rumah dalam keadaan sudah berwudhu (suci) untuk salat fardhu berjamaah di masjid (pahala setara haji).",
            "Melaksanakan ibadah puasa sunah Daud selama tiga bulan berturut-turut di rumah.",
            "Berangkat menuju ke masjid dengan niat suci hanya untuk belajar atau mengajarkan kebaikan (pahala setara haji yang sempurna).",
            "Melakukan ziarah ke makam para wali songo tanpa melewatkan satu makam pun."
        ],
        kunci: [0, 2],
        penjelasan: "Berdasarkan H.R. Abu Dawud dan al-Tabrani, amalan harian yang diganjar pahala setara haji/umrah adalah: (1) pergi ke masjid dalam keadaan suci untuk salat fardu berjamaah, dan (2) berangkat ke masjid khusus untuk menuntut ilmu atau mengajarkan kebaikan."
    },

    // Soal 10 (PGK — 2 Jawaban Benar)
    {
        num: 10,
        tipe: "pgk",
        topik: "Fikih — PGK Kedudukan Hukum Syariat Ibadah Haji",
        level: "L3",
        pertanyaan: "Memperoleh limpahan pahala setara haji melalui amalan-amalan alternatif merupakan karunia luar biasa. Berdasarkan penjelasan syariat fikih, manakah dua pernyataan yang benar mengenai kedudukan hukum ibadah haji fisik bagi orang yang mengamalkan amalan tersebut? (Pilihlah dua jawaban yang benar!)",
        opsi: [
            "Orang yang mengamalkan amalan setara haji tetap diwajibkan secara hukum fikih untuk melaksanakan ibadah haji fisik ke Makkah apabila ia telah mampu secara finansial dan fisik.",
            "Kewajiban melaksanakan rukun Islam kelima (haji) otomatis gugur secara hukum fikih bagi siapa saja yang rajin salat dhuha.",
            "Pahala setara haji tersebut diberikan oleh Allah Swt. sebagai bentuk motivasi kebaikan, namun tidak menggantikan status hukum pelaksanaan rukun Islam secara lahiriah.",
            "Orang yang sudah memiliki tabungan haji boleh menyedekahkan seluruh uangnya dan membatalkan pendaftaran hajinya secara mutlak."
        ],
        kunci: [0, 2],
        penjelasan: "Memperoleh pahala setara ibadah haji/umrah dari amalan ringan tidak menggugurkan kewajiban syariat haji lahiriah. Kewajiban ibadah haji fisik ke Baitullah tetap berstatus wajib (fardhu 'ain) sekali seumur hidup bagi setiap muslim yang memenuhi syarat mampu (istitha'ah)."
    },

    // Soal 11 (PGK — 2 Jawaban Benar)
    {
        num: 11,
        tipe: "pgk",
        topik: "SKI — PGK Prestasi Kebudayaan Daulah Fatimiyah",
        level: "L2",
        pertanyaan: "Masa keemasan Daulah Fatimiyah di Mesir meninggalkan warisan peradaban yang sangat indah dan bertahan melintasi zaman. Manakah dua bangunan bersejarah monumental milik Daulah Fatimiyah yang berada di Kairo? (Pilihlah dua jawaban yang benar!)",
        opsi: [
            "Kota Kairo, kota metropolitan megah di tepi Sungai Nil yang dirancang sebagai ibu kota daulah.",
            "Istana Al-Hamra, istana indah berlapis marmer merah yang terletak di Granada, Andalusia.",
            "Masjid Agung Al-Azhar, pusat keilmuan yang berkembang menjadi universitas Islam terkemuka.",
            "Kubah Batu (Dome of the Rock), monumen indah berkubah emas yang berdiri di Yerusalem."
        ],
        kunci: [0, 2],
        penjelasan: "Kota Kairo dan Masjid Al-Azhar merupakan dua mahakarya terbesar peninggalan masa keemasan Daulah Fatimiyah yang dibangun oleh Panglima Jauhar al-Siqilli di Mesir."
    },

    // Soal 12 (PGK — 2 Jawaban Benar)
    {
        num: 12,
        tipe: "pgk",
        topik: "SKI — PGK Tiga Fase Kejayaan Kota Kairo",
        level: "L2",
        stimulus: "Dalam lintasan sejarah Islam, kota Kairo yang subur dan terletak di tepi Sungai Nil mengalami tiga kali era keemasan atau puncak kejayaan peradaban yang sangat gemilang.",
        pertanyaan: "Berdasarkan catatan sejarah tersebut, manakah di antara dinasti/daulah berikut yang berhasil membawa kota Kairo mencapai puncak kejayaannya? (Pilihlah dua jawaban yang benar!)",
        opsi: [
            "Daulah Fatimiyah, sebagai dinasti pendiri awal kota Kairo dan pencetus Universitas Al-Azhar.",
            "Daulah Turki Usmani, yang berhasil menaklukkan Konstantinopel di bawah pimpinan Al-Fatih.",
            "Dinasti Mamalik, yang sukses mempertahankan kota Kairo dari gempuran pasukan Mongol dalam pertempuran Ain Jalut.",
            "Dinasti Mughal, yang mendirikan monumen Taj Mahal sebagai bukti cinta di India."
        ],
        kunci: [0, 2],
        penjelasan: "Kota Kairo mengalami tiga kali puncak kejayaan dalam sejarah, yaitu: (1) pada masa Dinasti Fatimiyah, (2) di masa Shalahuddin al-Ayyubi (Dinasti Ayyubiyah), serta (3) di bawah pemerintahan Baybars dan Al-Nashir pada masa Dinasti Mamalik."
    },

    // Soal 13 (Benar/Salah)
    {
        num: 13,
        tipe: "pg",
        topik: "Fikih — B/S Validasi Hadis Salat Dhuha Berpahala Umrah",
        level: "L2",
        pertanyaan: "Berdasarkan hadis sahih riwayat Abu Dawud, seorang siswa yang rutin dan istiqamah menunaikan ibadah salat Dhuha di sekolah akan diberikan ganjaran pahala yang setara dengan orang yang melaksanakan ibadah umrah.\n\nApakah pernyataan di atas BENAR atau SALAH?",
        opsi: [
            "BENAR",
            "SALAH"
        ],
        kunci: 0,
        penjelasan: "BENAR. Rasulullah saw. bersabda: \"Barangsiapa yang keluar khusus untuk mengerjakan salat Dhuha dan tidak ada tujuan lain selain itu, maka akan diberikan pahala umrah.\" (H.R. Abu Dawud)."
    },

    // Soal 14 (Benar/Salah)
    {
        num: 14,
        tipe: "pg",
        topik: "SKI — B/S Kebijakan Agama Dinasti Syiah Fatimiyah",
        level: "L3",
        pertanyaan: "Karena Daulah Fatimiyah menganut aliran teologi Syiah, mereka mengeluarkan undang-undang kekaisaran yang mewajibkan seluruh rakyat Mesir untuk meninggalkan mazhab Sunni Aswaja dan menghukum mati siapa saja yang menolak berpindah aliran.\n\nApakah pernyataan di atas BENAR atau SALAH?",
        opsi: [
            "BENAR",
            "SALAH"
        ],
        kunci: 1,
        penjelasan: "SALAH. Kebijakan sejarah Daulah Fatimiyah sangat toleran. Mayoritas penduduk Mesir tetap dibiarkan menganut paham Sunni secara aman dan damai."
    },

    // Soal 15 (Benar/Salah)
    {
        num: 15,
        tipe: "pg",
        topik: "SKI — B/S Asal Nama Al-Azhar",
        level: "L1",
        pertanyaan: "Nama institusi Universitas Al-Azhar di Kairo, Mesir, secara historis diambil dari kata \"Az-Zahra\" yang merupakan gelar kemuliaan dari putri nabi Muhammad saw., yaitu Siti Fatimah.\n\nApakah pernyataan di atas BENAR atau SALAH?",
        opsi: [
            "BENAR",
            "SALAH"
        ],
        kunci: 0,
        penjelasan: "BENAR. Penamaan Masjid dan Universitas Al-Azhar memang disandarkan pada gelar Az-Zahra yang dinisbatkan kepada Siti Fatimah."
    },

    // Soal 16 (Benar/Salah)
    {
        num: 16,
        tipe: "pg",
        topik: "SKI — B/S Pertempuran Ain Jalut Dinasti Mamalik",
        level: "L3",
        pertanyaan: "Pada masa Dinasti Mamalik, kota Kairo berhasil diselamatkan dari kepunahan akibat serbuan dahsyat tentara Mongol setelah pasukan Islam memenangkan pertempuran legendaris di Ain Jalut di bawah pimpinan Sultan Baybars.\n\nApakah pernyataan di atas BENAR atau SALAH?",
        opsi: [
            "BENAR",
            "SALAH"
        ],
        kunci: 0,
        penjelasan: "BENAR. Dinasti Mamalik (Mamluk) mengukir tinta emas sejarah dengan menjadi kekuatan militer pertama yang berhasil mematahkan dominasi pasukan Mongol dalam Pertempuran Ain Jalut."
    },

    // ── BAGIAN 2: ASPEK QUR'AN-HADIS BAB 3 (SOAL 17 s.d. 20) ──

    // Soal 17 (PG Standar)
    {
        num: 17,
        tipe: "pg",
        topik: "Al-Qur'an & Hadis — Asbabun Nuzul Q.S. al-Baqarah/2: 256",
        level: "L1",
        stimulus: "Mari kita baca dengan teliti penggalan Q.S. al-Baqarah/2: 256 berikut:\n\nلَآ اِكْرَاهَ فِى الدِّيْنِۗ قَدْ تَّبَيَّنَ الرُّشْدُ مِنَ الْغَيِّۚ",
        pertanyaan: "Berdasarkan riwayat Ibnu Abbas r.a., ayat di atas diturunkan oleh Allah Swt. sebagai koreksi atas peristiwa sosial konkret yang dialami oleh…",
        opsi: [
            "Suku Quraisy yang melarang kaum muslimin melakukan ibadah haji ke Ka'bah",
            "Sahabat Ansar bernama Husein (al-Husaini) dari Bani Salim bin Auf yang ingin memaksa kedua putranya yang beragama Nasrani masuk Islam",
            "Raja Najasyi di Habasyah yang menolak memberikan jaminan perlindungan bagi imigran muslim",
            "Kaum munafik Madinah yang membuat masjid tandingan untuk memecah belah jemaah"
        ],
        kunci: 1,
        penjelasan: "Asbabun nuzul Q.S. al-Baqarah/2: 256 diturunkan berkenaan dengan seorang sahabat Ansar bernama Husein yang memiliki dua orang putra beragama Nasrani. Husein meminta izin Rasulullah saw. untuk memaksa kedua anaknya masuk Islam, namun Allah Swt. melarang keras segala bentuk pemaksaan keyakinan."
    },

    // Soal 18 (PG Standar)
    {
        num: 18,
        tipe: "pg",
        topik: "Tajwid — Lam Jalalah Tarqiq",
        level: "L2",
        pertanyaan: "Di bawah ini, lafal manakah yang hukum membaca Lam Jalalah-nya wajib dibaca secara tipis (تَرْقِيْق) berdasarkan kaidah ilmu tajwid?",
        opsi: [
            "اِتَّقُوا اللّٰهَ",
            "شَهِدَ اللّٰهُ",
            "بِسْمِ اللّٰهِ",
            "يَفْسَحِ اللّٰهُ"
        ],
        kunci: 2,
        penjelasan: "Huruf Lam pada lafal Allah (Lam Jalalah) wajib dibaca tipis (tarqiq) apabila huruf sebelum lafal Allah tersebut memiliki harakat kasrah ( ِ ), seperti pada lafal بِسْمِ اللّٰهِ (bismillāhi)."
    },

    // Soal 19 (PGK — 2 Jawaban Benar)
    {
        num: 19,
        tipe: "pgk",
        topik: "Tajwid — PGK Menganalisis Hukum Ra' Tarqiq",
        level: "L2",
        pertanyaan: "Kaidah membaca huruf Ra' terbagi menjadi tebal (tafkhim) dan tipis (tarqiq). Manakah dua lafal di bawah ini yang wajib dibaca dengan hukum Ra' Tarqiq (tipis)? (Pilihlah dua jawaban yang benar!)",
        opsi: [
            "فِرْعَوْنَ (karena huruf Ra' sukun didahului oleh huruf berharakat kasrah asli).",
            "اِكْرَاهَ (karena huruf Ra' berharakat fathah tegak di tengah kata).",
            "رِجَالٌ (karena huruf Ra' berharakat kasrah asli).",
            "اَلرُّشْدُ (karena huruf Ra' berharakat dhommah di awal kata)."
        ],
        kunci: [0, 2],
        penjelasan: "Huruf Ra' dibaca tipis (tarqiq) apabila: (1) Ra' berharakat kasrah asli (contoh: رِجَالٌ), atau (2) Ra' sukun yang didahului huruf berharakat kasrah asli dan setelahnya tidak ada huruf isti'la (contoh: فِرْعَوْنَ)."
    },

    // Soal 20 (Benar/Salah)
    {
        num: 20,
        tipe: "pg",
        topik: "Al-Qur'an & Hadis — B/S Batas Toleransi Beragama (Bukan Relativisme)",
        level: "L3",
        pertanyaan: "Berdasarkan kandungan Q.S. al-Baqarah/2: 256, larangan memaksakan agama kepada orang lain menunjukkan bahwa Islam menganut paham relativisme agama (menganggap semua agama itu sama benarnya), sehingga kita dilarang melakukan aktivitas dakwah Islamiyah di dalam masyarakat majemuk.\n\nApakah pernyataan di atas BENAR atau SALAH?",
        opsi: [
            "BENAR",
            "SALAH"
        ],
        kunci: 1,
        penjelasan: "SALAH. Larangan memaksa dalam beragama (lā ikrāha fī ad-dīn) tidak berarti menghapus klaim kebenaran tunggal Islam. Dakwah persuasif dan rasional tetap wajib dijalankan tanpa pemaksaan fisik maupun tekanan sosial."
    },

    // ── BAGIAN 3: ASPEK AQIDAH-AKHLAK BAB 3 (SOAL 21 s.d. 24) ──

    // Soal 21 (PG Standar)
    {
        num: 21,
        tipe: "pg",
        topik: "Aqidah — Definisi Beriman kepada Rasul",
        level: "L1",
        pertanyaan: "Berdasarkan kajian materi keimanan, apa arti sesungguhnya dari beriman kepada Rasul-Rasul Allah Swt.?",
        opsi: [
            "Mengagumi mukjizat luar biasa nabi terdahulu untuk dijadikan bahan khayalan sakti",
            "Memercayai dan meyakini dengan sepenuh hati bahwa Allah Swt. benar-benar mengutus utusan pilihan-Nya untuk membimbing umat manusia ke jalan yang benar agar selamat di dunia dan akhirat",
            "Berdoa memohon kelapangan rezeki langsung kepada makam para rasul di Madinah atau Yerusalem",
            "Menolak mempelajari ilmu kedokteran modern karena menganggap doa nabi adalah satu-satunya obat penyakit"
        ],
        kunci: 1,
        penjelasan: "Iman kepada Rasul Allah Swt. adalah mempercayai dan meyakini dengan sepenuh hati bahwa Allah Swt. telah benar-benar mengutus Rasul pilihan yang ditugaskan untuk membimbing umat manusia."
    },

    // Soal 22 (PG Standar)
    {
        num: 22,
        tipe: "pg",
        topik: "Akhlak — Akhlak Husnuzan (Menjaga Kedamaian Sosial)",
        level: "L2",
        stimulus: "Saat pengumuman hasil kuis CCAI dipajang, Zaki melihat namanya tidak masuk dalam tim inti sekolah. Teman sebangkunya, Aris, terpilih masuk tim utama. Zaki tidak merasa Aris melakukan kecurangan, melainkan ia sadar Aris memang belajar jauh lebih tekun darinya.",
        pertanyaan: "Sikap batin terpuji yang ditunjukkan oleh Zaki dengan berprasangka baik terhadap kesuksesan temannya disebut dengan istilah…",
        opsi: [
            "حُسْنُ الظَّنِّ (Husnuzan)",
            "سُوْءُ الظَّنِّ (Suuzan)",
            "تَسَامُحٌ (Tasamuh)",
            "تَوَاضُعٌ (Tawadhu)"
        ],
        kunci: 0,
        penjelasan: "Sikap mental positif yang selalu mengedepankan prasangka baik dan menilai tindakan orang lain secara objektif dinamakan Husnuzan (حُسْنُ الظَّنِّ)."
    },

    // Soal 23 (PGK — 2 Jawaban Benar)
    {
        num: 23,
        tipe: "pgk",
        topik: "Aqidah — PGK Menganalisis Perbedaan Nabi dan Rasul",
        level: "L3",
        pertanyaan: "Pemahaman teologi yang matang menuntut kita cermat membedakan status kenabian dan kerasulan. Manakah dua perbedaan fungsional yang benar antara Nabi dan Rasul? (Pilihlah dua jawaban yang benar!)",
        opsi: [
            "Seorang Rasul diutus oleh Allah Swt. dengan membawa syariat baru, sedangkan seorang Nabi diutus untuk menegaskan syariat dari nabi terdahulu.",
            "Nabi menerima wahyu melalui mimpi tidur biasa, sedangkan Rasul menerima wahyu dari tulisan di langit secara langsung.",
            "Seorang Rasul wajib menyampaikan wahyu syariat yang diterimanya kepada umat manusia, sedangkan seorang Nabi tidak dibebani kewajiban mutlak untuk menyampaikannya kepada umat.",
            "Hanya Rasul yang dianugerahi kitab suci tebal, sedangkan Nabi hanya dibekali lembaran kertas kosong biasa."
        ],
        kunci: [0, 2],
        penjelasan: "Perbedaan utama nabi dan rasul terletak pada syariat (Rasul membawa syariat baru, Nabi meneruskan) serta kewajiban penyampaian (Rasul wajib menyampaikan ke umat)."
    },

    // Soal 24 (Benar/Salah)
    {
        num: 24,
        tipe: "pg",
        topik: "Aqidah — B/S Hikmah Sifat Jaiz bagi Rasul",
        level: "L2",
        pertanyaan: "Para rasul memiliki sifat jaiz, yaitu watak dan perilaku kemanusiaan biasa laksana manusia pada umumnya (seperti lapar, haus, tidur, sakit, dan lelah), yang memiliki hikmah mulia untuk menjelaskan hukum syariat sekaligus sebagai teladan hidup yang realistis bagi umatnya.\n\nApakah pernyataan di atas BENAR atau SALAH?",
        opsi: [
            "BENAR",
            "SALAH"
        ],
        kunci: 0,
        penjelasan: "BENAR. Sifat jaiz nabi dan rasul merupakan sarana edukasi hukum syariat (tasyri') yang sangat agung bagi umat manusia."
    }
];

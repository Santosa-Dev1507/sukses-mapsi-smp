// ═══════════════════════════════════════════════════════════
// BAB 2 Aqidah-Akhlak (SELASA) — IMAN KEPADA MALAIKAT, KITAB-KITAB ALLAH & AKHLAK BERSYUKUR
// 24 Soal Premium Hari Selasa (Kelompok Aqidah-Akhlak) — Teks Arab Berharakat Presisi
// Format: 12 PG Standar + 6 PGK (2 Jawaban Benar) + 6 Benar/Salah (BS)
// ═══════════════════════════════════════════════════════════
const latihanData = [

    // ── BAGIAN 1: ASPEK AQIDAH-AKHLAK BAB 2 (SOAL 1 s.d. 16) ──

    // Soal 1 (PG Standar)
    {
        num: 1,
        tipe: "pg",
        topik: "Aqidah — Konsep Iman kepada Malaikat",
        level: "L1",
        stimulus: "Malaikat merupakan makhluk gaib yang diciptakan oleh Allah Swt. dari cahaya (نُوْرٌ). Berbeda dengan manusia yang dibekali nafsu, malaikat didesain memiliki kepatuhan mutlak.",
        pertanyaan: "Berdasarkan konsep keimanan, apa arti yang paling tepat dari beriman kepada malaikat-malaikat Allah Swt.?",
        opsi: [
            "Mengagumi bentuk fisik malaikat yang memiliki sayap sangat banyak",
            "Meyakini dengan sepenuh hati bahwa Allah Swt. menciptakan malaikat sebagai makhluk gaib yang selalu patuh dan tidak pernah mendurhakai perintah-Nya",
            "Berusaha meminta bantuan kepada malaikat agar segala hajat duniawi kita cepat dikabulkan",
            "Menganggap kedudukan malaikat lebih rendah dibandingkan kekuatan makhluk halus lainnya"
        ],
        kunci: 1,
        penjelasan: "Iman kepada malaikat artinya meyakini dengan pasti bahwa Allah Swt. menciptakan malaikat dari cahaya sebagai makhluk gaib yang memiliki tugas-tugas khusus dan senantiasa taat menjalankan perintah Allah Swt. tanpa pernah membangkang sedikit pun."
    },

    // Soal 2 (PG Standar)
    {
        num: 2,
        tipe: "pg",
        topik: "Aqidah — Sifat Dasar Malaikat",
        level: "L1",
        stimulus: "Di sekolah, kita belajar bahwa Allah Swt. menciptakan berbagai makhluk hidup dengan karakteristik yang berbeda. Ada manusia, malaikat, dan jin yang masing-masing memiliki sifat dasar tersendiri.",
        pertanyaan: "Manakah di antara sifat-sifat di bawah ini yang merupakan sifat khusus yang hanya dimiliki oleh اَلْمَلَائِكَةُ (malaikat)?",
        opsi: [
            "Memiliki jenis kelamin laki-laki atau perempuan dan berkembang biak",
            "Memerlukan makanan, minuman, dan istirahat yang cukup di malam hari",
            "Tidak memiliki hawa nafsu, tidak berjenis kelamin, dan tidak pernah tidur",
            "Diberikan kebebasan untuk memilih antara taat atau ingkar pada perintah Allah Swt."
        ],
        kunci: 2,
        penjelasan: "Malaikat tidak makan, tidak minum, tidak tidur, tidak berjenis kelamin, dan tidak memiliki hawa nafsu. Sifat-sifat fisik dan biologis tersebut membedakan malaikat secara mutlak dari manusia dan jin."
    },

    // Soal 3 (PG Standar)
    {
        num: 3,
        tipe: "pg",
        topik: "Aqidah — Tugas Malaikat Mikail",
        level: "L1",
        stimulus: "Setiap kali musim hujan tiba, air membasahi bumi, menumbuhkan pepohonan, menyuburkan sawah ladang para petani, dan mengalirkan rezeki bagi seluruh makhluk hidup di dunia. Keteraturan pembagian air hujan dan rezeki ini tidak lepas dari tugas malaikat yang diutus oleh Allah Swt.",
        pertanyaan: "Malaikat yang bertugas membagikan rezeki dan mengatur fenomena alam (seperti menurunkan hujan dan angin) atas perintah Allah Swt. adalah…",
        opsi: [
            "اَلْجِبْرِيْلُ",
            "اَلْمِيْكَائِيْلُ",
            "اَلْإِسْرَافِيْلُ",
            "اَلْعِزْرَائِيْلُ"
        ],
        kunci: 1,
        penjelasan: "Malaikat Mikail (اَلْمِيْكَائِيْلُ) adalah malaikat yang dipercayakan Allah Swt. untuk mengatur urusan rezeki makhluk hidup, mengatur hujan, serta jalannya roda ekosistem alam semesta."
    },

    // Soal 4 (PG Standar)
    {
        num: 4,
        tipe: "pg",
        topik: "Aqidah — Iman kepada Kitab-Kitab Allah",
        level: "L1",
        pertanyaan: "Apa esensi utama dari beriman kepada kitab-kitab Allah Swt. bagi seorang muslim?",
        opsi: [
            "Mengoleksi mushaf-mushaf kuno dari seluruh belahan dunia di perpustakaan pribadi",
            "Meyakini dengan sepenuh hati bahwa Allah Swt. telah menurunkan kitab-kitab suci kepada para rasul-Nya sebagai petunjuk hidup bagi umat manusia",
            "Membaca teks Al-Qur'an secara cepat tanpa perlu memahami artinya sama sekali",
            "Menganggap semua kitab suci terdahulu masih murni dan wajib diamalkan syariatnya saat ini"
        ],
        kunci: 1,
        penjelasan: "Iman kepada kitab-kitab Allah berarti meyakini bahwa Allah Swt. telah mewahyukan kitab-kitab suci (Taurat, Zabur, Injil, Al-Qur'an) kepada rasul pilihan-Nya untuk menjadi tuntunan kebenaran bagi umat manusia agar selamat di dunia dan akhirat."
    },

    // Soal 5 (PG Standar)
    {
        num: 5,
        tipe: "pg",
        topik: "Aqidah — Al-Qur'an sebagai Muhaimin",
        level: "L2",
        stimulus: "Di dalam Al-Qur'an, Allah Swt. menegaskan bahwa Al-Qur'an diturunkan sebagai penyempurna sekaligus menjadi batu ujian atau penjaga (Muhaimin) bagi kitab-kitab suci yang diturunkan sebelumnya.",
        pertanyaan: "Apa maksud dari peran Al-Qur'an sebagai مُهَيْمِنًا (Muhaimin) terhadap kitab-kitab Allah terdahulu?",
        opsi: [
            "Al-Qur'an membenarkan seluruh tata cara ibadah ritual dalam kitab terdahulu tanpa perubahan",
            "Al-Qur'an memelihara, meluruskan, dan menjadi tolok ukur kebenaran atas isi kitab-kitab terdahulu yang telah diubah oleh tangan manusia",
            "Al-Qur'an melarang umat Islam untuk mengetahui sejarah penulisan kitab suci sebelum Islam",
            "Al-Qur'an hanya berlaku bagi golongan bangsa Arab saja dan tidak berlaku bagi bangsa lain"
        ],
        kunci: 1,
        penjelasan: "Sebagai Muhaimin (مُهَيْمِنًا), Al-Qur'an berfungsi sebagai penjaga, penyeleksi, dan saksi untuk meluruskan penyimpangan isi kitab suci terdahulu yang telah mengalami perubahan sejarah oleh tangan manusia, sekaligus menjadi penyempurna syariat yang berlaku hingga akhir zaman."
    },

    // Soal 6 (PG Standar)
    {
        num: 6,
        tipe: "pg",
        topik: "Akhlak — Dimensi Syukur bil Qalb",
        level: "L2",
        stimulus: "Saat berhasil meraih peringkat pertama di kelas, Rian termenung tenang di kamarnya. Di dalam lubuk hatinya yang paling dalam, ia sepenuhnya sadar dan meyakini bahwa kecerdasannya bukanlah semata-mata karena kehebatan otaknya sendiri, melainkan murni merupakan anugerah kasih sayang dan kemudahan dari Allah Swt.",
        pertanyaan: "Sikap batiniah yang ditunjukkan oleh Rian tersebut merupakan wujud nyata dari pengamalan…",
        opsi: [
            "شُكْرُ الْقَلْبِ (syukur dengan keyakinan hati)",
            "شُكْرُ اللِّسَانِ (syukur dengan ucapan lisan)",
            "شُكْرُ الْجَوَارِحِ (syukur dengan perbuatan fisik)",
            "شُكْرُ الْمَالِ (syukur dengan menginfakkan harta)"
        ],
        kunci: 0,
        penjelasan: "Syukur bil qalb (شُكْرُ الْقَلْبِ) adalah dimensi bersyukur di mana seseorang meyakini dan menyadari sepenuhnya di dalam hati bahwa segala nikmat kebaikan yang diperoleh bersumber langsung dari Allah Swt., menghindarkan dirinya dari sifat sombong (takabur)."
    },

    // Soal 7 (PG Standar)
    {
        num: 7,
        tipe: "pg",
        topik: "Akhlak — Aplikasi Syukur bil Jawarih",
        level: "L2",
        stimulus: "Allah Swt. menganugerahi kita anggota tubuh yang sehat dan lengkap, seperti mata untuk melihat, tangan untuk bekerja, dan kaki untuk melangkah. Sebagai pelajar, kita wajib mensyukuri nikmat fisik tersebut.",
        pertanyaan: "Manakah di antara tindakan berikut yang mencerminkan bentuk nyata dari شُكْرُ الْجَوَارِحِ (syukur dengan anggota badan) di lingkungan sekolah?",
        opsi: [
            "Membaca hamdalah berulang kali saat mendapatkan nilai rapor yang bagus",
            "Menggunakan mata untuk membaca buku pelajaran dan mempergunakan tangan untuk membantu teman piket kelas",
            "Menyimpan uang jajan di dalam tabungan tanpa berniat menyedekahkannya",
            "Merasa bangga diri karena memiliki wajah yang lebih menawan dibandingkan teman sekelas"
        ],
        kunci: 1,
        penjelasan: "Syukur bil jawarih (شُكْرُ الْجَوَارِحِ) adalah mewujudkan rasa syukur melalui perbuatan nyata anggota badan untuk melakukan ketaatan kepada Allah Swt. dan menebar manfaat bagi sesama (seperti rajin belajar dan menolong teman)."
    },

    // Soal 8 (PG Standar)
    {
        num: 8,
        tipe: "pg",
        topik: "Akhlak — Konsep Kufur Nikmat",
        level: "L1",
        stimulus: "Kadang kala kita melihat ada orang yang selalu merasa kurang. Meskipun sudah dibelikan sepatu baru oleh orang tuanya, ia tetap mengeluh dan marah karena model sepatu tersebut tidak sekeren milik temannya.",
        pertanyaan: "Perilaku tidak berterima kasih, mengeluh, dan menyalahgunakan nikmat pemberian Allah Swt. dalam istilah akhlak disebut dengan…",
        opsi: [
            "كُفْرُ النِّعْمَةِ",
            "شُكْرُ النِّعْمَةِ",
            "رِيَاءُ الْعَمَلِ",
            "حَسَدُ الْقَلْبِ"
        ],
        kunci: 0,
        penjelasan: "Mengingkari atau menyalahgunakan nikmat pemberian Allah Swt. disebut dengan kufur nikmat (كُفْرُ النِّعْمَةِ). Perilaku ini sangat dilarang dalam Islam dan dapat mendatangkan murka serta siksa Allah Swt."
    },

    // Soal 9 (PGK — 2 Jawaban Benar)
    {
        num: 9,
        tipe: "pgk",
        topik: "Aqidah — PGK Perbandingan Karakter Malaikat, Manusia, dan Jin",
        level: "L3",
        pertanyaan: "Berdasarkan analisis teologi Islam, manakah dua pernyataan yang benar mengenai perbedaan karakteristik malaikat dengan manusia dan jin? (Pilihlah dua jawaban yang benar!)",
        opsi: [
            "Malaikat diciptakan dari cahaya (نُوْرٌ), sedangkan manusia diciptakan dari tanah (طِيْنٌ), dan jin diciptakan dari api (نَارٌ).",
            "Malaikat dan jin sama-sama memiliki hawa nafsu sehingga bisa tergoda untuk melakukan maksiat.",
            "Malaikat selalu taat secara mutlak kepada perintah Allah, sedangkan manusia dan jin diberikan kebebasan memilih untuk taat atau ingkar.",
            "Manusia adalah satu-satunya makhluk gaib yang memiliki kewajiban untuk melaksanakan salat lima waktu."
        ],
        kunci: [0, 2],
        penjelasan: "Malaikat diciptakan dari cahaya dan tidak memiliki kehendak bebas (free will) karena tidak dibekali nafsu, sehingga mereka selalu taat secara mutlak. Sementara manusia (dari tanah) dan jin (dari api) dibekali nafsu dan akal/kehendak sehingga diberi pilihan untuk beriman atau kufur."
    },

    // Soal 10 (PGK — 2 Jawaban Benar)
    {
        num: 10,
        tipe: "pgk",
        topik: "Aqidah — PGK Pengawasan Malaikat Raqib dan Atid",
        level: "L3",
        stimulus: "Di kelas, kalian melihat selembar uang seratus ribu rupiah jatuh di bawah laci meja teman sekelas yang sedang ke kantin. Tidak ada orang lain di dalam kelas, dan tidak ada kamera CCTV yang merekam aktivitas kalian di meja tersebut.",
        pertanyaan: "Berdasarkan keimanan kepada Malaikat Raqib dan Malaikat Atid, manakah dua tindakan yang benar yang menunjukkan sikap mawas diri di sekolah? (Pilihlah dua jawaban yang benar!)",
        opsi: [
            "Mengembalikan uang tersebut secara jujur kepada pemiliknya karena yakin Malaikat Raqib mencatat setiap amal kebaikan kita.",
            "Mengambil uang tersebut untuk ditabung dengan asumsi tidak ada manusia yang melihat tindakan kita.",
            "Menahan diri dari bisikan untuk memiliki uang tersebut karena sadar sekecil apa pun kecurangan kita akan dicatat oleh Malaikat Atid.",
            "Membelanjakan uang tersebut di kantin lalu menyedekahkan kembaliannya ke kotak amal masjid agar dianggap saleh oleh malaikat."
        ],
        kunci: [0, 2],
        penjelasan: "Mengimani Malaikat Raqib (pencatat amal baik) dan Atid (pencatat amal buruk) melahirkan kesadaran moral yang mandiri (self-governance). Seorang mukmin akan selalu berbuat jujur karena sadar semua perbuatannya direkam secara akurat oleh malaikat utusan Allah Swt."
    },

    // Soal 11 (PGK — 2 Jawaban Benar)
    {
        num: 11,
        tipe: "pgk",
        topik: "Aqidah — PGK Kombinasi Kitab Suci dan Rasul Penerima",
        level: "L2",
        pertanyaan: "Manakah di antara kombinasi nama kitab suci dan nama rasul penerima wahyu di bawah ini yang benar dan tepat? (Pilihlah dua jawaban yang benar!)",
        opsi: [
            "Kitab Taurat (تَوْرَاة) diturunkan kepada Nabi Musa a.s. sebagai petunjuk bagi kaum Bani Israil.",
            "Kitab Injil (إِنْجِيْل) diturunkan kepada Nabi Daud a.s.",
            "Kitab Zabur (زَبُوْر) diturunkan kepada Nabi Daud a.s. dalam bahasa Qibti.",
            "Kitab Al-Qur'an (اَلْقُرْاٰنُ) diturunkan kepada Nabi Isa a.s."
        ],
        kunci: [0, 2],
        penjelasan: "Taurat diturunkan kepada Nabi Musa a.s., Zabur kepada Nabi Daud a.s., Injil kepada Nabi Isa a.s., dan Al-Qur'an kepada Nabi Muhammad saw. Pilihan 1 dan 3 menunjukkan pasangan yang tepat."
    },

    // Soal 12 (PGK — 2 Jawaban Benar)
    {
        num: 12,
        tipe: "pgk",
        topik: "Akhlak — PGK Dampak Positif Bersyukur (Q.S. Ibrahim/14: 7)",
        level: "L3",
        stimulus: "Allah Swt. berjanji dalam Q.S. Ibrahim/14: 7 bahwa jika hamba-Nya bersyukur, maka Allah Swt. akan menambah nikmat-Nya, namun jika mereka kufur, maka siksaan-Nya sangat pedih.",
        pertanyaan: "Berdasarkan janji Allah Swt. tersebut, manakah dua dampak positif bersyukur dalam kehidupan seorang pelajar? (Pilihlah dua jawaban yang benar!)",
        opsi: [
            "Mendapatkan tambahan nikmat dan keberkahan hidup dari Allah Swt. serta dijauhkan dari siksa-Nya yang pedih.",
            "Terbebas secara mutlak dari segala bentuk tugas kelompok dan ujian sekolah di kelas.",
            "Merasakan kedamaian batin, kepuasan hidup (qana'ah), dan terhindar dari penyakit hati laksana dengki dan iri hati.",
            "Menjadi anak yang ditakuti dan disegani oleh seluruh geng sekolah karena memiliki kekuatan gaib."
        ],
        kunci: [0, 2],
        penjelasan: "Bersyukur mendatangkan keberkahan lahiriah (nikmat ditambah oleh Allah Swt.) dan ketenangan batiniah (menghilangkan sifat serakah, iri hati, serta menumbuhkan jiwa yang damai dan selalu merasa cukup/qana'ah)."
    },

    // Soal 13 (Benar/Salah)
    {
        num: 13,
        tipe: "pg",
        topik: "Aqidah — B/S Jumlah Malaikat yang Wajib Diketahui",
        level: "L1",
        pertanyaan: "Meskipun jumlah malaikat Allah Swt. sangat banyak dan tidak terhitung, jumlah malaikat yang wajib diimani dan diketahui secara terperinci nama beserta tugasnya oleh setiap muslim adalah berjumlah 10 malaikat.\n\nApakah pernyataan di atas BENAR atau SALAH?",
        opsi: [
            "BENAR",
            "SALAH"
        ],
        kunci: 0,
        penjelasan: "BENAR. Jumlah malaikat secara keseluruhan hanya diketahui oleh Allah Swt.. Namun, berdasarkan ijmak para ulama, ada 10 nama malaikat yang wajib dihafal dan diyakini tugas-tugasnya oleh setiap individu muslim (fardhu 'ain)."
    },

    // Soal 14 (Benar/Salah)
    {
        num: 14,
        tipe: "pg",
        topik: "Aqidah — B/S Bahasa Kitab Injil",
        level: "L1",
        pertanyaan: "Kitab suci Injil diturunkan oleh Allah Swt. kepada Nabi Isa a.s. dengan menggunakan bahasa Suryani untuk membimbing kaum Bani Israil.\n\nApakah pernyataan di atas BENAR atau SALAH?",
        opsi: [
            "BENAR",
            "SALAH"
        ],
        kunci: 0,
        penjelasan: "BENAR. Kitab Injil diturunkan kepada Nabi Isa a.s. dalam bahasa Suryani. Kitab ini menjadi pegangan kaum Bani Israil pada masanya sebelum disempurnakan oleh kedatangan Al-Qur'an."
    },

    // Soal 15 (Benar/Salah)
    {
        num: 15,
        tipe: "pg",
        topik: "Akhlak — B/S Klasifikasi Syukur Lisan",
        level: "L2",
        pertanyaan: "Mengucapkan kalimat اَلْحَمْدُ لِلّٰهِ رَبِّ الْعَالَمِيْنَ (Alhamdulillahirabbil 'alamin) setiap kali menyelesaikan pekerjaan atau mendapat kebaikan merupakan perwujudan dari rasa syukur dalam dimensi perbuatan anggota badan (syukur bil jawarih).\n\nApakah pernyataan di atas BENAR atau SALAH?",
        opsi: [
            "BENAR",
            "SALAH"
        ],
        kunci: 1,
        penjelasan: "SALAH. Mengucapkan kalimat pujian hamdalah merupakan bentuk syukur bil lisan (syukur melalui ucapan), sedangkan syukur bil jawarih adalah bersyukur melalui tindakan fisik anggota badan untuk ketaatan."
    },

    // Soal 16 (Benar/Salah)
    {
        num: 16,
        tipe: "pg",
        topik: "Aqidah — B/S Hukum Syariat Kitab Terdahulu",
        level: "L3",
        pertanyaan: "Mengimani kitab-kitab Allah terdahulu sebelum Al-Qur'an berarti kita sebagai umat Islam wajib mempercayai keberadaannya sekaligus wajib mempraktikkan seluruh aturan hukum syariat di dalamnya dalam ibadah harian kita saat ini.\n\nApakah pernyataan di atas BENAR atau SALAH?",
        opsi: [
            "BENAR",
            "SALAH"
        ],
        kunci: 1,
        penjelasan: "SALAH. Kita hanya wajib memercayai bahwa kitab terdahulu benar-benar merupakan wahyu dari Allah Swt. di masanya. Namun, secara hukum syariat (syar'u man qablana), syariat kitab suci terdahulu telah dihapus dan disempurnakan oleh syariat Al-Qur'an yang dibawa oleh Nabi Muhammad saw.."
    },

    // ── BAGIAN 2: ASPEK QUR'AN-HADIS BAB 2 (SOAL 17 s.d. 20) ──

    // Soal 17 (PG Standar)
    {
        num: 17,
        tipe: "pg",
        topik: "Al-Qur'an & Hadis — Kandungan Q.S. Ali 'Imran/3: 102 (Takwa)",
        level: "L1",
        stimulus: "Mari kita baca kembali dengan saksama firman Allah Swt. dalam Q.S. Ali 'Imran/3: 102 berikut:\n\nوَلَا تَمُوْتُنَّ اِلَّا وَاَنْتُمْ مُّسْلِمُوْنَ",
        pertanyaan: "Berdasarkan potongan ayat di atas, apa perintah tegas yang ditekankan Allah Swt. kepada orang-orang beriman?",
        opsi: [
            "Perintah untuk melaksanakan ibadah haji ke Baitullah sesegera mungkin",
            "Perintah menjaga keimanan dan keislaman secara konsisten (istiqamah) sepanjang hayat hingga ajal tiba",
            "Larangan berteman dengan orang yang berbeda keyakinan di sekolah",
            "Anjuran memperbanyak sedekah hanya ketika dalam kondisi sakit keras"
        ],
        kunci: 1,
        penjelasan: "Kalimat “wa lā tamūtunna illā wa antum muslimūn” berarti \"dan janganlah kamu mati kecuali dalam keadaan Muslim\". Ini adalah perintah untuk terus menjaga konsistensi (istiqamah) ketakwaan dan identitas keislaman kita setiap waktu."
    },

    // Soal 18 (PG Standar)
    {
        num: 18,
        tipe: "pg",
        topik: "Tajwid — Kaidah Tajwid Ghunnah Musyaddadah",
        level: "L1",
        pertanyaan: "Di bawah ini, lafal manakah yang mengandung hukum bacaan Ghunnah Musyaddadah (membaca dengan suara mendengung ditahan di pangkal hidung)?",
        opsi: [
            "اٰمَنُوْا",
            "وَلَا تَمُوْتُنَّ",
            "حَقَّ تُقٰتِهٖ",
            "مُّسْلِمُوْنَ"
        ],
        kunci: 1,
        penjelasan: "Ghunnah Musyaddadah terjadi jika terdapat huruf Nun bertasydid (نّ) atau Mim bertasydid (مّ). Pada lafal تَمُوْتُنَّ (tamūtunna), terdapat huruf Nun bertasydid di tengah kata yang wajib dibaca mendengung ditahan selama 2-3 ketukan."
    },

    // Soal 19 (PGK — 2 Jawaban Benar)
    {
        num: 19,
        tipe: "pgk",
        topik: "Tajwid — PGK Klasifikasi Qalqalah Sughra dan Kubra",
        level: "L2",
        pertanyaan: "Berdasarkan hukum tajwid قَلْقَلَة (Qalqalah), manakah dua analisis lafal yang benar di bawah ini? (Pilihlah dua jawaban yang benar!)",
        opsi: [
            "Lafal تَجْزِيْ mengandung Qalqalah Sughra karena terdapat huruf Jim (ج) yang sukun asli di tengah kata.",
            "Lafal تَجْزِيْ mengandung Qalqalah Kubra karena dipantulkan secara sangat tebal dan besar.",
            "Lafal حَقٌّ jika dibaca berhenti (waqaf) mengandung Qalqalah Kubra karena huruf Qaf (ق) bertasydid berada di akhir bacaan.",
            "Lafal حَقٌّ jika dibaca terus (washal) mengandung Qalqalah Sughra karena huruf Qaf berada di tengah bacaan."
        ],
        kunci: [0, 2],
        penjelasan: "Qalqalah Sughra terjadi jika huruf qalqalah berharakat sukun asli di tengah kata (contoh: Jim pada تَجْزِيْ). Qalqalah Kubra terjadi jika huruf qalqalah berada di akhir kata dan dibaca sukun karena waqaf (contoh: Qaf bertasydid pada حَقٌّ yang di-waqaf-kan)."
    },

    // Soal 20 (Benar/Salah)
    {
        num: 20,
        tipe: "pg",
        topik: "Al-Qur'an & Hadis — B/S Kemandirian Tanggung Jawab Akhirat (Q.S. Luqman/31: 33)",
        level: "L3",
        stimulus: "Q.S. Luqman/31: 33 memperingatkan manusia tentang dahsyatnya suasana pertanggungjawaban amal di hari akhir.",
        pertanyaan: "Berdasarkan kandungan Q.S. Luqman/31: 33, pada hari kiamat kelak, seorang anak diperbolehkan untuk menanggung dan menebus seluruh dosa-dosa yang dilakukan oleh kedua orang tuanya agar mereka terbebas dari siksa neraka.\n\nApakah pernyataan di atas BENAR atau SALAH?",
        opsi: [
            "BENAR",
            "SALAH"
        ],
        kunci: 1,
        penjelasan: "SALAH. Ayat ini menegaskan hal yang sebaliknya: \"seorang bapak tidak dapat menolong anaknya, dan seorang anak tidak dapat (pula) menolong bapaknya sedikit pun\". Di akhirat kelak, setiap individu bertanggung jawab penuh secara mandiri atas amal perbuatannya sendiri."
    },

    // ── BAGIAN 3: ASPEK FIKIH & SKI BAB 2 (SOAL 21 s.d. 24) ──

    // Soal 21 (PG Standar)
    {
        num: 21,
        tipe: "pg",
        topik: "Fikih — Syarat Wajib Salat Jumat",
        level: "L1",
        pertanyaan: "Di bawah ini, manakah kelompok muslim yang wajib hukumnya untuk melaksanakan ibadah Salat Jumat berjamaah di masjid?",
        opsi: [
            "Anak laki-laki yang masih balita (belum baligh)",
            "Musafir yang sedang dalam perjalanan jauh yang melelahkan",
            "Laki-laki muslim dewasa, berakal sehat, merdeka, dan menetap (mukim)",
            "Orang sakit parah yang tidak sanggup bangun dari tempat tidurnya"
        ],
        kunci: 2,
        penjelasan: "Salat Jumat berstatus hukum fardhu 'ain (wajib bagi individu) yang memenuhi syarat wajib: beragama Islam, baligh, berakal sehat, laki-laki, sehat fisik, merdeka, serta menetap/mukim di daerah tersebut."
    },

    // Soal 22 (PG Standar)
    {
        num: 22,
        tipe: "pg",
        topik: "SKI — Lembaga Baitul Hikmah Daulah Abbasiyah",
        level: "L1",
        stimulus: "Pada masa kejayaan Daulah Abbasiyah di Baghdad, didirikan sebuah institusi megah bernama بَيْتُ الْحِكْمَةِ (Baitul Hikmah) yang menjadi simbol keemasan intelektual Islam di dunia.",
        pertanyaan: "Apa peran dan fungsi utama dari lembaga بَيْتُ الْحِكْمَةِ (Baitul Hikmah) bentukan masa Abbasiyah tersebut?",
        opsi: [
            "Sebagai pusat pelatihan militer berkuda untuk memperluas wilayah kekuasaan daulah",
            "Sebagai pusat perpustakaan megah, akademi penerjemahan buku sains, dan lembaga riset ilmiah terbesar di dunia",
            "Sebagai tempat pengumpulan harta rampasan perang dan kas negara",
            "Sebagai pengadilan tinggi untuk mengadili perselisihan antarwilayah kerajaan"
        ],
        kunci: 1,
        penjelasan: "Baitul Hikmah (House of Wisdom) didirikan sebagai perpustakaan pribadi oleh Khalifah Harun al-Rasyid dan dikembangkan oleh Khalifah al-Ma'mun menjadi pusat penerjemahan naskah Yunani/Sanskerta, perpustakaan umum, serta pusat pengembangan riset sains global."
    },

    // Soal 23 (PGK — 2 Jawaban Benar)
    {
        num: 23,
        tipe: "pgk",
        topik: "SKI — PGK Ilmuwan Muslim Abbasiyah (Ibnu Sina & Al-Khwarizmi)",
        level: "L2",
        pertanyaan: "Manakah di antara pernyataan mengenai ilmuwan muslim masa Daulah Abbasiyah di bawah ini yang benar dan akurat? (Pilihlah dua jawaban yang benar!)",
        opsi: [
            "Ibnu Sina (اِبْنُ سِيْنَا) merupakan ilmuwan muslim yang dijuluki sebagai \"Bapak Kedokteran Modern\" berkat mahakaryanya Al-Qanun fi at-Tibb.",
            "Al-Khwarizmi (اَلْخَوَارِزْمِيّ) adalah ilmuwan penemu alat operasi bedah modern yang digunakan di Eropa.",
            "Al-Khwarizmi (اَلْخَوَارِزْمِيّ) merupakan tokoh jenius penemu angka nol dan peletak dasar ilmu Aljabar dalam matematika.",
            "Ibnu Sina merupakan tokoh astronomi yang berhasil menciptakan alat penentu arah kiblat bertenaga angin."
        ],
        kunci: [0, 2],
        penjelasan: "Ibnu Sina (Avicenna) sangat termasyhur di bidang kedokteran dengan bukunya Al-Qanun fi at-Tibb. Al-Khwarizmi adalah ilmuwan matematika brilian penemu konsep Aljabar dan algoritma serta angka nol."
    },

    // Soal 24 (Benar/Salah)
    {
        num: 24,
        tipe: "pg",
        topik: "Fikih — B/S Hukum Mendengarkan Khutbah Jumat",
        level: "L3",
        stimulus: "Saat khatib sedang menyampaikan dua khutbah Jumat di atas mimbar, suasana di dalam masjid harus dijaga keheningannya agar rukun khutbah didengarkan dengan baik.",
        pertanyaan: "Mendengarkan khutbah Jumat yang disampaikan oleh khatib di atas mimbar berstatus hukum wajib bagi jemaah, sehingga jemaah dilarang keras berbicara, bercanda, atau bermain gawai karena dapat membatalkan atau merusak pahala Salat Jumat mereka.\n\nApakah pernyataan di atas BENAR atau SALAH?",
        opsi: [
            "BENAR",
            "SALAH"
        ],
        kunci: 0,
        penjelasan: "BENAR. Berdasarkan sabda Rasulullah saw., menegur teman dengan berkata \"diamlah\" saja saat khutbah berlangsung sudah membuat ibadah Jumat jemaah sia-sia. Jemaah diwajibkan mendengarkan khutbah dengan khusyuk."
    }
];

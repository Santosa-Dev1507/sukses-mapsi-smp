// ═══════════════════════════════════════════════════════════
// DATA SOAL LATIHAN HARIAN
// Bab Fikih — Penyelenggaraan Jenazah
// 10 Soal PG Standar Kompetensi Tinggi (L1, L2, L3)
// ═══════════════════════════════════════════════════════════
const latihanData = [
    {
        no: 1,
        topik: "Syarat Memandikan Jenazah",
        level: "L1",
        stimulus: "Dalam sebuah musibah kecelakaan, terdapat beberapa korban meninggal dunia dengan kondisi yang berbeda-beda. Di antaranya ada seorang muslim yang meninggal saat bertempur langsung di medan perang membela agama Islam, seorang bayi yang lahir dalam kondisi sudah meninggal, dan seorang non-muslim.",
        pertanyaan: "Berdasarkan syariat Islam, kondisi jenazah yang <strong>TIDAK boleh</strong> dimandikan adalah...",
        opsi: [
            "Jenazah bayi yang lahir dalam kondisi sudah tidak bernyawa",
            "Jenazah korban kecelakaan yang tubuhnya hanya ditemukan sebagian",
            "Jenazah seorang muslim yang gugur sebagai syahid dalam peperangan membela Islam",
            "Jenazah orang berutang yang belum melunasi kewajibannya semasa hidup"
        ],
        kunci: 2,
        penjelasan: "Salah satu syarat mutlak jenazah dimandikan adalah <strong>bukan karena mati syahid (mati dalam peperangan membela agama Islam)</strong>. Sementara itu, jenazah bayi muslim, korban kecelakaan yang ditemukan sebagian tubuhnya, serta orang berutang tetap wajib dimandikan."
    },
    {
        no: 2,
        topik: "Mengafani Jenazah Perempuan",
        level: "L1",
        stimulus: "Ketika menyiapkan kain kafan untuk jenazah perempuan, fikih Islam menggariskan penggunaan <strong>5 (lima) lembar kain</strong> dengan urutan peruntukan yang rapi guna menjaga kehormatan aurat jenazah perempuan secara sempurna.",
        pertanyaan: "Berdasarkan rincian urutan tersebut, fungsi dari <strong>lembar ke-2</strong> dan <strong>lembar ke-3</strong> kain kafan secara berurutan adalah untuk...",
        opsi: [
            "Baju kurung dan kerudung kepala",
            "Penutup seluruh badan dan baju kurung",
            "Kerudung kepala dan baju kurung",
            "Penutup pinggul-paha dan kerudung kepala"
        ],
        kunci: 2,
        penjelasan: "Berdasarkan tata cara mengafani jenazah perempuan, peruntukan kelima lembar kain kafan adalah: (a) Lembar 1 untuk menutupi seluruh badan, (b) <strong>Lembar 2 sebagai kerudung kepala</strong>, (c) <strong>Lembar 3 sebagai baju kurung</strong>, (d) Lembar 4 menutup pinggang hingga kaki, dan (e) Lembar 5 menutup pinggul dan paha."
    },
    {
        no: 3,
        topik: "Rukun & Doa Shalat Jenazah",
        level: "L1",
        kutipan: "َأ... اللَّهُمَّ اغْفِرْ لَهُ وَارْحَمْهُ وَعَافِهِ وَاعْفُ عَنْهُ",
        pertanyaan: "Lafal doa di atas dibaca pada takbir ketiga shalat jenazah. Jika jenazah yang dishalati adalah seorang <strong>perempuan</strong>, penyesuaian kata ganti (<em>dhamir</em>) yang tepat pada lafal yang bergaris bawah adalah...",
        opsi: [
            "Mengubah akhiran hu (ـهُ) menjadi hum (ـهُمْ)",
            "Mengubah akhiran hu (ـهُ) menjadi hā (ـهَا)",
            "Mengubah akhiran hu (ـهُ) menjadi ka (ـكَ)",
            "Membiarkan lafal tetap seperti aslinya tanpa perubahan"
        ],
        kunci: 1,
        penjelasan: "Bacaan doa pada takbir ketiga menggunakan kata ganti (<em>dhamir</em>) <em>hu</em> (ـهُ) untuk jenazah laki-laki, dan disesuaikan menjadi <strong><em>hā</em> (ـهَا)</strong> jika jenazah adalah perempuan (menjadi: <em>Allahummaghfir lahā warhamhā wa 'āfihā wa'fu 'anhā</em>)."
    },
    {
        no: 4,
        topik: "Prioritas Imam Shalat Jenazah",
        level: "L2",
        stimulus: "Pak Ahmad, seorang tokoh masyarakat yang saleh, wafat. Semasa hidup, beliau sempat berwasiat agar shalat jenazahnya dipimpin oleh menantunya yang juga seorang hafiz Al-Qur'an. Namun, pada saat takziah, hadir pula ulama besar setempat dan anak kandung Pak Ahmad yang juga ingin mengimami shalat.",
        pertanyaan: "Berdasarkan skala prioritas utama dalam penyelenggaraan shalat jenazah, siapakah yang paling berhak dan utama menjadi imam?",
        opsi: [
            "Anak kandung Pak Ahmad karena memiliki hubungan darah langsung",
            "Ulama besar setempat demi menghormati status keilmuannya di wilayah tersebut",
            "Menantu Pak Ahmad karena merupakan pihak yang diwasiatkan secara langsung oleh jenazah",
            "Menggabungkan ketiganya memimpin shalat secara bersama-sama dalam satu shaf"
        ],
        kunci: 2,
        penjelasan: "Urutan pihak yang paling utama melaksanakan shalat jenazah adalah: (a) <strong>orang yang diwasiatkan oleh si jenazah dengan syarat tidak fasik atau ahli bid'ah</strong>; (b) ulama atau pemimpin terkemuka setempat; (c) orang tua jenazah; (d) anak-anak jenazah, dst. Karena menantunya diwasiatkan langsung dan bukan orang fasik, maka ia paling berhak mengimami."
    },
    {
        no: 5,
        topik: "Posisi Berdiri Imam Shalat Jenazah",
        level: "L2",
        stimulus: "Ketika melayat di sebuah rumah duka, kalian diminta menjadi imam shalat jenazah untuk seorang <strong>jenazah perempuan dewasa</strong>.",
        pertanyaan: "Berdasarkan tuntunan sunah Rasulullah saw., posisi berdiri imam saat menyalati jenazah perempuan tersebut yang tepat adalah...",
        opsi: [
            "Sejajar dengan kepala jenazah",
            "Sejajar dengan perut jenazah",
            "Sejajar dengan kedua kaki jenazah",
            "Berdiri di sebelah kanan jenazah menghadap kiblat"
        ],
        kunci: 1,
        penjelasan: "Ketentuan shalat jenazah menetapkan bahwa posisi berdiri imam adalah <strong>sejajar dengan kepala jika jenazah laki-laki</strong>, dan <strong>sejajar dengan perut jika jenazah perempuan</strong>."
    },
    {
        no: 6,
        topik: "Bentuk Galian Lubang Kubur",
        level: "L2",
        stimulus: "Ketika menyiapkan pemakaman untuk seorang muslim, para penggali kubur harus memperhatikan jenis galian tanah. Terdapat dua model galian bagian bawah liang kubur: (1) liang yang dibuat khusus menjorok ke arah kiblat di dasar kubur pada bagian samping, dan (2) liang yang dibuat khusus di dasar kubur pada bagian tengahnya.",
        pertanyaan: "Model galian bawah yang disunnahkan untuk jenazah muslim adalah model nomor...",
        opsi: [
            "Model (1) yang disebut liang lahat, sedangkan model (2) disebut syaq (untuk non-muslim)",
            "Model (2) yang disebut liang lahat, sedangkan model (1) disebut syaq",
            "Kedua model tersebut sama-sama disunnahkan tanpa ada pembedaan status keagamaan",
            "Model (2) karena memudahkan posisi jenazah diletakkan dalam keadaan telentang"
        ],
        kunci: 0,
        penjelasan: "Lubang kubur jenazah muslim disunnahkan dilengkapi dengan <strong>liang lahat</strong> (galian samping menjorok ke arah kiblat), sedangkan lubang model <strong>syaq</strong> (galian tengah di dasar kubur) diperuntukkan bagi jenazah non-muslim."
    },
    {
        no: 7,
        topik: "Waktu Larangan Penguburan",
        level: "L2",
        stimulus: "Proses pengurusan jenazah Pak Salim selesai dikafani dan dishalati tepat pada saat matahari berada tepat di tengah-tengah langit (panas terik menyengat/menjelang waktu zuhur).",
        pertanyaan: "Berdasarkan tata cara menguburkan jenazah, tindakan terbaik yang sebaiknya dilakukan oleh pihak keluarga adalah...",
        opsi: [
            "Langsung menguburkan saat itu juga tanpa menunda sedetik pun",
            "Membawa jenazah ke pemakaman dengan berlari tergesa-gesa",
            "Menunda sejenak penguburan sampai waktu matahari sedikit condong ke barat (masuk waktu zuhur/setelahnya)",
            "Membumbui jenazah dengan es batu agar proses penguburan bisa ditunda hingga keesokan harinya"
        ],
        kunci: 2,
        penjelasan: "Terdapat 3 waktu penguburan yang sebaiknya dihindari, salah satunya adalah <strong>saat matahari berada di tengah-tengah (menjelang zuhur) sampai condong ke barat</strong>. Oleh karena itu, disunnahkan menunda sejenak sampai matahari condong ke barat (masuk waktu zuhur)."
    },
    {
        no: 8,
        topik: "Hukum Fardhu Kifayah",
        level: "L3",
        stimulus: "Di sebuah daerah perumahan padat penduduk, terdapat seorang tunawisma muslim sebatang kara yang ditemukan meninggal dunia di emperan toko. Namun, karena tidak ada yang mengenalinya, warga sekitar bersikap acuh tak acuh dan membiarkan jenazah tersebut tanpa ada tindakan pengurusan hingga seharian penuh.",
        pertanyaan: "Bagaimana tinjauan hukum fikih Islam dan implikasi moral terhadap sikap warga di lingkungan perumahan tersebut?",
        opsi: [
            "Hanya ketua RT setempat yang berdosa karena ia merupakan penanggung jawab wilayah",
            "Warga tidak berdosa karena kewajiban mengurus jenazah hanya berlaku bagi keluarga sedarah",
            "Seluruh kaum muslim yang tinggal di sekitar tempat tersebut menanggung dosa bersama-sama karena abai terhadap kewajiban fardhu kifayah",
            "Hukum pengurusan jenazah berubah menjadi sunah biasa jika jenazah tidak dikenal identitasnya"
        ],
        kunci: 2,
        penjelasan: "Hukum mengurus jenazah adalah fardhu kifayah. Artinya, jika sebagian kaum muslim sudah melaksanakan, maka yang lain terbebas. Sebaliknya, jika tidak ada satu pun yang melaksanakan, maka <strong>seluruh kaum muslim yang berada tidak jauh dari tempat tinggal jenazah tersebut menanggung dosa bersama-sama</strong>."
    },
    {
        no: 9,
        topik: "Batasan Waktu Ta'ziyah",
        level: "L3",
        stimulus: "Keluarga Ibu Sinta dirundung duka mendalam setelah kepergian suaminya. Hingga dua minggu setelah pemakaman, Ibu Sinta masih terus-menerus menangis histeris di dalam kamar. Kerabat dan tetangga pun masih terus berdatangan untuk bertakziah, menyuguhkan obrolan sedih, dan menangis bersama.",
        pertanyaan: "Bagaimana kalian mengevaluasi situasi di atas dikaitkan dengan anjuran pembatasan rentang waktu ta'ziyah selama maksimal 3 hari dalam Islam?",
        opsi: [
            "Ta'ziyah selama berminggu-minggu diperbolehkan agar Ibu Sinta merasa selalu ditemani tanpa batas waktu",
            "Pembatasan 3 hari bertujuan agar keluarga tidak berlarut-larut menanggung kesedihan serta memberikan semangat psikologis untuk meneruskan hidup secara normal",
            "Pembatasan 3 hari ditekankan agar keluarga duka segera melupakan seluruh jasa almarhum di masa lalu",
            "Ta'ziyah dibatasi 3 hari semata-mata untuk menghemat biaya konsumsi makanan yang disiapkan tetangga"
        ],
        kunci: 1,
        penjelasan: "Islam menggariskan waktu ta'ziyah cukup 3 hari. Pembatasan ini memiliki tujuan psikososial yang sangat mulia, yaitu <strong>agar keluarga yang ditimpa musibah tidak berlama-lama menanggung kesedihan</strong>, sekaligus memberikan dorongan moral agar mereka segera bangkit melanjutkan kehidupan secara normal."
    },
    {
        no: 10,
        topik: "Sejarah Hukum Ziarah Kubur",
        level: "L3",
        stimulus: "Nabi Saw. bersabda: \"Aku pernah melarang kalian ziarah kubur. Sekarang lakukanlah, karena ia bisa melembutkan hati, meneteskan air mata, mengingatkan tentang akhirat, dan jangan berkata jorok.\" (H.R. al-Hakīm).",
        pertanyaan: "Bagaimana analisis kalian mengenai sebab terjadinya perubahan hukum ziarah kubur dari yang awalnya dilarang keras di masa awal Islam menjadi disunnahkan di kemudian hari?",
        opsi: [
            "Di masa awal Islam, ziarah kubur dilarang karena kuburan para nabi terdahulu belum selesai dibangun",
            "Awalnya dilarang karena keimanan umat masih lemah dan rawan terjerumus syirik (meratapi berlebihan/meminta pada kubur), kemudian disunnahkan karena iman telah kokoh dan ziarah efektif mengingatkan pada akhirat",
            "Hukum berubah karena ziarah kubur dinilai dapat menaikkan taraf ekonomi para penjaga makam di Madinah",
            "Rasulullah saw. menganjurkan ziarah kubur di masa akhir agar umat Islam fokus mencari harta warisan yang tertimbun di dalam makam"
        ],
        kunci: 1,
        penjelasan: "Pada awal masa Islam, ziarah kubur dilarang keras karena kondisi keimanan kaum muslimin yang masih transisi dari masa jahiliyah, sehingga dikhawatirkan mereka akan meratapi mayat secara berlebihan (<em>niyahah</em>) atau melakukan kesyirikan. Ketika keimanan umat Islam sudah kokoh dan tauhid sudah tertanam kuat, Rasulullah saw. menganjurkan ziarah karena memberikan manfaat spiritual: <strong>melembutkan hati, meneteskan air mata tobat, dan menjadi pengingat kematian/akhirat</strong>."
    }
];

// ═══════════════════════════════════════════════════════════
// DATA SOAL LATIHAN HARIAN
// Bab Fikih — Rukhsah dalam Perspektif Mazhab Fiqh
// 10 Soal PG Standar Kompetensi Tinggi (L1, L2, L3)
// ═══════════════════════════════════════════════════════════
var latihanData = [
    {
        no: 1,
        topik: "Konsep Azimah vs Rukhsah",
        level: "L1",
        stimulus: "Di dalam kajian ushul fikih, Allah Swt. menetapkan hukum taklifi bagi orang mukalaf ke dalam dua kategori besar: <em>'azīmah</em> (ketentuan umum semula) dan <em>rukhṣah</em> (ketentuan pengecualian).",
        pertanyaan: "Pernyataan berikut yang paling tepat menggambarkan perbedaan mendasar antara hukum <em>'azīmah</em> dan <em>rukhṣah</em> adalah...",
        opsi: [
            "<em>'Azīmah</em> merupakan hukum ibadah yang wajib, sedangkan <em>rukhṣah</em> merupakan hukum ibadah yang sunah secara mutlak",
            "<em>'Azīmah</em> adalah hukum asal yang ditetapkan tanpa memandang kondisi darurat/uzur mukalaf, sedangkan <em>rukhṣah</em> adalah keringanan hukum yang diberikan karena adanya uzur atau kesulitan khusus hamba",
            "<em>'Azīmah</em> berlaku khusus bagi umat Nabi Muhammad saw., sedangkan <em>rukhṣah</em> merupakan sisa hukum syariat umat terdahulu",
            "<em>'Azīmah</em> berlaku mutlak bagi masyarakat perkotaan, sedangkan <em>rukhṣah</em> hanya boleh diamalkan oleh masyarakat pedalaman"
        ],
        kunci: 1,
        penjelasan: "Secara bahasa, <em>rukhṣah</em> berarti kelonggaran. Dalam istilah ushul fikih, <em>'azīmah</em> adalah hukum asal yang berlaku secara umum dalam kondisi normal, sedangkan <em>rukhṣah</em> adalah perubahan hukum asal menjadi ringan karena adanya sebab atau uzur tertentu (<em>masyaqqah</em>) demi memberi kemudahan bagi hamba-Nya."
    },
    {
        no: 2,
        topik: "Ketentuan Jarak Safar",
        level: "L1",
        stimulus: "Mazhab-mazhab fiqh memiliki pandangan berbeda mengenai batas minimal jarak perjalanan (<em>safar</em>) yang membolehkan seorang musafir melakukan qashar (meringkas) salat fardhu. Di antaranya diukur menggunakan satuan marhalah, mil, farsakh, atau kilometer modern.",
        pertanyaan: "Di dalam <strong>Mazhab Syafi'i</strong>, jarak minimal safar yang membolehkan seorang muslim untuk mengqashar salat adalah 2 marhalah (16 farsah). Jarak tersebut jika dikonversikan ke dalam ukuran kilometer modern setara dengan sekitar...",
        opsi: [
            "45–50 km",
            "60–65 km",
            "80–83 km",
            "120–130 km"
        ],
        kunci: 2,
        penjelasan: "Berdasarkan ketetapan dalam Mazhab Syafi'i dan jumhur ulama, batas minimal diperbolehkannya melakukan qashar salat adalah perjalanan sepanjang <strong>2 marhalah</strong> atau 16 farsah. Konversi ukuran ini dalam standar kilometer modern adalah berkisar antara <strong>80 hingga 83 kilometer</strong>."
    },
    {
        no: 3,
        topik: "Rukhsah Puasa Ramadan",
        level: "L1",
        stimulus: "وَعَلَى الَّذِينَ يُطِيقُونَهُ فِدْيَةٌ طَعَامُ مِسْكِينٍ<br/><em>\"Dan bagi orang yang berat menjalankannya, wajib membayar fidyah, yaitu memberi makan seorang miskin.\"</em> (Q.S. al-Baqarah/2: 184).",
        pertanyaan: "Berdasarkan dalil ayat di atas, bentuk rukhsah (keringanan) bagi kakek atau nenek renta yang fisiknya sudah sangat lemah dan tidak sanggup lagi berpuasa Ramadan adalah...",
        opsi: [
            "Mengqadha puasa sebanyak hari yang ditinggalkan saat ia sudah kembali sehat di bulan berikutnya",
            "Membayar denda (<em>kafarat</em>) berupa berpuasa selama dua bulan berturut-turut",
            "Membayar fidyah berupa memberi makan satu orang miskin untuk setiap hari puasa yang ditinggalkan",
            "Mengganti ibadah puasanya dengan melaksanakan shalat sunah jumat sebanyak dua rakaat"
        ],
        kunci: 2,
        penjelasan: "Bagi orang yang sangat tua renta (atau peninggal penyakit kronis yang tidak ada harapan sembuh), Al-Qur'an memberikan rukhsah untuk tidak berpuasa. Mereka tidak diwajibkan mengqadha, melainkan wajib membayar <strong>fidyah</strong> (<em>طَعَامُ مِسْكِيْنٍ</em>) berupa memberi makan orang miskin sebanyak hari yang ditinggalkan."
    },
    {
        no: 4,
        topik: "Perbandingan Mazhab: Jamak Salat",
        level: "L1",
        stimulus: "Mayoritas mazhab fiqh (Syafi'i, Maliki, dan Hambali) memperbolehkan umat Islam menggabungkan dua salat fardhu (<em>jamak</em>) di dalam satu waktu karena adanya uzur perjalanan jauh (<em>safar</em>) atau hujan lebat. Namun, terdapat satu mazhab fiqh yang sangat ketat dan melarang salat jamak di luar haji.",
        pertanyaan: "Mazhab fiqh yang melarang keras umat Islam menjamak salat fardhu dalam kondisi perjalanan (<em>safar</em>) maupun hujan, dan menetapkan bahwa salat jamak <strong>hanya boleh</strong> dilakukan saat ibadah haji (wukuf di Arafah dan Muzdalifah) adalah...",
        opsi: [
            "Mazhab Syafi'i",
            "Mazhab Maliki",
            "Mazhab Hanafi",
            "Mazhab Hambali"
        ],
        kunci: 2,
        penjelasan: "<strong>Mazhab Hanafi</strong> memiliki pandangan yang sangat ketat mengenai waktu salat fardhu. Menurut madzhab ini, salat jamak secara fisik (<em>jam'u haqiqi</em>) sama sekali tidak diperbolehkan dalam kondisi safar maupun hujan biasa. Salat jamak hanya sah secara syar'i pada saat ibadah haji, yaitu jamak takdim di Arafah dan jamak takhir di Muzdalifah."
    },
    {
        no: 5,
        topik: "Aplikasi Kasus Salat di Kendaraan",
        level: "L2",
        stimulus: "<em>\"Zuhdi sedang melakukan safar naik kereta api cepat dari Jakarta menuju Surabaya dengan waktu tempuh 10 jam. Waktu salat maghrib dan isya berada sepenuhnya di dalam perjalanan kereta yang melaju cepat tanpa berhenti di stasiun antara.\"</em>",
        pertanyaan: "Bagaimana bentuk penerapan tata cara salat yang paling tepat bagi Zuhdi agar salat fardhunya tetap sah berdasarkan kaidah rukhsah dan menghadap kiblat?",
        opsi: [
            "Menunda salat maghrib dan isya sampai tiba di stasiun Surabaya meskipun waktu isya sudah habis",
            "Berwudhu dengan air di toilet kereta, berdiri menghadap kiblat saat takbiratul ihram (jika memungkinkan), lalu mengerjakan salat jamak qashar (maghrib dan isya diringkas) dengan khusyuk",
            "Cukup melakukan tayamum di kursi kereta, lalu salat dengan isyarat mata menghadap ke arah jalannya kereta saja",
            "Salat wajib tidak boleh dikerjakan di atas kereta, sehingga Zuhdi wajib menggantinya dengan membayar fidyah kepada fakir miskin"
        ],
        kunci: 1,
        penjelasan: "Salat fardhu tidak boleh ditinggalkan dalam kondisi apa pun termasuk saat safar. Solusi syar'inya adalah memanfaatkan rukhsah <strong>salat jamak qashar</strong>. Selama di atas kereta, Zuhdi tetap wajib berwudhu dengan air (karena pasokan air di toilet kereta masih ada/tersedia) dan berusaha berdiri menghadap kiblat saat mengawali salatnya."
    },
    {
        no: 6,
        topik: "Aplikasi Tayamum dalam Mazhab",
        level: "L2",
        stimulus: "<em>\"Seorang pasien di rumah sakit mengalami patah tulang dan seluruh tangannya dibalut gips medis sehingga tidak boleh terkena air sama sekali. Ia ingin bersuci untuk melaksanakan salat fardhu dengan cara bertayamum menggunakan debu tipis yang menempel di dinding/tembok kamar rumah sakit.\"</em>",
        pertanyaan: "Bagaimana status keabsahan tayamum pasien tersebut jika ditinjau dari ketentuan syarat debu tayamum di dalam <strong>Mazhab Syafi'i</strong>?",
        opsi: [
            "Sah secara mutlak, karena Mazhab Syafi'i memperbolehkan tayamum menggunakan semen, batu poles, atau kayu bersih tanpa debu",
            "Sah, asalkan dinding atau tembok tersebut benar-benar mengandung debu tanah (<em>turāb</em>) yang suci dan debunya dapat berpindah ke wajah serta tangan saat diusap",
            "Tidak sah, karena tayamum menurut Mazhab Syafi'i hanya boleh menggunakan pasir kasar yang diambil langsung dari padang pasir",
            "Tidak sah, karena orang yang sakit parah dilarang bertayamum dan wajib mengganti salatnya di hari lain setelah sembuh"
        ],
        kunci: 1,
        penjelasan: "Di dalam Mazhab Syafi'i, syarat utama tayamum adalah menggunakan debu tanah yang suci (<em>turābun thāhirun</em>). Menepuk dinding atau tembok rumah sakit hukumnya <strong>sah</strong> untuk tayamum, dengan catatan dinding tersebut berdebu tanah yang suci dan partikel debunya dapat menempel dan berpindah (<em>naql</em>) ke organ tayamum (wajah dan tangan) ketika diusap."
    },
    {
        no: 7,
        topik: "Aplikasi Faqidut Thahurain",
        level: "L2",
        stimulus: "<em>\"Sebuah pesawat terbang sedang mengalami turbulensi hebat di atas samudra. Waktu salat subuh akan segera habis, sementara toilet pesawat kehabisan pasokan air bersih dan tidak ada debu tanah yang suci untuk tayamum.\"</em>",
        pertanyaan: "Berdasarkan ketetapan resmi <strong>Mazhab Syafi'i</strong>, tindakan apa yang wajib dilakukan oleh seorang penumpang muslim di dalam pesawat tersebut?",
        opsi: [
            "Menunda salat subuh sampai pesawat mendarat di bandara tujuan meskipun waktu subuhnya telah habis",
            "Tetap melaksanakan salat subuh tanpa wudhu maupun tayamum demi menghormati waktu (<em>li-hurmatil-waqti</em>), dan wajib mengulangi (<em>i'adah</em>) salat tersebut ketika telah menemukan air/debu setelah mendarat",
            "Membayar fidyah berupa memberi makan orang miskin sebagai pengganti salat subuh yang ditinggalkan",
            "Melakukan tayamum isyarat dengan meniup udara kosong, dan salatnya dinilai sah mutlak tanpa perlu mengulang"
        ],
        kunci: 1,
        penjelasan: "Kondisi tidak adanya air dan debu tanah dinamakan <strong>faqidut thahurain</strong> (kehilangan dua alat bersuci). Menurut Mazhab Syafi'i, orang yang berada dalam kondisi ini tetap wajib shalat pada waktunya demi menghormati kesucian waktu shalat (<em>li-hurmatil-waqti</em>). Namun, karena salatnya dikerjakan dalam keadaan tidak suci dari hadas, maka ia <strong>wajib mengulangi (meng-qadha/i'adah)</strong> salat tersebut setelah menemukan air atau debu tanah kelak."
    },
    {
        no: 8,
        topik: "Analisis Kelalaian Niat Jamak",
        level: "L3",
        stimulus: "<em>\"Fariz sedang melaksanakan salat zuhur di masjid dalam perjalanan safarnya. Pada rakaat pertama, ia lupa berniat menjamak salat ashar ke dalam zuhur (jamak takdim). Baru pada saat duduk tasyahud awal di rakaat kedua, Fariz teringat dan langsung meniatkan di dalam hatinya untuk menjamak salat zuhurnya dengan ashar.\"</em>",
        pertanyaan: "Bagaimana analisis kalian terhadap keabsahan salat jamak takdim yang dilakukan oleh Fariz berdasarkan hukum fikih Mazhab Syafi'i?",
        opsi: [
            "Salat jamaknya batal total karena niat jamak harus selalu diucapkan secara lisan sebelum melafalkan takbiratul ihram salat pertama",
            "Salat jamak takdimnya tetap sah, karena syarat niat jamak takdim di dalam Mazhab Syafi'i boleh dilakukan di dalam rentang salat pertama sebelum salam, meskipun yang paling utama (<em>afdhal</em>) adalah saat takbiratul ihram",
            "Salat jamaknya tidak sah karena niat jamak harus diulang kembali sebanyak tiga kali saat sujud terakhir di salat pertama",
            "Salat jamak takdimnya sah, dengan syarat ia wajib melakukan sujud sahwi sebelum salam untuk membayar kelalaian niatnya"
        ],
        kunci: 1,
        penjelasan: "Di dalam Mazhab Syafi'i, salah satu syarat sah jamak takdim adalah melakukan niat jamak pada salat yang pertama. Waktu berniat ini sangat longgar, yaitu <strong>boleh dilakukan kapan saja di dalam rentang salat yang pertama (zuhur) sebelum ia mengucapkan salam</strong>, meskipun waktu yang paling utama adalah bersamaan dengan takbiratul ihram salat pertama."
    },
    {
        no: 9,
        topik: "Analisis Batas Wilayah Safar",
        level: "L3",
        stimulus: "<em>\"Rumah Rudi berada di wilayah Kecamatan Bojong. Ia berniat melakukan safar ke luar kota sejauh 120 km. Ketika waktu zuhur tiba, Rudi masih berada di dalam mobilnya yang sedang mengantre kemacetan parah di area pom bensin yang letaknya masih di dalam batas administratif desa tempat tinggal Rudi.\"</em>",
        pertanyaan: "Berdasarkan analisis batas wilayah musafir (<em>mabda'us-safar</em>), bolehkah Rudi langsung mengqashar salat zuhurnya di pom bensin tersebut? Mengapa?",
        opsi: [
            "Boleh, karena Rudi sudah memiliki niat safar yang bulat sejak dari rumah dan jarak tempuh tujuannya melebihi 80 km",
            "Boleh, karena kemacetan lalu lintas dikategorikan sebagai kondisi kesulitan (<em>masyaqqah</em>) yang membolehkan qashar secara darurat",
            "Belum boleh, karena syarat sahnya qashar bagi musafir menurut jumhur ulama (termasuk Syafi'i) adalah perjalanannya harus sudah melewati batas terluar wilayah administratif (gapura/tapal batas) desa tempat tinggalnya",
            "Belum boleh, karena mengqashar salat hanya diperbolehkan jika Rudi mengendarai transportasi umum seperti bus atau kereta api, bukan mobil pribadi"
        ],
        kunci: 2,
        penjelasan: "Niat perjalanan dan jarak jauh saja belum cukup untuk memulai qashar. Syarat dimulainya rukhsah qashar (<em>mabda'us-safar</em>) menurut jumhur ulama adalah <strong>musafir tersebut harus sudah melewati batas administratif terluar (seperti gapura batas desa/kecamatan) tempat ia tinggal</strong>. Selama Rudi masih berada di dalam batas desanya sendiri, ia masih berstatus mukim dan belum sah melakukan qashar salat."
    },
    {
        no: 10,
        topik: "Analisis Filosofis Kaidah Fikih",
        level: "L3",
        stimulus: "Di dalam kajian <em>Qawaidul Fiqhiyyah</em>, terdapat sebuah kaidah emas yang berbunyi:<br/>اَلْمَشَقَّةُ تَجْلِبُ التَّيْسِيْرُ<br/>Artinya: <em>\"Kesukaran itu dapat menarik (mendatangkan) kemudahan.\"</em>",
        pertanyaan: "Bagaimana analisis kalian mengenai relevansi kaidah di atas terhadap perumusan hukum rukhsah agar syariat Islam tetap kokoh, namun tidak disalahgunakan menjadi sarana meremehkan (<em>tasāhul</em>) agama oleh umat?",
        opsi: [
            "Kaidah tersebut membebaskan umat Islam untuk memodifikasi atau meninggalkan semua bentuk ibadah fardhu jika mereka merasa lelah",
            "Kaidah tersebut membuktikan bahwa hukum-hukum asli syariat (<em>'azīmah</em>) sifatnya tidak sempurna, sehingga membutuhkan revisi berkala dari kesepakatan manusia",
            "Kaidah tersebut menegaskan fleksibilitas syariat yang akomodatif terhadap keterbatasan manusia; kemudahan (rukhsah) hanya berlaku jika ada kesukaran riil (<em>masyaqqah</em>) yang diakui syara', bukan kesukaran buatan atau kemalasan belaka",
            "Kaidah tersebut melarang keras pengambilan rukhsah jika pelaku kesulitan tersebut masih memiliki harta yang cukup untuk membayar denda/kafarat"
        ],
        kunci: 2,
        penjelasan: "Kaidah <em>\"Al-masyaqqatu tajlibut-taysīr\"</em> adalah bukti keindahan dan kepedulian syariat Islam yang fleksibel (tidak kaku). Namun, Islam melarang keras sikap menggampangkan agama (<em>tasāhul</em>). Keringanan (<em>rukhṣah</em>) hanya diberikan pada kondisi darurat atau kesulitan riil yang diakui oleh syara' (seperti sakit, safar, atau ancaman keselamatan jiwa), bukan kesukaran buatan atau kemalasan personal."
    }
];

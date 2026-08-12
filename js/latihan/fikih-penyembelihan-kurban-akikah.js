// ═══════════════════════════════════════════════════════════
// DATA SOAL LATIHAN HARIAN
// Bab Fikih — Penyembelihan Hewan, Kurban, dan Akikah
// 10 Soal PG Standar Kompetensi Tinggi (L1, L2, L3)
// ═══════════════════════════════════════════════════════════
var latihanData = [
    {
        no: 1,
        topik: "Definisi & Esensi Penyembelihan",
        level: "L1",
        stimulus: "وَلَا تَأْكُلُوا مِمَّا لَمْ يُذْكَرِ اسْمُ اللَّهِ عَلَيْهِ وَإِنَّهُ لَفِسْقٌ<br/>Artinya: <em>\"Dan janganlah kamu memakan binatang-binatang yang tidak disebut nama Allah ketika menyembelihnya. Sesungguhnya perbuatan yang semacam itu adalah suatu kefasikan...\"</em> (Q.S. al-An'am/6: 121).",
        pertanyaan: "Proses penyembelihan hewan halal merupakan penentu utama kehalalan daging yang akan dikonsumsi umat Islam. Secara syar'i, bagian leher hewan yang wajib terputus secara sempurna agar sembelihan dinyatakan sah dan halal adalah...",
        opsi: [
            "Saluran pernapasan (tenggorokan), saluran makanan (kerongkongan), dan tulang leher bagian belakang",
            "Saluran pernapasan (tenggorokan), saluran makanan (kerongkongan), dan dua urat nadi/leher",
            "Saluran pencernaan, urat nadi utama, dan sumsum tulang belakang",
            "Saluran makanan (kerongkongan), dua urat nadi, dan kulit leher bagian atas"
        ],
        kunci: 1,
        penjelasan: "Berdasarkan ketentuan syariat Islam, penyembelihan dinyatakan sah apabila memotong bagian leher hewan hingga memutuskan tiga saluran utama, yaitu: saluran pernapasan (<em>hulqum</em>), saluran makanan (<em>mari'</em>), dan dua urat nadi/leher (<em>wadajain</em>)."
    },
    {
        no: 2,
        topik: "Syarat Alat Penyembelihan & Hadis Nabi",
        level: "L1",
        stimulus: "Nabi Muhammad saw. dalam hadisnya bersabda: <em>“...dengan ketentuan alat yang digunakan bukan gigi dan kuku, aku akan memberitahukan kepada kalian mengapa hal ini dilarang, hal itu karena gigi termasuk tulang sedangkan kuku merupakan alat penyembelih yang dipakai penduduk Habsah (Ethiopia).”</em> (H.R. Bukhari).",
        pertanyaan: "Berdasarkan hadis di atas, bahan alat penyembelihan yang dilarang keras untuk digunakan dalam memotong leher hewan adalah...",
        opsi: [
            "Batu kali yang tajam dan bambu runcing",
            "Gigi (tulang) dan kuku",
            "Besi berkarat dan tembaga tumpul",
            "Kaca tipis dan logam kuningan"
        ],
        kunci: 1,
        penjelasan: "Rasulullah saw. melarang keras penggunaan kuku dan gigi untuk menyembelih hewan. Alasan pelarangan tersebut karena gigi dikategorikan sebagai tulang, sedangkan kuku merupakan alat penyembelihan yang biasa dipakai oleh penduduk Habsah (Ethiopia)."
    },
    {
        no: 3,
        topik: "Ketentuan Umur Hewan Kurban",
        level: "L1",
        stimulus: "<table class=\"w-full border-collapse border border-stone-300 text-sm mb-4 mt-2\"><thead><tr class=\"bg-stone-100\"><th class=\"border border-stone-300 px-2 py-1\">No</th><th class=\"border border-stone-300 px-2 py-1\">Jenis Hewan Kurban</th><th class=\"border border-stone-300 px-2 py-1\">Batas Minimal Umur</th></tr></thead><tbody><tr><td class=\"border border-stone-300 px-2 py-1 text-center font-bold\">1</td><td class=\"border border-stone-300 px-2 py-1\">Sapi atau Kerbau</td><td class=\"border border-stone-300 px-2 py-1\">a. Berumur 5 tahun atau lebih</td></tr><tr><td class=\"border border-stone-300 px-2 py-1 text-center font-bold\">2</td><td class=\"border border-stone-300 px-2 py-1\">Unta</td><td class=\"border border-stone-300 px-2 py-1\">b. Berumur 2 tahun</td></tr><tr><td class=\"border border-stone-300 px-2 py-1 text-center font-bold\">3</td><td class=\"border border-stone-300 px-2 py-1\">Kambing biasa</td><td class=\"border border-stone-300 px-2 py-1\">c. Berumur 1 tahun atau telah berganti gigi</td></tr><tr><td class=\"border border-stone-300 px-2 py-1 text-center font-bold\">4</td><td class=\"border border-stone-300 px-2 py-1\">Domba / Biri-biri</td><td class=\"border border-stone-300 px-2 py-1\">d. Berumur 2 tahun</td></tr></tbody></table>",
        pertanyaan: "Pasangan jenis hewan kurban dan batas minimal usia kelayakan sembelih yang benar pada tabel di atas ditunjukkan oleh...",
        opsi: [
            "1 - b dan 3 - c",
            "1 - b dan 2 - a",
            "2 - a dan 4 - d",
            "3 - d dan 4 - b"
        ],
        kunci: 1,
        penjelasan: "Berdasarkan ketentuan fikih kurban pada buku PAI Kelas IX, batas minimal umur hewan kurban adalah: sapi/kerbau berumur 2 tahun, unta berumur 5 tahun atau lebih, kambing berumur 2 tahun, dan domba/biri-biri berumur 1 tahun atau telah berganti gigi."
    },
    {
        no: 4,
        topik: "Esensi Akikah & Hadis Tergadai",
        level: "L1",
        stimulus: "عَنْ سَمُرَةَ عَنِ النَّبِيِّ ﷺ قَالَ كُلُّ غُلَامٍ مُرْتَهَنَّ بِعَقِيْقَتِهِ تُذْبَحُ عَنْهُ يَوْمَ السَّابِعِ وَيُحْلَقُ رَأْسُهُ وَيُسَمَّى<br/>Artinya: <em>\"Seorang anak itu tergadai dengan akikahnya yang disembelih pada hari ketujuh, dicukur rambut kepalanya, dan diberi nama.\"</em> (H.R. Ibnu Majah diriwayatkan dari Samurah).",
        pertanyaan: "Berdasarkan hadis di atas, selain menyembelih hewan akikah pada hari ketujuh, dua amalan sunah lainnya yang dianjurkan untuk dikerjakan secara bersamaan bagi sang bayi adalah...",
        opsi: [
            "Melakukan khitanan dan membagikan zakat mal kepada fakir miskin",
            "Mencukur rambut kepala sang bayi dan memberikan nama yang baik",
            "Mengundang kerabat dekat dan menguburkan ari-ari bayi di tanah",
            "Melaksanakan salat syukur berjamaah dan memandikan bayi dengan air bunga"
        ],
        kunci: 1,
        penjelasan: "Hadis riwayat Ibnu Majah dari Samurah menggariskan tiga kesunahan penting bagi kelahiran bayi pada hari ketujuh: penyembelihan akikah (<em>tudzbaḥu 'anhu yauma as-sābi'</em>), pencukuran rambut kepala bayi (<em>wayuḥlaqu ra'suhu</em>), dan pemberian nama (<em>wayusammā</em>)."
    },
    {
        no: 5,
        topik: "Aplikasi Kasus Kelahiran Bayi Laki-Laki & Perempuan",
        level: "L2",
        stimulus: "<em>\"Pak Rahmat dan Bu Atika baru saja dikaruniai bayi kembar yang sehat, satu berjenis kelamin laki-laki dan satu lagi berjenis kelamin perempuan. Sebagai wujud rasa syukur, mereka berniat melaksanakan ibadah akikah pada hari ketujuh kelahiran anak-anaknya.\"</em>",
        pertanyaan: "Berdasarkan ketentuan syariat Islam, jumlah hewan akikah berupa kambing/domba yang harus disediakan dan disembelih oleh Pak Rahmat untuk kedua bayi kembarnya tersebut adalah...",
        opsi: [
            "2 ekor kambing/domba (1 untuk anak laki-laki, 1 untuk anak perempuan)",
            "3 ekor kambing/domba (2 untuk anak laki-laki, 1 untuk anak perempuan)",
            "4 ekor kambing/domba (2 untuk anak laki-laki, 2 untuk anak perempuan)",
            "1 ekor sapi yang diniatkan untuk akikah kedua bayi tersebut sekaligus"
        ],
        kunci: 1,
        penjelasan: "Syariat Islam menetapkan bahwa jumlah hewan akikah untuk anak laki-laki adalah <strong>2 ekor kambing/domba</strong>, sedangkan untuk anak perempuan adalah <strong>1 ekor kambing/domba</strong>. Karena bayi mereka laki-laki dan perempuan, maka total hewan yang disembelih adalah 2 + 1 = <strong>3 ekor kambing/domba</strong>."
    },
    {
        no: 6,
        topik: "Aplikasi Distribusi Daging Akikah vs Kurban",
        level: "L2",
        stimulus: "<em>\"Masjid Al-Ikhlas menyelenggarakan penyembelihan hewan kurban pada hari raya Idul Adha, sedangkan di lingkungan RT 02, keluarga Pak Budi menyelenggarakan penyembelihan kambing untuk akikah putranya.\"</em>",
        pertanyaan: "Berdasarkan tata cara distribusi daging hasil sembelihan dalam Islam, metode pembagian daging kurban dan akikah yang paling tepat adalah...",
        opsi: [
            "Daging kurban dan akikah sama-sama wajib dibagikan dalam kondisi mentah agar tahan lama",
            "Daging kurban dan akikah sama-sama wajib dimasak terlebih dahulu sebelum dikirim ke penerima",
            "Daging kurban dibagikan dalam keadaan masih mentah, sedangkan daging akikah disunnahkan dibagikan dalam keadaan sudah matang (dimasak)",
            "Daging kurban hanya dibagikan kepada fakir miskin, sedangkan daging akikah hanya boleh dikonsumsi oleh keluarga inti saja"
        ],
        kunci: 2,
        penjelasan: "Sesuai ketentuan fikih, <strong>daging kurban dibagikan kepada penerima dalam keadaan masih mentah</strong> (agar penerima bebas mengolahnya). Sebaliknya, <strong>daging akikah disunnahkan dibagikan dalam keadaan sudah dimasak atau matang</strong> sebagai jamuan syukur."
    },
    {
        no: 7,
        topik: "Aplikasi Ketentuan Saham Sapi Kurban",
        level: "L2",
        stimulus: "<em>\"Sembilan orang warga di Perumahan Asri sepakat untuk mengumpulkan uang bersama guna membeli satu ekor sapi jantan yang gemuk dan sehat untuk dijadikan sebagai hewan kurban pada hari raya Idul Adha.\"</em>",
        pertanyaan: "Ditinjau dari keabsahan jumlah orang yang berkurban per ekor hewan, bagaimana status hukum ibadah kurban sapi yang dilakukan oleh warga Perumahan Asri tersebut?",
        opsi: [
            "Sah, karena jumlah hewan sapi jantan yang disembelih jantan dan dagingnya melimpah",
            "Sah, dengan syarat dua orang di antaranya berstatus sebagai anak-anak yang belum baligh",
            "Tidak sah, karena satu ekor sapi hanya diperuntukkan maksimal untuk kurban 7 (tujuh) orang",
            "Tidak sah, karena ibadah kurban dengan sapi wajib dilakukan secara individu tanpa boleh patungan"
        ],
        kunci: 2,
        penjelasan: "Berdasarkan ketetapan hadis Nabi saw., seekor unta, sapi, atau kerbau hanya boleh dijadikan sebagai hewan kurban untuk <strong>maksimal 7 orang</strong>. Karena patungan satu sapi tersebut dilakukan oleh 9 orang, maka kurban tersebut dinilai tidak sah sebagai ibadah kurban (hanya dihitung sebagai sedekah biasa)."
    },
    {
        no: 8,
        topik: "Sunnah Penyembelihan",
        level: "L2",
        stimulus: "1. Menyembelih pada bagian pangkal leher hewan.<br/>2. Menghadapkan hewan sembelihan ke arah kiblat.<br/>3. Mengasah alat penyembelih (pisau) tepat di depan mata hewan yang akan disembelih.<br/>4. Membaca basmalah, shalawat nabi, dan takbir saat menyembelih.<br/>5. Memotong leher hewan secara ekstrem hingga kepalanya terputus.",
        pertanyaan: "Berdasarkan pernyataan di atas, tindakan yang termasuk sunnah dalam proses penyembelihan hewan menurut syariat Islam ditunjukkan oleh nomor...",
        opsi: [
            "1, 2, dan 3",
            "1, 2, dan 4",
            "2, 3, dan 5",
            "3, 4, dan 5"
        ],
        kunci: 1,
        penjelasan: "Tindakan nomor 1, 2, dan 4 merupakan sunnah dalam penyembelihan hewan yang diajarkan Rasulullah saw. untuk memuliakan hewan sembelihan. Sebaliknya, mengasah pisau di depan hewan (nomor 3) dan memotong leher hingga kepalanya putus (nomor 5) hukumnya adalah makruh karena dapat menyiksa batin dan fisik hewan tersebut."
    },
    {
        no: 9,
        topik: "Analisis Filosofis Kurban Nabi Ibrahim",
        level: "L3",
        stimulus: "<em>\"Ibadah kurban berakar dari peristiwa ujian keimanan maha berat yang dihadapi Nabi Ibrahim a.s. ketika diperintahkan Allah Swt. untuk menyembelih putra tercintanya, Ismail a.s. Kepatuhan mutlak bapak dan anak ini kemudian diabadikan menjadi syariat ibadah kurban tahunan umat Islam.\"</em>",
        pertanyaan: "Berdasarkan analisis sejarah spiritual di atas, apa esensi filosofis terdalam dari penyembelihan hewan kurban bagi seorang muslim di era modern?",
        opsi: [
            "Menunjukkan kekuatan finansial dan status sosial kelas atas di hadapan masyarakat sekitar",
            "Melestarikan budaya menyembelih hewan yang sudah diwariskan sejak peradaban kuno",
            "Membuktikan kepasrahan total dan wujud syukur atas nikmat Allah dengan menyembelih sifat-sifat kebinatangan (egois, tamak, rakus) di dalam diri hamba",
            "Mengganti kewajiban ibadah haji fisik bagi orang-orang yang tidak mampu pergi ke Makkah"
        ],
        kunci: 2,
        penjelasan: "Esensi ibadah kurban bukan semata-mata mengalirkan darah hewan, melainkan sebagai bentuk kepasrahan dan rasa syukur seorang hamba kepada Allah Swt. atas segala nikmat yang telah diterima. Melalui ibadah kurban, seorang mukmin diajarkan untuk \"menyembelih\" sifat kebinatangan (seperti egois, rakus, tamak, dan sewenang-wenang) yang ada di dalam dirinya demi meraih ketakwaan yang sejati."
    },
    {
        no: 10,
        topik: "Analisis Kritis Makna \"Tergadai\" dalam Akikah",
        level: "L3",
        stimulus: "Para ulama menjelaskan bahwa kata <em>\"murtahanun\"</em> (tergadai) dalam hadis akikah memiliki kaitan erat dengan hubungan spiritual anak dan orang tuanya, khususnya di hari akhir kelak.",
        pertanyaan: "Bagaimana analisis teologis kritis mengenai makna metaforis anak yang \"tergadai\" dengan akikahnya dikaitkan dengan pertolongan di hari akhir kelak?",
        opsi: [
            "Anak yang belum diakikahi status keislamannya belum sah di sisi Allah Swt.",
            "Orang tua yang sengaja tidak mengakikahi anaknya akan dikenai sanksi penahanan harta benda di alam kubur",
            "Anak tersebut belum terlepas rintangannya untuk memberikan syafaat (pertolongan) bagi kedua orang tuanya di hari akhir kelak sebelum akikahnya ditunaikan",
            "Jiwa anak yang meninggal sebelum diakikahi akan ditawan oleh malaikat maut di langit pertama"
        ],
        kunci: 2,
        penjelasan: "Berdasarkan penjelasan para ulama (seperti penjelasan Imam Ahmad bin Hanbal), makna metaforis \"tergadai\" (<em>murtahan</em>) dalam hal ini adalah bahwa <strong>tumbuh kembang anak atau terhalangnya hak anak untuk memberikan syafaat (pertolongan) bagi orang tuanya pada hari kiamat</strong> sangat bergantung pada penunaian akikah tersebut oleh orang tuanya semasa hidup."
    }
];

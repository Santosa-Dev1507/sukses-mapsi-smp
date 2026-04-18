import json
import re

payload_11_20 = [
    {
        "id": 11,
        "materi": "Aqidah (HOTS)",
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
        "materi": "Aqidah",
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
        "materi": "Aqidah (HOTS)",
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
        "materi": "Aqidah (HOTS)",
        "pertanyaan": "Perhatikan fenomena berikut ini!<br>1) Terlahir dengan warna mata cokelat<br>2) Berhasil sembuh dari penyakit kritis setelah berobat rutin<br>3) Memenangkan medali olimpiade sains karena gigih belajar<br>4) Jenis kelamin bayi yang baru lahir<br>5) Hari kiamat mematikan seluruh penduduk bumi<br><br>Dalam konsep Qada dan Qadar, domain yang tergolong absolute (mutlak) sebagai Takdir Mubram (tanpa campur tangan ikhtiar manusia) ditunjukkan pada nomor ....",
        "gambar": "",
        "kutipan": "",
        "opsi": [
            "1, 2, dan 3",
            "1, 4, dan 5",
            "2, 3, dan 5",
            "3, 4, dan 5"
        ],
        "kunciJawaban": 1,
        "tipsBidang": "Takdir Mubram adalah ketentuan mutlak (jenis kelamin, fisik lahir bawaan, dan ajal/kiamat). Sedangkan kesembuhan dan prestasi adalah Takdir Muallaq (bisa diupayakan).",
        "tipe": "pg"
    },
    {
        "id": 15,
        "materi": "Aqidah",
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
        "id": 16,
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
        "id": 17,
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
        "id": 18,
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
        "id": 19,
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
    }
]

file_path = 'js/data.js'
with open(file_path, 'r', encoding='utf-8') as f:
    text = f.read()

# Instead of overwriting from scratch, we extract quizData2026, parse it if possible, rewrite items 10-19 (0 indexed)
m = re.search(r'(const quizData2026\s*=\s*)(\[.*?\]);', text, re.DOTALL)

if m:
    prefix = m.group(1)
    arr_str = m.group(2)
    # the array is safe json since we generated it via json.dumps earlier!
    arr = json.loads(arr_str)
    
    # replace index 10 to 19 with payload_11_20
    for i in range(10):
        # ensure ids match 11-20
        payload_11_20[i]['id'] = 11 + i
        arr[10 + i] = payload_11_20[i]
        
    new_arr_str = json.dumps(arr, indent=4, ensure_ascii=False)
    
    final_text = text[:m.start()] + prefix + new_arr_str + ";" + text[m.end():]
    
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(final_text)
    print("Injected Questions 11-20")
else:
    print("Could not find quizData2026")

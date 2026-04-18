import json
import re

payload = [
    {
        "id": 31,
        "materi": "Fiqih",
        "pertanyaan": "Mazhab adalah konvensi manhaj atau landasan rute pemikiran teologi fikih. Di dunia Sunni (Ahlussunnah Wal Jamaah) modern saat ini terpusat komando pada 4 Imam Mazhab absolut yang paling otoritatif. Berikut ini yang <span class='font-bold italic'>bukan</span> termasuk dalam pendiri 4 mazhab fikih tersebut adalah ....",
        "gambar": "",
        "kutipan": "",
        "opsi": [
            "Imam Abu Hanifah",
            "Imam Malik bin Anas",
            "Imam Al-Ghazali",
            "Imam Ahmad bin Hanbal"
        ],
        "kunciJawaban": 2,
        "tipsBidang": "",
        "tipe": "pg"
    },
    {
        "id": 32,
        "materi": "Tarikh",
        "pertanyaan": "Peradaban Daulah Abbasiyah (Baghdad) mencatat masa keemasan <i>The Golden Age of Islam</i>. Budaya Literasi Terjemah dari bahasa Yunani ke bahasa Arab menjadi prioritas mutlak. Institusi riset raksasa paling epik yang mendunia kala itu adalah <b>Bayt Al-Hikmah</b> (The House of Wisdom). Siapa khalifah inisiator yang memfungsikan pilar monumental tersebut?",
        "gambar": "",
        "kutipan": "",
        "opsi": [
            "Khalifah Al-Makmun, difungsikan formal sebagai universitas & biro terjemah publik",
            "Khalifah Al-Amin, difungsikan sebagai benteng perlindungan militer",
            "Khalifah Abu Ja'far Al-Mansur, sebagai sentra pengumpulan pajak negara",
            "Khalifah Harun Ar-Rasyid, disembunyikan sebagai loker buku privasi keluarga raja"
        ],
        "kunciJawaban": 0,
        "tipsBidang": "",
        "tipe": "pg"
    },
    {
        "id": 33,
        "materi": "Tarikh",
        "pertanyaan": "Cocokkan silang cendekiawan ilmuwan muslim elite era klasik dengan disiplin ilmunya!<br>1) Muhammad ibn Musa Al-Khwarizmi<br>2) Ibnu Sina (Avicenna)<br>3) Al-Ghazali<br>4) Jabir bin Hayyan<br><br>Garis disiplin keilmuan yang paling tepat adalah ....",
        "gambar": "",
        "kutipan": "",
        "opsi": [
            "1-Matematika Aljabar, 2-Kedokteran (Bapak Medis Modern), 3-Tasawuf/Akhlak, 4-Kimia",
            "1-Astronomi, 2-Filsafat Barat, 3-Kedokteran, 4-Fisika Kuantum",
            "1-Tasawuf, 2-Ahli Bedah, 3-Matematika, 4-Sosiologi",
            "1-Geografi Navigasi, 2-Ilmu Fikih, 3-Ahli Botani, 4-Arsitektur"
        ],
        "kunciJawaban": 0,
        "tipsBidang": "",
        "tipe": "pg"
    },
    {
        "id": 34,
        "materi": "Tarikh",
        "pertanyaan": "Keharuman peradaban Umayyah di benua Eropa berpusat di Andalusia (Spanyol). Peninggalan pariwisata yang membikin dunia takjub hingga hari ini melihat kecanggihan kaligrafi dan arsitektur batu bata bata merah nan megah adalah reruntuhan mahakarya Keraton ....",
        "gambar": "",
        "kutipan": "",
        "opsi": [
            "Menara Emas Katedral",
            "Mezquita Kordoba",
            "Taj Mahal",
            "Istana Merah Al-Hamra (Alhambra)"
        ],
        "kunciJawaban": 3,
        "tipsBidang": "",
        "tipe": "pg"
    },
    {
        "id": 35,
        "materi": "Tarikh (HOTS)",
        "pertanyaan": "Umar Bin Abdul Aziz adalah Sang Legenda dari Kekhalifahan Bani Umayyah di Damaskus (sering dijuluki <i>Khulafaur Rasyidin ke-5</i> berkat keadilannya). Di antara mahakarya pemerintahannya, terdapat satu warisan agung yang menjaga lestarinya sumber agama hingga terselamatkannya umat Islam hari ini, yaitu ....",
        "gambar": "",
        "kutipan": "",
        "opsi": [
            "Intruksi resmi kodifikasi (pembukuan massal) Hadis lintas provinsi",
            "Penaklukan benua eropa barat tanpa pertempuran berdarah",
            "Membangun armada laut tempur terbesar melampaui Romawi",
            "Memadukan hukum Romawi ke dalam syariat peradilan Fikih lokal"
        ],
        "kunciJawaban": 0,
        "tipsBidang": "Umar bin Abdul Aziz memerintahkan Ibnu Syihab az-Zuhri untuk melacak dan membukukan hadis secara kenegaraan agar tidak punah saat banyak ulama wafat.",
        "tipe": "pg"
    },
    {
        "id": 36,
        "materi": "Akhlak (Tradisi & Seni Islami)",
        "pertanyaan": "Kesenian Islam bersifat luhur dan sama sekali tidak membatasi kreativitas manusia selama mematuhi koridor syariat akidah. Manakah dari pernyataan di bawah ini yang sepenuhnya merepresentasikan karya <b>Seni Islami dan Tradisi Lokal</b> bertema kepatuhan? <br><br><i>(Pilihlah dua indikator ciri yang tepat! PGA)</i>",
        "gambar": "",
        "kutipan": "",
        "opsi": [
            "Sastra musik lokal yang syairnya mengajak mabuk dan kemewahan foya-foya duniawi",
            "Kaligrafi murni Arab (Khat) yang mengukir ayat suci di dinding masjid",
            "Seni pahat patung berwujud menyerupai dewa peribadatan secara utuh tiga dimensi",
            "Tradisi Tahlilan/Qasidah (vokal rebana) yang liriknya berisi selawat nabi dan nasihat moral"
        ],
        "kunciJawaban": [1, 3],
        "tipsBidang": "",
        "tipe": "pga"
    },
    {
        "id": 37,
        "materi": "Fiqih (Aqiqah & Qurban)",
        "pertanyaan": "Secara substansial, pelaksanaan Kurban (Idul Adha) dan Aqiqah (Syukuran anak dilaahirkan) sama-sama merupakan ibadah penyembelihan yang bernilai tinggi namun dengan rujukan dan parameter waktu yang berbeda. Pilihlah ketentuan mana saja yang BENAR membedakan Qurban dan Aqiqah! <br><br><i>(Boleh memilih lebih dari satu jawaban PGA)</i>",
        "gambar": "",
        "kutipan": "",
        "opsi": [
            "Hewan Aqiqah mutlak disembelih pada rentang tanggal 10, 11, 12, dan 13 Dzulhijjah saja",
            "Hewan Kurban (misal Sapi/Unta) boleh patungan 7 orang, sementara Aqiqah tidak diperkenankan patungan komunal hewan",
            "Tujuan utama Aqiqah adalah murni menembus tebusan perlindungan bagi anak yang baru dilahirkan ke dunia",
            "Daging kurban disyaratkan untuk dibagikan dalan kondisi sudah matang (dimasak) layaknya Aqiqah"
        ],
        "kunciJawaban": [1, 2],
        "tipsBidang": "Qurban boleh patungan (Sapi/Unta 7 orang). Aqiqah syarat utamanya adalah tebusan kelahiran. Daging qurban dibagikan MENTAH, Aqiqah MATANG.",
        "tipe": "pga"
    },
    {
        "id": 38,
        "materi": "Al-Qur'an (Khalifah & Keseimbangan)",
        "pertanyaan": "Berdasarkan prinsip kandungan Q.S Al-Qasas: 77 (<i>...dan carilah porsi keselamatan di negeri akhirat tanpa melupakan porsimu di kehidupan dunia, dan berbuat baiklah serta jangan merusak bumi...</i>). Sikap manakah di bawah ini yang sejalan dan mengamalkan instruksi Keseimbangan Paradoks tersebut? <br><br><i>(Pilihan Ganda Kompleks - Centang Opsi Benar)</i>",
        "gambar": "",
        "kutipan": "",
        "opsi": [
            "Mengeksploitasi tambang batu bara liar demi mendirikan puluhan panti asuhan yatim",
            "Bekerja keras dari pagi hingga sore merintis startup digital Halal untuk menafkahi kemandirian keluarga dan membayar zakat",
            "Merusak terumbu karang ekosistem laut demi proyek pembangunan properti mewah pesisir",
            "Berdoa menangis siang-malam di dalam masjid menanti rezeki turun dari surga tanpa mau berikhtiar mencari kerja di luar"
        ],
        "kunciJawaban": [1],
        "tipsBidang": "",
        "tipe": "pga"
    },
    {
        "id": 39,
        "materi": "Tarikh (Tokoh Abbasiyah)",
        "pertanyaan": "Kehebatan Ilmuwan Muslim klasik tak bisa ditampik berkontribusi mencetak peta sains dunia saat ini. Ibnu Sina (Avicenna) disebut sebagai Sang Bapak Medis Modern yang karya literaturnya dihafal matang oleh mahasiswa London di masa itu. Manakah dari gelar dan kitab berikut yang memang shahih ditujukan untuk masterpiece Ibnu Sina? <br><br><i>(Pilihan Ganda Kompleks - Centang Opsi Benar/Bisa lebih dari 1)</i>",
        "gambar": "",
        "kutipan": "",
        "opsi": [
            "Al-Qanun fi at-Tibb (The Canon of Medicine) kitab rujukan ensiklopedia medis Eropa selama berabad-abad",
            "Ihya Ulumuddin kitab pembangkit nilai ruhani tasawuf kalbu",
            "Sang Perintis Teori Orbit Planet Kosmologi Astrologi Barat",
            "Ahli di bidang penyembuhan klinis empirik dan dijuluki Pangeran Para Dokter (Prince of Physicians)"
        ],
        "kunciJawaban": [0, 3],
        "tipsBidang": "",
        "tipe": "pga"
    },
    {
        "id": 40,
        "materi": "Akhlak (HOTS Ghibah/Tabayyun)",
        "pertanyaan": "Di tengah serbuan arus algoritma sosial media generasi Z, gosip dan pembusukan karakter alias Ghibah <i>(Cyberbullying)</i> menjadi hal paling lumrah namun mematikan. Seorang muslimah digital harus dibekali senjata 'Tabayyun'. Bagaimana aksi proteksi konkrit yang harus diluncurkan ketika kita menerima <i>broadcast</i> potongan video aib teman sekelas? <br><br><i>(Pilih tindakan-tindakan preventif Islami yang tepat! PGA)</i>",
        "gambar": "",
        "kutipan": "",
        "opsi": [
            "Langsung percaya 100% video tersebut dan segera memutus tali pertemanan karena alergi toxic",
            "Meredam distribusi video tersebut hanya bertepi di grup Whatsapp kita pribadi tanpa membagikannya ulang (Stop Forward)",
            "Menghubungi subjek/objek terkait secara privat kekeluargaan tanpa menghakiminya guna menggali konteks yang utuh",
            "Mengklarifikasi langsung di kolom komentar akun gosip publik agar viral sekalian demi efek jera bagi pelaku yang ada di video"
        ],
        "kunciJawaban": [1, 2],
        "tipsBidang": "Tabayyun digital adalah konfirmasi privat murni silaturahmi (bukan menghakimi/melabrak) dan otomatis men-stop lajur forward hoaks.",
        "tipe": "pga"
    }
]

file_path = 'js/data.js'
with open(file_path, 'r', encoding='utf-8') as f:
    text = f.read()

m = re.search(r'(const quizData2026\s*=\s*)(\[.*?\]);', text, re.DOTALL)
if m:
    prefix = m.group(1)
    arr_str = m.group(2)
    # The array in data.js for quizData2026 is safe JSON
    try:
        arr = json.loads(arr_str)
        # overwrite indices 30-39 with the new payload
        for i in range(10):
            arr[30 + i] = payload[i]
        new_arr_str = json.dumps(arr, indent=4, ensure_ascii=False)
        final_text = text[:m.start()] + prefix + new_arr_str + ";" + text[m.end():]
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(final_text)
        print("Successfully injected Questions 31-40 (Including PGA)")
    except Exception as e:
        print("Error JSON:", e)
else:
    print("Could not find quizData2026")

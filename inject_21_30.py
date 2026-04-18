import json
import re

payload = [
    {
        "id": 21,
        "materi": "Akhlak",
        "pertanyaan": "Di bulan suci, guru PAI menugaskan Lembar Kegiatan Amaliah Ramadhan di rumah. Hafidz sebagai siswa berintegritas, selalu mengisi buku laporannya itu sejujur-jujurnya sesuai fakta lapangan (tidak dikarang fiktif). Perilaku Hafidz tersebut merupakan contoh pelaksanaan tanggung jawab dan amanah kepada ....",
        "gambar": "",
        "kutipan": "",
        "opsi": [
            "Sekolah",
            "Orang tua",
            "Teman sekelas",
            "Allah SWT"
        ],
        "kunciJawaban": 3,
        "tipsBidang": "",
        "tipe": "pg"
    },
    {
        "id": 22,
        "materi": "Akhlak",
        "pertanyaan": "Sebagai makhluk sosial, manusia selalu membutuhkan orang lain. Orang lain di sekitar kita harus diperlakukan secara baik, santun, saling menyayangi, dan menghormati. Berprasangka baik kepada orang lain akan menumbuhkan keharmonisan dalam kehidupan masyarakat. Sikap buruk sangka hanya akan memicu perpecahan dan konflik. Banyak pertikaian dan kerusuhan terjadi karena sikap buruk sangka. Jika ada isu-isu negative hendaknya diklarifikasi (tabayyun) terlebih dahulu agar kita tidak terjerumus kepada sikap curiga dan buruk sangka.<br>Orang yang terbiasa berbaik sangka dan mengutamakan tabayyun akan memperoleh manfaat sebagai berikut ....",
        "gambar": "",
        "kutipan": "",
        "opsi": [
            "Hidup menjadi lebih harmonis, orang yang baik akan bergaul dengan orang baik, menghindari konflik fitnah di masyarakat",
            "Jika mengalami kegagalan akan merasa sedih menyalahkan orang lain",
            "Menjadi berfikir dan terkadang merasa lelah dan stress",
            "Keras kepala dan tidak bisa dinasehati tetangga"
        ],
        "kunciJawaban": 0,
        "tipsBidang": "",
        "tipe": "pg"
    },
    {
        "id": 23,
        "materi": "Fiqih",
        "pertanyaan": "Rukhsah adalah keringanan dari Allah Swt. untuk hambaNya dalam melaksanakan ibadah, tujuan diberikan rukhsah ini, agar mudah melaksanakan ibadah tanpa rasa berat.<br>Berikut ini yang <span class='italic font-bold'>bukan</span> termasuk rukhsah adalah ....",
        "gambar": "",
        "kutipan": "",
        "opsi": [
            "Melaksanakan shalat jamak qashar saat mudik bepergian jauh",
            "Membayar zakat fïtrah dengan uang",
            "Mengganti puasa bagi orang yang sakit parah saat bulan Ramadhan",
            "Membayar denda (Dam) bagi jamaah haji yang tidak bisa hadir saat wukuf"
        ],
        "kunciJawaban": 3,
        "tipsBidang": "",
        "tipe": "pg"
    },
    {
        "id": 24,
        "materi": "Akhlak",
        "pertanyaan": "Dalam QS Al Ankabut /29 : 45 Allah SWT berfirman: <br><span class='italic font-bold'>... Sesungguhnya salat itu mencegah dari (perbuatan) keji dan mungkar ...</span><br>Pernyataan yang <span class='italic font-bold'>tidak</span> sesuai dengan hikmah ayat tersebut adalah ....",
        "gambar": "",
        "kutipan": "",
        "opsi": [
            "Orang yang menjaga salatnya otomatis sedang menegakkan agama Allah",
            "Salat adalah cara mengingat Allah Swt., orang yang senantiasa ingat tidak akan bermaksiat",
            "Orang yang salat berarti hidupnya tidak punya kesempatan mencari rezeki",
            "Orang yang khusyuk tekun dalam salat, hatinya akan lebih cenderung kepada amal saleh"
        ],
        "kunciJawaban": 2,
        "tipsBidang": "",
        "tipe": "pg"
    },
    {
        "id": 25,
        "materi": "Fiqih",
        "pertanyaan": "Pak Hamid dan Bu Eka bersyukur dikaruniai melahirkan anak laki-laki lucu. Tiba saatnya hari ketujuh, keluarga ini bersiap merayakan syukur syariat penyembelihan Akikah. Syarat ketentuan jenis kurban akikah yang paling sah secara standar sunah Rasulullah untuk bayi rujukan mereka adalah ....",
        "gambar": "",
        "kutipan": "",
        "opsi": [
            "Menyembelih cukup satu ekor ayam",
            "Dua ekor domba atau kambing",
            "Satu ekor domba atau kambing",
            "Satu ekor sapi utuh"
        ],
        "kunciJawaban": 1,
        "tipsBidang": "Sesuai fiqih, akikah untuk laki-laki disyariatkan sunnah afdhol dengan dua ekor kambing/domba.",
        "tipe": "pg"
    },
    {
        "id": 26,
        "materi": "Fiqih",
        "pertanyaan": "Salat gerhana dalam fikih Islam dikenal dengan istilah shalat <i>Kusufain</i> yang berarti shalat dua tipe gerhana (matahari maupun bulan). Hukum shalat gerhana ini sunah muakkad.<br>Di bawah ini ketentuan detail teknis shalat gerhana yang benar adalah ....",
        "gambar": "",
        "kutipan": "",
        "opsi": [
            "Shalat khusuf dilakukan berjamaah dengan jumlah rekaat dua, dua ruku' pada tiap rekaatnya.",
            "Shalat gerhana dilakukan berjamaah dengan membaca selawat di sujud panjang.",
            "Shalat kusuf dilakukan munfarid tanpa perlu ruku'.",
            "Shalat khusuf batal jika tidak mendengar khutbah gerhana."
        ],
        "kunciJawaban": 0,
        "tipsBidang": "Shalat gerhana cirinya ada DUA KALI rukuk di masing-masing rakaat.",
        "tipe": "pg"
    },
    {
        "id": 27,
        "materi": "Fiqih (HOTS)",
        "pertanyaan": "Riba secara istilah berarti tambahan pada harta yang disyaratkan dalam transaksi menukar uang. Jika Aisya meminjam uang dana darurat kepada Siti sebesar Rp.50.000,00 selama enam bulan tanpa ada perjanjian apapun. Namun, ketika lunas jatuh tempo Aisya mengembalilan uang tersebut sejumlah Rp.55.000,00 dengan murni sukarela karena merasa sangat berhutang budi kebaikan Siti. Maka uang Rp.5.000,00 yang dilebihkan Aisya kepada Siti dihukumi ....",
        "gambar": "",
        "kutipan": "",
        "opsi": [
            "Masuk ranah Riba Fadl yang dosa mutlak",
            "Masuk ranah Riba Nasi'ah yang mutlak membatalkan pahala sedekah",
            "Bukan Riba, karena tanpa akad pemaksaan, jadi statusnya adalah sedekah hadiah (halal)",
            "Tergolong penipuan denda rentenir terselubung"
        ],
        "kunciJawaban": 2,
        "tipsBidang": "Memberikan tambahan secara murni sukarela SAAT pelunasan (padahal hutang tak mensyaratkannya) tergolong hadiah/terima kasih yang mulia, bukan Riba.",
        "tipe": "pg"
    },
    {
        "id": 28,
        "materi": "Fiqih",
        "pertanyaan": "Laela salat Zuhur sendirian (munfarid) di kamarnya. Saking tak fokus, di rakaat penutup ia ragu \"Ini tadi sudah rakaat 3 atau 4 ya? Lupa!\". Dalam skenario kebimbangan darurat memori ini, apa manuver teknis yang wajib ditempuh Laela seketika?",
        "gambar": "",
        "kutipan": "",
        "opsi": [
            "Membatalkan salat dan mengulang takbiratul ihram baru dari rakaat awal",
            "Melanjutkan saja nekat lalu melaksanakan Sujud Tilawah setelah salam",
            "Menetapkan pada kepastian jumlah paling sedikit (3) ditambah 1 rakaat lagi, lalu menutupi dengan Sujud Sahwi sebelum salam",
            "Bertanya berteriak ke ibu menanyakan rakaatnya"
        ],
        "kunciJawaban": 2,
        "tipsBidang": "",
        "tipe": "pg"
    },
    {
        "id": 29,
        "materi": "Tarikh",
        "pertanyaan": "Osman I sang singa pendiri Daulah Turkic Usmani menanamkan ideologi jihad murni non-pamrih militer. Pasukan elit pendobraknya begitu militan disegani daratan eropa. Para patriot infantri garda depan ini dilabeli status gelar <strong>'Al-Ghazi'</strong>, yang bernyawa makna ....",
        "gambar": "",
        "kutipan": "",
        "opsi": [
            "Pembunuh Hitam Berbayar",
            "Tentara Bayaran Asing",
            "Ksatria Penakluk / Pasukan Syuhada Pahlawan Islam",
            "Penjaga Harta Kerajaan"
        ],
        "kunciJawaban": 2,
        "tipsBidang": "",
        "tipe": "pg"
    },
    {
        "id": 30,
        "materi": "Tarikh (HOTS)",
        "pertanyaan": "Tahun 1453 M menjadi tahun paling mengguncang bagi peradaban Eropa sekaligus loncatan agung bagi imperium Islam. Sultan Muhammad Al-Fatih mencetak rekor sejarah merebut benteng absolut paling elit di Eropa kala itu yaitu Konstantinopel (Bizantium) dengan menurunkan meriam basilica raksasa. Dampak global terpenting dari penaklukan benteng strategis ini bagi konstelasi dunia masa itu adalah ....",
        "gambar": "",
        "kutipan": "",
        "opsi": [
            "Hancurnya total asimilasi penduduk budaya seluruh Eropa",
            "Jalur gerbang rempah-rempah eropa tertutup oleh usmani sehingga Eropa panik memicu Era Penjelajahan Samudra Spanyol/Portugis",
            "Tamatnya Kekhalifahan Abbasiyah di timur tengah",
            "Meredam Revolusi Industri di benua Amerika kuno"
        ],
        "kunciJawaban": 1,
        "tipsBidang": "Jatuhnya Konstantinopel memaksa bangsa Barat mencari rute laut baru ke Timur, yang memicu ekspedisi Magellan/Columbus dan dimulainya Kolonialisme.",
        "tipe": "pg"
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
    # If json.loads fails, we just regex replace
    try:
        arr = json.loads(arr_str)
        for i in range(10):
            arr[20 + i] = payload[i]
        new_arr_str = json.dumps(arr, indent=4, ensure_ascii=False)
        final_text = text[:m.start()] + prefix + new_arr_str + ";" + text[m.end():]
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(final_text)
        print("Successfully injected Questions 21-30")
    except Exception as e:
        print("JSON parse error:", e)
else:
    print("Could not find quizData2026")

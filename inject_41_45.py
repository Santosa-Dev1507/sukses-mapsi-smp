import json
import re

payload = [
    {
        "id": 41,
        "materi": "Al-Qur'an (Uraian)",
        "pertanyaan": "Agama Islam sangat memposisikan penuntut ilmu pada derajat yang mulia sebagaimana tertuang dalam Al-Qur'an Surah Al Mujadalah ayat 11.<br>1. Jelaskan kandungan utama dari ayat tersebut berkaitan dengan etika mencari ilmu!<br>2. Sebutkan 2 (dua) contoh perilaku mengamalkan adab di majelis pelajaran di era digital bagi pelajar masa kini!",
        "gambar": "",
        "kutipan": "",
        "opsi": [],
        "kunciJawaban": 0,
        "tipsBidang": "1. Allah menjanjikan meninggikan derajat orang beriman dan berilmu. Etikanya melapangkan majelis dan beranjak jika disuruh. 2. Mematikan notif HP saat PBM, beradab santun lewat grup wa kelas.",
        "tipe": "uraian"
    },
    {
        "id": 42,
        "materi": "Fiqih (Uraian)",
        "pertanyaan": "Imam Asy-Syafii merupakan salah satu dari 4 mujtahid mazhab fikih terbesar dalam Ahlussunnah yang pendapatnya paling banyak dianut oleh mayoritas umat Islam nusantara.<br>Sebutkan 3 (tiga) keteladanan sifat kuat dari profil Imam Syafii yang dapat kalian aplikasikan sebagai pemuda terpelajar dalam kehidupan sehari-hari!",
        "gambar": "",
        "kutipan": "",
        "opsi": [],
        "kunciJawaban": 0,
        "tipsBidang": "1. Tekad keras rela mengembara beda benua sejak usia dini demi menuntut ilmu. 2. Sangat hormat dan patuh memuliakan peran guru. 3. Moderat proporsional menengahi metodologi rasio & tekstualis.",
        "tipe": "uraian"
    },
    {
        "id": 43,
        "materi": "Tarikh (Uraian)",
        "pertanyaan": "Jagat sejarah dunia mencatat bahwa pemerintahan dinasti Bani Abbasiyah yang berpusat di Baghdad didapuk sebagai masa keemasan pencerahan global Islam <i>(The Golden Age of Islam)</i>.<br>1. Mengapa titik zaman tersebut menyandang predikat masa keemasan supremasi dunia?<br>2. Jelaskan fungsi sentral dari institusi monumental **Bayt Al-Hikmah** pada masa pemerintahan rasionalis itu!",
        "gambar": "",
        "kutipan": "",
        "opsi": [],
        "kunciJawaban": 0,
        "tipsBidang": "1. Sebab terjadi ledakan penemuan sains, ilmu medis, astronomi perbintangan global, pendanaan masif negara, dan toleransi lintas ras. 2. Bayt Al-Hikmah difungsikan sebagai dewan universitas & biro masif untuk menerjemahkan literatur asing (Yunani/India) ke bahasa Arab.",
        "tipe": "uraian"
    },
    {
        "id": 44,
        "materi": "Aqidah (Uraian)",
        "pertanyaan": "Malaikat, Jin, dan Manusia adalah tiga entitas absolut penciptaan Allah SWT yang memiliki anatomi karakteristik khas yang berbeda.<br>1. Uraikan tabel komparatif antara Malaikat dan Manusia dari segi Asal dimensi materi Penciptaan, Hawa Nafsu, serta Tingkat Kepatuhan ibadahnya!<br>2. Sebutkan tindakan otomatis seorang remaja pelajar yang mengakar jika ia meyakini aktifitas pencatatan CCTV konstan Malaikat Raqib dan Atid di bahunya!",
        "gambar": "",
        "kutipan": "",
        "opsi": [],
        "kunciJawaban": 0,
        "tipsBidang": "1. Malaikat (dari Nur cahaya, bebas hawa nafsu syahwat makan minum, 100% konstan taat patuh). Manusia (dari unsur bumi air mani, digetarkan hawa nafsu insting biologis, fluktuasi bisa durhaka dan iman). 2. Menghindari berbuat nyontek dan membuang mental hipokrit manipulatif saat ruang gelap sendirian.",
        "tipe": "uraian"
    },
    {
        "id": 45,
        "materi": "Aqidah (Uraian)",
        "pertanyaan": "Konsep Takdir desain keimanan Islam secara struktural esensial dibedakan menjadi Takdir Mubram dan Takdir Muallaq.<br>1. Analisislah titik batas pemisah defenisi antara Takdir Mubram dan Muallaq!<br>2. Berikan masing-masing 1 (satu) sampel konkrit kehidupan nyata seorang manusia modern dari implementasi jenis dua takdir tersebut!",
        "gambar": "",
        "kutipan": "",
        "opsi": [],
        "kunciJawaban": 0,
        "tipsBidang": "1. Takdir Mubram (Mutlak/permanen paten dari Tuhan tanpa ruang negosiasi campur ikhtiar). Takdir Muallaq (Syarat dinamis historis bergantung pada ikhtiar jihad keras manusia). 2. Mubram = Batas Ajal, Struktur Ras fisiologis warna kulit. Muallaq = Kesembuhan komplikasi penyakit kritis, Pengangkatan titel derajat sosial.",
        "tipe": "uraian"
    }
]

file_path = 'js/data.js'
with open(file_path, 'r', encoding='utf-8') as f:
    text = f.read()

m = re.search(r'(const quizData2026\s*=\s*)(\[.*?\]);', text, re.DOTALL)
if m:
    prefix = m.group(1)
    arr_str = m.group(2)
    try:
        arr = json.loads(arr_str)
        # append the 5 essay questions
        for q in payload:
            arr.append(q)
            
        new_arr_str = json.dumps(arr, indent=4, ensure_ascii=False)
        final_text = text[:m.start()] + prefix + new_arr_str + ";" + text[m.end():]
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(final_text)
        print("Successfully injected Questions 41-45 (Uraian)")
    except Exception as e:
        print("Error:", e)
else:
    print("Failed")

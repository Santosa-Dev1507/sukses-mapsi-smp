import json
import re

payload_uraian = [
    {
        "id": 41,
        "materi": "Al-Qur'an (Uraian)",
        "pertanyaan": "Islam sangat memuliakan orang yang rajin belajar. Hal ini tertulis dalam Al-Qur'an Surah Al-Mujadalah ayat 11 yang menjanjikan derajat tinggi bagi orang beriman dan berilmu.<br><br>Jawablah pertanyaan berikut:<br>1. Apa isi pokok atau pesan utama dari QS. Al-Mujadalah ayat 11 tentang menuntut ilmu?<br>2. Sebutkan 2 (dua) contoh sikap yang mencerminkan adab belajar yang baik di era zaman sekarang!",
        "gambar": "",
        "kutipan": "",
        "opsi": [],
        "kunciJawaban": 0,
        "tipsBidang": "1. QS. Al-Mujadalah: 11 berisi perintah Allah untuk melapangkan majelis dan beranjak jika disuruh. Allah berjanji akan mengangkat derajat orang beriman dan berilmu. 2. Contoh: mematikan notifikasi HP saat pelajaran berlangsung, tidak menyontek, dan aktif bertanya kepada guru.",
        "tipe": "uraian"
    },
    {
        "id": 42,
        "materi": "Fiqih (Uraian)",
        "pertanyaan": "Imam Syafi'i adalah salah satu dari empat Imam Besar dalam ilmu Fikih Islam. Beliau dikenal sebagai ulama yang sangat gigih belajar sejak kecil walau dari keluarga sederhana.<br><br>Sebutkan 3 (tiga) sifat atau kebiasaan baik Imam Syafi'i yang bisa kamu tiru dalam kehidupan sehari-hari sebagai pelajar!",
        "gambar": "",
        "kutipan": "",
        "opsi": [],
        "kunciJawaban": 0,
        "tipsBidang": "1. Semangat merantau jauh demi menuntut ilmu. 2. Sangat hormat dan memuliakan guru. 3. Bersikap moderat (adil dan seimbang) dalam segala hal.",
        "tipe": "uraian"
    },
    {
        "id": 43,
        "materi": "Tarikh (Uraian)",
        "pertanyaan": "Kerajaan Islam Dinasti Abbasiyah yang berpusat di Kota Baghdad pernah menjadi pusat ilmu pengetahuan dunia, sehingga masa itu disebut sebagai 'Zaman Keemasan Islam'.<br><br>Jawablah pertanyaan berikut:<br>1. Mengapa masa Dinasti Abbasiyah disebut sebagai 'Zaman Keemasan Islam'? Berikan 2 alasannya!<br>2. Apa fungsi utama dari 'Bayt Al-Hikmah' yang terkenal pada masa itu?",
        "gambar": "",
        "kutipan": "",
        "opsi": [],
        "kunciJawaban": 0,
        "tipsBidang": "1. Karena banyak kemajuan ilmu pengetahuan (kedokteran, matematika, astronomi) dan pemerintah mendanai kegiatan ilmiah. 2. Bayt Al-Hikmah berfungsi sebagai perpustakaan dan tempat menerjemahkan buku-buku ilmu pengetahuan dari bahasa Yunani dan India ke bahasa Arab.",
        "tipe": "uraian"
    },
    {
        "id": 44,
        "materi": "Aqidah (Uraian)",
        "pertanyaan": "Sebagai orang Islam, kita wajib beriman kepada Malaikat Allah. Dua di antara malaikat yang bertugas mencatat amal manusia adalah Malaikat Raqib (pencatat amal baik) dan Malaikat Atid (pencatat amal buruk).<br><br>Jawablah pertanyaan berikut:<br>1. Sebutkan 2 perbedaan antara Malaikat dan Manusia dalam hal sifat dasarnya!<br>2. Apa pengaruhnya bagi perilakumu sehari-hari jika kamu betul-betul yakin bahwa Malaikat Raqib dan Atid selalu mencatat semua perbuatanmu?",
        "gambar": "",
        "kutipan": "",
        "opsi": [],
        "kunciJawaban": 0,
        "tipsBidang": "1. Malaikat diciptakan dari cahaya (Nur) dan tidak memiliki hawa nafsu, selalu taat kepada Allah. Manusia diciptakan dari tanah dan memiliki hawa nafsu sehingga bisa berbuat baik atau buruk. 2. Akan lebih berhati-hati dalam bertindak, tidak berani berbuat curang (nyontek), tidak membuang-buang waktu, dan selalu berusaha berbuat baik meski tidak ada yang melihat.",
        "tipe": "uraian"
    },
    {
        "id": 45,
        "materi": "Aqidah (Uraian)",
        "pertanyaan": "Dalam Islam, kita mengenal dua jenis Takdir Allah, yaitu Takdir Mubram dan Takdir Muallaq.<br><br>Jawablah pertanyaan berikut:<br>1. Jelaskan dengan bahasa kamu sendiri, apa perbedaan antara Takdir Mubram dan Takdir Muallaq!<br>2. Berikan masing-masing 1 (satu) contoh Takdir Mubram dan 1 contoh Takdir Muallaq dalam kehidupan nyata!",
        "gambar": "",
        "kutipan": "",
        "opsi": [],
        "kunciJawaban": 0,
        "tipsBidang": "1. Takdir Mubram adalah ketentuan Allah yang sudah pasti dan tidak bisa diubah sama sekali oleh manusia (contoh: kematian, jenis kelamin). Takdir Muallaq adalah ketentuan Allah yang masih bisa berubah tergantung usaha dan doa manusia. 2. Mubram: tanggal kelahiran (tidak bisa diubah). Muallaq: nilai ujian yang bisa berubah tergantung seberapa rajin belajar.",
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
        # replace index 40-44 (id 41-45, the essay questions)
        for i in range(5):
            arr[40 + i] = payload_uraian[i]
        new_arr_str = json.dumps(arr, indent=4, ensure_ascii=False)
        final_text = text[:m.start()] + prefix + new_arr_str + ";" + text[m.end():]
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(final_text)
        print("Successfully updated Essay Questions 41-45 with simpler language")
    except Exception as e:
        print("Error:", e)
else:
    print("quizData2026 not found")

import json

# Header of data.js
kisi_kisi = """/**
 * Data terpusat untuk aplikasi UAJ PAI 9.
 * File ini akan dimuat di halaman kisi-kisi dan latihan soal secara dinamis.
 */

const kisiKisiData = [
    {
        id: "quran",
        kategori: "Al-Qur'an",
        ikon: "auto_stories",
        bgColor: "bg-emerald-50",
        pillColor: "bg-secondary-container/30 text-secondary",
        judul: "Al-Qur'an & Tajwid",
        lgColSpan2: true,
        poin: [
            { teks: "QS Al Mujadalah/58:11 & QS Az Zumar/39:9 — Semangat Mencari Ilmu", kelas: "IX/1", tag: "Soal 1, 2, 3, 41", tagColor: "bg-red-100 text-red-700" },
            { teks: "QS Al Baqarah/2:30 & QS Al Qasas/28:77 — Khalifatullah Fil Ard, Penebar Kasih Sayang, Hukum Mad", kelas: "IX/2", tag: "Soal 4, 5, 6, 38", tagColor: "bg-red-100 text-red-700" },
            { teks: "QS Ar Rum/30:41, Ibrahim/14:32 & Az Zukhruf/43:13 — Melestarikan Alam, Hukum Ra & Lam Jalalah", kelas: "VIII/1", tag: "Soal 8", tagColor: "bg-emerald-100 text-emerald-700" },
            { teks: "QS Al Baqarah/2:143 — Beragama Secara Moderat, Hukum Nun Sukun/Tanwin & Mim Sukun", kelas: "VIII/2", tag: "Soal 9", tagColor: "bg-emerald-100 text-emerald-700" },
            { teks: "QS An-Nisa'/4:59 & QS An-Nahl/16:64 — Pedoman Hidup, Alif Lam Syamsiyyah & Qamariyyah", kelas: "VII/1", tag: "Soal 10", tagColor: "bg-blue-100 text-blue-700" },
            { teks: "QS Al-Anbiya'/21:30 & QS Al-A'raf/7:54 — Tanda Kekuasaan Allah, Hukum Ghunnah", kelas: "VII/2", tag: "Soal 11", tagColor: "bg-blue-100 text-blue-700" }
        ]
    },
    {
        id: "aqidah",
        kategori: "Aqidah",
        ikon: "brightness_7",
        bgColor: "bg-emerald-50",
        pillColor: "bg-secondary-container/30 text-secondary",
        judul: "Keimanan & Keyakinan",
        lgColSpan2: true,
        poin: [
            { teks: "Iman Kepada Hari Akhir — Mawas Diri, Tahapan Hari Akhir", kelas: "IX/1", tag: "Soal 7, 12", tagColor: "bg-red-100 text-red-700" },
            { teks: "Iman Kepada Qada & Qadar — Taqdir Mubram & Muallaq, Penciptaan Manusia", kelas: "IX/2", tag: "Soal 13, 14, 45", tagColor: "bg-red-100 text-red-700" },
            { teks: "Iman Kepada Kitab-kitab Allah — Generasi Pecinta Al-Qur'an Yang Toleran", kelas: "VIII/1", tag: "Soal 15", tagColor: "bg-emerald-100 text-emerald-700" },
            { teks: "Iman Kepada Nabi & Rasul — Generasi Digital Yang Berkarakter", kelas: "VIII/2", tag: "Soal 16", tagColor: "bg-emerald-100 text-emerald-700" },
            { teks: "Iman Kepada Allah — Asmaul Husna: Al-Alim, As-Sami', Al-Bashir, Al-Khabir", kelas: "VII/1", tag: "Soal 17", tagColor: "bg-blue-100 text-blue-700" },
            { teks: "Iman Kepada Malaikat — Tugas Malaikat, Perbedaan Malaikat/Jin/Manusia", kelas: "VII/2", tag: "Soal 18, 44", tagColor: "bg-blue-100 text-blue-700" }
        ]
    },
    {
        id: "akhlak",
        kategori: "Akhlak",
        ikon: "auto_awesome",
        bgColor: "bg-emerald-50",
        pillColor: "bg-secondary-container/30 text-secondary",
        judul: "Budi Pekerti & Perilaku",
        poin: [
            { teks: "Etika Pergaulan & Komunikasi Islami — Pergaulan Antar Lawan Jenis", kelas: "IX/1", tag: "Soal 19", tagColor: "bg-red-100 text-red-700" },
            { teks: "Tradisi & Seni Islami — Prinsip Seni Arsitektur Islam", kelas: "IX/2", tag: "Soal 36", tagColor: "bg-red-100 text-red-700" },
            { teks: "Amanah & Jujur — Hikmah Sikap Amanah dan Jujur", kelas: "VIII/1", tag: "Soal 20, 21", tagColor: "bg-emerald-100 text-emerald-700" },
            { teks: "Salat & Zikir — Dalil Tentang Shalat", kelas: "VII/1", tag: "Soal 24", tagColor: "bg-blue-100 text-blue-700" },
            { teks: "Ghibah & Tabayun — Dampak Buruk Ghibah, Sikap Tabayun", kelas: "VII/2", tag: "Soal 22, 40", tagColor: "bg-blue-100 text-blue-700" }
        ]
    },
    {
        id: "fiqih",
        kategori: "Fiqih",
        ikon: "gavel",
        bgColor: "bg-emerald-50",
        pillColor: "bg-secondary-container/30 text-secondary",
        judul: "Ibadah & Muamalah",
        lgColSpan2: true,
        poin: [
            { teks: "Aqiqah & Qurban — Ketentuan Akikah dan Kurban, Syarat Hewan Kurban", kelas: "IX/1", tag: "Soal 25, 37", tagColor: "bg-red-100 text-red-700" },
            { teks: "Madzhab Dalam Fiqih Islam — Biografi Imam Mazhab, Keteladanan", kelas: "IX/2", tag: "Soal 31, 42", tagColor: "bg-red-100 text-red-700" },
            { teks: "Salat Gerhana, Istiska & Jenazah — Tata Cara Shalat Gerhana", kelas: "VIII/1", tag: "Soal 26", tagColor: "bg-emerald-100 text-emerald-700" },
            { teks: "Jual Beli & Hutang Piutang — Fikih Muamalah, Larangan Riba", kelas: "VIII/2", tag: "Soal 27", tagColor: "bg-emerald-100 text-emerald-700" },
            { teks: "Sujud Sahwi, Tilawah & Syukur — Bacaan Sujud, Tata Cara", kelas: "VII/1", tag: "Soal 28", tagColor: "bg-blue-100 text-blue-700" },
            { teks: "Rukhsah Dalam Ibadah — Kemudahan Dari Allah SWT", kelas: "VII/2", tag: "Soal 23", tagColor: "bg-blue-100 text-blue-700" }
        ]
    },
    {
        id: "sejarah",
        kategori: "SKI / Tarikh",
        ikon: "history_edu",
        bgColor: "bg-emerald-50",
        pillColor: "bg-secondary-container/30 text-secondary",
        judul: "Sejarah Peradaban Islam",
        lgColSpan2: true,
        poin: [
            { teks: "Peradaban Daulah Usmani — Tokoh Pemimpin, Sebab Runtuhnya Turki Usmani", kelas: "IX/1", tag: "Soal 29, 30", tagColor: "bg-red-100 text-red-700" },
            { teks: "Daulah Abbasiyah (750-1258 M) — Masa Keemasan Islam, Bayt Al Hikmah", kelas: "VIII/1", tag: "Soal 32, 43", tagColor: "bg-emerald-100 text-emerald-700" },
            { teks: "Ilmuwan Muslim Masa Abbasiyah — Kontribusi untuk Kemanusiaan & Peradaban", kelas: "VIII/2", tag: "Soal 33, 39", tagColor: "bg-emerald-100 text-emerald-700" },
            { teks: "Bani Umayah di Damaskus (661-750 M) — Sebab Kemunduran Dinasti", kelas: "VII/1", tag: "Soal 35", tagColor: "bg-blue-100 text-blue-700" },
            { teks: "Bani Umayah di Andalusia (756-1031 M) — Tokoh & Ilmuwan", kelas: "VII/2", tag: "Soal 34", tagColor: "bg-blue-100 text-blue-700" }
        ]
    }
];

"""

# Let's define the 4 real extracted questions
# Q2: index 1
# Q7: index 6
# Q8: index 7
# Q13: index 12
real_q = {
    1: {
        "materi": "Al-Qur'an & Hadis",
        "pertanyaan": "Sebagai seorang mukmin, sudah seharusnya kita menggantungkan harapan dan mohon pertolongan kepada Allah SWT, karena itu menjadi salah satu indikator keimanan kita. Allah juga menjelaskan di beberapa ayat, diantaranya ayat berikut ini:<br><br><span class='text-2xl font-bold font-arabic leading-loose text-center block' dir='rtl'>يَا أَيُّهَا الَّذِينَ آمَنُوا اسْتَعِينُوا بِالصَّبْرِ وَالصَّلَاةِ ۚ إِنَّ اللَّهَ مَعَ الصَّابِرِينَ</span><br>Allah menyuruh kita meminta pertolongan kepada Allah SWT dengan cara....",
        "opsi": ["Sabar dan salat", "Dzikir dan doa", "Salat dan puasa", "Zakat dan sedekah"],
        "kunciJawaban": 0
    },
    6: {
        "materi": "Ilmu Tajwid",
        "pertanyaan": "Cara membaca hukum bacaan <i>Qalqalah</i> adalah memantul, yang termasuk bacaan <i>Qalqalah sugra</i> adalah....",
        "opsi": ["<span class='text-2xl font-arabic'>ثُمَّ يُجْزَاهُ</span>", "<span class='text-2xl font-arabic'>وَأَنَّ سَعْيَهُ</span>", "<span class='text-2xl font-arabic'>لَا تَنْقُضُوا</span>", "<span class='text-2xl font-arabic'>وَاسْتَغْفِرْ لَهُمْ</span>"],
        "kunciJawaban": 0
    },
    7: {
        "materi": "Al-Qur'an & Hadis",
        "pertanyaan": "Perhatikan Q.S. Az-Zumar/39: 53 berikut!<br><br><span class='text-2xl font-bold font-arabic leading-loose text-center block' dir='rtl'>قُلْ يَا عِبَادِيَ الَّذِينَ أَسْرَفُوا عَلَىٰ أَنفُسِهِمْ لَا تَقْنَطُوا مِن رَّحْمَةِ اللَّهِ ۚ إِنَّ اللَّهَ يَغْفِرُ الذُّنُوبَ جَمِيعًا ۚ إِنَّهُ هُوَ الْغَفُورُ الرَّحِيمُ</span><br>Pada ayat tersebut manakah yang <b>bukan</b> termasuk kandungan di dalamnya?",
        "opsi": ["Larangan putus asa", "Perintah mensyukuri nikmat", "Allah mengampuni semua dosa", "Allah Maha Pengampun"],
        "kunciJawaban": 1
    },
    12: {
        "materi": "Aqidah (HOTS)",
        "pertanyaan": "Pemilu telah usai, sebagai warga negara dan muslim yang baik, Xena merasa lega bisa melaksanakan kewajibannya. Ia berkeyakinan bahwa memilih pemimpin juga ibadah dan ada aturannya dalam Islam. Meski hasilnya tidak sesuai yang ia pilih, tapi apa yang ia lakukan pasti akan <b>dicatat dan dipertanggungjawabkan</b> kelak. Ini merupakan pencerminan iman kepada malaikat....",
        "opsi": ["Jibril", "Ridwan", "Rokib dan Atid", "Munkar dan Nakir"],
        "kunciJawaban": 2
    }
}

quizData = []

for i in range(45):
    # Base structure
    q = {
        "id": i + 1,
        "materi": "Materi...",
        "pertanyaan": f"[Menunggu Input] Soal Nomor {i+1}",
        "gambar": "",
        "kutipan": "",
        "opsi": ["-", "-", "-", "-"],
        "kunciJawaban": 0,
        "tipsBidang": "",
        "tipe": "pg" if i < 40 else "uraian"
    }
    
    if i < 40:
        if i in real_q:
            q.update(real_q[i])
    else:
        q["pertanyaan"] = f"[Menunggu Input] Soal Uraian Nomor {i+1}"
        q["opsi"] = [] # no options for uraian
        
    quizData.append(q)

js_content = kisi_kisi + "\nconst quizData = " + json.dumps(quizData, indent=4, ensure_ascii=False) + ";\n"

with open("c:/Users/Asus/Downloads/stitch. sukses asaj full/active_website/js/data.js", "w", encoding="utf-8") as f:
    f.write(js_content)

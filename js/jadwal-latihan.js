// ═══════════════════════════════════════════════════════════
// JADWAL LATIHAN HARIAN
// ID soal harus sesuai dengan nama file di js/latihan/[id].js
// Jadwal ini sebagai FALLBACK offline — jadwal utama dari Google Sheets
// ═══════════════════════════════════════════════════════════
const jadwalLatihan = {
    // Agustus 2026 — Minggu 1-2: Cinta Tanah Air
    "2026-08-12": "quran-cinta-tanah-air",
    "2026-08-13": "quran-cinta-tanah-air",
    "2026-08-14": "quran-cinta-tanah-air",
    "2026-08-18": "quran-cinta-tanah-air",
    "2026-08-19": "quran-cinta-tanah-air",
    // Agustus 2026 — Minggu 3-4: Keimanan
    "2026-08-20": "aqidah-keimanan-kitab-rasul",
    "2026-08-21": "aqidah-keimanan-kitab-rasul",
    "2026-08-25": "aqidah-keimanan-kitab-rasul",
    "2026-08-26": "aqidah-keimanan-kitab-rasul",
    "2026-08-27": "aqidah-keimanan-kitab-rasul",
    "2026-08-28": "aqidah-keimanan-kitab-rasul",
    // September 2026 — Sabar
    // "2026-09-01": "akhlak-sabar-musibah",
    // September 2026 — Rukhsah
    "2026-09-05": "fikih-rukhsah",
};

// ═══════════════════════════════════════════════════════════
// METADATA SET SOAL
// ID harus sesuai nama file (tanpa .js) di folder js/latihan/
// ═══════════════════════════════════════════════════════════
const infoLatihan = {
    "quran-cinta-tanah-air": {
        judul: "Al-Qur'an & Hadis",
        subjudul: "Cinta Tanah Air — Q.S. Al-Qashash/28: 85",
        ikon: "menu_book",
        warna: "primary"
    },
    "aqidah-keimanan-kitab-rasul": {
        judul: "Aqidah / Keimanan",
        subjudul: "Q.S. al-Baqarah/2: 285 & an-Nisa'/4: 150-151",
        ikon: "star",
        warna: "secondary"
    },
    "akhlak-sabar-musibah": {
        judul: "Akhlak / Sabar",
        subjudul: "Q.S. al-Baqarah/2: 155-156 & Ali 'Imran/3: 200",
        ikon: "self_improvement",
        warna: "tertiary"
    },
    "fikih-penyelenggaraan-jenazah": {
        judul: "Fikih",
        subjudul: "Pengurusan Jenazah, Takziyah, dan Ziarah Kubur",
        ikon: "mosque",
        warna: "primary"
    },
    "fikih-penyembelihan-kurban-akikah": {
        judul: "Fikih",
        subjudul: "Penyembelihan Hewan, Kurban, dan Akikah",
        ikon: "mosque",
        warna: "secondary"
    },
    "fikih-rukhsah": {
        judul: "Fikih",
        subjudul: "Rukhsah dalam Perspektif Mazhab Fiqh",
        ikon: "mosque",
        warna: "tertiary"
    },
    // Tambah set soal baru di sini (ID = nama file js/latihan/xxx.js):
    // "ski-daulah-abbasiyah":  { judul: "SKI",   subjudul: "Daulah Abbasiyah",       ikon: "history_edu", warna: "secondary" },
};

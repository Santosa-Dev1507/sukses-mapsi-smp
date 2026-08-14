// ═══════════════════════════════════════════════════════════
// JADWAL LATIHAN HARIAN
// ID soal harus sesuai dengan nama file di js/latihan/[id].js
// Jadwal ini sebagai FALLBACK offline — jadwal utama dari Google Sheets
// ═══════════════════════════════════════════════════════════
const jadwalLatihan = {
    // Agustus 2026 — Tim CCI SMPN 5 Klaten
    "2026-08-14": "bab1-keimanan-cci",
    "2026-08-15": "bab2-ketakwaan-cci",
    "2026-08-16": "paket-variasi-15",
    "2026-08-17": "bab1-keimanan-cci",
    "2026-08-18": "bab2-ketakwaan-cci",
    "2026-08-19": "quran-cinta-tanah-air",
    // Agustus 2026 — Minggu 3-4: Keimanan
    "2026-08-20": "aqidah-keimanan-kitab-rasul",
    "2026-08-21": "aqidah-keimanan-kitab-rasul",
    "2026-08-25": "aqidah-keimanan-kitab-rasul",
    "2026-08-26": "aqidah-keimanan-kitab-rasul",
    "2026-08-27": "aqidah-keimanan-kitab-rasul",
    "2026-08-28": "aqidah-keimanan-kitab-rasul",
    // September 2026 — Rukhsah
    "2026-09-05": "fikih-rukhsah",
    // September 2026 — SKI
    "2026-09-06": "ski-turki-usmani",
    "2026-09-07": "ski-syafawi",
    "2026-09-08": "ski-mughal",
};

// ═══════════════════════════════════════════════════════════
// METADATA SET SOAL
// ID harus sesuai nama file (tanpa .js) di folder js/latihan/
// ═══════════════════════════════════════════════════════════
const infoLatihan = {
    "bab1-keimanan-cci": {
        judul: "Bab 1 (Senin): Keimanan",
        subjudul: "QS. Al-Baqarah/2:285 & QS. An-Nisa/4:150-151 — SMP Negeri 5 Klaten",
        ikon: "verified_user",
        warna: "primary"
    },
    "bab2-ketakwaan-cci": {
        judul: "Bab 2 (Selasa): Ketakwaan",
        subjudul: "QS. Ali Imran/3:102 & QS. Luqman/31:33 — SMP Negeri 5 Klaten",
        ikon: "self_improvement",
        warna: "secondary"
    },
    "paket-variasi-15": {
        judul: "Paket Variasi 15 Soal",
        subjudul: "6 PG Standar + 2 Menjodohkan + 2 PG Kompleks + 5 Lintas Bidang",
        ikon: "assignment_turned_in",
        warna: "tertiary"
    },
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
    "ski-turki-usmani": {
        judul: "SKI",
        subjudul: "Sejarah Peradaban Islam pada Masa Daulah Turki Usmani",
        ikon: "history_edu",
        warna: "primary"
    },
    "ski-syafawi": {
        judul: "SKI",
        subjudul: "Sejarah Peradaban Islam pada Masa Daulah Syafawi di Persia",
        ikon: "history_edu",
        warna: "secondary"
    },
    "ski-mughal": {
        judul: "SKI",
        subjudul: "Sejarah Peradaban Islam pada Masa Daulah Mughal di India",
        ikon: "history_edu",
        warna: "tertiary"
    },
    // Tambah set soal baru di sini (ID = nama file js/latihan/xxx.js):
    // "ski-daulah-abbasiyah":  { judul: "SKI",   subjudul: "Daulah Abbasiyah",       ikon: "history_edu", warna: "secondary" },
};

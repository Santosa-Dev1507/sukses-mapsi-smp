// ═══════════════════════════════════════════════════════════
// JADWAL LATIHAN HARIAN
// Format: "YYYY-MM-DD": "id-set-soal"
// Guru cukup isi/tambah baris di sini setiap awal bulan
// ID soal harus sesuai dengan file di js/latihan/[id].js
// ═══════════════════════════════════════════════════════════
const jadwalLatihan = {
    // Agustus 2026 — Minggu 1-2: Cinta Tanah Air
    "2026-08-12": "kls9-smtgenap-bab1",
    "2026-08-13": "kls9-smtgenap-bab1",
    "2026-08-14": "kls9-smtgenap-bab1",
    "2026-08-18": "kls9-smtgenap-bab1",
    "2026-08-19": "kls9-smtgenap-bab1",
    // Agustus 2026 — Minggu 3-4: Keimanan
    "2026-08-20": "kls9-smtgenap-bab2",
    "2026-08-21": "kls9-smtgenap-bab2",
    "2026-08-25": "kls9-smtgenap-bab2",
    "2026-08-26": "kls9-smtgenap-bab2",
    "2026-08-27": "kls9-smtgenap-bab2",
    "2026-08-28": "kls9-smtgenap-bab2",
    // Tambah jadwal bulan berikutnya di sini...
    // "2026-09-01": "kls9-smtgenap-bab3",
};

// ═══════════════════════════════════════════════════════════
// METADATA SET SOAL
// Cukup isi: judul (nama mata pelajaran/topik), subjudul ringkas, ikon
// Tidak perlu cantumkan kelas/semester/bab
// ═══════════════════════════════════════════════════════════
const infoLatihan = {
    "kls9-smtgenap-bab1": {
        judul: "Al-Qur'an & Hadis",
        subjudul: "Cinta Tanah Air — Q.S. Al-Qashash: 85",
        ikon: "menu_book",
        warna: "primary"
    },
    "kls9-smtgenap-bab2": {
        judul: "Aqidah / Keimanan",
        subjudul: "Q.S. al-Baqarah/2: 285 & an-Nisa/4: 150-151",
        ikon: "star",
        warna: "secondary"
    },
    "kls9-smtgenap-bab3": {
        judul: "Akhlak / Sabar",
        subjudul: "Q.S. al-Baqarah/2: 155-156 & Ali 'Imran/3: 200",
        ikon: "self_improvement",
        warna: "tertiary"
    },
    // Tambah info untuk set soal lain di sini:
    // "kls9-smtgenap-bab4": { judul: "Fikih", subjudul: "Shalat Jamak & Qashar", ikon: "mosque", warna: "primary" },
    // "kls9-smtgenap-bab5": { judul: "SKI", subjudul: "Daulah Abbasiyah", ikon: "history_edu", warna: "secondary" },
};


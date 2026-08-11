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
// Untuk ditampilkan ke siswa di halaman latihan harian
// ═══════════════════════════════════════════════════════════
const infoLatihan = {
    "kls9-smtgenap-bab1": {
        judul: "Cinta Tanah Air",
        subjudul: "Q.S. Al-Qashash: 85, An-Nisa: 66, At-Taubah: 122 & Tajwid Nun Mati",
        kelas: "Kelas 9",
        semester: "Semester Genap",
        bab: "Bab 1",
        ikon: "favorite",
        warna: "primary"
    },
    "kls9-smtgenap-bab2": {
        judul: "Keimanan kepada Kitab & Rasul",
        subjudul: "Q.S. al-Baqarah/2: 285, Q.S. an-Nisā'/4: 150-151 & Tajwid Al-Qamariyah/Al-Syamsiyah",
        kelas: "Kelas 9",
        semester: "Semester Genap",
        bab: "Bab 2",
        ikon: "menu_book",
        warna: "secondary"
    },
    // Tambah info untuk set soal lain di sini
};


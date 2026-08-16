// ═══════════════════════════════════════════════════════════
// JADWAL LATIHAN HARIAN
// ID soal harus sesuai dengan nama file di js/latihan/[id].js
// Jadwal latihan dikendalikan penuh oleh Guru melalui Dashboard Guru
// ═══════════════════════════════════════════════════════════
var jadwalLatihan = {
    // Jadwal diisi secara dinamis melalui Dashboard Guru / Google Sheets
};

// ═══════════════════════════════════════════════════════════
// METADATA SET SOAL
// ID harus sesuai nama file (tanpa .js) di folder js/latihan/
// ═══════════════════════════════════════════════════════════
var infoLatihan = {
    "bab2-fikih-ski": {
        judul: "BAB 2 Fikih-SKI (SELASA)",
        subjudul: "SALAT JUMAT, PERJALANAN MUSAFIR & PERADABAN ABBASIYAH",
        ikon: "mosque",
        warna: "secondary"
    },
    "bab5-fikih-ski": {
        judul: "BAB 5 Fikih-SKI (JUMAT)",
        subjudul: "KETENTUAN KURBAN, AKIKAH & DAULAH SYAFAWI / MUGHAL",
        ikon: "mosque",
        warna: "primary"
    },
    "bab4-fikih-ski": {
        judul: "BAB 4 Fikih-SKI (KAMIS)",
        subjudul: "PENYELENGGARAAN JENAZAH & DAULAH TURKI USMANI",
        ikon: "mosque",
        warna: "error"
    },
    "bab3-fikih-ski": {
        judul: "BAB 3 Fikih-SKI (RABU)",
        subjudul: "PAHALA SETARA HAJI/UMRAH & DAULAH FATIMIYYAH",
        ikon: "mosque",
        warna: "tertiary"
    },
    "bab1-fikih-ski": {
        judul: "BAB 1 Fikih-SKI (SENIN)",
        subjudul: "SUJUD SAHWI, SYUKUR, TILAWAH & DAULAH BANI UMAYYAH",
        ikon: "mosque",
        warna: "primary"
    },
    "bab5-aqidah-aa": {
        judul: "BAB 5 Aqidah-Akhlak (JUMAT)",
        subjudul: "IMAN KEPADA QADA & QADAR, AKHLAK SABAR, OPTIMIS, PEMAAF & ADAB",
        ikon: "school",
        warna: "primary"
    },
    "bab4-aqidah-aa": {
        judul: "BAB 4 Aqidah-Akhlak (KAMIS)",
        subjudul: "IMAN KEPADA HARI KIAMAT, KASIH SAYANG SESAMA & LINGKUNGAN ALAM",
        ikon: "error",
        warna: "error"
    },
    "bab3-aqidah-aa": {
        judul: "BAB 3 Aqidah-Akhlak (RABU)",
        subjudul: "IMAN KEPADA RASUL, AKHLAK CINTA RASUL & HUSNUZAN",
        ikon: "handshake",
        warna: "primary"
    },
    "bab2-aqidah-aa": {
        judul: "BAB 2 Aqidah-Akhlak (SELASA)",
        subjudul: "IMAN KEPADA MALAIKAT, KITAB-KITAB ALLAH & AKHLAK BERSYUKUR",
        ikon: "self_improvement",
        warna: "tertiary"
    },
    "bab1-aqidah-aa": {
        judul: "BAB 1 Aqidah-Akhlak (SENIN)",
        subjudul: "IMAN KEPADA ALLAH, ASMAUL HUSNA & AKHLAK IKHLAS",
        ikon: "star",
        warna: "secondary"
    },
    "bab1-keimanan-cci": {
        judul: "BAB 1 Quran Hadis (SENIN)",
        subjudul: "QS. Al-Baqarah/2:285 & QS. An-Nisa/4:150-151 - KEIMANAN",
        ikon: "verified_user",
        warna: "primary"
    },
    "bab2-ketakwaan-cci": {
        judul: "BAB 2 Quran Hadis (SELASA)",
        subjudul: "QS. Ali Imran/3:102 & QS. Luqman/31:33 - KETAKWAAN",
        ikon: "self_improvement",
        warna: "secondary"
    },
    "bab3-toleransi-cci": {
        judul: "BAB 3 Quran Hadis (RABU)",
        subjudul: "QS. Al-Baqarah/2:256 - TOLERANSI",
        ikon: "handshake",
        warna: "tertiary"
    },
    "bab4-cinta-tanah-air-cci": {
        judul: "BAB 4 Quran Hadis (KAMIS)",
        subjudul: "QS. Al-Qashas/28:85 & QS. An-Nisa/4:66 - CINTA TANAH AIR",
        ikon: "flag",
        warna: "error"
    },
    "bab5-menuntut-ilmu-cci": {
        judul: "BAB 5 Quran Hadis (JUMAT)",
        subjudul: "QS. Al-Mujadalah/58:11 & QS. Az-Zumar/39:9 - SEMANGAT MENUNTUT ILMU",
        ikon: "school",
        warna: "primary"
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
        judul: "Sejarah Kebudayaan Islam",
        subjudul: "Peradaban Islam Daulah Usmani",
        ikon: "history_edu",
        warna: "primary"
    },
    "ski-syafawi": {
        judul: "Sejarah Kebudayaan Islam",
        subjudul: "Peradaban Islam Daulah Syafawi di Persia",
        ikon: "history_edu",
        warna: "secondary"
    },
    "ski-mughal": {
        judul: "Sejarah Kebudayaan Islam",
        subjudul: "Peradaban Islam Daulah Mughal di India",
        ikon: "history_edu",
        warna: "tertiary"
    }
};

// Daftar set soal yang bisa dipilih guru di Dashboard Guru
var DAFTAR_SOAL = [
    // --- KELOMPOK 1: QURAN HADIS (SENIN - JUMAT) ---
    { id: "bab1-keimanan-cci",            label: "BAB 1 Quran Hadis (SENIN) — QS. Al-Baqarah/2:285 & QS. An-Nisa/4:150-151 - KEIMANAN" },
    { id: "bab2-ketakwaan-cci",           label: "BAB 2 Quran Hadis (SELASA) — QS. Ali Imran/3:102 & QS. Luqman/31:33 - KETAKWAAN" },
    { id: "bab3-toleransi-cci",           label: "BAB 3 Quran Hadis (RABU) — QS. Al-Baqarah/2:256 - TOLERANSI" },
    { id: "bab4-cinta-tanah-air-cci",     label: "BAB 4 Quran Hadis (KAMIS) — QS. Al-Qashas/28:85 & QS. An-Nisa/4:66 - CINTA TANAH AIR" },
    { id: "bab5-menuntut-ilmu-cci",       label: "BAB 5 Quran Hadis (JUMAT) — QS. Al-Mujadalah/58:11 & QS. Az-Zumar/39:9 - SEMANGAT MENUNTUT ILMU" },

    // --- KELOMPOK 2: AQIDAH AKHLAK (SENIN - JUMAT) ---
    { id: "bab1-aqidah-aa",               label: "BAB 1 Aqidah-Akhlak (SENIN) — Iman kepada Allah, Asmaul Husna & Akhlak Ikhlas" },
    { id: "bab2-aqidah-aa",               label: "BAB 2 Aqidah-Akhlak (SELASA) — Iman kepada Malaikat, Kitab & Akhlak Bersyukur" },
    { id: "bab3-aqidah-aa",               label: "BAB 3 Aqidah-Akhlak (RABU) — Iman kepada Rasul, Cinta Rasul & Husnuzan" },
    { id: "bab4-aqidah-aa",               label: "BAB 4 Aqidah-Akhlak (KAMIS) — Iman Kiamat, Kasih Sayang Sesama & Alam" },
    { id: "bab5-aqidah-aa",               label: "BAB 5 Aqidah-Akhlak (JUMAT) — Iman Qada & Qadar, Akhlak Sabar, Optimis, Pemaaf & Adab" },

    // --- KELOMPOK 3: FIKIH & SKI (SENIN - JUMAT) ---
    { id: "bab1-fikih-ski",               label: "BAB 1 Fikih-SKI (SENIN) — Sujud Sahwi, Syukur, Tilawah & Daulah Bani Umayyah" },
    { id: "bab2-fikih-ski",               label: "BAB 2 Fikih-SKI (SELASA) — Salat Jumat, Perjalanan Musafir & Peradaban Abbasiyah" },
    { id: "bab3-fikih-ski",               label: "BAB 3 Fikih-SKI (RABU) — Pahala Setara Haji/Umrah & Daulah Fatimiyah" },
    { id: "bab4-fikih-ski",               label: "BAB 4 Fikih-SKI (KAMIS) — Penyelenggaraan Jenazah & Daulah Turki Usmani" },
    { id: "bab5-fikih-ski",               label: "BAB 5 Fikih-SKI (JUMAT) — Ketentuan Kurban, Akikah & Daulah Syafawi/Mughal" },

    // --- TOPIK SPESIFIK LAINNYA ---
    { id: "quran-cinta-tanah-air",        label: "Al-Qur'an & Hadis — Cinta Tanah Air (Q.S. Al-Qashash/28: 85)" },
    { id: "aqidah-keimanan-kitab-rasul",  label: "Aqidah — Keimanan kepada Kitab dan Rasul" },
    { id: "aqidah-iman-kepada-rasul",     label: "Aqidah — Iman kepada Rasul-Rasul Allah" },
    { id: "aqidah-iman-hari-kiamat",      label: "Aqidah — Iman kepada Hari Kiamat" },
    { id: "aqidah-qada-qadar",            label: "Aqidah — Iman kepada Qada dan Qadar" },
    { id: "akhlak-husnuzan",              label: "Akhlak — Husnuzan (Berbaik Sangka)" },
    { id: "akhlak-kasih-sayang-sesama",   label: "Akhlak — Kasih Sayang kepada Sesama" },
    { id: "akhlak-kasih-sayang-alam",     label: "Akhlak — Makna Kasih Sayang kepada Lingkungan Alam" },
    { id: "akhlak-sabar-musibah",         label: "Akhlak — Sabar Menghadapi Musibah & Ujian" },
    { id: "fikih-penyelenggaraan-jenazah", label: "Fikih — Pengurusan Jenazah & Ziarah Kubur" },
    { id: "fikih-penyembelihan-kurban-akikah", label: "Fikih — Penyembelihan, Kurban & Akikah" },
    { id: "fikih-rukhsah",                label: "Fikih — Rukhsah dalam Ibadah" },
    { id: "ski-turki-usmani",             label: "SKI — Daulah Turki Usmani" },
    { id: "ski-syafawi",                  label: "SKI — Daulah Syafawi di Persia" },
    { id: "ski-mughal",                   label: "SKI — Daulah Mughal di India" }
];
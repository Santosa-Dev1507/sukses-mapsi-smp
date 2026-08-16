// ═══════════════════════════════════════════════════════════
// JADWAL LATIHAN HARIAN
// ID soal harus sesuai dengan nama file di js/latihan/[id].js
// Jadwal latihan dikendalikan penuh oleh Guru melalui Dashboard Guru
// ═══════════════════════════════════════════════════════════
const jadwalLatihan = {
    // Jadwal diisi secara dinamis melalui Dashboard Guru / Google Sheets
};

// ═══════════════════════════════════════════════════════════
// METADATA SET SOAL
// ID harus sesuai nama file (tanpa .js) di folder js/latihan/
// ═══════════════════════════════════════════════════════════
const infoLatihan = {
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
const DAFTAR_SOAL = [
    { id: "bab2-aqidah-aa", label: "BAB 2 Aqidah-Akhlak (SELASA) — Iman kepada Malaikat, Kitab & Akhlak Bersyukur" },
    { id: "bab1-aqidah-aa", label: "BAB 1 Aqidah-Akhlak (SENIN) — Iman kepada Allah, Asmaul Husna & Akhlak Ikhlas" },
    { id: "bab1-keimanan-cci", label: "BAB 1 Quran Hadis (SENIN) — QS. Al-Baqarah/2:285 & QS. An-Nisa/4:150-151 - KEIMANAN" },
    { id: "bab2-ketakwaan-cci", label: "BAB 2 Quran Hadis (SELASA) — QS. Ali Imran/3:102 & QS. Luqman/31:33 - KETAKWAAN" },
    { id: "bab3-toleransi-cci", label: "BAB 3 Quran Hadis (RABU) — QS. Al-Baqarah/2:256 - TOLERANSI" },
    { id: "bab4-cinta-tanah-air-cci", label: "BAB 4 Quran Hadis (KAMIS) — QS. Al-Qashas/28:85 & QS. An-Nisa/4:66 - CINTA TANAH AIR" },
    { id: "bab5-menuntut-ilmu-cci", label: "BAB 5 Quran Hadis (JUMAT) — QS. Al-Mujadalah/58:11 & QS. Az-Zumar/39:9 - SEMANGAT MENUNTUT ILMU" },
    { id: "quran-cinta-tanah-air", label: "Al-Qur'an & Hadis — Cinta Tanah Air (Q.S. Al-Qashash/28: 85)" },
    { id: "aqidah-keimanan-kitab-rasul", label: "Aqidah — Keimanan kepada Kitab dan Rasul" },
    { id: "akhlak-sabar-musibah", label: "Akhlak — Sabar Menghadapi Musibah & Ujian" },
    { id: "fikih-penyelenggaraan-jenazah", label: "Fikih — Pengurusan Jenazah & Ziarah Kubur" },
    { id: "fikih-penyembelihan-kurban-akikah", label: "Fikih — Penyembelihan, Kurban & Akikah" },
    { id: "fikih-rukhsah", label: "Fikih — Rukhsah dalam Ibada" },
    { id: "ski-turki-usmani", label: "SKI — Daulah Turki Usmani" },
    { id: "ski-syafawi", label: "SKI — Daulah Syafawi di Persia" },
    { id: "ski-mughal", label: "SKI — Daulah Mughal di India" }
];

const fs = require('fs');

let content = fs.readFileSync('js/materi.js', 'utf8');

const bab10Konten = `
<p class="text-on-surface-variant leading-relaxed text-lg mb-8">
    Bab ini adalah puncak selebrasi peradaban rasional Islam. Kita akan melihat bagaimana doktrin "Wajib Menuntut Ilmu" melahirkan ratusan polimatik jenius di era Abbasiyah yang meletakkan fondasi sains dan teknologi modern dunia hari ini.
</p>

<!-- 1. Semangat Ilmu -->
<div class="bg-surface-container-low p-8 rounded-[2rem] border-l-8 border-primary shadow-sm mb-12 flex flex-col md:flex-row items-center gap-8">
    <div class="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
        <span class="material-symbols-outlined text-[48px] text-primary">local_library</span>
    </div>
    <div>
        <h3 class="font-headline text-2xl font-bold text-primary mb-3">Doktrin Gila Ilmu</h3>
        <p class="text-sm text-on-surface-variant leading-relaxed text-justify">
            Al-Qur'an dan Hadis berulang kali memacu umat untuk meneliti alam semesta. Di era Abbasiyah, berburu ilmu tidak hanya sekadar hobi, melainkan <strong>ibadah vertikal</strong> yang dimodali besar-besaran oleh negara melalui lembaga *Bayt al-Hikmah*.
        </p>
    </div>
</div>

<!-- 2. Galeri Ilmuwan Muslim -->
<h3 class="font-headline text-2xl font-bold text-center mt-12 mb-4">Galeri Cendekiawan Muslim Abbasiyah</h3>
<p class="text-center text-sm text-on-surface-variant max-w-3xl mx-auto mb-10">Berikut adalah *"Avengers"* peradaban Islam yang mengubah dunia. Kami membaginya ke dalam 3 fakultas utama:</p>

<!-- Fakultas Sains & Teknologi -->
<h4 class="font-bold text-lg text-secondary bg-secondary/10 px-4 py-2 rounded-xl inline-block mb-6"><span class="material-symbols-outlined align-middle mr-2 text-sm">science</span> Fakultas Sains & Kedokteran</h4>
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
    <div class="p-5 border border-outline-variant/30 rounded-2xl bg-white shadow-sm hover:border-secondary transition-colors">
        <h5 class="font-bold text-on-surface text-md">Al-Khawarizmi</h5>
        <div class="text-[10px] text-secondary font-bold mb-2">Matematika & Geografi</div>
        <p class="text-xs text-on-surface-variant">Bapak <strong>Aljabar</strong>. Memperkenalkan angka <strong>nol</strong> dan sistem desimal, perumuskan trigonometri dasar.</p>
    </div>
    <div class="p-5 border border-outline-variant/30 rounded-2xl bg-white shadow-sm hover:border-secondary transition-colors">
        <h5 class="font-bold text-on-surface text-md">Ibnu Sina (Avicenna)</h5>
        <div class="text-[10px] text-secondary font-bold mb-2">Kedokteran</div>
        <p class="text-xs text-on-surface-variant">Penulis kitab legendaris <em>"Al-Qanun fi at-Tibb"</em>, rujukan emas medis dunia selama berabad-abad lamanya.</p>
    </div>
    <div class="p-5 border border-outline-variant/30 rounded-2xl bg-white shadow-sm hover:border-secondary transition-colors">
        <h5 class="font-bold text-on-surface text-md">Ibnu al-Haytham (Alhazen)</h5>
        <div class="text-[10px] text-secondary font-bold mb-2">Optik & Fisika</div>
        <p class="text-xs text-on-surface-variant">Bapak Optik Modern. Membedah cara kerja mata & cahaya lewat eksperimen <em>Camera Obscura</em> terawal.</p>
    </div>
    <div class="p-5 border border-outline-variant/30 rounded-2xl bg-white shadow-sm hover:border-secondary transition-colors">
        <h5 class="font-bold text-on-surface text-md">Jabir ibn Hayyan (Geber)</h5>
        <div class="text-[10px] text-secondary font-bold mb-2">Kimia</div>
        <p class="text-xs text-on-surface-variant">Bapak Kimia Klasik. Menemukan berbagai senyawa dan teknik distilasi, kristalisasi lab pertama.</p>
    </div>
    <div class="p-5 border border-outline-variant/30 rounded-2xl bg-white shadow-sm hover:border-secondary transition-colors">
        <h5 class="font-bold text-on-surface text-md">Abbas ibn Firnas</h5>
        <div class="text-[10px] text-secondary font-bold mb-2">Teknik & Penerbangan</div>
        <p class="text-xs text-on-surface-variant">Penemu ide sayap <em>Glider</em> pertama, ratusan tahun sebelum Wright Bersaudara.</p>
    </div>
    <div class="p-5 border border-outline-variant/30 rounded-2xl bg-white shadow-sm hover:border-secondary transition-colors">
        <h5 class="font-bold text-on-surface text-md">Al-Biruni, Ar-Razi, Dll</h5>
        <div class="text-[10px] text-secondary font-bold mb-2">Astronomi & Dokter</div>
        <p class="text-xs text-on-surface-variant">Al-Biruni ukur keliling bumi. Ar Razi bedah Cacar & Campak. Al Battani hitung akurat lama tahun matahari. Al Kasyi kuasai aritmatika desimal.</p>
    </div>
</div>

<!-- Fakultas Dinul Islam -->
<h4 class="font-bold text-lg text-primary bg-primary/10 px-4 py-2 rounded-xl inline-block mb-6"><span class="material-symbols-outlined align-middle mr-2 text-sm">menu_book</span> Fakultas Syariat Islam (Fikih & Hadis)</h4>
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
    <div class="p-4 border border-outline-variant/30 rounded-xl bg-surface-container-lowest text-center">
        <h5 class="font-bold text-sm">Imam Abu Hanifah</h5>
        <p class="text-[11px] text-on-surface-variant mt-1">Founding Father Mazhab Hanafi (Sangat logis dan analitis).</p>
    </div>
    <div class="p-4 border border-outline-variant/30 rounded-xl bg-surface-container-lowest text-center">
        <h5 class="font-bold text-sm">Imam Malik</h5>
        <p class="text-[11px] text-on-surface-variant mt-1">Founder Mazhab Maliki, Penulis kompilasi hadis awal <em>'Al-Muwatta'</em>.</p>
    </div>
    <div class="p-4 border border-outline-variant/30 rounded-xl bg-surface-container-lowest text-center">
        <h5 class="font-bold text-sm">Imam Syafi'i</h5>
        <p class="text-[11px] text-on-surface-variant mt-1">Founder Mazhab Syafi'i, Arsitek pertama disiplin *"Ushul Fikih"*.</p>
    </div>
    <div class="p-4 border border-outline-variant/30 rounded-xl bg-surface-container-lowest text-center">
        <h5 class="font-bold text-sm">Imam Ahmad bin Hambal</h5>
        <p class="text-[11px] text-on-surface-variant mt-1">Founder Mazhab Hambali, penghafal & penulis <em>Musnad Ahmad</em>.</p>
    </div>
    
    <div class="p-4 border border-outline-variant/30 rounded-xl bg-white col-span-1 lg:col-span-2 flex items-center gap-3">
        <span class="material-symbols-outlined text-primary">verified_user</span>
        <div>
            <h5 class="font-bold text-sm">Maestro Hadis</h5>
            <p class="text-[11px] text-on-surface-variant"><strong>Imam Bukhari</strong> (Shahih Bukhari) dan <strong>Imam Muslim</strong> (Shahih Muslim). Keduanya memfilter ratusan ribu riwayat palsu demi menjaga orisinalitas sabda Nabi.</p>
        </div>
    </div>
    <div class="p-4 border border-outline-variant/30 rounded-xl bg-white col-span-1 lg:col-span-2 flex items-center gap-3">
        <span class="material-symbols-outlined text-primary">menu_book</span>
        <div>
            <h5 class="font-bold text-sm">Ibnu Jarir at-Tabari</h5>
            <p class="text-[11px] text-on-surface-variant">Sejarawan & mufassir mutlak. Karyanya <em>"Jami' al-Bayan" (Tafsir Tabari)</em> menjadi rujukan tafsir standar hingga kiamat tiba.</p>
        </div>
    </div>
</div>

<!-- Fakultas Filsafat -->
<h4 class="font-bold text-lg text-tertiary bg-tertiary/10 px-4 py-2 rounded-xl inline-block mb-6"><span class="material-symbols-outlined align-middle mr-2 text-sm">psychology</span> Fakultas Etika & Filsafat</h4>
<div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-16">
    <div class="p-5 border border-outline-variant/30 rounded-2xl bg-white shadow-sm flex items-start gap-4">
        <div class="w-12 h-12 bg-tertiary/10 rounded-full flex items-center justify-center shrink-0 font-bold text-tertiary text-xl">F</div>
        <div>
            <h5 class="font-bold text-on-surface mb-1">Al-Farabi (Alfarabius)</h5>
            <p class="text-xs text-on-surface-variant">Pakar Logika, Musik, & Ilmu kenegaraan. Dunia mengenalnya sebagai <strong>"Guru Kedua"</strong> filsafat mendampingi Aristoteles sang Guru Pertama.</p>
        </div>
    </div>
    <div class="p-5 border border-outline-variant/30 rounded-2xl bg-white shadow-sm flex items-start gap-4">
        <div class="w-12 h-12 bg-tertiary/10 rounded-full flex items-center justify-center shrink-0 font-bold text-tertiary text-xl">K</div>
        <div>
            <h5 class="font-bold text-on-surface mb-1">Al-Kindi</h5>
            <p class="text-xs text-on-surface-variant">Filsuf ras murni Arab pertama. Ia berhasil membuktikan bahwa mendedah pemikiran Yunani sama sekali tidak menciderai akidah fundamental Islam.</p>
        </div>
    </div>
</div>

<!-- Resolusi Akhir -->
<div class="bg-gradient-to-br from-primary to-primary-container p-10 rounded-[3rem] text-white shadow-xl relative overflow-hidden text-center">
    <span class="material-symbols-outlined text-5xl mb-4">school</span>
    <h4 class="text-2xl font-headline font-bold mb-6">Warisan Genetik Intelektual untuk Kita</h4>
    <p class="text-sm opacity-90 max-w-3xl mx-auto leading-relaxed mb-8">
        Ratusan buku tebal tertulis, eksperimen yang gagal hingga berhasil, dan perjalanan beribu kilometer menyeberangi benua mereka lakukan demi sekelumit ilmu. Ini adalah tugas bagi pemuda hari ini: 
    </p>
    <div class="flex flex-wrap justify-center gap-3">
        <span class="px-5 py-2 bg-white/20 border border-white/30 rounded-full text-xs font-bold">1. Belajar Tanpa Akhir (Lifelong Learning)</span>
        <span class="px-5 py-2 bg-white/20 border border-white/30 rounded-full text-xs font-bold">2. Bertahan Menderita Susahnya Belajar</span>
        <span class="px-5 py-2 bg-white/20 border border-white/30 rounded-full text-xs font-bold">3. Inovasi & Produksi</span>
        <span class="px-5 py-2 bg-white/20 border border-white/30 rounded-full text-xs font-bold">4. Mengajarkannya Kembali</span>
    </div>
</div>
`;

// Fungsi Inject
const format = `"id": "kls8-smtgenap-bab4",
        "kelas": 8,
        "semester": "Genap",
        "bab": "Bab 4",
        "judul": "Inspirasi Cendekiawan Muslim Abbasiyah untuk Peradaban",
        "waktuBumper": "18 Menit Baca",
        "gambar": "images/islamic_calligraphy.png",
        "konten": \`
${bab10Konten.replace(/`/g, '\\`')}
        \``;

const startPhrase = `"id": "kls8-smtgenap-bab4",`;
const nextPhraseRegex = /"id":\s*"[^"]+",/; 

let startIndex = content.indexOf(startPhrase);
if (startIndex !== -1) {
    let before = content.substring(0, startIndex);
    let afterStart = content.substring(startIndex + startPhrase.length);
    let match = afterStart.match(nextPhraseRegex);
    
    if (match) {
        let nextIndex = startIndex + startPhrase.length + match.index;
        let after = content.substring(nextIndex);
        content = before + format + '\n    }, {\n        ' + after;
    } else {
        let endBracketIndex = content.lastIndexOf(']');
        if (endBracketIndex !== -1) {
            let after = content.substring(endBracketIndex);
            content = before + format + '\n    }\n' + after;
        }
    }
} else {
    // If we can't find kls8-smtgenap-bab4 (maybe it wasn't added yet or ran out of slots)
    // We will append it to the end of the array.
    console.log("Could not find slot, appending to end of array.");
    let endBracketIndex = content.lastIndexOf(']');
    if (endBracketIndex !== -1) {
        let before = content.substring(0, endBracketIndex);
        // clean up parsing
        before = before.trim();
        // remove trailing comma if exists
        if (before.endsWith(',')) {
            before = before.slice(0, -1);
        } else if (before.endsWith('}')) {
            before += ', {';
        }
        
        let newBlock = `
    ${format}
    }
]`;
        content = before + '\n' + newBlock;
    }
}

fs.writeFileSync('js/materi.js', content, 'utf8');
console.log('Success kls8 genap bab 4 string replacement/append');

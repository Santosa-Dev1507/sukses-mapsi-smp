const fs = require('fs');

let content = fs.readFileSync('js/materi.js', 'utf8');

// ==========================================
// KONTEN BAB 5 KLS 8 GANJIL
// ==========================================
const bab5GanjilKonten = `
<p class="text-on-surface-variant leading-relaxed text-lg mb-8">
    Bab ini mengajak kita menyusuri lorong waktu menuju salah satu periode paling gemilang dalam peradaban pemikiran umat manusia: Masa Keemasan Daulah Abbasiyah (The Golden Age of Islam).
</p>

<!-- 1 & 2. Sejarah & Era Emas -->
<div class="grid md:grid-cols-2 gap-6 mb-12">
    <div class="bg-surface-container-low p-8 rounded-[2rem] border border-outline-variant/20 shadow-sm relative overflow-hidden">
        <h3 class="font-headline text-xl font-bold text-primary mb-4 flex items-center"><span class="material-symbols-outlined mr-2">stars</span> Awal Berdiri (750 M)</h3>
        <p class="text-sm text-on-surface-variant leading-relaxed">
            Didirikan oleh Abul Abbas As-Saffah melalui kejatuhan dinasti Umayyah. Sentra administrasi kemudian dipindahkan dari Damaskus menuju benteng kosmopolitan baru, <strong>Baghdad</strong> (tepi Sungai Tigris), menandai era akulturasi Arab-Persia.
        </p>
    </div>
    <div class="bg-surface-container-low p-8 rounded-[2rem] border border-outline-variant/20 shadow-sm relative overflow-hidden">
        <h3 class="font-headline text-xl font-bold text-secondary mb-4 flex items-center"><span class="material-symbols-outlined mr-2">account_balance</span> Bayt al-Hikmah</h3>
        <p class="text-sm text-on-surface-variant leading-relaxed">
            Rumah Kebijaksanaan (Lambang puncak toleransi murni). Perpustakaan raksasa yang menjadi jantung penerjemahan karya-karya langka peradaban Yunani, Persia, dan India tanpa melihat SARA.
        </p>
    </div>
</div>

<!-- 3. Tokoh & Ilmu -->
<h3 class="font-headline text-2xl font-bold text-primary mt-12 mb-6 text-center">Megabintang Ilmu Pengetahuan</h3>
<div class="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
    <div class="bg-white p-6 rounded-2xl shadow-sm border border-outline-variant/10 text-center hover:-translate-y-1 transition-transform group">
        <span class="material-symbols-outlined text-5xl text-primary mb-3 bg-primary/10 p-3 rounded-full group-hover:bg-primary group-hover:text-white transition-colors">calculate</span>
        <h4 class="font-bold text-lg mb-2">Al-Khawarizmi</h4>
        <p class="text-xs text-on-surface-variant">Penemu akar kata *Algoritma* dan Bapak Aljabar dunia. Perumus sistem desimal yang menaklukkan Eropa via terjemahan Latin.</p>
    </div>
    <div class="bg-white p-6 rounded-2xl shadow-sm border border-outline-variant/10 text-center hover:-translate-y-1 transition-transform group">
        <span class="material-symbols-outlined text-5xl text-primary mb-3 bg-primary/10 p-3 rounded-full group-hover:bg-primary group-hover:text-white transition-colors">monitor_heart</span>
        <h4 class="font-bold text-lg mb-2">Ibnu Sina</h4>
        <p class="text-xs text-on-surface-variant">Lahirnya mahakarya kedokteran lintas masa *"The Canon of Medicine"* (Al-Qanun fi at-Tibb) yang jadi rujukan medis global selama 6 abad.</p>
    </div>
    <div class="bg-white p-6 rounded-2xl shadow-sm border border-outline-variant/10 text-center hover:-translate-y-1 transition-transform group">
        <span class="material-symbols-outlined text-5xl text-primary mb-3 bg-primary/10 p-3 rounded-full group-hover:bg-primary group-hover:text-white transition-colors">auto_awesome</span>
        <h4 class="font-bold text-lg mb-2">Astronomi & Seni Intrik</h4>
        <p class="text-xs text-on-surface-variant">Lahir kalender presisi, instrumen astrolabe untuk navigasi rasi, hingga peninggalan kemegahan artistik masjid agung dengan kaligrafi.</p>
    </div>
</div>

<!-- 4 & 5. Runtuh & Hikmah -->
<h3 class="font-headline text-2xl font-bold text-error mt-12 mb-4">Runtuhnya Baghdad & Nilai Hikmahnya</h3>
<div class="flex flex-col md:flex-row gap-6 mb-12">
    <div class="md:w-1/3 bg-error/10 p-6 rounded-[2rem] border border-error/20 flex flex-col justify-center">
        <span class="font-bold text-error mb-2">1258 Masehi</span>
        <p class="text-sm text-on-surface-variant">Sikap korup, perpecahan intern, serta infiltrasi militer tentara biadab Mongol di bawah Hulagu Khan membuat Bayt al-Hikmah rata dengan tanah.</p>
    </div>
    <div class="md:w-2/3 bg-surface-container p-8 rounded-[2rem]">
        <h4 class="font-bold text-lg mb-4">Resolusi Pelajar Muslim Masa Kini:</h4>
        <ul class="text-sm text-on-surface-variant opacity-90 space-y-3">
            <li class="flex items-center gap-2"><span class="material-symbols-outlined text-primary text-[18px]">verified</span> <strong>Cintai Literasi:</strong> Kewajiban utama memburu ilmu seperti halnya kewajiban rukun beragama.</li>
            <li class="flex items-center gap-2"><span class="material-symbols-outlined text-primary text-[18px]">verified</span> <strong>Toleransi Terbuka:</strong> Meniru Baitul Hikmah yang kolaboratif anti rasis.</li>
            <li class="flex items-center gap-2"><span class="material-symbols-outlined text-primary text-[18px]">verified</span> <strong>Anti Konflik Internal:</strong> Keangkuhan pemimpin cuma bikin hancur dari dalam.</li>
        </ul>
    </div>
</div>
`;

// ==========================================
// KONTEN BAB 6 KLS 8 GANJIL (ATAU BAB 1 GENAP)
// BERDASARKAN SYSTEM REQ, User mentioned "bab VI / bab 1 semester genap"
// WE KEEP kls8-smtgenap-bab1
// ==========================================
const bab1GenapKonten = `
<p class="text-on-surface-variant leading-relaxed text-lg mb-8">
    Bab ini merupakan kompas akhlak bertetangga sosial, menuntun kita menyelami ajaran <strong>Islam Moderat (Ummatan Wasatan)</strong>, yaitu pertengahan, tidak pro-radikal, dan tidak terlalu liberal meremehkan syariat.
</p>

<!-- 1. Tajwid -->
<h3 class="font-headline text-2xl font-bold text-primary mt-12 mb-6 flex items-center">
    <span class="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mr-4 shrink-0">
        <span class="material-symbols-outlined text-[24px]">spellcheck</span>
    </span>
    1. Tajwid Paling Fundamental (Nun & Mim Sukun)
</h3>

<div class="grid md:grid-cols-2 gap-6 mb-16">
    <div class="bg-surface-container-low p-6 rounded-[2rem] border border-outline-variant/20 shadow-sm relative overflow-hidden">
        <span class="font-quran absolute -top-4 -right-2 text-9xl text-primary/5">ن</span>
        <h4 class="font-bold text-lg mb-4 text-primary border-b border-outline-variant/20 pb-2">Hukum Nun Sukun (نْ) / Tanwin</h4>
        <div class="space-y-3 text-sm text-on-surface-variant relative z-10">
            <div class="flex items-start gap-2"><span class="bg-primary/10 text-primary px-2 rounded font-bold shrink-0">Izhar</span> <p>Jelas tegas. Bertemu huruf tenggorokan (ء ه ح خ ع غ).</p></div>
            <div class="flex items-start gap-2"><span class="bg-secondary/10 text-secondary px-2 rounded font-bold shrink-0">Idgham</span> <p>Peleburan Suara. Bighunnah (dengan dengung, ي ن م و) dan Bilaghunnah (tanpa dengung, ل ر).</p></div>
            <div class="flex items-start gap-2"><span class="bg-tertiary/10 text-tertiary px-2 rounded font-bold shrink-0">Iqlab</span> <p>Sulap suara ke Mim mutlak. (Hanya di huruf ب).</p></div>
            <div class="flex items-start gap-2"><span class="bg-error/10 text-error px-2 rounded font-bold shrink-0">Ikhfa</span> <p>Dengung samar. (Terjadi di 15 huruf sisanya tertunda).</p></div>
        </div>
    </div>
    
    <div class="bg-surface-container-low p-6 rounded-[2rem] border border-outline-variant/20 shadow-sm relative overflow-hidden">
        <span class="font-quran absolute -top-4 -right-2 text-9xl text-secondary/5">م</span>
        <h4 class="font-bold text-lg mb-4 text-secondary border-b border-outline-variant/20 pb-2">Hukum Mim Sukun (مْ)</h4>
        <div class="space-y-3 text-sm text-on-surface-variant relative z-10">
            <div class="flex items-start gap-2"><span class="bg-primary/10 text-primary px-2 rounded font-bold shrink-0 mt-1">Ikhfa Syafawi</span> <p>Disamarkan dalam tabrakan dengung bibir. (Khusus jika berhadapan dengan ب).</p></div>
            <div class="flex items-start gap-2"><span class="bg-secondary/10 text-secondary px-2 rounded font-bold shrink-0 mt-1">Idgham Mimi</span> <p>Mim nabrak Mim! Didegungkan secara syahdu. (Khusus berhadapan dengan م).</p></div>
            <div class="flex items-start gap-2"><span class="bg-tertiary/10 text-tertiary px-2 rounded font-bold shrink-0 mt-1">Izhar Syafawi</span> <p>Kasus tersering terjadi. Mulut nutup dan diucapkan jelas! (Bertemu selain Ba' dan Mim).</p></div>
        </div>
    </div>
</div>

<!-- 2. Ayat Moderat -->
<h3 class="font-headline text-2xl font-bold text-primary mt-12 mb-6 text-center">Konsep Emas Moderasi Beragama</h3>

<div class="grid md:grid-cols-2 gap-6 mb-12">
    <div class="bg-primary/5 p-6 rounded-3xl border-l-8 border-primary relative overflow-hidden flex flex-col justify-center">
        <div class="text-right font-quran text-2xl leading-[2.5] mb-4 text-on-surface" dir="rtl">وَكَذَلِكَ جَعَلْنَاكُمْ أُمَّةً وَسَطًا ...</div>
        <p class="font-body text-sm italic text-on-surface-variant border-t border-outline-variant/20 pt-3">
            "Kami (Tuhan) telah menjadikan kamu (umat Islam) <strong>'ummatan wasatan' (umat moderat / jalan tengah)</strong> agar kalian menjadi wasit adil atas manusia..." <br><strong>(Q.S. al-Baqarah: 143)</strong>
        </p>
    </div>
    <div class="bg-secondary/5 p-6 rounded-3xl border-l-8 border-secondary relative overflow-hidden flex flex-col justify-center">
        <div class="text-right font-quran text-lg mb-3" dir="rtl">إِنَّ الدِّينَ يُسْرٌ ... فَسَدِّدُوا وَقَارِبُوا وَأَبْشِرُوا</div>
        <p class="text-sm italic text-on-surface-variant border-t border-outline-variant/20 pt-3">"Islam adalah entitas yang ringan dan fleksibel. Maka carilah jalan pertengahan, proporsional, serta gembirakanlah." <br><strong>(HR. Bukhari dari Jabir)</strong></p>
    </div>
</div>

<!-- 4. Kisah Teladan Hudaibiyah -->
<div class="bg-gradient-to-br from-primary to-primary-container p-10 rounded-[3rem] text-white shadow-xl flex flex-col items-center text-center">
    <h3 class="font-headline text-2xl font-bold mb-4 text-white">Hikmah Puncak Moderasi: Tragedi Hudaibiyah</h3>
    <p class="text-sm opacity-90 leading-relaxed max-w-3xl mb-6">
        Pada 628 M, kafir Quraisy menyabotase blokade jalur kedatangan Nabi dan rombongan umrah di Mekkah. Lewat diplomasi super panas, lahirlah gencatan dokumen pakta *"Perjanjian Hudaibiyah"*. Secara tertulis isi dokumennya merugikan gengsi umat Islam, hingga mayoritas sahabat murka.
    </p>
    <div class="w-full bg-white/10 rounded-2xl p-6 border border-white/20">
        <span class="material-symbols-outlined text-[40px] text-secondary-fixed mb-2">gavel</span>
        <p class="text-[15px] font-bold text-white mb-2">Namun, Nabi memilih jalur Kelapangan Dada Moderat!</p>
        <p class="text-xs text-white/80">Beliau menyetujui penghapusan diksi "Rasulullah" pada naskah demi menjaga genjatan senjata fisik. Nyatanya, pengalah strategis tersebut terbukti brilian karena kelak berujung menangnya dakwah masif tanpa jatuhnya darah satupun (Fathu Makkah).</p>
    </div>
</div>
`;

// Fungsi Inject
function appendBab(babId, kelas, sem, babNo, judul, waktu, isikonten) {
    const format = `"id": "${babId}",
        "kelas": ${kelas},
        "semester": "${sem}",
        "bab": "${babNo}",
        "judul": "${judul}",
        "waktuBumper": "${waktu} Menit Baca",
        "gambar": "images/islamic_calligraphy.png",
        "konten": \`
${isikonten.replace(/`/g, '\\`')}
        \``;

    const startPhrase = `"id": "${babId}",`;
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
    }
}

// Eksekusi Bab 5 Ganjil (ID: kls8-smtganjil-bab5)
appendBab('kls8-smtganjil-bab5', 8, 'Ganjil', 'Bab 5', 'Meneladani Semangat Literasi Masa Keemasan Islam Era Daulah Abbasiyah', '14', bab5GanjilKonten);

// Eksekusi Bab 1 Genap (ID: kls8-smtgenap-bab1)
appendBab('kls8-smtgenap-bab1', 8, 'Genap', 'Bab 1', "Inspirasi Al-Qur\\'an: Indahnya Beragama Secara Moderat", '14', bab1GenapKonten);

fs.writeFileSync('js/materi.js', content, 'utf8');
console.log('Success kls8 bab5 ganjil and bab1 genap replacement full');

const fs = require('fs');

let content = fs.readFileSync('js/materi.js', 'utf8');

const bab1Kls7GenapKonten = `
<p class="text-on-surface-variant leading-relaxed text-lg mb-8">
    Materi ini membuka cakrawala kita bahwa Al-Qur'an bukan sekadar kitab suci agama rutinitas, melainkan <strong>Ensiklopedia Sains Tertinggi</strong>. Kita akan mengupas pembenaran rahasia awal mula penciptaan alam semesta dan peran air sebagai pondasi kehidupan kosmos yang sesungguhnya sudah di-<em>spoiler</em> Al-Qur'an 1400 tahun silam!
</p>

<!-- 1. Dalil Utama -->
<h3 class="font-headline text-2xl font-bold text-primary mb-6 flex items-center bg-primary/5 w-max pr-6 py-2 rounded-r-full"><span class="material-symbols-outlined mr-3 bg-primary text-white w-12 h-12 flex items-center justify-center rounded-full shadow-md">auto_stories</span> 1. Dalil Penciptaan Kosmos</h3>
<div class="grid md:grid-cols-2 gap-8 mb-12">
    <!-- Anbiya 30 -->
    <div class="bg-white p-8 rounded-[2.5rem] border border-outline-variant/20 shadow-sm relative overflow-hidden flex flex-col justify-between group hover:shadow-md transition-shadow">
        <span class="bg-primary text-white text-[10px] font-bold px-3 py-1 rounded-full absolute -top-3 right-8 tracking-widest shadow-sm z-10">Q.S. AL-ANBIYA: 30</span>
        <span class="material-symbols-outlined absolute -left-6 -bottom-6 text-primary/5 text-[150px] rotate-12 pointer-events-none group-hover:scale-110 transition-transform">explosion</span>
        <div class="relative z-10">
            <div class="text-right font-quran text-2xl leading-loose mb-6 text-on-surface mt-2" dir="rtl">...اَنَّ السَّمٰوٰتِ وَالۡاَرۡضَ كَانَتَا رَتۡقًا فَفَتَقۡنٰهُمَا‌ ؕ وَجَعَلۡنَا مِنَ الۡمَآءِ كُلَّ شَىۡءٍ حَىٍّ‌ ؕ اَفَلَا يُؤۡمِنُوۡنَ</div>
            <p class="text-[13.5px] italic text-on-surface-variant border-t border-outline-variant/10 pt-4 leading-relaxed text-justify font-medium">
                "Apakah orang-orang kafir tidak mengetahui bahwa langit dan bumi itu keduanya dahulu adalah suatu yang <strong>padu (satu gumpalan)</strong>, kemudian Kami pisahkan (ledakan) antara keduanya. Dan dari <strong>air</strong> Kami jadikan segala sesuatu yang hidup. Maka mengapakah mereka tiada juga beriman?"
            </p>
        </div>
    </div>
    <!-- A'raf 54 -->
    <div class="bg-white p-8 rounded-[2.5rem] border border-outline-variant/20 shadow-sm relative overflow-hidden flex flex-col justify-between group hover:shadow-md transition-shadow">
        <span class="bg-secondary text-white text-[10px] font-bold px-3 py-1 rounded-full absolute -top-3 right-8 tracking-widest shadow-sm z-10">Q.S. AL-A'RAF: 54</span>
        <span class="material-symbols-outlined absolute -left-6 -bottom-6 text-secondary/5 text-[150px] -rotate-12 pointer-events-none group-hover:scale-110 transition-transform">ar_on_you</span>
        <div class="relative z-10">
            <div class="text-right font-quran text-2xl leading-[2.5] mb-6 text-on-surface mt-2" dir="rtl">اِنَّ رَبَّكُمُ اللّٰهُ الَّذِىۡ خَلَقَ السَّمٰوٰتِ وَالۡاَرۡضَ فِىۡ سِتَّةِ اَيَّامٍ ثُمَّ اسۡتَوٰى عَلَى الۡعَرۡشِ ...</div>
            <p class="text-[13.5px] italic text-on-surface-variant border-t border-outline-variant/10 pt-4 leading-relaxed text-justify font-medium">
                "Sungguh, Tuhanmu (adalah) Allah yang menciptakan langit dan bumi dalam waktu <strong>enam masa</strong>, lalu Dia bersemayam di atas 'Arsy. Dia ciptakan matahari, bulan, & bintang tunduk pada perintah-Nya..."
            </p>
        </div>
    </div>
</div>

<!-- 2. Tafsir Sains -->
<h3 class="font-headline text-2xl font-bold text-secondary mt-12 mb-6 flex items-center bg-secondary/5 w-max pr-6 py-2 rounded-r-full"><span class="material-symbols-outlined mr-3 bg-secondary text-white w-12 h-12 flex items-center justify-center rounded-full shadow-md">science</span> 2. Pembenaran Teori Sains Modern</h3>
<div class="bg-surface-container-low p-8 rounded-[2.5rem] border border-outline-variant/20 shadow-sm mb-16 relative overflow-hidden">
    <div class="grid md:grid-cols-2 gap-8 relative z-10">
        <!-- Big Bang -->
        <div class="space-y-4 bg-white p-6 rounded-2xl shadow-[0_2px_10px_rgba(0,0,0,0.02)] border border-outline-variant/30">
            <h4 class="font-bold text-lg text-primary flex items-center border-b border-outline-variant/20 pb-3"><span class="material-symbols-outlined mr-2 text-primary">explosion</span> Teori <em>Big Bang</em> (Ledakan Kosmik)</h4>
            <p class="text-[13.5px] text-on-surface-variant leading-relaxed text-justify font-medium">
                Surah al-Anbiya' 30 membedah rahasia bahwa langit & bumi dulunya menyatu jadi satu <em>(Ratqan)</em>, lalu diledakkan pisah <em>(Fataqnahuma)</em>. Ratusan abad berlalu, barulah teori sains fisika gagasan <strong>Big Bang</strong> membenarkannya; mengukuhkan bahwa seluruh alam semesta berasal dari titik massa mampat satu gumpalan miliaran tahun lalu, yang kemudian pecah terhentak melahirkan sistem tata surya raksasa!
            </p>
        </div>
        <!-- Keajaiban Air -->
        <div class="space-y-4 bg-white p-6 rounded-2xl shadow-[0_2px_10px_rgba(0,0,0,0.02)] border border-outline-variant/30">
            <h4 class="font-bold text-lg text-tertiary flex items-center border-b border-outline-variant/20 pb-3"><span class="material-symbols-outlined mr-2 text-tertiary">water_drop</span> Air Membawa Rantai Kehidupan</h4>
            <p class="text-[13.5px] text-on-surface-variant leading-relaxed text-justify font-medium">
                Tubuh kita hanyalah gumpalan cairan! Biologi anatomi era modern membuktikan nyaris <strong>70% anatomi tubuh manusia diisi sepenuhnya oleh air</strong> (darah, limpa, ginjal). Tanpa asupan gandum makanan, kita mampu <em>survive</em> 60 hari. Tapi tanpa setetes air minum? Manusia dipastikan mati gagal organ dalam kurun drastis 3-10 hari. Ya, sumber pemicu awal makhluk biologi diurai dari air lautan bumi purba.
            </p>
        </div>
    </div>
</div>

<!-- 3. Tajwid -->
<h3 class="font-headline text-2xl font-bold text-error mt-12 mb-6 flex items-center bg-error/5 w-max pr-6 py-2 rounded-r-full"><span class="material-symbols-outlined mr-3 bg-error text-white w-12 h-12 flex items-center justify-center rounded-full shadow-md">campaign</span> 3. Tajwid: Hukum Bacaan Gunnah</h3>
<div class="flex flex-col md:flex-row gap-6 mb-16">
    <div class="bg-error/10 p-8 rounded-3xl flex-1 border-l-[8px] border-error relative overflow-hidden shadow-sm flex flex-col justify-center">
        <span class="material-symbols-outlined absolute -bottom-6 -right-6 text-[150px] text-error/10">graphic_eq</span>
        <div class="relative z-10">
            <h4 class="font-bold text-[22px] mb-3 text-error">Apa itu Aturan Gunnah?</h4>
            <p class="text-[14.5px] text-error-on mb-5 leading-relaxed font-medium">
                Secara praktis, <strong>Gunnah</strong> berarti mendengung atau mendemung hidung. Ciri deteksinya sangat kasat mata: Setiap Anda menemui huruf <strong>Nun (نّ)</strong> ataupun <strong>Mim (مّ)</strong> yang kepalanya dimahkotai tanda <strong>TASYDID / SYIDDAH ( ّ )</strong>, maka bacaan wajib direm, ditahan, dan didengungkan rapat.
            </p>
            <div class="text-[13px] font-bold bg-white text-error px-4 py-2.5 rounded-xl border border-error/20 shadow-sm inline-flex items-center gap-2">
                <span class="material-symbols-outlined text-[18px]">timer</span> Durasi Dengungan Wajib Berhenti: 2 Harakat!
            </div>
        </div>
    </div>
    
    <div class="bg-white p-6 rounded-3xl flex-1 border border-outline-variant/30 shadow-sm">
        <h4 class="font-bold text-sm text-on-surface-variant uppercase tracking-wider mb-4 border-b border-outline-variant/20 pb-2">Praktik Tabel Pengamatan M/N Bertasydid:</h4>
        <div class="space-y-4">
            <div class="flex items-center justify-between p-3.5 bg-surface-container rounded-2xl border border-outline-variant/20 hover:border-primary transition-colors cursor-default">
                <span class="font-quran text-2xl text-primary" dir="rtl">اِنَّ رَبَّهُمۡ</span>
                <span class="text-[11px] font-bold text-white bg-error px-3 py-1 rounded-lg shadow-sm border border-error/20">Karena NUN Bertasydid</span>
            </div>
            <div class="flex items-center justify-between p-3.5 bg-surface-container rounded-2xl border border-outline-variant/20 hover:border-primary transition-colors cursor-default">
                <span class="font-quran text-2xl text-primary" dir="rtl">وَاَمَّا مَنۡ خَفَّتۡ</span>
                <span class="text-[11px] font-bold text-white bg-error px-3 py-1 rounded-lg shadow-sm border border-error/20">Karena MIM Bertasydid</span>
            </div>
            <div class="flex items-center justify-between p-3.5 bg-surface-container rounded-2xl border border-outline-variant/20 hover:border-primary transition-colors cursor-default">
                <span class="font-quran text-2xl text-primary" dir="rtl">فَاُمُّهٗ هَاوِيَةٌ</span>
                <span class="text-[11px] font-bold text-white bg-error px-3 py-1 rounded-lg shadow-sm border border-error/20">Karena MIM Bertasydid</span>
            </div>
        </div>
    </div>
</div>

<div class="text-center p-8 bg-surface-container-high rounded-[2rem] border border-outline-variant/20 italic text-on-surface-variant flex flex-col items-center gap-4 relative overflow-hidden group">
    <div class="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-tertiary to-transparent opacity-50 group-hover:animate-pulse"></div>
    <span class="material-symbols-outlined text-5xl text-tertiary animate-bounce">hourglass_bottom</span>
    <p class="font-medium text-[14px]">Menunggu transmisi sisa dokumen halaman. Lanjutan pemaparan tafsir pergerakan alam akan segera digabungkan!</p>
</div>
`;

// Format insertion
const formatStr = `"id": "kls7-smtgenap-bab1",
        "kelas": 7,
        "semester": "Genap",
        "bab": "Bab 1",
        "judul": "Alam Semesta Sebagai Tanda Kekuasaan Allah",
        "waktuBumper": "14 Menit Baca",
        "gambar": "images/islamic_calligraphy.png",
        "konten": \`
${bab1Kls7GenapKonten.replace(/`/g, '\\`')}
        \``;

const startPhrase = `"id": "kls7-smtgenap-bab1",`;
const nextPhraseRegex = /"id":\s*"[^"]+",/; 

let startIndex = content.indexOf(startPhrase);
if (startIndex !== -1) {
    let before = content.substring(0, startIndex);
    
    let afterStart = content.substring(startIndex + startPhrase.length);
    let match = afterStart.match(nextPhraseRegex);
    
    if (match) {
        let nextIndex = startIndex + startPhrase.length + match.index;
        let after = content.substring(nextIndex);
        
        content = before + formatStr + '\n    }, {\n        ' + after;
        
        fs.writeFileSync('js/materi.js', content, 'utf8');
        console.log('Success kls7 genap bab 1 string replacement');
    } else {
        let endBracketIndex = content.lastIndexOf(']');
        if (endBracketIndex !== -1) {
            let after = content.substring(endBracketIndex);
            content = before + formatStr + '\n    }\n' + after;
            fs.writeFileSync('js/materi.js', content, 'utf8');
            console.log('Success kls7 genap bab 1 (last item fallback) string replacement');
        }
    }
} else {
    // Apend logic
    let endBracketIndex = content.lastIndexOf(']');
    if (endBracketIndex !== -1) {
        let before = content.substring(0, endBracketIndex).trim();
        if (before.endsWith(',')) before = before.slice(0, -1);
        else if (before.endsWith('}')) before += ', {';
        
        content = before + '\n    ' + formatStr + '\n    }\n]';
        fs.writeFileSync('js/materi.js', content, 'utf8');
        console.log("Success appended kls7 genap bab 1");
    }
}

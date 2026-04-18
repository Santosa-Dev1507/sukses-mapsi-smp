const fs = require('fs');

let content = fs.readFileSync('js/materi.js', 'utf8');

const babKonten = `
<p class="text-on-surface-variant leading-relaxed text-lg mb-8">
    Bab ini menjelaskan tentang fondasi krusial dalam memahami hukum Islam: apa itu mazhab, mengapa kita butuh guru untuk memandu ibadah, siapa saja para Imam raksasa di baliknya, dan inspirasi akhlak mereka.
</p>

<!-- 1. Pengertian Mazhab & Pentingnya Bermazhab -->
<div class="grid md:grid-cols-2 gap-8 mb-16">
    <div class="bg-surface-container-low p-8 rounded-[2rem] border border-outline-variant/20 shadow-sm relative overflow-hidden">
        <span class="material-symbols-outlined absolute -top-8 -right-8 text-9xl text-primary/5">account_tree</span>
        <h3 class="font-headline text-2xl font-bold text-primary mb-6"><span class="bg-primary text-white w-8 h-8 inline-flex items-center justify-center rounded-lg text-sm mr-2">1</span> Apa itu Mazhab?</h3>
        <p class="text-on-surface-variant leading-relaxed text-sm mb-4">
            Secara <strong>bahasa</strong> artinya jalan, pendapat, atau aliran. 
        </p>
        <p class="text-on-surface-variant leading-relaxed text-sm mb-4">
            Secara <strong>istilah</strong>, mazhab adalah fatwa / pendapat ulama besar (Imam Mujtahid) tentang hukum yang bersumber dari Al-Qur'an dan Hadis. Mazhab juga merujuk pada "metode" penggalian hukum itu sendiri.
        </p>
    </div>

    <div class="bg-surface-container-low p-8 rounded-[2rem] border border-outline-variant/20 shadow-sm relative overflow-hidden">
        <span class="material-symbols-outlined absolute -top-8 -right-8 text-9xl text-secondary/5">verified_user</span>
        <h3 class="font-headline text-2xl font-bold text-secondary mb-6"><span class="bg-secondary text-white w-8 h-8 inline-flex items-center justify-center rounded-lg text-sm mr-2">2</span> Kenapa Penting?</h3>
        <ul class="space-y-3 text-sm text-on-surface-variant">
            <li class="flex items-start"><span class="material-symbols-outlined text-secondary mr-2 shrink-0 text-lg">check_circle</span> <strong>Memandu Awam:</strong> Bagi orang biasa yang belum mampu menggali sendiri hukum dari teks asli bahasa Arab.</li>
            <li class="flex items-start"><span class="material-symbols-outlined text-secondary mr-2 shrink-0 text-lg">check_circle</span> <strong>Standar Tuntunan:</strong> Beribadah jadi terarah karena mencontoh metode ulama mumpuni.</li>
            <li class="flex items-start"><span class="material-symbols-outlined text-secondary mr-2 shrink-0 text-lg">check_circle</span> <strong>Pagar Keamanan:</strong> Menjaga umat dari tafsir agama yang salah atau menyimpang.</li>
        </ul>
    </div>
</div>

<!-- 3. Empat Imam Raksasa Penjaga Tatanan -->
<h3 class="font-headline text-2xl font-bold text-primary mt-8 mb-6 text-center">4 Imam Besar Mazhab Fikih</h3>
<p class="text-center text-on-surface-variant mb-10 text-sm max-w-2xl mx-auto">Meski terdapat ratusan mujtahid cemerlang di awal sejarah Islam, hanya madzhab dari empat imam inilah yang dokumentasinya paling lengkap, teruji, dan dianut mayoritas umat Islam dunia hingga detik ini.</p>

<div class="grid sm:grid-cols-2 gap-6 mb-16">
    <!-- Hanafi -->
    <div class="p-6 bg-white border border-outline-variant/20 rounded-[2rem] shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:-translate-y-1 transition-transform group">
        <div class="flex items-center gap-4 mb-4">
            <div class="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-xl group-hover:scale-110 transition-transform">H</div>
            <div>
                <h4 class="font-bold text-lg text-on-surface">Imam Hanafi</h4>
                <p class="text-xs text-on-surface-variant">Abu Hanifah (Nu'man bin Tsabit)</p>
            </div>
        </div>
        <p class="text-sm text-on-surface-variant border-l-2 border-primary/20 pl-3">Mazhab paling tua. Cenderung kritis memanfaatkan <strong>Logika (Ra'yu)</strong> dan Istihsan. Dianut secara sporadis di Asia Selatan, Turki, dan Mesir.</p>
    </div>

    <!-- Maliki -->
    <div class="p-6 bg-white border border-outline-variant/20 rounded-[2rem] shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:-translate-y-1 transition-transform group">
        <div class="flex items-center gap-4 mb-4">
            <div class="w-14 h-14 bg-secondary/10 rounded-full flex items-center justify-center text-secondary font-bold text-xl group-hover:scale-110 transition-transform">M</div>
            <div>
                <h4 class="font-bold text-lg text-on-surface">Imam Maliki</h4>
                <p class="text-xs text-on-surface-variant">Malik bin Anas (Ksatria Madinah)</p>
            </div>
        </div>
        <p class="text-sm text-on-surface-variant border-l-2 border-secondary/20 pl-3">Sangat keras memegang pijakan Hadis dan juga memasukkan <strong>'Amalan Penduduk Madinah'</strong> sebagai dasar penetapan hukum. Banyak dianut di Afrika Utara (Maroko).</p>
    </div>
    
    <!-- Syafi'i -->
    <div class="p-6 bg-white border border-outline-variant/20 rounded-[2rem] shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:-translate-y-1 transition-transform group">
        <div class="flex items-center gap-4 mb-4">
            <div class="w-14 h-14 bg-tertiary/10 rounded-full flex items-center justify-center text-tertiary font-bold text-xl group-hover:scale-110 transition-transform">S</div>
            <div>
                <h4 class="font-bold text-lg text-on-surface">Imam Syafi'i</h4>
                <p class="text-xs text-on-surface-variant">Muhammad bin Idris asy-Syafi'i</p>
            </div>
        </div>
        <p class="text-sm text-on-surface-variant border-l-2 border-tertiary/20 pl-3">Sang Pendamai (titik temu rasionalis & tekstualis). Sangat memperhatikan hadis dipadu rumusan cerdas via Analogi/Qiyas. <strong>Mayoritas mutlak di Indonesia</strong>, Malaysia, Suriah.</p>
    </div>

    <!-- Hambali -->
    <div class="p-6 bg-white border border-outline-variant/20 rounded-[2rem] shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:-translate-y-1 transition-transform group">
        <div class="flex items-center gap-4 mb-4">
            <div class="w-14 h-14 bg-error/10 rounded-full flex items-center justify-center text-error font-bold text-xl group-hover:scale-110 transition-transform">Hb</div>
            <div>
                <h4 class="font-bold text-lg text-on-surface">Imam Hambali</h4>
                <p class="text-xs text-on-surface-variant">Ahmad bin Hambal</p>
            </div>
        </div>
        <p class="text-sm text-on-surface-variant border-l-2 border-error/20 pl-3">Seorang pakar kumpulan hadis jutaan. Sangat tekstual & kaku menghindari ruang logika pribadi jika ada indikasi dalil nabi. Dominan dan menjadi rujukan eksklusif kerajaan di Arab Saudi.</p>
    </div>
</div>

<!-- 4. Level Umat Bermazhab -->
<h3 class="font-headline text-2xl font-bold text-primary mt-12 mb-8 items-center"><span class="bg-primary/10 text-primary p-2 rounded-xl mr-3"><span class="material-symbols-outlined">stairs</span></span> 3 Klasifikasi "Penumpang" Mazhab</h3>
<div class="flex flex-col gap-4 mb-16">
    <div class="bg-gradient-to-r from-surface-container-high to-transparent p-6 rounded-2xl flex items-center gap-6">
        <div class="w-16 h-16 bg-surface-container-lowest rounded-full shrink-0 flex items-center justify-center shadow-sm font-bold text-outline">1</div>
        <div>
            <h4 class="font-bold text-lg">Taklid (Rakyat Jelata Hukum)</h4>
            <p class="text-sm text-on-surface-variant">Murni menirukan dan ikut pendapat guru tanpa paham detail dalil. <strong>Hukumnya: Boleh / Wajib bagi orang awam.</strong></p>
        </div>
    </div>
    
    <div class="bg-gradient-to-r from-secondary/10 to-transparent p-6 rounded-2xl flex items-center gap-6">
        <div class="w-16 h-16 bg-white rounded-full shrink-0 flex items-center justify-center shadow-sm font-bold text-secondary">2</div>
        <div>
            <h4 class="font-bold text-lg">Ittiba' (Murid Kritis)</h4>
            <p class="text-sm text-on-surface-variant">Mengikuti fatwa Imam sambil <strong>mengetahui sandaran dalil / cara penetapannya</strong>. Ini zona untuk santri / da'i / pelajar hukum syariah.</p>
        </div>
    </div>
    
    <div class="bg-gradient-to-r from-primary/10 to-transparent p-6 rounded-2xl flex items-center gap-6">
        <div class="w-16 h-16 bg-white rounded-full shrink-0 flex items-center justify-center shadow-sm font-bold text-primary">3</div>
        <div>
            <h4 class="font-bold text-lg">Ijtihad (Level Mujtahid Master)</h4>
            <p class="text-sm text-on-surface-variant">Menggali & menetapkan hukum <strong>langsung membongkar teks Al-Qur'an dan Hadis</strong>. Hanya boleh dieksekusi oleh jenius ulama yang memenuhi syarat kualifikasi rumit. Saat ber-ijtihad, <em>"Bila sukses / benar dapat 2 pahala. Bila salah (karena unsur tidak sengaja), ia tak di nerakakan, bahkan tetap mendapat 1 pahala murni proses."</em> (Kisah Muadz bin Jabal di Yaman).</p>
        </div>
    </div>
</div>

<!-- 5. Keteladanan -->
<div class="bg-primary/5 p-10 rounded-[3rem] border border-primary/20 text-center relative overflow-hidden">
    <div class="absolute inset-0 bg-[linear-gradient(to_right,#006b4710_1px,transparent_1px),linear-gradient(to_bottom,#006b4710_1px,transparent_1px)] bg-[size:14px_24px]"></div>
    
    <h4 class="text-2xl font-headline font-bold mb-8 relative z-10 text-primary">Teladan Akhlak dari Sang Imam</h4>
    <div class="flex flex-wrap justify-center gap-4 relative z-10">
        <span class="px-6 py-3 bg-white rounded-full shadow-sm text-sm font-bold text-primary flex items-center gap-2"><span class="material-symbols-outlined">favorite</span> Ikhlas</span>
        <span class="px-6 py-3 bg-white rounded-full shadow-sm text-sm font-bold text-secondary flex items-center gap-2"><span class="material-symbols-outlined">fitness_center</span> Tekun & Super Keras</span>
        <span class="px-6 py-3 bg-white rounded-full shadow-sm text-sm font-bold text-tertiary flex items-center gap-2"><span class="material-symbols-outlined">psychology</span> Cerdas / Analitis Tajam</span>
        <span class="px-6 py-3 bg-white rounded-full shadow-sm text-sm font-bold text-on-surface flex items-center gap-2"><span class="material-symbols-outlined">auto_awesome</span> Zuhud (Anti Tamak Duniawi)</span>
        <span class="px-6 py-3 bg-white rounded-full shadow-sm text-sm font-bold text-error flex items-center gap-2"><span class="material-symbols-outlined">wb_twilight</span> Gemar Ibadah Malam</span>
    </div>
</div>
`;

// String Replacement
const babStr = `"id": "kls9-smtgenap-bab4",
        "kelas": 9,
        "semester": "Genap",
        "bab": "Bab 4",
        "judul": "Mengaplikasikan Mazhab dalam Fikih",
        "waktuBumper": "14 Menit Baca",
        "gambar": "images/islamic_calligraphy.png",
        "konten": \`
${babKonten.replace(/`/g, '\\`')}
        \``;

const startPhrase = `"id": "kls9-smtgenap-bab4",`;
const nextPhraseRegex = /"id":\s*"[^"]+",/; 

let startIndex = content.indexOf(startPhrase);
if (startIndex !== -1) {
    let before = content.substring(0, startIndex);
    
    let afterStart = content.substring(startIndex + startPhrase.length);
    let match = afterStart.match(nextPhraseRegex);
    
    if (match) {
        let nextIndex = startIndex + startPhrase.length + match.index;
        let after = content.substring(nextIndex);
        
        let newContent = before + babStr + '\n    }, {\n        ' + after;
        
        fs.writeFileSync('js/materi.js', newContent, 'utf8');
        console.log('Success kls9 genap bab 4 string replacement full');
    } else {
        let endBracketIndex = content.lastIndexOf(']');
        if (endBracketIndex !== -1) {
            let after = content.substring(endBracketIndex);
            let newContent = before + babStr + '\n    }\n' + after;
            fs.writeFileSync('js/materi.js', newContent, 'utf8');
            console.log('Success kls9 genap bab 4 (last item fallback) string replacement full');
        } else {
            console.error('Failed to find closing array bracket');
        }
    }
} else {
    console.error('Failed to find start index');
}

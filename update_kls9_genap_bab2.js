const fs = require('fs');

let content = fs.readFileSync('js/materi.js', 'utf8');

const babKonten = `
<p class="text-on-surface-variant leading-relaxed text-lg mb-8">
    Bab ini menjelaskan tentang pentingnya mengimani Qada dan Qadar Allah Swt. dalam kehidupan sehari-hari, yang bisa membantu kita meraih ketenangan jiwa. Mengimani Qada dan Qadar adalah <strong>rukun iman yang keenam</strong>.
</p>

<!-- 1. Pengertian dan Dalil -->
<h3 class="font-headline text-2xl font-bold text-primary mt-12 mb-6 flex items-center">
    <span class="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mr-4 shrink-0">
        <span class="material-symbols-outlined text-[24px]">psychology_alt</span>
    </span>
    1. Pengertian Qada dan Qadar
</h3>

<div class="grid md:grid-cols-2 gap-6 mb-8">
    <!-- Qada -->
    <div class="bg-surface-container-low p-8 rounded-[2.5rem] border border-outline-variant/20 hover:shadow-lg transition-shadow">
        <h4 class="font-bold text-2xl mb-4 text-on-surface flex items-center">Qada <span class="bg-primary/10 text-primary text-xs ml-3 px-3 py-1 rounded-full">Rencana</span></h4>
        <p class="text-on-surface-variant leading-relaxed text-sm">
            Secara bahasa artinya keputusan, ketetapan, atau kehendak. Secara istilah, Qada adalah ketetapan Allah Swt. yang sudah ada sejak zaman <em>azali</em> (sebelum segala sesuatu diciptakan). 
        </p>
    </div>
    <!-- Qadar -->
    <div class="bg-surface-container-low p-8 rounded-[2.5rem] border border-outline-variant/20 hover:shadow-lg transition-shadow">
        <h4 class="font-bold text-2xl mb-4 text-on-surface flex items-center">Qadar <span class="bg-secondary/10 text-secondary text-xs ml-3 px-3 py-1 rounded-full">Perwujudan</span></h4>
        <p class="text-on-surface-variant leading-relaxed text-sm">
            Secara bahasa artinya kepastian atau ukuran. Secara istilah, Qadar adalah perwujudan nyata dari ketetapan Allah (Qada) yang terjadi pada makhluk sesuai ukuran yang ditetapkan.
        </p>
    </div>
</div>

<p class="text-on-surface-variant italic bg-primary/5 p-4 rounded-xl text-center mb-10">
    Gabungan Qada dan Qadar sering kita sebut sebagai <strong>Takdir</strong>. Allah Swt. telah menetapkan takdir setiap manusia, termasuk jenis kelamin, rezeki, dan ajalnya.
</p>

<!-- Hadits Qada dan Qadar -->
<div class="bg-surface-container-highest border-l-4 border-outline-variant rounded-r-3xl p-8 mb-16 relative overflow-hidden">
    <span class="material-symbols-outlined absolute -top-4 -right-4 text-9xl text-surface-container-low/50 rotate-12">history_edu</span>
    <h4 class="font-bold text-lg mb-4">Hadis Pencatatan Takdir di Rahim</h4>
    <div class="text-right font-quran text-2xl leading-[2.5] mb-6 text-on-surface" dir="rtl">
        وُكِّلَ بِالرَّحِمِ مَلَكٌ ... فَإِذَا أَرَادَ اللَّهُ أَنْ يَقْضِيَ خَلْقَهَا قَالَ أَيْ رَبِّ أَذَكَرٌ أَوْ أُنْثَى أَشَقِيٌّ أَمْ سَعِيدٌ فَمَا الرِّزْقُ وَالْأَجَلُ فَيَكْتُبُ فِي بَطْنِ أُمِّهِ
    </div>
    <div class="font-body italic text-on-surface-variant text-sm pt-4 border-t border-outline-variant/20">
        "...Kemudian apabila Allah menghendaki untuk menyempurnakan kejadiannya, maka malaikat bertanya: “Wahai Rabb, apakah (akan dijadikan) laki-laki atau perempuan? Apakah celaka atau bahagia? Bagaimana dengan rezeki dan ajalnya?”. Maka dicatatlah dalam perut ibunya." <br><strong>(H.R. Bukhari dan Muslim dari Anas)</strong>
    </div>
</div>


<!-- 2. Hubungan Ikhtiar, Doa, dan Tawakal -->
<h3 class="font-headline text-2xl font-bold text-primary mt-12 mb-8 text-center text-primary">Tiga Pilar Menghadapi Takdir</h3>
<p class="text-on-surface-variant text-center mb-10 max-w-2xl mx-auto">
    Mengimani takdir <strong>bukan berarti pasrah</strong> tanpa usaha. Justru kita wajib berusaha semaksimal mungkin, berdoa, dan menyerahkan hasil akhirnya kepada Allah.
</p>

<div class="space-y-6 mb-16">
    <!-- Ikhtiar -->
    <div class="flex flex-col md:flex-row gap-6 items-start bg-white p-6 rounded-[2rem] border border-outline-variant/10 shadow-sm">
        <div class="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center shrink-0">
            <span class="material-symbols-outlined text-primary text-3xl">directions_run</span>
        </div>
        <div>
            <h4 class="font-bold text-xl mb-2 text-on-surface">1. Ikhtiar (Terus Berusaha)</h4>
            <p class="text-sm text-on-surface-variant mb-4 leading-relaxed">Berusaha maksimal untuk mencapai tujuan. Allah tidak akan mengubah nasib suatu kaum sebelum mereka berusaha mengubah nasibnya sendiri.</p>
            <div class="bg-surface-container p-4 rounded-xl">
                <div class="text-right font-quran text-lg mb-2" dir="rtl">فَا ذَا قُضِيَتِ الصَّلُوةُ فَا نَتَشِرُوا فِي الْأَرْضِ وَا بْتَغُوْا مِنْ فَضْلِ اللَّهِ...</div>
                <div class="text-xs italic text-on-surface-variant">"Apabila telah ditunaikan shalat, maka bertebaranlah kamu di muka bumi; dan carilah karunia Allah..." <strong>(Q.S. Al-Jumu'ah: 10)</strong></div>
            </div>
        </div>
    </div>

    <!-- Doa -->
    <div class="flex flex-col md:flex-row gap-6 items-start bg-white p-6 rounded-[2rem] border border-outline-variant/10 shadow-sm">
        <div class="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center shrink-0">
            <span class="material-symbols-outlined text-secondary text-3xl">volunteer_activism</span>
        </div>
        <div>
            <h4 class="font-bold text-xl mb-2 text-on-surface">2. Doa (Memohon Pertolongan)</h4>
            <p class="text-sm text-on-surface-variant leading-relaxed">Memohon kepada Allah setelah memeras keringat berikhtiar, karena segala hasil akhir murni merupakan kehendak Allah. Doa memberikan kita optimisme.</p>
        </div>
    </div>

    <!-- Tawakal -->
    <div class="flex flex-col md:flex-row gap-6 items-start bg-white p-6 rounded-[2rem] border border-outline-variant/10 shadow-sm">
        <div class="w-16 h-16 bg-tertiary/10 rounded-2xl flex items-center justify-center shrink-0">
            <span class="material-symbols-outlined text-tertiary text-3xl">self_improvement</span>
        </div>
        <div>
            <h4 class="font-bold text-xl mb-2 text-on-surface">3. Tawakal (Berserah Diri)</h4>
            <p class="text-sm text-on-surface-variant leading-relaxed">Menyerahkan segala urusan dan hasil kepada Allah Swt. <strong>setelah</strong> berikhtiar dan berdoa. Tawakal adalah puncaknya orang beriman yang akan mendatangkan ketenangan jiwa paripurna.</p>
        </div>
    </div>
</div>


<!-- 3. Sikap Menghadapi Takdir & Hikmah -->
<h3 class="font-headline text-2xl font-bold text-primary mt-12 mb-6 text-center">Sikap Terbaik & Hikmah Takdir</h3>
<div class="grid md:grid-cols-2 gap-8 mb-12">
    <div class="bg-surface-container-low p-8 rounded-[2rem] text-center border-t-8 border-primary">
        <span class="material-symbols-outlined text-5xl text-primary mb-4">thumb_up</span>
        <h4 class="font-bold text-xl mb-2">Bersyukur</h4>
        <p class="text-sm text-on-surface-variant">Mengucapkan terima kasih saat mendapat nikmat. Ingat, bersyukur justru akan membuat nikmat itu bertambah.</p>
    </div>
    <div class="bg-surface-container-low p-8 rounded-[2rem] text-center border-t-8 border-secondary">
        <span class="material-symbols-outlined text-5xl text-secondary mb-4">shield</span>
        <h4 class="font-bold text-xl mb-2">Bersabar</h4>
        <p class="text-sm text-on-surface-variant">Lapang dada saat menerima musibah atau takdir buruk. Sabar adalah perisai paling kokoh dari listerik kekecewaan.</p>
    </div>
</div>

<div class="bg-gradient-to-br from-primary to-primary-container p-10 rounded-[3rem] text-white shadow-xl flex flex-col md:flex-row items-center gap-8">
    <div class="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center shrink-0">
        <span class="material-symbols-outlined text-5xl text-white">diamond</span>
    </div>
    <div>
        <h4 class="text-2xl font-headline font-bold mb-4">6 Hikmah Iman pada Qada & Qadar</h4>
        <ul class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm opacity-90">
            <li class="flex items-center"><span class="material-symbols-outlined text-white mr-2 text-lg">check</span> Meningkatkan keimanan & takwa</li>
            <li class="flex items-center"><span class="material-symbols-outlined text-white mr-2 text-lg">check</span> Menenangkan jiwa (bebas stres)</li>
            <li class="flex items-center"><span class="material-symbols-outlined text-white mr-2 text-lg">check</span> Motivasi untuk ikhtiar & doa</li>
            <li class="flex items-center"><span class="material-symbols-outlined text-white mr-2 text-lg">check</span> Melatih syukur dan sabar</li>
            <li class="flex items-center"><span class="material-symbols-outlined text-white mr-2 text-lg">check</span> Mencegah sombong atau bunuh diri</li>
            <li class="flex items-center"><span class="material-symbols-outlined text-white mr-2 text-lg">check</span> Menumbuhkan optimisme hidup</li>
        </ul>
    </div>
</div>
`;

// String Replacement
const babStr = `"id": "kls9-smtgenap-bab2",
        "kelas": 9,
        "semester": "Genap",
        "bab": "Bab 2",
        "judul": "Meraih Ketenangan Jiwa dengan Meyakini Qada dan Qadar",
        "waktuBumper": "14 Menit Baca",
        "gambar": "images/islamic_calligraphy.png",
        "konten": \`
${babKonten.replace(/`/g, '\\`')}
        \``;

const startPhrase = `"id": "kls9-smtgenap-bab2",`;
const nextPhraseRegex = /"id":\s*"[^"]+",/; // finds the very next ID after startPhrase!

let startIndex = content.indexOf(startPhrase);
if (startIndex !== -1) {
    let before = content.substring(0, startIndex);
    
    // Find the next id declaration after startPhrase
    let afterStart = content.substring(startIndex + startPhrase.length);
    let match = afterStart.match(nextPhraseRegex);
    
    if (match) {
        let nextIndex = startIndex + startPhrase.length + match.index;
        let after = content.substring(nextIndex);
        
        let newContent = before + babStr + '\n    }, {\n        ' + after;
        
        fs.writeFileSync('js/materi.js', newContent, 'utf8');
        console.log('Success kls9 genap bab 2 string replacement full');
    } else {
        // If there's no next index, it means it's the very last element of the array!
        // We handle this case: The end of the file would be `    }\n];`
        let endBracketIndex = content.lastIndexOf(']');
        if (endBracketIndex !== -1) {
            let after = content.substring(endBracketIndex);
            let newContent = before + babStr + '\n    }\n' + after;
            fs.writeFileSync('js/materi.js', newContent, 'utf8');
            console.log('Success kls9 genap bab 2 (last item fallback) string replacement full');
        } else {
            console.error('Failed to find closing array bracket');
        }
    }
} else {
    console.error('Failed to find start index');
}

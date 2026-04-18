const fs = require('fs');

let content = fs.readFileSync('js/materi.js', 'utf8');

const bab2Konten = `
<p class="text-on-surface-variant leading-relaxed text-lg mb-8">
    Mengimani Hari Akhir adalah rukun iman yang kelima. Hari Akhir disebut juga hari kiamat, di mana tidak ada hari lagi setelahnya. Mempercayai Hari Akhir membuat kita lebih berhati-hati dan mawas diri dalam menjalani hidup.
</p>

<!-- Dalil Section -->
<div class="bg-primary/5 border-l-4 border-primary rounded-r-3xl p-8 mb-12 relative overflow-hidden">
    <span class="material-symbols-outlined absolute -top-4 -right-4 text-9xl text-primary/5 rotate-12">format_quote</span>
    <h3 class="font-headline text-xl font-bold text-on-surface mb-6">Pengertian dan Dalil</h3>
    <div class="text-right font-quran text-4xl leading-[2.5] mb-6 text-on-surface" dir="rtl">
        وَأَنَّ السَّاعَةَ اٰتِيَةٌ لَّا رَيْبَ فِيْهَا وَأَنَّ اللّٰهَ يَبْعَثُ مَنْ فِي الْقُبُوْرِ
    </div>
    <div class="font-body italic text-on-surface-variant text-lg">
        "Sesungguhnya kiamat itu pasti datang, tidak ada keraguan padanya dan sesungguhnya Allah akan membangkitkan siapa pun yang di dalam kubur." 
    </div>
    <div class="mt-4 text-base font-bold text-primary">— Q.S. al-Hajj [22]: 7</div>
</div>

<h3 class="font-headline text-2xl font-bold text-primary mt-12 mb-8 text-center">Jenis Kiamat</h3>
<div class="grid md:grid-cols-2 gap-8 mb-12">
    <!-- Kiamat Sugra -->
    <div class="bg-surface-container-low rounded-[2.5rem] p-8 border border-outline-variant/20 hover:shadow-xl transition-all">
        <div class="w-16 h-16 bg-secondary-container rounded-2xl flex items-center justify-center mb-6">
            <span class="material-symbols-outlined text-on-secondary-container text-3xl">heart_broken</span>
        </div>
        <h4 class="font-bold text-2xl mb-4">Kiamat Sugra (Kecil)</h4>
        <p class="text-on-surface-variant mb-6">Berakhirnya kehidupan sebagian makhluk di dunia. Contohnya adalah <strong>Kematian</strong> dan <strong>Bencana Alam</strong>.</p>
    </div>
    
    <!-- Kiamat Kubra -->
    <div class="bg-surface-container-low rounded-[2.5rem] p-8 border border-outline-variant/20 hover:shadow-xl transition-all">
        <div class="w-16 h-16 bg-error-container rounded-2xl flex items-center justify-center mb-6">
            <span class="material-symbols-outlined text-on-error-container text-3xl">volcano</span>
        </div>
        <h4 class="font-bold text-2xl mb-4">Kiamat Kubra (Besar)</h4>
        <p class="text-on-surface-variant mb-6">Kehancuran alam semesta secara total dan seluruh isinya. Hanya Allah yang tahu kapan terjadinya.</p>
    </div>
</div>

<!-- Mawas Diri Section -->
<h3 class="font-headline text-2xl font-bold text-primary mt-20 mb-8">Hikmah: Mawas Diri</h3>
<div class="bg-surface-container-highest rounded-[3rem] p-8 lg:p-12 mb-12">
    <p class="text-on-surface-variant text-lg leading-relaxed mb-10">
        Mengimani Hari Akhir mendorong kita untuk selalu <strong>Mawas Diri</strong>: waspada, hati-hati, dan menjaga diri dari hal-hal negatif dengan selalu bertakwa kepada Allah Swt.
    </p>
</div>
`;

// String Replacement
// We want to replace everything for Bab 2
const bab2Str = `"id": "kls9-smtganjil-bab2",
        "kelas": 9,
        "semester": "Ganjil",
        "bab": "Bab 2",
        "judul": "Meyakini Hari Akhir dengan Mawas Diri",
        "waktuBumper": "10 Menit Baca",
        "gambar": "images/islamic_calligraphy.png",
        "konten": \`
${bab2Konten.replace(/`/g, '\\`')}
        \``;

const startPhrase = `"id": "kls9-smtganjil-bab2",`;
const nextPhrase = `"id": "kls9-smtganjil-bab3",`;

let startIndex = content.indexOf(startPhrase);
let nextIndex = content.indexOf(nextPhrase);

if (startIndex !== -1 && nextIndex !== -1) {
    let before = content.substring(0, startIndex);
    // Find the ending bracket of bab 2
    let after = content.substring(nextIndex);
    
    // In JS array, there's a   }, {   between them.
    // So we just inject the new object properties.
    let newContent = before + bab2Str + '\n    }, {\n        ' + after;
    
    fs.writeFileSync('js/materi.js', newContent, 'utf8');
    console.log('Success bab 2 string replacement');
} else {
    console.log('Failed to match indexes');
}

const fs = require('fs');

let content = fs.readFileSync('js/materi.js', 'utf8');

const babKonten = `
<p class="text-on-surface-variant leading-relaxed text-lg mb-8">
    Bab ini mengajarkan tentang peran penting manusia sebagai khalifah Allah di bumi dan bagaimana menjadi penebar kasih sayang sesuai tuntunan mulia dari Al-Qur'an dan Hadis.
</p>

<!-- 1. Hukum Bacaan Mad -->
<div class="bg-surface-container-low p-8 rounded-[2rem] mb-12 border border-outline-variant/20 shadow-sm relative overflow-hidden">
    <span class="material-symbols-outlined absolute -bottom-6 -right-6 text-[150px] text-primary/5">menu_book</span>
    <h3 class="font-headline text-2xl font-bold text-primary mb-6 relative z-10">1. Memahami Hukum Bacaan Mad</h3>
    <p class="text-on-surface-variant leading-relaxed text-md mb-6 relative z-10">
        Saat membaca Al-Qur'an, kita diwajibkan untuk membacanya secara tartil sesuai ilmu tajwid. Salah satu pilar tajwid adalah <strong>Mad</strong>, yang secara bahasa berarti memanjangkan bunyi.
    </p>

    <div class="grid md:grid-cols-2 gap-6 relative z-10">
        <!-- Mad Tabi'i -->
        <div class="bg-white p-6 rounded-2xl border border-outline-variant/10 shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
            <h4 class="font-bold text-lg mb-2 text-primary flex items-center">
                <span class="material-symbols-outlined mr-2">looks_one</span> Mad Tabi'i (Asli)
            </h4>
            <p class="text-sm text-on-surface-variant leading-relaxed">
                Dipanjangkan <strong>dua harakat</strong>. Terjadi jika: <br>
                • Alif sukun jatuh setelah fathah <br>
                • Wau sukun jatuh setelah dammah <br>
                • Ya sukun jatuh setelah kasrah.
            </p>
        </div>
        <!-- Mad Far'i -->
        <div class="bg-white p-6 rounded-2xl border border-outline-variant/10 shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
            <h4 class="font-bold text-lg mb-2 text-secondary flex items-center">
                <span class="material-symbols-outlined mr-2">looks_two</span> Mad Far'i (Cabang)
            </h4>
            <p class="text-sm text-on-surface-variant leading-relaxed">
                Adalah Mad Tabi'i yang mendapat tambahan bacaan (seperti bertemu hamzah atau sukun). Contohnya: <em>Mad Wajib Muttasil, Mad Jaiz Munfasil, Mad 'Aridlissukun</em>, dll.
            </p>
        </div>
    </div>
</div>

<!-- 2. Kandungan Q.S. Al-Baqarah: 30 -->
<h3 class="font-headline text-2xl font-bold text-primary mt-16 mb-6">2. Menjadi Khalifah di Bumi (Q.S. Al-Baqarah: 30)</h3>
<p class="text-on-surface-variant leading-relaxed text-md mb-6">
    Allah menciptakan manusia sebagai <strong>Khalifatullah fil 'ard</strong> (pengganti atau wakil di bumi) yang diberi akal dan pikiran untuk mengemban amanah mengelola bumi dan isinya.
</p>

<!-- Dalil Al-Baqarah 30 -->
<div class="bg-primary/5 border-l-4 border-primary rounded-r-3xl p-8 mb-8 relative overflow-hidden">
    <div class="text-right font-quran text-3xl leading-[2.5] mb-6 text-on-surface" dir="rtl">
        وَإِذْ قَالَ رَبُّكَ لِلْمَلَئِكَةِ إِنِّي جَاعِلٌ فِي الْأَرْضِ خَلِيفَةً قَالُوا أَتَجْعَلُ فِيهَا مَنْ يُفْسِدُ فِيهَا وَيَسْفِكُ الدِّمَاءَ وَنَحْنُ نُسَبِّحُ بِحَمْدِكَ وَنُقَدِّسُ لَكَ قَالَ إِنِّي أَعْلَمُ مَا لَا تَعْلَمُوْنَ
    </div>
    <div class="font-body italic text-on-surface-variant text-md pt-4 border-t border-outline-variant/20">
        "Ingatlah ketika Tuhanmu berfirman kepada para Malaikat: 'Sesungguhnya Aku hendak menjadikan seorang khalifah di muka bumi'. Mereka berkata: 'Mengapa Engkau hendak menjadikan (khalifah) di bumi itu orang yang akan membuat kerusakan padanya dan menumpahkan darah, padahal kami senantiasa bertasbih dengan memuji Engkau dan mensucikan Engkau?' Tuhan berfirman: 'Sesungguhnya Aku mengetahui apa yang tidak kamu ketahui'." <strong>(Q.S. Al-Baqarah: 30)</strong>
    </div>
</div>

<div class="space-y-4 mb-14 pl-2 border-l-2 border-outline-variant/30 text-on-surface-variant">
    <p class="flex items-start"><span class="material-symbols-outlined text-primary mr-3 shrink-0">check_circle</span> <strong>Memanfaatkan Alam:</strong> Secara bijak untuk kebutuhan hidup ("Maka bertebaranlah kamu di muka bumi dan carilah karunia Allah...").</p>
    <p class="flex items-start"><span class="material-symbols-outlined text-primary mr-3 shrink-0">eco</span> <strong>Menjaga Lingkungan:</strong> Jangan merusak bumi setelah diciptakannya keseimbangan oleh Allah.</p>
</div>


<!-- 3. Keseimbangan Dunia Akhirat: Q.S. Al-Qasas: 77 -->
<h3 class="font-headline text-2xl font-bold text-primary mt-12 mb-6">3. Keseimbangan Hidup (Q.S. Al-Qaşaş: 77)</h3>

<div class="bg-surface-container-high border border-outline-variant/30 rounded-[2rem] p-8 mb-8 relative overflow-hidden">
    <div class="text-right font-quran text-3xl leading-[2.5] mb-6 text-on-surface" dir="rtl">
        وَا بْتَغِ فِيمَا آتَاكَ اللهُ الدَّارَ الْآخِرَةَ وَلَا تَنْسَ نَصِيبَكَ مِنَ الدُّنْيَا وَأَحْسِنْ كَمَا أَحْسَنَ اللهُ إِلَيْكَ وَلَا تَبْغِ الْفَسَادَ فِي الْأَرْضِ إِنَّ اللَّهَ لَا يُحِبُّ الْمُفْسِدِينَ
    </div>
    <div class="font-body italic text-on-surface-variant text-md pt-4 border-t border-outline-variant/20">
        "Dan carilah pada apa yang telah dianugerahkan Allah kepadamu (kebahagiaan) negeri akhirat, dan janganlah kamu melupakan bahagianmu dari (kenikmatan) duniawi dan berbuat baiklah (kepada orang lain) sebagaimana Allah telah berbuat baik kepadamu, dan janganlah kamu berbuat kerusakan di (muka) bumi. Sesungguhnya Allah tidak menyukai orang-orang yang berbuat kerusakan." <strong>(Q.S. Al-Qaşaş: 77)</strong>
    </div>
</div>

<p class="text-sm font-bold text-on-surface mb-4">Pesan Hikmah dari Ayat di atas:</p>
<ul class="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-on-surface-variant mb-14">
    <li class="bg-white p-4 rounded-xl shadow-sm">Hidup harus seimbang antara mengejar bekal akhirat dan tidak melupakan fitrah dunia.</li>
    <li class="bg-white p-4 rounded-xl shadow-sm">Hindari sifat rakus dan <em>flexing</em> (pamer harta) dunia hingga melalaikan akhirat.</li>
    <li class="bg-white p-4 rounded-xl shadow-sm">Tebarkanlah kasih sayang (Rahmatan lil 'Alamin) sebagai balas budi atas nikmat Allah.</li>
    <li class="bg-white p-4 rounded-xl shadow-sm">Jangan menjadi <em>mufsidin</em> (orang yang merusak alam dan menghancurkan kedamaian).</li>
</ul>


<!-- 4. Hadits Penebar Kasih Sayang -->
<h3 class="font-headline text-2xl font-bold text-primary mt-12 mb-6 text-center">4. Hadis Tentang Kasih Sayang</h3>
<div class="grid md:grid-cols-2 gap-6 mb-16">
    <div class="bg-secondary-container/20 p-6 rounded-3xl border border-secondary/10">
        <div class="text-right font-quran text-2xl mb-4 leading-loose" dir="rtl">الرَّاحِمُوْنَ يَرْحَمُهُمُ الرَّحْمَنُ ارْحَمُوا مَنْ فِي الْأَرْضِ يَرْحَمْكُمْ مَنْ فِي السَّمَاءِ</div>
        <p class="text-xs text-on-surface-variant italic border-t border-outline-variant/20 pt-3">"Orang-orang yang penyayang itu akan disayang oleh Dzat yang Maha penyayang. Hendaklah kalian sayangi orang yang berada di bumi, maka kalian akan disayangi oleh Dzat (Malaikat dan rahmat Allah) yang di atas langit."</p>
    </div>
    <div class="bg-secondary-container/20 p-6 rounded-3xl border border-secondary/10">
        <div class="text-right font-quran text-2xl mb-4 leading-loose" dir="rtl">مَنْ لَا يَرْحَمُ النَّاسَ لَا يَرْحَمْهُ اللَّهُ عَزَّ وَجَلَ</div>
        <p class="text-xs text-on-surface-variant italic border-t border-outline-variant/20 pt-3">"Barangsiapa yang tidak menyayangi manusia yang lain, maka ia tidak akan disayangi Allah Azza wa Jalla." <br><strong>(H.R. Bukhari/Muslim dari Jabir)</strong></p>
    </div>
</div>


<!-- 5. Peran Pelajar Muslim -->
<div class="bg-gradient-to-br from-primary to-primary-container p-10 rounded-[3rem] text-white shadow-xl">
    <h4 class="text-2xl font-headline font-bold mb-8 text-center text-white">Bagaimana Penerapan Khalifah Sehari-hari?</h4>
    <div class="grid sm:grid-cols-3 gap-6">
        <div class="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 hover:-translate-y-1 transition-transform">
            <span class="material-symbols-outlined text-4xl mb-4 text-white">compost</span>
            <div class="font-bold mb-2">Peduli Lingkungan</div>
            <p class="text-sm opacity-90 leading-relaxed">Merawat tanaman, mengurangi plastik, dan membuang sampah pada tempatnya untuk menjaga bumi titipan Allah.</p>
        </div>
        <div class="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 hover:-translate-y-1 transition-transform">
            <span class="material-symbols-outlined text-4xl mb-4 text-white">diversity_1</span>
            <div class="font-bold mb-2">Menebar Kasih Sayang</div>
            <p class="text-sm opacity-90 leading-relaxed">Menghindari perundungan (bullying), saling membantu, belajar bersama kelompok, dan memuliakan guru serta teman.</p>
        </div>
         <div class="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 hover:-translate-y-1 transition-transform">
            <span class="material-symbols-outlined text-4xl mb-4 text-white">app_registration</span>
            <div class="font-bold mb-2">Memperbanyak Amal</div>
            <p class="text-sm opacity-90 leading-relaxed">Setiap aktivitas (sekolah/bermain) jika diniatkan karena Allah akan dinilai ibadah. Lakukan segala hal dengan ikhlas!</p>
        </div>
    </div>
</div>
`;

// String Replacement
const babStr = `"id": "kls9-smtgenap-bab1",
        "kelas": 9,
        "semester": "Genap",
        "bab": "Bab 1",
        "judul": "Al-Qur'an Menginspirasi: Menjadi Khalifatullah Fil 'Ard Penebar Kasih Sayang",
        "waktuBumper": "13 Menit Baca",
        "gambar": "images/islamic_calligraphy.png",
        "konten": \`
${babKonten.replace(/`/g, '\\`')}
        \``;

const startPhrase = `"id": "kls9-smtgenap-bab1",`;
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
        console.log('Success kls9 genap bab 1 string replacement full');
    } else {
        console.error('Failed to find the next item index');
    }
} else {
    console.error('Failed to find start index');
}

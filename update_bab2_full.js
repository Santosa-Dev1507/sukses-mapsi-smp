const fs = require('fs');

let content = fs.readFileSync('js/materi.js', 'utf8');

const bab2Konten = `
<p class="text-on-surface-variant leading-relaxed text-lg mb-8">
    Mengimani Hari Akhir adalah rukun iman yang kelima. Hari Akhir disebut juga hari kiamat, di mana tidak ada hari lagi setelahnya. Mempercayai Hari Akhir membuat kita lebih berhati-hati dan mawas diri dalam menjalani hidup serta mendorong seseorang untuk beramal saleh karena mengharapkan kenikmatan di akhirat kelak.
</p>

<!-- Pengertian dan Dalil -->
<h3 class="font-headline text-2xl font-bold text-primary mt-12 mb-6 flex items-center">
    <span class="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mr-4 shrink-0">
        <span class="material-symbols-outlined text-[24px]">menu_book</span>
    </span>
    Pengertian dan Dalil Iman Kepada Hari Akhir
</h3>
<p class="text-on-surface-variant leading-relaxed text-md mb-6">
    Iman kepada Hari Akhir berarti meyakini bahwa hari akhir pasti akan terjadi atas kehendak Allah Swt.
</p>

<!-- Dalil Al-Hajj 7 -->
<div class="bg-primary/5 border-l-4 border-primary rounded-r-3xl p-8 mb-12 relative overflow-hidden">
    <div class="text-right font-quran text-4xl leading-[2.5] mb-6 text-on-surface" dir="rtl">
        وَأَنَّ السَّاعَةَ أَتِيَةٌ لَّا رَيْبَ فِيهَا وَأَنَّ اللَّهَ يَبْعَثُ مَنْ فِي الْقُبُوْرِ
    </div>
    <div class="font-body italic text-on-surface-variant text-md pt-4 border-t border-outline-variant/20">
        "Sesungguhnya kiamat itu pasti datang, tidak ada keraguan padanya dan sesungguhnya Allah akan membangkitkan siapa pun yang di dalam kubur." <br/><strong>(Q.S. al-Hajj [22]: 7)</strong>
    </div>
</div>

<!-- Jenis Kiamat -->
<h3 class="font-headline text-2xl font-bold text-primary mt-16 mb-8 text-center">Dua Jenis Kiamat</h3>
<div class="space-y-8 mb-16">
    
    <!-- Kiamat Sugra -->
    <div class="bg-white p-8 rounded-[2rem] shadow-sm border border-outline-variant/10 hover:shadow-xl transition-all">
        <div class="flex items-center gap-4 mb-6">
            <div class="w-14 h-14 bg-secondary-container rounded-2xl flex items-center justify-center shrink-0">
                <span class="material-symbols-outlined text-on-secondary-container text-3xl">hourglass_bottom</span>
            </div>
            <h4 class="font-bold text-xl">1. Kiamat Sugra (Kiamat Kecil)</h4>
        </div>
        <p class="text-on-surface-variant leading-relaxed text-md mb-6">
            Adalah berakhirnya kehidupan sebagian makhluk di dunia ini. Contoh kiamat sugra meliputi <strong>kematian</strong> setiap makhluk bernyawa dan <strong>bencana alam</strong> (banjir, gempa bumi, gunung meletus).
        </p>
        
        <div class="grid md:grid-cols-2 gap-4">
            <div class="bg-surface-container-low p-6 rounded-2xl">
                <h5 class="font-bold mb-2">Tentang Kematian</h5>
                <div class="text-right font-quran text-xl mb-3 text-on-surface" dir="rtl">أَيْنَ مَا تَكُونُوا يُدْرِكُكُمُ الْمَوْتُ...</div>
                <div class="text-sm italic text-on-surface-variant mb-2">"Dimana pun kamu berada, kematian akan mendapatkan kamu, kendatipun kamu berada di dalam benteng yang tinggi dan kukuh." <strong>(Q.S. an-Nisa': 78)</strong></div>
                <div class="text-xs text-on-surface-variant mt-2 border-t border-outline-variant/20 pt-2">Amal terputus kecuali: sedekah jariyah, ilmu bermanfaat, anak saleh yang mendoakan.</div>
            </div>
            <div class="bg-surface-container-low p-6 rounded-2xl">
                <h5 class="font-bold mb-2">Tentang Musibah</h5>
                <div class="text-right font-quran text-xl mb-3 text-on-surface" dir="rtl">...وَبَشِّرِ الصَّبِرِينَ الَّذِينَ إِذَا أَصَابَتْهُمْ مُصِيبَةٌ قَالُوا إِنَّا لِلَّهِ وَإِنَّا إِلَيْهِ رَاجِعُوْنَ</div>
                <div class="text-sm italic text-on-surface-variant">Sikap terbaik saat tertimpa musibah adalah bersabar dan mengucapkan kalimat istirja' (Inna lillahi wa inna ilaihi raji'un). <strong>(Q.S. Al-Baqarah: 155-156)</strong></div>
            </div>
        </div>
    </div>

    <!-- Kiamat Kubra -->
    <div class="bg-white p-8 rounded-[2rem] shadow-sm border border-error/20 hover:shadow-xl transition-all">
        <div class="flex items-center gap-4 mb-6">
            <div class="w-14 h-14 bg-error-container rounded-2xl flex items-center justify-center shrink-0">
                <span class="material-symbols-outlined text-on-error-container text-3xl">public_off</span>
            </div>
            <h4 class="font-bold text-xl text-error">2. Kiamat Kubra (Kiamat Besar)</h4>
        </div>
        <p class="text-on-surface-variant leading-relaxed text-md mb-6">
            Adalah kehancuran alam semesta dan seluruh isinya. Kiamat kubra belum terjadi dan hanya Allah Swt. yang tahu kapan terjadinya. Digambarkan dengan ditiupnya sangkakala, langit terpecah, gunung dihamburkan, dan bumi berguncang hebat.
        </p>
        <div class="bg-error/5 p-6 rounded-2xl mb-6">
            <div class="text-right font-quran text-2xl mb-4 text-on-surface" dir="rtl">إِنَّ مَا تُوْعَدُونَ لَأْتٌ وَمَا أَنْتُمْ بِمُعْجِزِينَ</div>
            <div class="text-sm italic text-on-surface-variant">"Sesungguhnya apa pun yang dijanjikan kepadamu pasti datang dan kamu tidak mampu menolaknya." <strong>(Q.S. al-An'am [6]: 134)</strong></div>
        </div>
        <div class="flex items-start gap-4">
            <span class="material-symbols-outlined text-error">warning</span>
            <div class="text-sm text-on-surface-variant">
                <strong>Tanda-tanda Kiamat Kubra:</strong> Keluarnya Dajal, turunnya Imam Mahdi dan Nabi Isa a.s., munculnya Yakjuj dan Makjuj, awan hitam (dukhan), terbitnya matahari dari barat, dan munculnya binatang melata.
            </div>
        </div>
    </div>
</div>

<!-- Rangkaian Peristiwa Di Akhirat -->
<h3 class="font-headline text-2xl font-bold text-primary mt-16 mb-8 text-center">Rangkaian Peristiwa di Akhirat</h3>
<div class="relative overflow-hidden p-10 bg-surface-container-highest rounded-[3rem] mb-16">
    <div class="space-y-6">
        
        <div class="flex gap-6">
            <div class="flex flex-col items-center">
                <div class="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl z-10 shadow-lg">1</div>
                <div class="w-1 bg-primary/20 h-full -my-2"></div>
            </div>
            <div class="pb-8">
                <h4 class="font-bold text-xl mb-2">Yaumul Barzakh (Alam Kubur)</h4>
                <p class="text-sm text-on-surface-variant">Batas antara alam dunia dan akhirat tempat menunggu hari kebangkitan. Manusia ditanyai malaikat Munkar dan Nakir. Perbanyak amal agar terhindar dari siksa kubur.</p>
            </div>
        </div>

        <div class="flex gap-6">
            <div class="flex flex-col items-center">
                <div class="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl z-10 shadow-lg">2</div>
                <div class="w-1 bg-primary/20 h-full -my-2"></div>
            </div>
            <div class="pb-8">
                <h4 class="font-bold text-xl mb-2">Yaumul Ba'ats</h4>
                <p class="text-sm text-on-surface-variant">Hari dibangkitkannya semua manusia dari alam kubur menuju Padang Mahsyar setelah tiupan sangkakala kedua oleh Malaikat Israfil.</p>
            </div>
        </div>

        <div class="flex gap-6">
            <div class="flex flex-col items-center">
                <div class="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl z-10 shadow-lg">3</div>
                <div class="w-1 bg-primary/20 h-full -my-2"></div>
            </div>
            <div class="pb-8">
                <h4 class="font-bold text-xl mb-2">Yaumul Mahsyar (Yaumul Hasyr)</h4>
                <p class="text-sm text-on-surface-variant">Hari dikumpulkannya seluruh manusia di Padang Mahsyar untuk menerima catatan amal perbuatan. Setiap orang sibuk dengan dirinya sendiri.</p>
            </div>
        </div>

        <div class="flex gap-6">
            <div class="flex flex-col items-center">
                <div class="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl z-10 shadow-lg">4</div>
                <div class="w-1 bg-primary/20 h-full -my-2"></div>
            </div>
            <div class="pb-8">
                <h4 class="font-bold text-xl mb-2">Yaumul Hisab</h4>
                <p class="text-sm text-on-surface-variant">Hari perhitungan amal perbuatan manusia. Anggota tubuh akan bersaksi. Amal yang pertama dihisab adalah ibadah salat.</p>
            </div>
        </div>

        <div class="flex gap-6">
            <div class="flex flex-col items-center">
                <div class="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl z-10 shadow-lg">5</div>
                <div class="w-1 bg-primary/20 h-full -my-2"></div>
            </div>
            <div class="pb-8">
                <h4 class="font-bold text-xl mb-2">Yaumul Mizan</h4>
                <p class="text-sm text-on-surface-variant mb-4">Hari ditimbangnya amal perbuatan manusia. Sekecil apapun perbuatan akan ditimbang secara presisi dan maha adil.</p>
                <div class="p-4 bg-white/50 rounded-xl italic text-xs text-on-surface-variant border border-outline-variant/10">
                    "Dan Kami akan memasang timbangan yang tepat pada hari Kiamat, maka tidak seorang pun dirugikan walau sedikit; sekalipun hanya seberat biji sawi..." <strong>(Q.S. al-Anbiya' [21]: 47)</strong>
                </div>
            </div>
        </div>

        <div class="flex gap-6">
            <div class="flex flex-col items-center">
                <div class="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl z-10 shadow-lg">6</div>
                <div class="w-1 bg-primary/20 h-full -my-2"></div>
            </div>
            <div class="pb-8">
                <h4 class="font-bold text-xl mb-2">Yaumul Jaza</h4>
                <p class="text-sm text-on-surface-variant">Hari pembalasan. Jika timbangan amal baik lebih berat, surga balasannya. Jika lebih ringan, neraka adalah tempatnya.</p>
            </div>
        </div>

        <div class="flex gap-6">
            <div class="flex flex-col items-center">
                <div class="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl z-10 shadow-lg">7</div>
            </div>
            <div>
                <h4 class="font-bold text-xl mb-2">Surga dan Neraka</h4>
                <p class="text-sm text-on-surface-variant">Tempat terakhir penuh kenikmatan abadi (Surga) bagi yang beramal saleh, dan tempat penyiksaan amat pedih (Neraka) bagi yang membangkang.</p>
            </div>
        </div>

    </div>
</div>

<!-- Hikmah Mawas Diri -->
<h3 class="font-headline text-2xl font-bold text-primary mt-12 mb-6">Mawas Diri Sebagai Hikmah</h3>
<div class="bg-gradient-to-br from-secondary to-secondary-container p-10 rounded-[3rem] text-on-secondary-container shadow-lg flex flex-col md:flex-row items-center gap-8 mb-12">
    <div class="w-24 h-24 bg-white/30 rounded-full flex items-center justify-center shrink-0">
        <span class="material-symbols-outlined text-5xl">psychology_alt</span>
    </div>
    <div>
        <h4 class="text-2xl font-headline font-bold mb-3">Sikap Hati-hati</h4>
        <p class="text-lg opacity-90 leading-relaxed mb-4">
            Mengimani Hari Akhir membuat kita selalu mawas diri (hati-hati dan waspada) terhadap hal negatif, karena sadar bahwa setiap perbuatan di dunia adalah bekal untuk pengadilan Allah di akhirat kelak.
        </p>
        <p class="text-md opacity-90">
            Gunakan kekuatan masa muda, fisik yang sehat, dan waktu luang untuk memperbanyak ibadah wajib dan sunah, menuntut ilmu, dan berbuat kebaikan kepada sesama secara adil dan bertanggung jawab!
        </p>
    </div>
</div>
`;

// String Replacement
const bab2Str = `"id": "kls9-smtganjil-bab2",
        "kelas": 9,
        "semester": "Ganjil",
        "bab": "Bab 2",
        "judul": "Meyakini Hari Akhir dengan Mawas Diri",
        "waktuBumper": "14 Menit Baca",
        "gambar": "images/islamic_calligraphy.png",
        "konten": \`
${bab2Konten.replace(/`/g, '\\`')}
        \``;

const startPhrase = `"id": "kls9-smtganjil-bab2",`;
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
        
        let newContent = before + bab2Str + '\n    }, {\n        ' + after;
        
        fs.writeFileSync('js/materi.js', newContent, 'utf8');
        console.log('Success bab 2 string replacement full');
    } else {
        console.error('Failed to find the next item index');
    }
} else {
    console.error('Failed to find start index');
}

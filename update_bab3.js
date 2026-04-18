const fs = require('fs');

let content = fs.readFileSync('js/materi.js', 'utf8');

const bab3Konten = `
<p class="text-on-surface-variant leading-relaxed text-lg mb-8">
    Kesempurnaan iman seseorang terlihat dari akhlaknya. Akhlak yang baik sangat penting dalam kehidupan sehari-hari dan menentukan kemajuan suatu bangsa. Dalam pergaulan dan komunikasi, penting untuk menerapkan etika yang baik agar terhindar dari kesalahpahaman, pertengkaran, atau hal negatif lainnya. Orang yang berakhlak mulia disukai oleh teman, masyarakat, Allah Swt., dan Rasul-Nya.
</p>

<!-- Hadith: Innallaha jamil -->
<div class="bg-primary/5 rounded-[2rem] p-8 mb-12 border border-outline-variant/10 shadow-sm text-center">
    <div class="font-quran text-4xl leading-[2.5] mb-6 text-on-surface" dir="rtl">
        إِنَّ اللَّهَ جَمِيلٌ وَيُحِبُّ الْجَمَالَ
    </div>
    <div class="font-body italic text-on-surface-variant text-lg">
        "Sesungguhnya Allah Maha indah dan mencintai keindahan" <br/> <strong class="text-primary text-sm">(HR. Muslim dari Ibnu Mas'ûd)</strong>
    </div>
</div>

<h3 class="font-headline text-2xl font-bold text-primary mt-12 mb-6">Etika Pergaulan dalam Ajaran Islam</h3>
<p class="text-on-surface-variant leading-relaxed text-lg mb-8">
    Manusia adalah makhluk sosial yang perlu saling mengenal dan bergaul.
</p>

<!-- Q.S. Al-Hujurat 13 -->
<div class="bg-surface-container-low border border-outline-variant/30 rounded-[2rem] p-8 mb-12 relative overflow-hidden">
    <span class="material-symbols-outlined absolute -top-4 -right-4 text-9xl text-primary/5 rotate-12">groups</span>
    <h4 class="font-bold text-xl text-on-surface mb-6">Q.S. Al-Hujurat [49] ayat 13</h4>
    <div class="text-right font-quran text-4xl leading-[2.5] mb-6 text-on-surface" dir="rtl">
        يَأَيُّهَا النَّاسُ إِنَّا خَلَقْنَكُمْ مِنْ ذَكَرٍ وَأُنثَى وَجَعَلْنَكُمْ شُعُوبًا وَقَبَابِلَ لِتَعَارَفُوا إِنَّ أَكْرَمَكُمْ عِنْدَ اللَّهِ أَتْقَكُمْ إِنَّ اللَّهَ عَلِيمٌ خَبِيرٌ
    </div>
    <div class="font-body italic text-on-surface-variant text-lg pt-4 border-t border-outline-variant/20">
        "Hai manusia, sesungguhnya Kami menciptakan kamu dari seorang laki-laki dan seorang perempuan dan menjadikan kamu berbangsa-bangsa dan bersuku-suku supaya kamu saling kenal-mengenal. Sesungguhnya orang yang paling mulia di antara kamu di sisi Allah ialah orang yang paling takwa di antara kamu. Sesungguhnya Allah Maha Mengetahui lagi Maha Mengenal."
    </div>
</div>

<h3 class="font-headline text-2xl font-bold text-primary mt-12 mb-8 text-center">Etika Berdasarkan Usia & Kondisi</h3>
<div class="space-y-8 mb-16">
    
    <!-- 1. Orang yang Lebih Tua -->
    <div class="bg-white p-8 rounded-[2rem] shadow-sm border border-outline-variant/10 hover:shadow-xl transition-all">
        <div class="flex items-center gap-4 mb-6">
            <div class="w-14 h-14 bg-secondary-container rounded-2xl flex items-center justify-center shrink-0">
                <span class="material-symbols-outlined text-on-secondary-container text-3xl">elderly</span>
            </div>
            <h4 class="font-bold text-xl">1. Orang yang Lebih Tua</h4>
        </div>
        <p class="text-on-surface-variant leading-relaxed text-md mb-6">
            Kita harus bersikap sopan santun, menghormati, dan menyayangi orang tua, kakek, nenek, paman, bibi, kakak, dan guru. Berbicara dengan baik dan menghindari menyakiti hati mereka. Rida Allah Swt. bergantung pada rida orang tua.
        </p>
        <div class="bg-primary/5 p-6 rounded-2xl">
            <div class="text-right font-quran text-2xl mb-4" dir="rtl">مَنْ لَمْ يَرْحَمْ صَغِيْرَنَا وَيَعْرِفْ حَقَّ كَبِيرَنَا فَلَيْسَ مِنَّا</div>
            <p class="text-sm italic text-on-surface-variant">"Siapa yang tidak menyayangi orang yang kecil di antara kami, dan tidak mengerti hak orang yang lebih besar di antara kami, maka ia bukan dari golongan kami." (H.R. Abu Daud)</p>
        </div>
    </div>

    <!-- 2. Teman Sebaya -->
    <div class="bg-white p-8 rounded-[2rem] shadow-sm border border-outline-variant/10 hover:shadow-xl transition-all">
        <div class="flex items-center gap-4 mb-6">
            <div class="w-14 h-14 bg-secondary-container rounded-2xl flex items-center justify-center shrink-0">
                <span class="material-symbols-outlined text-on-secondary-container text-3xl">handshake</span>
            </div>
            <h4 class="font-bold text-xl">2. Teman Sebaya</h4>
        </div>
        <p class="text-on-surface-variant leading-relaxed text-md">
            Teman sebaya adalah tempat kita mencurahkan isi hati. Kita harus menghormati dan menghargai mereka. Beberapa etika dengan teman sebaya antara lain mengucapkan salam, saling menasihati dalam kebaikan, saling mendoakan, dan menjauhi pertengkaran atau perundungan (bullying).
        </p>
    </div>

    <!-- 3. Yang Lebih Muda -->
    <div class="bg-white p-8 rounded-[2rem] shadow-sm border border-outline-variant/10 hover:shadow-xl transition-all">
        <div class="flex items-center gap-4 mb-6">
            <div class="w-14 h-14 bg-secondary-container rounded-2xl flex items-center justify-center shrink-0">
                <span class="material-symbols-outlined text-on-secondary-container text-3xl">child_care</span>
            </div>
            <h4 class="font-bold text-xl">3. Yang Lebih Muda</h4>
        </div>
        <p class="text-on-surface-variant leading-relaxed text-md">
            Islam menganjurkan bersikap santun kepada yang lebih muda. Tidak boleh sombong, justru harus membantu dengan penuh kasih sayang. Termasuk kepada mereka yang keadaan ekonomi atau pengetahuannya di bawah kita (seperti anak yatim/fakir miskin).
        </p>
    </div>

    <!-- 4. Lawan Jenis -->
    <div class="bg-white p-8 rounded-[2rem] shadow-sm border border-outline-variant/10 hover:shadow-xl transition-all">
        <div class="flex items-center gap-4 mb-6">
            <div class="w-14 h-14 bg-secondary-container rounded-2xl flex items-center justify-center shrink-0">
                <span class="material-symbols-outlined text-on-secondary-container text-3xl">wc</span>
            </div>
            <h4 class="font-bold text-xl">4. Lawan Jenis</h4>
        </div>
        <p class="text-on-surface-variant leading-relaxed text-md mb-6">
            Islam membolehkan bergaul dengan lawan jenis dengan rambu-rambu: <strong>menghindari khalwat (berduaan di tempat sepi)</strong>, <strong>menutup aurat (Q.S. Al-Ahzab: 59)</strong>, <strong>menjaga pandangan</strong>, dan membatasi intensitas komunikasi.
        </p>
        <div class="bg-error/5 p-6 rounded-2xl border-l-4 border-error/50">
            <div class="text-right font-quran text-2xl mb-4 text-on-surface" dir="rtl">لَا يَخْلُوَنَّ رَجُلٌ بِامْرَأَةٍ إِلَّا وَمَعَهَا ذُو مَحْرَمٍ</div>
            <p class="text-sm italic text-on-surface-variant">"Janganlah seorang laki-laki itu berkhalwat (menyendiri) dengan seorang wanita, kecuali ada mahram yang menyertai wanita tersebut." (H.R. Bukhari Muslim)</p>
        </div>
    </div>

</div>

<h3 class="font-headline text-2xl font-bold text-primary mt-16 mb-8 text-center">Etika Komunikasi Islami</h3>
<div class="grid md:grid-cols-2 gap-8 mb-16">
    <!-- Validasi Berita -->
    <div class="bg-surface-container-low p-6 rounded-[2rem]">
        <h4 class="font-bold text-lg mb-3 flex items-center"><span class="material-symbols-outlined mr-2 text-primary">fact_check</span> Berkata Benar & Teliti</h4>
        <p class="text-sm text-on-surface-variant mb-4">Menjauhi perkataan dusta (hoaks) dan selalu meneliti informasi (Tabayyun).</p>
        <div class="p-4 bg-white rounded-xl text-xs text-on-surface italic">
            "... dan jauhilah perkataan-perkataan dusta" <br/><strong>(Q.S. Al-Hajj: 30)</strong>
        </div>
        <div class="p-4 bg-white rounded-xl text-xs text-on-surface italic mt-3">
            "... telitilah kebenarannya agar kamu tidak mencelakakan suatu kaum..." <br/><strong>(Q.S. Al-Hujurat: 6)</strong>
        </div>
    </div>

    <!-- Bahasa Santun -->
    <div class="bg-surface-container-low p-6 rounded-[2rem]">
        <h4 class="font-bold text-lg mb-3 flex items-center"><span class="material-symbols-outlined mr-2 text-primary">record_voice_over</span> Bahasa Santun</h4>
        <p class="text-sm text-on-surface-variant mb-4">Menggunakan kata-kata yang baik sebagai cara menghormati orang lain ( Qaulan Ma'rufan / Layyinan ).</p>
        <div class="p-4 bg-white rounded-xl text-xs text-on-surface italic">
            "... serta ucapkanlah kata-kata yang baik kepada manusia..." <br/><strong>(Q.S. Al-Baqarah: 83)</strong>
        </div>
        <div class="p-4 bg-white rounded-xl text-xs text-on-surface italic mt-3">
            "... Barang siapa yang beriman kepada Allah dan Hari Akhir maka hendaklah ia berkata yang baik atau ia diam." <br/><strong>(H.R. Bukhari & Muslim)</strong>
        </div>
    </div>
</div>

<h3 class="font-headline text-2xl font-bold text-primary mt-12 mb-6">Kalimah Thayyibah</h3>
<div class="bg-primary/5 border-l-4 border-primary rounded-r-3xl p-8 mb-12 relative overflow-hidden">
    <p class="text-on-surface-variant leading-relaxed text-md mb-6">
        Saat heran, takjub, marah, terkejut, hendaknya merespons dengan kata-kata baik (<em>kalimah thayyibah</em>). Kata ini indah, mendatangkan pahala dan ridha Allah.
    </p>
    <div class="text-right font-quran text-4xl leading-[2.5] mb-6 text-on-surface" dir="rtl">
        أَلَمْ تَرَ كَيْفَ ضَرَبَ اللَّهُ مَثَلًا كَلِمَةً طَيِّبَةً كَشَجَرَةٍ طَيِّبَةٍ أَصْلُهَا ثَابِتٌ وَفَرْعُهَا فِي السَّمَاءِ
    </div>
    <div class="font-body italic text-on-surface-variant text-md">
        "Tidakkah kamu perhatikan bagaimana Allah telah membuat perumpamaan kalimat yang baik seperti pohon yang baik, akarnya teguh dan cabangnya (menjulang) ke langit." <strong class="text-primary">(Q.S. Ibrahim: 24-25)</strong>
    </div>
</div>

<!-- Bertanggung Jawab -->
<h3 class="font-headline text-2xl font-bold text-primary mt-12 mb-6">Tanggung Jawab di Dunia Nyata & Maya</h3>
<div class="bg-surface-container-highest p-8 rounded-[2rem] mb-12">
    <p class="text-on-surface-variant leading-relaxed text-md mb-6">
        Komunikasi, terutama di media sosial, harus dilakukan dengan penuh tanggung jawab atas apa yang diposting.
    </p>
    <div class="p-6 bg-white rounded-2xl italic text-sm">
        "Aku mendengar Rasulullah saw. bersabda: 'Kami semua adalah pemelihara (pemimpin) dan bertanggung jawab atas pemeliharaannya…'" <strong class="not-italic text-primary block mt-2">(H.R. Bukhari)</strong>
    </div>
</div>

<div class="bg-gradient-to-br from-secondary to-secondary-container p-10 rounded-[3rem] text-on-secondary-container shadow-lg flex flex-col md:flex-row items-center gap-8">
    <div class="w-24 h-24 bg-white/30 rounded-full flex items-center justify-center shrink-0">
        <span class="material-symbols-outlined text-5xl">volunteer_activism</span>
    </div>
    <div>
        <h4 class="text-2xl font-headline font-bold mb-3">Hikmah Pergaulan Islami</h4>
        <p class="text-lg opacity-90 leading-relaxed">
            Setiap larangan-Nya akan menghindarkan dari keburukan. Menerapkan etika pergaulan dan komunikasi akan membawa kedamaian dan <strong>kemuliaan akhlak</strong> yang membuahkan pahala melimpah di akhirat.
        </p>
    </div>
</div>
`;

// String Replacement for Bab 3
const bab3Str = `"id": "kls9-smtganjil-bab3",
        "kelas": 9,
        "semester": "Ganjil",
        "bab": "Bab 3",
        "judul": "Indahnya Etika Pergaulan Dan Komunikasi Islami",
        "waktuBumper": "12 Menit Baca",
        "gambar": "images/islamic_calligraphy.png",
        "konten": \`
${bab3Konten.replace(/`/g, '\\`')}
        \``;

const startPhrase = `"id": "kls9-smtganjil-bab3",`;
const nextPhrase = `"id": "kls9-smtganjil-bab4",`;

let startIndex = content.indexOf(startPhrase);
let nextIndex = content.indexOf(nextPhrase);

if (startIndex !== -1 && nextIndex !== -1) {
    let before = content.substring(0, startIndex);
    // Find the ending bracket of bab 3
    let after = content.substring(nextIndex);
    
    // In JS array, there's a   }, {   between them.
    let newContent = before + bab3Str + '\n    }, {\n        ' + after;
    
    fs.writeFileSync('js/materi.js', newContent, 'utf8');
    console.log('Success bab 3 string replacement');
} else {
    console.error('Failed to match indexes in materi.js');
}

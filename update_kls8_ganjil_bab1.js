const fs = require('fs');

let content = fs.readFileSync('js/materi.js', 'utf8');

const babKonten = `
<p class="text-on-surface-variant leading-relaxed text-lg mb-8">
    Bab perdana di Kelas 8 ini mengajak kita menyelami ajaran tauhid ekologis dalam Islam—yakni kesadaran penuh bahwa alam semesta adalah titipan mulia Allah untuk dikelola, bukan untuk dirusak, serta bagaimana perilaku kita menentukan nasib bumi.
</p>

<!-- 1. Tajwid: Ra & Lam Jalalah -->
<h3 class="font-headline text-2xl font-bold text-primary mt-12 mb-6 flex items-center">
    <span class="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mr-4 shrink-0">
        <span class="material-symbols-outlined text-[24px]">spellcheck</span>
    </span>
    1. Tajwid: Hukum Ra (ر) & Lam Jalalah (ل)
</h3>
<p class="text-on-surface-variant mb-6 text-sm">Sebelum merenungi ayat pelestarian alam, pastikan bacaan Al-Qur'an kita bertajwid sempurna, khususnya terkait ketebalan huruf Ra dan Lam pada lafaz Allah.</p>

<div class="grid lg:grid-cols-2 gap-8 mb-16">
    
    <!-- Hukum Ra -->
    <div class="bg-surface-container-low rounded-[2rem] border border-outline-variant/30 overflow-hidden shadow-sm">
        <div class="bg-primary/10 p-4 border-b border-outline-variant/20 flex justify-between items-center">
            <h4 class="font-bold text-lg text-primary">Hukum Huruf Ra (ر)</h4>
            <span class="material-symbols-outlined text-primary/50 text-3xl">r_mobiledata</span>
        </div>
        <div class="p-6 space-y-4">
            <div class="bg-white p-4 rounded-xl shadow-[0_2px_10px_rgba(0,0,0,0.03)] border-l-4 border-error">
                <h5 class="font-bold text-error text-sm mb-1">Tebal (Tafkhim / تَفْخِيمٌ)</h5>
                <p class="text-xs text-on-surface-variant leading-relaxed">Ra berharakat fathah (رَ) atau dammah (رُ). Jika sukun (رْ), perhatikan huruf sebelumnya: wajib tebal jika huruf sebelumnya fathah/dammah, atau didahului hamzah wasal, atau didahului alif/wau mad.</p>
                <div class="mt-2 text-right font-quran text-lg text-error-container-on bg-error/5 p-2 rounded-lg" dir="rtl">رَ - رُ - فَوْقَهُنَّ</div>
            </div>
            
            <div class="bg-white p-4 rounded-xl shadow-[0_2px_10px_rgba(0,0,0,0.03)] border-l-4 border-secondary">
                <h5 class="font-bold text-secondary text-sm mb-1">Tipis (Tarqiq / تَرْقِيقٌ)</h5>
                <p class="text-xs text-on-surface-variant leading-relaxed">Ra berharakat kasrah (رِ). Jika sukun (رْ), wajib dibaca tipis/meringis jika huruf sebelumnya berharakat kasrah (kecuali jika setelahnya ada huruf istila') atau didahului ya' sukun.</p>
                <div class="mt-2 text-right font-quran text-lg text-secondary-container-on bg-secondary/5 p-2 rounded-lg" dir="rtl">رِ - فِرْعَوْنَ - خَيْرٌ</div>
            </div>
        </div>
    </div>

    <!-- Hukum Lam Jalalah -->
    <div class="bg-surface-container-low rounded-[2rem] border border-outline-variant/30 overflow-hidden shadow-sm">
        <div class="bg-tertiary/10 p-4 border-b border-outline-variant/20 flex justify-between items-center">
            <h4 class="font-bold text-tertiary text-lg">Hukum Lam Jalalah (اللَّهُ)</h4>
            <span class="font-quran text-tertiary/50 text-3xl">ل</span>
        </div>
        <div class="p-6 space-y-4">
            <p class="text-xs text-on-surface-variant mb-4">Berlaku mutlak pada kata <strong>Allah (اللَّهُ)</strong> atau <strong>Allahumma (اللَّهُمَّ)</strong> berdasarkan harakat ujung huruf sebelumnya.</p>
            
            <div class="bg-white p-4 rounded-xl shadow-[0_2px_10px_rgba(0,0,0,0.03)] border-l-4 border-error">
                <h5 class="font-bold text-error text-sm mb-1">Tebal (Tafkhim)</h5>
                <p class="text-xs text-on-surface-variant leading-relaxed">Lam dibaca tebal/membulat jika lafaz Allah jatuh setelah huruf yang berharakat <strong>fathah</strong> (A) atau <strong>dammah</strong> (U).</p>
                <div class="mt-2 text-right font-quran text-lg text-error-container-on bg-error/5 p-2 rounded-lg" dir="rtl">قَالَ اللَّهُ - عَبْدُ اللَّهِ</div>
            </div>
            
            <div class="bg-white p-4 rounded-xl shadow-[0_2px_10px_rgba(0,0,0,0.03)] border-l-4 border-secondary">
                <h5 class="font-bold text-secondary text-sm mb-1">Tipis (Tarqiq)</h5>
                <p class="text-xs text-on-surface-variant leading-relaxed">Lam dibaca tipis/meringis ke bawah jika lafaz Allah jatuh persis setelah huruf yang berharakat <strong>kasrah</strong> (I).</p>
                <div class="mt-2 text-right font-quran text-lg text-secondary-container-on bg-secondary/5 p-2 rounded-lg" dir="rtl">بِسْمِ اللَّهِ - بِاللَّهِ</div>
            </div>
        </div>
    </div>

</div>

<!-- 2. Ayat Alam Semesta -->
<h3 class="font-headline text-2xl font-bold text-primary mt-12 mb-8 text-center"><span class="material-symbols-outlined text-3xl align-middle text-primary mr-2">public</span> Manusia & Alam Semesta</h3>

<!-- Q.S. Ar-Rum -->
<div class="bg-gradient-to-br from-error/10 to-transparent border-l-8 border-error rounded-r-3xl p-8 mb-8 relative overflow-hidden">
    <div class="flex justify-between items-start mb-4">
        <h4 class="font-bold text-error text-lg">Peringatan Kerusakan Bumi</h4>
        <span class="bg-error text-white text-xs px-3 py-1 rounded-full font-bold tracking-widest">Q.S. AR-RUM [30]: 41</span>
    </div>
    <div class="text-right font-quran text-3xl leading-[2.5] mb-6 text-on-surface" dir="rtl">
        ظَهَرَ الْفَسَادُ فِي الْبَرِّ وَالْبَحْرِ بِمَا كَسَبَتْ أَيْدِي النَّاسِ لِيُذِيقَهُمْ بَعْضَ الَّذِي عَمِلُوْا لَعَلَّهُمْ يَرْجِعُوْنَ
    </div>
    <div class="font-body italic text-on-surface-variant text-md pt-4 border-t border-error/20">
        "Telah tampak kerusakan di darat dan di laut <strong>disebabkan karena perbuatan tangan manusia</strong>; Allah menghendaki agar mereka merasakan sebagian dari (akibat) perbuatan mereka, agar mereka kembali (ke jalan yang benar)."
    </div>
</div>

<!-- Q.S. Ibrahim -->
<div class="bg-gradient-to-br from-primary/10 to-transparent border-l-8 border-primary rounded-r-3xl p-8 mb-8 relative overflow-hidden">
    <div class="flex justify-between items-start mb-4">
        <h4 class="font-bold text-primary text-lg">Rantai Ekosistem & Karunia</h4>
        <span class="bg-primary text-white text-xs px-3 py-1 rounded-full font-bold tracking-widest">Q.S. IBRAHIM [14]: 32</span>
    </div>
    <div class="text-right font-quran text-2xl leading-[2.5] mb-6 text-on-surface" dir="rtl">
        اللَّهُ الَّذِي خَلَقَ السَّمَوَاتِ وَالْأَرْضَ وَأَنْزَلَ مِنَ السَّمَاءِ مَاءً فَأَخْرَجَ بِهِ مِنَ الثَّمَرَاتِ رِزْقًا لَّكُمْ وَسَخَّرَ لَكُمُ الْفُلْكَ لِتَجْرِيَ فِي الْبَحْرِ بِأَمْرِهِ وَسَخَّرَ لَكُمُ الْأَنْهَرَ وَسَخَّرَ لَكُمُ الشَّمْسَ وَالْقَمَرَ دَائِبَيْنِ وَسَخَّرَ لَكُمُ اللَّيْلَ وَالنَّهَارَ.
    </div>
    <div class="font-body italic text-on-surface-variant text-sm pt-4 border-t border-primary/20">
        "Allah-lah yang telah menciptakan langit dan bumi dan menurunkan air (hujan) dari langit... menundukkan kapal... sungai... matahari dan bulan... malam dan siang bagimu."
    </div>
    <p class="text-xs text-on-surface-variant mt-2 border-t border-white border-dashed pt-2">Ayat ini adalah rekapitulasi anugerah fisika alam semesta (orbit, cuaca, hidrologi) yang di-<em>setting</em> sempurna untuk menyokong hidup manusia.</p>
</div>

<!-- Q.S. Az-Zukhruf & Hadits -->
<div class="grid md:grid-cols-2 gap-6 mb-16">
    <div class="bg-surface-container-high p-6 rounded-[2rem]">
        <h4 class="font-bold text-sm mb-3 text-secondary border-b border-outline-variant/20 pb-2">Doa Syukur Kendaraan (Q.S. Az-Zukhruf: 13)</h4>
        <div class="text-right font-quran text-xl mb-3" dir="rtl">... سُبْحَانَ الَّذِي سَخَّرَ لَنَا هَذَا وَمَا كُنَّا لَهُ مُقْرِنِينَ </div>
        <p class="text-xs text-on-surface-variant italic">Maha Suci (Allah) yang telah menundukkan semua ini bagi kami padahal kami sebelumnya tidak mampu menguasainya.</p>
        <p class="text-[10px] text-on-surface-variant mt-2">Dianjurkan dibaca saat naik motor/mobil/pesawat sebagai adab pada alam tunggangan manusia.</p>
    </div>
    
    <div class="bg-tertiary-container/30 p-6 rounded-[2rem]">
        <h4 class="font-bold text-sm mb-3 text-tertiary border-b border-outline-variant/20 pb-2">Hadis Menanam (H.R. Bukhari 2152)</h4>
        <p class="text-sm font-semibold text-on-surface-variant italic mb-2">
            "Tidaklah seorang Muslim bercocok tanam... melainkan (apa yang) dimakan burung, atau manusia, atau hewan, menjadi sedekah baginya."
        </p>
        <p class="text-[11px] text-on-surface-variant mt-2 pt-2 border-t border-outline-variant/20">Investasi pahala otomatis paling genial: Tanamlah pohon sedini mungkin!</p>
    </div>
</div>

<!-- Akhlak Ekologis -->
<div class="bg-gradient-to-br from-primary to-primary-container p-10 rounded-[3rem] text-white shadow-xl flex flex-col items-center text-center">
    <span class="material-symbols-outlined text-6xl text-white/50 mb-4">nature_people</span>
    <h4 class="text-2xl font-headline font-bold mb-6 text-white">Misi Pelajar Bumi (Akhlak Ekologis)</h4>
    <p class="text-sm opacity-90 mb-8 max-w-2xl mx-auto">Menjaga alam adalah wujud ibadah logis paling riil. Langkah apa yang wajib dieksekusi?</p>

    <div class="flex flex-wrap justify-center gap-3">
        <span class="px-5 py-2.5 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium border border-white/30 flex items-center gap-2"><span class="material-symbols-outlined text-lg">delete</span> Anti Nyampah Sembarangan</span>
        <span class="px-5 py-2.5 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium border border-white/30 flex items-center gap-2"><span class="material-symbols-outlined text-lg">water_drop</span> Hemat Debit Air Bersih</span>
        <span class="px-5 py-2.5 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium border border-white/30 flex items-center gap-2"><span class="material-symbols-outlined text-lg">bolt</span> Matikan Listrik & AC Jika Tdk Perlu</span>
        <span class="px-5 py-2.5 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium border border-white/30 flex items-center gap-2"><span class="material-symbols-outlined text-lg">forest</span> Rutin Merawat Pohon / Tanaman</span>
    </div>
</div>
`;

// String Replacement
const babStr = `"id": "kls8-smtganjil-bab1",
        "kelas": 8,
        "semester": "Ganjil",
        "bab": "Bab 1",
        "judul": "Inspirasi Al-Qur'an: Melestarikan Alam, Menjaga Kehidupan",
        "waktuBumper": "14 Menit Baca",
        "gambar": "images/islamic_calligraphy.png",
        "konten": \`
${babKonten.replace(/`/g, '\\`')}
        \``;

const startPhrase = `"id": "kls8-smtganjil-bab1",`;
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
        console.log('Success kls8 ganjil bab 1 string replacement full');
    } else {
        let endBracketIndex = content.lastIndexOf(']');
        if (endBracketIndex !== -1) {
            let after = content.substring(endBracketIndex);
            let newContent = before + babStr + '\n    }\n' + after;
            fs.writeFileSync('js/materi.js', newContent, 'utf8');
            console.log('Success kls8 ganjil bab 1 (last item fallback) string replacement full');
        } else {
            console.error('Failed to find closing array bracket');
        }
    }
} else {
    console.error('Failed to find start index');
}

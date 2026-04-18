const fs = require('fs');

let content = fs.readFileSync('js/materi.js', 'utf8');

const bab5Konten = `
<p class="text-on-surface-variant leading-relaxed text-lg mb-8">
    Daulah Turki Usmani adalah salah satu kerajaan Islam yang sangat besar dan berkuasa selama kurang lebih enam abad, meliputi wilayah luas di tiga benua (Eropa, Asia, dan Afrika). Belajar tentang Daulah Usmani penting untuk memahami sejarah kejayaan peradaban Islam.
</p>

<!-- Sejarah Lahirnya -->
<h3 class="font-headline text-2xl font-bold text-primary mt-12 mb-6 flex items-center">
    <span class="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mr-4 shrink-0">
        <span class="material-symbols-outlined text-[24px]">history_edu</span>
    </span>
    Sejarah Lahirnya Daulah Usmani
</h3>
<p class="text-on-surface-variant leading-relaxed text-md mb-12">
    Daulah Usmani berasal dari suku <strong>Kayi</strong>, yang melarikan diri dari serangan pasukan Mongol di bawah pimpinan Jenghis Khan. Mereka kemudian menetap di Asia Kecil (sekarang Turki). Ibu kota Daulah Usmani berpindah-pindah, dari Sogut, Bursa, Adrianopel (Edirne), dan akhirnya bermuara di Konstantinopel (Istanbul).
</p>

<!-- Masa Awal Berdiri -->
<div class="bg-surface-container-low p-8 rounded-[2rem] mb-12 border border-outline-variant/20">
    <h4 class="font-bold text-xl mb-6 text-on-surface">Masa Awal Berdiri</h4>
    <div class="space-y-6">
        <div class="flex items-start gap-4">
            <div class="min-w-32 font-bold text-primary">Usman I <br/><span class="text-xs text-on-surface-variant font-normal">(1299-1326 M)</span></div>
            <div class="text-sm text-on-surface-variant">Mendirikan Kerajaan Usmani dan memperluas wilayah hingga ke Kekaisaran Byzantium. Beliau dijuluki <strong>"al-Ghozi"</strong> (Ksatria) karena mempersatukan suku Turki atas dasar agama.</div>
        </div>
        <div class="flex items-start gap-4">
            <div class="min-w-32 font-bold text-primary">Orkhan <br/><span class="text-xs text-on-surface-variant font-normal">(1326-1361 M)</span></div>
            <div class="text-sm text-on-surface-variant">Menjadikan Bursa sebagai ibu kota, dan membentuk pasukan khusus bernama <strong>Inkisyariyah/Jenissari</strong>. Berhasil menaklukkan beberapa wilayah penting.</div>
        </div>
        <div class="flex items-start gap-4">
            <div class="min-w-32 font-bold text-primary">Murad I <br/><span class="text-xs text-on-surface-variant font-normal">(1360-1388 M)</span></div>
            <div class="text-sm text-on-surface-variant">Adrianopel ditaklukkan dan dijadikan ibu kota baru. Beliau seorang pemimpin yang berani dan rajin beribadah, wafat sebagai syuhada.</div>
        </div>
        <div class="flex items-start gap-4">
            <div class="min-w-32 font-bold text-primary">Bayazid I <br/><span class="text-xs text-on-surface-variant font-normal">(1389-1402 M)</span></div>
            <div class="text-sm text-on-surface-variant">Dijuluki <strong>"Yaldrum"</strong> (kilat) karena kecepatan penaklukannya. Ingin menaklukkan Konstantinopel, namun dikalahkan oleh Timur Lenk.</div>
        </div>
    </div>
</div>

<!-- Masa Kebangkitan -->
<h3 class="font-headline text-2xl font-bold text-primary mt-16 mb-8 text-center">Masa Kebangkitan & Puncak Kejayaan</h3>
<div class="grid md:grid-cols-2 gap-6 mb-12">
    <!-- Al Fatih -->
    <div class="bg-gradient-to-br from-primary/10 to-transparent p-6 rounded-3xl border border-primary/20">
        <h4 class="font-bold text-lg mb-2">Muhammad II / Al-Fatih <span class="text-xs font-normal opacity-70">(1451-1481 M)</span></h4>
        <p class="text-sm text-on-surface-variant mb-4 leading-relaxed">
            Menaklukkan Konstantinopel pada usia 21 tahun, mewujudkan kabar gembira dari Rasulullah saw. Konstantinopel diubah menjadi Islambul (Istanbul) dan Hagia Sofia diubah menjadi masjid. Beliau sangat cerdas dan menguasai banyak bahasa.
        </p>
    </div>
    <!-- Al Qanuni -->
    <div class="bg-gradient-to-br from-secondary/10 to-transparent p-6 rounded-3xl border border-secondary/20">
        <h4 class="font-bold text-lg mb-2">Sulaiman I / Al-Qanuni <span class="text-xs font-normal opacity-70">(1520-1566 M)</span></h4>
        <p class="text-sm text-on-surface-variant mb-4 leading-relaxed">
            Masa puncak kejayaan Daulah Usmani. Beliau adalah pembuat undang-undang ulung. Mengalami kemajuan pesat di bidang sains, teknologi, arsitektur (membangun banyak masjid), dan memperluas wilayah di tiga benua.
        </p>
    </div>
</div>

<p class="text-on-surface-variant text-sm mb-12 text-center bg-surface-container-highest p-4 rounded-xl">
    Sultan kebangkitan lainnya: <strong>Muhammad I</strong> (menyatukan kekaisaran yang sempat pecah), <strong>Murad II</strong> (melanjutkan perluasan wilayah), <strong>Bayazid II</strong>, dan <strong>Salim I</strong>.
</p>

<!-- Masa Kemunduran -->
<h3 class="font-headline text-2xl font-bold text-error mt-12 mb-6 flex items-center">
    <span class="w-10 h-10 rounded-xl bg-error/10 flex items-center justify-center mr-4 shrink-0 text-error">
        <span class="material-symbols-outlined text-[24px]">trending_down</span>
    </span>
    Masa Kemunduran Daulah Usmani
</h3>
<p class="text-on-surface-variant leading-relaxed text-md mb-6">
    Setelah Sulaiman Al-Qanuni, Daulah Usmani perlahan melemah hingga akhirnya runtuh pada tahun 1924 M dan menjadi Republik Turki. Faktor utama kemundurannya antara lain:
</p>
<ul class="grid grid-cols-2 gap-4 text-sm text-on-surface-variant mb-16">
    <li class="flex items-center"><span class="w-2 h-2 rounded-full bg-error mr-2"></span> Kemerosotan akhlak sebagian pemimpin</li>
    <li class="flex items-center"><span class="w-2 h-2 rounded-full bg-error mr-2"></span> Kurang meratanya tingkat pendidikan</li>
    <li class="flex items-center"><span class="w-2 h-2 rounded-full bg-error mr-2"></span> Kelemahan dan pemberontakan militer</li>
    <li class="flex items-center"><span class="w-2 h-2 rounded-full bg-error mr-2"></span> Biaya perang yang terlalu besar</li>
</ul>

<!-- Keteladanan -->
<h3 class="font-headline text-2xl font-bold text-primary mt-12 mb-8">Keteladanan yang Bisa Diterapkan</h3>
<div class="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mb-16">
    <div class="p-5 bg-white border border-outline-variant/20 rounded-2xl shadow-sm hover:-translate-y-1 transition-transform">
        <span class="material-symbols-outlined text-primary mb-2">gavel</span>
        <div class="font-bold mb-1 text-sm">Menetapkan Sistem Hukum</div>
        <div class="text-xs text-on-surface-variant">Mematuhi ajaran agama dan peraturan yang berlaku (Al-Qanun).</div>
    </div>
    <div class="p-5 bg-white border border-outline-variant/20 rounded-2xl shadow-sm hover:-translate-y-1 transition-transform">
        <span class="material-symbols-outlined text-primary mb-2">trending_up</span>
        <div class="font-bold mb-1 text-sm">Membangun Ekonomi</div>
        <div class="text-xs text-on-surface-variant">Kreatif, inovatif, dengan konsep dasar mensejahterakan rakyat.</div>
    </div>
    <div class="p-5 bg-white border border-outline-variant/20 rounded-2xl shadow-sm hover:-translate-y-1 transition-transform">
        <span class="material-symbols-outlined text-primary mb-2">diversity_3</span>
        <div class="font-bold mb-1 text-sm">Mewujudkan Toleransi</div>
        <div class="text-xs text-on-surface-variant">Memberikan kebebasan beragama dan menebarkan kasih sayang.</div>
    </div>
    <div class="p-5 bg-white border border-outline-variant/20 rounded-2xl shadow-sm hover:-translate-y-1 transition-transform">
        <span class="material-symbols-outlined text-primary mb-2">science</span>
        <div class="font-bold mb-1 text-sm">Sains & Teknologi</div>
        <div class="text-xs text-on-surface-variant">Berpikir kritis dalam mencari ilmu dan inovasi.</div>
    </div>
    <div class="p-5 bg-white border border-outline-variant/20 rounded-2xl shadow-sm hover:-translate-y-1 transition-transform">
        <span class="material-symbols-outlined text-primary mb-2">language</span>
        <div class="font-bold mb-1 text-sm">Bahasa & Budaya</div>
        <div class="text-xs text-on-surface-variant">Menghargai kekayaan budaya dan bahasa yang beragam.</div>
    </div>
    <div class="p-5 bg-white border border-outline-variant/20 rounded-2xl shadow-sm hover:-translate-y-1 transition-transform">
        <span class="material-symbols-outlined text-primary mb-2">castle</span>
        <div class="font-bold mb-1 text-sm">Arsitektur</div>
        <div class="text-xs text-on-surface-variant">Memelihara monumen peninggalan bersejarah seperti masjid.</div>
    </div>
</div>

<!-- Dalil Ali Imran -->
<div class="bg-primary/5 border-l-4 border-primary rounded-r-3xl p-8 mb-12 relative overflow-hidden">
    <div class="text-right font-quran text-4xl leading-[2.5] mb-6 text-on-surface" dir="rtl">
        قُلِ اللَّهُمَّ مَالِكِ الْمُلْكِ تُؤْتِي الْمُلْكَ مَنْ تَشَاءُ وَتَنْزِعُ الْمُلْكَ مِمَّنْ تَشَاءُ وَتُعِزُّ مَنْ تَشَاءُ وَتُذِلُّ مَنْ تَشَاءُۖ بِيَدِكَ الْخَيْرُۖ إِنَّكَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ
    </div>
    <div class="font-body italic text-on-surface-variant text-md pt-4 border-t border-outline-variant/20">
        Katakanlah (Muhammad), “Wahai Tuhan pemilik kekuasaan, Engkau berikan kekuasaan kepada siapa pun yang Engkau kehendaki, dan Engkau cabut kekuasaan dari siapa pun yang Engkau kehendaki. Engkau muliakan siapa pun yang Engkau kehendaki dan Engkau hinakan siapa pun yang Engkau kehendaki. Di tangan Engkaulah segala kebajikan. Sungguh, Engkau Mahakuasa atas segala sesuatu." <br/><strong>(Q.S. Ali Imran [3]: 26)</strong>
    </div>
</div>

<div class="p-8 bg-gradient-to-br from-primary to-primary-container text-white rounded-[2rem] shadow-xl text-center">
    <p class="text-lg opacity-90 leading-relaxed italic">
        "Kesuksesan sejarah Daulah Usmani mengajarkan kerja keras dan keimanan. Pelajari kejayaannya, jadikan pelajaran dari kemundurannya, dan terus berkarya untuk Islam."
    </p>
</div>
`;

// String Replacement array injection
const bab5Str = `"id": "kls9-smtganjil-bab5",
        "kelas": 9,
        "semester": "Ganjil",
        "bab": "Bab 5",
        "judul": "Mengapresiasi Peradaban Daulah Usmani",
        "waktuBumper": "14 Menit Baca",
        "gambar": "images/islamic_calligraphy.png",
        "konten": \`
${bab5Konten.replace(/`/g, '\\`')}
        \``;

const startPhrase = `"id": "kls9-smtganjil-bab5",`;
const nextPhrase = `"id": "kls9-smtgenap-bab1",`;

let startIndex = content.indexOf(startPhrase);
let nextIndex = content.indexOf(nextPhrase);

// Because Bab 5 is the last one in "smtganjil" before "smtgenap", the next one in the array is indeed "kls9-smtgenap-bab1".
if (startIndex !== -1 && nextIndex !== -1) {
    let before = content.substring(0, startIndex);
    let after = content.substring(nextIndex);
    
    // In JS array, there's a   }, {   between them.
    let newContent = before + bab5Str + '\n    }, {\n        ' + after;
    
    fs.writeFileSync('js/materi.js', newContent, 'utf8');
    console.log('Success bab 5 string replacement');
} else {
    console.error('Failed to match indexes in materi.js');
}

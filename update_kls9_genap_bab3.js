const fs = require('fs');

let content = fs.readFileSync('js/materi.js', 'utf8');

const babKonten = `
<p class="text-on-surface-variant leading-relaxed text-lg mb-8">
    Mencintai keindahan dan berkarya seni adalah bagian dari ekspresi keimanan, selama tidak melanggar syariat. Bab ini menjelaskan tentang bagaimana Islam memberikan wadah bagi manusia untuk mengekspresikan seninya secara indah dan bermartabat.
</p>

<!-- 1. Pengertian Seni Islami -->
<div class="bg-surface-container-low p-8 rounded-[2rem] mb-12 border border-outline-variant/20 shadow-sm relative overflow-hidden flex flex-col md:flex-row gap-8 items-center">
    <div class="flex-grow z-10">
        <h3 class="font-headline text-2xl font-bold text-primary mb-4 flex items-center">
            <span class="material-symbols-outlined mr-3 text-[28px]">palette</span> Pengertian Seni Islami
        </h3>
        <p class="text-on-surface-variant leading-relaxed text-md mb-4">
            <strong>Seni</strong> adalah ungkapan rasa indah dalam jiwa manusia yang disampaikan melalui suara (musik/nyanyian), penglihatan (lukisan/arsitektur), atau gerakan (tari).
        </p>
        <p class="text-on-surface-variant leading-relaxed text-md">
            <strong>Seni Islami</strong> adalah seni yang menunjukkan keindahan dan nilai <em>ketauhidan</em> (keesaan Allah) sebagai inti dari ajaran. Islam sangat menyukai keindahan asalkan sesuai nilai-nilai Islam.
        </p>
    </div>
    
    <div class="w-full md:w-1/3 shrink-0 bg-primary/10 p-6 rounded-2xl border border-primary/20 relative z-10">
        <div class="text-center font-quran text-2xl leading-loose mb-3 text-primary" dir="rtl">
            إِنَّ اللَّهَ جَمِيلٌ يُحِبُّ الْجَمَالَ
        </div>
        <p class="text-xs text-on-surface-variant italic text-center">
            "Sesungguhnya Allah Maha indah dan mencintai keindahan." <strong>(HR. Muslim)</strong>
        </p>
    </div>
    <span class="material-symbols-outlined absolute -bottom-10 -left-10 text-[200px] text-surface-variant/30 rotate-12">brush</span>
</div>

<!-- 2. Batasan-Batasan dalam Berseni Menurut Islam -->
<h3 class="font-headline text-2xl font-bold text-primary mt-12 mb-6 text-center">8 Batasan Seni Menurut Syariat</h3>
<p class="text-center text-on-surface-variant mb-10 max-w-2xl mx-auto">
    Islam memberikan kebebasan berekspresi, namun kebebasan tersebut dipagari agar seni membawa kebaikan dan tidak membangkitkan keburukan.
</p>

<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
    <div class="bg-white p-5 rounded-2xl border border-outline-variant/20 shadow-sm hover:border-primary/50 transition-colors">
        <span class="material-symbols-outlined text-primary mb-2 text-3xl">gavel</span>
        <h4 class="font-bold text-sm mb-1">Menjaga Norma</h4>
        <p class="text-xs text-on-surface-variant">Tidak boleh menampilkan hal diharamkan atau merusak moral masyarakat.</p>
    </div>
    <div class="bg-white p-5 rounded-2xl border border-outline-variant/20 shadow-sm hover:border-primary/50 transition-colors">
        <span class="material-symbols-outlined text-primary mb-2 text-3xl">front_hand</span>
        <h4 class="font-bold text-sm mb-1">Tidak Takabur</h4>
        <p class="text-xs text-on-surface-variant">Seniman dilarang sombong sebab kemampuannya murni titipan dari Allah.</p>
    </div>
    <div class="bg-white p-5 rounded-2xl border border-outline-variant/20 shadow-sm hover:border-primary/50 transition-colors">
        <span class="material-symbols-outlined text-primary mb-2 text-3xl">diversity_1</span>
        <h4 class="font-bold text-sm mb-1">Nilai Susila</h4>
        <p class="text-xs text-on-surface-variant">Karya seni harus santun, beradab, dan jauh dari unsur vulgar.</p>
    </div>
    <div class="bg-white p-5 rounded-2xl border border-outline-variant/20 shadow-sm hover:border-primary/50 transition-colors">
        <span class="material-symbols-outlined text-primary mb-2 text-3xl">checkroom</span>
        <h4 class="font-bold text-sm mb-1">Menutup Aurat</h4>
        <p class="text-xs text-on-surface-variant">Khususnya pada seni pertunjukan/tari, batasan aurat muslim/muslimah wajib dijaga.</p>
    </div>
    <div class="bg-white p-5 rounded-2xl border border-outline-variant/20 shadow-sm hover:border-error/50 transition-colors">
        <span class="material-symbols-outlined text-error mb-2 text-3xl">brightness_empty</span>
        <h4 class="font-bold text-sm mb-1 text-error">Tidak Syirik</h4>
        <p class="text-xs text-on-surface-variant">Bebas dari patung berhala atau hal yang menyekutukan keesaan Allah.</p>
    </div>
    <div class="bg-white p-5 rounded-2xl border border-outline-variant/20 shadow-sm hover:border-error/50 transition-colors">
        <span class="material-symbols-outlined text-error mb-2 text-3xl">visibility_off</span>
        <h4 class="font-bold text-sm mb-1 text-error">Tidak Syahwat</h4>
        <p class="text-xs text-on-surface-variant">Karya tidak boleh merangsang syahwat kebinatangan/dosa.</p>
    </div>
    <div class="bg-white p-5 rounded-2xl border border-outline-variant/20 shadow-sm hover:border-error/50 transition-colors">
        <span class="material-symbols-outlined text-error mb-2 text-3xl">warning</span>
        <h4 class="font-bold text-sm mb-1 text-error">Anti Merusak Moral</h4>
        <p class="text-xs text-on-surface-variant">Seni seharusnya mendidik dan membangun akhlak, bukan merusaknya.</p>
    </div>
    <div class="bg-white p-5 rounded-2xl border border-outline-variant/20 shadow-sm hover:border-error/50 transition-colors">
        <span class="material-symbols-outlined text-error mb-2 text-3xl">gpp_bad</span>
        <h4 class="font-bold text-sm mb-1 text-error">Anti Kebohongan</h4>
        <p class="text-xs text-on-surface-variant">Seni harus berisi pesan kebenaran, bukan fitnah atau disinformasi.</p>
    </div>
</div>

<!-- 3. Bentuk Ekspresi Seni -->
<div class="flex flex-col md:flex-row gap-8 items-start mb-16">
    <div class="md:w-1/3">
        <h3 class="font-headline text-2xl font-bold text-primary mb-4">Ragam Ekspresi</h3>
        <ul class="space-y-3">
            <li class="flex items-center gap-3 p-3 bg-surface-container-low rounded-xl">
                <span class="material-symbols-outlined text-secondary">music_note</span> <strong>Seni Suara:</strong> Qasidah, Nasyid
            </li>
            <li class="flex items-center gap-3 p-3 bg-surface-container-low rounded-xl">
                <span class="material-symbols-outlined text-secondary">architecture</span> <strong>Seni Rupa:</strong> Kaligrafi, Arsitektur
            </li>
            <li class="flex items-center gap-3 p-3 bg-surface-container-low rounded-xl">
                <span class="material-symbols-outlined text-secondary">import_contacts</span> <strong>Seni Sastra:</strong> Syair Islami
            </li>
            <li class="flex items-center gap-3 p-3 bg-surface-container-low rounded-xl">
                <span class="material-symbols-outlined text-secondary">accessibility_new</span> <strong>Seni Gerak:</strong> Tari Zapin (sesuai syariat)
            </li>
        </ul>
    </div>
    
    <div class="md:w-2/3 bg-surface-container-highest p-8 rounded-[2rem] border-l-8 border-primary">
        <h4 class="font-bold text-xl mb-4 text-on-surface">Panduan Berkarya</h4>
        <p class="text-sm text-on-surface-variant mb-4">Saat berkarya seni, seorang muslim wajib memperhatikan agar seninya:</p>
        <ul class="space-y-2 text-sm text-on-surface-variant opacity-90 list-disc ml-5 pl-2">
            <li>Mengarah pada budi pekerti dan nilai luhur Islam.</li>
            <li>Mengarahkan penikmatnya untuk mengagungkan kebesaran Allah Swt.</li>
            <li>Sukses menjadi katalis peningkatan keimanan.</li>
            <li>Sejalan dengan konsep kebaikan umum (Al-Ma'ruf) dan nilai kearifan lokal yang tidak menabrak agama.</li>
            <li>Menghindari pembangkitan selera rendah yang dibenci oleh Allah.</li>
        </ul>
    </div>
</div>

<!-- 4. Hikmah Mengembangkan Seni Islami -->
<div class="bg-gradient-to-br from-primary to-primary-container p-10 rounded-[3rem] text-white shadow-xl">
    <h4 class="text-2xl font-headline font-bold mb-4 text-center text-white">Hikmah Mengembangkan Seni Islami</h4>
    <p class="text-center text-sm opacity-90 mb-8 max-w-2xl mx-auto">
        Melalui seni, kita dapat membuka mata dunia atas keindahan ajaran Islam dan mengajak pada kebaikan tanpa terkesan menggurui.
    </p>

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div class="flex items-start gap-3 bg-white/10 p-4 rounded-xl">
            <span class="material-symbols-outlined text-secondary-fixed">favorite</span>
            <span class="text-sm font-medium">Meningkatkan rasa cinta kepada Allah dan Rasul.</span>
        </div>
        <div class="flex items-start gap-3 bg-white/10 p-4 rounded-xl">
            <span class="material-symbols-outlined text-secondary-fixed">campaign</span>
            <span class="text-sm font-medium">Berdakwah dengan cara yang indah & asyik.</span>
        </div>
        <div class="flex items-start gap-3 bg-white/10 p-4 rounded-xl">
            <span class="material-symbols-outlined text-secondary-fixed">school</span>
            <span class="text-sm font-medium">Menghasilkan mahakarya yang mendidik.</span>
        </div>
        <div class="flex items-start gap-3 bg-white/10 p-4 rounded-xl">
            <span class="material-symbols-outlined text-secondary-fixed">verified_user</span>
            <span class="text-sm font-medium">Menyalurkan bakat secara positif & halal.</span>
        </div>
        <div class="flex items-start gap-3 bg-white/10 p-4 rounded-xl">
            <span class="material-symbols-outlined text-secondary-fixed">public</span>
            <span class="text-sm font-medium">Memperkaya panggung kebudayaan Islam dunia.</span>
        </div>
    </div>
</div>
`;

// String Replacement
const babStr = `"id": "kls9-smtgenap-bab3",
        "kelas": 9,
        "semester": "Genap",
        "bab": "Bab 3",
        "judul": "Mengembangkan Ekspresi Seni Islami",
        "waktuBumper": "12 Menit Baca",
        "gambar": "images/islamic_calligraphy.png",
        "konten": \`
${babKonten.replace(/`/g, '\\`')}
        \``;

const startPhrase = `"id": "kls9-smtgenap-bab3",`;
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
        console.log('Success kls9 genap bab 3 string replacement full');
    } else {
        // Fallback for last item in array just in case
        let endBracketIndex = content.lastIndexOf(']');
        if (endBracketIndex !== -1) {
            let after = content.substring(endBracketIndex);
            let newContent = before + babStr + '\n    }\n' + after;
            fs.writeFileSync('js/materi.js', newContent, 'utf8');
            console.log('Success kls9 genap bab 3 (last item fallback) string replacement full');
        } else {
            console.error('Failed to find closing array bracket');
        }
    }
} else {
    console.error('Failed to find start index');
}

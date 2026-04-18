const fs = require('fs');

let content = fs.readFileSync('js/materi.js', 'utf8');

const bab5Konten = `
<p class="text-on-surface-variant leading-relaxed text-lg mb-8">
    Bab ini mengajak kita napak tilas kemegahan <strong>Dinasti Umayyah di Damaskus</strong>. Menilik masa lalu adalah jendela referensi *high-level* untuk melihat bagaimana umat Islam menyetir kemajuan sistem negara di dunia, serta belajar dari pola konflik kudeta agar bangsa kita tidak mudah tergelincir masuk jurang di masa depan.
</p>

<!-- 1. Sejarah Berdiri -->
<h3 class="font-headline text-2xl font-bold text-primary mb-6 flex items-center bg-primary/5 w-max pr-6 py-2 rounded-r-full"><span class="material-symbols-outlined mr-3 bg-primary text-white w-12 h-12 flex items-center justify-center rounded-full shadow-md">history_edu</span> 1. Kilas Sejarah Bani Umayyah</h3>
<div class="grid md:grid-cols-3 gap-6 mb-16">
    <div class="md:col-span-1 bg-surface-container-low p-6 rounded-3xl border border-outline-variant/20 shadow-sm relative overflow-hidden">
        <span class="material-symbols-outlined absolute -bottom-4 -left-4 text-primary/5 text-9xl">crown</span>
        <h4 class="font-bold text-primary mb-3">Awal Konfigurasi (661 M)</h4>
        <p class="text-[13px] text-on-surface-variant leading-relaxed mt-2 text-justify">
            Didirikan oleh negosiator politik tangguh, <strong>Mu'awiyah bin Abu Sufyan</strong> meruntuhkan supremasi masa Khulafaur Rasyidin. Ibukota komando pemerintahan langsung diderek dari pasir Madinah menuju kemegahan metropolis <strong>Damaskus</strong> (Suriah). Ia juga mengubah total tatanan konstitusi <em>syura</em> (musyawarah pemilu) menjadi trah monarki absolut turun-temurun.
        </p>
    </div>
    
    <div class="md:col-span-2">
        <h4 class="font-bold text-on-surface mb-3 flex items-center"><span class="material-symbols-outlined mr-2 text-secondary">star</span> Khalifah Bintang Sejarah</h4>
        <div class="space-y-3">
            <div class="bg-white p-4 rounded-xl border-l-[4px] border-primary shadow-[0_2px_10px_rgba(0,0,0,0.03)] flex flex-col sm:flex-row gap-4 items-start transition-transform hover:translate-x-2">
                <span class="bg-primary/10 text-primary font-bold px-3 py-1 rounded-lg text-xs shrink-0 mt-0.5">Al-Walid bin 'Abd al-Malik</span>
                <p class="text-[13px] text-on-surface-variant leading-relaxed">Panglima arsitek ekspansi gila-gilaan. Peta taklukan wilayah meluas bak virus menembus padang benua Afrika Utara merambat hingga ke gerbang <strong>Andalusia, Spanyol</strong> (Datanan Eropa).</p>
            </div>
            <div class="bg-white p-4 rounded-xl border-l-[4px] border-secondary shadow-[0_2px_10px_rgba(0,0,0,0.03)] flex flex-col sm:flex-row gap-4 items-start transition-transform hover:translate-x-2">
                <span class="bg-secondary/10 text-secondary font-bold px-3 py-1 rounded-lg text-xs shrink-0 mt-0.5">'Umar bin 'Abd al-'Aziz</span>
                <p class="text-[13px] text-on-surface-variant leading-relaxed">Sang Khalifah Avatar Keadilan yang teramat <em>Zuhud</em> miskin. Anggaran pajak dipangkas drastis 0%, mencabut <em>Jizyah</em> bagi parat mualaf, dan merupakan inisiator penyusunan proyek Hadis resmi negara.</p>
            </div>
            <div class="bg-white p-4 rounded-xl border-l-[4px] border-error shadow-[0_2px_10px_rgba(0,0,0,0.03)] flex flex-col sm:flex-row gap-4 items-start transition-transform hover:translate-x-2">
                <span class="bg-error/10 text-error font-bold px-3 py-1 rounded-lg text-xs shrink-0 mt-0.5">Marwan bin Muhammad</span>
                <p class="text-[13px] text-on-surface-variant leading-relaxed">Raja pamungkas yang tenggelam dihakimi pedang invasi gelombang Abbasiyah (750 M). Satu-satunya pangeran lolos yakni <em>'Abd al-Rahman</em>, sukses kabur mengarungi semenanjung dan mendirikan kemaharajaan ke-2 di Spanyol!</p>
            </div>
        </div>
    </div>
</div>

<!-- 2. Kemajuan Peradaban -->
<h3 class="font-headline text-2xl font-bold text-secondary mb-6 flex items-center bg-secondary/5 w-max pr-6 py-2 rounded-r-full"><span class="material-symbols-outlined mr-3 bg-secondary text-white w-12 h-12 flex items-center justify-center rounded-full shadow-md">receipt_long</span> 2. Mesin Birokrasi Raksasa</h3>
<div class="bg-surface-container-low p-8 rounded-[2rem] border border-outline-variant/20 shadow-sm mb-16 relative overflow-hidden">
    <span class="material-symbols-outlined absolute -right-4 -bottom-4 text-[120px] text-secondary/5 rotate-12">account_balance</span>
    
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
        <!-- Departemen -->
        <div class="bg-white p-5 rounded-2xl border border-outline-variant/30 shadow-sm">
            <h4 class="font-bold text-[13px] text-secondary bg-secondary/10 px-3 py-1.5 rounded-lg inline-block mb-4">Mekanisme Kabinet (Diwan)</h4>
            <ul class="text-[13px] text-on-surface-variant space-y-3">
                <li><strong class="text-on-surface text-sm block">Diwan al-Rasail & Barid</strong> Sekretariat negara intelijen & Kementerian Pos data kilat.</li>
                <li><strong class="text-on-surface text-sm block">Diwan al-Kharaj</strong> Badan otoritas pengatur devisa Pendapatan & Pajak Negara.</li>
            </ul>
        </div>
        <!-- Hukum -->
        <div class="bg-white p-5 rounded-2xl border border-outline-variant/30 shadow-sm">
            <h4 class="font-bold text-[13px] text-secondary bg-secondary/10 px-3 py-1.5 rounded-lg inline-block mb-4">Badan Yudikatif Penegak</h4>
            <ul class="text-[13px] text-on-surface-variant space-y-3">
                <li><strong class="text-on-surface text-sm block">Al-qada & Al-Hisbah</strong> Mahkamah hakim Qadi dan Pengadilan Tinggi penyelesaian kasus sengketa / kriminal sipil.</li>
            </ul>
        </div>
        <!-- Infrastruktur -->
        <div class="bg-white p-5 rounded-2xl border border-outline-variant/30 shadow-sm">
            <h4 class="font-bold text-[13px] text-secondary bg-secondary/10 px-3 py-1.5 rounded-lg inline-block mb-4">Seni Monumen Fisik</h4>
            <ul class="text-[13px] text-on-surface-variant space-y-3">
                <li><strong class="text-on-surface text-sm block">Dome of The Rock</strong> Karya <em>masterpiece</em> arsitektur kubah batu megah di jantung al-Quds Yerusalem.</li>
            </ul>
        </div>
    </div>
</div>

<!-- 3. Inspirasi Cintaku Pada Negeriku -->
<div class="bg-gradient-to-br from-primary to-primary-container p-10 md:p-14 rounded-[3.5rem] text-white shadow-2xl relative overflow-hidden flex flex-col items-center text-center">
    <!-- Dekorasi -->
    <span class="material-symbols-outlined absolute -left-10 top-10 text-[100px] text-white/5 rotate-[30deg]">public</span>
    <span class="material-symbols-outlined absolute -right-10 bottom-10 text-[100px] text-white/5 -rotate-12">flag</span>
    
    <div class="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mb-6 shadow-inner ring-4 ring-white/10 backdrop-blur-sm">
        <span class="material-symbols-outlined text-[50px] text-white drop-shadow-md">favorite</span>
    </div>
    
    <div class="z-10 relative">
        <h3 class="font-headline text-3xl font-bold mb-5 text-white border-b border-white/20 pb-4 inline-block">Ḥubbul Waṭhan Minal Iman</h3>
        <p class="text-[15px] opacity-90 leading-relaxed max-w-4xl mb-8 font-medium">
            Sejarah agung berdirinya imperium masa lalu mengajarkan mutiara kesatuan identitas kebangsaan: <strong>"Cinta Tanah Air Adalah Sebagian Utama Dari Iman"</strong>. Secara fitrah, Rasulullah SAW pernah menangis berderai memendam rindu akan sejuknya lembah Mekkah kala ia berada di perantauan jauh.
        </p>
        <div class="bg-white/10 p-6 md:p-8 rounded-3xl border border-white/20 backdrop-blur-md max-w-4xl mx-auto shadow-lg text-left md:text-center">
            <span class="material-symbols-outlined text-secondary-fixed mb-2 text-3xl hidden md:block">music_note</span>
            <p class="text-sm md:text-[15px] font-medium text-white/95 leading-relaxed">
                Di benteng maritim Nusantara, kakek moyang keilmuan kita yakni Mahaguru <strong>KH. Hasyim Asy'ari</strong> meledakkan daya ledak "Fatwa Resolusi Jihad Murni" untuk menggasak agresor militer kolonial...<br><br>Sementara ulama jenius <strong>KH. A. Wahab Hasbullah</strong> menyuntikkan mental patriot dengan menggubah lagu kebangsaan magis <em>"Syubbanul Wathan"</em>. Mereka bukan cuma melek Dzikir, namun 100% Darah Jiwa Patriotik NKRI tak terbantahkan!
            </p>
        </div>
    </div>
</div>
`;

function appendBab(babId, kelas, sem, babNo, judul, waktu, isikonten) {
    const format = `"id": "${babId}",
        "kelas": ${kelas},
        "semester": "${sem}",
        "bab": "${babNo}",
        "judul": "${judul}",
        "waktuBumper": "${waktu} Menit Baca",
        "gambar": "images/islamic_calligraphy.png",
        "konten": \`
${isikonten.replace(/`/g, '\\`')}
        \``;

    const startPhrase = `"id": "${babId}",`;
    const nextPhraseRegex = /"id":\s*"[^"]+",/; 

    let startIndex = content.indexOf(startPhrase);
    if (startIndex !== -1) {
        let before = content.substring(0, startIndex);
        let afterStart = content.substring(startIndex + startPhrase.length);
        let match = afterStart.match(nextPhraseRegex);
        
        if (match) {
            let nextIndex = startIndex + startPhrase.length + match.index;
            let after = content.substring(nextIndex);
            content = before + format + '\n    }, {\n        ' + after;
        } else {
            let endBracketIndex = content.lastIndexOf(']');
            if (endBracketIndex !== -1) {
                let after = content.substring(endBracketIndex);
                content = before + format + '\n    }\n' + after;
            }
        }
    }
}

appendBab('kls7-smtganjil-bab5', 7, 'Ganjil', 'Bab 5', 'Damaskus: Pusat Peradaban Timur Islam (661-750 M)', '16', bab5Konten);

fs.writeFileSync('js/materi.js', content, 'utf8');
console.log('Success kls7 ganjil bab 5 string replacement');

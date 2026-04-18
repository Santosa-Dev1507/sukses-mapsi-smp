const fs = require('fs');

let content = fs.readFileSync('js/materi.js', 'utf8');

const bab4Konten = `
<p class="text-on-surface-variant leading-relaxed text-lg mb-8">
    Bab ini membahas tentang dua sifat mutiara akhlak dalam Islam yang sangat penting untuk membentuk pribadi berintegritas dan memiliki prinsip kuat, yaitu <strong>Amanah</strong> dan <strong>Jujur</strong>.
</p>

<!-- 1. Pengertian -->
<div class="grid md:grid-cols-2 gap-6 mb-12">
    <div class="bg-surface-container-low p-8 rounded-[2rem] border-t-4 border-primary shadow-sm hover:shadow-lg transition-all">
        <h4 class="font-bold text-xl mb-4 text-primary flex items-center"><span class="material-symbols-outlined mr-2">verified_user</span> Amanah (Terpercaya)</h4>
        <p class="text-sm text-on-surface-variant leading-relaxed">Sesuatu yang dipercayakan kepada seseorang, baik berupa barang titipan, rahasia, janji, maupun tugas tanggung jawab. Menjaganya berarti melaksanakan titipan itu dengan usaha dan integritas sebaik-baiknya.</p>
    </div>
    <div class="bg-surface-container-low p-8 rounded-[2rem] border-t-4 border-secondary shadow-sm hover:shadow-lg transition-all">
        <h4 class="font-bold text-xl mb-4 text-secondary flex items-center"><span class="material-symbols-outlined mr-2">straight</span> Jujur (Lurus/Benar)</h4>
        <p class="text-sm text-on-surface-variant leading-relaxed">Kesesuaian mutlak antara apa yang diucapkan, diperbuat, dan yang diyakini dalam hati. Serta kesesuaian antara berita dan fakta yang sebenarnya tanpa ada kebohongan sama sekali.</p>
    </div>
</div>

<!-- 2 & 3. Penerapan & Contoh -->
<h3 class="font-headline text-2xl font-bold text-primary mt-16 mb-6 text-center">Cara & Contoh Penerapan Sehari-hari</h3>
<div class="grid md:grid-cols-3 gap-6 mb-16">
    <!-- Di Rumah -->
    <div class="group">
        <div class="bg-primary/10 text-primary font-bold text-center py-3 rounded-t-2xl font-headline group-hover:bg-primary group-hover:text-white transition-colors">🏡 Di Rumah</div>
        <div class="bg-surface-container-lowest p-6 rounded-b-2xl border border-outline-variant/10 shadow-sm space-y-4 text-sm h-[200px]">
            <p class="flex gap-3 items-start"><span class="material-symbols-outlined text-primary text-lg shrink-0">check_circle</span> Mengerjakan tugas dari orang tua dengan baik.</p>
            <p class="flex gap-3 items-start"><span class="material-symbols-outlined text-primary text-lg shrink-0">check_circle</span> Tidak sekali-kali berbohong kepada Ayah & Ibu.</p>
            <p class="flex gap-3 items-start"><span class="material-symbols-outlined text-primary text-lg shrink-0">check_circle</span> Mengembalikan sisa uang belanja secara jujur mutlak.</p>
        </div>
    </div>
    <!-- Di Sekolah -->
    <div class="group">
        <div class="bg-secondary/10 text-secondary font-bold text-center py-3 rounded-t-2xl font-headline group-hover:bg-secondary group-hover:text-white transition-colors">🏫 Di Sekolah</div>
        <div class="bg-surface-container-lowest p-6 rounded-b-2xl border border-outline-variant/10 shadow-sm space-y-4 text-sm h-[200px]">
            <p class="flex gap-3 items-start"><span class="material-symbols-outlined text-secondary text-lg shrink-0">check_circle</span> Mengerjakan PR murni jerih payah sendiri (anti nyontek).</p>
            <p class="flex gap-3 items-start"><span class="material-symbols-outlined text-secondary text-lg shrink-0">check_circle</span> Mengembalikan buku perpus tidak lewat tenggat waktu.</p>
            <p class="flex gap-3 items-start"><span class="material-symbols-outlined text-secondary text-lg shrink-0">check_circle</span> Bertanggung jawab sebagai struktur pengurus.</p>
        </div>
    </div>
    <!-- Di Masyarakat -->
    <div class="group">
        <div class="bg-tertiary/10 text-tertiary font-bold text-center py-3 rounded-t-2xl font-headline group-hover:bg-tertiary group-hover:text-white transition-colors">🌍 Di Masyarakat</div>
        <div class="bg-surface-container-lowest p-6 rounded-b-2xl border border-outline-variant/10 shadow-sm space-y-4 text-sm h-[200px]">
            <p class="flex gap-3 items-start"><span class="material-symbols-outlined text-tertiary text-lg shrink-0">check_circle</span> Menjadi ketua OSIS atau panitia RT yang anti korupsi.</p>
            <p class="flex gap-3 items-start"><span class="material-symbols-outlined text-tertiary text-lg shrink-0">check_circle</span> Saring sebelum 'Sharing' (Anti menyebar kabar Hoaks).</p>
            <p class="flex gap-3 items-start"><span class="material-symbols-outlined text-tertiary text-lg shrink-0">check_circle</span> Menjaga lisan dalam interaksi pergaulan tetangga.</p>
        </div>
    </div>
</div>

<!-- 4. Hikmah -->
<div class="bg-surface-container-high p-8 rounded-[2rem] border-l-8 border-primary mb-16 flex flex-col md:flex-row gap-6 items-center shadow-sm">
    <div class="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
        <span class="material-symbols-outlined text-primary text-4xl">emoji_events</span>
    </div>
    <div>
        <h4 class="font-bold text-xl mb-4 text-on-surface">Manfaat Emas Bersikap Jujur & Amanah</h4>
        <ul class="text-sm text-on-surface-variant space-y-2 opacity-90">
            <li class="flex items-center gap-2"><span class="material-symbols-outlined text-primary text-sm">arrow_forward_ios</span> <strong>Memanen Kepercayaan:</strong> Modal terbaik investasi sosial.</li>
            <li class="flex items-center gap-2"><span class="material-symbols-outlined text-primary text-sm">arrow_forward_ios</span> <strong>Ketenangan Jiwa Hakiki:</strong> 100% bebas dari was-was takut ketahuan dosa penipuan.</li>
            <li class="flex items-center gap-2"><span class="material-symbols-outlined text-primary text-sm">arrow_forward_ios</span> <strong>Surga sebagai Balasannya:</strong> Dijanjikan cinta dari Sang Khalik.</li>
        </ul>
    </div>
</div>

<!-- 5. Kisah Teladan -->
<div class="bg-gradient-to-br from-primary to-primary-container p-10 md:p-14 rounded-[3rem] text-white shadow-xl relative overflow-hidden">
    <span class="material-symbols-outlined absolute -bottom-10 -right-10 text-[200px] text-white/5 rotate-12">pets</span>
    <h3 class="font-headline text-3xl font-bold mb-8 text-white text-center border-b border-white/20 pb-6 relative z-10">Kisah Teladan: Khalifah Umar & Anak Gembala</h3>
    
    <div class="text-white/90 text-[15px] leading-relaxed space-y-6 relative z-10 text-justify font-medium">
        <p>Suatu hari Khalifah Umar bin Khattab r.a. pergi keluar perbatasan rute kafilah dan menjumpai seorang anak gembala budak yang menggembalakan ribuan domba gemuk. Umar berniat mengujinya dengan menawar untuk membeli seekor dan menyuruh sang anak berbohong kepada tuannya bahwa *"dombanya mati telah dimakan serigala"*.</p>
        
        <div class="bg-white/10 p-6 rounded-2xl italic border-l-4 border-secondary my-8 backdrop-blur-sm text-lg font-bold text-center">
            "Jika Tuan menyuruh demikian, lalu di manakah Allah?" <br><span class="text-sm font-normal text-white/70 block mt-2">(Jawab sang pengembala remaja mematahkan argumen suap Khalifah Umar)</span>
        </div>
        
        <p>Mendengar kalimat sakti tersebut, badan Umar gemetar dan menangis. Sang pemuda itu sadar betul; meskipun tuannya tidak berjaga, tetapi kamera Allah Azza Wa Jalla tak akan pernah berkedip mencatat semua kelakuan manusia di balik layar pertanggungjawaban. Umar lalu membeli budak tersebut dan memerdekakannya sebagai balasan atas kejujurannya.</p>
        
        <div class="bg-secondary p-4 mt-8 rounded-xl font-bold font-headline text-center text-secondary-on shadow-lg text-lg text-on-secondary-container">
            "Integritas adalah tentang satu kejujuran yang menetap kokoh; saat bahkan tidak ada satupun mata manusia yang bisa melihat."
        </div>
    </div>
</div>
`;

const babStr = `"id": "kls8-smtganjil-bab4",
        "kelas": 8,
        "semester": "Ganjil",
        "bab": "Bab 4",
        "judul": "Menjadi Pribadi Berintegritas dengan Sifat Amanah dan Jujur",
        "waktuBumper": "12 Menit Baca",
        "gambar": "images/islamic_calligraphy.png",
        "konten": \`
${bab4Konten.replace(/`/g, '\\`')}
        \``;

const startPhrase = `"id": "kls8-smtganjil-bab4",`;
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
        console.log('Success kls8 ganjil bab 4 string replacement full');
    } else {
        let endBracketIndex = content.lastIndexOf(']');
        if (endBracketIndex !== -1) {
            let after = content.substring(endBracketIndex);
            let newContent = before + babStr + '\n    }\n' + after;
            fs.writeFileSync('js/materi.js', newContent, 'utf8');
            console.log('Success kls8 ganjil bab 4 (last item fallback) string replacement full');
        } else {
            console.error('Failed to find closing array bracket');
        }
    }
} else {
    console.error('Failed to find start index');
}

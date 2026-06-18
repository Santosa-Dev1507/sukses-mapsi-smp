const fs = require('fs');

let content = fs.readFileSync('js/materi.js', 'utf8');

// ==========================================
// KONTEN BAB 2: Kitab-Kitab Allah
// ==========================================
const bab2Konten = `
<p class="text-on-surface-variant leading-relaxed text-lg mb-8">
    Bab ini mengupas rukun iman ketiga, yakni mempercayai pesan suci yang diturunkan Allah Swt. melalui kitab dan suhuf-Nya, serta bagaimana Al-Qur'an memandu kita menjadi generasi toleran.
</p>

<!-- 1. Makna Iman & Daftar Kitab/Suhuf -->
<div class="bg-surface-container-low p-8 rounded-[2rem] mb-12 border border-outline-variant/20 shadow-sm">
    <h3 class="font-headline text-2xl font-bold text-primary mb-6 flex items-center">
        <span class="material-symbols-outlined mr-3 text-[28px]">auto_stories</span> 1. Mengenal Kitab & Suhuf
    </h3>
    <p class="text-on-surface-variant leading-relaxed text-sm mb-6">
        Iman kepada Kitab Allah berarti meyakini dengan sepenuh hati bahwa Allah telah menurunkan pedoman hidup kepada pendahulu kita. Ada 4 Kitab Utama:
    </p>

    <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div class="bg-white p-4 rounded-xl border-l-4 border-primary shadow-[0_2px_10px_rgba(0,0,0,0.03)] text-center hover:-translate-y-1 transition-transform">
            <h4 class="font-bold text-primary">Taurat</h4>
            <p class="text-xs text-on-surface-variant mt-1">Nabi Musa a.s.</p>
        </div>
        <div class="bg-white p-4 rounded-xl border-l-4 border-secondary shadow-[0_2px_10px_rgba(0,0,0,0.03)] text-center hover:-translate-y-1 transition-transform">
            <h4 class="font-bold text-secondary">Zabur</h4>
            <p class="text-xs text-on-surface-variant mt-1">Nabi Daud a.s.</p>
        </div>
        <div class="bg-white p-4 rounded-xl border-l-4 border-tertiary shadow-[0_2px_10px_rgba(0,0,0,0.03)] text-center hover:-translate-y-1 transition-transform">
            <h4 class="font-bold text-tertiary">Injil</h4>
            <p class="text-xs text-on-surface-variant mt-1">Nabi Isa a.s.</p>
        </div>
        <div class="bg-white p-4 rounded-xl border-l-4 border-error shadow-[0_2px_10px_rgba(0,0,0,0.03)] text-center hover:-translate-y-1 transition-transform">
            <h4 class="font-bold text-error">Al-Qur'an</h4>
            <p class="text-xs text-on-surface-variant mt-1">Nabi Muhammad saw.</p>
        </div>
    </div>

    <!-- Suhuf -->
    <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10">
        <h4 class="font-bold text-primary mb-3"><span class="material-symbols-outlined text-sm align-middle">description</span> Lembaran Suhuf (100 Suhuf)</h4>
        <p class="text-xs text-on-surface-variant leading-relaxed mb-3">Selain kitab tebal, Allah juga menurunkan wahyu berbentuk lembaran terpisah (Suhuf) kepada nabi-nabi terdahulu. Pembagiannya menurut riwayat:</p>
        <ul class="grid grid-cols-2 gap-2 text-xs text-on-surface-variant">
            <li>• Nabi Syits a.s. : <strong>50 Suhuf</strong></li>
            <li>• Nabi Idris a.s. : <strong>30 Suhuf</strong></li>
            <li>• Nabi Nuh a.s. : <strong>10 Suhuf</strong></li>
            <li>• Nabi Ibrahim a.s. : <strong>10 Suhuf</strong></li>
        </ul>
        <p class="text-xs px-3 py-2 bg-white rounded-lg mt-3 text-on-surface-variant italic ring-1 ring-outline-variant/20">Ada pula riwayat menyebut Nabi Musa juga menerima 10 suhuf sebelum kitab Taurat utuh.</p>
    </div>
</div>

<!-- 2. Al-Quran & Sejarah Kompilasi -->
<div class="grid md:grid-cols-2 gap-8 mb-16">
    <div>
        <h3 class="font-headline text-2xl font-bold text-primary mb-4">2. Keistimewaan Al-Qur'an</h3>
        <ul class="space-y-3">
            <li class="flex items-start bg-surface-container-lowest p-3 rounded-xl border border-outline-variant/10 shadow-sm"><span class="material-symbols-outlined text-primary mr-2">verified</span> <span class="text-sm">Keasliannya dijamin langsung oleh Allah.</span></li>
            <li class="flex items-start bg-surface-container-lowest p-3 rounded-xl border border-outline-variant/10 shadow-sm"><span class="material-symbols-outlined text-primary mr-2">stars</span> <span class="text-sm">Merupakan Mukjizat Terbesar Nabi Muhammad saw.</span></li>
            <li class="flex items-start bg-surface-container-lowest p-3 rounded-xl border border-outline-variant/10 shadow-sm"><span class="material-symbols-outlined text-primary mr-2">menu_book</span> <span class="text-sm">Pedoman hidup yang menyempurnakan kitab-kitab lampau.</span></li>
        </ul>
    </div>
    
    <div class="bg-surface-container-highest p-6 rounded-[2rem] border-l-8 border-secondary relative overflow-hidden">
        <span class="material-symbols-outlined absolute -top-4 -right-4 text-7xl text-secondary/10">history</span>
        <h3 class="font-headline text-xl font-bold text-secondary mb-4">3. Sejarah Kompilasi</h3>
        <p class="text-sm text-on-surface-variant mb-3"><strong class="text-on-surface">Era Abu Bakar as-Siddiq:</strong> Akibat banyaknya penghafal gugur di medan perang, catatan pelepah kurma dikumpulkan Zaid bin Tsabit jadi suhuf tangguh.</p>
        <p class="text-sm text-on-surface-variant"><strong class="text-on-surface">Era Utsman bin Affan:</strong> Menyatukan dialek bacaan yang mulai berbeda dengan menyalin suhuf menjadi Mushaf Standar (Mushaf Utsmani) ke penjuru wilayah.</p>
    </div>
</div>

<!-- 4. Mencintai AlQuran & 5. Toleransi -->
<h3 class="font-headline text-2xl font-bold text-primary mt-12 mb-6 text-center">Menjadi Pecinta Al-Qur'an yang Toleran</h3>
<div class="bg-gradient-to-br from-primary to-primary-container p-10 rounded-[3rem] text-white shadow-xl flex flex-col md:flex-row gap-8 items-center mb-10">
    <div class="flex-grow">
        <h4 class="font-bold text-lg mb-3 flex items-center gap-2"><span class="material-symbols-outlined">favorite</span> Bukti Cinta Al-Qur'an</h4>
        <ul class="text-sm opacity-90 space-y-2 mb-6 list-disc ml-5">
            <li>Membaca rutin, menghafal, dan memahami tafsirnya.</li>
            <li>Mengamalkannya dalam adab sehari-hari.</li>
            <li>Memperlakukan fisik mushaf dengan suci dan hormat.</li>
        </ul>
        
        <h4 class="font-bold text-lg mb-3 flex items-center gap-2"><span class="material-symbols-outlined">handshake</span> Sikap Toleransi</h4>
        <p class="text-sm opacity-90 leading-relaxed text-justify">
            Walau meyakini Al-Qur'an sebagai penutup paling sempurna, Islam mewajibkan toleransi terhadap ahli kitab terdahulu (Yahudi/Nasrani). Toleransi bukan berarti <em>mencampuradukkan</em> akidah, melainkan <strong>berbuat adil, menjaga kerukunan, dan tidak memaksakan agama</strong>.
        </p>
    </div>
    <div class="bg-white/10 p-6 rounded-2xl md:w-1/3 shrink-0 backdrop-blur-sm border border-white/20">
        <h5 class="font-bold text-white mb-3 text-center border-b border-white/20 pb-2">Hikmah Mengimani Kitab</h5>
        <ul class="text-xs space-y-2 opacity-90">
            <li>✔️ Mengetahui batas benar & salah</li>
            <li>✔️ Hidup tenang punya pedoman pasti</li>
            <li>✔️ Motivasi beramal saleh tinggi</li>
            <li>✔️ Tumbuh toleransi sejati</li>
        </ul>
    </div>
</div>
`;

// ==========================================
// KONTEN BAB 3: Salat Gerhana, Istiska, Jenazah (Dari Ekstraksi Gambar PDF)
// ==========================================
const bab3Konten = `
<p class="text-on-surface-variant leading-relaxed text-lg mb-8">
    Materi kali ini khusus mengkaji tiga macam salat sunah berjamaah yang memiliki nilai sosial dan kepedulian tingkat tinggi: Salat Gerhana, Istiska (Minta Hujan), dan Jenazah.
</p>

<!-- 1. SALAT GERHANA -->
<h3 class="font-headline text-2xl font-bold text-primary mt-12 mb-6 flex items-center">
    <span class="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mr-4 shrink-0">
        <span class="material-symbols-outlined text-[24px]">dark_mode</span>
    </span>
    1. Salat Gerhana (Kusufain)
</h3>
<div class="bg-surface-container-low p-8 rounded-[2rem] mb-12 border border-outline-variant/20 shadow-sm relative">
    <p class="text-on-surface-variant text-sm mb-4 leading-relaxed">
        Salat gerhana dikenal dengan istilah <em>Kusufain</em>. Secara khusus:
        <br>• <strong>Kusuf:</strong> Salat untuk gerhana matahari.
        <br>• <strong>Khusuf:</strong> Salat untuk gerhana bulan.
    </p>
    
    <div class="flex flex-wrap gap-4 mb-6">
        <div class="bg-white px-4 py-2 border border-outline-variant/20 rounded-xl text-sm"><strong class="text-primary">Hukum:</strong> Sunah Muakkad</div>
        <div class="bg-white px-4 py-2 border border-outline-variant/20 rounded-xl text-sm"><strong class="text-primary">Format:</strong> 2 Rakaat dengan <strong>4 kali Ruku'</strong></div>
        <div class="bg-white px-4 py-2 border border-outline-variant/20 rounded-xl text-sm"><strong class="text-primary">Waktu:</strong> Terjadi gerhana hingga usai</div>
    </div>

    <!-- Niat & Tata Cara -->
    <div class="bg-primary/5 p-6 rounded-2xl border border-primary/20 mb-6">
        <h4 class="font-bold text-primary mb-4 text-sm">Contoh Lafal Niat Salat Gerhana Matahari (Makmum)</h4>
        <div class="text-right font-quran text-2xl text-on-surface mb-3 leading-loose" dir="rtl">
            أُصَلِّيْ سُنَّةَ الْكُسُوْفِ رَكْعَتَيْنِ مَأْمُوْمًا لِلَّهِ تَعَالَى
        </div>
        <p class="text-xs italic text-on-surface-variant">"Aku salat sunah gerhana matahari dua rekaat sebagai makmum karena Allah taala"</p>
    </div>

    <div class="text-sm text-on-surface-variant">
        <p class="font-bold text-on-surface mb-2">Panduan Rakaat (Sangat Unik):</p>
        <ul class="list-decimal ml-5 space-y-1">
            <li>Niat & Takbiratul Ihram</li>
            <li>Membaca Al-Fatihah & Surah panjang secara nyaring</li>
            <li><strong>Ruku' pertama</strong></li>
            <li>Bangkit (I'tidal), tapi <strong>tidak sujud</strong>, melainkan baca Al-Fatihah & Surah lagi!</li>
            <li><strong>Ruku' kedua</strong></li>
            <li>I'tidal sesungguhnya</li>
            <li>Sujud dua kali</li>
            <li>Bangkit ke Rakaat 2 (lakukan hal yang sama persis: 2 kali ruku')</li>
            <li>Salam, dilanjutkan mendengarkan Khutbah Gerhana.</li>
        </ul>
    </div>
</div>

<!-- 2. SALAT ISTISKA -->
<h3 class="font-headline text-2xl font-bold text-secondary mt-12 mb-6 flex items-center">
    <span class="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center mr-4 shrink-0">
        <span class="material-symbols-outlined text-[24px]">rainy</span>
    </span>
    2. Salat Istiska (Meminta Hujan)
</h3>
<div class="bg-surface-container-low p-8 rounded-[2rem] mb-12 border border-outline-variant/20 shadow-sm">
    <p class="text-on-surface-variant text-sm mb-4 leading-relaxed">
        Berasal dari kata <em>Al-Istisqa</em>. Digelar ketika krisis kekeringan, kemarau panjang, kebakaran hutan, hingga polusi asap akibat kemarau. Hukumnya <strong>Sunah Muakkad</strong>.
    </p>

    <div class="bg-white p-5 rounded-2xl shadow-sm border border-outline-variant/10 mb-6">
        <h4 class="font-bold text-sm text-secondary mb-3"><span class="material-symbols-outlined text-[16px] align-middle mr-1">history_edu</span> Ritual Pra-Salat:</h4>
        <ul class="text-xs text-on-surface-variant space-y-2">
            <li>💧 Memperbanyak bertaubat dan ampunan dosa (istigfar) karena bencana berkaitan dengan dosa eksploitasi alam.</li>
            <li>💧 Memperbanyak sedekah.</li>
            <li>💧 <strong>Puasa sunah 4 hari berturut-turut</strong> (3 hari sebelum pelaksaan, dan 1 hari pas hari H).</li>
            <li>💧 Datang ke lapangan mengenakan pakaian bersahaja/sederhana, bukan pakaian mewah seperti salat Id.</li>
        </ul>
    </div>

    <div class="text-sm text-on-surface-variant">
        <p class="font-bold text-on-surface mb-2">Panduan Tata Cara:</p>
        <ul class="list-decimal ml-5 space-y-1">
            <li>Imam menyeru tanpa azan/iqamah: <em>"as-salatu jami'ah"</em></li>
            <li>Salat 2 Rakaat biasa di lapangan terbuka.</li>
            <li>Pasca salat, dilanjut Khutbah Istiska. Dibuka dengan istigfar (9x di awal khutbah pertama, 7x di awal khutbah kedua).</li>
        </ul>
    </div>
</div>

<!-- 3. SALAT JENAZAH -->
<h3 class="font-headline text-2xl font-bold text-tertiary mt-12 mb-6 flex items-center border-t border-outline-variant/20 pt-10">
    <span class="w-10 h-10 rounded-xl bg-tertiary/10 flex items-center justify-center mr-4 shrink-0">
        <span class="material-symbols-outlined text-[24px]">church</span>
    </span>
    3. Salat Jenazah
</h3>
<div class="grid md:grid-cols-2 gap-8 mb-10">
    <div>
        <p class="text-sm text-on-surface-variant leading-relaxed mb-4">
            Ini adalah bentuk dedikasi umat Islam terhadap saudaranya yang wafat. Hukum mengurus jenazah adalah <strong>Fardu Kifayah</strong> (kewajiban komunal, gugur dosanya jika sudah ada sebagian orang yang mengerjakan).
        </p>
        <div class="bg-tertiary/10 p-5 rounded-2xl border border-tertiary/20">
            <h4 class="font-bold text-tertiary text-sm mb-3">4 Paket Kewajiban Utama:</h4>
            <div class="flex flex-wrap gap-2 text-xs font-bold">
                <span class="bg-white px-3 py-1.5 rounded-lg shadow-sm">1. Memandikan</span>
                <span class="bg-white px-3 py-1.5 rounded-lg shadow-sm">2. Mengafani</span>
                <span class="bg-white px-3 py-1.5 rounded-lg shadow-sm text-tertiary">3. Menyalatkan</span>
                <span class="bg-white px-3 py-1.5 rounded-lg shadow-sm">4. Menguburkan</span>
            </div>
        </div>
    </div>
    
    <div class="bg-surface-container p-6 rounded-[2rem] border border-outline-variant/10">
        <h4 class="font-bold text-sm mb-3 text-on-surface">Format Niat Fleksibel</h4>
        <p class="text-xs text-on-surface-variant leading-relaxed text-justify">
            Niat salat jenazah dilafalkan tanpa ruku' maupun sujud. Bacaan niatnya harus memperhatikan detail secara ketat: Apakah jenazahnya laki-laki/perempuan? Jamaak/Tunggal? Hadir di depan mata atau Gaib (salat jarak jauh)? Serta berposisi sebagai Imam/Makmum. Salat dilakukan khusus berdiri dengan 4 kali takbir.
        </p>
    </div>
</div>
`;

// Fungsi Penggantian String
function updateBab(babId, judul, konten) {
    const babStr = `"id": "${babId}",
        "kelas": 8,
        "semester": "Ganjil",
        "bab": "${babId.includes('bab2') ? 'Bab 2' : 'Bab 3'}",
        "judul": "${judul}",
        "waktuBumper": "${babId.includes('bab2') ? '13' : '15'} Menit Baca",
        "gambar": "images/islamic_calligraphy.png",
        "konten": \`
${konten.replace(/`/g, '\\`')}
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
            
            content = before + babStr + '\n    }, {\n        ' + after;
        } else {
            let endBracketIndex = content.lastIndexOf(']');
            if (endBracketIndex !== -1) {
                let after = content.substring(endBracketIndex);
                content = before + babStr + '\n    }\n' + after;
            }
        }
    }
}

// 1. Jalankan update untuk Bab 2 Kelas 7-9-9 Ganjil
updateBab('kls8-smtganjil-bab2', "Meyakini Kitab-Kitab Allah: Menjadi Generasi Pecinta Al-Qur\\'an yang Toleran", bab2Konten);

// 2. Jalankan update untuk Bab 3 Kelas 7-9-9 Ganjil
updateBab('kls8-smtganjil-bab3', "Ketentuan Salat Sunah Berjamaah: Gerhana, Istiska, dan Jenazah", bab3Konten);

// Simpan File
fs.writeFileSync('js/materi.js', content, 'utf8');
console.log('Success kls8 ganjil bab 2 and bab 3 string replacement full');

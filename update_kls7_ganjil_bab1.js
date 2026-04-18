const fs = require('fs');

let content = fs.readFileSync('js/materi.js', 'utf8');

const bab1Konten = `
<p class="text-on-surface-variant leading-relaxed text-lg mb-8">
    Teman-teman, dalam hidup ini kita butuh banget yang namanya panduan agar tidak salah arah. Nah, sebagai seorang muslim, Allah Swt. sudah memberikan kita dua "Buku Panduan" utama, yaitu <strong>Al-Qur'an</strong> dan <strong>Sunah (Hadis)</strong>.
</p>

<!-- 1. Definisi -->
<div class="grid md:grid-cols-2 gap-6 mb-12">
    <div class="bg-surface-container-low p-8 rounded-[2rem] border-t-4 border-primary shadow-sm hover:shadow-lg transition-all">
        <h4 class="font-bold text-xl mb-4 text-primary flex items-center"><span class="material-symbols-outlined mr-2">menu_book</span> Al-Qur'an</h4>
        <p class="text-sm text-on-surface-variant leading-relaxed">
            Wahyu mutlak riwayat malaikat Jibril kepada Nabi Muhammad saw. Berisi petunjuk universal, penjelas, dan pembeda yang benar dan yang salah. Membacanya saja bernilai ibadah yang membuahkan pahala. Ini adalah pedoman #1 kita.
        </p>
    </div>
    <div class="bg-surface-container-low p-8 rounded-[2rem] border-t-4 border-secondary shadow-sm hover:shadow-lg transition-all">
        <h4 class="font-bold text-xl mb-4 text-secondary flex items-center"><span class="material-symbols-outlined mr-2">record_voice_over</span> Sunah (Hadis)</h4>
        <p class="text-sm text-on-surface-variant leading-relaxed">
            Segala perilaku otentik dari Nabi Muhammad saw., baik berupa perkataan (Qaul), perbuatan (Fi'il), maupun ketetapan persetujuannya (Taqrir). Ini adalah sumber hukum #2 setelah Al-Qur'an.
        </p>
    </div>
</div>

<!-- 2. Fungsi Hadis terhadap Al-Qur'an -->
<h3 class="font-headline text-2xl font-bold text-primary mt-12 mb-6">4 Fungsi Penjelasan Hadis</h3>
<p class="text-sm text-on-surface-variant mb-8 max-w-3xl">Al-Qur'an berisi pesan yang sangat universal (umum). Maka, Hadislah yang datang sebagai "Buku Manual Detail"-nya dengan 4 kegunaan utama:</p>

<div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
    <div class="bg-white p-6 rounded-2xl border border-outline-variant/30 shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
        <span class="bg-primary/10 text-primary text-xs font-bold px-3 py-1.5 rounded-lg inline-block mb-3">Bayan at-Taqrir</span>
        <h5 class="font-bold text-md mb-2">Memperkuat</h5>
        <p class="text-xs text-on-surface-variant leading-relaxed">Menegaskan kembali suatu hukum yang sebenarnya sudah ada sangat jelas di dalam Al-Qur'an.</p>
    </div>
    <div class="bg-white p-6 rounded-2xl border border-outline-variant/30 shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
        <span class="bg-secondary/10 text-secondary text-xs font-bold px-3 py-1.5 rounded-lg inline-block mb-3">Bayan at-Tafsir</span>
        <h5 class="font-bold text-md mb-2">Menjelaskan Detail</h5>
        <p class="text-xs text-on-surface-variant leading-relaxed">Memberikan rincian teknis pada ayat yang masih umum. (Contoh: Al-Qur'an menyuruh salat, sementara Hadis mengajarkan teknis gerakannya).</p>
    </div>
    <div class="bg-white p-6 rounded-2xl border border-outline-variant/30 shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
        <span class="bg-tertiary/10 text-tertiary text-xs font-bold px-3 py-1.5 rounded-lg inline-block mb-3">Bayan at-Tasyri'</span>
        <h5 class="font-bold text-md mb-2">Menetapkan Hukum Baru</h5>
        <p class="text-xs text-on-surface-variant leading-relaxed">Menyusun regulasi hukum baru yang belum dibahas spesifik sama sekali di Al-Qur'an. (Contoh: wajibnya Zakat Fitrah).</p>
    </div>
    <div class="bg-white p-6 rounded-2xl border border-outline-variant/30 shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
        <span class="bg-error/10 text-error text-xs font-bold px-3 py-1.5 rounded-lg inline-block mb-3">Bayan an-Nasakh</span>
        <h5 class="font-bold text-md mb-2">Merevisi / Menghapus</h5>
        <p class="text-xs text-on-surface-variant leading-relaxed">Mengganti atau membatalkan ketentuan syariat lama dengan syariat baru yang terbukti lebih relevan dan membawa kebaikan.</p>
    </div>
</div>

<!-- 3. Tajwid -->
<h3 class="font-headline text-2xl font-bold text-primary mt-12 mb-6 flex items-center">
    <span class="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mr-4 shrink-0">
        <span class="material-symbols-outlined text-[24px]">spellcheck</span>
    </span>
    Ilmu Tajwid: Alif Lam (ال)
</h3>
<div class="flex flex-col md:flex-row gap-6 mb-16">
    <div class="bg-surface-container-low p-8 rounded-3xl flex-1 border-l-8 border-primary relative overflow-hidden">
        <span class="material-symbols-outlined absolute -top-4 -right-4 text-9xl text-primary/5">light_mode</span>
        <h4 class="font-bold text-xl mb-3 text-primary">Alif Lam Syamsiyyah ☀️</h4>
        <p class="text-sm text-on-surface-variant mb-4 leading-relaxed">
            Huruf "Al"-nya <strong>TIDAK DIBACA</strong>, suaranya di-Idgham-kan atau dilebur masuk menabrak tajam huruf setelahnya. Ciri utamanya: huruf persis setelah "Al" memiliki tanda tasydid (ّ).
        </p>
        <div class="text-xs font-quran bg-white p-3 rounded-lg max-w-max border border-outline-variant/20 shadow-sm relative z-10">
            Ada 14 Huruf: ت ث د ذ ر ز س ش ص ض ط ظ ل ن
        </div>
    </div>
    <div class="bg-surface-container-low p-8 rounded-3xl flex-1 border-l-8 border-secondary relative overflow-hidden">
        <span class="material-symbols-outlined absolute -top-4 -right-4 text-9xl text-secondary/5">dark_mode</span>
        <h4 class="font-bold text-xl mb-3 text-secondary">Alif Lam Qamariyyah 🌑</h4>
        <p class="text-sm text-on-surface-variant mb-4 leading-relaxed">
            Huruf "Al"-nya <strong>DIBACA JELAS</strong> (Izhar) alias mati, tidak melebur sama sekali ke dalam huruf setelahnya. Bunyi "L" terdengar nyaring.
        </p>
        <div class="text-xs font-quran bg-white p-3 rounded-lg max-w-max border border-outline-variant/20 shadow-sm relative z-10">
            Ada 14 Huruf: ا ب غ ح ج ك و خ ف ع ق ي م ه
        </div>
    </div>
</div>

<!-- 4. Dalil -->
<h3 class="font-headline text-2xl font-bold text-primary mt-12 mb-6 text-center">Dalil Induk Sikap Taat Mutlak</h3>
<div class="grid md:grid-cols-2 gap-8 mb-16">
    <!-- Nisa 59 -->
    <div class="bg-white p-8 rounded-[2rem] border border-outline-variant/20 shadow-sm relative">
        <span class="bg-primary text-white text-[10px] font-bold px-3 py-1 rounded-full absolute -top-3 right-8 tracking-widest">Q.S. AN-NISA: 59</span>
        <div class="text-right font-quran text-2xl leading-loose mb-6 text-on-surface" dir="rtl">يَأَيُّهَا الَّذِينَ آمَنُوا أَطِيعُوا اللَّهَ وَأَطِيعُوا الرَّسُوْلَ وَأُولِي الْأَمْرِ مِنْكُمْ...</div>
        <p class="text-sm italic text-on-surface-variant border-t border-outline-variant/10 pt-4">
            "Wahai orang-orang yang beriman! Taatilah Allah dan taatilah Rasul, dan Ulil Amri (Pemimpin) di antara kamu. Jika ada beda pendapat, kembalikan pada Al-Qur'an & Sunah..."
        </p>
    </div>
    <!-- Nahl 64 -->
    <div class="bg-white p-8 rounded-[2rem] border border-outline-variant/20 shadow-sm relative">
        <span class="bg-secondary text-white text-[10px] font-bold px-3 py-1 rounded-full absolute -top-3 right-8 tracking-widest">Q.S. AN-NAHL: 64</span>
        <div class="text-right font-quran text-2xl leading-[2.5] mb-6 text-on-surface" dir="rtl">وَمَا أَنْزَلْنَا عَلَيْكَ الْكِتَبَ إِلَّا لِتُبَيِّنَ لَهُمُ الَّذِي اخْتَلَفُوْا فِيْهِ وَهُدًى وَرَحْمَةً...</div>
        <p class="text-sm italic text-on-surface-variant border-t border-outline-variant/10 pt-4">
            "Dan Kami tidak menurunkan Kitab ini kepadamu (Muhammad), melainkan agar engkau dapat menjelaskan kepada mereka apa yang mereka perselisihkan, serta jadi petunjuk & rahmat..."
        </p>
    </div>
</div>

<!-- 5. Resolusi -->
<div class="bg-gradient-to-br from-primary to-primary-container p-10 rounded-[3rem] text-white shadow-xl text-center">
    <h4 class="text-2xl font-headline font-bold mb-4">Aksi Nyata Anak SMP Keren!</h4>
    <p class="text-[15px] opacity-90 max-w-2xl mx-auto mb-8 font-medium">Buktikan bahwa kita bisa memegang kemudi era digital dengan mematuhi hal-hal ini:</p>
    <div class="flex flex-wrap justify-center gap-3">
        <span class="px-5 py-2.5 bg-white/10 backdrop-blur-sm border border-white/30 rounded-xl text-sm font-bold flex items-center shadow-sm"><span class="material-symbols-outlined text-[18px] mr-2">auto_stories</span> Rutin Tilawah & Pahami Arti</span>
        <span class="px-5 py-2.5 bg-white/10 backdrop-blur-sm border border-white/30 rounded-xl text-sm font-bold flex items-center shadow-sm"><span class="material-symbols-outlined text-[18px] mr-2">menu_book</span> Sempatkan Baca Buku Hadis</span>
        <span class="px-5 py-2.5 bg-white/10 backdrop-blur-sm border border-white/30 rounded-xl text-sm font-bold flex items-center shadow-sm"><span class="material-symbols-outlined text-[18px] mr-2">help_center</span> Bertanya Aktif ke Guru Agama</span>
        <span class="px-5 py-2.5 bg-white/10 backdrop-blur-sm border border-white/30 rounded-xl text-sm font-bold flex items-center shadow-sm"><span class="material-symbols-outlined text-[18px] mr-2">diversity_1</span> Taati Pemimpin yang Adil Mutlak</span>
    </div>
</div>
`;

// String Replacement
const formatStr = `"id": "kls7-smtganjil-bab1",
        "kelas": 7,
        "semester": "Ganjil",
        "bab": "Bab 1",
        "judul": "Al-Qur'an dan Sunah Sebagai Pedoman Hidup",
        "waktuBumper": "14 Menit Baca",
        "gambar": "images/islamic_calligraphy.png",
        "konten": \`
${bab1Konten.replace(/`/g, '\\`')}
        \``;

const startPhrase = `"id": "kls7-smtganjil-bab1",`;
const nextPhraseRegex = /"id":\s*"[^"]+",/; 

let startIndex = content.indexOf(startPhrase);
if (startIndex !== -1) {
    let before = content.substring(0, startIndex);
    
    let afterStart = content.substring(startIndex + startPhrase.length);
    let match = afterStart.match(nextPhraseRegex);
    
    if (match) {
        let nextIndex = startIndex + startPhrase.length + match.index;
        let after = content.substring(nextIndex);
        
        let newContent = before + formatStr + '\n    }, {\n        ' + after;
        
        fs.writeFileSync('js/materi.js', newContent, 'utf8');
        console.log('Success kls7 ganjil bab 1 string replacement');
    } else {
        let endBracketIndex = content.lastIndexOf(']');
        if (endBracketIndex !== -1) {
            let after = content.substring(endBracketIndex);
            let newContent = before + formatStr + '\n    }\n' + after;
            fs.writeFileSync('js/materi.js', newContent, 'utf8');
            console.log('Success kls7 ganjil bab 1 (last item fallback) string replacement');
        } else {
            console.error('Failed to find closing array bracket');
        }
    }
} else {
    console.error('Failed to find start index');
}

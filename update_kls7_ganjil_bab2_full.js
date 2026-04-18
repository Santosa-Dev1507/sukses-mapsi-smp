const fs = require('fs');

let content = fs.readFileSync('js/materi.js', 'utf8');

const bab2KontenLengkap = `
<p class="text-on-surface-variant leading-relaxed text-lg mb-8">
    Bab ini menuntun kita untuk mengenal Allah Swt. lebih dekat melalui nama-nama-Nya yang terindah, sekaligus mempraktikkan sifat-sifat agung tersebut dalam pola perilaku kita sehari-hari, terutama di era bebasnya arus informasi.
</p>

<!-- 1. Makna Al-Asma' al-Husna -->
<h3 class="font-headline text-2xl font-bold text-primary mb-6">1. Konsep Al-Asma' al-Husna</h3>
<div class="bg-surface-container-low p-8 rounded-[2rem] border border-outline-variant/20 shadow-sm mb-12 flex flex-col md:flex-row gap-8 items-center relative overflow-hidden">
    <span class="material-symbols-outlined absolute -right-6 -bottom-6 text-[150px] text-primary/5 rotate-12">mosque</span>
    <div class="w-28 h-28 md:w-32 md:h-32 rounded-full border-4 border-primary/20 flex items-center justify-center bg-primary/5 shrink-0 z-10 bg-white">
        <span class="font-quran text-5xl text-primary font-bold pt-2">٩٩</span>
    </div>
    <div class="z-10 text-justify">
        <p class="text-sm text-on-surface-variant leading-relaxed mb-4 font-medium">
            Secara bahasa, <em>Al-Asmaa'</em> artinya "nama-nama", dan <em>Al-Husna</em> artinya "yang terbaik atau terindah". Allah memiliki <strong>99 nama mutlak</strong> yang mencerminkan kesempurnaan sifat-sifat-Nya. Memahami nama-nama ini adalah kunci utama untuk membukakan hijab peningkatan derajat keimanan seseorang.
        </p>
        <div class="bg-primary/10 p-5 rounded-2xl border-l-4 border-primary text-sm flex items-start gap-4">
            <span class="material-symbols-outlined text-primary text-2xl mt-1">volunteer_activism</span>
            <p class="italic text-primary-on text-left">"Sesungguhnya Allah Swt. mempunyai 99 nama (seratus kurang satu). Barang siapa yang sanggup menghafalkannya (dan mengamalkan nilainya), maka ia akan <strong>masuk surga</strong>." <br><span class="font-bold text-xs mt-2 block not-italic">— (H.R. al-Bukhari)</span></p>
        </div>
    </div>
</div>

<!-- 2. Beberapa Asmaul Husna -->
<h3 class="font-headline text-2xl font-bold text-secondary mt-12 mb-8">2. Meneladani 4 Sifat Spesifik</h3>

<div class="space-y-8 mb-16">
    <!-- Al-'Alim -->
    <div class="bg-white p-8 rounded-[2.5rem] border border-outline-variant/30 shadow-sm relative overflow-hidden group hover:shadow-md transition-shadow">
        <span class="font-quran absolute -top-10 -right-4 text-[180px] text-primary/5 group-hover:text-primary/10 transition-colors pointer-events-none">العليم</span>
        
        <div class="flex items-center gap-4 mb-6 relative z-10">
            <div class="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl shadow-md">1</div>
            <h4 class="font-bold text-3xl text-primary font-headline tracking-wide">Al-'Alim</h4>
        </div>
        
        <div class="relative z-10 grid md:grid-cols-5 gap-8">
            <div class="md:col-span-3">
                <span class="text-[11px] font-bold text-primary uppercase tracking-widest mb-3 block bg-primary/10 w-max px-3 py-1 rounded-md">Makna Sifat (Maha Mengetahui)</span>
                <p class="text-[15px] text-on-surface-variant leading-relaxed text-justify">
                    Pengetahuan Allah itu absolut tanpa tepi. Ia mengetahui segala yang tampak maupun tersembunyi, masa lalu, sekarang, hingga sehelai daun kering yang gugur di kegelapan malam <strong>(Q.S. al-An'am: 59)</strong>. Tak ada se-zarrah pun di jagat raya yang luput dari radar rekaman-Nya.
                </p>
            </div>
            <div class="md:col-span-2 bg-surface-container p-5 rounded-2xl border border-outline-variant/20">
                <span class="text-[11px] font-bold text-on-surface uppercase tracking-widest mb-3 block">Penerapan Praktis</span>
                <ul class="text-sm space-y-3 font-medium text-on-surface-variant">
                    <li class="flex items-start gap-3"><span class="material-symbols-outlined text-primary text-[18px]">school</span> Belajar tiada henti (Long-life learning).</li>
                    <li class="flex items-start gap-3"><span class="material-symbols-outlined text-primary text-[18px]">workspace_premium</span> Percaya diri memecahkan soal/masalah.</li>
                    <li class="flex items-start gap-3"><span class="material-symbols-outlined text-primary text-[18px]">visibility</span> Mawas diri dari maksiat sekecil apapun.</li>
                </ul>
            </div>
        </div>
    </div>

    <!-- Al-Khabir -->
    <div class="bg-white p-8 rounded-[2.5rem] border border-outline-variant/30 shadow-sm relative overflow-hidden group hover:shadow-md transition-shadow">
        <span class="font-quran absolute -top-10 -right-4 text-[180px] text-secondary/5 group-hover:text-secondary/10 transition-colors pointer-events-none">الخبير</span>
        
        <div class="flex items-center gap-4 mb-6 relative z-10">
            <div class="w-12 h-12 bg-secondary text-white rounded-full flex items-center justify-center font-bold text-xl shadow-md">2</div>
            <h4 class="font-bold text-3xl text-secondary font-headline tracking-wide">Al-Khabir</h4>
        </div>

        <div class="relative z-10 grid md:grid-cols-5 gap-8">
            <div class="md:col-span-3">
                <span class="text-[11px] font-bold text-secondary uppercase tracking-widest mb-3 block bg-secondary/10 w-max px-3 py-1 rounded-md">Makna Sifat (Maha Memberitahu / Teliti)</span>
                <p class="text-[15px] text-on-surface-variant leading-relaxed text-justify">
                    Allah memberikan informasi krusial dan peringatan detail tentang kisah masa lalu, hari kiamat, hingga apa yang tersirat di sudut hati manusia yang paling gelap sekalipun. Sang Pencipta Maha Halus dan Maha Teliti atas pergerakan ciptaan-Nya <strong>(Q.S. al-Mulk: 14)</strong>.
                </p>
            </div>
            <div class="md:col-span-2 bg-surface-container p-5 rounded-2xl border border-outline-variant/20">
                <span class="text-[11px] font-bold text-on-surface uppercase tracking-widest mb-3 block">Penerapan Praktis</span>
                <ul class="text-sm space-y-3 font-medium text-on-surface-variant">
                    <li class="flex items-start gap-3"><span class="material-symbols-outlined text-secondary text-[18px]">fact_check</span> Teliti & saring informasi (Anti Hoaks).</li>
                    <li class="flex items-start gap-3"><span class="material-symbols-outlined text-secondary text-[18px]">share</span> Ikhlas berbagi ilmu wawasan di Sosmed.</li>
                    <li class="flex items-start gap-3"><span class="material-symbols-outlined text-secondary text-[18px]">psychology</span> Bersikap <em>Muraqabah</em> (sadar CCTV Allah).</li>
                </ul>
            </div>
        </div>
    </div>

    <!-- Al-Sami' -->
    <div class="bg-white p-8 rounded-[2.5rem] border border-outline-variant/30 shadow-sm relative overflow-hidden group hover:shadow-md transition-shadow">
        <span class="font-quran absolute -top-10 -right-4 text-[180px] text-tertiary/5 group-hover:text-tertiary/10 transition-colors pointer-events-none">السميع</span>
        
        <div class="flex items-center gap-4 mb-6 relative z-10">
            <div class="w-12 h-12 bg-tertiary text-white rounded-full flex items-center justify-center font-bold text-xl shadow-md">3</div>
            <h4 class="font-bold text-3xl text-tertiary font-headline tracking-wide">Al-Sami'</h4>
        </div>

        <div class="relative z-10 grid md:grid-cols-5 gap-8">
            <div class="md:col-span-3">
                <span class="text-[11px] font-bold text-tertiary uppercase tracking-widest mb-3 block bg-tertiary/10 w-max px-3 py-1 rounded-md">Makna Sifat (Maha Mendengar)</span>
                <p class="text-[15px] text-on-surface-variant leading-relaxed text-justify">
                    Pendengaran Allah tidak dibatasi jarak dan ruang hampa. Suara sekecil apapun, bahkan gesekan langkah semut hitam di atas batu hitam pada malam yang kelam, terdengar Maha Jelas oleh-Nya <strong>(Q.S. al-Baqarah: 137)</strong>. Tak ada bisikan rahasia konspirasi yang luput.
                </p>
            </div>
            <div class="md:col-span-2 bg-surface-container p-5 rounded-2xl border border-outline-variant/20">
                <span class="text-[11px] font-bold text-on-surface uppercase tracking-widest mb-3 block">Penerapan Praktis</span>
                <ul class="text-sm space-y-3 font-medium text-on-surface-variant">
                    <li class="flex items-start gap-3"><span class="material-symbols-outlined text-tertiary text-[18px]">hearing</span> Menjadi pendengar setia (bagi teman/curhat).</li>
                    <li class="flex items-start gap-3"><span class="material-symbols-outlined text-tertiary text-[18px]">family_restroom</span> Mendengarkan nasihat Orang Tua & Guru.</li>
                    <li class="flex items-start gap-3"><span class="material-symbols-outlined text-tertiary text-[18px]">record_voice_over</span> Menyampaikan beda pendapat rasional & santun.</li>
                </ul>
            </div>
        </div>
    </div>

    <!-- Al-Basir -->
    <div class="bg-white p-8 rounded-[2.5rem] border border-outline-variant/30 shadow-sm relative overflow-hidden group hover:shadow-md transition-shadow">
        <span class="font-quran absolute -top-10 -right-4 text-[180px] text-error/5 group-hover:text-error/10 transition-colors pointer-events-none">البصير</span>
        
        <div class="flex items-center gap-4 mb-6 relative z-10">
            <div class="w-12 h-12 bg-error text-white rounded-full flex items-center justify-center font-bold text-xl shadow-md">4</div>
            <h4 class="font-bold text-3xl text-error font-headline tracking-wide">Al-Basir</h4>
        </div>

        <div class="relative z-10 grid md:grid-cols-5 gap-8">
            <div class="md:col-span-3">
                <span class="text-[11px] font-bold text-error uppercase tracking-widest mb-3 block bg-error/10 w-max px-3 py-1 rounded-md">Makna Sifat (Maha Melihat)</span>
                <p class="text-[15px] text-on-surface-variant leading-relaxed text-justify">
                    Penglihatan Allah menjangkau semua dimensi, bahkan seluk beluk yang tak kasat mata melalui mikroskop terkuat sekalipun. Seluruh aktivitas galaksi dipantau <em>real-time</em> <strong>(Q.S. al-Isra': 1)</strong> tanpa jeda satu detik pun.
                </p>
            </div>
            <div class="md:col-span-2 bg-surface-container p-5 rounded-2xl border border-outline-variant/20">
                <span class="text-[11px] font-bold text-on-surface uppercase tracking-widest mb-3 block">Penerapan Praktis</span>
                <ul class="text-sm space-y-3 font-medium text-on-surface-variant">
                    <li class="flex items-start gap-3"><span class="material-symbols-outlined text-error text-[18px]">troubleshoot</span> Teliti dalam bekerja dan mengerjakan ujian.</li>
                    <li class="flex items-start gap-3"><span class="material-symbols-outlined text-error text-[18px]">self_improvement</span> Instrospeksi diri (Menilik kekurangan pribadi).</li>
                    <li class="flex items-start gap-3"><span class="material-symbols-outlined text-error text-[18px]">rocket_launch</span> Visioner (berpandangan jauh merancang masa depan).</li>
                </ul>
            </div>
        </div>
    </div>
</div>

<!-- 3. Mewujudkan Kebaikan Hidup -->
<h3 class="font-headline text-2xl font-bold text-primary mt-12 mb-6">3. Kunci Mewujudkan Output Mulia</h3>
<div class="bg-gradient-to-br from-primary to-primary-container p-8 md:p-12 rounded-[3rem] text-white shadow-xl relative overflow-hidden">
    <span class="material-symbols-outlined absolute -top-8 -right-8 text-[150px] text-white/5 rotate-12">volunteer_activism</span>
    <h4 class="font-bold text-2xl mb-8 relative z-10 text-center border-b border-white/20 pb-4">Checklist Pembiasaan Generasi Emas:</h4>
    
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4 relative z-10 text-[13px] font-medium">
        <label class="flex items-start gap-3 bg-white/10 p-4 rounded-2xl backdrop-blur-sm border border-white/20 cursor-default hover:bg-white/20 transition-colors">
            <input type="checkbox" checked readonly class="mt-1 w-4 h-4 rounded text-primary pointer-events-none accent-secondary">
            <span>Tekun belajar menguasai ilmu agama maupun sains modern.</span>
        </label>
        <label class="flex items-start gap-3 bg-white/10 p-4 rounded-2xl backdrop-blur-sm border border-white/20 cursor-default hover:bg-white/20 transition-colors">
            <input type="checkbox" checked readonly class="mt-1 w-4 h-4 rounded text-primary pointer-events-none accent-secondary">
            <span>Berperilaku <strong>jujur</strong> absolut 100% pada saat ulangan maupun di rumah.</span>
        </label>
        <label class="flex items-start gap-3 bg-white/10 p-4 rounded-2xl backdrop-blur-sm border border-white/20 cursor-default hover:bg-white/20 transition-colors">
            <input type="checkbox" checked readonly class="mt-1 w-4 h-4 rounded text-primary pointer-events-none accent-secondary">
            <span>Super cermat dan teliti dalam menjalani instruksi harian.</span>
        </label>
        <label class="flex items-start gap-3 bg-white/10 p-4 rounded-2xl backdrop-blur-sm border border-white/20 cursor-default hover:bg-white/20 transition-colors">
            <input type="checkbox" checked readonly class="mt-1 w-4 h-4 rounded text-primary pointer-events-none accent-secondary">
            <span>Menjadi wadah telinga yang baik bagi orang yang membutuhkan curhat didengar.</span>
        </label>
        <label class="flex items-start gap-3 bg-white/10 p-4 rounded-2xl backdrop-blur-sm border border-white/20 cursor-default hover:bg-white/20 transition-colors">
            <input type="checkbox" checked readonly class="mt-1 w-4 h-4 rounded text-primary pointer-events-none accent-secondary">
            <span>Tunduk dan menginternalisasi nasehat mutiara dari Bapak & Ibu Guru.</span>
        </label>
        <label class="flex items-start gap-3 bg-white/10 p-4 rounded-2xl backdrop-blur-sm border border-white/20 cursor-default hover:bg-white/20 transition-colors">
            <input type="checkbox" checked readonly class="mt-1 w-4 h-4 rounded text-primary pointer-events-none accent-secondary">
            <span>Punya nyali ambisi cita-cita tinggi serta langkah strategis menggapainya.</span>
        </label>
    </div>
    
    <div class="mt-10 bg-secondary p-6 rounded-3xl text-center shadow-[0_10px_30px_rgba(0,0,0,0.15)] relative z-10 border-2 border-white/20">
        <span class="material-symbols-outlined text-[40px] mb-2 text-secondary-on block">handshake</span>
        <p class="font-bold text-xl text-secondary-on leading-relaxed font-headline">
            "Tangan di atas JAUH LEBIH BAIK daripada tangan di bawah."<br>
            <span class="text-sm font-normal opacity-90">(Implementasikan Asmaul Husna dengan menjadi donatur manfaat bagi sekelilingmu!)</span>
        </p>
    </div>
</div>
`;

// String Replacement
const formatStr = `"id": "kls7-smtganjil-bab2",
        "kelas": 7,
        "semester": "Ganjil",
        "bab": "Bab 2",
        "judul": "Meneladan Nama dan Sifat Allah (Al-Asma' al-Husna)",
        "waktuBumper": "18 Menit Baca",
        "gambar": "images/islamic_calligraphy.png",
        "konten": \`
${bab2KontenLengkap.replace(/`/g, '\\`')}
        \``;

const startPhrase = `"id": "kls7-smtganjil-bab2",`;
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
        console.log('Success kls7 ganjil bab 2 full string substitution');
    } else {
        let endBracketIndex = content.lastIndexOf(']');
        if (endBracketIndex !== -1) {
            let after = content.substring(endBracketIndex);
            let newContent = before + formatStr + '\n    }\n' + after;
            fs.writeFileSync('js/materi.js', newContent, 'utf8');
            console.log('Success kls7 ganjil bab 2 full (last item fallback) string substitution');
        }
    }
}

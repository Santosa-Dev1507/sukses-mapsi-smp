const fs = require('fs');

let content = fs.readFileSync('js/materi.js', 'utf8');

// ==========================================
// KONTEN BAB 3 (KELAS 7 SMT GANJIL BAB 3)
// ==========================================
const bab3Konten = `
<p class="text-on-surface-variant leading-relaxed text-lg mb-8">
    Bab ini mengupas rahasia besar di balik ritus ibadah harian kita. Bagaimana Salat dan Zikir bukan sekadar gerakan rutinitas fisik hampa, melainkan sistem keamanan spiritual tercanggih untuk mencegah manusia dari perilaku brutal.
</p>

<!-- 1. Makna -->
<div class="grid md:grid-cols-2 gap-6 mb-12">
    <div class="bg-surface-container-low p-8 rounded-[2rem] border-t-8 border-primary shadow-sm hover:-translate-y-1 transition-transform">
        <h4 class="font-bold text-2xl mb-4 text-primary flex items-center font-headline"><span class="material-symbols-outlined mr-3 text-3xl">mosque</span> Esensi Salat</h4>
        <p class="text-sm text-on-surface-variant leading-relaxed text-justify">Lebih dari sekadar memacu otot dan keringat fisik. Ini adalah audiensi (pertemuan) batin tertinggi kasta seorang hamba yang berdialog rindu, melayangkan pujian, dan negosiasi permohonan kepada Sang Pencipta secara <strong>Khusyuk</strong> (fokus penuh) dan <strong>Tumakninah</strong> (jeda gerakan rileks tenang).</p>
    </div>
    <div class="bg-surface-container-low p-8 rounded-[2rem] border-t-8 border-secondary shadow-sm hover:-translate-y-1 transition-transform">
        <h4 class="font-bold text-2xl mb-4 text-secondary flex items-center font-headline"><span class="material-symbols-outlined mr-3 text-3xl">wifi_tethering</span> Esensi Zikir</h4>
        <p class="text-sm text-on-surface-variant leading-relaxed text-justify">Radar pendeteksi spiritual yang menjaga hatimu tetap <strong>Online</strong> mengingat Allah. Melalui resonansi <em>tasbih lisan</em>, <em>tasbih batin</em>, maupun rem panik <em>(aksi)</em> membatalkan niat maksiat. Pemicu utama diri sadar sedang terawasi kamera CCTV Ilahi mutlak.</p>
    </div>
</div>

<!-- 2. Benteng Fahsya & Mungkar -->
<h3 class="font-headline text-2xl font-bold text-primary mt-12 mb-6 text-center">Benteng Anti-Maksiat Bawah Sadar</h3>
<div class="bg-primary/5 p-8 rounded-[3rem] border border-primary/20 mb-12 relative overflow-hidden shadow-sm">
    <span class="material-symbols-outlined absolute -top-8 -left-8 text-[180px] text-primary/5 -rotate-12">shield_locked</span>
    <div class="text-right font-quran text-[26px] leading-loose mb-6 text-on-surface relative z-10" dir="rtl">...اِنَّ الصَّلٰوةَ تَنۡهٰى عَنِ الۡفَحۡشَآءِ وَالۡمُنۡكَرِؕ وَلَذِكۡرُ اللّٰهِ اَكۡبَرُ ؕ</div>
    <div class="font-body text-[15px] pt-6 border-t border-outline-variant/20 relative z-10">
        <span class="font-bold block mb-2 italic">Terjemahan Firman Q.S. al-'Ankabut: 45:</span>
        "...Sesungguhnya salat itu mendobrak dan mencegah dari <strong>(perbuatan) keji</strong> <span class="bg-error/10 text-error px-1.5 py-0.5 text-[10px] rounded-lg border border-error/20 inline-block align-middle mx-1 font-bold">Misal: Zina/Suap</span> dan melarang keras kemungkaran bebas. Dan sungguh mengingat Allah (zikir salat) itu bobotnya jauh lebih besar..."
    </div>
</div>

<h4 class="font-bold text-xl mb-6 text-center font-headline"><span class="bg-surface-container px-4 py-2 rounded-xl">7 Cetakan Produk Salat yang Sah:</span></h4>
<div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16 px-2">
    <div class="bg-white p-5 rounded-2xl border border-outline-variant/30 shadow-[0_4px_15px_rgba(0,0,0,0.02)] flex items-start gap-4">
        <div class="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
            <span class="material-symbols-outlined text-primary">schedule</span>
        </div>
        <div>
            <strong class="block text-[15px] text-on-surface mb-1">Disiplin Waktu</strong>
            <span class="text-[13px] text-on-surface-variant leading-relaxed block">Manajemen 5 zona alarm absen presisi.</span>
        </div>
    </div>
    <div class="bg-white p-5 rounded-2xl border border-outline-variant/30 shadow-[0_4px_15px_rgba(0,0,0,0.02)] flex items-start gap-4">
        <div class="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
            <span class="material-symbols-outlined text-primary">clean_hands</span>
        </div>
        <div>
            <strong class="block text-[15px] text-on-surface mb-1">Higienis Suci</strong>
            <span class="text-[13px] text-on-surface-variant leading-relaxed block">Wudu membasmi bakteri kotoran fisik pikiran.</span>
        </div>
    </div>
    <div class="bg-white p-5 rounded-2xl border border-outline-variant/30 shadow-[0_4px_15px_rgba(0,0,0,0.02)] flex items-start gap-4">
        <div class="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
            <span class="material-symbols-outlined text-primary">accessibility_new</span>
        </div>
        <div>
            <strong class="block text-[15px] text-on-surface mb-1">Penghancur Ego</strong>
            <span class="text-[13px] text-on-surface-variant leading-relaxed block">Meruntuhkan sombong cium ubin sajadah.</span>
        </div>
    </div>
    <div class="bg-white p-5 rounded-2xl border border-outline-variant/30 shadow-[0_4px_15px_rgba(0,0,0,0.02)] flex items-start gap-4">
        <div class="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
            <span class="material-symbols-outlined text-primary">groups</span>
        </div>
        <div>
            <strong class="block text-[15px] text-on-surface mb-1">Solidaritas Tim</strong>
            <span class="text-[13px] text-on-surface-variant leading-relaxed block">Luruskan shaf buktikan kita manusia rata.</span>
        </div>
    </div>
    <div class="bg-white p-5 rounded-2xl border border-outline-variant/30 shadow-[0_4px_15px_rgba(0,0,0,0.02)] flex items-start gap-4 col-span-1 sm:col-span-2 lg:col-span-2 bg-gradient-to-r from-white to-surface-container-low">
        <div class="w-10 h-10 rounded-xl bg-error/10 flex items-center justify-center shrink-0">
            <span class="material-symbols-outlined text-error">gpp_good</span>
        </div>
        <div class="pr-2">
            <strong class="block text-[15px] text-on-surface mb-1">Benteng Korup Transparan</strong>
            <span class="text-[13px] text-on-surface-variant leading-relaxed block">Malu berbuat bohong/curang ujian (nyontek) karena radar dada kananmu selalu mendeteksi tarikan napas Zikir dari Sang Khalik.</span>
        </div>
    </div>
</div>

<!-- 3. Hikmah -->
<div class="bg-gradient-to-br from-primary to-primary-container p-10 md:px-14 rounded-[3rem] text-white shadow-xl relative overflow-hidden">
    <span class="material-symbols-outlined absolute -bottom-10 -right-4 text-[180px] text-white/5 rotate-12">self_improvement</span>
    <h4 class="text-2xl font-headline font-bold mb-8 border-b border-white/20 pb-4 relative z-10 flex items-center"><span class="material-symbols-outlined mr-3 text-3xl text-secondary-fixed">stars</span> Hikmah Investasi Akhirat</h4>
    <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 relative z-10">
        <div class="bg-white/10 p-5 rounded-2xl backdrop-blur-md border border-white/20 shadow-sm hover:bg-white/20 transition-colors">
            <p class="text-sm font-medium leading-relaxed">🌊 Hatimu dipenuhi relaksasi valium ketenangan anti-stres.</p>
        </div>
        <div class="bg-white/10 p-5 rounded-2xl backdrop-blur-md border border-white/20 shadow-sm hover:bg-white/20 transition-colors">
            <p class="text-sm font-medium leading-relaxed">🛡️ Diselamatkan Tuhan mendadak dari krisis ancaman mati.</p>
        </div>
        <div class="bg-white/10 p-5 rounded-2xl backdrop-blur-md border border-white/20 shadow-sm hover:bg-white/20 transition-colors">
            <p class="text-sm font-medium leading-relaxed">🚿 Rekening list dosamu dirombak <em>Reset</em> putih kembali.</p>
        </div>
        <div class="bg-white/10 p-5 rounded-2xl backdrop-blur-md border border-white/20 shadow-sm hover:bg-white/20 transition-colors">
            <p class="text-sm font-medium leading-relaxed">🌟 Diangkatnya tiket VIP VVIP kemenangan di hari pembalasan.</p>
        </div>
    </div>
</div>
`;

// ==========================================
// KONTEN BAB 4 (KELAS 7 SMT GANJIL BAB 4)
// ==========================================
const bab4Konten = `
<p class="text-on-surface-variant leading-relaxed text-lg mb-8">
    Bab ini menyikapkan bahwa di luar kerangka salat wajib, terdapat tiga buah tombol sujud spesial yang merepresentasikan ketundukan absolut jiwa manusia terhadap dinamika nasib kehidupan <em>Up / Down</em>.
</p>

<!-- 1. Syukur -->
<div class="mb-14 relative group">
    <div class="absolute -left-4 top-10 bottom-6 w-1 bg-primary/20 rounded-full group-hover:bg-primary transition-colors"></div>
    <h3 class="font-headline text-2xl font-bold text-primary mb-5 flex items-center bg-primary/5 w-max pr-6 py-2 rounded-r-full"><span class="material-symbols-outlined mr-3 text-3xl bg-primary text-white w-12 h-12 flex items-center justify-center rounded-full shadow-md">emoji_events</span> 1. Sujud Syukur</h3>
    <div class="bg-surface-container-low p-8 rounded-[2rem] border border-outline-variant/30 shadow-[0_4px_15px_rgba(0,0,0,0.02)] pl-8">
        <p class="text-[15px] text-on-surface-variant mb-6 leading-relaxed bg-surface-container-high p-4 rounded-xl">Spontanitas fisik merayakan datangnya <strong>berita ledakan nikmat positif</strong> (Bapak H.R Abu Bakrah riwayatkan Nabi spontan melantai ketika gembira), atau <strong>berhasil lari terhindar</strong> dari tragedi maut (banjir, kecelakaan).</p>
        
        <div class="grid md:grid-cols-5 gap-8 items-center">
            <div class="md:col-span-2">
                <ul class="text-sm font-medium space-y-3">
                    <li class="flex items-center gap-2"><span class="material-symbols-outlined text-primary text-[18px]">done</span> Syaratnya menghadap kiblat santai.</li>
                    <li class="flex items-center gap-2"><span class="material-symbols-outlined text-primary text-[18px]">done</span> Berdiri niat -> Takbir santai.</li>
                    <li class="flex items-center gap-2"><span class="material-symbols-outlined text-primary text-[18px]">done</span> Sekali nyusruk (sujud) saja.</li>
                    <li class="flex items-center gap-2"><span class="material-symbols-outlined text-primary text-[18px]">done</span> Cukup bangun kembali dan salam penutup.</li>
                </ul>
            </div>
            <div class="md:col-span-3">
                <div class="bg-white p-5 rounded-2xl border border-outline-variant/20 shadow-sm relative overflow-hidden">
                    <span class="bg-primary text-white text-[10px] px-2 py-1 absolute top-0 left-0 rounded-br-lg font-bold">Lafal Doa Saat Suci di Lantai</span>
                    <div class="text-center font-quran text-2xl text-primary mt-6 mb-2 leading-loose" dir="rtl">سُبْحَانَ اللهِ وَالْحَمْدُ لِلَّهِ وَلَا إِلَهَ إِلَّا اللَّهُ وَاللَّهُ أَكْبَرُ</div>
                </div>
            </div>
        </div>
    </div>
</div>

<!-- 2. Sahwi -->
<div class="mb-14 relative group">
    <div class="absolute -left-4 top-10 bottom-6 w-1 bg-secondary/20 rounded-full group-hover:bg-secondary transition-colors"></div>
    <h3 class="font-headline text-2xl font-bold text-secondary mb-5 flex items-center bg-secondary/5 w-max pr-6 py-2 rounded-r-full"><span class="material-symbols-outlined mr-3 text-3xl bg-secondary text-white w-12 h-12 flex items-center justify-center rounded-full shadow-md">psychology_alt</span> 2. Sujud Sahwi</h3>
    <div class="bg-surface-container-low p-8 rounded-[2rem] border border-outline-variant/30 shadow-[0_4px_15px_rgba(0,0,0,0.02)] pl-8">
        <p class="text-[15px] text-on-surface-variant mb-6 leading-relaxed bg-surface-container-high p-4 rounded-xl">Prosedur "Menjahit Lubang Memori". Disyariatkan sewaktu kita ditimpa penyakit nge-<em>blank</em> mendadak dalam salat; Lupa jumlah raka'at, ragu qunut, lupa tahiyat, <em>error</em> susunan rukun. Hukum menambalnya <strong>Sunah</strong>.</p>
        
        <div class="grid md:grid-cols-5 gap-8 items-center">
            <div class="md:col-span-5 flex items-center gap-4 border-b border-outline-variant/20 pb-6 mb-2">
                <div class="bg-error/10 text-error font-bold px-4 py-2 rounded-xl text-[13px] border border-error/20 flex items-center shrink-0">WAKTU EKSEKUSI</div>
                <div class="text-sm font-medium border-l-[3px] border-secondary pl-4 py-1">Lakukan dua kali sujud berturut-turut <strong>SESAAT SEBELUM SALAM mutlak terucap</strong>.</div>
            </div>
            <div class="md:col-span-5">
                <div class="bg-white p-5 rounded-2xl border border-outline-variant/20 shadow-sm relative overflow-hidden flex flex-col items-center">
                    <span class="bg-secondary text-white text-[10px] px-2 py-1 absolute top-0 left-0 rounded-br-lg font-bold">Lafal Doa Sahwi</span>
                    <div class="text-center font-quran text-3xl text-secondary mt-5 mb-2 py-2" dir="rtl">سُبْحَانَ مَنْ لَا يَنَامُ وَلَا يَسْهُمْ</div>
                    <p class="text-xs italic text-on-surface-variant">"Maha Suci Allah Penguasa Semesta yang Mustahil Tertidur dan Mustahil Lupa."</p>
                </div>
            </div>
        </div>
    </div>
</div>

<!-- 3. Tilawah -->
<div class="mb-16 relative group">
    <div class="absolute -left-4 top-10 bottom-6 w-1 bg-tertiary/20 rounded-full group-hover:bg-tertiary transition-colors"></div>
    <h3 class="font-headline text-2xl font-bold text-tertiary mb-5 flex items-center bg-tertiary/5 w-max pr-6 py-2 rounded-r-full"><span class="material-symbols-outlined mr-3 text-3xl bg-tertiary text-white w-12 h-12 flex items-center justify-center rounded-full shadow-md">menu_book</span> 3. Sujud Tilawah</h3>
    <div class="bg-surface-container-low p-8 rounded-[2rem] border border-outline-variant/30 shadow-[0_4px_15px_rgba(0,0,0,0.02)] pl-8">
        <p class="text-[15px] text-on-surface-variant mb-6 leading-relaxed bg-surface-container-high p-4 rounded-xl">Spontanitas sujud yang terpicu karena radar telinga / lidah tak sengaja menyerempet lantunan <strong>Ayat Sajdah (15 titik tersebar di Mushaf)</strong>. Bukti gemetarnya Nabi sewaktu dibacakan kuasa Allah.</p>
        
        <div class="grid md:grid-cols-5 gap-8">
            <div class="md:col-span-2 space-y-4">
                <div class="border border-outline-variant/20 rounded-2xl p-4 bg-white shadow-sm">
                    <strong class="block text-primary text-sm mb-2 border-b border-outline-variant/20 pb-1">Kondisi Luar Salat:</strong>
                    <p class="text-xs text-on-surface-variant leading-relaxed">Berdiri suci aurat nutup. Takbir Ihram -> Sujud 1x mantap -> Salam tanpa perlu tahiyat!</p>
                </div>
                <div class="border border-outline-variant/20 rounded-2xl p-4 bg-white shadow-sm">
                    <strong class="block text-error text-sm mb-2 border-b border-outline-variant/20 pb-1">Kondisi Tiba-tiba di Dalam Salat:</strong>
                    <p class="text-xs text-on-surface-variant leading-relaxed">Dengar Imam melafalkan ayat & takbir mendadak -> Ikut serentak sujud -> Bediri sambung rakaat!</p>
                </div>
            </div>
            <div class="md:col-span-3">
                <div class="bg-white p-5 rounded-2xl border border-outline-variant/20 shadow-sm relative h-full flex flex-col justify-center">
                    <span class="bg-tertiary text-white text-[10px] px-2 py-1 absolute top-0 left-0 rounded-br-lg font-bold">Lafal Epik Sajdah</span>
                    <div class="text-center font-quran text-xl md:text-2xl text-tertiary leading-[2.5] mt-4 mb-2" dir="rtl">سَجَدَ وَجْهِى لِلَّذِى خَلَقَهُ وَصَوَّرَهُ وَشَقَّ سَمْعَهُ وَبَصَرَهُ بِحَوْلِهِ وَقُوَّتِهِ تَبَارَكَ اللَّهُ أَحْسَنُ الْخَالِقِينَ</div>
                </div>
            </div>
        </div>
    </div>
</div>

<!-- Hikmah -->
<div class="bg-gradient-to-br from-error to-error-container p-12 rounded-[3.5rem] text-error-on shadow-2xl relative overflow-hidden text-center mx-2 group">
    <span class="material-symbols-outlined absolute -left-10 -bottom-8 opacity-[0.03] text-[250px] group-hover:scale-110 transition-transform duration-1000">format_quote</span>
    <h4 class="text-3xl font-headline font-bold mb-8 relative z-10 drop-shadow-md">Teralis Ego Semesta</h4>
    <p class="text-sm sm:text-base opacity-90 max-w-4xl mx-auto leading-loose text-justify md:text-center relative z-10 font-medium">
        Seluruh desain ritus sujud di atas hakikatnya diformat Tuhan untuk menyadarkan kita bahwa <strong>manusia adalah makhluk gampang tewas</strong>. Kita mahluk yang ringkih, pelupa rahasia password sendiri, fakir terhadap kebetulan rezeki, namun angkuh setengah mati merusak bumi. <br><br>Ciumlah tanah. Ciumlah debu. Karena disitulah hancurnya status dan kesombongan maya yang fana. Sang Dzat Pengampun menantimu berpelukan!
    </p>
</div>
`;

// Fungsi Inject array
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

// Write the Bab 3 and 4 Kls 7 Ganjil
appendBab('kls7-smtganjil-bab3', 7, 'Ganjil', 'Bab 3', 'Menghadirkan Salat dan Zikir dalam Kehidupan', '15', bab3Konten);
appendBab('kls7-smtganjil-bab4', 7, 'Ganjil', 'Bab 4', 'Mengagungkan Allah dengan Macam-Macam Sujud', '18', bab4Konten);

fs.writeFileSync('js/materi.js', content, 'utf8');
console.log('Success kls7 ganjil bab3 & bab4 replacement');

const fs = require('fs');

let content = fs.readFileSync('js/materi.js', 'utf8');

// ==========================================
// KONTEN BAB 7 (KELAS 8 SMT GENAP BAB 2)
// ==========================================
const bab7Konten = `
<p class="text-on-surface-variant leading-relaxed text-lg mb-8">
    Bab ini membahas rukun iman kempat: Meletakkan kepercayaan mutlak kepada nabi dan rasul utusan Allah Swt., serta bagaimana resep sifat abadi mereka sangat relevan diaplikasikan untuk menjadi Gen-Z (Generasi Digital) berkarakter.
</p>

<!-- 1 & 2. Makna & Tugas -->
<div class="grid md:grid-cols-2 gap-6 mb-12">
    <div class="bg-surface-container-low p-8 rounded-[2rem] border border-outline-variant/20 shadow-sm relative">
        <h3 class="font-headline text-xl font-bold text-primary mb-4 border-b border-outline-variant/20 pb-2">Perbedaan Nabi & Rasul</h3>
        <ul class="text-sm text-on-surface-variant space-y-3">
            <li class="flex items-start gap-2"><span class="bg-primary/10 text-primary px-2 py-0.5 rounded font-bold shrink-0">Nabi</span> <p>Laki-laki pilihan penerima wahyu murni untuk <strong>dirinya sendiri</strong>.</p></li>
            <li class="flex items-start gap-2"><span class="bg-secondary/10 text-secondary px-2 py-0.5 rounded font-bold shrink-0">Rasul</span> <p>Penerima wahyu yang <strong>wajib menyampaikannya (tablig)</strong> kepada umatnya.</p></li>
        </ul>
        <div class="bg-error/10 p-3 rounded-xl mt-4 border border-error/20 text-xs italic text-error-container-on">Setiap Rasul pasti Nabi, tapi tidak setiap Nabi adalah Rasul!</div>
    </div>
    
    <div class="bg-surface-container-highest p-8 rounded-[2rem] border-l-8 border-secondary">
        <h3 class="font-headline text-xl font-bold text-secondary mb-4">Misi Utama (Tugas)</h3>
        <ul class="list-disc ml-5 space-y-2 text-sm text-on-surface-variant opacity-90">
            <li>Menyuarakan Tauhid (menyembah hanya Allah).</li>
            <li>Membawa kabar gembira & peringatan hukuman.</li>
            <li>Menjadi <em>Role Model</em> teladan absolut.</li>
            <li>Membimbing manusia di rel syariat agar tidak tersesat.</li>
        </ul>
    </div>
</div>

<!-- 3. Sifat Nabi & Rasul -->
<h3 class="font-headline text-2xl font-bold text-primary mt-12 mb-6 text-center">Matriks Sifat Para Rasul</h3>
<div class="bg-white rounded-[2rem] p-8 border border-outline-variant/20 shadow-[0_4px_20px_rgba(0,0,0,0.02)] mb-16">
    <div class="grid sm:grid-cols-2 gap-8">
        <!-- Wajib -->
        <div>
            <h4 class="font-bold text-lg text-primary mb-3 flex items-center gap-2"><span class="material-symbols-outlined">add_task</span> Sifat Wajib</h4>
            <ul class="space-y-2 text-sm">
                <li class="bg-primary/5 p-2 rounded-lg border border-primary/10"><strong>1. Siddiq:</strong> Benar / Jujur mutlak.</li>
                <li class="bg-primary/5 p-2 rounded-lg border border-primary/10"><strong>2. Amanah:</strong> Kepercayaan kredibilitas 100%.</li>
                <li class="bg-primary/5 p-2 rounded-lg border border-primary/10"><strong>3. Tablig:</strong> Transparan menyalurkan wahyu penuh.</li>
                <li class="bg-primary/5 p-2 rounded-lg border border-primary/10"><strong>4. Fatanah:</strong> Kejeniusan / Kecerdasan super.</li>
            </ul>
        </div>
        <!-- Mustahil -->
        <div>
            <h4 class="font-bold text-lg text-error mb-3 flex items-center gap-2"><span class="material-symbols-outlined">cancel</span> Sifat Mustahil</h4>
            <ul class="space-y-2 text-sm">
                <li class="bg-error/5 p-2 rounded-lg border border-error/10"><strong>1. Kizb:</strong> Bohong / Pendusta (Mustahil!).</li>
                <li class="bg-error/5 p-2 rounded-lg border border-error/10"><strong>2. Khianat:</strong> Ingkar Janji / Korup.</li>
                <li class="bg-error/5 p-2 rounded-lg border border-error/10"><strong>3. Kitman:</strong> Menyembunyikan titipan wahyu.</li>
                <li class="bg-error/5 p-2 rounded-lg border border-error/10"><strong>4. Baladah:</strong> Bodoh / Terbelakang.</li>
            </ul>
        </div>
    </div>
    
    <!-- Jaiz & Maksum -->
    <div class="mt-8 bg-surface-container-low p-6 rounded-2xl flex flex-col sm:flex-row gap-6 justify-between items-center text-sm border border-outline-variant/30">
        <div class="flex-1">
            <span class="bg-tertiary text-white px-2 py-1 rounded text-xs font-bold mr-2">Sifat Jaiz</span>
            <strong>Aradhul Basyariyah:</strong> Membawa insting biologis manusia biasa (Bisa haus, lapar, sakit, tidur, menikah usia) sejauh tidak menjatuhkan derajatnya.
        </div>
        <div class="flex-1 border-l sm:border-l-2 border-outline-variant/20 pl-0 sm:pl-6 pt-4 sm:pt-0">
            <span class="bg-secondary text-white px-2 py-1 rounded text-xs font-bold mr-2">Keistimewaan</span>
            <strong>Maksum:</strong> Imun atau divaksinasi gaib oleh Allah dari melakukan dosa besar & fatal.
        </div>
    </div>
</div>

<!-- 4. Karakter Digital -->
<div class="bg-gradient-to-br from-primary to-primary-container p-10 rounded-[3rem] text-white shadow-xl mb-16 relative overflow-hidden">
    <span class="material-symbols-outlined absolute -top-4 -right-4 text-[120px] text-white/5 opacity-50">important_devices</span>
    <h3 class="font-headline text-2xl font-bold mb-6 text-white border-b border-white/20 pb-4">Meneladani Rasul di Era Algoritma Sosial Media</h3>
    <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 text-sm font-medium">
        <div class="bg-white/10 p-4 rounded-xl border border-white/20 backdrop-blur-md">
            <span class="block text-secondary-fixed mb-1 font-bold">1. Siddiq Online</span>
            Saring sebelum <em>Sharing</em>! Jujur mendistribusikan link info asli, bukan hoaks.
        </div>
        <div class="bg-white/10 p-4 rounded-xl border border-white/20 backdrop-blur-md">
            <span class="block text-secondary-fixed mb-1 font-bold">2. Amanah Digital</span>
            Jaga kerahasiaan password dan privasi Aib teman; Jangan <em>doxing</em>.
        </div>
        <div class="bg-white/10 p-4 rounded-xl border border-white/20 backdrop-blur-md">
            <span class="block text-secondary-fixed mb-1 font-bold">3. Tablig Medsos</span>
            Sebarluaskan kutipan positif, kutipan motivasi, & lirik dakwah damai.
        </div>
        <div class="bg-white/10 p-4 rounded-xl border border-white/20 backdrop-blur-md">
            <span class="block text-secondary-fixed mb-1 font-bold">4. Fatanah Cyber</span>
            Kecerdikan melek teknologi dan bijak merangkai narasi kolom komentar.
        </div>
    </div>
</div>

<!-- 5. Kisah Teladan -->
<div class="bg-surface-container p-8 rounded-[2rem] border-l-8 border-secondary relative">
    <h4 class="font-bold text-lg mb-4 text-on-surface flex items-center"><span class="material-symbols-outlined text-secondary mr-2">sound_detection_dog_barking</span> Kisah Teladan: Serigala yang Beriman</h4>
    <p class="text-sm text-on-surface-variant leading-relaxed text-justify mb-4">
        Terdapat mukjizat di luar nalar tatkala seekor serigala merebut hewan gembalaan dan dicegah langsung oleh sang pengembala. Serigala tersebut justru berkata jelas kepada utusan tersebut: <em>“Wahai fulan, mengapa engkau begitu zalim? Allah telah menetapkan domba itu sebagai rezekiku untuk hari ini, mengapa engkau merebutnya dariku?”</em> Hal ini menjadi tamparan spiritual bagi sang penggembala, menegaskan pembuktian semesta atas keesaan dan otoritas kenabian.
    </p>
</div>
`;

// ==========================================
// KONTEN BAB 9 (KELAS 8 SMT GENAP BAB 3 - KARENA BAB 8 DI-SKIP)
// ==========================================
const bab9Konten = `
<p class="text-on-surface-variant leading-relaxed text-lg mb-8">
    Bab ini menyelamatkan kita dari dosa gelap ekonomi: Fikih Muamalah. Mengajarkan anatomi perniagaan yang sah (Jual Beli), sistem pinjaman (Hutang), dan musuh finansial terbesar Islam (Riba).
</p>

<!-- 1. Jual Beli & Khiyar -->
<div class="bg-surface-container-low p-8 rounded-[2rem] border border-outline-variant/20 shadow-sm mb-12">
    <h3 class="font-headline text-2xl font-bold text-primary mb-6 flex items-center">
        <span class="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mr-4 shrink-0">
            <span class="material-symbols-outlined text-[24px]">storefront</span>
        </span>
        1. Jual Beli (Ba'i)
    </h3>
    
    <div class="grid md:grid-cols-2 gap-8 mb-6">
        <div>
            <h4 class="font-bold text-sm text-on-surface bg-surface-container px-3 py-1 inline-block rounded-lg mb-3">Rukun Jual Beli (Wajib Ada)</h4>
            <ul class="text-sm text-on-surface-variant list-disc ml-5 space-y-1">
                <li>Adanya Penjual & Pembeli (akal sehat, baligh).</li>
                <li>Barang Jasa Jelas Halal Milik Sah.</li>
                <li>Alat Tukar (Harga) jelas nominalnya.</li>
                <li>Ijab Qabul (Transaksi lisan/tulisan serah terima).</li>
            </ul>
        </div>
        <div>
            <h4 class="font-bold text-sm text-on-surface bg-surface-container px-3 py-1 inline-block rounded-lg mb-3">Macam-Macam Khiyar (Hak Batal Beli)</h4>
            <ul class="text-sm text-on-surface-variant space-y-2">
                <li><strong class="text-primary">Majlis:</strong> Hak batal selama kaki pembeli/penjual masih di dalam toko/lokasi.</li>
                <li><strong class="text-primary">Syarat:</strong> Hak batal karena MoU garansi di awal perjanjian.</li>
                <li><strong class="text-primary">Aib:</strong> Hak komplain retur karena terdeteksi barangnya cacat pabrik.</li>
                <li><strong class="text-primary">Ru'yah:</strong> Hak batal spesifik pesanan Blind-Buy (barang belum diliat aslinya).</li>
            </ul>
        </div>
    </div>
</div>

<!-- 2. Hutang Piutang (Qardh vs Dayn) -->
<h3 class="font-headline text-2xl font-bold text-secondary mt-12 mb-6">2. Anatomi Hutang Piutang</h3>
<div class="flex flex-col md:flex-row gap-6 mb-16">
    <div class="bg-white p-6 border-l-4 border-secondary rounded-2xl shadow-sm flex-1">
        <h4 class="font-bold text-lg mb-2 flex items-center"><span class="material-symbols-outlined text-secondary mr-2">handshake</span> Qardh (Pinjaman Murni)</h4>
        <p class="text-sm text-on-surface-variant">Transaksi heroik tolong-menolong. Meminjamkan uang dengan janji dkembalikan nominal yang <strong>SAMA PERSIS</strong>. Tidak boleh ada biaya *admin* atau bunga.</p>
    </div>
    <div class="bg-white p-6 border-l-4 border-error rounded-2xl shadow-sm flex-1">
        <h4 class="font-bold text-lg mb-2 flex items-center"><span class="material-symbols-outlined text-error mr-2">account_balance_wallet</span> Dayn (Hutang Beban)</h4>
        <p class="text-sm text-on-surface-variant">Konsep payung besar. Beban di leher (finansial) akibat meminjam atau akibat belanja dengan kredit cicilan (belum lunas tunai). <br><em>Semua Qardh adalah Dayn, namun tak semua Dayn itu Qardh.</em></p>
    </div>
</div>

<!-- 3. RIBA -->
<div class="bg-error/10 p-10 rounded-[3rem] border border-error/20 mb-16 relative overflow-hidden">
    <span class="material-symbols-outlined absolute -bottom-10 -right-10 text-[180px] text-error/20 rotate-12">trending_down</span>
    <h3 class="font-headline text-3xl font-bold text-error mb-4 relative z-10 flex items-center"><span class="material-symbols-outlined mr-3 text-4xl">block</span> Sisi Hitam: Bahaya Riba</h3>
    <p class="text-sm text-on-surface-variant mb-6 font-medium relative z-10">
        Riba adalah lintah darat: pengambilan ekstra dari modal uang pokok (Qardh) atau manipulasi pertukaran. <strong>Hukumnya HARAM TOTAL!</strong>
    </p>

    <div class="grid sm:grid-cols-2 gap-4 relative z-10 text-sm">
        <div class="bg-white p-4 rounded-xl shadow-sm border border-error/10">
            <strong class="text-error mb-1 block">1. Riba Nasiah (Bunga Waktu)</strong>
            Bunga progresif karena menunda / mengulur tanggal pembayaran kredit cicilan. Modus rentenir bank konvensional.
        </div>
        <div class="bg-white p-4 rounded-xl shadow-sm border border-error/10">
            <strong class="text-error mb-1 block">2. Riba Fadhl (Tukar Timbang)</strong>
            Culas dalam menukar barang komoditi fisik sejenis (Emas 5 gram kotor ditukar dengan Emas 4 gram murni padahal nilainya jomplang).
        </div>
        <div class="bg-white p-4 rounded-xl shadow-sm border border-error/10">
            <strong class="text-error mb-1 block">3. Riba Qardh (Syarat Bunga Awal)</strong>
            Menetapkan keuntungan 15% sejak awal meminjamkan modal kas bon. (Misal: Aku pinjami Rp100rb, kembalikan 115rb!).
        </div>
        <div class="bg-white p-4 rounded-xl shadow-sm border border-error/10">
            <strong class="text-error mb-1 block">4. Riba Yad (Hutang Gelap Alasan)</strong>
            Uang belum serah terima di majelis kasir, tapi sudah dikenakan bunga tarif siluman.
        </div>
    </div>
</div>

<!-- 5. Kisah Teladan Umar -->
<div class="bg-gradient-to-br from-primary to-primary-container p-8 rounded-[2rem] text-white shadow-lg text-center">
    <h4 class="font-bold text-xl mb-4 font-headline border-b border-white/20 pb-3 inline-block">Kisah Umar bin Khattab & Baitul Mal</h4>
    <p class="text-sm leading-relaxed max-w-3xl mx-auto opacity-90 text-justify">
        Suatu saat Sang Presiden raksasa, Khalifah Umar menembus kasir Baitul Mal (Kas Negara) meminta toleransi *"Bon/Meminjam Uang"* uang negara di muka, karena anaknya tercekik kebutuhan finansial pelik dan jatah gajinya telah habis.<br><br>
        Sang Penjaga Kas Bendahara justru menatap Umar dan berkata sinis: <em>"Wahai Umar! Bisakah Engkau menjamin kepada kami semua bahwa Engkau masih bertahan HIDUP sampai bulan depan untuk menjamin hutang negara tersebut terlunasi?"</em><br><br>
        Umar tidak marah dihina rakyanya, beliau langsung menjatuhkan kepalanya menangis gemetar menyadari betapa sakral dan ngerinya tanggung jawab hutang dunia! Beliau balik kanan tanpa meminjam sepeserpun dari instrumen umat.
    </p>
</div>
`;


// Fungsi Inject
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

// Eksekusi Bab 7 (Kls 8 Smt Genap Bab 2)
appendBab('kls8-smtgenap-bab2', 8, 'Genap', 'Bab 2', 'Meyakini Nabi dan Rasul Allah: Menjadi Generasi Digital yang Berkarakter', '13', bab7Konten);

// Eksekusi Bab 9 (Kls 8 Smt Genap Bab 3 - Bab 8 diskip)
appendBab('kls8-smtgenap-bab3', 8, 'Genap', 'Bab 3', 'Menjadi Pribadi yang Dapat Dipercaya: Terhindar Riba', '16', bab9Konten);

fs.writeFileSync('js/materi.js', content, 'utf8');
console.log('Success bab7 and bab9 string replacement');

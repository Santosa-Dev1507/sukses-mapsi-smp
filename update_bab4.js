const fs = require('fs');

let content = fs.readFileSync('js/materi.js', 'utf8');

const bab4Konten = `
<p class="text-on-surface-variant leading-relaxed text-lg mb-8">
    Materi ini membahas tentang pentingnya melaksanakan syariat penyembelihan hewan, serta ibadah kurban dan akikah sebagai bentuk syukur dan kepedulian sesama.
</p>

<!-- 1. Penyembelihan Hewan -->
<h3 class="font-headline text-2xl font-bold text-primary mt-12 mb-6 flex items-center">
    <span class="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mr-4 shrink-0">
        <span class="material-symbols-outlined text-[24px]">restaurant</span>
    </span>
    1. Penyembelihan Hewan dalam Ajaran Islam
</h3>
<p class="text-on-surface-variant leading-relaxed text-md mb-6">
    Dalam Islam, mengonsumsi daging hewan harus melalui proses penyembelihan yang benar agar dagingnya sehat, bergizi, berkualitas, dan hewan tidak tersiksa. Jika tidak disembelih sesuai syariat, daging hewan menjadi <strong>haram dikonsumsi</strong>.
</p>

<!-- Dalil Al-An'am 121 -->
<div class="bg-surface-container-low border border-outline-variant/30 rounded-[2rem] p-8 mb-8 relative overflow-hidden">
    <div class="text-right font-quran text-3xl leading-[2.5] mb-6 text-on-surface" dir="rtl">
        وَلَا تَأْكُلُوا مِمَّا لَمْ يُذْكَرِ اسْمُ اللَّهِ عَلَيْهِ وَإِنَّهُ لَفِسْقٌ وَإِنَّ الشَّيْطِيْنَ لَيُوْحُوْنَ إِلَى أَوْلِيْئِهِمْ لِيُجَادِلُوكُمْ وَإِنْ أَطَعْتُمُوْهُمْ إِنَّكُمْ لَمُشْرِكُوْنَ
    </div>
    <div class="font-body italic text-on-surface-variant text-md pt-4 border-t border-outline-variant/20">
        "Dan janganlah kamu memakan binatang-binatang yang tidak disebut nama Allah ketika menyembelihnya. Sesungguhnya perbuatan yang semacam itu adalah suatu kefasikan. Sesungguhnya syaitan itu membisikkan kepada kawan-kawannya agar mereka membantah kamu; dan jika kamu menuruti mereka, sesungguhnya kamu tentulah menjadi orang-orang yang musyrik." <br/><strong>(Q.S. Al-An'am [6]: 121)</strong>
    </div>
</div>

<div class="bg-white p-6 rounded-2xl shadow-sm border border-outline-variant/10 mb-12">
    <h4 class="font-bold text-lg mb-4 text-primary">Ketentuan Penyembelihan Hewan</h4>
    <ul class="space-y-4 text-sm text-on-surface-variant mb-4">
        <li class="flex items-start"><span class="material-symbols-outlined text-primary mr-3 text-xl">person_check</span> <div><strong>Penyembelih:</strong> Islam atau ahli kitab (zaman Nabi), berakal, tamyiz, sengaja, sadar, dan menyebut nama Allah Swt.</div></li>
        <li class="flex items-start"><span class="material-symbols-outlined text-primary mr-3 text-xl">pets</span> <div><strong>Hewan:</strong> Hidup (bukan bangkai) dan halal zatnya maupun cara perolehannya. Sesuai dengan Q.S. Al-Maidah [5]: 3.</div></li>
        <li class="flex items-start"><span class="material-symbols-outlined text-primary mr-3 text-xl">content_cut</span> <div><strong>Alat:</strong> Tajam dan melukai (tidak boleh dari tulang, gigi, atau kuku).</div></li>
        <li class="flex items-start"><span class="material-symbols-outlined text-primary mr-3 text-xl">checklist</span> <div><strong>Proses:</strong> Memutus tenggorokan (saluran nafas), saluran makanan, dan dua urat leher. Disunnahkan menghadap kiblat dan mengasah pisau setajam mungkin.</div></li>
    </ul>
</div>

<!-- 2. Akikah -->
<h3 class="font-headline text-2xl font-bold text-primary mt-16 mb-6 flex items-center">
    <span class="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mr-4 shrink-0">
        <span class="material-symbols-outlined text-[24px]">child_friendly</span>
    </span>
    2. Akikah dalam Ajaran Islam
</h3>
<p class="text-on-surface-variant leading-relaxed text-md mb-6">
    Akikah adalah menyembelih kambing sebagai tanda syukur atas lahirnya anak. Hukumnya <strong>sunah muakkad (sangat dianjurkan)</strong>. Akikah mendekatkan diri kepada Allah Swt. dan bisa menjadi syafaat bagi orang tua di akhirat.
</p>

<!-- Hadith Samurah -->
<div class="bg-primary/5 rounded-[2rem] p-8 mb-8 border border-outline-variant/10 text-center">
    <div class="font-quran text-3xl leading-[2.5] mb-4 text-on-surface" dir="rtl">
        كُلُّ غُلَامٍ مُرْتَهَنَّ بِعَقِيقَتِهِ تُذْبَخُ عَنْهُ يَوْمَ السَّابِعِ وَيُخْلَقُ رَأْسُهُ وَيُسَمَّى
    </div>
    <div class="font-body italic text-on-surface-variant text-md">
        "Seorang anak itu tergadai dengan akikahnya yang disembelih pada hari ketujuh, dicukur rambut kepalanya, dan diberi nama." <strong class="not-italic text-primary">(H.R. Ibnu Majah dari Samurah)</strong>
    </div>
</div>

<div class="grid sm:grid-cols-2 gap-4 mb-12">
    <div class="p-5 bg-surface-container-low rounded-xl">
        <span class="font-bold block mb-1">Ketentuan Hewan</span>
        <span class="text-xs text-on-surface-variant">Kambing/domba sehat, minimal 1 tahun (sudah berganti gigi). Laki-laki 2 ekor, perempuan 1 ekor.</span>
    </div>
    <div class="p-5 bg-surface-container-low rounded-xl">
        <span class="font-bold block mb-1">Waktu Pelaksanaan</span>
        <span class="text-xs text-on-surface-variant">Sebaiknya hari ke-7 (lahir), bisa 14, 21, atau kapanpun mampu sebelum baligh. Gugur jika meninggal sebelum 7 hari.</span>
    </div>
    <div class="p-5 bg-surface-container-low rounded-xl">
        <span class="font-bold block mb-1">Pembagian Daging</span>
        <span class="text-xs text-on-surface-variant">Sebaiknya dimasak dahulu. Boleh dimakan sendiri, disedekahkan, atau mengundang kerabat.</span>
    </div>
    <div class="p-5 bg-surface-container-low rounded-xl">
        <span class="font-bold block mb-1">Hikmah</span>
        <span class="text-xs text-on-surface-variant">Mendekatkan diri pada Allah, bentuk syukur, tebusan syafaat bagi orang tua, dan sulaturahim.</span>
    </div>
</div>

<!-- 3. Kurban -->
<h3 class="font-headline text-2xl font-bold text-primary mt-16 mb-6 flex items-center">
    <span class="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mr-4 shrink-0">
        <span class="material-symbols-outlined text-[24px]">volunteer_activism</span>
    </span>
    3. Kurban dalam Ajaran Islam
</h3>
<p class="text-on-surface-variant leading-relaxed text-md mb-6">
    Kurban adalah ibadah menyembelih hewan tertentu pada waktu Idul Adha dan hari Tasyrik dengan tujuan mendekatkan diri kepada Allah Swt. Hukumnya adalah <strong>sunah muakkad (sangat dianjurkan)</strong> bagi yang mampu.
</p>

<!-- Dalil Al Kautsar -->
<div class="bg-surface-container-highest border border-outline-variant/30 rounded-[2rem] p-8 mb-8 relative overflow-hidden text-center">
    <div class="text-center font-quran text-4xl leading-[2.5] mb-4 text-on-surface" dir="rtl">
        إِنَّا أَعْطَيْنَاكَ الْكَوْثَرَ. فَصَلِّ لِرَبِّكَ وَانْحَرْ. إِنَّ شَانِئَكَ هُوَ الْأَبْتَرُ.
    </div>
    <div class="font-body italic text-on-surface-variant text-md">
        "Sesungguhnya Kami telah memberikan kepadamu nikmat yang banyak. Maka dirikanlah shalat karena Tuhanmu; dan berkurbanlah..." <br/><strong>(Q.S. Al Kautsar [108]: 1-3)</strong>
    </div>
</div>

<div class="bg-white p-8 rounded-3xl shadow-sm border border-outline-variant/10 mb-12">
    <h4 class="font-bold text-lg mb-6 text-primary">Aturan & Ketentuan Berkurban</h4>
    <div class="grid md:grid-cols-2 gap-6">
        <div class="p-4 border border-outline-variant/20 rounded-xl relative">
            <span class="material-symbols-outlined absolute right-4 top-4 text-primary/20 text-4xl">calendar_month</span>
            <div class="font-bold mb-2">Waktu</div>
            <div class="text-xs text-on-surface-variant leading-relaxed">Setelah salat Idul Adha (10 Zulhijah) hingga akhir hari Tasyrik (13 Zulhijah) sebelum matahari terbenam.</div>
        </div>
        <div class="p-4 border border-outline-variant/20 rounded-xl relative">
            <span class="material-symbols-outlined absolute right-4 top-4 text-primary/20 text-4xl">pets</span>
            <div class="font-bold mb-2">Jenis Hewan</div>
            <div class="text-xs text-on-surface-variant leading-relaxed">Sapi/unta/kerbau (min 2 tahun) dan kambing (min 2 tahun), domba (min 1 thn/ganti gigi). Bebas cacat.</div>
        </div>
        <div class="p-4 border border-outline-variant/20 rounded-xl relative">
            <span class="material-symbols-outlined absolute right-4 top-4 text-primary/20 text-4xl">group</span>
            <div class="font-bold mb-2">Ketentuan Patungan</div>
            <div class="text-xs text-on-surface-variant leading-relaxed">Unta, sapi, kerbau bisa patungan untuk 7 orang. Kambing dan domba hanya untuk 1 orang per ekor.</div>
        </div>
        <div class="p-4 border border-outline-variant/20 rounded-xl relative">
            <span class="material-symbols-outlined absolute right-4 top-4 text-primary/20 text-4xl">set_meal</span>
            <div class="font-bold mb-2">Pembagian Daging</div>
            <div class="text-xs text-on-surface-variant leading-relaxed">Dibagikan kepada fakir miskin dalam <strong>keadaan mentah</strong>. Pekurban boleh mengambil maksimal 1/3 bagian.</div>
        </div>
    </div>
</div>

<div class="p-10 bg-gradient-to-br from-primary to-primary-container text-white rounded-[3rem] shadow-xl text-center">
    <h4 class="text-2xl font-headline font-bold mb-4">Hikmah Utama</h4>
    <p class="text-lg opacity-90 leading-relaxed">
        Ibadah Kurban dan Akikah menghidupkan rasa peduli kepada sesama, melatih kedermawanan, serta menjauhkan sifat kikir. Ini adalah wujud ketaatan mutlak yang mendekatkan diri hamba kepada pencipta-Nya.
    </p>
</div>
`;

// String Replacement array injection
const bab4Str = `"id": "kls9-smtganjil-bab4",
        "kelas": 9,
        "semester": "Ganjil",
        "bab": "Bab 4",
        "judul": "Bersyukur dengan Akikah, Peduli Sesama dengan Berkurban",
        "waktuBumper": "12 Menit Baca",
        "gambar": "images/islamic_calligraphy.png",
        "konten": \`
${bab4Konten.replace(/`/g, '\\`')}
        \``;

const startPhrase = `"id": "kls9-smtganjil-bab4",`;
const nextPhrase = `"id": "kls9-smtgenap-bab1",`;

let startIndex = content.indexOf(startPhrase);
let nextIndex = content.indexOf(nextPhrase);

if (startIndex !== -1 && nextIndex !== -1) {
    let before = content.substring(0, startIndex);
    let after = content.substring(nextIndex);
    
    // In JS array, there's a   }, {   between them.
    let newContent = before + bab4Str + '\n    }, {\n        ' + after;
    
    fs.writeFileSync('js/materi.js', newContent, 'utf8');
    console.log('Success bab 4 string replacement');
} else {
    console.error('Failed to match indexes in materi.js');
}

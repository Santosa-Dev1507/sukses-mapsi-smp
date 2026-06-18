// Database Materi Dinamis (Total 28 Bab)

const materiData = [
    {
        "id": "kls7-smtganjil-bab1",
        "kelas": 7,
        "semester": "Ganjil",
        "bab": "Bab 1",
        "judul": "Al-Qur'an dan Sunah Sebagai Pedoman Hidup",
        "waktuBumper": "14 Menit Baca",
        "gambar": "images/islamic_calligraphy.png",
        "konten": `

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

        `
    }, {
        "id": "kls7-smtganjil-bab2",
        "kelas": 7,
        "semester": "Ganjil",
        "bab": "Bab 2",
        "judul": "Meneladan Nama dan Sifat Allah (Al-Asma' al-Husna)",
        "waktuBumper": "18 Menit Baca",
        "gambar": "images/islamic_calligraphy.png",
        "konten": `

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

        `
    }, {
        "id": "kls7-smtganjil-bab3",
        "kelas": 7,
        "semester": "Ganjil",
        "bab": "Bab 3",
        "judul": "Menghadirkan Salat dan Zikir dalam Kehidupan",
        "waktuBumper": "15 Menit Baca",
        "gambar": "images/islamic_calligraphy.png",
        "konten": `

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

        `
    }, {
        "id": "kls7-smtganjil-bab4",
        "kelas": 7,
        "semester": "Ganjil",
        "bab": "Bab 4",
        "judul": "Mengagungkan Allah dengan Macam-Macam Sujud",
        "waktuBumper": "18 Menit Baca",
        "gambar": "images/islamic_calligraphy.png",
        "konten": `

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

        `
    }, {
        "id": "kls7-smtganjil-bab5",
        "kelas": 7,
        "semester": "Ganjil",
        "bab": "Bab 5",
        "judul": "Damaskus: Pusat Peradaban Timur Islam (661-750 M)",
        "waktuBumper": "16 Menit Baca",
        "gambar": "images/islamic_calligraphy.png",
        "konten": `

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

        `
    }, {
        "id": "kls7-smtgenap-bab1",
        "kelas": 7,
        "semester": "Genap",
        "bab": "Bab 1",
        "judul": "Alam Semesta Sebagai Tanda Kekuasaan Allah",
        "waktuBumper": "20 Menit Baca",
        "gambar": "images/islamic_calligraphy.png",
        "konten": `

<p class="text-on-surface-variant leading-relaxed text-lg mb-8">
    Materi ini membuka cakrawala kita bahwa Al-Qur'an bukan sekadar kitab suci agama rutinitas, melainkan <strong>Ensiklopedia Sains Tertinggi</strong>. Kita akan mengupas pembenaran rahasia awal mula penciptaan alam semesta dan peran air sebagai pondasi kehidupan kosmos yang sesungguhnya sudah di-<em>spoiler</em> Al-Qur'an 1400 tahun silam!
</p>

<!-- 1. Dalil Utama -->
<h3 class="font-headline text-2xl font-bold text-primary mb-6 flex items-center bg-primary/5 w-max pr-6 py-2 rounded-r-full"><span class="material-symbols-outlined mr-3 bg-primary text-white w-12 h-12 flex items-center justify-center rounded-full shadow-md">auto_stories</span> 1. Dua Dalil Kosmologi Al-Qur'an</h3>
<div class="grid md:grid-cols-2 gap-8 mb-12">
    <!-- Anbiya 30 -->
    <div class="bg-white p-8 rounded-[2.5rem] border border-outline-variant/20 shadow-[0_4px_15px_rgba(0,0,0,0.03)] relative overflow-hidden group hover:shadow-md transition-shadow">
        <span class="bg-primary text-white text-[10px] font-bold px-3 py-1 rounded-full absolute -top-3 right-8 tracking-widest shadow-sm z-10">Q.S. AL-ANBIYA: 30</span>
        <span class="material-symbols-outlined absolute -left-6 -bottom-6 text-primary/5 text-[150px] rotate-12 pointer-events-none group-hover:scale-110 transition-transform">explosion</span>
        <div class="relative z-10">
            <div class="text-right font-quran text-[26px] leading-loose mb-6 text-on-surface mt-2" dir="rtl">...اَنَّ السَّمٰوٰتِ وَالۡاَرۡضَ كَانَتَا رَتۡقًا فَفَتَقۡنٰهُمَا‌ ؕ وَجَعَلۡنَا مِنَ الۡمَآءِ كُلَّ شَىۡءٍ حَىٍّ‌ ؕ اَفَلَا يُؤۡمِنُوۡنَ</div>
            <p class="text-[13.5px] italic text-on-surface-variant border-t border-outline-variant/10 pt-4 leading-relaxed text-justify font-medium">
                "Apakah orang-orang kafir tak mengetahui bahwa langit & bumi dahulu itu adalah suatu yang <strong>padu (bulat satu gumpalan)</strong>, kemudian Kami pisahkan (ledakan) antara keduanya. Dan dari <strong>air</strong> Kami jadikan segala sesuatu yang hidup..."
            </p>
        </div>
    </div>
    <!-- A'raf 54 -->
    <div class="bg-white p-8 rounded-[2.5rem] border border-outline-variant/20 shadow-[0_4px_15px_rgba(0,0,0,0.03)] relative overflow-hidden group hover:shadow-md transition-shadow">
        <span class="bg-secondary text-white text-[10px] font-bold px-3 py-1 rounded-full absolute -top-3 right-8 tracking-widest shadow-sm z-10">Q.S. AL-A'RAF: 54</span>
        <span class="material-symbols-outlined absolute -left-6 -bottom-6 text-secondary/5 text-[150px] -rotate-12 pointer-events-none group-hover:scale-110 transition-transform">clear_night</span>
        <div class="relative z-10">
            <div class="text-right font-quran text-[26px] leading-loose mb-6 text-on-surface mt-2" dir="rtl">اِنَّ رَبَّكُمُ اللّٰهُ الَّذِىۡ خَلَقَ السَّمٰوٰتِ وَالۡاَرۡضَ فِىۡ سِتَّةِ اَيَّامٍ ثُمَّ اسۡتَوٰى عَلَى الۡعَرۡشِ ...</div>
            <p class="text-[13.5px] italic text-on-surface-variant border-t border-outline-variant/10 pt-4 leading-relaxed text-justify font-medium">
                "Sungguh, Tuhanmu (adalah) Allah yang menciptakan langit dan bumi dalam waktu <strong>enam masa</strong>, lalu Dia bersemayam di atas 'Arsy. Dia ciptakan matahari, bulan, & bintang tunduk pada perintah-Nya..."
            </p>
        </div>
    </div>
</div>

<!-- 2. Tafsir Sains -->
<h3 class="font-headline text-2xl font-bold text-secondary mt-12 mb-6 flex items-center bg-secondary/5 w-max pr-6 py-2 rounded-r-full"><span class="material-symbols-outlined mr-3 bg-secondary text-white w-12 h-12 flex items-center justify-center rounded-full shadow-md">science</span> 2. Fisika Kosmik & Biologi Anatomi</h3>
<div class="bg-surface-container-low p-8 rounded-[2.5rem] border border-outline-variant/20 shadow-sm mb-16 relative overflow-hidden">
    <div class="grid md:grid-cols-2 gap-8 relative z-10">
        <!-- Big Bang -->
        <div class="space-y-4 bg-white p-6 rounded-[2rem] shadow-[0_2px_15px_rgba(0,0,0,0.02)] border border-outline-variant/30 transition-shadow hover:border-primary">
            <h4 class="font-bold text-lg text-primary flex items-center border-b border-outline-variant/20 pb-3"><span class="material-symbols-outlined mr-2 text-primary">explosion</span> Teori <em>Big Bang</em> (Ledakan Kosmik)</h4>
            <p class="text-[13.5px] text-on-surface-variant leading-relaxed text-justify font-medium">
                Surah al-Anbiya' 30 membedah rahasia bahwa materil langit-bumi dulunya menyatu <em>(Ratqan)</em>, lalu diledakkan pisah <em>(Fataqnahuma)</em>. Ribuan tahun sesudah ayat turun, barulah <strong>Teori Big Bang Fisika Modern</strong> membenarkannya; mengukuhkan semua alam semesta berawal titik padat tunggal yang berhamburan dengan kecepatan gila melahirkan debu asap bintang!
            </p>
        </div>
        <!-- Keajaiban Air -->
        <div class="space-y-4 bg-white p-6 rounded-[2rem] shadow-[0_2px_15px_rgba(0,0,0,0.02)] border border-outline-variant/30 transition-shadow hover:border-tertiary">
            <h4 class="font-bold text-lg text-tertiary flex items-center border-b border-outline-variant/20 pb-3"><span class="material-symbols-outlined mr-2 text-tertiary">water_drop</span> Air Membawa Rantai Kehidupan</h4>
            <p class="text-[13.5px] text-on-surface-variant leading-relaxed text-justify font-medium">
                "Segala yang hidup terbuat dari Air." Ilmu sel membuktikan nyaris <strong>70% anatomi mamalia (termasuk kita) diisi genangan cairan</strong>. Tanpa makan gandum, kita sanggup menahan nyawa 60 hari. Tapi puasa minum? Manusia mati 100% gagal ginjal internal dalam durasi 10 hari telak! Biologi sepakat pemicu gen awal terangkai dari lautan air bumi purba.
            </p>
        </div>
    </div>
</div>

<!-- 3. Hadis Belajar -->
<h3 class="font-headline text-2xl font-bold text-tertiary mt-12 mb-6 flex items-center bg-tertiary/5 w-max pr-6 py-2 rounded-r-full"><span class="material-symbols-outlined mr-3 bg-tertiary text-white w-12 h-12 flex items-center justify-center rounded-full shadow-md">school</span> 3. Maklumat Nabi: Wajibnya Eksplorasi Pintar</h3>
<div class="bg-surface-container p-8 rounded-[2.5rem] border border-outline-variant/20 mb-16 shadow-[0_4px_15px_rgba(0,0,0,0.02)]">
    <p class="text-[14.5px] mb-8 text-on-surface-variant text-justify font-medium leading-relaxed">
        Untuk bisa membongkar semua rahasia Big Bang di atas, manusia diinstalasi organ pendobrak batas yakni <strong>Akal (Kecerdasan Otak)</strong>. Nabi SAW berpesan keras bahwa status <em>Orang Berilmu</em> adalah syarat mutlak tidak punah jadi pecundang.
    </p>
    <div class="grid md:grid-cols-2 gap-5">
        <div class="bg-white p-6 rounded-2xl border-l-[6px] border-tertiary shadow-sm">
            <h5 class="text-[11px] font-bold text-tertiary mb-3 tracking-widest uppercase bg-tertiary/10 inline-block px-2 py-0.5 rounded">H.R. Ibnu Majah (Status: Kewajiban Absolut)</h5>
            <div class="font-quran text-3xl text-right mb-4" dir="rtl">طَلَبُ الْعِلْمِ فَرِيْضَةٌ عَلَى كُلِّ مُسْلِمٍ</div>
            <p class="text-[13px] text-on-surface italic leading-relaxed">"Menuntut ilmu pengetauan itu hukumnya <strong>Kewajiban Fardu</strong> buat leher setiap muslim di muka bumi."</p>
        </div>
        <div class="bg-white p-6 rounded-2xl border-l-[6px] border-secondary shadow-sm">
            <h5 class="text-[11px] font-bold text-secondary mb-3 tracking-widest uppercase bg-secondary/10 inline-block px-2 py-0.5 rounded">H.R. Muslim (Status: Jalan Pintas Surga)</h5>
            <div class="font-quran text-[25px] text-right mb-4 leading-loose" dir="rtl">مَنْ سَلَكَ طَرِيقًا يَلْتَمِسُ فِيهِ عِلْمًا سَهَّلَ اللَّهُ لَهُ طَرِيقًا إِلَى الْجَنَّةِ</div>
            <p class="text-[13px] text-on-surface italic leading-relaxed">"Barangsiapa pusing blusukan cari jalan demi sebongkah ilmu wawasan, <strong>Allah gampangkan lurus tanpa macet</strong> rutenya menuju Surga."</p>
        </div>
        <div class="bg-white p-6 rounded-[2rem] border-l-[6px] border-error shadow-sm col-span-1 md:col-span-2 relative overflow-hidden flex flex-col md:flex-row gap-6 items-center">
            <div class="flex-1">
                <h5 class="text-[11px] font-bold text-error mb-3 tracking-widest uppercase bg-error/10 inline-block px-2 py-0.5 rounded">H.R. Al-Baihaqi (Tragedi Golongan ke-5)</h5>
                <div class="font-quran text-2xl text-right mb-4 leading-loose text-error" dir="rtl">كُنْ عَالِمًا أَوْ مُتَعَلِّمًا أَوْ مُسْتَمِعًا أَوْ مُحِبًّا لَا تَكُنِ الْخَامِسَ فَتَهْلِكَ</div>
                <p class="text-[13px] text-on-surface leading-relaxed text-justify mt-3 font-medium">
                    Jadilah kamu tim prioritas keselamatan ini:<br>
                    1. <strong>Sang Pakar</strong> (Orang Pinter / Gurunya), ATAU <br>
                    2. <strong>Sang Murid Belajar</strong> (Meskipun gak pinter-pinter amat), ATAU <br>
                    3. <strong>Sang Pendengar</strong> (Rajin ikut seminar/tanya jawab ustadz), ATAU <br>
                    4. <strong>Sang Pecinta/Donatur</strong> (Penyedia fasilitas ilmu).<br><br>
                    Dan <strong class="text-error">HARAM JADILAH ORANG KELIMA</strong> (Udah bodoh, ogah belajar, gak mau dinasehatin, benci pula liat anak rajin). Auto Binasa Celaka!
                </p>
            </div>
        </div>
    </div>
</div>

<!-- 4. Tajwid -->
<h3 class="font-headline text-2xl font-bold text-error mt-12 mb-6 flex items-center bg-error/5 w-max pr-6 py-2 rounded-r-full"><span class="material-symbols-outlined mr-3 bg-error text-white w-12 h-12 flex items-center justify-center rounded-full shadow-md">campaign</span> 4. Tajwid: Hukum Bacaan Gunnah</h3>
<div class="flex flex-col md:flex-row gap-6 mb-16">
    <div class="bg-error/10 p-8 rounded-[2.5rem] flex-1 border-l-[8px] border-error relative overflow-hidden shadow-sm flex flex-col justify-center">
        <span class="material-symbols-outlined absolute -bottom-6 -right-6 text-[150px] text-error/10">graphic_eq</span>
        <div class="relative z-10">
            <h4 class="font-bold text-[22px] mb-3 text-error">Apa itu Aturan Gunnah?</h4>
            <p class="text-[14px] text-error-on mb-6 leading-relaxed font-medium">
                Secara praktis, <strong>Gunnah</strong> berarti mendengung atau mendemung hidung secara sensual. Ciri visualnya tebal menonjol: Setiap Anda berjumpa dengan huruf <strong>Nun (نّ)</strong> ataupun <strong>Mim (مّ)</strong> yang kepalanya ditindih tanda W kecil <strong>TASYDID ( ّ )</strong>, rem ritmemu, tahan bibirmu, dan wajib didengungkan sengau di hidung!
            </p>
            <div class="text-[14px] font-bold bg-white text-error px-4 py-2.5 rounded-xl border border-error/20 shadow-[0_2px_10px_rgba(255,0,0,0.1)] inline-flex items-center gap-2">
                <span class="material-symbols-outlined text-[20px]">timer</span> Lampu Merah Durasi Dengungan: 2 Harakat Ketukan!
            </div>
        </div>
    </div>
    
    <div class="bg-white p-6 rounded-[2.5rem] flex-1 border border-outline-variant/30 shadow-sm flex flex-col justify-center">
        <h4 class="font-bold text-[13px] text-on-surface-variant uppercase tracking-wider mb-5 border-b border-outline-variant/20 pb-3 text-center">Praktik Deteksi M/N Bertasydid:</h4>
        <div class="space-y-4 px-2">
            <div class="flex items-center justify-between p-4 bg-surface-container rounded-2xl hover:border-error border border-transparent transition-colors cursor-default shadow-[0_2px_5px_rgba(0,0,0,0.02)]">
                <span class="font-quran text-3xl text-primary font-bold tracking-wide" dir="rtl">اِنَّ رَبَّهُمۡ</span>
                <span class="text-[11px] font-bold text-white bg-error px-3 py-1.5 rounded-lg shadow-sm border border-error/20 uppercase">Karena NUN Tasydid</span>
            </div>
            <div class="flex items-center justify-between p-4 bg-surface-container rounded-2xl hover:border-error border border-transparent transition-colors cursor-default shadow-[0_2px_5px_rgba(0,0,0,0.02)]">
                <span class="font-quran text-3xl text-primary font-bold tracking-wide" dir="rtl">وَاَمَّا مَنۡ خَفَّتۡ</span>
                <span class="text-[11px] font-bold text-white bg-error px-3 py-1.5 rounded-lg shadow-sm border border-error/20 uppercase">Karena MIM Tasydid</span>
            </div>
            <div class="flex items-center justify-between p-4 bg-surface-container rounded-2xl hover:border-error border border-transparent transition-colors cursor-default shadow-[0_2px_5px_rgba(0,0,0,0.02)]">
                <span class="font-quran text-3xl text-primary font-bold tracking-wide" dir="rtl">فَاُمُّهٗ هَاوِيَةٌ</span>
                <span class="text-[11px] font-bold text-white bg-error px-3 py-1.5 rounded-lg shadow-sm border border-error/20 uppercase">Karena MIM Tasydid</span>
            </div>
        </div>
    </div>
</div>

        `
    }, {
        "id": "kls7-smtgenap-bab2",
        "kelas": 7,
        "semester": "Genap",
        "bab": "Bab 2",
        "judul": "Mawas Diri Melalui Keyakinan Kepada Malaikat Allah",
        "waktuBumper": "15 Menit Baca",
        "gambar": "images/islamic_calligraphy.png",
        "konten": `

<p class="text-on-surface-variant leading-relaxed text-lg mb-8">
    Bab ini mengajak kita menyadari bahwa gerak-gerik rahasia manusia tidak pernah luput dari bidikan kamera pengawasan langit. Keimanan kepada Malaikat adalah pondasi sensor <strong>Mawas Diri</strong> yang sanggup mengerem kita dari perlakuan buruk meskipun sedang berselancar anonim sendirian di kamar yang sepi tertutup rapat.
</p>

<!-- 1. Konsep Malaikat -->
<h3 class="font-headline text-2xl font-bold text-primary mb-6 flex items-center bg-primary/5 w-max pr-6 py-2 rounded-r-full"><span class="material-symbols-outlined mr-3 bg-primary text-white w-12 h-12 flex items-center justify-center rounded-full shadow-md">psychology</span> 1. Entitas Cahaya Bebas Konstruksi Hawa Nafsu</h3>
<div class="bg-surface-container-low p-8 rounded-[2.5rem] border border-outline-variant/20 shadow-[0_4px_15px_rgba(0,0,0,0.02)] mb-14">
    <div class="grid md:grid-cols-2 gap-10 items-center">
        <div>
            <p class="text-[14.5px] text-on-surface-variant leading-relaxed mb-6 text-justify font-medium">
                Malaikat adalah agen pasukan supranatural ciptaan Allah dari unsur partikel murni <strong>Nur (Cahaya)</strong>. Berbeda dengan spesies Biologi manusia (punya nafsu hewani + akal) atau Jin (dari api berasap + punya hawa nafsu pendengki), <strong>Malaikat diprogram *hardcode* 100% tanpa fitur <em>nafsu</em> membangkang</strong>. <br><br>Mereka diretas suci total; tak punya kapasitas otak untuk melontarkan protes analisis opini pribadi, absen biologis dari butuh makan minum, murni tanpa gender berjenis kelamin, bisa menyamar <em>(shapeshifter)</em> wujud, dan rasnya mustahil pernah mengalami <em>burnout fatigue</em> (merasa pegal letih lelah) walau sudah beribadah menyembah berjuta abab berturut-turut.
            </p>
            <div class="bg-primary/10 p-5 rounded-2xl border-l-[4px] border-primary">
                <span class="font-bold text-[11px] uppercase tracking-widest text-primary mb-3 block border-b border-primary/20 pb-2">Klaim Bukti Q.S. al-Anbiya': 19</span>
                <p class="text-[13px] font-medium leading-relaxed text-primary-on text-justify">"...Dan seluruh militer (Malaikat-malaikat) yang siaga di sisi-Nya, steril mutlak tak memiliki rasa titik angkuh di nuraninya untuk menolak menyembah-Nya, dan mustahil tak (pula) disentuh rasa letih menegang."</p>
            </div>
        </div>
        <div class="bg-white p-6 md:p-8 rounded-[2.5rem] shadow-sm border border-outline-variant/30 h-full flex flex-col justify-center">
            <h4 class="font-bold text-center border-b border-outline-variant/20 pb-4 mb-5 uppercase tracking-widest text-primary text-sm">10 Kode Rahasia Operasional Malaikat Absolut:</h4>
            <div class="grid grid-cols-2 gap-3 text-[12.5px] font-medium text-on-surface-variant">
                <div class="bg-surface-container hover:bg-primary/10 transition-colors px-3.5 py-2.5 rounded-xl border border-outline-variant/20 cursor-default"><span class="text-primary font-bold block mb-0.5">1. Jibril:</span> Kurir Ekspedisi Wahyu Ilahi</div>
                <div class="bg-surface-container hover:bg-tertiary/10 transition-colors px-3.5 py-2.5 rounded-xl border border-outline-variant/20 cursor-default"><span class="text-tertiary font-bold block mb-0.5">2. Mikail:</span> Distribusi Logistik Rezeki/Hujan</div>
                <div class="bg-surface-container hover:bg-secondary/10 transition-colors px-3.5 py-2.5 rounded-xl border border-outline-variant/20 cursor-default"><span class="text-secondary font-bold block mb-0.5">3. Israfil:</span> Algojo Peniup Sirine Sangkakala</div>
                <div class="bg-surface-container hover:bg-error/10 transition-colors px-3.5 py-2.5 rounded-xl border border-outline-variant/20 cursor-default"><span class="text-error font-bold block mb-0.5">4. Izrail:</span> Cabut Putus Kontrak Nyawa</div>
                <div class="bg-surface-container hover:bg-surface-container-high transition-colors px-3.5 py-2.5 rounded-xl border border-outline-variant/20 cursor-default"><span class="text-on-surface font-bold block mb-0.5">5. Munkar:</span> Intel Interogator Investigasi Kubur</div>
                <div class="bg-surface-container hover:bg-surface-container-high transition-colors px-3.5 py-2.5 rounded-xl border border-outline-variant/20 cursor-default"><span class="text-on-surface font-bold block mb-0.5">6. Nakir:</span> Intel Interogator Brutal Kubur</div>
                <div class="bg-surface-container hover:bg-primary/10 transition-colors px-3.5 py-2.5 rounded-xl border border-outline-variant/20 border-l-4 border-l-primary cursor-default"><span class="text-primary font-bold block mb-0.5">7. Rakib:</span> Auditor CCTV Pencatat File Amal Kebaikan</div>
                <div class="bg-surface-container hover:bg-error/10 transition-colors px-3.5 py-2.5 rounded-xl border border-outline-variant/20 border-l-4 border-l-error cursor-default"><span class="text-error font-bold block mb-0.5">8. Atid:</span> Auditor CCTV Sidik Jari Catat Dosa</div>
                <div class="bg-surface-container hover:bg-tertiary/10 transition-colors px-3.5 py-2.5 rounded-xl border border-outline-variant/20 cursor-default"><span class="text-tertiary font-bold block mb-0.5">9. Ridwan:</span> Satpam Kunci Protokol Surga</div>
                <div class="bg-surface-container hover:bg-error/10 transition-colors px-3.5 py-2.5 rounded-xl border border-outline-variant/20 cursor-default"><span class="text-error font-bold block mb-0.5">10. Malik:</span> Jenderal Penyiksa Eksekutor Api Neraka Jahannam</div>
            </div>
        </div>
    </div>
</div>

<!-- 2. Refleksi Iman -->
<h3 class="font-headline text-2xl font-bold text-secondary mb-6 flex items-center bg-secondary/5 w-max pr-6 py-2 rounded-r-full"><span class="material-symbols-outlined mr-3 bg-secondary text-white w-12 h-12 flex items-center justify-center rounded-full shadow-md">self_improvement</span> 2. Dampak Mutasi Psikologis Berasaskan Iman</h3>
<div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16 px-1">
    <div class="bg-white p-6 md:p-8 rounded-3xl border border-outline-variant/30 shadow-[0_4px_15px_rgba(0,0,0,0.02)] hover:-translate-y-2 transition-transform">
        <div class="w-14 h-14 bg-secondary/10 rounded-2xl flex items-center justify-center mb-5 border border-secondary/20">
            <span class="material-symbols-outlined text-[32px] text-secondary">gpp_maybe</span>
        </div>
        <h4 class="font-bold text-[16px] mb-3 text-secondary tracking-wide">Sensor "Mawas Diri Rem" Aktif Permanen</h4>
        <p class="text-[13.5px] text-on-surface-variant leading-relaxed text-justify font-medium">Berdampak sadar telak bahwa malaikat <em>Rakib dan Atid</em> menempel *invisible* memikul kapasitas memori kamera *real-time* 24/7 memantau otak kanan-kiri. Bikin instan rasa malu bertindak culas di *sosmed*, bahkan pas posisi nyaman mengunci pintu sendirian menyepi dari jangkauan manusia.</p>
    </div>
    <div class="bg-white p-6 md:p-8 rounded-3xl border border-outline-variant/30 shadow-[0_4px_15px_rgba(0,0,0,0.02)] hover:-translate-y-2 transition-transform">
        <div class="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-5 border border-primary/20">
            <span class="material-symbols-outlined text-[32px] text-primary">trending_up</span>
        </div>
        <h4 class="font-bold text-[16px] mb-3 text-primary tracking-wide">Suntikan Dosis Vaksin Anti Putus Asa Ekstrem</h4>
        <p class="text-[13.5px] text-on-surface-variant leading-relaxed text-justify font-medium">Melahirkan gen rasa sangat <em>secure</em> super optimis! Mengapa? Karena lu sadar yakin di balik pertingkahan nasib <em>zero</em> bangkrut, ada sayap gaib dari komando malaikat *Mikail* yang siaga bertugas melacak sinyal keringat letihmu dan 100% mendeposit turun gajimu (jatah logistik rezeki) dr langit scr akurat tanpa potong pajak.</p>
    </div>
    <div class="bg-white p-6 md:p-8 rounded-3xl border border-outline-variant/30 shadow-[0_4px_15px_rgba(0,0,0,0.02)] hover:-translate-y-2 transition-transform group">
        <div class="w-14 h-14 bg-error/10 rounded-2xl flex items-center justify-center mb-5 border border-error/20 group-hover:bg-error transition-colors">
            <span class="material-symbols-outlined text-[32px] text-error group-hover:text-white">hourglass_bottom</span>
        </div>
        <h4 class="font-bold text-[16px] mb-3 text-error tracking-wide group-hover:text-error transition-colors">Disiplin Manajemen Jam Kematian Mengancam</h4>
        <p class="text-[13.5px] text-on-surface-variant leading-relaxed text-justify font-medium">Memukul keras telinga untuk terus-terusan meraba detak detik jam <em>Izrail si Cabut Nyawa</em> berdetak sisa menuju tubuh ringkihmu. Memompa motivasi super ekstra untuk nyicil transfer tabungan nabung saldo amal ibadah bekal darurat di akhirat, mumpung urat nadinya belum mendadak ditebang.</p>
    </div>
</div>

        `
    }, {
        "id": "kls7-smtgenap-bab3",
        "kelas": 7,
        "semester": "Genap",
        "bab": "Bab 3",
        "judul": "Rem Lisan Gibah & Digital Armor Tabayun (Anti-Hoaks)",
        "waktuBumper": "21 Menit Baca",
        "gambar": "images/islamic_calligraphy.png",
        "konten": `

<p class="text-on-surface-variant leading-relaxed text-lg mb-8">
    Bab ini adalah suplemen pedoman paling vital berjuluk <em>Digital Ethics Modern</em> buat warga sosmed! Mari berlatih menjinakkan buasnya algoritma racun lisan dari virus menular penyakit sosial nan hina, eksploitasi <strong>Gibah</strong> (gosip merendahkan keburukan *circle* privasi orang), sekaligus memasang armor tameng radar *Fact-Checker* filter anti-bodoh yakni budaya <strong>Tabayun</strong>.
</p>

<!-- 1. Gibah -->
<h3 class="font-headline text-2xl font-bold text-error mb-6 flex items-center bg-error/5 w-max pr-6 py-2 rounded-r-full"><span class="material-symbols-outlined mr-3 bg-error text-white w-12 h-12 flex items-center justify-center rounded-full shadow-md">virus</span> 1. Kutukan Gibah: Kanibalisme Biadap Terselubung</h3>
<div class="bg-white p-8 md:p-12 rounded-[3.5rem] border-l-[12px] border-error shadow-[0_10px_30px_rgba(255,0,0,0.05)] mb-16 relative overflow-hidden group">
    <span class="material-symbols-outlined absolute -top-10 -right-10 text-[200px] text-error/5 rotate-12 group-hover:scale-110 transition-transform duration-1000">restaurant_menu</span>
    <div class="grid md:grid-cols-5 gap-10 items-center relative z-10">
        <div class="md:col-span-3">
            <p class="text-[15px] text-on-surface-variant mb-8 text-justify leading-relaxed font-medium bg-surface-container-high p-4 rounded-2xl">
                Suka <em>spill</em> bahan keburukan sisi minus temen di belakang padahal dia asik? Mem-<em>bully julid</em> senyap di skena *DM/Group WhatsApp* eksklusif? Itu definisinya murni komplikasi hukum <strong>Gibah</strong> najis. Secara diagnosis bedah psikologis, racun perilaku gibah terpicu cacat <em>Inferiority complex mental</em> (Penyakit campuran kronis sirik iri hati buta kelotokan, jiwa kerdil minder akut kalah tenar, lalu ngerasa sipaling *playing victim* benar tinggi merendahkan).
            </p>
            <div class="bg-error/10 p-6 rounded-3xl border border-error/20 inline-block w-full">
                <span class="font-bold text-[11px] uppercase tracking-widest text-error mb-3 block inline-block bg-white px-3 py-1 rounded shadow-sm border border-error/10">Ketukan Vonis Fatal Q.S. al-Hujurat: 12</span>
                <p class="text-[14.5px] font-medium leading-relaxed italic text-error-on text-justify">"...Dan mutlak haram gatel lisanmu mencari-cari aib bangkai dosa orang, dan janganlah saling menggunjingkan (gibah). <strong>Adakah seorang bajingan berotak di antara kalian yang lahap nikmat mengunyah selapis demi selapis memakan daging tubuh saudara kalian yang sudah membusuk modar teler dibunuh mati bangkai?</strong> Tentu kau muntah ngerasa jijik setengah menjuluk ludah!"</p>
            </div>
        </div>
        <div class="md:col-span-2 relative z-10 flex flex-col justify-center h-full">
            <h4 class="font-bold text-[14px] uppercase tracking-widest text-error border-b border-error/20 pb-3 mb-5">Obat Terapi Rehabilitasi Lisan:</h4>
            <div class="space-y-4">
                <div class="bg-white p-4 rounded-xl text-[13px] font-medium flex items-start gap-4 shadow-sm border hover:border-error transition-colors"><span class="material-symbols-outlined text-error text-[22px] mt-0.5">group_remove</span> <div class="text-justify leading-relaxed">Eksekusi <em>Unfollow & Leave/Block</em> *Circle* kumpulan gerombolan manusia toksik julid yang mulutnya minus berbusa nyinyir aib *circle* lain! Hukum teman penempaan pandai besi bara apinya mencipratimu.</div></div>
                <div class="bg-white p-4 rounded-xl text-[13px] font-medium flex items-start gap-4 shadow-sm border hover:border-error transition-colors"><span class="material-symbols-outlined text-error text-[22px] mt-0.5">mirrored_stranglehold</span> <div class="text-justify leading-relaxed">Tampar telak dirimu disisi kaca refleksi sadar <strong>Introspeksi.</strong> Ngaca bos! Daftar borok catatan busuk aib hitam dirimu <em>list-nya</em> sendirinya numpuk gak ada ujung buat diplintir malu!</div></div>
                <div class="bg-white p-4 rounded-xl text-[13px] font-medium flex items-start gap-4 shadow-sm border hover:border-error transition-colors"><span class="material-symbols-outlined text-error text-[22px] mt-0.5">backspace</span> <div class="text-justify leading-relaxed">Mending telan ludah <strong>Tutup Rapat Typing Keybordmu & Puasa Bisu Lisan Hampa Kosong!</strong> (Daripada bacot cuma bakar amal pahala percuma buat di-transfer ke akun musuh orang yang kamu hina julidin).</div></div>
            </div>
        </div>
    </div>
</div>

<!-- 2. Tabayun -->
<h3 class="font-headline text-2xl font-bold text-primary mb-6 flex items-center bg-primary/5 w-max pr-6 py-2 rounded-r-full"><span class="material-symbols-outlined mr-3 bg-primary text-white w-12 h-12 flex items-center justify-center rounded-full shadow-md">fact_check</span> 2. Eksekusi Tabayun: Antivirus Kebodohan Skala Nasional Hoax Massal</h3>
<div class="bg-surface-container-low p-8 md:p-12 rounded-[3.5rem] border border-outline-variant/30 shadow-sm mb-16">
    <div class="mb-10 text-center max-w-4xl mx-auto">
        <span class="material-symbols-outlined text-6xl text-primary mb-2">policy</span>
        <p class="text-[15.5px] font-medium text-on-surface leading-relaxed relative bg-white p-6 rounded-3xl border border-primary/20 shadow-sm">
            Kalo nyasar nerima tembakan bom lemparan jarkoman *Broadast* Grup WA emak / TikTok / VT *clickbait* ngawur sensasional membongkar rahasia konyol bombastis? <strong>REMMMM! Haram pencet jari asal modal insting langsung klik <em>Forward / Repp-Thread Share!</em> TABAYUN-LAH BANG!</strong> <br><br>Tabayun memilah detektif verifikasi merilis identifikasi <em>research menakar logika jurnalistik meneliti dan menyeleksi urat fakta data</em> berita miring secara netral kepala es batu bertensi stabil, tanpa sedetikpun tergesa-gesa tersulut hawa emosi buta nafsu *framing* isu buatan politis palsu pecah belah demi menyayat urat pemutus laju sebaran infeksi bakteri rantai penyebaran sel gen mutasi <em>Hoaks!</em>
        </p>
    </div>
    
    <div class="grid md:grid-cols-2 gap-10 items-stretch">
        <div class="bg-primary p-8 md:p-10 rounded-[2.5rem] text-white shadow-lg relative overflow-hidden flex flex-col justify-center">
            <span class="material-symbols-outlined absolute -left-8 -bottom-8 text-[200px] text-white/10 -rotate-12">warning_amber</span>
            <span class="font-bold text-[11px] uppercase tracking-widest text-[#FFF] bg-white/20 inline-block px-3 py-1.5 rounded mb-5 relative z-10 w-max shadow-sm border border-white/30">Ancaman Sakral Q.S. al-Hujurat: 6</span>
            <div class="text-[15px] italic leading-relaxed font-medium relative z-10 border-l-[6px] border-white/50 pl-6 text-justify">
                "Hai kalian para gerombolan orang beriman beretika otak genetik! Kalau 1 hari sepotong *buzzer* intel asik pecundang sampah / orang fasik cacat kepribadian dateng bawain lempar lu kado pelintiran berita framing tipuan gosip receh murahan berisik nyulut pitam, TAHAN! <strong>TELAAH VERIFIKASI SEKAT RISET FAKTA BERITA SILANG ANALISIS KEASLIAN BENARNYA (TABAYUN Mutlak)</strong>... Mengapa? Biar elo telak nggak asal jebret merugikan melenyapkan bunuh <em>cancel culture</em> nyawa reputasi sosial karir kaum bersih malang ber-kasta baik yg kebetulan sasaran target tak bersalah cuman gegara imbas modal ngebacot asumsi kebodoh cemplung ceroboh ketikan jarimu buta sempitmu doang kawan, yang akhirnya nyatanya keesoknya pasti seribu persen membatumu muntah keblinger menangisi nyesal sesal sujud nangis 7 turunan menyesali rekam jejak siksa sisa sel perbuatan lu yg gak bakal ke-hapus serpih arangnya bos!"
            </div>
        </div>
        
        <div class="bg-white p-8 rounded-[2.5rem] border border-outline-variant/30 shadow-[0_4px_20px_rgba(0,0,0,0.02)] h-full">
            <h4 class="font-bold text-primary mb-6 border-b border-outline-variant/20 pb-3 text-lg font-headline flex items-center"><span class="material-symbols-outlined mr-2">gpp_good</span> Protap SOP Tabayun Kritis Dera Era Literasi Netizen Gawat Darurat Digital:</h4>
            <ul class="text-[13.5px] font-medium text-on-surface-variant space-y-5">
                <li class="flex items-start gap-4">
                    <span class="bg-primary/10 text-primary w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border border-primary/20"><span class="material-symbols-outlined text-[20px]">verified</span></span> 
                    <div class="text-justify leading-relaxed pt-1"><strong>Lacak Validitas Domain DNA Asal Otoritas Sumber Media Pers:</strong> Profil kanal *News* portal url resmi komersil PT. lisensi bercentang biru kepegawaian jelas rekam jejak jurnalistik rujukan *Fact Checking* tersertifikasi Dewan Pers Independen? (Link wordpress gratisan ghoib curian akala anonim = Langsung Blokir Report Sampah Otomatis).</div>
                </li>
                <li class="flex items-start gap-4">
                    <span class="bg-primary/10 text-primary w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border border-primary/20"><span class="material-symbols-outlined text-[20px]">title</span></span> 
                    <div class="text-justify leading-relaxed pt-1"><strong>Red Flags Jebakan Mengerikan Adiksi *Clickbait* Konten Sial:</strong> Judul kapital alay bombastis *"KLIK SHARE KALAU GAK MATI BESOK"* seruan nalar *provokatif framing hyperbole* dipastikan fiktif. Selalu wajib imbang tabrak cari *compare* riset 3 URL situs warta sekuler sentris berlawanan netral! Analisa letak *bias opinion* versus data statistik resmi!</div>
                </li>
                <li class="flex items-start gap-4">
                    <span class="bg-primary/10 text-primary w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border border-primary/20"><span class="material-symbols-outlined text-[20px]">image_search</span></span> 
                    <div class="text-justify leading-relaxed pt-1"><strong>Forensik Visual *Reverse Image Engine Search*:</strong> Haram mendarah percaya nge-<em>share</em> mentah video TikTok <em>framing filter</em> 5 detik / potong <em>Crop out context</em> membagongkan, apalagi hasil cetakan generator rekayasa <em>Deepfake/AI</em> bot, kebangetan tololnya kalo dimuntahin tanpa nonton sidik kronologi rekaman CCTV wawancara versi durasi kasarnya *Uncut Raw Footage* aslinya dari detik pertama lahir sampe abis.</div>
                </li>
            </ul>
        </div>
    </div>
</div>

        `
    }, {
        "id": "kls7-smtgenap-bab4",
        "kelas": 7,
        "semester": "Genap",
        "bab": "Bab 4",
        "judul": "Rukhsah: Bypass Kemudahan Logis Beribadah Kepada-Nya",
        "waktuBumper": "18 Menit Baca",
        "gambar": "images/islamic_calligraphy.png",
        "konten": `

<p class="text-on-surface-variant leading-relaxed text-lg mb-8">
    Banyak orang merasa syariat Islam itu kaku horor dan memberatkan. Padahal, Allah SWT sangat fleksibel penuh pengertian logis. Bab ini membedah fitur <strong>Rukhsah (Diskon/Keringanan Beban Ibadah)</strong>! Membuktikan konstitusi kita adalah agama super rasional yang terbiasa memanusiakan batas energi manusia merespons ancaman kondisi *Darurat!*
</p>

<!-- 1. Makna Rukhsah -->
<h3 class="font-headline text-2xl font-bold text-primary mb-6 flex items-center bg-primary/5 w-max pr-6 py-2 rounded-r-full"><span class="material-symbols-outlined mr-3 bg-primary text-white w-12 h-12 flex items-center justify-center rounded-full shadow-md">local_offer</span> 1. Apa itu Rukhsah (Voucher Keringanan)?</h3>
<div class="bg-surface-container-low p-8 rounded-[2.5rem] border border-outline-variant/30 shadow-[0_4px_15px_rgba(0,0,0,0.02)] mb-14 relative overflow-hidden">
    <div class="grid md:grid-cols-2 gap-10 items-stretch relative z-10">
        <div class="flex flex-col justify-center">
            <p class="text-[14.5px] text-on-surface-variant mb-6 text-justify leading-relaxed font-medium bg-white p-5 rounded-2xl shadow-sm border border-outline-variant/20">
                <strong>Rukhsah</strong> secara akar harfiah linguistik bermakna <em>"Pelonggaran Diskon Keringanan"</em>. Secara yuridis Fiqih, maknanya adalah: Dispensasi Surat Izin resmi rilis dari Tuhan kepada para <em>Mukalaf</em> (Muslim dewasa berakal sehat) untuk menyeleweng menyimpang me-skip hukum wajib awal akibat dicepit himpitan kondisi Darurat yang mustahil ditembus logis.
            </p>
            <div class="bg-primary/10 p-5 rounded-2xl border-l-[6px] border-primary">
                <span class="font-bold text-[11px] uppercase tracking-widest text-primary mb-2 block font-headline border-b border-primary/20 pb-2">Surat Edaran Q.S. al-Baqarah: 185</span>
                <p class="text-[13.5px] font-medium leading-relaxed italic text-primary-on mt-2 text-justify">"...Karena sejatinya Allah itu mutlak hanya menghendaki <strong>rute Kemudahan</strong> yang instan bagi kaummu, dan absolut haram Dia menghendaki <strong>rute Kesukaran Bencana</strong> membebankan punggung umat kawan..."</p>
            </div>
        </div>
        <div class="bg-white p-7 rounded-[2rem] border border-outline-variant/30 shadow-sm relative overflow-hidden group hover:border-primary transition-colors">
            <span class="material-symbols-outlined absolute -right-6 -bottom-6 text-[130px] text-primary/5 group-hover:scale-110 transition-transform">health_and_safety</span>
            <h4 class="font-bold text-[14px] uppercase tracking-wider text-primary border-b border-outline-variant/20 pb-3 mb-5">4 Kunci Parameter Aktivasi Klaim Rukhsah:</h4>
            <div class="space-y-3.5 relative z-10 text-[13.5px] font-medium text-on-surface-variant">
                <div class="flex items-center gap-4 bg-surface-container hover:bg-error/10 transition-colors px-4 py-3 rounded-xl cursor-default"><span class="material-symbols-outlined text-error text-[22px]">sick</span> <span class="leading-relaxed"><strong>Sakit Fisik Ekstrem</strong> (Resiko mati/parah jika menabrak ibadah normal).</span></div>
                <div class="flex items-center gap-4 bg-surface-container hover:bg-tertiary/10 transition-colors px-4 py-3 rounded-xl cursor-default"><span class="material-symbols-outlined text-tertiary text-[22px]">flight_takeoff</span> <span class="leading-relaxed"><strong>Batas Navigasi Musafir</strong> (Perjalanan darat lelah minimal tembus 80-90 KM).</span></div>
                <div class="flex items-center gap-4 bg-surface-container hover:bg-secondary/10 transition-colors px-4 py-3 rounded-xl cursor-default"><span class="material-symbols-outlined text-secondary text-[22px]">warning</span> <span class="leading-relaxed"><strong>Ancaman Darurat Terpaksa</strong> (Disandera penculik / Ancaman pisau pembunuhan).</span></div>
                <div class="flex items-center gap-4 bg-surface-container hover:bg-primary/10 transition-colors px-4 py-3 rounded-xl cursor-default"><span class="material-symbols-outlined text-primary text-[22px]">not_listed_location</span> <span class="leading-relaxed"><strong>Lupa Pikun Absolut</strong> (Blank ketidaktahuan amnesia murni tak disengajain pura-pura).</span></div>
            </div>
        </div>
    </div>
</div>

<!-- 2. Bentuk Keringanan -->
<h3 class="font-headline text-2xl font-bold text-secondary mb-6 flex items-center bg-secondary/5 w-max pr-6 py-2 rounded-r-full"><span class="material-symbols-outlined mr-3 bg-secondary text-white w-12 h-12 flex items-center justify-center rounded-full shadow-md">apps</span> 2. Katalog Dispensasi Eksekutif Ibadah</h3>
<div class="grid md:grid-cols-2 gap-6 mb-16">
    <!-- Salat -->
    <div class="bg-white p-7 rounded-[2rem] border-t-[6px] border-t-primary shadow-[0_4px_15px_rgba(0,0,0,0.02)] hover:shadow-md transition-shadow relative overflow-hidden">
        <div class="flex items-center gap-4 mb-5 border-b border-outline-variant/20 pb-4">
            <span class="bg-primary/10 text-primary w-14 h-14 rounded-2xl flex items-center justify-center border border-primary/20"><span class="material-symbols-outlined text-[28px]">man</span></span>
            <h4 class="font-bold text-[18px] text-on-surface">Paket Bypass Salat *(Qasar / Jamak)*</h4>
        </div>
        <ul class="text-[13.5px] text-on-surface-variant leading-relaxed space-y-4 font-medium px-2 text-justify">
            <li class="flex items-start gap-3"><span class="bg-primary text-white w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 text-[10px]">1</span> <strong>Qasar (Diskon Rakaat 50%):</strong> Terik kepanasan *traveling* antar provinsi? Niat Salat Zuhur, Asar, Isya (yang berat 4 rakaat) boleh diringkas tajam sisa 2 rakaat saja. Cash lunas!</li>
            <li class="flex items-start gap-3"><span class="bg-primary text-white w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 text-[10px]">2</span> <strong>Jamak (Gabung Shift):</strong> Sibuk nyetir *stuck* jalan toll? Pindah paket jamak narik waktu Zuhur gabung dieksekusi numpang di ring Asar (Takhir), dan viceversa (Takdim).</li>
            <li class="flex items-start gap-3"><span class="bg-primary text-white w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 text-[10px]">3</span> <strong>Lumpuh Sakit:</strong> Gak kuat kaki berdiri? Turun kasta sah salat sambil duduk kursi. Makin Kritis di ranjang UGD? Sambil baring rebahan muka natap atap. Lumpuh stroke koma ICU? Kedipan nafas isyarat kode gerak mata udah Sah Gugur lunas!</li>
        </ul>
    </div>
    
    <!-- Puasa -->
    <div class="bg-white p-7 rounded-[2rem] border-t-[6px] border-t-error shadow-[0_4px_15px_rgba(0,0,0,0.02)] hover:shadow-md transition-shadow relative overflow-hidden">
        <div class="flex items-center gap-4 mb-5 border-b border-outline-variant/20 pb-4">
            <span class="bg-error/10 text-error w-14 h-14 rounded-2xl flex items-center justify-center border border-error/20"><span class="material-symbols-outlined text-[28px]">restaurant</span></span>
            <h4 class="font-bold text-[18px] text-on-surface">Paket Cuti Puasa Ekstrem Ramadan</h4>
        </div>
        <ul class="text-[13.5px] text-on-surface-variant leading-relaxed space-y-4 font-medium px-2 text-justify">
            <li class="flex items-start gap-3"><span class="bg-error text-white w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 text-[10px]">1</span> <strong>Fitur Haid/Nifas Pendarahan:</strong> HARAM DOSA lanjut tempur puasa! (Diwajibkan buka batal instan, gak boleh maksa nekat, cukup diganti hutangnya (*Qada*) santai di luar bulan suci puasa).</li>
            <li class="flex items-start gap-3"><span class="bg-error text-white w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 text-[10px]">2</span> <strong>Ibu Hamil / Menyusui Kritis:</strong> Boleh buka putus puasa demi nge-<em>save</em> nyawa janin resiko cacat dehidrasi lambung, bayar tebus hutang *Qada* ATAU opsi traktir Denda *Fidyah* (Beli makan beras santunan fakir).</li>
            <li class="flex items-start gap-3"><span class="bg-error text-white w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 text-[10px]">3</span> <strong>Lansia Renta Permanen:</strong> Kakek pikun kritis lemah? Silakan buka batal permanen seumur sisa hidup, tak perlu mumet utang ganti *Qada*, pure jatah bayar *Fidyah* murah saja!</li>
        </ul>
    </div>
    
    <!-- Haji & Zakat -->
    <div class="bg-white p-7 rounded-[2rem] border-t-[6px] border-t-tertiary shadow-[0_2px_15px_rgba(0,0,0,0.02)] col-span-1 md:col-span-2 group hover:border-l-primary transition-all flex flex-col md:flex-row items-center gap-8">
        <div class="shrink-0 w-24 h-24 bg-tertiary/10 rounded-full flex items-center justify-center border-[4px] border-tertiary/20">
            <span class="material-symbols-outlined text-[50px] text-tertiary">request_quote</span>
        </div>
        <div>
            <h4 class="font-bold text-[18px] text-on-surface mb-3 border-b border-outline-variant/20 pb-2 w-max">Limit Harta Zakat & Avatar Joki Haji</h4>
            <p class="text-[13.5px] text-on-surface-variant leading-relaxed font-medium text-justify">
                Tuhan tidak memalak uang buruh miskin! Tabungan emas bank kamu tak akan ditaruh pisau leher buat dirampas rasio wajib zakatnya 2.5%, kecuali jika tandon dompetmu nembus radar ambang batas <strong>Nisab</strong> (Misal: Limit harta mati setara minimal genggaman 85 gram emas antam murni) dan tabungannya numpuk diemin nganggur mengendap durasi 1 tahun Masehi (<strong>Haul</strong>). <br><br>Gimana dengan status Rukun Islam Haji? Haji itu eksklusif tajam disasarkan bagi kaum <em>Berkemampuan Finansial & Vaksin Sehat Fisik (<strong>Istita'ah Kuota</strong>)</em>. Kalau kamu konglomerat tapi takdir stroke koma cuci darah? Islam melegalkan sistem Avatar sewa proxy perwakilan via <strong>Haji Badal (Diwakilkan Joki)</strong>. *Super Fair!*
            </p>
        </div>
    </div>
</div>

        `
    }, {
        "id": "kls7-smtgenap-bab5",
        "kelas": 7,
        "semester": "Genap",
        "bab": "Bab 5",
        "judul": "Andalusia: Metropolis Sains Peradaban Islam di Barat Eropa",
        "waktuBumper": "25 Menit Baca",
        "gambar": "images/islamic_calligraphy.png",
        "konten": `

<p class="text-on-surface-variant leading-relaxed text-lg mb-8">
    Bosan mengkaji teritori padang pasir arab timur terus (Damaskus/Baghdad)? Ini saat nya portal putaran <em>Time Machine</em> menembakkan jangkarnya ke gerbang Benua Barat Eropa elit (semenanjung Spanyol & Portugal)! Mari menjelajah metropolis gemerlap <strong>Cordova / Andalusia</strong>, sebuah mercusuar sumbu silikon *Super-Engine* peradaban ilmiah medis islam yg mendobrak kelak era kemundian masa kegelapan otak benua eropa barat abad pertengahan!
</p>

<!-- 1. The Great Escape -->
<h3 class="font-headline text-2xl font-bold text-primary mb-6 flex items-center bg-primary/5 w-max pr-6 py-2 rounded-r-full"><span class="material-symbols-outlined mr-3 bg-primary text-white w-12 h-12 flex items-center justify-center rounded-full shadow-md">sailing</span> 1. *The Great Escape:* Invasi Elang Bani Umayyah</h3>
<div class="bg-gradient-to-br from-[#1B3B5A] to-[#2B567D] p-8 md:p-12 rounded-[3.5rem] shadow-[0_10px_30px_rgba(0,0,0,0.1)] relative overflow-hidden mb-16 flex flex-col md:flex-row gap-10 items-center justify-between text-white">
    <span class="material-symbols-outlined absolute -right-5 top-10 text-[280px] text-white/5 rotate-[15deg] pointer-events-none drop-shadow-2xl">castle</span>
    
    <div class="md:w-2/3 relative z-10">
        <div class="inline-flex items-center gap-3 mb-6 bg-white/10 p-2 pr-6 rounded-full border border-white/20 backdrop-blur-md">
            <span class="bg-tertiary text-white w-10 h-10 flex flex-col justify-center items-center rounded-full font-bold shadow-inner">
                <span class="text-[10px] uppercase leading-none">TAHUN</span>
                <span class="text-[14px]">756 M</span>
            </span>
            <span class="text-[14px] font-bold uppercase tracking-widest text-[#FFD700]">Republik Kordoba Berdiri</span>
        </div>
        
        <p class="text-[14.5px] leading-relaxed text-justify mb-8 font-medium text-white/90">
            Plot cerita sinema *blockbuster survival*: Saat tsunami badai pedang revolusi Abbasiyah menggulingkan merudal runtuh kastil ibukota keluarga Daulah Umayyah Timur (Damaskus) pada puncaknya thn 750 M, memuntahkan eksekusi massal berantai...<br><br>Di sinilah keajaiban terjadi. Salah satu pewaris *Blueprint* pangeran jenius muda Umayyah, membanting pelarian buronan keji menyelinap lolos lari dari maut! Namanya sang legenda <strong>Abdurrahman ad-Dakhil</strong>. <br><br>Nekat bermanuver melintasi rawa, membelah ganas arungan lautan ombak Samudera Mediterania lintas afrika utara, sukses menyelundup terdampar ke pesisir eropa. Berkat karisma retorikanya, ia memediasi menyatukan seluruh suku pangeran fraksi muslim barbar liar cordoba yang tadinya perang proksi antar suku pecah belah, bersatu diproklamirkan membangun monarki imperium baru bertajuk <strong>Kekhalifahan Muslim Spanyol Andalusia</strong> yang megah independen lepas kongsi dari sisa kendali komando Baghdad!
        </p>
        
        <div class="inline-flex flex-wrap gap-3">
            <span class="bg-primary/30 text-white text-[11px] uppercase font-bold tracking-widest px-4 py-2.5 rounded-xl border border-white/20 shadow-sm backdrop-blur-sm flex items-center shadow-[0_2px_10px_rgba(0,0,0,0.5)]"><span class="material-symbols-outlined text-[16px] mr-2">supervised_user_circle</span> Fase Emir Gubernuran (Cabang)</span>
            <span class="bg-error/30 text-white text-[11px] uppercase font-bold tracking-widest px-4 py-2.5 rounded-xl border border-white/20 shadow-sm backdrop-blur-sm flex items-center shadow-[0_2px_10px_rgba(0,0,0,0.5)]"><span class="material-symbols-outlined text-[16px] mr-2">crown</span> Fase Khalifah Otonomi Absolut</span>
        </div>
    </div>
    
    <div class="md:w-1/3 flex justify-center pb-4 md:pb-0 relative z-10 shrink-0">
        <div class="w-40 h-40 md:w-52 md:h-52 rounded-full border-[6px] border-white/20 shadow-[0_0_40px_rgba(255,255,255,0.15)] overflow-hidden bg-black/50 p-2">
            <img src="images/islamic_calligraphy.png" class="w-full h-full object-cover rounded-full opacity-80 mix-blend-screen hover:scale-110 transition-transform duration-700">
        </div>
    </div>
</div>

<!-- 2. Science Capital -->
<h3 class="font-headline text-2xl font-bold text-secondary mb-6 flex items-center bg-secondary/5 w-max pr-6 py-2 rounded-r-full"><span class="material-symbols-outlined mr-3 bg-secondary text-white w-12 h-12 flex items-center justify-center rounded-full shadow-md">memory</span> 2. Universitas <em>Silicon Valley-nya</em> Eropa</h3>
<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
    <!-- Kedokteran Filsafat -->
    <div class="bg-white p-7 rounded-[2rem] border border-outline-variant/30 shadow-[0_4px_15px_rgba(0,0,0,0.02)] group hover:-translate-y-1 transition-all">
        <div class="w-12 h-12 bg-secondary/10 text-secondary rounded-xl flex items-center justify-center mb-4 border border-secondary/20">
            <span class="material-symbols-outlined text-[24px]">lightbulb</span>
        </div>
        <h4 class="text-[17px] font-bold border-b border-outline-variant/20 pb-3 mb-4 text-on-surface">Pilar Kedokteran & Otak Filsafat</h4>
        <ul class="text-[13px] leading-relaxed text-on-surface-variant font-medium space-y-4">
            <li><strong>Ibn Rusyd (Averroes):</strong> Mastermind bedah Aristoteles dan doktriner kedokteran syaraf. Buah pikiran buku org ini kelak diretas dikopi dijiplak bangsa eropa sampe bikin merinding terpicu zaman pencerahan benua eropa *Renaissance*.</li>
            <li><strong>Ibn Tufail:</strong> Menulis naskah skrip novel ekstrim filosofis evolusi *Sci-Fi* bertajuk lakon *"Hayy bin Yaqzan"*.</li>
        </ul>
    </div>
    
    <!-- Aviation / Science -->
    <div class="bg-white p-7 rounded-[2rem] border border-outline-variant/30 shadow-[0_4px_15px_rgba(0,0,0,0.02)] group hover:-translate-y-1 transition-all">
        <div class="w-12 h-12 bg-tertiary/10 text-tertiary rounded-xl flex items-center justify-center mb-4 border border-tertiary/20">
            <span class="material-symbols-outlined text-[24px]">rocket_launch</span>
        </div>
        <h4 class="text-[17px] font-bold border-b border-outline-variant/20 pb-3 mb-4 text-on-surface">Prototipe Penerbangan Udara</h4>
        <ul class="text-[13px] leading-relaxed text-on-surface-variant font-medium space-y-4">
            <li><strong>Mbah Abbas Ibn Farnas:</strong> Ratusan tahun jauuuh sebelum *Wright Brothers* kepikir narik mesin pesawat barat. Eyang ini udah loncat prototipe eksperimen merekatkan mesin simulasi luncur sayap burung raksasa dari lereng kota *Cordoba Aviator Project*. Dialah cikal bakal pakar pelebur kaca pasir bening.</li>
        </ul>
    </div>
    
    <!-- Hukum -->
    <div class="bg-white p-7 rounded-[2rem] border border-outline-variant/30 shadow-[0_4px_15px_rgba(0,0,0,0.02)] group hover:-translate-y-1 transition-all sm:col-span-2 lg:col-span-1 flex flex-col">
        <div class="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-4 border border-primary/20">
            <span class="material-symbols-outlined text-[24px]">gavel</span>
        </div>
        <h4 class="text-[17px] font-bold border-b border-outline-variant/20 pb-3 mb-4 text-on-surface">Konsep Konstitusi Toleran</h4>
        <ul class="text-[13px] leading-relaxed text-on-surface-variant font-medium space-y-4 flex-1 text-justify">
            <li><strong>Supremasi Mazhab Maliki:</strong> Kenapa Andalusia damai harmonis? Karena pemerintah spanyol memproteksi sistem Hukum Perdata Hakim dari corak fleksibilitas *Mazhab Imam Malik*. Hasilnya ajaib? Kristen katolik minor, ras imigrasi yahudi sekuler, serta mayoritas Islam lokal sanggup kongko bisnis ngopi semeja tanpa ngeributin cekcok diskriminasi *ras identitas* setetes darah pun. Saking majunya!</li>
        </ul>
    </div>
</div>

        `
    }, {
        "id": "kls8-smtganjil-bab1",
        "kelas": 8,
        "semester": "Ganjil",
        "bab": "Bab 1",
        "judul": "Inspirasi Al-Qur'an: Melestarikan Alam, Menjaga Kehidupan",
        "waktuBumper": "14 Menit Baca",
        "gambar": "images/islamic_calligraphy.png",
        "konten": `

<p class="text-on-surface-variant leading-relaxed text-lg mb-8">
    Bab perdana di Kelas 7-9-9 ini mengajak kita menyelami ajaran tauhid ekologis dalam Islam—yakni kesadaran penuh bahwa alam semesta adalah titipan mulia Allah untuk dikelola, bukan untuk dirusak, serta bagaimana perilaku kita menentukan nasib bumi.
</p>

<!-- 1. Tajwid: Ra & Lam Jalalah -->
<h3 class="font-headline text-2xl font-bold text-primary mt-12 mb-6 flex items-center">
    <span class="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mr-4 shrink-0">
        <span class="material-symbols-outlined text-[24px]">spellcheck</span>
    </span>
    1. Tajwid: Hukum Ra (ر) & Lam Jalalah (ل)
</h3>
<p class="text-on-surface-variant mb-6 text-sm">Sebelum merenungi ayat pelestarian alam, pastikan bacaan Al-Qur'an kita bertajwid sempurna, khususnya terkait ketebalan huruf Ra dan Lam pada lafaz Allah.</p>

<div class="grid lg:grid-cols-2 gap-8 mb-16">
    
    <!-- Hukum Ra -->
    <div class="bg-surface-container-low rounded-[2rem] border border-outline-variant/30 overflow-hidden shadow-sm">
        <div class="bg-primary/10 p-4 border-b border-outline-variant/20 flex justify-between items-center">
            <h4 class="font-bold text-lg text-primary">Hukum Huruf Ra (ر)</h4>
            <span class="material-symbols-outlined text-primary/50 text-3xl">r_mobiledata</span>
        </div>
        <div class="p-6 space-y-4">
            <div class="bg-white p-4 rounded-xl shadow-[0_2px_10px_rgba(0,0,0,0.03)] border-l-4 border-error">
                <h5 class="font-bold text-error text-sm mb-1">Tebal (Tafkhim / تَفْخِيمٌ)</h5>
                <p class="text-xs text-on-surface-variant leading-relaxed">Ra berharakat fathah (رَ) atau dammah (رُ). Jika sukun (رْ), perhatikan huruf sebelumnya: wajib tebal jika huruf sebelumnya fathah/dammah, atau didahului hamzah wasal, atau didahului alif/wau mad.</p>
                <div class="mt-2 text-right font-quran text-lg text-error-container-on bg-error/5 p-2 rounded-lg" dir="rtl">رَ - رُ - فَوْقَهُنَّ</div>
            </div>
            
            <div class="bg-white p-4 rounded-xl shadow-[0_2px_10px_rgba(0,0,0,0.03)] border-l-4 border-secondary">
                <h5 class="font-bold text-secondary text-sm mb-1">Tipis (Tarqiq / تَرْقِيقٌ)</h5>
                <p class="text-xs text-on-surface-variant leading-relaxed">Ra berharakat kasrah (رِ). Jika sukun (رْ), wajib dibaca tipis/meringis jika huruf sebelumnya berharakat kasrah (kecuali jika setelahnya ada huruf istila') atau didahului ya' sukun.</p>
                <div class="mt-2 text-right font-quran text-lg text-secondary-container-on bg-secondary/5 p-2 rounded-lg" dir="rtl">رِ - فِرْعَوْنَ - خَيْرٌ</div>
            </div>
        </div>
    </div>

    <!-- Hukum Lam Jalalah -->
    <div class="bg-surface-container-low rounded-[2rem] border border-outline-variant/30 overflow-hidden shadow-sm">
        <div class="bg-tertiary/10 p-4 border-b border-outline-variant/20 flex justify-between items-center">
            <h4 class="font-bold text-tertiary text-lg">Hukum Lam Jalalah (اللَّهُ)</h4>
            <span class="font-quran text-tertiary/50 text-3xl">ل</span>
        </div>
        <div class="p-6 space-y-4">
            <p class="text-xs text-on-surface-variant mb-4">Berlaku mutlak pada kata <strong>Allah (اللَّهُ)</strong> atau <strong>Allahumma (اللَّهُمَّ)</strong> berdasarkan harakat ujung huruf sebelumnya.</p>
            
            <div class="bg-white p-4 rounded-xl shadow-[0_2px_10px_rgba(0,0,0,0.03)] border-l-4 border-error">
                <h5 class="font-bold text-error text-sm mb-1">Tebal (Tafkhim)</h5>
                <p class="text-xs text-on-surface-variant leading-relaxed">Lam dibaca tebal/membulat jika lafaz Allah jatuh setelah huruf yang berharakat <strong>fathah</strong> (A) atau <strong>dammah</strong> (U).</p>
                <div class="mt-2 text-right font-quran text-lg text-error-container-on bg-error/5 p-2 rounded-lg" dir="rtl">قَالَ اللَّهُ - عَبْدُ اللَّهِ</div>
            </div>
            
            <div class="bg-white p-4 rounded-xl shadow-[0_2px_10px_rgba(0,0,0,0.03)] border-l-4 border-secondary">
                <h5 class="font-bold text-secondary text-sm mb-1">Tipis (Tarqiq)</h5>
                <p class="text-xs text-on-surface-variant leading-relaxed">Lam dibaca tipis/meringis ke bawah jika lafaz Allah jatuh persis setelah huruf yang berharakat <strong>kasrah</strong> (I).</p>
                <div class="mt-2 text-right font-quran text-lg text-secondary-container-on bg-secondary/5 p-2 rounded-lg" dir="rtl">بِسْمِ اللَّهِ - بِاللَّهِ</div>
            </div>
        </div>
    </div>

</div>

<!-- 2. Ayat Alam Semesta -->
<h3 class="font-headline text-2xl font-bold text-primary mt-12 mb-8 text-center"><span class="material-symbols-outlined text-3xl align-middle text-primary mr-2">public</span> Manusia & Alam Semesta</h3>

<!-- Q.S. Ar-Rum -->
<div class="bg-gradient-to-br from-error/10 to-transparent border-l-8 border-error rounded-r-3xl p-8 mb-8 relative overflow-hidden">
    <div class="flex justify-between items-start mb-4">
        <h4 class="font-bold text-error text-lg">Peringatan Kerusakan Bumi</h4>
        <span class="bg-error text-white text-xs px-3 py-1 rounded-full font-bold tracking-widest">Q.S. AR-RUM [30]: 41</span>
    </div>
    <div class="text-right font-quran text-3xl leading-[2.5] mb-6 text-on-surface" dir="rtl">
        ظَهَرَ الْفَسَادُ فِي الْبَرِّ وَالْبَحْرِ بِمَا كَسَبَتْ أَيْدِي النَّاسِ لِيُذِيقَهُمْ بَعْضَ الَّذِي عَمِلُوْا لَعَلَّهُمْ يَرْجِعُوْنَ
    </div>
    <div class="font-body italic text-on-surface-variant text-md pt-4 border-t border-error/20">
        "Telah tampak kerusakan di darat dan di laut <strong>disebabkan karena perbuatan tangan manusia</strong>; Allah menghendaki agar mereka merasakan sebagian dari (akibat) perbuatan mereka, agar mereka kembali (ke jalan yang benar)."
    </div>
</div>

<!-- Q.S. Ibrahim -->
<div class="bg-gradient-to-br from-primary/10 to-transparent border-l-8 border-primary rounded-r-3xl p-8 mb-8 relative overflow-hidden">
    <div class="flex justify-between items-start mb-4">
        <h4 class="font-bold text-primary text-lg">Rantai Ekosistem & Karunia</h4>
        <span class="bg-primary text-white text-xs px-3 py-1 rounded-full font-bold tracking-widest">Q.S. IBRAHIM [14]: 32</span>
    </div>
    <div class="text-right font-quran text-2xl leading-[2.5] mb-6 text-on-surface" dir="rtl">
        اللَّهُ الَّذِي خَلَقَ السَّمَوَاتِ وَالْأَرْضَ وَأَنْزَلَ مِنَ السَّمَاءِ مَاءً فَأَخْرَجَ بِهِ مِنَ الثَّمَرَاتِ رِزْقًا لَّكُمْ وَسَخَّرَ لَكُمُ الْفُلْكَ لِتَجْرِيَ فِي الْبَحْرِ بِأَمْرِهِ وَسَخَّرَ لَكُمُ الْأَنْهَرَ وَسَخَّرَ لَكُمُ الشَّمْسَ وَالْقَمَرَ دَائِبَيْنِ وَسَخَّرَ لَكُمُ اللَّيْلَ وَالنَّهَارَ.
    </div>
    <div class="font-body italic text-on-surface-variant text-sm pt-4 border-t border-primary/20">
        "Allah-lah yang telah menciptakan langit dan bumi dan menurunkan air (hujan) dari langit... menundukkan kapal... sungai... matahari dan bulan... malam dan siang bagimu."
    </div>
    <p class="text-xs text-on-surface-variant mt-2 border-t border-white border-dashed pt-2">Ayat ini adalah rekapitulasi anugerah fisika alam semesta (orbit, cuaca, hidrologi) yang di-<em>setting</em> sempurna untuk menyokong hidup manusia.</p>
</div>

<!-- Q.S. Az-Zukhruf & Hadits -->
<div class="grid md:grid-cols-2 gap-6 mb-16">
    <div class="bg-surface-container-high p-6 rounded-[2rem]">
        <h4 class="font-bold text-sm mb-3 text-secondary border-b border-outline-variant/20 pb-2">Doa Syukur Kendaraan (Q.S. Az-Zukhruf: 13)</h4>
        <div class="text-right font-quran text-xl mb-3" dir="rtl">... سُبْحَانَ الَّذِي سَخَّرَ لَنَا هَذَا وَمَا كُنَّا لَهُ مُقْرِنِينَ </div>
        <p class="text-xs text-on-surface-variant italic">Maha Suci (Allah) yang telah menundukkan semua ini bagi kami padahal kami sebelumnya tidak mampu menguasainya.</p>
        <p class="text-[10px] text-on-surface-variant mt-2">Dianjurkan dibaca saat naik motor/mobil/pesawat sebagai adab pada alam tunggangan manusia.</p>
    </div>
    
    <div class="bg-tertiary-container/30 p-6 rounded-[2rem]">
        <h4 class="font-bold text-sm mb-3 text-tertiary border-b border-outline-variant/20 pb-2">Hadis Menanam (H.R. Bukhari 2152)</h4>
        <p class="text-sm font-semibold text-on-surface-variant italic mb-2">
            "Tidaklah seorang Muslim bercocok tanam... melainkan (apa yang) dimakan burung, atau manusia, atau hewan, menjadi sedekah baginya."
        </p>
        <p class="text-[11px] text-on-surface-variant mt-2 pt-2 border-t border-outline-variant/20">Investasi pahala otomatis paling genial: Tanamlah pohon sedini mungkin!</p>
    </div>
</div>

<!-- Akhlak Ekologis -->
<div class="bg-gradient-to-br from-primary to-primary-container p-10 rounded-[3rem] text-white shadow-xl flex flex-col items-center text-center">
    <span class="material-symbols-outlined text-6xl text-white/50 mb-4">nature_people</span>
    <h4 class="text-2xl font-headline font-bold mb-6 text-white">Misi Pelajar Bumi (Akhlak Ekologis)</h4>
    <p class="text-sm opacity-90 mb-8 max-w-2xl mx-auto">Menjaga alam adalah wujud ibadah logis paling riil. Langkah apa yang wajib dieksekusi?</p>

    <div class="flex flex-wrap justify-center gap-3">
        <span class="px-5 py-2.5 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium border border-white/30 flex items-center gap-2"><span class="material-symbols-outlined text-lg">delete</span> Anti Nyampah Sembarangan</span>
        <span class="px-5 py-2.5 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium border border-white/30 flex items-center gap-2"><span class="material-symbols-outlined text-lg">water_drop</span> Hemat Debit Air Bersih</span>
        <span class="px-5 py-2.5 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium border border-white/30 flex items-center gap-2"><span class="material-symbols-outlined text-lg">bolt</span> Matikan Listrik & AC Jika Tdk Perlu</span>
        <span class="px-5 py-2.5 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium border border-white/30 flex items-center gap-2"><span class="material-symbols-outlined text-lg">forest</span> Rutin Merawat Pohon / Tanaman</span>
    </div>
</div>

        `
    }, {
        "id": "kls8-smtganjil-bab2",
        "kelas": 8,
        "semester": "Ganjil",
        "bab": "Bab 2",
        "judul": "Meyakini Kitab-Kitab Allah: Menjadi Generasi Pecinta Al-Qur\'an yang Toleran",
        "waktuBumper": "13 Menit Baca",
        "gambar": "images/islamic_calligraphy.png",
        "konten": `

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

        `
    }, {
        "id": "kls8-smtganjil-bab3",
        "kelas": 8,
        "semester": "Ganjil",
        "bab": "Bab 3",
        "judul": "Ketentuan Salat Sunah Berjamaah: Gerhana, Istiska, dan Jenazah",
        "waktuBumper": "15 Menit Baca",
        "gambar": "images/islamic_calligraphy.png",
        "konten": `

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

        

<!-- Detail Tata Cara Salat Jenazah -->
<div class="bg-surface-container-low p-8 rounded-[2rem] border border-outline-variant/20 shadow-sm mt-6 mb-12">
    <h4 class="font-bold text-lg text-tertiary mb-6 border-b border-outline-variant/20 pb-3 flex items-center"><span class="material-symbols-outlined mr-2">format_list_numbered</span> Tata Cara Lengkap Pelaksanaan 4 Takbir</h4>
    
    <div class="space-y-6">
        <!-- Niat & Berdiri -->
        <div class="flex gap-4">
            <div class="w-8 h-8 rounded-full bg-tertiary text-white flex items-center justify-center font-bold shrink-0 mt-1">1</div>
            <div class="flex-grow">
                <h5 class="font-bold text-on-surface">Niat & Berdiri</h5>
                <p class="text-sm text-on-surface-variant mb-3 leading-relaxed">Salat jenazah diwajibkan <strong>berdiri</strong>. <br>Posisi Imam: sejajar <strong>kepala</strong> (jika jenazah laki-laki) atau di <strong>tengah/perut</strong> (jika jenazah perempuan).</p>
                <div class="bg-white p-4 rounded-xl border border-outline-variant/10 shadow-sm">
                    <div class="text-right font-quran text-2xl text-on-surface mb-3 leading-loose" dir="rtl">أُصَلِّيْ عَلَى مَنْ صَلَّى عَلَيْهِ الْإِمَامُ مَأْمُوْمًا فَرْضًا لِلَّهِ تَعَالَى</div>
                    <p class="text-xs italic text-on-surface-variant border-t border-outline-variant/10 pt-2">"Aku niat salat atas jenazah yang disalati imam fardu karena Allah taala." (Contoh niat makmum)</p>
                </div>
            </div>
        </div>

        <!-- Takbir 1 -->
        <div class="flex gap-4">
            <div class="w-8 h-8 rounded-full bg-tertiary/20 text-tertiary flex items-center justify-center font-bold shrink-0 mt-1">2</div>
            <div>
                <h5 class="font-bold text-on-surface mb-1">Takbir Pertama (Takbiratul Ihram)</h5>
                <p class="text-sm text-on-surface-variant bg-surface-container p-3 rounded-lg">Setelah takbir pertama, diwajibkan membaca surat <strong>Al-Fatihah</strong>.</p>
            </div>
        </div>

        <!-- Takbir 2 -->
        <div class="flex gap-4">
            <div class="w-8 h-8 rounded-full bg-tertiary/20 text-tertiary flex items-center justify-center font-bold shrink-0 mt-1">3</div>
            <div>
                <h5 class="font-bold text-on-surface mb-1">Takbir Kedua</h5>
                <p class="text-sm text-on-surface-variant bg-surface-container p-3 rounded-lg">Setelah takbir kedua, membaca <strong>Salawat</strong> atas Nabi Muhammad saw.</p>
            </div>
        </div>

        <!-- Takbir 3 -->
        <div class="flex gap-4">
            <div class="w-8 h-8 rounded-full bg-tertiary/20 text-tertiary flex items-center justify-center font-bold shrink-0 mt-1">4</div>
            <div class="flex-grow">
                <h5 class="font-bold text-on-surface mb-2">Takbir Ketiga</h5>
                <p class="text-sm text-on-surface-variant mb-2">Membaca doa untuk pengampunan jenazah. Jika jenazah perempuan, kata ganti *"hu"* diganti menjadi *"ha"*.</p>
                <div class="bg-white p-4 rounded-xl border border-outline-variant/10 shadow-sm">
                    <div class="text-right font-quran text-2xl mb-3" dir="rtl">اللَّهُمَّ اغْفِرْ لَهُ وَارْحَمْهُ وَعَافِهِ وَاعْفُ عَنْهُ</div>
                    <p class="text-xs italic text-on-surface-variant border-t border-outline-variant/10 pt-2">"Ya Allah, ampunilah dia, rahmatilah dia, bebaskanlah dia, dan maafkanlah dia."</p>
                </div>
            </div>
        </div>

        <!-- Takbir 4 -->
        <div class="flex gap-4">
            <div class="w-8 h-8 rounded-full bg-tertiary/20 text-tertiary flex items-center justify-center font-bold shrink-0 mt-1">5</div>
            <div class="flex-grow">
                <h5 class="font-bold text-on-surface mb-2">Takbir Keempat</h5>
                <p class="text-sm text-on-surface-variant mb-2">Membaca doa penutup keselamatan (menurut pandangan ghalib/masyhur). Sebagian ulama juga membolehkan diam saja setelah takbir keempat.</p>
                <div class="bg-white p-4 rounded-xl border border-outline-variant/10 shadow-sm">
                    <div class="text-right font-quran text-2xl mb-3 leading-loose" dir="rtl">اللَّهُمَّ لَا تَحْرِمْنَا أَجْرَهُ وَلَاتَفْتِنَّا بَعْدَهُ وَاغْفِرْ لَنَا وَلَهُ</div>
                    <p class="text-xs italic text-on-surface-variant border-t border-outline-variant/10 pt-2">"Ya Allah, jangan haramkan kami dari pahalanya dan jangan beri fitnah (cobaan) bagi kami sepeninggalnya. Ampunilah kami dan ampunilah dia."</p>
                </div>
            </div>
        </div>

        <!-- Salam -->
        <div class="flex gap-4">
            <div class="w-8 h-8 rounded-full bg-tertiary text-white flex items-center justify-center font-bold shrink-0 mt-1">6</div>
            <div>
                <h5 class="font-bold text-on-surface mb-1">Salam Penutup</h5>
                <p class="text-sm text-on-surface-variant bg-surface-container p-3 rounded-lg">Mengucapkan salam dengan menoleh wajah ke kanan dan ke kiri untuk mengakhiri ibadah salat.</p>
            </div>
        </div>
    </div>
</div>

        `
    }, {
        "id": "kls8-smtganjil-bab4",
        "kelas": 8,
        "semester": "Ganjil",
        "bab": "Bab 4",
        "judul": "Menjadi Pribadi Berintegritas dengan Sifat Amanah dan Jujur",
        "waktuBumper": "12 Menit Baca",
        "gambar": "images/islamic_calligraphy.png",
        "konten": `

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

        `
    }, {
        "id": "kls8-smtganjil-bab5",
        "kelas": 8,
        "semester": "Ganjil",
        "bab": "Bab 5",
        "judul": "Meneladani Semangat Literasi Masa Keemasan Islam Era Daulah Abbasiyah",
        "waktuBumper": "14 Menit Baca",
        "gambar": "images/islamic_calligraphy.png",
        "konten": `

<p class="text-on-surface-variant leading-relaxed text-lg mb-8">
    Bab ini mengajak kita menyusuri lorong waktu menuju salah satu periode paling gemilang dalam peradaban pemikiran umat manusia: Masa Keemasan Daulah Abbasiyah (The Golden Age of Islam).
</p>

<!-- 1 & 2. Sejarah & Era Emas -->
<div class="grid md:grid-cols-2 gap-6 mb-12">
    <div class="bg-surface-container-low p-8 rounded-[2rem] border border-outline-variant/20 shadow-sm relative overflow-hidden">
        <h3 class="font-headline text-xl font-bold text-primary mb-4 flex items-center"><span class="material-symbols-outlined mr-2">stars</span> Awal Berdiri (750 M)</h3>
        <p class="text-sm text-on-surface-variant leading-relaxed">
            Didirikan oleh Abul Abbas As-Saffah melalui kejatuhan dinasti Umayyah. Sentra administrasi kemudian dipindahkan dari Damaskus menuju benteng kosmopolitan baru, <strong>Baghdad</strong> (tepi Sungai Tigris), menandai era akulturasi Arab-Persia.
        </p>
    </div>
    <div class="bg-surface-container-low p-8 rounded-[2rem] border border-outline-variant/20 shadow-sm relative overflow-hidden">
        <h3 class="font-headline text-xl font-bold text-secondary mb-4 flex items-center"><span class="material-symbols-outlined mr-2">account_balance</span> Bayt al-Hikmah</h3>
        <p class="text-sm text-on-surface-variant leading-relaxed">
            Rumah Kebijaksanaan (Lambang puncak toleransi murni). Perpustakaan raksasa yang menjadi jantung penerjemahan karya-karya langka peradaban Yunani, Persia, dan India tanpa melihat SARA.
        </p>
    </div>
</div>

<!-- 3. Tokoh & Ilmu -->
<h3 class="font-headline text-2xl font-bold text-primary mt-12 mb-6 text-center">Megabintang Ilmu Pengetahuan</h3>
<div class="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
    <div class="bg-white p-6 rounded-2xl shadow-sm border border-outline-variant/10 text-center hover:-translate-y-1 transition-transform group">
        <span class="material-symbols-outlined text-5xl text-primary mb-3 bg-primary/10 p-3 rounded-full group-hover:bg-primary group-hover:text-white transition-colors">calculate</span>
        <h4 class="font-bold text-lg mb-2">Al-Khawarizmi</h4>
        <p class="text-xs text-on-surface-variant">Penemu akar kata *Algoritma* dan Bapak Aljabar dunia. Perumus sistem desimal yang menaklukkan Eropa via terjemahan Latin.</p>
    </div>
    <div class="bg-white p-6 rounded-2xl shadow-sm border border-outline-variant/10 text-center hover:-translate-y-1 transition-transform group">
        <span class="material-symbols-outlined text-5xl text-primary mb-3 bg-primary/10 p-3 rounded-full group-hover:bg-primary group-hover:text-white transition-colors">monitor_heart</span>
        <h4 class="font-bold text-lg mb-2">Ibnu Sina</h4>
        <p class="text-xs text-on-surface-variant">Lahirnya mahakarya kedokteran lintas masa *"The Canon of Medicine"* (Al-Qanun fi at-Tibb) yang jadi rujukan medis global selama 6 abad.</p>
    </div>
    <div class="bg-white p-6 rounded-2xl shadow-sm border border-outline-variant/10 text-center hover:-translate-y-1 transition-transform group">
        <span class="material-symbols-outlined text-5xl text-primary mb-3 bg-primary/10 p-3 rounded-full group-hover:bg-primary group-hover:text-white transition-colors">auto_awesome</span>
        <h4 class="font-bold text-lg mb-2">Astronomi & Seni Intrik</h4>
        <p class="text-xs text-on-surface-variant">Lahir kalender presisi, instrumen astrolabe untuk navigasi rasi, hingga peninggalan kemegahan artistik masjid agung dengan kaligrafi.</p>
    </div>
</div>

<!-- 4 & 5. Runtuh & Hikmah -->
<h3 class="font-headline text-2xl font-bold text-error mt-12 mb-4">Runtuhnya Baghdad & Nilai Hikmahnya</h3>
<div class="flex flex-col md:flex-row gap-6 mb-12">
    <div class="md:w-1/3 bg-error/10 p-6 rounded-[2rem] border border-error/20 flex flex-col justify-center">
        <span class="font-bold text-error mb-2">1258 Masehi</span>
        <p class="text-sm text-on-surface-variant">Sikap korup, perpecahan intern, serta infiltrasi militer tentara biadab Mongol di bawah Hulagu Khan membuat Bayt al-Hikmah rata dengan tanah.</p>
    </div>
    <div class="md:w-2/3 bg-surface-container p-8 rounded-[2rem]">
        <h4 class="font-bold text-lg mb-4">Resolusi Pelajar Muslim Masa Kini:</h4>
        <ul class="text-sm text-on-surface-variant opacity-90 space-y-3">
            <li class="flex items-center gap-2"><span class="material-symbols-outlined text-primary text-[18px]">verified</span> <strong>Cintai Literasi:</strong> Kewajiban utama memburu ilmu seperti halnya kewajiban rukun beragama.</li>
            <li class="flex items-center gap-2"><span class="material-symbols-outlined text-primary text-[18px]">verified</span> <strong>Toleransi Terbuka:</strong> Meniru Baitul Hikmah yang kolaboratif anti rasis.</li>
            <li class="flex items-center gap-2"><span class="material-symbols-outlined text-primary text-[18px]">verified</span> <strong>Anti Konflik Internal:</strong> Keangkuhan pemimpin cuma bikin hancur dari dalam.</li>
        </ul>
    </div>
</div>

        `
    }, {
        "id": "kls8-smtgenap-bab1",
        "kelas": 8,
        "semester": "Genap",
        "bab": "Bab 1",
        "judul": "Inspirasi Al-Qur\'an: Indahnya Beragama Secara Moderat",
        "waktuBumper": "14 Menit Baca",
        "gambar": "images/islamic_calligraphy.png",
        "konten": `

<p class="text-on-surface-variant leading-relaxed text-lg mb-8">
    Bab ini merupakan kompas akhlak bertetangga sosial, menuntun kita menyelami ajaran <strong>Islam Moderat (Ummatan Wasatan)</strong>, yaitu pertengahan, tidak pro-radikal, dan tidak terlalu liberal meremehkan syariat.
</p>

<!-- 1. Tajwid -->
<h3 class="font-headline text-2xl font-bold text-primary mt-12 mb-6 flex items-center">
    <span class="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mr-4 shrink-0">
        <span class="material-symbols-outlined text-[24px]">spellcheck</span>
    </span>
    1. Tajwid Paling Fundamental (Nun & Mim Sukun)
</h3>

<div class="grid md:grid-cols-2 gap-6 mb-16">
    <div class="bg-surface-container-low p-6 rounded-[2rem] border border-outline-variant/20 shadow-sm relative overflow-hidden">
        <span class="font-quran absolute -top-4 -right-2 text-9xl text-primary/5">ن</span>
        <h4 class="font-bold text-lg mb-4 text-primary border-b border-outline-variant/20 pb-2">Hukum Nun Sukun (نْ) / Tanwin</h4>
        <div class="space-y-3 text-sm text-on-surface-variant relative z-10">
            <div class="flex items-start gap-2"><span class="bg-primary/10 text-primary px-2 rounded font-bold shrink-0">Izhar</span> <p>Jelas tegas. Bertemu huruf tenggorokan (ء ه ح خ ع غ).</p></div>
            <div class="flex items-start gap-2"><span class="bg-secondary/10 text-secondary px-2 rounded font-bold shrink-0">Idgham</span> <p>Peleburan Suara. Bighunnah (dengan dengung, ي ن م و) dan Bilaghunnah (tanpa dengung, ل ر).</p></div>
            <div class="flex items-start gap-2"><span class="bg-tertiary/10 text-tertiary px-2 rounded font-bold shrink-0">Iqlab</span> <p>Sulap suara ke Mim mutlak. (Hanya di huruf ب).</p></div>
            <div class="flex items-start gap-2"><span class="bg-error/10 text-error px-2 rounded font-bold shrink-0">Ikhfa</span> <p>Dengung samar. (Terjadi di 15 huruf sisanya tertunda).</p></div>
        </div>
    </div>
    
    <div class="bg-surface-container-low p-6 rounded-[2rem] border border-outline-variant/20 shadow-sm relative overflow-hidden">
        <span class="font-quran absolute -top-4 -right-2 text-9xl text-secondary/5">م</span>
        <h4 class="font-bold text-lg mb-4 text-secondary border-b border-outline-variant/20 pb-2">Hukum Mim Sukun (مْ)</h4>
        <div class="space-y-3 text-sm text-on-surface-variant relative z-10">
            <div class="flex items-start gap-2"><span class="bg-primary/10 text-primary px-2 rounded font-bold shrink-0 mt-1">Ikhfa Syafawi</span> <p>Disamarkan dalam tabrakan dengung bibir. (Khusus jika berhadapan dengan ب).</p></div>
            <div class="flex items-start gap-2"><span class="bg-secondary/10 text-secondary px-2 rounded font-bold shrink-0 mt-1">Idgham Mimi</span> <p>Mim nabrak Mim! Didegungkan secara syahdu. (Khusus berhadapan dengan م).</p></div>
            <div class="flex items-start gap-2"><span class="bg-tertiary/10 text-tertiary px-2 rounded font-bold shrink-0 mt-1">Izhar Syafawi</span> <p>Kasus tersering terjadi. Mulut nutup dan diucapkan jelas! (Bertemu selain Ba' dan Mim).</p></div>
        </div>
    </div>
</div>

<!-- 2. Ayat Moderat -->
<h3 class="font-headline text-2xl font-bold text-primary mt-12 mb-6 text-center">Konsep Emas Moderasi Beragama</h3>

<div class="grid md:grid-cols-2 gap-6 mb-12">
    <div class="bg-primary/5 p-6 rounded-3xl border-l-8 border-primary relative overflow-hidden flex flex-col justify-center">
        <div class="text-right font-quran text-2xl leading-[2.5] mb-4 text-on-surface" dir="rtl">وَكَذَلِكَ جَعَلْنَاكُمْ أُمَّةً وَسَطًا ...</div>
        <p class="font-body text-sm italic text-on-surface-variant border-t border-outline-variant/20 pt-3">
            "Kami (Tuhan) telah menjadikan kamu (umat Islam) <strong>'ummatan wasatan' (umat moderat / jalan tengah)</strong> agar kalian menjadi wasit adil atas manusia..." <br><strong>(Q.S. al-Baqarah: 143)</strong>
        </p>
    </div>
    <div class="bg-secondary/5 p-6 rounded-3xl border-l-8 border-secondary relative overflow-hidden flex flex-col justify-center">
        <div class="text-right font-quran text-lg mb-3" dir="rtl">إِنَّ الدِّينَ يُسْرٌ ... فَسَدِّدُوا وَقَارِبُوا وَأَبْشِرُوا</div>
        <p class="text-sm italic text-on-surface-variant border-t border-outline-variant/20 pt-3">"Islam adalah entitas yang ringan dan fleksibel. Maka carilah jalan pertengahan, proporsional, serta gembirakanlah." <br><strong>(HR. Bukhari dari Jabir)</strong></p>
    </div>
</div>

<!-- 4. Kisah Teladan Hudaibiyah -->
<div class="bg-gradient-to-br from-primary to-primary-container p-10 rounded-[3rem] text-white shadow-xl flex flex-col items-center text-center">
    <h3 class="font-headline text-2xl font-bold mb-4 text-white">Hikmah Puncak Moderasi: Tragedi Hudaibiyah</h3>
    <p class="text-sm opacity-90 leading-relaxed max-w-3xl mb-6">
        Pada 628 M, kafir Quraisy menyabotase blokade jalur kedatangan Nabi dan rombongan umrah di Mekkah. Lewat diplomasi super panas, lahirlah gencatan dokumen pakta *"Perjanjian Hudaibiyah"*. Secara tertulis isi dokumennya merugikan gengsi umat Islam, hingga mayoritas sahabat murka.
    </p>
    <div class="w-full bg-white/10 rounded-2xl p-6 border border-white/20">
        <span class="material-symbols-outlined text-[40px] text-secondary-fixed mb-2">gavel</span>
        <p class="text-[15px] font-bold text-white mb-2">Namun, Nabi memilih jalur Kelapangan Dada Moderat!</p>
        <p class="text-xs text-white/80">Beliau menyetujui penghapusan diksi "Rasulullah" pada naskah demi menjaga genjatan senjata fisik. Nyatanya, pengalah strategis tersebut terbukti brilian karena kelak berujung menangnya dakwah masif tanpa jatuhnya darah satupun (Fathu Makkah).</p>
    </div>
</div>

        `
    }, {
        "id": "kls8-smtgenap-bab2",
        "kelas": 8,
        "semester": "Genap",
        "bab": "Bab 2",
        "judul": "Meyakini Nabi dan Rasul Allah: Menjadi Generasi Digital yang Berkarakter",
        "waktuBumper": "13 Menit Baca",
        "gambar": "images/islamic_calligraphy.png",
        "konten": `

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

        `
    }, {
        "id": "kls8-smtgenap-bab3",
        "kelas": 8,
        "semester": "Genap",
        "bab": "Bab 3",
        "judul": "Menjadi Pribadi yang Dapat Dipercaya: Terhindar Riba",
        "waktuBumper": "16 Menit Baca",
        "gambar": "images/islamic_calligraphy.png",
        "konten": `

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

        `
    }, {
        "id": "kls8-smtgenap-bab4",
        "kelas": 8,
        "semester": "Genap",
        "bab": "Bab 4",
        "judul": "Inspirasi Cendekiawan Muslim Abbasiyah untuk Peradaban",
        "waktuBumper": "18 Menit Baca",
        "gambar": "images/islamic_calligraphy.png",
        "konten": `

<p class="text-on-surface-variant leading-relaxed text-lg mb-8">
    Bab ini adalah puncak selebrasi peradaban rasional Islam. Kita akan melihat bagaimana doktrin "Wajib Menuntut Ilmu" melahirkan ratusan polimatik jenius di era Abbasiyah yang meletakkan fondasi sains dan teknologi modern dunia hari ini.
</p>

<!-- 1. Semangat Ilmu -->
<div class="bg-surface-container-low p-8 rounded-[2rem] border-l-8 border-primary shadow-sm mb-12 flex flex-col md:flex-row items-center gap-8">
    <div class="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
        <span class="material-symbols-outlined text-[48px] text-primary">local_library</span>
    </div>
    <div>
        <h3 class="font-headline text-2xl font-bold text-primary mb-3">Doktrin Gila Ilmu</h3>
        <p class="text-sm text-on-surface-variant leading-relaxed text-justify">
            Al-Qur'an dan Hadis berulang kali memacu umat untuk meneliti alam semesta. Di era Abbasiyah, berburu ilmu tidak hanya sekadar hobi, melainkan <strong>ibadah vertikal</strong> yang dimodali besar-besaran oleh negara melalui lembaga *Bayt al-Hikmah*.
        </p>
    </div>
</div>

<!-- 2. Galeri Ilmuwan Muslim -->
<h3 class="font-headline text-2xl font-bold text-center mt-12 mb-4">Galeri Cendekiawan Muslim Abbasiyah</h3>
<p class="text-center text-sm text-on-surface-variant max-w-3xl mx-auto mb-10">Berikut adalah *"Avengers"* peradaban Islam yang mengubah dunia. Kami membaginya ke dalam 3 fakultas utama:</p>

<!-- Fakultas Sains & Teknologi -->
<h4 class="font-bold text-lg text-secondary bg-secondary/10 px-4 py-2 rounded-xl inline-block mb-6"><span class="material-symbols-outlined align-middle mr-2 text-sm">science</span> Fakultas Sains & Kedokteran</h4>
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
    <div class="p-5 border border-outline-variant/30 rounded-2xl bg-white shadow-sm hover:border-secondary transition-colors">
        <h5 class="font-bold text-on-surface text-md">Al-Khawarizmi</h5>
        <div class="text-[10px] text-secondary font-bold mb-2">Matematika & Geografi</div>
        <p class="text-xs text-on-surface-variant">Bapak <strong>Aljabar</strong>. Memperkenalkan angka <strong>nol</strong> dan sistem desimal, perumuskan trigonometri dasar.</p>
    </div>
    <div class="p-5 border border-outline-variant/30 rounded-2xl bg-white shadow-sm hover:border-secondary transition-colors">
        <h5 class="font-bold text-on-surface text-md">Ibnu Sina (Avicenna)</h5>
        <div class="text-[10px] text-secondary font-bold mb-2">Kedokteran</div>
        <p class="text-xs text-on-surface-variant">Penulis kitab legendaris <em>"Al-Qanun fi at-Tibb"</em>, rujukan emas medis dunia selama berabad-abad lamanya.</p>
    </div>
    <div class="p-5 border border-outline-variant/30 rounded-2xl bg-white shadow-sm hover:border-secondary transition-colors">
        <h5 class="font-bold text-on-surface text-md">Ibnu al-Haytham (Alhazen)</h5>
        <div class="text-[10px] text-secondary font-bold mb-2">Optik & Fisika</div>
        <p class="text-xs text-on-surface-variant">Bapak Optik Modern. Membedah cara kerja mata & cahaya lewat eksperimen <em>Camera Obscura</em> terawal.</p>
    </div>
    <div class="p-5 border border-outline-variant/30 rounded-2xl bg-white shadow-sm hover:border-secondary transition-colors">
        <h5 class="font-bold text-on-surface text-md">Jabir ibn Hayyan (Geber)</h5>
        <div class="text-[10px] text-secondary font-bold mb-2">Kimia</div>
        <p class="text-xs text-on-surface-variant">Bapak Kimia Klasik. Menemukan berbagai senyawa dan teknik distilasi, kristalisasi lab pertama.</p>
    </div>
    <div class="p-5 border border-outline-variant/30 rounded-2xl bg-white shadow-sm hover:border-secondary transition-colors">
        <h5 class="font-bold text-on-surface text-md">Abbas ibn Firnas</h5>
        <div class="text-[10px] text-secondary font-bold mb-2">Teknik & Penerbangan</div>
        <p class="text-xs text-on-surface-variant">Penemu ide sayap <em>Glider</em> pertama, ratusan tahun sebelum Wright Bersaudara.</p>
    </div>
    <div class="p-5 border border-outline-variant/30 rounded-2xl bg-white shadow-sm hover:border-secondary transition-colors">
        <h5 class="font-bold text-on-surface text-md">Al-Biruni, Ar-Razi, Dll</h5>
        <div class="text-[10px] text-secondary font-bold mb-2">Astronomi & Dokter</div>
        <p class="text-xs text-on-surface-variant">Al-Biruni ukur keliling bumi. Ar Razi bedah Cacar & Campak. Al Battani hitung akurat lama tahun matahari. Al Kasyi kuasai aritmatika desimal.</p>
    </div>
</div>

<!-- Fakultas Dinul Islam -->
<h4 class="font-bold text-lg text-primary bg-primary/10 px-4 py-2 rounded-xl inline-block mb-6"><span class="material-symbols-outlined align-middle mr-2 text-sm">menu_book</span> Fakultas Syariat Islam (Fikih & Hadis)</h4>
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
    <div class="p-4 border border-outline-variant/30 rounded-xl bg-surface-container-lowest text-center">
        <h5 class="font-bold text-sm">Imam Abu Hanifah</h5>
        <p class="text-[11px] text-on-surface-variant mt-1">Founding Father Mazhab Hanafi (Sangat logis dan analitis).</p>
    </div>
    <div class="p-4 border border-outline-variant/30 rounded-xl bg-surface-container-lowest text-center">
        <h5 class="font-bold text-sm">Imam Malik</h5>
        <p class="text-[11px] text-on-surface-variant mt-1">Founder Mazhab Maliki, Penulis kompilasi hadis awal <em>'Al-Muwatta'</em>.</p>
    </div>
    <div class="p-4 border border-outline-variant/30 rounded-xl bg-surface-container-lowest text-center">
        <h5 class="font-bold text-sm">Imam Syafi'i</h5>
        <p class="text-[11px] text-on-surface-variant mt-1">Founder Mazhab Syafi'i, Arsitek pertama disiplin *"Ushul Fikih"*.</p>
    </div>
    <div class="p-4 border border-outline-variant/30 rounded-xl bg-surface-container-lowest text-center">
        <h5 class="font-bold text-sm">Imam Ahmad bin Hambal</h5>
        <p class="text-[11px] text-on-surface-variant mt-1">Founder Mazhab Hambali, penghafal & penulis <em>Musnad Ahmad</em>.</p>
    </div>
    
    <div class="p-4 border border-outline-variant/30 rounded-xl bg-white col-span-1 lg:col-span-2 flex items-center gap-3">
        <span class="material-symbols-outlined text-primary">verified_user</span>
        <div>
            <h5 class="font-bold text-sm">Maestro Hadis</h5>
            <p class="text-[11px] text-on-surface-variant"><strong>Imam Bukhari</strong> (Shahih Bukhari) dan <strong>Imam Muslim</strong> (Shahih Muslim). Keduanya memfilter ratusan ribu riwayat palsu demi menjaga orisinalitas sabda Nabi.</p>
        </div>
    </div>
    <div class="p-4 border border-outline-variant/30 rounded-xl bg-white col-span-1 lg:col-span-2 flex items-center gap-3">
        <span class="material-symbols-outlined text-primary">menu_book</span>
        <div>
            <h5 class="font-bold text-sm">Ibnu Jarir at-Tabari</h5>
            <p class="text-[11px] text-on-surface-variant">Sejarawan & mufassir mutlak. Karyanya <em>"Jami' al-Bayan" (Tafsir Tabari)</em> menjadi rujukan tafsir standar hingga kiamat tiba.</p>
        </div>
    </div>
</div>

<!-- Fakultas Filsafat -->
<h4 class="font-bold text-lg text-tertiary bg-tertiary/10 px-4 py-2 rounded-xl inline-block mb-6"><span class="material-symbols-outlined align-middle mr-2 text-sm">psychology</span> Fakultas Etika & Filsafat</h4>
<div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-16">
    <div class="p-5 border border-outline-variant/30 rounded-2xl bg-white shadow-sm flex items-start gap-4">
        <div class="w-12 h-12 bg-tertiary/10 rounded-full flex items-center justify-center shrink-0 font-bold text-tertiary text-xl">F</div>
        <div>
            <h5 class="font-bold text-on-surface mb-1">Al-Farabi (Alfarabius)</h5>
            <p class="text-xs text-on-surface-variant">Pakar Logika, Musik, & Ilmu kenegaraan. Dunia mengenalnya sebagai <strong>"Guru Kedua"</strong> filsafat mendampingi Aristoteles sang Guru Pertama.</p>
        </div>
    </div>
    <div class="p-5 border border-outline-variant/30 rounded-2xl bg-white shadow-sm flex items-start gap-4">
        <div class="w-12 h-12 bg-tertiary/10 rounded-full flex items-center justify-center shrink-0 font-bold text-tertiary text-xl">K</div>
        <div>
            <h5 class="font-bold text-on-surface mb-1">Al-Kindi</h5>
            <p class="text-xs text-on-surface-variant">Filsuf ras murni Arab pertama. Ia berhasil membuktikan bahwa mendedah pemikiran Yunani sama sekali tidak menciderai akidah fundamental Islam.</p>
        </div>
    </div>
</div>

<!-- Resolusi Akhir -->
<div class="bg-gradient-to-br from-primary to-primary-container p-10 rounded-[3rem] text-white shadow-xl relative overflow-hidden text-center">
    <span class="material-symbols-outlined text-5xl mb-4">school</span>
    <h4 class="text-2xl font-headline font-bold mb-6">Warisan Genetik Intelektual untuk Kita</h4>
    <p class="text-sm opacity-90 max-w-3xl mx-auto leading-relaxed mb-8">
        Ratusan buku tebal tertulis, eksperimen yang gagal hingga berhasil, dan perjalanan beribu kilometer menyeberangi benua mereka lakukan demi sekelumit ilmu. Ini adalah tugas bagi pemuda hari ini: 
    </p>
    <div class="flex flex-wrap justify-center gap-3">
        <span class="px-5 py-2 bg-white/20 border border-white/30 rounded-full text-xs font-bold">1. Belajar Tanpa Akhir (Lifelong Learning)</span>
        <span class="px-5 py-2 bg-white/20 border border-white/30 rounded-full text-xs font-bold">2. Bertahan Menderita Susahnya Belajar</span>
        <span class="px-5 py-2 bg-white/20 border border-white/30 rounded-full text-xs font-bold">3. Inovasi & Produksi</span>
        <span class="px-5 py-2 bg-white/20 border border-white/30 rounded-full text-xs font-bold">4. Mengajarkannya Kembali</span>
    </div>
</div>

        `
    }, {
        "id": "kls8-smtgenap-bab5",
        "kelas": 8,
        "semester": "Genap",
        "bab": "Bab 5",
        "judul": "Materi PAI Kelas 7-9-9 - Genap - Bab 5 [Menengah]",
        "waktuBumper": "7 Menit Baca",
        "gambar": "images/islamic_calligraphy.png",
        "konten": "\n                    <h2 class=\"font-headline text-2xl font-bold text-primary mb-6 flex items-center\">\n                        <span class=\"w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mr-4\">\n                            <span class=\"material-symbols-outlined text-[24px]\">menu_book</span>\n                        </span>\n                        Pengantar Bab 5\n                    </h2>\n                    <p class=\"text-on-surface-variant leading-relaxed text-lg mb-8\">\n                        Ini adalah wadah sementara. Menunggu naskah asli untuk Kelas 7-9-9 Semester Genap Bab 5.\n                    </p>\n                    <div class=\"bg-primary/5 border-l-4 border-primary rounded-r-3xl p-8 my-12 relative overflow-hidden\">\n                        <span class=\"material-symbols-outlined absolute -top-4 -right-4 text-9xl text-primary/5 rotate-12\">format_quote</span>\n                        <div class=\"text-right font-quran text-4xl leading-loose mb-6 text-on-surface\" dir=\"rtl\">\n                            اَللّٰهُمَّ زِدْنَا عِلْمًا وَارْزُقْنَا فَهْمًا\n                        </div>\n                        <div class=\"font-body italic text-on-surface-variant text-lg\">\n                            \"Ya Allah, tambahkanlah ilmu kepada kami dan berikanlah pemahaman.\"\n                        </div>\n                    </div>\n                    <ul class=\"space-y-6 mb-12\">\n                        <li class=\"flex items-start\">\n                            <span class=\"material-symbols-outlined text-primary mr-4 mt-0.5 text-2xl\">check_circle</span>\n                            <span class=\"text-on-surface-variant text-lg\"><strong class=\"text-on-surface\">Poin Hafalan 1</strong> – Anda dapat mengetik poin-poin materi Anda di sini.</span>\n                        </li>\n                    </ul>\n                "
    },
    {
        "id": "kls9-smtganjil-bab1",
        "kelas": 9,
        "semester": "Ganjil",
        "bab": "Bab 1",
        "judul": "Semangat Mencari Ilmu dalam Islam",
        "waktuBumper": "7 Menit Baca",
        "gambar": "images/islamic_calligraphy.png",
        "konten": "\n<p class=\"text-on-surface-variant leading-relaxed text-lg mb-8\">\n    Dalam Islam, mencari ilmu itu hukumnya <strong>wajib</strong> bagi setiap Muslim, laki-laki maupun perempuan. Dengan ilmu, kita bisa lebih mengenal Allah Swt., memahami ajaran agama dengan benar, dan meraih kesuksesan di dunia dan akhirat. Allah Swt. sangat menghargai orang yang beriman dan berilmu.\n</p>\n\n<div class=\"bg-primary/5 border-l-4 border-primary rounded-r-3xl p-8 my-10 relative overflow-hidden\">\n    <div class=\"flex items-center gap-4 mb-4\">\n        <span class=\"material-symbols-outlined text-primary text-3xl\">psychology</span>\n        <h3 class=\"font-headline text-xl font-bold text-on-surface\">Mengapa Mencari Ilmu itu Penting?</h3>\n    </div>\n    <p class=\"text-on-surface-variant text-lg leading-relaxed\">\n        Ilmu adalah cahaya kehidupan. Tanpa ilmu, kita akan tersesat dalam kegelapan ketidaktahuan. Islam memposisikan ilmu sebagai kunci utama untuk menjalankan ibadah dengan benar dan mengelola bumi sebagai khalifah.\n    </p>\n</div>\n\n<h3 class=\"font-headline text-2xl font-bold text-primary mt-12 mb-6\">Ayat Al-Qur'an tentang Keutamaan Ilmu</h3>\n\n<!-- Q.S. al-Mujadilah [58] ayat 11 -->\n<div class=\"mb-12\">\n    <h4 class=\"font-bold text-lg text-on-surface mb-4\">1. Q.S. al-Mujadilah [58] ayat 11</h4>\n    <div class=\"bg-surface-container-low border border-outline-variant/30 rounded-[2rem] p-8 mb-6 relative\">\n        <div class=\"text-right font-quran text-4xl leading-[2.5] mb-8 text-on-surface\" dir=\"rtl\">\n            يٰٓاَيُّهَا الَّذِيْنَ اٰمَنُوْٓا اِذَا قِيْلَ لَكُمْ تَفَسَّحُوْا فِى الْمَجٰلِسِ فَافْسَحُوْا يَفْسَحِ اللّٰهُ لَكُمْۚ وَاِذَا قِيْلَ انْشُزُوْا فَانْشُزُوْا يَرْفَعِ اللّٰهُ الَّذِيْنَ اٰمَنُوْا مِنْكُمْۙ وَالَّذِيْنَ اُوْتُوا الْعِلْمَ دَرَجٰتٍۗ وَاللّٰهُ بِمَا تَعْمَلُوْنَ خَبِيْرٌࣖ\n        </div>\n        <div class=\"font-body italic text-on-surface-variant text-lg border-t border-outline-variant/20 pt-6\">\n            \"Wahai orang-orang beriman! Kalau ada yang bilang 'beri kelapangan dong di tempat duduk,' maka lapangkanlah, nanti Allah akan beri kelapangan untukmu. Kalau disuruh 'berdiri,' ya berdirilah. Allah akan mengangkat derajat orang-orang yang beriman dan orang-orang yang diberi ilmu beberapa tingkat lebih tinggi. Allah Maha Teliti dengan apa yang kamu kerjakan.\"\n        </div>\n    </div>\n    <div class=\"flex items-start gap-3 bg-secondary-container/20 p-5 rounded-2xl\">\n        <span class=\"material-symbols-outlined text-secondary\">info</span>\n        <p class=\"text-on-surface-variant text-sm\"><strong>Pesan Penting:</strong> Ayat ini menunjukkan bahwa orang yang beriman dan berilmu akan ditinggikan derajatnya oleh Allah Swt. Selain itu, kita juga diajarkan adab dalam majelis (tempat berkumpul) seperti memberi tempat kepada orang lain.</p>\n    </div>\n</div>\n\n<!-- Q.S. az-Zumar [39] ayat 9 -->\n<div class=\"mb-12\">\n    <h4 class=\"font-bold text-lg text-on-surface mb-4\">2. Q.S. az-Zumar [39] ayat 9</h4>\n    <div class=\"bg-surface-container-low border border-outline-variant/30 rounded-[2rem] p-8 mb-6 relative\">\n        <div class=\"text-right font-quran text-4xl leading-[2.5] mb-8 text-on-surface\" dir=\"rtl\">\n            اَمَّنْ هُوَ قَانِتٌ اٰنَاۤءَ الَّيْلِ سَاجِدًا وَّقَاۤىِٕمًا يَّحْذَرُ الْاٰخِرَةَ وَيَرْجُوْا رَحْمَةَ رَبِّهٖۗ قُلْ هَلْ يَسْتَوِى الَّذِيْنَ يَعْلَمُوْنَ وَالَّذِيْنَ لَا يَعْلَمُوْنَ ۗ اِنَّمَا يَتَذَكَّرُ اُولُوا الْاَلْبَابِࣖ\n        </div>\n        <div class=\"font-body italic text-on-surface-variant text-lg border-t border-outline-variant/20 pt-6\">\n            \"Katakanlah (Nabi Muhammad), 'Apakah sama orang-orang yang mengetahui (berilmu) dengan orang-orang yang tidak mengetahui (tidak berilmu)?' Hanya orang yang berakal sehat (Ulul Albab) yang dapat mengambil pelajaran.\"\n        </div>\n    </div>\n    <div class=\"flex items-start gap-3 bg-secondary-container/20 p-5 rounded-2xl\">\n        <span class=\"material-symbols-outlined text-secondary\">info</span>\n        <p class=\"text-on-surface-variant text-sm\"><strong>Pesan Penting:</strong> Ayat ini jelas membedakan antara orang yang berilmu dan yang tidak. Orang berilmu memiliki kedudukan yang lebih baik. Hanya orang yang mau menggunakan akalnya yang bisa memahami pelajaran ini.</p>\n    </div>\n</div>\n\n<h3 class=\"font-headline text-2xl font-bold text-primary mt-12 mb-6\">Hadis tentang Mencari Ilmu</h3>\n<div class=\"bg-primary/5 rounded-[2rem] p-8 mb-12\">\n    <div class=\"text-right font-quran text-3xl leading-loose mb-6 text-on-surface\" dir=\"rtl\">\n        مَنْ سَلَكَ طَرِيقًا يَلْتَمِسُ فِيهِ عِلْمًا سَهَّلَ اللَّهُ لَهُ طَرِيقًا إِلَى الْجَنَّةِ\n    </div>\n    <p class=\"font-body italic text-on-surface-variant text-lg text-center bg-white/50 p-4 rounded-xl\">\n        \"Barangsiapa menempuh suatu jalan untuk mencari ilmu, maka Allah akan mudahkan baginya jalan menuju surga.\" (HR. Muslim)\n    </p>\n</div>\n\n<h3 class=\"font-headline text-2xl font-bold text-primary mt-12 mb-6\">Pentingnya Tajwid: Mengenal Tanda Waqaf</h3>\n<p class=\"text-on-surface-variant leading-relaxed text-lg mb-8\">\n    Waqaf artinya berhenti sejenak saat membaca Al-Qur'an, biasanya untuk mengambil nafas, lalu melanjutkan bacaan lagi. Mari kita kenali tanda-tandanya:\n</p>\n\n<div class=\"grid grid-cols-2 md:grid-cols-4 gap-4 mb-12\">\n    <div class=\"p-4 bg-white rounded-2xl border-2 border-primary/10 flex flex-col items-center text-center\">\n        <span class=\"text-4xl font-quran font-bold text-primary mb-2\">م</span>\n        <span class=\"text-sm font-bold\">Waqaf Lazim</span>\n        <span class=\"text-xs text-on-surface-variant\">Harus Berhenti</span>\n    </div>\n    <div class=\"p-4 bg-white rounded-2xl border-2 border-primary/10 flex flex-col items-center text-center\">\n        <span class=\"text-4xl font-quran font-bold text-primary mb-2\">ط</span>\n        <span class=\"text-sm font-bold\">Waqaf Mutlaq</span>\n        <span class=\"text-xs text-on-surface-variant\">Harus Berhenti</span>\n    </div>\n    <div class=\"p-4 bg-white rounded-2xl border-2 border-primary/10 flex flex-col items-center text-center\">\n        <span class=\"text-4xl font-quran font-bold text-primary mb-2\">ج</span>\n        <span class=\"text-sm font-bold\">Waqaf Jaiz</span>\n        <span class=\"text-xs text-on-surface-variant\">Boleh Berhenti/Lanjut</span>\n    </div>\n    <div class=\"p-4 bg-white rounded-2xl border-2 border-primary/10 flex flex-col items-center text-center\">\n        <span class=\"text-4xl font-quran font-bold text-primary mb-2\">لا</span>\n        <span class=\"text-sm font-bold\">La Waqfu Fih</span>\n        <span class=\"text-xs text-on-surface-variant\">Jangan Berhenti</span>\n    </div>\n    <div class=\"p-4 bg-white rounded-2xl border-2 border-primary/10 flex flex-col items-center text-center\">\n        <span class=\"text-4xl font-quran font-bold text-primary mb-2\">صلى</span>\n        <span class=\"text-sm font-bold\">Washal Aula</span>\n        <span class=\"text-xs text-on-surface-variant\">Lebih Baik Lanjut</span>\n    </div>\n    <div class=\"p-4 bg-white rounded-2xl border-2 border-primary/10 flex flex-col items-center text-center\">\n        <span class=\"text-4xl font-quran font-bold text-primary mb-2\">قلى</span>\n        <span class=\"text-sm font-bold\">Waqaf Aula</span>\n        <span class=\"text-xs text-on-surface-variant\">Lebih Baik Berhenti</span>\n    </div>\n     <div class=\"p-4 bg-white rounded-2xl border-2 border-primary/10 flex flex-col items-center text-center\">\n        <span class=\"text-4xl font-quran font-bold text-primary mb-2\">سكتة</span>\n        <span class=\"text-sm font-bold\">Saktah</span>\n        <span class=\"text-xs text-on-surface-variant\">Berhenti Tanpa Nafas</span>\n    </div>\n    <div class=\"p-4 bg-white rounded-2xl border-2 border-primary/10 flex flex-col items-center text-center\">\n        <span class=\"text-4xl font-quran font-bold text-primary mb-2\">∴ ∴</span>\n        <span class=\"text-sm font-bold\">Mu'anaqah</span>\n        <span class=\"text-xs text-on-surface-variant\">Berhenti di Salah Satu</span>\n    </div>\n</div>\n\n<h3 class=\"font-headline text-2xl font-bold text-primary mt-12 mb-8\">Bagaimana Menunjukkan Semangat Mencari Ilmu?</h3>\n<div class=\"space-y-4 mb-12\">\n    <div class=\"flex items-center gap-6 p-6 bg-surface-container-low rounded-3xl hover:bg-white transition-colors border border-outline-variant/10\">\n        <div class=\"w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center shrink-0\">\n             <span class=\"material-symbols-outlined text-primary\">volunteer_activism</span>\n        </div>\n        <div>\n            <h4 class=\"font-bold text-lg\">Niat Ikhlas & Berdoa</h4>\n            <p class=\"text-on-surface-variant\">Belajar karena Allah Swt. dan selalu meminta ilmu yang bermanfaat.</p>\n        </div>\n    </div>\n    <div class=\"flex items-center gap-6 p-6 bg-surface-container-low rounded-3xl hover:bg-white transition-colors border border-outline-variant/10\">\n        <div class=\"w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center shrink-0\">\n             <span class=\"material-symbols-outlined text-primary\">model_training</span>\n        </div>\n        <div>\n            <h4 class=\"font-bold text-lg\">Sungguh-sungguh & Antusias</h4>\n            <p class=\"text-on-surface-variant\">Rajin belajar, tidak menyerah, dan aktif bertanya kepada guru.</p>\n        </div>\n    </div>\n    <div class=\"flex items-center gap-6 p-6 bg-surface-container-low rounded-3xl hover:bg-white transition-colors border border-outline-variant/10\">\n        <div class=\"w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center shrink-0\">\n             <span class=\"material-symbols-outlined text-primary\">groups</span>\n        </div>\n        <div>\n            <h4 class=\"font-bold text-lg\">Hormat & Rendah Hati</h4>\n            <p class=\"text-on-surface-variant\">Sopan kepada guru dan tetap tawadhu dengan ilmu yang dimiliki.</p>\n        </div>\n    </div>\n</div>\n\n<div class=\"p-10 bg-gradient-to-br from-primary to-primary-container text-white rounded-[3rem] shadow-xl text-center\">\n    <h4 class=\"text-2xl font-headline font-bold mb-4\">Ingatlah!</h4>\n    <p class=\"text-lg opacity-90 leading-relaxed\">\n        Dengan ilmu, Allah akan mengangkat derajat kita, memudahkan jalan ke surga, dan membantu kita menyelesaikan masalah dalam hidup. Jadilah generasi Muslim yang cerdas, berakhlak mulia, dan bermanfaat bagi sesama!\n    </p>\n</div>\n"
    },
    {
        "id": "kls9-smtganjil-bab2",
        "kelas": 9,
        "semester": "Ganjil",
        "bab": "Bab 2",
        "judul": "Meyakini Hari Akhir dengan Mawas Diri",
        "waktuBumper": "14 Menit Baca",
        "gambar": "images/islamic_calligraphy.png",
        "konten": `

<p class="text-on-surface-variant leading-relaxed text-lg mb-8">
    Mengimani Hari Akhir adalah rukun iman yang kelima. Hari Akhir disebut juga hari kiamat, di mana tidak ada hari lagi setelahnya. Mempercayai Hari Akhir membuat kita lebih berhati-hati dan mawas diri dalam menjalani hidup serta mendorong seseorang untuk beramal saleh karena mengharapkan kenikmatan di akhirat kelak.
</p>

<!-- Pengertian dan Dalil -->
<h3 class="font-headline text-2xl font-bold text-primary mt-12 mb-6 flex items-center">
    <span class="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mr-4 shrink-0">
        <span class="material-symbols-outlined text-[24px]">menu_book</span>
    </span>
    Pengertian dan Dalil Iman Kepada Hari Akhir
</h3>
<p class="text-on-surface-variant leading-relaxed text-md mb-6">
    Iman kepada Hari Akhir berarti meyakini bahwa hari akhir pasti akan terjadi atas kehendak Allah Swt.
</p>

<!-- Dalil Al-Hajj 7 -->
<div class="bg-primary/5 border-l-4 border-primary rounded-r-3xl p-8 mb-12 relative overflow-hidden">
    <div class="text-right font-quran text-4xl leading-[2.5] mb-6 text-on-surface" dir="rtl">
        وَأَنَّ السَّاعَةَ أَتِيَةٌ لَّا رَيْبَ فِيهَا وَأَنَّ اللَّهَ يَبْعَثُ مَنْ فِي الْقُبُوْرِ
    </div>
    <div class="font-body italic text-on-surface-variant text-md pt-4 border-t border-outline-variant/20">
        "Sesungguhnya kiamat itu pasti datang, tidak ada keraguan padanya dan sesungguhnya Allah akan membangkitkan siapa pun yang di dalam kubur." <br/><strong>(Q.S. al-Hajj [22]: 7)</strong>
    </div>
</div>

<!-- Jenis Kiamat -->
<h3 class="font-headline text-2xl font-bold text-primary mt-16 mb-8 text-center">Dua Jenis Kiamat</h3>
<div class="space-y-8 mb-16">
    
    <!-- Kiamat Sugra -->
    <div class="bg-white p-8 rounded-[2rem] shadow-sm border border-outline-variant/10 hover:shadow-xl transition-all">
        <div class="flex items-center gap-4 mb-6">
            <div class="w-14 h-14 bg-secondary-container rounded-2xl flex items-center justify-center shrink-0">
                <span class="material-symbols-outlined text-on-secondary-container text-3xl">hourglass_bottom</span>
            </div>
            <h4 class="font-bold text-xl">1. Kiamat Sugra (Kiamat Kecil)</h4>
        </div>
        <p class="text-on-surface-variant leading-relaxed text-md mb-6">
            Adalah berakhirnya kehidupan sebagian makhluk di dunia ini. Contoh kiamat sugra meliputi <strong>kematian</strong> setiap makhluk bernyawa dan <strong>bencana alam</strong> (banjir, gempa bumi, gunung meletus).
        </p>
        
        <div class="grid md:grid-cols-2 gap-4">
            <div class="bg-surface-container-low p-6 rounded-2xl">
                <h5 class="font-bold mb-2">Tentang Kematian</h5>
                <div class="text-right font-quran text-xl mb-3 text-on-surface" dir="rtl">أَيْنَ مَا تَكُونُوا يُدْرِكُكُمُ الْمَوْتُ...</div>
                <div class="text-sm italic text-on-surface-variant mb-2">"Dimana pun kamu berada, kematian akan mendapatkan kamu, kendatipun kamu berada di dalam benteng yang tinggi dan kukuh." <strong>(Q.S. an-Nisa': 78)</strong></div>
                <div class="text-xs text-on-surface-variant mt-2 border-t border-outline-variant/20 pt-2">Amal terputus kecuali: sedekah jariyah, ilmu bermanfaat, anak saleh yang mendoakan.</div>
            </div>
            <div class="bg-surface-container-low p-6 rounded-2xl">
                <h5 class="font-bold mb-2">Tentang Musibah</h5>
                <div class="text-right font-quran text-xl mb-3 text-on-surface" dir="rtl">...وَبَشِّرِ الصَّبِرِينَ الَّذِينَ إِذَا أَصَابَتْهُمْ مُصِيبَةٌ قَالُوا إِنَّا لِلَّهِ وَإِنَّا إِلَيْهِ رَاجِعُوْنَ</div>
                <div class="text-sm italic text-on-surface-variant">Sikap terbaik saat tertimpa musibah adalah bersabar dan mengucapkan kalimat istirja' (Inna lillahi wa inna ilaihi raji'un). <strong>(Q.S. Al-Baqarah: 155-156)</strong></div>
            </div>
        </div>
    </div>

    <!-- Kiamat Kubra -->
    <div class="bg-white p-8 rounded-[2rem] shadow-sm border border-error/20 hover:shadow-xl transition-all">
        <div class="flex items-center gap-4 mb-6">
            <div class="w-14 h-14 bg-error-container rounded-2xl flex items-center justify-center shrink-0">
                <span class="material-symbols-outlined text-on-error-container text-3xl">public_off</span>
            </div>
            <h4 class="font-bold text-xl text-error">2. Kiamat Kubra (Kiamat Besar)</h4>
        </div>
        <p class="text-on-surface-variant leading-relaxed text-md mb-6">
            Adalah kehancuran alam semesta dan seluruh isinya. Kiamat kubra belum terjadi dan hanya Allah Swt. yang tahu kapan terjadinya. Digambarkan dengan ditiupnya sangkakala, langit terpecah, gunung dihamburkan, dan bumi berguncang hebat.
        </p>
        <div class="bg-error/5 p-6 rounded-2xl mb-6">
            <div class="text-right font-quran text-2xl mb-4 text-on-surface" dir="rtl">إِنَّ مَا تُوْعَدُونَ لَأْتٌ وَمَا أَنْتُمْ بِمُعْجِزِينَ</div>
            <div class="text-sm italic text-on-surface-variant">"Sesungguhnya apa pun yang dijanjikan kepadamu pasti datang dan kamu tidak mampu menolaknya." <strong>(Q.S. al-An'am [6]: 134)</strong></div>
        </div>
        <div class="flex items-start gap-4">
            <span class="material-symbols-outlined text-error">warning</span>
            <div class="text-sm text-on-surface-variant">
                <strong>Tanda-tanda Kiamat Kubra:</strong> Keluarnya Dajal, turunnya Imam Mahdi dan Nabi Isa a.s., munculnya Yakjuj dan Makjuj, awan hitam (dukhan), terbitnya matahari dari barat, dan munculnya binatang melata.
            </div>
        </div>
    </div>
</div>

<!-- Rangkaian Peristiwa Di Akhirat -->
<h3 class="font-headline text-2xl font-bold text-primary mt-16 mb-8 text-center">Rangkaian Peristiwa di Akhirat</h3>
<div class="relative overflow-hidden p-10 bg-surface-container-highest rounded-[3rem] mb-16">
    <div class="space-y-6">
        
        <div class="flex gap-6">
            <div class="flex flex-col items-center">
                <div class="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl z-10 shadow-lg">1</div>
                <div class="w-1 bg-primary/20 h-full -my-2"></div>
            </div>
            <div class="pb-8">
                <h4 class="font-bold text-xl mb-2">Yaumul Barzakh (Alam Kubur)</h4>
                <p class="text-sm text-on-surface-variant">Batas antara alam dunia dan akhirat tempat menunggu hari kebangkitan. Manusia ditanyai malaikat Munkar dan Nakir. Perbanyak amal agar terhindar dari siksa kubur.</p>
            </div>
        </div>

        <div class="flex gap-6">
            <div class="flex flex-col items-center">
                <div class="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl z-10 shadow-lg">2</div>
                <div class="w-1 bg-primary/20 h-full -my-2"></div>
            </div>
            <div class="pb-8">
                <h4 class="font-bold text-xl mb-2">Yaumul Ba'ats</h4>
                <p class="text-sm text-on-surface-variant">Hari dibangkitkannya semua manusia dari alam kubur menuju Padang Mahsyar setelah tiupan sangkakala kedua oleh Malaikat Israfil.</p>
            </div>
        </div>

        <div class="flex gap-6">
            <div class="flex flex-col items-center">
                <div class="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl z-10 shadow-lg">3</div>
                <div class="w-1 bg-primary/20 h-full -my-2"></div>
            </div>
            <div class="pb-8">
                <h4 class="font-bold text-xl mb-2">Yaumul Mahsyar (Yaumul Hasyr)</h4>
                <p class="text-sm text-on-surface-variant">Hari dikumpulkannya seluruh manusia di Padang Mahsyar untuk menerima catatan amal perbuatan. Setiap orang sibuk dengan dirinya sendiri.</p>
            </div>
        </div>

        <div class="flex gap-6">
            <div class="flex flex-col items-center">
                <div class="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl z-10 shadow-lg">4</div>
                <div class="w-1 bg-primary/20 h-full -my-2"></div>
            </div>
            <div class="pb-8">
                <h4 class="font-bold text-xl mb-2">Yaumul Hisab</h4>
                <p class="text-sm text-on-surface-variant">Hari perhitungan amal perbuatan manusia. Anggota tubuh akan bersaksi. Amal yang pertama dihisab adalah ibadah salat.</p>
            </div>
        </div>

        <div class="flex gap-6">
            <div class="flex flex-col items-center">
                <div class="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl z-10 shadow-lg">5</div>
                <div class="w-1 bg-primary/20 h-full -my-2"></div>
            </div>
            <div class="pb-8">
                <h4 class="font-bold text-xl mb-2">Yaumul Mizan</h4>
                <p class="text-sm text-on-surface-variant mb-4">Hari ditimbangnya amal perbuatan manusia. Sekecil apapun perbuatan akan ditimbang secara presisi dan maha adil.</p>
                <div class="p-4 bg-white/50 rounded-xl italic text-xs text-on-surface-variant border border-outline-variant/10">
                    "Dan Kami akan memasang timbangan yang tepat pada hari Kiamat, maka tidak seorang pun dirugikan walau sedikit; sekalipun hanya seberat biji sawi..." <strong>(Q.S. al-Anbiya' [21]: 47)</strong>
                </div>
            </div>
        </div>

        <div class="flex gap-6">
            <div class="flex flex-col items-center">
                <div class="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl z-10 shadow-lg">6</div>
                <div class="w-1 bg-primary/20 h-full -my-2"></div>
            </div>
            <div class="pb-8">
                <h4 class="font-bold text-xl mb-2">Yaumul Jaza</h4>
                <p class="text-sm text-on-surface-variant">Hari pembalasan. Jika timbangan amal baik lebih berat, surga balasannya. Jika lebih ringan, neraka adalah tempatnya.</p>
            </div>
        </div>

        <div class="flex gap-6">
            <div class="flex flex-col items-center">
                <div class="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl z-10 shadow-lg">7</div>
            </div>
            <div>
                <h4 class="font-bold text-xl mb-2">Surga dan Neraka</h4>
                <p class="text-sm text-on-surface-variant">Tempat terakhir penuh kenikmatan abadi (Surga) bagi yang beramal saleh, dan tempat penyiksaan amat pedih (Neraka) bagi yang membangkang.</p>
            </div>
        </div>

    </div>
</div>

<!-- Hikmah Mawas Diri -->
<h3 class="font-headline text-2xl font-bold text-primary mt-12 mb-6">Mawas Diri Sebagai Hikmah</h3>
<div class="bg-gradient-to-br from-primary to-primary-container p-10 rounded-[3rem] text-white shadow-xl flex flex-col md:flex-row items-center gap-8 mb-12">
    <div class="w-24 h-24 bg-white/30 rounded-full flex items-center justify-center shrink-0">
        <span class="material-symbols-outlined text-5xl">psychology_alt</span>
    </div>
    <div>
        <h4 class="text-2xl font-headline font-bold mb-3">Sikap Hati-hati</h4>
        <p class="text-lg opacity-90 leading-relaxed mb-4">
            Mengimani Hari Akhir membuat kita selalu mawas diri (hati-hati dan waspada) terhadap hal negatif, karena sadar bahwa setiap perbuatan di dunia adalah bekal untuk pengadilan Allah di akhirat kelak.
        </p>
        <p class="text-md opacity-90">
            Gunakan kekuatan masa muda, fisik yang sehat, dan waktu luang untuk memperbanyak ibadah wajib dan sunah, menuntut ilmu, dan berbuat kebaikan kepada sesama secara adil dan bertanggung jawab!
        </p>
    </div>
</div>

        `
    }, {
        "id": "kls9-smtganjil-bab3",
        "kelas": 9,
        "semester": "Ganjil",
        "bab": "Bab 3",
        "judul": "Indahnya Etika Pergaulan Dan Komunikasi Islami",
        "waktuBumper": "12 Menit Baca",
        "gambar": "images/islamic_calligraphy.png",
        "konten": `

<p class="text-on-surface-variant leading-relaxed text-lg mb-8">
    Kesempurnaan iman seseorang terlihat dari akhlaknya. Akhlak yang baik sangat penting dalam kehidupan sehari-hari dan menentukan kemajuan suatu bangsa. Dalam pergaulan dan komunikasi, penting untuk menerapkan etika yang baik agar terhindar dari kesalahpahaman, pertengkaran, atau hal negatif lainnya. Orang yang berakhlak mulia disukai oleh teman, masyarakat, Allah Swt., dan Rasul-Nya.
</p>

<!-- Hadith: Innallaha jamil -->
<div class="bg-primary/5 rounded-[2rem] p-8 mb-12 border border-outline-variant/10 shadow-sm text-center">
    <div class="font-quran text-4xl leading-[2.5] mb-6 text-on-surface" dir="rtl">
        إِنَّ اللَّهَ جَمِيلٌ وَيُحِبُّ الْجَمَالَ
    </div>
    <div class="font-body italic text-on-surface-variant text-lg">
        "Sesungguhnya Allah Maha indah dan mencintai keindahan" <br/> <strong class="text-primary text-sm">(HR. Muslim dari Ibnu Mas'ûd)</strong>
    </div>
</div>

<h3 class="font-headline text-2xl font-bold text-primary mt-12 mb-6">Etika Pergaulan dalam Ajaran Islam</h3>
<p class="text-on-surface-variant leading-relaxed text-lg mb-8">
    Manusia adalah makhluk sosial yang perlu saling mengenal dan bergaul.
</p>

<!-- Q.S. Al-Hujurat 13 -->
<div class="bg-surface-container-low border border-outline-variant/30 rounded-[2rem] p-8 mb-12 relative overflow-hidden">
    <span class="material-symbols-outlined absolute -top-4 -right-4 text-9xl text-primary/5 rotate-12">groups</span>
    <h4 class="font-bold text-xl text-on-surface mb-6">Q.S. Al-Hujurat [49] ayat 13</h4>
    <div class="text-right font-quran text-4xl leading-[2.5] mb-6 text-on-surface" dir="rtl">
        يَأَيُّهَا النَّاسُ إِنَّا خَلَقْنَكُمْ مِنْ ذَكَرٍ وَأُنثَى وَجَعَلْنَكُمْ شُعُوبًا وَقَبَابِلَ لِتَعَارَفُوا إِنَّ أَكْرَمَكُمْ عِنْدَ اللَّهِ أَتْقَكُمْ إِنَّ اللَّهَ عَلِيمٌ خَبِيرٌ
    </div>
    <div class="font-body italic text-on-surface-variant text-lg pt-4 border-t border-outline-variant/20">
        "Hai manusia, sesungguhnya Kami menciptakan kamu dari seorang laki-laki dan seorang perempuan dan menjadikan kamu berbangsa-bangsa dan bersuku-suku supaya kamu saling kenal-mengenal. Sesungguhnya orang yang paling mulia di antara kamu di sisi Allah ialah orang yang paling takwa di antara kamu. Sesungguhnya Allah Maha Mengetahui lagi Maha Mengenal."
    </div>
</div>

<h3 class="font-headline text-2xl font-bold text-primary mt-12 mb-8 text-center">Etika Berdasarkan Usia & Kondisi</h3>
<div class="space-y-8 mb-16">
    
    <!-- 1. Orang yang Lebih Tua -->
    <div class="bg-white p-8 rounded-[2rem] shadow-sm border border-outline-variant/10 hover:shadow-xl transition-all">
        <div class="flex items-center gap-4 mb-6">
            <div class="w-14 h-14 bg-secondary-container rounded-2xl flex items-center justify-center shrink-0">
                <span class="material-symbols-outlined text-on-secondary-container text-3xl">elderly</span>
            </div>
            <h4 class="font-bold text-xl">1. Orang yang Lebih Tua</h4>
        </div>
        <p class="text-on-surface-variant leading-relaxed text-md mb-6">
            Kita harus bersikap sopan santun, menghormati, dan menyayangi orang tua, kakek, nenek, paman, bibi, kakak, dan guru. Berbicara dengan baik dan menghindari menyakiti hati mereka. Rida Allah Swt. bergantung pada rida orang tua.
        </p>
        <div class="bg-primary/5 p-6 rounded-2xl">
            <div class="text-right font-quran text-2xl mb-4" dir="rtl">مَنْ لَمْ يَرْحَمْ صَغِيْرَنَا وَيَعْرِفْ حَقَّ كَبِيرَنَا فَلَيْسَ مِنَّا</div>
            <p class="text-sm italic text-on-surface-variant">"Siapa yang tidak menyayangi orang yang kecil di antara kami, dan tidak mengerti hak orang yang lebih besar di antara kami, maka ia bukan dari golongan kami." (H.R. Abu Daud)</p>
        </div>
    </div>

    <!-- 2. Teman Sebaya -->
    <div class="bg-white p-8 rounded-[2rem] shadow-sm border border-outline-variant/10 hover:shadow-xl transition-all">
        <div class="flex items-center gap-4 mb-6">
            <div class="w-14 h-14 bg-secondary-container rounded-2xl flex items-center justify-center shrink-0">
                <span class="material-symbols-outlined text-on-secondary-container text-3xl">handshake</span>
            </div>
            <h4 class="font-bold text-xl">2. Teman Sebaya</h4>
        </div>
        <p class="text-on-surface-variant leading-relaxed text-md">
            Teman sebaya adalah tempat kita mencurahkan isi hati. Kita harus menghormati dan menghargai mereka. Beberapa etika dengan teman sebaya antara lain mengucapkan salam, saling menasihati dalam kebaikan, saling mendoakan, dan menjauhi pertengkaran atau perundungan (bullying).
        </p>
    </div>

    <!-- 3. Yang Lebih Muda -->
    <div class="bg-white p-8 rounded-[2rem] shadow-sm border border-outline-variant/10 hover:shadow-xl transition-all">
        <div class="flex items-center gap-4 mb-6">
            <div class="w-14 h-14 bg-secondary-container rounded-2xl flex items-center justify-center shrink-0">
                <span class="material-symbols-outlined text-on-secondary-container text-3xl">child_care</span>
            </div>
            <h4 class="font-bold text-xl">3. Yang Lebih Muda</h4>
        </div>
        <p class="text-on-surface-variant leading-relaxed text-md">
            Islam menganjurkan bersikap santun kepada yang lebih muda. Tidak boleh sombong, justru harus membantu dengan penuh kasih sayang. Termasuk kepada mereka yang keadaan ekonomi atau pengetahuannya di bawah kita (seperti anak yatim/fakir miskin).
        </p>
    </div>

    <!-- 4. Lawan Jenis -->
    <div class="bg-white p-8 rounded-[2rem] shadow-sm border border-outline-variant/10 hover:shadow-xl transition-all">
        <div class="flex items-center gap-4 mb-6">
            <div class="w-14 h-14 bg-secondary-container rounded-2xl flex items-center justify-center shrink-0">
                <span class="material-symbols-outlined text-on-secondary-container text-3xl">wc</span>
            </div>
            <h4 class="font-bold text-xl">4. Lawan Jenis</h4>
        </div>
        <p class="text-on-surface-variant leading-relaxed text-md mb-6">
            Islam membolehkan bergaul dengan lawan jenis dengan rambu-rambu: <strong>menghindari khalwat (berduaan di tempat sepi)</strong>, <strong>menutup aurat (Q.S. Al-Ahzab: 59)</strong>, <strong>menjaga pandangan</strong>, dan membatasi intensitas komunikasi.
        </p>
        <div class="bg-error/5 p-6 rounded-2xl border-l-4 border-error/50">
            <div class="text-right font-quran text-2xl mb-4 text-on-surface" dir="rtl">لَا يَخْلُوَنَّ رَجُلٌ بِامْرَأَةٍ إِلَّا وَمَعَهَا ذُو مَحْرَمٍ</div>
            <p class="text-sm italic text-on-surface-variant">"Janganlah seorang laki-laki itu berkhalwat (menyendiri) dengan seorang wanita, kecuali ada mahram yang menyertai wanita tersebut." (H.R. Bukhari Muslim)</p>
        </div>
    </div>

</div>

<h3 class="font-headline text-2xl font-bold text-primary mt-16 mb-8 text-center">Etika Komunikasi Islami</h3>
<div class="grid md:grid-cols-2 gap-8 mb-16">
    <!-- Validasi Berita -->
    <div class="bg-surface-container-low p-6 rounded-[2rem]">
        <h4 class="font-bold text-lg mb-3 flex items-center"><span class="material-symbols-outlined mr-2 text-primary">fact_check</span> Berkata Benar & Teliti</h4>
        <p class="text-sm text-on-surface-variant mb-4">Menjauhi perkataan dusta (hoaks) dan selalu meneliti informasi (Tabayyun).</p>
        <div class="p-4 bg-white rounded-xl text-xs text-on-surface italic">
            "... dan jauhilah perkataan-perkataan dusta" <br/><strong>(Q.S. Al-Hajj: 30)</strong>
        </div>
        <div class="p-4 bg-white rounded-xl text-xs text-on-surface italic mt-3">
            "... telitilah kebenarannya agar kamu tidak mencelakakan suatu kaum..." <br/><strong>(Q.S. Al-Hujurat: 6)</strong>
        </div>
    </div>

    <!-- Bahasa Santun -->
    <div class="bg-surface-container-low p-6 rounded-[2rem]">
        <h4 class="font-bold text-lg mb-3 flex items-center"><span class="material-symbols-outlined mr-2 text-primary">record_voice_over</span> Bahasa Santun</h4>
        <p class="text-sm text-on-surface-variant mb-4">Menggunakan kata-kata yang baik sebagai cara menghormati orang lain ( Qaulan Ma'rufan / Layyinan ).</p>
        <div class="p-4 bg-white rounded-xl text-xs text-on-surface italic">
            "... serta ucapkanlah kata-kata yang baik kepada manusia..." <br/><strong>(Q.S. Al-Baqarah: 83)</strong>
        </div>
        <div class="p-4 bg-white rounded-xl text-xs text-on-surface italic mt-3">
            "... Barang siapa yang beriman kepada Allah dan Hari Akhir maka hendaklah ia berkata yang baik atau ia diam." <br/><strong>(H.R. Bukhari & Muslim)</strong>
        </div>
    </div>
</div>

<h3 class="font-headline text-2xl font-bold text-primary mt-12 mb-6">Kalimah Thayyibah</h3>
<div class="bg-primary/5 border-l-4 border-primary rounded-r-3xl p-8 mb-12 relative overflow-hidden">
    <p class="text-on-surface-variant leading-relaxed text-md mb-6">
        Saat heran, takjub, marah, terkejut, hendaknya merespons dengan kata-kata baik (<em>kalimah thayyibah</em>). Kata ini indah, mendatangkan pahala dan ridha Allah.
    </p>
    <div class="text-right font-quran text-4xl leading-[2.5] mb-6 text-on-surface" dir="rtl">
        أَلَمْ تَرَ كَيْفَ ضَرَبَ اللَّهُ مَثَلًا كَلِمَةً طَيِّبَةً كَشَجَرَةٍ طَيِّبَةٍ أَصْلُهَا ثَابِتٌ وَفَرْعُهَا فِي السَّمَاءِ
    </div>
    <div class="font-body italic text-on-surface-variant text-md">
        "Tidakkah kamu perhatikan bagaimana Allah telah membuat perumpamaan kalimat yang baik seperti pohon yang baik, akarnya teguh dan cabangnya (menjulang) ke langit." <strong class="text-primary">(Q.S. Ibrahim: 24-25)</strong>
    </div>
</div>

<!-- Bertanggung Jawab -->
<h3 class="font-headline text-2xl font-bold text-primary mt-12 mb-6">Tanggung Jawab di Dunia Nyata & Maya</h3>
<div class="bg-surface-container-highest p-8 rounded-[2rem] mb-12">
    <p class="text-on-surface-variant leading-relaxed text-md mb-6">
        Komunikasi, terutama di media sosial, harus dilakukan dengan penuh tanggung jawab atas apa yang diposting.
    </p>
    <div class="p-6 bg-white rounded-2xl italic text-sm">
        "Aku mendengar Rasulullah saw. bersabda: 'Kami semua adalah pemelihara (pemimpin) dan bertanggung jawab atas pemeliharaannya…'" <strong class="not-italic text-primary block mt-2">(H.R. Bukhari)</strong>
    </div>
</div>

<div class="bg-gradient-to-br from-primary to-primary-container p-10 rounded-[3rem] text-white shadow-xl flex flex-col md:flex-row items-center gap-8">
    <div class="w-24 h-24 bg-white/30 rounded-full flex items-center justify-center shrink-0">
        <span class="material-symbols-outlined text-5xl">volunteer_activism</span>
    </div>
    <div>
        <h4 class="text-2xl font-headline font-bold mb-3">Hikmah Pergaulan Islami</h4>
        <p class="text-lg opacity-90 leading-relaxed">
            Setiap larangan-Nya akan menghindarkan dari keburukan. Menerapkan etika pergaulan dan komunikasi akan membawa kedamaian dan <strong>kemuliaan akhlak</strong> yang membuahkan pahala melimpah di akhirat.
        </p>
    </div>
</div>

        `
    }, {
        "id": "kls9-smtganjil-bab4",
        "kelas": 9,
        "semester": "Ganjil",
        "bab": "Bab 4",
        "judul": "Bersyukur dengan Akikah, Peduli Sesama dengan Berkurban",
        "waktuBumper": "12 Menit Baca",
        "gambar": "images/islamic_calligraphy.png",
        "konten": `

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

        `
    }, {
        "id": "kls9-smtganjil-bab5",
        "kelas": 9,
        "semester": "Ganjil",
        "bab": "Bab 5",
        "judul": "Mengapresiasi Peradaban Daulah Usmani",
        "waktuBumper": "14 Menit Baca",
        "gambar": "images/islamic_calligraphy.png",
        "konten": `

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

        `
    }, {
        "id": "kls9-smtgenap-bab1",
        "kelas": 9,
        "semester": "Genap",
        "bab": "Bab 1",
        "judul": "Al-Qur'an Menginspirasi: Menjadi Khalifatullah Fil 'Ard Penebar Kasih Sayang",
        "waktuBumper": "13 Menit Baca",
        "gambar": "images/islamic_calligraphy.png",
        "konten": `

<p class="text-on-surface-variant leading-relaxed text-lg mb-8">
    Bab ini mengajarkan tentang peran penting manusia sebagai khalifah Allah di bumi dan bagaimana menjadi penebar kasih sayang sesuai tuntunan mulia dari Al-Qur'an dan Hadis.
</p>

<!-- 1. Hukum Bacaan Mad -->
<div class="bg-surface-container-low p-8 rounded-[2rem] mb-12 border border-outline-variant/20 shadow-sm relative overflow-hidden">
    <span class="material-symbols-outlined absolute -bottom-6 -right-6 text-[150px] text-primary/5">menu_book</span>
    <h3 class="font-headline text-2xl font-bold text-primary mb-6 relative z-10">1. Memahami Hukum Bacaan Mad</h3>
    <p class="text-on-surface-variant leading-relaxed text-md mb-6 relative z-10">
        Saat membaca Al-Qur'an, kita diwajibkan untuk membacanya secara tartil sesuai ilmu tajwid. Salah satu pilar tajwid adalah <strong>Mad</strong>, yang secara bahasa berarti memanjangkan bunyi.
    </p>

    <div class="grid md:grid-cols-2 gap-6 relative z-10">
        <!-- Mad Tabi'i -->
        <div class="bg-white p-6 rounded-2xl border border-outline-variant/10 shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
            <h4 class="font-bold text-lg mb-2 text-primary flex items-center">
                <span class="material-symbols-outlined mr-2">looks_one</span> Mad Tabi'i (Asli)
            </h4>
            <p class="text-sm text-on-surface-variant leading-relaxed">
                Dipanjangkan <strong>dua harakat</strong>. Terjadi jika: <br>
                • Alif sukun jatuh setelah fathah <br>
                • Wau sukun jatuh setelah dammah <br>
                • Ya sukun jatuh setelah kasrah.
            </p>
        </div>
        <!-- Mad Far'i -->
        <div class="bg-white p-6 rounded-2xl border border-outline-variant/10 shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
            <h4 class="font-bold text-lg mb-2 text-secondary flex items-center">
                <span class="material-symbols-outlined mr-2">looks_two</span> Mad Far'i (Cabang)
            </h4>
            <p class="text-sm text-on-surface-variant leading-relaxed">
                Adalah Mad Tabi'i yang mendapat tambahan bacaan (seperti bertemu hamzah atau sukun). Contohnya: <em>Mad Wajib Muttasil, Mad Jaiz Munfasil, Mad 'Aridlissukun</em>, dll.
            </p>
        </div>
    </div>
</div>

<!-- 2. Kandungan Q.S. Al-Baqarah: 30 -->
<h3 class="font-headline text-2xl font-bold text-primary mt-16 mb-6">2. Menjadi Khalifah di Bumi (Q.S. Al-Baqarah: 30)</h3>
<p class="text-on-surface-variant leading-relaxed text-md mb-6">
    Allah menciptakan manusia sebagai <strong>Khalifatullah fil 'ard</strong> (pengganti atau wakil di bumi) yang diberi akal dan pikiran untuk mengemban amanah mengelola bumi dan isinya.
</p>

<!-- Dalil Al-Baqarah 30 -->
<div class="bg-primary/5 border-l-4 border-primary rounded-r-3xl p-8 mb-8 relative overflow-hidden">
    <div class="text-right font-quran text-3xl leading-[2.5] mb-6 text-on-surface" dir="rtl">
        وَإِذْ قَالَ رَبُّكَ لِلْمَلَئِكَةِ إِنِّي جَاعِلٌ فِي الْأَرْضِ خَلِيفَةً قَالُوا أَتَجْعَلُ فِيهَا مَنْ يُفْسِدُ فِيهَا وَيَسْفِكُ الدِّمَاءَ وَنَحْنُ نُسَبِّحُ بِحَمْدِكَ وَنُقَدِّسُ لَكَ قَالَ إِنِّي أَعْلَمُ مَا لَا تَعْلَمُوْنَ
    </div>
    <div class="font-body italic text-on-surface-variant text-md pt-4 border-t border-outline-variant/20">
        "Ingatlah ketika Tuhanmu berfirman kepada para Malaikat: 'Sesungguhnya Aku hendak menjadikan seorang khalifah di muka bumi'. Mereka berkata: 'Mengapa Engkau hendak menjadikan (khalifah) di bumi itu orang yang akan membuat kerusakan padanya dan menumpahkan darah, padahal kami senantiasa bertasbih dengan memuji Engkau dan mensucikan Engkau?' Tuhan berfirman: 'Sesungguhnya Aku mengetahui apa yang tidak kamu ketahui'." <strong>(Q.S. Al-Baqarah: 30)</strong>
    </div>
</div>

<div class="space-y-4 mb-14 pl-2 border-l-2 border-outline-variant/30 text-on-surface-variant">
    <p class="flex items-start"><span class="material-symbols-outlined text-primary mr-3 shrink-0">check_circle</span> <strong>Memanfaatkan Alam:</strong> Secara bijak untuk kebutuhan hidup ("Maka bertebaranlah kamu di muka bumi dan carilah karunia Allah...").</p>
    <p class="flex items-start"><span class="material-symbols-outlined text-primary mr-3 shrink-0">eco</span> <strong>Menjaga Lingkungan:</strong> Jangan merusak bumi setelah diciptakannya keseimbangan oleh Allah.</p>
</div>


<!-- 3. Keseimbangan Dunia Akhirat: Q.S. Al-Qasas: 77 -->
<h3 class="font-headline text-2xl font-bold text-primary mt-12 mb-6">3. Keseimbangan Hidup (Q.S. Al-Qaşaş: 77)</h3>

<div class="bg-surface-container-high border border-outline-variant/30 rounded-[2rem] p-8 mb-8 relative overflow-hidden">
    <div class="text-right font-quran text-3xl leading-[2.5] mb-6 text-on-surface" dir="rtl">
        وَا بْتَغِ فِيمَا آتَاكَ اللهُ الدَّارَ الْآخِرَةَ وَلَا تَنْسَ نَصِيبَكَ مِنَ الدُّنْيَا وَأَحْسِنْ كَمَا أَحْسَنَ اللهُ إِلَيْكَ وَلَا تَبْغِ الْفَسَادَ فِي الْأَرْضِ إِنَّ اللَّهَ لَا يُحِبُّ الْمُفْسِدِينَ
    </div>
    <div class="font-body italic text-on-surface-variant text-md pt-4 border-t border-outline-variant/20">
        "Dan carilah pada apa yang telah dianugerahkan Allah kepadamu (kebahagiaan) negeri akhirat, dan janganlah kamu melupakan bahagianmu dari (kenikmatan) duniawi dan berbuat baiklah (kepada orang lain) sebagaimana Allah telah berbuat baik kepadamu, dan janganlah kamu berbuat kerusakan di (muka) bumi. Sesungguhnya Allah tidak menyukai orang-orang yang berbuat kerusakan." <strong>(Q.S. Al-Qaşaş: 77)</strong>
    </div>
</div>

<p class="text-sm font-bold text-on-surface mb-4">Pesan Hikmah dari Ayat di atas:</p>
<ul class="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-on-surface-variant mb-14">
    <li class="bg-white p-4 rounded-xl shadow-sm">Hidup harus seimbang antara mengejar bekal akhirat dan tidak melupakan fitrah dunia.</li>
    <li class="bg-white p-4 rounded-xl shadow-sm">Hindari sifat rakus dan <em>flexing</em> (pamer harta) dunia hingga melalaikan akhirat.</li>
    <li class="bg-white p-4 rounded-xl shadow-sm">Tebarkanlah kasih sayang (Rahmatan lil 'Alamin) sebagai balas budi atas nikmat Allah.</li>
    <li class="bg-white p-4 rounded-xl shadow-sm">Jangan menjadi <em>mufsidin</em> (orang yang merusak alam dan menghancurkan kedamaian).</li>
</ul>


<!-- 4. Hadits Penebar Kasih Sayang -->
<h3 class="font-headline text-2xl font-bold text-primary mt-12 mb-6 text-center">4. Hadis Tentang Kasih Sayang</h3>
<div class="grid md:grid-cols-2 gap-6 mb-16">
    <div class="bg-secondary-container/20 p-6 rounded-3xl border border-secondary/10">
        <div class="text-right font-quran text-2xl mb-4 leading-loose" dir="rtl">الرَّاحِمُوْنَ يَرْحَمُهُمُ الرَّحْمَنُ ارْحَمُوا مَنْ فِي الْأَرْضِ يَرْحَمْكُمْ مَنْ فِي السَّمَاءِ</div>
        <p class="text-xs text-on-surface-variant italic border-t border-outline-variant/20 pt-3">"Orang-orang yang penyayang itu akan disayang oleh Dzat yang Maha penyayang. Hendaklah kalian sayangi orang yang berada di bumi, maka kalian akan disayangi oleh Dzat (Malaikat dan rahmat Allah) yang di atas langit."</p>
    </div>
    <div class="bg-secondary-container/20 p-6 rounded-3xl border border-secondary/10">
        <div class="text-right font-quran text-2xl mb-4 leading-loose" dir="rtl">مَنْ لَا يَرْحَمُ النَّاسَ لَا يَرْحَمْهُ اللَّهُ عَزَّ وَجَلَ</div>
        <p class="text-xs text-on-surface-variant italic border-t border-outline-variant/20 pt-3">"Barangsiapa yang tidak menyayangi manusia yang lain, maka ia tidak akan disayangi Allah Azza wa Jalla." <br><strong>(H.R. Bukhari/Muslim dari Jabir)</strong></p>
    </div>
</div>


<!-- 5. Peran Pelajar Muslim -->
<div class="bg-gradient-to-br from-primary to-primary-container p-10 rounded-[3rem] text-white shadow-xl">
    <h4 class="text-2xl font-headline font-bold mb-8 text-center text-white">Bagaimana Penerapan Khalifah Sehari-hari?</h4>
    <div class="grid sm:grid-cols-3 gap-6">
        <div class="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 hover:-translate-y-1 transition-transform">
            <span class="material-symbols-outlined text-4xl mb-4 text-white">compost</span>
            <div class="font-bold mb-2">Peduli Lingkungan</div>
            <p class="text-sm opacity-90 leading-relaxed">Merawat tanaman, mengurangi plastik, dan membuang sampah pada tempatnya untuk menjaga bumi titipan Allah.</p>
        </div>
        <div class="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 hover:-translate-y-1 transition-transform">
            <span class="material-symbols-outlined text-4xl mb-4 text-white">diversity_1</span>
            <div class="font-bold mb-2">Menebar Kasih Sayang</div>
            <p class="text-sm opacity-90 leading-relaxed">Menghindari perundungan (bullying), saling membantu, belajar bersama kelompok, dan memuliakan guru serta teman.</p>
        </div>
         <div class="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 hover:-translate-y-1 transition-transform">
            <span class="material-symbols-outlined text-4xl mb-4 text-white">app_registration</span>
            <div class="font-bold mb-2">Memperbanyak Amal</div>
            <p class="text-sm opacity-90 leading-relaxed">Setiap aktivitas (sekolah/bermain) jika diniatkan karena Allah akan dinilai ibadah. Lakukan segala hal dengan ikhlas!</p>
        </div>
    </div>
</div>

        `
    }, {
        "id": "kls9-smtgenap-bab2",
        "kelas": 9,
        "semester": "Genap",
        "bab": "Bab 2",
        "judul": "Meraih Ketenangan Jiwa dengan Meyakini Qada dan Qadar",
        "waktuBumper": "14 Menit Baca",
        "gambar": "images/islamic_calligraphy.png",
        "konten": `

<p class="text-on-surface-variant leading-relaxed text-lg mb-8">
    Bab ini menjelaskan tentang pentingnya mengimani Qada dan Qadar Allah Swt. dalam kehidupan sehari-hari, yang bisa membantu kita meraih ketenangan jiwa. Mengimani Qada dan Qadar adalah <strong>rukun iman yang keenam</strong>.
</p>

<!-- 1. Pengertian dan Dalil -->
<h3 class="font-headline text-2xl font-bold text-primary mt-12 mb-6 flex items-center">
    <span class="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mr-4 shrink-0">
        <span class="material-symbols-outlined text-[24px]">psychology_alt</span>
    </span>
    1. Pengertian Qada dan Qadar
</h3>

<div class="grid md:grid-cols-2 gap-6 mb-8">
    <!-- Qada -->
    <div class="bg-surface-container-low p-8 rounded-[2.5rem] border border-outline-variant/20 hover:shadow-lg transition-shadow">
        <h4 class="font-bold text-2xl mb-4 text-on-surface flex items-center">Qada <span class="bg-primary/10 text-primary text-xs ml-3 px-3 py-1 rounded-full">Rencana</span></h4>
        <p class="text-on-surface-variant leading-relaxed text-sm">
            Secara bahasa artinya keputusan, ketetapan, atau kehendak. Secara istilah, Qada adalah ketetapan Allah Swt. yang sudah ada sejak zaman <em>azali</em> (sebelum segala sesuatu diciptakan). 
        </p>
    </div>
    <!-- Qadar -->
    <div class="bg-surface-container-low p-8 rounded-[2.5rem] border border-outline-variant/20 hover:shadow-lg transition-shadow">
        <h4 class="font-bold text-2xl mb-4 text-on-surface flex items-center">Qadar <span class="bg-secondary/10 text-secondary text-xs ml-3 px-3 py-1 rounded-full">Perwujudan</span></h4>
        <p class="text-on-surface-variant leading-relaxed text-sm">
            Secara bahasa artinya kepastian atau ukuran. Secara istilah, Qadar adalah perwujudan nyata dari ketetapan Allah (Qada) yang terjadi pada makhluk sesuai ukuran yang ditetapkan.
        </p>
    </div>
</div>

<p class="text-on-surface-variant italic bg-primary/5 p-4 rounded-xl text-center mb-10">
    Gabungan Qada dan Qadar sering kita sebut sebagai <strong>Takdir</strong>. Allah Swt. telah menetapkan takdir setiap manusia, termasuk jenis kelamin, rezeki, dan ajalnya.
</p>

<!-- Hadits Qada dan Qadar -->
<div class="bg-surface-container-highest border-l-4 border-outline-variant rounded-r-3xl p-8 mb-16 relative overflow-hidden">
    <span class="material-symbols-outlined absolute -top-4 -right-4 text-9xl text-surface-container-low/50 rotate-12">history_edu</span>
    <h4 class="font-bold text-lg mb-4">Hadis Pencatatan Takdir di Rahim</h4>
    <div class="text-right font-quran text-2xl leading-[2.5] mb-6 text-on-surface" dir="rtl">
        وُكِّلَ بِالرَّحِمِ مَلَكٌ ... فَإِذَا أَرَادَ اللَّهُ أَنْ يَقْضِيَ خَلْقَهَا قَالَ أَيْ رَبِّ أَذَكَرٌ أَوْ أُنْثَى أَشَقِيٌّ أَمْ سَعِيدٌ فَمَا الرِّزْقُ وَالْأَجَلُ فَيَكْتُبُ فِي بَطْنِ أُمِّهِ
    </div>
    <div class="font-body italic text-on-surface-variant text-sm pt-4 border-t border-outline-variant/20">
        "...Kemudian apabila Allah menghendaki untuk menyempurnakan kejadiannya, maka malaikat bertanya: “Wahai Rabb, apakah (akan dijadikan) laki-laki atau perempuan? Apakah celaka atau bahagia? Bagaimana dengan rezeki dan ajalnya?”. Maka dicatatlah dalam perut ibunya." <br><strong>(H.R. Bukhari dan Muslim dari Anas)</strong>
    </div>
</div>


<!-- 2. Hubungan Ikhtiar, Doa, dan Tawakal -->
<h3 class="font-headline text-2xl font-bold text-primary mt-12 mb-8 text-center text-primary">Tiga Pilar Menghadapi Takdir</h3>
<p class="text-on-surface-variant text-center mb-10 max-w-2xl mx-auto">
    Mengimani takdir <strong>bukan berarti pasrah</strong> tanpa usaha. Justru kita wajib berusaha semaksimal mungkin, berdoa, dan menyerahkan hasil akhirnya kepada Allah.
</p>

<div class="space-y-6 mb-16">
    <!-- Ikhtiar -->
    <div class="flex flex-col md:flex-row gap-6 items-start bg-white p-6 rounded-[2rem] border border-outline-variant/10 shadow-sm">
        <div class="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center shrink-0">
            <span class="material-symbols-outlined text-primary text-3xl">directions_run</span>
        </div>
        <div>
            <h4 class="font-bold text-xl mb-2 text-on-surface">1. Ikhtiar (Terus Berusaha)</h4>
            <p class="text-sm text-on-surface-variant mb-4 leading-relaxed">Berusaha maksimal untuk mencapai tujuan. Allah tidak akan mengubah nasib suatu kaum sebelum mereka berusaha mengubah nasibnya sendiri.</p>
            <div class="bg-surface-container p-4 rounded-xl">
                <div class="text-right font-quran text-lg mb-2" dir="rtl">فَا ذَا قُضِيَتِ الصَّلُوةُ فَا نَتَشِرُوا فِي الْأَرْضِ وَا بْتَغُوْا مِنْ فَضْلِ اللَّهِ...</div>
                <div class="text-xs italic text-on-surface-variant">"Apabila telah ditunaikan shalat, maka bertebaranlah kamu di muka bumi; dan carilah karunia Allah..." <strong>(Q.S. Al-Jumu'ah: 10)</strong></div>
            </div>
        </div>
    </div>

    <!-- Doa -->
    <div class="flex flex-col md:flex-row gap-6 items-start bg-white p-6 rounded-[2rem] border border-outline-variant/10 shadow-sm">
        <div class="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center shrink-0">
            <span class="material-symbols-outlined text-secondary text-3xl">volunteer_activism</span>
        </div>
        <div>
            <h4 class="font-bold text-xl mb-2 text-on-surface">2. Doa (Memohon Pertolongan)</h4>
            <p class="text-sm text-on-surface-variant leading-relaxed">Memohon kepada Allah setelah memeras keringat berikhtiar, karena segala hasil akhir murni merupakan kehendak Allah. Doa memberikan kita optimisme.</p>
        </div>
    </div>

    <!-- Tawakal -->
    <div class="flex flex-col md:flex-row gap-6 items-start bg-white p-6 rounded-[2rem] border border-outline-variant/10 shadow-sm">
        <div class="w-16 h-16 bg-tertiary/10 rounded-2xl flex items-center justify-center shrink-0">
            <span class="material-symbols-outlined text-tertiary text-3xl">self_improvement</span>
        </div>
        <div>
            <h4 class="font-bold text-xl mb-2 text-on-surface">3. Tawakal (Berserah Diri)</h4>
            <p class="text-sm text-on-surface-variant leading-relaxed">Menyerahkan segala urusan dan hasil kepada Allah Swt. <strong>setelah</strong> berikhtiar dan berdoa. Tawakal adalah puncaknya orang beriman yang akan mendatangkan ketenangan jiwa paripurna.</p>
        </div>
    </div>
</div>


<!-- 3. Sikap Menghadapi Takdir & Hikmah -->
<h3 class="font-headline text-2xl font-bold text-primary mt-12 mb-6 text-center">Sikap Terbaik & Hikmah Takdir</h3>
<div class="grid md:grid-cols-2 gap-8 mb-12">
    <div class="bg-surface-container-low p-8 rounded-[2rem] text-center border-t-8 border-primary">
        <span class="material-symbols-outlined text-5xl text-primary mb-4">thumb_up</span>
        <h4 class="font-bold text-xl mb-2">Bersyukur</h4>
        <p class="text-sm text-on-surface-variant">Mengucapkan terima kasih saat mendapat nikmat. Ingat, bersyukur justru akan membuat nikmat itu bertambah.</p>
    </div>
    <div class="bg-surface-container-low p-8 rounded-[2rem] text-center border-t-8 border-secondary">
        <span class="material-symbols-outlined text-5xl text-secondary mb-4">shield</span>
        <h4 class="font-bold text-xl mb-2">Bersabar</h4>
        <p class="text-sm text-on-surface-variant">Lapang dada saat menerima musibah atau takdir buruk. Sabar adalah perisai paling kokoh dari listerik kekecewaan.</p>
    </div>
</div>

<div class="bg-gradient-to-br from-primary to-primary-container p-10 rounded-[3rem] text-white shadow-xl flex flex-col md:flex-row items-center gap-8">
    <div class="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center shrink-0">
        <span class="material-symbols-outlined text-5xl text-white">diamond</span>
    </div>
    <div>
        <h4 class="text-2xl font-headline font-bold mb-4">6 Hikmah Iman pada Qada & Qadar</h4>
        <ul class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm opacity-90">
            <li class="flex items-center"><span class="material-symbols-outlined text-white mr-2 text-lg">check</span> Meningkatkan keimanan & takwa</li>
            <li class="flex items-center"><span class="material-symbols-outlined text-white mr-2 text-lg">check</span> Menenangkan jiwa (bebas stres)</li>
            <li class="flex items-center"><span class="material-symbols-outlined text-white mr-2 text-lg">check</span> Motivasi untuk ikhtiar & doa</li>
            <li class="flex items-center"><span class="material-symbols-outlined text-white mr-2 text-lg">check</span> Melatih syukur dan sabar</li>
            <li class="flex items-center"><span class="material-symbols-outlined text-white mr-2 text-lg">check</span> Mencegah sombong atau bunuh diri</li>
            <li class="flex items-center"><span class="material-symbols-outlined text-white mr-2 text-lg">check</span> Menumbuhkan optimisme hidup</li>
        </ul>
    </div>
</div>

        `
    }, {
        "id": "kls9-smtgenap-bab3",
        "kelas": 9,
        "semester": "Genap",
        "bab": "Bab 3",
        "judul": "Mengembangkan Ekspresi Seni Islami",
        "waktuBumper": "12 Menit Baca",
        "gambar": "images/islamic_calligraphy.png",
        "konten": `

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

        `
    }, {
        "id": "kls9-smtgenap-bab4",
        "kelas": 9,
        "semester": "Genap",
        "bab": "Bab 4",
        "judul": "Mengaplikasikan Mazhab dalam Fikih",
        "waktuBumper": "14 Menit Baca",
        "gambar": "images/islamic_calligraphy.png",
        "konten": `

<p class="text-on-surface-variant leading-relaxed text-lg mb-8">
    Bab ini menjelaskan tentang fondasi krusial dalam memahami hukum Islam: apa itu mazhab, mengapa kita butuh guru untuk memandu ibadah, siapa saja para Imam raksasa di baliknya, dan inspirasi akhlak mereka.
</p>

<!-- 1. Pengertian Mazhab & Pentingnya Bermazhab -->
<div class="grid md:grid-cols-2 gap-8 mb-16">
    <div class="bg-surface-container-low p-8 rounded-[2rem] border border-outline-variant/20 shadow-sm relative overflow-hidden">
        <span class="material-symbols-outlined absolute -top-8 -right-8 text-9xl text-primary/5">account_tree</span>
        <h3 class="font-headline text-2xl font-bold text-primary mb-6"><span class="bg-primary text-white w-8 h-8 inline-flex items-center justify-center rounded-lg text-sm mr-2">1</span> Apa itu Mazhab?</h3>
        <p class="text-on-surface-variant leading-relaxed text-sm mb-4">
            Secara <strong>bahasa</strong> artinya jalan, pendapat, atau aliran. 
        </p>
        <p class="text-on-surface-variant leading-relaxed text-sm mb-4">
            Secara <strong>istilah</strong>, mazhab adalah fatwa / pendapat ulama besar (Imam Mujtahid) tentang hukum yang bersumber dari Al-Qur'an dan Hadis. Mazhab juga merujuk pada "metode" penggalian hukum itu sendiri.
        </p>
    </div>

    <div class="bg-surface-container-low p-8 rounded-[2rem] border border-outline-variant/20 shadow-sm relative overflow-hidden">
        <span class="material-symbols-outlined absolute -top-8 -right-8 text-9xl text-secondary/5">verified_user</span>
        <h3 class="font-headline text-2xl font-bold text-secondary mb-6"><span class="bg-secondary text-white w-8 h-8 inline-flex items-center justify-center rounded-lg text-sm mr-2">2</span> Kenapa Penting?</h3>
        <ul class="space-y-3 text-sm text-on-surface-variant">
            <li class="flex items-start"><span class="material-symbols-outlined text-secondary mr-2 shrink-0 text-lg">check_circle</span> <strong>Memandu Awam:</strong> Bagi orang biasa yang belum mampu menggali sendiri hukum dari teks asli bahasa Arab.</li>
            <li class="flex items-start"><span class="material-symbols-outlined text-secondary mr-2 shrink-0 text-lg">check_circle</span> <strong>Standar Tuntunan:</strong> Beribadah jadi terarah karena mencontoh metode ulama mumpuni.</li>
            <li class="flex items-start"><span class="material-symbols-outlined text-secondary mr-2 shrink-0 text-lg">check_circle</span> <strong>Pagar Keamanan:</strong> Menjaga umat dari tafsir agama yang salah atau menyimpang.</li>
        </ul>
    </div>
</div>

<!-- 3. Empat Imam Raksasa Penjaga Tatanan -->
<h3 class="font-headline text-2xl font-bold text-primary mt-8 mb-6 text-center">4 Imam Besar Mazhab Fikih</h3>
<p class="text-center text-on-surface-variant mb-10 text-sm max-w-2xl mx-auto">Meski terdapat ratusan mujtahid cemerlang di awal sejarah Islam, hanya madzhab dari empat imam inilah yang dokumentasinya paling lengkap, teruji, dan dianut mayoritas umat Islam dunia hingga detik ini.</p>

<div class="grid sm:grid-cols-2 gap-6 mb-16">
    <!-- Hanafi -->
    <div class="p-6 bg-white border border-outline-variant/20 rounded-[2rem] shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:-translate-y-1 transition-transform group">
        <div class="flex items-center gap-4 mb-4">
            <div class="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-xl group-hover:scale-110 transition-transform">H</div>
            <div>
                <h4 class="font-bold text-lg text-on-surface">Imam Hanafi</h4>
                <p class="text-xs text-on-surface-variant">Abu Hanifah (Nu'man bin Tsabit)</p>
            </div>
        </div>
        <p class="text-sm text-on-surface-variant border-l-2 border-primary/20 pl-3">Mazhab paling tua. Cenderung kritis memanfaatkan <strong>Logika (Ra'yu)</strong> dan Istihsan. Dianut secara sporadis di Asia Selatan, Turki, dan Mesir.</p>
    </div>

    <!-- Maliki -->
    <div class="p-6 bg-white border border-outline-variant/20 rounded-[2rem] shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:-translate-y-1 transition-transform group">
        <div class="flex items-center gap-4 mb-4">
            <div class="w-14 h-14 bg-secondary/10 rounded-full flex items-center justify-center text-secondary font-bold text-xl group-hover:scale-110 transition-transform">M</div>
            <div>
                <h4 class="font-bold text-lg text-on-surface">Imam Maliki</h4>
                <p class="text-xs text-on-surface-variant">Malik bin Anas (Ksatria Madinah)</p>
            </div>
        </div>
        <p class="text-sm text-on-surface-variant border-l-2 border-secondary/20 pl-3">Sangat keras memegang pijakan Hadis dan juga memasukkan <strong>'Amalan Penduduk Madinah'</strong> sebagai dasar penetapan hukum. Banyak dianut di Afrika Utara (Maroko).</p>
    </div>
    
    <!-- Syafi'i -->
    <div class="p-6 bg-white border border-outline-variant/20 rounded-[2rem] shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:-translate-y-1 transition-transform group">
        <div class="flex items-center gap-4 mb-4">
            <div class="w-14 h-14 bg-tertiary/10 rounded-full flex items-center justify-center text-tertiary font-bold text-xl group-hover:scale-110 transition-transform">S</div>
            <div>
                <h4 class="font-bold text-lg text-on-surface">Imam Syafi'i</h4>
                <p class="text-xs text-on-surface-variant">Muhammad bin Idris asy-Syafi'i</p>
            </div>
        </div>
        <p class="text-sm text-on-surface-variant border-l-2 border-tertiary/20 pl-3">Sang Pendamai (titik temu rasionalis & tekstualis). Sangat memperhatikan hadis dipadu rumusan cerdas via Analogi/Qiyas. <strong>Mayoritas mutlak di Indonesia</strong>, Malaysia, Suriah.</p>
    </div>

    <!-- Hambali -->
    <div class="p-6 bg-white border border-outline-variant/20 rounded-[2rem] shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:-translate-y-1 transition-transform group">
        <div class="flex items-center gap-4 mb-4">
            <div class="w-14 h-14 bg-error/10 rounded-full flex items-center justify-center text-error font-bold text-xl group-hover:scale-110 transition-transform">Hb</div>
            <div>
                <h4 class="font-bold text-lg text-on-surface">Imam Hambali</h4>
                <p class="text-xs text-on-surface-variant">Ahmad bin Hambal</p>
            </div>
        </div>
        <p class="text-sm text-on-surface-variant border-l-2 border-error/20 pl-3">Seorang pakar kumpulan hadis jutaan. Sangat tekstual & kaku menghindari ruang logika pribadi jika ada indikasi dalil nabi. Dominan dan menjadi rujukan eksklusif kerajaan di Arab Saudi.</p>
    </div>
</div>

<!-- 4. Level Umat Bermazhab -->
<h3 class="font-headline text-2xl font-bold text-primary mt-12 mb-8 items-center"><span class="bg-primary/10 text-primary p-2 rounded-xl mr-3"><span class="material-symbols-outlined">stairs</span></span> 3 Klasifikasi "Penumpang" Mazhab</h3>
<div class="flex flex-col gap-4 mb-16">
    <div class="bg-gradient-to-r from-surface-container-high to-transparent p-6 rounded-2xl flex items-center gap-6">
        <div class="w-16 h-16 bg-surface-container-lowest rounded-full shrink-0 flex items-center justify-center shadow-sm font-bold text-outline">1</div>
        <div>
            <h4 class="font-bold text-lg">Taklid (Rakyat Jelata Hukum)</h4>
            <p class="text-sm text-on-surface-variant">Murni menirukan dan ikut pendapat guru tanpa paham detail dalil. <strong>Hukumnya: Boleh / Wajib bagi orang awam.</strong></p>
        </div>
    </div>
    
    <div class="bg-gradient-to-r from-secondary/10 to-transparent p-6 rounded-2xl flex items-center gap-6">
        <div class="w-16 h-16 bg-white rounded-full shrink-0 flex items-center justify-center shadow-sm font-bold text-secondary">2</div>
        <div>
            <h4 class="font-bold text-lg">Ittiba' (Murid Kritis)</h4>
            <p class="text-sm text-on-surface-variant">Mengikuti fatwa Imam sambil <strong>mengetahui sandaran dalil / cara penetapannya</strong>. Ini zona untuk santri / da'i / pelajar hukum syariah.</p>
        </div>
    </div>
    
    <div class="bg-gradient-to-r from-primary/10 to-transparent p-6 rounded-2xl flex items-center gap-6">
        <div class="w-16 h-16 bg-white rounded-full shrink-0 flex items-center justify-center shadow-sm font-bold text-primary">3</div>
        <div>
            <h4 class="font-bold text-lg">Ijtihad (Level Mujtahid Master)</h4>
            <p class="text-sm text-on-surface-variant">Menggali & menetapkan hukum <strong>langsung membongkar teks Al-Qur'an dan Hadis</strong>. Hanya boleh dieksekusi oleh jenius ulama yang memenuhi syarat kualifikasi rumit. Saat ber-ijtihad, <em>"Bila sukses / benar dapat 2 pahala. Bila salah (karena unsur tidak sengaja), ia tak di nerakakan, bahkan tetap mendapat 1 pahala murni proses."</em> (Kisah Muadz bin Jabal di Yaman).</p>
        </div>
    </div>
</div>

<!-- 5. Keteladanan -->
<div class="bg-primary/5 p-10 rounded-[3rem] border border-primary/20 text-center relative overflow-hidden">
    <div class="absolute inset-0 bg-[linear-gradient(to_right,#006b4710_1px,transparent_1px),linear-gradient(to_bottom,#006b4710_1px,transparent_1px)] bg-[size:14px_24px]"></div>
    
    <h4 class="text-2xl font-headline font-bold mb-8 relative z-10 text-primary">Teladan Akhlak dari Sang Imam</h4>
    <div class="flex flex-wrap justify-center gap-4 relative z-10">
        <span class="px-6 py-3 bg-white rounded-full shadow-sm text-sm font-bold text-primary flex items-center gap-2"><span class="material-symbols-outlined">favorite</span> Ikhlas</span>
        <span class="px-6 py-3 bg-white rounded-full shadow-sm text-sm font-bold text-secondary flex items-center gap-2"><span class="material-symbols-outlined">fitness_center</span> Tekun & Super Keras</span>
        <span class="px-6 py-3 bg-white rounded-full shadow-sm text-sm font-bold text-tertiary flex items-center gap-2"><span class="material-symbols-outlined">psychology</span> Cerdas / Analitis Tajam</span>
        <span class="px-6 py-3 bg-white rounded-full shadow-sm text-sm font-bold text-on-surface flex items-center gap-2"><span class="material-symbols-outlined">auto_awesome</span> Zuhud (Anti Tamak Duniawi)</span>
        <span class="px-6 py-3 bg-white rounded-full shadow-sm text-sm font-bold text-error flex items-center gap-2"><span class="material-symbols-outlined">wb_twilight</span> Gemar Ibadah Malam</span>
    </div>
</div>

        `
    }
];

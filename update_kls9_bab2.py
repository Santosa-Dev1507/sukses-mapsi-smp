import json
import re

html_content = """
<p class="text-on-surface-variant leading-relaxed text-lg mb-8">
    Mengimani Hari Akhir adalah rukun iman yang kelima. Hari Akhir disebut juga hari kiamat, di mana tidak ada hari lagi setelahnya. Mempercayai Hari Akhir membuat kita lebih berhati-hati dan mawas diri dalam menjalani hidup.
</p>

<!-- Dalil Section -->
<div class="bg-primary/5 border-l-4 border-primary rounded-r-3xl p-8 mb-12 relative overflow-hidden">
    <span class="material-symbols-outlined absolute -top-4 -right-4 text-9xl text-primary/5 rotate-12">format_quote</span>
    <h3 class="font-headline text-xl font-bold text-on-surface mb-6">Pengertian dan Dalil</h3>
    <div class="text-right font-quran text-4xl leading-[2.5] mb-6 text-on-surface" dir="rtl">
        وَأَنَّ السَّاعَةَ اٰتِيَةٌ لَّا رَيْبَ فِيْهَا وَأَنَّ اللّٰهَ يَبْعَثُ مَنْ فِي الْقُبُوْرِ
    </div>
    <div class="font-body italic text-on-surface-variant text-lg">
        "Sesungguhnya kiamat itu pasti datang, tidak ada keraguan padanya dan sesungguhnya Allah akan membangkitkan siapa pun yang di dalam kubur." 
    </div>
    <div class="mt-4 text-base font-bold text-primary">— Q.S. al-Hajj [22]: 7</div>
</div>

<h3 class="font-headline text-2xl font-bold text-primary mt-12 mb-8 text-center">Jenis Kiamat</h3>
<div class="grid md:grid-cols-2 gap-8 mb-12">
    <!-- Kiamat Sugra -->
    <div class="bg-surface-container-low rounded-[2.5rem] p-8 border border-outline-variant/20 hover:shadow-xl transition-all">
        <div class="w-16 h-16 bg-secondary-container rounded-2xl flex items-center justify-center mb-6">
            <span class="material-symbols-outlined text-on-secondary-container text-3xl">heart_broken</span>
        </div>
        <h4 class="font-bold text-2xl mb-4">Kiamat Sugra (Kecil)</h4>
        <p class="text-on-surface-variant mb-6">Berakhirnya kehidupan sebagian makhluk di dunia. Contohnya adalah <strong>Kematian</strong> dan <strong>Bencana Alam</strong>.</p>
        <div class="bg-white/50 p-4 rounded-2xl border border-primary/10">
            <div class="text-right font-quran text-lg mb-2" dir="rtl">أَيْنَمَا تَكُونُوا يُدْرِكُكُمُ الْمَوْتُ</div>
            <p class="text-xs italic text-on-surface-variant">"Di mana pun kamu berada, kematian akan mendapatkan kamu..." (Q.S. an-Nisa: 78)</p>
        </div>
    </div>
    
    <!-- Kiamat Kubra -->
    <div class="bg-surface-container-low rounded-[2.5rem] p-8 border border-outline-variant/20 hover:shadow-xl transition-all">
        <div class="w-16 h-16 bg-error-container rounded-2xl flex items-center justify-center mb-6">
            <span class="material-symbols-outlined text-on-error-container text-3xl">volcano</span>
        </div>
        <h4 class="font-bold text-2xl mb-4">Kiamat Kubra (Besar)</h4>
        <p class="text-on-surface-variant mb-6">Kehancuran alam semesta secara total dan seluruh isinya. Hanya Allah yang tahu kapan terjadinya.</p>
        <div class="bg-white/50 p-4 rounded-2xl border border-primary/10">
            <div class="text-right font-quran text-lg mb-2" dir="rtl">إِنَّ مَا تُوعَدُونَ لَاٰتٍ</div>
            <p class="text-xs italic text-on-surface-variant">"Sesungguhnya apa pun yang dijanjikan kepadamu pasti datang..." (Q.S. al-An'am: 134)</p>
        </div>
    </div>
</div>

<!-- Afterlife Journey -->
<h3 class="font-headline text-2xl font-bold text-primary mt-20 mb-10 text-center">Rangkaian Peristiwa Akhirat</h3>
<div class="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-1 before:bg-gradient-to-b before:from-primary/20 before:via-primary before:to-primary/20">
    
    <!-- Yaumul Barzakh -->
    <div class="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
        <div class="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-primary text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
            <span class="text-xs font-bold">1</span>
        </div>
        <div class="w-[calc(100%-4rem)] md:w-[45%] bg-white p-6 rounded-2xl shadow-sm border border-outline-variant/10">
            <h4 class="font-bold text-lg text-primary mb-1">Yaumul Barzakh</h4>
            <div class="text-xs text-secondary font-bold uppercase tracking-widest mb-2">Alam Kubur</div>
            <p class="text-sm text-on-surface-variant">Masa tunggu dan ujian awal oleh malaikat Munkar dan Nakir. Persiapkan amal agar mendapat nikmat kubur.</p>
        </div>
    </div>

    <!-- Yaumul Ba'ats -->
    <div class="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
        <div class="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-primary text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
            <span class="text-xs font-bold">2</span>
        </div>
        <div class="w-[calc(100%-4rem)] md:w-[45%] bg-white p-6 rounded-2xl shadow-sm border border-outline-variant/10">
            <h4 class="font-bold text-lg text-primary mb-1">Yaumul Ba'ats</h4>
            <div class="text-xs text-secondary font-bold uppercase tracking-widest mb-2">Hari Kebangkitan</div>
            <p class="text-sm text-on-surface-variant">Manusia dibangkitkan dari kubur setelah tiupan sangkakala kedua oleh Malaikat Israfil.</p>
        </div>
    </div>

    <!-- Yaumul Mahsyar -->
    <div class="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
        <div class="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-primary text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
            <span class="text-xs font-bold">3</span>
        </div>
        <div class="w-[calc(100%-4rem)] md:w-[45%] bg-white p-6 rounded-2xl shadow-sm border border-outline-variant/10">
            <h4 class="font-bold text-lg text-primary mb-1">Yaumul Mahsyar</h4>
            <div class="text-xs text-secondary font-bold uppercase tracking-widest mb-2">Hari Pengumpulan</div>
            <p class="text-sm text-on-surface-variant">Seluruh manusia berkumpul di Padang Mahsyar untuk menerima catatan amal perbuatannya.</p>
        </div>
    </div>

    <!-- Yaumul Hisab & Mizan -->
    <div class="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
        <div class="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-primary text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
            <span class="text-xs font-bold">4</span>
        </div>
        <div class="w-[calc(100%-4rem)] md:w-[45%] bg-white p-6 rounded-2xl shadow-sm border border-outline-variant/10">
            <h4 class="font-bold text-lg text-primary mb-1">Hisab & Mizan</h4>
            <div class="text-xs text-secondary font-bold uppercase tracking-widest mb-2">Penghitungan & Penimbangan</div>
            <p class="text-sm text-on-surface-variant">Setiap amal dihitung dan ditimbang secara adil. Tak ada yang dirugikan walau seberat biji sawi (Q.S. Al-Anbiya: 47).</p>
        </div>
    </div>

    <!-- Yaumul Jaza -->
    <div class="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
        <div class="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-primary text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
            <span class="text-xs font-bold">5</span>
        </div>
        <div class="w-[calc(100%-4rem)] md:w-[45%] bg-white p-6 rounded-2xl shadow-sm border border-outline-variant/10">
            <h4 class="font-bold text-lg text-primary mb-1">Yaumul Jaza</h4>
            <div class="text-xs text-secondary font-bold uppercase tracking-widest mb-2">Hari Pembalasan</div>
            <p class="text-sm text-on-surface-variant">Surga sebagai balasan amal baik, dan Neraka bagi yang beramal buruk.</p>
        </div>
    </div>
</div>

<!-- Mawas Diri Section -->
<h3 class="font-headline text-2xl font-bold text-primary mt-20 mb-8">Hikmah: Mawas Diri</h3>
<div class="bg-surface-container-highest rounded-[3rem] p-8 lg:p-12 mb-12">
    <p class="text-on-surface-variant text-lg leading-relaxed mb-10">
        Mengimani Hari Akhir mendorong kita untuk selalu <strong>Mawas Diri</strong>: waspada, hati-hati, dan menjaga diri dari hal-hal negatif dengan selalu bertakwa kepada Allah Swt.
    </p>
    <div class="grid sm:grid-cols-3 gap-6">
        <div class="p-6 bg-white rounded-3xl shadow-sm text-center">
            <span class="material-symbols-outlined text-primary text-3xl mb-3">verified</span>
            <h5 class="font-bold mb-2">Hati-Hati</h5>
            <p class="text-xs text-on-surface-variant">Berpikir sebelum bertindak karena akan diadili.</p>
        </div>
        <div class="p-6 bg-white rounded-3xl shadow-sm text-center">
            <span class="material-symbols-outlined text-primary text-3xl mb-3">av_timer</span>
            <h5 class="font-bold mb-2">Manajemen Waktu</h5>
            <p class="text-xs text-on-surface-variant">Gunakan waktu sehat dan muda untuk beribadah.</p>
        </div>
        <div class="p-6 bg-white rounded-3xl shadow-sm text-center">
            <span class="material-symbols-outlined text-primary text-3xl mb-3">balance</span>
            <h5 class="font-bold mb-2">Adil</h5>
            <p class="text-xs text-on-surface-variant">Utamakan urusan akhirat di atas dunia.</p>
        </div>
    </div>
</div>

<div class="p-10 bg-primary/10 rounded-[3rem] text-center border-2 border-dashed border-primary/20">
    <p class="text-xl font-headline font-bold text-primary italic">
        "Kehidupan dunia hanyalah ladang, akhiratlah tempat kita memanen hasilnya."
    </p>
</div>
"""

with open("js/materi.js", "r", encoding="utf-8") as f:
    text = f.read()

match = re.search(r'const materiData = (\[.*\]);', text, re.DOTALL)
if match:
    data = json.loads(match.group(1))
    for obj in data:
        if obj["id"] == "kls9-smtganjil-bab2":
            obj["judul"] = "Meyakini Hari Akhir dengan Mawas Diri"
            obj["waktuBumper"] = "10 Menit Baca"
            obj["konten"] = html_content
            break
            
    new_text = "const materiData = " + json.dumps(data, indent=4, ensure_ascii=False) + ";"
    text = text[:match.start()] + new_text + text[match.end():]
    
    with open("js/materi.js", "w", encoding="utf-8") as f:
        f.write(text)
    print("Update Kelas 7-9-9 Bab 2 Sukses")
else:
    print("Fail")

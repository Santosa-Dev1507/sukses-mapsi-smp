import json
import re

html_content = """
<p class="text-on-surface-variant leading-relaxed text-lg mb-8">
    Teman-teman, dalam hidup ini kita butuh banget yang namanya panduan biar nggak salah arah. Nah, sebagai seorang Muslim, Allah Swt. sudah kasih kita dua panduan utama, yaitu <strong>Al-Qur'an</strong> dan <strong>Sunah</strong> (Hadis Nabi Muhammad saw.). Keduanya ini penting banget buat jadi pegangan kita dalam menjalani kehidupan sehari-hari biar selamat dunia dan akhirat.
</p>

<h3 class="font-headline text-2xl font-bold text-primary mt-12 mb-6">Apa sih Al-Qur'an dan Sunah itu?</h3>
<ul class="space-y-6 mb-12">
    <li class="flex items-start">
        <span class="material-symbols-outlined text-primary mr-4 mt-0.5 text-2xl">menu_book</span>
        <span class="text-on-surface-variant text-lg"><strong class="text-on-surface">Al-Qur'an:</strong> Ini adalah wahyu Allah Swt. yang diturunkan kepada Nabi Muhammad saw. Al-Qur'an itu isinya petunjuk, penjelas, dan pembeda antara yang benar dan yang salah. Bahasa Al-Qur'an itu Arab, dan membacanya saja sudah dapat pahala, lho! Al-Qur'an itu seperti bacaan wajib buat kita orang beriman, yang harus kita baca, pahami, dan amalkan isinya.</span>
    </li>
    <li class="flex items-start">
        <span class="material-symbols-outlined text-primary mr-4 mt-0.5 text-2xl">history_edu</span>
        <span class="text-on-surface-variant text-lg"><strong class="text-on-surface">Sunah (Hadis):</strong> Sunah atau Hadis adalah segala sesuatu yang berasal dari Nabi Muhammad saw., baik itu perkataan, perbuatan, persetujuan (taqrir), sifat, budi pekerti, maupun perjalanan hidup beliau. Hadis ini jadi sumber ajaran Islam kedua setelah Al-Qur'an. Jadi, kalau kita percaya Al-Qur'an, kita juga harus percaya sama Hadis.</span>
    </li>
</ul>

<h3 class="font-headline text-2xl font-bold text-primary mt-12 mb-6">Kenapa Hadis itu Penting?</h3>
<p class="text-on-surface-variant leading-relaxed text-lg mb-6">
    Al-Qur'an itu kan isinya pesan dan ajaran yang luas banget (universal). Nah, Hadis ini punya peran penting buat ngasih rincian atau penjelasan lebih lanjut dari apa yang ada di Al-Qur'an. Jadi, Hadis itu fungsinya:
</p>
<div class="grid md:grid-cols-2 gap-6 mb-12">
    <div class="bg-surface-container-low p-6 rounded-2xl border border-outline-variant/20">
        <h4 class="font-bold text-on-surface mb-2">1. Memperkuat <span class="text-primary italic">(Bayān al-Taqrīr)</span></h4>
        <p class="text-on-surface-variant">Menegaskan lagi apa yang sudah ada di Al-Qur'an.</p>
    </div>
    <div class="bg-surface-container-low p-6 rounded-2xl border border-outline-variant/20">
        <h4 class="font-bold text-on-surface mb-2">2. Menjelaskan <span class="text-primary italic">(Bayān al-Tafsīr)</span></h4>
        <p class="text-on-surface-variant">Memberikan rincian ayat-ayat Al-Qur'an yang butuh penjelasan lebih, misalnya yang sifatnya masih umum atau belum ada batasannya.</p>
    </div>
    <div class="bg-surface-container-low p-6 rounded-2xl border border-outline-variant/20">
        <h4 class="font-bold text-on-surface mb-2">3. Menetapkan Hukum Baru <span class="text-primary italic">(Bayān al-Tasyri’)</span></h4>
        <p class="text-on-surface-variant">Menetapkan hukum Islam yang belum ada secara detail di Al-Qur'an, contohnya soal zakat fitrah.</p>
    </div>
    <div class="bg-surface-container-low p-6 rounded-2xl border border-outline-variant/20">
        <h4 class="font-bold text-on-surface mb-2">4. Menghapus Ketentuan Lama <span class="text-primary italic">(Bayān al-Nasakh)</span></h4>
        <p class="text-on-surface-variant">Bisa juga mengganti ketentuan yang lama dengan yang baru karena yang baru dianggap lebih cocok dan membawa kebaikan.</p>
    </div>
</div>

<h3 class="font-headline text-2xl font-bold text-primary mt-12 mb-6">Ayat Al-Qur'an yang Penting di Bab Ini</h3>

<!-- Q.S. an-Nisa / 4: 59 -->
<div class="mb-12">
    <h4 class="font-bold text-lg text-on-surface mb-4">1. Q.S. an-Nisā’/4: 59</h4>
    <div class="bg-primary/5 border-l-4 border-primary rounded-r-3xl p-8 mb-6 relative overflow-hidden">
        <span class="material-symbols-outlined absolute -top-4 -right-4 text-9xl text-primary/5 rotate-12">format_quote</span>
        <div class="text-right font-quran text-4xl leading-loose mb-6 text-on-surface" dir="rtl">
            يَأَيُّهَا الَّذِينَ آمَنُوا أَطِيعُوا اللَّهَ وَأَطِيعُوا الرَّسُوْلَ وَأُولِي الْأَمْرِ مِنْكُمْ فَإِنْ تَنَازَعْتُمْ فِي شَيْءٍ فَرُدُّوهُ إِلَى اللهِ وَالرَّسُوْلِ إِنْ كُنْتُمْ تُؤْمِنُوْنَ بِاللَّهِ وَالْيَوْمِ الْآخِرِ ذَلِكَ خَيْرٌ وَأَحْسَنُ تَأْوِيلًا
        </div>
        <div class="font-body italic text-on-surface-variant text-lg">
            "Wahai orang-orang yang beriman! Taatilah Allah dan taatilah Rasul (Muhammad), dan Ulil Amri (pemegang kekuasaan) di antara kamu. Kemudian, jika kamu berbeda pendapat tentang sesuatu, maka kembalikanlah kepada Allah (Al-Qur'an) dan Rasul (sunahnya), jika kamu beriman kepada Allah dan hari kemudian. Yang demikian itu lebih utama (bagimu) dan lebih baik akibatnya."
        </div>
    </div>
    <p class="text-on-surface-variant">Ayat ini nyuruh kita buat taat sama Allah Swt., taat sama Rasulullah saw. (Nabi Muhammad), dan juga pemimpin-pemimpin kita. Kalau kita beda pendapat soal sesuatu, kita harus kembali ke Al-Qur'an dan Sunah Nabi. Ini nunjukin kalau Al-Qur'an dan Hadis itu sumber hukum utama kita.</p>
</div>

<!-- Q.S. an-Nahl / 16: 64 -->
<div class="mb-12">
    <h4 class="font-bold text-lg text-on-surface mb-4">2. Q.S. an-Naḥl/16: 64</h4>
    <div class="bg-primary/5 border-l-4 border-primary rounded-r-3xl p-8 mb-6 relative overflow-hidden">
        <span class="material-symbols-outlined absolute -top-4 -right-4 text-9xl text-primary/5 rotate-12">format_quote</span>
        <div class="text-right font-quran text-4xl leading-loose mb-6 text-on-surface" dir="rtl">
            وَمَا أَنْزَلْنَا عَلَيْكَ الْكِتَبَ إِلَّا لِتُبَيِّنَ لَهُمُ الَّذِي اخْتَلَفُوْا فِيْهِ وَهُدًى وَرَحْمَةً لِقَوْمٍ يُؤْمِنُونَ
        </div>
        <div class="font-body italic text-on-surface-variant text-lg">
            "Dan Kami tidak menurunkan Kitab (Al-Qur'an) ini kepadamu (Muhammad), melainkan agar engkau dapat menjelaskan kepada mereka apa yang mereka perselisihkan, serta menjadi petunjuk dan rahmat bagi orang-orang yang beriman."
        </div>
    </div>
    <p class="text-on-surface-variant">Ayat ini ngejelasin kalau Al-Qur'an diturunkan kepada Nabi Muhammad saw. itu biar beliau bisa ngejelasin ke kita apa-apa yang kita perselisihkan, dan jadi petunjuk serta rahmat buat orang yang beriman. Ini juga nunjukkin kalau Rasulullah saw. punya tugas buat menerangkan isi Al-Qur'an kepada manusia.</p>
</div>

<h3 class="font-headline text-2xl font-bold text-primary mt-12 mb-6">Belajar Tajwid: Alif Lam Syamsiyyah dan Qamariyyah</h3>
<p class="text-on-surface-variant leading-relaxed text-lg mb-6">Waktu baca Al-Qur'an, kita juga harus perhatikan tajwidnya ya. Di bab ini kita dikenalin sama hukum bacaan "Al" (Alif Lam):</p>
<ul class="space-y-6 mb-12">
    <li class="flex items-start">
        <div class="w-10 h-10 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center font-bold mr-4 shrink-0 mt-0.5">1</div>
        <span class="text-on-surface-variant text-lg"><strong class="text-on-surface">Alif Lam Syamsiyyah:</strong> Ini dibaca dengan cara memasukkan (meleburkan) suara Alif Lam ke huruf setelahnya, jadi suara Alif Lam-nya nggak dibaca jelas. Ciri-cirinya, huruf setelah Alif Lam biasanya ada tanda tasydidnya (ّ). <br><em class="text-primary font-medium">Contoh hurufnya ada 14: ت ث د ذ ر ز س ش ص ض ط ظ ل ن.</em></span>
    </li>
    <li class="flex items-start">
        <div class="w-10 h-10 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center font-bold mr-4 shrink-0 mt-0.5">2</div>
        <span class="text-on-surface-variant text-lg"><strong class="text-on-surface">Alif Lam Qamariyyah:</strong> Kalau ini, Alif Lam-nya dibaca jelas (izhar), nggak melebur ke huruf setelahnya. <br><em class="text-primary font-medium">Hurufnya juga ada 14: ا ب غ ح ج ك و خ ف ع ق ي م ه.</em></span>
    </li>
</ul>

<div class="p-8 bg-surface-container-high rounded-[2rem] border-dashed border-2 border-outline-variant/30 flex items-start space-x-6">
    <div class="bg-secondary-container w-14 h-14 shrink-0 rounded-2xl flex items-center justify-center">
        <span class="material-symbols-outlined text-on-secondary-container text-3xl">lightbulb</span>
    </div>
    <div>
        <h4 class="font-bold text-xl text-on-surface mb-4">Semangat Mendalami Al-Qur'an dan Hadis</h4>
        <p class="text-on-surface-variant mb-4">Sebagai anak SMP yang keren, yuk kita tunjukkin semangat kita buat mendalami Al-Qur'an dan Hadis dengan cara:</p>
        <ul class="space-y-2 text-on-surface-variant list-disc ml-6">
            <li>Rajin baca Al-Qur'an dengan benar dan berusaha pahami artinya.</li>
            <li>Baca juga buku-buku tentang Hadis.</li>
            <li>Kalau ada yang nggak ngerti, jangan malu buat tanya ke guru agama kita.</li>
            <li>Taat sama Allah, Rasul, dan pemimpin (selama perintahnya nggak bertentangan sama Al-Qur'an dan Hadis).</li>
            <li>Kalau ada beda pendapat, kembalikan ke Al-Qur'an dan Hadis.</li>
        </ul>
        <p class="mt-4 font-medium text-primary">Dengan berpegang teguh pada Al-Qur'an dan Sunah, insya Allah hidup kita akan lebih terarah, bermakna, aman, dan berkah.</p>
    </div>
</div>
"""

with open("js/materi.js", "r", encoding="utf-8") as f:
    text = f.read()

# We need to extract the JSON array.
match = re.search(r'const materiData = (\[.*\]);', text, re.DOTALL)
if match:
    data = json.loads(match.group(1))
    
    # Update the first one
    for obj in data:
        if obj["id"] == "kls7-smtganjil-bab1":
            obj["judul"] = "Al-Qur'an dan Sunah Sebagai Pedoman Hidup"
            obj["waktuBumper"] = "9 Menit Baca"
            obj["konten"] = html_content
            break
            
    # Write back
    new_text = "const materiData = " + json.dumps(data, indent=4, ensure_ascii=False) + ";"
    text = text[:match.start()] + new_text + text[match.end():]
    
    with open("js/materi.js", "w", encoding="utf-8") as f:
        f.write(text)
    print("Done updating Bab 1")
else:
    print("Failed to find json array")

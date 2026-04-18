import json
import re

html_content = """
<p class="text-on-surface-variant leading-relaxed text-lg mb-8">
    Dalam Islam, mencari ilmu itu hukumnya <strong>wajib</strong> bagi setiap Muslim, laki-laki maupun perempuan. Dengan ilmu, kita bisa lebih mengenal Allah Swt., memahami ajaran agama dengan benar, dan meraih kesuksesan di dunia dan akhirat. Allah Swt. sangat menghargai orang yang beriman dan berilmu.
</p>

<div class="bg-primary/5 border-l-4 border-primary rounded-r-3xl p-8 my-10 relative overflow-hidden">
    <div class="flex items-center gap-4 mb-4">
        <span class="material-symbols-outlined text-primary text-3xl">psychology</span>
        <h3 class="font-headline text-xl font-bold text-on-surface">Mengapa Mencari Ilmu itu Penting?</h3>
    </div>
    <p class="text-on-surface-variant text-lg leading-relaxed">
        Ilmu adalah cahaya kehidupan. Tanpa ilmu, kita akan tersesat dalam kegelapan ketidaktahuan. Islam memposisikan ilmu sebagai kunci utama untuk menjalankan ibadah dengan benar dan mengelola bumi sebagai khalifah.
    </p>
</div>

<h3 class="font-headline text-2xl font-bold text-primary mt-12 mb-6">Ayat Al-Qur'an tentang Keutamaan Ilmu</h3>

<!-- Q.S. al-Mujadilah [58] ayat 11 -->
<div class="mb-12">
    <h4 class="font-bold text-lg text-on-surface mb-4">1. Q.S. al-Mujadilah [58] ayat 11</h4>
    <div class="bg-surface-container-low border border-outline-variant/30 rounded-[2rem] p-8 mb-6 relative">
        <div class="text-right font-quran text-4xl leading-[2.5] mb-8 text-on-surface" dir="rtl">
            يٰٓاَيُّهَا الَّذِيْنَ اٰمَنُوْٓا اِذَا قِيْلَ لَكُمْ تَفَسَّحُوْا فِى الْمَجٰلِسِ فَافْسَحُوْا يَفْسَحِ اللّٰهُ لَكُمْۚ وَاِذَا قِيْلَ انْشُزُوْا فَانْشُزُوْا يَرْفَعِ اللّٰهُ الَّذِيْنَ اٰمَنُوْا مِنْكُمْۙ وَالَّذِيْنَ اُوْتُوا الْعِلْمَ دَرَجٰتٍۗ وَاللّٰهُ بِمَا تَعْمَلُوْنَ خَبِيْرٌࣖ
        </div>
        <div class="font-body italic text-on-surface-variant text-lg border-t border-outline-variant/20 pt-6">
            "Wahai orang-orang beriman! Kalau ada yang bilang 'beri kelapangan dong di tempat duduk,' maka lapangkanlah, nanti Allah akan beri kelapangan untukmu. Kalau disuruh 'berdiri,' ya berdirilah. Allah akan mengangkat derajat orang-orang yang beriman dan orang-orang yang diberi ilmu beberapa tingkat lebih tinggi. Allah Maha Teliti dengan apa yang kamu kerjakan."
        </div>
    </div>
    <div class="flex items-start gap-3 bg-secondary-container/20 p-5 rounded-2xl">
        <span class="material-symbols-outlined text-secondary">info</span>
        <p class="text-on-surface-variant text-sm"><strong>Pesan Penting:</strong> Ayat ini menunjukkan bahwa orang yang beriman dan berilmu akan ditinggikan derajatnya oleh Allah Swt. Selain itu, kita juga diajarkan adab dalam majelis (tempat berkumpul) seperti memberi tempat kepada orang lain.</p>
    </div>
</div>

<!-- Q.S. az-Zumar [39] ayat 9 -->
<div class="mb-12">
    <h4 class="font-bold text-lg text-on-surface mb-4">2. Q.S. az-Zumar [39] ayat 9</h4>
    <div class="bg-surface-container-low border border-outline-variant/30 rounded-[2rem] p-8 mb-6 relative">
        <div class="text-right font-quran text-4xl leading-[2.5] mb-8 text-on-surface" dir="rtl">
            اَمَّنْ هُوَ قَانِتٌ اٰنَاۤءَ الَّيْلِ سَاجِدًا وَّقَاۤىِٕمًا يَّحْذَرُ الْاٰخِرَةَ وَيَرْجُوْا رَحْمَةَ رَبِّهٖۗ قُلْ هَلْ يَسْتَوِى الَّذِيْنَ يَعْلَمُوْنَ وَالَّذِيْنَ لَا يَعْلَمُوْنَ ۗ اِنَّمَا يَتَذَكَّرُ اُولُوا الْاَلْبَابِࣖ
        </div>
        <div class="font-body italic text-on-surface-variant text-lg border-t border-outline-variant/20 pt-6">
            "Katakanlah (Nabi Muhammad), 'Apakah sama orang-orang yang mengetahui (berilmu) dengan orang-orang yang tidak mengetahui (tidak berilmu)?' Hanya orang yang berakal sehat (Ulul Albab) yang dapat mengambil pelajaran."
        </div>
    </div>
    <div class="flex items-start gap-3 bg-secondary-container/20 p-5 rounded-2xl">
        <span class="material-symbols-outlined text-secondary">info</span>
        <p class="text-on-surface-variant text-sm"><strong>Pesan Penting:</strong> Ayat ini jelas membedakan antara orang yang berilmu dan yang tidak. Orang berilmu memiliki kedudukan yang lebih baik. Hanya orang yang mau menggunakan akalnya yang bisa memahami pelajaran ini.</p>
    </div>
</div>

<h3 class="font-headline text-2xl font-bold text-primary mt-12 mb-6">Hadis tentang Mencari Ilmu</h3>
<div class="bg-primary/5 rounded-[2rem] p-8 mb-12">
    <div class="text-right font-quran text-3xl leading-loose mb-6 text-on-surface" dir="rtl">
        مَنْ سَلَكَ طَرِيقًا يَلْتَمِسُ فِيهِ عِلْمًا سَهَّلَ اللَّهُ لَهُ طَرِيقًا إِلَى الْجَنَّةِ
    </div>
    <p class="font-body italic text-on-surface-variant text-lg text-center bg-white/50 p-4 rounded-xl">
        "Barangsiapa menempuh suatu jalan untuk mencari ilmu, maka Allah akan mudahkan baginya jalan menuju surga." (HR. Muslim)
    </p>
</div>

<h3 class="font-headline text-2xl font-bold text-primary mt-12 mb-6">Pentingnya Tajwid: Mengenal Tanda Waqaf</h3>
<p class="text-on-surface-variant leading-relaxed text-lg mb-8">
    Waqaf artinya berhenti sejenak saat membaca Al-Qur'an, biasanya untuk mengambil nafas, lalu melanjutkan bacaan lagi. Mari kita kenali tanda-tandanya:
</p>

<div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
    <div class="p-4 bg-white rounded-2xl border-2 border-primary/10 flex flex-col items-center text-center">
        <span class="text-4xl font-quran font-bold text-primary mb-2">م</span>
        <span class="text-sm font-bold">Waqaf Lazim</span>
        <span class="text-xs text-on-surface-variant">Harus Berhenti</span>
    </div>
    <div class="p-4 bg-white rounded-2xl border-2 border-primary/10 flex flex-col items-center text-center">
        <span class="text-4xl font-quran font-bold text-primary mb-2">ط</span>
        <span class="text-sm font-bold">Waqaf Mutlaq</span>
        <span class="text-xs text-on-surface-variant">Harus Berhenti</span>
    </div>
    <div class="p-4 bg-white rounded-2xl border-2 border-primary/10 flex flex-col items-center text-center">
        <span class="text-4xl font-quran font-bold text-primary mb-2">ج</span>
        <span class="text-sm font-bold">Waqaf Jaiz</span>
        <span class="text-xs text-on-surface-variant">Boleh Berhenti/Lanjut</span>
    </div>
    <div class="p-4 bg-white rounded-2xl border-2 border-primary/10 flex flex-col items-center text-center">
        <span class="text-4xl font-quran font-bold text-primary mb-2">لا</span>
        <span class="text-sm font-bold">La Waqfu Fih</span>
        <span class="text-xs text-on-surface-variant">Jangan Berhenti</span>
    </div>
    <div class="p-4 bg-white rounded-2xl border-2 border-primary/10 flex flex-col items-center text-center">
        <span class="text-4xl font-quran font-bold text-primary mb-2">صلى</span>
        <span class="text-sm font-bold">Washal Aula</span>
        <span class="text-xs text-on-surface-variant">Lebih Baik Lanjut</span>
    </div>
    <div class="p-4 bg-white rounded-2xl border-2 border-primary/10 flex flex-col items-center text-center">
        <span class="text-4xl font-quran font-bold text-primary mb-2">قلى</span>
        <span class="text-sm font-bold">Waqaf Aula</span>
        <span class="text-xs text-on-surface-variant">Lebih Baik Berhenti</span>
    </div>
     <div class="p-4 bg-white rounded-2xl border-2 border-primary/10 flex flex-col items-center text-center">
        <span class="text-4xl font-quran font-bold text-primary mb-2">سكتة</span>
        <span class="text-sm font-bold">Saktah</span>
        <span class="text-xs text-on-surface-variant">Berhenti Tanpa Nafas</span>
    </div>
    <div class="p-4 bg-white rounded-2xl border-2 border-primary/10 flex flex-col items-center text-center">
        <span class="text-4xl font-quran font-bold text-primary mb-2">∴ ∴</span>
        <span class="text-sm font-bold">Mu'anaqah</span>
        <span class="text-xs text-on-surface-variant">Berhenti di Salah Satu</span>
    </div>
</div>

<h3 class="font-headline text-2xl font-bold text-primary mt-12 mb-8">Bagaimana Menunjukkan Semangat Mencari Ilmu?</h3>
<div class="space-y-4 mb-12">
    <div class="flex items-center gap-6 p-6 bg-surface-container-low rounded-3xl hover:bg-white transition-colors border border-outline-variant/10">
        <div class="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center shrink-0">
             <span class="material-symbols-outlined text-primary">volunteer_activism</span>
        </div>
        <div>
            <h4 class="font-bold text-lg">Niat Ikhlas & Berdoa</h4>
            <p class="text-on-surface-variant">Belajar karena Allah Swt. dan selalu meminta ilmu yang bermanfaat.</p>
        </div>
    </div>
    <div class="flex items-center gap-6 p-6 bg-surface-container-low rounded-3xl hover:bg-white transition-colors border border-outline-variant/10">
        <div class="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center shrink-0">
             <span class="material-symbols-outlined text-primary">model_training</span>
        </div>
        <div>
            <h4 class="font-bold text-lg">Sungguh-sungguh & Antusias</h4>
            <p class="text-on-surface-variant">Rajin belajar, tidak menyerah, dan aktif bertanya kepada guru.</p>
        </div>
    </div>
    <div class="flex items-center gap-6 p-6 bg-surface-container-low rounded-3xl hover:bg-white transition-colors border border-outline-variant/10">
        <div class="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center shrink-0">
             <span class="material-symbols-outlined text-primary">groups</span>
        </div>
        <div>
            <h4 class="font-bold text-lg">Hormat & Rendah Hati</h4>
            <p class="text-on-surface-variant">Sopan kepada guru dan tetap tawadhu dengan ilmu yang dimiliki.</p>
        </div>
    </div>
</div>

<div class="p-10 bg-gradient-to-br from-primary to-primary-container text-white rounded-[3rem] shadow-xl text-center">
    <h4 class="text-2xl font-headline font-bold mb-4">Ingatlah!</h4>
    <p class="text-lg opacity-90 leading-relaxed">
        Dengan ilmu, Allah akan mengangkat derajat kita, memudahkan jalan ke surga, dan membantu kita menyelesaikan masalah dalam hidup. Jadilah generasi Muslim yang cerdas, berakhlak mulia, dan bermanfaat bagi sesama!
    </p>
</div>
"""

with open("js/materi.js", "r", encoding="utf-8") as f:
    text = f.read()

match = re.search(r'const materiData = (\[.*\]);', text, re.DOTALL)
if match:
    data = json.loads(match.group(1))
    for obj in data:
        if obj["id"] == "kls9-smtganjil-bab1":
            obj["judul"] = "Semangat Mencari Ilmu dalam Islam"
            obj["waktuBumper"] = "7 Menit Baca"
            obj["konten"] = html_content
            break
            
    new_text = "const materiData = " + json.dumps(data, indent=4, ensure_ascii=False) + ";"
    text = text[:match.start()] + new_text + text[match.end():]
    
    with open("js/materi.js", "w", encoding="utf-8") as f:
        f.write(text)
    print("Update Kelas 9 Bab 1 Sukses")
else:
    print("Fail")

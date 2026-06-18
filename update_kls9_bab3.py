import json
import os

# Naskah Materi Bab 3 Kelas 7-9-9 Semester Ganjil
html_content = """
<p class="text-on-surface-variant leading-relaxed text-lg mb-8">
    Manusia diciptakan sebagai makhluk sosial yang tidak bisa hidup sendiri. Agar hubungan antarmanusia harmonis dan membawa berkah, Islam mengatur etika dalam bergaul dan berkomunikasi. Mari kita pelajari bagaimana cara berinteraksi yang disenangi Allah Swt.
</p>

<!-- Perkenalan: QS. Al-Hujurat 13 -->
<div class="bg-primary/5 border-l-4 border-primary rounded-r-3xl p-8 mb-12 relative overflow-hidden">
    <span class="material-symbols-outlined absolute -top-4 -right-4 text-9xl text-primary/5 rotate-12">groups</span>
    <h3 class="font-headline text-xl font-bold text-on-surface mb-6">Fitrah Manusia: Saling Mengenal</h3>
    <div class="text-right font-quran text-4xl leading-[2.5] mb-6 text-on-surface" dir="rtl">
        يٰٓاَيُّهَا النَّاسُ اِنَّا خَلَقْنٰكُمْ مِّنْ ذَكَرٍ وَّاُنْثٰى وَجَعَلْنٰكُمْ شُعُوْبًا وَّقَبَاۤىِٕلَ لِتَعَارَفُوْا...
    </div>
    <div class="font-body italic text-on-surface-variant text-lg">
        "Wahai manusia! Sungguh, Kami telah menciptakan kamu dari seorang laki-laki dan seorang perempuan, kemudian Kami jadikan kamu berbangsa-bangsa dan bersuku-suku agar kamu saling mengenal..."
    </div>
    <div class="mt-4 text-base font-bold text-primary">— Q.S. al-Hujurat [49]: 13</div>
</div>

<h3 class="font-headline text-2xl font-bold text-primary mt-12 mb-8">Etika Pergaulan dalam Islam</h3>
<div class="grid sm:grid-cols-2 gap-6 mb-12">
    <!-- Lawan Jenis -->
    <div class="p-6 bg-surface-container-low rounded-3xl border border-outline-variant/20 hover:bg-white transition-colors">
        <div class="flex items-center gap-4 mb-4">
            <div class="w-12 h-12 bg-secondary-container rounded-xl flex items-center justify-center">
                <span class="material-symbols-outlined text-on-secondary-container">wc</span>
            </div>
            <h4 class="font-bold text-lg">Dengan Lawan Jenis</h4>
        </div>
        <ul class="space-y-2 text-sm text-on-surface-variant">
            <li class="flex items-center gap-2"><span class="material-symbols-outlined text-[16px] text-primary">check</span> Menjaga pandangan (Ghadul Bashar)</li>
            <li class="flex items-center gap-2"><span class="material-symbols-outlined text-[16px] text-primary">check</span> Menutup aurat dengan sempurna</li>
            <li class="flex items-center gap-2"><span class="material-symbols-outlined text-[16px] text-primary">check</span> Tidak berkhalwat (berduaan di tempat sepi)</li>
        </ul>
    </div>
    <!-- Teman Sebaya -->
    <div class="p-6 bg-surface-container-low rounded-3xl border border-outline-variant/20 hover:bg-white transition-colors">
        <div class="flex items-center gap-4 mb-4">
            <div class="w-12 h-12 bg-secondary-container rounded-xl flex items-center justify-center">
                <span class="material-symbols-outlined text-on-secondary-container">handshake</span>
            </div>
            <h4 class="font-bold text-lg">Dengan Teman Sebaya</h4>
        </div>
        <ul class="space-y-2 text-sm text-on-surface-variant">
            <li class="flex items-center gap-2"><span class="material-symbols-outlined text-[16px] text-primary">check</span> Saling menghargai dan setia kawan</li>
            <li class="flex items-center gap-2"><span class="material-symbols-outlined text-[16px] text-primary">check</span> Menghindari bullying dan julid</li>
            <li class="flex items-center gap-2"><span class="material-symbols-outlined text-[16px] text-primary">check</span> Saling menasihati dalam kebaikan</li>
        </ul>
    </div>
</div>

<h3 class="font-headline text-2xl font-bold text-primary mt-20 mb-10 text-center">6 Prinsip Komunikasi Islami (Qaulan)</h3>
<div class="grid grid-cols-2 md:grid-cols-3 gap-6 mb-16">
    <!-- Sadidan -->
    <div class="relative group p-6 bg-white rounded-[2rem] shadow-sm border border-outline-variant/10 hover:shadow-xl hover:-translate-y-2 transition-all">
        <div class="text-primary font-bold text-sm mb-2 italic">Qaulan Sadidan</div>
        <h4 class="font-bold text-xl mb-3">Berkata Benar</h4>
        <p class="text-xs text-on-surface-variant leading-relaxed">Jujur, tidak direkayasa, dan sesuai fakta.</p>
        <span class="material-symbols-outlined absolute top-4 right-4 text-primary opacity-20 group-hover:opacity-100 transition-opacity">verified</span>
    </div>
    <!-- Kariman -->
    <div class="relative group p-6 bg-white rounded-[2rem] shadow-sm border border-outline-variant/10 hover:shadow-xl hover:-translate-y-2 transition-all">
        <div class="text-primary font-bold text-sm mb-2 italic">Qaulan Kariman</div>
        <h4 class="font-bold text-xl mb-3">Berkata Mulia</h4>
        <p class="text-xs text-on-surface-variant leading-relaxed">Penuh penghormatan dan memuliakan lawan bicara.</p>
        <span class="material-symbols-outlined absolute top-4 right-4 text-primary opacity-20 group-hover:opacity-100 transition-opacity">military_tech</span>
    </div>
    <!-- Balighan -->
    <div class="relative group p-6 bg-white rounded-[2rem] shadow-sm border border-outline-variant/10 hover:shadow-xl hover:-translate-y-2 transition-all">
        <div class="text-primary font-bold text-sm mb-2 italic">Qaulan Balighan</div>
        <h4 class="font-bold text-xl mb-3">Berkata Tepat</h4>
        <p class="text-xs text-on-surface-variant leading-relaxed">Bahasa yang efektif, menyentuh hati, dan mudah dipahami.</p>
        <span class="material-symbols-outlined absolute top-4 right-4 text-primary opacity-20 group-hover:opacity-100 transition-opacity">bolt</span>
    </div>
    <!-- Ma'rufan -->
    <div class="relative group p-6 bg-white rounded-[2rem] shadow-sm border border-outline-variant/10 hover:shadow-xl hover:-translate-y-2 transition-all">
        <div class="text-primary font-bold text-sm mb-2 italic">Qaulan Ma'rufan</div>
        <h4 class="font-bold text-xl mb-3">Berkata Baik</h4>
        <p class="text-xs text-on-surface-variant leading-relaxed">Menggunakan kata-kata yang pantas sesuai norma hukum dan masyarakat.</p>
        <span class="material-symbols-outlined absolute top-4 right-4 text-primary opacity-20 group-hover:opacity-100 transition-opacity">thumb_up</span>
    </div>
    <!-- Layyinan -->
    <div class="relative group p-6 bg-white rounded-[2rem] shadow-sm border border-outline-variant/10 hover:shadow-xl hover:-translate-y-2 transition-all">
        <div class="text-primary font-bold text-sm mb-2 italic">Qaulan Layyinan</div>
        <h4 class="font-bold text-xl mb-3">Lemah Lembut</h4>
        <p class="text-xs text-on-surface-variant leading-relaxed">Tidak kasar, tidak membentak, dan penuh kasih sayang.</p>
        <span class="material-symbols-outlined absolute top-4 right-4 text-primary opacity-20 group-hover:opacity-100 transition-opacity">favorite</span>
    </div>
    <!-- Maysuran -->
    <div class="relative group p-6 bg-white rounded-[2rem] shadow-sm border border-outline-variant/10 hover:shadow-xl hover:-translate-y-2 transition-all">
        <div class="text-primary font-bold text-sm mb-2 italic">Qaulan Maysuran</div>
        <h4 class="font-bold text-xl mb-3">Menyenangkan</h4>
        <p class="text-xs text-on-surface-variant leading-relaxed">Memberi harapan baik dan bahasa yang membahagiakan.</p>
        <span class="material-symbols-outlined absolute top-4 right-4 text-primary opacity-20 group-hover:opacity-100 transition-opacity">sentiment_very_satisfied</span>
    </div>
</div>

<div class="bg-gradient-to-br from-secondary to-secondary-container p-10 rounded-[3rem] text-on-secondary-container shadow-lg flex flex-col md:flex-row items-center gap-8">
    <div class="w-24 h-24 bg-white/30 rounded-full flex items-center justify-center shrink-0">
        <span class="material-symbols-outlined text-5xl">volunteer_activism</span>
    </div>
    <div>
        <h4 class="text-2xl font-headline font-bold mb-3">Hikmah Pergaulan & Komunikasi Islami</h4>
        <p class="text-lg opacity-90 leading-relaxed">
            Menerapkan etika ini akan menghindarkan kita dari konflik, meningkatkan kepercayaan orang lain, dan yang paling utama: <strong>mendapatkan rida Allah Swt.</strong> Ingatlah sabda Nabi: <em>"Barangsiapa beriman kepada Allah dan Hari Akhir, hendaklah ia berkata baik atau diam."</em> (HR. Bukhari)
        </p>
    </div>
</div>
"""

materi_file = "js/materi.js"

if os.path.exists(materi_file):
    with open(materi_file, "r", encoding="utf-8") as f:
        content = f.read()

    # Find the constant declaration
    start_marker = "const materiData = "
    end_marker = "];"
    
    start_idx = content.find(start_marker)
    end_idx = content.rfind(end_marker)
    
    if start_idx != -1 and end_idx != -1:
        json_str = content[start_idx + len(start_marker):end_idx + 1]
        try:
            materi_data = json.loads(json_str)
            
            # Update specific chapter
            target_id = "kls9-smtganjil-bab3"
            updated = False
            for obj in materi_data:
                if obj["id"] == target_id:
                    obj["judul"] = "Indahnya Etika Pergaulan Dan Komunikasi Islami"
                    obj["waktuBumper"] = "8 Menit Baca"
                    obj["konten"] = html_content
                    updated = True
                    break
            
            if updated:
                new_json_str = json.dumps(materi_data, indent=4, ensure_ascii=False)
                new_content = content[:start_idx + len(start_marker)] + new_json_str + content[end_idx + 1:]
                
                with open(materi_file, "w", encoding="utf-8") as f:
                    f.write(new_content)
                print(f"Successfully updated {target_id}")
            else:
                print(f"ID {target_id} not found in materi.js")
                
        except json.JSONDecodeError as e:
            print(f"Error decoding JSON: {e}")
else:
    print(f"{materi_file} not found")

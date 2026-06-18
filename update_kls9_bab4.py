import json
import os

# Naskah Materi Bab 4 Kelas 7-9-9 Semester Ganjil
html_content = """
<p class="text-on-surface-variant leading-relaxed text-lg mb-8">
    Dalam ajaran Islam, rasa syukur kepada Allah Swt. tidak hanya diungkapkan dengan kata-kata, tetapi juga melalui perbuatan nyata yang bermanfaat bagi sesama, salah satunya melalui ibadah Akikah dan Kurban.
</p>

<!-- Prinsip Penyembelihan -->
<h3 class="font-headline text-2xl font-bold text-primary mt-12 mb-8 flex items-center gap-3">
    <span class="material-symbols-outlined">restaurant</span>
    Prinsip Dasar Penyembelihan
</h3>
<div class="bg-surface-container-low rounded-[2rem] p-8 border border-outline-variant/20 mb-12">
    <p class="text-on-surface-variant mb-6 text-lg italic leading-relaxed">
        "Sesungguhnya Allah mewajibkan berbuat baik pada segala sesuatu. Jika kamu menyembelih, berbuat baiklah dalam cara menyembelih: tajamkan pisaunya dan nyamankan hewan sembelihannya." (HR. Muslim)
    </p>
    <div class="grid sm:grid-cols-3 gap-6 pt-6 border-t border-outline-variant/10">
        <div class="flex flex-col items-center text-center">
            <span class="material-symbols-outlined text-primary text-3xl mb-2">person_check</span>
            <h5 class="font-bold">Penyembelih</h5>
            <p class="text-xs text-on-surface-variant">Muslim, berakal, berniat karena Allah.</p>
        </div>
        <div class="flex flex-col items-center text-center">
            <span class="material-symbols-outlined text-primary text-3xl mb-2">pets</span>
            <h5 class="font-bold">Hewan</h5>
            <p class="text-xs text-on-surface-variant">Halal, dalam keadaan hidup, dan sehat.</p>
        </div>
        <div class="flex flex-col items-center text-center">
            <span class="material-symbols-outlined text-primary text-3xl mb-2">blade</span>
            <h5 class="font-bold">Alat</h5>
            <p class="text-xs text-on-surface-variant">Tajam, bukan kuku/tulang/gigi.</p>
        </div>
    </div>
</div>

<!-- AKIKAH -->
<div class="grid lg:grid-cols-2 gap-8 mb-16">
    <div class="bg-primary/5 rounded-[2.5rem] p-10 border border-primary/10 relative overflow-hidden group">
        <span class="material-symbols-outlined absolute -bottom-10 -right-10 text-[12rem] text-primary/5 rotate-12 group-hover:rotate-0 transition-transform duration-700">child_care</span>
        <h3 class="font-headline text-3xl font-bold text-primary mb-6">Akikah</h3>
        <p class="text-on-surface-variant mb-8 leading-relaxed">
            Wujud syukur atas kelahiran anak. Hukumnya <strong>Sunnah Muakkad</strong> (sangat dianjurkan).
        </p>
        <div class="space-y-4 mb-8">
            <div class="flex items-center gap-4 bg-white/60 p-4 rounded-2xl border border-primary/10">
                <span class="material-symbols-outlined text-primary">cake</span>
                <div>
                    <div class="text-[10px] font-bold text-secondary uppercase tracking-widest">Waktu Terbaik</div>
                    <div class="font-bold">Hari ke-7 Kelahiran</div>
                </div>
            </div>
            <div class="flex items-center gap-4 bg-white/60 p-4 rounded-2xl border border-primary/10">
                <span class="material-symbols-outlined text-primary">family_history</span>
                <div>
                    <div class="text-[10px] font-bold text-secondary uppercase tracking-widest">Jumlah Hewan</div>
                    <div class="font-bold">L: 2 Kambing | P: 1 Kambing</div>
                </div>
            </div>
        </div>
        <div class="p-5 bg-secondary-container/30 rounded-2xl border-l-4 border-secondary">
             <p class="text-sm italic">"Daging akikah sebaiknya dibagikan dalam kondisi <strong>sudah dimasak</strong>."</p>
        </div>
    </div>

    <!-- KURBAN -->
    <div class="bg-secondary/5 rounded-[2.5rem] p-10 border border-secondary/10 relative overflow-hidden group">
        <span class="material-symbols-outlined absolute -bottom-10 -right-10 text-[12rem] text-secondary/5 -rotate-12 group-hover:rotate-0 transition-transform duration-700">volunteer_activism</span>
        <h3 class="font-headline text-3xl font-bold text-secondary mb-6">Kurban</h3>
        <p class="text-on-surface-variant mb-8 leading-relaxed">
            Ibadah menyembelih hewan ternak untuk mendekatkan diri kepada Allah.
        </p>
        <div class="space-y-4 mb-8">
            <div class="flex items-center gap-4 bg-white/60 p-4 rounded-2xl border border-secondary/10">
                <span class="material-symbols-outlined text-secondary">calendar_month</span>
                <div>
                    <div class="text-[10px] font-bold text-primary uppercase tracking-widest">Waktu</div>
                    <div class="font-bold">10-13 Dzulhijjah</div>
                </div>
            </div>
            <div class="flex items-center gap-4 bg-white/60 p-4 rounded-2xl border border-secondary/10">
                <span class="material-symbols-outlined text-secondary">inventory_2</span>
                <div>
                    <div class="text-[10px] font-bold text-primary uppercase tracking-widest">Pembagian</div>
                    <div class="font-bold">Kondisi Daging Mentah</div>
                </div>
            </div>
        </div>
        <p class="text-sm font-quran text-right leading-loose bg-white/40 p-3 rounded-xl" dir="rtl">فَصَلِّ لِرَبِّكَ وَانْحَرْۗ</p>
    </div>
</div>

<!-- SUMMARY TABLE -->
<h3 class="font-headline text-2xl font-bold text-primary mb-8 text-center">Perbedaan Akikah vs Kurban</h3>
<div class="overflow-x-auto mb-16 rounded-[2rem] border border-outline-variant/30">
    <table class="w-full text-left border-collapse bg-surface-container-lowest">
        <thead>
            <tr class="bg-primary text-white">
                <th class="p-6">Aspek</th>
                <th class="p-6">Akikah</th>
                <th class="p-6">Kurban</th>
            </tr>
        </thead>
        <tbody class="text-on-surface-variant">
            <tr class="border-b border-outline-variant/10">
                <td class="p-6 font-bold bg-primary/5">Tujuan</td>
                <td class="p-6">Syukur atas kelahiran bayi</td>
                <td class="p-6">Peringatan pengabdian Nabi Ibrahim as.</td>
            </tr>
            <tr class="border-b border-outline-variant/10">
                <td class="p-6 font-bold bg-primary/5">Waktu</td>
                <td class="p-6">Kapan saja (Utama hari ke-7)</td>
                <td class="p-6">Idul Adha & Hari Tasyrik (Dzulhijjah)</td>
            </tr>
            <tr class="border-b border-outline-variant/10">
                <td class="p-6 font-bold bg-primary/5">Penerima</td>
                <td class="p-6">Diberikan sudah dimasak</td>
                <td class="p-6">Diberikan dalam bentuk daging mentah</td>
            </tr>
            <tr>
                <td class="p-6 font-bold bg-primary/5">Jumlah Hewan</td>
                <td class="p-6">Tergantung jenis kelamin bayi</td>
                <td class="p-6">Tergantung kemampuan pekurban</td>
            </tr>
        </tbody>
    </table>
</div>

<!-- HIKMAH -->
<div class="p-10 bg-surface-container-highest rounded-[3rem] border-2 border-dashed border-outline-variant/30">
    <h4 class="text-2xl font-headline font-bold mb-6 flex items-center gap-3">
        <span class="material-symbols-outlined text-primary">diversity_1</span>
        Hikmah Ibadah
    </h4>
    <div class="grid md:grid-cols-2 gap-8">
        <div>
            <h5 class="font-bold text-primary mb-2">Relasi dengan Allah Swt.</h5>
            <p class="text-sm opacity-80 leading-relaxed">Meningkatkan ketakwaan dan mewujudkan rasa syukur atas nikmat yang tak terhingga.</p>
        </div>
        <div>
            <h5 class="font-bold text-primary mb-2">Relasi dengan Sesama</h5>
            <p class="text-sm opacity-80 leading-relaxed">Menumbuhkan kepedulian sosial, berbagi dengan kaum duafa, dan mempererat tali persaudaraan.</p>
        </div>
    </div>
</div>
"""

materi_file = "js/materi.js"

if os.path.exists(materi_file):
    with open(materi_file, "r", encoding="utf-8") as f:
        content = f.read()

    start_marker = "const materiData = "
    end_marker = "];"
    
    start_idx = content.find(start_marker)
    end_idx = content.rfind(end_marker)
    
    if start_idx != -1 and end_idx != -1:
        json_str = content[start_idx + len(start_marker):end_idx + 1]
        try:
            materi_data = json.loads(json_str)
            
            target_id = "kls9-smtganjil-bab4"
            updated = False
            for obj in materi_data:
                if obj["id"] == target_id:
                    obj["judul"] = "Bersyukur dengan Akikah, Peduli Sesama dengan Berkurban"
                    obj["waktuBumper"] = "10 Menit Baca"
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

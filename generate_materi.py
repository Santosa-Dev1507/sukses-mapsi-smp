import json

materi_data = []

# Mock data creation based on 28 Bab across grades 7, 8, 9
bab_counter = 1
for kls in [7, 8, 9]:
    for smt in ["Ganjil", "Genap"]:
        # roughly 4-5 babs per semester to reach 28 total
        num_babs = 5 if kls != 9 else 4 # 5+5+5+5+4+4 = 28
        for i in range(1, num_babs + 1):
            materi_data.append({
                "id": f"kls{kls}-smt{smt.lower()}-bab{i}",
                "kelas": kls,
                "semester": smt,
                "bab": f"Bab {i}",
                "judul": f"Materi PAI Kelas {kls} - {smt} - Bab {i} [Menengah]",
                "waktuBumper": f"{5 + (i % 3)} Menit Baca",
                "gambar": "images/islamic_calligraphy.png", # using an existing image
                "konten": f"""
                    <h2 class="font-headline text-2xl font-bold text-primary mb-6 flex items-center">
                        <span class="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mr-4">
                            <span class="material-symbols-outlined text-[24px]">menu_book</span>
                        </span>
                        Pengantar Bab {i}
                    </h2>
                    <p class="text-on-surface-variant leading-relaxed text-lg mb-8">
                        Ini adalah wadah sementara. Menunggu naskah asli untuk Kelas {kls} Semester {smt} Bab {i}.
                    </p>
                    <div class="bg-primary/5 border-l-4 border-primary rounded-r-3xl p-8 my-12 relative overflow-hidden">
                        <span class="material-symbols-outlined absolute -top-4 -right-4 text-9xl text-primary/5 rotate-12">format_quote</span>
                        <div class="text-right font-quran text-4xl leading-loose mb-6 text-on-surface" dir="rtl">
                            اَللّٰهُمَّ زِدْنَا عِلْمًا وَارْزُقْنَا فَهْمًا
                        </div>
                        <div class="font-body italic text-on-surface-variant text-lg">
                            "Ya Allah, tambahkanlah ilmu kepada kami dan berikanlah pemahaman."
                        </div>
                    </div>
                    <ul class="space-y-6 mb-12">
                        <li class="flex items-start">
                            <span class="material-symbols-outlined text-primary mr-4 mt-0.5 text-2xl">check_circle</span>
                            <span class="text-on-surface-variant text-lg"><strong class="text-on-surface">Poin Hafalan 1</strong> – Anda dapat mengetik poin-poin materi Anda di sini.</span>
                        </li>
                    </ul>
                """
            })
            bab_counter += 1

js_code = f"""// Database Materi Dinamis (Total {len(materi_data)} Bab)

const materiData = {json.dumps(materi_data, indent=4, ensure_ascii=False)};
"""

with open("js/materi.js", "w", encoding="utf-8") as f:
    f.write(js_code)

print("Created js/materi.js with 28 babs")

import os
import re

# 1. Create belajar-mandiri-ai.html based on index.html
with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

html = html.replace('<title>Dashboard - MAPSI SMPN 5 Klaten</title>', '<title>Belajar Bersama AI - MAPSI SMPN 5 Klaten</title>')

target_menu = '<span class="material-symbols-outlined text-on-surface-variant/70 group-hover:text-primary">smart_toy</span> Belajar Bersama AI\n                    </a>'

# Replace main content
pattern = r'(<main class="flex-1 overflow-y-auto pt-20 lg:pt-8 px-6 lg:px-12 pb-24">).*?(</main>)'
main_content = '''
        <div class="max-w-4xl mx-auto">
            <div class="mb-8">
                <div class="flex items-center gap-3 mb-2">
                    <span class="material-symbols-outlined text-primary text-3xl">smart_toy</span>
                    <h1 class="text-3xl font-bold font-headline">Belajar Mandiri bersama AI</h1>
                </div>
                <p class="text-stone-500">Gunakan kecerdasan buatan Gemini dari Google (NotebookLM) untuk menguji dan memperdalam pemahaman materimu secara interaktif.</p>
            </div>

            <div class="bg-white rounded-3xl p-8 shadow-sm border border-stone-200 mb-8">
                <h2 class="text-xl font-bold font-headline mb-4 text-primary-container">Langkah 1: Buka Tautan NotebookLM</h2>
                <p class="text-stone-600 mb-6 leading-relaxed">
                    Kami telah menyiapkan sebuah buku catatan pintar (NotebookLM) yang berisi seluruh materi PAI & Budi Pekerti. Silakan klik tombol di bawah ini untuk membuka halaman tersebut di tab baru.
                </p>
                <a href="https://notebook.google.com/notebook/58c0573d-d606-41d8-b4f0-4a6d525bed4c" target="_blank" class="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-bold rounded-xl shadow hover:bg-primary-container transition-colors">
                    <span class="material-symbols-outlined text-sm">open_in_new</span> Buka NotebookLM MAPSI
                </a>
            </div>

            <div class="bg-primary-container/5 rounded-3xl p-8 border border-primary-container/20 mb-8">
                <h2 class="text-xl font-bold font-headline mb-4 text-primary-container">Langkah 2: Salin Prompt Instruksi</h2>
                <p class="text-stone-600 mb-6 leading-relaxed">
                    Setelah halaman NotebookLM terbuka, salin (copy) salah satu teks perintah (prompt) di bawah ini, lalu tempelkan (paste) ke dalam kolom chat AI Gemini di sana.
                </p>

                <div class="space-y-6">
                    <!-- Prompt 1 -->
                    <div class="bg-white rounded-2xl p-6 shadow-sm border border-stone-200 relative">
                        <h3 class="font-bold text-stone-800 mb-2 flex items-center gap-2">
                            <span class="material-symbols-outlined text-secondary text-lg">quiz</span> Latihan Uji Pemahaman (Tanya Jawab)
                        </h3>
                        <p class="text-sm text-stone-500 mb-4">Gunakan prompt ini jika kamu ingin AI memberikan pertanyaan-pertanyaan untuk menguji ingatanmu.</p>
                        
                        <div class="bg-stone-50 p-4 rounded-xl border border-stone-200 font-mono text-sm text-stone-700 whitespace-pre-wrap select-all">Halo Gemini, saya sedang belajar materi PAI & Budi Pekerti untuk persiapan lomba MAPSI. Tolong berikan saya 3 pertanyaan pilihan ganda yang menantang dari materi yang ada di dokumen ini. Jangan berikan kunci jawabannya dulu, biarkan saya menjawabnya satu per satu. Jika saya salah, tolong koreksi dan jelaskan alasannya berdasarkan sumber dokumen.</div>
                        
                        <button onclick="navigator.clipboard.writeText(this.previousElementSibling.innerText); this.innerHTML='<span class=\\'material-symbols-outlined text-sm\\'>check</span> Tersalin!'; setTimeout(()=>this.innerHTML='<span class=\\'material-symbols-outlined text-sm\\'>content_copy</span> Salin', 2000)" class="absolute top-6 right-6 px-4 py-2 bg-stone-100 text-stone-600 font-bold rounded-lg hover:bg-stone-200 transition-colors flex items-center gap-2 text-xs">
                            <span class="material-symbols-outlined text-sm">content_copy</span> Salin
                        </button>
                    </div>

                    <!-- Prompt 2 -->
                    <div class="bg-white rounded-2xl p-6 shadow-sm border border-stone-200 relative">
                        <h3 class="font-bold text-stone-800 mb-2 flex items-center gap-2">
                            <span class="material-symbols-outlined text-tertiary text-lg">psychology</span> Penjelasan Konsep Sulit
                        </h3>
                        <p class="text-sm text-stone-500 mb-4">Gunakan prompt ini jika ada materi yang sulit kamu pahami dan butuh penjelasan yang lebih sederhana.</p>
                        
                        <div class="bg-stone-50 p-4 rounded-xl border border-stone-200 font-mono text-sm text-stone-700 whitespace-pre-wrap select-all">Halo Gemini, saya kurang paham tentang materi [SEBUTKAN MATERI, misal: Sujud Sahwi / Qada dan Qadar / Peradaban Abbasiyah]. Tolong jelaskan kembali materi tersebut dengan bahasa yang sangat sederhana dan mudah dimengerti oleh siswa SMP. Berikan juga contoh dalam kehidupan sehari-hari agar lebih jelas.</div>
                        
                        <button onclick="navigator.clipboard.writeText(this.previousElementSibling.innerText); this.innerHTML='<span class=\\'material-symbols-outlined text-sm\\'>check</span> Tersalin!'; setTimeout(()=>this.innerHTML='<span class=\\'material-symbols-outlined text-sm\\'>content_copy</span> Salin', 2000)" class="absolute top-6 right-6 px-4 py-2 bg-stone-100 text-stone-600 font-bold rounded-lg hover:bg-stone-200 transition-colors flex items-center gap-2 text-xs">
                            <span class="material-symbols-outlined text-sm">content_copy</span> Salin
                        </button>
                    </div>

                    <!-- Prompt 3 -->
                    <div class="bg-white rounded-2xl p-6 shadow-sm border border-stone-200 relative">
                        <h3 class="font-bold text-stone-800 mb-2 flex items-center gap-2">
                            <span class="material-symbols-outlined text-primary text-lg">summarize</span> Ringkasan & Poin Penting
                        </h3>
                        <p class="text-sm text-stone-500 mb-4">Gunakan prompt ini untuk meminta ringkasan cepat dari sebuah bab.</p>
                        
                        <div class="bg-stone-50 p-4 rounded-xl border border-stone-200 font-mono text-sm text-stone-700 whitespace-pre-wrap select-all">Tolong buatkan rangkuman poin-poin paling penting yang wajib saya hafal dari materi [SEBUTKAN NAMA BAB]. Formatkan dalam bentuk tabel atau bullet points (poin-poin) agar mudah dibaca cepat sebelum saya mulai latihan soal.</div>
                        
                        <button onclick="navigator.clipboard.writeText(this.previousElementSibling.innerText); this.innerHTML='<span class=\\'material-symbols-outlined text-sm\\'>check</span> Tersalin!'; setTimeout(()=>this.innerHTML='<span class=\\'material-symbols-outlined text-sm\\'>content_copy</span> Salin', 2000)" class="absolute top-6 right-6 px-4 py-2 bg-stone-100 text-stone-600 font-bold rounded-lg hover:bg-stone-200 transition-colors flex items-center gap-2 text-xs">
                            <span class="material-symbols-outlined text-sm">content_copy</span> Salin
                        </button>
                    </div>
                </div>
            </div>

        </div>
'''

html_new = re.sub(pattern, r'\1\n' + main_content + r'\n\2', html, flags=re.DOTALL)

with open('belajar-mandiri-ai.html', 'w', encoding='utf-8') as f:
    f.write(html_new)


# 2. Add menu item to all HTML files
link_html = """                    <a href="belajar-mandiri-ai.html" class="flex items-center gap-3 px-4 py-3 rounded-xl text-on-surface-variant hover:bg-surface-container hover:text-on-surface font-medium transition-all group">
                        <span class="material-symbols-outlined text-on-surface-variant/70 group-hover:text-primary">smart_toy</span> Belajar Bersama AI
                    </a>"""

target_menu = '<span class="material-symbols-outlined text-on-surface-variant/70 group-hover:text-primary">assignment</span> Latihan Harian\n                    </a>'

html_files = [f for f in os.listdir('.') if f.endswith('.html')]
for file in html_files:
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    if 'belajar-mandiri-ai.html' not in content:
        if target_menu in content:
            content = content.replace(target_menu, target_menu + '\n' + link_html)
            with open(file, 'w', encoding='utf-8') as f:
                f.write(content)

# 3. Fix active state in belajar-mandiri-ai.html
with open('belajar-mandiri-ai.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Replace active state in sidebar
# In index.html, dashboard has the active classes. Let's remove them from dashboard.
dashboard_active = 'class="flex items-center gap-3 px-4 py-3 rounded-xl bg-primary-container/10 text-primary-container font-bold transition-all"'
dashboard_inactive = 'class="flex items-center gap-3 px-4 py-3 rounded-xl text-on-surface-variant hover:bg-surface-container hover:text-on-surface font-medium transition-all group"'
content = content.replace(dashboard_active, dashboard_inactive)
content = content.replace('<span class="material-symbols-outlined text-primary-container">dashboard</span>', '<span class="material-symbols-outlined text-on-surface-variant/70 group-hover:text-primary">dashboard</span>')

# Add active class to AI menu
ai_menu = '<span class="material-symbols-outlined text-on-surface-variant/70 group-hover:text-primary">smart_toy</span> Belajar Bersama AI\n                    </a>'
content = content.replace(ai_menu, ai_menu.replace('text-on-surface-variant/70 group-hover:text-primary', 'text-primary-container'))

ai_menu_full = 'class="flex items-center gap-3 px-4 py-3 rounded-xl text-on-surface-variant hover:bg-surface-container hover:text-on-surface font-medium transition-all group">\n                        <span class="material-symbols-outlined text-primary-container">smart_toy</span> Belajar Bersama AI\n                    </a>'

ai_menu_active = 'class="flex items-center gap-3 px-4 py-3 rounded-xl bg-primary-container/10 text-primary-container font-bold transition-all">\n                        <span class="material-symbols-outlined text-primary-container">smart_toy</span> Belajar Bersama AI\n                    </a>'

content = content.replace(ai_menu_full, ai_menu_active)

with open('belajar-mandiri-ai.html', 'w', encoding='utf-8') as f:
    f.write(content)

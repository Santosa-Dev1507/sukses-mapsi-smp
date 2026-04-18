import re
with open("detail-materi.html", "r", encoding="utf-8") as f:
    text = f.read()

# Add IDs to header stuff
# Replace <span class="px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container text-xs font-bold uppercase tracking-widest">Fiqih</span>
text = re.sub(r'<span class="(px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container text-xs font-bold uppercase tracking-widest)">Fiqih</span>',
              r'<span id="materi-kelas" class="\1">Kelas 9 Semester Ganjil - Bab 1</span>', text)

# Replace <span class="material-symbols-outlined text-[18px] mr-1">schedule</span> 5 Menit Baca
text = re.sub(r'<span class="material-symbols-outlined text-\[18px\] mr-1">schedule</span> 5 Menit Baca',
              r'<span class="material-symbols-outlined text-[18px] mr-1">schedule</span> <span id="materi-waktu">5 Menit Baca</span>', text)

# Replace <h2 class="font-headline text-4xl lg:text-5xl font-extrabold tracking-tight text-on-surface mb-6 leading-tight"> Ketentuan Penyembelihan Hewan </h2>
text = re.sub(r'<h2 class="font-headline text-4xl lg:text-5xl font-extrabold tracking-tight text-on-surface mb-6 leading-tight">\s*Ketentuan Penyembelihan Hewan\s*</h2>',
              r'<h2 id="materi-judul" class="font-headline text-4xl lg:text-5xl font-extrabold tracking-tight text-on-surface mb-6 leading-tight">Judul Materi</h2>', text)

# Replace <p class="text-xl text-on-surface-variant leading-relaxed mb-8 max-w-3xl"> Memahami aspek hukum dan etika... </p>
text = re.sub(r'<p class="text-xl text-on-surface-variant leading-relaxed mb-8 max-w-3xl">\s*Memahami aspek hukum dan etika dalam Islam mengenai tata cara penyembelihan hewan yang halal, thayyib, dan ihsan.\s*</p>',
              r'', text) # we don't have deskripsi yet, so remove it

# Replace article content section
content_sect = r'<section class="prose prose-slate max-w-none">.*?</section>'
text = re.sub(content_sect, '<section id="materi-konten" class="prose prose-slate max-w-none"></section>', text, flags=re.DOTALL)

# Add id to button
text = text.replace('<button class="w-full sm:w-auto px-10 py-5 bg-gradient-to-r from-primary to-primary-container text-white font-bold rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-1 active:scale-95 transition-all flex items-center justify-center space-x-3">',
                    '<button id="btn-mark-read" class="w-full sm:w-auto px-10 py-5 bg-gradient-to-r from-primary to-primary-container text-white font-bold rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-1 active:scale-95 transition-all flex items-center justify-center space-x-3">')

# Modify sidebar to empty
terkait_sect = r'<div class="space-y-6">.*?</div>\s*<a href="kisi-kisi.html"'
text = re.sub(terkait_sect, '<div id="materi-terkait-list" class="space-y-6"></div>\n<a href="kisi-kisi.html"', text, flags=re.DOTALL)

# Add Scripts
if '<script src="js/materi.js"></script>' not in text:
    text = text.replace('</body></html>', '<script src="js/materi.js"></script>\n<script src="js/materi-view.js"></script>\n</body></html>')

with open("detail-materi.html", "w", encoding="utf-8") as f:
    f.write(text)

print("detail-materi.html ready.")

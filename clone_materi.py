import os

base_dir = r'c:\Users\Asus\Downloads\stitch. sukses asaj full\active_website'
kisi_path = os.path.join(base_dir, 'kisi-kisi.html')
daftar_path = os.path.join(base_dir, 'daftar-materi.html')

with open(kisi_path, 'r', encoding='utf-8') as f:
    html = f.read()

# Replace things to make it Daftar Materi
html = html.replace('<title>Kisi-kisi CCAI MAPSI SMP - Sukses CCAI MAPSI SMP | Lomba CCAI MAPSI</title>', '<title>Daftar Materi CCAI MAPSI SMP - Sukses CCAI MAPSI SMP</title>')
html = html.replace('Materi esensial yang disusun secara sistematis untuk membantumu fokus pada kompetensi utama. Pelajari setiap poin dengan teliti untuk mencapai nilai terbaik dalam Lomba CCAI MAPSI.', 'Berikut adalah rangkuman dari seluruh bab materi PAI kelas 7, 8, dan 9 yang akan melengkapi persiapan Lomba CCAI MAPSI Anda.')
html = html.replace('<span class="text-primary font-bold">Kisi-kisi CCAI MAPSI</span>', '<span class="text-primary font-bold">Daftar Materi</span>')
html = html.replace('Panduan Belajar <span class="text-primary">Kisi-kisi</span> CCAI MAPSI', 'Kumpulan <span class="text-primary">Materi Lengkap</span> CCAI MAPSI')
html = html.replace('href="kisi-kisi.html" class="text-sm font-bold text-primary transition-colors border-b-2 border-primary pb-1"', 'href="kisi-kisi.html" class="text-sm font-bold text-on-surface-variant hover:text-primary transition-colors"')
html = html.replace('href="detail-materi.html" class="text-sm font-bold text-on-surface-variant hover:text-primary transition-colors"', 'href="daftar-materi.html" class="text-sm font-bold text-primary transition-colors border-b-2 border-primary pb-1"')

html = html.replace('id="kisi-kisi-container"', 'id="daftar-materi-container"')
html = html.replace('<script src="js/kisi-kisi.js"></script>', '<script src="js/materi.js"></script>\n<script src="js/daftar-materi.js"></script>')

with open(daftar_path, 'w', encoding='utf-8') as f:
    f.write(html)
print('daftar-materi.html created successfully')

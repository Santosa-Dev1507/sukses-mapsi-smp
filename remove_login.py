import os

html_files = [
    "index.html",
    "kisi-kisi.html",
    "detail-materi.html",
    "latihan-soal.html"
]

target_block = """<button class="hidden md:flex items-center space-x-2 bg-primary text-white px-4 py-2 rounded-full font-bold text-sm hover:bg-primary-container transition-colors shadow-sm">
<span class="material-symbols-outlined text-[18px]">person</span>
<span>Masuk Akun</span>
</button>"""

import re
def clean_file(path):
    if not os.path.exists(path):
        return
    with open(path, "r", encoding="utf-8") as f:
        content = f.read()
    
    # We can just string replace if exact match
    # Since indentation might varying, let's use regex that targets the person and masuk akun texts in a button tag
    pattern = re.compile(r'<button[^>]*>\s*<span[^>]*>person</span>\s*<span>Masuk Akun</span>\s*</button>', re.DOTALL | re.IGNORECASE)
    
    new_content = re.sub(pattern, '', content)
    
    if content != new_content:
        with open(path, "w", encoding="utf-8") as f:
            f.write(new_content)
        print(f"Removed from {path}")

for file in html_files:
    # use full absolute paths if needed, but since we run this locally via run_command cwd we can just use relative paths
    clean_file(file)


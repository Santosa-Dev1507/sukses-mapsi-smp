import json
import re

with open("js/data.js", "r", encoding="utf-8") as f:
    text = f.read()

# Replace "const quizData =" with "const quizData2024 ="
# using regex that matches only the declaration globally.
text = re.sub(r'const quizData\s*=\s*\[', 'const quizData2024 = [', text)

# Build quizData2025
questions2025 = []
for i in range(45):
    tipe = "pg" if i < 40 else "uraian"
    desc = "Pilihan Ganda" if i < 40 else "Uraian"
    opsi = ["-", "-", "-", "-"] if i < 40 else []
    
    questions2025.append({
        "id": i + 1,
        "materi": "Materi Tahun 2025",
        "pertanyaan": f"[Wadah 2025] Soal {desc} Nomor {i+1} : Menunggu Soal Asli.",
        "gambar": "",
        "kutipan": "",
        "opsi": opsi,
        "kunciJawaban": 0,
        "tipsBidang": "",
        "tipe": tipe
    })

# Add quizData2025 array
text += "\n\nconst quizData2025 = " + json.dumps(questions2025, indent=4, ensure_ascii=False) + ";\n"

# Add dynamic logic at the bottom of data.js to export quizData as appropriate based on URL or generic logic.
# Because data.js is loaded in browser, we can check window.location.search here.
text += "\n\n"
text += "// Logika pemilihan tahun soal secara dinamis\n"
text += "let quizData = [];\n"
text += "if (typeof window !== 'undefined') {\n"
text += "    const urlParams = new URLSearchParams(window.location.search);\n"
text += "    const tahun = urlParams.get('tahun') || '2024';\n"
text += "    quizData = tahun === '2025' ? quizData2025 : quizData2024;\n"
text += "}\n"

with open("js/data.js", "w", encoding="utf-8") as f:
    f.write(text)

print("Berhasil menambahkan wadah 2025!")

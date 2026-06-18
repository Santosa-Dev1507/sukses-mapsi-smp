import json
import re

with open("js/data.js", "r", encoding="utf-8") as f:
    text = f.read()

# Generate quizData2026
questions2026 = []
for i in range(45):
    if i < 35:
        tipe = "pg"
        desc = "Pilihan Ganda"
        opsi = ["-", "-", "-", "-"]
        kunci = 0
    elif i < 40:
        tipe = "pga"
        desc = "Pilihan Ganda Alternatif"
        opsi = ["Pilihan 1", "Pilihan 2", "Pilihan 3", "Pilihan 4"]
        kunci = [0, 1] # example multiple correct answers
    else:
        tipe = "uraian"
        desc = "Uraian"
        opsi = []
        kunci = 0
        
    questions2026.append({
        "id": i + 1,
        "materi": "Materi CCAI MAPSI 2026",
        "pertanyaan": f"[Wadah 2026] Soal {desc} Nomor {i+1} : Menunggu input soal asli.",
        "gambar": "",
        "kutipan": "",
        "opsi": opsi,
        "kunciJawaban": kunci,
        "tipsBidang": "",
        "tipe": tipe
    })

quiz_ext = "\n\nconst quizData2026 = " + json.dumps(questions2026, indent=4, ensure_ascii=False) + ";\n"

# We must replace the dynamic parsing portion of data.js to also handle '2026'
# Let's find: `quizData = tahun === '2025' ? quizData2025 : quizData2024;`
# Replace with `quizData = tahun === '2026' ? quizData2026 : (tahun === '2025' ? quizData2025 : quizData2024);`

new_logic = "quizData = tahun === '2026' ? quizData2026 : (tahun === '2025' ? quizData2025 : quizData2024);"
text = re.sub(r"quizData = .*?;", new_logic, text)

# Just inject it before the Logic block
logic_idx = text.find("// Logika pemilihan")
if logic_idx != -1:
    text = text[:logic_idx] + quiz_ext + "\n" + text[logic_idx:]
else:
    text += quiz_ext

with open("js/data.js", "w", encoding="utf-8") as f:
    f.write(text)

print("2026 Container Added")

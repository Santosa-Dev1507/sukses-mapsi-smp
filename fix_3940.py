import re

file_path = 'js/data.js'
with open(file_path, 'r', encoding='utf-8') as f:
    text = f.read()

# Soal 39 - Fiqih, tema Mazhab (kunci = 3 = Imam Hanbali, berdasar kunciJawaban:3)
# Soal 40 - Tarikh/Seni, tema Masjid Al-Jabbar / Seni Arsitektur Islam

new_q39 = {
    "pertanyaan": "Dalam ilmu Fiqih dikenal 4 (empat) mazhab besar yang menjadi rujukan hukum umat Islam Sunni di seluruh dunia. Salah satu ciri khas mazhab tertentu adalah sangat berpegang teguh pada hadis dan menolak penggunaan akal (rasio) secara berlebihan dalam menetapkan hukum Islam. Mazhab yang dikenal sangat ketat berpegang pada dalil nash (Al-Qur'an dan Hadis) tersebut adalah Mazhab ....",
    "opsi": ["Hanafi", "Maliki", "Syafi'i", "Hanbali"],
    "kunciJawaban": 3,
    "materi": "Fiqih"
}

new_q40 = {
    "pertanyaan": "Masjid Al-Jabbar adalah masjid megah yang diresmikan pada tahun 2022 di Kota Bandung, Jawa Barat. Masjid ini berdiri di atas danau buatan dan memiliki desain arsitektur yang sangat indah memadukan estetika modern dengan nilai-nilai Islam.<br>Keindahan Masjid Al-Jabbar mencerminkan salah satu bentuk seni Islam yang paling menonjol, yaitu seni ....",
    "opsi": ["Seni Arsitektur (Bangunan) Islam", "Seni Baca Al-Qur'an (Tilawah)", "Seni Kaligrafi Arab", "Seni Musik Islami"],
    "kunciJawaban": 0,
    "materi": "Seni Budaya Islam"
}

# Replace soal 39
def replace_question_field(text, qid, field, new_value):
    # Pattern: from "id": {qid} ... "field": "..." to next field
    # We'll do a targeted find of the object for this id
    pass

# Strategy: find the pertanyaan line for id 39 and 40, replace them
# For pertanyaan
q39_old = re.search(r'("id":\s*39.*?"pertanyaan":\s*)"(.*?)"(\s*,?\s*\n.*?"gambar")', text, re.DOTALL)
q40_old = re.search(r'("id":\s*40.*?"pertanyaan":\s*)"(.*?)"(\s*,?\s*\n.*?"gambar")', text, re.DOTALL)

if q39_old:
    print(f"Q39 pertanyaan found, len={len(q39_old.group(2))}")
if q40_old:
    print(f"Q40 pertanyaan found, len={len(q40_old.group(2))}")

# Safer: just replace the entire corrupted string fields manually using position
# Find positions
for qid, new_q in [(39, new_q39), (40, new_q40)]:
    # Find the object block for this id in quizData2024
    pattern = rf'"id":\s*{qid},\s*\n\s*"materi":\s*"([^"]*)",\s*\n\s*\n"pertanyaan":\s*"(.*?)",\s*\n\s*\n\s*\n\s*"gambar"'
    m = re.search(pattern, text, re.DOTALL)
    if m:
        old_block = m.group(0)
        new_block = f'"id": {qid},\n        "materi": "{new_q["materi"]}",\n\n"pertanyaan": "{new_q["pertanyaan"]}",\n\n\n        "gambar"'
        text = text.replace(old_block, new_block, 1)
        print(f"Q{qid} pertanyaan replaced")
    else:
        print(f"Q{qid} pattern not found")

    # Also replace opsi
    # First find the opsi array for this id
    opsi_str = json_list_to_js(new_q['opsi'])
    # We'll do it differently - just find and replace the whole q block

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(text)
print("Done writing")

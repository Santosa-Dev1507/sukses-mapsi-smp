import json
import re

file_path = 'js/data.js'
with open(file_path, 'r', encoding='utf-8') as f:
    text = f.read()

# Find and replace the specific phrase
old_text = "1. Sebutkan 2 perbedaan antara Malaikat dan Manusia dalam hal sifat dasarnya!"
new_text = "1. Sebutkan 3 perbedaan antara Malaikat, Jin dan Manusia!"

if old_text in text:
    updated = text.replace(old_text, new_text, 1)
    
    # Also update the kunci jawaban (tipsBidang) for this question
    old_tips = "1. Malaikat diciptakan dari cahaya (Nur) dan tidak memiliki hawa nafsu, selalu taat kepada Allah. Manusia diciptakan dari tanah dan memiliki hawa nafsu sehingga bisa berbuat baik atau buruk."
    new_tips = "1. Malaikat: diciptakan dari cahaya (Nur), tidak punya hawa nafsu, selalu taat. Jin: diciptakan dari api, punya hawa nafsu, bisa taat atau durhaka. Manusia: diciptakan dari tanah/saripati tanah, punya hawa nafsu dan akal, bisa berbuat baik atau buruk."
    
    updated = updated.replace(old_tips, new_tips, 1)
    
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(updated)
    print("Berhasil diperbarui!")
else:
    print("Teks tidak ditemukan, cek soal 44...")
    # Dump pertanyaan soal 44
    m = re.search(r'(const quizData2026\s*=\s*)(\[.*?\]);', text, re.DOTALL)
    if m:
        arr = json.loads(m.group(2))
        print(arr[43]['pertanyaan'])

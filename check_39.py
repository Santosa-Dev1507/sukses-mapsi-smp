import re

with open('js/data.js', 'r', encoding='utf-8') as f:
    text = f.read()

# Find and show the raw lines for id 39 and 40 in quizData2024
start = text.find('const quizData2024')
end = text.find('const quizData2025')
block = text[start:end]
lines = block.split('\n')

for i, line in enumerate(lines):
    if '"id": 39' in line:
        chunk = '\n'.join(lines[i:i+25])
        with open('debug_39_raw.txt', 'w', encoding='utf-8') as out:
            out.write(chunk)
        print("Soal 39 ditulis ke debug_39_raw.txt")
        break

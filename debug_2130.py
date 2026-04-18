import re
import json

with open('js/data.js', 'r', encoding='utf-8') as f:
    text = f.read()

lines = text.split('\n')
out = []
record = False
c = 0
for l in lines:
    if 'const quizData2025' in l:
        record = '2025'
    if 'const quizData2024' in l:
        record = '2024'
    if record and '"id":' in l:
        match = re.search(r'"id":\s*(\d+)', l)
        if match: c = int(match.group(1))
    if record and '"pertanyaan":' in l and 21 <= c <= 30:
        out.append(record + " Q" + str(c) + " : " + l.strip())
        
with open('debug_q21_30.txt', 'w', encoding='utf-8') as f:
    f.write('\n'.join(out))
print("Done")

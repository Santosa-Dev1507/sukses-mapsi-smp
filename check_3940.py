import re

with open('js/data.js', 'r', encoding='utf-8') as f:
    text = f.read()

start = text.find('const quizData2024')
end = text.find('const quizData2025')
block = text[start:end]

lines = block.split('\n')
for i, line in enumerate(lines):
    if '"id": 39' in line or '"id": 40' in line or '"id":39' in line or '"id":40' in line:
        print(f"\n=== Found id at line {i} ===")
        chunk = '\n'.join(lines[i:i+20])
        # print as ascii with escaped unicode
        with open('debug_3940_raw.txt', 'w', encoding='utf-8') as out:
            out.write(chunk)
        print("Ditulis ke debug_3940_raw.txt")
        
# Also find all non-ASCII non-Arabic characters in the 2024 block
print("\n=== Karakter mencurigakan di quizData2024 ===")
suspicious = re.findall(r'[^\x00-\x7F\u0600-\u06FF\u200c-\u200f\u202a-\u202e]', block)
unique = set(suspicious)
print(f"Total karakter non-ASCII non-Arab: {len(suspicious)}")
print(f"Unik: {unique}")

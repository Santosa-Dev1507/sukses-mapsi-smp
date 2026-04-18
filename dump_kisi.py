import json
import re

file_path = 'js/data.js'
with open(file_path, 'r', encoding='utf-8') as f:
    text = f.read()

m = re.search(r'(const kisiKisiData = )(\[.*?\])(;)', text, re.DOTALL)
if m:
    with open('debug_kisi.json', 'w', encoding='utf-8') as f:
        f.write(m.group(2))

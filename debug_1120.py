import json
import re

file_path = 'js/data.js'
with open(file_path, 'r', encoding='utf-8') as f:    
    text = f.read()

def parse_array(name):
    m = re.search(r'const ' + name + r'\s*=\s*(.*?\])\s*(?:;|\n\s*const|\n\s*let|\n\s*//)', text, re.DOTALL)
    if m:
        try:
            return json.loads(m.group(1).replace("'", "\""))
        except:
            pass
    return None

arr25 = parse_array('quizData2025')
if arr25 is None:
    # hacky fallback since it contains single quotes and variables? No, my patch replaced all internal quotes and let json.loads potentially fail.
    pass

# We will just write a simpler string search script to print out questions 11-20 from 2024 and 2025.
# Let's search manually inside Python and write out the Q11-20 text.
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
        c = int(re.search(r'"id":\s*(\d+)', l).group(1))
    if record and '"pertanyaan":' in l and 11 <= c <= 20:
        out.append(record + " Q" + str(c) + " : " + l.strip())
        
with open('debug_q11_20.txt', 'w', encoding='utf-8') as f:
    f.write('\n'.join(out))
print("Prepared debug_q11_20.txt")

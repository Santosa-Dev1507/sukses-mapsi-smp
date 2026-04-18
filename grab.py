import json
import re

file_path = 'js/data.js'
with open(file_path, 'r', encoding='utf-8') as f:    
    text = f.read()

def parse_array(name):
    m = re.search(r'const ' + name + r'\s*=\s*(\[\s*\{.*?\}\s*\])\s*(?:;|\n\s*const|\n\s*let|\n\s*//)', text, re.DOTALL)
    if m:
        try:
            return json.loads(m.group(1).replace("'", "\""))
        except:
            return m.group(1)
    return None

arr24 = parse_array('quizData2024')
with open('debug_q12_13.json', 'w', encoding='utf-8') as f:
    f.write(arr24)

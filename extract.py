import re
import json

with open('js/data.js', 'r', encoding='utf-8') as f:
    text = f.read()

# We need to find the arrays without executing js
def parse_array(name):
    # This regex is a bit greedy but should work if well separated
    m = re.search(r'const ' + name + r'\s*=\s*(\[\s*\{.*?\}\s*\])\s*(?:;|\n\s*const|\n\s*let|\n\s*//)', text, re.DOTALL)
    if m: return m.group(1)
    return None

arr24 = parse_array('quizData2024')
arr25 = parse_array('quizData2025')

with open('q24.txt', 'w', encoding='utf-8') as f:
    f.write(str(arr24)[:3000])
with open('q25.txt', 'w', encoding='utf-8') as f:
    f.write(str(arr25)[:3000])

print("Extracted strings.")

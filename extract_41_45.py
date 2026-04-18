import json
import re

file_path = 'js/data.js'
with open(file_path, 'r', encoding='utf-8') as f:
    text = f.read()

def get_questions(year, start_id, end_id):
    m = re.search(r'const quizData' + str(year) + r'\s*=\s*(\[\s*\{.*?\}\s*\])\s*(?:;|\n\s*const|\n\s*let|\n\s*//)', text, re.DOTALL)
    out = []
    if m:
        try:
            arr = json.loads(m.group(1).replace("'", "\""))
            for q in arr:
                if start_id <= q['id'] <= end_id:
                    out.append(f"{year} Q{q['id']} : {q['pertanyaan']}")
        except:
            pass
    return out

res24 = get_questions(2024, 41, 45)
res25 = get_questions(2025, 41, 45)

with open('debug_q41_45.txt', 'w', encoding='utf-8') as f:
    f.write('\n'.join(res24 + res25))

import re

with open('js/data.js', 'r', encoding='utf-8') as f:
    lines = f.readlines()

for i in range(len(lines)):
    line = lines[i]
    stripped = line.strip()
    
    # Matches "pertanyaan": "...", or "kutipan": "..."
    match1 = re.search(r'^(\s*".*?":\s*")(.*)("\s*,?\s*)$', line)
    if match1:
        start = match1.group(1)
        inner = match1.group(2)
        end = match1.group(3)
        inner = inner.replace('"', "'")
        lines[i] = start + inner + end + "\n"
        continue

    # Matches lines inside array like "Aksi yang baik",
    match2 = re.search(r'^(\s*")(.*)("\s*,?\s*)$', line)
    if match2 and not ":" in match2.group(1):
        start = match2.group(1)
        inner = match2.group(2)
        end = match2.group(3)
        inner = inner.replace('"', "'")
        lines[i] = start + inner + end + "\n"


with open('js/data.js', 'w', encoding='utf-8') as f:
    f.writelines(lines)
print("Fix applied")

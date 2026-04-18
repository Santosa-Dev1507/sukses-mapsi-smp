f = open('js/data.js', encoding='utf-8')
lines = f.readlines()
for i, l in enumerate(lines):
    if '"id": 39' in l or '"id": 40' in l:
        print(i+1, repr(l[:80]))

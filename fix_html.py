import os, re

link_html = '''                    <a href="belajar-mandiri-ai.html" class="flex items-center gap-3 px-4 py-3 rounded-xl text-on-surface-variant hover:bg-surface-container hover:text-on-surface font-medium transition-all group">
                        <span class="material-symbols-outlined text-on-surface-variant/70 group-hover:text-primary">smart_toy</span> Belajar Bersama AI
                    </a>'''

html_files = [f for f in os.listdir('.') if f.endswith('.html')]

for file in html_files:
    if file == 'belajar-mandiri-ai.html': continue
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    if 'belajar-mandiri-ai.html' not in content:
        pattern = re.compile(r'(</nav>\s*</div>\s*<div>\s*<h3[^>]*>Cabang Lomba</h3>)')
        content = pattern.sub(link_html + r'\n                \1', content)
        
        with open(file, 'w', encoding='utf-8') as f:
            f.write(content)

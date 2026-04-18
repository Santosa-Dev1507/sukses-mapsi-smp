import re

with open('js/data.js', 'r', encoding='utf-8') as f:
    data_content = f.read()

with open('update_data_2025.js', 'r', encoding='utf-8') as f:
    update_content = f.read()

# get the array content from update_data_2025.js
array_match = re.search(r'const quizData2025 = (\[.*?\]);', update_content, re.DOTALL)
if array_match:
    array_string = array_match.group(1)
    # replace in data_content
    data_content = re.sub(r'const quizData2025 = \[.*?\];', f'const quizData2025 = {array_string};', data_content, flags=re.DOTALL)
    
    with open('js/data.js', 'w', encoding='utf-8') as f:
        f.write(data_content)
    print("Success")
else:
    print("Failed to match")

import fitz  # PyMuPDF
import sys

filename = "soal asaj 2024.pdf"

try:
    doc = fitz.open(filename)
    # Extract only the first 3 pages to see questions and not overwhelm output
    text = ""
    for i in range(min(3, len(doc))):
        page = doc.load_page(i)
        # Using blocks extraction for better organization
        blocks = page.get_text("blocks")
        for b in blocks:
            text += b[4] + "\n"
        text += f"\n--- END OF PAGE {i+1} ---\n\n"
        
    with open("pdf_partial_extract.txt", "w", encoding="utf-8") as f:
        f.write(text)
    
    # Also print the first 1500 chars to terminal
    print(text[:1500])
except Exception as e:
    print(f"Error: {e}")

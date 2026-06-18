import json
import re

payload_10 = [
    {
        "id": 1,
        "materi": "Al-Qur'an",
        "pertanyaan": "Perhatikan potongan ayat berikut!<br><br><span class='text-2xl font-bold font-arabic leading-loose text-center block' dir='rtl'>تَفَسَّحُوا فِي الْمَجَالِسِ فَافْسَحُوا يَفْسَحِ اللَّهُ لَكُمْ</span><br>Pada potongan ayat tersebut menjelaskan bahwa ....",
        "gambar": "",
        "kutipan": "",
        "opsi": [
            "Allah mengetahui apa yang ada di langit dan di bumi",
            "Allah memerintahkan manusia untuk berlapang-lapang dalam majelis ilmu",
            "Perbedaan orang musyrik dengan orang yang takut kepada Tuhannya",
            "Tuhan yang mempunyai kerajaan, memberikan kerajaan kepada siapa yang dikehendaki"
        ],
        "kunciJawaban": 1,
        "tipsBidang": "",
        "tipe": "pg"
    },
    {
        "id": 2,
        "materi": "Al-Qur'an",
        "pertanyaan": "Perhatikan QS. Al Qasas (28) : 77 berikut!<br><br><span class='text-2xl font-bold font-arabic leading-loose text-center block' dir='rtl'>وَابْتَغِ فِيمَا آتَاكَ اللَّهُ الدَّارَ الْآخِرَةَ ۖ وَلَا تَنسَ نَصِيبَكَ مِنَ الدُّنْيَا ۖ وَأَحْسِن كَمَا أَحْسَنَ اللَّهُ إِلَيْكَ ۖ وَلَا تَبْغِ الْفَسَادَ فِي الْأَرْضِ</span><br>Manakah yang <span class='italic font-bold'>bukan</span> merupakan kandungan QS. Al Qasas (28) : 77?",
        "gambar": "",
        "kutipan": "",
        "opsi": [
            "Perintah kepada manusia agar hidup secara seimbang antara dunia dan akherat",
            "Perintah kepada manusia untuk berbuat baik kepada sesama manusia",
            "Larangan berbuat kerusakan di muka bumi",
            "Larangan memakan harta anak yatim"
        ],
        "kunciJawaban": 3,
        "tipsBidang": "",
        "tipe": "pg"
    },
    {
        "id": 3,
        "materi": "Ilmu Tajwid",
        "pertanyaan": "Perhatikan bacaan Mad berikut!<br><br><span class='text-2xl font-bold font-arabic leading-loose text-center block' dir='rtl'>فِيمَا آتَاكَ</span><br>Pada potongan ayat tersebut mengandung hukum bacaan ....",
        "gambar": "",
        "kutipan": "",
        "opsi": [
            "Mad wajib muttasil",
            "Mad jaiz munfasil",
            "Mad Arid Lissukun",
            "Mad Iwad"
        ],
        "kunciJawaban": 1,
        "tipsBidang": "",
        "tipe": "pg"
    },
    {
        "id": 4,
        "materi": "Al-Qur'an",
        "pertanyaan": "Perhatikan ayat berikut!<br><br><span class='text-2xl font-bold font-arabic leading-loose text-center block' dir='rtl'>ظَهَرَ الْفَسَادُ فِي الْبَرِّ وَالْبَحْرِ بِمَا كَسَبَتْ أَيْدِي النَّاسِ</span><br>Kandungan makna yang sesuai dengan ayat tersebut adalah ....",
        "gambar": "",
        "kutipan": "",
        "opsi": [
            "Manusia adalah penyebab kerusakan alam",
            "Allah SWT menumbuhkan tanaman dengan air hujan",
            "Allah SWT menciptakan alam untuk manusia",
            "Manusia dianugerahi akal pikiran agar dapat berpikir dan bersyukur"
        ],
        "kunciJawaban": 0,
        "tipsBidang": "",
        "tipe": "pg"
    },
    {
        "id": 5,
        "materi": "Ilmu Tajwid (HOTS)",
        "pertanyaan": "Perhatikan lafaz berikut ini!<br>(1) <span class='font-arabic text-xl' dir='rtl'>مِنَ اللَّهِ</span><br>(2) <span class='font-arabic text-xl' dir='rtl'>بِسْمِ اللَّهِ</span><br>(3) <span class='font-arabic text-xl' dir='rtl'>رِزْقًا</span><br>(4) <span class='font-arabic text-xl' dir='rtl'>خَبِيرٌ</span> (dibaca waqaf)<br><br>Sesuai dengan kaidah makharijul huruf, manakah pasangan hukum bacaan Lam Jalalah Tarqiq dan Ra Tarqiq yang benar secara berurutan?",
        "gambar": "",
        "kutipan": "",
        "opsi": [
            "(1) dan (3)",
            "(2) dan (3)",
            "(2) dan (4)",
            "(1) dan (4)"
        ],
        "kunciJawaban": 2,
        "tipsBidang": "Bismillahi: Lam jalalah tarqiq karena didahului kasrah. Khabir (waqaf): Ra tarqiq karena didahului ya sukun.",
        "tipe": "pg"
    },
    {
        "id": 6,
        "materi": "Al-Qur'an",
        "pertanyaan": "Dalam QS Al Baqarah: 143, diharapkan umat Islam menjadi umat yang adil dan Moderat. Yang <span class='italic font-bold'>tidak</span> termasuk dari adil dan moderat yang dimaksud adalah ....",
        "gambar": "",
        "kutipan": "",
        "opsi": [
            "Memberikan perlakuan yang sama dalam menegakkan aturan kepada semua orang",
            "Lebih mengutamakan akhirat tanpa memikirkan kehidupan dunia",
            "Menempatkan segala sesuatu pada tempatnya",
            "Memberikan keseimbangan antara kepentingan dunia dan akhirat"
        ],
        "kunciJawaban": 1,
        "tipsBidang": "",
        "tipe": "pg"
    },
    {
        "id": 7,
        "materi": "Ilmu Tajwid",
        "pertanyaan": "Perhatikan bacaan QS. Al-Baqarah: 143 berikut!<br><br><span class='text-2xl font-bold font-arabic leading-loose text-center block' dir='rtl'>وَكَذَٰلِكَ جَعَلْنَاكُمْ أُمَّةً وَسَطًا لِّتَكُونُوا شُهَدَاءَ عَلَى النَّاسِ وَيَكُونَ الرَّسُولُ عَلَيْكُمْ شَهِيدًا</span><br>Hukum bacaan izhar syafawi pada ayat tersebut berjumlah ....",
        "gambar": "",
        "kutipan": "",
        "opsi": [
            "Empat",
            "Tiga",
            "Dua",
            "Satu"
        ],
        "kunciJawaban": 3,
        "tipsBidang": "",
        "tipe": "pg"
    },
    {
        "id": 8,
        "materi": "Al-Qur'an & Hadis (HOTS)",
        "pertanyaan": "Hadits adalah sumber hukum Islam kedua setelah Al Qur'an. Fungsi Hadits ada 4 yaitu, sebagai Bayān Al-Taqrīr (menetapkan dan memperkuat apa yang telah diterangkan di dalam Al-Qur'an), Bayān Al-Tafsīr (penjelasan terhadap ayat-ayat yang memerlukan perincian atau penjelasan lebih lanjut), Bayān Al-Tasyri' (memberikan kepastian hukum Islam yang tidak ada di Al-Qur'an) dan Bayan Al-Nasakh (membatalkan ketentuan terdahulu).<br><br><span class='italic'>Dan Kami tidak menurunkan Kitab (Al-Qur'an) ini kepadamu (Muhammad), melainkan agar engkau dapat menjelaskan kepada mereka apa yang mereka perselisihkan, serta menjadi petunjuk dan rahmat bagi orang-orang yang beriman.</span> Q.S. An-Nahl/16 : 64<br><br>Untuk memahami Q.S. An-Nahl/16 : 64 ini, fungsi Hadits yang paling tepat berdasarkan makna ayat tersebut adalah sebagai....",
        "gambar": "",
        "kutipan": "",
        "opsi": [
            "Bayān Al-Taqrīr",
            "Bayān Al-Tafsīr",
            "Bayān Al-Tasyri'",
            "Bayan Al-Nasakh"
        ],
        "kunciJawaban": 1,
        "tipsBidang": "",
        "tipe": "pg"
    },
    {
        "id": 9,
        "materi": "Ilmu Tajwid",
        "pertanyaan": "Perhatikan potongan kalimat berikut!<br><br><span class='text-2xl font-bold font-arabic leading-loose text-center block' dir='rtl'>عَلَيْكَ الْكِتَابَ</span><br>Hukum bacaan di atas adalah Alif Lam Qamariyah, sehingga cara membaca potongan ayat tersebut adalah ....",
        "gambar": "",
        "kutipan": "",
        "opsi": [
            "Huruf alif lam tidak dibaca, masuk ke huruf kaf",
            "Huruf alif lam dibaca melebur ke huruf Qamariyah",
            "Huruf alif lam dibaca idghom, melebur pada huruf di depannya",
            "Huruf alif lam dibaca jelas, tidak melebur pada huruf di depannya"
        ],
        "kunciJawaban": 3,
        "tipsBidang": "",
        "tipe": "pg"
    },
    {
        "id": 10,
        "materi": "Al-Qur'an & Tajwid (HOTS)",
        "pertanyaan": "Ilmuwan modern sepakat bahwa alam semesta bermula dari satu titik padat yang kemudian meledak (Teori Big Bang). Belasan abad sebelum teori ini ditemukan, Al-Qur'an telah mengisyaratkan bahwa langit dan bumi dulunya menyatu lalu dipisahkan oleh kuasa Allah SWT, sebagaimana tercantum dalam QS. Al-Anbiya : 30.<br><br><span class='text-2xl font-bold font-arabic leading-loose text-center block' dir='rtl'>أَنَّ السَّمَاوَاتِ وَالْأَرْضَ كَانَتَا رَتْقًا فَفَتَقْنَاهُمَا</span><br>Pada awal lafaz ayat di atas, kata <span class='font-arabic text-xl' dir='rtl'>أَنَّ</span> (Anna) ditebalkan secara pelafalan karena hukum bacaan Tajwidnya adalah ....",
        "gambar": "",
        "kutipan": "",
        "opsi": [
            "Mim bertasydid, hukumnya Ghunnah dan dibaca jelas tanpa ditahan",
            "Nun bertasydid, hukumnya Ghunnah Musyaddadah dan dibaca berdengung (ditahan 2 harakat)",
            "Nun sukun bertemu Sin, hukumnya Ikhfa dan dibaca samar",
            "Alif lam bertemu Sin, hukumnya Alif Lam Syamsiyah dan dibaca melebur"
        ],
        "kunciJawaban": 1,
        "tipsBidang": "",
        "tipe": "pg"
    }
]

file_path = 'js/data.js'
with open(file_path, 'r', encoding='utf-8') as f:
    text = f.read()

# Remove internal double quotes from the python dictionary strings to convert easily using string replacement or json.dumps 
repl = json.dumps(payload_10, indent=4, ensure_ascii=False)

# Let's replace within data.js directly!
# quizData2026 array holds placeholders. We want to find const quizData2026 = [ ... ];
# Since quizData2026 is at the bottom, we can match its start and end.
start_str = "const quizData2026 = [\n"

# But wait, quizData2026 contains 40 items. We only want to replace the first 10.
# The safest way is to parse quizData2026 (or just completely replace it with a combination of our 10 + 30 placeholders)

placeholders_30 = []
for i in range(11, 41):
    placeholders_30.append({
        "id": i,
        "materi": "Materi CCAI MAPSI 2026",
        "pertanyaan": f"[Wadah 2026] Soal Pilihan Ganda Nomor {i} : Menunggu input soal asli.",
        "gambar": "",
        "kutipan": "",
        "opsi": ["-", "-", "-", "-"],
        "kunciJawaban": 0,
        "tipsBidang": "",
        "tipe": "pg"
    })

full_array_40 = payload_10 + placeholders_30

# Find where quizData2026 is declared and replace the array!
match = re.search(r'(const quizData2026\s*=\s*)(\[.*?\])(;?)', text, re.DOTALL)
if match:
    prefix = match.group(1)
    suffix = match.group(3)
    new_array_json = json.dumps(full_array_40, indent=4, ensure_ascii=False)
    
    # Python json dumps puts double quotes around keys and values. It is completely safe JS syntax.
    # We must ensure there's NO unescaped double quote inside our payload strings.
    # In payload_10, we used single quotes inside strings where possible (like span classes, unescaped quotes).
    
    new_text = text[:match.start()] + prefix + new_array_json + suffix + text[match.end():]
    
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(new_text)
    print("Success replacing quizData2026")
else:
    print("Failed to find quizData2026")

const fs = require('fs');

let content = fs.readFileSync('js/materi.js', 'utf8');

const bab3Part2 = `
<!-- Detail Tata Cara Salat Jenazah -->
<div class="bg-surface-container-low p-8 rounded-[2rem] border border-outline-variant/20 shadow-sm mt-6 mb-12">
    <h4 class="font-bold text-lg text-tertiary mb-6 border-b border-outline-variant/20 pb-3 flex items-center"><span class="material-symbols-outlined mr-2">format_list_numbered</span> Tata Cara Lengkap Pelaksanaan 4 Takbir</h4>
    
    <div class="space-y-6">
        <!-- Niat & Berdiri -->
        <div class="flex gap-4">
            <div class="w-8 h-8 rounded-full bg-tertiary text-white flex items-center justify-center font-bold shrink-0 mt-1">1</div>
            <div class="flex-grow">
                <h5 class="font-bold text-on-surface">Niat & Berdiri</h5>
                <p class="text-sm text-on-surface-variant mb-3 leading-relaxed">Salat jenazah diwajibkan <strong>berdiri</strong>. <br>Posisi Imam: sejajar <strong>kepala</strong> (jika jenazah laki-laki) atau di <strong>tengah/perut</strong> (jika jenazah perempuan).</p>
                <div class="bg-white p-4 rounded-xl border border-outline-variant/10 shadow-sm">
                    <div class="text-right font-quran text-2xl text-on-surface mb-3 leading-loose" dir="rtl">أُصَلِّيْ عَلَى مَنْ صَلَّى عَلَيْهِ الْإِمَامُ مَأْمُوْمًا فَرْضًا لِلَّهِ تَعَالَى</div>
                    <p class="text-xs italic text-on-surface-variant border-t border-outline-variant/10 pt-2">"Aku niat salat atas jenazah yang disalati imam fardu karena Allah taala." (Contoh niat makmum)</p>
                </div>
            </div>
        </div>

        <!-- Takbir 1 -->
        <div class="flex gap-4">
            <div class="w-8 h-8 rounded-full bg-tertiary/20 text-tertiary flex items-center justify-center font-bold shrink-0 mt-1">2</div>
            <div>
                <h5 class="font-bold text-on-surface mb-1">Takbir Pertama (Takbiratul Ihram)</h5>
                <p class="text-sm text-on-surface-variant bg-surface-container p-3 rounded-lg">Setelah takbir pertama, diwajibkan membaca surat <strong>Al-Fatihah</strong>.</p>
            </div>
        </div>

        <!-- Takbir 2 -->
        <div class="flex gap-4">
            <div class="w-8 h-8 rounded-full bg-tertiary/20 text-tertiary flex items-center justify-center font-bold shrink-0 mt-1">3</div>
            <div>
                <h5 class="font-bold text-on-surface mb-1">Takbir Kedua</h5>
                <p class="text-sm text-on-surface-variant bg-surface-container p-3 rounded-lg">Setelah takbir kedua, membaca <strong>Salawat</strong> atas Nabi Muhammad saw.</p>
            </div>
        </div>

        <!-- Takbir 3 -->
        <div class="flex gap-4">
            <div class="w-8 h-8 rounded-full bg-tertiary/20 text-tertiary flex items-center justify-center font-bold shrink-0 mt-1">4</div>
            <div class="flex-grow">
                <h5 class="font-bold text-on-surface mb-2">Takbir Ketiga</h5>
                <p class="text-sm text-on-surface-variant mb-2">Membaca doa untuk pengampunan jenazah. Jika jenazah perempuan, kata ganti *"hu"* diganti menjadi *"ha"*.</p>
                <div class="bg-white p-4 rounded-xl border border-outline-variant/10 shadow-sm">
                    <div class="text-right font-quran text-2xl mb-3" dir="rtl">اللَّهُمَّ اغْفِرْ لَهُ وَارْحَمْهُ وَعَافِهِ وَاعْفُ عَنْهُ</div>
                    <p class="text-xs italic text-on-surface-variant border-t border-outline-variant/10 pt-2">"Ya Allah, ampunilah dia, rahmatilah dia, bebaskanlah dia, dan maafkanlah dia."</p>
                </div>
            </div>
        </div>

        <!-- Takbir 4 -->
        <div class="flex gap-4">
            <div class="w-8 h-8 rounded-full bg-tertiary/20 text-tertiary flex items-center justify-center font-bold shrink-0 mt-1">5</div>
            <div class="flex-grow">
                <h5 class="font-bold text-on-surface mb-2">Takbir Keempat</h5>
                <p class="text-sm text-on-surface-variant mb-2">Membaca doa penutup keselamatan (menurut pandangan ghalib/masyhur). Sebagian ulama juga membolehkan diam saja setelah takbir keempat.</p>
                <div class="bg-white p-4 rounded-xl border border-outline-variant/10 shadow-sm">
                    <div class="text-right font-quran text-2xl mb-3 leading-loose" dir="rtl">اللَّهُمَّ لَا تَحْرِمْنَا أَجْرَهُ وَلَاتَفْتِنَّا بَعْدَهُ وَاغْفِرْ لَنَا وَلَهُ</div>
                    <p class="text-xs italic text-on-surface-variant border-t border-outline-variant/10 pt-2">"Ya Allah, jangan haramkan kami dari pahalanya dan jangan beri fitnah (cobaan) bagi kami sepeninggalnya. Ampunilah kami dan ampunilah dia."</p>
                </div>
            </div>
        </div>

        <!-- Salam -->
        <div class="flex gap-4">
            <div class="w-8 h-8 rounded-full bg-tertiary text-white flex items-center justify-center font-bold shrink-0 mt-1">6</div>
            <div>
                <h5 class="font-bold text-on-surface mb-1">Salam Penutup</h5>
                <p class="text-sm text-on-surface-variant bg-surface-container p-3 rounded-lg">Mengucapkan salam dengan menoleh wajah ke kanan dan ke kiri untuk mengakhiri ibadah salat.</p>
            </div>
        </div>
    </div>
</div>
`;

// Extract bab 3 content and inject the new part.
const startPhrase = `"id": "kls8-smtganjil-bab3",`;
const nextPhraseRegex = /"id":\s*"[^"]+",/; 

let startIndex = content.indexOf(startPhrase);
if (startIndex !== -1) {
    let before = content.substring(0, startIndex);
    let afterStart = content.substring(startIndex + startPhrase.length);
    let match = afterStart.match(nextPhraseRegex);
    
    if (match) {
        let endIndex = startIndex + startPhrase.length + match.index;
        // The block string starts from startIndex to endIndex
        let babBlock = content.substring(startIndex, endIndex);
        
        // We inject the new part right before the backtick and comma ending the konten string
        // The format is `    }, {` or similar. Let's find the closing backtick inside babBlock.
        let kontenEnd = babBlock.lastIndexOf('`');
        if (kontenEnd !== -1) {
            let modBlock = babBlock.substring(0, kontenEnd) + '\n' + bab3Part2.replace(/`/g, '\\`') + '\n        ' + babBlock.substring(kontenEnd);
            
            content = before + modBlock + content.substring(endIndex);
            fs.writeFileSync('js/materi.js', content, 'utf8');
            console.log("Success appending bab 3 part 2");
        } else {
            console.error("Could not find backtick inside bab block.");
        }
    } else {
        // Fallback if it's the last element
        let endIndex = content.lastIndexOf(']');
        let babBlock = content.substring(startIndex, endIndex);
        let kontenEnd = babBlock.lastIndexOf('`');
        if (kontenEnd !== -1) {
            let modBlock = babBlock.substring(0, kontenEnd) + '\n' + bab3Part2.replace(/`/g, '\\`') + '\n        ' + babBlock.substring(kontenEnd);
            content = before + modBlock + content.substring(endIndex);
            fs.writeFileSync('js/materi.js', content, 'utf8');
            console.log("Success appending bab 3 part 2 (last item fallback).");
        }
    }
} else {
    console.log("Could not find bab 3");
}

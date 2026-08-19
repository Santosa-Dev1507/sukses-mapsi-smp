import codecs
import re

def update_malaikat():
    path = 'js/materi.js'
    with codecs.open(path, 'r', 'utf-8') as f:
        content = f.read()

    addition = """

<!-- 2. Nama Lain Malaikat -->
<h3 class="font-headline text-2xl font-bold text-tertiary mb-6 flex items-center bg-tertiary/5 w-max pr-6 py-2 rounded-r-full mt-10"><span class="material-symbols-outlined mr-3 bg-tertiary text-white w-12 h-12 flex items-center justify-center rounded-full shadow-md">badge</span> 2. Gelar & Nama Lain Malaikat</h3>
<div class="bg-surface-container-low p-6 md:p-8 rounded-[2.5rem] border border-outline-variant/20 shadow-[0_4px_15px_rgba(0,0,0,0.02)] mb-14">
    <p class="text-[14.5px] text-on-surface-variant leading-relaxed mb-6 font-medium text-justify">
        Selain nama-nama utamanya, beberapa malaikat memiliki gelar atau sebutan lain yang disebutkan dalam dalil Al-Qur'an maupun Hadis sesuai dengan sifat dan tugas spesifiknya:
    </p>
    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 text-sm font-medium text-on-surface-variant">
        <div class="bg-white p-5 rounded-2xl border border-outline-variant/30 shadow-sm">
            <div class="text-primary font-bold text-base mb-2 border-b border-outline-variant/20 pb-2">Jibril</div>
            <ul class="list-disc pl-4 space-y-1 text-[13px]">
                <li><span class="font-bold text-on-surface">Ruhul Amin:</span> Roh yang diberi kepercayaan.</li>
                <li><span class="font-bold text-on-surface">Ruhul Qudus:</span> Roh yang suci.</li>
                <li><span class="font-bold text-on-surface">Ruhul Haqq:</span> Roh kebenaran.</li>
                <li><span class="font-bold text-on-surface">Namus:</span> Pembawa wahyu/hukum rahasia.</li>
            </ul>
        </div>
        <div class="bg-white p-5 rounded-2xl border border-outline-variant/30 shadow-sm">
            <div class="text-tertiary font-bold text-base mb-2 border-b border-outline-variant/20 pb-2">Mikail & Israfil</div>
            <ul class="list-disc pl-4 space-y-1 text-[13px]">
                <li><span class="font-bold text-tertiary-on">Karubiyyuun:</span> Nama lain Malaikat Mikail.</li>
                <li><span class="font-bold text-tertiary-on">Sirafim:</span> Nama lain Malaikat Israfil.</li>
            </ul>
        </div>
        <div class="bg-white p-5 rounded-2xl border border-outline-variant/30 shadow-sm">
            <div class="text-error font-bold text-base mb-2 border-b border-outline-variant/20 pb-2">Izrail & Malik</div>
            <ul class="list-disc pl-4 space-y-1 text-[13px]">
                <li><span class="font-bold text-error-on">Malak al-Maut:</span> Malaikat Kematian (Izrail).</li>
                <li><span class="font-bold text-error-on">Zabaniyah:</span> Malaikat penyiksa/penjaga neraka (Malik) (QS Al-'Alaq).</li>
            </ul>
        </div>
        <div class="bg-white p-5 rounded-2xl border border-outline-variant/30 shadow-sm">
            <div class="text-on-surface font-bold text-base mb-2 border-b border-outline-variant/20 pb-2">Munkar & Nakir</div>
            <ul class="list-disc pl-4 space-y-1 text-[13px]">
                <li><span class="font-bold">Mubassar:</span> Nama lain Malaikat Munkar.</li>
                <li><span class="font-bold">Bassyir:</span> Nama lain Malaikat Nakir.</li>
            </ul>
        </div>
        <div class="bg-white p-5 rounded-2xl border border-outline-variant/30 shadow-sm">
            <div class="text-primary font-bold text-base mb-2 border-b border-outline-variant/20 pb-2">Rakib & Atid</div>
            <ul class="list-disc pl-4 space-y-1 text-[13px]">
                <li><span class="font-bold text-on-surface">Kiraman:</span> Nama lain Malaikat Rakib.</li>
                <li><span class="font-bold text-on-surface">Katibin:</span> Nama lain Malaikat Atid.</li>
                <li><span class="font-bold text-on-surface">Kiraman Katibin:</span> Malaikat Pencatat yang mulia (QS Al-Infitar: 11).</li>
            </ul>
        </div>
        <div class="bg-white p-5 rounded-2xl border border-outline-variant/30 shadow-sm flex flex-col justify-center">
            <div class="text-tertiary font-bold text-base mb-2 border-b border-outline-variant/20 pb-2">Ridwan</div>
            <ul class="list-disc pl-4 space-y-1 text-[13px]">
                <li><span class="font-bold text-tertiary-on">Muqorobbin:</span> Nama lain Malaikat Ridwan (yang didekatkan).</li>
            </ul>
        </div>
    </div>
</div>"""

    # We need to insert this right before <!-- 2. Refleksi Iman -->
    # And change "2. Refleksi Iman" to "3. Refleksi Iman"

    # Find the insertion point
    target = '<!-- 2. Refleksi Iman -->'
    if target not in content:
        print("Target not found!")
        return

    # Replace the numbering in the next heading
    replacement = addition + '\n<!-- 3. Refleksi Iman -->'
    new_content = content.replace(target, replacement)
    
    # Also update the heading text:
    # <h3 ...> 2. Dampak Mutasi ...</h3> -> <h3 ...> 3. Dampak Mutasi ...</h3>
    new_content = new_content.replace('</span> 2. Dampak Mutasi Psikologis Berasaskan Iman</h3>', '</span> 3. Dampak Mutasi Psikologis Berasaskan Iman</h3>')

    with codecs.open(path, 'w', 'utf-8') as f:
        f.write(new_content)

    print("Success")

if __name__ == '__main__':
    update_malaikat()

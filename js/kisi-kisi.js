document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("kisi-kisi-container");
    if (!container || typeof kisiKisiData === "undefined") return;

    container.innerHTML = ""; 

    kisiKisiData.forEach(item => {
        const card = document.createElement("div");
        card.className = "group bg-surface-container-lowest rounded-3xl p-8 border border-outline-variant/10 hover:border-primary/30 transition-all duration-300 shadow-sm hover:shadow-xl flex flex-col" + (item.lgColSpan2 ? " lg:col-span-2" : "");
        
        let poinHtml = "";
        item.poin.forEach(p => {
            poinHtml += `
            <li class="flex items-start gap-4">
                <span class="material-symbols-outlined text-primary text-[24px] mt-0.5">check_circle</span>
                <div class="flex flex-col gap-1">
                    <p class="text-base font-semibold">${p.teks}</p>
                    ${p.tag ? `<span class="w-fit text-[11px] font-bold px-2 py-0.5 ${p.tagColor} rounded uppercase">${p.tag}</span>` : ""}
                </div>
            </li>
            `;
        });

        card.innerHTML = `
            <div class="flex items-center justify-between mb-8">
                <div class="p-4 ${item.bgColor} rounded-2xl group-hover:bg-primary-fixed/30 transition-colors">
                    <span class="material-symbols-outlined text-primary text-4xl" data-icon="${item.ikon}">${item.ikon}</span>
                </div>
                <span class="text-[11px] font-bold uppercase tracking-widest ${item.pillColor} px-4 py-1.5 rounded-full">${item.kategori}</span>
            </div>
            <h3 class="font-headline font-bold text-2xl mb-6 text-on-background">${item.judul}</h3>
            <ul class="space-y-6 flex-grow">
                ${poinHtml}
            </ul>
        `;
        container.appendChild(card);
    });
});

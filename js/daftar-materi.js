document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("daftar-materi-container");
    if (!container || typeof materiData === "undefined") return;

    container.innerHTML = ""; // Bersihkan konten statis jika ada

    let readMateri = [];
    try {
        readMateri = JSON.parse(localStorage.getItem('readMateri') || '[]');
    } catch (e) {
        console.warn("Failed to parse readMateri from localStorage", e);
    }

    // Mengelompokkan berdasarkan kelas
    const groupByKelas = materiData.reduce((acc, item) => {
        if (!acc[item.kelas]) acc[item.kelas] = [];
        acc[item.kelas].push(item);
        return acc;
    }, {});

    Object.keys(groupByKelas).sort().forEach(kelas => {
        const details = document.createElement("details");
        // Kelas 7-9-9 dibuka by default agar langsung lihat materi ujian
        if (kelas === "9") details.open = true;
        
        details.className = "group bg-surface-container-low rounded-[2rem] border border-outline-variant/20 open:bg-white open:shadow-lg transition-all duration-300 mb-6";

        const summary = document.createElement("summary");
        summary.className = "flex justify-between items-center p-8 cursor-pointer list-none outline-none font-headline font-bold text-2xl text-on-surface hover:text-primary transition-colors";
        
        let iconHtml = '';
        if(kelas === "7") iconHtml = `<div class="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center shrink-0"><span class="material-symbols-outlined text-primary text-3xl">school</span></div>`;
        else if(kelas === "8") iconHtml = `<div class="w-14 h-14 bg-tertiary/10 rounded-2xl flex items-center justify-center shrink-0"><span class="material-symbols-outlined text-tertiary text-3xl">school</span></div>`;
        else if(kelas === "9") iconHtml = `<div class="w-14 h-14 bg-secondary/10 rounded-2xl flex items-center justify-center shrink-0"><span class="material-symbols-outlined text-secondary text-3xl">school</span></div>`;

        summary.innerHTML = `
            <div class="flex items-center gap-4">
                ${iconHtml}
                Map Materi Kelas ${kelas}
            </div>
            <div class="w-12 h-12 bg-surface-container-high flex items-center justify-center rounded-full group-open:bg-primary/10 transition-colors">
                <span class="material-symbols-outlined transition-transform duration-300 group-open:-rotate-180 text-on-surface-variant group-open:text-primary">expand_more</span>
            </div>
        `;
        
        const wrapper = document.createElement("div");
        wrapper.className = "p-8 pt-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 border-t border-outline-variant/10 mt-4 pt-8";

        groupByKelas[kelas].forEach(item => {
            const isRead = readMateri.includes(item.id);
            
            const card = document.createElement("a");
            card.href = `./detail-materi.html?bab=${item.id}`;
            card.onclick = () => { localStorage.setItem('selectedBab', item.id); };
            card.className = "group/card block bg-surface-container-lowest rounded-3xl p-8 border border-outline-variant/10 hover:border-primary/30 transition-all duration-300 shadow-sm hover:shadow-xl flex flex-col relative overflow-hidden";
            
            // Akses warna berbeda berdasarkan kelas
            let pillClass = "bg-secondary-container text-on-secondary-container";
            if(kelas === "7") pillClass = "bg-primary/10 text-primary font-bold";
            if(kelas === "8") pillClass = "bg-tertiary/10 text-tertiary font-bold";
            
            let iconClass = "bg-primary/10 text-primary group-hover/card:bg-primary/20";
            if(kelas === "7") iconClass = "bg-primary/10 text-primary group-hover/card:bg-primary/20";
            if(kelas === "8") iconClass = "bg-tertiary/10 text-tertiary group-hover/card:bg-tertiary/20";
            if(kelas === "9") iconClass = "bg-secondary/10 text-secondary group-hover/card:bg-secondary/20";

            card.innerHTML = `
                ${isRead ? '<div class="absolute top-0 right-0 w-16 h-16 bg-primary/10 rounded-bl-[2rem] flex items-center justify-center"><span class="material-symbols-outlined text-primary" style="font-variation-settings: \\\'FILL\\\' 1;">check_circle</span></div>' : ''}
                
                <div class="flex items-center justify-between mb-8">
                    <div class="p-4 rounded-2xl transition-colors ${iconClass}">
                        <span class="material-symbols-outlined text-4xl" data-icon="menu_book">menu_book</span>
                    </div>
                    <span class="text-[11px] font-bold uppercase tracking-widest ${pillClass} px-4 py-1.5 rounded-full">Kls ${item.kelas} ${item.semester.substring(0,6)}</span>
                </div>
                <h3 class="font-headline font-bold text-2xl mb-4 text-on-background group-hover/card:text-primary transition-colors">${item.bab}</h3>
                <p class="text-on-surface-variant font-medium text-sm leading-relaxed mb-6 flex-grow">${item.judul}</p>
                
                <div class="flex items-center justify-between mt-auto pt-6 border-t border-outline-variant/10">
                    <div class="flex items-center text-[12px] text-on-surface-variant font-bold">
                        <span class="material-symbols-outlined text-[14px] mr-1">schedule</span>
                        ${item.waktuBumper}
                    </div>
                    <span class="text-primary font-bold text-sm flex items-center gap-1 group-hover/card:gap-2 transition-all">Baca <span class="material-symbols-outlined text-[16px]">arrow_forward</span></span>
                </div>
            `;
            wrapper.appendChild(card);
        });

        details.appendChild(summary);
        details.appendChild(wrapper);
        container.appendChild(details);
    });
});

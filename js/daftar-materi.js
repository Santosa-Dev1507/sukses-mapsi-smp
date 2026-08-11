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
        // Kelas 9 dibuka by default agar langsung lihat materi ujian
        if (kelas === "9") details.open = true;
        
        details.className = "group bg-surface-container-low rounded-2xl sm:rounded-[2rem] border border-outline-variant/20 open:bg-white open:shadow-lg transition-all duration-300 mb-4 sm:mb-6";

        const summary = document.createElement("summary");
        summary.className = "flex justify-between items-center p-4 sm:p-6 md:p-8 cursor-pointer list-none outline-none font-headline font-bold text-lg sm:text-2xl text-on-surface hover:text-primary transition-colors";
        
        let iconHtml = '';
        if(kelas === "7") iconHtml = `<div class="w-10 h-10 sm:w-14 sm:h-14 bg-primary/10 rounded-xl sm:rounded-2xl flex items-center justify-center shrink-0"><span class="material-symbols-outlined text-primary text-2xl sm:text-3xl">school</span></div>`;
        else if(kelas === "8") iconHtml = `<div class="w-10 h-10 sm:w-14 sm:h-14 bg-tertiary/10 rounded-xl sm:rounded-2xl flex items-center justify-center shrink-0"><span class="material-symbols-outlined text-tertiary text-2xl sm:text-3xl">school</span></div>`;
        else if(kelas === "9") iconHtml = `<div class="w-10 h-10 sm:w-14 sm:h-14 bg-secondary/10 rounded-xl sm:rounded-2xl flex items-center justify-center shrink-0"><span class="material-symbols-outlined text-secondary text-2xl sm:text-3xl">school</span></div>`;

        summary.innerHTML = `
            <div class="flex items-center gap-3 sm:gap-4">
                ${iconHtml}
                <span>Map Materi Kelas ${kelas}</span>
            </div>
            <div class="w-9 h-9 sm:w-12 sm:h-12 bg-surface-container-high flex items-center justify-center rounded-full group-open:bg-primary/10 transition-colors shrink-0">
                <span class="material-symbols-outlined transition-transform duration-300 group-open:-rotate-180 text-on-surface-variant group-open:text-primary">expand_more</span>
            </div>
        `;
        
        // Grid wrapper: 1 col on mobile, 2 on md, 3 on lg
        const wrapper = document.createElement("div");
        wrapper.className = "px-4 sm:px-6 md:px-8 pb-4 sm:pb-6 md:pb-8 pt-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 border-t border-outline-variant/10 mt-2 pt-4 sm:pt-6";

        groupByKelas[kelas].forEach(item => {
            const isRead = readMateri.includes(item.id);
            
            const card = document.createElement("a");
            card.href = `./detail-materi.html?bab=${item.id}`;
            card.onclick = () => { localStorage.setItem('selectedBab', item.id); };
            card.className = "group/card block bg-surface-container-lowest rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 border border-outline-variant/10 hover:border-primary/30 transition-all duration-300 shadow-sm hover:shadow-xl flex flex-col relative overflow-hidden";
            
            // Warna berbeda berdasarkan kelas
            let pillClass = "bg-secondary-container text-on-secondary-container";
            if(kelas === "7") pillClass = "bg-primary/10 text-primary font-bold";
            if(kelas === "8") pillClass = "bg-tertiary/10 text-tertiary font-bold";
            
            let iconClass = "bg-primary/10 text-primary group-hover/card:bg-primary/20";
            if(kelas === "7") iconClass = "bg-primary/10 text-primary group-hover/card:bg-primary/20";
            if(kelas === "8") iconClass = "bg-tertiary/10 text-tertiary group-hover/card:bg-tertiary/20";
            if(kelas === "9") iconClass = "bg-secondary/10 text-secondary group-hover/card:bg-secondary/20";

            card.innerHTML = `
                ${isRead ? '<div class="absolute top-0 right-0 w-12 h-12 sm:w-16 sm:h-16 bg-primary/10 rounded-bl-[1.5rem] sm:rounded-bl-[2rem] flex items-center justify-center"><span class="material-symbols-outlined text-primary text-xl sm:text-2xl" style="font-variation-settings: \'FILL\' 1;">check_circle</span></div>' : ''}
                
                <div class="flex items-center justify-between mb-5 sm:mb-8">
                    <div class="p-3 sm:p-4 rounded-xl sm:rounded-2xl transition-colors ${iconClass}">
                        <span class="material-symbols-outlined text-3xl sm:text-4xl" data-icon="menu_book">menu_book</span>
                    </div>
                    <span class="text-[10px] sm:text-[11px] font-bold uppercase tracking-widest ${pillClass} px-3 sm:px-4 py-1 sm:py-1.5 rounded-full">${item.kelas} ${item.semester.substring(0,6)}</span>
                </div>
                <h3 class="font-headline font-bold text-lg sm:text-xl md:text-2xl mb-2 sm:mb-4 text-on-background group-hover/card:text-primary transition-colors leading-tight">${item.bab}</h3>
                <p class="text-on-surface-variant font-medium text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6 flex-grow">${item.judul}</p>
                
                <div class="flex items-center justify-between mt-auto pt-4 sm:pt-6 border-t border-outline-variant/10">
                    <div class="flex items-center text-[11px] sm:text-[12px] text-on-surface-variant font-bold">
                        <span class="material-symbols-outlined text-[14px] mr-1">schedule</span>
                        ${item.waktuBumper}
                    </div>
                    <span class="text-primary font-bold text-xs sm:text-sm flex items-center gap-1 group-hover/card:gap-2 transition-all">Baca <span class="material-symbols-outlined text-[14px] sm:text-[16px]">arrow_forward</span></span>
                </div>
            `;
            wrapper.appendChild(card);
        });

        details.appendChild(summary);
        details.appendChild(wrapper);
        container.appendChild(details);
    });
});

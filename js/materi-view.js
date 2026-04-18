document.addEventListener("DOMContentLoaded", () => {
    if (typeof materiData === "undefined") return;

    const urlParams = new URLSearchParams(window.location.search);
    const urlBab = urlParams.get('bab');
    const localBab = localStorage.getItem('selectedBab');
    const materiId = urlBab || localBab || 'kls9-smtganjil-bab1';
    
    console.log("Loading Materi ID:", materiId);

    const materi = materiData.find(m => m.id === materiId);
    if (!materi) {
        console.error("Materi not found for ID:", materiId);
        document.getElementById("materi-judul").textContent = "Materi Tidak Ditemukan";
        return;
    }

    // Dynamic Breadcrumb
    const breadcrumbCurrent = document.getElementById("breadcrumb-current");
    if (breadcrumbCurrent) {
        breadcrumbCurrent.textContent = materi.judul;
    }

    // Populate Data
    document.getElementById("materi-kelas").textContent = `Kelas ${materi.kelas} - ${materi.semester} - ${materi.bab}`;
    document.getElementById("materi-waktu").textContent = materi.waktuBumper;
    document.getElementById("materi-judul").textContent = materi.judul;
    document.getElementById("materi-konten").innerHTML = materi.konten;
    
    // Sidebar related
    const sidebar = document.getElementById("materi-terkait-list");
    if (sidebar) {
        sidebar.innerHTML = "";
        const readMateri = JSON.parse(localStorage.getItem('readMateri') || '[]');
        
        // Find 3 next topics
        const idx = materiData.findIndex(m => m.id === materiId);
        let related = materiData.slice(idx + 1, idx + 4);
        if (related.length < 3) {
            related = [...related, ...materiData.slice(0, 3 - related.length)];
        }

        related.forEach(rel => {
            const isRead = readMateri.includes(rel.id);
            const card = document.createElement("a");
            card.href = `./detail-materi.html?bab=${rel.id}`;
            card.onclick = () => { localStorage.setItem('selectedBab', rel.id); };
            card.className = "group block bg-surface-container-lowest p-4 rounded-2xl border border-transparent hover:border-primary/20 hover:shadow-md transition-all cursor-pointer";
            
            card.innerHTML = `
                <div class="flex items-center space-x-4 relative">
                    <div class="w-20 h-20 rounded-xl overflow-hidden shrink-0 relative">
                        <img alt="${rel.judul}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="${rel.gambar || 'images/islamic_mosque.png'}" onerror="this.src='images/islamic_mosque.png'"/>
                        ${isRead ? `<div class="absolute inset-0 bg-primary/20 backdrop-blur-[2px] flex items-center justify-center"><span class="material-symbols-outlined text-white text-3xl drop-shadow-md">check_circle</span></div>` : ''}
                    </div>
                    <div class="flex-1 min-w-0">
                        <span class="text-[10px] font-bold text-secondary uppercase tracking-widest">Kelas ${rel.kelas} ${rel.semester}</span>
                        <h4 class="font-bold text-on-surface truncate group-hover:text-primary transition-colors text-base mt-1">${rel.bab}</h4>
                        <div class="flex items-center text-[12px] text-on-surface-variant mt-1">
                            <span class="material-symbols-outlined text-[14px] mr-1">schedule</span>
                            ${rel.waktuBumper}
                        </div>
                    </div>
                </div>
            `;
            sidebar.appendChild(card);
        });
    }

    // Button Read status
    const btnRead = document.getElementById("btn-mark-read");
    if (btnRead) {
        const readMateri = JSON.parse(localStorage.getItem('readMateri') || '[]');
        
        const updateBtnState = () => {
            if (readMateri.includes(materiId)) {
                btnRead.className = "w-full sm:w-auto px-10 py-5 bg-surface-container-highest text-primary font-bold rounded-2xl border-2 border-primary/20 transition-all flex items-center justify-center space-x-3 pointer-events-none";
                btnRead.innerHTML = `<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">check_circle</span><span class="text-lg">Telah Selesai Dibaca</span>`;
            }
        };

        updateBtnState();

        btnRead.onclick = () => {
            if (!readMateri.includes(materiId)) {
                readMateri.push(materiId);
                localStorage.setItem('readMateri', JSON.stringify(readMateri));
                updateBtnState();
            }
        };
    }
});

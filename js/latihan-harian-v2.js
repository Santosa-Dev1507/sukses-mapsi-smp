document.addEventListener('DOMContentLoaded', () => {
    // ══════════════════════════════════════════════
    // ELEMENT DOM
    // ══════════════════════════════════════════════
    const elWelcome     = document.getElementById('welcome-section');
    const elArena       = document.getElementById('arena-latihan');
    const elTidakAda    = document.getElementById('tidak-ada-latihan');
    const elPilihTopik  = document.getElementById('pilih-topik');

    const elNamaDisplay = document.getElementById('nama-siswa-display');
    const elTopikJudul  = document.getElementById('topik-judul');
    const elTopikSub    = document.getElementById('topik-sub');
    const elJumlahSoal  = document.getElementById('jumlah-soal');
    const elSoalList    = document.getElementById('soal-list');
    const elBtnSubmit   = document.getElementById('btn-submit');
    const elBtnUlang    = document.getElementById('btn-ulang');
    const elBtnGanti    = document.getElementById('btn-ganti-nama');
    const elProgressBar = document.getElementById('progress-bar-latihan');
    const elProgressTxt = document.getElementById('progress-txt');
    const elScoreBanner = document.getElementById('score-banner');
    const elModalNama   = document.getElementById('modal-nama');
    const elInputNama   = document.getElementById('input-nama-latihan');
    const elInputKelas  = document.getElementById('input-kelas-latihan');
    const elBtnMulai    = document.getElementById('btn-mulai-latihan');

    // ══════════════════════════════════════════════
    // INISIALISASI
    // ══════════════════════════════════════════════
    const SHEET_URL = 'https://script.google.com/macros/s/AKfycbwQfgDcTK5fzkphsdawmcGpZjbOSwHAh_WadAie3UwCRLflSeFTLpFRIq4XGO81ykA1Iw/exec';
    let namaKini  = localStorage.getItem('nama_siswa_latihan')  || '';
    let kelasKini = localStorage.getItem('kelas_siswa_latihan') || '';

    let soalList     = [];
    let jawabanSiswa = [];
    let startTime    = 0;
    let sudahSubmit  = false;
    let topikAktif   = "";

    function init() {
        const urlParams = new URLSearchParams(window.location.search);
        const urlId     = urlParams.get('soal');

        // Hide "pilih topik" since we don't use it in V2
        if (elPilihTopik) elPilihTopik.classList.add('hidden');

        if (!urlId || !DATA_LATIHAN_V2[urlId]) {
            const pesan = document.getElementById('pesan-tidak-ada');
            if (pesan) pesan.innerHTML = "Latihan tidak ditemukan atau belum dijadwalkan.";
            show(elTidakAda);
            hide(elWelcome);
            hide(elArena);
            return;
        }

        const data = DATA_LATIHAN_V2[urlId];
        topikAktif = data.judul || urlId;
        soalList = data.soal || [];
        
        jawabanSiswa = soalList.map(soal => {
            if (soal.type === 'PGK') return [];
            return null;
        });

        if (elTopikJudul) elTopikJudul.textContent = topikAktif;
        if (elTopikSub)   elTopikSub.textContent   = "24 Soal (PG, PGK, Benar/Salah)";
        if (elJumlahSoal) elJumlahSoal.textContent = soalList.length;

        cekIdentitas();
    }

    function cekIdentitas() {
        if (!namaKini || !kelasKini) {
            show(elModalNama);
        } else {
            tampilWelcome();
        }
    }

    if (elBtnMulai) {
        elBtnMulai.addEventListener('click', () => {
            const nama  = elInputNama  ? elInputNama.value.trim()  : '';
            const kelas = elInputKelas ? elInputKelas.value.trim() : '';

            if (!nama) { alert('Silakan isi Nama Lengkap'); return; }
            if (!kelas) { alert('Silakan pilih Kelas'); return; }

            namaKini  = nama;
            kelasKini = kelas;

            localStorage.setItem('nama_siswa_latihan',  namaKini);
            localStorage.setItem('kelas_siswa_latihan', kelasKini);

            hide(elModalNama);
            tampilWelcome();
        });
    }

    if (elBtnGanti) {
        elBtnGanti.addEventListener('click', () => {
            if (elInputNama)  elInputNama.value  = namaKini;
            if (elInputKelas) elInputKelas.value = kelasKini;
            show(elModalNama);
        });
    }

    function tampilWelcome() {
        if (elNamaDisplay) {
            elNamaDisplay.textContent = `${namaKini} (${kelasKini})`;
        }
        show(elWelcome);
        hide(elArena);
        hide(elTidakAda);
    }

    const elBtnMulaiKerjakan = document.getElementById('btn-mulai-kerjakan');
    if (elBtnMulaiKerjakan) {
        elBtnMulaiKerjakan.addEventListener('click', () => {
            startTime = Date.now();
            renderSemua();
            show(elArena);
            hide(elWelcome);
            elArena.scrollIntoView({ behavior: 'smooth' });
        });
    }

    // ══════════════════════════════════════════════
    // RENDER SEMUA SOAL (DUKUNG PG, PGK, BS)
    // ══════════════════════════════════════════════
    function renderSemua() {
        if (!elSoalList) return;
        elSoalList.innerHTML = '';
        soalList.forEach((soal, idx) => {
            elSoalList.appendChild(buatKartuSoal(soal, idx));
        });
        updateProgress();
    }

    function buatKartuSoal(soal, idx) {
        const card = document.createElement('div');
        card.id        = `soal-card-${idx}`;
        card.className = 'soal-card bg-surface-container-lowest rounded-2xl sm:rounded-3xl p-5 sm:p-8 border border-outline-variant/10 shadow-sm transition-all duration-300';

        let badgeType = '';
        if (soal.type === 'PGK') badgeType = '<span class="text-xs font-bold bg-amber-100 text-amber-800 px-2.5 py-1 rounded-full">PG Kompleks (Bisa Lebih Dari Satu)</span>';
        else if (soal.type === 'BS') badgeType = '<span class="text-xs font-bold bg-blue-100 text-blue-800 px-2.5 py-1 rounded-full">Benar / Salah</span>';
        else badgeType = '<span class="text-xs font-bold bg-surface-container text-on-surface-variant px-2.5 py-1 rounded-full">Pilihan Ganda</span>';

        const headerHtml = `
            <div class="flex flex-wrap items-center justify-between gap-2 mb-4 pb-4 border-b border-outline-variant/10">
                <div class="flex items-center gap-2">
                    <span class="w-8 h-8 rounded-full bg-primary text-white font-bold text-sm flex items-center justify-center">${idx + 1}</span>
                    <span class="text-xs font-semibold text-on-surface-variant/70">Soal Latihan</span>
                </div>
                <div class="flex items-center gap-2">
                    ${badgeType}
                </div>
            </div>`;

        let bodyHtml = '';

        bodyHtml += `
            <p class="font-headline font-bold text-base sm:text-lg text-on-surface mb-5 leading-relaxed">
                ${soal.q.replace(/\n/g, '<br>')}
            </p>`;

        if (soal.type === 'PGK') {
            bodyHtml += `<div class="space-y-3">`;
            soal.opt.forEach((opsiTxt, oIdx) => {
                const checked = (jawabanSiswa[idx] || []).includes(oIdx);
                bodyHtml += `
                    <label class="flex items-start gap-3.5 p-4 rounded-xl border border-outline-variant/20 hover:border-primary/50 hover:bg-primary/5 cursor-pointer transition-all ${checked ? 'border-primary bg-primary/5 font-semibold' : ''}">
                        <input type="checkbox" name="soal-${idx}" value="${oIdx}" ${checked ? 'checked' : ''}
                            onchange="pilihJawabanPGK(${idx}, ${oIdx}, this.checked)"
                            class="mt-1 w-4 h-4 text-primary rounded border-outline-variant focus:ring-primary shrink-0">
                        <span class="text-sm sm:text-base text-on-surface font-normal leading-relaxed">${opsiTxt}</span>
                    </label>`;
            });
            bodyHtml += `</div>`;
        } else {
            // PG or BS
            const HURUF = ['A', 'B', 'C', 'D', 'E'];
            bodyHtml += `<div class="space-y-3">`;
            soal.opt.forEach((opsiTxt, oIdx) => {
                const checked = jawabanSiswa[idx] === oIdx;
                let circleText = soal.type === 'BS' ? (oIdx === 0 ? 'B' : 'S') : (HURUF[oIdx] || oIdx + 1);
                bodyHtml += `
                    <label class="flex items-start gap-3.5 p-4 rounded-xl border border-outline-variant/20 hover:border-primary/50 hover:bg-primary/5 cursor-pointer transition-all ${checked ? 'border-primary bg-primary/5 font-semibold' : ''}">
                        <input type="radio" name="soal-${idx}" value="${oIdx}" ${checked ? 'checked' : ''}
                            onchange="pilihJawabanPG(${idx}, ${oIdx})"
                            class="mt-1 w-4 h-4 text-primary border-outline-variant focus:ring-primary shrink-0">
                        <span class="w-6 h-6 rounded-full bg-surface-container text-on-surface-variant text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">${circleText}</span>
                        <span class="text-sm sm:text-base text-on-surface font-normal leading-relaxed">${opsiTxt}</span>
                    </label>`;
            });
            bodyHtml += `</div>`;
        }

        bodyHtml += `<div id="hasil-soal-${idx}" class="hidden mt-4"></div>`;

        card.innerHTML = headerHtml + bodyHtml;
        return card;
    }

    // ══════════════════════════════════════════════
    // INTERAKSI JAWABAN
    // ══════════════════════════════════════════════
    window.pilihJawabanPG = (soalIdx, opsiIdx) => {
        if (sudahSubmit) return;
        jawabanSiswa[soalIdx] = opsiIdx;
        updateProgress();
        renderUlangKartu(soalIdx);
    };

    window.pilihJawabanPGK = (soalIdx, opsiIdx, isChecked) => {
        if (sudahSubmit) return;
        if (!Array.isArray(jawabanSiswa[soalIdx])) jawabanSiswa[soalIdx] = [];

        if (isChecked) {
            if (!jawabanSiswa[soalIdx].includes(opsiIdx)) {
                jawabanSiswa[soalIdx].push(opsiIdx);
            }
        } else {
            jawabanSiswa[soalIdx] = jawabanSiswa[soalIdx].filter(i => i !== opsiIdx);
        }
        updateProgress();
    };

    function renderUlangKartu(idx) {
        const oldCard = document.getElementById(`soal-card-${idx}`);
        if (oldCard) {
            const newCard = buatKartuSoal(soalList[idx], idx);
            oldCard.replaceWith(newCard);
        }
    }

    function updateProgress() {
        let dijawab = 0;
        soalList.forEach((soal, idx) => {
            const j = jawabanSiswa[idx];
            if (soal.type === 'PGK') {
                if (Array.isArray(j) && j.length > 0) dijawab++;
            } else {
                if (j !== null && j !== undefined) dijawab++;
            }
        });

        const total  = soalList.length;
        const persen = total > 0 ? Math.round((dijawab / total) * 100) : 0;

        if (elProgressTxt)   elProgressTxt.textContent = `${dijawab} / ${total} soal dijawab`;
        if (elProgressBar)   elProgressBar.style.width = `${persen}%`;

        if (elBtnSubmit) {
            if (dijawab > 0) {
                elBtnSubmit.disabled = false;
                elBtnSubmit.classList.remove('opacity-50', 'cursor-not-allowed');
            } else {
                elBtnSubmit.disabled = true;
                elBtnSubmit.classList.add('opacity-50', 'cursor-not-allowed');
            }
        }
    }

    // ══════════════════════════════════════════════
    // SUBMIT & KOREKSI
    // ══════════════════════════════════════════════
    if (elBtnSubmit) {
        elBtnSubmit.addEventListener('click', () => {
            if (sudahSubmit) return;

            const belumDijawab = jawabanSiswa.filter((j, idx) => {
                const s = soalList[idx];
                if (s.type === 'PGK') return !Array.isArray(j) || j.length === 0;
                return j === null || j === undefined;
            }).length;

            if (belumDijawab > 0) {
                if (!confirm(`Masih ada ${belumDijawab} soal yang belum dijawab. Yakin mau kirim sekarang?`)) {
                    return;
                }
            }

            sudahSubmit = true;
            koreksiDanTampil();
        });
    }

    function koreksiDanTampil() {
        let benar = 0;
        const salahNomor = [];
        const durasi = Math.max(1, Math.round((Date.now() - startTime) / 60000));

        soalList.forEach((soal, idx) => {
            const j = jawabanSiswa[idx];
            let correct = false;

            if (soal.type === 'PGK') {
                const k = Array.isArray(soal.a) ? soal.a : [];
                const s = Array.isArray(j) ? j : [];
                // Harus benar semua dan panjang sama
                correct = k.length === s.length && k.every(val => s.includes(val));
            } else {
                const k = Array.isArray(soal.a) ? soal.a[0] : soal.a;
                correct = (j === k);
            }

            if (correct) {
                benar++;
            } else {
                salahNomor.push(idx + 1);
            }

            const hasilEl = document.getElementById(`hasil-soal-${idx}`);
            if (hasilEl) {
                if (correct) {
                    hasilEl.innerHTML = `
                        <div class="flex items-start gap-3 text-emerald-700 bg-emerald-50 p-4 rounded-xl border border-emerald-200">
                            <span class="material-symbols-outlined text-emerald-600 shrink-0 mt-0.5 font-bold">check_circle</span>
                            <div>
                                <p class="font-bold text-sm sm:text-base">Jawaban Benar!</p>
                            </div>
                        </div>`;
                } else {
                    let kunciText = '';
                    if (soal.type === 'PGK') {
                        const HURUF = ['A', 'B', 'C', 'D', 'E'];
                        const kArr  = Array.isArray(soal.a) ? soal.a : [];
                        kunciText   = kArr.map(kIdx => `${HURUF[kIdx] || kIdx + 1}. ${soal.opt[kIdx]}`).join('<br>');
                    } else if (soal.type === 'BS') {
                        const k = Array.isArray(soal.a) ? soal.a[0] : soal.a;
                        kunciText = soal.opt[k];
                    } else {
                        const HURUF = ['A', 'B', 'C', 'D', 'E'];
                        const k = Array.isArray(soal.a) ? soal.a[0] : soal.a;
                        kunciText   = `${HURUF[k] || k + 1}. ${soal.opt[k]}`;
                    }

                    hasilEl.innerHTML = `
                        <div class="flex items-start gap-3 text-red-700 bg-red-50 p-4 rounded-xl border border-red-200">
                            <span class="material-symbols-outlined text-red-600 shrink-0 mt-0.5 font-bold">cancel</span>
                            <div class="text-sm">
                                <p class="font-bold text-sm sm:text-base">Jawaban Kurang Tepat</p>
                                <p class="text-xs sm:text-sm mt-1"><strong>Kunci Jawaban yang benar:</strong><br>${kunciText}</p>
                            </div>
                        </div>`;
                }
                hasilEl.classList.remove('hidden');
            }

            const cardEl = document.getElementById(`soal-card-${idx}`);
            if (cardEl) {
                cardEl.classList.add(correct ? 'border-emerald-300' : 'border-red-300');
                cardEl.classList.remove('border-outline-variant/10');
            }
        });

        tampilHasil(benar, soalList.length, salahNomor, durasi);
        kirimLaporan(benar, soalList.length, salahNomor, durasi);
    }

    // ══════════════════════════════════════════════
    // TAMPIL HASIL
    // ══════════════════════════════════════════════
    function tampilHasil(benar, total, salahNomor, durasi) {
        const persen = Math.round((benar / total) * 100);
        const grade  = persen >= 90 ? '🏆 Luar Biasa!' : persen >= 75 ? '👍 Bagus!' : persen >= 60 ? '✨ Cukup Baik' : '📚 Perlu Belajar Lagi';

        if (elScoreBanner) {
            elScoreBanner.innerHTML = `
                <div class="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 bg-surface-container-lowest rounded-2xl sm:rounded-[2rem] p-5 sm:p-8 border shadow-lg ${persen >= 75 ? 'border-emerald-300 bg-emerald-50/30' : 'border-red-200 bg-red-50/20'}">
                    <div class="flex items-center gap-4 sm:gap-6">
                        <div class="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl ${persen >= 75 ? 'bg-emerald-500' : 'bg-red-400'} flex flex-col items-center justify-center text-white shrink-0 shadow-lg">
                            <span class="font-headline font-extrabold text-2xl sm:text-3xl leading-none">${benar}</span>
                            <span class="text-[10px] sm:text-xs opacity-80">/${total}</span>
                        </div>
                        <div>
                            <p class="font-headline font-extrabold text-2xl sm:text-3xl ${persen >= 75 ? 'text-emerald-700' : 'text-red-600'}">${persen}% ${grade}</p>
                            <p class="text-sm text-on-surface-variant mt-1">${benar} benar · ${salahNomor.length} salah · ${durasi} menit</p>
                            ${salahNomor.length > 0 ? `<p class="text-xs text-red-500 mt-1">Salah di nomor: ${salahNomor.join(', ')}</p>` : ''}
                        </div>
                    </div>
                    <button id="btn-scroll-soal" class="px-5 py-3 bg-primary text-white font-bold rounded-xl text-sm hover:bg-primary/90 active:scale-95 transition-all whitespace-nowrap">
                        Lihat Kunci ↓
                    </button>
                </div>`;

            show(elScoreBanner);
            elScoreBanner.scrollIntoView({ behavior: 'smooth', block: 'start' });

            const btnScroll = document.getElementById('btn-scroll-soal');
            if (btnScroll) {
                btnScroll.addEventListener('click', () => elSoalList.scrollIntoView({ behavior: 'smooth' }));
            }
        }

        hide(elBtnSubmit);
        show(elBtnUlang);
    }

    if (elBtnUlang) {
        elBtnUlang.addEventListener('click', () => {
            sudahSubmit  = false;
            jawabanSiswa = soalList.map(soal => {
                if (soal.type === 'PGK') return [];
                return null;
            });
            startTime    = Date.now();
            hide(elScoreBanner);
            show(elBtnSubmit);
            hide(elBtnUlang);
            renderSemua();
            elArena.scrollIntoView({ behavior: 'smooth' });
        });
    }

    // ══════════════════════════════════════════════
    // KIRIM LAPORAN KE GOOGLE SHEETS
    // ══════════════════════════════════════════════
    function kirimLaporan(benar, total, salahNomor, durasi) {
        const payload = {
            action    : 'latihan_harian',
            nama      : namaKini,
            kelas     : kelasKini,
            topik     : topikAktif,
            benar     : benar,
            total     : total,
            persen    : Math.round((benar / total) * 100),
            durasi    : durasi,
            salahNomor: salahNomor.join(','),
            timestamp : new Date().toISOString()
        };

        fetch(SHEET_URL, {
            method : 'POST',
            mode   : 'no-cors',
            headers: { 'Content-Type': 'application/json' },
            body   : JSON.stringify(payload)
        }).catch(err => console.error('Gagal kirim laporan harian:', err));
    }

    // ══════════════════════════════════════════════
    // HELPER
    // ══════════════════════════════════════════════
    function show(el) { if (el) { el.classList.remove('hidden'); } }
    function hide(el) { if (el) { el.classList.add('hidden'); } }

    init();
});

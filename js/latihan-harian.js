document.addEventListener('DOMContentLoaded', () => {
    // ══════════════════════════════════════════════
    // ELEMENT DOM
    // ══════════════════════════════════════════════
    const elWelcome     = document.getElementById('welcome-section');
    const elArena       = document.getElementById('arena-latihan');
    const elTidakAda    = document.getElementById('tidak-ada-latihan');
    const elHasil       = document.getElementById('hasil-section');
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
    const GAS_URL   = 'https://script.google.com/macros/s/AKfycbwQfgDcTK5fzkphsdawmcGpZjbOSwHAh_WadAie3UwCRLflSeFTLpFRIq4XGO81ykA1Iw/exec';
    const INFO_SET  = (typeof infoLatihan !== 'undefined') ? infoLatihan : {};
    let setIdsHariIni = [];
    let setIdDipilih  = null;

    let namaKini  = localStorage.getItem('nama_siswa_latihan')  || '';
    let kelasKini = localStorage.getItem('kelas_siswa_latihan') || '';

    let soalList     = [];
    let jawabanSiswa = [];
    let startTime    = 0;
    let sudahSubmit  = false;

    // Helper normalisasi kunci objek tanggal ke YYYY-MM-DD
    function normalisasiJadwal(rawObj) {
        const res = {};
        if (!rawObj || typeof rawObj !== 'object') return res;
        for (let k in rawObj) {
            if (!rawObj[k]) continue;
            let newKey = k;
            if (!/^\d{4}-\d{2}-\d{2}$/.test(k)) {
                const d = new Date(k);
                if (!isNaN(d.getTime())) {
                    newKey = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
                } else {
                    continue;
                }
            }
            if (!res[newKey]) {
                res[newKey] = rawObj[k];
            } else {
                const arr1 = Array.isArray(res[newKey]) ? res[newKey] : [res[newKey]];
                const arr2 = Array.isArray(rawObj[k]) ? rawObj[k] : [rawObj[k]];
                res[newKey] = arr1.concat(arr2);
            }
        }
        return res;
    }

    async function fetchJadwalSheet() {
        try {
            const ctrl = new AbortController();
            const tid  = setTimeout(() => ctrl.abort(), 4000);
            const res  = await fetch(GAS_URL + '?action=getJadwalLatihan', { cache: 'no-store', signal: ctrl.signal });
            clearTimeout(tid);
            const rawData = await res.json();
            const data    = normalisasiJadwal(rawData);

            const lokalRaw = JSON.parse(localStorage.getItem('mapsi_jadwal_latihan') || '{}');
            const lokal    = normalisasiJadwal(lokalRaw);

            const gabung   = Object.assign({}, lokal, data);
            localStorage.setItem('mapsi_jadwal_latihan', JSON.stringify(gabung));
            return gabung;
        } catch (_) {
            const lokalRaw = JSON.parse(localStorage.getItem('mapsi_jadwal_latihan') || '{}');
            return normalisasiJadwal(lokalRaw);
        }
    }

    async function init() {
        const today = getTodayStr();
        const dBesok = new Date();
        dBesok.setDate(dBesok.getDate() + 1);
        const tomorrow = `${dBesok.getFullYear()}-${String(dBesok.getMonth() + 1).padStart(2, '0')}-${String(dBesok.getDate()).padStart(2, '0')}`;

        // 1. Cek parameter URL (?id=... / ?set=... / ?topik=...)
        const urlParams = new URLSearchParams(window.location.search);
        const urlId     = urlParams.get('id') || urlParams.get('set') || urlParams.get('topik');

        const jadwalLS = await fetchJadwalSheet();
        const jadwalJS = (typeof jadwalLatihan !== 'undefined') ? normalisasiJadwal(jadwalLatihan) : {};
        const jadwalGabung = Object.assign({}, jadwalJS, jadwalLS);

        if (urlId) {
            const info  = INFO_SET[urlId] || {};
            const topik = { id: urlId, label: info.judul || urlId };
            setIdDipilih = urlId;
            loadSoal(topik, today, jadwalGabung);
            return;
        }

        let allTopics = [];
        let addedIds  = new Set();

        // Kumpulkan topik tanggal <= today
        const sortedDates = Object.keys(jadwalGabung).sort();
        for (const tgl of sortedDates) {
            if (tgl <= tomorrow) {
                const val    = jadwalGabung[tgl];
                const topiks = normalisasiTopik(val);
                for (const top of topiks) {
                    if (!addedIds.has(top.id)) {
                        addedIds.add(top.id);
                        allTopics.push(top);
                    }
                }
            }
        }

        setIdsHariIni = allTopics;

        if (setIdsHariIni.length === 0) {
            tampilTidakAda(today, jadwalGabung);
            return;
        }

        if (setIdsHariIni.length === 1) {
            setIdDipilih = setIdsHariIni[0].id;
            loadSoal(setIdsHariIni[0], today, jadwalGabung);
        } else {
            tampilPilihTopik(today, jadwalGabung);
        }
    }

    function normalisasiTopik(val) {
        if (!val) return [];
        if (Array.isArray(val) && val.length && typeof val[0] === 'object') return val;
        const arr = Array.isArray(val) ? val : [val];
        return arr.map(id => {
            const info = INFO_SET[id] || {};
            return { id: String(id), label: info.judul || String(id) };
        });
    }

    // ── Tampilkan kartu pilih topik ──
    function tampilPilihTopik(today, jadwalGabung) {
        const elPilih = document.getElementById('pilih-topik');
        const elKartu = document.getElementById('kartu-topik');
        if (!elPilih || !elKartu) { tampilTidakAda(today, jadwalGabung); return; }

        const WARNA = [
            'from-emerald-500 to-teal-600',
            'from-blue-500 to-indigo-600',
            'from-amber-500 to-orange-600',
            'from-rose-500 to-pink-600',
            'from-purple-500 to-violet-600',
        ];
        const IKON = ['menu_book', 'mosque', 'history_edu', 'translate', 'star'];

        elKartu.innerHTML = '';
        setIdsHariIni.forEach((topik, idx) => {
            const id        = topik.id;
            const label     = topik.label || id;
            const info      = INFO_SET[id] || {};
            const doneKey   = `latihan_done_${today}_${id}`;
            const sudahDone = !!localStorage.getItem(doneKey);
            const grad      = WARNA[idx % WARNA.length];
            const ikon      = info.ikon || IKON[idx % IKON.length];

            const card = document.createElement('button');
            card.className = `w-full text-left rounded-2xl p-5 bg-gradient-to-r ${grad} text-white shadow-lg hover:scale-[1.01] active:scale-[0.99] transition-all fade-up flex items-center gap-5`;
            card.style.animationDelay = `${idx * 80}ms`;
            card.innerHTML = `
                <div class="w-14 h-14 shrink-0 rounded-xl bg-white/20 flex items-center justify-center">
                    <span class="material-symbols-outlined text-3xl" style="font-variation-settings:&quot;FILL&quot; 1;">${ikon}</span>
                </div>
                <div class="flex-1 min-w-0">
                    <p class="font-headline font-extrabold text-lg leading-tight">${label}</p>
                    <p class="text-white/70 text-xs mt-0.5">${info.subjudul || ''}</p>
                </div>
                <div class="shrink-0">
                    ${sudahDone
                        ? '<span class="inline-flex items-center gap-1 bg-white/25 text-white text-xs font-bold px-3 py-1 rounded-full"><span class="material-symbols-outlined text-sm" style="font-variation-settings:&quot;FILL&quot; 1;">check_circle</span>Selesai</span>'
                        : '<span class="material-symbols-outlined text-3xl opacity-70">arrow_forward</span>'
                    }
                </div>`;
            card.addEventListener('click', () => pilihTopik(topik, today, jadwalGabung));
            elKartu.appendChild(card);
        });

        hide(elTidakAda); hide(elWelcome); hide(elArena); hide(elHasil);
        elPilih.classList.remove('hidden');
    }

    function pilihTopik(topik, today, jadwalGabung) {
        setIdDipilih = topik.id;
        const elPilihTopik = document.getElementById('pilih-topik');
        if (elPilihTopik) elPilihTopik.classList.add('hidden');
        loadSoal(topik, today, jadwalGabung);
    }

    function loadSoal(topik, today, jadwalGabung) {
        const id    = typeof topik === 'string' ? topik : topik.id;
        const label = typeof topik === 'string' ? (INFO_SET[topik]?.judul || topik) : (topik.label || id);
        const info  = INFO_SET[id] || {};

        if (elTopikJudul) elTopikJudul.textContent = label;
        if (elTopikSub)   elTopikSub.textContent   = info.subjudul || '';

        if (typeof window !== 'undefined') window.latihanData = undefined;

        const script   = document.createElement('script');
        script.src     = `js/latihan/${id}.js?v=${Date.now()}`;
        script.onload  = () => {
            if (typeof latihanData !== 'undefined' && latihanData.length > 0) {
                soalList     = [...latihanData];
                jawabanSiswa = soalList.map(soal => {
                    if (soal.tipe === 'pgk' || soal.tipe === 'pga') return [];
                    if (soal.tipe === 'menjodohkan') return new Array(soal.kolomKiri.length).fill(null);
                    return null;
                });
                if (elJumlahSoal) elJumlahSoal.textContent = soalList.length;
                cekIdentitas();
            } else {
                tampilTidakAda(today, jadwalGabung);
            }
        };
        script.onerror = () => tampilTidakAda(today, jadwalGabung);
        document.head.appendChild(script);
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
        hide(elHasil);
        hide(elTidakAda);
    }

    function tampilTidakAda(today, jadwalObj) {
        const berikutnya = getJadwalBerikutnya(today, jadwalObj || {});
        const elPesan    = document.getElementById('pesan-tidak-ada');
        if (elPesan && berikutnya) {
            elPesan.innerHTML = `Tidak ada latihan hari ini.<br><span class="text-sm font-normal">Jadwal berikutnya: <strong>${formatTanggal(berikutnya.tgl)}</strong></span>`;
        } else if (elPesan) {
            elPesan.innerHTML = `Tidak ada latihan hari ini.`;
        }
        show(elTidakAda);
        hide(elWelcome);
        hide(elArena);
        hide(elHasil);
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
    // RENDER SEMUA SOAL (DUKUNG PG, PGK, MENJODOHKAN)
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
        const levelWarna = { 'L1': 'bg-primary/10 text-primary', 'L2': 'bg-secondary/10 text-secondary', 'L3': 'bg-error/10 text-error' };
        const levelLabel = { 'L1': 'L1 · Pemahaman', 'L2': 'L2 · Penerapan', 'L3': 'L3 · Penalaran' };

        const card = document.createElement('div');
        card.id        = `soal-card-${idx}`;
        card.className = 'soal-card bg-surface-container-lowest rounded-2xl sm:rounded-3xl p-5 sm:p-8 border border-outline-variant/10 shadow-sm transition-all duration-300';

        const headerHtml = `
            <div class="flex flex-wrap items-center justify-between gap-2 mb-4 pb-4 border-b border-outline-variant/10">
                <div class="flex items-center gap-2">
                    <span class="w-8 h-8 rounded-full bg-primary text-white font-bold text-sm flex items-center justify-center">${idx + 1}</span>
                    <span class="text-xs font-semibold text-on-surface-variant/70">${soal.topik || 'Soal'}</span>
                </div>
                <div class="flex items-center gap-2">
                    ${soal.tipe === 'pgk' ? '<span class="text-xs font-bold bg-amber-100 text-amber-800 px-2.5 py-1 rounded-full">PG Kompleks (Pilih 2)</span>' : ''}
                    ${soal.tipe === 'menjodohkan' ? '<span class="text-xs font-bold bg-purple-100 text-purple-800 px-2.5 py-1 rounded-full">Menjodohkan</span>' : ''}
                    <span class="text-xs font-bold px-2.5 py-1 rounded-full ${levelWarna[soal.level] || 'bg-surface-container text-on-surface-variant'}">${levelLabel[soal.level] || soal.level || ''}</span>
                </div>
            </div>`;

        let bodyHtml = '';

        if (soal.stimulus) {
            bodyHtml += `
                <div class="bg-surface-container-low rounded-xl p-4 sm:p-5 mb-4 border-l-4 border-primary text-sm sm:text-base text-on-surface-variant leading-relaxed font-sans font-normal">
                    ${soal.stimulus.replace(/\n/g, '<br>')}
                </div>`;
        }

        bodyHtml += `
            <p class="font-headline font-bold text-base sm:text-lg text-on-surface mb-5 leading-relaxed">
                ${soal.pertanyaan.replace(/\n/g, '<br>')}
            </p>`;

        if (soal.tipe === 'pgk') {
            bodyHtml += `<div class="space-y-3">`;
            soal.opsi.forEach((opsiTxt, oIdx) => {
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
        } else if (soal.tipe === 'menjodohkan') {
            bodyHtml += `<div class="space-y-4">`;
            soal.kolomKiri.forEach((kiriTxt, kIdx) => {
                const valSaatIni = (jawabanSiswa[idx] || [])[kIdx];
                bodyHtml += `
                    <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 rounded-xl bg-surface-container-low border border-outline-variant/10">
                        <span class="text-sm font-semibold text-on-surface">${kIdx + 1}. ${kiriTxt}</span>
                        <select onchange="pilihJawabanMenjodohkan(${idx}, ${kIdx}, this.value)"
                            class="text-sm rounded-lg border-outline-variant/30 bg-surface-container-lowest p-2 focus:ring-primary focus:border-primary">
                            <option value="">-- Pilih Pasangan --</option>
                            ${soal.kolomKanan.map((kananTxt, rIdx) => `
                                <option value="${rIdx}" ${valSaatIni === rIdx ? 'selected' : ''}>${kananTxt}</option>
                            `).join('')}
                        </select>
                    </div>`;
            });
            bodyHtml += `</div>`;
        } else {
            const HURUF = ['A', 'B', 'C', 'D', 'E'];
            bodyHtml += `<div class="space-y-3">`;
            soal.opsi.forEach((opsiTxt, oIdx) => {
                const checked = jawabanSiswa[idx] === oIdx;
                bodyHtml += `
                    <label class="flex items-start gap-3.5 p-4 rounded-xl border border-outline-variant/20 hover:border-primary/50 hover:bg-primary/5 cursor-pointer transition-all ${checked ? 'border-primary bg-primary/5 font-semibold' : ''}">
                        <input type="radio" name="soal-${idx}" value="${oIdx}" ${checked ? 'checked' : ''}
                            onchange="pilihJawabanPG(${idx}, ${oIdx})"
                            class="mt-1 w-4 h-4 text-primary border-outline-variant focus:ring-primary shrink-0">
                        <span class="w-6 h-6 rounded-full bg-surface-container text-on-surface-variant text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">${HURUF[oIdx] || oIdx + 1}</span>
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

    window.pilihJawabanMenjodohkan = (soalIdx, kiriIdx, val) => {
        if (sudahSubmit) return;
        if (!Array.isArray(jawabanSiswa[soalIdx])) {
            jawabanSiswa[soalIdx] = new Array(soalList[soalIdx].kolomKiri.length).fill(null);
        }
        jawabanSiswa[soalIdx][kiriIdx] = val === '' ? null : parseInt(val, 10);
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
            if (soal.tipe === 'pgk' || soal.tipe === 'pga') {
                if (Array.isArray(j) && j.length > 0) dijawab++;
            } else if (soal.tipe === 'menjodohkan') {
                if (Array.isArray(j) && j.some(val => val !== null)) dijawab++;
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
                if (s.tipe === 'pgk' || s.tipe === 'pga') return !Array.isArray(j) || j.length === 0;
                if (s.tipe === 'menjodohkan') return !Array.isArray(j) || j.every(v => v === null);
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

            if (soal.tipe === 'pgk') {
                const k = Array.isArray(soal.kunci) ? soal.kunci : [soal.kunci];
                const s = Array.isArray(j) ? j : [];
                correct = k.length === s.length && k.every(val => s.includes(val));
            } else if (soal.tipe === 'menjodohkan') {
                const k = soal.kunci;
                const s = Array.isArray(j) ? j : [];
                correct = k.length === s.length && k.every((val, i) => val === s[i]);
            } else {
                correct = (j === soal.kunci);
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
                                ${soal.penjelasan ? `<p class="text-xs sm:text-sm text-emerald-900 mt-1 leading-relaxed">${soal.penjelasan.replace(/\n/g, '<br>')}</p>` : ''}
                            </div>
                        </div>`;
                } else {
                    let kunciText = '';
                    if (soal.tipe === 'pgk') {
                        const HURUF = ['A', 'B', 'C', 'D', 'E'];
                        const kArr  = Array.isArray(soal.kunci) ? soal.kunci : [soal.kunci];
                        kunciText   = kArr.map(kIdx => `${HURUF[kIdx] || kIdx + 1}. ${soal.opsi[kIdx]}`).join('<br>');
                    } else if (soal.tipe === 'menjodohkan') {
                        kunciText = soal.kolomKiri.map((kiri, i) => `${kiri} → ${soal.kolomKanan[soal.kunci[i]]}`).join('<br>');
                    } else {
                        const HURUF = ['A', 'B', 'C', 'D', 'E'];
                        kunciText   = `${HURUF[soal.kunci] || soal.kunci + 1}. ${soal.opsi[soal.kunci]}`;
                    }

                    hasilEl.innerHTML = `
                        <div class="flex items-start gap-3 text-red-700 bg-red-50 p-4 rounded-xl border border-red-200">
                            <span class="material-symbols-outlined text-red-600 shrink-0 mt-0.5 font-bold">cancel</span>
                            <div class="text-sm">
                                <p class="font-bold text-sm sm:text-base">Jawaban Kurang Tepat</p>
                                <p class="text-xs sm:text-sm mt-1"><strong>Kunci Jawaban:</strong><br>${kunciText}</p>
                                ${soal.penjelasan ? `<p class="text-xs sm:text-sm text-red-900 mt-2 leading-relaxed"><strong>Pembahasan:</strong><br>${soal.penjelasan.replace(/\n/g, '<br>')}</p>` : ''}
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

        if (setIdDipilih) {
            localStorage.setItem(`latihan_done_${getTodayStr()}_${setIdDipilih}`, '1');
        }
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
                        Lihat Pembahasan ↓
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

        if (setIdsHariIni.length > 1) {
            const sisakanTopik = setIdsHariIni.filter(id => id !== setIdDipilih);
            const adaYgBelum   = sisakanTopik.some(id => !localStorage.getItem(`latihan_done_${getTodayStr()}_${id}`));
            if (adaYgBelum) {
                const btnKembali = document.createElement('button');
                btnKembali.id        = 'btn-pilih-topik-lain';
                btnKembali.className = 'flex-1 py-4 bg-surface-container text-on-surface font-bold text-base rounded-2xl hover:bg-surface-container-high active:scale-[0.99] transition-all flex items-center justify-center gap-3 border border-outline-variant/20';
                btnKembali.innerHTML = '<span class="material-symbols-outlined">apps</span> Pilih Topik Lain';
                btnKembali.addEventListener('click', () => {
                    hide(elArena);
                    init();
                });
                elBtnUlang.parentElement.appendChild(btnKembali);
            }
        }
    }

    if (elBtnUlang) {
        elBtnUlang.addEventListener('click', () => {
            sudahSubmit  = false;
            soalList     = [...latihanData];
            jawabanSiswa = soalList.map(soal => {
                if (soal.tipe === 'pgk' || soal.tipe === 'pga') return [];
                if (soal.tipe === 'menjodohkan') return new Array(soal.kolomKiri.length).fill(null);
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
        const today   = getTodayStr();
        const id      = setIdDipilih || ((typeof jadwalLatihan !== 'undefined' && jadwalLatihan[today]) ? (Array.isArray(jadwalLatihan[today]) ? jadwalLatihan[today][0] : jadwalLatihan[today]) : 'latihan-harian');
        const info    = (id && typeof infoLatihan !== 'undefined') ? infoLatihan[id] : null;
        const topik   = info ? `${info.kelas || ''} ${info.semester || ''} ${info.bab || ''} — ${info.judul || id}`.trim() : (id || 'Latihan Harian');

        const payload = {
            action    : 'latihan_harian',
            nama      : namaKini,
            kelas     : kelasKini,
            topik     : topik,
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
    function getTodayStr() {
        const d = new Date();
        const y = d.getFullYear();
        const m = String(d.getMonth() + 1).padStart(2, '0');
        const t = String(d.getDate()).padStart(2, '0');
        return `${y}-${m}-${t}`;
    }

    function getJadwalBerikutnya(today, jadwalObj) {
        const obj  = normalisasiJadwal(jadwalObj || {});
        const keys = Object.keys(obj).sort();
        const next = keys.find(k => k > today);
        if (!next) return null;
        return { tgl: next, id: obj[next] };
    }

    function formatTanggal(str) {
        if (!str) return '';
        const parts = str.split('-');
        if (parts.length === 3) {
            const d = new Date(parseInt(parts[0]), parseInt(parts[1]) - 1, parseInt(parts[2]));
            return d.toLocaleDateString('id-ID', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
        }
        const d = new Date(str);
        return d.toLocaleDateString('id-ID', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
    }

    function show(el) { if (el) { el.classList.remove('hidden'); } }
    function hide(el) { if (el) { el.classList.add('hidden'); } }

    init();
});

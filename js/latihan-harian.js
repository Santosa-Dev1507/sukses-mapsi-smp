// ── Helper Otomatis Memperbesar Teks Arab (Ayat/Lafal) ──
function formatTeksArab(str) {
    if (!str || typeof str !== 'string') return str;
    const reArab = /([\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDFF\uFE70-\uFEFF]+(?:[\s\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E8\u06EA-\u06ED]+[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDFF\uFE70-\uFEFF]+)*)/g;
    return str.replace(reArab, (match) => {
        const trimmed = match.trim();
        if (!trimmed || !/[\u0600-\u06FF]/.test(trimmed)) return match;
        return `<span class="font-arabic-inline" dir="rtl">${trimmed}</span>`;
    });
}

document.addEventListener('DOMContentLoaded', () => {

    // ══════════════════════════════════════════════
    // KONFIGURASI
    // ══════════════════════════════════════════════
    const SHEET_URL = 'https://script.google.com/macros/s/AKfycbwQfgDcTK5fzkphsdawmcGpZjbOSwHAh_WadAie3UwCRLflSeFTLpFRIq4XGO81ykA1Iw/exec';
    const STORAGE_KEY_NAMA  = 'latihanNama';
    const STORAGE_KEY_KELAS = 'latihanKelas';

    // ══════════════════════════════════════════════
    // STATE
    // ══════════════════════════════════════════════
    let soalList     = [];
    let jawabanSiswa = [];  // null untuk PG, [] untuk PGK, [null,..] untuk Menjodohkan
    let sudahSubmit  = false;
    let startTime    = null;
    let namaKini     = localStorage.getItem(STORAGE_KEY_NAMA)  || '';
    let kelasKini    = localStorage.getItem(STORAGE_KEY_KELAS) || '';

    // ══════════════════════════════════════════════
    // DOM REFERENCES
    // ══════════════════════════════════════════════
    const elWelcome     = document.getElementById('welcome-section');
    const elTidakAda    = document.getElementById('tidak-ada-latihan');
    const elArena       = document.getElementById('arena-latihan');
    const elHasil       = document.getElementById('hasil-section');
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
    // INISIALISASI: ambil jadwal dari GAS lalu mulai
    // ══════════════════════════════════════════════
    const GAS_URL = 'https://script.google.com/macros/s/AKfycbwQfgDcTK5fzkphsdawmcGpZjbOSwHAh_WadAie3UwCRLflSeFTLpFRIq4XGO81ykA1Iw/exec';
    const INFO_SET = (typeof infoLatihan !== 'undefined') ? infoLatihan : {};
    let setIdsHariIni = []; // array setId yang aktif hari ini
    let setIdDipilih  = null;

    async function fetchJadwalSheet() {
        try {
            const ctrl = new AbortController();
            const tid  = setTimeout(() => ctrl.abort(), 4000);
            const res  = await fetch(GAS_URL + '?action=getJadwalLatihan', { cache: 'no-store', signal: ctrl.signal });
            clearTimeout(tid);
            const rawData = await res.json();
            const data = {};
            for (let k in rawData) {
                let newKey = k;
                if (!/^\d{4}-\d{2}-\d{2}$/.test(k)) {
                    const d = new Date(k);
                    if (!isNaN(d.getTime())) {
                        newKey = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
                    }
                }
                data[newKey] = rawData[k];
            }
            const lokal  = JSON.parse(localStorage.getItem('mapsi_jadwal_latihan') || '{}');
            const gabung = Object.assign({}, lokal, data);
            localStorage.setItem('mapsi_jadwal_latihan', JSON.stringify(gabung));
            return gabung;
        } catch (_) {
            return JSON.parse(localStorage.getItem('mapsi_jadwal_latihan') || '{}');
        }
    }

    async function init() {
        const today = getTodayStr();

        const urlParams = new URLSearchParams(window.location.search);
        const urlId = urlParams.get('id') || urlParams.get('set') || urlParams.get('topik');

        const jadwalLS = await fetchJadwalSheet();
        const jadwalJS = (typeof jadwalLatihan !== 'undefined') ? jadwalLatihan : {};
        const jadwalGabung = Object.assign({}, jadwalJS, jadwalLS);

        let allTopics = [];
        let addedIds = new Set();
        
        // Kumpulkan semua topik dari tanggal yang lalu hingga hari ini (<= today)
        for (const tgl in jadwalGabung) {
            if (tgl <= today) {
                const val = jadwalGabung[tgl];
                const topiks = normalisasiTopik(val);
                for (const top of topiks) {
                    if (!addedIds.has(top.id)) {
                        addedIds.add(top.id);
                        allTopics.push(top);
                    }
                }
            }
        }

        if (urlId) {
            const info = INFO_SET[urlId] || {};
            const topik = { id: urlId, label: info.judul || urlId };
            setIdDipilih = urlId;
            loadSoal(topik, today, jadwalGabung);
            return;
        }

        setIdsHariIni = allTopics;

        if (setIdsHariIni.length === 0) { tampilTidakAda(today, jadwalGabung); return; }

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
                    <span class="material-symbols-outlined text-3xl" style="font-variation-settings:'FILL' 1;">${ikon}</span>
                </div>
                <div class="flex-1 min-w-0">
                    <p class="font-headline font-extrabold text-lg leading-tight">${label}</p>
                    <p class="text-white/70 text-xs mt-0.5">${info.subjudul || ''}</p>
                </div>
                <div class="shrink-0">
                    ${sudahDone
                        ? '<span class="inline-flex items-center gap-1 bg-white/25 text-white text-xs font-bold px-3 py-1 rounded-full"><span class="material-symbols-outlined text-sm" style="font-variation-settings:\'FILL\' 1;">check_circle</span>Selesai</span>'
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

    // ══════════════════════════════════════════════
    // IDENTITAS SISWA
    // ══════════════════════════════════════════════
    function cekIdentitas() {
        if (namaKini && kelasKini) {
            tampilkanNama();
            tampilWelcome();
        } else {
            bukaModalNama();
        }
    }

    function tampilkanNama() {
        if (elNamaDisplay) elNamaDisplay.textContent = `${namaKini} · ${kelasKini}`;
    }

    function bukaModalNama() {
        if (elModalNama) {
            elModalNama.classList.remove('hidden');
            elModalNama.classList.add('flex');
        }
    }

    function tutupModalNama() {
        if (elModalNama) {
            elModalNama.classList.add('hidden');
            elModalNama.classList.remove('flex');
        }
    }

    if (elBtnMulai) {
        elBtnMulai.addEventListener('click', () => {
            const nama  = elInputNama  ? elInputNama.value.trim()  : '';
            const kelas = elInputKelas ? elInputKelas.value         : '';
            if (!nama || !kelas) {
                if (elInputNama && !nama)   elInputNama.classList.add('border-red-500');
                if (elInputKelas && !kelas) elInputKelas.classList.add('border-red-500');
                return;
            }
            namaKini  = nama;
            kelasKini = kelas;
            localStorage.setItem(STORAGE_KEY_NAMA,  nama);
            localStorage.setItem(STORAGE_KEY_KELAS, kelas);
            tutupModalNama();
            tampilkanNama();
            tampilWelcome();
        });
    }

    if (elBtnGanti) {
        elBtnGanti.addEventListener('click', () => {
            if (elInputNama)  elInputNama.value   = namaKini;
            if (elInputKelas) elInputKelas.value  = kelasKini;
            bukaModalNama();
        });
    }

    function tampilWelcome() {
        show(elWelcome);
        hide(elArena);
        hide(elHasil);
        hide(elTidakAda);
    }

    function tampilTidakAda(today, jadwalObj) {
        const berikutnya = getJadwalBerikutnya(today, jadwalObj || {});
        const elPesan = document.getElementById('pesan-tidak-ada');
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

        let badgeTipe = `<span class="text-[10px] font-bold px-2.5 py-1 rounded-full shrink-0 ${levelWarna[soal.level] || 'bg-surface-container text-on-surface-variant'}">${levelLabel[soal.level] || soal.level}</span>`;
        if (soal.tipe === 'menjodohkan') {
            badgeTipe = `<span class="bg-amber-100 text-amber-900 text-[10px] font-bold px-2.5 py-1 rounded-full shrink-0">Menjodohkan</span>`;
        } else if (soal.tipe === 'pgk' || soal.tipe === 'pga') {
            badgeTipe = `<span class="bg-purple-100 text-purple-900 text-[10px] font-bold px-2.5 py-1 rounded-full shrink-0">PG Kompleks</span>`;
        }

        let html = `
            <div class="flex items-start justify-between gap-3 mb-5">
                <div class="flex items-center gap-3">
                    <span class="w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-primary text-white font-headline font-bold flex items-center justify-center text-base sm:text-lg shrink-0">${idx + 1}</span>
                    <div>
                        <p class="text-[10px] sm:text-xs font-bold text-on-surface-variant uppercase tracking-widest">${soal.topik || ''}</p>
                    </div>
                </div>
                ${badgeTipe}
            </div>`;

        // Stimulus (teks narasi)
        if (soal.stimulus) {
            const stimLines = soal.stimulus.split('\n').map(l => l.trim()).filter(Boolean);
            html += `<div class="bg-surface-container-low border-l-4 border-secondary/40 rounded-xl p-4 mb-5 text-sm text-on-surface-variant leading-relaxed">`;
            stimLines.forEach(line => { html += `<p class="mb-1 last:mb-0">${formatTeksArab(line)}</p>`; });
            html += `</div>`;
        }

        // Kutipan Arab
        if (soal.kutipan) {
            html += `<div class="bg-primary/5 border border-primary/10 rounded-2xl p-4 sm:p-6 mb-5 text-center">
                <p dir="rtl" class="font-arabic text-3xl sm:text-4xl text-primary font-bold leading-[2.5] mb-3 select-all">${soal.kutipan}</p>
                ${soal.kutipanTerjemah ? `<p class="text-xs text-on-surface-variant italic">${soal.kutipanTerjemah}</p>` : ''}
            </div>`;
        }

        // Pertanyaan
        html += `<p class="text-on-surface font-semibold text-sm sm:text-base leading-relaxed mb-5">${formatTeksArab(soal.pertanyaan)}</p>`;

        // AREA JAWABAN SESUAI TIPE
        if (soal.tipe === 'menjodohkan') {
            html += `<div class="space-y-4" id="opsi-${idx}">
                <p class="text-xs text-amber-800 font-bold mb-2 flex items-center gap-1.5"><span class="material-symbols-outlined text-sm">link</span> Pasangkanlah setiap item di Kolom Kiri dengan pilihan di Kolom Kanan:</p>`;
            soal.kolomKiri.forEach((itemKiri, kIdx) => {
                html += `
                <div class="p-4 rounded-xl border border-outline-variant/20 bg-surface-container-low/50 flex flex-col sm:flex-row sm:items-center justify-between gap-3" id="jodoh-row-${idx}-${kIdx}">
                    <div class="font-bold text-sm text-on-surface flex-1">${formatTeksArab(itemKiri)}</div>
                    <div class="shrink-0 w-full sm:w-72">
                        <select data-soal="${idx}" data-kiri="${kIdx}" class="jodoh-sel w-full p-3 rounded-xl border border-outline-variant/40 bg-white text-sm font-medium text-on-surface focus:border-primary focus:outline-none transition-colors">
                            <option value="">-- Pilih Pasangan --</option>
                            ${soal.kolomKanan.map((itemKanan, rIdx) => `<option value="${rIdx}">${itemKanan}</option>`).join('')}
                        </select>
                    </div>
                </div>`;
            });
            html += `</div>`;
        } else if (soal.tipe === 'pgk' || soal.tipe === 'pga') {
            html += `<div class="space-y-3" id="opsi-${idx}">
                <p class="text-xs text-purple-800 font-bold mb-2 flex items-center gap-1.5"><span class="material-symbols-outlined text-sm">check_box</span> Pilih lebih dari satu jawaban yang benar:</p>`;
            const huruf = ['A', 'B', 'C', 'D', 'E'];
            soal.opsi.forEach((opsi, opsiIdx) => {
                html += `
                <button type="button"
                    id="opsi-btn-${idx}-${opsiIdx}"
                    data-soal="${idx}"
                    data-opsi="${opsiIdx}"
                    class="opsi-btn-pgk w-full text-left flex items-center gap-4 p-3 sm:p-4 rounded-xl border-2 border-outline-variant/20 bg-white hover:border-purple-400 hover:bg-purple-50/50 transition-all duration-200 group active:scale-[0.99]">
                    <span class="opsi-box w-7 h-7 sm:w-8 sm:h-8 rounded-lg border-2 border-outline-variant/40 bg-surface-container flex items-center justify-center text-xs sm:text-sm font-bold text-on-surface-variant shrink-0 group-hover:border-purple-400 transition-all">
                        <span class="material-symbols-outlined text-base text-white hidden">check</span>
                    </span>
                    <span class="text-sm sm:text-base text-on-surface flex-1">${formatTeksArab(opsi)}</span>
                </button>`;
            });
            html += `</div>`;
        } else {
            // Standard PG
            html += `<div class="space-y-3" id="opsi-${idx}">`;
            const huruf = ['A', 'B', 'C', 'D', 'E'];
            soal.opsi.forEach((opsi, opsiIdx) => {
                const isArab = soal.opsiArab;
                html += `
                <button type="button"
                    id="opsi-btn-${idx}-${opsiIdx}"
                    data-soal="${idx}"
                    data-opsi="${opsiIdx}"
                    class="opsi-btn w-full text-left flex items-center gap-4 p-3 sm:p-4 rounded-xl border-2 border-outline-variant/20 bg-white hover:border-primary/40 hover:bg-primary/5 transition-all duration-200 group active:scale-[0.99]">
                    <span class="opsi-huruf w-7 h-7 sm:w-8 sm:h-8 rounded-lg border-2 border-outline-variant/40 bg-surface-container flex items-center justify-center text-xs sm:text-sm font-bold text-on-surface-variant shrink-0 group-hover:border-primary/40 group-hover:text-primary transition-all">${huruf[opsiIdx]}</span>
                    <span class="${isArab ? 'font-arabic text-2xl sm:text-3xl font-bold text-primary text-right w-full leading-loose' : 'text-sm sm:text-base text-on-surface flex-1'}" ${isArab ? 'dir="rtl"' : ''}>${isArab ? opsi : formatTeksArab(opsi)}</span>
                </button>`;
            });
            html += `</div>`;
        }

        // Placeholder hasil (tampil setelah submit)
        html += `<div id="hasil-${idx}" class="hidden mt-5 p-4 rounded-xl text-sm"></div>`;

        card.innerHTML = html;

        // Event Listeners
        if (soal.tipe === 'menjodohkan') {
            card.querySelectorAll('.jodoh-sel').forEach(sel => {
                sel.addEventListener('change', (e) => {
                    if (sudahSubmit) return;
                    const si = parseInt(e.target.dataset.soal);
                    const ki = parseInt(e.target.dataset.kiri);
                    const val = e.target.value === '' ? null : parseInt(e.target.value);
                    pilihJodoh(si, ki, val);
                });
            });
        } else if (soal.tipe === 'pgk' || soal.tipe === 'pga') {
            card.querySelectorAll('.opsi-btn-pgk').forEach(btn => {
                btn.addEventListener('click', () => {
                    if (sudahSubmit) return;
                    const si = parseInt(btn.dataset.soal);
                    const oi = parseInt(btn.dataset.opsi);
                    togglePGK(si, oi);
                });
            });
        } else {
            card.querySelectorAll('.opsi-btn').forEach(btn => {
                btn.addEventListener('click', () => {
                    if (sudahSubmit) return;
                    const si = parseInt(btn.dataset.soal);
                    const oi = parseInt(btn.dataset.opsi);
                    pilihJawaban(si, oi);
                });
            });
        }

        return card;
    }

    // ══════════════════════════════════════════════
    // INTERAKSI JAWABAN SISWA
    // ══════════════════════════════════════════════
    function pilihJawaban(soalIdx, opsiIdx) {
        jawabanSiswa[soalIdx] = opsiIdx;
        document.querySelectorAll(`#opsi-${soalIdx} .opsi-btn`).forEach(btn => {
            btn.className = btn.className
                .replace(/border-primary[^\s]*/g, 'border-outline-variant/20')
                .replace(/bg-primary[^\s]*/g, 'bg-white');
            const hurufEl = btn.querySelector('.opsi-huruf');
            if (hurufEl) {
                hurufEl.className = hurufEl.className
                    .replace(/border-primary[^\s]*/g, 'border-outline-variant/40')
                    .replace(/bg-primary[^\s]*/g, 'bg-surface-container')
                    .replace(/text-white/g, 'text-on-surface-variant');
            }
        });

        const dipilih = document.getElementById(`opsi-btn-${soalIdx}-${opsiIdx}`);
        if (dipilih) {
            dipilih.classList.add('border-primary', 'bg-primary/10');
            dipilih.classList.remove('border-outline-variant/20', 'bg-white');
            const hurufEl = dipilih.querySelector('.opsi-huruf');
            if (hurufEl) {
                hurufEl.classList.add('bg-primary', 'border-primary', 'text-white');
                hurufEl.classList.remove('border-outline-variant/40', 'bg-surface-container', 'text-on-surface-variant');
            }
        }
        updateProgress();
    }

    function togglePGK(soalIdx, opsiIdx) {
        if (!Array.isArray(jawabanSiswa[soalIdx])) jawabanSiswa[soalIdx] = [];
        const arr = jawabanSiswa[soalIdx];
        const pos = arr.indexOf(opsiIdx);
        if (pos > -1) arr.splice(pos, 1);
        else arr.push(opsiIdx);

        const btn = document.getElementById(`opsi-btn-${soalIdx}-${opsiIdx}`);
        if (btn) {
            const isChecked = arr.includes(opsiIdx);
            const box = btn.querySelector('.opsi-box');
            const icon = box ? box.querySelector('.material-symbols-outlined') : null;

            if (isChecked) {
                btn.classList.add('border-purple-600', 'bg-purple-50');
                btn.classList.remove('border-outline-variant/20', 'bg-white');
                if (box) {
                    box.classList.add('bg-purple-600', 'border-purple-600');
                    box.classList.remove('bg-surface-container', 'border-outline-variant/40');
                }
                if (icon) icon.classList.remove('hidden');
            } else {
                btn.classList.remove('border-purple-600', 'bg-purple-50');
                btn.classList.add('border-outline-variant/20', 'bg-white');
                if (box) {
                    box.classList.remove('bg-purple-600', 'border-purple-600');
                    box.classList.add('bg-surface-container', 'border-outline-variant/40');
                }
                if (icon) icon.classList.add('hidden');
            }
        }
        updateProgress();
    }

    function pilihJodoh(soalIdx, kiriIdx, val) {
        if (!Array.isArray(jawabanSiswa[soalIdx])) {
            jawabanSiswa[soalIdx] = new Array(soalList[soalIdx].kolomKiri.length).fill(null);
        }
        jawabanSiswa[soalIdx][kiriIdx] = val;
        updateProgress();
    }

    // ══════════════════════════════════════════════
    // PROGRESS BAR
    // ══════════════════════════════════════════════
    function updateProgress() {
        let dijawab = 0;
        soalList.forEach((soal, idx) => {
            const ans = jawabanSiswa[idx];
            if (soal.tipe === 'menjodohkan') {
                if (Array.isArray(ans) && ans.length === soal.kolomKiri.length && ans.every(v => v !== null && v !== undefined)) dijawab++;
            } else if (soal.tipe === 'pgk' || soal.tipe === 'pga') {
                if (Array.isArray(ans) && ans.length > 0) dijawab++;
            } else {
                if (ans !== null && ans !== undefined) dijawab++;
            }
        });
        const total = soalList.length;
        const pct   = Math.round((dijawab / total) * 100);
        if (elProgressBar) elProgressBar.style.width = pct + '%';
        if (elProgressTxt) elProgressTxt.textContent  = `${dijawab} / ${total} soal dijawab`;

        if (elBtnSubmit) {
            const semua = dijawab === total;
            elBtnSubmit.disabled = !semua;
            elBtnSubmit.classList.toggle('opacity-50',   !semua);
            elBtnSubmit.classList.toggle('cursor-not-allowed', !semua);
        }
    }

    // ══════════════════════════════════════════════
    // SUBMIT & EVALUASI
    // ══════════════════════════════════════════════
    if (elBtnSubmit) {
        elBtnSubmit.addEventListener('click', submit);
    }

    function submit() {
        if (sudahSubmit) return;
        sudahSubmit = true;

        const durasi = startTime ? Math.round((Date.now() - startTime) / 60000) : 0;
        let benar = 0;
        const salahNomor = [];

        soalList.forEach((soal, idx) => {
            const pilihan = jawabanSiswa[idx];
            let correct = false;

            if (soal.tipe === 'menjodohkan') {
                const uArr = pilihan || [];
                const kArr = soal.kunci || [];
                correct = uArr.length === kArr.length && uArr.every((v, i) => v === kArr[i]);

                document.querySelectorAll(`#opsi-${idx} .jodoh-sel`).forEach((sel, ki) => {
                    sel.disabled = true;
                    const isRowCorrect = (pilihan && pilihan[ki] === soal.kunci[ki]);
                    const rowEl = document.getElementById(`jodoh-row-${idx}-${ki}`);
                    if (rowEl) {
                        if (isRowCorrect) {
                            rowEl.classList.add('border-emerald-500', 'bg-emerald-50/40');
                        } else {
                            rowEl.classList.add('border-red-400', 'bg-red-50/40');
                        }
                    }
                });
            } else if (soal.tipe === 'pgk' || soal.tipe === 'pga') {
                const uArr = [...(pilihan || [])].sort((a,b)=>a-b);
                const kArr = [...(soal.kunci || [])].sort((a,b)=>a-b);
                correct = uArr.length === kArr.length && uArr.every((v, i) => v === kArr[i]);

                document.querySelectorAll(`#opsi-${idx} .opsi-btn-pgk`).forEach((btn, oi) => {
                    btn.style.pointerEvents = 'none';
                    const isUserChecked = Array.isArray(pilihan) && pilihan.includes(oi);
                    const isKey = Array.isArray(soal.kunci) && soal.kunci.includes(oi);

                    if (isKey && isUserChecked) {
                        btn.className = 'opsi-btn-pgk w-full text-left flex items-center gap-4 p-3 sm:p-4 rounded-xl border-2 border-emerald-500 bg-emerald-50';
                    } else if (isUserChecked && !isKey) {
                        btn.className = 'opsi-btn-pgk w-full text-left flex items-center gap-4 p-3 sm:p-4 rounded-xl border-2 border-red-400 bg-red-50';
                    } else if (isKey) {
                        btn.className = 'opsi-btn-pgk w-full text-left flex items-center gap-4 p-3 sm:p-4 rounded-xl border-2 border-emerald-300 bg-emerald-50/40';
                    }
                });
            } else {
                // PG Standar
                correct = pilihan === soal.kunci;
                document.querySelectorAll(`#opsi-${idx} .opsi-btn`).forEach((btn, oi) => {
                    btn.style.pointerEvents = 'none';
                    if (oi === soal.kunci && oi === pilihan) {
                        btn.className = btn.className.replace(/border-\S+/g, '').replace(/bg-\S+/g, '');
                        btn.classList.add('border-2', 'border-emerald-500', 'bg-emerald-50');
                        const h = btn.querySelector('.opsi-huruf');
                        if (h) { h.className = 'opsi-huruf w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center text-xs sm:text-sm font-bold bg-emerald-500 text-white shrink-0'; }
                    } else if (oi === pilihan && oi !== soal.kunci) {
                        btn.className = btn.className.replace(/border-\S+/g, '').replace(/bg-\S+/g, '');
                        btn.classList.add('border-2', 'border-red-400', 'bg-red-50');
                        const h = btn.querySelector('.opsi-huruf');
                        if (h) { h.className = 'opsi-huruf w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center text-xs sm:text-sm font-bold bg-red-400 text-white shrink-0'; }
                    } else if (oi === soal.kunci) {
                        btn.classList.add('border-emerald-300', 'bg-emerald-50/50');
                    }
                });
            }

            if (correct) benar++;
            else salahNomor.push(idx + 1);

            // Output Hasil Card
            const hasilEl = document.getElementById(`hasil-${idx}`);
            if (hasilEl) {
                const huruf = ['A', 'B', 'C', 'D', 'E'];
                if (correct) {
                    hasilEl.innerHTML = `<div class="flex items-center gap-2 text-emerald-700 font-bold"><span class="material-symbols-outlined" style="font-variation-settings:'FILL' 1;">check_circle</span> Jawaban Benar!</div>`;
                    hasilEl.className = 'mt-5 p-4 rounded-xl bg-emerald-50 border border-emerald-200';
                } else {
                    let kunciTxt = '';
                    if (soal.tipe === 'menjodohkan') {
                        kunciTxt = soal.kolomKiri.map((k, i) => `<br>• ${k} ➔ <strong>${soal.kolomKanan[soal.kunci[i]]}</strong>`).join('');
                    } else if (soal.tipe === 'pgk' || soal.tipe === 'pga') {
                        kunciTxt = soal.kunci.map(i => huruf[i]).join(', ');
                    } else {
                        kunciTxt = huruf[soal.kunci];
                    }

                    hasilEl.innerHTML = `
                        <div class="flex items-start gap-2 text-red-600 font-bold mb-3">
                            <span class="material-symbols-outlined mt-0.5" style="font-variation-settings:'FILL' 1;">cancel</span>
                            <div>Jawaban Belum Tepat — Kunci Benar: <strong>${kunciTxt}</strong></div>
                        </div>
                        <div class="text-sm text-on-surface-variant leading-relaxed">
                            <span class="font-semibold text-on-surface">💡 Penjelasan: </span>${formatTeksArab(soal.penjelasan)}
                        </div>`;
                    hasilEl.className = 'mt-5 p-4 rounded-xl bg-red-50 border border-red-200';
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
    // KIRIM LAPORAN KE GOOGLE SHEETS (MODE JSON NO-CORS)
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
        const obj  = jadwalObj || {};
        const keys = Object.keys(obj).sort();
        const next = keys.find(k => k > today);
        if (!next) return null;
        return { tgl: next, id: obj[next] };
    }

    function formatTanggal(str) {
        const d = new Date(str + 'T00:00:00');
        return d.toLocaleDateString('id-ID', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
    }

    function show(el) { if (el) { el.classList.remove('hidden'); } }
    function hide(el) { if (el) { el.classList.add('hidden'); } }

    init();
});

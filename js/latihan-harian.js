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
    let jawabanSiswa = [];  // array index jawaban yang dipilih (null = belum)
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

    async function fetchJadwalSheet() {
        try {
            const ctrl = new AbortController();
            const tid  = setTimeout(() => ctrl.abort(), 4000); // 4 detik timeout
            const res  = await fetch(GAS_URL + '?action=getJadwalLatihan', { cache: 'no-store', signal: ctrl.signal });
            clearTimeout(tid);
            const data = await res.json();
            // Merge: sheet lebih diutamakan; simpan ke localStorage untuk offline
            const lokal = JSON.parse(localStorage.getItem('mapsi_jadwal_latihan') || '{}');
            const gabung = Object.assign({}, lokal, data);
            localStorage.setItem('mapsi_jadwal_latihan', JSON.stringify(gabung));
            return gabung;
        } catch (_) {
            // Offline atau timeout — pakai localStorage
            return JSON.parse(localStorage.getItem('mapsi_jadwal_latihan') || '{}');
        }
    }

    async function init() {
        const today = getTodayStr();

        // Jadwal dari GAS (dengan fallback offline)
        const jadwalLS = await fetchJadwalSheet();
        const jadwalJS = (typeof jadwalLatihan !== 'undefined') ? jadwalLatihan : {};
        const infoJS   = (typeof infoLatihan   !== 'undefined') ? infoLatihan   : {};

        // localStorage (dari dashboard guru) lebih diutamakan atas jadwal-latihan.js statis
        const jadwalGabung = Object.assign({}, jadwalJS, jadwalLS);
        const setId = jadwalGabung[today] || null;
        const info  = setId ? (infoJS[setId] || { judul: setId, subjudul: '', kelas: '', semester: '', bab: '' }) : null;

        if (!setId) {
            tampilTidakAda(today, jadwalGabung);
            return;
        }

        if (elTopikJudul) elTopikJudul.textContent = info.judul;
        if (elTopikSub)   elTopikSub.textContent   = [info.kelas, info.semester, info.bab, info.subjudul].filter(Boolean).join(' · ');

        // Load file soal secara dinamis
        const script    = document.createElement('script');
        script.src      = `js/latihan/${setId}.js`;
        script.onload   = () => {
            if (typeof latihanData !== 'undefined' && latihanData.length > 0) {
                soalList     = acakArray([...latihanData]);
                jawabanSiswa = new Array(soalList.length).fill(null);
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

    // ══════════════════════════════════════════════
    // TAMPIL WELCOME / MULAI LANGSUNG
    // ══════════════════════════════════════════════
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

    // Tombol "Mulai Mengerjakan"
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
    // RENDER SEMUA SOAL
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

        let html = `
            <div class="flex items-start justify-between gap-3 mb-5">
                <div class="flex items-center gap-3">
                    <span class="w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-primary text-white font-headline font-bold flex items-center justify-center text-base sm:text-lg shrink-0">${idx + 1}</span>
                    <div>
                        <p class="text-[10px] sm:text-xs font-bold text-on-surface-variant uppercase tracking-widest">${soal.topik || ''}</p>
                    </div>
                </div>
                <span class="text-[10px] font-bold px-2 py-1 rounded-full shrink-0 ${levelWarna[soal.level] || 'bg-surface-container text-on-surface-variant'}">${levelLabel[soal.level] || soal.level}</span>
            </div>`;

        // Stimulus (teks narasi)
        if (soal.stimulus) {
            const stimLines = soal.stimulus.split('\n').map(l => l.trim()).filter(Boolean);
            html += `<div class="bg-surface-container-low border-l-4 border-secondary/40 rounded-xl p-4 mb-5 text-sm text-on-surface-variant leading-relaxed">`;
            stimLines.forEach(line => { html += `<p class="mb-1 last:mb-0">${line}</p>`; });
            html += `</div>`;
        }

        // Kutipan Arab
        if (soal.kutipan) {
            html += `<div class="bg-primary/5 border border-primary/10 rounded-2xl p-4 sm:p-6 mb-5 text-center">
                <p dir="rtl" class="font-arabic text-2xl sm:text-3xl text-on-surface leading-loose mb-2">${soal.kutipan}</p>
                ${soal.kutipanTerjemah ? `<p class="text-xs text-on-surface-variant italic">${soal.kutipanTerjemah}</p>` : ''}
            </div>`;
        }

        // Pertanyaan
        html += `<p class="text-on-surface font-medium text-sm sm:text-base leading-relaxed mb-5">${soal.pertanyaan}</p>`;

        // Opsi jawaban
        html += `<div class="space-y-3" id="opsi-${idx}">`;
        const huruf = ['A', 'B', 'C', 'D'];
        soal.opsi.forEach((opsi, opsiIdx) => {
            const isArab = soal.opsiArab;
            html += `
                <button type="button"
                    id="opsi-btn-${idx}-${opsiIdx}"
                    data-soal="${idx}"
                    data-opsi="${opsiIdx}"
                    class="opsi-btn w-full text-left flex items-center gap-4 p-3 sm:p-4 rounded-xl border-2 border-outline-variant/20 bg-white hover:border-primary/40 hover:bg-primary/5 transition-all duration-200 group active:scale-[0.99]">
                    <span class="opsi-huruf w-7 h-7 sm:w-8 sm:h-8 rounded-lg border-2 border-outline-variant/40 bg-surface-container flex items-center justify-center text-xs sm:text-sm font-bold text-on-surface-variant shrink-0 group-hover:border-primary/40 group-hover:text-primary transition-all">${huruf[opsiIdx]}</span>
                    <span class="${isArab ? 'font-arabic text-lg sm:text-xl text-right w-full' : 'text-sm sm:text-base text-on-surface'}" ${isArab ? 'dir="rtl"' : ''}>${opsi}</span>
                </button>`;
        });
        html += `</div>`;

        // Placeholder hasil (tampil setelah submit)
        html += `<div id="hasil-${idx}" class="hidden mt-5 p-4 rounded-xl text-sm"></div>`;

        card.innerHTML = html;

        // Event listener opsi
        card.querySelectorAll('.opsi-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                if (sudahSubmit) return;
                const si = parseInt(btn.dataset.soal);
                const oi = parseInt(btn.dataset.opsi);
                pilihJawaban(si, oi);
            });
        });

        return card;
    }

    // ══════════════════════════════════════════════
    // PILIH JAWABAN
    // ══════════════════════════════════════════════
    function pilihJawaban(soalIdx, opsiIdx) {
        jawabanSiswa[soalIdx] = opsiIdx;

        // Reset semua tombol di soal ini
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

        // Highlight yang dipilih
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

    // ══════════════════════════════════════════════
    // PROGRESS BAR
    // ══════════════════════════════════════════════
    function updateProgress() {
        const dijawab = jawabanSiswa.filter(j => j !== null).length;
        const total   = soalList.length;
        const pct     = Math.round((dijawab / total) * 100);
        if (elProgressBar) elProgressBar.style.width = pct + '%';
        if (elProgressTxt) elProgressTxt.textContent  = `${dijawab} / ${total} soal dijawab`;

        // Enable/disable tombol submit
        if (elBtnSubmit) {
            const semua = dijawab === total;
            elBtnSubmit.disabled = !semua;
            elBtnSubmit.classList.toggle('opacity-50',   !semua);
            elBtnSubmit.classList.toggle('cursor-not-allowed', !semua);
        }
    }

    // ══════════════════════════════════════════════
    // SUBMIT
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
            const correct = pilihan === soal.kunci;
            if (correct) benar++;
            else         salahNomor.push(idx + 1);

            // Disable semua tombol
            document.querySelectorAll(`#opsi-${idx} .opsi-btn`).forEach((btn, oi) => {
                btn.style.pointerEvents = 'none';

                if (oi === soal.kunci && oi === pilihan) {
                    // Dipilih & benar → hijau
                    btn.className = btn.className.replace(/border-\S+/g, '').replace(/bg-\S+/g, '');
                    btn.classList.add('border-2', 'border-emerald-500', 'bg-emerald-50');
                    const h = btn.querySelector('.opsi-huruf');
                    if (h) { h.className = ''; h.className = 'opsi-huruf w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center text-xs sm:text-sm font-bold bg-emerald-500 text-white shrink-0'; }
                } else if (oi === pilihan && oi !== soal.kunci) {
                    // Dipilih tapi salah → merah
                    btn.className = btn.className.replace(/border-\S+/g, '').replace(/bg-\S+/g, '');
                    btn.classList.add('border-2', 'border-red-400', 'bg-red-50');
                    const h = btn.querySelector('.opsi-huruf');
                    if (h) { h.className = ''; h.className = 'opsi-huruf w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center text-xs sm:text-sm font-bold bg-red-400 text-white shrink-0'; }
                } else if (oi === soal.kunci) {
                    // Jawaban benar yang tidak dipilih → toska
                    btn.classList.add('border-emerald-300', 'bg-emerald-50/50');
                }
            });

            // Tampilkan card hasil soal
            const hasilEl = document.getElementById(`hasil-${idx}`);
            if (hasilEl) {
                if (correct) {
                    hasilEl.innerHTML = `<div class="flex items-center gap-2 text-emerald-700 font-bold"><span class="material-symbols-outlined" style="font-variation-settings:'FILL' 1;">check_circle</span> Jawaban Benar!</div>`;
                    hasilEl.className = 'mt-5 p-4 rounded-xl bg-emerald-50 border border-emerald-200';
                } else {
                    hasilEl.innerHTML = `
                        <div class="flex items-center gap-2 text-red-600 font-bold mb-3">
                            <span class="material-symbols-outlined" style="font-variation-settings:'FILL' 1;">cancel</span>
                            Jawaban Salah — Kunci: <strong>${['A','B','C','D'][soal.kunci]}</strong>
                        </div>
                        <div class="text-sm text-on-surface-variant leading-relaxed">
                            <span class="font-semibold text-on-surface">💡 Penjelasan: </span>${soal.penjelasan}
                        </div>`;
                    hasilEl.className = 'mt-5 p-4 rounded-xl bg-red-50 border border-red-200';
                }
                hasilEl.classList.remove('hidden');
            }

            // Border card
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
    }

    // ══════════════════════════════════════════════
    // ULANGI
    // ══════════════════════════════════════════════
    if (elBtnUlang) {
        elBtnUlang.addEventListener('click', () => {
            sudahSubmit  = false;
            soalList     = acakArray([...latihanData]);
            jawabanSiswa = new Array(soalList.length).fill(null);
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
        const setId   = (typeof jadwalLatihan !== 'undefined') ? jadwalLatihan[today] : 'unknown';
        const info    = (setId && typeof infoLatihan !== 'undefined') ? infoLatihan[setId] : null;
        const topik   = info ? `${info.kelas} ${info.semester} ${info.bab} — ${info.judul}` : setId;

        const payload = new URLSearchParams({
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
        });

        fetch(SHEET_URL, {
            method: 'POST',
            body  : payload,
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        }).catch(() => {}); // silent fail — tidak ganggu UX siswa
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

    function acakArray(arr) {
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
    }

    function show(el) { if (el) { el.classList.remove('hidden'); } }
    function hide(el) { if (el) { el.classList.add('hidden'); } }

    // ══════════════════════════════════════════════
    // MULAI
    // ══════════════════════════════════════════════
    init();
});

document.addEventListener("DOMContentLoaded", () => {

    // ══════════════════════════════════════════════════════════
    // KONFIGURASI
    // ══════════════════════════════════════════════════════════
    const SHEET_URL      = 'https://script.google.com/macros/s/AKfycbwQfgDcTK5fzkphsdawmcGpZjbOSwHAh_WadAie3UwCRLflSeFTLpFRIq4XGO81ykA1Iw/exec';
    const MAX_VIOLATIONS = 3;
    const EXAM_DURATION  = 60 * 60; // detik

    // ══════════════════════════════════════════════════════════
    // STATE
    // ══════════════════════════════════════════════════════════
    let studentName    = '';
    let studentClass   = '';
    let violationCount = 0;
    let startTimestamp = null;
    let quizData       = [];
    let currentIndex   = 0;
    let userAnswers    = [];
    let timerInterval  = null;
    let timeLeft       = EXAM_DURATION;
    let examStarted    = false;

    // ══════════════════════════════════════════════════════════
    // AMBIL DATA SOAL
    // ══════════════════════════════════════════════════════════
    const urlParams = new URLSearchParams(window.location.search);
    let year = urlParams.get('year') || localStorage.getItem('quizYear');

    if (year === '2026' && typeof quizData2026 !== 'undefined') {
        quizData = quizData2026;
    } else if (year === '2025' && typeof quizData2025 !== 'undefined') {
        quizData = quizData2025;
    } else if (typeof quizData2024 !== 'undefined') {
        quizData = quizData2024;
    }

    if (!quizData || quizData.length === 0) return;

    // ══════════════════════════════════════════════════════════
    // FITUR 1: ACAK URUTAN SOAL (Fisher-Yates)
    // ══════════════════════════════════════════════════════════
    function shuffle(arr) {
        const a = [...arr];
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    }

    // ══════════════════════════════════════════════════════════
    // FITUR 2: ACAK PILIHAN JAWABAN (kunci disesuaikan otomatis)
    // ══════════════════════════════════════════════════════════
    function shuffleOptions(q) {
        if (q.tipe === 'uraian' || !q.opsi || q.opsi.length === 0) return { ...q };
        const origIdx = q.opsi.map((_, i) => i);
        const shuffled = shuffle(origIdx);
        const newOpsi  = shuffled.map(i => q.opsi[i]);
        let newKunci;
        if (q.tipe === 'pga') {
            newKunci = (Array.isArray(q.kunciJawaban) ? q.kunciJawaban : []).map(k => shuffled.indexOf(k));
        } else {
            newKunci = shuffled.indexOf(q.kunciJawaban);
        }
        return { ...q, opsi: newOpsi, kunciJawaban: newKunci };
    }

    // Terapkan shuffle
    quizData    = shuffle(quizData).map(shuffleOptions);
    userAnswers = quizData.map(q => q.tipe === 'pga' ? [] : null);

    // ══════════════════════════════════════════════════════════
    // DOM REFERENCES
    // ══════════════════════════════════════════════════════════
    const dom = {
        questionNumberCounter : document.getElementById("q-number-counter"),
        progressPercent       : document.getElementById("progress-percent"),
        progressBar           : document.getElementById("progress-bar"),
        materiLabel           : document.getElementById("q-materi-label"),
        questionText          : document.getElementById("q-text"),
        imageContainer        : document.getElementById("q-image-container"),
        imageEl               : document.getElementById("q-image"),
        quoteEl               : document.getElementById("q-quote"),
        optionsGrid           : document.getElementById("q-options-grid"),
        essayContainer        : document.getElementById("q-essay-container"),
        essayInput            : document.getElementById("q-essay-input"),
        btnPrev               : document.getElementById("btn-prev"),
        btnNext               : document.getElementById("btn-next"),
        tipContainer          : document.getElementById("q-tip-container"),
        tipText               : document.getElementById("q-tip-text"),
        navGrid               : document.getElementById("nav-grid"),
        timerDisplay          : document.getElementById("timer-display"),
        // Modal identitas
        modalIdentitas        : document.getElementById("modal-identitas"),
        inputNama             : document.getElementById("input-nama"),
        inputKelas            : document.getElementById("input-kelas"),
        btnMulai              : document.getElementById("btn-mulai"),
        errorNama             : document.getElementById("error-nama"),
        errorKelas            : document.getElementById("error-kelas"),
        // Overlay peringatan
        overlayWarning        : document.getElementById("overlay-warning"),
        warningMsg            : document.getElementById("warning-msg"),
        btnLanjutkan          : document.getElementById("btn-lanjutkan"),
        // Violasi counter di header
        violasiCounter        : document.getElementById("violasi-counter"),
        violasiBadge          : document.getElementById("violasi-badge"),
        // Nama siswa di header
        labelNamaSiswa        : document.getElementById("label-nama-siswa")
    };

    // ══════════════════════════════════════════════════════════
    // MODAL IDENTITAS — tampilkan di awal
    // ══════════════════════════════════════════════════════════
    if (dom.modalIdentitas) dom.modalIdentitas.style.display = 'flex';

    if (dom.btnMulai) {
        dom.btnMulai.addEventListener('click', () => {
            const nama  = dom.inputNama  ? dom.inputNama.value.trim() : '';
            const kelas = dom.inputKelas ? dom.inputKelas.value       : '';
            let valid   = true;

            if (!nama) {
                if (dom.errorNama) dom.errorNama.style.display = 'block';
                dom.inputNama && dom.inputNama.classList.add('border-red-500');
                valid = false;
            } else {
                if (dom.errorNama) dom.errorNama.style.display = 'none';
                dom.inputNama && dom.inputNama.classList.remove('border-red-500');
            }

            if (!kelas || kelas === '') {
                if (dom.errorKelas) dom.errorKelas.style.display = 'block';
                valid = false;
            } else {
                if (dom.errorKelas) dom.errorKelas.style.display = 'none';
            }

            if (!valid) return;

            studentName  = nama;
            studentClass = kelas;

            if (dom.modalIdentitas) dom.modalIdentitas.style.display = 'none';
            if (dom.labelNamaSiswa) dom.labelNamaSiswa.textContent = `${studentName} · ${studentClass}`;

            startExam();
        });
    }

    // ══════════════════════════════════════════════════════════
    // MULAI UJIAN
    // ══════════════════════════════════════════════════════════
    function startExam() {
        examStarted    = true;
        startTimestamp = Date.now();
        requestFullscreen();
        renderQuestion(0);
        startTimer();
        activateSecurity();
    }

    // ══════════════════════════════════════════════════════════
    // RENDER SOAL
    // ══════════════════════════════════════════════════════════
    function renderQuestion(index) {
        currentIndex = index;
        const q     = quizData[index];
        const num   = index + 1;
        const total = quizData.length;

        dom.questionNumberCounter.innerHTML = `Soal Nomor ${num} <span class="text-on-surface-variant/30 font-normal">/ ${total}</span>`;
        const pct = Math.round((num / total) * 100);
        dom.progressPercent.textContent = `${pct}% Selesai`;
        dom.progressBar.style.width     = `${pct}%`;

        dom.materiLabel.textContent  = `Materi: ${q.materi || 'Umum'}`;
        dom.questionText.innerHTML   = q.pertanyaan;

        // Gambar / Kutipan
        if (q.gambar || q.kutipan) {
            dom.imageContainer.style.display = 'block';
            dom.imageEl.style.display = q.gambar ? 'block' : 'none';
            if (q.gambar) dom.imageEl.src = q.gambar;
            if (q.kutipan) {
                dom.quoteEl.parentElement.style.display = 'flex';
                dom.quoteEl.textContent = q.kutipan;
            } else {
                dom.quoteEl.parentElement.style.display = 'none';
            }
        } else {
            dom.imageContainer.style.display = 'none';
        }

        // Pilihan atau Uraian
        if (q.tipe === 'uraian') {
            dom.optionsGrid.style.display   = 'none';
            dom.essayContainer.style.display = 'block';
            dom.essayInput.value = userAnswers[index] || '';
            dom.essayInput.oninput = (e) => {
                userAnswers[index] = e.target.value.trim() === '' ? null : e.target.value;
                renderSidebarNav();
            };
        } else {
            dom.essayContainer.style.display = 'none';
            dom.optionsGrid.style.display    = 'grid';
            const labels = ['A', 'B', 'C', 'D', 'E'];
            dom.optionsGrid.innerHTML = '';

            q.opsi.forEach((optText, optIndex) => {
                const isSelected = q.tipe === 'pga'
                    ? userAnswers[index].includes(optIndex)
                    : userAnswers[index] === optIndex;

                const btn = document.createElement('button');
                btn.className = 'w-full text-left flex items-start gap-4 p-6 rounded-3xl transition-all active:scale-[0.98] duration-200 border-2';

                if (isSelected) {
                    btn.classList.add('bg-primary-fixed', 'border-primary', 'shadow-[0px_10px_30px_rgba(0,107,71,0.1)]');
                } else {
                    btn.classList.add('bg-surface-container-low', 'hover:bg-surface-container-high', 'border-transparent');
                }

                btn.addEventListener('click', () => selectAnswer(index, optIndex));

                btn.innerHTML = `
                    <div class="flex-shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center font-headline font-bold text-lg transition-colors ${isSelected ? 'bg-primary text-white' : 'bg-surface-container-lowest text-on-surface-variant border border-outline-variant/30'}">
                        ${labels[optIndex]}
                    </div>
                    <div class="flex-1 mt-2.5">
                        <p class="${isSelected ? 'text-on-primary-fixed font-bold' : 'text-on-surface-variant font-medium'} leading-relaxed">${optText}</p>
                    </div>
                    ${isSelected ? `<span class="material-symbols-outlined text-primary mt-2.5 text-2xl" style="font-variation-settings: 'FILL' 1;">${q.tipe === 'pga' ? 'check_box' : 'check_circle'}</span>` : ''}
                `;
                dom.optionsGrid.appendChild(btn);
            });
        }

        // Tips
        if (q.tipsBidang && userAnswers[index] !== null && userAnswers[index] !== '') {
            dom.tipContainer.style.display = 'flex';
            dom.tipText.textContent = q.tipsBidang;
        } else {
            dom.tipContainer.style.display = 'none';
        }

        renderSidebarNav();

        dom.btnNext.innerHTML = index === total - 1
            ? `<span>Selesai</span><span class="material-symbols-outlined" data-icon="done_all">done_all</span>`
            : `<span>Selanjutnya</span><span class="material-symbols-outlined" data-icon="arrow_forward">arrow_forward</span>`;
    }

    function renderSidebarNav() {
        dom.navGrid.innerHTML = '';
        quizData.forEach((_, i) => {
            const el = document.createElement('div');
            if (i === currentIndex) {
                el.className = 'aspect-square flex items-center justify-center rounded-xl ring-2 ring-primary ring-offset-2 bg-primary-fixed text-on-primary-fixed text-sm font-bold cursor-pointer';
            } else {
                const answered = quizData[i].tipe === 'pga'
                    ? (userAnswers[i] && userAnswers[i].length > 0)
                    : (userAnswers[i] !== null && userAnswers[i] !== '');
                el.className = answered
                    ? 'aspect-square flex items-center justify-center rounded-xl bg-primary text-white text-sm font-bold cursor-pointer'
                    : 'aspect-square flex items-center justify-center rounded-xl bg-surface-container-low text-on-surface-variant text-sm font-medium hover:bg-surface-container-high transition-colors cursor-pointer border border-outline-variant/10';
            }
            el.textContent = i + 1;
            el.addEventListener('click', () => { currentIndex = i; renderQuestion(currentIndex); });
            dom.navGrid.appendChild(el);
        });
    }

    function selectAnswer(qIndex, optIndex) {
        if (quizData[qIndex].tipe === 'pga') {
            const arr = userAnswers[qIndex];
            if (arr.includes(optIndex)) arr.splice(arr.indexOf(optIndex), 1);
            else arr.push(optIndex);
        } else {
            userAnswers[qIndex] = optIndex;
        }
        renderQuestion(qIndex);
    }

    // ══════════════════════════════════════════════════════════
    // FITUR 9: TIMER GLOBAL (diperkuat, tidak bisa direset)
    // ══════════════════════════════════════════════════════════
    function startTimer() {
        if (!dom.timerDisplay) return;
        timerInterval = setInterval(() => {
            if (timeLeft <= 0) {
                clearInterval(timerInterval);
                dom.timerDisplay.textContent = '00:00';
                finishExam(true);
                return;
            }
            timeLeft--;
            const m = String(Math.floor(timeLeft / 60)).padStart(2, '0');
            const s = String(timeLeft % 60).padStart(2, '0');
            dom.timerDisplay.textContent = `${m}:${s}`;

            // Peringatan merah saat < 10 menit
            if (timeLeft === 10 * 60) {
                dom.timerDisplay.classList.remove('text-secondary');
                dom.timerDisplay.classList.add('text-error', 'animate-pulse');
            }
        }, 1000);
    }

    // ══════════════════════════════════════════════════════════
    // SELESAIKAN UJIAN
    // ══════════════════════════════════════════════════════════
    function finishExam(isTimeout = false) {
        examStarted = false; // Mencegah fitur anti-cheat (seperti exitFullscreen) mencatat pelanggaran
        if (timerInterval) clearInterval(timerInterval);

        let score = 0, totalPG = 0, essayCount = 0;
        quizData.forEach((q, i) => {
            if (q.tipe === 'pg') {
                totalPG++;
                if (userAnswers[i] === q.kunciJawaban) score++;
            } else if (q.tipe === 'pga') {
                totalPG++;
                const uArr = [...userAnswers[i]].sort();
                const kArr = Array.isArray(q.kunciJawaban) ? [...q.kunciJawaban].sort() : [];
                if (uArr.length === kArr.length && uArr.every((v, idx) => v === kArr[idx])) score++;
            } else if (q.tipe === 'uraian') {
                essayCount++;
            }
        });

        const nilai  = totalPG > 0 ? Math.round((score / totalPG) * 100) : 0;
        const durasi = startTimestamp ? Math.round((Date.now() - startTimestamp) / 60000) : 0;

        // FITUR 11: Kirim hasil ke Google Sheets
        sendToSheet({
            action      : 'hasil',
            nama        : studentName,
            kelas       : studentClass,
            nilai,
            benar       : score,
            total       : totalPG,
            durasi,
            pelanggaran : violationCount
        });

        exitFullscreen();

        const pesanTimeout = isTimeout ? '⏰ Waktu ujian telah habis!\n\n' : '';
        alert(
            `✅ ${pesanTimeout}Ujian Selesai!\n\n` +
            `👤 Nama  : ${studentName}\n` +
            `🏫 Kelas : ${studentClass}\n\n` +
            `📊 Nilai    : ${nilai}\n` +
            `✔️  Benar   : ${score} dari ${totalPG} soal\n` +
            (essayCount > 0 ? `📝 Uraian  : ${essayCount} soal (dinilai guru)\n` : '') +
            `\n⚠️  Pelanggaran tercatat: ${violationCount} kali`
        );
    }
    window.finishExam = () => finishExam(false);

    // ══════════════════════════════════════════════════════════
    // FITUR 11: KIRIM KE GOOGLE SHEETS
    // ══════════════════════════════════════════════════════════
    function sendToSheet(payload) {
        fetch(SHEET_URL, {
            method  : 'POST',
            headers : { 'Content-Type': 'application/json' },
            body    : JSON.stringify(payload),
            mode    : 'no-cors'
        }).catch(() => {}); // gagal diam-diam agar tidak mengganggu ujian
    }

    // ══════════════════════════════════════════════════════════
    // FITUR 11: CATAT PELANGGARAN
    // ══════════════════════════════════════════════════════════
    function logViolation(tipe, detail) {
        violationCount++;
        sendToSheet({
            action : 'log',
            nama   : studentName || '(belum isi nama)',
            kelas  : studentClass || '-',
            tipe,
            detail,
            soal   : currentIndex + 1
        });

        // Update badge di header
        if (dom.violasiCounter) dom.violasiCounter.textContent = violationCount;
        if (dom.violasiBadge) {
            dom.violasiBadge.style.display = 'flex';
            dom.violasiBadge.classList.add('animate-bounce');
            setTimeout(() => dom.violasiBadge.classList.remove('animate-bounce'), 1000);
        }

        showWarning(tipe, detail);
    }

    // ══════════════════════════════════════════════════════════
    // TAMPILKAN OVERLAY PERINGATAN
    // ══════════════════════════════════════════════════════════
    function showWarning(tipe, detail) {
        if (!dom.overlayWarning || !dom.warningMsg) return;
        const sisa = MAX_VIOLATIONS - violationCount;
        const ikon = tipe === 'Pindah Tab' ? '👁️' : '🖥️';

        dom.warningMsg.innerHTML = `
            <div class="text-6xl mb-4 text-center">${ikon}</div>
            <h2 class="text-2xl font-headline font-bold text-center mb-1" style="color:#ba1a1a;">
                Peringatan ke-${violationCount}!
            </h2>
            <p class="text-center font-semibold mb-1" style="color:#3e4942;">${tipe}</p>
            <p class="text-center text-sm mb-6" style="color:#6e7a71;">${detail}</p>
            <div class="w-full rounded-2xl p-4 text-center" style="background:${sisa > 0 ? '#fff3cd' : '#ffdad6'};">
                <p class="font-bold text-sm" style="color:${sisa > 0 ? '#574500' : '#ba1a1a'};">
                    ${sisa > 0
                        ? `⚠️ Sisa toleransi: <strong>${sisa}</strong> kali lagi`
                        : '🚫 Batas pelanggaran habis! Ujian akan diselesaikan.'}
                </p>
            </div>
        `;

        dom.overlayWarning.style.display = 'flex';

        // Sembunyikan tombol Lanjutkan jika sudah melebihi batas
        if (dom.btnLanjutkan) {
            dom.btnLanjutkan.style.display = sisa > 0 ? 'block' : 'none';
        }

        if (sisa <= 0) {
            setTimeout(() => finishExam(false), 3000);
        }
    }

    if (dom.btnLanjutkan) {
        dom.btnLanjutkan.addEventListener('click', () => {
            if (dom.overlayWarning) dom.overlayWarning.style.display = 'none';
            requestFullscreen(); // minta kembali fullscreen
        });
    }

    // ══════════════════════════════════════════════════════════
    // AKTIFKAN SEMUA FITUR KEAMANAN
    // ══════════════════════════════════════════════════════════
    function activateSecurity() {

        // ── FITUR 8: Blokir Klik Kanan ────────────────────────
        document.addEventListener('contextmenu', e => {
            e.preventDefault();
            return false;
        });

        // ── FITUR 8: Blokir Keyboard Shortcut ─────────────────
        document.addEventListener('keydown', e => {
            const isBlocked = (
                e.key === 'F12' ||
                e.key === 'F11' ||
                (e.ctrlKey && ['u','U','c','C','a','A','s','S','p','P','j','J'].includes(e.key)) ||
                (e.ctrlKey && e.shiftKey && ['i','I','j','J','c','C','k','K'].includes(e.key)) ||
                (e.ctrlKey && e.altKey) ||
                (e.metaKey)
            );
            if (isBlocked) {
                e.preventDefault();
                e.stopPropagation();
                return false;
            }
        }, true);

        // ── FITUR 6: Deteksi Pindah Tab ───────────────────────
        document.addEventListener('visibilitychange', () => {
            if (!examStarted || window.isConfirming) return;
            if (document.hidden) {
                logViolation('Pindah Tab', 'Siswa berpindah ke tab/aplikasi lain saat ujian berlangsung.');
            }
        });

        // ── FITUR 7: Deteksi Keluar Fullscreen ────────────────
        ['fullscreenchange', 'webkitfullscreenchange', 'mozfullscreenchange'].forEach(evt => {
            document.addEventListener(evt, () => {
                if (!examStarted || window.isConfirming) return;
                const isFS = !!(
                    document.fullscreenElement ||
                    document.webkitFullscreenElement ||
                    document.mozFullScreenElement
                );
                if (!isFS) {
                    logViolation('Keluar Fullscreen', 'Siswa keluar dari mode layar penuh saat ujian berlangsung.');
                }
            });
        });
    }

    // ── Fullscreen Helpers ─────────────────────────────────────
    function requestFullscreen() {
        const el = document.documentElement;
        try {
            if (el.requestFullscreen) el.requestFullscreen();
            else if (el.webkitRequestFullscreen) el.webkitRequestFullscreen();
            else if (el.mozRequestFullScreen) el.mozRequestFullScreen();
        } catch(e) {}
    }
    function exitFullscreen() {
        try {
            if (document.exitFullscreen) document.exitFullscreen();
            else if (document.webkitExitFullscreen) document.webkitExitFullscreen();
        } catch(e) {}
    }

    // ══════════════════════════════════════════════════════════
    // NAVIGASI PREV / NEXT
    // ══════════════════════════════════════════════════════════
    dom.btnPrev.addEventListener('click', () => {
        if (currentIndex > 0) { currentIndex--; renderQuestion(currentIndex); }
    });
    dom.btnNext.addEventListener('click', () => {
        if (currentIndex < quizData.length - 1) { 
            currentIndex++; 
            renderQuestion(currentIndex); 
        } else {
            // Cek apakah ada soal yang belum dijawab
            const belumDijawab = userAnswers.some(ans => ans === null || (Array.isArray(ans) && ans.length === 0));
            window.isConfirming = true;
            if (belumDijawab) {
                const yakin = confirm("Masih ada soal yang belum dijawab. Apakah Anda yakin ingin mengakhiri ujian?");
                window.isConfirming = false;
                if (!yakin) {
                    requestFullscreen(); // Pastikan tetap fullscreen setelah confirm
                    return;
                }
            } else {
                const yakin = confirm("Anda sudah berada di soal terakhir. Akhiri ujian sekarang?");
                window.isConfirming = false;
                if (!yakin) {
                    requestFullscreen(); // Pastikan tetap fullscreen setelah confirm
                    return;
                }
            }
            window.isConfirming = false;
            finishExam(false);
        }
    });

});

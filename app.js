/* ==========================================================
   2 YEARS & 5 MONTHS ANNIVERSARY - INTERACTIVE APPLICATION
   Full Thai Language Edition (Zero Dependencies, Offline-Ready)
   ========================================================== */

(function () {
  'use strict';

  // --- Configuration & State Management ---
  const DEFAULT_CONFIG = {
    gfName: "แพรภัทร",
    bfName: "รักแพรที่สุดในโลก 💕",
    // 2 years and 5 months on August 18, 2026 -> Start date: March 18, 2024
    startDate: "2024-03-18",
    subtitle: `"พี่แพรค้าบบบอยากให้ได้อยู่ด้วยกานกอดกานกินของอาหร่อยไปทุกๆวานเลยยเค้าเลิ้ฟดทอมากน้าาคิดถึงห้อมกอดแย้วววว 🐰💖"`,
    specialMessage: `แพรภัทรค้าบวานนนี้ก็ผ่านมา 2 ปี 5 เดือนแล้วน้ารอบบนี้ทำเว็ปห้ายยยวานนี้ร้ากเทอมากเลยน้าเบ้บบบมาพูดน่าร้ากกานเย้อออเค้าร้ากแพรมากเลยน้าวแล้วก็จาร้ากให้มากขึ้นอีกเยยยเรสมาให้ความร้ากกานเย้อออยากเจอกานให้เย้อเยยยคิดถึงงที่สุดน้าาา 🐱💖`
  };

  // 10 Heartwarming Thai Reasons for the Sweet Reasons Jar
  const SWEET_REASONS = [
    "เค้ารักกระต่ายน้อยที่สุดดในโลกกก",
    "กลิ่นแพรห้อมมากอยากดมตลอดเยยย",
    "เสียงแพรน่าร้ากมากกอยากฟางงทุกวานน",
    "พี่แพรสวยมากกแต่งตัวก็ดีเยยยขาวสวยยมาให้เตเต้จุ๊บเยย",
    "มือแพรภัทรนุ่มมากอยากจับมือทุกวานน",
    "แพรภัทรพาเค้าไปกินหลายยอย่างมากเลยเกรงจายแต่มีความสุขมาก",
    "คิดถึงแพรภัทรที่สุดเยยอยากมากอดกานแล้วว",
    "เพราะมีอารายกานคอยช่วยกานเสมอเลยเลิ้ฟมากกกก",
    "ผมแพรสวยมากกกอยากจับอยากดมตลอดเยย",
    "เพราะอยากมีอนาคตด้วยกานที่ดีมากมะว่ายังงายก็เลิ้ฟฟฟฟฟที่สุดดด"
  ];

  // Love Quiz Questions (Thai)
  const QUIZ_QUESTIONS = [
    {
      question: "เค้ารักแพรมากแค่ไหน?",
      options: [
        { text: "รักเท่าโลกเลย 🌍", reaction: "ยังน้อยไปน้า รักมากกว่านั้นเยอะเลย! 💕" },
        { text: "รักมากกว่าดวงดาวทุกดวงในจักรวาล ✨", reaction: "ถูกต้องนะค้าบ! รักอย่างไม่มีที่สิ้นสุดเลย 💖" },
        { text: "รักมากกว่าของกินและขนมหวานทั้งหมดรวมกัน 🍰", reaction: "จริงที่สุด! แพรคืออันดับ 1 ในใจเค้าเสมอ 👑" },
        { text: "รักทั้งหมดที่พูดมารวมกันคูณล้านล้านเท่า! 🌸", reaction: "ถูกต้อง 100% เต็ม! แพรคือที่สุดของเค้าแล้ว 🎉" }
      ]
    },
    {
      question: "สิ่งที่ชอบที่สุดเวลาอยู่ด้วยกันคืออะไร?",
      options: [
        { text: "การได้กอดและจับมือกันอุ่นๆ 🧸", reaction: "อบอุ่นหัวใจที่สุดเลยเนอะ 💕" },
        { text: "การได้ไปกินของอร่อยๆ และขนมหวานด้วยกัน 🥞", reaction: "จริงงง! สายกินตัวยงทั้งคู่เลย 🍰" },
        { text: "แค่ได้มองหน้าและหัวเราะไปด้วยกัน 📸", reaction: "ทุกวินาทีที่มีแพรคือเวทมนตร์จริงๆ 🌟" },
        { text: "ชอบทุกอย่างเลย ขอแค่มีแพรอยู่ข้างๆ 💑", reaction: "ถูกต้องที่สุด! อยู่ด้วยกันตลอดไปเลยน้า 💖" }
      ]
    },
    {
      question: "เป้าหมายในอนาคตของเราสองคนคืออะไร?",
      options: [
        { text: "ไปเที่ยวที่สวยๆ และถ่ายรูปคู่อีกเยอะๆ ✈️", reaction: "เตรียมจัดกระเป๋าไปด้วยกันเลย! 🌴" },
        { text: "รักและดูแลแพรให้ดีขึ้นในทุกๆ วัน 💖", reaction: "สัญญาเลยว่าจะดูแลเจ้าหญิงคนนี้ตลอดไป 👑" },
        { text: "สร้างบ้านที่แสนอบอุ่นและมีความสุขด้วยกัน 🏡", reaction: "รอคอยวันที่จะมีอนาคตที่สดใสด้วยกันน้า ✨" },
        { text: "อยู่เคียงข้างกันและรักกันแบบนี้ตลอดไป 🥂", reaction: "เย้! สุขสันต์วันครบรอบ 2 ปี 5 เดือน รักแพรที่สุดเลยนะค้าบ 🥂💖" }
      ]
    }
  ];

  // Load Saved Configuration from LocalStorage
  let config = Object.assign({}, DEFAULT_CONFIG);
  try {
    const saved = localStorage.getItem('love_anniversary_config');
    if (saved) {
      const parsed = JSON.parse(saved);
      if (parsed.startDate === '2024-03-17') {
        parsed.startDate = '2024-03-18';
      }
      if (parsed.subtitle && parsed.subtitle.includes('ของขวัญที่ดีที่สุด')) {
        parsed.subtitle = DEFAULT_CONFIG.subtitle;
      }
      config = Object.assign(config, parsed);
    }
  } catch (e) {
    console.warn("Storage load error", e);
  }

  // --- Background Audio: fish in the pool 花屋敷 ---
  const bgMusic = new Audio('audio/music.mp3');
  bgMusic.loop = true;
  bgMusic.preload = 'auto';
  let isMusicPlaying = false;

  // --- Web Audio API for UI Sounds (Pop & Chimes) ---
  let audioCtx = null;

  function initAudioContext() {
    if (!audioCtx) {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (AudioContextClass) {
        audioCtx = new AudioContextClass();
      }
    }
    if (audioCtx && audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
  }

  function playChimeNote(freq, time, duration = 1.2, volume = 0.15) {
    if (!audioCtx) return;
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    const filter = audioCtx.createBiquadFilter();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, time);

    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(1600, time);

    gain.gain.setValueAtTime(0.001, time);
    gain.gain.exponentialRampToValueAtTime(volume, time + 0.04);
    gain.gain.exponentialRampToValueAtTime(0.0001, time + duration);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(audioCtx.destination);

    osc.start(time);
    osc.stop(time + duration);
  }

  // Sound effects: Sweet pop / bubble sound
  function playPopSound() {
    initAudioContext();
    if (!audioCtx) return;
    const now = audioCtx.currentTime;
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(520, now);
    osc.frequency.exponentialRampToValueAtTime(880, now + 0.1);
    gain.gain.setValueAtTime(0.18, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.15);
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start(now);
    osc.stop(now + 0.15);
  }

  // Sound effects: Magical sparkle chime chord
  function playMagicChime() {
    initAudioContext();
    if (!audioCtx) return;
    const now = audioCtx.currentTime;
    const notes = [523.25, 659.25, 783.99, 1046.50, 1318.51]; // C5, E5, G5, C6, E6
    notes.forEach((freq, idx) => {
      playChimeNote(freq, now + (idx * 0.08), 1.4, 0.12);
    });
  }

  function toggleMusic() {
    const musicBtn = document.getElementById('music-btn');
    const musicStatus = document.getElementById('music-status');
    if (!isMusicPlaying) {
      bgMusic.play().then(() => {
        isMusicPlaying = true;
        if (musicStatus) musicStatus.textContent = 'เปิด 🌸';
        if (musicBtn) musicBtn.classList.add('active');
      }).catch((err) => {
        console.warn("Audio autoplay policy", err);
      });
    } else {
      bgMusic.pause();
      isMusicPlaying = false;
      if (musicStatus) musicStatus.textContent = 'ปิด';
      if (musicBtn) musicBtn.classList.remove('active');
    }
  }

  // --- Background Canvas: Floating Hearts & Soft Sparkles ---
  const canvas = document.getElementById('bg-canvas');
  let ctx = canvas ? canvas.getContext('2d') : null;
  let particles = [];
  const PARTICLE_COUNT = 32;

  function resizeCanvas() {
    if (!canvas) return;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  class LoveParticle {
    constructor() {
      this.reset(true);
    }
    reset(initial = false) {
      this.x = Math.random() * (canvas ? canvas.width : window.innerWidth);
      this.y = initial ? Math.random() * (canvas ? canvas.height : window.innerHeight) : (canvas ? canvas.height + 20 : window.innerHeight + 20);
      this.size = Math.random() * 14 + 10;
      this.speedY = Math.random() * 0.7 + 0.4;
      this.speedX = (Math.random() - 0.5) * 0.5;
      this.opacity = Math.random() * 0.45 + 0.25;
      this.type = Math.random() > 0.4 ? 'heart' : 'sparkle';
      this.color = ['#ff85a1', '#ffccd5', '#fbb1bd', '#ffa0b2', '#ffc6d9'][Math.floor(Math.random() * 5)];
      this.angle = Math.random() * Math.PI * 2;
      this.angularSpeed = (Math.random() - 0.5) * 0.02;
    }
    update() {
      this.y -= this.speedY;
      this.x += this.speedX + Math.sin(this.angle) * 0.3;
      this.angle += this.angularSpeed;
      if (this.y < -30) {
        this.reset(false);
      }
    }
    draw() {
      if (!ctx) return;
      ctx.save();
      ctx.globalAlpha = this.opacity;
      ctx.fillStyle = this.color;
      ctx.translate(this.x, this.y);
      ctx.rotate(this.angle);

      if (this.type === 'heart') {
        const s = this.size * 0.6;
        ctx.beginPath();
        ctx.moveTo(0, s * 0.3);
        ctx.bezierCurveTo(-s, -s * 0.6, -s * 1.4, s * 0.4, 0, s * 1.4);
        ctx.bezierCurveTo(s * 1.4, s * 0.4, s, -s * 0.6, 0, s * 0.3);
        ctx.fill();
      } else {
        const r = this.size * 0.5;
        ctx.beginPath();
        ctx.moveTo(0, -r);
        ctx.quadraticCurveTo(0, 0, r, 0);
        ctx.quadraticCurveTo(0, 0, 0, r);
        ctx.quadraticCurveTo(0, 0, -r, 0);
        ctx.quadraticCurveTo(0, 0, 0, -r);
        ctx.fill();
      }
      ctx.restore();
    }
  }

  function initBackgroundParticles() {
    if (!canvas || !ctx) return;
    resizeCanvas();
    particles = [];
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push(new LoveParticle());
    }
    animateParticles();
  }

  function animateParticles() {
    if (!ctx || !canvas) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let p of particles) {
      p.update();
      p.draw();
    }
    requestAnimationFrame(animateParticles);
  }

  // --- Live Anniversary Timer (Years, Months, Days, Hours, Minutes, Seconds) ---
  function updateAnniversaryTimer() {
    const startDate = new Date(config.startDate + 'T00:00:00');
    const now = new Date();

    if (isNaN(startDate.getTime())) return;

    let diffMs = now.getTime() - startDate.getTime();
    if (diffMs < 0) diffMs = 0;

    let startYear = startDate.getFullYear();
    let startMonth = startDate.getMonth();
    let startDay = startDate.getDate();

    let nowYear = now.getFullYear();
    let nowMonth = now.getMonth();
    let nowDay = now.getDate();

    let years = nowYear - startYear;
    let months = nowMonth - startMonth;
    let days = nowDay - startDay;

    if (days < 0) {
      months -= 1;
      const prevMonth = new Date(nowYear, nowMonth, 0);
      days += prevMonth.getDate();
    }
    if (months < 0) {
      years -= 1;
      months += 12;
    }

    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const totalDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
    const totalMinutes = Math.floor(diffMs / (1000 * 60));
    const heartbeats = (totalMinutes * 72).toLocaleString();

    // DOM Updates
    const yearsEl = document.getElementById('years-num');
    const monthsEl = document.getElementById('months-num');
    const daysEl = document.getElementById('days-num');
    const hoursEl = document.getElementById('hours-num');
    const minutesEl = document.getElementById('minutes-num');
    const secondsEl = document.getElementById('seconds-num');
    const totalDaysEl = document.getElementById('total-days-num');
    const heartbeatsEl = document.getElementById('heartbeats-num');

    if (yearsEl) yearsEl.textContent = years;
    if (monthsEl) monthsEl.textContent = months;
    if (daysEl) daysEl.textContent = String(days).padStart(2, '0');
    if (hoursEl) hoursEl.textContent = String(hours).padStart(2, '0');
    if (minutesEl) minutesEl.textContent = String(minutes).padStart(2, '0');
    if (secondsEl) secondsEl.textContent = String(seconds).padStart(2, '0');

    if (totalDaysEl) totalDaysEl.textContent = totalDays.toLocaleString() + ' วัน';
    if (heartbeatsEl) heartbeatsEl.textContent = heartbeats;
  }

  // --- Tap & Click Floating Hearts / Sparkles Effect ---
  function spawnTapHeart(x, y) {
    const container = document.getElementById('tap-effects-container');
    if (!container) return;

    const emojis = ['💖', '🌸', '✨', '💕', '🐱', '🐾', '🧁', '🧸', '🎀'];
    const emoji = emojis[Math.floor(Math.random() * emojis.length)];

    const span = document.createElement('span');
    span.className = 'floating-tap-heart';
    span.textContent = emoji;
    span.style.left = `${x}px`;
    span.style.top = `${y}px`;
    span.style.fontSize = `${Math.random() * 12 + 20}px`;

    container.appendChild(span);
    setTimeout(() => {
      span.remove();
    }, 1200);
  }

  // --- Confetti & Heart Shower ---
  function showerLoveConfetti() {
    playMagicChime();
    const count = 40;
    for (let i = 0; i < count; i++) {
      setTimeout(() => {
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * (window.innerHeight * 0.7) + (window.innerHeight * 0.2);
        spawnTapHeart(x, y);
      }, i * 35);
    }
  }

  // --- Special Message Box Features (Copy & Interactions) ---
  function initSpecialMessageBox() {
    const copyBtn = document.getElementById('copy-msg-btn');
    const msgTextEl = document.getElementById('special-message-text');

    if (copyBtn && msgTextEl) {
      copyBtn.addEventListener('click', () => {
        const text = msgTextEl.textContent.trim();
        navigator.clipboard.writeText(text).then(() => {
          const originalHTML = copyBtn.innerHTML;
          copyBtn.innerHTML = '<span>✅ คัดลอกสำเร็จแล้วน้า! 💖</span>';
          playMagicChime();
          showerLoveConfetti();
          setTimeout(() => {
            copyBtn.innerHTML = originalHTML;
          }, 2500);
        }).catch(() => {
          alert('คัดลอกข้อความเรียบร้อยแล้วค้าบ 💕');
        });
      });
    }
  }

  // --- Sweet Reasons Jar Logic ---
  let currentReasonIndex = 0;
  function initReasonsJar() {
    const jarWrapper = document.getElementById('love-jar');
    const nextBtn = document.getElementById('next-reason-btn');
    const reasonTextEl = document.getElementById('reason-text');
    const reasonNumEl = document.getElementById('reason-number');

    function showNextReason() {
      playPopSound();
      currentReasonIndex = (currentReasonIndex + 1) % SWEET_REASONS.length;

      const card = document.getElementById('reason-display-card');
      if (card) {
        card.style.transform = 'scale(0.97)';
        setTimeout(() => {
          card.style.transform = 'scale(1)';
        }, 150);
      }

      if (reasonNumEl) reasonNumEl.textContent = currentReasonIndex + 1;
      if (reasonTextEl) {
        reasonTextEl.style.opacity = '0';
        setTimeout(() => {
          reasonTextEl.textContent = `"${SWEET_REASONS[currentReasonIndex]}"`;
          reasonTextEl.style.opacity = '1';
        }, 120);
      }
    }

    if (jarWrapper) jarWrapper.addEventListener('click', showNextReason);
    if (nextBtn) nextBtn.addEventListener('click', showNextReason);
  }

  // --- Photo Scrapbook (View-Only Mode) ---
  function initPhotoUploads() {
    // Photos are preset to view-only mode
  }

  // --- Love Quiz System (Thai) ---
  let quizStep = 0;
  function renderQuizQuestion() {
    const questionData = QUIZ_QUESTIONS[quizStep];
    const stepLabel = document.getElementById('quiz-step-label');
    const questionText = document.getElementById('quiz-question');
    const optionsContainer = document.getElementById('quiz-options-container');
    const progressBar = document.getElementById('quiz-progress');
    const reactionMsg = document.getElementById('quiz-reaction-msg');

    if (!questionData) {
      if (stepLabel) stepLabel.textContent = "ยินดีด้วยนะค้าบ! 🎉";
      if (questionText) questionText.textContent = "คะแนนความรัก 100% เต็ม! แพรคือกระต่ายน้อยที่น่ารักที่สุดในโลก! 💖";
      if (optionsContainer) {
        optionsContainer.innerHTML = `
          <div style="text-align:center; padding: 20px 0;">
            <p style="font-size: 1.15rem; font-weight:700; color: #ff3366; margin-bottom: 16px;">
              👑 มอบมงกุฎแฟนดีเด่นประจำ 2 ปี 5 เดือนให้เลยยย 🌸
            </p>
            <button class="cute-btn" id="restart-quiz-btn">เล่นใหม่อีกรอบ 🧸</button>
          </div>
        `;
        document.getElementById('restart-quiz-btn').addEventListener('click', () => {
          quizStep = 0;
          renderQuizQuestion();
        });
      }
      if (progressBar) progressBar.style.width = '100%';
      if (reactionMsg) reactionMsg.style.display = 'none';
      showerLoveConfetti();
      return;
    }

    if (stepLabel) stepLabel.textContent = `คำถามที่ ${quizStep + 1} จาก ${QUIZ_QUESTIONS.length}`;
    if (questionText) questionText.textContent = questionData.question;
    if (progressBar) {
      progressBar.style.width = `${((quizStep + 1) / QUIZ_QUESTIONS.length) * 100}%`;
    }
    if (reactionMsg) reactionMsg.style.display = 'none';

    if (optionsContainer) {
      optionsContainer.innerHTML = '';
      questionData.options.forEach((opt) => {
        const btn = document.createElement('button');
        btn.className = 'quiz-opt-btn';
        btn.innerHTML = `<span>💖</span> <span>${opt.text}</span>`;
        btn.addEventListener('click', () => {
          playPopSound();
          if (reactionMsg) {
            reactionMsg.style.display = 'block';
            reactionMsg.style.background = '#ffe3ec';
            reactionMsg.style.color = '#d6336c';
            reactionMsg.textContent = opt.reaction;
          }
          setTimeout(() => {
            quizStep++;
            renderQuizQuestion();
          }, 1400);
        });
        optionsContainer.appendChild(btn);
      });
    }
  }

  // --- Apply Settings & Configurations to DOM ---
  function applyConfigToDOM() {
    const displayGfName = document.getElementById('display-gf-name');
    const footerGfName = document.getElementById('footer-gf-name');
    const displaySubtitle = document.getElementById('display-subtitle');
    const msgSender = document.getElementById('message-sender-name');
    const msgText = document.getElementById('special-message-text');

    if (displayGfName) displayGfName.textContent = config.gfName;
    if (footerGfName) footerGfName.textContent = config.gfName;
    if (displaySubtitle) displaySubtitle.textContent = config.subtitle;
    if (msgSender) msgSender.textContent = config.bfName;
    if (msgText) msgText.textContent = config.specialMessage;
  }

  // --- Modals Setup (Message Editor & 00:00 Celebration Modal) ---
  function initModals() {
    // 00:00 Anniversary Celebration Modal
    const celebrationModal = document.getElementById('anniversary-celebration-modal');
    const closeCelebrationBtn = document.getElementById('close-celebration-btn');

    if (closeCelebrationBtn && celebrationModal) {
      closeCelebrationBtn.addEventListener('click', () => {
        playPopSound();
        celebrationModal.close();
      });
    }

    // Message Editor Modal
    const editMessageTrigger = document.getElementById('edit-message-trigger');
    const letterModal = document.getElementById('letter-modal');
    const closeLetterBtn = document.getElementById('close-letter-btn');
    const letterForm = document.getElementById('letter-form');
    const inputBody = document.getElementById('input-letter-body');

    if (editMessageTrigger && letterModal) {
      editMessageTrigger.addEventListener('click', (e) => {
        e.stopPropagation();
        if (inputBody) inputBody.value = config.specialMessage;
        letterModal.showModal();
      });
    }

    if (closeLetterBtn && letterModal) {
      closeLetterBtn.addEventListener('click', () => letterModal.close());
    }

    if (letterForm) {
      letterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        config.specialMessage = inputBody.value.trim() || DEFAULT_CONFIG.specialMessage;

        try {
          localStorage.setItem('love_anniversary_config', JSON.stringify(config));
        } catch (err) {
          console.warn(err);
        }

        applyConfigToDOM();
        letterModal.close();
        playMagicChime();
      });
    }
  }

  // --- Global Event Listeners ---
  function initGlobalEvents() {
    // Music Button
    const musicBtn = document.getElementById('music-btn');
    if (musicBtn) musicBtn.addEventListener('click', toggleMusic);

    // Shower Love Confetti Button
    const confettiBtn = document.getElementById('confetti-btn');
    if (confettiBtn) confettiBtn.addEventListener('click', showerLoveConfetti);

    // Back to top
    const backToTopBtn = document.getElementById('back-to-top');
    if (backToTopBtn) {
      backToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }

    // Spawn Heart On Any Tap or Click
    window.addEventListener('click', (e) => {
      if (['INPUT', 'TEXTAREA', 'BUTTON', 'DIALOG'].includes(e.target.tagName)) return;
      spawnTapHeart(e.clientX, e.clientY);
    });

    window.addEventListener('resize', resizeCanvas);
  }

  // --- 00:00 Special: Bigger & Longer Heart Bubbles + Celebration Modal ---
  let specialTimeAnnounced = false;
  let bubbleInterval = null;

  function createBubblePopEffect(x, y) {
    const container = document.getElementById('side-heart-bubbles-container') || document.body;
    const pop = document.createElement('div');
    pop.className = 'bubble-pop-burst';
    pop.style.left = `${x}px`;
    pop.style.top = `${y}px`;
    pop.textContent = '✨💖✨';
    container.appendChild(pop);
    setTimeout(() => pop.remove(), 500);
  }

  function spawnSideHeartBubble(side = 'left') {
    const container = document.getElementById('side-heart-bubbles-container');
    if (!container) return;

    const bubble = document.createElement('div');
    bubble.className = `side-heart-bubble from-${side}`;

    // Bigger size (65px to 110px) and longer duration (8.0s to 13.0s)
    const size = Math.floor(Math.random() * 45 + 65); // 65px to 110px
    const duration = (Math.random() * 5.0 + 8.0).toFixed(2); // 8s to 13s
    const offset = Math.floor(Math.random() * 110 + 15); // 15px to 125px from edge
    const heartEmojis = ['💖', '💕', '💗', '💓', '💞', '🌸', '✨', '🎀', '🧸', '🐰', '❤️', '🧁', '🎈', '💘'];
    const emoji = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];

    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;
    bubble.style.animationDuration = `${duration}s`;

    if (side === 'left') {
      bubble.style.left = `${offset}px`;
    } else {
      bubble.style.right = `${offset}px`;
    }

    bubble.innerHTML = `
      <div class="bubble-shine"></div>
      <span class="bubble-inner-heart" style="font-size: ${Math.floor(size * 0.50)}px;">${emoji}</span>
    `;

    // Click to pop bubble
    bubble.addEventListener('click', (e) => {
      e.stopPropagation();
      playPopSound();
      const rect = bubble.getBoundingClientRect();
      createBubblePopEffect(rect.left + rect.width / 2, rect.top + rect.height / 2);
      bubble.remove();
    });

    container.appendChild(bubble);

    // Auto remove after animation completes
    setTimeout(() => {
      if (bubble.parentNode) {
        bubble.remove();
      }
    }, parseFloat(duration) * 1000 + 300);
  }

  function triggerSideHeartBubbles(durationMs = 60000) {
    if (bubbleInterval) clearInterval(bubbleInterval);

    // Initial burst from both sides
    for (let i = 0; i < 6; i++) {
      setTimeout(() => {
        spawnSideHeartBubble('left');
        spawnSideHeartBubble('right');
      }, i * 180);
    }

    // Continuous stream
    bubbleInterval = setInterval(() => {
      spawnSideHeartBubble('left');
      spawnSideHeartBubble('right');
    }, 400);

    setTimeout(() => {
      if (bubbleInterval) {
        clearInterval(bubbleInterval);
        bubbleInterval = null;
      }
    }, durationMs);
  }

  function showSpecialTimeToast(text = '🎉 00:00 น. ครบรอบ 2 ปี 5 เดือนแล้ววว เย่ๆๆๆ 💖🎈') {
    const existing = document.querySelector('.special-time-toast');
    if (existing) existing.remove();

    const toast = document.createElement('div');
    toast.className = 'special-time-toast';
    toast.innerHTML = `<span>🎈</span><span>${text}</span><span>🐰</span>`;
    document.body.appendChild(toast);

    setTimeout(() => {
      toast.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(-50%) translateY(-30px)';
      setTimeout(() => toast.remove(), 600);
    }, 7000);
  }

  function openCelebrationPopup() {
    const celebrationModal = document.getElementById('anniversary-celebration-modal');
    if (celebrationModal && !celebrationModal.open) {
      celebrationModal.showModal();
    }
  }

  function checkSpecialTime() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();

    // 00:00 Midnight Anniversary Special
    if (hours === 0 && minutes === 0) {
      // Spawn bigger and longer bubbles continuously during 00:00
      if (Math.random() < 0.7) {
        spawnSideHeartBubble('left');
      }
      if (Math.random() < 0.7) {
        spawnSideHeartBubble('right');
      }

      if (!specialTimeAnnounced) {
        specialTimeAnnounced = true;
        playMagicChime();
        openCelebrationPopup();
        showSpecialTimeToast();
        showerLoveConfetti();
      }
    } else {
      if (specialTimeAnnounced && (hours !== 0 || minutes !== 0)) {
        specialTimeAnnounced = false; // Reset for next time
      }
    }
  }

  // Expose helpers globally so user can test or preview manually
  window.triggerHeartBubbles = triggerSideHeartBubbles;
  window.testCelebration = () => {
    openCelebrationPopup();
    playMagicChime();
    showSpecialTimeToast();
    showerLoveConfetti();
    triggerSideHeartBubbles(15000);
  };

  // --- Application Bootstrapping ---
  function initApp() {
    applyConfigToDOM();
    initBackgroundParticles();
    initSpecialMessageBox();
    initReasonsJar();
    initPhotoUploads();
    renderQuizQuestion();
    initModals();
    initGlobalEvents();

    // Start Live Clock and 00:00 Checker
    updateAnniversaryTimer();
    checkSpecialTime();
    setInterval(() => {
      updateAnniversaryTimer();
      checkSpecialTime();
    }, 1000);
  }

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
  } else {
    initApp();
  }
})();

// ============================================
// KAYYE'S PROFILE - ALL 8 FEATURES
// ============================================

document.addEventListener('DOMContentLoaded', () => {
  
  // ========== FADE-IN ANIMATION (ASLI) ==========
  const sections = document.querySelectorAll('.section-fade');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, index * 150);
      }
    });
  }, { threshold: 0.15, rootMargin: "0px 0px -50px 0px" });
  sections.forEach(section => observer.observe(section));

  // ========== HOVER FOTO PROFIL (ASLI) ==========
  const profileImg = document.getElementById('profile-img');
  if (profileImg) {
    profileImg.addEventListener('mouseenter', () => {
      profileImg.style.transform = 'scale(1.08) rotate(3deg)';
    });
    profileImg.addEventListener('mouseleave', () => {
      profileImg.style.transform = 'scale(1) rotate(0deg)';
    });
  }

  // ========== ORBITING PLANET (FITUR 8 YANG SUDAH ADA) ==========
  const planets = document.querySelectorAll('.planet');
  const msgDiv = document.getElementById('skillMessage');
  let planetClickCount = 0;
  const planetClickCounter = document.getElementById('planetClickCount');

  function updateSkill(skillName, skillLevel) {
    if (msgDiv) {
      msgDiv.innerHTML = `<span class="skill-text">🪐 <strong style="color: #ffdf9c;">${skillName}</strong> · ${skillLevel}</span>`;
      msgDiv.style.transform = 'scale(1.03)';
      setTimeout(() => { if (msgDiv) msgDiv.style.transform = 'scale(1)'; }, 180);
    }
    // FITUR 5: update planet click counter
    planetClickCount++;
    if (planetClickCounter) planetClickCounter.textContent = planetClickCount;
  }

  planets.forEach(planet => {
    planet.addEventListener('click', (e) => {
      e.stopPropagation();
      const skill = planet.getAttribute('data-skill');
      const level = planet.getAttribute('data-level');
      updateSkill(skill, level);
    });
  });

  // ========== FITUR 1: RANDOM ASTRONOMY FACT ==========
  const astronomyFacts = [
    "🌌 Satu hari di Venus lebih panjang dari satu tahun di Venus! (243 hari Bumi vs 225 hari Bumi)",
    "🪐 Saturnus bisa mengapung di air jika ada lautan yang cukup besar!",
    "🌟 Ada bintang neutron yang berputar 600 kali per detik!",
    "🌙 Bulan perlahan menjauh dari Bumi 3,8 cm per tahun.",
    "🔭 Galaksi Andromeda sedang menuju ke Bima Sakti dan akan bertabrakan dalam 4,5 miliar tahun.",
    "☀️ Matahari menyusut sekitar 5 meter per detik karena fusi nuklir.",
    "🛰️ Voyager 1 sudah berada di luar tata surya dan terbang sejak 1977!",
    "💎 Ada planet bernama 55 Cancri e yang permukaannya mungkin terdiri dari berlian!",
    "🌊 Europa (bulan Jupiter) memiliki lautan di bawah permukaan esnya.",
    "🎵 Luar angkasa tidak benar-benar sunyi — ada gelombang elektromagnetik!"
  ];
  let factCount = 0;
  const factElement = document.getElementById('astronomyFact');
  const factCounter = document.getElementById('factCount');
  const newFactBtn = document.getElementById('newFactBtn');

  function showRandomFact() {
    const randomIndex = Math.floor(Math.random() * astronomyFacts.length);
    if (factElement) factElement.textContent = astronomyFacts[randomIndex];
    factCount++;
    if (factCounter) factCounter.textContent = factCount;
  }
  if (newFactBtn) newFactBtn.addEventListener('click', showRandomFact);
  showRandomFact(); // tampilkan fact pertama kali

  // ========== FITUR 2: PROGRESS BAR SKILL (SCROLL ANIMATION) ==========
  const progressBars = document.querySelectorAll('.skill-progress-fill');
  const progressObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const fill = entry.target;
        const targetWidth = fill.getAttribute('data-target');
        if (targetWidth) fill.style.width = targetWidth;
        progressObserver.unobserve(fill);
      }
    });
  }, { threshold: 0.5 });
  progressBars.forEach(bar => progressObserver.observe(bar));

  // ========== FITUR 3: DARK/LIGHT MODE ==========
  const themeToggle = document.getElementById('themeToggle');
  const themeIcon = document.getElementById('themeIcon');
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      document.body.classList.toggle('light-mode');
      if (document.body.classList.contains('light-mode')) {
        themeIcon.className = 'fa-solid fa-sun text-yellow-500 text-xl';
        localStorage.setItem('theme', 'light');
      } else {
        themeIcon.className = 'fa-solid fa-moon text-yellow-300 text-xl';
        localStorage.setItem('theme', 'dark');
      }
    });
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
      document.body.classList.add('light-mode');
      themeIcon.className = 'fa-solid fa-sun text-yellow-500 text-xl';
    }
  }

  // ========== FITUR 4: HOVER EFFECT PROJECT CAPTION ==========
  const projectCards = document.querySelectorAll('.project-card');
  projectCards.forEach(card => {
    const img = card.querySelector('img');
    const overlay = document.createElement('div');
    overlay.className = 'project-overlay';
    if (card.querySelector('.project-title')) {
      overlay.innerHTML = card.querySelector('.project-title')?.textContent || 'Lihat proyek ✨';
      card.appendChild(overlay);
    }
  });

  // ========== FITUR 5: COUNTER (sudah ada di atas) ==========
  // Language counter sudah 3 (English, Japanese, Dutch)
  // Project counter sudah 2 (Website, Basic App)

  // ========== FITUR 6: TYPING EFFECT ==========
  const typingPhrases = [
    "Hi 👋", 
    "こんにちは 🌸", 
    "Hallo 🧀", 
    "Hello 🌍", 
    "नमस्ते 🙏", 
    "Bonjour 🥐"
  ];
  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const typingElement = document.getElementById('typingText');

  function typeEffect() {
    if (!typingElement) return;
    const currentPhrase = typingPhrases[phraseIndex];
    if (isDeleting) {
      typingElement.textContent = currentPhrase.substring(0, charIndex - 1);
      charIndex--;
    } else {
      typingElement.textContent = currentPhrase.substring(0, charIndex + 1);
      charIndex++;
    }
    if (!isDeleting && charIndex === currentPhrase.length) {
      isDeleting = true;
      setTimeout(typeEffect, 2000);
      return;
    }
    if (isDeleting && charIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % typingPhrases.length;
      setTimeout(typeEffect, 500);
      return;
    }
    const speed = isDeleting ? 50 : 100;
    setTimeout(typeEffect, speed);
  }
  typeEffect();

  // ========== FITUR 7: CONSTELLATION BACKGROUND ==========
  function createStars() {
    const starCount = 60;
    for (let i = 0; i < starCount; i++) {
      const star = document.createElement('div');
      star.className = 'constellation-star';
      star.style.position = 'fixed';
      star.style.width = Math.random() * 3 + 1 + 'px';
      star.style.height = star.style.width;
      star.style.left = Math.random() * 100 + '%';
      star.style.top = Math.random() * 100 + '%';
      star.style.animationDelay = Math.random() * 5 + 's';
      star.style.animationDuration = Math.random() * 3 + 2 + 's';
      document.body.appendChild(star);
    }
  }
  createStars();

  // ========== SOUND EFFECT (FITUR 8 OPSIONAL) ==========
  // (Pakai Web Audio sederhana, tidak mengganggu pengalaman)
  function playPopSound() {
    try {
      const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      const oscillator = audioCtx.createOscillator();
      const gainNode = audioCtx.createGain();
      oscillator.connect(gainNode);
      gainNode.connect(audioCtx.destination);
      oscillator.frequency.value = 880;
      gainNode.gain.value = 0.1;
      oscillator.start();
      gainNode.gain.exponentialRampToValueAtTime(0.00001, audioCtx.currentTime + 0.3);
      oscillator.stop(audioCtx.currentTime + 0.3);
    } catch(e) { console.log('Audio not supported'); }
  }
  // Tambahkan sound ke planet clicks
  const originalUpdateSkill = updateSkill;
  window.updateSkill = function(skillName, skillLevel) {
    playPopSound();
    originalUpdateSkill(skillName, skillLevel);
  };
  planets.forEach(planet => {
    planet.removeEventListener('click', planet.clickHandler);
    planet.clickHandler = (e) => {
      e.stopPropagation();
      playPopSound();
      const skill = planet.getAttribute('data-skill');
      const level = planet.getAttribute('data-level');
      updateSkill(skill, level);
    };
    planet.addEventListener('click', planet.clickHandler);
  });

  console.log('%c🚀 ALL 8 FEATURES ACTIVATED!', 'color: #a5b4fc; font-size: 14px; font-weight: bold;');
  console.log('🌙 Dark mode | 🔭 Random facts | 📊 Progress bars | ⌨️ Typing effect | ✨ Constellation | 🔊 Sound effect');
});

// ========== PROGRESS BAR HTML (FITUR 2) - TAMBAHKAN DI INDEX.HTML ==========
// Kode ini akan menambahkan progress bar ke section Languages secara otomatis
document.addEventListener('DOMContentLoaded', () => {
  const languagesSection = document.querySelector('.interest-card:first-child .grid');
  if (languagesSection && !document.querySelector('.skill-progress-container')) {
    const progressHTML = `
      <div class="skill-progress-container col-span-3 mt-6 pt-4 border-t border-zinc-700">
        <div class="skill-progress-item">
          <div class="skill-progress-label"><span>🇬🇧 English</span><span id="englishPercent">0%</span></div>
          <div class="skill-progress-bar-bg"><div class="skill-progress-fill fill-english" data-target="65%"></div></div>
        </div>
        <div class="skill-progress-item">
          <div class="skill-progress-label"><span>🇯🇵 日本語</span><span id="japanesePercent">0%</span></div>
          <div class="skill-progress-bar-bg"><div class="skill-progress-fill fill-japanese" data-target="40%"></div></div>
        </div>
        <div class="skill-progress-item">
          <div class="skill-progress-label"><span>🇳🇱 Dutch</span><span id="dutchPercent">0%</span></div>
          <div class="skill-progress-bar-bg"><div class="skill-progress-fill fill-dutch" data-target="25%"></div></div>
        </div>
      </div>
    `;
    languagesSection.insertAdjacentHTML('afterend', progressHTML);
    
    // Update persentase saat progress bar terlihat
    const progressObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const fills = document.querySelectorAll('.skill-progress-fill');
          fills.forEach(fill => {
            const target = fill.getAttribute('data-target');
            if (target && fill.style.width !== target) {
              fill.style.width = target;
              const parent = fill.closest('.skill-progress-item');
              if (parent) {
                const percentSpan = parent.querySelector('span:last-child');
                if (percentSpan) percentSpan.textContent = target;
              }
            }
          });
          progressObserver.disconnect();
        }
      });
    }, { threshold: 0.3 });
    const progressContainer = document.querySelector('.skill-progress-container');
    if (progressContainer) progressObserver.observe(progressContainer);
  }
});
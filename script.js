// script.js - Animasi yang lebih smooth dan modern

document.addEventListener('DOMContentLoaded', () => {
  
  // Fade-in animation untuk setiap section
  const sections = document.querySelectorAll('.section-fade');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        // Tambah delay supaya muncul bertahap (lebih cantik)
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, index * 150); // 150ms delay antar section
      }
    });
  }, {
    threshold: 0.15,        // muncul saat 15% section terlihat
    rootMargin: "0px 0px -50px 0px"
  });

  sections.forEach(section => {
    observer.observe(section);
  });

  // Hover effect pada foto profil (lebih smooth)
  const profileImg = document.getElementById('profile-img');
  if (profileImg) {
    profileImg.addEventListener('mouseenter', () => {
      profileImg.style.transform = 'scale(1.08) rotate(3deg)';
    });
    
    profileImg.addEventListener('mouseleave', () => {
      profileImg.style.transform = 'scale(1) rotate(0deg)';
    });
  }

  // Animasi subtle pada card saat hover (menggunakan CSS sudah cukup, tapi JS ini untuk ekstra feel)
  const cards = document.querySelectorAll('.glass-card, .interest-card');
  cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transition = 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
    });
  });

  console.log('%c✅ Kayye Bio Page loaded successfully!', 'color: #a5b4fc; font-size: 13px;');
});
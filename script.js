// Animasi fade-in saat scroll
document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('.section-fade');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
  });

  sections.forEach(section => {
    observer.observe(section);
  });

  // Hover effect pada foto profil
  const profileImg = document.getElementById('profile-img');
  if (profileImg) {
    profileImg.addEventListener('mouseenter', () => {
      profileImg.style.transform = 'scale(1.05) rotate(2deg)';
    });
    profileImg.addEventListener('mouseleave', () => {
      profileImg.style.transform = 'scale(1) rotate(0deg)';
    });
  }
});
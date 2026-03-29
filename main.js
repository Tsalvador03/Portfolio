// Reveal au scroll
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
    });
}, { threshold: 0.1 });
reveals.forEach(el => observer.observe(el));

// Animation barres de compétences
const skillSection = document.querySelector('#competences');
const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            document.querySelectorAll('.skill-fill').forEach((fill, i) => {
                setTimeout(() => {
                    fill.style.width = fill.dataset.width;
                }, i * 100);
            });
            skillObserver.disconnect();
        }
    });
}, { threshold: 0.2 });
skillObserver.observe(skillSection);
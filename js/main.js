/* =====================================================
   RoMimatic — Interazioni generali
   ===================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initScrollAnimations();
  initContactForm();
});

/* Fade-in on scroll — salta gli elementi già visibili per evitare CLS */
function initScrollAnimations() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const elements = document.querySelectorAll('.card, .product-card, .blog-card, .split-img, .split-text, .feature-item');
  if (!elements.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -32px 0px' });

  elements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      return; // già nel viewport: nessuna animazione, niente CLS
    }
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.45s ease, transform 0.45s ease';
    observer.observe(el);
  });
}

/* Simple contact form handler */
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', e => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    const original = btn.textContent;
    btn.textContent = 'Messaggio inviato ✓';
    btn.disabled = true;
    btn.style.background = '#34c759';
    setTimeout(() => {
      btn.textContent = original;
      btn.disabled = false;
      btn.style.background = '';
      form.reset();
    }, 3500);
  });
}

/* =====================================================
   RoMimatic — Componenti condivisi: Navbar + Footer
   ===================================================== */

const NAV_HTML = `
<header role="banner">
<nav class="navbar" id="navbar">
  <div class="nav-inner">

    <a href="/" class="nav-logo" id="nav-logo-link">
      <img src="/assets/img/logo-s.webp" alt="RoMimatic" id="nav-logo-img" style="height:44px; width:auto;">
      <span class="nav-logo-text" id="nav-logo-text" style="display:none;">RoMimatic</span>
    </a>

    <ul class="nav-menu" id="navMenu">
      <li class="nav-item">
        <a class="nav-link" href="/">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/chi-siamo.html">Chi siamo</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/caffe.html" aria-haspopup="true" aria-expanded="false">
          Caffè <span class="chev">▾</span>
        </a>
        <div class="dropdown">
          <div class="dropdown-item">
            <a class="dropdown-link" href="/caffe/capsule.html" aria-haspopup="true" aria-expanded="false">
              Capsule <span class="chev-r">›</span>
            </a>
            <div class="dropdown-sub">
              <a class="dropdown-link" href="/caffe/capsule-caffe-ditalia.html">Caffè d'Italia</a>
              <a class="dropdown-link" href="/caffe/capsule-lavazza-firma.html">Lavazza Firma</a>
            </div>
          </div>
          <div class="dropdown-item">
            <a class="dropdown-link" href="/caffe/cialde.html">Cialde</a>
          </div>
          <div class="dropdown-item">
            <a class="dropdown-link" href="/caffe/macchine.html" aria-haspopup="true" aria-expanded="false">
              Macchine <span class="chev-r">›</span>
            </a>
            <div class="dropdown-sub">
              <a class="dropdown-link" href="/caffe/macchine-caffe-ditalia.html">Caffè d'Italia</a>
              <a class="dropdown-link" href="/caffe/macchine-lavazza-firma.html">Lavazza Firma</a>
            </div>
          </div>
          <div class="dropdown-item">
            <a class="dropdown-link" href="/caffe/horeca.html">HO.RE.CA</a>
          </div>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/prodotti-eccellenza.html">Prodotti d'eccellenza</a>
      </li>
      <li class="nav-item">
        <a class="nav-link external" href="https://www.greenwateritalia.it" target="_blank" rel="noopener noreferrer">
          Acqua ↗
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/blog.html">Blog</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/contatti.html">Contatti</a>
      </li>
    </ul>

    <button class="nav-hamburger" id="navHamburger" aria-label="Apri menu" aria-expanded="false">
      <svg id="icon-menu" width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
        <line x1="3" y1="6"  x2="19" y2="6"/>
        <line x1="3" y1="11" x2="19" y2="11"/>
        <line x1="3" y1="16" x2="19" y2="16"/>
      </svg>
      <svg id="icon-close" width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" style="display:none;">
        <line x1="4" y1="4"  x2="18" y2="18"/>
        <line x1="18" y1="4" x2="4"  y2="18"/>
      </svg>
    </button>

  </div>
</nav>
</header>
`;

const FOOTER_HTML = `
<footer>
  <div class="footer-inner">
    <div class="footer-grid">

      <div class="footer-brand">
        <a href="/" class="nav-logo" style="margin-bottom:0;">
          <img src="/assets/img/logo-s.webp" alt="RoMimatic" style="height:48px; width:auto;">
        </a>
        <p>Dal 1984 portiamo qualità e gusto nelle aziende e nelle case. Distributori automatici, caffè di eccellenza e prodotti artigianali calabresi.</p>
        <div class="footer-zone">
          <strong>Zone servite</strong>
          <ul>
            <li>Milano e hinterland</li>
            <li>Monza e Brianza</li>
            <li>Varese e provincia</li>
            <li>Como e provincia</li>
            <li>Lecco e provincia</li>
          </ul>
        </div>
        <div class="footer-social">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Seguici su Facebook"><span aria-hidden="true">f</span></a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="Seguici su LinkedIn"><span aria-hidden="true">in</span></a>
        </div>
      </div>

      <div class="footer-col">
        <h4>Caffè</h4>
        <ul>
          <li><a href="/caffe/capsule.html">Capsule</a></li>
          <li><a href="/caffe/cialde.html">Cialde</a></li>
          <li><a href="/caffe/macchine.html">Macchine</a></li>
          <li><a href="/caffe/horeca.html">HO.RE.CA</a></li>
        </ul>
      </div>

      <div class="footer-col">
        <h4>Azienda</h4>
        <ul>
          <li><a href="/chi-siamo.html">Chi siamo</a></li>
          <li><a href="/prodotti-eccellenza.html">Prodotti d'eccellenza</a></li>
          <li><a href="/blog.html">Blog</a></li>
          <li><a href="/contatti.html">Contatti</a></li>
        </ul>
      </div>

      <div class="footer-col">
        <h4>Contatti</h4>
        <ul>
          <li><a href="mailto:info@romimatic.it">info@romimatic.it</a></li>
          <li><a href="tel:+390299574852">02 99574852</a></li>
          <li><a href="tel:+393489897098">348 9897098</a></li>
          <li><a href="/contatti.html">Scrivici</a></li>
          <li style="font-size:13px; color:var(--text-3); line-height:1.5; margin-top:6px;">Via Marconi 7<br>20024 Garbagnate Milanese (MI)</li>
          <li><a href="https://www.greenwateritalia.it" target="_blank" rel="noopener noreferrer">Green Water Italia ↗</a></li>
        </ul>
      </div>

    </div>
    <div class="footer-bottom">
      <span>© ${new Date().getFullYear()} RoMimatic · Divisione di RoMimatic Srl · P.IVA 04456450966</span>
      <span>
        <a href="/privacy.html">Privacy Policy</a> ·
        <a href="/cookie.html">Cookie Policy</a>
      </span>
    </div>
  </div>
</footer>
`;

function injectComponents() {
  const navEl = document.getElementById('nav-root');
  if (navEl) {
    // Skip-to-content link (accessibilità tastiera)
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.className = 'skip-link';
    skipLink.textContent = 'Salta al contenuto principale';
    navEl.parentNode.insertBefore(skipLink, navEl);

    navEl.innerHTML = NAV_HTML;
  }

  const footerEl = document.getElementById('footer-root');
  if (footerEl) footerEl.innerHTML = FOOTER_HTML;

  initNav();
  highlightActiveLink();
}

function initNav() {
  const hamburger = document.getElementById('navHamburger');
  const menu      = document.getElementById('navMenu');
  const iconMenu  = document.getElementById('icon-menu');
  const iconClose = document.getElementById('icon-close');
  if (!hamburger || !menu) return;

  hamburger.addEventListener('click', (e) => {
    e.stopPropagation(); // evita che il click risalga al document e richiuda subito il menu
    const open = menu.classList.toggle('is-open');
    iconMenu.style.display  = open ? 'none'  : 'block';
    iconClose.style.display = open ? 'block' : 'none';
    hamburger.setAttribute('aria-expanded', open);
    document.body.style.overflow = open ? 'hidden' : '';
  });

  // Impedisce che i click dentro il menu lo chiudano accidentalmente
  menu.addEventListener('click', (e) => {
    e.stopPropagation();
  });

  // Mobile: toggle sub-menus on click (items with chevron)
  menu.querySelectorAll('.nav-link').forEach(link => {
    if (!link.querySelector('.chev')) return;
    link.addEventListener('click', e => {
      if (window.innerWidth > 960) return;
      e.preventDefault();
      link.closest('.nav-item').classList.toggle('is-open');
    });
  });

  menu.querySelectorAll('.dropdown-link').forEach(link => {
    if (!link.querySelector('.chev-r')) return;
    link.addEventListener('click', e => {
      if (window.innerWidth > 960) return;
      e.preventDefault();
      link.closest('.dropdown-item').classList.toggle('is-open');
    });
  });

  // Close menu on outside click
  document.addEventListener('click', e => {
    if (!e.target.closest('.navbar')) {
      menu.classList.remove('is-open');
      iconMenu.style.display  = 'block';
      iconClose.style.display = 'none';
      hamburger.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }
  });

  // Escape key: chiude il menu mobile
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && menu.classList.contains('is-open')) {
      menu.classList.remove('is-open');
      iconMenu.style.display  = 'block';
      iconClose.style.display = 'none';
      hamburger.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
      hamburger.focus();
    }
  });
}

function highlightActiveLink() {
  const path = window.location.pathname;
  document.querySelectorAll('.nav-link, .dropdown-link').forEach(link => {
    const href = link.getAttribute('href');
    if (!href) return;
    if (href === '/' && path === '/') {
      link.style.fontWeight = '600';
    } else if (href !== '/' && path.startsWith(href)) {
      link.style.fontWeight = '600';
    }
  });
}

function injectCoffeeDeco() {
  const path = window.location.pathname;
  const isCaffePage = path === '/caffe.html' || path.startsWith('/caffe/');
  if (!isCaffePage) return;

  const hero = document.querySelector('.page-hero');
  if (!hero) return;

  const deco = document.createElement('div');
  deco.className = 'coffee-deco';
  deco.setAttribute('aria-hidden', 'true');
  deco.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" style="position:absolute;width:0;height:0;">
      <defs>
        <symbol id="chicco-ph" viewBox="0 0 60 100">
          <ellipse cx="30" cy="50" rx="27" ry="46" fill="#6F4E37"/>
          <path d="M30 6 C24 28 36 72 30 94" stroke="#3d2b1f" stroke-width="3" fill="none" stroke-linecap="round" opacity=".70"/>
        </symbol>
      </defs>
    </svg>
    <svg class="bean b1"><use href="#chicco-ph"/></svg>
    <svg class="bean b2"><use href="#chicco-ph"/></svg>
    <svg class="bean b3"><use href="#chicco-ph"/></svg>
    <svg class="bean b4"><use href="#chicco-ph"/></svg>
    <svg class="bean b5"><use href="#chicco-ph"/></svg>
    <svg class="bean b6"><use href="#chicco-ph"/></svg>
    <svg class="bean b7"><use href="#chicco-ph"/></svg>
    <svg class="bean b8"><use href="#chicco-ph"/></svg>
    <svg class="bean b9"><use href="#chicco-ph"/></svg>
    <svg class="bean b10"><use href="#chicco-ph"/></svg>
  `;
  hero.insertBefore(deco, hero.firstChild);
}

document.addEventListener('DOMContentLoaded', injectComponents);
document.addEventListener('DOMContentLoaded', injectCoffeeDeco);

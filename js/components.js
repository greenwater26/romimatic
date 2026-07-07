/* =====================================================
   RoMimatic — Componenti condivisi: Navbar + Footer
   ===================================================== */

const NAV_HTML = `
<header role="banner">

<div class="topbar">
  <div class="topbar-inner">
    <a href="mailto:info@romimatic.it" class="topbar-link" aria-label="Scrivici una email">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>
      <span>info@romimatic.it</span>
    </a>
    <a href="tel:029957485" class="topbar-link" aria-label="Chiamaci al numero fisso">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.81.36 1.6.7 2.34a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.74-1.27a2 2 0 0 1 2.11-.45c.74.34 1.53.57 2.34.7A2 2 0 0 1 22 16.92z"/></svg>
      <span>02 9957485</span>
    </a>
  </div>
</div>

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
              <a class="dropdown-link" href="/caffe/capsule-mokador.html">Mokador</a>
              <a class="dropdown-link" href="/caffe/capsule-essse-caffe.html">Essse Caffè</a>
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
              <a class="dropdown-link" href="/caffe/macchine-mokador.html">Mokador</a>
              <a class="dropdown-link" href="/caffe/macchine-essse-caffe.html">Essse Caffè</a>
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
        <a class="nav-link" href="/glossario-caffe.html">Glossario</a>
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
        <p>Dal 1984 portiamo qualità e gusto nelle aziende e nelle case. Caffè di eccellenza e prodotti artigianali calabresi.</p>
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
      </div>

      <div class="footer-col">
        <h4>Caffè</h4>
        <ul>
          <li><a href="/caffe/capsule.html">Capsule</a></li>
          <li><a href="/caffe/cialde.html">Cialde</a></li>
          <li><a href="/caffe/macchine.html">Macchine</a></li>
          <li><a href="/caffe/horeca.html">HO.RE.CA</a></li>
          <li><a href="/glossario-caffe.html">Glossario del caffè</a></li>
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
          <li><a href="tel:029957485">02 9957485</a></li>
          <li><a href="tel:3489897098">348 9897098</a></li>
          <li><a href="/contatti.html">Scrivici</a></li>
          <li style="font-size:13px; color:var(--text-3); line-height:1.5; margin-top:6px;">Via Guglielmo Marconi, 7<br>20024 Garbagnate Milanese (MI)</li>
          <li><a href="https://www.greenwateritalia.it" target="_blank" rel="noopener noreferrer">Green Water Italia ↗</a></li>
        </ul>
      </div>

    </div>
    <div class="footer-bottom">
      <span>© ${new Date().getFullYear()} RoMimatic di Italiano Rocco · P.IVA 04456450966</span>
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

  // Mobile: primo tap apre il sottomenu, secondo tap segue il link
  menu.querySelectorAll('.nav-link').forEach(link => {
    if (!link.querySelector('.chev')) return;
    link.addEventListener('click', e => {
      if (window.innerWidth > 960) return;
      const item = link.closest('.nav-item');
      if (!item.classList.contains('is-open')) {
        e.preventDefault();
        item.classList.add('is-open');
      }
      // se già aperto, il click naviga normalmente
    });
  });

  menu.querySelectorAll('.dropdown-link').forEach(link => {
    if (!link.querySelector('.chev-r')) return;
    link.addEventListener('click', e => {
      if (window.innerWidth > 960) return;
      const item = link.closest('.dropdown-item');
      if (!item.classList.contains('is-open')) {
        e.preventDefault();
        item.classList.add('is-open');
      }
      // se già aperto, il click naviga normalmente
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

function injectWhatsAppFloat() {
  if (document.querySelector('.wa-float')) return;
  const a = document.createElement('a');
  a.className = 'wa-float';
  a.href = 'https://wa.me/393489897098?text=Ciao%20RoMimatic%2C%20vorrei%20maggiori%20informazioni';
  a.target = '_blank';
  a.rel = 'noopener noreferrer';
  a.setAttribute('aria-label', 'Scrivici su WhatsApp');
  a.innerHTML = `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.71.306 1.263.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.885-9.885 9.885M20.52 3.449C18.24 1.245 15.24 0 12.045 0 5.463 0 .104 5.359.101 11.945c0 2.096.549 4.14 1.595 5.945L0 24l6.335-1.652a11.882 11.882 0 005.71 1.454h.006c6.585 0 11.946-5.36 11.949-11.945a11.86 11.86 0 00-3.495-8.408z"/></svg>`;
  document.body.appendChild(a);
}

document.addEventListener('DOMContentLoaded', injectComponents);
document.addEventListener('DOMContentLoaded', injectCoffeeDeco);
document.addEventListener('DOMContentLoaded', injectWhatsAppFloat);
document.addEventListener('DOMContentLoaded', initCookieBanner);

function initCookieBanner() {
  if (localStorage.getItem('cookie-notice-dismissed')) return;

  const style = document.createElement('style');
  style.textContent = `
    #cookie-banner {
      position: fixed;
      bottom: 0; left: 0; right: 0;
      z-index: 9999;
      background: var(--bg, #fff);
      border-top: 1px solid var(--border, #e5e7eb);
      padding: 14px 24px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 16px;
      font-size: 13px;
      color: var(--text-2, #555);
      box-shadow: 0 -4px 16px rgba(0,0,0,.07);
    }
    #cookie-banner p { margin: 0; flex: 1; line-height: 1.5; }
    #cookie-banner a { color: var(--accent, #9b0b01); text-decoration: underline; }
    #cookie-dismiss {
      flex-shrink: 0;
      background: var(--text, #111);
      color: #fff;
      border: none;
      border-radius: 6px;
      padding: 8px 20px;
      font-size: 13px;
      font-weight: 600;
      cursor: pointer;
      white-space: nowrap;
    }
    #cookie-dismiss:hover { opacity: .85; }
    @media (max-width: 480px) {
      #cookie-banner { flex-direction: column; align-items: flex-start; gap: 12px; }
      #cookie-dismiss { width: 100%; text-align: center; }
    }
  `;
  document.head.appendChild(style);

  const banner = document.createElement('div');
  banner.id = 'cookie-banner';
  banner.setAttribute('role', 'region');
  banner.setAttribute('aria-label', 'Avviso cookie');
  banner.innerHTML = `
    <p>Questo sito utilizza solo <strong>cookie tecnici</strong> necessari al suo funzionamento. Non vengono usati cookie di profilazione o marketing. <a href="/cookie.html">Cookie Policy</a></p>
    <button id="cookie-dismiss">Ho capito</button>
  `;
  document.body.appendChild(banner);

  document.getElementById('cookie-dismiss').addEventListener('click', () => {
    localStorage.setItem('cookie-notice-dismissed', '1');
    banner.remove();
  });
}

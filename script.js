/* =============================================
   RARE SOFT — script.js
   ============================================= */

// ---- DATA ----

const FEATURES = [
  { icon: '⚡', title: 'High Performance',    desc: 'Optimized for speed and efficiency — smooth operation even on lower-end hardware.' },
  { icon: '🔒', title: 'Secure by Design',    desc: 'Security baked in from the ground up. Your business data stays protected.' },
  { icon: '🖥️', title: 'Clean Interface',     desc: 'Intuitive, clutter-free UI that reduces training time and boosts productivity.' },
  { icon: '🔧', title: 'Easy to Customize',   desc: 'Flexible settings tailored to your specific business workflows and requirements.' },
  { icon: '📦', title: 'Lightweight Install', desc: 'Small footprint, fast setup. Up and running in minutes, not hours.' },
  { icon: '🤝', title: 'Local Support',       desc: "Based in Karachi — responsive local support so you're never left stuck." }
];

// ---- SINGLE PRODUCT ----
// To enable the download button: set downloadUrl to your actual file link.
const PRODUCT = {
  badge:       'Desktop Software',
  name:        'Rare Soft Suite',
  tagline:     'Complete Business Management System',
  desc:        'An all-in-one business software solution designed for Pakistani SMEs. Manage your sales, inventory, accounts, and daily operations from one powerful, easy-to-use platform. Built for reliability and performance on Windows.',
  version:     'v2.4.1',
  platform:    'Windows 7 / 10 / 11',
  size:        '85 MB',
  downloadUrl: null   // ← Replace null with your download URL  e.g. 'https://yourserver.com/raresoft-setup.exe'
};

const CONTACT_INFO = [
  { icon: '📍', label: 'Address',        text: '66 Sector-C, Street No.-7\nGazali Road, Manzoor Colony\nKarachi, Pakistan' },
  { icon: '📞', label: 'Phone',          text: '021-8461053' },
  { icon: '🕐', label: 'Business Hours', text: 'Monday – Saturday\n9:00 AM – 6:00 PM (PKT)' },
  { icon: '💬', label: 'Support',        text: "For software support, call us or visit our office. We're happy to help." }
];

// Inline SVG logo (used inside product card & navbar & footer)
const LOGO_SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 220" width="100%" height="100%">
  <defs>
    <linearGradient id="arcG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#5a80b8"/>
      <stop offset="100%" style="stop-color:#2a4a7a"/>
    </linearGradient>
    <linearGradient id="rsG" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#3a5a8c"/>
      <stop offset="100%" style="stop-color:#1e2e4a"/>
    </linearGradient>
  </defs>
  <path d="M 60 25 A 95 95 0 1 1 58 196" fill="none" stroke="url(#arcG)" stroke-width="5" stroke-linecap="round"/>
  <path d="M 68 35 A 82 82 0 1 1 66 186" fill="none" stroke="url(#arcG)" stroke-width="2" stroke-linecap="round" opacity="0.4"/>
  <g fill="url(#rsG)">
    <rect x="42" y="72" width="14" height="72" rx="3"/>
    <path d="M 56 72 Q 90 72 90 95 Q 90 116 56 118 L 56 72 Z"/>
    <path d="M 58 82 Q 78 82 78 95 Q 78 106 58 108 Z" fill="white" opacity="0.95"/>
    <path d="M 60 116 L 90 144 L 80 144 L 52 118 Z"/>
  </g>
  <g fill="url(#rsG)">
    <path d="M 130 76 Q 160 68 165 88 Q 169 104 140 110 Q 118 115 118 130 Q 118 148 148 148 Q 165 148 172 138 L 172 148 Q 162 158 142 158 Q 108 158 106 132 Q 104 112 134 106 Q 162 100 158 86 Q 154 74 128 76 Z"/>
  </g>
  <line x1="30" y1="185" x2="190" y2="185" stroke="#3a5a8c" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="30" y1="191" x2="190" y2="191" stroke="#3a5a8c" stroke-width="1" stroke-linecap="round" opacity="0.5"/>
  <text x="110" y="209" font-family="Georgia,serif" font-size="16" font-weight="bold" letter-spacing="4" fill="#1e2e4a" text-anchor="middle">RARE SOFT</text>
</svg>`;

// Watermark version (white/inverted for dark backgrounds)
const LOGO_SVG_WHITE = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 220" width="100%" height="100%">
  <path d="M 60 25 A 95 95 0 1 1 58 196" fill="none" stroke="white" stroke-width="5" stroke-linecap="round"/>
  <path d="M 68 35 A 82 82 0 1 1 66 186" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" opacity="0.4"/>
  <g fill="white">
    <rect x="42" y="72" width="14" height="72" rx="3"/>
    <path d="M 56 72 Q 90 72 90 95 Q 90 116 56 118 L 56 72 Z"/>
    <path d="M 58 82 Q 78 82 78 95 Q 78 106 58 108 Z" fill="#1e2e4a" opacity="0.9"/>
    <path d="M 60 116 L 90 144 L 80 144 L 52 118 Z"/>
    <path d="M 130 76 Q 160 68 165 88 Q 169 104 140 110 Q 118 115 118 130 Q 118 148 148 148 Q 165 148 172 138 L 172 148 Q 162 158 142 158 Q 108 158 106 132 Q 104 112 134 106 Q 162 100 158 86 Q 154 74 128 76 Z"/>
  </g>
  <line x1="30" y1="185" x2="190" y2="185" stroke="white" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="30" y1="191" x2="190" y2="191" stroke="white" stroke-width="1" stroke-linecap="round" opacity="0.5"/>
  <text x="110" y="209" font-family="Georgia,serif" font-size="16" font-weight="bold" letter-spacing="4" fill="white" text-anchor="middle">RARE SOFT</text>
</svg>`;

// ---- INJECT LOGOS ----
function injectLogos() {
  // Navbar logo
  document.querySelectorAll('.nav-logo-svg').forEach(el => el.innerHTML = LOGO_SVG_WHITE);
  // Footer logo
  document.querySelectorAll('.footer-logo-svg').forEach(el => el.innerHTML = LOGO_SVG_WHITE);
  // Hero watermark
  const hw = document.getElementById('heroWatermarkLogo');
  if (hw) hw.innerHTML = LOGO_SVG_WHITE;
  // Products watermark
  const pw = document.getElementById('productsWatermarkLogo');
  if (pw) pw.innerHTML = LOGO_SVG_WHITE;
}

// ---- NAVBAR ----
function initNavbar() {
  const navbar    = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const navLinks  = document.getElementById('navLinks');

  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
  });
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navLinks.classList.toggle('open');
  });
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      navLinks.classList.remove('open');
    });
  });
}

// ---- FEATURES ----
function initFeatures() {
  const grid = document.getElementById('featuresGrid');
  if (!grid) return;
  FEATURES.forEach((feat, i) => {
    const card = document.createElement('div');
    card.className = 'feature-card fade-up';
    card.style.transitionDelay = `${i * 0.08}s`;
    card.innerHTML = `
      <div class="feature-icon">${feat.icon}</div>
      <h3>${feat.title}</h3>
      <p>${feat.desc}</p>
    `;
    grid.appendChild(card);
  });
}

// ---- SINGLE PRODUCT ----
function initProduct() {
  const wrap = document.getElementById('productWrap');
  if (!wrap) return;

  const isReady = !!PRODUCT.downloadUrl;
  const card = document.createElement('div');
  card.className = 'product-card fade-up';
  card.innerHTML = `
    <div class="product-logo-row">
      <div class="product-card-logo" style="width:54px;height:54px;flex-shrink:0">${LOGO_SVG_WHITE}</div>
      <div class="product-logo-text">
        <strong>Rare Soft</strong>
        <span>Software Development</span>
      </div>
    </div>
    <span class="product-badge">${PRODUCT.badge}</span>
    <h3>${PRODUCT.name}</h3>
    <p>${PRODUCT.desc}</p>
    <div class="product-meta">
      <div class="product-meta-item"><span>Version</span><span>${PRODUCT.version}</span></div>
      <div class="product-meta-item"><span>Platform</span><span>${PRODUCT.platform}</span></div>
      <div class="product-meta-item"><span>Size</span><span>${PRODUCT.size}</span></div>
    </div>
    ${isReady
      ? `<a href="${PRODUCT.downloadUrl}" class="btn-download" download>⬇&nbsp; Download Now</a>`
      : `<button class="btn-download coming-soon" disabled>⏳&nbsp; Download Link Coming Soon</button>`
    }
  `;
  wrap.appendChild(card);
}

// ---- CONTACT ----
function initContact() {
  const container = document.getElementById('contactInfo');
  if (container) {
    CONTACT_INFO.forEach(item => {
      const el = document.createElement('div');
      el.className = 'contact-info-item fade-up';
      el.innerHTML = `
        <div class="contact-icon">${item.icon}</div>
        <div>
          <h4>${item.label}</h4>
          <p>${item.text.replace(/\n/g, '<br/>')}</p>
        </div>
      `;
      container.appendChild(el);
    });
  }

  const form    = document.getElementById('contactForm');
  const success = document.getElementById('formSuccess');
  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const name    = document.getElementById('formName').value.trim();
      const email   = document.getElementById('formEmail').value.trim();
      const message = document.getElementById('formMessage').value.trim();
      if (!name || !email || !message) { alert('Please fill in all fields.'); return; }
      console.log('Form submitted:', { name, email, message });
      form.querySelectorAll('input, textarea').forEach(el => el.value = '');
      success.classList.add('show');
      setTimeout(() => success.classList.remove('show'), 4000);
    });
  }
}

// ---- SCROLL ANIMATIONS ----
function initAnimations() {
  const observer = new IntersectionObserver(
    entries => entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    }),
    { threshold: 0.1 }
  );
  document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
}

// ---- BOOT ----
window.addEventListener('load', () => {
  injectLogos();
  initNavbar();
  initFeatures();
  initProduct();
  initContact();
  initAnimations();
});
function getBasePath() {
  const path = window.location.pathname.toLowerCase();

  if (path.includes('/solutions/')) {
    return '../../';
  }

  if (
    path.includes('/packages/') ||
    path.includes('/contact/') ||
    path.includes('/about/')
  ) {
    return '../';
  }

  return './';
}

function updateNavLinks(basePath) {
  document.querySelectorAll('[data-link]').forEach(link => {
    link.href = `${basePath}${link.dataset.link}`;
  });
}

async function loadPartials() {
  const basePath = getBasePath();

  const headerResponse = await fetch(`${basePath}partials/header.html`);
  const headerData = await headerResponse.text();

  const footerResponse = await fetch(`${basePath}partials/footer.html`);
  const footerData = await footerResponse.text();

  document.getElementById('header').innerHTML = headerData;
  document.getElementById('footer').innerHTML = footerData;

  updateNavLinks(basePath);
  initializeMobileMenu();
}

function initializeMobileMenu() {
  const mobileBtn = document.getElementById('mobileMenuBtn');
  const nav = document.getElementById('mainNav');

  if (mobileBtn && nav) {
    mobileBtn.addEventListener('click', () => {
      nav.classList.toggle('active');
    });
  }
}

loadPartials();
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

  try {
    const headerResponse = await fetch(`${basePath}partials/header.html`);
    const footerResponse = await fetch(`${basePath}partials/footer.html`);

    if (!headerResponse.ok) {
      throw new Error("Header failed to load");
    }

    if (!footerResponse.ok) {
      throw new Error("Footer failed to load");
    }

    const headerData = await headerResponse.text();
    const footerData = await footerResponse.text();

    document.getElementById("header").innerHTML = headerData;
    document.getElementById("footer").innerHTML = footerData;

    updateNavLinks(basePath);
    initializeMobileMenu();

  } catch (error) {
    console.error("Partial load error:", error);
  }
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
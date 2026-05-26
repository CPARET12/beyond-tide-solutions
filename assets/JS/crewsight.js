const capabilityCards = document.querySelectorAll(".capability-card");
const previewImage = document.getElementById("capabilityPreviewImage");
const previewLabel = document.getElementById("previewLabel");

const imagePanel = document.querySelector(".capability-image-panel");

const imageModal = document.getElementById("imageModal");
const expandedImage = document.getElementById("expandedImage");
const closeModal = document.getElementById("closeModal");

function updateCapabilityPreview(card) {
  if (!card || !previewImage || !previewLabel) return;

  const imageSrc = card.dataset.image;
  const title = card.dataset.title;

  capabilityCards.forEach(item => item.classList.remove("active"));
  card.classList.add("active");

  previewImage.classList.add("fade-out");

  setTimeout(() => {
    previewImage.src = imageSrc;
    expandedImage.src = imageSrc;

    previewLabel.textContent = title;

    previewImage.classList.remove("fade-out");
  }, 180);
}

capabilityCards.forEach(card => {
  card.addEventListener("mouseenter", () => updateCapabilityPreview(card));
  card.addEventListener("click", () => updateCapabilityPreview(card));
});

/* =========================
   IMAGE MODAL
========================= */

imagePanel.addEventListener("click", () => {
  expandedImage.src = previewImage.src;
  imageModal.classList.add("active");
});

closeModal.addEventListener("click", () => {
  imageModal.classList.remove("active");
});

imageModal.addEventListener("click", (e) => {
  if (e.target === imageModal) {
    imageModal.classList.remove("active");
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    imageModal.classList.remove("active");
  }
});
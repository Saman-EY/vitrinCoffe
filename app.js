
const openButton = document.querySelector("#OpenMobileOffcanvas"); // Your open button
const closeButton = document.querySelector("#closeMobileOffcanvas"); // Close button inside off-canvas
const overlay = document.querySelector(".offcanvasOverlay");
const offcanvas = document.querySelector(".MobileOffcanvas");

function openOffcanvas() {
  overlay.classList.add("show");
  offcanvas.classList.add("show");
}

function closeOffcanvas() {
  overlay.classList.remove("show");
  offcanvas.classList.remove("show");
}

openButton.addEventListener("click", openOffcanvas);
closeButton.addEventListener("click", closeOffcanvas);
overlay.addEventListener("click", closeOffcanvas);

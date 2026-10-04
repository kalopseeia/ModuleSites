const menu = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");
if (menu) menu.addEventListener("click", () => nav.classList.toggle("open"));

const modal = document.getElementById("zoomModal");
const modalArt = document.getElementById("modalArt");
const modalTitle = document.getElementById("modalTitle");
const modalDesc = document.getElementById("modalDesc");

document.querySelectorAll(".artwork").forEach(card => {
  const image = card.querySelector(".art-image");
  image.addEventListener("click", () => {
    modalArt.className = "modal-art " + image.className.replace("art-image ", "");
    modalTitle.textContent = card.dataset.title;
    modalDesc.textContent = card.dataset.description;
    modal.classList.add("show");
    modal.setAttribute("aria-hidden", "false");
  });
  card.querySelector(".audio-btn").addEventListener("click", (e) => {
    e.stopPropagation();
    if (!("speechSynthesis" in window)) { alert("Your browser does not support speech synthesis."); return; }
    speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(card.dataset.title + ". " + card.dataset.description);
    u.rate = 0.9;
    speechSynthesis.speak(u);
  });
});
if (modal) {
  modal.addEventListener("click", e => { if (e.target === modal || e.target.classList.contains("close-modal")) { modal.classList.remove("show"); modal.setAttribute("aria-hidden","true"); }});
}
 
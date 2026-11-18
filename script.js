const scene = document.querySelector(".invitation-scene");
const openButton = document.querySelector("#open-invitation");

openButton.addEventListener("click", () => {
  scene.classList.add("is-open");
  openButton.setAttribute("aria-expanded", "true");
});

const trailerContainer = document.querySelector(".trailer-container");
const btn = document.querySelector(".btn");
const btnCloseIcon = document.querySelector(".close-icon");
const videoEl = document.querySelector("video");

function handleClickActive() {
  trailerContainer.classList.remove("active");
  videoEl.play();
}
function handleClickClose() {
  trailerContainer.classList.add("active");
  videoEl.pause();
  videoEl.currentTime = 0;
}

btn.addEventListener("click", handleClickActive);
btnCloseIcon.addEventListener("click", handleClickClose);

document.addEventListener("keydown", (e) => {
  if ((e.key === "Escape") & !trailerContainer.classList.contains("active"))
    handleClickClose();
  videoEl.pause();
});

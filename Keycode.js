const keycode = document.getElementById("keycode");
const intro = document.getElementById("any-key");
const about = document.getElementById("about");
const key = document.getElementById("key");
const code = document.getElementById("code");
const which = document.getElementById("which");

document.addEventListener("keydown", (event) => {
  intro.style.display = "none";
  keycode.textContent = `${event.which}`;
  key.textContent = `${event.key}`;
  code.textContent = `${event.code}`;
  which.textContent = `${event.which}`;
  about.style.display = "flex";
});
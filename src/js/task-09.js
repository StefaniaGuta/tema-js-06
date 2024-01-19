const toggleButton = document.querySelector(".change-color");
const body = document.body;
const colorChanged = document.querySelector(".color");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
  }
  
  toggleButton.addEventListener("click", e => {
  body.style.backgroundColor = getRandomHexColor();
  colorChanged.textContent = getRandomHexColor();
  });
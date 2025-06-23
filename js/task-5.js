function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColorBtn = document.querySelector(".change-color");
const colorValueSpan = document.querySelector(".color");
const widget = document.querySelector(".widget");

changeColorBtn.addEventListener("click", () => {
  const randomColor = getRandomHexColor();
  widget.style.backgroundColor = randomColor;
  colorValueSpan.textContent = randomColor;
});

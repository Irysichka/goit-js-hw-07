function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const box = document.querySelector(".change-color");

const span = document.querySelector(".color");

box.addEventListener("click", handleClick);
function handleClick() {
  const newColor = getRandomHexColor();
 document.body.style.backgroundColor = newColor;
  span.textContent = newColor;
  
}

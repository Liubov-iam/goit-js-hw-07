function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const userInput = document.querySelector("input");
const createButton = document.querySelector("[data-create]");
const destroyButton = document.querySelector("[data-destroy]");
const boxesDiv = document.querySelector("#boxes");

createButton.addEventListener("click", () => {
  const amount = Number(userInput.value);
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    userInput.value = "";
  }
});

destroyButton.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
boxesDiv.innerHTML = "";

const initialBoxSize = 30;
const boxSizeIncrement = 10;

for (let i = 0; i < amount; i++) {
const box = document.createElement("div");
box.classList.add("box");
const size = initialBoxSize + i * boxSizeIncrement;
box.style.width = `${size}px`;
box.style.height = `${size}px`;
box.style.backgroundColor = getRandomHexColor();
boxesDiv.appendChild(box);
}
}

function destroyBoxes() {
  boxesDiv.innerHTML = "";
}


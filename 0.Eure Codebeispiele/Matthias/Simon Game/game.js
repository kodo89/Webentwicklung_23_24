const colors = ["green", "red", "yellow", "blue"];
let isGameStarted = false;

let generatedOrder = [];
let userOrder = [];

const buttons = document.querySelectorAll("button");

document.addEventListener("keypress", (e) =>  {
  if(!isGameStarted) {
    startGame();
  }
})

for (const button in buttons) {
  if (Object.hasOwnProperty.call(buttons, button)) {
    const element = buttons[button];
    element.addEventListener("click", () => {
      buttonClicked(element);
    });
  }
}

function buttonClicked(btn) {
  playSound(btn);
  animateButton(btn);
}

function startGame() {
  isGameStarted = true;
  addItem();
}

function gameOver() {
  isGameStarted = false;
}

function playSound(btn) {
  console.log("Play sound: " + btn.id + ".mp3");
  let audio = new Audio("sounds/" + btn.id + ".mp3");
  audio.play();
}

function animateButton(btn) {
  console.log("animateButton " + btn.id);
  btn.classList.add(".pressed");
  setTimeout(() => {
    btn.classList.remove(".pressed");
  }, 600);
}

function addItem() {
  let random = Math.floor(Math.random() * buttons.length);
  generatedOrder.push(colors[random]);
  console.log(generatedOrder);
}
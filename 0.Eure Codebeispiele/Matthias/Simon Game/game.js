const colors = ["green", "red", "yellow", "blue"];
let isGameStarted = false;
let waitForUserInput = false;

let generatedOrder = [];
let userOrder = [];

const header = document.querySelector("h1");
const buttons = document.querySelectorAll("button");

document.addEventListener("keypress", (e) => {
  if (!isGameStarted) {
    startGameLoop();
  }
});

for (const button in buttons) {
  if (Object.hasOwnProperty.call(buttons, button)) {
    const element = buttons[button];
    element.addEventListener("click", () => {
      buttonClicked(element);
    });
  }
}

function buttonClicked(btn) {
  if (isGameStarted) {
    playSound(btn);
    animateButton(btn);
  }

  if(waitForUserInput) {
    userOrder.push(btn.id);
    if(userOrder[userOrder.length] != generatedOrder[userOrder.length]) {
      gameOver();
    }
    if(userOrder.length === generatedOrder.length) {
      waitForUserInput = false;
    }
  }
}

function startGameLoop() {
  isGameStarted = true;
  addItem();
  playOrder();
  getUserOrder();
}

function gameOver() {
  isGameStarted = false;

  header.innerText = "Game Over! Press a key to start.";
}

function playSound(btn) {
  console.log("Play sound: " + btn.id + ".mp3");
  let audio = new Audio("sounds/" + btn.id + ".mp3");
  audio.play();
}

function animateButton(btn) {
  console.log("animateButton " + btn.id);
  btn.classList.add("pressed");
  setTimeout(() => {
    btn.classList.remove("pressed");
  }, 600);
}

function addItem() {
  let random = Math.floor(Math.random() * buttons.length);
  generatedOrder.push(colors[random]);
  console.log(generatedOrder);
  updateLevel();
}

function updateLevel() {
  header.innerText = "Level " + generatedOrder.length;
}

function playOrder() {
  buttonClicked(buttons[colors.indexOf(generatedOrder[0])]);
  for (let i = 0; i < generatedOrder.length; i++) {
    setTimeout(buttonClicked(buttons[colors.indexOf(generatedOrder[i])]), 800);
  }
}

function getUserOrder() {
  waitForUserInput = true;
}

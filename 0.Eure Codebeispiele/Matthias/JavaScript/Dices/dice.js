let heading = document.querySelector("h1");
let newGameButton = document.querySelector("#newGameButton");

let player1Die = document.querySelector(".img1");
let player2Die = document.querySelector(".img2");

newGameButton.addEventListener("click", function () {
  let player1 = Math.floor(Math.random() * 6) + 1;
  let player2 = Math.floor(Math.random() * 6) + 1;

  player1Die.setAttribute("src", "images/dice" + player1 + ".png");
  player2Die.setAttribute("src", "images/dice" + player2 + ".png");

  if (player1 > player2) {
    heading.innerText = "Player 1 wins! 🚩";
  } else if (player1 < player2) {
    heading.innerText = "Player 2 wins! 🚩";
  } else {
    heading.innerText = "It's a par!";
  }
});

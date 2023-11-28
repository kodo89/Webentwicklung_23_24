"use strict";

const bankCardsEl = document.querySelector("#bank-cards");
const bankSumEl = document.querySelector("#bank-sum");
const playerCardsEl = document.querySelector("#player-cards");
const playerSumEl = document.querySelector("#player-sum");
const btnStartGame = document.querySelector("#btn-startgame");
const btnDrawCard = document.querySelector("#btn-draw");
const btnHold = document.querySelector("#btn-hold");

class BlackJack {
  constructor() {
    const suits = ["Hearts", "Diamonds", "Clubs", "Spades"];
    const values = {
      2: 2,
      3: 3,
      4: 4,
      5: 5,
      6: 6,
      7: 7,
      8: 8,
      9: 9,
      10: 10,
      jack: 10,
      queen: 10,
      king: 10,
      ace: 11,
    };

    this.deck = [];
    this.bankCards = [];
    this.playerCards = [];
    this.bankSum = 0;
    this.playerSum = 0;
    this.isHold = false;

    for (const suit of suits) {
      for (const value of Object.keys(values)) {
        const card = {
          suit: suit,
          value: value,
          valueNumber: values[value],
        };
        this.deck.push(card);
      }
    }
  }

  startNewGame() {
    this.playerCards = [];
    this.bankCards = [];
    this.isHold = false;
    for (let i = 0; i < 2; i++) {
      blackjack.drawCard("player");
      blackjack.drawCard("bank");
    }
    btnHold.style.visibility = "visible";
    btnDrawCard.style.visibility = "visible";
  }

  drawCard(cardFor) {
    let position = Math.floor(Math.random() * this.deck.length);
    this.currentCard = this.deck[position];
    console.log(this.currentCard);
    if (cardFor == "bank") {
      this.bankCards.push(this.currentCard);
    } else if (cardFor == "player") {
      this.playerCards.push(this.currentCard);
    } else {
      console.error("Undefined player.");
    }
    this.deck.splice(position, 1);
    this.renderCards();
    if (this.checkWinner() !== "") {
      if (this.checkWinner() === "bank") {
        alert("Bank wins!");
      } else if (this.checkWinner() === "player") {
        alert("Player wins!");
      } else {
        alert("Par!");
      }
      btnHold.style.visibility = "hidden";
      btnDrawCard.style.visibility = "hidden";
    }
  }

  renderCards() {
    playerCardsEl.innerText = "";
    this.playerSum = 0;
    blackjack.playerCards.forEach((element) => {
      playerCardsEl.innerHTML += `<img src="Cards/${element.value}_of_${element.suit}.png">`;
      this.playerSum += element.valueNumber;
      playerSumEl.innerText = this.playerSum;
    });

    bankCardsEl.innerText = "";
    this.bankSum = 0;
    blackjack.bankCards.forEach((element) => {
      bankCardsEl.innerHTML += `<img src="Cards/${element.value}_of_${element.suit}.png">`;
      this.bankSum += element.valueNumber;
      bankSumEl.innerText = this.bankSum;
    });
  }

  checkWinner() {
    if (this.isHold) {
      if (this.playerSum > 21) {
        return "bank";
      } else if (this.playerSum === 21) {
        return "player";
      } else {
        if (this.playerSum > this.bankSum) {
          return "player";
        } else if (this.playerSum < this.bankSum) {
          return "bank";
        } else if (this.playerSum === this.bankSum) {
          return "par";
        }
      }
    }

    return "";
  }
}

let blackjack = new BlackJack();

btnStartGame.addEventListener("click", function () {
  blackjack.startNewGame();
});

btnDrawCard.addEventListener("click", function () {
  blackjack.drawCard("player");
});

btnHold.addEventListener("click", function () {
  blackjack.isHold = true;
  while (blackjack.bankSum < 16) {
    blackjack.drawCard("bank");
  }
  if (blackjack.checkWinner() !== "") {
    if (blackjack.checkWinner() === "bank") {
      alert("Bank wins!");
    } else if (blackjack.checkWinner() === "player") {
      alert("Player wins!");
    } else {
      alert("Par!");
    }
    btnHold.style.visibility = "hidden";
    btnDrawCard.style.visibility = "hidden";
  }
});

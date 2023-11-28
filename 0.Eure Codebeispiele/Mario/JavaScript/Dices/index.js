

const dicePlayer1 = document.querySelector(".img1");
const dicePlayer2 = document.querySelector(".img2");
const buttonGame = document.querySelector("#newGameButton");
const textWinner = document.querySelector(".container h1");


const randomImage = new Array();

randomImage[0] = "./images/dice1.png";
randomImage[1] = "./images/dice2.png";
randomImage[2] = "./images/dice3.png";
randomImage[3] = "./images/dice4.png";
randomImage[4] = "./images/dice5.png";
randomImage[5] = "./images/dice6.png";

function changeDice(){
    var number1 = Math.floor(Math.random()*randomImage.length);
    var number2 = Math.floor(Math.random()*randomImage.length);
    if(dicePlayer1){
        dicePlayer1.src = randomImage[number1];
    }

    if(dicePlayer1){
        dicePlayer2.src = randomImage[number2];
    }


    if(number1 > number2){
        textWinner.innerText = "Player 1 Wins!🚩";
    } else if(number1 < number2){
        textWinner.innerText = "Player 2 Wins!🚩";
    } else{
        textWinner.innerText = "The score is even!🚩";
    }
}

document.querySelector('#newGameButton')
        .addEventListener('click', changeDice);






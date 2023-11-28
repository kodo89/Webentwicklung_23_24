
const head = document.querySelector("h1");
const buttonGame = document.querySelector("#newGameButton");

let player1 = document.querySelector(".img1");
let player2 = document.querySelector(".img2");

const images = new Array();

images[0] = "images/dice1.png";
images[1] = "images/dice2.png";
images[2] = "images/dice3.png";
images[3] = "images/dice4.png";
images[4] = "images/dice5.png";
images[5] = "images/dice6.png";

function startGame(){
    let num1 = Math.floor(Math.random() * images.length);
    let num2 = Math.floor(Math.random()  * images.length);

    if(player1){
        player1.setAttribute("src", images[num1]);
    }

    if(player2){
        player2.setAttribute("src", images[num2]);
    }


    if(num1 > num2){
        head.innerText = "Player 1 wins 🚩";
    } else if(num1 < num2){
        head.innerText = "Player 2 wins 🚩";
    }else{
        head.innerText = "It's Even 🚩";
    }
}

document.querySelector("#newGameButton").addEventListener('click', startGame)
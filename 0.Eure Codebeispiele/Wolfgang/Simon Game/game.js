let gameStart = false;

let reihenfolge = [];

let benutzerReihenfolge = [];

let ueberschrifth1 = document.getElementById("ueberschrift");

let colors = ["green", "red", "yellow", "blue"];

let buttons = document.getElementsByTagName("button");

for (i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
      buttonPressed(this);
      console.log(this.id);
    });
  }

document.addEventListener("keydown", function (e) {
  if (gameStart == false) {
    let random = addItem();
    buttonPressed(buttons[random]);

    gameStart = true;
  }
});

function addItem() {
    let random = Math.floor(Math.random() * buttons.length);
    reihenfolge.push(colors[random]);
    console.log(reihenfolge);
    ueberschrifth1.innerText = "Level " + reihenfolge.length;
    return random;
  }

function buttonPressed(button) {
  let audio = new Audio("sounds/" + button.id + ".mp3");
  audio.play();

  if (benutzerReihenfolge.length === reihenfolge.length) {
    addItem();
    benutzerReihenfolge = [];
  }
  benutzerReihenfolge.push(button.id);
  if(benutzerReihenfolge[benutzerReihenfolge.length] === reihenfolge[benutzerReihenfolge.length])
  {
    console.log("success")
  }
  else

  button.classList.add("pressed");
  setTimeout(function () {
    button.classList.remove("pressed");
  }, 800);
}

function pruefeGleich (){

    if (benutzerReihenfolge == reihenfolge){

    }
}

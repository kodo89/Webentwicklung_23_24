var b1 = document.getElementById("b1");
var b2 = document.getElementById("b2");
var b3 = document.getElementById("b3");
var b4 = document.getElementById("b4");

b1.addEventListener("click", clickButton1);

function clickButton1(){
    let sound = new Audio("./sounds/green.mp3");
    sound.play();
    arrColorSame.push("green");
    newClick();
    setLevel();
    prooveColor();
    var list = b1.classList;
    list.add("clickButton");
    setTimeout(remove1, 2000);
}

function remove1(){
    var list = b1.classList;
    list.remove("clickButton");
}

b2.addEventListener("click", clickButton2);

function clickButton2(){
    let sound = new Audio("./sounds/red.mp3");
    sound.play();
    arrColorSame.push("red");
    newClick();
    setLevel();
    prooveColor();
    var list = b2.classList;
    list.add("clickButton");
    setTimeout(remove2, 2000);
}

function remove2(){
    var list = b2.classList;
    list.remove("clickButton");
}

b3.addEventListener("click", clickButton3);

function clickButton3(){
    let sound = new Audio("./sounds/yellow.mp3");
    sound.play();
    arrColorSame.push("yellow");
    newClick();
    setLevel();
    prooveColor();
    var list = b3.classList;
    list.add("clickButton");
    setTimeout(remove3, 2000);
}

function remove3(){
    var list = b3.classList;
    list.remove("clickButton");
}

b4.addEventListener("click", clickButton4);

function clickButton4(){
    let sound = new Audio("./sounds/blue.mp3");
    sound.play();
    arrColorSame.push("blue");
    newClick();
    setLevel();
    prooveColor();
    var list = b4.classList;
    list.add("clickButton");
    setTimeout(remove4, 2000);
}

function remove4(){
    var list = b4.classList;
    list.remove("clickButton");
}


document.addEventListener("keypress", startgame);


var isGameStarted = false;

var arrColor = [];
var arrColorSame = [];
var level = 0;

function startgame(){
    var min = 1;
    var max = 4;
    var random = Math.floor(Math.random()*(max-min+1) + min); 


    if(isGameStarted == false){
        switch (random){
            case 1:
                clickButton1();
                arrColor.push("green");
                setLevel();
                break;
            case 2:
                clickButton2();
                arrColor.push("red");
                setLevel();
                 break;
            case 3:
                clickButton3();
                arrColor.push("yellow");
                setLevel();
                 break;
            case 4:
                clickButton4();
                arrColor.push("blue");
                setLevel();
                break;
            }
    }

    isGameStarted = true;
}



function newClick(){
    var min = 1;
    var max = 4;
    var random = Math.floor(Math.random()*(max-min+1) + min); 
    if(isGameStarted){
        switch (random){
            case 1:
                arrColor.push("green");
                break;
            case 2:
                arrColor.push("red");
                 break;
            case 3:
                arrColor.push("yellow");
                level++;
                 break;
            case 4:
                arrColor.push("blue");
                break;
            }
    }


        console.log(arrColor);
}



function setLevel(){
    var len = arrColor.length;
    document.getElementById("header").innerText = "PRESS A KEY TO START - Level "+len;
}



function prooveColor(){
    if(level == 1){
        if(arrColor[level-1] == arrColorSame[level]){
            console.log(arrColor[level]);
            console.log(arrColorSame[level-1]);
        } else{
            console.log("test");
            arrColor = [];
            arrColorSame = [];
            document.getElementById("header").innerText = "PRESS A KEY TO START - GameOver";
        }

    }



}




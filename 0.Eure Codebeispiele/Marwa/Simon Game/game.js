var b1 = document.getElementById("b1");
var b2 = document.getElementById("b2");
var b3 = document.getElementById("b3");
var b4 = document.getElementById("b4");

b1.addEventListener("click", clickButton1);

function clickButton1(){
    let sound = new Audio("./sounds/green.mp3");
    sound.play();

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
    var list = b4.classList;
    list.add("clickButton");
    setTimeout(remove4, 2000);
}

function remove4(){
    var list = b4.classList;
    list.remove("clickButton");
}


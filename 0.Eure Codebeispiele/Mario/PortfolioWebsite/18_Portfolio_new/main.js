
//nav Bar
var toggleBtn = document.getElementsByClassName("toggleNavBtn")[0];
var listCont = document.getElementsByClassName("navListContainer")[0];

toggleBtn.addEventListener('click', () => {
    listCont.classList.toggle("active")
});


console.log("test")



//btn Projects
document.getElementById("btn-Welcome").addEventListener("click", () => {window.location.href = '#Projects'});



// Scroll Button
var getScrollBtn = document.querySelector(".scrollUp");

window.addEventListener("scroll", () => {
    getScrollBtn.classList.add("active");
    if(window.scrollY > 100){
        getScrollBtn.classList.add("active");
    } else{
        getScrollBtn.classList.remove("active");
    }
})


document.getElementById("goToTop").addEventListener("click", ()=>{window.scrollTo(top)})



// send a mail


//const form = document.getElementById("contactForm");
//const name = document.querySelector(".name");
//const email = document.querySelector(".email");
//const msg = document.querySelector(".msg");


//Email.send({
//    Host : "smtp.elasticemail.com",
//    Username : "username",
//    Password : "password",
//    To : 'them@website.com',
//    From : "you@isp.com",
//    Subject : "This is the subject",
//    Body : "And this is the body"
//}).then(
//  message => alert(message)
//);



// Welcome Creating
//Id home Button
//homeClick
//ids 
//welcomeHeading
//welcomeTextFirstLine
//welcomeTextSecondLine

var welcomeHeading = document.getElementById("welcomeHeading");
var welcomeTextFirstLine = document.getElementById("welcomeTextFirstLine");
var welcomeTextSecondLine = document.getElementById("welcomeTextSecondLine");

var btnHome = document.getElementById("homeClick");


var min = 10;
var max = 80;
var random = (Math.random() * (max - min)) + min;

btnHome.addEventListener("click", textTypingEffect)
function textTypingEffect(){
    removeContent();
    typingEffect(welcomeHeading, textUps);
    setTimeout(()=> typingEffect(welcomeTextFirstLine, textFixIt), 1000);
    setTimeout(()=> typingEffect(welcomeTextSecondLine, solution), 1500);
    setTimeout(()=> removeContent(), 5500);
    setTimeout(()=> typingEffect(welcomeHeading, textHeading), 5600);
    setTimeout(()=> typingEffect(welcomeTextFirstLine, line1), 8000);
    setTimeout(()=> typingEffect(welcomeTextSecondLine, line2), 12000);
}

var textUps = "Ups... something gone wrong...";
var textFixIt = "I´ll try to fix it... wait one moment please";
var solution = "... i will write it new ;)";

var textHeading = "Hey, I am Mario Brandl";
var line1 = "A software develpoper trying to create Frontend and Backend solutions.";
var line2 = "Have fun looking at my portfolio!";

function typingEffect(element, text, i = 0){
    element.textContent += text[i];
    // If we reached the end of the string
    if(i === text.length - 1){
        return;
    }
    setTimeout(()=> typingEffect(element, text, i+1), random)
}


function removeContent(){
    welcomeHeading.innerText = "";
    welcomeTextFirstLine.innerText = "";
    welcomeTextSecondLine.innerText = "";
}







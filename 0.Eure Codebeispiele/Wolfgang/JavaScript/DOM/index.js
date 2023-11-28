//Part 1

// manipuliere den DOM, um Folgendes zu erreichen:
// Wähle das <p>-Element mit der ID "output" aus und ändere seinen Textinhalt auf "Text geändert!".

let changeTextp = document.getElementById("output")
changeTextp.innerHTML = "Text";

// Wähle das <h1>-Element innerhalb des <div> mit der ID "main-container" aus und ändere seinen Textinhalt auf "DOM-Manipulationsübung abgeschlossen!".
let changeTextH1 = document.querySelector("#main-container h1")
changeTextH1.innerHTML = "DOM-Manipulationsübung abgeschlossen!";
// Wähle das <button>-Element mit der ID "changeTextButton" aus und ändere seinen Textinhalt auf "Klick mich!„ und seine Hintergrundfarbe auf blau.
document.getElementById("changeTextButton").innerText = "Klick mich!";
document.querySelector("#changeTextButton").style.backgroundColor = "blue";
   
   



//Part 2

// Aktualisiere deine index.js-Datei, um die Ereignisbehandlung einzubeziehen:
// Füge dem main-container einen weiteren Button mit dem Text „Dark Mode“ nur unter Verwendung von Javascript hinzu
// Füge dem neuen Button einen Ereignis Listener hinzu. Wenn darauf geklickt wird, ändert sich 

// Hintergrundfarbe des <div> mit der ID "main-container" zu schwarz 
// und die Schrift darin wird weiß, 
// und der Text innerhalb des Buttons ändert sich zu „Light Mode“
// Wird der Button erneut geklickt dann ändert sich die Hintergrundfarbe wieder auf weiß und der Text des neuen Button zu „Dark Mode“

let button = document.createElement("button");
button.innerText = "Dark Mode";
document.querySelector("#main-container").appendChild(button);

function changeColor(){

    document.querySelector("#main-container").style.backgroundColor = "black";
    changeTextH1.style.color = "white";
    changeTextp.style.color = "white";
    button.style.backgroundColor = "white";
    button.style.color = "black";
    button.innerText = "Light Mode"
   
    bColor.removeEventListener('click', changeColor);
    bColor.addEventListener('click', changeColorMo);
}
function changeColorMo(){

    document.querySelector("#main-container").style.backgroundColor = "white";
    changeTextH1.style.color = "black";
    changeTextp.style.color = "black";
    button.style.backgroundColor = "black";
    button.style.color = "white";
    button.innerText = "Dark mode";
    bColor.removeEventListener('click', changeColorMo);
    bColor.addEventListener('click', changeColor);


}

let bColor = document.querySelector("#main-container ");
bColor.addEventListener('click', changeColor);










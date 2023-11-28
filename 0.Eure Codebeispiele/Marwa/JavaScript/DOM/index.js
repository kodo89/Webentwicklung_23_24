//Part 1

// manipuliere den DOM, um Folgendes zu erreichen:
// Wähle das <p>-Element mit der ID "output" aus und ändere seinen Textinhalt auf "Text geändert!".
// Wähle das <h1>-Element innerhalb des <div> mit der ID "main-container" aus und ändere seinen Textinhalt auf "DOM-Manipulationsübung abgeschlossen!".
// Wähle das <button>-Element mit der ID "changeTextButton" aus und ändere seinen Textinhalt auf "Klick mich!„ und seine Hintergrundfarbe auf blau.

const name = document.getElementById("output").innerText="Text"

//document.querySelector("main-container.h1").innerText = "Willkommen zur DOM-Manipulationsübung"
const node = document.getElementById('main-container');
const h1Element = node.querySelector('h1');
h1Element.innerText = 'DOM-Manipulationsübung abgeschlossen!';

const button = document.getElementById("changeTextButton");
if(button){
    button.innerText ="Klick mich!"
    button.style.background = "blue";
}


//Part 2

// Aktualisiere deine index.js-Datei, um die Ereignisbehandlung einzubeziehen:
// Füge dem main-container einen weiteren Button mit dem Text „Dark Mode“ nur unter Verwendung von Javascript hinzu
// Füge dem neuen Button einen Ereignis Listener hinzu. Wenn darauf geklickt wird, ändert sich 
// Hintergrundfarbe des <div> mit der ID "main-container" zu schwarz 
// und die Schrift darin wird weiß, 
// und der Text innerhalb des Buttons ändert sich zu „Light Mode“
// Wird der Button erneut geklickt dann ändert sich die Hintergrundfarbe wieder auf weiß und der Text des neuen Button zu „Dark Mode“

const isButton = document.createElement("button");
isButton.innerText = "Dark Mode";
isButton.id = "dark-mode-button";


isButton.addEventListener("click", function() {
    const mainContainer = document.getElementById("main-container");

    if (isButton.innerText === "Dark Mode") {
        mainContainer.style.backgroundColor = "black";
        mainContainer.style.color = "white";
        isButton.innerText = "Light Mode";
    } else {
        mainContainer.style.backgroundColor = "white";
        mainContainer.style.color = "black";
        isButton.innerText = "Dark Mode";
    }
});

const mainContainer = document.getElementById("main-container");
mainContainer.appendChild(isButton);
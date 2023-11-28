//Part 1

// manipuliere den DOM, um Folgendes zu erreichen:
// Wähle das <p>-Element mit der ID "output" aus und ändere seinen Textinhalt auf "Text geändert!".
// Wähle das <h1>-Element innerhalb des <div> mit der ID "main-container" aus und ändere seinen Textinhalt auf "DOM-Manipulationsübung abgeschlossen!".
// Wähle das <button>-Element mit der ID "changeTextButton" aus und ändere seinen Textinhalt auf "Klick mich!„ und seine Hintergrundfarbe auf blau.

/*
document.getElementById("output").innerText = "Text geändert!";

document.querySelector("#output").innerText = "Text geändert!";
*/
const node = document.getElementById("output");
if(node){
    node.innerText = "Text geändert!";
}


document.querySelector("#main-container h1").innerText = "DOM-Manipulationsübung abgeschlossen!";


const button1 = document.getElementById("changeTextButton");
if(button1){
    button1.innerText = "Klick mich!";
    button1.style.backgroundColor = 'aqua';
}




//Part 2

// Aktualisiere deine index.js-Datei, um die Ereignisbehandlung einzubeziehen:
// Füge dem main-container einen weiteren Button mit dem Text „Dark Mode“ nur unter Verwendung von Javascript hinzu
// Füge dem neuen Button einen Ereignis Listener hinzu. Wenn darauf geklickt wird, ändert sich 
// Hintergrundfarbe des <div> mit der ID "main-container" zu schwarz 
// und die Schrift darin wird weiß, 
// und der Text innerhalb des Buttons ändert sich zu „Light Mode“
// Wird der Button erneut geklickt dann ändert sich die Hintergrundfarbe wieder auf weiß und der Text des neuen Button zu „Dark Mode“


const otherButton =  document.createElement("button");
const div1 = document.querySelector("#main-container");
const ueberschrift = document.querySelector("#main-container h1");

if(otherButton){
    otherButton.innerText = "Light Mode";
    otherButton.style.backgroundColor = "black";
    otherButton.style.color = "white";
    otherButton.setAttribute('id', 'Button2');
}

div1.appendChild(otherButton);


function changeToDarkMode(){
    if(div1){
        div1.style.backgroundColor = "black";
    }
    

    if(ueberschrift){
        ueberschrift.style.color = "white";
    }

    if(node){
        node.style.color = "white";
    }

    if(otherButton){
        otherButton.style.backgroundColor = "white";
        otherButton.style.color = "black";
        otherButton.innerText = "Dark Mode";
    }

    if(button1){
        button1.innerText = "Klick mich!";
        button1.style.backgroundColor = 'white';
        button1.style.color = "black";
    }

    console.log("darkmode");
    otherButton.removeEventListener('click', changeToDarkMode);
    document.querySelector('#Button2')
            .addEventListener('click', changeToLightMode);
}


function changeToLightMode(){
    if(div1){
        div1.style.backgroundColor = "white";
    }
    

    if(ueberschrift){
        ueberschrift.style.color = "black";
    }

    if(node){
        node.style.color = "black";
    }

    if(otherButton){
        otherButton.style.backgroundColor = "black";
        otherButton.style.color = "white";
        otherButton.innerText = "White Mode";
    }
    console.log("lightmode");
    otherButton.removeEventListener('click', changeToLightMode);
    document.querySelector('#Button2')
            .addEventListener('click', changeToDarkMode);
}


/*
document.querySelector('#Button2').onclick = inJs;
*/


document.querySelector('#Button2')
        .addEventListener('click', changeToDarkMode);
















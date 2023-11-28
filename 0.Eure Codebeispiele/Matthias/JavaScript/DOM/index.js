//Part 1

// manipuliere den DOM, um Folgendes zu erreichen:
// Wähle das <p>-Element mit der ID "output" aus und ändere seinen Textinhalt auf "Text geändert!".
// Wähle das <h1>-Element innerhalb des <div> mit der ID "main-container" aus und ändere seinen Textinhalt auf "DOM-Manipulationsübung abgeschlossen!".
// Wähle das <button>-Element mit der ID "changeTextButton" aus und ändere seinen Textinhalt auf "Klick mich!„ und seine Hintergrundfarbe auf blau.
document.querySelector("#output").innerText = "Text geändert!";
document.querySelector("#main-container h1").innerText =
  "DOM-Manipulationsübung abgeschlossen!";
document.querySelector("#changeTextButton").innerText = "Klick mich!";
document.querySelector("#changeTextButton").style.backgroundColor = "lightblue";

//Part 2

// Aktualisiere deine index.js-Datei, um die Ereignisbehandlung einzubeziehen:
// Füge dem main-container einen weiteren Button mit dem Text „Dark Mode“ nur unter Verwendung von Javascript hinzu
// Füge dem neuen Button einen Ereignis Listener hinzu. Wenn darauf geklickt wird, ändert sich
// Hintergrundfarbe des <div> mit der ID "main-container" zu schwarz
// und die Schrift darin wird weiß,
// und der Text innerhalb des Buttons ändert sich zu „Light Mode“
// Wird der Button erneut geklickt dann ändert sich die Hintergrundfarbe wieder auf weiß und der Text des neuen Button zu „Dark Mode“
let mainContainer = document.querySelector("#main-container");
let btnDarkMode = document.createElement("button");
let darkMode = false;
btnDarkMode.innerText = "Dark Mode";
mainContainer.appendChild(btnDarkMode);

btnDarkMode.addEventListener("click", function () {
  if (!darkMode) {
    mainContainer.style.backgroundColor = "#000";
    mainContainer.style.color = "#fff";
    btnDarkMode.innerText = "Light Mode";
    darkMode = true;
  } else {
    mainContainer.style.backgroundColor = "#fff";
    mainContainer.style.color = "#000";
    btnDarkMode.innerText = "Dark Mode";
    darkMode = false;
  }
});

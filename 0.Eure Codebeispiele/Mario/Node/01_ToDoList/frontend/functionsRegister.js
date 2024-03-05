
/*
async function checkUserExists() {
    const userName = document.getElementById('userNameRegistration').value;

    // Send a request to check if the user exists
    const response = await fetch(`/insertNewUserIntoDB?userName=${userName}`);




    if (data.action === "showAlert") {
        // Call a function to display the alert message
        showAlert();
    }
}*/


/*
async function checkUserExists() {
    const userName = document.getElementById('userNameRegistration').value;
    const Password = document.getElementById('passwordRegistration').value;

    // Send a request to check if the user exists
    const response = await fetch(`/insertNewUserIntoDB?userName=${userName}?Password=${Password}`);
    const data = await response.json();

    console.log(data.action)

    if (data.action === "redirect") {
        console.log(data.action)
        // Redirect the user to the specified destination
        window.location.href = data.destination;
    }
}
*/

/*
function showAlert() {
    alert("message");
}

*/












//document.getElementById("backToLoginButton").addEventListener("click", checkUserExists);




/*
function postRegisterDataIntoDB(){
    var inputName = document.getElementById("inputToDo").value;
    if (inputText == ""){
        window.alert("Das ToDo Feld darf nicht leer sein!");
    } else{
        try {
            fetch('http://localhost:3000/insertNewItemIntoDB', {
              method: "POST", // or 'PUT'
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({itemList: inputText}),
            });
            location.reload();
        } catch (error) {
            console.error("Error:", error);
        }
    }
}*/

/*
async function checkUserExists() {
    const userName = document.getElementById('userNameRegistration').value;
    
    // Send a request to check if the user exists
    const response = await fetch(`/checkUserExists?userName=${userName}`);
    const data = await response.json();

    if (data.exists) {
        document.getElementById('userExistsMessage').innerText = 'User already exists';
    } else {
        document.getElementById('userExistsMessage').innerText = '';
    }
}


*/
















/*

// Login
function User(user, password, userID){
    this.user = user;
    this.password = password;
    this.userID = userID;
}


// UserID festlegen:
var userID = 0;
var userRegistration = new User([], [], []);
//userRegistration.user = ["Mario", "Bernd", "Kathi"];
//userRegistration.password = ["123", "1234", "12345"];

function getObjectUserFromStorage(){
    if(localStorage.getItem('objectUser') == null){
        localStorage.setItem('objectUser', JSON.stringify(userRegistration));
        localStorage.setItem('userID', userID);
    }
    return JSON.parse(localStorage.getItem('objectUser'));
}


//Registration
document.getElementById("backToLoginButton").addEventListener("click", addUser);

function proovementInput(){
    let userInput = document.getElementById("userNameRegistration").value;
    let userInputPW = document.getElementById("passwordRegistration").value;

    let boolDoubleOrNot = getObjectUserFromStorage().user.includes(userInput);

    if(userInput == "" || userInputPW == ""){
        window.alert("Eingabe darf nicht leer sein!");
    } else if(boolDoubleOrNot){
        window.alert("User bereits vergeben!")
    } else{
        return true;
    }
    
}


function addUser(){
    userRegistration = getObjectUserFromStorage();
    let userInput = document.getElementById("userNameRegistration").value;
    let userInputPW = document.getElementById("passwordRegistration").value;
    console.log(userInput)
    console.log(userInputPW)


    if(proovementInput()){
        userRegistration.user.push(userInput);
        userRegistration.password.push(userInputPW);

        //User ID festlegen und hochzählen
        // automatische User ID
        userRegistration.userID.push(getCurrentUserID());
        localStorage.setItem('userID', getCurrentUserID());

        updateLocalStorage(userRegistration);
        goToLogin();
    }
}


function getCurrentUserID(){
    if(localStorage.getItem('userID') > getObjectUserFromStorage().user.length+1){
        userID = localStorage.getItem('userID');
        return userID;
    } else{
        return getObjectUserFromStorage().user.length+1
    }
}



function goToLogin(){
    window.alert("Registrierung erfolgreich - Sie werden zum Login weitergeleitet!");
    window.location.href = './login.html';
}


function updateLocalStorage(){
    localStorage.setItem('objectUser', JSON.stringify(userRegistration));
}




console.log(getObjectUserFromStorage().user)
console.log(getObjectUserFromStorage().password)


*/
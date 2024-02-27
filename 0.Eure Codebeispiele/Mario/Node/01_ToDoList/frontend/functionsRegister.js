





























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
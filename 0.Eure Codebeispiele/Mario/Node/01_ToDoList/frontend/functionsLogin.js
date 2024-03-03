




















/*


//Login Functions
document.getElementById("loginButton").addEventListener("click", userOrPasswordIsFalse);

function userOrPasswordIsFalse(){
    if(testingIfAnyUserIsRegistrated()){
        window.alert("Keine Nutzer registriert - Bitte registrieren!")
    } else if(inputUserNameEmpty() || inputUserPWEmpty()){
        window.alert('Bitte die Eingabefelder "Benutzer" und "Passwort" ausfüllen!');
    } else if (getIndexFromUserObject() == -1){
        window.alert("Benutzer ist falsch!");
    } else if (getUserPasswordInput() != getObjectUserFromStorage().password[getIndexFromUserObject()]){
        window.alert("Passwort ist falsch!")
    } else{

        // set Item into registration


        localStorage.setItem('activeUserIndex', getActiveUserID());
        window.alert("Login erfolgreich - Sie werden zur ToDo Liste weitergeleitet!")
        window.location.href = './todoList.html';
    }
}


function testingIfAnyUserIsRegistrated(){
    if(localStorage.getItem('objectUser') == null){
        return true;
    } else if(localStorage.getItem('objectUser') != null){
        var object = JSON.parse(localStorage.getItem('objectUser'));
        if(object.user.length == 0){
            return true;
        }
    }
}


function inputUserNameEmpty(){
    if(document.getElementById("userName").value == ""){
        return true;
    } else{
        return false;
    }
}


function inputUserPWEmpty(){
    if(document.getElementById("password").value == ""){
        return true;
    } else{
        return false;
    }
}


function getObjectUserFromStorage(){
    return JSON.parse(localStorage.getItem('objectUser'));
}


function getIndexFromUserObject(){
    return getObjectUserFromStorage().user.indexOf(getUserNameInput());
}

function getActiveUserID(){
    return getObjectUserFromStorage().userID[getIndexFromUserObject()];
}



// get User Inputs

function getUserNameInput(){
    return document.getElementById("userName").value;
}

function getUserPasswordInput(){
    return document.getElementById("password").value;
}

*/















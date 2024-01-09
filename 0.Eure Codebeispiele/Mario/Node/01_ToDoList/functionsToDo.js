// herauslesen der aktuellen User ID
const activeUserIndex = localStorage.getItem('activeUserIndex');
console.log(activeUserIndex);




// neues Objekt erstellen mit Item (Todo), boolean (false --> Todo noch nicht erledigt, true --> erledigt), UserIndex
function User(userIndex, itemList, itemListDone){
    this.userIndex = userIndex;
    this.itemList = itemList;
    this.itemListDone = itemListDone;
}







document.getElementById("newInput").addEventListener("click", insertNewInput);
document.getElementById("deleteAll").addEventListener("click", deleteAll);

var objectItems = new User([], [], []);

// Initialisierung
function initialisierung(){
    objectItems.itemList = JSON.parse(localStorage.getItem('object')).itemList;
    objectItems.itemListDone = JSON.parse(localStorage.getItem('object')).itemListDone;
    objectItems.userIndex = JSON.parse(localStorage.getItem('object')).userIndex;
    updateList();
}

initialisierung();



function getItemListFromLocalStorage(){
    return JSON.parse(localStorage.getItem('ToDoList')).itemList;
}

function getItemListDoneFromLocalStorage(){
    return JSON.parse(localStorage.getItem('ToDoList')).itemListDone;
}


function insertNewInput(){
    let inputText = document.getElementById("inputToDo").value;
    let inputTextDone = "false";
    if(inputText != null && inputText != ""){
        objectItems.itemList.push(inputText);
        objectItems.itemListDone.push(inputTextDone);
        objectItems.userIndex.push(activeUserIndex);

        refreshLocalStorage();
        updateList();
        clearInput();
    }
    if (inputText == ""){
        window.alert("Das ToDo Feld darf nicht leer sein!");
    }
}

function setItemDone(index){
    if(objectItems.itemListDone[index] == "true"){
        objectItems.itemListDone[index] = "false";
    } else{
        objectItems.itemListDone[index] = "true";
    }
    updateList();
    refreshLocalStorage();
}


function removeItem(index){
    objectItems.itemList.splice(index, 1);
    objectItems.itemListDone.splice(index, 1);
    objectItems.userIndex.splice(index, 1);
    updateList();
    refreshLocalStorage();
}


function changeItem(index){
    let item = document.getElementById("inputToDo").value;
    clearInput();
    let valueItemListDone = "false";

    if(item == objectItems.itemList[index]){
        window.alert("Änderung ident!");
    } else if(item == ""){
        window.alert("Änderung zu leerem ToDo nicht möglich!");
    } else if(item != null){
        objectItems.itemList[index]=item;
        objectItems.itemListDone[index]=valueItemListDone;
        updateList();
        refreshLocalStorage();
    }
}


function updateList(){
    let x = document.getElementById("list");
    x.innerHTML = " ";
    let decText = " ";
    for(i = 0; i < objectItems.itemList.length; i++){
        if(objectItems.userIndex[i] == activeUserIndex){
            if(objectItems.itemListDone[i] == "true"){
                decText = "<s>"+objectItems.itemList[i]+"</s>";
            } else {
                decText = objectItems.itemList[i];
            }
            x.innerHTML += "<li class='list-group-item' id='ItemId1'>"+
            "<button class='btn btnGoogle' onclick='setItemDone(" + i + ")'><i class='material-icons'>done</i></button>"+
            "<span>&nbsp;&nbsp;&nbsp;&nbsp;</span>"+
            decText+"<span>&nbsp;&nbsp;&nbsp;&nbsp;</span>"+
            "<button class='btn btnGoogle' onclick='changeItem(" + i + ")'><i class='material-icons'>edit</i></button>"+
            "&nbsp;&nbsp;"+
            "<button class='btn btnGoogle' onclick='removeItem(" + i + ")'><i class='material-icons'>delete</i></button></li>";
        }
    }
}


function refreshLocalStorage(){
    localStorage.setItem('object', JSON.stringify(objectItems));
}


function clearInput(){
    document.getElementById("inputToDo").value = "";
}


function deleteAll(){
    objectItems.itemList = [];
    objectItems.itemListDone = [];
    objectItems.userIndex = [];
    updateList();
    refreshLocalStorage();
}
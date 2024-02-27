

var user = 1;




document.addEventListener("DOMContentLoaded", activatedFktn());

function activatedFktn() {
    console.log("sucess");
    var activeUserIndex = user;
    fetch('http://localhost:5500/refresh', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    })
    .then(response => response.json())
    .then(objectItems => {

        console.log(objectItems[0].itemList);
        console.log(Object.keys(objectItems).length)
        let x = document.getElementById("list");
        x.innerHTML = " ";
        let decText = " ";
        for(i = 0; i < Object.keys(objectItems).length; i++){
        if(true){
        //if(objectItems.userIndex[i] == activeUserIndex){
            if(objectItems[i].itemListDone == "true"){
                decText = "<s>"+objectItems[i].itemList+"</s>";
            } else {
                decText = objectItems[i].itemList;
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
    })
};


function clearInput(){
    document.getElementById("inputToDo").value = "";
}



document.getElementById("newInput").addEventListener("click", postNewInput);

async function postNewInput() {
    var inputText = document.getElementById("inputToDo").value;
    if (inputText == ""){
        window.alert("Das ToDo Feld darf nicht leer sein!");
    } else{
        try {
            await fetch('http://localhost:5500/newItem', {
              method: "POST", // or 'PUT'
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ID: 1, itemList: inputText, itemListDone: 'false'}),
            });
        } catch (error) {
            console.error("Error:", error);
        }
    }

}

document.getElementById("deleteAll").addEventListener("click", deleteAllItems);

async function deleteAllItems(){
    try {
      await fetch('http://localhost:5500/deleteAllItems', {
        method: "DELETE", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ID: 1}),
      });
    } catch (error) {
      console.error("Error:", error);
    }
}


async function deleteTodoItem(itemId) {
    try {
      const response = await fetch(`/todos/${itemId}`, {
        method: 'DELETE'
      });
      
      if (!response.ok) {
        throw new Error('Failed to delete todo item');
      }

      // Remove the deleted item from the UI
      const listItem = document.getElementById(`todo-item-${itemId}`);
      listItem.remove();
    } catch (error) {
      console.error('Error:', error);
    }
}

activatedFktn();

//var objectItems = activatedFktn();

/*
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
*/




/*
document.addEventListener('DOMContentLoaded', function () {
    fetch('/todos')
    .then(response => response.json())
    .then(todos => {
      todos.forEach(todo => {
        addTodoItem(todo.title);
      });
    })
    .catch(error => {
      console.error('Error fetching todo items:', error);
    });
});




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
*/





















/*

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

*/






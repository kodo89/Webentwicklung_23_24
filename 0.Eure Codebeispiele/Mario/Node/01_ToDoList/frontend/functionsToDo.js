

//var user = 1;

/*
Hinweise ToDo List:
Body parser braucht man nicht zwingend... aver man kann schrieben: app.user (express.urlencoded()) usw. man kann aber auch beides nehmen
*/


document.addEventListener("DOMContentLoaded", fetchDataFromDB);

function fetchDataFromDB() {
    console.log("testing");

    fetch('http://localhost:3000/loadDataFromDB', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
        console.log("Länge: "+ data.length)

        //console.log(data[0].ID)
        //console.log(data[0].itemList)
        //console.log(data[0].ItemlistDone)

        let x = document.getElementById("list");
        x.innerHTML = " ";
        let decText = " ";
        for(i = 0; i < data.length; i++){
            console.log("reload")
            if(data[i].ItemlistDone == "true"){
                decText = "<s>"+data[i].itemList+"</s>";
            } else {
                decText = data[i].itemList;
            }
            x.innerHTML += "<li class='list-group-item' id='"+data[i].ID+"'>"+
            "<button class='btn btnGoogle' onclick='setItemDone(" + data[i].ID + "," + data[i].ItemlistDone + ")'><i class='material-icons'>done</i></button>"+
            "<span>&nbsp;&nbsp;&nbsp;&nbsp;</span>"+
            decText+"<span>&nbsp;&nbsp;&nbsp;&nbsp;</span>"+
            "<button class='btn btnGoogle' onclick='changeItem(" + data[i].ID + ")'><i class='material-icons'>edit</i></button>"+
            "&nbsp;&nbsp;"+
            "<button class='btn btnGoogle' onclick='removeItemFromDB(" + data[i].ID + ")'><i class='material-icons'>delete</i></button></li>";
        }
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
}



document.getElementById("newInput").addEventListener("click", postDataIntoDB);

function postDataIntoDB(){
    var inputText = document.getElementById("inputToDo").value;
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
}



/* asdjhksajd*/
/*
function setItemDone(itemId) {
    fetch(`/updateToDoToDone/${itemId}`, {
      method: 'UPDATE'
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      console.log('Todo was set to done successfully');
    })
    .catch(error => {
      console.error('Error:', error);
    });
    location.reload();
}*/

function setItemDone(itemId, isDone) {
  console.log("set Item done test")
  fetch(`http://localhost:3000/updateToDoToDone/${itemId}/${isDone}`, {
    method: 'PATCH' // or 'PATCH' depending on your server-side implementation
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    //console.log('Todo was set to done successfully');
  })
  .catch(error => {
    console.error('Error:', error);
  });
  location.reload();
}



function changeItem(itemId){
  var inputText = document.getElementById("inputToDo").value;
  if (inputText == ""){
      window.alert("Das ToDo Feld darf nicht leer sein!");
  } else{
      try {
          fetch(`http://localhost:3000/changeItemInTheDB/${itemId}`, {
            method: "PATCH", // or 'PUT'
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
}





function removeItemFromDB(itemId) {
    fetch(`http://localhost:3000/specificToDo/${itemId}`, {
      method: 'DELETE'
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      console.log('Todo deleted successfully');
    })
    .catch(error => {
      console.error('Error:', error);
    });
    location.reload();
}




document.getElementById("deleteAll").addEventListener("click", deleteAllItemsFromDB);


function deleteAllItemsFromDB() {
    fetch(`http://localhost:3000/deleteAllItems`, {
      method: 'DELETE'
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      console.log('All Todos are deleted successfully');
    })
    .catch(error => {
      console.error('Error:', error);
    });
    location.reload();
}


/*

const removeItem = async (id) => {
    try {
      const response = await fetch(`/specificToDo/${id}`, {
        method: 'DELETE'
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      console.log('Todo deleted successfully');
  
      // Reload the page after successful deletion
      location.reload();
    } catch (error) {
      console.error('Error:', error);
    }
  };
  
*/

/*

async function removeItem(itemId) {
    try {
      const response = await fetch(`/specificToDo/${itemId}`, {
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


*/






function getAllTodos(){
    console.log("sucess");

    var userInput = req.query.username;
    var userPassword = req.query.password;

    console.log(userInput);
    console.log(userPassword);


    fetch('http://localhost:3000/goToToDoList', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    })
    .then(response => response.json())
    .then(objectItems => {

        console.log(req.query)


        console.log(objectItems[0]);

        console.log("test");

        /*
        //console.log(objectItems[0].itemList);
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
            x.innerHTML += "<li class='list-group-item' id='"+objectItems[i].ID+"'>"+
            "<button class='btn btnGoogle' onclick='() => setItemDone(" + objectItems[i].ID + ", "+objectItems[i].ID+")'><i class='material-icons'>done</i></button>"+
            "<span>&nbsp;&nbsp;&nbsp;&nbsp;</span>"+
            decText+"<span>&nbsp;&nbsp;&nbsp;&nbsp;</span>"+
            "<button class='btn btnGoogle' onclick='changeItem(" + i + ")'><i class='material-icons'>edit</i></button>"+
            "&nbsp;&nbsp;"+
            "<button class='btn btnGoogle' onclick='removeItem(" + i + ")'><i class='material-icons'>delete</i></button></li>";

            
        }
    }*/
    })
}











/*
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

        //console.log(objectItems[0].itemList);
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
            x.innerHTML += "<li class='list-group-item' id='"+objectItems[i].ID+"'>"+
            "<button class='btn btnGoogle' onclick='() => setItemDone(" + objectItems[i].ID + ", "+objectItems[i].ID+")'><i class='material-icons'>done</i></button>"+
            "<span>&nbsp;&nbsp;&nbsp;&nbsp;</span>"+
            decText+"<span>&nbsp;&nbsp;&nbsp;&nbsp;</span>"+
            "<button class='btn btnGoogle' onclick='changeItem(" + i + ")'><i class='material-icons'>edit</i></button>"+
            "&nbsp;&nbsp;"+
            "<button class='btn btnGoogle' onclick='removeItem(" + i + ")'><i class='material-icons'>delete</i></button></li>";
        }
    }
    })
};

*/

/*
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
*/

document.getElementById("deleteAll").addEventListener("click", deleteAllItems);

async function deleteAllItems(){
    try {
      await fetch('http://localhost:3000/deleteAllItems', {
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
      const response = await fetch(`http://localhost:3000/todos/${itemId}`, {
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





//activatedFktn();

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






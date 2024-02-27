

document.getElementById("random").addEventListener("click", printRandom);


function printRandom(){
    fetch('http://localhost:3000/random', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    }).then(response => 
        response.json()).then(data => {
        document.getElementById("id1").innerHTML = data.id + '<br>' + data.jokeType + '<br>' + data.jokeText;
    })
}



document.getElementById("getJoke").addEventListener("click", printJoke);


function printJoke(){
    let min = Math.ceil(0);
    let max = Math.floor(5);
    let index = Math.floor(Math.random() * (max - min) + min);

    fetch('http://localhost:3000/dbendpoint', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    }).then(response => 
        response.json()).then(data => { console.log(data)
        document.getElementById("printJoke").innerHTML = data[index].id + '<br>' + data[index].jokeText;
    })
}




document.getElementById("getAllJoke").addEventListener("click", printAllJoke);

function printAllJoke(){
    fetch('http://localhost:3000/alljokesfromdb', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    }).then(response => 
        response.json()).then(data => { console.log(data)
    
        for (let i = 0; i < data.length; i++){
            const listItem = document.createElement("li");
            listItem.innerText = data[i].jokeText;
            document.getElementById("printAllJoke").appendChild(listItem);
        }

    })
}


document.getElementById("insertJoke").addEventListener("click", postJSON);

function insertJoke(){
    fetch('http://localhost:3000/newjoke', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({'id': 120, 'jokeText': 'asjkdh', 'jokeType': 'asdjkh'})
    }).then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
}



async function postJSON() {
    try {
      const response = await fetch('http://localhost:3000/newjoke', {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({id: 200, jokeText: 'test', jokeType: 'test'}),
      });
  
      const result = await response.json();
      console.log("Success:", result);
    } catch (error) {
      console.error("Error:", error);
    }
  }
  


  document.getElementById("updateJoke").addEventListener("click", updateJoke);

  async function updateJoke(){
    try {
        const response = await fetch('http://localhost:3000/update', {
          method: "PUT", // or 'PUT'
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({id: 200, jokeText: 'test2', jokeType: 'test2'}),
        });
    
        const result = await response.json();
        console.log("Success:", result);
      } catch (error) {
        console.error("Error:", error);
      }
  }



  document.getElementById("deleteJoke").addEventListener("click", deleteJoke);

  async function deleteJoke(){
    //alert("tzest");

    try {
        const response = await fetch('http://localhost:3000/delete', {
          method: "DELETE", // or 'PUT'
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({id: 200}),
        });
    
        const result = await response.json();
        console.log("Success:", result);
      } catch (error) {
        console.error("Error:", error);
      }
  }

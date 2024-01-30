

document.querySelector("btn").addEventListener('click', newBtn);

function newBtn(){

  fetch('http://localhost:3000/jokesfe', {
    method: 'GET',
    headers:{
        'content-type' : 'application/json'
    }

  }).then(response => response.json()).then(data => {
    document.getElementById("name").innerHTML = data.text + " " + data.type;
  })
}
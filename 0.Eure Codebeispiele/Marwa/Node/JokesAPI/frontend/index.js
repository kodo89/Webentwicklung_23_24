

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
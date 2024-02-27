

   let button = document.getElementById('jokebtn');
   
   button.addEventListener("click", fetchData);
    
    
    
    function fetchData() {

    console.log("test");
    
        fetch ('http://localhost:3000/random', {
            method:"GET",
            headers:{
                "Content-Type" : "application/json"
            }
           
        })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            document.getElementById("result").innerHTML=
            "<p>"+data.id + "</p>" + 
            "<p>"+data.jokeText + "</p>" + 
            "<p>"+data.jokeType + "</p>"
        })
    }


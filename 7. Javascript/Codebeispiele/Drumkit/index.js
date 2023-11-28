
let drums = document.getElementsByClassName("drum");
for(let i = 0; i < drums.length; i++){
    drums[i].addEventListener("click", function(){  //oder () => {} gleich sind 
        console.log(this.innerText)
        let sound = new Audio("sounds/" + this.innerText + ".mp3")
        sound.play();
    })
}
document.addEventListener("keypress/",)



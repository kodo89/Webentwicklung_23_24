let labyear = prompt("Enter a Labyear: ");

function year(labyear){
    if(labyear % 4 == 0){
        if(labyear % 100 == 0){
            if(labyear % 400 == 0){
                return true;
            }
            return false;
        }
        return true;
    } else{
        return false;
    }
}
const myresult = year(labyear);
alert(myresult);
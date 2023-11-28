
/* 1000 Euro Startkapital */
let valueStartingKapital = 1000;
let valueInput = 5;


/*Spielkarten*/
const randomCard = new Array();
var randomNumber = Math.floor(Math.random()*randomCard.length);

randomCard[0] = "./images/01ass_eichel.png";
randomCard[1] = "./images/01ass_herz.png";
randomCard[2] = "./images/01ass_karo.png";
randomCard[3] = "./images/01ass_pik.png";

randomCard[4] = "./images/02eichel.png";
randomCard[5] = "./images/02herz.png";
randomCard[6] = "./images/02karo.png";
randomCard[7] = "./images/02pik.png";

randomCard[8] = "./images/03eichel.png";
randomCard[9] = "./images/03herz.png";
randomCard[10] = "./images/03karo.png";
randomCard[11] = "./images/03pik.png";

randomCard[12] = "./images/04eichel.png";
randomCard[13] = "./images/04herz.png";
randomCard[14] = "./images/04karo.png";
randomCard[15] = "./images/04pik.png";

randomCard[16] = "./images/05eichel.png";
randomCard[17] = "./images/05herz.png";
randomCard[18] = "./images/05karo.png";
randomCard[19] = "./images/05pik.png";

randomCard[20] = "./images/06eichel.png";
randomCard[21] = "./images/06herz.png";
randomCard[22] = "./images/06karo.png";
randomCard[23] = "./images/06pik.png";

randomCard[24] = "./images/07eichel.png";
randomCard[25] = "./images/07herz.png";
randomCard[26] = "./images/07karo.png";
randomCard[27] = "./images/07pik.png";

randomCard[28] = "./images/08eichel.png";
randomCard[29] = "./images/08herz.png";
randomCard[30] = "./images/08karo.png";
randomCard[31] = "./images/08pik.png";

randomCard[32] = "./images/09eichel.png";
randomCard[33] = "./images/09herz.png";
randomCard[34] = "./images/09karo.png";
randomCard[35] = "./images/09pik.png";

randomCard[36] = "./images/10eichel.png";
randomCard[37] = "./images/10herz.png";
randomCard[38] = "./images/10karo.png";
randomCard[39] = "./images/10pik.png";

randomCard[40] = "./images/11BubeEichel.png";
randomCard[41] = "./images/11BubeHerz.png";
randomCard[42] = "./images/11BubeKaro.png";
randomCard[43] = "./images/11BubePik.png";

randomCard[44] = "./images/12_Koenig_eichel.png";
randomCard[45] = "./images/12KoenigHerz.png";
randomCard[46] = "./images/12KoenigKaro.png";
randomCard[47] = "./images/12KoenigPik.png";

randomCard[48] = "./images/13DameEichel.png";
randomCard[49] = "./images/13DameHerz.png";
randomCard[50] = "./images/13DameKaro.png";
randomCard[51] = "./images/13DamePik.png";



const valueEqualToCard = new Array(52);
for(let i = 0; i < valueEqualToCard.length; i++){
    if(i<4){
        valueEqualToCard[i] = 1;
    } else if(i > 3 && i < 8){
        valueEqualToCard[i] = 2;
    } else if(i > 7 && i < 12){
        valueEqualToCard[i] = 3;
    } else if(i > 11 && i < 16){
        valueEqualToCard[i] = 4;
    } else if(i > 15 && i < 20){
        valueEqualToCard[i] = 5;
    } else if(i > 19 && i < 24){
        valueEqualToCard[i] = 6;
    } else if(i > 23 && i < 28){
        valueEqualToCard[i] = 7;
    } else if(i > 27 && i < 32){
        valueEqualToCard[i] = 8;
    } else if(i > 31 && i < 36){
        valueEqualToCard[i] = 9;
    } else if(i > 35 && i < valueEqualToCard.length){
        valueEqualToCard[i] = 10;
    }
}


console.log(valueEqualToCard[51]);



function setValueInput(valueInput){
    return valueInput;
}




function returnRandomCardNumber(randomCard){
    let randomCardNumber = Math.floor(Math.random()*randomCard.length);
    let i = 0;
    while(i<1){
        if(randomCardNumber === randomCard[randomCardNumber]){
            randomCardNumber = Math.floor(Math.random()*randomCard.length);
        } else if(randomCardNumber !== randomCard[randomCardNumber]){
            i++;
        }
    }
    return randomCardNumber;
}






/*Gameloop*/



let i = 0;
let valuePlayer = 0;
let valueBank = 0;
while(i<1){



    setValueInput;
    returnRandomCardNumber;

    /*Player gets 2 cards*/

    valuePlayer += returnRandomCardNumber;
    valuePlayer += returnRandomCardNumber;

    if(valuePlayer > 21){
        console.log("You loose. The bank wins")
    }


    valueBank += returnRandomCardNumber;
    valueBank += returnRandomCardNumber;

    if(valueBank > 21){
        console.log("You win. The bank loose")
        i++;
    } else if(valueBank > 15 && valueBank < 22){
        if(valueBank > valuePlayer){
            console.log("The bank wins!");
            i++;
        } else if(valueBank < valuePlayer){
            console.log("The player looses!");
            i++;
        }
    }

    




}








/*

for(let i = 0; i < arrayCards.length; i++){
        arrayCards[i];
}

*/





















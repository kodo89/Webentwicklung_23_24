//Nutze das NPM Modul superheroes um einen zufälligen Superheldennamen zu generieren

import superheroes from 'superheroes'
 
superheroes.all;
//=> ['3-D Man', 'A-Bomb', …]
 
console.log(superheroes.random());
//=> 'Spider-Ham'
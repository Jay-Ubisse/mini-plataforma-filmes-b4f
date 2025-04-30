// Arquivo principal que inicializa a aplicação
import {updateFilm} from "./update-film.js";
//import { listfilms } from "./get-films.js";
//listfilms(films)
/*

============== GROUP 1 LOGIC ==========

*/

/*

============== GROUP 2 LOGIC ==========

*//*
edit_button.addEventListener("click",()=>{ 
    updateFilm();
})*/
window.updateFilm=updateFilm;


/*
<<<<<<< HEAD
============== GROUP 3 LOGIC ==========
*/



/*
    ===========GROUP 3 LOGIC === === === =

    
>>>>>>> 9f8282c0009f92b099a197137ea82f5f253dddf5*/

import { films } from "../data/db.js";
import { listfilms } from "./get-films.js";
listfilms(films)




/*
============== GROUP 4 LOGIC ==========

<<<<<<< HEAD
*/


import { showDetails } from "./film-details";
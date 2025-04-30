// Arquivo principal que inicializa a aplicação
import { updateFilm } from "./update-film.js";
//import { listfilms } from "./get-films.js";
//listfilms(films)
import { newFilm } from "./create-film.js";
/*

============== GROUP 1 LOGIC ==========

*/
document.addEventListener(`DOMContentLoaded`, () => {
    newFilm();

});

/*
============== GROUP 2 LOGIC ==========
*//*
edit_button.addEventListener("click",()=>{ 
    updateFilm();
})*/
window.updateFilm = updateFilm;

/*
============== GROUP 3 LOGIC ==========
*/

/*
    ===========GROUP 3 LOGIC === === === =
import { films } from "../data/db.js";
import { listfilms } from "./get-films.js";
listfilms(films)
/*
============== GROUP 4 LOGIC ==========

*/


import { showDetails } from "./film-details";

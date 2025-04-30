// Arquivo principal que inicializa a aplicação
import { updateFilm } from "./update-film.js";
import { newFilm } from "./create-film.js";
/*

============== GROUP 1 LOGIC ==========

*/
document.addEventListener(`DOMContentLoaded`, () => {
    newFilm();

});

/*
============== GROUP 2 LOGIC ==========
*/
window.updateFilm = updateFilm;

/*
============== GROUP 3 LOGIC ==========
*/
import { films } from "../data/db.js";
import { listfilms } from "./get-films.js";
listfilms(films);
/*
============== GROUP 4 LOGIC ==========

*/

import { showDetails } from "./film-details";

let viewDetails=document.getElementById("details")
viewDetails.onclick=showDetails()


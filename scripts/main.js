// Arquivo principal que inicializa a aplicação
import { updateFilm } from "./update-film.js";

/*

============== GROUP 1 LOGIC ==========

*/


/*
============== GROUP 2 LOGIC ==========
*/
window.updateFilm = updateFilm;
/*
document.getElementById("edit").addEventListener("submit", (e) => {
    e.preventDefault();
    updateFilm();
});*/
/*
============== GROUP 3 LOGIC ==========
*/

import { films } from "../data/db.js";
import { listfilms } from "./get-films.js";
listfilms(films)




/*
============== GROUP 4 LOGIC ==========

*/

import { showDetails } from "./film-details";

let viewDetails = document.getElementById("details")
viewDetails.onclick = showDetails()


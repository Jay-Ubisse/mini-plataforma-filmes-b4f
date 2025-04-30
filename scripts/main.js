// Arquivo principal que inicializa a aplicação
import { updateFilm } from "./update-film.js";
import { addBtn } from "./create-film.js";
import { isFieldValidated } from "./create-film.js";
import { createFilm } from "./create-film.js";

/*

============== GROUP 1 LOGIC ==========

*/
//add new film button
/*document.addEventListener(`DOMContentLoaded`, () => {
  newFilm();
});*/

 
 addBtn();
document.getElementById("addFilmForm").addEventListener("submit", (e) => {
  e.preventDefault();
  isFieldValidated();
  createFilm();
    
});


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


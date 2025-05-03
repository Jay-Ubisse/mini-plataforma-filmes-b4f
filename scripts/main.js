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
<<<<<<< HEAD
  isFieldValidated();
  createFilm();
    
=======
  //isFieldValidated(); Verificar isso
  const response = createFilm();
  alert(response.message);
>>>>>>> 2c2ee29ad05453c078578d7f6d6fe4ce19131bf5
});


/*
============== GROUP 2 LOGIC ==========
*/

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


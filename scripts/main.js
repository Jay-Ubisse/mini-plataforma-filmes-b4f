// Arquivo principal que inicializa a aplicação
import { addBtn, isFieldValidated } from "./create-film.js";
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

/*

============== GROUP 3 LOGIC ==========

*/

/*

============== GROUP 4 LOGIC ==========

*/

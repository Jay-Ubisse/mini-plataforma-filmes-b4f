// Arquivo principal que inicializa a aplicação
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
  //isFieldValidated(); Verificar isso
  const response = createFilm();
  alert(response.message);
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

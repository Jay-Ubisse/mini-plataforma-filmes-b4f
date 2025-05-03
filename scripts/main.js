// Arquivo principal que inicializa a aplicação

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
import { deleteFilm} from "../scripts/delete-film.js";
import { removeElement } from "../scripts/delete-film.js";
const deletebtn=document.getElementById("deleteButton");
const value=deletebtn.getAttribute("value");
deletebtn.addEventListener("click", ()=>{
deleteFilm();
removeElement(value);
});

/*
============== GROUP 4 LOGIC ==========

*/


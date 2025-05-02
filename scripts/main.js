// Arquivo principal que inicializa a aplicação import { listfilms } from "../scripts/get-films.js"


/*

============== GROUP 1 LOGIC ==========

*/

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


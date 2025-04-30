// Arquivo principal que inicializa a aplicação
import { listfilms } from "../scripts/get-films.js";
import { deleteFilm} from "../scripts/delete-film.js";
/*

============== GROUP 1 LOGIC ==========

*/

/*

============== GROUP 2 LOGIC ==========

*/


/*
============== GROUP 3 LOGIC ==========
*/
const deletebtn=document.getElementById("deleteButton");
deletebtn.addEventListener("click", ()=>{
deleteFilm();
});

/*
============== GROUP 4 LOGIC ==========

*/


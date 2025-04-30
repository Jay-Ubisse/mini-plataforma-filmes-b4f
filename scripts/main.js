// Arquivo principal que inicializa a aplicação
import { updateFilm } from "./update-film.js";
import { newFilm} from "./create-film.js";
import { films } from "../data/db.js";
import { listfilms } from "./get-films.js";
import { showDetails } from "./film-details";

/*

============== GROUP 1 LOGIC ==========

*/
document.addEventListener(`DOMContentLoaded`,()=>{
  newFilm();

});

/*

============== GROUP 2 LOGIC ==========

*/
edit_button.addEventListener("click",()=>{ 
    updateFilm();
});
window.updateFilm = updateFilm;


/*
    ===========GROUP 3 LOGIC === === === =

 */

listfilms(films);

/*
============== GROUP 4 LOGIC ==========

*/



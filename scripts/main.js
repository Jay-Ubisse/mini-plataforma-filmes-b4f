// Arquivo principal que inicializa a aplicação
import { updateFilm } from "./update-film.js";
//import { listfilms } from "./get-films.js";
//listfilms(films)
/*

============== GROUP 1 LOGIC ==========

*/

/*

============== GROUP 2 LOGIC ==========

*/ /*
edit_button.addEventListener("click",()=>{ 
    updateFilm();
})*/
const editFilmBtn = document.getElementById("editFilmBtn");

editFilmBtn.addEventListener("click", () => {
  updateFilm(editFilmBtn.value);
});

/*



    ===========GROUP 3 LOGIC === === === =

    *
    /

/*

============== GROUP 4 LOGIC ==========

*/

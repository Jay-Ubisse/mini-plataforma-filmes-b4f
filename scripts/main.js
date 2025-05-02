// Arquivo principal que inicializa a aplicação
import {updateFilm} from "./update-film.js";
//import { listfilms } from "./get-films.js";
//listfilms(films)
/*

============== GROUP 1 LOGIC ==========

*/

/*

============== GROUP 2 LOGIC ==========

*/
const updateButton = document.querySelectorAll(".updateButton");

updateButton.forEach(updateButton => {
    const value=updateButton.getAttribute("value");
    updateButton.addEventListener("click",()=>{ 
    updateFilm(value);
})
});



/*



    ===========GROUP 3 LOGIC === === === =

    *
    /

/*

============== GROUP 4 LOGIC ==========

*/
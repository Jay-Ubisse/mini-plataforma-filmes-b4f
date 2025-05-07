// Arquivo principal que inicializa a aplicação
import { updateFilm } from "./update-film.js";
//import { listfilms } from "./get-films.js";
//listfilms(films)
/*

============== GROUP 1 LOGIC ==========

*/

/*

============== GROUP 2 LOGIC ==========

<<<<<<< HEAD
*/ /*
edit_button.addEventListener("click",()=>{ 
    updateFilm();
})*/
const editFilmBtn = document.getElementById("editFilmBtn");

editFilmBtn.addEventListener("click", () => {
  updateFilm(editFilmBtn.value);
});
=======
*/
const modal = document.createElement('div')
modal.id = "modal"
modal.style.display = "none";
modal.style.position = "fixed";
modal.style.zIndex = "1";
modal.style.left = "0";
modal.style.top = "0";
modal.style.width = "100%";
modal.style.height = "100%";
modal.style.overflow = "auto";
modal.style.backgroundColor = "black";
modal.style.opacity = "50%";

const updateButton = document.querySelectorAll(".updateButton");

updateButton.forEach(updateButton => {
    updateButton.addEventListener("click",()=>{
        modal.style.display = "block";
        document.body.appendChild(modal)
        const value=updateButton.getAttribute("value"); 
        updateFilm(Number(value));
})
});


>>>>>>> 36deb8b2857c979a0651a03297d77bfb68d5ec10

/*



    ===========GROUP 3 LOGIC === === === =

    *
    /

/*

============== GROUP 4 LOGIC ==========

*/

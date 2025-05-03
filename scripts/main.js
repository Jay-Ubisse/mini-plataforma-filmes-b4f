
// Arquivo principal que inicializa a aplicação
import { updateFilm } from "./update-film.js";
import { addBtn } from "./create-film.js";
import { isFieldValidated } from "./create-film.js";
import { createFilm } from "./create-film.js";
// Arquivo principal que inicializa a aplicação import { listfilms } from "../scripts/get-films.js"


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
<<<<<<< HEAD
*/



const updateButton = document.querySelectorAll(".updateButton");

updateButton.forEach(updateButton => {
    const value=updateButton.getAttribute("value");
    updateButton.addEventListener("click",()=>{ 
    updateFilm(value);
})
});



/*
============== GROUP 3 LOGIC ==========
*/


import { films } from "../data/db.js";
import { listfilms } from "./get-films.js";
listfilms(films)



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

import { showDetails } from "./film-details";

let viewDetails = document.getElementById("details")
viewDetails.onclick = showDetails()


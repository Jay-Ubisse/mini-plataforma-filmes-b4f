// Importações de módulos
import { listfilms } from "./get-films.js";
import { updateFilm } from "./update-film.js";
import { addBtn, createFilm } from "./create-film.js";
import { deleteFilm, removeElement } from "../scripts/delete-film.js";
import { getFilm } from "./film-details.js";
import { films } from "../data/db.js";
// Arquivo principal que inicializa a aplicação



//============== GROUP 1 LOGIC ==========//

document.addEventListener("DOMContentLoaded", () => {
addBtn()});

const form = document.getElementById("addFilmForm");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    isFieldValidated();
    createFilm();
  })
};


//============== GROUP 2 LOGIC ==========//


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

// ========== GRUPO 3: Listagem ==========

listfilms(films);

// ========== GRUPO 4: Deleção ==========


const deletebtn=document.getElementById("deleteButton");
const value=deletebtn.getAttribute("value");
deletebtn.addEventListener("click", ()=>{
deleteFilm();
removeElement(value);
});
// ========== GRUPO 5: Detalhes ==========



const detailsButton = document.getElementById("details");
//const value=detailsButton.getAttribute('value')
const closeButton = document.getElementsByClassName("close")[0];
const detailsDiv = document.getElementById("content");



detailsButton.addEventListener("click", () => {
  detailsDiv.style.display = "block";
  getFilm(value)

});

closeButton.addEventListener("click", () => {
  detailsDiv.style.display = "none";
  

});

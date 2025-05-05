// Importações de módulos
import { listfilms } from "./get-films.js";
import { updateFilm } from "./update-film.js";
import { addBtn, isFieldValidated, createFilm } from "./create-film.js";
import { deleteFilm, removeElement } from "../scripts/delete-film.js";
import { showDetails } from "./film-details.js";
import { films } from "../data/db.js";
// Arquivo principal que inicializa a aplicação

// Aguarda o DOM carregar completamente
// ========== GRUPO 1: Lógica de criação ==========

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

listfilms();

// ========== GRUPO 4: Deleção ==========

const deleteBtn = document.getElementById("deleteButton");
if (deleteBtn) {
  const value = deleteBtn.getAttribute("value");
  deleteBtn.addEventListener("click", () => {
    deleteFilm();
    removeElement(value);
  });
}

// ========== GRUPO 5: Detalhes ==========

const viewDetails = document.getElementById("details");
if (viewDetails) {
  viewDetails.addEventListener("click", () => showDetails(value));
};

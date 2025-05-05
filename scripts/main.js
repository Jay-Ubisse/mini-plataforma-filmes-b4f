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

addBtn();
document.getElementById("addFilmForm").addEventListener("submit", (e) => {
  e.preventDefault();
  //isFieldValidated(); Verificar isso
  const response = createFilm();
  alert(response.message);
});


// ========== GRUPO 2: Atualização ==========
document.querySelectorAll(".updateButton").forEach((btn) => {
  const value = btn.getAttribute("value");
  btn.addEventListener("click", () => updateFilm(value));
})

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

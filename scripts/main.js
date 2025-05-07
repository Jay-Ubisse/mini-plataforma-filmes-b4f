
// Importações de módulos
import { listfilms } from "./get-films.js";
import { deleteFilm, removeElement } from "../scripts/delete-film.js";
import { films } from "../data/db.js";
import { updateFilm } from "./update-film.js";
import { showDetails } from "./film-details";
import { addBtn } from "./create-film.js";
//import { isFieldValidated } from "./create-film.js";
import { createFilm } from "./create-film.js";



/*

============== GROUP 1 LOGIC ==========
*/

addBtn();
document.getElementById("addFilmForm").addEventListener("submit", (e) => {
  e.preventDefault();

  //isFieldValidated(); Verificar isso
  const response = createFilm();
  alert(response.message);
});

/*
============== GROUP 2 LOGIC ==========
*/

edit_button.addEventListener("click", () => {
  updateFilm();
});

const modal = document.createElement("div");
modal.id = "modal";
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

updateButton.forEach((updateButton) => {
  updateButton.addEventListener("click", () => {
    modal.style.display = "block";
    document.body.appendChild(modal);
    const value = updateButton.getAttribute("value");
    updateFilm(Number(value));
  });
});

// ========== GRUPO 3: Listagem ==========

listfilms(films);

const deletebtn = document.getElementById("deleteButton");
const value = deletebtn.getAttribute("value");
deletebtn.addEventListener("click", () => {
  deleteFilm();
  removeElement(value);
});



// ========== GRUPO 4 ==========



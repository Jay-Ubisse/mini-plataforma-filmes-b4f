// Importações de módulos
import { listfilms } from "./get-films.js";
import { deleteFilm, removeElement } from "../scripts/delete-film.js";
import { films } from "../data/db.js";
// Arquivo principal que inicializa a aplicação

//============== GROUP 1 LOGIC ==========//

//============== GROUP 2 LOGIC ==========//

// ========== GRUPO 3: Listagem ==========

listfilms(films);

const deletebtn = document.getElementById("deleteButton");
const value = deletebtn.getAttribute("value");
deletebtn.addEventListener("click", () => {
  deleteFilm();
  removeElement(value);
});

// ========== GRUPO 4 ==========

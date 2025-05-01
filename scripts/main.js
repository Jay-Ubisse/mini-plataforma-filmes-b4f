// Arquivo principal que inicializa a aplicação

import { getFilm } from "./film-details.js";

/*

============== GROUP 1 LOGIC ==========

*/

/*

============== GROUP 2 LOGIC ==========

*/

/*

============== GROUP 3 LOGIC ==========

*/

/*

============== GROUP 4 LOGIC ==========


*/
const detailsButton = document.getElementById("details");
const value=detailsButton.getAttribute('value')
const closeButton = document.getElementsByClassName("close")[0];
const detailsDiv = document.getElementById("content");



detailsButton.addEventListener("click", () => {
  detailsDiv.style.display = "block";
  getFilm(value)

});

closeButton.addEventListener("click", () => {
  detailsDiv.style.display = "none";
  

});

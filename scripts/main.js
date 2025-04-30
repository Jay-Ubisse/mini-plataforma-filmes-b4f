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

const detailsBtn = document.getElementById("detailsButton");

detailsBtn.addEventListener("click", () => {
  const film = getFilm(detailsBtn.value);

});

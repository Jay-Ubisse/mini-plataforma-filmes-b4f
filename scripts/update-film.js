// Função para editar filme existente
import { db } from "./utils.js";

//create form and styling

export function updateFilm(idButton) {
  const value = idButton;
  const form = document.createElement("form");
  form.style.maxWidth = "500px";
  form.style.minWidth = "300px"
  form.style.width = "90%";
  form.style.backgroundColor = "#001238";
  form.style.color= "#cfd6fa";
  form.style.display = "flex";
  form.style.flexDirection = "column";
  form.style.padding = "2em";
  form.style.borderRadius = "40px";
  form.style.border = "1px solid black";
  form.style.top = "5%";
  form.style.boxShadow = "0px 10px 50px #000000";
  form.style.position = "fixed";
  form.style.left = "40%";
  form.style.zIndex = "999";
  
  form.innerHTML = `
        <span id= "closeButton">&times;</span>
        <label for="title">Título</label>
        <input type="text" id="titleInput" name="title" required><br>
        <label for="Gender">Género</label>
        <input type="text" id= "genderInput" name="gender" required><br>
        <label for="year">Ano</label>
        <input type="number" max="2025" id= "yearInput" name="year" required><br>
        <label for="rate">Avaliação</label>
        <input type="number"  min="1" max="5" id="rateInput" name="rate" required><br>
        <label for="description">Descrição</label>
        <textarea type="text"  id="descriptionInput" name="description"></textarea>
        <label for="imageUrl">Url da Imagem</label>
        <input type="url"  id="imageUrlInput" name = "imageUrl" required><br>
        <button  id="saveButton" >Salvar</button> `;

  //styling the close button
  const closeButton = form.querySelector("#closeButton");
  closeButton.style.position = "absolute";
  closeButton.style.top = "10px";
  closeButton.style.right = "25px";
  closeButton.style.fontSize = "24px";
  closeButton.style.cursor = "pointer";
  
  closeButton.addEventListener("mouseover",()=>{
    closeButton.style.fontSize = "36";
    closeButton.style.color = "red";
  })
  closeButton.addEventListener("mouseout",()=>{
    closeButton.style.fontSize = "24";
    closeButton.style.color = "#cfd6fa";
  })
  
  //show the form
  document.body.appendChild(form);
  preFillForm(value)

  //save the form
  const saveButton = form.querySelector("#saveButton");
  saveButton.style.cursor = "pointer";
  saveButton.addEventListener("mouseover",()=>{
    saveButton.style.backgroundColor='#669bbc'
  })

  saveButton.addEventListener("mouseout",()=>{
  saveButton.style.backgroundColor='#cfd6fa'
  })

  saveButton.addEventListener("click", () => {
    //saveUpdateFilm();
    alert("Filme salvo com sucesso");
    document.body.removeChild(form);
  });

  //close the form
  closeButton.addEventListener("click", () => {
  document.body.removeChild(form);
  });

  /*cancel and close the form
  const cancelButton = document.createElement("button");
  cancelButton.textContent = "Cancelar";
  cancelButton.addEventListener("click", () => {
    document.body.removeChild(form);
  });
  form.appendChild(cancelButton);*/
}

//fill the form
function preFillForm(value) {
  const films = JSON.parse(db);
  const editFilm = films.find((film) => film.id === Number(value));
   if (editFilm) {
document.getElementById("titleInput").value = editFilm.title;
document.getElementById("genderInput").value = editFilm.gender;
document.getElementById("yearInput").value = editFilm.year;
document.getElementById("rateInput").value = editFilm.rate;
document.getElementById("descriptionInput").value = editFilm.description;
document.getElementById("imageUrlInput").value = editFilm.imageUrl;

}}

 //save the update film
function saveUpdateFilm() {
     const films = JSON.parse(db);
     const film = films.find((film) => film.id === Number(value));  

    if (film) {
      film.title =document.getElementById("titleInput").value;
      film.gender = document.getElementById("genderInput").value;
      film.year = document.getElementById("yearInput").value;
      film.rate = document.getElementById("rateInput").value;
      film.description = document.getElementById("descriptionInput").value;
      film.imageUrl = document.getElementById("imageUrlInput").value;

      localStorage.setItem("films", JSON.stringify(films));
      alert("Filme salvo com sucesso!");
  }}

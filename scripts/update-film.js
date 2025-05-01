// Função para editar filme existente
import { db } from "./utils.js";
import{ isFieldValidated } from "./create-film.js";
import { films } from "../data/db.js";



//create form and styling
export function updateFilm() {
  const form = document.createElement("form");
  form.style.maxHeight = "fit-content";
  form.style.maxWidth = "50%";
  form.style.backgroundColor = "#D9D9D9";
  form.style.display = "flex";
  form.style.flexDirection = "column";
  form.style.padding = "20px";
  form.style.borderRadius = "8px";
  form.style.border = "1px solid black";
  form.style.top = "20%";
  form.style.boxShadow = "4px 4px 5px gray";
  form.style.position = "fixed";
  form.style.left = "50%";
  form.style.zIndex = "1000";
  form.innerHTML = `
        <span id= "close_button">&times;</span>
        <label for="title">Título</label>
        <input type="text" id="titleInput" name="title" required><br>
        <label for="Gender">Genero</label>
        <input type="text" id= "genderInput" name="gender" required><br>
        <label for="year">Ano</label>
        <input type="number" max="2025" id= "yearInput" name="year" required><br>
        <label for="rate">Avaliação</label>
        <input type="number"  min="1" max="5" id="rateInput" name="rate" required><br>
        <label for="description">Descrição</label>
        <textarea type="text"  id="descriptionInput" name="description"></textarea>
        <label for="imageUrl">Url da Imagem</label>
        <input type="url"  id="imageUrlInput" name = "imageUrl" required><br>
        <button  id="button" >Salvar</button> `;
  //styling the close button
  const closeButton = form.querySelector("#close_button");
  closeButton.style.position = "absolute";
  closeButton.style.top = "10px";
  closeButton.style.right = "10px";
  closeButton.style.fontSize = "24px";
  closeButton.style.cursor = "pointer";
  closeButton.style.color = "red";
  //show the form
  document.body.appendChild(form);
  preFillForm(films[0]);

  //save the form
  const saveButton = form.querySelector("#button");
  saveButton.addEventListener("click", () => {
    alert("Filme salvo com sucesso");
    saveUpdateFilm();
    document.body.removeChild(form);
  });

  //close the form
  closeButton.addEventListener("click", () => {
    document.body.removeChild(form);
  });

  //cancel and close the form
  const cancelButton = document.createElement("button");
  cancelButton.textContent = "Cancelar";
  cancelButton.addEventListener("click", () => {
    document.body.removeChild(form);
  });
  form.appendChild(cancelButton);
}

//fill the form
function preFillForm(films) {
  if(!films|| films.length===0)return;
  const film =films[0];
  document.getElementById("titleInput").value =film.titleInput;
  document.getElementById("genderInput").value=films.genderInput ;
  document.getElementById("yearInput").value=films.yearInput  ;
  document.getElementById("rateInput").value =films.rateInput ;
  document.getElementById("descriptionInput").value=films.descriptionInput  ;
  document.getElementById("imageUrlInput").value=films.imageUrlInput  ;
}

//create popup for form
const edit_button = document.getElementById("edit_button");

function saveUpdateFilm() {
  if (isFieldValidated()) {
    return "Retifica os inputs antes de salvar";
  }
      const titleInput = document.getElementById("title");
      const genderInput = document.getElementById("gender");
      const yearInput = document.getElementById("year");
      const rateInput = document.getElementById("rate");
      const descriptionInput = document.getElementById("description");
      const imageUrlInput = document.getElementById("image");
      const actualDb = JSON.parse(db);
      const data = {
      id: actualDb.length,
      title: titleInput.value,
      gender: genderInput.value,
      year: parseInt(yearInput.value),
      rate: parseFloat(rateInput.value),
      description: descriptionInput.value,
      imageUrl: imageUrlInput.value,    };
  
    updateDb.push(data);
  
    localStorage.setItem("films", JSON.stringify(updateDb));
  
    return {
      status: 201,
      message: "Filme Editado com sucesso!",
      body: actualDb,
    };
  }
  


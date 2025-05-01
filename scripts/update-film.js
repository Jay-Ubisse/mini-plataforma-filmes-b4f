// Função para editar filme existente
import { films } from "../data/db.js";

//function setAndUpdate(id) {  localStorage.setItem("id", id);  updateFilm();}
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
 <input type="text" id="title" name="title" required><br>

 <label for="Gender">Genero</label>
 <input type="text" id= "gender" name="gender" required><br>
 
 <label for="year">Ano</label>
 <input type="number" max="2025" id= "year" name="year" required><br>

 <label for="rate">Avaliação</label>
 <input type="number"  min="1" max="5" id="rate" name="rate" required><br>

 <label for="description">Descrição</label>
 <textarea type="text"  id="description" name="description"></textarea>

 <label for="imageUrl">Url da Imagem</label>
 <input type="url"  id="imageUrl" name = "imageUrl" required><br>
 <button  id="button" >Salvar</button>
 `;
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

  const id = Number(localStorage.getItem("id"));
  const film = films.find((film) => film.id === id);

  if (!film) {
    alert("Filme não encontrado com o ID: " + id);
    return;
  }

  preFillForm(film);

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
  document.getElementById("title").value = films.title;
  document.getElementById("gender").value = films.gender;
  document.getElementById("year").value = films.year;
  document.getElementById("rate").value = films.rate;
  document.getElementById("description").value = films.description;
  document.getElementById("imageUrl").value = films.imageUrl;
}
function isValidateForm() {
  let valido = true;
  const titleInput = document.getElementById("title");
  const genderInput = document.getElementById("gender").value;
  const yearInput = parseInt(document.getElementById("year").value);
  const rateInput = parseFloat(document.getElementById("rate").value);
  const imageUrlInput = document.getElementById("imageUrl").value;
  const currentYear = new Date().getFullYear();
  const titleInputEl = document.getElementById("title");

  titleInput = titleInputEl.value;

  if (titleInput.length < 3) {
    titleInput.style.borderColor = "red";
    valido = false;
  } else {
    titleInput.style.borderColor = "green";
    valido = false;
  }

  if (!isNaN(genderInput)) {
    genderInput.style.borderColor = "red";
    valido = false;
    return "O gênero não pode conter apenas números.";
  } else {
    genderInput.style.borderColor = "green";
  }

  if (yearInput < 1888 || yearInput > currentYear) {
    yearInput.style.borderColor = "red";
    valido = false;
    return "Ano inválido. Deve estar entre 1888 $(currentYear)";
  } else {
    yearInput.style.borderColor = "green";
  }

  if (rateInput < 0 || rateInput > 5) {
    rateInput.style.borderColor = "red";
    valido = false;
    return "Avaliação deve estar entre 0 e 5.";
  } else {
    rateInput.style.borderColor = "green";
  }

  if (
    !imageUrlInput.startsWith("http://") &&
    !imageUrlInput.startsWith("https://")
  ) {
    imageUrlInput.style.borderColor = "red";
    valido = false;
    return "A URL da imagem deve iniciar por http:// ou https://";
  } else {
    imageUrlInput.style.borderColor = "green";
  }
  return valido;
}

//create popup for form
const edit_button = document.getElementById("edit_button");
function saveUpdateFilm() {
  if (!isValidateForm()) {
    return "Retifica os inputs antes de salvar";
  }
  const id = Number(localStorage.getItem("id"));
  const i = films.findIndex((film) => film.id === id);
  if (!i) {
    return "filme nao Encontrado";
  }

  films[i] = {
    id,
    title: document.getElementById("title").value,
    gender: document.getElementById("gender").value,
    year: document.getElementById("year").value,
    rate: document.getElementById("rate").value,
    description: document.getElementById("description").value,
    imageUrl: document.getElementById("imageUrl").value,
  };
  localStorage.setItem("films", JSON.stringify(films));
  alert("O filme foi editado com sucesso.");
  location.reload();
}

// Função para editar filme existente
import {
  db
} from "./utils.js";


import { db } from "./utils.js";

//create form and styling

export function updateFilm(idButton) {
  const value = idButton;
  const modal = document.getElementById("modal");
  const form = document.createElement("form");
  form.id = "form";
  form.style.maxWidth = "500px";
  form.style.minWidth = "300px";
  form.style.width = "90%";
  form.style.backgroundColor = "#001238";
  form.style.color = "#cfd6fa";
  form.style.display = "flex";
  form.style.flexDirection = "column";
  form.style.padding = "2em";
  form.style.borderRadius = "40px";
  form.style.border = "1px solid black";
  form.style.top = "5%";
  form.style.boxShadow = "0px 10px 50px #000000";
  form.style.position = "fixed";
  form.style.left = "40%";
  form.style.zIndex = "99";

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

  closeButton.addEventListener("mouseover", () => {
    closeButton.style.fontSize = "36";
    closeButton.style.color = "red";
  });
  closeButton.addEventListener("mouseout", () => {
    closeButton.style.fontSize = "24";
    closeButton.style.color = "#cfd6fa";
  });

  //show the form
  document.body.appendChild(form);
  preFillForm(value);

  //save the form
  const saveButton = form.querySelector("#saveButton");
  saveButton.style.width = "fit-content";
  saveButton.style.padding = "6px 12px";
  saveButton.style.cursor = "pointer";
  saveButton.addEventListener("mouseover", () => {
    saveButton.style.backgroundColor = "#669bbc";
  });

  saveButton.addEventListener("mouseout", () => {
    saveButton.style.backgroundColor = "#cfd6fa";
  });

  saveButton.addEventListener("click", () => {
    const validate = InputsValidation(form);

    if (validate.valid) {
      saveUpdateFilm(value);
      document.body.removeChild(form);
    } else {
      alert("Erro, tente novamente ");
    }

    modal.style.display = "none";
  });

  //close the form
  closeButton.addEventListener("click", () => {
    modal.style.display = "none";
    document.body.removeChild(form);
  });
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
  }
}





function setAndUpdate(id) {
    localStorage.setItem("id", id); 
    updateFilm();
}
//create form and styling
export function updateFilm(idButton) {
  const value = idButton;
  const modal = document.getElementById("modal")
  const form = document.createElement("form");
  form.id = "form"
  form.style.maxWidth = "500px";
  form.style.minWidth = "300px"
  form.style.width = "90%";
  form.style.backgroundColor = "#001238";
  form.style.color = "#cfd6fa";
  form.style.display = "flex";
  form.style.flexDirection = "column";
  form.style.padding = "2em";
  form.style.borderRadius = "40px";
  form.style.border = "1px solid black";
  form.style.top = "5%";
  form.style.boxShadow = "0px 10px 50px #000000";
  form.style.position = "fixed";
  form.style.left = "40%";
  form.style.zIndex = "99";
  form.innerHTML = `
        <span id= "close_button">&times;</span>
        <label for="title">Título</label>
        <input type="text" id="title" name="title" required><br>

        <label for="Gender">Genero</label>
        <input type="text" id= "gender" name="gender" required><br>
        
        <label for="year">Ano</label>
        <input type="number" id= "year" name="year" required><br>

        <label for="rate">Avaliação</label>
        <input type="number"  id="rate" name="rate" required><br>

        <label for="description">Descrição</label>
        <textarea type="text"  id="description" name="description"></textarea>

        <label for="imageUrl">Url da Imagem</label>

        <input type="url"  id="imageUrlInput" name = "imageUrl" required><br>
        <button  id="saveButton" >Salvar</button> 
      `;

  //styling the close button
  const closeButton = form.querySelector("#closeButton");
  closeButton.style.position = "relative";
  closeButton.style.top = "10px";
  closeButton.style.right = "25px";
  closeButton.style.fontSize = "24px";
  closeButton.style.cursor = "pointer";

  closeButton.addEventListener("mouseover", () => {
    closeButton.style.fontSize = "36";
    closeButton.style.color = "red";
  })
  closeButton.addEventListener("mouseout", () => {
    closeButton.style.fontSize = "24";
    closeButton.style.color = "#cfd6fa";
  })

  //show the form
  document.body.appendChild(form);
  preFillForm(value)

  //save the form
  const saveButton = form.querySelector("#saveButton");
  saveButton.style.width = "fit-content";
  saveButton.style.padding = "6px 12px";
  saveButton.style.cursor = "pointer";
  saveButton.addEventListener("mouseover", () => {
    saveButton.style.backgroundColor = '#669bbc'
  })

  saveButton.addEventListener("mouseout", () => {
    saveButton.style.backgroundColor = '#cfd6fa'
  })

  saveButton.addEventListener("click", () => {

    const validate = InputsValidation(form);

    if (validate.valid){
      saveUpdateFilm(value);
      document.body.removeChild(form);
    }
    else { 
      alert ("Erro, tente novamente ");
    } 

    modal.style.display = "none";
  })

  //close the form
  closeButton.addEventListener("click", () => {
    modal.style.display = "none";
    document.body.removeChild(form);
  });

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

  }
}


  //  Validate the form
function InputsValidation() {
    
  const titleInput = document.getElementById("titleInput");
  const genderInput = document.getElementById("genderInput");
  const yearInput =  document.getElementById("yearInput");
  const rateInput = document.getElementById("rateInput");
  const descriptionInput = document.getElementById("descriptionInput");
  const imageUrlInput = document.getElementById("imageUrlInput");

  let valid = true;

  // Title Validation
  if (titleInput.value.trim() === "") {
      titleInput.style.borderColor = "red";
      alert("O título é obrigatório");
      valid = false;
  } else {
      titleInput.style.borderColor = "green";
  }

  // Gender Validation
  if (genderInput.value.trim() === "") {
      genderInput.style.borderColor = "red";
      alert("O gênero é obrigatório");
      valid = false;
  } else {
      genderInput.style.borderColor = "green";
  }

  // Year Validation
  const Actualyear = new Date().getFullYear();
  if (yearInput.value < 1888 || yearInput.value > Actualyear ) { 
      yearInput.style.borderColor = "red";
      alert(`O ano deve estar entre 1888 e ${Actualyear}`);
      valid = false;
  } else {
      yearInput.style.borderColor = "green";
  }

  // Rate validation 
  if (rateInput.value < 0 || rateInput.value > 5|| rateInput.value.trim() === "") {
      rateInput.style.borderColor = "red";
      alert("A avaliação deve estar entre 0 e 5");
      valid = false;
  } else {    
      rateInput.style.borderColor = "green";
  }

  // URL validation
  if (!imageUrlInput.value.startsWith("http://") && !imageUrlInput.value.startsWith("https://")) {
      imageUrlInput.style.borderColor = "red";
      alert("A url da imagem deve começar com http:// ou https://");
      valid = false;
  } else {
      imageUrlInput.style.borderColor = "green";
  }

  // Description validation 
  if (descriptionInput.value.length > 500||descriptionInput.value.trim() === "") {
      descriptionInput.style.borderColor = "red";
      alert("A descrição não pode ter mais de 500 caracteres");
      valid = false;
  } else {
      descriptionInput.style.borderColor = "green";
  }

  return {
      valid: valid,
      
  };
}


//save the update film
function saveUpdateFilm(value) {
  const films = JSON.parse(db);
  const film = films.find((film) => film.id === Number(value));


  if (film) {
    film.title = document.getElementById("titleInput").value;
    film.gender = document.getElementById("genderInput").value;
    film.year = document.getElementById("yearInput").value;
    film.rate = document.getElementById("rateInput").value;
    film.description = document.getElementById("descriptionInput").value;
    film.imageUrl = document.getElementById("imageUrlInput").value;

    localStorage.setItem("films", JSON.stringify(films));
    alert("Filme salvo com sucesso!");
  }
=======

//  Validate the form
function InputsValidation() {
  const titleInput = document.getElementById("titleInput");
  const genderInput = document.getElementById("genderInput");
  const yearInput = document.getElementById("yearInput");
  const rateInput = document.getElementById("rateInput");
  const descriptionInput = document.getElementById("descriptionInput");
  const imageUrlInput = document.getElementById("imageUrlInput");

  let valid = true;

  // Title Validation
  if (titleInput.value.trim() === "") {
    titleInput.style.borderColor = "red";
    alert("O título é obrigatório");
    valid = false;
  } else {
    titleInput.style.borderColor = "green";
  }

  // Gender Validation
  if (genderInput.value.trim() === "") {
    genderInput.style.borderColor = "red";
    alert("O gênero é obrigatório");
    valid = false;
  } else {
    genderInput.style.borderColor = "green";
  }

  // Year Validation
  const Actualyear = new Date().getFullYear();
  if (yearInput.value < 1888 || yearInput.value > Actualyear) {
    yearInput.style.borderColor = "red";
    alert(`O ano deve estar entre 1888 e ${Actualyear}`);
    valid = false;
  } else {
    yearInput.style.borderColor = "green";
  }

  // Rate validation
  if (
    rateInput.value < 0 ||
    rateInput.value > 5 ||
    rateInput.value.trim() === ""
  ) {
    rateInput.style.borderColor = "red";
    alert("A avaliação deve estar entre 0 e 5");
    valid = false;
  } else {
    rateInput.style.borderColor = "green";
  }

  // URL validation
  if (
    !imageUrlInput.value.startsWith("http://") &&
    !imageUrlInput.value.startsWith("https://")
  ) {
    imageUrlInput.style.borderColor = "red";
    alert("A url da imagem deve começar com http:// ou https://");
    valid = false;
  } else {
    imageUrlInput.style.borderColor = "green";
  }

  // Description validation
  if (
    descriptionInput.value.length > 500 ||
    descriptionInput.value.trim() === ""
  ) {
    descriptionInput.style.borderColor = "red";
    alert("A descrição não pode ter mais de 500 caracteres");
    valid = false;
  } else {
    descriptionInput.style.borderColor = "green";
  }

  return {
    valid: valid,
  };

}

//save the update film
function saveUpdateFilm(value) {
  const films = JSON.parse(db);
  const film = films.find((film) => film.id === Number(value));

  if (film) {
    film.title = document.getElementById("titleInput").value;
    film.gender = document.getElementById("genderInput").value;
    film.year = document.getElementById("yearInput").value;
    film.rate = document.getElementById("rateInput").value;
    film.description = document.getElementById("descriptionInput").value;
    film.imageUrl = document.getElementById("imageUrlInput").value;

    localStorage.setItem("films", JSON.stringify(films));
    console.log(films);
    alert("Dados do filme actualizados com sucesso!");
  }
}



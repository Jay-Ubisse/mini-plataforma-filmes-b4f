// Função para cadastrar novo filme
import { films } from "../data/db.js";
export function newFilm() {
  return;
}
export function addBtn() {
  const addNewFilm_popup = document.getElementById("add_newFilm_popup");
  const addNewFilmBtn = document.getElementById("add_newFilm_btn");
  const closePopupBtn = document.getElementById("close_popup_btn");

  addNewFilmBtn.addEventListener("click", () => {
    addNewFilm_popup.style.display = "block";
  });
  closePopupBtn.addEventListener("click", () => {
    addNewFilm_popup.style = "none";
  });
  window.addEventListener("click", (event) => {
    if (event.target === addNewFilm_popup) {
      addNewFilm_popup.style.display = "none";
    }
  });

  return;
}

function addFilmForm() {
  return;
}

function isFieldValidated() {
  return;
}

function saveInDb() {
  document.addEventListener("DOMContentLoaded", () => {
    const titleInput = document.getElementById("title");
    const genderInput = document.getElementById("gender");
    const yearInput = document.getElementById("year");
    const rateInput = document.getElementById("rate");
    const descriptionInput = document.getElementById("description");
    const imageUrlInput = document.getElementById("image");
    const createFilmBtn = document.getElementById("createFilmBtn");
    const app = document.createElement("section");
    app.id = "app";
    document.body.appendChild(app);

    renderFilms();

    createFilmBtn.addEventListener("click", (e) => {
      e.preventDefault();

      const db = JSON.parse(localStorage.getItem("films"));
      const id = db.length + 1;

      const newFilm = {
        id,
        title: titleInput.value,
        gender: genderInput.value,
        year: parseInt(yearInput.value),
        rate: parseFloat(rateInput.value),
        description: descriptionInput.value,
        imageUrl: imageUrlInput.value,
      };

      db.push(newFilm);
      localStorage.setItem("films", JSON.stringify(db));

      alert("Filme criado com sucesso!");
      renderFilms();

      titleInput.value = "";
      genderInput.value = "";
      yearInput.value = "";
      rateInput.value = "";
      descriptionInput.value = "";
      imageUrlInput.value = "";
    });

    function renderFilms() {
      const db = JSON.parse(localStorage.getItem("films"));
      app.innerHTML = "";

      db.forEach((film) => {
        const filmCard = document.createElement("div");
        filmCard.style.border = "1px solid black";
        filmCard.style.margin = "10px";
        filmCard.style.padding = "10px";

        filmCard.innerHTML = `
                <h3>${film.title}</h3>
                <img src="${film.imageUrl}" width="100" />
                <p><strong>Género:</strong> ${film.gender}</p>
                <p><strong>Ano:</strong> ${film.year}</p>
                <p><strong>Nota:</strong> ${film.rate}</p>
                <p>${film.description}</p>
              `;

        app.appendChild(filmCard);
      });
    }
  });
}

console.log(saveInDb());

/*-------------------------------------------------------------*/
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById("addFilmForm");


  document.getElementById("title").addEventListener("input", validateTitle);
  document.getElementById("gender").addEventListener("input", validateGender);
  document.getElementById("rate").addEventListener("input", validateRate);
  document.getElementById("year").addEventListener("input", validateYear);
  document.getElementById("image").addEventListener("input", validateImage);
  document.getElementById("description").addEventListener("input", validateDescription);
});

function validateTitle() {
  const titleInput = document.getElementById("title");
  const errorSpan = document.getElementsByClassName("span-required")[0];
  
  if (titleInput.value.trim().length < 3) {
    errorSpan.style.display = "block";
    titleInput.style.border = "2px solid red";
  } else {
    errorSpan.style.display = "none";
    titleInput.style.border = "2px solid blue";
  }
}

function validateGender() {
  const genderInput = document.getElementById("gender");
  const errorSpan1 = document.getElementsByClassName("span-required")[1];
  if (genderInput.value.trim() === "") {
    errorSpan1.style.display="block";
    genderInput.style.border = "2px solid red";
  } else {
    errorSpan1.style.display = "none";
    genderInput.style.border = "2px solid blue";
  }
}

function validateRate() {
  const rateInput = document.getElementById("rate");
  const errorSpan = document.getElementsByClassName("span-required")[2];
  if (rateInput.value < 1 || rateInput.value > 5) {
    errorSpan.style.display = "block";
    rateInput.style.border = "2px solid red";
  } else {
    errorSpan.style.display = "none";
    rateInput.style.border = "2px solid blue";
  }
}

function validateYear() {
  const yearInput = document.getElementById("year");
  const errorSpan = document.getElementsByClassName("span-required")[3];
  if (yearInput.value.trim() === "" || isNaN(yearInput.value)) {
    errorSpan.style.display = "block";
    yearInput.style.border = "2px solid red";
  } else {
    errorSpan.style.display = "none";
    yearInput.style.border = "2px solid blue";
  }
}

function validateImage() {
  const imageInput = document.getElementById("image");
  const errorSpan = document.getElementsByClassName("span-required")[4];
  if (imageInput.value.trim() === "") {
    errorSpan.style.display = "block";
    imageInput.style.border = "2px solid red";
  } else {
    errorSpan.style.display = "none";
    imageInput.style.border = "2px solid blue";
  }
}

function validateDescription() {
  const descriptionInput = document.getElementById("description");
  const errorSpan = document.getElementsByClassName("span-required")[5];
  if (descriptionInput.value.trim() === "") {
    errorSpan.style.display = "block";
    descriptionInput.style.border = "2px solid red";
  } else {
    errorSpan.style.display = "none";
    descriptionInput.style.border = "2px solid blue";
  }
}




// Função para não enviar antes da validação
/*form.addEventListener("submit", (event) => {
   event.preventDefault(); 

   const isValid = btnManipulation(InputNameEvent, InputYearEvent);
   if (isValid) {
      form.submit();
    }
  });
 // Função de validação dos campos

 function btnManipulation(nameInput, yearInput) {
   let validacaoOk = true;
   let erro = '';
 
   if (nameInput.value === "") {
     erro = 'O nome do filme é obrigatório';
     nameInput.classList.add('is-invalid');
     validacaoOk = false;
   } else {
     nameInput.classList.remove('is-invalid');
   }
 
   if (yearInput.value === "") {
     if (erro.length > 0) {
       erro += ', ';
     }
     erro += 'O ano do filme é obrigatório';
     yearInput.classList.add('is-invalid');
     validacaoOk = false;
   } else {
     yearInput.classList.remove('is-invalid');
   }
 
 // Exibir erro com estilo 
 const errorDisplay = document.getElementById('errorDisplay');
 if (errorDisplay) {
   if (!validacaoOk) {
     errorDisplay.innerText = erro;
     errorDisplay.style.display = 'block';
     errorDisplay.style.color = 'black';
     errorDisplay.style.backgroundColor = 'red';
     errorDisplay.style.border = '1px solid #f5c6cb';
     errorDisplay.style.padding = '10px';
     errorDisplay.style.marginTop = '10px';
     errorDisplay.style.borderRadius = '5px';
   } else {
     errorDisplay.style.display = 'none';
   }
 } else if (!validacaoOk) {
   alert(erro); 
 }

 return validacaoOk;
}*/

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
    addNewFilm_popup.style.display = "flex";
  });
  closePopupBtn.addEventListener("click", () => {
    confirm("tem a certeza de que deseja sair?");
    addNewFilm_popup.style.display = "none";
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

export function isFieldValidated() {
  document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("addFilmForm");

    document.getElementById("title").addEventListener("input", validateTitle);
    document.getElementById("gender").addEventListener("input", validateGender);
    document.getElementById("rate").addEventListener("input", validateRate);
    document.getElementById("year").addEventListener("input", validateYear);
    document.getElementById("image").addEventListener("input", validateImage);
    document
      .getElementById("description")
      .addEventListener("input", validateDescription);
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
      errorSpan1.style.display = "block";
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
}

export function saveInDb() {
  document.addEventListener("DOMContentLoaded", () => {
    const titleInput = document.getElementById("title");
    const genderInput = document.getElementById("gender");
    const yearInput = document.getElementById("year");
    const rateInput = document.getElementById("rate");
    const descriptionInput = document.getElementById("description");
    const imageUrlInput = document.getElementById("image");
    const createFilmBtn = document.getElementById("createFilmBtn");
    const app = document.getElementById("app");

    localStorage.setItem("films", JSON.stringify(films));
    let db = localStorage.getItem("films");
    let jsonDB = JSON.parse(db);
    renderFilms(jsonDB);

    window.addEventListener("load", () => {
      let db = localStorage.getItem("films");
      let jsonDB = JSON.parse(db);
      renderFilms(jsonDB);
    });

    createFilmBtn.addEventListener("click", (e) => {
      e.preventDefault();
      db = localStorage.getItem("films");
      jsonDB = JSON.parse(db);

      const id = jsonDB.length + 1;

      const newFilm = {
        id,
        title: titleInput.value,
        gender: genderInput.value,
        year: parseInt(yearInput.value),
        rate: parseFloat(rateInput.value),
        description: descriptionInput.value,
        imageUrl: imageUrlInput.value,
      };

      jsonDB.push(newFilm);
      localStorage.setItem("films", JSON.stringify(jsonDB));
      alert("Filme criado com sucesso!");
      renderFilms(jsonDB);

      titleInput.value = "";
      genderInput.value = "";
      yearInput.value = "";
      rateInput.value = "";
      descriptionInput.value = "";
      imageUrlInput.value = "";
    });

    function renderFilms() {
      const db = jsonDB.parse(localStorage.getItem("films"));
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

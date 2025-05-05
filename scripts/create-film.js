// Função para cadastrar novo filme

import { db } from "./utils.js";

import { db } from "./utils.js";


export function addBtn() {
  const addNewFilmModal = document.getElementById("addNewFilmModal");
  const addNewFilmBtn = document.getElementById("addNewFilmBtn");
  const closeModalBtn = document.getElementById("closeModalBtn");

  addNewFilmBtn.addEventListener("click", () => {
    addNewFilmModal.style.display = "flex";
  });

  closeModalBtn.addEventListener("click", () => {
    addNewFilmModal.style.display = "none";
  });


  closeModalBtn.addEventListener("click", () => {
    addNewFilmModal.style.display = "none";
  });


  window.addEventListener("click", (event) => {
    if (event.target === addNewFilmModal) {
      addNewFilmModal.style.display = "none";
    }
  });

  return;
}

/*
export function isFieldValidated() {
  document.addEventListener("click", () => {
    const form = document.getElementById("addFilmForm");

    form.querySelector("title").addEventListener("input", validateTitle);
    form.querySelector("gender").addEventListener("input", validateGender);
    form.querySelector("rate").addEventListener("input", validateRate);
    form.querySelector("year").addEventListener("input", validateYear);
    form.querySelector("image").addEventListener("input", validateImage);
    form
      .getElementById("description")
      .addEventListener("input", validateDescription);
  });


  /*function validateTitle() {
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
}*/


export function createFilm() {
  const titleInput = document.getElementById("title");
  const genderInput = document.getElementById("gender");
  const yearInput = document.getElementById("year");
  const rateInput = document.getElementById("rate");
  const descriptionInput = document.getElementById("description");
  const imageUrlInput = document.getElementById("image");



  /*const data = {
    id: 3,
    let actualDb = JSON.parse(db)
  }*/

  const actualDb = JSON.parse(db);


  const data = {
    id: actualDb.length + 1,
    title: titleInput.value,
    gender: genderInput.value,
    year: parseInt(yearInput.value),
    rate: parseFloat(rateInput.value),
    description: descriptionInput.value,
    imageUrl: imageUrlInput.value,
  };



  console.log(data);

  actualDb.push(data);

  localStorage.setItem("films", JSON.stringify(actualDb));


    return {
      status: 201,
      message: "Filme cadastrado com sucesso!",
      body: actualDb,
    };
  
}

const button=document.getElementById("register")
const titleInput=document.getElementById("title")
const errorSpan = document.getElementsByClassName("span-required")[0];
const genderInput = document.getElementById("gender");
const errorSpan1 = document.getElementsByClassName("span-required")[1];
const rateInput = document.getElementById("rate");
const errorSpan2 = document.getElementsByClassName("span-required")[2];
const yearInput = document.getElementById("year");
const errorSpan3 = document.getElementsByClassName("span-required")[3];
const imageInput = document.getElementById("image");
const errorSpan4 = document.getElementsByClassName("span-required")[4];
const descriptionInput = document.getElementById("description");
const errorSpan5 = document.getElementsByClassName("span-required")[5];
button.addEventListener("click",()=>{
if (titleInput.value.trim().length < 3) {
      errorSpan.style.display = "block";
      titleInput.style.border = "2px solid red";
    } else {
      errorSpan.style.display = "none";
      titleInput.style.border = "2px solid blue";
    }
    if (genderInput.value.trim() === "") {
      errorSpan1.style.display = "block";
      genderInput.style.border = "2px solid red";
    } else {
      errorSpan1.style.display = "none";
      genderInput.style.border = "2px solid blue";
    }
    if (rateInput.value < 1 || rateInput.value > 5) {
      errorSpan2.style.display = "block";
      rateInput.style.border = "2px solid red";
    } else {
      errorSpan2.style.display = "none";
      rateInput.style.border = "2px solid blue";
    }
    if (yearInput.value.trim() === "" || isNaN(yearInput.value)) {
      errorSpan3.style.display = "block";
      yearInput.style.border = "2px solid red";
    } else {
      errorSpan3.style.display = "none";
      yearInput.style.border = "2px solid blue";
    }
    if (imageInput.value.trim() === "") {
      errorSpan4.style.display = "block";
      imageInput.style.border = "2px solid red";
    } else {
      errorSpan4.style.display = "none";
      imageInput.style.border = "2px solid blue";
    } 
    if (descriptionInput.value.trim() === "") {
      errorSpan5.style.display = "block";
      descriptionInput.style.border = "2px solid red";
    } else {
      errorSpan5.style.display = "none";
      descriptionInput.style.border = "2px solid blue";
    }
})


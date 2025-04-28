// Função para listar todos os filmes

import { films } from "../data/db.js";

localStorage.setItem("films", JSON.stringify(films));

export function listfilms() {
  window.addEventListener("load", () => {
    let db = localStorage.getItem("films");
    let jsonDB = JSON.parse(db);
    listFilms(jsonDB);
  });
}

const conteiner = document.getElementById("conteiner");

function listFilms(films) {
  films.forEach((film) => {
    const card = document.createElement("div");
    card.classList.add("app");

    let img = document.createElement("img");
    img.src = film.imageUrl;
    img.alt = film.title;

    let h2 = document.createElement("h2");
    h2.textContent = film.title;

    let p = document.createElement("p");
    p.textContent = film.description;

    const detailsBtn = document.createElement("button");
    detailsBtn.classList.add("btn");
    detailsBtn.textContent = "Details";
    detailsBtn.addEventListener("click", () => {});

    const editBtn = document.createElement("button");
    editBtn.classList.add("btn1");
    editBtn.textContent = "Edit";
    editBtn.addEventListener("click", () => {});

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("btn2");
    deleteBtn.textContent = "Details";
    deleteBtn.addEventListener("click", () => {
      card.remove();
    });

    card.appendChild(img);
    card.appendChild(h2);
    card.appendChild(p);
    card.appendChild(detailsBtn);
    card.appendChild(editBtn);
    card.appendChild(deleteBtn);
    conteiner.appendChild(card);
  });
  return listFilms(films);
}

console.log(listFilms(films));
console.log("Elment conteiner", conteiner);
console.log("Date of films", films);

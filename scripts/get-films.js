// Função para listar todos os filmes

import {films} from "../data/db.js";

export function listfilms() {
  window.addEventListener("load", () => {
    listFilms(films)
  });
}

const container = document.getElementById("container");

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
    
    const detailsButton= document.createElement("button");
    detailsButton.classList.add("btn");
    detailsButton.textContent = "Details";


    const editBtn = document.createElement("button");
    editBtn.classList.add("btn1");
    editBtn.textContent = "Edit";


    const deleteButton = document.createElement("button");
    deleteButton.classList.add("btn2");
    deleteButton.textContent = "Delete";
    

    card.appendChild(img);
    card.appendChild(h2);
    card.appendChild(p);
    card.appendChild(detailsButton);
    card.appendChild(editBtn);
    card.appendChild(deleteButton);
    container.appendChild(card);    
  });

};


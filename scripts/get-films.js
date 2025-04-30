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
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", () => {
      
    }); 

    card.appendChild(img);
    card.appendChild(h2);
    card.appendChild(p);
    card.appendChild(detailsBtn);
    card.appendChild(editBtn);
    card.appendChild(deleteBtn);
    container.appendChild(card);    
  });

}

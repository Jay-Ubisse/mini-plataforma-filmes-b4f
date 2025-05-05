// Função para listar todos os filmes

import {films} from "../data/db.js";
import { deleteFilm } from "./delete-film.js";
import { showDetails } from "./film-details.js";
import { updateFilm } from "./update-film.js";



export function listfilms() {
  window.addEventListener("load", () => {
    const container = document.getElementById("container");
    listFilms(films)
  });
}


function listFilms(films) {
  films.forEach((film) => {
    const card = document.createElement("div");
    card.className = "app";

    let img = document.createElement("img");
    img.src = film.imageUrl;
    img.alt = film.title;

    let h2 = document.createElement("h2");
    h2.textContent = film.title;

    let p = document.createElement("p");
    p.textContent = film.description;
    
    const detailsBtn = document.createElement("button");
    detailsBtn.className = "btn";
    detailsBtn.textContent = "Details";
    detailsBtn.addEventListener("click", () => {
      showDetails()
    });

    const editBtn = document.createElement("button");
    editBtn.className = "btn1";
    editBtn.textContent = "Edit";
    editBtn.addEventListener("click", () => {
      updateFilm()
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "btn2";
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", () => {
      deleteFilm ()
    }); 

    card.appendChild(img);
    card.appendChild(h2);
    card.appendChild(p);
    card.appendChild(detailsBtn);
    card.appendChild(editBtn);
    card.appendChild(deleteBtn);
    container.appendChild(card);    
  });

};
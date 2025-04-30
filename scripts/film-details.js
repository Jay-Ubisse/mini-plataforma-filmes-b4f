import { films } from "../data/db.js";

const detailsDiv = document.getElementById("content");

const detailsButton = document.getElementById("details");


const closeButton = document.getElementsByClassName("close")[0];

detailsButton.onclick = function showDetails() {
  detailsDiv.style.display = "block";
  datailsFilms(value);
  closeButton();
};
closeButton.onclick = function () {
  detailsDiv.style.display = "none";
};

let title = document.getElementById("title");
let image = document.getElementById("image");
let gender = document.getElementById("gender");
let year = document.getElementById("year");
let rate = document.getElementById("rate");
let description = document.getElementById("description");




export function getFilm(value) {
  const film = films.find((film) => film.id === Number(value));

  if (!film) return "Filme não encontrado!";

  return function(){
    detailsDiv.appendChild(image).textContent(film.imageUrl)
    detailsDiv.appendChild(title).textContent(film.title)
    detailsDiv.appendChild(gender).textContent(film.gender)
    detailsDiv.appendChild(year).textContent(film.year)
    detailsDiv.appendChild(rate).textContent(film.rate)
    detailsDiv.appendChild(description).textContent(film.description)
  }

}



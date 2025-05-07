import { films } from "../data/db.js";

const detailsDiv = document.getElementById("content");

let title = document.getElementById("title");
let picture = document.getElementById("picture");
let gender = document.getElementById("gender");
let year = document.getElementById("year");
let rate = document.getElementById("rate");
let description = document.getElementById("description");
const message=document.createElement("h3")
message.textContent="Filme não encontrado!"
export function getFilm(value) {
  const film = films.find((film) => film.id === Number(value));

  if (!film)  return detailsDiv.appendChild(message);

 return ` ${title.innerHTML=film.title}
          ${picture.src=("src",film.imageUrl)} 
          ${gender.innerHTML=film.gender} 
          ${year.innerHTML=film.year} 
          ${rate.innerHTML=film.rate}+
          ${description.innerHTML=film.description}`



}


import { films } from "../data/db.js";

const detailsDiv = document.getElementById("content");






let title = document.getElementById("title");
let image = document.getElementById("image");
let gender = document.getElementById("gender");
let year = document.getElementById("year");
let rate = document.getElementById("rate");
let description = document.getElementById("description");




export function getFilm(value) {
  const film = films.find((film) => film.id === Number(value));

  if (!film)  return "Filme não encontrado!";

 return ` ${title.innerHTML=film.title}+${image.src=("src",film.imageUrl)} Genero: ${gender.innerHTML=film.gender}Ano de criação: ${year.innerHTML=film.year} Avaliação: ${rate.innerHTML=film.rate}+
 ${description.innerHTML=film.description}`



}




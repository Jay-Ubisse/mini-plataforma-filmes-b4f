import { films } from "../data/db";

const detailsDiv = document.getElementById("content");


const detailsButton = document.getElementById("detailsButton");


const closeButton = document.getElementsByClassName("close")[0];


detailsButton.onclick = function() {
  detailsDiv.style.display = "block";
}


closeButton.onclick = function() {
  detailsDiv.style.display = "none";
}


let title=document.getElementById("title")
let gender=document.getElementById("gender")
let year=document.getElementById("year")
let rate=document.getElementById("rate")
let description=document.getElementById("description")

localStorage.setItem("films", JSON.stringify(films));
let jsonDB = JSON.parse(db);

function renderFilms(jsonDB) {
  detailsDiv.innerHTML = "";
  jsonDB.map((film) => {
    title.textContent = film.title;
    gender.textContent = film.gender;
    year.textContent = film.year;
    rate.textContent = film.rate;
    description.textContent = film.description;
    detailsDiv.appendChild(title);
    detailsDiv.appendChild(gender);
    detailsDiv.appendChild(year);
    detailsDiv.appendChild(rate);
    detailsDiv.appendChild(description);


  });
}

let value=detailsButton.getAttribute("value")
function datailsFilms(value){
 for(let i=0;i<length;i++){
  if(value===films[0].id){
    renderFilms(jsonDB)
  }
 }

  
}


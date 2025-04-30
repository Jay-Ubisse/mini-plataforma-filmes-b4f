//import { films } from "../data/db"


const detailsDiv = document.getElementById("content");


const detailsButton = document.getElementById("details");


const closeButton = document.getElementsByClassName("close")[0];





   detailsButton.onclick = function showDetails() {
   detailsDiv.style.display = "block";
   datailsFilms(value)
   closeButton()
  
}
  closeButton.onclick = function() {
  detailsDiv.style.display = "none";
}



let title=document.getElementById("title")
let image=document.getElementById("image")
let gender=document.getElementById("gender")
let year=document.getElementById("year")
let rate=document.getElementById("rate")
let description=document.getElementById("description")



let db = localStorage.getItem("films");
let jsonDB = JSON.parse(db);



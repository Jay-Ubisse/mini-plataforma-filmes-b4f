// Função para eliminar filme
import { films } from "../data/db.js";
const deleteButton = document.createElement("button");

deleteButton.textContent= "Delete";
deleteButton.style.backgroundColor="red";
deleteButton.style.border="1px solid black";
deleteButton.style.borderRadius="2px";
 deleteButton.addEventListener("click",()=>{
   for(let i=0;i<films.length;i++){
    alert(`Tem certeza que deseja Eliminar ${films[i].title}`);}
    function deleteFilm(id) {
 
      
    }
 });

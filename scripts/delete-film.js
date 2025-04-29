//Função para eliminar filme
import { films } from "../data/db.js";
import { listFilms } from "../scripts/get-films.js";

export function deleteFilm(){
//criacao e estilizacao do modal
const modal= document.getElementById("modal");
modal.style.width="300px";
modal.style.height="100px";
modal.style.padding="20px";
modal.style.margin="20px";
modal.style.border="1px solid black";
modal.style.boxShadow="10px 10px 10px 10px gray";
modal.style.display="none";
modal.style.position="relative";
modal.style.borderRadius="10px";
modal.style.backgroundImage="url(../styles/bluegradiente.jpg)";
modal.style.color="#6769e6";

//evento que sera disparado ao clicar o botao de deletar
delete_button.addEventListener("click", ()=>{
    modal.style.display="block";
const content=document.getElementById("modal-content");

});
 


 //estilizacao do botao nao
const noButton = document.getElementById("nobutton");
noButton.style.color="red";
noButton.addEventListener("click", ()=> {
    modal.style.display = "none";
});


//estilizacao do botao sim
const yesButton = document.getElementById("yesbutton");
yesButton.style.color = "green";
yesButton.addEventListener("click",(removeFilm)=>{
    alert("Filme eliminado com sucesso");
    modal.style.display = "none";
    
});
}


export function removeFilm(id){
    for(let i=0;i<films;i++){
        films[i].addEventListener('click', false)
       films.splice(i, 1);
    
}}
// Função para eliminar filme
/* import { films } from "../data/db.js";*/
const modal= document.getElementById("modal");
modal.style.width="300px";
modal.style.height="100px";
modal.style.padding="20px";
modal.style.border="1px solid black";
modal.style.boxShadow="10px 10px 10px 10px gray";
modal.style.display="none";
modal.style.position="fixed";

//obtencao e estilizacao do botao para deletar
const deleteButton = document.getElementById("delete-btn");
deleteButton.textContent= "Delete";
deleteButton.style.backgroundColor="red";
deleteButton.style.color="white";
deleteButton.style.border="1px solid black";
deleteButton.style.borderRadius="10px";


//evento que sera disparado ao clicar o botao de deletar
deleteButton.addEventListener("click", ()=>{
    modal.style.display="block";
const content=document.getElementById("modal-content");

});
 


 //estilizacao do botao nao
const noButton = document.getElementById("nobutton");
noButton.style.color="red";
noButton.addEventListener("click", ()=> {
    noButton.style.display = "none";
});


//estilizacao do botao sim
const yesButton = document.getElementById("yesbutton");
yesButton.textContent = "yes";
yesButton.style.color = "green";
yesButton.addEventListener("click",()=>{
    alert("Filme eliminado com sucesso");
    yesButton.style.display = "none";
    
})
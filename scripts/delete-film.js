// Função para eliminar filme
/* import { films } from "../data/db.js";
import { listfilms } from "../scripts/get-films.js";*/
const modal= document.getElementById("modal");
modal.style.width="200px";
modal.style.height="10px";
modal.style.padding="50px";
modal.style.border="1px solid black";
modal.style.boxShadow="10px 10px 10px 10px gray";
const p = document.createElement("p");

//evento que sera disparado ao clicar o botao de deletar
const deleteButton = document.getElementById("delete");
deleteButton.addEventListener("click", deleteFilm);

 function deleteFilm(id) {
    modal.style.display ="block";
p.textContent=`Tem certeza que deseja eliminar este filme ?`;
modal.appendChild(p);
 
    for (let i = 0; i < films.length; i++) {
    if (confirm("sim")){
        alert("filme eliminado com sucesso")
    }else{
        window.close();
    }
   
    
 }}
 

 //criacao e estilizacao do botao nao
const noButton = document.creatElement("button");
noButton.textContent = "No";
noButton.style.color = "red";
document.deleteButton.appendChild(noButton);
noButton.addEventListner("click", function () {
    noButton.style.display = "none";
})


//criacao e estilizacao do botao sim
const yesButton = document.createElement("button");
yesButton.textContent = "yes";
yesButton.style.color = "green";
yesButton.addEventListener("click",function(){
    alert("Filme eliminado com sucesso");
    yesButton.style.display = "none";
    
})
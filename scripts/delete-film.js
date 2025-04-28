// Função para eliminar filme
/* import { films } from "../data/db.js";*/
const filmCard= document.getElementById("filmCard");
filmCard.style.width="300px";
filmCard.style.height="300px";
filmCard.style.padding="50px";
filmCard.style.border="1px solid black";
filmCard.style.boxShadow="10px 10px 10px 10px gray";
filmCard.style.alignSelf="center";
//obtencao e estilizacao do botao para deletar
const deleteButton = document.getElementById("delete-btn");
deleteButton.textContent= "Delete";
deleteButton.style.backgroundColor="red";
deleteButton.style.color="white";
deleteButton.style.border="1px solid black";
deleteButton.style.borderRadius="10px";
document.filmCard.appendChild(deleteButton);

//evento que sera disparado ao clicar o botao de deletar
deleteButton.addEventListener("click", deleteFilm);
 function deleteFilm(id) {
    for (let i = 0; i < films.length; i++) {
    alert(`Tem certeza que deseja eliminar ${films[i].title}`);
    if (confirm("sim")){
        alert("filme eliminado com sucesso")
    }else{
        window.close();
    }
   
    
 }}
 

 //criacao e estilizacao do botao sim
const noButton = document.creatElement("button");
noButton.textContent = "No";
noButton.style.color = "red";
document.deleteButton.appendChild(noButton);
noButton.addEventListner("click", function () {
    noButton.style.display = "none";
})


//criacao e estilizacao do botao nao
const yesButton = document.createElement("button");
yesButton.textContent = "yes";
yesButton.style.color = "green";
yesButton.addEventListener("click",function(){
    alert("Filme eliminado com sucesso");
    yesButton.style.display = "none";
    
})
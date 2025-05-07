//Função para eliminar filme
import { films } from "../data/db.js";
const modal = document.getElementById("modal");
modal.style.width = "300px";
modal.style.height = "100px";
modal.style.padding = "20px";
modal.style.margin = "20px";
modal.style.border = "1px solid black";
modal.style.boxShadow = "10px 10px 10px 10px gray";
modal.style.display = "none";
modal.style.position = "relative";
modal.style.borderRadius = "10px";
modal.style.backgroundImage = "url(../styles/bluegradiente.jpg)";
modal.style.color = "#6769e6";

//funcao que sera chamada ao clicar o botao
export function deleteFilm() {
  modal.style.display = "block";
  //estilizacao do botao nao
  const noButton = document.getElementById("noButton");
  noButton.style.color = "red";
  noButton.addEventListener("click", () => {
    modal.style.display = "none";
  });

  //Eliminar o filme da base de dados ao clicar o sim
  const yesButton = document.getElementById("yesButton");
  yesButton.style.color = "green";
  yesButton.addEventListener("click",()=>{
  alert("Filme eliminado com sucesso");
  modal.style.display = "none";
  });

  /*localStorage.setItem("films", JSON.stringify(films));
  let db = localStorage.getItem("film");
  let jsonDB = JSON.parse(db);
  deleteFilm(jsonDB);

  yesButton.addEventListener("click", () => {
    let db = localStorage.getItem("films");
    let jsonDB = JSON.parse(db);
    deleteFilm(jsonDB);
  });

const idDeleted=document.getElementById("filmCard")
  idDeleted = jsonDB.length - 1;

  jsonDB.pop({
    id: idDeleted,
    title: "O Grande Truque",
    gender: "Drama",
    year: 2006,
    rate: 5,
    description: "Dois mágicos rivais competem ferozmente.",
    imageUrl: "https://github.com/jay-ubisse.png",
  });*/
}
export function removeElement(value){
  
  const film=films.find((film)=>film.id===Number(value));
  if (film) {
    const index=films.indexOf(value);
    for (let i=0 ; i< films.length;i++) {
      
    }
  }
  
  
  
  
  
}
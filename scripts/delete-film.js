//Função para eliminar filme
import { films } from "../data/db.js";


//funcao que sera chamada ao clicar o botao
export function deleteFilm() {
  const modal = document.getElementById("modal");
  modal.style.width = "300px";
  modal.style.height = "150px";
  modal.style.padding = "20px";
  modal.style.margin = "20px";
  modal.style.border = "1px solid black";
  modal.style.boxShadow = "0px 10px 50px rgb(0, 0, 0)";
  modal.style.display = "none";
  modal.style.position = "relative";
  modal.style.borderRadius = "20px";
  modal.style.backgroundImage = "url(../styles/bluegradiente.jpg)";
  modal.style.color = "#cfd6fa";
  modal.style.display = "block";
  //estilizacao do botao nao
  
  const noButton = document.getElementById("noButton");
  noButton.style.color = "red";
  noButton.addEventListener("click", () => {
    modal.style.display = "none";
  });
}

export function removeElement() {
  
  //Eliminar o filme da base de dados ao clicar o sim
  const yesButton = document.getElementById("yesButton");
  yesButton.style.color = "green";
  yesButton.addEventListener("click", () => {
    // Aqui você vai buscar o filme no banco de dados local
    let films = JSON.parse(localStorage.getItem("films"));
    
    // Procurando o filme a ser removido
    const filmIndex = films.findIndex(film => film.id === value); // 'value' é o ID do filme
    if (filmIndex !== -1) {
      films.splice(filmIndex, 1); // Remove o filme pelo índice encontrado
      localStorage.setItem("films", JSON.stringify(films)); // Atualiza o localStorage
      alert("Filme eliminado com sucesso!");
    } else {
      alert("Filme não encontrado.");
    }

    // Fechar o modal
    modal.style.display = "none";
  });
}

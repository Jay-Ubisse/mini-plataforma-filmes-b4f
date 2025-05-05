import { films } from "../data/db.js";

const detailsDiv = document.getElementById("content");
const detailsButton = document.getElementById("details");
const closeButton = document.getElementsByClassName("close")[0];

// Função para exibir os detalhes do filme
export function showDetails(value) {
  detailsDiv.style.display = "block"; // Torna o modal visível
  detailsFilms(value); // Carrega os detalhes do filme
}

// Fecha o modal quando clicar no botão "close"
closeButton.onclick = function () {
  detailsDiv.style.display = "none";
};

// Função para renderizar os detalhes do filme
function renderFilms(film) {
  // Limpa o conteúdo anterior
  detailsDiv.innerHTML = "";

  // Cria elementos para exibir as informações do filme
  const titleElement = document.createElement("h1");
  titleElement.textContent = film.title;

  const imageElement = document.createElement("img");
  imageElement.src = film.imageUrl;
  imageElement.alt = film.title;

  const genderElement = document.createElement("p");
  genderElement.textContent = `Gênero: ${film.gender}`;

  const yearElement = document.createElement("p");
  yearElement.textContent = `Ano: ${film.year}`;

  const rateElement = document.createElement("p");
  rateElement.textContent = `Avaliação: ${film.rate}`;

  const descriptionElement = document.createElement("p");
  descriptionElement.textContent = `Descrição: ${film.description}`;

  // Adiciona os elementos ao modal
  detailsDiv.appendChild(titleElement);
  detailsDiv.appendChild(imageElement);
  detailsDiv.appendChild(genderElement);
  detailsDiv.appendChild(yearElement);
  detailsDiv.appendChild(rateElement);
  detailsDiv.appendChild(descriptionElement);
}

// Função para buscar e exibir os detalhes do filme específico
function detailsFilms(value) {
  const film = films.find((film) => film.id === value); // Encontra o filme pelo ID

  if (film) {
    renderFilms(film); // Exibe os detalhes do filme encontrado
  } else {
    console.log("Filme não encontrado.");
  }
}

// Exemplo de como o botão de detalhes pode ser configurado
detailsButton.addEventListener("click", () => {
  const filmId = parseInt(detailsButton.getAttribute("data-id"));
})
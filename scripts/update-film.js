// Função para editar filme existente
import { films } from "../data/db.js";
//create form and styling
export function updateFilm() {
    const form = document.createElement("form");
    form.style.maxHeight = 'fit-content';
    form.style.maxWidth = 'fit-content'
    form.style.backgroundColor = '#D9D9D9';
    form.style.display = 'flex';
    form.style.flexDirection = 'column';
    form.style.padding = '20px';
    form.style.border = '1px solid black';
    form.style.top = '20%';
    form.style.boxShadow = '4px 4px 5px gray';
    form.style.position = 'fixed';
    form.style.left = '50%';
    form.style.zIndex = '1000'
    form.innerHTML = `
 <span id= "close_button">&times</span>
    <label for="title">Título</label>
 <input type="text" id="title" name="title" required><br>

 <label for="Gender">Genero</label>
 <input type="text" id= "gender" name="gender" required><br>
 
 <label for="year">Ano</label>
 <input type="number" id= "year" name="year" required><br>

 <label for="rate">Avaliação</label>
 <input type="number"  id="rate" name="rate" required><br>

 <label for="description">Descrição</label>
 <textarea type="text"  id="description" name="description"></textarea>

 <label for="imageUrl">Url da Imagem</label>
 <input type="url"  id="imageUrl" name = "imageUrl" required><br>
 <button  id="button" onclick="saveUpdateFilm()">Salvar</button>
 `;
    //styling the close button
    const closeButton = form.querySelector("#close_button");
    closeButton.style.position = 'absolute';
    closeButton.style.top = '10px'
    closeButton.style.right = '10px'
    closeButton.style.fontSize = '24px'
    closeButton.style.cursor = 'pointer'
    closeButton.style.color = 'red'

    //validar os inputs, estlizar o formulario e guardar alteracoes no BD
    document.body.appendChild(form);
    const id=Number(localStorage.getItem('id'));
    const film=films.find(film=>film.id===id);
    preFillForm(film);

    closeButton.addEventListener('click', () => { document.body.removeChild(form) });
}

function preFillForm(films) {
    document.getElementById('title').value = films.title;
    document.getElementById('gender').value = films.gender;
    document.getElementById('year').value = films.year;
    document.getElementById('rate').value = films.rate;
    document.getElementById('description').value = films.description;
    document.getElementById('imageUrl').value = films.imageUrl;
}

//create popup for form
const edit_button = document.getElementById("edit_button");
function saveUpdateFilm() {
    //funcao para transformar em string e voltar a mandar para bd;
localStorage.setItem("films", JSON.stringify(films));

let db = localStorage.getItem("films");
let jsonDB = JSON.parse(db);

}



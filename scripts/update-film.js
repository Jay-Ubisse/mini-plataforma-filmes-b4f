// Função para editar filme existente
import { films } from "../data/db.js";
//create form
export function updateFilm() {
const form = document.createElement("form");
form.innerHTML=`

 <label for="title">Title</label>
 <input type="text" id="title" name="title" required><br>

 <label for="Gender">Gender</label>
 <input type="text" id= "gender" name="gender" required><br
 >
 <label for="year">year</label>
 <input type="number" id= "year" name="year" required><br>

 <label for="rate">rate</label>
 <input type="number"  id="rate" name="rate" required><br>

 <label for="description">description</label>
 <input type="text"  id="description" name="description" required><br>

 <label for="imageUrl">imageUrl</label>
 <input type="url"  id="imageUrl" name = "imageUrl" required><br>
 <button onclick="saveUpdateFilm()">Salvar</button>
 `;

 //validar os inputs, estlizar o formulario e guardar alteracoes no BD
document.body.appendChild(form);
preFillForm(films[0]);
}

function preFillForm(films) {
    document.getElementById('title').value=films.title;
    document.getElementById('gender').value=films.gender;
    document.getElementById('year').value=films.year;
    document.getElementById('rate').value=films.rate;
    document.getElementById('description').value=films.description;
    document.getElementById('imageUrl').value=films.imageUrl;
}
function saveUpdateFilm() {
    //funcao para transformar em string e voltar a mandar para bd;
    
}
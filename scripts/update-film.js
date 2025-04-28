// Função para editar filme existente
import { films } from "../data/db.js";
//create form and styling
export function updateFilm() {
const form = document.createElement("form");
<<<<<<< HEAD
form.style.maxHeight = 'fit-content';
form.style.maxWidth = 'fit-content'
=======

form.style.maxHeight = '500px';
form.style.maxWidth = '500px'
>>>>>>> f1d52a991e8cf8cf0099b3bd2abd4cc3efa902e9
form.style.backgroundColor = '#D9D9D9';
form.style.display = 'flex';
form.style.flexDirection = 'column';
form.style.padding = '20px';
<<<<<<< HEAD
form.style.border = '1px solid black';
form.style.margin = '10% auto'
form.style.boxShadow = '4px 4px 5px gray';
=======



>>>>>>> f1d52a991e8cf8cf0099b3bd2abd4cc3efa902e9
form.innerHTML=`
 <spam onclick="form.style.display='none'" id= "close_button">&times</spam>
    <label for="title">Title</label>
 <input type="text" id="title" name="title" required><br>

 <label for="Gender">Gender</label>
 <input type="text" id= "gender" name="gender" required><br>
 
 <label for="year">year</label>
 <input type="number" id= "year" name="year" required><br>

 <label for="rate">rate</label>
 <input type="number"  id="rate" name="rate" required><br>

 <label for="description">description</label>
 <input type="text"  id="description" name="description" required><br>

 <label for="imageUrl">imageUrl</label>
 <input type="url"  id="imageUrl" name = "imageUrl" required><br>
 <button  id="button" onclick="saveUpdateFilm()">Salvar</button>
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

//create popup for form
const edit_button = document.getElementById("edit_button");
function saveUpdateFilm() {
    //funcao para transformar em string e voltar a mandar para bd;
    
}



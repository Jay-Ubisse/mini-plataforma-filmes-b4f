// Arquivo principal que inicializa a aplicação

/*

============== GROUP 1 LOGIC ==========

*/

/*

============== GROUP 2 LOGIC ==========

*/

/*
//acredito que foi gerado por uma IA.
function createForm() {



    const form = document.createElement('form')
    form.id = 'formFilme'

    // titulo do filme
    const divTitle = document.createElement('div');
    const labelTitle = document.createElement('label');
    labelTitle.textContent = 'Titulo do filme:';
    labelTitle.htmlFor = 'titulo';
    const inputTitle = document.createElement('input');
    inputTitle.type = 'text';
    inputTitle.id = 'diretor';

    divTitle.appendChild(labelTitle);
    divTitle.appendChild(inputTitle);
    form.appendChild(divTitle);

    const divGender = document.createElement('div');
    const labelGender = document.createElement('label');
    labelGender.textContent = 'Genero:';
    labelGender.htmlFor = 'genero';
    const selectGender = document.createElement('select');
    selectGender.id = 'genero';

    //Array de generos disponiveis



    const gender = ['Açã', 'Aventura', 'Comédia', 'Drama', 'Ficção Cientifica', 'Terror', ' Romance', 'Animação'];
    gender.forEach(gender => {
        const option = document.createElement('option');
        option.value = gender.toLowerCase(); // valor em minuscula
        option.textContent = gender;
        selectGender.appendChild(option);

    });
    divGender.appendChild(labelGender);
    divGender.appendChild(selectGender);
    form.appendChild(divGender);

    //Campo de ano de Lançamento
    const divYear = document.createElement('div');
    const labelYear = document.createElement('label');
    labelYear.textContent = 'Ano de Lançamento:';
    labelYear.htmlFor = 'Ano';
    const inputYear = document.createElement('input');
    inputYear.type = ' Number';
    inputYear.id = 'Ano';
    inputYear.min = '2000'; //Valor minimo aceitavel
    inputYear.max = new Date().getFullYear();
    divYear.appendChild(labelYear);
    divYear.appendChild(inputYear);
    form.appendChild(divYear);


    //Descrição do filme

    const divDescription = document.createElement('div');
    const labelDescription = document.createElement('label')
    labelDescription.textContent = 'Descrição';
    labelDescription.htmlFor = 'descrição';
    const inputDescription = document.createElement('input');
    inputDescription.type = 'text';
    inputDescription.id = 'description';
    divDescription.appendChild(labelDescription);
    divDescription.appendChild(inputDescription)
    form.appendChild(divDescription)

    //Campo de director 
    const divDirector = document.createElement('div');
    const labelDirector = document.createElement('label');
    labelDirector.textContent = 'Diretor:';
    labelYear.htmlFor = 'director';
    const inputDirector = document.createElement('input');
    inputDirector.type = 'text';
    inputDirector.id = 'director';
    divDirector.appendChild(labelDirector);
    divDirector.appendChild(inputDirector);
    form.appendChild(divDirector);

    //Campo da URL da capa
    const divCover = document.createElement('div');
    const labelCover = document.createElement('label');
    labelCover.textContent = 'URL da Capa:';
    labelCover.htmlFor = 'Capa';
    const inputCover = document.createElement('input');
    inputCover.type = 'url';
    inputCover.id = 'Capa';
    inputCover.placeholder = 'https://exemplo.com/capa.jpb'
    divCover.appendChild(labelCover);
    divCover.appendChild(inputCover);
    form.appendChild(divCover);

    //Botão de Enviar
    const button = document.createElement('button')
    button.textContent = 'Adiciona'
    button.type = 'submit';
    button.id = 'Adicionar Filme';
    form.appendChild(button)

    document.body.appendChild(form)
    return form;
}

const form = createForm();
form.style.display = 'none' //esconder form
document.body.appendChild(form);

// Função para mostrar 

function showForm() {
    form.style.display = 'block';
}

function closeForm() {
    form.style.display = 'nane';

}

//Button para abrir
const btnShow = document.createElement('button');
btnShow.textContent = 'Adicionar Filme';
btnShow.onclick = showForm;
document.body.prepend(btnShow)


//Button para fechar
*/
/*const btnClose = document.createElement('button')
btnClose.textContent = 'X';
btnClose.onclick = closeForm;
btnClose.style.position = 'absolute';
btnClose.style.right = '10px';
btnClose.style.top = '10px';
form.prepend(btnClose)


 */

/*



    ===========GROUP 3 LOGIC === === === =

    *
    /

/*

============== GROUP 4 LOGIC ==========

*/
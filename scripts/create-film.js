
// Função para cadastrar novo filme
export function newFilm(){
    
    return;
}
function addBtn(){
   const addNewFilm_popup = document.getElementById("add_newFilm_popup");
   const addNewFilmBtn = document.getElementById("add_newFilm_btn");
   const closePopupBtn = document.getElementById("close_popup_btn");

   addNewFilmBtn.addEventListener("click",()=>{
      addNewFilm_popup.style.display= "block";
   });
   closePopupBtn.addEventListener("click",()=>{
      addNewFilm_popup.style.display="none";
   });
   window.addEventListener("click",(event)=>{
      if(event.target===addNewFilm_popup){
         addNewFilm_popup.style.display="none";
      }
   });

   return;
}


 function addFilmForm(){
    return;
 }

 function isFieldValidated(){
    return;
 }

 
 function saveInDb(){
    return;
 }
 
// Função para não enviar antes da validação
form.addEventListener("submit", (event) => {
   event.preventDefault(); 

   const isValid = btnManipulation(InputNameEvent, InputYearEvent);
   if (isValid) {
      form.submit();
    }
  });
 // Função de validação dos campos
 function btnManipulation(nameInput, yearInput) {
   let validacaoOk = true;
   let erro = '';
 
   if (nameInput.value === "") {
     erro = 'O nome do filme é obrigatório';
     nameInput.classList.add('is-invalid');
     validacaoOk = false;
   } else {
     nameInput.classList.remove('is-invalid');
   }
 
   if (yearInput.value === "") {
     if (erro.length > 0) {
       erro += ', ';
     }
     erro += 'O ano do filme é obrigatório';
     yearInput.classList.add('is-invalid');
     validacaoOk = false;
   } else {
     yearInput.classList.remove('is-invalid');
   }
 
 // Exibir erro com estilo 
 const errorDisplay = document.getElementById('errorDisplay');
 if (errorDisplay) {
   if (!validacaoOk) {
     errorDisplay.innerText = erro;
     errorDisplay.style.display = 'block';
     errorDisplay.style.color = 'black';
     errorDisplay.style.backgroundColor = 'red';
     errorDisplay.style.border = '1px solid #f5c6cb';
     errorDisplay.style.padding = '10px';
     errorDisplay.style.marginTop = '10px';
     errorDisplay.style.borderRadius = '5px';
   } else {
     errorDisplay.style.display = 'none';
   }
 } else if (!validacaoOk) {
   alert(erro); 
 }

 return validacaoOk;
}




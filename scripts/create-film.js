
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
 
 function btnManipulation(){

    return;
 }

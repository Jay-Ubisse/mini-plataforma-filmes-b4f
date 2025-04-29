const detailsDiv = document.getElementById("content");


const detailsButton = document.getElementById("detailsButton");


const closeButton = document.getElementsByClassName("close")[0];


detailsButton.onclick = function() {
  detailsDiv.style.display = "block";
}


closeButton.onclick = function() {
  detailsDiv.style.display = "none";
}



// Estilização do modal
detailsDiv.style.position = "fixed";          
detailsDiv.style.top = "10px";
detailsDiv.style.left = "500px";
detailsDiv.style.width = "100vw";              
detailsDiv.style.height = "85vh";             
detailsDiv.style.backgroundColor = "#ffffff"; 
detailsDiv.style.color = "#000000";          
detailsDiv.style.justifyContent = "center";   
detailsDiv.style.alignItems = "left";      
detailsDiv.style.flexDirection = "column";    
detailsDiv.style.textAlign = "left";        
detailsDiv.style.padding = "40px";
  
    

// Estilização do botão de fechar
closeButton.style.position = "absolute";     
closeButton.style.top = "5px";                 
closeButton.style.right = "10px";            
closeButton.style.backgroundColor= "red";      
closeButton.style.color = "white";          
closeButton.style.border = "none";              
closeButton.style.padding = "10px 15px";    
closeButton.style.cursor = "pointer";      
closeButton.style.fontSize = "10px";            
closeButton.style.borderRadius = "10px";    
closeButton.style.zIndex = "1";  
      
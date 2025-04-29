
const detailsDiv = document.getElementById("content");


const detailsButton = document.getElementById("detailsButton");


const closeButton = document.getElementsByClassName("close")[0];


detailsButton.onclick = function() {
  detailsDiv.style.display = "block";
}


closeButton.onclick = function() {
  detailsDiv.style.display = "none";
}



const detailsButton = document.getElementById("btnDatails");
const detailsDiv = document.getElementById("content");
const closeButton = document.getElementById("close");

function openModal(){
  detailsButton.addEventListener("click", () => {
    detailsDiv.style.display = "block";
  });
}


closeButton.addEventListener("click", () => {
  detailsDiv.style.display = "none";
});

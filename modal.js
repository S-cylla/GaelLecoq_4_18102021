function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground"); // Fenêtre modale
const modalBtn = document.querySelectorAll(".modal-btn"); // Bouton d'inscription
const modalbody = document.querySelector(".modal-body"); // Contenu de la modale
const closemodal = document.querySelector(".close"); // Croix de fermeture de la fenêtre modale 
const formData = document.querySelectorAll(".formData"); // Champs du formulaire

// Évènements
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal)); // Clic de lancement de la modale
closemodal.addEventListener("click",  closeModal); // Clic sur la croix de fermeture

// Lancement de la modale
function launchModal() {
  modalbg.style.display = "block";
}

// Fermeture de la modale
function closeModal() {
  modalbg.style.display = "none";
  modalbody.style.display = "block";
  resetForm(); 
}


// DOM Elements
const modalbg = document.querySelector(".bground"); // Fenêtre modale
const modalBtn = document.querySelectorAll(".modal-btn"); // Bouton d'inscription
const modalbody = document.querySelector(".modal-body"); // Contenu de la modale
const modalForm = document.getElementById("modal-form"); // Formulaire
const closemodal = document.querySelector(".close"); // Croix de fermeture de la fenêtre modale 
const formData = document.querySelectorAll(".formData"); // Champs du formulaire
const textControl = document.querySelectorAll(".text-control") // Input du formulaire
const firstName = document.getElementById("first"); // Input prénom
const lastName = document.getElementById("last"); // Input nom
const email = document.getElementById("email"); // Input e-mail
const birthdate = document.getElementById("birthdate"); // Input date de naissance
const quantity = document.getElementById("quantity"); // Input participations
const checkbox1 = document.getElementById("checkbox1"); // Checkbox conditions
const submitButton = document.getElementById("button-submit"); // Bouton submit
const modalConfirm = document.querySelector(".modal-confirm"); // Confirmation

// Éléments d'erreur
const errorFirst = document.getElementById("error-first"); // Erreur prénom
const errorLast = document.getElementById("error-last"); // Erreur nom
const errorEmail = document.getElementById("error-email"); // Erreur e-mail
const errorBirthdate = document.getElementById("error-birthdate"); // Erreur date de naissance
const errorQuantity = document.getElementById("error-quantity"); // Erreur participations
const errorCheckbox1 = document.getElementById("error-checkbox1"); // Erreur conditions
const errorSubmit = document.getElementById("error-submit"); // Erreur submit


// Évènements
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal)); // Clic de lancement de la modale
closemodal.addEventListener("click",  closeModal); // Clic sur la croix de fermeture
formData[0].addEventListener("change", firstnameValidation); // Validation Prénom
formData[1].addEventListener("change", lastnameValidation); // Validation nom
formData[2].addEventListener("change", emailValidation); // Validation email
formData[3].addEventListener("change", birthValidation); // Validation date de naissance
formData[4].addEventListener("input", quantityValidation); // Validation participations
formData[6].addEventListener("change", conditionsValidation); // Validation conditions d'utilisation
submitButton.addEventListener("click", formValidation); // Clic sur le bouton submit

// Responsive
function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// Lancement de la modale
function launchModal() {
  modalbg.style.display = "block";
  modalbody.style.display = "block";
  modalConfirm.style.display = "none";
}

// Fermeture de la modale
function closeModal() {
  modalbg.style.display = "none";
}

// Validation "Prénom"
function firstnameValidation() {
  if (firstName.value.length > 1) { // Si le nombre de caractères est > 1
    firstName.style.border = "2px solid #279E7A"; // La bordure devient verte
    errorFirst.style.display = "none"
    return true // Input valide
  } else {
    errorFirst.style.display = "block"
    errorFirst.innerHTML = "Vous devez entrer au moins 2 caractères" // Message d'erreur
    firstName.style.border = "2px solid #FE142F"; // La bordure devient rouge
    return false; // Input toujours invalide
  } 
}

// Validation "Nom"
function lastnameValidation() {
  if (lastName.value.length > 1) {
    lastName.style.border = "2px solid #279E7A";
    errorLast.style.display = "none"
    return true;
  } else {
    errorLast.style.display = "block"
    errorLast.innerHTML = "Vous devez entrer au moins 2 caractères"
    lastName.style.border = "2px solid #FE142F";
    return false;
  } 
}

// Validation "E-mail"
function emailValidation() {
  const emailRegex = new RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
  if (emailRegex.test(email.value)) {
    email.style.border = "2px solid #279E7A";
    errorEmail.style.display = "none"
    return true;
  } else {
    errorEmail.style.display = "block"
    errorEmail.innerHTML = "Adresse e-mail invalide";
    email.style.border = "2px solid #FE142F";
    return false;
  }
}

// Validation "Date de naissance"
function birthValidation() {
  const birthRegex = new RegExp(/^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/);
  if (birthRegex.test(birthdate.value)) {
    birthdate.style.border = "2px solid #279E7A";
    errorBirthdate.style.display = "none";
    return true;
  } else {
    errorBirthdate.style.display = "block"
    errorBirthdate.innerHTML = "Date invalide";
    birthdate.style.border = "2px solid #FE142F";
    return false;
  }
}

// Validation "Nombre de tournois"
function quantityValidation() {
  const quantityRegex = new RegExp(/^-?\d{1,}$/);
  if (quantityRegex.test(quantity.value)) {
    if (quantity.value > 99 || quantity.value < 0) {
    errorQuantity.style.display = "block"
    errorQuantity.innerHTML = "Veuillez entrer un nombre entre 0 et 99";
    quantity.style.border = "2px solid #FE142F";
    return false;
    }
    quantity.style.border = "2px solid #279E7A";
    errorQuantity.style.display = "none";
    return true;
  } else {
    errorQuantity.style.display = "block"
    errorQuantity.innerHTML = "Veuillez entrer un nombre";
    quantity.style.border = "2px solid #FE142F";
    return false;
  }
}

// Validations conditions d'utilisation
function conditionsValidation() {
  if (checkbox1.checked == true) {
    errorCheckbox1.style.display = "none";
    return true;
  } else {
    errorCheckbox1.style.display = "block";
    errorCheckbox1.innerHTML = "Veuillez accepter les conditions d'utilisation";
    checkbox1.style.border = "2px solid #FE142F";
    return false
  }
}

// Validation du formulaire
function formValidation(e) {
  e.preventDefault() // Bloque la soumission du formulaire
  let isFormValid = [] // Crée un tableau pour y mettre les fonctions créées
  isFormValid.push(firstnameValidation())
  isFormValid.push(lastnameValidation())
  isFormValid.push(emailValidation())
  isFormValid.push(birthValidation())
  isFormValid.push(quantityValidation())
  isFormValid.push(conditionsValidation())

  if (!isFormValid.includes(false)) {
    errorSubmit.style.display = "none";
    modalbody.style.display = "none";
    modalConfirm.style.display = "flex";
    modalForm.reset()

    for (let i = 0; i < textControl.length; i++) {
      const element = textControl[i];
      element.style.border = "0.8px solid #CCC";
    }

  } else {
    errorSubmit.style.display = "block";
    errorSubmit.innerHTML = "Veuillez remplir tous les champs";
  }
} 
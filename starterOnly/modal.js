function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalValidation = document.querySelector(".bgroundValidate");
const modalBtn = document.querySelectorAll(".modal-btn");
const modalCloseBtn = document.getElementById("close");
const modalValidationCloseBtn = document.getElementById("closeValidation");
const modalValCloseBtn = document.getElementById("closeValidationModal");
const form = document.getElementsByTagName("form")[0];
const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const email = document.getElementById("email");
const birthDate = document.getElementById("birthdate");
const tournoi = document.getElementById("quantity");

const loc1 = document.getElementById("location1");
const loc2 = document.getElementById("location2");
const loc3 = document.getElementById("location3");
const loc4 = document.getElementById("location4");
const loc5 = document.getElementById("location5");
const loc6 = document.getElementById("location6");
const acceptance = document.getElementById("checkbox1");
const locationCheckbox = document.getElementById(".checkbox-input");
const submitBtn = document.getElementById("submitButton");

const errorFirstName = document.querySelector(".errorFirstName");
const errorLastName = document.querySelector(".errorLastName");
const errorEmail = document.querySelector(".errorEmail");
const errorBirthDate = document.querySelector(".errorBirthDate");
const errorTournoi = document.querySelector(".errorTournoi");
const errorCity = document.querySelector(".errorCity");
const errorAcceptance = document.querySelector(".errorAcceptance");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}
function launchModalValidation() {
  modalValidation.style.display = "block";
}
//close modal form & close validation message modal
function closeModal() {
  modalbg.style.display = "none";
}

function closeModalValidation() {
  modalValidation.style.display = "none";
}

modalCloseBtn.addEventListener("click", closeModal);
modalValidationCloseBtn.addEventListener("click", closeModalValidation);
modalValCloseBtn.addEventListener("click", closeModalValidation);

window.addEventListener("click", function (event) {
  if (event.target == modalbg) {
    closeModal();
  }
});

window.addEventListener("click", function (event) {
  if (event.target == modalValidation) {
    closeModalValidation();
  }
});

// form validation \\

function checkFirstName() {
  if (firstName.value.length < 2) {
    errorFirstName.innerHTML = "Veuillez rentrer un prénom correct";
    errorFirstName.className = "error active";
    return false;
  } else {
    errorFirstName.innerHTML = "";
    errorFirstName.className = "";
    return true;
  }
}

firstName.addEventListener("input", function (event) {
  if (firstName.value.length < 2) {
    errorFirstName.innerHTML = "Veuillez rentrer un prénom correct";
    errorFirstName.className = "error active";
    return false;
  } else {
    errorFirstName.innerHTML = "";
    errorFirstName.className = "";
    return true;
  }
});

function checkLastName() {
  if (lastName.value.length < 2) {
    errorLastName.innerHTML = "Veuillez rentrer un nom correct";
    errorLastName.className = "error active";
    event.preventDefault;
    return false;
  } else {
    errorLastName.innerHTML = "";
    errorLastName.className = "";
    return true;
  }
}

lastName.addEventListener("input", function (event) {
  if (lastName.value.length < 2) {
    errorLastName.innerHTML = "Veuillez rentrer un nom correct";
    errorLastName.className = "error active";
    event.preventDefault;
    return false;
  } else {
    errorLastName.innerHTML = "";
    errorLastName.className = "";
    return true;
  }
});

function checkEmail() {
  var reg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (!reg.test(email.value)) {
    errorEmail.innerHTML = "Veuillez indiquer une adresse mail correct";
    errorEmail.className = "error active";
  } else {
    errorEmail.innerHTML = "";
    errorEmail.className = "";
    return true;
  }
}

email.addEventListener("input", function (event) {
  let reg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (!reg.test(email.value)) {
    errorEmail.innerHTML = "Veuillez indiquer une adresse mail correct";
    errorEmail.className = "error active";
  } else {
    errorEmail.innerHTML = "";
    errorEmail.className = "";
    return true;
  }
});

function checkBirthdate() {
  let regBd = /^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/;

  if (!regBd.test(birthDate.value)) {
    errorBirthDate.innerHTML = "Veuillez indiquer une date de naissance";
    errorBirthDate.className = "error active";
    return false;
  } else {
    errorBirthDate.innerHTML = "";
    errorBirthDate.className = "";
    return true;
  }
}

birthDate.addEventListener("input", function () {
  let regBd = /^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/;

  if (!regBd.test(birthDate.value)) {
    errorBirthDate.innerHTML = "Veuillez indiquer une date de naissance";
    errorBirthDate.className = "error active";
  } else {
    errorBirthDate.innerHTML = "";
    errorBirthDate.className = "";
    return true;
  }
});

function checkTurnament() {
  if (!tournoi.value) {
    errorTournoi.innerHTML =
      "Veuillez indiquer un nombre de particpation (0 si aucun)";
    errorTournoi.className = "error active";
    return false;
  } else {
    errorTournoi.innerHTML = "";
    errorTournoi.className = "";
    return true;
  }
}
tournoi.addEventListener("input", function () {
  if (!tournoi.value) {
    errorTournoi.innerHTML =
      "Veuillez indiquer un nombre de particpation (0 si aucun)";
    errorTournoi.className = "error active";
  } else {
    errorTournoi.innerHTML = "";
    errorTournoi.className = "";
  }
});

function checkCity() {
  if (
    !loc1.checked &&
    !loc2.checked &&
    !loc3.checked &&
    !loc4.checked &&
    !loc5.checked &&
    !loc6.checked
  ) {
    errorCity.innerHTML = "Veuillez indiquer une ville";
    errorTournoi.className = "error active";
    return false;
  } else {
    errorCity.innerHTML = "";
    errorCity.className = "";
    return true;
  }
}

function checkAcceptance() {
  if (!acceptance.checked) {
    errorAcceptance.innerHTML =
      "Veuillez accepter les termes et conditions pour pouvoir vous inscrire";
    errorAcceptance.className = "error active";

    return false;
  } else {
    errorAcceptance.innerHTML = "";
    errorAcceptance.className = "";

    return true;
  }
}

function preventSending() {
  form.addEventListener("submit", function (event) {
    event.preventDefault();
  });
}

// Clear all form input when form is valid

function resetForm() {
  firstName.value = "";
  lastName.value = "";
  email.value = "";
  birthDate.value = "";
  tournoi.value = "";
  loc1.checked = false;
  loc2.checked = false;
  loc3.checked = false;
  loc4.checked = false;
  loc5.checked = false;
  loc6.checked = false;
  acceptance.checked = false;
}

function validate() {
  if (
    (checkFirstName(),
    checkLastName(),
    checkEmail(),
    checkBirthdate(),
    checkTurnament(),
    checkCity() & checkAcceptance())
  ) {
    closeModal();
    launchModalValidation();
    resetForm();
    return true;
  } else {
    preventSending();
    // modalbg.style.display = 'block';
    return false;
  }
}

submitBtn.addEventListener("click", validate);

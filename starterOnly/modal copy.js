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
const form = document.getElementsByTagName('form')[0];
const firstName = document.getElementById('first');
const lastName = document.getElementById('last');
const email = document.getElementById('email');
const birthDate = document.getElementById('birthdate');
const location1 = document.getElementById('location1');
const location2 = document.getElementById('location2');
const location3 = document.getElementById('location3');
const location4 = document.getElementById('location4');
const location5 = document.getElementById('location5');
const location6 = document.getElementById('location6');
const submitBtn = document.getElementById('submitButton');

const errorFirstName = document.querySelector('.errorFirstName');
const errorLastName = document.querySelector('.errorLastName');
const errorEmail = document.querySelector('.errorEmail');
const errorBirthDate = document.querySelector('.errorBirthDate');


// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}
function launchModalValidation() {
  modalValidation.style.display = "block"
}
//close modal form & close validation message modal
function closeModal() {
  modalbg.style.display = "none";
}

function closeModalValidation() {
  modalValidation.style.display = "none";
}

modalCloseBtn.addEventListener('click', closeModal);
modalValidationCloseBtn.addEventListener('click', closeModalValidation);


window.addEventListener('click', function (event) {
  if (event.target == modalbg) {
    closeModal();
  }
});

window.addEventListener('click', function (event) {
  if (event.target == modalValidation) {
    closeModalValidation();
  }
});

// form validation \\




// firstName.addEventListener("input", function (event) {
//   if (firstName.validity.rangeUnderflow) {
//     errorFirstName.innerHTML = "";
//     errorFirstName.className = "error";
//   }
// }, false);

// lastName.addEventListener("input", function (event) {
//   if (lastName.validity.rangeUnderflow) {
//     errorLastName.innerHTML = "";
//     errorLastName.className = "error";
//   }
// }, false);

// email.addEventListener("input", function (event) {
//   if (email.validity.valid) {
//     errorEmail.innerHTML = "";
//     errorEmail.className = "";
//   }
//   birthDate.addEventListener("input", function(event) {
//     if (birthDate.validity.valid){
//       errorBirthDate.innerHTML = "";
//       errorBirthDate.className = "error";
//     }
//   })
// }, false);



// form.addEventListener('submit', function (event) {
//   if (!email.validity.valid) {
//     errorEmail.innerHTML = "L'adresse e-mail semble être incorrecte.";
//     errorEmail.className = "error active";
//     event.preventDefault();

//   }
//   if (!firstName.validity.rangeUnderflow) {
//     errorFirstName.innerHTML = "Veuillez renseigner un prénom correct et de plus de 2 caractères"
//     errorFirstName.className = "error active";
//     event.preventDefault();

//   }
//   if (!lastName.validity.rangeUnderflow) {
//     errorLastName.innerHTML = "Veuillez renseigner un nom correct et de plus de 2 caractères"
//     errorLastName.className = "error active";
//     event.preventDefault();
  
//   } 

//   else{
//     console.log('all good');
//   }
//   if (!birthDate.validity.valueMissing){
//     errorBirthDate.innerHTML = "Veuillez renseigner une date de naissance"
//     errorBirthDate.className = "error active";
//     event.preventDefault();
//   }

// },false);


function checkFirstName(){
  if (firstName.validity.rangeUnderflow) {
    errorFirstName.innerHTML = "Veuillez renseigner un prénom correct et de plus de 2 caractères"
    errorFirstName.className = "error active";
    
    event.preventDefault;
    return false;
  }
}

function checkLastName(){
  if (lastName.validity.rangeUnderflow) {
    errorLastName.innerHTML = "Veuillez renseigner un nom correct et de plus de 2 caractères"
    errorLastName.className = "error active";
   return false; 
  }
}

function checkEmail(){
  if (!email.validity.valid) {
    errorEmail.innerHTML = "L'adresse e-mail semble être incorrecte.";
    errorEmail.className = "error active";
    return false;

  }
}
function checkBirthdate() {
  if (!birthDate.value) {
    errorBirthDate.innerHTML = "Veuillez renseigner une date de naissance"
    errorBirthDate.className = "error active";
    return false;
  }

}

// form.addEventListener('submit', function(event){
//   if((email.validity.valid) || (firstName.validity.rangeUnderFlow) || (lastName.validity.rangeUnderflow)){
//   launchModalValidation();
//   closeModal();
//   }
// });

function checkFormValidity(){
  form.addEventListener('submit', function (event) {
    event.preventDefault;
    if (checkBirthdate() && checkFirstName() && checkLastName() && checkEmail()) {
      launchModalValidation();
      closeModal();
      return false;
      
      console.log('verif ok');
    }
    else {
      return true;
    }
  });
};


// // Put error on input border if required input are not filled
// submitBtn.addEventListener('click', function (event) {
//   form.className = "submitted";
// });

// submitBtn.addEventListener("click", checkFormValidity);
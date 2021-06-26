const email = document.getElementById("inp_email");
const emailError = document.querySelector('#inp_email + span.error');

const shortWord = document.getElementById('inp_shortWord');
const shortWordError = document.querySelector('#inp_shortWord + span.error');

const smallNumber = document.getElementById('inp_smallNumber');
const smallNumberError = document.querySelector('#inp_smallNumber + span.error');

const form = document.getElementById('form');

window.onload = function () {
  email.addEventListener('blur', validateEmail);
  shortWord.addEventListener('blur', validateShortWord);
  smallNumber.addEventListener('blur', validateSmallNumber);
  
  document.getElementById("form").addEventListener("submit", function(event){
    if (!validateForm()) {
      event.preventDefault()
    } 
  });
}

function validateEmail(){
  if (email.validity.valid) {
    emailError.textContent = ''; // Reset the content of the message
    emailError.className = 'error'; // Reset the visual state of the message
    return true;
  } else if (email.validity.valueMissing) {
    emailError.textContent = 'You need to enter an e-mail address.';
  } else if(email.validity.typeMismatch) {
    emailError.textContent = 'not a valid e-mail address.';
  }

  emailError.className = 'error active';
  return false;
}

function validateShortWord() {
  if (shortWord.validity.valid) {
    shortWordError.textContent = ''; // Reset the content of the message
    shortWordError.className = 'error'; // Reset the visual state of the message
    return true;
  }  else if (shortWord.validity.valueMissing) {
    shortWordError.textContent = 'You need to enter a short word';
  }

  emailError.className = 'error active';
  return false;
}

function validateSmallNumber() {
  if (smallNumber.validity.valid) {
    smallNumberError.textContent = ''; // Reset the content of the message
    smallNumberError.className = 'error'; // Reset the visual state of the message
    return true;
  }  else if (smallNumber.validity.valueMissing) {
    smallNumberError.textContent = 'You need to enter a short word';
  }
  
  smallNumberError.textContent = 'Not Valid';
  emailError.className = 'error active';
  return false;
}

function validateForm() {
  return (validateEmail() && validateShortWord() && validateSmallNumber())
}
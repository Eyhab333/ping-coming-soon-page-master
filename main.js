
let emailField = document.getElementById("email-field");
let emailErrorMessage = document.getElementById("email-error-message");
let submitButton = document.getElementById("submit-button");


function validateEmail() {
  
  if (
    emailField.value === ""
  ) {
    emailErrorMessage.innerHTML = "Whoops! It looks like you forgot to add your email";
    emailField.style.borderColor = "#FF5466";
    
  } else if (!emailField.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
    emailErrorMessage.innerHTML = "Please provide a valid email address";
    emailField.style.borderColor = "#FF5466";
    
  }
  
  else {
    emailErrorMessage.innerHTML = "";
    emailField.style.borderColor = "green";
    
  }
}


submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  validateEmail();
});

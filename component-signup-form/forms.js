//Reference to form
const form = document.querySelector("form");
//Reference to inputs
const firstName = document.querySelector("#fFirstName");
const lastName = document.querySelector("#fLastName");
const email = document.querySelector("#fEmail");
const password = document.querySelector("#fPassword");
//Reference to error messagens
const firstNameError = document.querySelector("#firstNameError");
const lastNameError = document.querySelector("#lastNameError");
const emailError = document.querySelector("#emailError");
const passwordError = document.querySelector("#passwordError");


form.addEventListener("submit" ,function(event){
    if (!form.checkValidity()){
        event.preventDefault();
        errorMsg();
    }
});

function errorMsg(){
    //first name error
    if (firstName.validity.valueMissing){
        firstNameError.textContent = "First Name cannot be empty";
    } else{
        firstNameError.textContent = "";
    }
    //last name error
    if (lastName.validity.valueMissing){
        lastNameError.textContent = "Last Name cannot be empty";
    } else{
        lastNameError.textContent = "";
    }
    //email error
    if (email.validity.valueMissing){
        emailError.textContent = "Email cannot be empty";
    } else if (email.validity.typeMismatch){
        emailError.textContent = "Looks like this is not an email";
    } else{
        emailError.textContent = "";
    }
    //password error
    if (password.validity.valueMissing){
        passwordError.textContent = "Password cannot be empty";
    } else{
        passwordError.textContent = "";
    }
}
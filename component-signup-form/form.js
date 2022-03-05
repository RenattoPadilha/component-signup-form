//Reference to form
const form = document.querySelector("form");
//Reference to inputs
const firstName = document.querySelector("#fFirstName");
const lastName = document.querySelector("#fLastName");
const email = document.querySelector("#fEmail");
const password = document.querySelector("#fPassword");
//Reference to error messagens and images. 
//0 -> FirstNameError, 1 - LastNameError, 2 - emailError, 3 - passwordError
const errorMsgArray = document.querySelectorAll(".form-error-text");
const errorImgArray = document.querySelectorAll(".form-error-symbol");

form.addEventListener("submit" ,function(event){
    if (!form.checkValidity()){
        event.preventDefault(); //prevent forms submission
        showErrorMsg();
    }
});

function showErrorMsg(){
    //first name error
    if (firstName.validity.valueMissing){
        firstName.classList.add("input-border-error");
        errorMsgArray[0].textContent = "First Name cannot be empty";
        errorImgArray[0].classList.add("show-error");
    } else{
        firstName.classList.remove("input-border-error");
        errorMsgArray[0].textContent = "";
        errorImgArray[0].classList.remove("show-error");
    }
    //last name error
    if (lastName.validity.valueMissing){
        lastName.classList.add("input-border-error");
        errorMsgArray[1].textContent = "Last Name cannot be empty";
        errorImgArray[1].classList.add("show-error");
    } else{
        lastName.classList.remove("input-border-error");
        errorMsgArray[1].textContent = "";
        errorImgArray[1].classList.remove("show-error");
    }
    //email error
    if (email.validity.valueMissing){
        email.classList.add("input-border-error");
        errorMsgArray[2].textContent = "Email cannot be empty";
        errorImgArray[2].classList.add("show-error");
    } else if (email.validity.typeMismatch){
        email.classList.add("input-border-error");
        errorMsgArray[2].textContent = "Looks like this is not an email";
    } else{
        email.classList.remove("input-border-error");
        errorMsgArray[2].textContent = "";
        errorImgArray[2].classList.remove("show-error");
    }
    //password error
    if (password.validity.valueMissing){
        password.classList.add("input-border-error");
        errorMsgArray[3].textContent = "Password cannot be empty";
        errorImgArray[3].classList.add("show-error");
    } else{
        password.classList.remove("input-border-error")
        errorMsgArray[3].textContent = "";
        errorImgArray[3].classList.remove("show-error");
    }
}
const submit = document.querySelector(".submit");
const firstName = document.querySelector("#firstName");
const lastName = document.querySelector("#lastName");
const firstNameEmpty = document.querySelector(".firstNameEmpty");
const firstNameFormatError = document.querySelector(".firstNameFormatError");
const lastNameEmpty = document.querySelector(".lastNameEmpty");
const lastNameFormatError = document.querySelector(".lastNameFormatError");
const error = document.querySelector(".error");

const nameRegex = /^(?!.*[-'].*[-'])(?=.*[A-Za-z])[A-Za-z'-]+$/;

firstNameEmpty.classList.remove("error");

valid = false;

submit.addEventListener("click", (e) => {
    e.preventDefault();
    if (nameRegex.test(firstName.value)) {
        valid = true;
        console.log(valid);
    } else {
        valid = false;
        firstNameEmpty.classList.add("error");
        console.log(valid);
    }
    
})



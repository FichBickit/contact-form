const submit = document.querySelector(".submit");
const firstName = document.querySelector("#firstName");
const lastName = document.querySelector("#lastName");
const nameRegex = /^(?!.*[-'].*[-'])(?=.*[A-Za-z])[A-Za-z'-]+$/;

valid = false;

submit.addEventListener("click", (e) => {
    e.preventDefault();
    if (nameRegex.test(firstName.value)) {
        valid = true;
        
        console.log(valid);
    } else {
        valid = false;
        console.log(valid);
    }

})



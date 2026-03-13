const form = document.getElementById("form");
const username = document.getElementById("username");
const Age = document.getElementById("age");
const url = document.getElementById("url");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

function showError(input, message) {
    const fromControl = input.parentElement;
    fromControl.className = "form-control error";

    const small = fromControl.querySelector("small");
    small.innerText = message;
}

function showSuccess(input) {
    const fromControl = input.parentElement;
    fromControl.className = "form-control success";
}



form.addEventListener("submit", function(e) {
e.preventDefault();

if(username.value === "") {
    showError(username, "Se requiere introducir usuario");
} else {
    showSuccess(username); 
}
});
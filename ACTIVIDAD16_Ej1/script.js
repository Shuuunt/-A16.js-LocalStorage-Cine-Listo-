const form = document.getElementById("form");
const username = document.getElementById("username");
const Age = document.getElementById("age");
const url = document.getElementById("url");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("confirmpassword");

// Error
function showError(input, message) {
    const fromControl = input.parentElement;
    fromControl.className = "form-control error";

    const small = fromControl.querySelector("small");
    small.innerText = message;
}

// Exito
function showSuccess(input) {
    const fromControl = input.parentElement;
    fromControl.className = "form-control success";
}

// Verificación de url
function isURLValid(url) {
    const urlRegex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;

    if (typeof url !== 'string') return false;
    return urlRegex.test(url.trim());
}

// Verificación de Email
function isValidEmail(email) {
    if (typeof email !== 'string') return false;

    // RFC 5322 simplified regex for most valid emails
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    return emailRegex.test(email.trim());
};

// Funcion cuenta digitos de contraseña (no funciona)
function cuentaContraseña(password) {
    const digitos = password.lenght;
}


// Eventos de formulario
form.addEventListener("submit", function(e) {
    
    e.preventDefault();

    // Usuario
    if(username.value === "") {
        showError(username, "Se requiere introducir usuario");
    } else {
        showSuccess(username); 
    }

    // Edad
    if(Age.value === "") {
        showError(Age, "Se requiere introducir Edad");
    }else if(Age.value < 0 || Age.value > 999) {
        showError(Age, "La edad no puede ser menor a 0 o mayor a 999")
    } else {
        showSuccess(Age); 
    }

    // Url
    if(url.value === "") {
        showError(url, "Se requiere introducir url");
    }else if(isURLValid(url.value)) {
        showError(url, "La url no es valida")
    } else {
        showSuccess(url); 
    }

    // Email
    if(email.value === "") {
        showError(email, "Se requiere introducir email");
    }else if(!isValidEmail(email.value)) {
        showError(email, "El email no es valido")
    } else {
        showSuccess(email); 
    }

    // Contraseña
    if(password.value === "") {
        showError(password, "Se requiere introducir contraseña");
    }else if(cuentaContraseña(password.value) < 8 ) {
        showError(password, "La contraseña debe contener al menos 8 caracteres")
    } else {
        showSuccess(password); 
    }

    // Confirmación de contraseña
    if(password2.value === "") {
        showError(password2, "Se requiere introducir de nuevo la contraseña");
    }else if(password2.value !== password.value) {
        showError(password2, "La contraseña no coincide")
    } else {
        showSuccess(password2); 
    };
});
const currencyEl_one = document.getElementById("currency-one");
const AmountEl_one = document.getElementById("amount-one");
const currencyEl_two = document.getElementById("currency-two");
const AmountEl_two = document.getElementById("amount-two");
const Estado = document.getElementById("cargando")
const LogoState = document.getElementById("Imagen")

const rateEl = document.getElementById("rate");
const swap = document.getElementById("swap");

// Funciones

// hacer exchange para los rates y actualizar el DOM
function calculate() {
    const currencySym_one = currencyEl_one.value;
    const currencySym_two = currencyEl_two.value;

    LogoState.className = "Imagen giro";
    Estado.innerText = "Cargando 🕧"

    if(AmountEl_one.value < 0) {
        showError(AmountEl_one, "Numeros negativos no admitidos");
        LogoState.className = "";
        Estado.innerText = "Cargado 👍"
    } else {
        showSuccess(AmountEl_one);

        fetch(`https://v6.exchangerate-api.com/v6/fdbc5881e41d95f8cb9bf865/latest/${currencySym_one}`)
            .then(res => res.json())
            .then(data => {
            // console.log(data)

            LogoState.className = "";
            Estado.innerText = "Cargado 👍"

            const rate = data.conversion_rates[currencySym_two];

            rateEl.innerHTML = `1 ${currencySym_one} = ${rate} ${currencySym_two}`
            AmountEl_two.value = (AmountEl_one.value * rate).toFixed(2);
        })
    }

};

// error
function showError(input, message) {
    AmountEl_one.value = 0;
    const fromControl = input.parentElement;
    fromControl.className = "currency error";

    const small = fromControl.querySelector("small");
    small.innerText = message;
};

//Exito
function showSuccess(input) {
    const fromControl = input.parentElement;
    fromControl.className = "currency success"
}


// Events
currencyEl_one.addEventListener("change", calculate);
AmountEl_one.addEventListener("input", calculate);
currencyEl_two.addEventListener("change", calculate);
AmountEl_two.addEventListener("input", calculate);


// Cambiar los símbolos de lugar
swap.addEventListener("click", () => {
    const temp = currencyEl_one.value;
    currencyEl_one.value = currencyEl_two.value;
    currencyEl_two.value = temp;

    calculate();
})
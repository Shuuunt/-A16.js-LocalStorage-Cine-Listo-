const currencyEl_one = document.getElementById("currency-one");
const AmountEl_one = document.getElementById("amount-one");
const currencyEl_two = document.getElementById("currency-two");
const AmountEl_two = document.getElementById("amount-two");

const rateEl = document.getElementById("rate");
const swap = document.getElementById("swap");

// hacer exchange para los rates y actualizar el DOM
function calculate() {
    const currencySym_one = currencyEl_one.value;
    const currencySym_two = currencyEl_two.value;

    fetch(`https://v6.exchangerate-api.com/v6/fdbc5881e41d95f8cb9bf865/latest/${currencySym_one}`)
        .then(res => res.json())
        .then(data => {
        // console.log(data)

        const rate = data.conversion_rates[currencySym_two];

        rateEl.innerHTML = `1 ${currencySym_one} = ${rate} ${currencySym_two}`
        AmountEl_two.value = (AmountEl_one.value * rate).toFixed(2);
    })
};


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
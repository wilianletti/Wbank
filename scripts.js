const convertButton = document.querySelector(".convert-button");
const currencyTo = document.querySelector(".currency-to");

function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value;
    const currencyValueToConvert = document.querySelector(".currency-value");
    const currencyValueConverted = document.querySelector(".currency-value-dolar");
    const currencyFrom = document.querySelector(".currency-from").value;
    const currencyTo = document.querySelector(".currency-to").value;

    const dolarToday = 5.0;
    const euroToday = 6.0;
    const BitcoinToday = 338.199;

    if (currencyTo === "usd") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday);
    }

    if (currencyTo === "eur") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday);
    }

    if (currencyTo === "Bit") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "Bitcoin"
        }).format(inputCurrencyValue / BitcoinToday);
    }
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue) ;
}

function changeCurrency() {
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".currency-img")

    if (currencyTo.value == "usd") {
        currencyName.innerHTML = "Dólar americano"
        currencyImage.src = "./assests/estados-unidos (1) 1.png"
    }
    if (currencyTo.value == "eur") {
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assests/Design sem nome 3.png"
    }


}

currencyTo.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)
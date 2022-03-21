console.log("witam wszystkich developerów");
let fieldElement = document.querySelector(".js-field");
let currencyElement = document.querySelector(".js-currency");
let resultElement = document.querySelector(".js-result");
let formElement = document.querySelector(".js-form");


formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let Euro = 4.6940;
    let Dolar = 4.2375;
    let Funt = 5.5831;

    let field = fieldElement.value
    let currency = currencyElement.value

    let result

    switch (currency) {
        case "EUR":
            result = field / Euro;
            break;
        case "USD":
            result = field / Dolar;
            break;
        case "GBP":
            result = field / Funt;
            break;
    }
    resultElement.innerText = result.toFixed(2)


});


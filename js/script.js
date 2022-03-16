console.log("witam wszystkich developerów");
let fieldElement = document.querySelector(".js-field");
let currencyElement = document.querySelector(".js-currency");
let resultElement = document.querySelector(".js-result");
let formElement = document.querySelector(".js-form");


formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let field = fieldElement.value;
    let currency = currencyElement.value;

    let result = field / currency;

    resultElement.innerText = result.toFixed(2)

    console.log(result);
});


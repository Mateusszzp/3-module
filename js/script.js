{
    function welcome() {
        console.log("Witam wszystkich developerów");
    }
    welcome();
 
    const ShowTheResult = (field, currency) => {
        const Euro = 4.6940;
        const Dolar = 4.2375;
        const Funt = 5.5831;
 
        switch (currency) {
            case "EUR":
                return field / Euro;
 
            case "USD":
                return field / Dolar;
 
            case "GBP":
                return field / Funt;
        }
    };
 
    const updateResultText = (field, currency, result) => {
        const resultElement = document.querySelector(".js-result");
        resultElement.innerText = `${field.toFixed(2)} PLN = ${result.toFixed(2)} ${currency}`
 
    }
    const onFormSubmit = (event) => {
        event.preventDefault();
 
        const fieldElement = document.querySelector(".js-field");
        const currencyElement = document.querySelector(".js-currency");
 
 
 
        const field = +fieldElement.value
        const currency = currencyElement.value
 
        const result = ShowTheResult(field, currency)
 
        updateResultText(field, currency, result)
    };
 
    const init = () => {
        const formElement = document.querySelector(".js-form");
 
        formElement.addEventListener("submit", onFormSubmit);
    };
    init();
 
}

{
    welcome = () => {
        console.log("Witam wszystkich developerów");
    };
    const ShowTheResult = (userValue, currency) => {
        const Euro = 4.6940;
        const Dolar = 4.2375;
        const Funt = 5.5831;

        switch (currency) {
            case "EUR":
                return userValue / Euro;

            case "USD":
                return userValue / Dolar;

            case "GBP":
                return userValue / Funt;
        };
    };
    const updateResultText = (userValue, currency, result) => {
        const resultElement = document.querySelector(".js-result");
        resultElement.innerText = `${userValue.toFixed(2)} PLN = ${result.toFixed(2)} ${currency}`

    };
    const onFormSubmit = (event) => {
        event.preventDefault();

        const userValueElement = document.querySelector(".js-userValue");
        const currencyElement = document.querySelector(".js-currency");

        const userValue = +userValueElement.value
        const currency = currencyElement.value
        const result = ShowTheResult(userValue, currency)
        updateResultText(userValue, currency, result)
    };
    const init = () => {
        const formElement = document.querySelector(".js-form");
        formElement.addEventListener("submit", onFormSubmit);
        welcome();
    };
    init();

}

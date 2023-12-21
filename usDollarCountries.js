//e. Print the country which uses US Dollars as currency.
// Require the library xhr2
let XMLHttpRequest = require('xhr2');

// Create an object of the XMLHttpRequest class
let xhr = new XMLHttpRequest();

// Open the connection
xhr.open('GET', 'https://restcountries.com/v3.1/all');

// Handle the response data
xhr.onload = function () {
    let data = JSON.parse(xhr.responseText);

    // Filter countries that use US Dollars as currency
    let countriesUsingUSD = data.filter(country => {
        // Check if the currencies array includes USD
        return country.currencies && country.currencies.USD;
    });

    // Print the list of countries using US Dollars
    countriesUsingUSD.forEach(country => {
        console.log(country.name.common);
    });
};

// Send the HTTP request
xhr.send();
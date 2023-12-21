//b. Get all the countries with a population of less than 2 lakhs using Filter function
// Require the library xhr2
let XMLHttpRequest = require('xhr2');

// Create an object of the XMLHttpRequest class
let xhr = new XMLHttpRequest();

// Open the connection
xhr.open('GET', 'https://restcountries.com/v3.1/all');

// Handle the response data
xhr.onload = function () {
    let data = JSON.parse(xhr.responseText);

    // Filter countries with a population less than 2 lakhs
    let smallPopulationCountries = data.filter(country => {
        // Convert the population to a number and compare
        return country.population < 200000;
    });

    // Print the list of countries with small population
    smallPopulationCountries.forEach(country => {
        console.log(country.name.common, country.population);
    });
};

// Send the HTTP request
xhr.send();
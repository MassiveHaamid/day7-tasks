//a. Get all the countries from Asia continent /region using Filter function
// Require the library xhr2
let XMLHttpRequest = require('xhr2');

// Create an object of the XMLHttpRequest class
let xhr = new XMLHttpRequest();

// Open the connection
xhr.open('GET', 'https://restcountries.com/v3.1/all');

// Handle the response data
xhr.onload = function () {
    let data = JSON.parse(xhr.responseText);
    
    // Filter countries from Asia continent/region
    let asianCountries = data.filter(country => {
        return country.region === 'Asia';
    });

    // Print the list of Asian countries
    asianCountries.forEach(country => {
        console.log(country.name.common);
    });
};

// Send the HTTP request
xhr.send();
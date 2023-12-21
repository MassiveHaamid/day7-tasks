//c. Print the following details name, capital, flag using forEach function
// Require the library xhr2
let XMLHttpRequest = require('xhr2');

// Create an object of the XMLHttpRequest class
let xhr = new XMLHttpRequest();

// Open the connection
xhr.open('GET', 'https://restcountries.com/v3.1/all');

// Handle the response data
xhr.onload = function () {
    let data = JSON.parse(xhr.responseText);
    
    // Iterate through the countries and print the required details
    data.forEach(country => {
        let name = country.name.common;
        let capital = country.capital[0];
        let flag = country.flags.png;
        console.log("Name:", name);
        console.log("Capital:", capital);
        console.log("Flag:", flag);
    });
};

// Send the HTTP request
xhr.send();
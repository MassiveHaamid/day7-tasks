//d. Print the total population of countries using reduce function
// Require the library xhr2
let XMLHttpRequest = require('xhr2');

// Create an object of the XMLHttpRequest class
let xhr = new XMLHttpRequest();

// Open the connection
xhr.open('GET', 'https://restcountries.com/v3.1/all');

// Handle the response data
xhr.onload = function () {
    let data = JSON.parse(xhr.responseText);
    
    // Use the map function to extract populations from each country
    const populations = data.map(country => country.population);
    
    // Use the reduce function to calculate the total population
    const totalPopulation = populations.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    
    console.log("Total Population:", totalPopulation);
};

// Send the HTTP request
xhr.send();
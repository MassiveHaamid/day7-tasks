/*//a. Get all the countries from Asia continent /region using Filter function
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
--------------------------------------------------------------------
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
------------------------------------------------------------------------
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
------------------------------------------------------------------------
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
------------------------------------------------------------------------
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


*/
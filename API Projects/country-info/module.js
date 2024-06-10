// Fetch and display all countries on page load
fetch('https://restcountries.com/v3.1/all')
    .then(response => response.json())
    .then(countries => {
        showAllCountry(countries);
    })
    .catch(error => console.error('Error fetching all countries:', error));

// Function to display all countries
function showAllCountry(countries) {
    const wrapper = document.querySelector('#wrapper');
    wrapper.innerHTML = ''; // Clear existing content
    countries.forEach(country => {
        let htmlCode = showAllHtml(country);
        wrapper.innerHTML += htmlCode;
    });

    // Add event listeners for "View Details" buttons
    const detailButtons = document.querySelectorAll('.viewDetails');
    detailButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const countryCode = event.target.getAttribute('data-code');
            const country = countries.find(c => c.cca2 === countryCode);
            showModal(country);
        });
    });
}

// Function to generate HTML for a single country
function showAllHtml(country) {
    let { name, flags, cca2, population, capital } = country;

    name = name.common;
    let flag = flags.png;
    let code = cca2;
    let capitalName = capital ? capital[0] : 'N/A'; // Handle missing capital information
    const html = `
        <div class="countryCard">
            <div class="cardHeading">
                <img src="${flag}" alt="${name}" class="countryImage">
                <span class="countryCode">${code}</span>
            </div>
            <h3 class="countryName">${name}</h3>
            <span class="countryCapital">Capital: ${capitalName}</span>
            <span class="countryPopulation">Population: ${population}</span>
            <button class="viewDetails" data-code="${code}">View Details</button>
        </div>
    `;
    return html;
}

// Function to handle search
function search() {
    const searchForm = document.getElementById('form'); // Correctly identify the search form
    searchForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const searchingValue = event.target.countryName.value.toLowerCase();

        fetch(`https://restcountries.com/v3.1/name/${searchingValue}`)
            .then(response => response.json())
            .then(countries => {
                if (countries.status === 404) {
                    // Handle no results found
                    document.querySelector('#wrapper').innerHTML = `<p>No country found with the name "${searchingValue}"</p>`;
                } else {
                    showAllCountry(countries);
                }
            })
            .catch(error => console.error('Error fetching country:', error));
    });
}

// Function to show modal with country details
function showModal(country) {
    const modal = document.getElementById('myModal');
    const span = document.getElementsByClassName('close')[0];

    let { name, flags, cca2, population, capital, region, timezones } = country;

    document.getElementById('modalCountryName').textContent = name.common;
    document.getElementById('modalCountryFlag').src = flags.png;
    document.getElementById('modalCountryCode').textContent = cca2;
    document.getElementById('modalCountryCapital').textContent = capital ? capital[0] : 'N/A';
    document.getElementById('modalCountryPopulation').textContent = population;
    document.getElementById('modalCountryRegion').textContent = region;
    document.getElementById('modalCountryTimezones').textContent = timezones.join(', ');

    modal.style.display = 'block';

    span.onclick = function() {
        modal.style.display = 'none';
    };

}

// Call the search function
search();

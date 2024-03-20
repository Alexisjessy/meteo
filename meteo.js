import config from './config.js';

function getWeatherIcon(conditionCode) {
    switch (conditionCode) {
        case '01d':
        case '01n':
            return 'soleil.png'; 
        case '02d':
        case '02n':
        case '03d':
        case '03n':
        case '04d':
        case '04n':
            return 'nuages.png'; 
       
        default:
            return; 
    }
}

function getWeather(city) {
    const apiKey = config.apiKey;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&lang=fr&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const weatherDiv = document.getElementById('weather');
            const weatherIcon = getWeatherIcon(data.weather[0].icon);
            const temperature = Math.round(data.main.temp); 
            weatherDiv.innerHTML = `
                <h2>Météo à ${data.name}</h2>
                <img src="${weatherIcon}" alt="Weather icon">
                <p><span style="font-weight: bold; text-transform: uppercase";>${data.weather[0].description}</span></p>
                <p>Température: <span style="font-weight: bold;">${temperature} °C</span></p>
                <p>Humidité: <span style="font-weight: bold;"> ${data.main.humidity}%</span></p>
                
            `;
        })
        .catch(error => {
            console.error('An error occurred while retrieving weather data:', error);
        });
}

function updateWeather(city) {
    getWeather(city);
    setInterval(() => {
        getWeather(city);
    }, 3600000);
}

fetch('conf.json')
    .then(response => response.json())
    .then(data => {
        const city = data.city;
        updateWeather(city);
    })
    .catch(error => {
        console.error('An error occurred while retrieving the configuration:', error);
    });

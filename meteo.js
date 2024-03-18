



function getWeather(city) {
const apiKey =  "API_KEY";
    
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&lang=fr&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
           
            const weatherDiv = document.getElementById('weather');
            weatherDiv.innerHTML = `
                <h2>Météo à ${data.name}</h2>
                <p>${data.weather[0].description}</p>
                <p>Température: ${data.main.temp} °C</p>
                <p>Humidité: ${data.main.humidity}%</p>
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

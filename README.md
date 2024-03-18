# Weather Application

## Overview
This Weather Application is a web-based interface designed for users of the public transportation network in several medium-sized cities in France. The application displays real-time weather information on screens integrated into information displays in stations and vehicles.

## Features
- Displays real-time weather information for multiple cities.
- Updates weather data hourly.
- Configurable via a JSON file for city selection.

## Technologies Used
- HTML5
- CSS3
- JavaScript (ES6)

## External APIs
This project utilizes the OpenWeatherMap API to fetch weather data for display.

## File Structure
- `index.html`: Main HTML file for the application.
- `style.css`: CSS file for styling the application.
- `meteo.js`: JavaScript file for fetching weather data and updating the UI.
- `conf.json`: Configuration file for specifying the city for weather information.

## Usage
To run the application, simply open the `index.html` file in a web browser. The weather data will be automatically fetched and displayed for the city specified in the `conf.json` file.

## Configuration
To change the city for weather information, edit the `conf.json` file and specify the desired city. Ensure that the city name matches the naming convention used by the OpenWeatherMap API.

## Contributors
- [Alexis Lacroix](https://github.com/Alexisjessy)

## License
This project is licensed under the [MIT License](LICENSE).

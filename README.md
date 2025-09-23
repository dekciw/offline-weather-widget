## Offline Weather Widget

An offline weather widget built with HTML, CSS, and JavaScript.

The project allows users to search for Russian cities and see mock weather data such as temperature, humidity, wind speed, and weather conditions — all without using paid APIs.

This project was created as a training exercise to practice working with:

- **DOM manipulation in JavaScript**
- **Form handling (search by city)**
- **Conditional rendering (show weather data or "City not found")**
- **Working with arrays of objects (cities data structure)**
- **Basic frontend project structure (HTML + CSS + JS + assets)**

### Features

- **✅ Search for a city by name (case-insensitive)**
- **✅ Display mock weather data:**
  - City name
  - Temperature (°C)
  - Humidity (%)
  - Wind speed (km/h)
  - Weather icon (sun, rain, cloud, snow, wind)
- **✅ Error handling if a city is not found ("City not found" message)**
- **✅ Fully offline — all data is stored locally in a JavaScript file**
- **✅ Responsive, minimal UI styled with CSS**

### Project Structure

```
project-root
 ┣ 📂 img/                # Weather icons (SVG)
 ┣ 📂 fonts/              # Fonts
 ┣ 📜 index.html          # Main HTML file
 ┣ 📜 style.css           # Styles
 ┣ 📜 script.js           # Main logic
 ┣ 📜 russianWeatherData.js # Array with city weather data
```

### How It Works

1. User enters a city name into the search field.
2. The app looks for this city in the cities array (`russianWeatherData.js`).
3. If the city exists, the widget displays weather data (temperature, humidity, wind, icon).
4. If not, the widget shows "City not found".

### Goals of the Project

- Practice building a frontend app without external APIs.
- Understand how to work with JavaScript objects and arrays.
- Learn how to connect multiple JS files using ES Modules.
- Improve DOM skills (finding elements, updating content dynamically).



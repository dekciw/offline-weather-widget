// Подключил массив данных чтобы с ним работать
import { cities } from './russianWeatherData.js';

// Нашел DOM элемент формы и подключил его по id #search-form
const form = document.querySelector('#search-form');

// Нашел элемент DOM импута куда я буду писать и подключил его через класс (.)
const input = document.querySelector('.search__input');

// Подключил обработчик событий, который реагирует на действия при клике
form.onsubmit = submitHandler;

// Подключил метод чтобы страница не обновлялась автоматически
function submitHandler(event) {
	event.preventDefault();

	// Проверка обработчика событий на работоспобность при клике
	if (input.value === '') {
		console.log('Пожалуйста, введите название города');
		return;
	}
	// Поиск первого города из массива без учёта верхнего и нижнего регистра иначе может быть ошибка
	const cityData = cities.find(element => element.city.toLowerCase() === input.value.toLowerCase());

	// Сравниваем если город найден, вызываем searchWeather, иначе выводим "Город не найден" в карточке
	if (cityData) {
		searchWeather(cityData);
	} else {
		document.getElementById('location-city').textContent = 'Город не найден';
	}
}

function searchWeather({ icon, temperature, city, humidity, wind } = {}) {
	// Нашел элемент DOM картинку в центре и присвоил параметр weatherImage
	const weather__image = document.getElementById('weather-image');
	weather__image.src = `./img/${icon}.svg`;

	// Нашел элемент DOM картинка погоды  в центре и происвоил параметр temperature
	const temperature__value = document.getElementById('temperature-value');
	temperature__value.textContent = `${temperature} °C`;

	// Нашел элемент DOM город в центре и происвоил параментр city
	const location__city = document.getElementById('location-city');
	location__city.textContent = city;

	// Нашел элемент DOM значение влажно и происвоил пармаетр humidity
	const humidityElement = document.getElementById('humidity-value');
	humidityElement.textContent = `${humidity} %`;

	// Нашел элемент DOM значение скорости ветра и происвоил пармаетр wind
	const windElement = document.getElementById('wind-value');
	windElement.textContent = `${wind} км/ч`;
}

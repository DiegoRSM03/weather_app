require('../sass/style.sass');

import { Weather } from './Weather';
import { UI } from './UI';

const weather = new Weather('London','UK');
const ui = new UI();

async function fetchWeather () {
    const weatherJson =  await weather.getWeather();
    ui.render(weatherJson);
}

document.getElementById('consult').addEventListener('click', (e) => {
    let city = document.getElementById('input-city').value;
    let country = document.getElementById('input-country').value;

    weather.setWeather(city, country);
    fetchWeather();
    console.log(`${city},${country}`);

    e.preventDefault();
});

document.addEventListener('DOMContentLoaded', fetchWeather);
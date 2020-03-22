require('../sass/style.sass');

import { Weather } from './Weather';
import { UI } from './UI';

const weather = new Weather('London','UK');
const ui = new UI();

async function fetchWeather () {
    const weatherJson =  await weather.getWeather();

    console.log(weatherJson);
    ui.render(weatherJson);
}

document.addEventListener('DOMContentLoaded', fetchWeather)
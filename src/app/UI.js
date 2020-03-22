export class UI {

    constructor () {
        this.city = document.getElementById('city');
        this.country = document.getElementById('country');
        this.tempCurrent = document.getElementById('temperature-current');
        this.tempMax = document.getElementById('temperature-max');
        this.tempMin = document.getElementById('temperature-min');
        this.humidity = document.getElementById('humidity');
        this.wind = document.getElementById('wind');
        this.pressure = document.getElementById('pressure');
    }

    render (weather) {
        this.city.innerHTML = weather.name;
        this.country.innerHTML = weather.sys.country;

        this.tempCurrent.innerHTML = 'Current: ' + weather.main.temp;
        this.tempMax.innerHTML = 'Maximum: ' + weather.main.temp_max;
        this.tempMin.innerHTML = 'Minimum: ' + weather.main.temp_min;

        this.humidity.innerHTML = 'Humidity: ' + weather.main.humidity;
        this.wind.innerHTML = 'Wind Speed: ' + weather.wind.speed;
        this.pressure.innerHTML = 'Pressure: ' + weather.main.pressure;
    }

}
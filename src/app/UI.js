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

        this.backgroundCold = 'linear-gradient(to left, #56CCF2, #2F80ED)';
        this.backgroundHot = 'linear-gradient(to left, #f12711, #f5af19)';
        this.backgroundTempered = 'linear-gradient(to left, #34e89e, #0f3443)';
    }

    render (weather) {
        this.city.innerHTML = weather.name;
        this.country.innerHTML = weather.sys.country;
        
        if (weather.main.temp > 20) {
            document.getElementById('weather').style.background = this.backgroundHot;
        } else if (weather.main.temp > 10) {
            document.getElementById('weather').style.background = this.backgroundTempered;
        } else {
            document.getElementById('weather').style.background = this.backgroundCold;
        }

        this.tempCurrent.innerHTML = 'Current: ' + weather.main.temp + ' °C';
        this.tempMax.innerHTML = 'Maximum: ' + weather.main.temp_max + ' °C';
        this.tempMin.innerHTML = 'Minimum: ' + weather.main.temp_min + ' °C';

        this.humidity.innerHTML = 'Humidity: ' + weather.main.humidity + '%';
        this.wind.innerHTML = 'Wind Speed: ' + weather.wind.speed + ' km/h';
        this.pressure.innerHTML = 'Pressure: ' + weather.main.pressure + ' nw';
    }

}
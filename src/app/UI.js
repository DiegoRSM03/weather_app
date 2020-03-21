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

    }
    
}
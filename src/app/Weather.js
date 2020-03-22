export class Weather {

    constructor (city, country) {
        this.city = city;
        this.country = country;
        this.apiKey = 'be088d78f70b45920e0efe008827f868';
    }

    async getWeather () {
        let URI = `https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}&appid=${this.apiKey}&units=metric`;
        let res = await fetch(URI);
        let data = res.json();
        return data;
    }

    setWeather (city, country) {
        this.city = city;
        this.country = country;
    }

}
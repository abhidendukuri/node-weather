let request = require('request');
let argv = require('yargs').argv;

let apiKey = 'ea15c27cb5ae3d455659036f86e2aa6a';
let city = argv.c || 'austin';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`

request(url, function(err, response, body) {
    if(err) {
        console.log('error: ', error);
    } else {
        console.log('body: ', body);
        let weather = JSON.parse(body)
        let message = `\nIt's ${weather.main.temp} in ${weather.name}!`
        console.log(message)
    }
});
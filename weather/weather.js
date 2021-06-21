const request = require('request');

var getWeather = (lat, lng, callback) => {
  request({
    url: `https://api.forecast.io/forecast/24f92aad6168a38bdcb63eb39a68e0a3/${lat},${lng}`,
    json: true
  }, (error, response, body) => {
    if (error) {
      callback('Unable to connect to Forecast.io servers.');
    } else if (response.statusCode === 400) {
      callback('Unable to fetch weather!');
    } else if (response.statusCode === 200) {
      callback(undefined, {
        weather: body.currently.temperature,
        apparentWeather: body.currently.apparentTemperature
      });
    }
  });
}

module.exports.getWeather = getWeather;

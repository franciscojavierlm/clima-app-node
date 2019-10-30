const axios = require('axios');


const getClima = async( lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=d7a61070fca94e47ffbc67e47122a82b&units=metric`);

    return resp.data.main.temp;
}


module.exports = {
    getClima
}
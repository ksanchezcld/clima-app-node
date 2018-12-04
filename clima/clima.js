const axios = require('axios');

const getClima = async(lat, lng) => {

    let resp = await axios.get(`api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=437f25ce93c9cc818f4a9afabe8d63eb`)

    return resp.data.main.temp;

}

module.exports = {
    getClima
}
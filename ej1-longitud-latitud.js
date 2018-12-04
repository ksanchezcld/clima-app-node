const axios = require('axios');
const colors = require('colors')

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

console.log(argv.direccion);

let encodedUrl = encodeURI(argv.direccion)

axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedUrl}&key=AIzaSyDyJPPlnIMOLp20Ef1LlTong8rYdTnaTXM`)
    .then(resp => {
        //console.log(JSON.stringify(resp.data, undefined, 2));
        let status = resp.status;
        if (status === 200) {
            console.log('================'.yellow);
            console.log(' Status ==> OK'.rainbow);
            console.log('================'.yellow);
        }

        let location = resp.data.results[0]
            //    console.log(location);
        console.log('Direccion'.green, '==>'.yellow, location.formatted_address);
        console.log('Latitud'.green, '==>'.yellow, location.geometry.location.lat);
        console.log('Longitud'.green, '==>'.yellow, location.geometry.location.lng);

    })
    .catch(e => console.log('ERROR!!!'.rainbow, e));
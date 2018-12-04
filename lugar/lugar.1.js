const axios = require('axios');
const colors = require('colors');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;


//console.log(argv.direccion);

let encodedUrl = encodeURI(argv.direccion);

axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedUrl}&key=AIzaSyDyJPPlnIMOLp20Ef1LlTong8rYdTnaTXM`)
    .then(resp => {

        let status = resp.status;
        if (status === 200) {
            console.log('================'.yellow);
            console.log(' Status ==> OK'.rainbow);
            console.log('================'.yellow);
        }

        let location = resp.data.results[0];
        let coors = location.geometry.location;

        console.log('Country: '.green, location.formatted_address);
        console.log('Longitud: '.green, coors.lat);
        console.log('Latitud: '.green, coors.lng);

        //console.log(JSON.stringify(resp.data, undefined, 2));
        //console.log(data.status);
    })
    .catch(e => console.log('Error!!!', e));



/*

const getLugarLatLng = async(direccion) => {

    let encodedUrl = encodeURI(direccion)

    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedUrl}&key=AIzaSyDyJPPlnIMOLp20Ef1LlTong8rYdTnaTXM`)

    if (resp.data.status === 'ZERO_RESULTS') {
        throw new Error(`No hay resultados para la ciudad ${ direccion }`.yellow);
    }

    //console.log(JSON.stringify(resp.data, undefined, 2));
    let status = resp.status;
    if (status === 200) {
        console.log('================'.yellow);
        console.log(' Status ==> OK'.rainbow);
        console.log('================'.yellow);
    }

    let location = resp.data.results[0]
    let coors = location.geometry.location;

    return {
        direccion: location.formatted_address,
        latitud: coors.lat,
        longitud: coors.lng
    }

}
module.exports = {
    getLugarLatLng
}
*/

/*

[RESULT OF console.log(resp.data);]

data:
   { results:
      [ { address_components:
           [ { long_name: 'Haiti',
               short_name: 'HT',
               types: [ 'country', 'political' ] } ],
          formatted_address: 'Haiti',
          geometry:
           { bounds:
              { northeast: { lat: 20.1282, lng: -71.621754 },
                southwest: { lat: 17.9422, lng: -74.6082 } },
             location: { lat: 18.971187, lng: -72.285215 },
             location_type: 'APPROXIMATE',
             viewport:
              { northeast: { lat: 20.1282, lng: -71.621754 },
                southwest: { lat: 17.9422, lng: -74.6082 } } },
          place_id: 'ChIJEbvLf_PGto4R0_ZUTLI4FLU',
          types: [ 'country', 'political' ] } ],
     status: 'OK' } }
*/
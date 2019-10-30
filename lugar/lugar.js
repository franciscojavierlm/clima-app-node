const axios = require('axios');


const getLugarLatLng = async(dir) => {

    const encodedUrl =  encodeURI(dir);
  

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedUrl}`,
        headers: {'X-RapidAPI-Key':'9c3a4cfe6amshf502eb7850f251dp10cc41jsn3c1f91ec2ea4'}
    });


    const resp = await instance.get();

    if (resp.data.Results.length === 0){
        throw new Error(`No hay resultado para ${dir}`);
    }

    const data      = resp.data.Results[0];
    const direccion = data.name; 
    const lat = data.lat; 
    const lng = data.lon; 


    return {
        direccion,
        lat,
        lng
    }
}



module.exports = {
    getLugarLatLng 
}
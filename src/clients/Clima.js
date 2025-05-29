import axios from "axios";
const APIKEY = '030dd83f092a99dfb166cc7000343e60'

const obtenerClimaUsurio = async (lat, lon) => {
    const respuesta = axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKEY}`)
    .then(res => res.data)
    return respuesta;    
};

export const obtenerClimaUsurioFachada = async (lat, lon) => {
    return await obtenerClimaUsurio(lat, lon);
};

const obtenerClimaPorPais = async (pais) => {
    const respuesta = axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${pais}&appid=${APIKEY}`)
    .then(res => res.data)
    .catch(err => console.log("Error: ", err))
    return respuesta;
}

export const obtenerClimaPorPaisFachada = async (pais) => {
    return await obtenerClimaPorPais(pais);
};


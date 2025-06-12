import axios from "axios";

const consumirPokemon = async (id) => {
    const respuesta = axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then(rpt => rpt.data)
    return respuesta
}

const obtenerObjetoPokemon = async(numero) =>{
    const data  = await consumirPokemon(numero)
    console.log(data.name);
    const pokemon = {
        nombre: data.name,
        id: data.id
    }    
    return pokemon
}

const obtenerArregloNumerico = (longitud) => {
    const vector = [];
    for (let i = 0; i < longitud; i++) {
        vector[i] = obtenerAletorio(1, 649)
    }
    return vector;
}

function obtenerAletorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

const obtenerArreloPokemon = async (arregloNumerico) => {
    const vector = [];
    for (let numero of arregloNumerico) {
        const objetoPokemon = await obtenerObjetoPokemon(numero) 
        vector.push(objetoPokemon); 
    }

    return vector;
}

const obtenerOpciones = async (longitud) => {
    const vector = obtenerArregloNumerico(longitud);
    const vectorObjeto = await obtenerArreloPokemon(vector);
    return vectorObjeto;    
}

//Funciones fachada

export const obtenerOpcionesFachada = async (longitud) =>{
    return await obtenerOpciones(longitud)
}

export const obtenerAletorioFachada = (min, max) => {
    return obtenerAletorio(min, max)
}
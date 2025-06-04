import axios from "axios";

const consumirPokemon = async (id) =>{
    const respuesta = axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then(rpt => rpt.data)
    return respuesta
}

export const fachadaConsumirPokemon = async (id) =>{
    return await consumirPokemon(id)
}
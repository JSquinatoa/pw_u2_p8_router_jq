<template>
    <h1>Selecciona el Pokemon correcto</h1>
    <PokemonImage :pokemonId="649" :mostrarImagen="true"/>
    <PokemonOptions v-if="this.estalista" :pokemons="vectorPokemon"/>  
</template>

<script>
import PokemonImage from "@/components/PokemonImage.vue"
import PokemonOptions from "@/components/PokemonOptions.vue"
import { obtenerOpcionesFachada } from "@/clients/PokemonClient.js";

export default {

    components:{
        PokemonImage,
        PokemonOptions
    },

    data(){
        return{
            vectorPokemon: null,
            estalista: false
        }
    },

    methods:{
        async iniciarJuego(){
            const opciones = await obtenerOpcionesFachada(4);
            this.vectorPokemon = opciones   
            console.log(this.vectorPokemon);
            this.estalista = true        
            return opciones    
        }
    }, 

    mounted(){
        this.iniciarJuego()
    }

}
</script>


<style>
</style>
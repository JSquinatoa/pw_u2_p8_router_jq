<template>

    <h1>Selecciona el Pokemon correcto</h1>
    <h1>{{mensaje}}</h1>
    <PokemonImage v-if="pokemon" :pokemonId="pokemon.id" :mostrarImagen="mostrar" ref="miHjo1"/>
    <PokemonOptions @seleccionado="recibioPadre($event)" :pokemons="vectorPokemon" ref="miHjo2"/> 
     
    <button @click="comunicarHijo()">Comunicar Hjo</button>
</template>

<script>
import PokemonImage from "@/components/PokemonImage.vue"
import PokemonOptions from "@/components/PokemonOptions.vue"
import { obtenerOpcionesFachada, obtenerAletorioFachada } from "@/clients/PokemonClient.js";

export default {

    components:{
        PokemonImage,
        PokemonOptions
    },

    data(){
        return{
            vectorPokemon: [],
            pokemon: null,
            mostrar: false,
            mensaje: null
        }
    },

    methods:{
        async iniciarJuego(){
            const opciones = await obtenerOpcionesFachada(8);
            this.vectorPokemon = opciones   
            console.log(this.vectorPokemon);

            // Voy a elegir un pokemon de los 4 
            let pokemonCorrecto = obtenerAletorioFachada(0, this.vectorPokemon.length)
            this.pokemon = this.vectorPokemon[pokemonCorrecto]
            console.log(this.pokemon);            
            
        },

        recibioPadre(id){
            console.log("Mensaje Recibido desde Hijo");
            console.log(id);            

            this.validarRespuesta(id.atributo1)        
        },

        validarRespuesta(opcionSeleccionada){
            if (opcionSeleccionada === this.pokemon.id) {
                this.mensaje = "Corecto Acertaste el Pokemon"  
                this.mostrar=true                                                  
            }else{
                this.mensaje = "Perdiste el correcto es: " + this.pokemon.nombre
            }
        },

        comunicarHijo(){
            console.log(this.$refs.miHjo1.mensaje1);            
            this.$refs.miHjo1.mensaje1 = "Nuevo mensaje 1"

            console.log(this.$refs.miHjo2.mensaje2);            
            this.$refs.miHjo2.mensaje2 = "Nuevo mensaje 2"
        }
    }, 

    mounted(){
        this.iniciarJuego()
    }

}
</script>


<style>
</style>
<template>
    <div class="image-container">
        <img v-if="!mostrar" class="ocultar" :src="imagenFuente" alt="No se puede renderizar Pokemon">

        <img v-if="mostrar" :src="imagenFuente" alt="No se puede renderizar Pokemon">
    </div>
</template>

<script>
export default {

    props:{
        pokemonId:{
            type: Number,
            required: true
        },
        mostrarImagen:{
            type: Boolean,
            required: true,
            default: false
        }
    },

    data(){
        return{
            mostrar: this.mostrarImagen
        }
    },
    
    computed:{
        imagenFuente(){
            return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.pokemonId}.svg`
        }
    }

}
</script>

<style scoped>
img{
    height: 200px;
    position: absolute;
    right: calc(50% - 100px);
}

.ocultar{
    filter: brightness(0);
}

.image-container{
    height: 200px;
}
</style>
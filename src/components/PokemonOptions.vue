<template>
    {{mensaje2}}
    <div class="options-container">
    
        <ul>        
            <li @click="comunicarClick(pokemon.id)" v-for="pokemon in pokemons" :key="pokemon.id" > {{pokemon.nombre}} </li>
        </ul>

    </div>
</template>

<script>

export default {

    props:{
        pokemons:{
            type: Array,
            required: true
        }
    },

    data(){
        return{
            mensaje2: "mensaje2"
        }
    },

    methods:{
        comunicarClick(id){
            console.log("Click...");    
            console.log(id);           
            const objetoEnviado = {
                atributo1: id,
                atributo2: "John",
                atributo3: true
            } 
            this.$emit('seleccionado', objetoEnviado)
        }
    }

}
</script>

<style>

.options-container{
    display: flex;
    justify-content: center;
}

ul{
    list-style: none;    
}

li{
    background-color: rgb(159, 179, 196);
    border-radius: 5px;
    border: 1px solid blanchedalmond;
    cursor: pointer;
    margin-bottom: 10px;
    width: 350px;
    transition: all 0.15s ease;
}

li:hover{
    background-color: rgba(159, 179, 196, 0.7);
}

</style>
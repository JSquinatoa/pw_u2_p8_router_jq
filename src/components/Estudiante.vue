<template>
    <div class="container">

        <label for="id_nombre">Nombre: </label>
        <input id="id_nombre" type="text" v-model="nuevoNombre">

        <label for="id_apellido">Apellido: </label>
        <input id="id_apellido" type="text" v-model="nuevoApellido">

        <label for="id_edad">Edad: </label>
        <input id="id_edad" type="number" v-model="nuevaEdad">
    
        <label for="id_genero">Género: </label>
        <input id="id_genero" type="text" v-model="nuevoGenero">
 
        <label for="id_telefono">Teléfono: </label>
        <input id="id_telefono" type="text" v-model="nuevoTelefono">

        <button v-on:click="agregarEstudiante()">Agregar Estudiante</button>

        <button @click="obtenerPathVaraible()">Path Variable</button>
        <ul>
            <li v-for="{nombre, apellido, edad, genero, telefono} in lista" :key="nombre"> Nombre: {{nombre}} - Apellido: {{apellido}} - edad: {{ edad }} - género: {{ genero }} - teléfono: {{ telefono }}</li>
        </ul>

    </div>  
</template>

<script>
export default {
    data(){
        return{
            nuevoNombre: '',
            nuevoApellido: '',
            nuevaEdad: 0,
            nuevoGenero: '',
            nuevoTelefono: '',
            lista: [
                {nombre:"John", apellido:"Quinatoa", edad:23, genero: "masculino", telefono:"09987215076"},
                {nombre:"Steven", apellido:"Guerrero", edad:23, genero: "masculino", telefono:"0995369874"},
                {nombre:"Naidelin", apellido:"Tabango", edad:21, genero: "femenino", telefono:"0991239856"},
                {nombre:"Brigith", apellido:"Mañay", edad:21, genero: "femenino", telefono:"0991567894"},
                {nombre:"Carmen", apellido:"Guerrero", edad:40, genero: "femenino", telefono:"09914562369"},
                {nombre:"Maria", apellido:"Puetate", edad:40, genero: "femenino", telefono:"0991234785"},
                {nombre:"Marco", apellido:"Quinatoa", edad:45, genero: "masculino", telefono:"0991985632"},
            ]
        }
    },
    methods:{
        agregarEstudiante(){
            const nuevo = {
                nombre: this.nuevoNombre,
                apellido: this.nuevoApellido,
                edad: this.nuevaEdad,
                genero: this.nuevoGenero,
                telefono: this.nuevoTelefono
            }
            /* this.lista.unshift(nuevo); */
            this.lista.push(nuevo);
            
        },
        obtenerPathVaraible(){
            const cedula = this.$route.params.cedula
            console.log("Cedula", cedula);

            const anio = this.$route.query.anio;
            console.log("Año: ", anio);
            const mes = this.$route.query.mes;
            console.log("Mes: ", mes);         
        },

        beforeCreate(){
        console.log('BeforeCreate');        
        },
        created(){
            console.log('Create');        
        },
        beforeMount(){
            console.log('beforemounted');        
        },
        mounted(){
            console.log('mounted'); 
            const cedula = this.$route.params.cedula
            console.log("Cedula", cedula);

            const anio = this.$route.query.anio;
            console.log("Año: ", anio);
            const mes = this.$route.query.mes;
            console.log("Mes: ", mes);        
        },
        beforeUpdate(){
            console.log('beforeUpdate');        
        },
        updated(){
            console.log('updated');        
        },
        beforeUnmount(){
            console.log('beforeUnmount');        
        },
        unUnmounted(){
            console.log('unUnmounted');        
        }
    
    },
    
}
</script>

<style scoped>
.container{
    background: #f7f1f1;
    border: 1px solid;
    border-radius: 12px;
    max-width: 1000px;
    margin: 50px auto;    
    padding: 30px;
}

label{
    display: block;
    color: #333;
    text-align: left;
}

input{
    background: #4e91f9;
    color: #fff;
    width: 97%;
    border-radius: 8px;
    margin-bottom: 20px;
    border: 1px solid #ddd;
    padding: 10px 15px;
}

button{
    background: #4e91f9;
    color: #fff;
    padding: 12px 20px;
    border: none;
    border-radius: 8px;
    font-size: 20px;
    cursor: pointer;
    width: 400px;
}

ul{
    list-style: none;
    margin-top: 30px;
}

li{
    background: #f8f9fa;
    padding: 15px;
    border-radius: 8px;
    margin-bottom: 8px;
    color: #333;
    font-size: 20px;
    text-transform: capitalize;
}

</style>
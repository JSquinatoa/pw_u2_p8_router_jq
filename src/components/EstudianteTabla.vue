<template>
    <div class="container">

        <div v-show="mostrar">
            <h1>Estudiante Guardado</h1>
        </div>

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

        <button id="boton" v-on:click="agregarEstudiante()">Agregar Estudiante</button>

        <table>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Edad</th>
                    <th>Genero</th>
                    <th>Telefono</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="{nombre, apellido, edad, genero, telefono} in lista" :key="nombre">
                    <td>{{nombre}}</td>             
                    <td>{{apellido}}</td>             
                    <td>{{edad}}</td>             
                    <td>{{genero}}</td>             
                    <td>{{telefono}}</td>             
                    <td id="col_boton"><button>Ver</button></td>             
                </tr>
            </tbody>
        </table>

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
            ],
            mostrar: false,
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
            this.mostrar = true     
            
            setTimeout(() => {
                this.mostrar = false
            }, 3000); //miliseungods
            this.limpiar()
            
        },

        limpiar(){
            this.nuevoNombre = ''
            this.nuevoApellido= ''
            this.nuevaEdad = 0
            this.nuevoGenero = ''
            this.nuevoTelefono=''
        }
    }
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

#boton{
    background: #4e91f9;
    color: #fff;
    padding: 12px 20px;
    border: none;
    border-radius: 8px;
    font-size: 20px;
    cursor: pointer;
    width: 400px;
}

table{
    margin-top: 40px;
    width: 100%;
    border: 1px solid;
    border-collapse: collapse;
}

th,
tr,
td{
    border: 1px solid;
    text-transform: capitalize;
    text-align: left;
}

th{
    text-align: center;
}

td{
    padding: 3px 25px;
}

tbody tr:hover{
    background: #dbd1d1;
}

thead{
    background: rgb(216, 211, 211);
}

</style>
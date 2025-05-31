<template>
  <div class="container">
    <h1>Bibilioteca John Quinatoa</h1>
    <div class="inputs">
        <p type="Titulo: "><input type="text" v-model="nuevoTitulo" placeholder="Ingrese el Libro">
        <span v-if="mensaje.titulo">{{mensaje.titulo}}</span></p>

        <p type="Autor: "><input type="text" v-model="nuevoAutor" placeholder="Ingrese el Autor">
        <span v-if="mensaje.autor">{{mensaje.autor}}</span></p>

        <p type="Año: "><input type="date" v-model="nuevoAnio" >
        <span v-if="mensaje.anio">{{mensaje.anio}}</span></p>

        <p type="Editorial: "><input type="text" v-model="nuevoEditorial" placeholder="Ingrese la Editorial">
        <span v-if="mensaje.editorial">{{mensaje.editorial}}</span></p>

        <p type="Número de páginas: "><input type="number" v-model="nuevasPaginas">
        <span v-if="mensaje.paginas">{{mensaje.paginas}}</span></p>

        <button @click="agregarLibro()">Agregar Libro</button>
    </div>
    <div v-if="mostrar">
        <h1> {{mensajeFinal}}</h1>
    </div>
    <div class="info">
        <table>
            <thead>
                <tr>
                    <th width="30%">Titulo</th>
                    <th width="20%">Autor</th>
                    <th width="20%">Año</th>
                    <th width="20%">Editorial</th>
                    <th width="10%">Páginas</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="{titulo, autor, anio, editorial, paginas} in libros" :key="titulo">
                    <td class="border_rigth">{{titulo}}</td>
                    <td class="border_rigth">{{autor}}</td>
                    <td class="border_rigth">{{anio}}</td>
                    <td class="border_rigth">{{editorial}}</td>
                    <td >{{paginas}}</td>
                </tr>
            </tbody>
        </table>
    </div>
  </div>
</template>

<script>
import { onUnmounted } from 'vue';
export default {
    data(){
        return{
            libros: [
                {titulo: "Harry Potter y la piedra filosofal", autor: "J.K. Rowling", anio: "1997-06-26", editorial: "Bloomsbury", paginas: 223},
                {titulo: "Cien años de soledad", autor: "Gabriel García Márquez", anio: "1967-05-30", editorial: "Sudamericana", paginas: 471},
                {titulo: "1984", autor: "George Orwell", anio: "1949-06-08", editorial: "Secker & Warburg", paginas: 328}
            ],
            nuevoTitulo: null,
            nuevoAutor: null,
            nuevoAnio: null,
            nuevoEditorial: null,
            nuevasPaginas: null,
            mostrar: false,
            mensaje:{
                titulo: null,
                autor: null,
                anio: null,  
                editorial: null,
                paginas: null         
            },
            mensajeFinal: null 
        }
    },
    methods:{
        agregarLibro(){
            if (this.validarEntradas()) {
                
                const nuevoLibro = {
                    titulo: this.nuevoTitulo,
                    autor: this.nuevoAutor, 
                    anio: this.nuevoAnio, 
                    editorial: this.nuevoEditorial, 
                    paginas: this.nuevasPaginas
                }
                
                this.libros.unshift(nuevoLibro);
                this.mostrar = true
                this.mensajeFinal="Libro Guardado Correctamente"
                setTimeout(() => {
                    this.mostrar = false               
                }, 3500)                
                this.limpiarCampos()
            }
        },

        limpiarCampos(){   
            this.nuevoTitulo = null
            this.nuevoAutor = null
            this.nuevoAnio = null
            this.nuevoEditorial = null
            this.nuevasPaginas = null     

            this.mensaje.titulo = null
            this.mensaje.autor = null
            this.mensaje.anio = null
            this.mensaje.editorial = null
            this.mensaje.paginas = null
        },

        validarEntradas(){
            try {              

                let validar = this.mensaje.titulo.primero
                let numero = 5

                if (this.nuevoTitulo === null) {   
                    this.mensaje.titulo = "Titulo es Obligatorio"
                    numero--
                }

                if (this.nuevoAutor === null) {   
                    this.mensaje.autor = "Autor es Obligatorio"
                    numero--
                }

                if (this.nuevoAnio === null) {   
                    this.mensaje.anio = "Año es Obligatorio"
                    numero--
                }

                if (this.nuevoEditorial === null) {   
                    this.mensaje.editorial = "Editorial es Obligatorio"
                    numero--
                }

                if (this.nuevasPaginas === null) {   
                    this.mensaje.paginas = "Número de páginas es Obligatorio"
                    numero--
                }

                if (numero === 5) {                
                    return true
                }else{
                    return false
                }
            } catch (error) {
                console.error("Error ha ocurrido un problema");
                console.error(error);               
                this.mensajeFinal = "Ha ocurrido un error en el sistema";
                this.mostrar = true
                setTimeout(() => {
                    this.mostrar = false
                }, 2500);
                
            }

        }
    },

}
</script>

<style scoped>


.container{
    border: 1px solid black;
    padding: 25px;
    margin: 10px 100px; 
    border-radius: 10px;
    background-color: beige;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 25px;
}

p::before{
    display: block;
    content: attr(type);
    letter-spacing: 2px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    text-transform: capitalize;
}

.inputs{
    border: 8px double ;
    width: 50%;
    display: flex;
    flex-direction: column;
    padding: 0 50px;
    border-radius: 0 50px;
    background-color: #542d2d;
    color: white;
}

input{
    width: 100%;
    height: 18px;
    border: none;
    outline: none;
    background-color: #ffffff;
    padding: 5px;
    font-size: 18px;
}

input[type=date]{
    letter-spacing: 5px; 
}

input:focus{
    border-bottom: 3px solid ;
}

h1{
    margin: 0;
}

button{
    margin: 10px 0 25px;
    height: 30px;
    border-radius: 25px;
    box-shadow: 4px 4px rgba(0, 0, 0, 0.5);
    background-color: #4A4A4A;
    color: white;
    text-transform: uppercase;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    font-size: 15px;
    letter-spacing: 3px;
    font-weight: bold;
}

button:active{
    background-color: #3a3a3a;
    box-shadow: 3px 3px rgba(0, 0, 0, 0.5);
}

.info {
  width: 90%;
  margin: 20px auto;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
}

table {
  width: 100%;
  border-collapse: collapse;
  font-family: 'Segoe UI', sans-serif;
  font-size: 15px;
  text-align: left;
}

table thead {
  background-color: #542d2d;
  color: #fff;
  text-transform: uppercase;
  text-align: center;
}

table th{
    border: 1px solid;
}

table th,
table td {
  padding: 12px 16px;
  word-wrap: break-word;  
}

table tbody tr:hover {
  background-color: #e3d0d0;
  border-bottom: 2px solid #533c3c5b;
  transition: background-color 0.2s ease-in-out;
}

table td {
  text-transform: capitalize;
}

.border_rigth{
    border-right: 1px solid black;
}
</style>
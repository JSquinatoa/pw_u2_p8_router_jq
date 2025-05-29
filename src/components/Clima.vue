<template>
    <div :class="`container bgestilo ${fondo}`">
        <h1>API para Consultar el clima</h1>
        <div class="tarjeta_clima">
            <div class="tarjeta_titulo">
                <h1 class="pais"> {{pais}} </h1>
                <div class="trarjeta_descripcion">
                    <h2 class="clima">{{clima}}</h2>
                    <h3 class="temperatura"> {{isCelsius? `${temperatura.celsius} °C`:`${temperatura.fahrenheit} °F`}} </h3>
                </div>
            </div>

            <div class="tarjeta_info">
                <img class="tarjeta_img" :src="imagen" alt="No hay imagen">
                <ul class="tarjeta_ul">
                    <li class="tarjeta_li">Coordenadas: 
                       <span> Longitud: {{ coordenadas.lon }} / Latitud: {{ coordenadas.lat }} </span>                  
                    </li>
                    <li class="tarjeta_li">Presión:  <span>{{ presion }} hPa</span> </li>
                    <li class="tarjeta_li">Humedad:  <span>{{ humedad }}% </span></li>
                    <li class="tarjeta_li">Velociadad del viento:  <span>{{ viento }} m/s </span></li>
                    <button class="tarjeta_boton" @click="isCelsius=!isCelsius">Cambiar Medida</button>
                </ul>
            </div>

            <div class="tarjeta_consulta">
                <input type="text" v-model="inputPais" placeholder="Escribe un pais...">
                <button class="boton_consultar" @click="obtenerClima()">Consultar</button>
            </div>

        </div>
    </div>
</template>

<script>
import { obtenerClimaUsurioFachada, obtenerClimaPorPaisFachada } from "../clients/Clima.js";

export default {
    data() {
        return {
            climaRes: {},  
            /*Varaibles que se ocupa para llenar la información*/
            pais: '',
            clima: '',
            temperatura: 0,
            coordenadas: '',
            presion: 0,
            isCelsius: true,
            humedad: '',
            viento: '',
            imagen: '',
            inputPais: '',
            fondo: '',
        }
    },

    methods: {
        obtenerCoordenadasUsuario() {
            navigator.geolocation.getCurrentPosition(
                async (pos) => {
                    this.climaRes = await obtenerClimaUsurioFachada(pos.coords.latitude, pos.coords.longitude)         
                    this.desestructurarClimRest(this.climaRes)                                                                                                               
                },
                (error) => {
                    console.error('Error al obtener la ubicación:', error);
                }
            )
            
        },
        
        desestructurarClimRest({name, weather, main, coord, wind}){
            this.pais = name;
            this.clima = weather[0].description;
            this.temperatura = {
                    celsius: (main.temp - 273.15).toFixed(1),
                    fahrenheit: ((main.temp - 273.15) * 9/5 + 32).toFixed(1)
            };
            this.coordenadas = coord;
            this.presion = main.pressure;
            this.humedad = main.humidity
            this.viento = wind.speed
            this.imagen = `https://openweathermap.org/img/wn/${weather[0].icon}@4x.png`
            this.fondo = this.obtenerFondo(weather[0].id)
        },

        async obtenerClima(){  
            this.climaRes = await obtenerClimaPorPaisFachada(this.inputPais)   
            if (this.climaRes) {                
                this.desestructurarClimRest(this.climaRes)
            }else{                
                let aux = this.pais
                this.pais = 'Pais no encontrado'                                
                setTimeout(() => {
                    this.pais = aux
                }, 3000);
            }

            this.inputPais = ''            
        },

        obtenerFondo(id) {
            if (id >= 200 && id <= 232) return 'thunderstorm';
            if (id >= 300 && id <= 321) return 'rain';
            if (id >= 500 && id <= 531) return 'rain';
            if (id >= 600 && id <= 622) return 'snow';
            if (id >= 700 && id <= 781) return 'atmosphere';
            if (id === 800) return 'clear';
            if (id >= 801 && id <= 804) return 'clouds';
            return 'default';
        }

    },

    mounted(){
        this.obtenerCoordenadasUsuario();        
    }


}
</script>

<style scoped>
.container {
    background-image: url('https://www.centrodebiotecnologia.udec.cl/cdn/shop/articles/Plantilla_para_fotos_de_portada_CB_55_1600x.png?v=1711476284');
    height: 100vh;
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    transition: background-image 1.0s ease-in-out;
}

.thunderstorm {
    background-image: url('https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExbWxtMmZmZmJvczFjdzlsa3EzbjkyNmhmeDRrMXI0ZnRjZmtsM3Z6ZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/8xY1YYpEZ4dws/giphy.gif');
}

.rain {
    background-image: url('https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExa2R6djJtdnJ6MHZpYXI2am4zZHZjaHEydHR6MnZrNXplcmNvdHVrdyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xTcnT45z6H5gxFYZZS/giphy.gif');
}

.snow {
    background-image: url('https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExbnAxY2hodWo2aHNrZWlhcXNpYmc2dzJib3l3bzZpNmxrdXFmNzFjeiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/dAyD6PWoQRs40/giphy.gif');
}

.atmosphere {
    background-image: url('https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExMjZtb2N2OTUwc3Rrcm16bzlsYzl3cXh6M2hnb2ZzZHl4M2N3a2d2diZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l2Je9dUI5LpzfHGTe/giphy.gif');
}

.clear {
    background-image: url('https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExcTc3dDl2ZXNwdXc4MHFjZjQwdGNnNnl6bGM3enp5bjg3eHBodDh6ZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/vadsqiBwAM18c/giphy.gif');
}

.clouds {
    background-image: url('https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExZHRoYWFtZTFseHdycTRrNXplc20xazlhOHdxZWlsdGk4aGpyd3R6dSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/k3CeSrt9IZ6aorWCy1/giphy.gif');
}

.bgestilo{
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
}


.container > h1 {
    color: white;
    filter: drop-shadow(0 0 20px black);
    font-size: 60px;
    margin: 20px 0 15px  ;
    text-transform: capitalize;  
}


.tarjeta_clima {
    width: 60%;
    height: 80%;
    border: 3px solid rgba(0, 0, 0, 0.2); /* bordes sutiles */
    background-color: #ffffffbf;
    border-radius: 50px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    box-shadow: 10px 10px 0 rgba(228, 214, 214, 0.35);
    backdrop-filter: blur(10px);
}


.tarjeta_titulo {
    width: 95%;
    border-bottom: 10px solid rgba(0, 0, 3, 0.675);
    margin-bottom: 30px;
    padding-bottom: 10px;
    border-radius: 10px;
}

.tarjeta_titulo > h1 {
    text-transform: capitalize;    
}

.pais {
    font-family: 'Courier New', Courier, monospace;
    font-size: 60px;
    margin: 0;
    text-transform: uppercase;
    color: black;
    font-weight: bold;
}

.trarjeta_descripcion{
    display: flex;
    gap: 25px;
    justify-content: center;
}

.clima,
.temperatura {
    font-size: 25px;
    text-transform: uppercase;
    margin: 0 ;
}

.tarjeta_info {
    width: 90%;
    height: 60%;
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.tarjeta_img {
    height: 100%;
    border: 10px double rgba(0, 0, 0, 0.266);
    border-radius: 100%;
    filter: drop-shadow(0px 0px 15px rgba(0, 0, 0, 0.723));
}


.tarjeta_ul {
    list-style: none;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50%;
    gap: 15px;
    font-size: 25px;
    text-transform: capitalize;
}

.tarjeta_li{
    display: flex;
    flex-direction: column;
    width: 100%;
    display: flex;
    text-align: left;    
    border-radius: 20px;
    padding: 2px 15px;
}

.tarjeta_li:hover{
    background-color: #00000036;
    color: white;
    cursor: auto;
}

.tarjeta_boton{
    width: 210px;
    height: 35px;
    font-size: 20px;
    border-radius: 20px;
    box-shadow: 5px 5px black;
    border: none;
    background-color: #ffffff;
    cursor: pointer;
    transition: all 0.2s ease;
    padding: 7px 0 15px 0;

}

.tarjeta_boton:hover{
    background-color: rgb(226, 226, 226);
}
.tarjeta_boton:active{
    background-color: rgb(203, 203, 203);
    transform: scale(0.99);
}

.tarjeta_consulta {
    width: 40%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    gap: 10px;
    margin: 25px;
}

.tarjeta_consulta input {
    width: 100%;
    height: 20px;
    font-size: 15px;
    padding-left: 5px;
    padding: 5px;
}

.boton_consultar {
  background-color: #4788d2; 
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

.boton_consultar:hover {
  background-color: #357ab8; 
}

.boton_consultar:active {
    background-color: #235480; 
    transform: scale(0.98); 
}

</style>
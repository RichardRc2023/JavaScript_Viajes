
import { barcelona,roma,paris,londres } from "./ciudades.js"

//Obtener los elementos del dom

let enlaces=document.querySelectorAll("a")
let tituloElemento=document.getElementById("titulo")
let subtituloElemento=document.getElementById("subtitulo")
let parrafoElemento=document.getElementById("parrafo")
let precioElemento=document.getElementById("precio")

enlaces.forEach(function(enlace){
    enlace.addEventListener('click',function(){
        //REMOVER CLASE ACTIVE DE TODOS LOS ENLACES
        enlaces.forEach(function(enlace){
            enlace.classList.remove('active')
        });
    

    //AGREGAR ACTIVE AL QUE CORRESPONDA
    this.classList.add('active')
    //TRAER INFO DEL OBJETO SELECCIONADO
    let contenido= objeterContenido(this.textContent)
    //MOSTRAR CONTENIDO EN EL DOM - HTML
    tituloElemento.innerHTML=contenido.titulo
    subtituloElemento.innerHTML=contenido.subtitulo
    parrafoElemento.innerHTML=contenido.parrafo
    precioElemento.innerHTML=contenido.precio
    })
})

//FUNCION PARA TRAER INFO CORRECTA DESDE ciudades.js
function objeterContenido(enlace){
    let contenido={
        'Barcelona':barcelona,
        'Roma':roma,
        'Paris':paris,
        'Londres':londres
    }
    return contenido[enlace]
}

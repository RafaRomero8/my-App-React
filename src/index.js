//1
import React from 'react' //en el momento que utilisemos etiequetas dentro de JS se debemos de importar React
//2
import ReactDOM from 'react-dom'//encargado de hacer renderizaciones en el html

//import PrimeraApp from './PrimeraApp'//traer componenetes del archivo PrimeraApp.js


import './index.css';//css
//import CounterApp from './CounterApp'
import CounterApp from './tarea'
const divRoot = document.querySelector('#root')//poner a refernecia por el id que esta en el html


//ReactDOM.render( <PrimeraApp saludo ='Hola mundo y compañia'/> , divRoot) //esto <PrimeraApp saludo='soy goku' lo mandamos al props al archivo PrimeraApp.js
ReactDOM.render( <CounterApp value ={10}/> , divRoot)

//el metodo render lo que hace que renderice o que muestre algo
//lo que quiero poner mas en donde lo voy a poner(divRoot)

//se utiliza ReactDOM en ves de body.append
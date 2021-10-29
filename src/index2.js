import React from 'react' //ene el momento que utilisemos etiequetas dentro de JS se debemos de importar React
import ReactDOM from 'react-dom'
//react debe de estar en el scope cuando se utilza JSX(javascript mas xml)
const saludo = <h1>Hola Mundo</h1>
console.log(saludo)
//renderizarlo al html,React DOM es el encargado para renderizar en el html

const divRoot = document.querySelector('#root')//poner a refernecia por el id
console.log(divRoot)

//si quiero renderizar la etiqueta(const saludo = <h1>Hola Mundo</h1>) dentro del div root
//se hace así

ReactDOM.render(saludo,divRoot)//el primer parametro es lo que quiero mostrar seguido del componenente donde lo quiero mostrar
//ReactDOM nos ofrece caracteristicas,permite crear un arbol de componentes y a su ves  comunicarnos con otros componentes de una manera sencilla
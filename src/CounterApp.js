import React,{useState} from 'react'
import PropTypes from 'prop-types'
//los hooksson funciones
const CounterApp = ({value}) => {

  //hacemoos una desestructuración el nombre que va a tener el primer argumento del arreglo
  //y el segundo objeto dentro del arreglo es una funcion que usualmente se le pone Setnombre 
  //const [nombre,setNombre] = useState('goku');
  //console.log(nombre,setNombre)

  const [counter,setCounter] = useState(0); //el useState retorna un arreglo con dos valores
  //setCounter funcion para ir incrementando

  //handleAdd poner el nombre que queramos
  const handleAdd = (e)=>{//e que es el evento
    console.log(e)
   //si queremos retornar con una funcion debemo poner parentesis en el onclick( {handleAdd()})
   //return ()=> console.log('hol mundo')
  }
  
  const handleAdd2 = () =>{
   // setCounter(counter +1);//para que incremente con forme demos clik al boton
    //no se puede poner counter ++
    //tambien podemos hacer el incremento con una funcion
   setCounter( (c) =>c +1)
    
  }


  return (
        <>
          <h1>CounterApp</h1>  
          <h2>{counter}</h2>
          <button onClick = { handleAdd2 }>+1</button>
          {/*el boton para ir incrementando con el evento onClick
          y le pasamos uan expresion de JS le pasamos una funcion cuando se dispare el clik*/}
        </>
    )
}

CounterApp.propTypes = {
         value: PropTypes.number
}

export default CounterApp

//rafcp para crear un funcional component te despliega el esqueleto
//o rafce
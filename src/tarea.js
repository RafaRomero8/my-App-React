import React,{useState} from 'react'
import PropTypes from 'prop-types'
//los hooksson funciones
const CounterApp = ({value =10}) => {
//el value lo podemos definir en 10
  

  const [counter,setCounter] = useState(value); 
  const handleAdd = () =>{
   // setCounter(counter +1);
   setCounter( (c) =>c +1);
  }
  const handleReset = () =>{
    setCounter( value)

  }
  const handleRemove  = ()=>{
    setCounter( (c) =>c -1)
  }

  return (
        <>
          <h1>CounterApp</h1>  
          <h2>{counter}</h2>
          <button onClick = { handleAdd }>+1</button>
          <button onClick = { handleReset }>Reset</button>
          <button onClick = { handleRemove }>-1</button>
          
        </>
    )
}

CounterApp.propTypes = {
         value: PropTypes.number
}

export default CounterApp

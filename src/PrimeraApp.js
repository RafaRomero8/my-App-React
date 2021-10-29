//en React se tiene dos compoenentes los de con clase y los de funciones(funcional components)
//antes se trabajaba con clases ahora con funciones(funcional components)
//los propts(PropTypes) son propiedades que son enviadas del padre hacia un componente
import React  from 'react';
import PropTypes  from 'prop-types'//importar son los tipos de props que reciben los componentes
//Fragment es el componente
const PrimeraApp = ({ saludo, subtitulo }) => {//desestructuracion ({saludo}) en ves de poner props(componenetes)
 //regresa un html
 //esto ahora es un funcional component completo
 //validar para que alguien utilice mi componente

 if(!saludo){//si el saludo no existe ponemos un throw error
     throw new Error('El saludo es necesario')//para validar el saludo
 }

 //const numero = [1,2,3,4,5,8];
 const objeto = {
    nombre:'Rafa',
    edad:20,
    CP:72310
}

 //los boleanos no los imprime(true ni false)
    return (
        //fragment
        <> 
             <h1>{saludo}</h1> {/*al poner props.saludo se imprime en html y lo podemos cambiar en los propietis y hacemos el cambio en tiempo real */}
             {/*asi es un comentario*/}
            <p>Mi primera Aplicacion </p>
            <pre>{ JSON.stringify(objeto,null,3) }</pre> {/*lo convierte a un string 3 es el espacio
            podemos imprimir asi objetos*/}
            <p>{subtitulo}</p>
        </>
        );
        //se puedeponer  <> </> que es un Fragment
//regresa un unico elemento el div

    //return 
    //<h1>Hola Mundo y Rafa</h1>   si esta con salto de linea no funcionara solo retorna un objeto a la ves
    //<h1>{ numero}</h1> se imprime el contenido de la constante entre llaves
    //<pre>{ JSON.stringify(objeto,null,3) }</pre>  -  JSON.stringify convierte al objeto en un string ,(objeto,null,3) para darle formato 3 es el espacio 
}


PrimeraApp.propTypes = {
    //se obliga a que otros programadores tener que mandar el argumento de un tipo en especifico
    saludo: PropTypes.string.isRequired, //pude ser object,bool,number lo que sea ene ves de string
     //isRequired que es requqerido para validar,sino se provee ninguna propiedad al valor marcara error
     //si necesitamos mas propiedades se pone una coma 
     
     //otra: PropTypes.number.isRequired
}

//Si abrimos el navegador y vamos a las propiedades nuestro componente padre es  <PrimeraApp/> y los props son las propiedades que son enviades al padre


PrimeraApp.defaultProps = {//para definir propiedades por defecto para agregarle mas props

    subtitulo: 'Soy un subtitulo' //se puede dejar vacio para saber que es una propiedad
}

export default PrimeraApp//se exporta para poderla utilizar fuera del archivo

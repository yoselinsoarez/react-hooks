import React, {useContext} from 'react';
import { Context } from './context/Context';



/*con esta linea se lee el valor del context
accede al context a traves de useContext y lo que encuentra lo mete
dentro de color y utiliza esa variable para cambiar el fondo de la caja, es decir
la cambia al color que recibe
Inicialmente va a recibir en el componente context el color asigado como valor inicial*/
function Componente1() { 
		const {color}=useContext(Context)
  return (
    <div className='child' style={{backgroundColor:color}}>
			Componente1
			
		</div>
  )
}

export default Componente1;
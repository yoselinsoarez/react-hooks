import React, {useContext} from 'react';
import { Context } from './context/Context';

function Componente3() {
		const {color}=useContext(Context)
  return (
    <div className='child' style={{backgroundColor:color}}>
			Componente3
			
		</div>
  )
}

export default Componente3;
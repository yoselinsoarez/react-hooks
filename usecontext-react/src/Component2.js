import React, {useContext} from 'react';
import { Context } from './context/Context';

function Componente2() {
		const {color}=useContext(Context)
  return (
    <div className='child' style={{backgroundColor:color}}>
			Componente2
			
		</div>
  )
}

export default Componente2;
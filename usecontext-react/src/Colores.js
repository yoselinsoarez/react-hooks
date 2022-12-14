import React, {useContext} from 'react';
import { Context } from './context/Context';


/*Con esta funcion se cambia el estado  de los componentes*/
function Colores() {

	const {setColor} = useContext(Context);
  return (
    <div className='colores'>
			<div className='color' onClick={() => {
				setColor('red')}}></div>
			
			<div className='color' onClick={() => {
				setColor('orange')}}></div>
			<div className='color' onClick={() => {
				setColor('yellow')}}></div>
			<div className='color' onClick={() => {
				setColor('green')}}></div>
			<div className='color' onClick={() => {
				setColor('violet')}}></div>

		</div>
  )
}

export default Colores;
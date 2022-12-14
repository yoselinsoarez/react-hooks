import React , {createContext, useState} from 'react';

/*Se dan dos elementos, uno para crear el contexto y otro para
acceder a los valores*/


export const Context= createContext ();
/*Datos sera el encargado de acceder al context y recuperar los 
datos que se hayan guardado. */

export const Datos=({ children }) => {
	const[color, setColor]= useState('aqua')
	return (
		<Context.Provider value={{color, setColor}}>
				{ children }
		</Context.Provider>

	)
}



import './App.css';
import Componente1 from './Componente1';
import Componente2 from './Component2';
import Componente3 from './Component3';
import Colores from './Colores';
import { Datos } from './context/Context';





function App() {
  return (
    <>
    <Datos> 
    <div className='App'>
      <Componente1 />
      <Componente2 />
      <Componente3 />
      
      
    </div>
    <Colores/>
    </Datos>
    </> 
  );
}

export default App;

/*Para que los componentes puedan acceder a los Datos deben estar dentro de 
ese nuevo componente padre*/
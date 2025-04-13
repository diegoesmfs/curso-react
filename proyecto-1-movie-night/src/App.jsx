import './App.css'

import { MiPrimerEstado } from './components/MiPrimerEstado'
import { Ejercicio } from './components/Ejercicio'

function App() {

  const fecha = new Date();
  const actualYear = fecha.getFullYear();
  console.log(actualYear)

  return (
    <div className='App'>

      <h1>El estado en react</h1>
      <MiPrimerEstado />
      <hr />
      <h1>Paso de los años</h1>
      <Ejercicio yearActual={actualYear}/>
    </div>
  )
}

export default App

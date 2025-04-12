import './App.css'
import { MiComponente } from './MiComponente'
import { TercerComponente } from './TercerComponente'
import { SegundoComponente } from './SegundoComponente'
function App() {

  const fichaMedica = {

    altura: "167cm",
    grupo: "O+",
    estado: "Bien",
    alergias: "Polvo"

  }

  return (
    <>
      <h1>Vite + React</h1>

      <div className='componentes'>

        <MiComponente />
        <hr />
        <SegundoComponente />
        <hr />
        <TercerComponente 
        nombre = "Diego"
        ficha={fichaMedica}
        />

      </div>

    </>
  )
}

export default App

import React, {useState} from 'react';

export const MiPrimerEstado = () => {

    /*
    //El problema
    let nombre = "Diego Morales"

    const cambiarNombre = () => {

        nombre = "Arthur Morgan"

    }
    */

    const [ nombre, setNombre] = useState("Diego Morales");

    const cambiarNombre = (e, nombreFijo) => {

        setNombre(nombreFijo);

    }

  return (
    <div className='primer-estado'>

        <h3>Componente: MiPrimerEstado</h3>

        <strong>

            {nombre}

        </strong>
        <button onClick={e => cambiarNombre(e, "Arthur Morgan")}>cambiar</button>

        <input type="text" onKeyUp={ e=> cambiarNombre(e, e.target.value)} placeholder='Cambia el Nombre' />

    </div>
  )
}

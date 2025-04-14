import React, { useEffect } from 'react'

export const AvisoComponent = () => {

    useEffect(() => {
        // cuando el componente se monta
        alert("Componente AvisoComponent esta montado");

        //cuando se desmonta
        return () => {

            alert("Componente desmontado");

        }

    }, []); // se ejecuta una sola vez

    const alertChange = () => {

        alert("Bienvenido :)")

    }

  return (
    <div>
        <hr />
        <h2>Saludos Arthur!!!</h2>

        <button onClick={alertChange}>Sorpresa?</button>

    </div>
  )
}

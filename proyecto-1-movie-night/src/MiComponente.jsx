//Importar modulos de rect

import React from 'react'

//funcion del componente
export const MiComponente = () => {
   /* const nombre = "Diego";
    const gitHub = "https://github.com/diegoesmfs "
  */
    let usuario = {

      nombre: "Diego",
      apellido: "Morales",
      web: "https://github.com/diegoesmfs "

    };

    return (
      <div>

          <h2>En un nuevo componente en Vite</h2>
          <h3>Datos del usuario</h3>
          <ul>
            <li>Nombre: <strong>{usuario.nombre}</strong></li>
            <li>Apellido: <strong>{usuario.apellido}</strong></li>
            <li>Web:  <strong>{usuario.web}</strong></li>
          </ul>

      </div>
    )
  }
  
//export

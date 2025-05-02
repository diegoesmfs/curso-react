import React from 'react';
import { Empleados } from './Empleados';
import { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';

export const Gestion = () => {

    const [name, setName] = useState("");
    const adminInput = useRef();
    useEffect(() => {

        console.log("La vista se ha renderizado");
        
    })

    const assignAdmin = e =>{

        e.preventDefault();

        let adminName = adminInput.current.value;

        setName(adminName);

    }

  return (
    <div>

        <h1>Nombre del gestor: {name}</h1>

        <input type="text" ref={adminInput} onChange={assignAdmin} placeholder='Introduce tu nombre de gestor'/>

        <h2>Listado de empleados</h2>
        <p>Los users vienen de jsonPlaceholder</p>
        <Empleados></Empleados>

    </div>
  )
}

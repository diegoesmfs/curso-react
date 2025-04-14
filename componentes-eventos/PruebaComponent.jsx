import React, { useEffect, useState } from 'react'
import { AvisoComponent } from '../../../componentes-eventos/AvisoComponent';

export const PruebaComponent = () => {

    const [usuario, setUsuario] = useState("Diego Morales");
    const [fecha, setFecha] = useState("01/01/2025");
    const [contador, setContador] = useState(0);
    const changeUser = (e) => {

        setUsuario(e.target.value);

    }
    const changeDate = (e) => {

        setFecha(new Date().toLocaleDateString());

    }

    //solo se ejecuta una vez, al cargar el componente
    useEffect(() => {

        console.log("Se a cargado el componente");

    }, []);

    //se ejecuta solo si cambia el usuario
    useEffect(() => {

        console.log("El usuario se ha modificado " + contador + " veces ");
        setContador(contador + 1);

    }, [usuario]);

    //Los corchetes sirven para cada cuanto quiere que se ejecuta es decir solo si


    return (
        <div className='prueba-component'>


            <h1>El useEffect</h1>
            <h2>Contador de Modificaciones</h2>
            <br />
            <strong>{contador}</strong>
            <br />
            <strong>{fecha}</strong>
            <br />
            <strong className={contador >= 10 ? '.label label-green' : 'label'}>{usuario}</strong>
            <p>

            <input type="text" onChange={changeUser} placeholder='Change Name' />
            <button onClick={changeDate}>Change Date</button>
            </p>

            {usuario == "Arthur Morgan" && <AvisoComponent/>}

        </div>
    )
}

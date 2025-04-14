import React, { useState } from 'react'

export const FormularioComponent = () => {

    const [usuario, setUsuario] = useState({});

    const getFormData = (e) => {

        e.preventDefault();

        let datos = e.target;
        let usuario = {

            nombre: datos.nombre.value,
            apellido: datos.apellido.value,
            genero: datos.genero.value,
            bio: datos.biografia.value,
            enviar: datos.enviar.value

        }

        setUsuario(usuario);

    }

    const changeData = (e) => {

        let inputName = e.target.name;
        let modifyUser = usuario;

        //modifyUser[inputName] = e.target.value;

        setUsuario(previusState => {
        
            return {

                ...previusState,
                [inputName]: e.target.value

            }

        });

    }

    return (
        <div>

            <h1>Formularios con React</h1>

            {  usuario.enviar && (

                <div className='info-usuario'>

                    {usuario.nombre} {usuario.apellido} es {usuario.genero} <br />
                    y su biografia es esta: <p>{usuario.bio}</p>

                </div>


            )}

            <form onSubmit={getFormData}>

                <input name="nombre" type="text" placeholder='Nombre' onChange={changeData}/>
                <input name="apellido" type="text" placeholder='Apellido' onChange={changeData}/>
                <select name="genero" id="genero" onChange={changeData}>

                    <option value="hombre">Hombre</option>
                    <option value="mujer">Mujer</option>

                </select>

                <textarea name="biografia" id="bio" placeholder='Biografia' onChange={changeData}></textarea>

                <input type="submit" value="Enviar" name="enviar"/>

            </form>


        </div>
    )
}

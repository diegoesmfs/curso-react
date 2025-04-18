import React from 'react'

export const SegundoComponente = () => {

    const libros = ["Harry Potter", "Game of Thrones", "Clean Code"];
    //const libros = [];
    return (
        <div className='segundo-componente'>
            <h1>Listado de libros</h1>
            {libros.length >= 1 ? (

                <ul>

                    {

                        libros.map((libro, index) => {

                            return <li key={index}>{libro}</li>

                        })

                    }

                </ul>

            )

                :
                (<p>No hay libros</p>)
            }

        </div>
    )
}

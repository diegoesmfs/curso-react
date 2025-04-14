import React, { useEffect, useState } from 'react'

export const AjaxComponent = () => {

    const [usuarios, setUsuarios] = useState([]);
    const [loading, setLoading] = useState(true);
    const [errores, setErrores] = useState("");
    //Generic / basico
    /* const getUsers = () => {
 
         setUsuarios([
 
             {
                 "id": 1,
                 "email": "michael.lawson@reqres.in",
                 "first_name": "Michael",
                 "last_name": "Lawson",
                 "avatar": "https://reqres.in/img/faces/7-image.jpg"
             },
             {
                 "id": 2,
                 "email": "lindsay.ferguson@reqres.in",
                 "first_name": "Lindsay",
                 "last_name": "Ferguson",
                 "avatar": "https://reqres.in/img/faces/8-image.jpg"
             },
             {
                 "id": 3,
                 "email": "tobias.funke@reqres.in",
                 "first_name": "Tobias",
                 "last_name": "Funke",
                 "avatar": "https://reqres.in/img/faces/9-image.jpg"
             },
             {
                 "id": 4,
                 "email": "byron.fields@reqres.in",
                 "first_name": "Byron",
                 "last_name": "Fields",
                 "avatar": "https://reqres.in/img/faces/10-image.jpg"
             },
 
         ]);
 
     }
         */

    const getUsersAjax = () => {

        setTimeout(async () => {

            try {
                const peticion = await fetch("https://reqres.in/api/users?page=2");
                const { data } = await peticion.json();

                setUsuarios(data);
                setLoading(false);
            } catch (error) {
                console.log(error.message);
                setErrores(error.message);
            }

        }, 3000);

    }

    useEffect(() => {

        getUsersAjax();

    }, []);

    if (loading == true) {

        //cuano todo esta cargando
        return (

            <div className='loading'>

                Loading data.....

            </div>

        );


    } else if (loading == false && errores !== "") {

        //cuano sucede algun error
        return (

            <div className='loading'>

                An error has occurred
                <strong>{errores}</strong>

            </div>

        );


    } else if (errores !== "") {

        //cuano sucede algun error
        return (

            <div className='loading'>

                An error has occurred
                <strong>{errores}</strong>

            </div>

        );


    } else {

        //cuando todo funciona bien
        return (
            <div>

                <h2>Listado de usuarios AJAX</h2>
                <ol className='users'>

                    {

                        usuarios.map(usuario => {

                            return <li key={usuario.id}>
                                <img src={usuario.avatar} alt="User Image" width="20px" />
                                &nbsp;
                                {usuario.first_name}
                                {usuario.last_name}
                            </li>

                        })

                    }

                </ol>

            </div>
        )

    }
}

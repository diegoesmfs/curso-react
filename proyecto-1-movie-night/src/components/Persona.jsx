import React, { use } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export const Persona = () => {

    //const {name = "Diego", surname = "Morales"} = useParams();

    const {name, surname} = useParams();
    const navigate = useNavigate();

    const send = (e) => {

        e.preventDefault();
        let name = e.target.name.value;
        let surname = e.target.surname.value;
        let url = `/people/${name}/${surname}`;

        if(name.length <= 0 && surname.length <= 0){

            navigate("/home");

        } else{

            navigate(url);

        }

    };

  return (
    <div>
        
        {!name && <h1>Pagina de personas</h1>}
        {name && <h1>Pagina de personas: {name} {surname}</h1>    }

        <p>Esta es la pagina de personas</p>

        <form onSubmit={send}>
            <input type="text" name="name" />
            <input type="text" name="surname" />
            <input type="submit" name="save" value="send" />
        </form>

    </div>
  )
}

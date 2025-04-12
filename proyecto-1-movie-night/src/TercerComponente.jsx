import React from 'react';
import PropTypes from 'prop-types';

export const TercerComponente = ({nombre = "UserName", apellido = "UserLastName", ficha}) => {
        
    return (
    <div className='tercer-componente'>
        
        <h1>Comunicacion entre componentes</h1>
        <ul>
            
            <li>{nombre}</li>
            <li>{apellido}</li>
            <li>{ficha.grupo}</li>
            <li>{ficha.estado}</li>

        </ul>            


    </div>
  )
}

TercerComponente.propTypes = {

    nombre: PropTypes.string.isRequired,
    apellido: PropTypes.string.isRequired,
    ficha: PropTypes.object

}
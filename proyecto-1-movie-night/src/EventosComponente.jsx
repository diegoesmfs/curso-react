import React from 'react'

export const EventosComponente = () => {

    const click = (e, nombre) => {

        alert("Me diste Click" + " " + nombre);
            console.log(e);

    }

    const doubleClick = (e) => {

        alert("Me diste dos veces click solo para que me vieras");

    }
    const sobreCaja = (e, accion) => {

        alert(`Has ${accion} a la caja con el mouse`);

    }
    const onPlaceHolder = (e, accion) => {

        alert(`estas ${accion} del input`);

    }

  return (
    <div className='eventos-componente'>

        <h1>Eventos en React</h1>

        {/*OnClick*/}

        <button onClick={e => click(e, "Diego")}>Dame Click</button>

        {/*DoubleClick*/}

        <button onDoubleClick={e => doubleClick(e)}>Dame dos veces Click</button>

        {/*onMouseEnter/leave*/}
        <div id='caja' className='caja' onMouseEnter={e => sobreCaja(e, "entrado")} onMouseLeave={e => sobreCaja(e, "salido")}>

            Pasa por encima

        </div>

        {/*focus/blur*/}
        <div>

            <p>

                <input type="text" onFocus={e => onPlaceHolder(e, dentro)} onBlur={e => onPlaceHolder(e, salida)} placeholder='Introduce tu Nombre' />

            </p>

        </div>

    </div>
  )
}

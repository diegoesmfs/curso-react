import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const Ejercicio = ({yearActual}) => {

    const [year, setYear] = useState(yearActual);

    const nextYear = (e) => {

        let newYear = year + 1;
        setYear(newYear);

    }
    const previusYear = (e) => {

        let newYear = year - 1;
        setYear(newYear);

    }
    const changeYear = (e, changedYear) => {

        if(Number.isInteger(changedYear)){

            setYear(changedYear);

        }
        else{

            setYear(year);

        }
    }

  return (
    <div>

    <h1>
        Actual year: <strong>{year}</strong>
    </h1>
    <button onClick={e => nextYear(e)}>next year</button>
    <button onClick={e => previusYear(e)}>previus year</button>
    <p><input type="text" onChange={e => changeYear(e, parseInt(e.target.value))} placeholder='year change' /></p>
    </div>
  )
}

Ejercicio.propTypes = {

    yearActual: PropTypes.number.isRequired

}
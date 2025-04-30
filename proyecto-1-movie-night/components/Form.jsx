import React from 'react'
import { useRef } from 'react'

export const Form = () => {

    const nameInput = useRef();
    const surnameInput = useRef();
    const emailInput = useRef();
    const myBox = useRef();

    const showForm =(e) =>{

        e.preventDefault();
        
        console.log(nameInput.current.value);
        console.log(surnameInput.current.value);
        console.log(emailInput.current.value);
        
        //the box

        let { current: box} = myBox;

        box.classList.add("change");
        box.innerHTML = "FORM SENDED";

    }

  return (
    <div>
        
        <h1>Form</h1>

        <div ref={myBox} className='my-box'>a box</div>

        <form onSubmit={showForm}>

            <input type="text" placeholder='Name' ref={nameInput}/>
            <input type="text" placeholder='Surname' ref={surnameInput}/>
            <input type="email" placeholder='Email' ref={emailInput}/>
            <input type="submit" placeholder='send'/>
        </form>

        <button onClick={ () => {nameInput.current.select();}}>Fill Form</button>

    </div>
  )
}

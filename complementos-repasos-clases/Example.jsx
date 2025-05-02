import React from 'react'
import { useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react'

export const Example = () => {

    const [quantity, setQuantity] = useState(0);
    const regardsQueue = useRef(quantity);

    useEffect(() => {
        regardsQueue.current = quantity;
        setTimeout(() =>{

            console.log("Messages queue:" + regardsQueue.current );

        }, 2000);

    }, [quantity])

    const sendRegards = (e) => {

    setQuantity(quantity+1);

    }

  return (
    <div>

        <h1>Example with useRef</h1>
        
        <h2>Regards sent: {quantity}</h2>

        <button onClick={sendRegards}>Send your best regards</button>

    </div>
  )
}

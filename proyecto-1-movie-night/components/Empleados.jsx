import React from 'react'
import { useEffect } from 'react';

export const Empleados = React.memo(() => {

    console.log("Se ha vuelto a renderizar empleados")

    const getEmployes = async () => {
        
        const url = 'https://reqres.in/api/users?page=2';
        const request = await fetch(url);
        const {data} = await request.json();

        console.log(data);

    }

    useEffect(() => {

        

    })

    return (
        <div>Empleados</div>
    )
})

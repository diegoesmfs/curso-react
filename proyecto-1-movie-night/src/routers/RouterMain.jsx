import React from 'react'
import { Routes, Route, NavLink, BrowserRouter } from 'react-router-dom';
import { Inicio } from '../components/Inicio';
import { Contacto } from '../components/Contacto';
import { Articulos } from '../components/Articulos';
import { Error } from '../components/Error';

export const RouterMain = () => {
    return (
        <BrowserRouter>

            <nav>

                <ul>

                    <li>
                        <NavLink to="/home" className={({isActive}) => isActive ? "activado" : ""} >Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" className={({isActive}) => isActive ? "activado" : ""}>contact</NavLink>

                    </li>
                    <li>
                        <NavLink to="/articles" className={({isActive}) => isActive ? "activado" : ""}>articles</NavLink>

                    </li>

                </ul>

            </nav>

            <Routes>

                <Route path="/" element={<Inicio />} />
                <Route path="/home" element={<Inicio />} />
                <Route path="/contact" element={<Contacto />} />
                <Route path="/articles" element={<Articulos />} />
                <Route path="*" element={<Error />} />
            </Routes>

        </BrowserRouter>

    )
}

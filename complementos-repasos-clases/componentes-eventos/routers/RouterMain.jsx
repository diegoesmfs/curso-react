import React from 'react'
import { Routes, Route, NavLink, BrowserRouter, Navigate } from 'react-router-dom';
import { Inicio } from '../../../proyecto-1-movie-night/src/components/Inicio';
import { Contacto } from '../../../proyecto-1-movie-night/src/components/Contacto';
import { Articulos } from '../../../proyecto-1-movie-night/src/components/Articulos';
import { Error } from '../../../proyecto-1-movie-night/src/components/Error';
import { Persona } from '../../../proyecto-1-movie-night/src/components/Persona';
import { ControlPanel } from '../../../proyecto-1-movie-night/src/components/ControlPanel';
import { Home } from '../../../proyecto-1-movie-night/src/components/panel/Home';
import { Post } from '../../../proyecto-1-movie-night/src/components/panel/Post';
import { Log } from '../../../proyecto-1-movie-night/src/components/panel/Log';
import { About } from '../../../proyecto-1-movie-night/src/components/panel/About';

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
                    <li>
                        <NavLink to="/panel" className={({isActive}) => isActive ? "activado" : ""}>Control Panel</NavLink>

                    </li>

                </ul>

            </nav>

            <Routes>

                <Route path="/" element={<Inicio />} />
                <Route path="/home" element={<Inicio />} />
                <Route path="/contact" element={<Contacto />} />
                <Route path="/articles" element={<Articulos />} />
                <Route path='/people/:name/:surname' element={<Persona/>}/>
                <Route path='/people/:name' element={<Persona/>}/>
                <Route path='/redirect' element={<Navigate to={"/people/diego/morales"} />}/>
                <Route path='/people' element={<Persona/>}/>
                <Route path='/panel/*' element={<ControlPanel/>}>
                
                    <Route index element={<Home/>}/>
                    <Route path='home' element={<Home/>}/>
                    <Route path='post-articles' element={<Post/>}/>
                    <Route path='users-log' element={<Log/>}/>
                    <Route path='about' element={<About/>}/>

                </Route>
                <Route path="*" element={<Error />} />
            </Routes>

        </BrowserRouter>

    )
}

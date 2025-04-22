import React from 'react'
import { Outlet, NavLink } from 'react-router-dom'

export const ControlPanel = () => {
    return (
        <div>

            <h1>Control Panel</h1>
            <p>Chose one of the following options: </p>

            <nav>
                <ul>

                    <li>
                        <NavLink to="/panel/home" className={({ isActive }) => isActive ? "activado" : ""} >Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/panel/post-articles" className={({ isActive }) => isActive ? "activado" : ""}>Post articles</NavLink>

                    </li>
                    <li>
                        <NavLink to="/panel/users-log" className={({ isActive }) => isActive ? "activado" : ""}>Users Log</NavLink>

                    </li>
                    <li>
                        <NavLink to="/panel/about" className={({ isActive }) => isActive ? "activado" : ""}>About Us</NavLink>

                    </li>

                </ul>
            </nav>
            <div>

                <Outlet />

            </div>

        </div>
    )
}

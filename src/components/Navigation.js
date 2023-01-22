import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className='navigation'>
            <ul>
                <NavLink exact to="/" className={(nav) =>(nav.isActive? "nav-active" : "")}>
                <li>Accueil</li>
                </NavLink>
                <NavLink exact to="/About" className={(nav) =>(nav.isActive? "nav-active" : "")}> 
                <li>À propos</li>
                </NavLink>
            </ul>
        </div>
    );
};

export default Navigation;
import React from 'react'
import logo from "../images/logo.png"
import { NavLink } from 'react-router-dom'
const Navbar = ({navLinks}) => {
    return (
        <nav>
       <a href="/"><img src={logo} alt="logo" className="logo"/></a>
        <ul>
            <li><NavLink exact to="/" className="nav-link" activeClassName="nav-link--active">Home</NavLink></li>
            <li><NavLink to="/pokedex" className="nav-link" activeClassName="nav-link--active">PokeDex</NavLink></li>
            <li><NavLink to="/favorites" className="nav-link" activeClassName="nav-link--active">Favorites</NavLink></li>
        </ul>
    </nav>
    )
}

export default Navbar

import React from 'react'
import '../Stylesheets/Navbar.css'
import NasaSearch from './NasaSearch'
import NasaLogo from '../Stylesheets/Images/NasaLogo.png'

const Navbar = () => {
    return (
        <div className="Navbar">
            <img className="NasaLogo" src={NasaLogo} alt="Logo"/>
            <NasaSearch />
        </div>
    )
}

export default Navbar
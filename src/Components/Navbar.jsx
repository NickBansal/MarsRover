import React from 'react'
import '../Stylesheets/Navbar.css'
import NasaSearch from './NasaSearch'

const Navbar = () => {
    return (
        <div className="Navbar">
            <h1>Navbar</h1>
            <NasaSearch />
        </div>
    )
}

export default Navbar
import React from 'react'
import NasaLogo from '../Stylesheets/Images/NasaLogo.png'
import '../Stylesheets/LandingPage.css'

const LandingPage = () => {
    return (
        <div className="LandingPage">
            <img src={NasaLogo} alt="Nasa logo"/>
            <h1>Nasa Image Search Page</h1>
        </div>
    )
}

export default LandingPage
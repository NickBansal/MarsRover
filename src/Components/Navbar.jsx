import React from 'react'
import '../Stylesheets/Navbar.css'
import NasaSearch from './NasaSearch'
import NasaLogo from '../Stylesheets/Images/NasaLogo.png'

const Navbar = ({ handleSubmit }) => {
  return (
    <div className='Navbar'>
      <img className='NasaLogo' src={NasaLogo} alt='Logo' />
      <NasaSearch handleSubmit={handleSubmit} />
    </div>
  )
}

export default Navbar

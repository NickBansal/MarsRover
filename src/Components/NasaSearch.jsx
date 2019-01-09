import React from 'react'
import '../Stylesheets/NasaSearch.css'

const NasaSearch = ({ handleKeyPress }) => {
    return (
        <div className="NasaSearch">
            <form onSubmit={(e) => {
                handleKeyPress(e.target[0].value) 
                e.preventDefault() }}>
                <input 
                type="text" 
                name="search" 
                placeholder="Search..." />
            </form>
        </div>
    )
}

export default NasaSearch
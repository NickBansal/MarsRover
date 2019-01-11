import React from 'react'
import '../Stylesheets/NasaSearch.css'

const NasaSearch = ({ handleSubmit }) => {
    return (
        <div className="NasaSearch">
            <form onSubmit={(e) => {
                handleSubmit(e.target[0].value) 
                e.preventDefault() 
                // e.target[0].value = ""
                }}>
                <input 
                type="text" 
                name="search" 
                placeholder="Search..." />
            </form>
        </div>
    )
}

export default NasaSearch
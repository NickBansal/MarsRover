import React from 'react'
import '../Stylesheets/NasaSearch.css'

const NasaSearch = () => {
    return (
        <div className="NasaSearch">
            <form>
                <input type="text" name="search" placeholder="Search.." />
            </form>
        </div>
    )
}

export default NasaSearch
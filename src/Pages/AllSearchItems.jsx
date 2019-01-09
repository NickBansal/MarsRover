import React from 'react'
import Navbar from '../Components/Navbar'

const AllSearchItems = ({ searchTerm }) => {
    return (
        <div>
            <Navbar />
            <h1>{ searchTerm }</h1>
        </div>
    )
}

export default AllSearchItems
import React from 'react'
import '../Stylesheets/SearchPage.css'

const EmptyMessage = () => {
    return (
        <div>
            <p 
            className='EmptyMessage'
            style={{ fontSize: '25px' }}>Search field is empty, Please enter a valid search</p>
        </div>
    )
}

export default EmptyMessage
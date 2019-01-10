import React from 'react'
import '../Stylesheets/SearchPage.css'

const ErrorMessage = () => {
    return (
        <div>
            <p 
            className="ErrorMessage"
            style={{ fontSize: '25px' }}>No items to display, please search again</p>
        </div>
    )
}

export default ErrorMessage
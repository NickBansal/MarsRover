import React from 'react'
import '../Stylesheets/SearchPage.css'
import NasaLogo from '../Stylesheets/Images/NasaImage.png'


const addDefaultSrc = (event) => {
    event.target.src = `${NasaLogo}`
}

const SingleThumbnail = ({ href, title, newTitle }) => {
    return (
        <div
            className='SingleThumbnail'>
            <img
                onError={addDefaultSrc}
                src={href}
                alt={title} />
            <div className='SingleThumbnailTitle'>
                <strong>
                    <p>{newTitle.replace(new RegExp('\\-|_', 'g'), ' ')}</p>
                </strong>
            </div>
        </div>
    )
}

export default SingleThumbnail
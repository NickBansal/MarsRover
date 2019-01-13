import React from 'react'
import '../Stylesheets/SingleItem.css'
import moment from 'moment'

const Image = ({ created, description, title, imgSrc }) => {
    return (
        <div className="hvrbox">
            <img
                src={imgSrc}
                alt={title}
                className="hvrbox-layer_bottom" />
            <div className="hvrbox-layer_top hvrbox-layer_scale">
                <div className="hvrbox-text">
                    <h1>{title.replace(new RegExp("\\-|_", "g"), ' ')}</h1>
                    {description &&
                        <p className="Description">{description}</p>
                    }
                    <p className="Created">Created: {moment(created).from()}</p>
                </div>
            </div>
            <p>Please hover over the image for more detail</p>
        </div>
    )
}

export default Image
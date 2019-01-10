import React from 'react'
import '../Stylesheets/Loading.scss'

const Loading = () => {
    return (
        <div className="wrap">
            <div className="spinner-wrap">
                <div className="spinner">
                    <i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i>
                </div>
            </div>
        </div>
    )
}

export default Loading
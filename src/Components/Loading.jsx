import React from 'react'
import '../Stylesheets/Loading.scss'

const Loading = () => {
    return (
        <div class="wrap">
            <div class="spinner-wrap">
                <div class="spinner">
                    <i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i>
                </div>
            </div>
        </div>
    )
}

export default Loading
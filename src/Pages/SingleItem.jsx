import React, { Component } from 'react'

class SingleItem extends Component {

    state = {
        loading: true,

    }
    
    render() {
        // console.log(this.props.id)
        return (
            <div>
                <h1>Single Item</h1>
            </div>
        )
    }

    componentDidMount() {

    }
}

export default SingleItem
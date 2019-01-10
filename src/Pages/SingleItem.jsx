import React, { Component } from 'react'
import * as api from '../api';

class SingleItem extends Component {
    
    state = {
        singleItem: {},
        error: false, 
        loading: true
    }

    render() {
        const { loading } = this.state
        return (
            <div>
                { loading && <h1>Loading...</h1> }
                { !loading && <h1>Single Item</h1> }
            </div>
        )
    }
    componentDidMount() {
        api.getItems(this.props.id)
        .then(data => {
            this.setState({
                singleItem: data.collection,
                loading: false
            })
        })
        .catch(error => {
            this.setState({
                error: true
            })
        })
    }
}

export default SingleItem
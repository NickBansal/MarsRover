import React, { Component } from 'react'
import * as api from '../api';
import '../Stylesheets/SingleItem.css'

class SingleItem extends Component {

    state = {
        singleItem: {},
        error: false,
        loading: true
    }

    render() {
        const { loading, singleItem } = this.state
        return (
            <div>
                {loading && <h1>Loading...</h1>}

                {!loading &&
                <div className="SingleItem">
                <h1>{ singleItem.data[0].title }</h1>
                    <img src={singleItem.links[0].href}
                        alt={singleItem.data[0].title} />
                </div> }
            </div>
        )
    }
    componentDidMount() {
        api.getItems(this.props.id)
            .then(data => {
                this.setState({
                    singleItem: data.collection.items[0],
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
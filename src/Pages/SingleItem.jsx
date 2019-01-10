import React, { Component } from 'react'
import * as api from '../api';
import '../Stylesheets/SingleItem.css'
import Loading from '../Components/Loading'

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
                {loading && <Loading />}
                {!loading &&
                    <div className="hvrbox">
                        <img src={singleItem.links[0].href}
                            alt={singleItem.data[0].title} className="hvrbox-layer_bottom" />
                        <div className="hvrbox-layer_top hvrbox-layer_scale">
                            <div className="hvrbox-text">
                                <h2>React Projects</h2>
                                <br className="Break" />
                                <p>I have built a few stand alone projects using ReactJS.
                    The projects have not been deployed so in order to play you will have to follow the instructions on the readme</p>
                                <br />

                            </div>
                        </div>
                </div>}
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
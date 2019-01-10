import React, { Component } from 'react'
import * as api from '../api';
import '../Stylesheets/SingleItem.css'
import Loading from '../Components/Loading'
import NotAvailable from '../Stylesheets/Images/not-available.png';
import moment from 'moment'

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
                    <div style={{ paddingTop: '40px' }}>
                        <div className="hvrbox">
                            <img 
                            onError={(e) => this.addDefaultSrc(e)}
                            src={singleItem.links[0].href}
                            alt={singleItem.data[0].title} 
                            className="hvrbox-layer_bottom" />
                            <div className="hvrbox-layer_top hvrbox-layer_scale">
                                <div className="hvrbox-text">
                                    <h1>{singleItem.data[0].title}</h1>
                                    <p className="Description">{singleItem.data[0].description}</p>
                                    <p className="Created">Created: { moment(singleItem.data[0].date_created).from() }</p>
                                </div>
                            </div>
                            <p>Please hover over the image for more detail</p>
                        </div>
                    </div>
                }
            </div>
        )
    }

    addDefaultSrc = (event) => {
        event.target.src = `${NotAvailable}`
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
import React, { Component } from 'react'
import * as api from '../api';
import '../Stylesheets/SingleItem.css'
import Loading from '../Components/Loading'
import moment from 'moment'
import { navigate } from '@reach/router'

class SingleItem extends Component {

    state = {
        singleItem: [],
        error: false,
        loading: true,
        assets: []
    }

    render() {
        const { loading, singleItem, assets, error } = this.state
        return (
            <div>
                {loading && <Loading />}

                {!loading && singleItem.length === 0 &&
                    <div>
                        <p className="ErrorLoad">There was a problem retreiving the information, please try another search</p>
                        <button onClick={() => navigate('/search')}>
                            <i className="fas fa-chevron-circle-left fa-5x"></i>
                        </button>
                    </div>
                }

                {error &&
                    <div>
                        <p className="ErrorLoad">Request failed, please try another search</p>
                        <button onClick={() => navigate('/search')}><i className="fas fa-chevron-circle-left fa-5x"></i></button>
                    </div>
                }

                {!loading && singleItem.length > 0 &&
                    <div className="WholeSingleItemPage">
                        {singleItem[0].data[0].media_type === 'image' && <div className="hvrbox">
                            <img
                                src={singleItem[0].links[0].href}
                                alt={singleItem[0].data[0].title}
                                className="hvrbox-layer_bottom" />
                            <div className="hvrbox-layer_top hvrbox-layer_scale">
                                <div className="hvrbox-text">
                                    <h1>{singleItem[0].data[0].title.replace(new RegExp("\\-|_", "g"), ' ')}</h1>
                                    {singleItem[0].data[0].description &&
                                        <p className="Description">{singleItem[0].data[0].description}</p>
                                    }
                                    <p className="Created">Created: {moment(singleItem[0].data[0].date_created).from()}</p>
                                </div>
                            </div>
                            <p>Please hover over the image for more detail</p>
                        </div>}
                        {singleItem[0].data[0].media_type === 'video' &&
                            <div className="VideoPlayback">
                                <video width="550" height="550" controls>
                                    <source src={assets[0].href} type="video/mp4" />
                                    <source src={assets[1].href} type="video/mp4" />
                                </video>
                                <h1>{singleItem[0].data[0].title.replace(new RegExp("\\-|_", "g"), ' ')}</h1>
                                {singleItem[0].data[0].description &&
                                    <p className="Description">{singleItem[0].data[0].description.replace(new RegExp("\\-|_", "g"), ' ')}</p>
                                }
                                <p className="Created">Created: {moment(singleItem[0].data[0].date_created).from()}</p>
                            </div>
                        }
                        <button onClick={() => navigate('/search')}><i className="fas fa-chevron-circle-left fa-3x"></i></button>
                    </div>
                }
            </div>
        )
    }

    componentDidMount() {
        const getItems = api.getItems(this.props.id)
        const getAssets = api.assetData(this.props.id)
        Promise.all([getItems, getAssets])
            .then(data => {
                this.setState({
                    singleItem: data[0].collection.items,
                    loading: false,
                    assets: data[1].collection.items
                })
            })
            .catch(error => {
                this.setState({
                    error: error.message
                })
            })
    }
}

export default SingleItem
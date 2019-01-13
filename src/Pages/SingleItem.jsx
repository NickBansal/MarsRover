import React, { Component } from 'react'
import * as api from '../api';
import '../Stylesheets/SingleItem.css'
import Loading from '../Components/Loading'
import { navigate } from '@reach/router'
import Video from '../Components/Video'
import Image from '../Components/Image'

class SingleItem extends Component {

    state = {
        itemData: [],
        error: false,
        loading: true,
        assets: []
    }

    render() {
        const { loading, itemData, assets, error } = this.state
        return (
            <div>
                {loading && <Loading />}

                {!loading && itemData.length === 0 &&
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

                {!loading && itemData.length > 0 &&
                    <div className="WholeSingleItemPage">
                        {itemData[0].data[0].media_type === 'image' &&
                            <Image
                                created={itemData[0].data[0].date_created}
                                description={itemData[0].data[0].description}
                                title={itemData[0].data[0].title}
                                imgSrc={itemData[0].links[0].href} />
                        }
                        {itemData[0].data[0].media_type === 'video' &&
                            <Video
                                created={itemData[0].data[0].date_created}
                                description={itemData[0].data[0].description}
                                title={itemData[0].data[0].title}
                                src1={assets[0].href}
                                src2={assets[1].href} />
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
                    itemData: data[0].collection.items,
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
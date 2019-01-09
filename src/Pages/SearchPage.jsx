import React, { Component } from 'react'
import Navbar from '../Components/Navbar'
import * as api from '../api';
import '../Stylesheets/SearchPage.css'

class SearchPage extends Component {

    state = {
        searchTerm: "",
        searchItems: []
    }

    render() {
        const { searchItems } = this.state
        return (
            <div className='SearchPage'>
                <Navbar handleSubmit={this.handleSubmit} />
                { searchItems.length > 0 && searchItems.map(items => {
                    return (
                        <div 
                        className="SingleThumbnail"
                        key={ items.data[0].nasa_id }>
                            <img src={items.links[0].href} alt={ items.data[0].title }/>
                            <p>{ items.data[0].title }</p>
                        </div>
                    )
                }) }
            </div>
        )
    }

    handleSubmit = (searchTerm) => {
        this.setState({
            searchTerm
        })
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.searchTerm !== this.state.searchTerm) {
            api.getPictures(this.state.searchTerm)
            .then(items => {
                const searchItems = items.collection.items.filter(data => data.links)
                this.setState({
                    searchItems
                })
            })
            .catch(error => {
                console.log(error, "<<<< ERROR")
            })
        }
    }
}

export default SearchPage
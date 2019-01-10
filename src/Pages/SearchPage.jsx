import React, { Component } from 'react'
import Navbar from '../Components/Navbar'
import * as api from '../api';
import '../Stylesheets/SearchPage.css'
import NotAvailable from '../Stylesheets/Images/not-available.png';
import { Link } from '@reach/router'

class SearchPage extends Component {

    state = {
        searchTerm: "",
        searchItems: [],
        error: null,
        start: true
    }

    render() {
        const { searchItems, searchTerm, start } = this.state
        return (
            <div className='SearchPage'>
                <Navbar handleSubmit={this.handleSubmit} />
                <div className="AllSearchItems">
                { !start && searchTerm !== "" && searchItems.length === 0  && <p>Search invalid, Please try again</p> }
                { searchItems.length > 0 && searchItems.map(items => {
                    return (
                        <Link 
                        key={ items.data[0].nasa_id }
                        to={`/asset/${items.data[0].nasa_id}`}>
                        <div 
                        className="SingleThumbnail">
                            <img 
                            onError={this.addDefaultSrc} 
                            src={items.links[0].href} 
                            alt={ items.data[0].title }/>
                            <strong><p>{ items.data[0].title.substring(0, 30) }</p></strong>
                        </div>
                        </Link>
                    )
                }) }
                </div>
                { searchItems.length > 0 && <p className="Results">Results: {searchItems.length}</p> }

            </div>
        )
    }

    handleSubmit = (searchTerm) => {
        this.setState({
            searchTerm
        })
    }
    
    addDefaultSrc = (event) => {
        event.target.src = `${NotAvailable}`
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.searchTerm !== this.state.searchTerm) {
            api.getItems(this.state.searchTerm)
            .then(items => {
                const searchItems = items.collection.items.filter(data => data.links)
                this.setState({
                    searchItems,
                    error: null,
                    start: false
                })
            })
            .catch(error => {
                this.setState({
                    error
                })
            })
        }
    }
}

export default SearchPage
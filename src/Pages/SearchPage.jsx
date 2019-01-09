import React, { Component } from 'react'
import Navbar from '../Components/Navbar'
import * as api from '../api';
import '../Stylesheets/SearchPage.css'
import NotAvailable from '../Stylesheets/Images/not-available.png'

class SearchPage extends Component {

    state = {
        searchTerm: "",
        searchItems: []
    }

    render() {
        const { searchItems, searchTerm } = this.state
        return (
            <div className='SearchPage'>
                <Navbar handleSubmit={this.handleSubmit} />
                <div className="AllSearchItems">
                { searchTerm !== "" && searchItems.length === 0  && <p>Search invalid, Please try again</p> }
                { searchItems.length > 0 && searchItems.map(items => {
                    return (
                        <div 
                        className="SingleThumbnail"
                        key={ items.data[0].nasa_id }>
                            <img 
                            onError={this.addDefaultSrc} 
                            src={items.links[0].href} 
                            alt={ items.data[0].title }/>
                            <p>{ items.data[0].title.substring(0, 30) }</p>
                        </div>
                    )
                }) }
                </div>
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
                    error: false
                })
            })
            .catch(error => {
                console.log(error)
                // this.setState({
                //     error: true
                // })
            })
        }
    }
}

export default SearchPage
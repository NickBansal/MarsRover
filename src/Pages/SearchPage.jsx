import React, { Component } from 'react'
import Navbar from '../Components/Navbar'
import * as api from '../api'

class SearchPage extends Component {

    state = {
        searchTerm: "",
        searchItems: []
    }

    render() {
        const { searchTerm } = this.state
        const pageTitle = !searchTerm ? 'Please begin your search' : searchTerm
        return (
            <div>
                <Navbar handleSubmit={this.handleSubmit} />
                <h1>{pageTitle}</h1>
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
                this.setState({
                    searchItems: items.collection.items
                })
            })
            .catch(error => {
                console.log(error, "<<<< ERROR")
            })
        }
    }
}

export default SearchPage
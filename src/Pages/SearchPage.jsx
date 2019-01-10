import React, { Component } from 'react'
import Navbar from '../Components/Navbar'
import * as api from '../api';
import '../Stylesheets/SearchPage.css'
import SearchItems from '../Components/SearchItems'
import SingleItem from '../Pages/SingleItem'
import { Router } from '@reach/router'

class SearchPage extends Component {

    state = {
        searchTerm: "",
        allItems: [],
        error: null,
        start: true
    }

    render() {
        const { allItems, searchTerm, start } = this.state
        return (
            <div className='SearchPage'>
                <Navbar handleSubmit={this.handleSubmit} />
                <div className="AllSearchItems">
                <Router>
                    {allItems.length > 0 && 
                    <SearchItems path="/" 
                    searchTerm={searchTerm}
                    start={start}
                    allItems={allItems} />}
                    <SingleItem path="/:id" />
                </Router>
                </div>
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
            api.getItems(this.state.searchTerm)
            .then(items => {
                const allItems = items.collection.items.filter(data => data.links)
                this.setState({
                    allItems,
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
import React, { Component } from 'react'
import Navbar from '../Components/Navbar'
import * as api from '../api';
import '../Stylesheets/SearchPage.css'
import SearchItems from '../Components/SearchItems'
import SingleItem from '../Pages/SingleItem'
import { Router, navigate } from '@reach/router'
import ErrorMessage from '../Components/ErrorMessage'

class SearchPage extends Component {

    state = {
        searchTerm: "",
        allItems: [],
        start: true
    }

    render() {
        const { allItems, start } = this.state
        return (
            <div className='SearchPage'>
                <Navbar handleSubmit={this.handleSubmit} />
                <div className="AllSearchItems">
                <Router>
                    {allItems.length > 0 && 
                    <SearchItems 
                    path="/" 
                    handleClick={this.handleClick}
                    start={start}
                    allItems={allItems} />}

                    {allItems.length === 0 && !start &&
                    <ErrorMessage path="/"/>}
                    
                    <SingleItem 
                    path="/:id" />
                </Router>
                </div>
            </div>
        )
    }

    handleSubmit = (searchTerm) => {
        this.setState({
            searchTerm,
            allItems: []
        })
        navigate(`/search`)
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
                    error: true
                })
            })
        }
    }
}

export default SearchPage
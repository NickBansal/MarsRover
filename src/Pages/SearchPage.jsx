import React, { Component } from 'react'
import Navbar from '../Components/Navbar'
import * as api from '../api';
import '../Stylesheets/SearchPage.css'
import SearchItems from '../Components/SearchItems'
import SingleItem from '../Pages/SingleItem'
import { Router, navigate } from '@reach/router'
import ErrorMessage from '../Errors/ErrorMessage'
import Loading from '../Components/Loading'
import EmptyMessage from '../Errors/EmptyMessage'
import EnterSearch from '../Errors/EnterSearch'

class SearchPage extends Component {

    state = {
        searchTerm: "",
        allItems: [],
        start: true,
        loading: true,
        upper: true,
        input: "image"
    }

    render() {
        const { allItems, start, loading, searchTerm, input } = this.state
        return (
            <div className='SearchPage'>
                <Navbar handleSubmit={this.handleSubmit} />
                <div className="AllSearchItems">
                <Router>
                    {start && <EnterSearch path='/'/>}

                    {!start && !searchTerm && <EmptyMessage path="/"/>}

                    {loading && !start && <Loading path='/'/>}

                    {allItems.length > 0 && 
                    <SearchItems 
                    path="/" 
                    handleClick={this.handleClick}
                    input={input}
                    start={start}
                    allItems={allItems} />}

                    {allItems.length === 0 && !start &&
                    <ErrorMessage path="/"/>}

                    <SingleItem path="/:id" />
                </Router>
                </div>
            </div>
        )
    }

    handleSubmit = (searchTerm) => {
        const { upper } = this.state
        const newSearchTerm = upper ? searchTerm.toLowerCase() : searchTerm.toUpperCase()
        this.setState({
            searchTerm: newSearchTerm.trim(),
            allItems: [], 
            loading: true,
            start: false,
            upper: !upper,
            input: "image"
        })
        navigate(`/search`)
    }

    handleClick = input => {
        this.setState({
            input
        })
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.searchTerm !== this.state.searchTerm) {
            api.getItems(this.state.searchTerm)
            .then(items => {
                const allItems = items.collection.items.filter(data => data.links)
                this.setState({
                    allItems,
                    loading: false
                })
            })
            .catch(error => console.log(error))
        }
    }
}

export default SearchPage
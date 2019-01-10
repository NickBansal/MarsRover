import React, { Component } from 'react'
import Navbar from '../Components/Navbar'
import * as api from '../api';
import '../Stylesheets/SearchPage.css'
import SearchItems from '../Components/SearchItems'
import SingleItem from '../Pages/SingleItem'
import { Router, navigate } from '@reach/router'
import ErrorMessage from '../Components/ErrorMessage'
import Loading from '../Components/Loading'

class SearchPage extends Component {

    state = {
        searchTerm: "",
        allItems: [],
        start: true,
        loading: true
    }

    render() {
        const { allItems, start, loading } = this.state
        return (
            <div className='SearchPage'>
                <Navbar handleSubmit={this.handleSubmit} />
                <div className="AllSearchItems">
                <Router>
                    {loading && !start && <Loading path='/'/>}

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
            allItems: [], 
            loading: true
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
                    start: false,
                    loading: false
                })
            })
            .catch(error => console.log(error))
        }
    }
}

export default SearchPage
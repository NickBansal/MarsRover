import React, { Component } from 'react'
import Navbar from '../Components/Navbar'

class SearchPage extends Component {

    state = {
        searchTerm: ""
    }

    render() {
        const { searchTerm } = this.state 
        return (
            <div>
                <Navbar handleSubmit={this.handleSubmit}/>
                <h1>{ searchTerm }</h1>
            </div>
        )
    }

    handleSubmit = (searchTerm) => {
        this.setState({
            searchTerm
        })
    }
}

export default SearchPage
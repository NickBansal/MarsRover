import React from 'react'
import '../Stylesheets/SearchPage.css'
import { Link } from '@reach/router'
import NotAvailable from '../Stylesheets/Images/not-available.png';

const addDefaultSrc = (event) => {
    event.target.src = `${NotAvailable}`
}

const SearchItems = ({ allItems }) => {
    return (
        <div>
            { allItems.length > 0 && <p className="Results">Results: {allItems.length}</p> } 
            { allItems.map(items => {
                return (
                    <Link
                        key={items.data[0].nasa_id}
                        to={`/search/${items.data[0].nasa_id}`}>
                        <div
                            className="SingleThumbnail">
                            <img
                                onError={addDefaultSrc}
                                src={items.links[0].href}
                                alt={items.data[0].title} />
                            <strong><p>{items.data[0].title.substring(0, 40)}</p></strong>
                        </div>
                    </Link>
                )
            })}
        </div>
    )
}


export default SearchItems
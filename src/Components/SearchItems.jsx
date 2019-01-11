import React from 'react'
import '../Stylesheets/SearchPage.css'
import { Link } from '@reach/router'
import NotAvailable from '../Stylesheets/Images/not-available.png';

const addDefaultSrc = (event) => {
    event.target.src = `${NotAvailable}`
}

const SearchItems = ({ allItems, handleClick, input }) => {
    let allItemsCopy = allItems.filter(data => data.data[0].media_type === input)

    return (
        <div>
            {allItems.length > 0 &&
                <div className="Results">
                    <form onClick={(e) => handleClick(e.target.value)}>
                        <div className="RadioSelect">
                            <input type="radio" name="gender" value="image" defaultChecked/> Image
                        </div>
                        <div className="RadioSelect">
                            <input type="radio" name="gender" value="video" /> Video
                        </div>
                        <div className="RadioSelect">
                            <input type="radio" name="gender" value="audio" /> Audio
                        </div>
                    </form>
                    <p>Results: {allItemsCopy.length}</p>
                </div>}
            {allItemsCopy.map(items => {
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
                            <strong>
                                <p>{items.data[0].title.substring(0, 40).replace(new RegExp("\\-|_","g"),' ')}</p>
                            </strong>
                        </div>
                    </Link>
                )
            })}
        </div>
    )
}


export default SearchItems
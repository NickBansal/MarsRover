import React from 'react'
import '../Stylesheets/SearchPage.css'
import { Link } from '@reach/router'
import NasaLogo from '../Stylesheets/Images/NasaLogo.png';

const addDefaultSrc = (event) => {
    event.target.src = `${NasaLogo}`
}

const SearchItems = ({ allItems, handleClick, input }) => {
    let allItemsCopy = allItems.filter(data => data.data[0].media_type === input)
    const filterMessage = input === 'video' ? 'There are no videos' :
        input === 'audio' ? 'There is no audio' : 'There are no images'
    return (
        <div>
            {allItems.length > 0 &&
                <div className="Results">
                    <form onClick={(e) => handleClick(e.target.value)}>
                        <div className="RadioSelect">
                            <input type="radio" name="gender" value="image" defaultChecked /> 
                            <label value="image">Image</label>
                        </div>
                        <div className="RadioSelect">
                            <input type="radio" name="gender" value="video" />
                            <label value="video">Video</label>
                        </div>
                        <div className="RadioSelect">
                            <input type="radio" name="gender" value="audio" />
                            <label value="audio">Audio</label>
                        </div>
                    </form>
                    <p>Results: {allItemsCopy.length}</p>
                </div>}

            {allItemsCopy.length === 0 && <p className='EnterSearch'>{filterMessage} available for this search</p>}

            {allItemsCopy.map(items => {
                const { title, nasa_id } = items.data[0]
                const { href } = items.links[0]
                const newTitle = title.length < 37 ? title : `${title.substring(0, 37)}...`
                return (
                    <Link
                        key={nasa_id}
                        to={`/search/${nasa_id}`}>
                        <div
                            className="SingleThumbnail">
                            <img
                                onError={addDefaultSrc}
                                src={href}
                                alt={title} />
                            <div className="SingleThumbnailTitle">
                                <strong>
                                    <p>{newTitle.replace(new RegExp("\\-|_", "g"), ' ')}</p>
                                </strong>
                            </div>
                        </div>
                    </Link>
                )
            })}
        </div>
    )
}


export default SearchItems
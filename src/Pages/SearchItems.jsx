import React from "react";
import "../Stylesheets/SearchPage.css";
import { Link } from "@reach/router";
import MediaSelectForm from "../Components/MediaSelectForm";
import SingleThumbnail from "../Components/SingleThumbnail";

const SearchItems = ({ allItems, handleClick, input }) => {
  let allItemsCopy = allItems.filter(data => data.data[0].media_type === input);
  const filterMessage =
    input === "video"
      ? "There are no videos"
      : input === "audio"
      ? "There is no audio"
      : "There are no images";
  return (
    <div>
      {allItems.length > 0 && (
        <div className="Results">
          <MediaSelectForm handleClick={handleClick} />
          <p>Results: {allItemsCopy.length}</p>
        </div>
      )}

      {allItemsCopy.length === 0 && (
        <p className="EnterSearch">{filterMessage} available for this search</p>
      )}

      {allItemsCopy.map(items => {
        const { title } = items.data[0];
        const nasaId = items.data[0].nasa_id;
        const { href } = items.links[0];
        const newTitle =
          title.length < 37 ? title : `${title.substring(0, 37)}...`;
        return (
          <Link key={nasaId} to={`/search/${nasaId}`}>
            <SingleThumbnail href={href} title={title} newTitle={newTitle} />
          </Link>
        );
      })}
    </div>
  );
};

export default SearchItems;

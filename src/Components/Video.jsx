import React from "react";
import "../Stylesheets/SingleItem.css";
import moment from "moment";

const Video = ({ created, description, title, src1, src2 }) => {
  return (
    <div className="VideoPlayback">
      <video width="550" height="550" controls>
        <source src={src1} type="video/mp4" />
        <source src={src2} type="video/mp4" />
      </video>
      <h1>{title.replace(new RegExp("\\-|_", "g"), " ")}</h1>
      {description && (
        <p className="Description">
          {description.replace(new RegExp("\\-|_", "g"), " ")}
        </p>
      )}
      <p className="Created">Created: {moment(created).from()}</p>
    </div>
  );
};

export default Video;

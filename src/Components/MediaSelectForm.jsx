import React from "react";

const MediaSelectForm = ({ handleClick }) => {
  return (
    <form onClick={e => handleClick(e.target.value)}>
      <div className="RadioSelect">
        <input
          id="image"
          type="radio"
          name="gender"
          value="image"
          defaultChecked
        />
        <label htmlFor="image">Image</label>
      </div>
      <div className="RadioSelect">
        <input id="video" type="radio" name="gender" value="video" />
        <label htmlFor="video">Video</label>
      </div>
      <div className="RadioSelect">
        <input id="audio" type="radio" name="gender" value="audio" />
        <label htmlFor="audio">Audio</label>
      </div>
    </form>
  );
};

export default MediaSelectForm;

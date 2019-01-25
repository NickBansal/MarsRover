import React from "react";
import NasaLogo from "../Stylesheets/Images/NasaLogo.png";
import { Link } from "@reach/router";
import "../Stylesheets/LandingPage.css";

const LandingPage = () => {
  return (
    <div className="LandingPage">
      <Link to="/search">
        <img src={NasaLogo} alt="Nasa logo" />
      </Link>
      <h1>Nasa Image Search Page</h1>
      <p>Please click the picture to start your search</p>
    </div>
  );
};

export default LandingPage;

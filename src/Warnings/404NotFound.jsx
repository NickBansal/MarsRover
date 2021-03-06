import React from "react";
import "../Stylesheets/SearchPage.css";
import { Link } from "@reach/router";

const NotFound = () => {
  return (
    <div style={{ margin: "200px 0" }} className="404">
      <h1>404 Page not found</h1>
      <h3>
        Please click{" "}
        <Link style={{ textDecoration: "underline" }} to="/search">
          HERE
        </Link>{" "}
        to begin your search
      </h3>
    </div>
  );
};
export default NotFound;

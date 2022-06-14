import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/search">Search</Link>
        </li>
        <li>
          <Link to="/trending">Trending</Link>
        </li>
      </ul>
      <img src='https://res.cloudinary.com/djw882kt3/image/upload/v1655246007/Media/FRD_5039_u2n9lf.jpg'/>

    </div>
  );
};

export default Navbar;

import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className='blog-not-found'>
      <h2>We Are Sorry</h2>
      <p>We didn't found the page</p>
      <Link to='/'>Go Back To Your Home Page</Link>
    </div>
  );
};

export default NotFound;

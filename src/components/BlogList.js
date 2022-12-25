import React from "react";
import { Link } from "react-router-dom";

const BlogList = ({ data, title, handleDelete }) => {
  return (
    <div className="blog-list">
      <h2>{title}</h2>
      {data.map((blog) => (
        <div className="blog-preview " key={blog.id}>
          <Link to={`/blogs/${blog.id}`}>
            <h2>{blog.title}</h2>
            <p>Written by {blog.body}</p>
          </Link>
          <button onClick={() => handleDelete(blog.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default BlogList;

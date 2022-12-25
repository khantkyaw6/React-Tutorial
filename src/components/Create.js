import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author] = useState("mario");
  const [ispending, setIsPending] = useState(false);
  const history = useHistory();

  const submitHandler = (e) => {
    e.preventDefault();
    setIsPending(true);
    const blog = { title, body, author };

    fetch("http://localhost:8000/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      setIsPending(false);
      history.push("/");
      console.log("New Blogs Added");
    });
  };

  return (
    <div className='create'>
      <h2>Add a New Blog</h2>
      <form onSubmit={submitHandler}>
        <label>Blog title:</label>
        <input
          type='text'
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Blog author:</label>
        <select>
          <option value='mario'>mario</option>
          <option value='yoshi'>yoshi</option>
        </select>
        {!ispending && <button type='submit'>Add Blog</button>}
        {ispending && (
          <button disabled type='submit'>
            Blog Adding...
          </button>
        )}
      </form>
      {/* <p>{title}</p>
      <p>{body}</p>
      <p>{author}</p> */}
    </div>
  );
};

export default Create;

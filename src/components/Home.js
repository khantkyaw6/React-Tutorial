import React from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  const { data, isLoading, error, setData } = useFetch(
    "http://localhost:8000/blogs"
  );

  const handleDelete = (id) => {
    const newData = data.filter((blog) => blog.id !== id);
    setData(newData);
  };

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isLoading && <div>Loading...</div>}
      {data && (
        <BlogList data={data} title={"All Blogs"} handleDelete={handleDelete} />
      )}
      {/* <BlogList
        blogs={blogs.filter((blog) => blog.author === "mario")}
        title={"Mario's Blogs"}
        handleDelete={handleDelete}
      /> */}
      {/* <p>{name}</p>
      <button onClick={() => setName("Hello World")}>Change name</button> */}
    </div>
  );
};

export default Home;

import { useState, useEffect } from "react";
import BlogList from "../BlogList/BlogListComponent";

const Home = () => {

  const [blogs, setBlogs] = useState(null);

  const [isLoading, setIsLoading] = useState(true);

  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8000/blogs')
      .then(res => {
        return res.json();
      })
      .then(data => {
        console.log(data);
        setIsLoading(false);
        setError(null)
        setBlogs(data);
      })
      .catch(err => {
        //debugger;
        setIsLoading(false);
        setError(err.message);
      })
  }, [])
  


  return (
    <div className="home">
      {isLoading && <div>Loading...</div>}
      { error && <div>{error}</div> }
      {blogs && <BlogList blogs={blogs} title={"All Blogs"} />}
    </div>
  );


}

export default Home;
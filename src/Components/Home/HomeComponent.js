import { useState, useEffect } from "react";
import BlogList from "../BlogList/BlogListComponent";

const Home = () => {

  const [blogs, setBlogs] = useState(null);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // setTimeout(() => {
    //   fetch('http://localhost:8000/blogs')
    //   .then(res => {
    //     return res.json();
    //   })
    //   .then(data => {
    //     setIsLoading(false);
    //     setBlogs(data);
    //   })
    // }, 1000);
    fetch('http://localhost:8000/blogs')
      .then(res => {
        return res.json();
      })
      .then(data => {
        console.log(data);
        setIsLoading(false);
        setBlogs(data);
      });
      
  }, [])

  return (
    <div className="home">
      {isLoading && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} title={"All Blogs"} />}
    </div>
  );


}

export default Home;
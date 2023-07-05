import { useState, useEffect } from "react";
import BlogList from "../BlogList/BlogListComponent";

const Home = () => {

    const [blogs, setBlogs] = useState(null);
    
    const handelDeleteBlog = (id) => {
        const newBlogs = blogs.filter((blog)=> blog.id !== id);
        setBlogs(newBlogs);
    }

    const [name, setName] = useState("mario");
    
    useEffect(() => {
        console.log("Use Effect Run Only One Time")

        fetch("http://localhost:8000/blogs")
          .then(res => {
            return res.json();
          }).then(data=>{
            console.log(data)
            setBlogs(data);
          })

      }, [])

    return ( 
        <div className="home">
            { blogs && <BlogList blogs={blogs} title={"All Blogs"}/> }
        </div>
     );


}
 
export default Home;
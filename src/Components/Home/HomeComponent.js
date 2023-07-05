import { useState, useEffect } from "react";
import BlogList from "../BlogList/BlogListComponent";

const Home = () => {

    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
      ])
    const handelDeleteBlog = (id) => {
        const newBlogs = blogs.filter((blog)=> blog.id !== id);
        setBlogs(newBlogs);
    }

    const [name, setName] = useState("mario");
    
    // useEffect(() => {
    //     console.log("Use Effect Run Only One Time")
    //   }, [])

    useEffect(()=>{
        console.log("Use Effect Run On Dependencies");
        console.log(name);
    }, [name])

    return ( 
        <div className="home">
            <BlogList blogs={blogs} title={"All Blogs"} handelDeleteBlog ={handelDeleteBlog}/>
            {/* <BlogList blogs={blogs.filter((blog)=> blog.author ==='mario')} title={"All Mario's Blogs"}/> */}
            <br />
            <button onClick={()=> setName("wiki")}> Click Me</button>
            <p>{name}</p>
        </div>
     );


}
 
export default Home;
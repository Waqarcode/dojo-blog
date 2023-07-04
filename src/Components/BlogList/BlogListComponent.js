
//prop More Detail in Doc file of React
const BlogList = ({blogs, title, handelDeleteBlog}) => {
    return ( 
        <div className="blog-list">
            <h2>
                {title}
            </h2>
            {blogs.map(blog =>(
                    <div className="blog-preview" key={blog.id}>
                        <h2>{blog.title}</h2>
                        <p>Written by {blog.author}</p>
                        <button onClick={() => handelDeleteBlog(blog.id)}> Delete </button>
                    </div>
                ))}
        </div>
     );
}
 
export default BlogList;
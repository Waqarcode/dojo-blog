import BlogList from "../BlogList/BlogListComponent";
import useFetch from "../../EndPoint/useFetch";

const Home = () => {

  const {data: blogs, isLoading, error} = useFetch('http://localhost:8000/blogs');

  return (
    <div className="home">
      {isLoading && <div>Loading...</div>}
      { error && <div>{error}</div> }
      {blogs && <BlogList blogs={blogs} title={"All Blogs"} />}
    </div>
  );
}

export default Home;
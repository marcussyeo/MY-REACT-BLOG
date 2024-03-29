import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  const {
    data: blogs,
    isPending,
    error,
  } = useFetch("http://localhost:8000/blogs");

  return (
    <div className="home">
      {/* Conditional Output for JavaScript */}
      {/* blogs && is to ensure that it d<<oesn't map null values in BlogList.js when initialising the website */}
      {error && <div> {error} </div>}
      {isPending && <div>Fetching data...</div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs" />}
    </div>
  );
};

export default Home;

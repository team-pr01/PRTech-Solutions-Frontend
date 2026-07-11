import AllBlogs from "../../components/BlogsPage/AllBlogs/AllBlogs";
import BlogsHero from "../../components/BlogsPage/BlogsHero/BlogsHero";
import TrendingBlogs from "../../components/BlogsPage/TrendingBlogs/TrendingBlogs";

const Blogs = () => {
  return (
    <div>
      <BlogsHero />
      <TrendingBlogs />
      <AllBlogs />
    </div>
  );
};

export default Blogs;

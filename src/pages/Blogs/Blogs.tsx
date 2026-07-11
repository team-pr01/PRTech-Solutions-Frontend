import AllBlogs from "../../components/BlogsPage/AllBlogs/AllBlogs";
import BlogsHero from "../../components/BlogsPage/BlogsHero/BlogsHero";
import TrendingBlogs from "../../components/BlogsPage/TrendingBlogs/TrendingBlogs";
import SubscribeNewsletter from "../../components/Shared/SubscribeNewsletter/SubscribeNewsletter";

const Blogs = () => {
  return (
    <div>
      <BlogsHero />
      <TrendingBlogs />
      <AllBlogs />
      <SubscribeNewsletter/>
    </div>
  );
};

export default Blogs;

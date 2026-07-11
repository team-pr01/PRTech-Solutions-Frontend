import { useNavigate } from "react-router-dom";
import { IMAGES } from "../../assets";
import FeaturedCaseStudies from "../../components/AboutUsPage/FeaturedCaseStudies/FeaturedCaseStudies";
import AllBlogs from "../../components/BlogsPage/AllBlogs/AllBlogs";
import BlogsHero from "../../components/BlogsPage/BlogsHero/BlogsHero";
import TrendingBlogs from "../../components/BlogsPage/TrendingBlogs/TrendingBlogs";
import CTA from "../../components/Reusable/CTA/CTA";
import SubscribeNewsletter from "../../components/Shared/SubscribeNewsletter/SubscribeNewsletter";
import { useGetAllBlogsQuery } from "../../redux/Features/Blog/blogApi";
import { useState } from "react";
import type { TBlog } from "../../types/blog.type";

const Blogs = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const { data } = useGetAllBlogsQuery({ category: selectedCategory });
  const featuredBlogs = data?.data?.data?.filter(
    (blog: TBlog) => blog.isFeatured,
  );
  return (
    <div>
      <BlogsHero featuredBlogs={featuredBlogs} />
      <TrendingBlogs />
      <AllBlogs
        blogs={data?.data?.data || []}
        meta={data?.data?.meta}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <CTA
        backgroundImage={IMAGES.ctaBg5}
        title="Let’s Turn Your Idea Into a Scalable Product"
        description="We don’t just build websites — we create systems that generate leads, automate operations, and help you scale faster."
        primaryButton={{
          label: "Start Your Project",
          onClick: () => navigate("/contact-us"),
          variant: "secondary",
        }}
      />
      <FeaturedCaseStudies />
      <SubscribeNewsletter />
    </div>
  );
};

export default Blogs;

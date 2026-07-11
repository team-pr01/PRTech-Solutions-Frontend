import { useNavigate } from "react-router-dom";
import { IMAGES } from "../../assets";
import FeaturedCaseStudies from "../../components/AboutUsPage/FeaturedCaseStudies/FeaturedCaseStudies";
import AllBlogs from "../../components/BlogsPage/AllBlogs/AllBlogs";
import BlogsHero from "../../components/BlogsPage/BlogsHero/BlogsHero";
import TrendingBlogs from "../../components/BlogsPage/TrendingBlogs/TrendingBlogs";
import CTA from "../../components/Reusable/CTA/CTA";
import SubscribeNewsletter from "../../components/Shared/SubscribeNewsletter/SubscribeNewsletter";

const Blogs = () => {
  const navigate = useNavigate();
  return (
    <div>
      <BlogsHero />
      <TrendingBlogs />
      <AllBlogs />
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

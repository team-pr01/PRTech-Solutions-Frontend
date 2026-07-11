/* eslint-disable react-hooks/set-state-in-effect */
import { useNavigate } from "react-router-dom";
import { IMAGES } from "../../assets";
import FeaturedCaseStudies from "../../components/AboutUsPage/FeaturedCaseStudies/FeaturedCaseStudies";
import AllBlogs from "../../components/BlogsPage/AllBlogs/AllBlogs";
import BlogsHero from "../../components/BlogsPage/BlogsHero/BlogsHero";
import TrendingBlogs from "../../components/BlogsPage/TrendingBlogs/TrendingBlogs";
import CTA from "../../components/Reusable/CTA/CTA";
import SubscribeNewsletter from "../../components/Shared/SubscribeNewsletter/SubscribeNewsletter";
import { useGetAllBlogsQuery } from "../../redux/Features/Blog/blogApi";
import { useCallback, useEffect, useState } from "react";
import type { TBlog } from "../../types/blog.type";

const Blogs = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [allBlogs, setAllBlogs] = useState<TBlog[]>([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const { data, isLoading,  isFetching } = useGetAllBlogsQuery({ category: selectedCategory });
  const featuredBlogs = data?.data?.data?.filter(
    (blog: TBlog) => blog.isFeatured,
  );

  // Reset blogs when category changes
  useEffect(() => {
    setAllBlogs([]);
    setPage(1);
    setHasMore(true);
  }, [selectedCategory]);

  // Update blogs when data changes
  useEffect(() => {
    if (data?.data?.data) {
      const incoming = data.data.data as TBlog[];
      if (page === 1) {
        setAllBlogs(incoming);
      } else {
        setAllBlogs((prev: TBlog[]) => [...prev, ...incoming]);
      }
      setHasMore(data.data.meta?.hasMore || false);
    }
  }, [data, page]);

  // Load more function
  const fetchMore = useCallback(() => {
    if (!isFetching && hasMore) {
      setPage((prev) => prev + 1);
    }
  }, [isFetching, hasMore]);
  return (
    <div>
      <BlogsHero />
      <TrendingBlogs featuredBlogs={featuredBlogs} />
      <AllBlogs
        blogs={allBlogs || []}
        meta={data?.data?.meta}
        fetchMore={fetchMore}
        isLoading={isLoading || isFetching}
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

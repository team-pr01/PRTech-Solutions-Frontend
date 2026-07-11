/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef, useCallback } from "react";
import Container from "../../Reusable/Container/Container";
import BlogCard from "../BlogCard/BlogCard";
import type { TBlog } from "../../../types/blog.type";

const AllBlogs = ({
  selectedCategory,
  setSelectedCategory,
  blogs,
  meta,
  fetchMore,
  isLoading,
}: any) => {
  const observerRef = useRef<HTMLDivElement | null>(null);
  const hasMore = meta?.hasMore || false;

  // Categories
  const categories = ["All", "Fintech", "Healthcare", "SaaS", "Development"];

  // Intersection Observer for infinite scroll
  const handleObserver = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const target = entries[0];
      if (target.isIntersecting && hasMore && !isLoading) {
        fetchMore();
      }
    },
    [hasMore, isLoading, fetchMore],
  );

  useEffect(() => {
    const observer = new IntersectionObserver(handleObserver, {
      root: null,
      rootMargin: "200px",
      threshold: 0,
    });

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => {
      if (observerRef.current) {
        observer.unobserve(observerRef.current);
      }
    };
  }, [handleObserver]);

  return (
    <div className="bg-gradient-latest-project-bg sectionPadding font-Manrope">
      <Container>
        {/* Header */}
        <div className="text-center">
          <div className="flex items-center justify-center gap-2">
            <div className="size-4 rounded-full border-2 border-primary-10 flex items-center justify-center">
              <div className="size-1.5 rounded-full bg-primary-10"></div>
            </div>
            <p className="text-neutral-70 subHeading">Blogs</p>
          </div>

          <h2 className="text-neutral-70 heading mt-2.5">
            Our{" "}
            <span className="font-Playfair-Display italic font-medium">
              Latest
            </span>{" "}
            <span className="text-primary-10">Blogs</span>
          </h2>

          <p className="description text-neutral-80 max-w-179 mx-auto my-6">
            Explore expert insights, practical guides, and the latest trends in
            web development, AI, software solutions, and digital innovation to
            help you stay ahead in the ever-evolving tech landscape.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex items-center justify-center overflow-auto gap-5 w-full mx-auto mt-6">
          {categories?.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`py-2 px-5 text-sm 2xl:text-base text-nowrap font-medium text-left rounded-3xl 2xl:rounded-[70px] w-fit transition duration-300 ${
                selectedCategory === category
                  ? "bg-primary-10 text-white"
                  : "text-neutral-85 bg-primary-10/10 hover:bg-primary-10 hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {blogs?.map((blog: TBlog) => (
            <BlogCard key={blog?._id} blog={blog} />
          ))}
        </div>

        {/* Loading Indicator */}
        {isLoading && (
          <div className="flex justify-center items-center py-8">
            <div className="animate-spin rounded-full h-10 w-10 border-4 border-primary-10 border-t-transparent"></div>
          </div>
        )}

        {/* Observer Target */}
        <div ref={observerRef} className="h-10" />

        {/* Empty State */}
        {blogs?.length === 0 && !isLoading && (
          <div className="text-center py-12">
            <p className="text-gray-500">No blogs found in this category</p>
          </div>
        )}
      </Container>
    </div>
  );
};

export default AllBlogs;

import { useState } from "react";
import Container from "../../Reusable/Container/Container";
import BlogCard from "../BlogCard/BlogCard";
import { useGetAllBlogsQuery } from "../../../redux/Features/Blog/blogApi";
import type { TBlog } from "../../../types/blog.type";

const AllBlogs = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const { data } = useGetAllBlogsQuery({ category: selectedCategory });
  console.log(data);
  const blogs = data?.data?.data || [];
  const meta = data?.data?.meta || [];
  const categories = ["All", "Fintech", "Healthcare", "SaaS", "E-commerce"];
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

        <div className="grid grid-cols-3 gap-6 mt-8">
          {blogs?.map((blog: TBlog) => (
            <BlogCard key={blog?._id} blog={blog} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default AllBlogs;

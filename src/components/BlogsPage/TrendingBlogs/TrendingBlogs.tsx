

import type { TBlog } from "../../../types/blog.type";
import Container from "../../Reusable/Container/Container";
import TrendingBlogCard from "./TrendingBlogCard/TrendingBlogCard";

const TrendingBlogs = ({ featuredBlogs }: { featuredBlogs: TBlog[] }) => {
  return (
    <div className="sectionPadding font-Manrope">
      <Container>
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="w-full lg:w-[40%] lg:sticky lg:h-fit lg:top-35">
            <h1 className="text-neutral-20 text-3xl md:text-[40px] lg:text-[48px] font-semibold leading-9 md:leading-12 lg:leading-14">
              Trending Articles You Have to Read
            </h1>
            <p className="text-neutral-80 mt-4">
              The insights, strategies, and technology trends our readers are
              exploring right now.
            </p>
          </div>

          <div className="w-full lg:w-[60%] flex flex-col gap-6">
            {featuredBlogs?.map((blog) => (
              <TrendingBlogCard key={blog?._id} blog={blog} />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default TrendingBlogs;

import { IMAGES } from "../../../assets";
import Container from "../../Reusable/Container/Container";
import TrendingBlogCard from "./TrendingBlogCard/TrendingBlogCard";

const TrendingBlogs = () => {
  return (
    <div className="sectionPadding font-Manrope">
      <Container>
        <div className="flex gap-10">
          <div className="w-[40%] sticky h-fit top-5">
            <h1 className="text-neutral-20 text-3xl md:text-[40px] lg:text-[48px] font-semibold leading-9 md:leading-12 lg:leading-14">
              Trending Articles You Have to Read
            </h1>
            <p className="text-neutral-80 mt-4">
              The insights, strategies, and technology trends our readers are
              exploring right now.
            </p>

            <img src={IMAGES.trendingBlog} alt="" className="mt-20" />
          </div>

          <div className="w-[60%] flex flex-col gap-6">
            <TrendingBlogCard />
            <TrendingBlogCard />
            <TrendingBlogCard />
            <TrendingBlogCard />
            <TrendingBlogCard />
            <TrendingBlogCard />
            <TrendingBlogCard />
            <TrendingBlogCard />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default TrendingBlogs;

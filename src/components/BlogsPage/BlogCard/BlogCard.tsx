import { Link } from "react-router-dom";
import { ICONS, IMAGES } from "../../../assets";

const BlogCard = () => {
  return (
    <div className="flex flex-col items-center gap-3 relative">
      <img
        src={IMAGES.dummyBlogs}
        alt=""
        className="rounded-2xl object-cover"
      />
      <div className="flex items-center gap-2 absolute top-3 left-3">
        <div className="text-neutral-20 bg-primary-45/70 font-medium text-center text-[10px] px-2 py-1.5 rounded-3xl">
          Product Strategy
        </div>
        <p className="text-white text-xs">8 min read</p>
      </div>
      <div>
        <h1 className="text-neutral-20 text-xl font-semibold">
          Building Digital Products That Scale With Your Business
        </h1>

        <p className="text-neutral-50 text-sm mt-1 mb-3">
          A successful digital product should solve today's challen- ges while
          being ready for tomorrow's growth. Discover Discover how thoughtful
          strategy, user-centered
        </p>

        <Link
          to="/blog/1"
          className="flex items-center gap-1 text-sm font-medium"
        >
          Read More
          <img src={ICONS.arrowRightDark} alt="" className="w-4 mt-0.5" />
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;

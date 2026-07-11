import { Link } from "react-router-dom";
import { ICONS, IMAGES } from "../../../../assets";

const TrendingBlogCard = () => {
  return (
    <div className="flex items-center gap-6">
      <img
        src={IMAGES.dummyBlogs}
        alt=""
        className="rounded-2xl w-80 object-cover"
      />
      <div>
        <div className="flex items-center gap-2">
          <div className="text-primary-10 bg-primary-45/70 font-medium text-center text-[10px] px-2 py-1.5 rounded-3xl">
            Product Strategy
          </div>
          <p className="text-neutral-80 text-xs">8 min read</p>
        </div>
        <h1 className="text-neutral-20 text-xl font-semibold mt-3">
          Building Digital Products That Scale With Your Business
        </h1>

        <p className="text-neutral-50 text-sm mt-1 mb-4">
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

export default TrendingBlogCard;

import { Link } from "react-router-dom";
import { ICONS } from "../../../../assets";
import type { TBlog } from "../../../../types/blog.type";

const TrendingBlogCard = ({ blog }: { blog: TBlog }) => {
  return (
    // Kept items-center gap-6, but reduced gap slightly on mobile
    <div className="flex items-center gap-3 sm:gap-6 w-full">
      
      {/* Adjusted width and height for mobile, kept exact sizes for desktop */}
      <img
        src={blog?.imageUrl}
        alt={blog?.title}
        className="rounded-2xl w-32 h-32 sm:w-56 sm:h-40 md:w-80 md:h-50 object-cover shrink-0 aspect-video"
      />
      
      {/* Added flex-1 so the text container fills the remaining space */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 flex-wrap">
          <div className="text-primary-10 bg-primary-45/70 font-medium text-center text-[10px] px-2 py-1.5 rounded-3xl">
            {blog?.category}
          </div>
          <p className="text-neutral-80 text-[10px] sm:text-xs">{blog?.timeToRead} read</p>
        </div>
        
        {/* Reduced text sizes on mobile to fit next to the smaller image */}
        <h1 className="text-neutral-20 text-sm sm:text-lg md:text-xl font-semibold mt-2 sm:mt-3 line-clamp-2 md:line-clamp-none">
          {blog?.title}
        </h1>

        <p className="text-neutral-50 text-xs sm:text-sm mt-1 mb-2 sm:mb-4 line-clamp-2 md:line-clamp-none">
          {blog?.overview}
        </p>

        <Link
          to={`/blog/${blog?.slug}`}
          className="flex items-center gap-1 text-xs sm:text-sm font-medium text-neutral-16 hover:text-primary-10 transition-colors w-fit"
        >
          Read More
          <img src={ICONS.arrowRightDark} alt="" className="w-3 sm:w-4 mt-0.5" />
        </Link>
      </div>
    </div>
  );
};

export default TrendingBlogCard;
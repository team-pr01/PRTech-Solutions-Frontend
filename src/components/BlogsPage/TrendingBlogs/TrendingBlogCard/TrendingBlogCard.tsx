import { Link } from "react-router-dom";
import { ICONS } from "../../../../assets";
import type { TBlog } from "../../../../types/blog.type";

const TrendingBlogCard = ({ blog }: { blog: TBlog }) => {
  return (
    <div className="flex items-center gap-6">
      <img
        src={blog?.imageUrl}
        alt=""
        className="rounded-2xl w-80 h-50 object-cover"
      />
      <div>
        <div className="flex items-center gap-2">
          <div className="text-primary-10 bg-primary-45/70 font-medium text-center text-[10px] px-2 py-1.5 rounded-3xl">
            {blog?.category}
          </div>
          <p className="text-neutral-80 text-xs">{blog?.timeToRead} read</p>
        </div>
        <h1 className="text-neutral-20 text-xl font-semibold mt-3">
          {blog?.title}
        </h1>

        <p className="text-neutral-50 text-sm mt-1 mb-4">{blog?.overview}</p>

        <Link
          to={`/blog/${blog?.slug}`}
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

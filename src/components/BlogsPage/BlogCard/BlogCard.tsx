import { Link } from "react-router-dom";
import { ICONS } from "../../../assets";
import type { TBlog } from "../../../types/blog.type";
import { FiClock } from "react-icons/fi";

const BlogCard = ({ blog }: { blog: TBlog }) => {
  return (
    <div className="flex flex-col items-center gap-3 relative text-left font-Manrope">
      <img
        src={blog?.imageUrl}
        alt=""
        className="rounded-2xl object-cover aspect-video h-60 w-full"
      />
      <div className="flex items-center gap-2 absolute top-3 left-3">
        <div className="text-neutral-20 bg-primary-45/70 font-medium text-center text-[10px] px-2 py-1.5 rounded-3xl">
          {blog?.category}
        </div>
        <div className="flex items-center gap-1 text-white bg-neutral-20/60 backdrop-blur-sm font-medium text-[10px] px-2.5 py-1.5 rounded-3xl">
          <FiClock size={10} />
          {blog?.timeToRead} read
        </div>
      </div>
      <div className="w-full">
        <h1 className="text-neutral-20 text-xl font-semibold">{blog?.title}</h1>

        <p className="text-neutral-50 text-sm mt-1 mb-3 line-clamp-2 leading-normal">
          {blog?.overview}
        </p>

        <Link
          to={`/blog/${blog?.slug}`}
          className="flex items-center gap-1 text-sm font-medium text-neutral-16 hover:text-primary-10 transition duration-300"
        >
          Read More
          <img src={ICONS.arrowRightDark} alt="" className="w-4 mt-0.5" />
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;

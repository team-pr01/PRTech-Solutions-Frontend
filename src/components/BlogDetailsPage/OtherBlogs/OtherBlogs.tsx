import { Link } from "react-router-dom";
import type { TBlog } from "../../../types/blog.type";

const OtherBlogs = ({ otherBlogs }: { otherBlogs: TBlog[] }) => {
  return (
    <div className="pb-5 border-b border-neutral-50/10">
      <p className="text-neutral-50 font-medium">Other Blogs</p>
      <div className="flex flex-col mt-3">
        {otherBlogs?.map((blog: TBlog) => (
          <Link
            to={`/blog/${blog?.slug}`}
            className="flex items-center gap-3 group"
          >
            <img
              src={blog?.imageUrl}
              alt=""
              className="rounded-lg w-24 h-18 object-cover"
            />
            <div>
              <p className="text-neutral-80 text-xs font-medium">
                {blog?.category}
              </p>
              <h1 className="text-neutral-20 text-sm font-semibold mt-1 group-hover:underline">
                {blog?.title}
              </h1>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default OtherBlogs;

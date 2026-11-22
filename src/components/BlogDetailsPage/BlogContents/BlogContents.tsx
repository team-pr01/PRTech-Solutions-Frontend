import type { TBlog } from "../../../types/blog.type";

const BlogContents = ({ blog }: { blog: TBlog }) => {
  return (
    <>
      <h1 className="text-neutral-20 text-2xl md:text-[40px] lg:text-[48px] font-semibold">
        {blog?.title}
      </h1>

      <div className="flex items-center gap-2 mt-4">
        <div className="text-primary-10 bg-primary-45/70 font-medium text-center text-xs px-2 py-1.5 rounded-3xl">
          {blog?.category}
        </div>
        <p className="text-neutral-80 text-sm font-medium">
          {blog?.timeToRead} read
        </p>
      </div>

      <img
        src={blog?.imageUrl}
        alt=""
        className="rounded-2xl 2xl:rounded-4xl w-full aspect-video h-60 md:h-100 xl:h-110 2xl:h-130 object-cover mt-5"
      />

      <p className="mt-8">
        <div dangerouslySetInnerHTML={{ __html: blog?.description }} />
      </p>
    </>
  );
};

export default BlogContents;

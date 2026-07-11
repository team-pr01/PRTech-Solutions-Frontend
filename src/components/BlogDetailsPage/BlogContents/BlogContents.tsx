import type { TBlog } from "../../../types/blog.type";

const BlogContents = ({ blog }: { blog: TBlog }) => {
  return (
    <>
      <h1 className="text-neutral-20 text-3xl md:text-[40px] lg:text-[48px] font-semibold leading-9 md:leading-12 lg:leading-14 mt-4">
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
        className="rounded-2xl 2xl:rounded-4xl w-full h-130 object-cover mt-5"
      />

      <p className="mt-8">
        <div dangerouslySetInnerHTML={{ __html: blog?.description }} />
      </p>
    </>
  );
};

export default BlogContents;

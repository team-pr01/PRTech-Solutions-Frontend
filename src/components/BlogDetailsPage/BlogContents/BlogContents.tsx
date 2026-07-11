import { IMAGES } from "../../../assets";

const BlogContents = () => {
  return (
    <>
      <h1 className="text-neutral-20 text-3xl md:text-[40px] lg:text-[48px] font-semibold leading-9 md:leading-12 lg:leading-14 mt-4">
        Building Digital Products That Scale With Your Business
      </h1>

      <div className="flex items-center gap-2 mt-4">
        <div className="text-primary-10 bg-primary-45/70 font-medium text-center text-xs px-2 py-1.5 rounded-3xl">
          Product Strategy
        </div>
        <p className="text-neutral-80 text-sm font-medium">8 min read</p>
      </div>

      <img
        src={IMAGES.dummyBlogs}
        alt=""
        className="rounded-2xl 2xl:rounded-4xl w-full h-130 object-cover mt-5"
      />

      <p className="text-neutral-50 mt-8">
        A successful digital product should solve today's challen- ges while
        being ready for tomorrow's growth. Discover Discover how thoughtful
        strategy, user-centered
      </p>
    </>
  );
};

export default BlogContents;

import { IMAGES } from "../../../assets";

const OtherBlogs = () => {
  return (
    <div className="pb-5 border-b border-neutral-50/10">
      <p className="text-neutral-50 font-medium">Other Blogs</p>
      <div className="flex flex-col mt-3">
        <div className="flex items-center gap-3">
          <img
            src={IMAGES.dummyBlogs}
            alt=""
            className="rounded-lg w-24 object-cover"
          />
          <div>
            <p className="text-neutral-80 text-xs font-medium">
              Product Strategy
            </p>
            <h1 className="text-neutral-20 text-sm font-semibold mt-1">
              Building Digital Products That Scale With Your Business
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtherBlogs;

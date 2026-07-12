import { ICONS, IMAGES } from "../../../../assets";
import Button from "../../../Reusable/Button/Button";

const CaseStudyCard = () => {
  return (
    <div className="flex gap-6">
      <div className="w-[70%] relative rounded-3xl max-h-145">
        <img
          src={IMAGES.attributionBoosterWebsite}
          alt=""
          className="rounded-3xl object-cover w-full h-full"
        />
        <div className="bg-gradient-case-study-img rounded-b-3xl backdrop-blur-lg px-8 py-4 absolute bottom-0 right-0 left-0 w-full flex flex-col h-fit">
          <div className="bg-neutral-92 border border-neutral-50/40 backdrop-blur-[34px] text-white font-medium text-center text-xs px-4 py-2 rounded-lg w-fit">
            Education Marketplace
          </div>

          <div className="flex items-center justify-between mt-3">
            <h1 className="text-white text-2xl font-semibold w-[70%]">
              Scaling a Tutor Marketplace 4× Faster with a Structured Hiring
              Platform
            </h1>
            <Button label="View Case Study" />
          </div>
        </div>
      </div>

      <div className="w-[30%] flex flex-col justify-between">
        <p className="text-neutral-80 font-medium">
          We transformed a manual tutor–guardian business into a scalable
          digital marketplace with automated workflows, structured hiring
          pipelines, and centralized operations.
        </p>

        <div className="space-y-3">
          <div className="rounded-xl border border-primary-20 bg-neutral-40 p-4 relative">
            <div className="w-0.5 h-10 bg-primary-15 absolute left-0"></div>
            <div className="bg-primary-10 flex items-center justify-center size-10 rounded-lg">
              <img src={ICONS.travel} alt="" className="size-6" />
            </div>
            <h1 className="text-primary-10 text-4xl font-bold mt-5">4x</h1>
            <p className="text-neutral-30 font-semibold mt-2">
              growth in 4 months
            </p>
          </div>
          <div className="rounded-xl border border-primary-20 bg-neutral-40 p-4 relative">
            <div className="w-0.5 h-10 bg-primary-15 absolute left-0"></div>
            <div className="bg-primary-10 flex items-center justify-center size-10 rounded-lg">
              <img src={ICONS.travel} alt="" className="size-6" />
            </div>
            <h1 className="text-primary-10 text-4xl font-bold mt-5">4x</h1>
            <p className="text-neutral-30 font-semibold mt-2">
              growth in 4 months
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyCard;

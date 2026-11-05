/* eslint-disable @typescript-eslint/no-explicit-any */
import { IMAGES } from "../../../../assets";
import Button from "../../../Reusable/Button/Button";

const MoreCaseStudyCard = ({ caseStudy }: any) => {
  console.log(caseStudy);
  return (
    <div>
      <div className="relative rounded-3xl max-h-145">
        <img
          src={IMAGES.attributionBoosterWebsite}
          alt=""
          className="rounded-3xl object-cover w-full aspect-3/2"
        />
        <div className="bg-gradient-case-study-img rounded-b-3xl backdrop-blur-lg px-8 py-4 absolute bottom-0 right-0 left-0 w-full flex flex-col h-fit">
          <div className="bg-neutral-92 border border-neutral-50/40 backdrop-blur-[34px] text-white font-medium text-center text-xs px-4 py-2 rounded-lg w-fit">
            SaaS Product
          </div>

          <div className="flex items-center justify-between mt-3">
            <h1 className="text-white text-2xl font-semibold flex-1">
              Automating Onboarding for a B2B SaaS Platform UX Design
            </h1>
            <Button label="View Case Study" />
          </div>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="bg-neutral-66 p-4 rounded-3xl mt-5">
        <h4 className="text-neutral-80 text-xs font-medium">Key Metrics</h4>
        <p className="text-neutral-65 font-medium mt-2 text-xs 2xl:text-sm">
          How we reduced time-to-value from 2 weeks to 48 hours through a smart
          onboarding engine. Coming soon.
        </p>
      </div>
    </div>
  );
};

export default MoreCaseStudyCard;

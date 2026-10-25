import { Link } from "react-router-dom";
import { ICONS, IMAGES } from "../../../assets";

const MoreResourceCard = () => {
  return (
    <div className="bg-primary-40 rounded-2xl font-Manrope">
      {/* Image */}
      <div className="relative">
        <img src={IMAGES.seo} alt="" className="rounded-t-2xl h-75" />
        <div className="flex items-center gap-1.5 absolute bottom-4 left-4">
          <div className="bg-neutral-87 rounded-lg px-4 py-2 text-white font-Manrope text-xs flex items-center justify-center">
            SaaS
          </div>
          <div className="bg-neutral-87 rounded-lg px-4 py-2 text-white font-Manrope text-xs flex items-center justify-center">
            SEO
          </div>
        </div>
      </div>

      <div className="p-2">
        <div className="bg-white p-4 rounded-lg">
          <h2 className="text-neutral text-neutral-65 text-2xl font-semibold">
            The SaaS SEO Playbook
          </h2>
          <p className="text-neutral-86 mt-2">
            A step-by-step guide to ranking your SaaS product in a competitive search landscape without burning your budget.
          </p>

          <Link
            to={`/case-studies`}
            className="text-neutral-65 text-lg font-medium flex items-center gap-2 mt-6"
          >
            Download For Free
            <img src={ICONS.downloadGray} alt="" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MoreResourceCard;

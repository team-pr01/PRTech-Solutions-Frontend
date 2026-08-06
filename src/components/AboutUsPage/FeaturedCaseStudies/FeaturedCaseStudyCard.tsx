import { Link } from "react-router-dom";
import { ICONS, IMAGES } from "../../../assets";

const FeaturedCaseStudyCard = () => {
  return (
    <div className="bg-primary-40 rounded-2xl">
      {/* Image */}
      <div className="relative">
        <img src={IMAGES.seo} alt="" className="rounded-t-2xl" />
        <div className="flex items-center gap-1.5 absolute bottom-4 left-4">
          <div className="bg-neutral-87 rounded-lg px-4 py-2 text-white font-Manrope text-xs flex items-center justify-center">
            Tuition Media
          </div>
          <div className="bg-neutral-87 rounded-lg px-4 py-2 text-white font-Manrope text-xs flex items-center justify-center">
            Custom Software
          </div>
        </div>
      </div>

      <div className="p-2">
        <div className="bg-white p-4 rounded-lg">
          <h2 className="text-neutral text-neutral-65 text-2xl font-semibold">
            Btc High-Frequency Custodial Pipeline
          </h2>
          <p className="text-neutral-86">
            Built a sub-millisecond transaction processing engine handling
            dual-ledger validation and cold-vault automation.
          </p>

          <div className="my-6 border-y border-primary-35">
            <div className=" text-center flex items-center justify-between max-w-[80%] mx-auto py-6">
              <div>
                <h3 className="text-neutral text-neutral-65 text-xl font-semibold ">
                  {"<15ms"}
                </h3>
                <p className="text-neutral-86 mt-2">Transaction Latency</p>
              </div>
              <div>
                <h3 className="text-neutral text-neutral-65 text-xl font-semibold ">
                  $4.2M+
                </h3>
                <p className="text-neutral-86 mt-2">Daily Volume Active</p>
              </div>
            </div>
          </div>

          <Link
            to={`/case-studies`}
            className="text-neutral-65 text-lg font-medium flex items-center gap-2"
          >
            Read case study
            <img src={ICONS.arrowRightUpBlue} alt="" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCaseStudyCard;

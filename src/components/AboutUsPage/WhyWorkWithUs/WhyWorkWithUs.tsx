import { useState } from "react";
import { ICONS, IMAGES } from "../../../assets";
import Container from "../../Reusable/Container/Container";

type TExpertiseTab =
  | "quality"
  | "security"
  | "compliance"
  | "dataPrivacy"
  | "infrastructure"
  | "deployment";
const WhyWorkWithUs = () => {
  const [activeTab, setActiveTab] = useState<TExpertiseTab>("quality");
  const expertiseTabs = [
    { id: "quality", label: "Quality" },
    { id: "security", label: "Security" },
    { id: "compliance", label: "Compliance" },
    { id: "dataPrivacy", label: "Data Privacy" },
    { id: "infrastructure", label: "Infrastructure" },
    { id: "deployment", label: "Deployment" },
  ];
  return (
    <div className="relative font-medium overflow-hidden font-Manrope">
      <img
        src={IMAGES.whyWorkWithUsBg}
        alt="hero-bg"
        className="w-full h-full absolute inset-0 object-cover"
      />

      {/* Content */}
      <div className="relative z-10 py-12 md:py-18 2xl:py-25">
        <Container>
          {/* Header */}
          <div className="flex items-center justify-center gap-2">
            <div className="size-4 rounded-full border-2 border-primary-10 flex items-center justify-center">
              <div className="size-1.5 rounded-full bg-primary-10"></div>
            </div>
            <p className="text-white subHeading">Why work with us</p>
          </div>

          <h2 className="text-white text-center heading max-w-262 mx-auto mt-2.5">
            Building with{" "}
            <span className="text-primary-10">
              Quality, Security, & Reliability
            </span>{" "}
            <span>at the Core</span>
          </h2>

          <div className="flex flex-col items-center justify-center gap-6 md:gap-12 mt-8 2xl:mt-10">
            {/* Tabs */}
            <div className="flex items-center gap-5 border-b border-neutral-88">
              {expertiseTabs?.map((tab) => (
                <button
                  key={tab?.id}
                  onClick={() => setActiveTab(tab?.id as TExpertiseTab)}
                  className={`px-5 py-3 text-white font-lg font-medium ${activeTab === tab?.id ? "bg-gradient-why-work-with-us-tab border-b border-primary-10" : ""}`}
                >
                  {tab?.label}
                </button>
              ))}
            </div>

            <div className="py-10 px-6 rounded-4xl border border-primary-50 bg-neutral-89 backdrop-blur-[44px] w-full max-w-6xl mx-auto space-y-12">
              <div className="flex items-center justify-center gap-5">
                <div className="bg-gradient-about-us-strip border border-primary-25/50 rounded-[14px] backdrop-blur-md p-4.5">
                  <img src={ICONS.quality} alt="" />
                </div>
                <h3 className="text-[44px] font-semibold text-white">
                  QUALITY
                </h3>
              </div>

              <div className="flex items-center justify-center gap-10 w-full">
                <div className="w-full">
                  <div className="flex items-center gap-4">
                    <div className="bg-neutral-82 rounded-lg p-3 w-fit">
                      <img src={ICONS.standardsApproach} alt="" />
                    </div>
                    <h4 className="text-2xl font-medium text-white">
                      Standards & Approach
                    </h4>
                  </div>

                  <div className="space-y-4 w-full mt-6">
                    <div className="flex gap-3">
                      <img src={ICONS.tick} alt="" className="size-5 mt-0.5" />
                      <p className="text-neutral-40/70 border-b border-neutral-83 pb-4 w-full">
                        Structured and maintainable code practice
                      </p>
                    </div>
                    <div className="flex gap-3 mt-6 w-full">
                      <img src={ICONS.tick} alt="" className="size-5 mt-0.5" />
                      <p className="text-neutral-40/70 border-b border-neutral-83 pb-4 w-full">
                        Structured and maintainable code practice
                      </p>
                    </div>
                    <div className="flex gap-3 mt-6 w-full">
                      <img src={ICONS.tick} alt="" className="size-5 mt-0.5" />
                      <p className="text-neutral-40/70 border-b border-neutral-83 pb-4 w-full">
                        Structured and maintainable code practice
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-why-work-with-us-section-divider mix-blend-hard-light w-px h-50"></div>

                <div className="w-full">
                  <div className="flex items-center gap-4">
                    <div className="bg-neutral-82 rounded-lg p-3 w-fit">
                      <img src={ICONS.toolPractices} alt="" />
                    </div>
                    <h4 className="text-2xl font-medium text-white">
                      Tools & Practices
                    </h4>
                  </div>

                  <div className="space-y-4 w-full mt-6">
                    <div className="flex gap-3">
                      <img src={ICONS.tick} alt="" className="size-5 mt-0.5" />
                      <p className="text-neutral-40/70 border-b border-neutral-83 pb-4 w-full">
                        Structured and maintainable code practice
                      </p>
                    </div>
                    <div className="flex gap-3 mt-6 w-full">
                      <img src={ICONS.tick} alt="" className="size-5 mt-0.5" />
                      <p className="text-neutral-40/70 border-b border-neutral-83 pb-4 w-full">
                        Structured and maintainable code practice
                      </p>
                    </div>
                    <div className="flex gap-3 mt-6 w-full">
                      <img src={ICONS.tick} alt="" className="size-5 mt-0.5" />
                      <p className="text-neutral-40/70 border-b border-neutral-83 pb-4 w-full">
                        Structured and maintainable code practice
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default WhyWorkWithUs;

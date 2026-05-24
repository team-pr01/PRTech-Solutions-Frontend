import { IMAGES } from "../../../assets";
import Button from "../../Reusable/Button/Button";
import Container from "../../Reusable/Container/Container";

const AiPoweredSolutions = () => {
  const aiPoweredSolutions = [
    {
      image: IMAGES.contentAware,
      title: "Context-Aware AI Responses",
      description:
        "We implement AI tailored to your business, data, and use cases, delivering insights or outputs.",
    },
    {
      image: IMAGES.smartWorkflowAutomation,
      title: "Smart Workflow Automation",
      description:
        "Automate repetitive processes like lead handling, follow-ups, and internal operations to reduce manual effort.",
    },
    {
      image: IMAGES.customAiIntegration,
      title: "Custom AI Integrations",
      description:
        "Every implementation is designed around your use case .   not plug-and-play tools that barely fit.",
    },
  ];
  return (
    <div className="relative font-medium overflow-hidden">
      <img
        src={IMAGES.serviceBg}
        alt="hero-bg"
        className="w-full h-full absolute inset-0"
      />

      {/* Content */}
      <div className="relative z-10 py-12 md:py-18 2xl:py-25 flex flex-col items-center gap-6 w-full">
        <Container>
            {/* Header */}
          <div className="flex flex-col xl:flex-row gap-6 xl:gap-0 justify-between">
            <div>
              <div className="flex items-center gap-2">
                <div className="size-4 rounded-full border-2 border-primary-10 flex items-center justify-center">
                  <div className="size-1.5 rounded-full bg-primary-10"></div>
                </div>
                <p className="text-white subHeading">
                  AI POWERED SOLUTION
                </p>
              </div>

              <h2 className="text-white heading mt-2.5 max-w-200">
                Turn Your{" "}
                <span className="font-Playfair-Display italic font-medium text-primary-10">
                  Website
                </span>{" "}
                <span>Into a 24/7 Sales & Operations Machine</span>
              </h2>

              <p className="text-white description mt-4 2xl:mt-6 max-w-145">
                A single source of truth for comprehensive digital health
                compliance, combined with expert hands-on support throughout.
              </p>
            </div>
            <Button label="Let's started" />
          </div>

          <div className="mt-10 xl:mt-17 w-full overflow-hidden relative">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 w-full">
              {/* 1st Card */}
              <div className="border border-neutral-92 rounded-[20px] p-5 lg:p-10 relative">
                <img
                  src={IMAGES.aiSolutionsCardBg}
                  alt=""
                  className="absolute top-0 left-0 bottom-0 right-0 w-full h-full rounded-[20px]"
                />
                <div className="relative z-10 flex flex-col items-center text-center">
                  <img src={IMAGES.aiAssistant} alt="" className="" />
                  <h3 className="text-base md:text-xl text-white font-semibold mt-7">
                    AI Assistants Built Around Your Business
                  </h3>
                  <p className="text-xs md:text-sm xl:text-base text-neutral-93 p-2">
                    From handling user queries to guiding actions, we build AI
                    systems trained on your data, not generic internet
                    responses.
                  </p>
                </div>
              </div>
              {/* 2nd Card */}
              <div className="border border-neutral-92 rounded-[20px] p-5 lg:p-10 relative flex flex-col justify-between h-90 md:h-full">
                <img
                  src={IMAGES.aiSolutionsCardBg}
                  alt=""
                  className="absolute top-0 left-0 bottom-0 right-0 w-full h-full rounded-[20px]"
                />
                <img
                  src={IMAGES.intelligentMatching}
                  alt=""
                  className="absolute top-24 w-full left-0"
                />
                {/* Heading contents */}
                <div className="flex items-center justify-between pb-2 border-b border-neutral-94/50">
                  <div>
                    <h3 className="text-sm lg:text-lg text-white/80 font-medium">
                      AI Decision Insights
                    </h3>
                    <p className="text-xs md:text-sm text-neutral-94">
                      Smart Matching Results
                    </p>
                  </div>
                  <div>
                    <h3 className="text-sm lg:text-lg text-white/80 font-medium">
                      92% Match Score
                    </h3>
                    <p className="text-xs md:text-sm text-neutral-94 text-right">
                      High Confidence
                    </p>
                  </div>
                </div>
                <div className="relative z-10 flex flex-col items-center text-center">
                  <h3 className="text-base md:text-xl text-white font-semibold mt-7">
                    Intelligent Matching & Decision Systems
                  </h3>
                  <p className="text-xs md:text-sm xl:text-base text-neutral-93 mt-2">
                    From user-to-service matching to filtering the right
                    opportunities , AI helps you make faster, smarter decisions.
                  </p>
                </div>
              </div>
            </div>

            {/* 2nd Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 w-full mt-5">
              {/* 1st Card */}
              {aiPoweredSolutions?.map((item) => (
                <div
                  key={item?.title}
                  className="border border-neutral-92 rounded-[20px] p-5 lg:p-10 relative"
                >
                  <img
                    src={IMAGES.aiSolutionsCardBg}
                    alt=""
                    className="absolute top-0 left-0 bottom-0 right-0 w-full h-full rounded-[20px]"
                  />
                  <div className="relative z-10 flex flex-col items-center justify-between h-full text-center">
                    <img src={item?.image} alt="" className="" />
                    <div className="mt-7">
                      <h3 className="text-xl text-white font-semibold">
                        {item?.title}
                      </h3>
                      <p className="text-neutral-93 p-2">{item?.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-center mt-10">
              <Button variant="tertiary" label="Get Your AI Strategy Plan" />
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default AiPoweredSolutions;

import { FaRegCalendarAlt, FaRegUser } from "react-icons/fa";
import { IMAGES } from "../../../assets";
import Container from "../../Reusable/Container/Container";
import { PiBriefcaseLight, PiTarget } from "react-icons/pi";
import { FiTrendingUp } from "react-icons/fi";
import { AiOutlineThunderbolt } from "react-icons/ai";

const CaseStudyDetailsHero = () => {
  const stats = [
    {
      icon: <FaRegUser />,
      label: "Client",
      value: "BTC (Tutor–Guardian Marketplace, Bangladesh)",
    },
    {
      icon: <FaRegCalendarAlt />,
      label: "Timeline",
      value: "3 months MVP + ongoing improvements",
    },
    {
      icon: <PiTarget />,
      label: "Scope",
      value: "Two-sided platform (Discovery · Strategy · Build · Optimize)",
    },
  ];

  const results = [
    {
      icon: <FiTrendingUp />,
      title: "4",
      suffix: "x",
      description: "Registration growth rate: 300/year → 300 in 4 months",
    },
    {
      icon: <PiBriefcaseLight />,
      title: "1,000",
      suffix: "+",
      description: "Jobs posted in year one: 300–400 successfully closed",
    },
    {
      icon: <AiOutlineThunderbolt />,
      title: "Manual",
      suffix: "ops",
      description: "Invoices, confirmations, notifications fully automated",
    },
  ];
  return (
    <div className="bg-gradient-our-work-hero-bg relative h-170 xl:h-250 font-Manrope">
      <img
        src={IMAGES.caseStudyDetailsHeroBg}
        alt="hero-bg"
        className="w-full h-full"
      />

      {/* Content */}
      <Container>
        <div className="absolute top-45 md:top-50 lg:top-55 2xl:top-61.5 left-1/2 -translate-x-1/2 text-center flex flex-col items-center max-w-300 2xl:max-w-7xl w-full mx-auto px-5 2xl:px-0">
          <div className="bg-white rounded-3xl px-4 py-1 text-xs md:text-sm font-semibold leading-6 flex items-center justify-center">
            <span className="text-neutral-65">
              Case Studies {">"} BTC Tutor Marketplace
            </span>
          </div>
          <h1 className="text-white text-center heading max-w-7xl mx-auto mt-8 leading-15">
            How We{" "}
            <span className="font-Playfair-Display italic font-medium">
              Digitized
            </span>{" "}
            a Tutor-Matching Business and 4× Scaled Registrations in 4 Months
          </h1>

          <div className="flex flex-col mt-8 w-full max-w-200 mx-auto">
            {stats?.map((stat) => (
              <div
                key={stat.label}
                className="border-t border-neutral-74 flex items-center justify-between py-3"
              >
                <div className="flex items-center gap-2 text-white">
                  <span>{stat.icon}</span>
                  <span>{stat.label}</span>
                </div>
                <span className="text-lg text-white font-semibold">
                  {stat.value}
                </span>
              </div>
            ))}
          </div>

          <div className="hidden xl:flex items-center justify-center gap-2 mt-25">
            <div className="bg-gradient-our-work-hero-line1 w-40 h-px rotate-180"></div>
            <p className="text-white font-Manrope font-semibold text-2xl">
              Results
            </p>
            <div className="bg-gradient-our-work-hero-line1 w-40 h-px"></div>
          </div>

          <div className="grid grid-cols-3 gap-5 mt-4">
            {results?.map((result) => (
              <div
                key={result?.title}
                className="p-4 bg-neutral-60 rounded-[20px] border-2 border-neutral-75 backdrop-blur-[20px] flex gap-4 text-start"
              >
                <div className="bg-gradient-about-us-strip p-4 flex items-center justify-center size-16 text-white text-4xl rounded-[14px]">
                  {result?.icon}
                </div>

                <div>
                  <h4 className="text-[40px] font-semibold text-white">
                    {result?.title}
                    <span className="text-primary-10">{result?.suffix}</span>
                  </h4>
                  <p className="text-white font-semibold mt-4">
                    {result?.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CaseStudyDetailsHero;

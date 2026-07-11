import { ICONS } from "../../../assets";
import Container from "../../Reusable/Container/Container";
import StatCard from "./StatCard";

const AboutUs = () => {
  const stats = [
    {
      label: "Custom Systems Delivered",
      value: 45,
      valuePrefix: "+",
    },
    {
      label: "Client Retention",
      value: 90,
      valuePrefix: "%",
    },
    {
      label: "Happy Clients",
      value: 100,
      valuePrefix: "+",
    },
    {
      label: "Experience",
      value: 5,
      valuePrefix: "+",
    },
  ];
  const chipClass =
    "bg-primary-10 rounded-xl shadow-chip px-2 lg:px-5 py-2 text-xs 2xl:text-base text-white font-Manrope font-medium w-fit";
  return (
    <Container>
      <div className="py-12 2xl:py-24">

        <div className="flex items-center justify-between">
          {/* Left Side */}
          <div className="hidden md:flex">
            <div>
              <div className={`${chipClass} rotate-15`}>Web Design</div>
              <div className={`${chipClass} -rotate-30 mt-20`}>
                UI/UX Design
              </div>
            </div>
            <div className="hidden lg:block">
              <img src={ICONS.cursorWindow} alt="" className="size-7.5" />
              <img src={ICONS.cursorBlue} alt="" className="size-7.5 mt-16" />
            </div>
          </div>

          {/* Description */}
          <p className="text-neutral-30 text-center font-Manrope text-2xl 2xl:text-[40px] font-semibold leading-normal max-w-130 lg:max-w-160 2xl:max-w-225 mx-auto mt-5">
            We’re{" "}
            <span className="font-Playfair-Display italic font-medium text-primary-10">
              PRTeach Solutions
            </span>{" "}
            — a team building{" "}
            <span className="font-Playfair-Display italic font-medium text-primary-10">
              AI-powered
            </span>{" "}
            systems that automate workflows, improve decision-making, and{" "}
            <span className="font-Playfair-Display italic font-medium text-primary-10">
              help businesses
            </span>{" "}
            operate smarter and scale faster.
          </p>

          {/* Right Side */}
          <div className="hidden md:flex mt-10">
            <div className="hidden lg:block">
              <img src={ICONS.penTool} alt="" className="size-7.5" />
              <img src={ICONS.cursorBlue} alt="" className="size-7.5 mt-10" />
            </div>

            <div>
              <div className={`${chipClass} -rotate-30`}>AI Development</div>
              <div className={`${chipClass} rotate-45 mt-24`}>Social Media</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 lg:gap-7.5 mt-10 md:mt-15">
          {stats.map((stat, index) => (
            <StatCard key={index} stat={stat} />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default AboutUs;

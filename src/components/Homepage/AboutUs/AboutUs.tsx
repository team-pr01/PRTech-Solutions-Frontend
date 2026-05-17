import { ICONS } from "../../../assets";
import Container from "../../Reusable/Container/Container";
import StatCard from "./StatCard";

const AboutUs = () => {
  const stats = [
    {
      label: "Projects Delivered",
      value: 10,
      valuePrefix: "+",
    },
    {
      label: "Business Growth",
      value: 80,
      valuePrefix: "%",
    },
    {
      label: "Happy Clients",
      value: 600,
      valuePrefix: "+",
    },
    {
      label: "Experience",
      value: 4,
      valuePrefix: "+",
    },
  ];
  const chipClass =
    "bg-primary-10 rounded-xl shadow-chip px-5 py-2 text-white font-Manrope font-medium w-fit";
  return (
    <Container>
      <div className="py-24">
        <p className="font-Poppins text-[32px] text-primary-10 text-center">
          (hello)
        </p>

        <div className="flex items-center justify-between">
          {/* Left Side */}
          <div className="flex">
            <div>
              <div className={`${chipClass} rotate-15`}>Web Design</div>
              <div className={`${chipClass} -rotate-30 mt-20`}>
                UI/UX Design
              </div>
            </div>
            <div>
              <img src={ICONS.cursorWindow} alt="" className="size-7.5" />
              <img src={ICONS.cursorBlue} alt="" className="size-7.5 mt-16" />
            </div>
          </div>

          {/* Description */}
          <p className="text-neutral-30 text-center font-Manrope text-[40px] font-semibold leading-normal max-w-225 mx-auto mt-5">
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
          <div className="flex mt-10">
            <div>
              <img src={ICONS.penTool} alt="" className="size-7.5" />
              <img src={ICONS.cursorBlue} alt="" className="size-7.5 mt-10" />
            </div>

            <div>
              <div className={`${chipClass} -rotate-30`}>AI Development</div>
              <div className={`${chipClass} rotate-45 mt-24`}>Social Media</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-7.5 mt-15">
          {stats.map((stat, index) => (
            <StatCard key={index} stat={stat} />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default AboutUs;

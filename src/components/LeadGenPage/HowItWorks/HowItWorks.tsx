import {
  FaPhone,
  FaMapMarkedAlt,
  FaLaptopCode,
  FaRocket,
} from "react-icons/fa";
import { IMAGES } from "../../../assets";
import Container from "../../Reusable/Container/Container";

const HowItWorks = () => {
  const processSteps = [
    {
      title: "Discovery Call",
      description: "We understand your business, goals, and challenges",
      icon: FaPhone,
    },
    {
      title: "Strategy & Planning",
      description: "We create a clear roadmap tailored to your needs",
      icon: FaMapMarkedAlt,
    },
    {
      title: "Development & Execution",
      description: "We build fast, test thoroughly, and iterate",
      icon: FaLaptopCode,
    },
    {
      title: "Launch & Scale",
      description: "We deploy, optimize, and support your growth",
      icon: FaRocket,
    },
  ];

  return (
    <div id="services" className="relative overflow-x-auto bg-neutral-20">
      <img
        src={IMAGES.howItWorksBg}
        alt="hero-bg"
        className="w-full h-full absolute inset-0 object-cover"
      />

      <div className="relative z-10 py-12 md:py-18 2xl:py-25 font-Manrope">
        <Container>
          {/* Header */}
          <div className="text-center">
            <div className="flex items-center justify-center gap-2">
              <div className="size-4 rounded-full border-2 border-primary-10 flex items-center justify-center">
                <div className="size-1.5 rounded-full bg-primary-10"></div>
              </div>
              <p className="text-white subHeading">How it works</p>
            </div>

            <h2 className="heading text-white text-center max-w-262 mx-auto mt-2.5">
              A Simple, Deliberate{" "}
              <span className="font-Playfair-Display italic font-medium">
                Process
              </span>{" "}
            </h2>

            <p className="description mt-4 2xl:mt-6">
              Four clear steps from first conversation to live, scaling system —
              no ambiguity, no surprises.
            </p>
          </div>

          {/* Contents */}
          <div className="mt-16 w-full rounded-3xl border-2 border-neutral-10/40 bg-neutral-60 backdrop-blur-[20px] flex">
            {processSteps.map((step, index) => {
              const Icon = step.icon;

              return (
                <div
                  key={index}
                  className={`p-5 ${index !== processSteps.length - 1 ? "border-r-2 border-neutral-10/40" : ""}`}
                >
                  <div className="bg-gradient-about-us-strip p-4 flex items-center justify-center text-white text-xl rounded-[14px] w-fit">
                    <Icon />
                  </div>
                  <h4 className="text-white font-medium text-xl mt-22">
                    {step.title}
                  </h4>
                  <p className="text-sm text-neutral-10 mt-3">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </Container>
      </div>
    </div>
  );
};

export default HowItWorks;

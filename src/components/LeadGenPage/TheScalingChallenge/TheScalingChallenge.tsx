import { IMAGES } from "../../../assets";
import Container from "../../Reusable/Container/Container";
import ChallengeStatCard from "./ChallengeStatCard";

const TheScalingChallenge = () => {
  const stats = [
    {
      value: "73",
      suffix: "%",
      description: "Businesses cite broken workflows as a top blocker.",
    },
    {
      value: "4",
      suffix: "x",
      description: "faster time-to-scale with a proper systems foundation",
    },
    {
      value: "73",
      suffix: "%",
      description: "Manual work can be reduced with proper automation.",
    },
  ];

  return (
    <div className="relative font-Manrope py-20 md:py-28 overflow-hidden bg-neutral-20">
      {/* Background Image */}
      <img
        src={IMAGES.scalingChallenge}
        alt="Scaling Challenge Background"
        className="absolute inset-0 w-full h-full object-cover z-10"
      />

      {/* Content */}
      <Container>
        <div className="relative z-10 flex flex-col items-center w-full">
          {/* Badge */}
          <div className="flex items-center justify-center gap-2">
            <div className="size-4 rounded-full border-2 border-primary-10 flex items-center justify-center">
              <div className="size-1.5 rounded-full bg-primary-10"></div>
            </div>
            <p className="text-white subHeading uppercase tracking-wider">
              Why this matters
            </p>
          </div>

          {/* Heading */}
          <h2 className="text-white text-center font-Manrope text-3xl md:text-[40px] font-semibold leading-tight md:leading-12 max-w-200 mx-auto mt-4">
            Most{" "}
            <span className="font-Playfair-Display italic font-medium text-primary-10">
              Businesses
            </span>{" "}
            don't struggle because of lack of effort — they struggle because
            their systems aren't{" "}
            <span className="font-Playfair-Display italic font-medium text-primary-10">
              Built to Scale.
            </span>
          </h2>

          {/* Subtitle */}
          <p className="description text-neutral-10 text-center text-sm md:text-base mt-4 2xl:mt-6 max-w-lg">
            This resource gives you a clear starting point to fix that.
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 mt-12 md:mt-17 w-full max-w-350">
            {stats.map((stat, index) => (
              <ChallengeStatCard key={index} stat={stat} />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default TheScalingChallenge;

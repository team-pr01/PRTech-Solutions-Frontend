import { ICONS, IMAGES } from "../../../assets";
import Container from "../../Reusable/Container/Container";

const KeySolutions = () => {
  const keySolutions = [
    {
      icon: ICONS.jobPosting,
      title: "Structured job postings",
      description:
        "Categories include Academic, Skills, and Religious studies, allowing guardians to specify needs and tutors to find them quickly.",
    },
    {
      icon: ICONS.applicationTracking,
      title: "Real-time application tracking",
      description:
        "Tutors can follow status at every step: applied → shortlisted → demo → hired. No more chasing updates over phone.",
    },
    {
      icon: ICONS.guardianDashboard,
      title: "Guardian dashboard",
      description:
        "One place to post jobs, review applicants, schedule demo classes, and manage hiring decisions end to end.",
    },
    {
      icon: ICONS.adminVerification,
      title: "Admin verification layer",
      description:
        "Every job passes through admin review before going live — ensuring quality and reducing low-intent postings from day one.",
    },
    {
      icon: ICONS.automatedOperations,
      title: "Automated operations",
      description:
        "Digitally signed confirmation letters, invoice generation, and multi-channel notifications across SMS, Email, and WhatsApp — all hands-off.",
    },
  ];
  return (
    <div className="relative h-fit font-Manrope overflow-x-auto bg-neutral-20">
      <img
        src={IMAGES.keySolutionsBg}
        alt="hero-bg"
        className="w-full h-full absolute inset-0 object-cover"
      />

      <div className="relative z-10 py-12 md:py-18 2xl:py-25">
        <Container>
          <div className="text-center">
            <div className="flex items-center justify-center gap-2">
              <div className="size-4 rounded-full border-2 border-primary-10 flex items-center justify-center">
                <div className="size-1.5 rounded-full bg-primary-10"></div>
              </div>
              <p className="text-white subHeading">Key Solutions</p>
            </div>

            <h2 className="heading text-white text-center max-w-262 mx-auto mt-2.5">
              Instead of vague improvements, here’s what{" "}
              <span className="font-Playfair-Display italic font-medium">
                Actually Changed
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-5 mt-18">
            {keySolutions?.map((solution, index) => (
              <div
                key={solution?.title}
                className={`bg-gradient-key-solution-card border-white rounded-[20px] backdrop-blur-6 p-10 relative group ${
                  index === keySolutions.length - 1 ? "col-span-2" : ""
                }`}
              >
                <div className="w-full absolute left-0 bottom-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500 ease-in-out">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full rounded-b-[20px]"
                    height="178"
                    viewBox="0 0 590 178"
                    fill="none"
                  >
                    <g filter="url(#filter0_f_119_4030)">
                      <path
                        d="M17.7637 80L-83 96.3636V344H673V226.182L613.086 102.909L558.62 138.909C544.821 158.364 509.599 185.6 479.098 138.909C440.971 80.5455 399.032 126.364 354.369 160.182C309.706 194 297.179 176 250.337 126.364C212.864 86.6545 184.977 109.818 175.718 126.364C170.271 140 147.722 167.273 101.098 167.273C54.4744 167.273 26.1153 109.091 17.7637 80Z"
                        fill="#038CF8"
                      />
                    </g>
                    <defs>
                      <filter
                        id="filter0_f_119_4030"
                        x="-163"
                        y="0"
                        width="916"
                        height="424"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                      >
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="BackgroundImageFix"
                          result="shape"
                        />
                        <feGaussianBlur
                          stdDeviation="40"
                          result="effect1_foregroundBlur_119_4030"
                        />
                      </filter>
                    </defs>
                  </svg>
                </div>
                <div className="bg-neutral-83 size-14 rounded-lg flex items-center justify-center">
                  <img src={solution?.icon} alt="" className="size-8" />
                </div>
                <h4 className="text-white text-[28px] font-medium mt-6">
                  {solution?.title}
                </h4>
                <p className="text-neutral-40/70 leading-6 mt-4">
                  {solution?.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </div>
    </div>
  );
};

export default KeySolutions;

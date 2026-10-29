import { ICONS, IMAGES } from "../../../assets";
import Container from "../../Reusable/Container/Container";

const TheProblem = () => {
  const problems = [
    "Slow and manual tutor matching process",
    "Lack of transparency and accountability",
    "Lack of automation and efficiency",
    "Limited scalability and growth potential",
  ];
  return (
    <div className="sectionPadding font-Manrope bg-white">
      <Container>
        <div className="flex flex-col xl:flex-row items-center justify-between gap-10">
          {/* Left side */}
          <div className="w-1/2">
            <div className="flex items-center gap-2">
              <div className="size-4 rounded-full border-2 border-warning-10 flex items-center justify-center">
                <div className="size-1.5 rounded-full bg-warning-10"></div>
              </div>
              <p className="text-neutral-70 subHeading">The Problem</p>
            </div>

            <h2 className="text-neutral-70 text-3xl md:text-[40px] lg:text-[40px] font-semibold leading-6 md:leading-9 lg:leading-12 mt-2.5">
              BTC operated entirely offline, relying on{" "}
              <span className="text-warning-15">Manual coordination</span>{" "}
              <span className="font-Playfair-Display italic font-medium">
                Between
              </span>{" "}
              <span>tutors and guardians.</span>{" "}
            </h2>

            <p className="description text-neutral-80 mt-4">
              BTC relied on manual coordination between tutors and guardians —
              calls, paperwork, and spreadsheets. The process was slow and
              error-prone, limiting growth.
            </p>

            <div className="flex flex-col gap-4 mt-12">
              {problems?.map((problem, index) => (
                <div
                  key={index}
                  className="bg-warning-20 rounded-xl p-3 relative flex items-center gap-3 overflow-hidden"
                >
                  <div className="bg-warning-15 w-0.5 h-1/2 absolute left-0 top-1/2 -translate-y-1/2" />
                  <div className="bg-warning-15 flex items-center justify-center size-10 rounded-lg z-10">
                    <img src={ICONS.tickMarkWhite} alt="" className="w-5" />
                  </div>
                  <p className="text-neutral-30 font-medium z-10">{problem}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right side */}
          <div className="relative w-1/2">
            <img src={IMAGES.btcProblem} alt="" className="rounded-3xl" />
            <div className="p-4 rounded-xl bg-white absolute bottom-6 left-6">
              <p className="text-neutral-80 text-xs font-medium">
                The bottom line
              </p>

              <div className="space-y-2 mt-2">
                <div className="flex items-center gap-2">
                  <div className="size-1.5 bg-neutral-30 rounded-full" />
                  <p className="text-neutral-30 font-medium text-sm">
                    Only ~300 registrations per year
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="size-1.5 bg-neutral-30 rounded-full" />
                  <p className="text-neutral-30 font-medium text-sm">
                    Only ~300 registrations per year
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="size-1.5 bg-neutral-30 rounded-full" />
                  <p className="text-neutral-30 font-medium text-sm">
                    Only ~300 registrations per year
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default TheProblem;

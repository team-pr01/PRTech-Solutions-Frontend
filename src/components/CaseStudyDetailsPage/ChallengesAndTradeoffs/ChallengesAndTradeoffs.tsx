import { ICONS } from "../../../assets";
import Container from "../../Reusable/Container/Container";

const ChallengesAndTradeoffs = () => {
  const tradeOffs = [
    "Admin verification to improve job quality",
    "Smarter matching logic (in progress)",
    "Faster application filtering",
    "AI-assisted recommendations (planned)",
  ];
  return (
    <div className="sectionPadding font-Manrope bg-neutral-72">
      <Container>
        <div>
          {/* Header */}
          <div className="text-center">
            <div className="flex items-center justify-center gap-2">
              <div className="size-4 rounded-full border-2 border-primary-10 flex items-center justify-center">
                <div className="size-1.5 rounded-full bg-primary-10"></div>
              </div>
              <p className="text-neutral-70 subHeading">
                Challenges & Tradeoffs
              </p>
            </div>

            <h2 className="text-neutral-70 heading mt-2.5">
              The{" "}
              <span className="font-Playfair-Display italic font-medium">
                honest part
              </span>{" "}
              of marketplace <span className="text-primary-10">Growth</span>
            </h2>
          </div>

          <div className="mt-17.5 grid grid-cols-2 gap-8">
            {/* Challenge card */}
            <div className="p-6 bg-gradient-challenge-card border border-neutral-78 rounded-3xl flex flex-col gap-6 h-80.75">
              <p className="text-neutral-80 text-sm font-medium uppercase">
                The challenge
              </p>
              <h4 className="text-neutral-65 text-[28px] font-semibold leading-8 capitalize">
                A meaningful share of jobs didn't reach completion —
                cancellations and drop-offs.
              </h4>
              <p className="text-neutral-86 text-sm leading-7">
                This is common in two-sided marketplaces. User intent is
                inconsistent, matching is never perfect, and external factors
                shape hiring decisions.
              </p>
            </div>

            {/* Tradeoff card */}
            <div className="p-6 bg-white border border-neutral-78 rounded-3xl flex flex-col gap-6 h-80.75">
              <p className="text-neutral-80 text-sm font-medium uppercase">
                Our tradeoff
              </p>
              <h4 className="text-neutral-65 text-[28px] font-semibold leading-8 capitalize">
                We prioritized scalability, then layered quality controls on
                top.
              </h4>
              <div className="space-y-4">
                {tradeOffs?.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <img src={ICONS.tickMarkBlue} alt="" className="size-6" />
                    <p className="text-neutral-86 text-sm leading-7">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ChallengesAndTradeoffs;

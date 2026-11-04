import { IMAGES } from "../../../assets";
import Container from "../../Reusable/Container/Container";

const OurApproach = () => {
  const ourApproach = [
    {
      id: 1,
      title: "Discovery",
      description:
        "Mapped the entire offline workflow from job posting through tutor matching to hiring and identified every bottleneck in manual coordination and tracking.",
    },
    {
      id: 2,
      title: "Strategy",
      description:
        "Designed a two-sided marketplace connecting guardians and tutors, introduced a structured hiring pipeline, and planned an admin verification layer to protect quality.",
    },
    {
      id: 3,
      title: "Execution",
      description:
        "Shipped dashboards with a full job lifecycle — Posted → Verified → Live → Applied → Shortlisted → Demo → Hired — plus automated notifications and invoices.",
    },
    {
      id: 4,
      title: "Optimization",
      description:
        "Reduced manual dependency across operations, streamlined application tracking, and tightened communication loops between guardians and tutors.",
    },
  ];
  return (
    <div className="sectionPadding font-Manrope bg-gradient-our-approach">
      <Container>
        <div>
          {/* Header */}
          <div className="text-center">
            <div className="flex items-center justify-center gap-2">
              <div className="size-4 rounded-full border-2 border-primary-10 flex items-center justify-center">
                <div className="size-1.5 rounded-full bg-primary-10"></div>
              </div>
              <p className="text-neutral-70 subHeading">Our Approach</p>
            </div>

            <h2 className="text-neutral-70 heading mt-2.5">
              We{" "}
              <span className="font-Playfair-Display italic font-medium">
                Approached
              </span>{" "}
              this in <span className="text-primary-10">4 phases</span>
            </h2>

            <p className="description text-neutral-80 mt-6">
              From Manual Workflow to Structured Platform
            </p>
          </div>

          <div className="mt-18 flex flex-col xl:flex-row justify-between gap-12">
            {/* Left Sid */}
            <img src={IMAGES.ourApproach} />

            {/* Right Side  */}
            <div className="flex flex-col">
              {ourApproach?.map((item) => (
                <div
                  key={item?.id}
                  className="w-full flex items-center justify-between px-4 py-5 hover:bg-white hover:border-y border-primary-70 transition duration-300"
                >
                  {/* Left Side */}
                  <div className="space-y-8 w-65 shrink-0">
                    <div className="px-4 py-1.5 rounded-3xl bg-primary-40 text-primary-10 font-semibold text-sm text-center w-fit">
                      Step 0{item?.id}
                    </div>
                    <h3 className="text-neutral-65 text-[32px] font-semibold">
                      {item?.title}
                    </h3>
                  </div>

                  {/* Right Side */}
                  <p className="text-neutral-86 font-medium leading-6 flex-1">
                    {item?.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default OurApproach;

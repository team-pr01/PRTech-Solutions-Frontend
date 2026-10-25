import { ICONS } from "../../../assets";
import Container from "../../Reusable/Container/Container";

const OurGuarantee = () => {
  const guarantees = [
    "100% satisfaction guarantee",
    "Free revisions included",
    "Transparent communication",
    "No long-term lock-ins",
  ];
  return (
    <div className="bg-neutral-72 sectionPadding font-Manrope overflow-hidden">
      <Container>
        <div className="flex gap-10">
          {/* Header */}
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <div className="size-4 rounded-full border-2 border-primary-10 flex items-center justify-center">
                <div className="size-1.5 rounded-full bg-primary-10"></div>
              </div>
              <p className="text-neutral-70 font-medium uppercase">Zero risk</p>
            </div>

            <h2 className="text-neutral-70 heading mt-2.5 max-w-220">
              Zero Risk , <span className="text-primary-10">Maximum</span> {" "}
              <span className="font-Playfair-Display italic font-medium">
                Confidence
              </span>
            </h2>

            <p className="description text-neutral-80 mt-6">
              Work with us without the worry.
            </p>
          </div>

          <div className="flex flex-col">
            {guarantees?.map((item) => (
              <div key={item} className="py-5 px-4 flex items-center gap-3 border-b border-primary-10/20">
                <img src={ICONS.tickMarkGreen} alt="" className="size-6" />
                <span className="text-xl font-medium text-neutral-86">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default OurGuarantee;

import { IMAGES } from "../../../assets";
import Button from "../../Reusable/Button/Button";
import Container from "../../Reusable/Container/Container";
import ComparisonTable from "./ComparisonTable";

const Comparison = () => {
  return (
    <div className="relative h-400 font-medium overflow-hidden font-Manrope">
      <img
        src={IMAGES.comparisonBg}
        alt="hero-bg"
        className="w-full h-full absolute inset-0"
      />

      {/* Content */}
      <div className="absolute top-18 left-1/2 -translate-x-1/2 text-center flex flex-col items-center gap-6 w-full z-10">
        <Container>
          <div className="flex items-center justify-center gap-2">
            <div className="size-4 rounded-full border-2 border-primary-10 flex items-center justify-center">
              <div className="size-1.5 rounded-full bg-primary-10"></div>
            </div>
            <p className="text-white font-medium uppercase">Comparison</p>
          </div>

          <h2 className="text-white text-center text-[60px] font-semibold leading-15 max-w-262 mx-auto mt-2.5">
            Why{" "}
            <span className="font-Playfair-Display italic font-medium text-primary-10">
              PRTech
            </span>{" "}
            <span>Beats the Alternatives</span>
          </h2>

          <p className="text-white font-Manrope leading-8 max-w-205 mx-auto font-normal mt-6">
            Fast, flexible, and built for results everything you wish your last
            agency did right.
          </p>

          {/* Comparison Table */}
          <ComparisonTable />

          <div className="flex items-center justify-center gap-6 mt-10">
            <Button label="Let’s Get Started" />
            <Button variant="tertiary" label="See Our Services" />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Comparison;

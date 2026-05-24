import { IMAGES } from "../../../assets";
import Button from "../../Reusable/Button/Button";
import Container from "../../Reusable/Container/Container";
import ComparisonTable from "./ComparisonTable";

const Comparison = () => {
  return (
    <div className="relative font-medium overflow-hidden font-Manrope">
      <img
        src={IMAGES.comparisonBg}
        alt="hero-bg"
        className="w-full h-full absolute inset-0 object-cover"
      />

      {/* Content */}
      <div className="relative z-10 py-12 md:py-18 2xl:py-25">
        <Container>
          {/* Header */}
          <div className="flex items-center justify-center gap-2">
            <div className="size-4 rounded-full border-2 border-primary-10 flex items-center justify-center">
              <div className="size-1.5 rounded-full bg-primary-10"></div>
            </div>
            <p className="text-white subHeading">Comparison</p>
          </div>

          <h2 className="text-white text-center heading max-w-262 mx-auto mt-2.5">
            Why{" "}
            <span className="font-Playfair-Display italic font-medium text-primary-10">
              PRTech
            </span>{" "}
            <span>Beats the Alternatives</span>
          </h2>

          <p className="description text-white text-center max-w-205 mx-auto mt-2 2xl:mt-6">
            Fast, flexible, and built for results everything you wish your last
            agency did right.
          </p>

          {/* Comparison Table */}
          <ComparisonTable />

          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 mt-8 2xl:mt-10">
            <Button
              label="Let's Get Started"
              className="w-full md:w-fit py-2"
            />
            <Button
              variant="tertiary"
              label="See Our Services"
              className="w-full md:w-fit py-2"
            />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Comparison;

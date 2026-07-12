import { Link } from "react-router-dom";
import { ICONS, IMAGES } from "../../../assets";
import Button from "../../Reusable/Button/Button";
import Container from "../../Reusable/Container/Container";

const CaseStudyHero = () => {
  return (
    <div className="relative h-160">
      <img
        src={IMAGES.caseStudiesHeroImg}
        alt="hero-bg"
        className="w-full h-full"
      />

      {/* Content */}
      <Container>
        <div className="absolute top-45 md:top-50 lg:top-55 2xl:top-61.5 left-1/2 -translate-x-1/2 text-center flex flex-col items-center w-full">
          <div className="bg-white rounded-3xl px-4 py-1 text-xs md:text-sm font-semibold leading-6 flex items-center justify-center gap-2">
            <img src={ICONS.project} alt="" className="size-5" />
            <span className="text-neutral-65">
              Our{" "}
              <span className="text-primary-10 font-Playfair-Display">
                Best
              </span>{" "}
              Case Studies
            </span>
            {/* <button onClick={handleScrollToTestimonial} className="text-primary-10 underline">See Reviews ↓</button> */}
          </div>

          <h1 className="heading text-white text-center max-w-262 mx-auto mt-5">
            Real{" "}
            <span className="font-Playfair-Display italic font-medium">
              Work
            </span>{" "}
            Real{" "}
            <span className="font-Playfair-Display italic font-medium">
              Results
            </span>
          </h1>

          <p className="description max-w-180 2xl:max-w-205 mx-auto">
            A look at how we’ve helped businesses build, automate, and scale
            systems that actually work in the real world. Every project starts
            with a problem. Here’s how we solved them.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 mt-6 lg:mt-8 2xl:mt-10">
            <Button label="Explore Case Studies" />
            <Link to="/contact-us">
              <Button
                variant="secondary"
                label="Discuss Your Project"
                className="w-full md:w-fit"
              />
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CaseStudyHero;

import { Link } from "react-router-dom";
import Container from "../../Reusable/Container/Container";
import Button from "../../Reusable/Button/Button";
import FeaturedCaseStudyCard from "./FeaturedCaseStudyCard";

const FeaturedCaseStudies = () => {
  return (
    <div className="font-Manrope sectionPadding">
      <Container>
        <div className="flex flex-col xl:flex-row items-start 2xl:items-center justify-between">
          <div>
            <div className="flex items-center gap-2">
              <div className="size-4 rounded-full border-2 border-primary-10 flex items-center justify-center">
                <div className="size-1.5 rounded-full bg-primary-10"></div>
              </div>
              <p className="text-neutral-70 font-medium uppercase">
                Featured Case Studies
              </p>
            </div>

            <h2 className="text-neutral-70 heading mt-2.5 max-w-220">
              Our Clients{" "}
              <span className="text-primary-10 font-Playfair-Display italic">
                Success Stories
              </span>{" "}
            </h2>
          </div>

          <div className="mt-3 xl:mt-0">
            <p className="description text-xs md:text-sm 2xl:text-base text-neutral-80 max-w-90 mb-6 leading-normal">
              Real projects, real impact. See how we've helped businesses
              transform their operations.
            </p>
            {/* <Link to={"/our-work"}>
            <Button label="View All Projects" />
          </Link> */}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8 mt-16">
          <FeaturedCaseStudyCard />
          <FeaturedCaseStudyCard />
          <FeaturedCaseStudyCard />
          <FeaturedCaseStudyCard />
        </div>

        <div className="flex justify-center mt-8 xl:mt-12 2xl:mt-16">
          <Link to={"/case-studies"}>
            <Button
              label="View all case studies"
              className="w-full md:w-fit py-2"
            />
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default FeaturedCaseStudies;

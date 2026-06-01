import { ICONS, IMAGES } from "../../../assets";
import Container from "../../Reusable/Container/Container";
import Button from "../../Reusable/Button/Button";
import { Link } from "react-router-dom";

const Hero = () => {
  const featuredProjects = [
    IMAGES.project01,
    IMAGES.project01,
    IMAGES.project01,
    IMAGES.project01,
    IMAGES.project01,
    IMAGES.project01,
    IMAGES.project01,
    IMAGES.project01,
    IMAGES.project01,
    IMAGES.project01,
  ];

  return (
    <div className="relative h-240 2xl:h-270">
      <img src={IMAGES.heroBg} alt="hero-bg" className="w-full h-full" />

      {/* Content */}
      <Container>
        <div className="absolute top-45 md:top-50 lg:top-55 2xl:top-61.5 left-1/2 -translate-x-1/2 text-center flex flex-col items-center w-full">
          <img
            src={ICONS.heroRatings}
            alt="hero-bg"
            className="justify-self-center"
          />

          <h1 className="heading text-white text-center max-w-262 mx-auto mt-5">
            Custom{" "}
            <span className="font-Playfair-Display italic font-medium">
              Digital Systems
            </span>{" "}
            Built Around Your Business, Not Templates
          </h1>

          <div className="font-Inter font-medium flex justify-between w-full max-w-280 mx-auto mt-4 2xl:mt-6">
            <div className="hidden w-fit md:relative mt-3">
              <img
                src={ICONS.cursorTop}
                alt=""
                className="absolute -right-3 -top-7"
              />
              <div className="bg-primary-10 rounded-xl border border-white px-3 py-2.5 text-white text-sm">
                Agency
              </div>
            </div>

            <p className="description max-w-180 2xl:max-w-205 mx-auto">
              We don't just develop websites or apps. We understand your users,
              your operations, and your growth gaps ,then build systems that
              actually drive leads, automate work, and scale your business.
            </p>

            <div className="w-fit hidden md:relative mt-19">
              <img
                src={ICONS.cursorTop}
                alt=""
                className="absolute -left-3 -top-7 rotate-280"
              />
              <div className="bg-white rounded-xl border border-primary-10 px-3 py-2.5 text-neutral-20 text-sm">
                Expert
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 mt-6 lg:mt-8 2xl:mt-10">
            <Link to="/contact-us">
              <Button label="Get Your Project Feasibility Review" />
            </Link>
           <Link to="/our-work">
            <Button
              variant="tertiary"
              label="Explore Systems We've Built"
              className="w-full md:w-fit"
            /></Link>
          </div>
        </div>
      </Container>

      {/* Project- Marquee */}
      <div className="absolute bottom-10 left-0 right-0 overflow-hidden">
        <div className="marquee-track">
          <div className="marquee-content">
            {featuredProjects.map((project, index) => (
              <img
                key={index}
                src={project}
                alt={`Featured Project ${index + 1}`}
                className="relative w-100 h-70 rounded-2xl object-cover transition-transform duration-500 group-hover:scale-110"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

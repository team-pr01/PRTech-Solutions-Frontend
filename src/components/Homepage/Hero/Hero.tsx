// Hero.tsx
import { ICONS, IMAGES } from "../../../assets";
import Container from "../../Reusable/Container/Container";
import Button from "../../Reusable/Button/Button";

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
    <div className="relative h-308">
      <img src={IMAGES.heroBg} alt="hero-bg" className="w-full h-308" />

      {/* Content */}
      <Container>
        <div className="absolute top-61.5 left-1/2 -translate-x-1/2 text-center flex flex-col items-center gap-6 w-full">
          <img
            src={ICONS.heroRatings}
            alt="hero-bg"
            className="justify-self-center"
          />

          <h1 className="text-white text-center font-Manrope text-[60px] font-semibold leading-15 max-w-262 mx-auto mt-5">
            Custom{" "}
            <span className="font-Playfair-Display italic font-medium">
              Digital Systems
            </span>{" "}
            Built Around Your Business, Not Templates
          </h1>

          <div className="font-Inter font-medium flex justify-between w-full max-w-280 mx-auto">
            <div className="w-fit relative mt-3">
              <img
                src={ICONS.cursorTop}
                alt=""
                className="absolute -right-3 -top-7"
              />
              <div className="bg-primary-10 rounded-xl border border-white px-3 py-2.5 text-white text-sm">
                Agency
              </div>
            </div>

            <p className="text-white font-Manrope text-xl leading-8 max-w-205 mx-auto font-normal">
              We don't just develop websites or apps. <br />
              We understand your users, your operations, and your growth gaps
              ,then build systems that actually drive leads, automate work, and
              scale your business.
            </p>

            <div className="w-fit relative mt-19">
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

          <div className="flex items-center justify-center gap-6">
            <Button label="Get Your Project Feasibility Review" />
            <Button variant="secondary" label="Explore Systems We've Built" />
          </div>
        </div>
      </Container>

      {/* Project- Marquee */}
      <div className="absolute bottom-10 left-0 right-0 overflow-hidden">
        <div className="marquee-track">
          <div className="marquee-content">
            {featuredProjects.map((project, index) => (
              <div
                key={index}
                className="relative w-80 h-96 shrink-0 rounded-2xl overflow-hidden group cursor-pointer mx-3"
              >
                <img
                  src={project}
                  alt={`Featured Project ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-sm font-medium">Featured Project</p>
                  <p className="text-xs opacity-80">View Details →</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

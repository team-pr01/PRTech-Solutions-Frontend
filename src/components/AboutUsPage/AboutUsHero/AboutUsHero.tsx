import { Link } from "react-router-dom";
import { ICONS, IMAGES } from "../../../assets";
import Container from "../../Reusable/Container/Container";
import Button from "../../Reusable/Button/Button";

const AboutUsHero = () => {
  const clients = [
    IMAGES.bcoEco,
    IMAGES.attributionBooster,
    IMAGES.brightTuitionCare,
    IMAGES.globalCryptoAlliance,
    IMAGES.goodKing,
    IMAGES.logicalMedia,
    IMAGES.tenStageMatrix,
    IMAGES.vedicWisdom,
    IMAGES.worldMarket,
  ];
  return (
    <div className="bg-gradient-our-work-hero-bg relative h-170 xl:h-220 font-Manrope">
      <img src={IMAGES.aboutUsHeroBg} alt="hero-bg" className="w-full h-full" />

      {/* Content */}
      <Container>
        <div className="absolute top-45 md:top-50 lg:top-55 2xl:top-61.5 left-1/2 -translate-x-1/2 text-center flex flex-col items-center max-w-300 2xl:max-w-7xl w-full mx-auto px-5 2xl:px-0">
          <div className="bg-white rounded-3xl pl-1 pr-4 py-1 text-xs md:text-sm font-semibold leading-6 flex items-center justify-center gap-2">
            <div className="bg-gradient-about-us-strip rounded-3xl px-2 py-1 text-white">
              <img src={ICONS.handshake} alt="" />
            </div>
            <span className="text-neutral-65">
              Trusted by{" "}
              <span className="text-primary-10 font-Playfair-Display">
                Growing
              </span>{" "}
              Businesses
            </span>
            {/* <button onClick={handleScrollToTestimonial} className="text-primary-10 underline">See Reviews ↓</button> */}
          </div>
          <h1 className="text-white text-center heading max-w-230 mx-auto mt-4">
            We{" "}
            <span className="font-Playfair-Display italic font-medium">
              Buil
            </span>{" "}
            Technology That Actually Grows Businesses
          </h1>

          <p className="text-white description max-w-205 mx-auto mt-4 2xl:mt-6">
            From custom software and scalable apps to AI, automation, and
            infrastructure — we help businesses turn ideas into systems that
            perform in the real world.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-8 w-full">
            <Link to="/contact-us">
              <Button
                label="Get Your Strategy Plan"
                className="w-full md:w-fit"
              />
            </Link>
            <Link to="/our-work">
              <Button
                variant="secondary"
                label="Explore Systems We’ve Built"
                className="w-full md:w-fit"
              />
            </Link>
          </div>

          <div className="hidden xl:flex items-center justify-center gap-2 mt-25">
            <div className="bg-gradient-our-work-hero-line1 w-20 h-px rotate-180"></div>
            <p className="text-white font-Manrope font-semibold">
              Trusted by innovative companies
            </p>
            <div className="bg-gradient-our-work-hero-line1 w-20 h-px"></div>
          </div>
        </div>
      </Container>

      <div className="absolute bottom-10 left-0 right-0 overflow-hidden z-10">
        <div className="marquee-track">
          <div className="marquee-content">
            {clients.map((client, index) => (
              <div className="w-[348px] h-[100px] bg-gray-600 bg-blur-[20px] rounded-[20px] flex items-center justify-center">
                <img
                  key={index}
                  src={client}
                  alt={`Client ${index + 1}`}
                  className="w-56 h-10"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsHero;

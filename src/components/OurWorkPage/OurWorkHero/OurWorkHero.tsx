import { IMAGES } from "../../../assets";
import Button from "../../Reusable/Button/Button";
import Container from "../../Reusable/Container/Container";

const OurWorkHero = () => {
  const clients = [
    // IMAGES.bcoEco,
    IMAGES.attributionBooster,
    IMAGES.brightTuitionCare,
    // IMAGES.globalCryptoAlliance,
    // IMAGES.goodKing,
    // IMAGES.logicalMedia,
    IMAGES.tenStageMatrix,
    // IMAGES.vedicWisdom,
    // IMAGES.worldMarket,
  ];
  return (
    <div className="bg-gradient-our-work-hero-bg relative h-240 font-Manrope">
      <img src={IMAGES.ourWorkHeroBg} alt="hero-bg" className="w-full h-full" />

      {/* Content */}
      <Container>
        <div className="absolute top-61.5 left-1/2 -translate-x-1/2 text-center flex flex-col items-center max-w-300 2xl:max-w-7xl w-full mx-auto px-5 2xl:px-0">
          <div className="bg-white rounded-3xl pl-1 pr-4 py-1 font-semibold leading-6 flex items-center justify-center gap-2">
            <div className="bg-primary-10 rounded-3xl px-3 py-1 text-white">
              100%
            </div>
            <span className="text-neutral-65">Clients Satisfaction</span>
            <button className="text-primary-10 underline">See Reviews ↓</button>
          </div>
          <h1 className="text-white text-center font-Manrope text-[60px] font-semibold leading-15 max-w-230 mx-auto mt-4">
            Our{" "}
            <span className="font-Playfair-Display italic font-medium">
              Best Works
            </span>{" "}
            Isn’t Just Built, It’s Designed to Perform
          </h1>

          <p className="text-white font-Manrope text-xl leading-8 max-w-205 mx-auto font-normal mt-6">
            From custom platforms to AI-powered solutions, everything we create
            is built to solve real business problems and help your business run
            smarter, faster, and more efficiently.
          </p>

          <div className="flex items-center justify-center gap-6 mt-8">
            <Button label="Get Your Strategy Plan" />
            <Button variant="secondary" label="Discuss Your Project" />
          </div>

          <div className="flex items-center justify-center gap-2 mt-25">
            <div className="bg-gradient-our-work-hero-line1 w-20 h-px rotate-180"></div>
            <div className="px-4 py-2 border border-neutral-99 bg-primary-30 shadow-our-work-client-box rounded-[100px] text-primary-10 text-sm font-medium">
              Our Clients
            </div>
            <div className="bg-gradient-our-work-hero-line1 w-20 h-px"></div>
          </div>

          <div className="flex items-center gap-8 mt-14">
            <div className="space-y-4">
              <div className="flex items-center justify-center gap-2">
                <div className="size-4 rounded-full border-2 border-white flex items-center justify-center">
                  <div className="size-1.5 rounded-full bg-white"></div>
                </div>
                <p className="text-white font-medium uppercase">
                  Trusted by Leading Brands
                </p>
              </div>
              <Button variant="tertiary" label="Add your company" />
            </div>

            {/* Project- Marquee */}
            <div className="flex items-center justify-center gap-3">
              {clients.map((client, index) => (
                <div className="px-8 py-3 border border-neutral-99 bg-primary-30 shadow-our-work-client-box rounded-[100px] flex items-center justify-center">
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
      </Container>
    </div>
  );
};

export default OurWorkHero;

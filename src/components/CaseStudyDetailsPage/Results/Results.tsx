import { Link } from "react-router-dom";
import Container from "../../Reusable/Container/Container";
import Button from "../../Reusable/Button/Button";
import { IMAGES } from "../../../assets";

const Results = () => {
  const results = [
    {
      subTitle: "Registrations",
      value: "300",
      description: "in 4 months — matching their yearly total",
    },
    {
      subTitle: "Jobs posted",
      value: "1,000+",
      description: "in the first year on the new platform",
    },
    {
      subTitle: "Successfully closed",
      value: "300–400",
      description: "completed tutor–guardian matches",
    },
  ];

  const resultImages = [
    IMAGES.vedicWisdomWebsite,
    IMAGES.brightTuitionCareWebsite,
    IMAGES.attributionBoosterWebsite,
    IMAGES.globalCryptoAllianceWebsite,
    IMAGES.vedicWisdomApp,
    IMAGES.brightTuitionCareApp,
    IMAGES.tenStageMatrixWebsite,
    IMAGES.logicalMediaWebsite,
  ];

  return (
    <div className="bg-gradient-our-approach sectionPadding font-Manrope">
      <Container>
        {/* Header */}
        <div className="flex flex-col xl:flex-row items-start 2xl:items-center justify-between">
          <div>
            <div className="flex items-center gap-2">
              <div className="size-4 rounded-full border-2 border-primary-10 flex items-center justify-center">
                <div className="size-1.5 rounded-full bg-primary-10"></div>
              </div>
              <p className="text-neutral-70 font-medium uppercase">Results</p>
            </div>

            <h2 className="text-neutral-70 heading mt-2.5 max-w-220">
              <span className="font-Playfair-Display italic font-medium">
                Growth
              </span>
              That the old model couldn't have{" "}
              <span className="text-primary-10">Reached</span>{" "}
            </h2>
          </div>

          <div className="mt-3 xl:mt-0">
            <p className="description text-xs md:text-sm 2xl:text-base text-neutral-80 max-w-90 mb-6 leading-normal">
              Want something like this? Manual processes holding you back? Let's
              design the right system for your business.
            </p>
            <Link to={"/contact-us"}>
              <Button label="Get Your Strategy Plan" />
            </Link>
          </div>
        </div>

        {/* Results  */}
        <div className="mt-14 grid grid-cols-3 gap-6">
          {results?.map((result) => (
            <div
              key={result?.subTitle}
              className="flex flex-col justify-between p-6 bg-neutral-40 border border-primary-20 rounded-[20px] h-54"
            >
              <div>
                <p className="text-neutral-80 text-sm font-medium uppercase">
                  {result?.subTitle}
                </p>
                <h4 className="text-primary-10 text-[44px] font-semibold leading-12 mt-3">
                  {result?.value}
                </h4>
              </div>
              <p className="text-neutral-77 text-lg font-medium">
                {result?.description}
              </p>
            </div>
          ))}
        </div>
      </Container>

      {/* Project- Marquee */}
      <div className="mt-20 overflow-hidden">
        <div className="marquee-track">
          <div className="marquee-content">
            {resultImages.map((project, index) => (
              <img
                key={index}
                src={project}
                // alt={`Featured Project ${index + 1}`}
                className="relative w-160 h-130 rounded-3xl object-cover transition-transform duration-500 group-hover:scale-110"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Results;

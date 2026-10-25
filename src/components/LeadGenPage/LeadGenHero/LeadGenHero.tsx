import { Link } from "react-router-dom";
import { ICONS, IMAGES } from "../../../assets";
import Container from "../../Reusable/Container/Container";
import Button from "../../Reusable/Button/Button";
import DownloadResourceForm from "./DownloadResourceForm/DownloadResourceForm";

const LeadGenHero = () => {
  return (
    <div className="relative">
      {/* Background Image - Changed to min-h so it grows if content is taller */}
      <img
        src={IMAGES.leadGenHeroBg}
        alt="hero-bg"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Content - Using standard padding instead of absolute positioning */}
      <Container>
        <div className="relative z-10 flex flex-col lg:flex-row gap-12 pt-40 md:pt-48 lg:pt-55 pb-20">
          {/* Left Side Content */}
          <div className="flex flex-col w-full lg:w-1/2">
            <div className="bg-white flex items-center gap-2 rounded-3xl px-4 py-3 w-fit">
              <img src={ICONS.gift} alt="" className="size-5" />
              <span className="text-neutral-65 font-Manrope font-semibold">
                Free Resource
              </span>
            </div>

            <h1 className="font-Manrope text-3xl md:text-[40px] lg:text-[48px] font-semibold leading-9 md:leading-12 lg:leading-14 text-white mt-6">
              Get the Exact System We Use to{" "}
              <span className="font-Playfair-Display italic font-medium">
                Build & Scale
              </span>{" "}
              High-Performing Products
            </h1>

            <p className="description mt-6">
              Download this resource to understand how we approach building
              scalable systems, optimizing workflows, and driving real business
              growth.
            </p>

            <div className="flex flex-col gap-4 md:gap-6 mt-6 lg:mt-8">
              <Link to="/contact-us">
                <Button label="Book Your Free Strategy Call" />
              </Link>
              <Link to="/our-work">
                <Button
                  variant="tertiary"
                  label="Get Free Website & SEO Audit"
                  className="w-full md:w-fit"
                />
              </Link>
            </div>
          </div>

          {/* Right Side Form */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <DownloadResourceForm />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default LeadGenHero;

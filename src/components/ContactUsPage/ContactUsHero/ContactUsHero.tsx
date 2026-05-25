import { ICONS, IMAGES } from "../../../assets";
import Container from "../../Reusable/Container/Container";
import ContactInformation from "./ContactInformation";
import ContactUsForm from "./ContactUsForm";
import ScheduleCall from "./ScheduleCall";

const ContactUsHero = () => {
  return (
    <div className="bg-neutral-20 py-7.5 relative font-Manrope">
      <img
        src={IMAGES.contactUsHeroBg}
        alt="hero-bg"
        className="w-full h-full absolute inset-0 object-cover"
      />

      {/* Content */}
      <div className="relative flex flex-col items-center gap-6 w-full z-10 mt-40">
        <Container>
          <div className="bg-white w-fit mx-auto px-4 py-3 text-xs md:text-sm text-neutral-65 font-semibold flex items-center justify-center gap-2 rounded-3xl">
            <img src={ICONS.polygon} alt="" />
            Get In Touch <img src={ICONS.polygon} alt="" />
          </div>
          <h1 className="text-white text-center heading max-w-230 mx-auto mt-4">
            Let's{" "}
            <span className="font-Playfair-Display italic font-medium">
              Build Something
            </span>{" "}
            That Actually Works
          </h1>

          <p className="description text-white text-center max-w-205 mx-auto mt-4 2xl:mt-6">
            Whether you have a clear idea or just know something needs to
            improve ,we'll help you figure out the right system for your
            business.
          </p>

          {/* Contact Details Cards Grid */}
          <ContactInformation />

          <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 mt-16 lg:mt-25">
            <ContactUsForm />

            <ScheduleCall />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default ContactUsHero;

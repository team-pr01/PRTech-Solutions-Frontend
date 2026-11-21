import { IMAGES } from "../../../assets";
import Container from "../../Reusable/Container/Container";
import { Link } from "react-router-dom";
import Button from "../../Reusable/Button/Button";
import { handleScrollToServices } from "../../../helpers/handleScrollToServicesSection";

const FooterCTA = ({ setIsStartYourProjectModalOpen } : {setIsStartYourProjectModalOpen: React.Dispatch<React.SetStateAction<boolean>>}) => {
  return (
    <div className="relative h-100 font-medium overflow-hidden font-Manrope rounded-2xl">
      <img
        src={IMAGES.ctaBg2}
        alt=""
        className="w-full h-full absolute inset-0 object-cover"
      />

      <div className="absolute inset-0 flex items-center justify-center">
        <Container>
          <div className="text-center flex flex-col items-center justify-center">
            <h2 className="text-white text-center text-[28px] md:text-[40px] lg:text-[48px] font-semibold leading-9 md:leading-12 max-w-230 mx-auto">
              Ready to Build a System That Actually Grows Your Business?
            </h2>

            <p className="description text-white max-w-120 mx-auto mt-4 2xl:mt-6">
              We don't just build websites — we create systems that generate
              leads, automate operations, and help you scale faster.
            </p>

            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 mt-6">
              <Link to="/contact-us">
                <Button
                  onClick={() => setIsStartYourProjectModalOpen(true)}
                  variant="secondary"
                  label="Let's Get Started"
                  className="w-full md:w-fit"
                />
              </Link>
              <Button
                onClick={handleScrollToServices}
                variant="tertiary"
                label="See Our Services"
                className="w-full md:w-fit"
              />
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default FooterCTA;

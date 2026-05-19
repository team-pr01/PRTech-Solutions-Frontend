import { IMAGES } from "../../../assets";
import Button from "../Button/Button";
import Container from "../Container/Container";

const CTA = () => {
  return (
    <div className="relative h-170 font-medium overflow-hidden font-Manrope">
      <img
        src={IMAGES.ctaBg1}
        alt=""
        className="w-full h-full absolute inset-0 object-cover"
      />

      <div className="absolute inset-0 flex items-center justify-center">
        <Container>
          <div className="text-center flex flex-col items-center justify-center">
            <h2 className="text-white text-center text-[48px] font-semibold leading-12 max-w-230 mx-auto">
              Ready to Build a System That Actually Grows Your Business?
            </h2>

            <p className="text-white font-Manrope leading-8 max-w-120 mx-auto font-normal mt-6">
              We don't just build websites — we create systems that generate
              leads, automate operations, and help you scale faster.
            </p>

            <div className="flex items-center justify-center gap-6 mt-6">
              <Button label="Let's Get Started" />
              <Button variant="tertiary" label="See Our Services" />
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default CTA;

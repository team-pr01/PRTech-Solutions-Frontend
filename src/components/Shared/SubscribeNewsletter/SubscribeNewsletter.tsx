import { IMAGES } from "../../../assets";
import Button from "../../Reusable/Button/Button";
import Container from "../../Reusable/Container/Container";

const SubscribeNewsletter = () => {
  return (
    <div
      className={`bg-gradient-our-work-hero-bg  relative h-140 font-medium overflow-hidden font-Manrope`}
    >
      <img
        src={IMAGES.blogsHeroImg}
        alt=""
        className="w-full h-full absolute"
      />

      <div className="absolute inset-0 flex items-center justify-center">
        <Container>
          <div className={`flex flex-col items-center justify-center`}>
            <h2
              className={`text-white text-3xl md:text-[40px] lg:text-[48px] font-semibold leading-9 md:leading-12 lg:leading-12 max-w-230`}
            >
              Stay Ahead of What's Next
            </h2>

            <p className={`text-white description max-w-150 mt-4 xl:mt-6`}>
              Get thoughtfully curated insights on technology, design, product
              development, and digital innovation delivered directly to your
              inbox.
            </p>

            <div
              className={`flex flex-col md:flex-row justify-center w-full gap-6 mt-6`}
            >
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full md:w-1/2 xl:w-1/3 py-1.5 lg:py-2 px-4 rounded-[30px] text-white placeholder:text-neutral-50 border border-neutral-50 focus:outline-none focus:border-primary-10 transition duration-300"
              />
              <Button
                label="Subscribe to Newsletter"
                variant={"secondary"}
                className="w-full md:w-fit"
              />
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default SubscribeNewsletter;

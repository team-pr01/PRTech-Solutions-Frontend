import { IMAGES } from "../../../assets";
import Button from "../../Reusable/Button/Button";
import Container from "../../Reusable/Container/Container";

const StartYourProject = () => {
  return (
    <div className="font-Manrope relative h-120 md:h-120 lg:h-140 bg-gradient-start-project">
      <Container>
        <div className="absolute top-1/2 -translate-y-1/2 md:-translate-y-1/2 z-10">
          <h2
            className={`text-white text-3xl md:text-[40px] lg:text-[48px] font-semibold leading-9 md:leading-12 lg:leading-12 max-w-100`}
          >
            Have <span className="text-primary-10">Something</span> Similar in
            Mind?
          </h2>
          <p className="text-white description mt-4 2xl:mt-6 max-w-160">
            Every project starts with understanding your business, not just
            requirements. Let’s figure out what the right system looks like for
            you.
          </p>

          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 mt-6 pr-5">
            <Button
              variant="secondary"
              label="Get Your Plan"
              className="w-full md:w-fit"
            />
            <Button
              variant="tertiary"
              label="Discuss Project"
              className="w-full md:w-fit"
            />
          </div>
        </div>

        <img
          src={IMAGES.startYourProject}
          alt=""
          className="absolute bottom-0 right-0 w-full lg:w-1/2 h-fit lg:h-full hidden md:hidden lg:block"
        />

        <div className="size-100 rounded-full bg-primary-10/70 blur-[200px] absolute top-0 bottom-0"></div>
      </Container>
    </div>
  );
};

export default StartYourProject;

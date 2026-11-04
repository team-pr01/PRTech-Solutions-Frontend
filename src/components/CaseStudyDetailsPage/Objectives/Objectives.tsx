import { ICONS, IMAGES } from "../../../assets";
import Container from "../../Reusable/Container/Container";

const Objectives = () => {
  const objectives = [
    {
      title: "Build a scalable digital platform for tutor-guardian matching",
      icon: ICONS.digitalPlatform,
    },
    {
      title: "Increase registrations and job flow",
      icon: ICONS.userRegistration,
    },
    {
      title: "Reduce manual operational work",
      icon: ICONS.robotAssistant,
    },
    {
      title: "Create a structured hiring pipeline",
      icon: ICONS.hiringPipeline,
    },
  ];
  return (
    <div className="relative h-fit font-Manrope overflow-x-auto bg-neutral-20">
      <img
        src={IMAGES.objectiveBg}
        alt="hero-bg"
        className="w-full h-full absolute inset-0 object-cover"
      />

      <div className="relative z-10 py-12 md:py-18 2xl:py-25">
        <Container>
          <div className="text-center">
            <div className="flex items-center justify-center gap-2">
              <div className="size-4 rounded-full border-2 border-primary-10 flex items-center justify-center">
                <div className="size-1.5 rounded-full bg-primary-10"></div>
              </div>
              <p className="text-white subHeading">Objectives</p>
            </div>

            <h2 className="heading text-white text-center max-w-262 mx-auto mt-2.5">
              We Defined{" "}
              <span className="font-Playfair-Display italic font-medium">
                Success
              </span>{" "}
              <span className="text-primary-10">As</span>
            </h2>

            <p className="description text-base max-w-160 leading-7 mx-auto mt-4 2xl:mt-6">
              We defined success as a measurable shift: more registrations, less
              manual work, and a system that could grow without adding people at
              every stage.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10 mt-10">
            {objectives?.map((objective, index) => (
              <div
                key={index}
                className="p-10 bg-primary-60 border border-neutral-76 rounded-[20px] backdrop:blur-[25px] relative overflow-hidden h-50 flex flex-col justify-between"
              >
                <div className="bg-primary-65/50 blur-[100px] rounded-full w-200 h-100 absolute " />
                <h4 className="text-white text-[28px] font-medium leading-11 mb-16 relative">
                  {objective?.title}
                </h4>

                <img
                  src={objective?.icon}
                  alt=""
                  className="size-30 absolute -bottom-5 right-10 rotate-[-10deg]"
                />
              </div>
            ))}
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Objectives;

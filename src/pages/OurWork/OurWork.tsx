import { useNavigate } from "react-router-dom";
import { IMAGES } from "../../assets";
// import Testimonials from "../../components/Homepage/Testimonials/Testimonials";
import AllProjects from "../../components/OurWorkPage/AllProjects/AllProjects";
import OurExpertise from "../../components/OurWorkPage/OurExpertise/OurExpertise";
import OurWorkHero from "../../components/OurWorkPage/OurWorkHero/OurWorkHero";
import CTA from "../../components/Reusable/CTA/CTA";
import StartYourProject from "../../components/Shared/StartYourProject/StartYourProject";

const OurWork = () => {
  const navigate = useNavigate();
  return (
    <div>
      <OurWorkHero />
      <AllProjects />
      <StartYourProject/>
      {/* <Testimonials /> */}
      <OurExpertise />
      <CTA
        title="Have Something Custom in Mind, But Not Sure Where to Start?"
        description="Every project you’ve seen here started as an idea — often unclear, unstructured, or difficult to execute. We help turn those ideas into well-defined systems and build them the right way."
        primaryButton={{
          label: "Talk to Us About Your Idea",
          onClick: () => navigate("/contact-us"),
          variant: "primary",
        }}
        secondaryButton={{
          label: "Get Your Strategy Plan",
          onClick: () => navigate("/contact-us"),
          variant: "tertiary",
        }}
        backgroundImage={IMAGES.ctaBg4}
        className="bg-neutral-16"
        contentAlignment="left"
      />
    </div>
  );
};

export default OurWork;

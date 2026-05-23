import { IMAGES } from "../../assets";
import Testimonials from "../../components/Homepage/Testimonials/Testimonials";
import AllProjects from "../../components/OurWorkPage/AllProjects/AllProjects";
import OurExpertise from "../../components/OurWorkPage/OurExpertise/OurExpertise";
import OurWorkHero from "../../components/OurWorkPage/OurWorkHero/OurWorkHero";
import CTA from "../../components/Reusable/CTA/CTA";

const OurWork = () => {
  return (
    <div>
      <OurWorkHero />
      <AllProjects />
      <CTA
        title="Have Something Similar in Mind?"
        description="Every project starts with understanding your business, not just requirements. Let’s figure out what the right system looks like for you."
        primaryButton={{
          label: "Get Your Strategy Plan",
          onClick: () => console.log("Get Started clicked"),
          variant: "primary",
        }}
        secondaryButton={{
          label: "Discuss Your Project",
          onClick: () => console.log("See Services clicked"),
          variant: "tertiary",
        }}
        backgroundImage={IMAGES.ctaBg3}
        className="bg-neutral-16"
      />
      <Testimonials />
      <OurExpertise />
      <CTA
        title="Have Something Custom in Mind, But Not Sure Where to Start?"
        description="Every project you’ve seen here started as an idea — often unclear, unstructured, or difficult to execute. We help turn those ideas into well-defined systems and build them the right way."
        primaryButton={{
          label: "Talk to Us About Your Idea",
          onClick: () => console.log("Get Started clicked"),
          variant: "primary",
        }}
        secondaryButton={{
          label: "Get Your Strategy Plan",
          onClick: () => console.log("See Services clicked"),
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

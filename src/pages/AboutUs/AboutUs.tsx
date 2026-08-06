import { useNavigate } from "react-router-dom";
import { IMAGES } from "../../assets";
import AboutUsHero from "../../components/AboutUsPage/AboutUsHero/AboutUsHero";
import FeaturedCaseStudies from "../../components/AboutUsPage/FeaturedCaseStudies/FeaturedCaseStudies";
import OurAchievements from "../../components/AboutUsPage/OurAchievements/OurAchievements";
import CTA from "../../components/Reusable/CTA/CTA";

const AboutUs = () => {
  const navigate = useNavigate();
  return (
    <div>
      <AboutUsHero />
      <OurAchievements />
      <CTA
        backgroundImage={IMAGES.ctaBg5}
        title="Let’s Turn Your Idea Into a Scalable Product"
        description="We don’t just build websites — we create systems that generate leads, automate operations, and help you scale faster."
        primaryButton={{
          label: "Start Your Project",
          onClick: () => navigate("/contact-us"),
          variant: "secondary",
        }}
      />
      
      <FeaturedCaseStudies />
    </div>
  );
};

export default AboutUs;

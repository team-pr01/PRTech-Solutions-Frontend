import { useNavigate } from "react-router-dom";
import AboutUs from "../../components/Homepage/AboutUs/AboutUs";
import AiPoweredSolutions from "../../components/Homepage/AiPoweredSolutions/AiPoweredSolutions";
import Comparison from "../../components/Homepage/Comparison/Comparison";
import Hero from "../../components/Homepage/Hero/Hero";
import HomeFaq from "../../components/Homepage/HomeFaq/HomeFaq";
import Industries from "../../components/Homepage/Industries/Industries";
import LatestProjects from "../../components/Homepage/LatestProjects/LatestProjects";
import Services from "../../components/Homepage/Services/Services";
import Testimonials from "../../components/Homepage/Testimonials/Testimonials";
import CTA from "../../components/Reusable/CTA/CTA";
import { handleScrollToServices } from "../../helpers/handleScrollToServicesSection";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Hero />
      <AboutUs />
      <Services />
      <LatestProjects />
      <Comparison />
      <Industries />
      <CTA
        title="Ready to Build a System That Actually Grows Your Business?"
        description="We don't just build websites — we create systems that generate leads, automate operations, and help you scale faster."
        primaryButton={{
          label: "Let's Get Started",
          onClick: () => navigate("/contact-us"),
          variant: "secondary",
        }}
        secondaryButton={{
          label: "See Our Services",
          onClick: handleScrollToServices,
          variant: "tertiary",
        }}
      />
      <Testimonials />
      <AiPoweredSolutions />
      <HomeFaq />
    </div>
  );
};

export default Home;

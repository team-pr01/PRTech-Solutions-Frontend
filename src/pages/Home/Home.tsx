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

const Home = () => {
  return (
    <div>
      <Hero />
      <AboutUs/>
      <Services/>
      <LatestProjects/>
      <Comparison/>
      <Industries/>
      <CTA/>
      <Testimonials/>
      <AiPoweredSolutions/>
      <HomeFaq/>
    </div>
  );
};

export default Home;

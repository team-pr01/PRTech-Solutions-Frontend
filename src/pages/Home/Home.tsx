import AboutUs from "../../components/Homepage/AboutUs/AboutUs";
import Comparison from "../../components/Homepage/Comparison/Comparison";
import Hero from "../../components/Homepage/Hero/Hero";
import Industries from "../../components/Homepage/Industries/Industries";
import LatestProjects from "../../components/Homepage/LatestProjects/LatestProjects";
import Services from "../../components/Homepage/Services/Services";
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
    </div>
  );
};

export default Home;

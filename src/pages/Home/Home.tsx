import AboutUs from "../../components/Homepage/AboutUs/AboutUs";
import Comparison from "../../components/Homepage/Comparison/Comparison";
import Hero from "../../components/Homepage/Hero/Hero";
import Industries from "../../components/Homepage/Industries/Industries";
import LatestProjects from "../../components/Homepage/LatestProjects/LatestProjects";
import Services from "../../components/Homepage/Services/Services";

const Home = () => {
  return (
    <div>
      <Hero />
      <AboutUs/>
      <Services/>
      <LatestProjects/>
      <Comparison/>
      <Industries/>
    </div>
  );
};

export default Home;

import AboutUs from "../../components/Homepage/AboutUs/AboutUs";
import Comparison from "../../components/Homepage/Comparison/Comparison";
import Hero from "../../components/Homepage/Hero/Hero";
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
    </div>
  );
};

export default Home;

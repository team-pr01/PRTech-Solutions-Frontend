import AboutUs from "../../components/Homepage/AboutUs/AboutUs";
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
    </div>
  );
};

export default Home;

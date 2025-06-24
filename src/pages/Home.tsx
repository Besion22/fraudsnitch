import Faq from "../components/EducationPage/Faq";
import HomeEducation from "../components/HomePage/HomeEducation";
import HomeHero from "../components/HomePage/HomeHero";
import HomeNewsroom from "../components/HomePage/HomeNewsRoom";

const Home = () => {
  return (
    <>
      <HomeHero />
      <HomeEducation />
      <HomeNewsroom />
      <Faq />
    </>
  );
};

export default Home;

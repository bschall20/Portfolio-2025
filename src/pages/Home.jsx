import HomeSectionIntro from "../components/HomeSections/HomeSectionIntro.jsx"
import HomeSectionProjects from "../components/HomeSections/HomeSectionProjects.jsx";
import HomeSectionAbilities from "../components/HomeSections/HomeSectionAbilities.jsx";
import HomeSectionContact from "../components/HomeSections/HomeSectionContact.jsx";

const Home = () => {

  return (
    <div id="home" className="center">
      < HomeSectionIntro />
      < HomeSectionProjects />
      < HomeSectionAbilities />
      < HomeSectionContact />
    </div>
  );
};

export default Home;

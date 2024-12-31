// import family from "../images/family.jpg";
// import blob from "../images/blob.svg"
// import React, {useEffect} from "react";
import { IoIosSend } from "react-icons/io";
import { RiScrollToBottomFill } from "react-icons/ri";

// SKILLS:
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { DiPostgresql } from "react-icons/di";
import { FaBootstrap } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { DiJqueryLogo } from "react-icons/di";
import { TbApi } from "react-icons/tb";
import { DiResponsive } from "react-icons/di";
import { FaGitAlt } from "react-icons/fa6";

// TOOLS:
import { VscVscodeInsiders } from "react-icons/vsc";
import { BiLogoPostgresql } from "react-icons/bi";
import { IoLogoFirebase } from "react-icons/io5";
import { FaGithubSquare } from "react-icons/fa";
import { FiChrome } from "react-icons/fi";
import { SiKinsta } from "react-icons/si";

const Home = () => {
  return (
    <div id="home" className="center">
      <section className="homeIntro center">
        <div className="homeIntroL">
          <h1>Hello! I'm Brennan.</h1>
          <p className="homeIntroTitle">Frontend Developer</p>
          <p className="homeIntroParagraph">
            Self-taught developer that excels in communication and working in
            teams with a desire of being a <span>Full Stack Developer.</span>
          </p>
          {/* <button className="contactMeBtn">Contact Me</button> */}
          <a class="contactMeBtn" href="/">
            Contact Me <IoIosSend className="contactMeBtnIcon" />
          </a>

          <p className="scrollDown">
            <RiScrollToBottomFill className="scrollDownIcon" /> Scroll Down
          </p>
        </div>

        <div className="homeIntroR center">
          <div className="wrapper">
            <div className="box">{/* image of self is here */}</div>
          </div>

          {/* <img src={family} alt="Brennan Schall" /> */}
        </div>
      </section>






      <section className="homeProjects">
        <h2>Home Projects</h2>
      </section>






      <section className="homeAbilities center">
        <h2>My Abilities</h2>
        <h3>My <span className="abilityTitle">Skills</span></h3>
        <div className="skillsSection center">
          <div className="skillsToolLogo">
            <FaHtml5 className="HTML" />
          </div>
          <div className="skillsToolLogo">
            <FaCss3Alt className="CSS" />
          </div>
          <div className="skillsToolLogo">
            <IoLogoJavascript className="JavaScript" />
          </div>
          <div className="skillsToolLogo">
            <FaReact className="React" />
          </div>
          <div className="skillsToolLogo">
            <DiPostgresql className="Postgresql" />
          </div>
          <div className="skillsToolLogo">
            <FaBootstrap className="Bootstrap" />
          </div>
          <div className="skillsToolLogo">
            <FaNodeJs className="NodeJS" />
          </div>
          <div className="skillsToolLogo">
            <SiExpress className="ExpressJS" />
          </div>
          <div className="skillsToolLogo">
            <DiJqueryLogo className="JQuery" />
          </div>
          <div className="skillsToolLogo">
            <TbApi className="RESTfulAPI" />
          </div>
          <div className="skillsToolLogo">
            <DiResponsive className="Responsive" />
          </div>
          <div className="skillsToolLogo">
            <FaGitAlt className="Git" />
          </div>
        </div>

        <h3><span className="abilityTitle">Tools</span> I Use</h3>
        <div className="toolsSection center">
          <div className="skillsToolLogo">
            <VscVscodeInsiders className="VSCode" />
          </div>
          <div className="skillsToolLogo">
            <BiLogoPostgresql className="PGAdmin" />
          </div>
          <div className="skillsToolLogo">
            <IoLogoFirebase className="Firebase" />
          </div>
          <div className="skillsToolLogo">
            <FaGithubSquare className="Github" />
          </div>
          <div className="skillsToolLogo">
            <FiChrome className="ChromeDev" />
          </div>
          <div className="skillsToolLogo">
            <SiKinsta className="Kinsta" />
          </div>
        </div>
      </section>

      <section className="homeContact">
        <p>Home Contact</p>
      </section>
    </div>
  );
};

export default Home;

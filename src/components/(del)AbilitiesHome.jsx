import React, { useState } from "react";
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


const AbilitiesHome = () => {

    const [skill, setSkill] = useState()
    const HoverSkill = (hoveredSkill) => {
      setSkill(hoveredSkill)
     }


    return <section className="homeAbilities center">
            <h2>My Abilities</h2>
            <h3>Obtained <span className="abilityTitle">Skills</span></h3>
            <div className="skillsSection center">
    
              <div className="skillsToolLogo HTML" onMouseEnter={() => HoverSkill('HTML')} onMouseLeave={() => HoverSkill()}>
                <h4 style={{color: "#EA6228"}} className={skill === "HTML" ? "skillTitle" : "hidden"}>{skill}</h4>
                <FaHtml5 />
              </div>
              <div className="skillsToolLogo CSS" onMouseEnter={() => HoverSkill('CSS')} onMouseLeave={() => HoverSkill()}>
                <h4 style={{color: "#29A4D9"}} className={skill === "CSS" ? "skillTitle" : "hidden"}>{skill}</h4>
                <FaCss3Alt />
              </div>
              <div className="skillsToolLogo JavaScript" onMouseEnter={() => HoverSkill('JavaScript')} onMouseLeave={() => HoverSkill()}>
                <h4 style={{color: "#F0DC4E"}} className={skill === "JavaScript" ? "skillTitle" : "hidden"}>{skill}</h4>
                <IoLogoJavascript />
              </div>
              <div className="skillsToolLogo React" onMouseEnter={() => HoverSkill('React')} onMouseLeave={() => HoverSkill()}>
                <h4 style={{color: "#61DBFB"}} className={skill === "React" ? "skillTitle" : "hidden"}>{skill}</h4>
                <FaReact />
              </div>
              <div className="skillsToolLogo Postgresql" onMouseEnter={() => HoverSkill('Postgresql')} onMouseLeave={() => HoverSkill()}>
                <h4 style={{color: "#31648C"}} className={skill === "Postgresql" ? "skillTitle" : "hidden"}>{skill}</h4>
                <DiPostgresql />
              </div>
              <div className="skillsToolLogo Bootstrap" onMouseEnter={() => HoverSkill('Bootstrap')} onMouseLeave={() => HoverSkill()}>
                <h4 style={{color: "#8311F6"}} className={skill === "Bootstrap" ? "skillTitle" : "hidden"}>{skill}</h4>
                <FaBootstrap />
              </div>
              <div className="skillsToolLogo NodeJS" onMouseEnter={() => HoverSkill('NodeJS')} onMouseLeave={() => HoverSkill()}>
                <h4 style={{color: "#529F41"}} className={skill === "NodeJS" ? "skillTitle" : "hidden"}>{skill}</h4>
                <FaNodeJs />
              </div>
              <div className="skillsToolLogo ExpressJS" onMouseEnter={() => HoverSkill('ExpressJS')} onMouseLeave={() => HoverSkill()}>
                <h4 style={{color: "#485660"}} className={skill === "ExpressJS" ? "skillTitle" : "hidden"}>{skill}</h4>
                <SiExpress />
              </div>
              <div className="skillsToolLogo JQuery" onMouseEnter={() => HoverSkill('JQuery')} onMouseLeave={() => HoverSkill()}>
                <h4 style={{color: "#076FAE"}} className={skill === "JQuery" ? "skillTitle" : "hidden"}>{skill}</h4>
                <DiJqueryLogo />
              </div>
              <div className="skillsToolLogo RESTfulAPI" onMouseEnter={() => HoverSkill('RESTfulAPI')} onMouseLeave={() => HoverSkill()}>
                <h4 style={{color: "#01B5E6"}} className={skill === "RESTfulAPI" ? "skillTitle" : "hidden"}>{skill}</h4>
                <TbApi />
              </div>
              <div className="skillsToolLogo Responsive" onMouseEnter={() => HoverSkill('Responsive')} onMouseLeave={() => HoverSkill()}>
                <h4 style={{color: "#000000"}} className={skill === "Responsive" ? "skillTitle" : "hidden"}>{skill}</h4>
                <DiResponsive />
              </div>
              <div className="skillsToolLogo Git" onMouseEnter={() => HoverSkill('Git')} onMouseLeave={() => HoverSkill()}>
                <h4 style={{color: "#F05033"}} className={skill === "Git" ? "skillTitle" : "hidden"}>{skill}</h4>
                <FaGitAlt />
              </div>
            </div>
    
    
            <h3><span className="abilityTitle">Tools</span> I Craft With</h3>
            <div className="toolsSection center">
              <div className="skillsToolLogo VSCode" onMouseEnter={() => HoverSkill('VSCode')} onMouseLeave={() => HoverSkill()}>
                <h4 style={{color: "#0A69A8"}} className={skill === "VSCode" ? "skillTitle" : "hidden"}>{skill}</h4>
                <VscVscodeInsiders />
              </div>
              <div className="skillsToolLogo PGAdmin" onMouseEnter={() => HoverSkill('PGAdmin')} onMouseLeave={() => HoverSkill()}>
                <h4 style={{color: "#31648C"}} className={skill === "PGAdmin" ? "skillTitle" : "hidden"}>{skill}</h4>
                <BiLogoPostgresql />
              </div>
              <div className="skillsToolLogo Firebase" onMouseEnter={() => HoverSkill('Firebase')} onMouseLeave={() => HoverSkill()}>
                <h4 style={{color: "#F3C540"}} className={skill === "Firebase" ? "skillTitle" : "hidden"}>{skill}</h4>
                <IoLogoFirebase />
              </div>
              <div className="skillsToolLogo Github" onMouseEnter={() => HoverSkill('Github')} onMouseLeave={() => HoverSkill()}>
                <h4 style={{color: "#1F2328"}} className={skill === "Github" ? "skillTitle" : "hidden"}>{skill}</h4>
                <FaGithubSquare />
              </div>
              <div className="skillsToolLogo ChromeDev" onMouseEnter={() => HoverSkill('Chrome Dev')} onMouseLeave={() => HoverSkill()}>
                <h4 style={{color: "#EA4335"}} className={skill === "Chrome Dev" ? "skillTitle" : "hidden"}>{skill}</h4>
                <FiChrome />
              </div>
              <div className="skillsToolLogo Kinsta" onMouseEnter={() => HoverSkill('Kinsta')} onMouseLeave={() => HoverSkill()}>
                <h4 style={{color: "#FF1D00"}} className={skill === "Kinsta" ? "skillTitle" : "hidden"}>{skill}</h4>
                <SiKinsta />
              </div>
            </div>
          </section>
}


export default AbilitiesHome;
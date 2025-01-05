// import React, { useState } from "react";
// import AbilitiesHome from "../components/AbilitiesHome";
import ProjectBox from "../components/ProjectBox";
import Projects from "../Projects.js"
import SkillToolCard from "../components/SkillToolCard";
import Skills from "../Skills.js";
import Tools from "../Tools.js";
import { IoIosSend } from "react-icons/io";
import { RiScrollToBottomFill } from "react-icons/ri";


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
          <a className="contactMeBtn" href="/">
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
        </div>
      </section>




      <section className="homeProjects center">
        <h2>My Projects</h2>
        <div className="projectsTop">
          {Projects.slice(0,2).map((dataObj) => {
            return (
              <ProjectBox
                id={dataObj.id}
                image={dataObj.image}
                alt={dataObj.alt}
                projectClass={dataObj.projectClass}
                title={dataObj.title}
                description={dataObj.description}
                skill1={dataObj.skill1}
                skill2={dataObj.skill2}
                skill3={dataObj.skill3}
                website={dataObj.website}
                github={dataObj.github}
              />
            );
          })}
        </div>
        <div className="projectsBottom">
          {Projects.slice(2,4).map((dataObj) => {
            return (
              <ProjectBox
                id={dataObj.id}
                image={dataObj.image}
                alt={dataObj.alt}
                projectClass={dataObj.projectClass}
                title={dataObj.title}
                description={dataObj.description}
                skill1={dataObj.skill1}
                skill2={dataObj.skill2}
                skill3={dataObj.skill3}
                website={dataObj.website}
                github={dataObj.github}
              />
            );
          })}
        </div>
      </section>




      {/* <AbilitiesHome /> */}
      <section className="homeAbilities center">
        <h2>My Abilities</h2>
        <h3>
          Obtained <span className="abilityTitle">Skills</span>
        </h3>
        <div className="skillsSection center">
          {Skills.map((dataObj) => {
            return (
              <SkillToolCard
                id={dataObj.id}
                name={dataObj.name}
                image={dataObj.image}
                color={dataObj.color}
              />
            );
          })}
        </div>
        <h3>
          <span className="abilityTitle">Tools</span> I Craft With
        </h3>
        <div className="toolsSection center">
          {Tools.map((dataObj) => {
            return (
              <SkillToolCard
                id={dataObj.id}
                name={dataObj.name}
                image={dataObj.image}
                color={dataObj.color}
              />
            );
          })}
        </div>
      </section>

      <section className="homeContact">
        <p>Home Contact</p>
      </section>
    </div>
  );
};

export default Home;

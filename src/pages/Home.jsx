// import React, { useState } from "react";
// import AbilitiesHome from "../components/AbilitiesHome";
import ProjectBox from "../components/ProjectBox";
import Projects from "../Projects.js"
import SkillToolCard from "../components/SkillToolCard";
import Skills from "../Skills.js";
import Tools from "../Tools.js";
import ContactMe from "../components/ContactMe.jsx"
import { IoIosSend } from "react-icons/io";
import { RiScrollToBottomFill } from "react-icons/ri";

import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

import { motion } from "motion/react"

const Home = () => {

  return (
    <div id="home" className="center">
      <section className="homeIntro center">
        <div className="homeIntroL">
          <h1>Hello, World! I'm Brennan.</h1>
          <p className="homeIntroTitle">Frontend Developer</p>
          <p className="homeIntroParagraph">
            Self-taught developer that excels in communication and working in
            teams with a desire of being a <span>Full Stack Developer.</span>
          </p>
          <a className="contactMeBtn" href="#homeContact">
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
        <motion.div className="projectsTop"
          // initial={{ opacity: 0, x: 800 }}
          // whileInView={{ opacity: 1, x: 0 }}
          // transition={{ duration: 2, delay: 0 }}
          // viewport={{ once: true }}
        >
          {Projects.slice(0,1).map((dataObj, index) => {
            return (
              <motion.div
              key={index}
              initial={{ opacity: 0, x: -200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0 }}
              viewport={{ once: true }}
              >
              <ProjectBox
              key={index}
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
              </motion.div>
            );
          })}
          {Projects.slice(1,2).map((dataObj, index) => {
            return (
              <motion.div
              key={index}
              initial={{ opacity: 0, x: 200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0 }}
              viewport={{ once: true }}
              >
              <ProjectBox
              key={index}
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
              </motion.div>
            );
          })}
        </motion.div>
        <div className="projectsBottom">
        {Projects.slice(2,3).map((dataObj, index) => {
            return (
              <motion.div
              key={index}
              initial={{ opacity: 0, x: -200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0 }}
              viewport={{ once: true }}
              >
              <ProjectBox
              key={index}
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
              </motion.div>
            );
          })}
          {Projects.slice(3,4).map((dataObj, index) => {
            return (
              <motion.div
              key={index}
              initial={{ opacity: 0, x: 200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0 }}
              viewport={{ once: true }}
              >
              <ProjectBox
              key={index}
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
              </motion.div>
            );
          })}
        </div>
      </section>




      {/* <AbilitiesHome /> */}
      <section className="homeAbilities center">
        {/* <h2>My Abilities</h2> */}
        <h2>Skills and Toolset</h2>
        {/* <h3>
          Obtained <span className="abilityTitle">Skills</span>
        </h3> */}
        <motion.div className="skillsSection center"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0 }}
            viewport={{ once: true }}
        >
          {Skills.map((dataObj, index) => {
            return (
              <SkillToolCard
                key={index}
                id={dataObj.id}
                name={dataObj.name}
                image={dataObj.image}
                color={dataObj.color}
              />
            );
          })}
        </motion.div>
        {/* <h3>
          <span className="abilityTitle">Tools</span> I Craft With
        </h3> */}
        <hr className="abilitiesHR"/>
        <motion.div className="toolsSection center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0 }}
            viewport={{ once: true }}
        >
          {Tools.map((dataObj, index) => {
            return (
              <SkillToolCard
                key={index}
                id={dataObj.id}
                name={dataObj.name}
                image={dataObj.image}
                color={dataObj.color}
              />
            );
          })}
        </motion.div>
      </section>

      <section className="homeContact center" id="homeContact">
          {/* <h2>Contact</h2> */}
          <motion.div className="contactContent center"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0 }}
            viewport={{ once: true }}
          >
            <div className="contactInfo">
              <h2>Reach Out to Me!</h2>
              <p>If you ever want to meet up and discuss coding or other hobbies we share, please reach out to me! Send me a message here, or reach out on social media below!</p>
              <div className="socialIcons">
                <a href="https://www.github.com/bschall20" target="_blank" rel="noreferrer" className="socialIcon"><FaGithub /></a>
                <a href="https://www.linkedin.com/in/brennan-schall-36bb14139" target="_blank" rel="noreferrer" className="socialIcon"><FaLinkedinIn /></a>
                <a href="https://www.instagram.com/b_schall19" target="_blank" rel="noreferrer" className="socialIcon"><FaInstagram /></a>
              </div>
            </div>
            <div className="contactBoxes">
              <ContactMe />
            </div>
          </motion.div>
      </section>
    </div>
  );
};

export default Home;

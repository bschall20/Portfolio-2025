import ProjectBox from "../ProjectBox.jsx";
import Projects from "../../Projects.js"
import { motion } from "motion/react"


const HomeSectionProjects = () => {

return <section className="homeProjects center">
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
}


export default HomeSectionProjects;
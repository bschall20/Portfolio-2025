import SkillToolCard from "../SkillToolCard";
import Skills from "../../Skills.js";
import Tools from "../../Tools.js";
import { motion } from "motion/react"


const HomeSectionAbilities = () => {

    return <section className="homeAbilities center">
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
}


export default HomeSectionAbilities;
import ContactMe from "../ContactMe.jsx"
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

import { motion } from "motion/react"

const HomeSectionContact = () => {
    return <section className="homeContact center" id="homeContact">
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
}

export default HomeSectionContact;
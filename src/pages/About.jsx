import Brennan from "../images/Brennan.jpg";
import { motion } from "motion/react"

const About = () => {
  return (
    <div id="about">
      <h1>About</h1>
      <div className="aboutSections">
        <motion.div className="aboutText"
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0 }}
          viewport={{ once: true }}
        >
          <p>
            In 2020, I graduated from BGSU with a{" "}
            <span className="aboutHighlight">
              <a
                className="aboutLink"
                href="https://www.bgsu.edu/technology-architecture-and-applied-engineering/schools-and-departments/engineering-technologies/electronics-and-computer-engineering-technology.html"
              >
                Bachelor of Science in Electronics and Computer Engineering
                Technology (ECET).
              </a>
            </span>{" "}
            I used this to eventually end up in Nuclear Engineering doing math
            all day but learned I'd rather be making cool art projects with
            coding!
          </p>
          <p>
            I started my Web Development pursuit through{" "}
            <a
              className="aboutLink"
              href="https://www.udemy.com/course/the-complete-web-development-bootcamp/"
            >
              Udemy,
            </a>{" "}
            where I then went on to make my own projects that you see here! With a current focus on <span className="aboutHighlight">React Frontend projects</span>,
            I'd love to end up doing <span className="aboutHighlight">Full Stack Web Development</span> someday!
          </p>
          <p>
            When I'm not working, I enjoy{" "}
            <span className="aboutHighlight">working out,</span>{" "}
            <span className="aboutHighlight">playing video games,</span>{" "}
            <span className="aboutHighlight">hiking,</span> and{" "}
            <span className="aboutHighlight">playing guitar!</span> This year I
            hope to try out{" "}
            <span className="aboutHighlight">rock climbing!</span>
          </p>
          <p>
            Thank you for visiting my website! If you have any constructive
            feedback or just want to reach out, please feel free to do so!
          </p>
        </motion.div>
        <motion.div className="aboutImages center"
          initial={{ opacity: 0, x: 200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0 }}
          viewport={{ once: true }}
        >
          <img src={Brennan} alt="Brennan" className="aboutImage" />
        </motion.div>
      </div>
    </div>
  );
};

export default About;

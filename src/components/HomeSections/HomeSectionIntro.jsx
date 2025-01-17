import { IoIosSend } from "react-icons/io";
import { RiScrollToBottomFill } from "react-icons/ri";

const HomeSectionIntro = () => {

    return <section className="homeIntro center">
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
}

export default HomeSectionIntro;
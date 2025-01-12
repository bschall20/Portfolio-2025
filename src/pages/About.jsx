import Brennan from "../images/Brennan.jpg";

const About = () => {
  return (
    <div id="about">
      <h1>About</h1>
      <div className="aboutSections">
        <div className="aboutText">
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

          {/* <h2>Background</h2>
          <p>
            Growing up gaming, I have always been surrounded by technology and
            fascinated by it. I received my{" "}
            <span className="aboutHighlight">
              Bachelor of Science from BGSU
            </span>{" "}
            in{" "}
            <span className="aboutHighlight">
              <a
                className="aboutLink"
                href="https://www.bgsu.edu/technology-architecture-and-applied-engineering/schools-and-departments/engineering-technologies/electronics-and-computer-engineering-technology.html"
              >
                Electronics and Computer Engineering Technology (ECET)
              </a>
            </span>{" "}
            in the Spring of 2020. While on campus, I worked in ITS helping with
            tech support issues and worked my way into Dell + Apple computer
            repair. After graduation, I went from{" "}
            <span className="aboutHighlight">repairing circuit boards</span> to
            doing <span className="aboutHighlight">DCS Ladder Logic</span> and
            <span className="aboutHighlight">
              Instrument Control & Safety Systems Spec Sheets.
            </span>{" "}
            From Nuclear Engineering I decided to pursue Web Development where I
            can code and create art at the same time!
          </p>
          <br />
          <h2>Hobbies</h2>
          <p>
            When I'm not spending time asleep or working, I like to spend it
            playing <span className="aboutHighlight">video games</span> (current
            games are Old School RuneScape, Counter-Strike 2, Minecraft, Marvel
            Rivals, and Battlefield 4),
            <span className="aboutHighlight"> working out</span>,{" "}
            <span className="aboutHighlight">playing guitar</span>, and{" "}
            <span className="aboutHighlight">watching NFL or NHL</span>! This
            year I'm hoping to try{" "}
            <span className="aboutHighlight">rock climbing</span> at a gym for
            the first time. It seems challenging and rewarding at the same time,
            just like coding! Along with that, I would like to try to find an{" "}
            <span className="aboutHighlight">Ultimate Frisbee </span>
            club to join again just like I did in college. If any of these sound
            like you, feel free to reach out and message me!
          </p>
          <br />
          <h2>Why Do I Work?</h2>
          <p>
            Aside from my day to day living, I like to{" "}
            <span className="aboutHighlight">travel and see new areas </span>
            that are different than Northwest Ohio's flat corn and bean farms
            (go figure!). One of my recent adventures took me on a{" "}
            <span className="aboutHighlight">solo trip to Colorado</span>, which
            was absolutely stunning! Along with traveling, I like to{" "}
            <span className="aboutHighlight">meet new people</span> who are
            interested in the same things that I am. I'm very excited to find
            fellow developers to grow with and even communicate more outside of
            work with our hobbies!
          </p> */}
        </div>
        <div className="aboutImages center">
          <img src={Brennan} alt="Brennan" className="aboutImage" />
        </div>
      </div>
    </div>
  );
};

export default About;

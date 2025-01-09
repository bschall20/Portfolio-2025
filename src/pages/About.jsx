import Brennan from "../images/Brennan.jpg";

const About = () => {
  return (
    <div id="about">
      <h1>About</h1>
      <div className="aboutSections">
        <div className="aboutText">
          <h2>Hobbies</h2>
          <p>
            When I'm not spending time asleep or working, I like to spend it
            playing <span className="aboutHighlight">video games</span> (current
            games are Old School RuneScape, Counter-Strike 2, Minecraft, Marvel
            Rivals, and Battlefield 4),
            <span className="aboutHighlight">working out</span>,{" "}
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
            that are different than Northwest Ohio's flat corn and bean farms (go
            figure!). One of my recent adventures took me on a{" "}
            <span className="aboutHighlight">solo trip to Colorado</span>, which
            was absolutely stunning! Along with traveling, I like to{" "}
            <span className="aboutHighlight">meet new people</span> who are
            interested in the same things that I am. I'm very excited to find
            fellow developers to grow with and even communicate more outside of
            work with our hobbies!
          </p>
        </div>
        <div className="aboutImages">
          <img src={Brennan} alt="Brennan" className="aboutImage" />
        </div>
      </div>
    </div>
  );
};

export default About;

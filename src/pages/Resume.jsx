// import Resume2025 from "../documents/Resume 2025.pdf";
import Resume2025PNG from "../images/Resume.png";

const Resume = () => {
    return <div id="resume">
      <h1>Resume</h1>
      <div className="resumeDiv">
        {/* <embed src={Resume2025} className="resumeEmbed"></embed> */}
        <img src={Resume2025PNG} alt="Brennan Schall Resume" className="resumeImage" />
      </div>
    </div>;
  };
  
  export default Resume;
  
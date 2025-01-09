import Resume2025 from "../documents/Resume 2025.pdf";

const Resume = () => {
    return <div id="resume">
      <h1>Resume</h1>
      <div className="resumeDiv">
        <embed src={Resume2025} className="resumeEmbed"></embed>
      </div>
    </div>;
  };
  
  export default Resume;
  
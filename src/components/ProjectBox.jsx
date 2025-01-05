// import Apple from "../images/Apple.jpg"
// import Finance from "../images/Finance.jpg"
// import Graph from "../images/Graph.jpg"
// import Battleship from "../images/Battleship.jpg"

const ProjectBox = (props) => {
  return (
    <div className={`project project${props.id}`}>
      <img src={props.image} alt={props.alt} className={props.projectClass} />
      <div className="projectHover">
        <h3>{props.title}</h3>
        <p className="projectDescription">{props.description}</p>
        <div className="projectSkills">
          <p className="projectSkill">{props.skill1}</p>
          <p className="projectSkill">{props.skill2}</p>
          <p className="projectSkill">{props.skill3}</p>
        </div>
        <div className="projectLinks">
          <a
            href={props.website}
            target="_blank"
            rel="noreferrer"
            className="projectLink"
          >
            Website
          </a>
          <a
            href={props.github}
            target="_blank"
            rel="noreferrer"
            className="projectLink"
          >
            Github
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectBox;
